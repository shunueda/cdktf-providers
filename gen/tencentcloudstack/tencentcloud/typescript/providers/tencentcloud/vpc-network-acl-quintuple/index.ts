// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcNetworkAclQuintupleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#id VpcNetworkAclQuintuple#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network ACL instance ID. For example:acl-12345678.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#network_acl_id VpcNetworkAclQuintuple#network_acl_id}
  */
  readonly networkAclId: string;
  /**
  * network_acl_quintuple_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#network_acl_quintuple_set VpcNetworkAclQuintuple#network_acl_quintuple_set}
  */
  readonly networkAclQuintupleSet: VpcNetworkAclQuintupleNetworkAclQuintupleSet;
}
export interface VpcNetworkAclQuintupleNetworkAclQuintupleSetEgress {
  /**
  * Action, ACCEPT or DROP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#action VpcNetworkAclQuintuple#action}
  */
  readonly action?: string;
  /**
  * Creation time, used as an output parameter of DescribeNetworkAclQuintupleEntries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#create_time VpcNetworkAclQuintuple#create_time}
  */
  readonly createTime?: string;
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#description VpcNetworkAclQuintuple#description}
  */
  readonly description?: string;
  /**
  * Destination CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#destination_cidr VpcNetworkAclQuintuple#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * Destination port (all, single port, range). When Protocol is ALL or ICMP, Port cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#destination_port VpcNetworkAclQuintuple#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Direction, INGRESS or EGRESS, is used as an output parameter of DescribeNetworkAclQuintupleEntries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#network_acl_direction VpcNetworkAclQuintuple#network_acl_direction}
  */
  readonly networkAclDirection?: string;
  /**
  * Unique ID of a network ACL entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#network_acl_quintuple_entry_id VpcNetworkAclQuintuple#network_acl_quintuple_entry_id}
  */
  readonly networkAclQuintupleEntryId?: string;
  /**
  * Priority, starting from 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#priority VpcNetworkAclQuintuple#priority}
  */
  readonly priority?: number;
  /**
  * Protocol, value: TCP,UDP, ICMP, ALL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#protocol VpcNetworkAclQuintuple#protocol}
  */
  readonly protocol?: string;
  /**
  * Source CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#source_cidr VpcNetworkAclQuintuple#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * Source port (all, single port, range). When Protocol is ALL or ICMP, Port cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#source_port VpcNetworkAclQuintuple#source_port}
  */
  readonly sourcePort?: string;
}

export function vpcNetworkAclQuintupleNetworkAclQuintupleSetEgressToTerraform(struct?: VpcNetworkAclQuintupleNetworkAclQuintupleSetEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    create_time: cdktf.stringToTerraform(struct!.createTime),
    description: cdktf.stringToTerraform(struct!.description),
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    network_acl_direction: cdktf.stringToTerraform(struct!.networkAclDirection),
    network_acl_quintuple_entry_id: cdktf.stringToTerraform(struct!.networkAclQuintupleEntryId),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_cidr: cdktf.stringToTerraform(struct!.sourceCidr),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function vpcNetworkAclQuintupleNetworkAclQuintupleSetEgressToHclTerraform(struct?: VpcNetworkAclQuintupleNetworkAclQuintupleSetEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_acl_direction: {
      value: cdktf.stringToHclTerraform(struct!.networkAclDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_acl_quintuple_entry_id: {
      value: cdktf.stringToHclTerraform(struct!.networkAclQuintupleEntryId),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcNetworkAclQuintupleNetworkAclQuintupleSetEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcNetworkAclQuintupleNetworkAclQuintupleSetEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidr = this._destinationCidr;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._networkAclDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAclDirection = this._networkAclDirection;
    }
    if (this._networkAclQuintupleEntryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAclQuintupleEntryId = this._networkAclQuintupleEntryId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidr = this._sourceCidr;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcNetworkAclQuintupleNetworkAclQuintupleSetEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._createTime = undefined;
      this._description = undefined;
      this._destinationCidr = undefined;
      this._destinationPort = undefined;
      this._networkAclDirection = undefined;
      this._networkAclQuintupleEntryId = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._sourceCidr = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._createTime = value.createTime;
      this._description = value.description;
      this._destinationCidr = value.destinationCidr;
      this._destinationPort = value.destinationPort;
      this._networkAclDirection = value.networkAclDirection;
      this._networkAclQuintupleEntryId = value.networkAclQuintupleEntryId;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._sourceCidr = value.sourceCidr;
      this._sourcePort = value.sourcePort;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_cidr - computed: false, optional: true, required: false
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  public resetDestinationCidr() {
    this._destinationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // network_acl_direction - computed: false, optional: true, required: false
  private _networkAclDirection?: string; 
  public get networkAclDirection() {
    return this.getStringAttribute('network_acl_direction');
  }
  public set networkAclDirection(value: string) {
    this._networkAclDirection = value;
  }
  public resetNetworkAclDirection() {
    this._networkAclDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclDirectionInput() {
    return this._networkAclDirection;
  }

  // network_acl_quintuple_entry_id - computed: false, optional: true, required: false
  private _networkAclQuintupleEntryId?: string; 
  public get networkAclQuintupleEntryId() {
    return this.getStringAttribute('network_acl_quintuple_entry_id');
  }
  public set networkAclQuintupleEntryId(value: string) {
    this._networkAclQuintupleEntryId = value;
  }
  public resetNetworkAclQuintupleEntryId() {
    this._networkAclQuintupleEntryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclQuintupleEntryIdInput() {
    return this._networkAclQuintupleEntryId;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_cidr - computed: false, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}

export class VpcNetworkAclQuintupleNetworkAclQuintupleSetEgressList extends cdktf.ComplexList {
  public internalValue? : VpcNetworkAclQuintupleNetworkAclQuintupleSetEgress[] | cdktf.IResolvable

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
  public get(index: number): VpcNetworkAclQuintupleNetworkAclQuintupleSetEgressOutputReference {
    return new VpcNetworkAclQuintupleNetworkAclQuintupleSetEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcNetworkAclQuintupleNetworkAclQuintupleSetIngress {
  /**
  * Action, ACCEPT or DROP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#action VpcNetworkAclQuintuple#action}
  */
  readonly action?: string;
  /**
  * Creation time, used as an output parameter of DescribeNetworkAclQuintupleEntries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#create_time VpcNetworkAclQuintuple#create_time}
  */
  readonly createTime?: string;
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#description VpcNetworkAclQuintuple#description}
  */
  readonly description?: string;
  /**
  * Destination CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#destination_cidr VpcNetworkAclQuintuple#destination_cidr}
  */
  readonly destinationCidr?: string;
  /**
  * Destination port (all, single port, range). When Protocol is ALL or ICMP, Port cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#destination_port VpcNetworkAclQuintuple#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Direction, INGRESS or EGRESS, is used as an output parameter of DescribeNetworkAclQuintupleEntries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#network_acl_direction VpcNetworkAclQuintuple#network_acl_direction}
  */
  readonly networkAclDirection?: string;
  /**
  * Unique ID of a network ACL entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#network_acl_quintuple_entry_id VpcNetworkAclQuintuple#network_acl_quintuple_entry_id}
  */
  readonly networkAclQuintupleEntryId?: string;
  /**
  * Priority, starting from 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#priority VpcNetworkAclQuintuple#priority}
  */
  readonly priority?: number;
  /**
  * Protocol, value: TCP,UDP, ICMP, ALL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#protocol VpcNetworkAclQuintuple#protocol}
  */
  readonly protocol?: string;
  /**
  * 源CIDR。.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#source_cidr VpcNetworkAclQuintuple#source_cidr}
  */
  readonly sourceCidr?: string;
  /**
  * source port (all, single port, range). When the protocol is ALL or ICMP, the port cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#source_port VpcNetworkAclQuintuple#source_port}
  */
  readonly sourcePort?: string;
}

export function vpcNetworkAclQuintupleNetworkAclQuintupleSetIngressToTerraform(struct?: VpcNetworkAclQuintupleNetworkAclQuintupleSetIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    create_time: cdktf.stringToTerraform(struct!.createTime),
    description: cdktf.stringToTerraform(struct!.description),
    destination_cidr: cdktf.stringToTerraform(struct!.destinationCidr),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    network_acl_direction: cdktf.stringToTerraform(struct!.networkAclDirection),
    network_acl_quintuple_entry_id: cdktf.stringToTerraform(struct!.networkAclQuintupleEntryId),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_cidr: cdktf.stringToTerraform(struct!.sourceCidr),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function vpcNetworkAclQuintupleNetworkAclQuintupleSetIngressToHclTerraform(struct?: VpcNetworkAclQuintupleNetworkAclQuintupleSetIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.destinationCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.stringToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_acl_direction: {
      value: cdktf.stringToHclTerraform(struct!.networkAclDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_acl_quintuple_entry_id: {
      value: cdktf.stringToHclTerraform(struct!.networkAclQuintupleEntryId),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcNetworkAclQuintupleNetworkAclQuintupleSetIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcNetworkAclQuintupleNetworkAclQuintupleSetIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationCidr = this._destinationCidr;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._networkAclDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAclDirection = this._networkAclDirection;
    }
    if (this._networkAclQuintupleEntryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAclQuintupleEntryId = this._networkAclQuintupleEntryId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidr = this._sourceCidr;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcNetworkAclQuintupleNetworkAclQuintupleSetIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._createTime = undefined;
      this._description = undefined;
      this._destinationCidr = undefined;
      this._destinationPort = undefined;
      this._networkAclDirection = undefined;
      this._networkAclQuintupleEntryId = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._sourceCidr = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._createTime = value.createTime;
      this._description = value.description;
      this._destinationCidr = value.destinationCidr;
      this._destinationPort = value.destinationPort;
      this._networkAclDirection = value.networkAclDirection;
      this._networkAclQuintupleEntryId = value.networkAclQuintupleEntryId;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._sourceCidr = value.sourceCidr;
      this._sourcePort = value.sourcePort;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_cidr - computed: false, optional: true, required: false
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  public resetDestinationCidr() {
    this._destinationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // network_acl_direction - computed: false, optional: true, required: false
  private _networkAclDirection?: string; 
  public get networkAclDirection() {
    return this.getStringAttribute('network_acl_direction');
  }
  public set networkAclDirection(value: string) {
    this._networkAclDirection = value;
  }
  public resetNetworkAclDirection() {
    this._networkAclDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclDirectionInput() {
    return this._networkAclDirection;
  }

  // network_acl_quintuple_entry_id - computed: false, optional: true, required: false
  private _networkAclQuintupleEntryId?: string; 
  public get networkAclQuintupleEntryId() {
    return this.getStringAttribute('network_acl_quintuple_entry_id');
  }
  public set networkAclQuintupleEntryId(value: string) {
    this._networkAclQuintupleEntryId = value;
  }
  public resetNetworkAclQuintupleEntryId() {
    this._networkAclQuintupleEntryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclQuintupleEntryIdInput() {
    return this._networkAclQuintupleEntryId;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_cidr - computed: false, optional: true, required: false
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  public resetSourceCidr() {
    this._sourceCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}

export class VpcNetworkAclQuintupleNetworkAclQuintupleSetIngressList extends cdktf.ComplexList {
  public internalValue? : VpcNetworkAclQuintupleNetworkAclQuintupleSetIngress[] | cdktf.IResolvable

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
  public get(index: number): VpcNetworkAclQuintupleNetworkAclQuintupleSetIngressOutputReference {
    return new VpcNetworkAclQuintupleNetworkAclQuintupleSetIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcNetworkAclQuintupleNetworkAclQuintupleSet {
  /**
  * egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#egress VpcNetworkAclQuintuple#egress}
  */
  readonly egress?: VpcNetworkAclQuintupleNetworkAclQuintupleSetEgress[] | cdktf.IResolvable;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#ingress VpcNetworkAclQuintuple#ingress}
  */
  readonly ingress?: VpcNetworkAclQuintupleNetworkAclQuintupleSetIngress[] | cdktf.IResolvable;
}

export function vpcNetworkAclQuintupleNetworkAclQuintupleSetToTerraform(struct?: VpcNetworkAclQuintupleNetworkAclQuintupleSetOutputReference | VpcNetworkAclQuintupleNetworkAclQuintupleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.listMapper(vpcNetworkAclQuintupleNetworkAclQuintupleSetEgressToTerraform, true)(struct!.egress),
    ingress: cdktf.listMapper(vpcNetworkAclQuintupleNetworkAclQuintupleSetIngressToTerraform, true)(struct!.ingress),
  }
}


export function vpcNetworkAclQuintupleNetworkAclQuintupleSetToHclTerraform(struct?: VpcNetworkAclQuintupleNetworkAclQuintupleSetOutputReference | VpcNetworkAclQuintupleNetworkAclQuintupleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.listMapperHcl(vpcNetworkAclQuintupleNetworkAclQuintupleSetEgressToHclTerraform, true)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "VpcNetworkAclQuintupleNetworkAclQuintupleSetEgressList",
    },
    ingress: {
      value: cdktf.listMapperHcl(vpcNetworkAclQuintupleNetworkAclQuintupleSetIngressToHclTerraform, true)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "VpcNetworkAclQuintupleNetworkAclQuintupleSetIngressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcNetworkAclQuintupleNetworkAclQuintupleSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcNetworkAclQuintupleNetworkAclQuintupleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcNetworkAclQuintupleNetworkAclQuintupleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egress.internalValue = undefined;
      this._ingress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egress.internalValue = value.egress;
      this._ingress.internalValue = value.ingress;
    }
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new VpcNetworkAclQuintupleNetworkAclQuintupleSetEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: VpcNetworkAclQuintupleNetworkAclQuintupleSetEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new VpcNetworkAclQuintupleNetworkAclQuintupleSetIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: VpcNetworkAclQuintupleNetworkAclQuintupleSetIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple tencentcloud_vpc_network_acl_quintuple}
*/
export class VpcNetworkAclQuintuple extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_network_acl_quintuple";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcNetworkAclQuintuple resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcNetworkAclQuintuple to import
  * @param importFromId The id of the existing VpcNetworkAclQuintuple that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcNetworkAclQuintuple to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_network_acl_quintuple", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/vpc_network_acl_quintuple tencentcloud_vpc_network_acl_quintuple} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcNetworkAclQuintupleConfig
  */
  public constructor(scope: Construct, id: string, config: VpcNetworkAclQuintupleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_network_acl_quintuple',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._networkAclId = config.networkAclId;
    this._networkAclQuintupleSet.internalValue = config.networkAclQuintupleSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_acl_id - computed: false, optional: false, required: true
  private _networkAclId?: string; 
  public get networkAclId() {
    return this.getStringAttribute('network_acl_id');
  }
  public set networkAclId(value: string) {
    this._networkAclId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclIdInput() {
    return this._networkAclId;
  }

  // network_acl_quintuple_set - computed: false, optional: false, required: true
  private _networkAclQuintupleSet = new VpcNetworkAclQuintupleNetworkAclQuintupleSetOutputReference(this, "network_acl_quintuple_set");
  public get networkAclQuintupleSet() {
    return this._networkAclQuintupleSet;
  }
  public putNetworkAclQuintupleSet(value: VpcNetworkAclQuintupleNetworkAclQuintupleSet) {
    this._networkAclQuintupleSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclQuintupleSetInput() {
    return this._networkAclQuintupleSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_acl_id: cdktf.stringToTerraform(this._networkAclId),
      network_acl_quintuple_set: vpcNetworkAclQuintupleNetworkAclQuintupleSetToTerraform(this._networkAclQuintupleSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_acl_id: {
        value: cdktf.stringToHclTerraform(this._networkAclId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_acl_quintuple_set: {
        value: vpcNetworkAclQuintupleNetworkAclQuintupleSetToHclTerraform(this._networkAclQuintupleSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcNetworkAclQuintupleNetworkAclQuintupleSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
