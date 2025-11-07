// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcGatewayPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comments for security policy lock/unlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#comments VpcGatewayPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#description VpcGatewayPolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#display_name VpcGatewayPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#id VpcGatewayPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether a security policy should be locked. If locked by a user, no other user would be able to modify this policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#locked VpcGatewayPolicy#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#nsx_id VpcGatewayPolicy#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * This field is used to resolve conflicts between security policies across domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#sequence_number VpcGatewayPolicy#sequence_number}
  */
  readonly sequenceNumber?: number;
  /**
  * When it is stateful, the state of the network connects are tracked and a stateful packet inspection is performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#stateful VpcGatewayPolicy#stateful}
  */
  readonly stateful?: boolean | cdktf.IResolvable;
  /**
  * Ensures that a 3 way TCP handshake is done before the data packets are sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#tcp_strict VpcGatewayPolicy#tcp_strict}
  */
  readonly tcpStrict?: boolean | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#context VpcGatewayPolicy#context}
  */
  readonly context: VpcGatewayPolicyContext;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#rule VpcGatewayPolicy#rule}
  */
  readonly rule?: VpcGatewayPolicyRule[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#tag VpcGatewayPolicy#tag}
  */
  readonly tag?: VpcGatewayPolicyTag[] | cdktf.IResolvable;
}
export interface VpcGatewayPolicyContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#project_id VpcGatewayPolicy#project_id}
  */
  readonly projectId: string;
  /**
  * Id of the VPC which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#vpc_id VpcGatewayPolicy#vpc_id}
  */
  readonly vpcId: string;
}

export function vpcGatewayPolicyContextToTerraform(struct?: VpcGatewayPolicyContextOutputReference | VpcGatewayPolicyContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function vpcGatewayPolicyContextToHclTerraform(struct?: VpcGatewayPolicyContextOutputReference | VpcGatewayPolicyContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcGatewayPolicyContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._vpcId = value.vpcId;
    }
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface VpcGatewayPolicyRuleServiceEntriesAlgorithmEntry {
  /**
  * Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#algorithm VpcGatewayPolicy#algorithm}
  */
  readonly algorithm: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#description VpcGatewayPolicy#description}
  */
  readonly description?: string;
  /**
  * A single destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#destination_port VpcGatewayPolicy#destination_port}
  */
  readonly destinationPort: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#display_name VpcGatewayPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Set of source ports or ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#source_ports VpcGatewayPolicy#source_ports}
  */
  readonly sourcePorts?: string[];
}

export function vpcGatewayPolicyRuleServiceEntriesAlgorithmEntryToTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesAlgorithmEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    description: cdktf.stringToTerraform(struct!.description),
    destination_port: cdktf.stringToTerraform(struct!.destinationPort),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    source_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePorts),
  }
}


export function vpcGatewayPolicyRuleServiceEntriesAlgorithmEntryToHclTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesAlgorithmEntry | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyRuleServiceEntriesAlgorithmEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGatewayPolicyRuleServiceEntriesAlgorithmEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyRuleServiceEntriesAlgorithmEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._description = undefined;
      this._destinationPort = undefined;
      this._displayName = undefined;
      this._sourcePorts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._description = value.description;
      this._destinationPort = value.destinationPort;
      this._displayName = value.displayName;
      this._sourcePorts = value.sourcePorts;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // destination_port - computed: false, optional: false, required: true
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ports'));
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }
}

export class VpcGatewayPolicyRuleServiceEntriesAlgorithmEntryList extends cdktf.ComplexList {
  public internalValue? : VpcGatewayPolicyRuleServiceEntriesAlgorithmEntry[] | cdktf.IResolvable

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
  public get(index: number): VpcGatewayPolicyRuleServiceEntriesAlgorithmEntryOutputReference {
    return new VpcGatewayPolicyRuleServiceEntriesAlgorithmEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGatewayPolicyRuleServiceEntriesEtherTypeEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#description VpcGatewayPolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#display_name VpcGatewayPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Type of the encapsulated protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#ether_type VpcGatewayPolicy#ether_type}
  */
  readonly etherType: number;
}

export function vpcGatewayPolicyRuleServiceEntriesEtherTypeEntryToTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesEtherTypeEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ether_type: cdktf.numberToTerraform(struct!.etherType),
  }
}


export function vpcGatewayPolicyRuleServiceEntriesEtherTypeEntryToHclTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesEtherTypeEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ether_type: {
      value: cdktf.numberToHclTerraform(struct!.etherType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyRuleServiceEntriesEtherTypeEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGatewayPolicyRuleServiceEntriesEtherTypeEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._etherType !== undefined) {
      hasAnyValues = true;
      internalValueResult.etherType = this._etherType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyRuleServiceEntriesEtherTypeEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._etherType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._etherType = value.etherType;
    }
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ether_type - computed: false, optional: false, required: true
  private _etherType?: number; 
  public get etherType() {
    return this.getNumberAttribute('ether_type');
  }
  public set etherType(value: number) {
    this._etherType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeInput() {
    return this._etherType;
  }
}

export class VpcGatewayPolicyRuleServiceEntriesEtherTypeEntryList extends cdktf.ComplexList {
  public internalValue? : VpcGatewayPolicyRuleServiceEntriesEtherTypeEntry[] | cdktf.IResolvable

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
  public get(index: number): VpcGatewayPolicyRuleServiceEntriesEtherTypeEntryOutputReference {
    return new VpcGatewayPolicyRuleServiceEntriesEtherTypeEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGatewayPolicyRuleServiceEntriesIcmpEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#description VpcGatewayPolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#display_name VpcGatewayPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * ICMP message code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#icmp_code VpcGatewayPolicy#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * ICMP message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#icmp_type VpcGatewayPolicy#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Version of ICMP protocol (ICMPv4/ICMPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#protocol VpcGatewayPolicy#protocol}
  */
  readonly protocol: string;
}

export function vpcGatewayPolicyRuleServiceEntriesIcmpEntryToTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesIcmpEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    icmp_code: cdktf.stringToTerraform(struct!.icmpCode),
    icmp_type: cdktf.stringToTerraform(struct!.icmpType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function vpcGatewayPolicyRuleServiceEntriesIcmpEntryToHclTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesIcmpEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_code: {
      value: cdktf.stringToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type: {
      value: cdktf.stringToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyRuleServiceEntriesIcmpEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGatewayPolicyRuleServiceEntriesIcmpEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyRuleServiceEntriesIcmpEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._protocol = value.protocol;
    }
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string; 
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }
  public set icmpCode(value: string) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string; 
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class VpcGatewayPolicyRuleServiceEntriesIcmpEntryList extends cdktf.ComplexList {
  public internalValue? : VpcGatewayPolicyRuleServiceEntriesIcmpEntry[] | cdktf.IResolvable

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
  public get(index: number): VpcGatewayPolicyRuleServiceEntriesIcmpEntryOutputReference {
    return new VpcGatewayPolicyRuleServiceEntriesIcmpEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGatewayPolicyRuleServiceEntriesIgmpEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#description VpcGatewayPolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#display_name VpcGatewayPolicy#display_name}
  */
  readonly displayName?: string;
}

export function vpcGatewayPolicyRuleServiceEntriesIgmpEntryToTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesIgmpEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function vpcGatewayPolicyRuleServiceEntriesIgmpEntryToHclTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesIgmpEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyRuleServiceEntriesIgmpEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGatewayPolicyRuleServiceEntriesIgmpEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyRuleServiceEntriesIgmpEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
    }
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }
}

export class VpcGatewayPolicyRuleServiceEntriesIgmpEntryList extends cdktf.ComplexList {
  public internalValue? : VpcGatewayPolicyRuleServiceEntriesIgmpEntry[] | cdktf.IResolvable

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
  public get(index: number): VpcGatewayPolicyRuleServiceEntriesIgmpEntryOutputReference {
    return new VpcGatewayPolicyRuleServiceEntriesIgmpEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGatewayPolicyRuleServiceEntriesIpProtocolEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#description VpcGatewayPolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#display_name VpcGatewayPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#protocol VpcGatewayPolicy#protocol}
  */
  readonly protocol: number;
}

export function vpcGatewayPolicyRuleServiceEntriesIpProtocolEntryToTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesIpProtocolEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    protocol: cdktf.numberToTerraform(struct!.protocol),
  }
}


export function vpcGatewayPolicyRuleServiceEntriesIpProtocolEntryToHclTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesIpProtocolEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyRuleServiceEntriesIpProtocolEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGatewayPolicyRuleServiceEntriesIpProtocolEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyRuleServiceEntriesIpProtocolEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._protocol = value.protocol;
    }
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class VpcGatewayPolicyRuleServiceEntriesIpProtocolEntryList extends cdktf.ComplexList {
  public internalValue? : VpcGatewayPolicyRuleServiceEntriesIpProtocolEntry[] | cdktf.IResolvable

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
  public get(index: number): VpcGatewayPolicyRuleServiceEntriesIpProtocolEntryOutputReference {
    return new VpcGatewayPolicyRuleServiceEntriesIpProtocolEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGatewayPolicyRuleServiceEntriesL4PortSetEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#description VpcGatewayPolicy#description}
  */
  readonly description?: string;
  /**
  * Set of destination ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#destination_ports VpcGatewayPolicy#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#display_name VpcGatewayPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * L4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#protocol VpcGatewayPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Set of source ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#source_ports VpcGatewayPolicy#source_ports}
  */
  readonly sourcePorts?: string[];
}

export function vpcGatewayPolicyRuleServiceEntriesL4PortSetEntryToTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesL4PortSetEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPorts),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePorts),
  }
}


export function vpcGatewayPolicyRuleServiceEntriesL4PortSetEntryToHclTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesL4PortSetEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyRuleServiceEntriesL4PortSetEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGatewayPolicyRuleServiceEntriesL4PortSetEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyRuleServiceEntriesL4PortSetEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._destinationPorts = undefined;
      this._displayName = undefined;
      this._protocol = undefined;
      this._sourcePorts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._destinationPorts = value.destinationPorts;
      this._displayName = value.displayName;
      this._protocol = value.protocol;
      this._sourcePorts = value.sourcePorts;
    }
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

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_ports'));
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string[]; 
  public get sourcePorts() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ports'));
  }
  public set sourcePorts(value: string[]) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }
}

export class VpcGatewayPolicyRuleServiceEntriesL4PortSetEntryList extends cdktf.ComplexList {
  public internalValue? : VpcGatewayPolicyRuleServiceEntriesL4PortSetEntry[] | cdktf.IResolvable

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
  public get(index: number): VpcGatewayPolicyRuleServiceEntriesL4PortSetEntryOutputReference {
    return new VpcGatewayPolicyRuleServiceEntriesL4PortSetEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGatewayPolicyRuleServiceEntries {
  /**
  * algorithm_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#algorithm_entry VpcGatewayPolicy#algorithm_entry}
  */
  readonly algorithmEntry?: VpcGatewayPolicyRuleServiceEntriesAlgorithmEntry[] | cdktf.IResolvable;
  /**
  * ether_type_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#ether_type_entry VpcGatewayPolicy#ether_type_entry}
  */
  readonly etherTypeEntry?: VpcGatewayPolicyRuleServiceEntriesEtherTypeEntry[] | cdktf.IResolvable;
  /**
  * icmp_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#icmp_entry VpcGatewayPolicy#icmp_entry}
  */
  readonly icmpEntry?: VpcGatewayPolicyRuleServiceEntriesIcmpEntry[] | cdktf.IResolvable;
  /**
  * igmp_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#igmp_entry VpcGatewayPolicy#igmp_entry}
  */
  readonly igmpEntry?: VpcGatewayPolicyRuleServiceEntriesIgmpEntry[] | cdktf.IResolvable;
  /**
  * ip_protocol_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#ip_protocol_entry VpcGatewayPolicy#ip_protocol_entry}
  */
  readonly ipProtocolEntry?: VpcGatewayPolicyRuleServiceEntriesIpProtocolEntry[] | cdktf.IResolvable;
  /**
  * l4_port_set_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#l4_port_set_entry VpcGatewayPolicy#l4_port_set_entry}
  */
  readonly l4PortSetEntry?: VpcGatewayPolicyRuleServiceEntriesL4PortSetEntry[] | cdktf.IResolvable;
}

export function vpcGatewayPolicyRuleServiceEntriesToTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesOutputReference | VpcGatewayPolicyRuleServiceEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_entry: cdktf.listMapper(vpcGatewayPolicyRuleServiceEntriesAlgorithmEntryToTerraform, true)(struct!.algorithmEntry),
    ether_type_entry: cdktf.listMapper(vpcGatewayPolicyRuleServiceEntriesEtherTypeEntryToTerraform, true)(struct!.etherTypeEntry),
    icmp_entry: cdktf.listMapper(vpcGatewayPolicyRuleServiceEntriesIcmpEntryToTerraform, true)(struct!.icmpEntry),
    igmp_entry: cdktf.listMapper(vpcGatewayPolicyRuleServiceEntriesIgmpEntryToTerraform, true)(struct!.igmpEntry),
    ip_protocol_entry: cdktf.listMapper(vpcGatewayPolicyRuleServiceEntriesIpProtocolEntryToTerraform, true)(struct!.ipProtocolEntry),
    l4_port_set_entry: cdktf.listMapper(vpcGatewayPolicyRuleServiceEntriesL4PortSetEntryToTerraform, true)(struct!.l4PortSetEntry),
  }
}


export function vpcGatewayPolicyRuleServiceEntriesToHclTerraform(struct?: VpcGatewayPolicyRuleServiceEntriesOutputReference | VpcGatewayPolicyRuleServiceEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_entry: {
      value: cdktf.listMapperHcl(vpcGatewayPolicyRuleServiceEntriesAlgorithmEntryToHclTerraform, true)(struct!.algorithmEntry),
      isBlock: true,
      type: "set",
      storageClassType: "VpcGatewayPolicyRuleServiceEntriesAlgorithmEntryList",
    },
    ether_type_entry: {
      value: cdktf.listMapperHcl(vpcGatewayPolicyRuleServiceEntriesEtherTypeEntryToHclTerraform, true)(struct!.etherTypeEntry),
      isBlock: true,
      type: "set",
      storageClassType: "VpcGatewayPolicyRuleServiceEntriesEtherTypeEntryList",
    },
    icmp_entry: {
      value: cdktf.listMapperHcl(vpcGatewayPolicyRuleServiceEntriesIcmpEntryToHclTerraform, true)(struct!.icmpEntry),
      isBlock: true,
      type: "set",
      storageClassType: "VpcGatewayPolicyRuleServiceEntriesIcmpEntryList",
    },
    igmp_entry: {
      value: cdktf.listMapperHcl(vpcGatewayPolicyRuleServiceEntriesIgmpEntryToHclTerraform, true)(struct!.igmpEntry),
      isBlock: true,
      type: "set",
      storageClassType: "VpcGatewayPolicyRuleServiceEntriesIgmpEntryList",
    },
    ip_protocol_entry: {
      value: cdktf.listMapperHcl(vpcGatewayPolicyRuleServiceEntriesIpProtocolEntryToHclTerraform, true)(struct!.ipProtocolEntry),
      isBlock: true,
      type: "set",
      storageClassType: "VpcGatewayPolicyRuleServiceEntriesIpProtocolEntryList",
    },
    l4_port_set_entry: {
      value: cdktf.listMapperHcl(vpcGatewayPolicyRuleServiceEntriesL4PortSetEntryToHclTerraform, true)(struct!.l4PortSetEntry),
      isBlock: true,
      type: "set",
      storageClassType: "VpcGatewayPolicyRuleServiceEntriesL4PortSetEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyRuleServiceEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcGatewayPolicyRuleServiceEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmEntry = this._algorithmEntry?.internalValue;
    }
    if (this._etherTypeEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.etherTypeEntry = this._etherTypeEntry?.internalValue;
    }
    if (this._icmpEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpEntry = this._icmpEntry?.internalValue;
    }
    if (this._igmpEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpEntry = this._igmpEntry?.internalValue;
    }
    if (this._ipProtocolEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocolEntry = this._ipProtocolEntry?.internalValue;
    }
    if (this._l4PortSetEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4PortSetEntry = this._l4PortSetEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyRuleServiceEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithmEntry.internalValue = undefined;
      this._etherTypeEntry.internalValue = undefined;
      this._icmpEntry.internalValue = undefined;
      this._igmpEntry.internalValue = undefined;
      this._ipProtocolEntry.internalValue = undefined;
      this._l4PortSetEntry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithmEntry.internalValue = value.algorithmEntry;
      this._etherTypeEntry.internalValue = value.etherTypeEntry;
      this._icmpEntry.internalValue = value.icmpEntry;
      this._igmpEntry.internalValue = value.igmpEntry;
      this._ipProtocolEntry.internalValue = value.ipProtocolEntry;
      this._l4PortSetEntry.internalValue = value.l4PortSetEntry;
    }
  }

  // algorithm_entry - computed: false, optional: true, required: false
  private _algorithmEntry = new VpcGatewayPolicyRuleServiceEntriesAlgorithmEntryList(this, "algorithm_entry", true);
  public get algorithmEntry() {
    return this._algorithmEntry;
  }
  public putAlgorithmEntry(value: VpcGatewayPolicyRuleServiceEntriesAlgorithmEntry[] | cdktf.IResolvable) {
    this._algorithmEntry.internalValue = value;
  }
  public resetAlgorithmEntry() {
    this._algorithmEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmEntryInput() {
    return this._algorithmEntry.internalValue;
  }

  // ether_type_entry - computed: false, optional: true, required: false
  private _etherTypeEntry = new VpcGatewayPolicyRuleServiceEntriesEtherTypeEntryList(this, "ether_type_entry", true);
  public get etherTypeEntry() {
    return this._etherTypeEntry;
  }
  public putEtherTypeEntry(value: VpcGatewayPolicyRuleServiceEntriesEtherTypeEntry[] | cdktf.IResolvable) {
    this._etherTypeEntry.internalValue = value;
  }
  public resetEtherTypeEntry() {
    this._etherTypeEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTypeEntryInput() {
    return this._etherTypeEntry.internalValue;
  }

  // icmp_entry - computed: false, optional: true, required: false
  private _icmpEntry = new VpcGatewayPolicyRuleServiceEntriesIcmpEntryList(this, "icmp_entry", true);
  public get icmpEntry() {
    return this._icmpEntry;
  }
  public putIcmpEntry(value: VpcGatewayPolicyRuleServiceEntriesIcmpEntry[] | cdktf.IResolvable) {
    this._icmpEntry.internalValue = value;
  }
  public resetIcmpEntry() {
    this._icmpEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpEntryInput() {
    return this._icmpEntry.internalValue;
  }

  // igmp_entry - computed: false, optional: true, required: false
  private _igmpEntry = new VpcGatewayPolicyRuleServiceEntriesIgmpEntryList(this, "igmp_entry", true);
  public get igmpEntry() {
    return this._igmpEntry;
  }
  public putIgmpEntry(value: VpcGatewayPolicyRuleServiceEntriesIgmpEntry[] | cdktf.IResolvable) {
    this._igmpEntry.internalValue = value;
  }
  public resetIgmpEntry() {
    this._igmpEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpEntryInput() {
    return this._igmpEntry.internalValue;
  }

  // ip_protocol_entry - computed: false, optional: true, required: false
  private _ipProtocolEntry = new VpcGatewayPolicyRuleServiceEntriesIpProtocolEntryList(this, "ip_protocol_entry", true);
  public get ipProtocolEntry() {
    return this._ipProtocolEntry;
  }
  public putIpProtocolEntry(value: VpcGatewayPolicyRuleServiceEntriesIpProtocolEntry[] | cdktf.IResolvable) {
    this._ipProtocolEntry.internalValue = value;
  }
  public resetIpProtocolEntry() {
    this._ipProtocolEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolEntryInput() {
    return this._ipProtocolEntry.internalValue;
  }

  // l4_port_set_entry - computed: false, optional: true, required: false
  private _l4PortSetEntry = new VpcGatewayPolicyRuleServiceEntriesL4PortSetEntryList(this, "l4_port_set_entry", true);
  public get l4PortSetEntry() {
    return this._l4PortSetEntry;
  }
  public putL4PortSetEntry(value: VpcGatewayPolicyRuleServiceEntriesL4PortSetEntry[] | cdktf.IResolvable) {
    this._l4PortSetEntry.internalValue = value;
  }
  public resetL4PortSetEntry() {
    this._l4PortSetEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4PortSetEntryInput() {
    return this._l4PortSetEntry.internalValue;
  }
}
export interface VpcGatewayPolicyRuleTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#scope VpcGatewayPolicy#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#tag VpcGatewayPolicy#tag}
  */
  readonly tag?: string;
}

export function vpcGatewayPolicyRuleTagToTerraform(struct?: VpcGatewayPolicyRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function vpcGatewayPolicyRuleTagToHclTerraform(struct?: VpcGatewayPolicyRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyRuleTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGatewayPolicyRuleTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyRuleTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
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

export class VpcGatewayPolicyRuleTagList extends cdktf.ComplexList {
  public internalValue? : VpcGatewayPolicyRuleTag[] | cdktf.IResolvable

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
  public get(index: number): VpcGatewayPolicyRuleTagOutputReference {
    return new VpcGatewayPolicyRuleTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGatewayPolicyRule {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#action VpcGatewayPolicy#action}
  */
  readonly action?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#description VpcGatewayPolicy#description}
  */
  readonly description?: string;
  /**
  * List of destination groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#destination_groups VpcGatewayPolicy#destination_groups}
  */
  readonly destinationGroups?: string[];
  /**
  * Negation of destination groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#destinations_excluded VpcGatewayPolicy#destinations_excluded}
  */
  readonly destinationsExcluded?: boolean | cdktf.IResolvable;
  /**
  * Traffic direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#direction VpcGatewayPolicy#direction}
  */
  readonly direction?: string;
  /**
  * Flag to disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#disabled VpcGatewayPolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#display_name VpcGatewayPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * IP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#ip_version VpcGatewayPolicy#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Additional information (string) which will be propagated to the rule syslog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#log_label VpcGatewayPolicy#log_label}
  */
  readonly logLabel?: string;
  /**
  * Flag to enable packet logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#logged VpcGatewayPolicy#logged}
  */
  readonly logged?: boolean | cdktf.IResolvable;
  /**
  * Text for additional notes on changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#notes VpcGatewayPolicy#notes}
  */
  readonly notes?: string;
  /**
  * List of profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#profiles VpcGatewayPolicy#profiles}
  */
  readonly profiles?: string[];
  /**
  * List of policy paths where the rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#scope VpcGatewayPolicy#scope}
  */
  readonly scope?: string[];
  /**
  * Sequence number of the this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#sequence_number VpcGatewayPolicy#sequence_number}
  */
  readonly sequenceNumber?: number;
  /**
  * List of services to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#services VpcGatewayPolicy#services}
  */
  readonly services?: string[];
  /**
  * List of source groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#source_groups VpcGatewayPolicy#source_groups}
  */
  readonly sourceGroups?: string[];
  /**
  * Negation of source groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#sources_excluded VpcGatewayPolicy#sources_excluded}
  */
  readonly sourcesExcluded?: boolean | cdktf.IResolvable;
  /**
  * service_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#service_entries VpcGatewayPolicy#service_entries}
  */
  readonly serviceEntries?: VpcGatewayPolicyRuleServiceEntries;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#tag VpcGatewayPolicy#tag}
  */
  readonly tag?: VpcGatewayPolicyRuleTag[] | cdktf.IResolvable;
}

export function vpcGatewayPolicyRuleToTerraform(struct?: VpcGatewayPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    destination_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationGroups),
    destinations_excluded: cdktf.booleanToTerraform(struct!.destinationsExcluded),
    direction: cdktf.stringToTerraform(struct!.direction),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    log_label: cdktf.stringToTerraform(struct!.logLabel),
    logged: cdktf.booleanToTerraform(struct!.logged),
    notes: cdktf.stringToTerraform(struct!.notes),
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    source_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceGroups),
    sources_excluded: cdktf.booleanToTerraform(struct!.sourcesExcluded),
    service_entries: vpcGatewayPolicyRuleServiceEntriesToTerraform(struct!.serviceEntries),
    tag: cdktf.listMapper(vpcGatewayPolicyRuleTagToTerraform, true)(struct!.tag),
  }
}


export function vpcGatewayPolicyRuleToHclTerraform(struct?: VpcGatewayPolicyRule | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destinations_excluded: {
      value: cdktf.booleanToHclTerraform(struct!.destinationsExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_label: {
      value: cdktf.stringToHclTerraform(struct!.logLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logged: {
      value: cdktf.booleanToHclTerraform(struct!.logged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sequence_number: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sources_excluded: {
      value: cdktf.booleanToHclTerraform(struct!.sourcesExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_entries: {
      value: vpcGatewayPolicyRuleServiceEntriesToHclTerraform(struct!.serviceEntries),
      isBlock: true,
      type: "list",
      storageClassType: "VpcGatewayPolicyRuleServiceEntriesList",
    },
    tag: {
      value: cdktf.listMapperHcl(vpcGatewayPolicyRuleTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "set",
      storageClassType: "VpcGatewayPolicyRuleTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGatewayPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationGroups = this._destinationGroups;
    }
    if (this._destinationsExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationsExcluded = this._destinationsExcluded;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._logLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLabel = this._logLabel;
    }
    if (this._logged !== undefined) {
      hasAnyValues = true;
      internalValueResult.logged = this._logged;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sequenceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumber = this._sequenceNumber;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._sourceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceGroups = this._sourceGroups;
    }
    if (this._sourcesExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcesExcluded = this._sourcesExcluded;
    }
    if (this._serviceEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceEntries = this._serviceEntries?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._destinationGroups = undefined;
      this._destinationsExcluded = undefined;
      this._direction = undefined;
      this._disabled = undefined;
      this._displayName = undefined;
      this._ipVersion = undefined;
      this._logLabel = undefined;
      this._logged = undefined;
      this._notes = undefined;
      this._profiles = undefined;
      this._scope = undefined;
      this._sequenceNumber = undefined;
      this._services = undefined;
      this._sourceGroups = undefined;
      this._sourcesExcluded = undefined;
      this._serviceEntries.internalValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._destinationGroups = value.destinationGroups;
      this._destinationsExcluded = value.destinationsExcluded;
      this._direction = value.direction;
      this._disabled = value.disabled;
      this._displayName = value.displayName;
      this._ipVersion = value.ipVersion;
      this._logLabel = value.logLabel;
      this._logged = value.logged;
      this._notes = value.notes;
      this._profiles = value.profiles;
      this._scope = value.scope;
      this._sequenceNumber = value.sequenceNumber;
      this._services = value.services;
      this._sourceGroups = value.sourceGroups;
      this._sourcesExcluded = value.sourcesExcluded;
      this._serviceEntries.internalValue = value.serviceEntries;
      this._tag.internalValue = value.tag;
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

  // destination_groups - computed: false, optional: true, required: false
  private _destinationGroups?: string[]; 
  public get destinationGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_groups'));
  }
  public set destinationGroups(value: string[]) {
    this._destinationGroups = value;
  }
  public resetDestinationGroups() {
    this._destinationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationGroupsInput() {
    return this._destinationGroups;
  }

  // destinations_excluded - computed: false, optional: true, required: false
  private _destinationsExcluded?: boolean | cdktf.IResolvable; 
  public get destinationsExcluded() {
    return this.getBooleanAttribute('destinations_excluded');
  }
  public set destinationsExcluded(value: boolean | cdktf.IResolvable) {
    this._destinationsExcluded = value;
  }
  public resetDestinationsExcluded() {
    this._destinationsExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsExcludedInput() {
    return this._destinationsExcluded;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // log_label - computed: false, optional: true, required: false
  private _logLabel?: string; 
  public get logLabel() {
    return this.getStringAttribute('log_label');
  }
  public set logLabel(value: string) {
    this._logLabel = value;
  }
  public resetLogLabel() {
    this._logLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLabelInput() {
    return this._logLabel;
  }

  // logged - computed: false, optional: true, required: false
  private _logged?: boolean | cdktf.IResolvable; 
  public get logged() {
    return this.getBooleanAttribute('logged');
  }
  public set logged(value: boolean | cdktf.IResolvable) {
    this._logged = value;
  }
  public resetLogged() {
    this._logged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggedInput() {
    return this._logged;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // nsx_id - computed: true, optional: false, required: false
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return cdktf.Fn.tolist(this.getListAttribute('profiles'));
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return cdktf.Fn.tolist(this.getListAttribute('scope'));
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sequence_number - computed: true, optional: true, required: false
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  public resetSequenceNumber() {
    this._sequenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // source_groups - computed: false, optional: true, required: false
  private _sourceGroups?: string[]; 
  public get sourceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('source_groups'));
  }
  public set sourceGroups(value: string[]) {
    this._sourceGroups = value;
  }
  public resetSourceGroups() {
    this._sourceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupsInput() {
    return this._sourceGroups;
  }

  // sources_excluded - computed: false, optional: true, required: false
  private _sourcesExcluded?: boolean | cdktf.IResolvable; 
  public get sourcesExcluded() {
    return this.getBooleanAttribute('sources_excluded');
  }
  public set sourcesExcluded(value: boolean | cdktf.IResolvable) {
    this._sourcesExcluded = value;
  }
  public resetSourcesExcluded() {
    this._sourcesExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesExcludedInput() {
    return this._sourcesExcluded;
  }

  // service_entries - computed: false, optional: true, required: false
  private _serviceEntries = new VpcGatewayPolicyRuleServiceEntriesOutputReference(this, "service_entries");
  public get serviceEntries() {
    return this._serviceEntries;
  }
  public putServiceEntries(value: VpcGatewayPolicyRuleServiceEntries) {
    this._serviceEntries.internalValue = value;
  }
  public resetServiceEntries() {
    this._serviceEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEntriesInput() {
    return this._serviceEntries.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new VpcGatewayPolicyRuleTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: VpcGatewayPolicyRuleTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class VpcGatewayPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : VpcGatewayPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): VpcGatewayPolicyRuleOutputReference {
    return new VpcGatewayPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcGatewayPolicyTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#scope VpcGatewayPolicy#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#tag VpcGatewayPolicy#tag}
  */
  readonly tag?: string;
}

export function vpcGatewayPolicyTagToTerraform(struct?: VpcGatewayPolicyTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function vpcGatewayPolicyTagToHclTerraform(struct?: VpcGatewayPolicyTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcGatewayPolicyTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcGatewayPolicyTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcGatewayPolicyTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
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

export class VpcGatewayPolicyTagList extends cdktf.ComplexList {
  public internalValue? : VpcGatewayPolicyTag[] | cdktf.IResolvable

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
  public get(index: number): VpcGatewayPolicyTagOutputReference {
    return new VpcGatewayPolicyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy nsxt_vpc_gateway_policy}
*/
export class VpcGatewayPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_vpc_gateway_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcGatewayPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcGatewayPolicy to import
  * @param importFromId The id of the existing VpcGatewayPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcGatewayPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_vpc_gateway_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/vpc_gateway_policy nsxt_vpc_gateway_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcGatewayPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VpcGatewayPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_vpc_gateway_policy',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._locked = config.locked;
    this._nsxId = config.nsxId;
    this._sequenceNumber = config.sequenceNumber;
    this._stateful = config.stateful;
    this._tcpStrict = config.tcpStrict;
    this._context.internalValue = config.context;
    this._rule.internalValue = config.rule;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

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

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // sequence_number - computed: false, optional: true, required: false
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  public resetSequenceNumber() {
    this._sequenceNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful?: boolean | cdktf.IResolvable; 
  public get stateful() {
    return this.getBooleanAttribute('stateful');
  }
  public set stateful(value: boolean | cdktf.IResolvable) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // tcp_strict - computed: true, optional: true, required: false
  private _tcpStrict?: boolean | cdktf.IResolvable; 
  public get tcpStrict() {
    return this.getBooleanAttribute('tcp_strict');
  }
  public set tcpStrict(value: boolean | cdktf.IResolvable) {
    this._tcpStrict = value;
  }
  public resetTcpStrict() {
    this._tcpStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpStrictInput() {
    return this._tcpStrict;
  }

  // context - computed: false, optional: false, required: true
  private _context = new VpcGatewayPolicyContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: VpcGatewayPolicyContext) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new VpcGatewayPolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: VpcGatewayPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new VpcGatewayPolicyTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: VpcGatewayPolicyTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      locked: cdktf.booleanToTerraform(this._locked),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      sequence_number: cdktf.numberToTerraform(this._sequenceNumber),
      stateful: cdktf.booleanToTerraform(this._stateful),
      tcp_strict: cdktf.booleanToTerraform(this._tcpStrict),
      context: vpcGatewayPolicyContextToTerraform(this._context.internalValue),
      rule: cdktf.listMapper(vpcGatewayPolicyRuleToTerraform, true)(this._rule.internalValue),
      tag: cdktf.listMapper(vpcGatewayPolicyTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequence_number: {
        value: cdktf.numberToHclTerraform(this._sequenceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stateful: {
        value: cdktf.booleanToHclTerraform(this._stateful),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_strict: {
        value: cdktf.booleanToHclTerraform(this._tcpStrict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context: {
        value: vpcGatewayPolicyContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcGatewayPolicyContextList",
      },
      rule: {
        value: cdktf.listMapperHcl(vpcGatewayPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcGatewayPolicyRuleList",
      },
      tag: {
        value: cdktf.listMapperHcl(vpcGatewayPolicyTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VpcGatewayPolicyTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
