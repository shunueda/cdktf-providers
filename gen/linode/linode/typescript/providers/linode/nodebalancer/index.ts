// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodebalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Throttle connections per second (0-20). Set to 0 (zero) to disable throttling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#client_conn_throttle Nodebalancer#client_conn_throttle}
  */
  readonly clientConnThrottle?: number;
  /**
  * Throttle UDP sessions per second (0-20). Set to 0 (zero) to disable throttling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#client_udp_sess_throttle Nodebalancer#client_udp_sess_throttle}
  */
  readonly clientUdpSessThrottle?: number;
  /**
  * ID for the firewall you'd like to use with this NodeBalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#firewall_id Nodebalancer#firewall_id}
  */
  readonly firewallId?: number;
  /**
  * The label of the Linode NodeBalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#label Nodebalancer#label}
  */
  readonly label?: string;
  /**
  * The region where this NodeBalancer will be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#region Nodebalancer#region}
  */
  readonly region?: string;
  /**
  * An array of tags applied to this object. Tags are for organizational purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#tags Nodebalancer#tags}
  */
  readonly tags?: string[];
  /**
  * A list of VPCs to be assigned to this NodeBalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#vpcs Nodebalancer#vpcs}
  */
  readonly vpcs?: NodebalancerVpcs[] | cdktf.IResolvable;
}
export interface NodebalancerFirewallsInbound {
}

export function nodebalancerFirewallsInboundToTerraform(struct?: NodebalancerFirewallsInbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nodebalancerFirewallsInboundToHclTerraform(struct?: NodebalancerFirewallsInbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NodebalancerFirewallsInboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NodebalancerFirewallsInbound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodebalancerFirewallsInbound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getListAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getListAttribute('ipv6');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getStringAttribute('ports');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class NodebalancerFirewallsInboundList extends cdktf.ComplexList {

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
  public get(index: number): NodebalancerFirewallsInboundOutputReference {
    return new NodebalancerFirewallsInboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodebalancerFirewallsOutbound {
}

export function nodebalancerFirewallsOutboundToTerraform(struct?: NodebalancerFirewallsOutbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nodebalancerFirewallsOutboundToHclTerraform(struct?: NodebalancerFirewallsOutbound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NodebalancerFirewallsOutboundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NodebalancerFirewallsOutbound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodebalancerFirewallsOutbound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getListAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getListAttribute('ipv6');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getStringAttribute('ports');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class NodebalancerFirewallsOutboundList extends cdktf.ComplexList {

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
  public get(index: number): NodebalancerFirewallsOutboundOutputReference {
    return new NodebalancerFirewallsOutboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodebalancerFirewalls {
}

export function nodebalancerFirewallsToTerraform(struct?: NodebalancerFirewalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nodebalancerFirewallsToHclTerraform(struct?: NodebalancerFirewalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NodebalancerFirewallsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NodebalancerFirewalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodebalancerFirewalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // inbound - computed: true, optional: false, required: false
  private _inbound = new NodebalancerFirewallsInboundList(this, "inbound", false);
  public get inbound() {
    return this._inbound;
  }

  // inbound_policy - computed: true, optional: false, required: false
  public get inboundPolicy() {
    return this.getStringAttribute('inbound_policy');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // outbound - computed: true, optional: false, required: false
  private _outbound = new NodebalancerFirewallsOutboundList(this, "outbound", false);
  public get outbound() {
    return this._outbound;
  }

  // outbound_policy - computed: true, optional: false, required: false
  public get outboundPolicy() {
    return this.getStringAttribute('outbound_policy');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }
}

export class NodebalancerFirewallsList extends cdktf.ComplexList {

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
  public get(index: number): NodebalancerFirewallsOutputReference {
    return new NodebalancerFirewallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodebalancerTransfer {
}

export function nodebalancerTransferToTerraform(struct?: NodebalancerTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nodebalancerTransferToHclTerraform(struct?: NodebalancerTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NodebalancerTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NodebalancerTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodebalancerTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in - computed: true, optional: false, required: false
  public get in() {
    return this.getNumberAttribute('in');
  }

  // out - computed: true, optional: false, required: false
  public get out() {
    return this.getNumberAttribute('out');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class NodebalancerTransferList extends cdktf.ComplexList {

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
  public get(index: number): NodebalancerTransferOutputReference {
    return new NodebalancerTransferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodebalancerVpcs {
  /**
  * A CIDR range for the VPC's IPv4 addresses. The NodeBalancer sources IP addresses from this range when routing traffic to the backend VPC nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#ipv4_range Nodebalancer#ipv4_range}
  */
  readonly ipv4Range?: string;
  /**
  * Enables the use of a larger ipv4_range subnet for multiple NodeBalancers within the same VPC by allocating smaller /30 subnets for each NodeBalancer's backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#ipv4_range_auto_assign Nodebalancer#ipv4_range_auto_assign}
  */
  readonly ipv4RangeAutoAssign?: boolean | cdktf.IResolvable;
  /**
  * The ID of a subnet to assign to this NodeBalancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#subnet_id Nodebalancer#subnet_id}
  */
  readonly subnetId: number;
}

export function nodebalancerVpcsToTerraform(struct?: NodebalancerVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_range: cdktf.stringToTerraform(struct!.ipv4Range),
    ipv4_range_auto_assign: cdktf.booleanToTerraform(struct!.ipv4RangeAutoAssign),
    subnet_id: cdktf.numberToTerraform(struct!.subnetId),
  }
}


export function nodebalancerVpcsToHclTerraform(struct?: NodebalancerVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_range: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_range_auto_assign: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4RangeAutoAssign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.numberToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodebalancerVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodebalancerVpcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Range !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Range = this._ipv4Range;
    }
    if (this._ipv4RangeAutoAssign !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4RangeAutoAssign = this._ipv4RangeAutoAssign;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodebalancerVpcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Range = undefined;
      this._ipv4RangeAutoAssign = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Range = value.ipv4Range;
      this._ipv4RangeAutoAssign = value.ipv4RangeAutoAssign;
      this._subnetId = value.subnetId;
    }
  }

  // ipv4_range - computed: true, optional: true, required: false
  private _ipv4Range?: string; 
  public get ipv4Range() {
    return this.getStringAttribute('ipv4_range');
  }
  public set ipv4Range(value: string) {
    this._ipv4Range = value;
  }
  public resetIpv4Range() {
    this._ipv4Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RangeInput() {
    return this._ipv4Range;
  }

  // ipv4_range_auto_assign - computed: false, optional: true, required: false
  private _ipv4RangeAutoAssign?: boolean | cdktf.IResolvable; 
  public get ipv4RangeAutoAssign() {
    return this.getBooleanAttribute('ipv4_range_auto_assign');
  }
  public set ipv4RangeAutoAssign(value: boolean | cdktf.IResolvable) {
    this._ipv4RangeAutoAssign = value;
  }
  public resetIpv4RangeAutoAssign() {
    this._ipv4RangeAutoAssign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RangeAutoAssignInput() {
    return this._ipv4RangeAutoAssign;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class NodebalancerVpcsList extends cdktf.ComplexList {
  public internalValue? : NodebalancerVpcs[] | cdktf.IResolvable

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
  public get(index: number): NodebalancerVpcsOutputReference {
    return new NodebalancerVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer linode_nodebalancer}
*/
export class Nodebalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_nodebalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nodebalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nodebalancer to import
  * @param importFromId The id of the existing Nodebalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nodebalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_nodebalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/nodebalancer linode_nodebalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodebalancerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NodebalancerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_nodebalancer',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientConnThrottle = config.clientConnThrottle;
    this._clientUdpSessThrottle = config.clientUdpSessThrottle;
    this._firewallId = config.firewallId;
    this._label = config.label;
    this._region = config.region;
    this._tags = config.tags;
    this._vpcs.internalValue = config.vpcs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_conn_throttle - computed: true, optional: true, required: false
  private _clientConnThrottle?: number; 
  public get clientConnThrottle() {
    return this.getNumberAttribute('client_conn_throttle');
  }
  public set clientConnThrottle(value: number) {
    this._clientConnThrottle = value;
  }
  public resetClientConnThrottle() {
    this._clientConnThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnThrottleInput() {
    return this._clientConnThrottle;
  }

  // client_udp_sess_throttle - computed: true, optional: true, required: false
  private _clientUdpSessThrottle?: number; 
  public get clientUdpSessThrottle() {
    return this.getNumberAttribute('client_udp_sess_throttle');
  }
  public set clientUdpSessThrottle(value: number) {
    this._clientUdpSessThrottle = value;
  }
  public resetClientUdpSessThrottle() {
    this._clientUdpSessThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUdpSessThrottleInput() {
    return this._clientUdpSessThrottle;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // firewall_id - computed: false, optional: true, required: false
  private _firewallId?: number; 
  public get firewallId() {
    return this.getNumberAttribute('firewall_id');
  }
  public set firewallId(value: number) {
    this._firewallId = value;
  }
  public resetFirewallId() {
    this._firewallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
  }

  // firewalls - computed: true, optional: false, required: false
  private _firewalls = new NodebalancerFirewallsList(this, "firewalls", false);
  public get firewalls() {
    return this._firewalls;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // transfer - computed: true, optional: false, required: false
  private _transfer = new NodebalancerTransferList(this, "transfer", false);
  public get transfer() {
    return this._transfer;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // vpcs - computed: false, optional: true, required: false
  private _vpcs = new NodebalancerVpcsList(this, "vpcs", false);
  public get vpcs() {
    return this._vpcs;
  }
  public putVpcs(value: NodebalancerVpcs[] | cdktf.IResolvable) {
    this._vpcs.internalValue = value;
  }
  public resetVpcs() {
    this._vpcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcsInput() {
    return this._vpcs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_conn_throttle: cdktf.numberToTerraform(this._clientConnThrottle),
      client_udp_sess_throttle: cdktf.numberToTerraform(this._clientUdpSessThrottle),
      firewall_id: cdktf.numberToTerraform(this._firewallId),
      label: cdktf.stringToTerraform(this._label),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vpcs: cdktf.listMapper(nodebalancerVpcsToTerraform, false)(this._vpcs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_conn_throttle: {
        value: cdktf.numberToHclTerraform(this._clientConnThrottle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_udp_sess_throttle: {
        value: cdktf.numberToHclTerraform(this._clientUdpSessThrottle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firewall_id: {
        value: cdktf.numberToHclTerraform(this._firewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpcs: {
        value: cdktf.listMapperHcl(nodebalancerVpcsToHclTerraform, false)(this._vpcs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodebalancerVpcsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
