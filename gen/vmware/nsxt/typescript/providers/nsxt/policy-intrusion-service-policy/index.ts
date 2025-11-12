// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIntrusionServicePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comments for security policy lock/unlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#comments PolicyIntrusionServicePolicy#comments}
  */
  readonly comments?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#description PolicyIntrusionServicePolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#display_name PolicyIntrusionServicePolicy#display_name}
  */
  readonly displayName: string;
  /**
  * The domain name to use for resources. If not specified 'default' is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#domain PolicyIntrusionServicePolicy#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#id PolicyIntrusionServicePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether a security policy should be locked. If locked by a user, no other user would be able to modify this policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#locked PolicyIntrusionServicePolicy#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#nsx_id PolicyIntrusionServicePolicy#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * This field is used to resolve conflicts between security policies across domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#sequence_number PolicyIntrusionServicePolicy#sequence_number}
  */
  readonly sequenceNumber?: number;
  /**
  * When it is stateful, the state of the network connects are tracked and a stateful packet inspection is performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#stateful PolicyIntrusionServicePolicy#stateful}
  */
  readonly stateful?: boolean | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#context PolicyIntrusionServicePolicy#context}
  */
  readonly context?: PolicyIntrusionServicePolicyContext;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#rule PolicyIntrusionServicePolicy#rule}
  */
  readonly rule?: PolicyIntrusionServicePolicyRule[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#tag PolicyIntrusionServicePolicy#tag}
  */
  readonly tag?: PolicyIntrusionServicePolicyTag[] | cdktf.IResolvable;
}
export interface PolicyIntrusionServicePolicyContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#project_id PolicyIntrusionServicePolicy#project_id}
  */
  readonly projectId: string;
}

export function policyIntrusionServicePolicyContextToTerraform(struct?: PolicyIntrusionServicePolicyContextOutputReference | PolicyIntrusionServicePolicyContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyIntrusionServicePolicyContextToHclTerraform(struct?: PolicyIntrusionServicePolicyContextOutputReference | PolicyIntrusionServicePolicyContext): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIntrusionServicePolicyContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyIntrusionServicePolicyContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIntrusionServicePolicyContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
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
}
export interface PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntry {
  /**
  * Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#algorithm PolicyIntrusionServicePolicy#algorithm}
  */
  readonly algorithm: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#description PolicyIntrusionServicePolicy#description}
  */
  readonly description?: string;
  /**
  * A single destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#destination_port PolicyIntrusionServicePolicy#destination_port}
  */
  readonly destinationPort: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#display_name PolicyIntrusionServicePolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Set of source ports or ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#source_ports PolicyIntrusionServicePolicy#source_ports}
  */
  readonly sourcePorts?: string[];
}

export function policyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryToTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntry | cdktf.IResolvable): any {
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


export function policyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryToHclTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntry | cdktf.IResolvable): any {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntry | cdktf.IResolvable | undefined) {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntry[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryOutputReference {
    return new PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#description PolicyIntrusionServicePolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#display_name PolicyIntrusionServicePolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Type of the encapsulated protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#ether_type PolicyIntrusionServicePolicy#ether_type}
  */
  readonly etherType: number;
}

export function policyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryToTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntry | cdktf.IResolvable): any {
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


export function policyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryToHclTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntry | cdktf.IResolvable): any {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntry | cdktf.IResolvable | undefined) {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntry[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryOutputReference {
    return new PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#description PolicyIntrusionServicePolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#display_name PolicyIntrusionServicePolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * ICMP message code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#icmp_code PolicyIntrusionServicePolicy#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * ICMP message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#icmp_type PolicyIntrusionServicePolicy#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Version of ICMP protocol (ICMPv4/ICMPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#protocol PolicyIntrusionServicePolicy#protocol}
  */
  readonly protocol: string;
}

export function policyIntrusionServicePolicyRuleServiceEntriesIcmpEntryToTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntry | cdktf.IResolvable): any {
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


export function policyIntrusionServicePolicyRuleServiceEntriesIcmpEntryToHclTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntry | cdktf.IResolvable): any {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntry | cdktf.IResolvable | undefined) {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntryList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntry[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntryOutputReference {
    return new PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#description PolicyIntrusionServicePolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#display_name PolicyIntrusionServicePolicy#display_name}
  */
  readonly displayName?: string;
}

export function policyIntrusionServicePolicyRuleServiceEntriesIgmpEntryToTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function policyIntrusionServicePolicyRuleServiceEntriesIgmpEntryToHclTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntry | cdktf.IResolvable): any {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntry | cdktf.IResolvable | undefined) {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntryList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntry[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntryOutputReference {
    return new PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#description PolicyIntrusionServicePolicy#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#display_name PolicyIntrusionServicePolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#protocol PolicyIntrusionServicePolicy#protocol}
  */
  readonly protocol: number;
}

export function policyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryToTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntry | cdktf.IResolvable): any {
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


export function policyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryToHclTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntry | cdktf.IResolvable): any {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntry | cdktf.IResolvable | undefined) {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntry[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryOutputReference {
    return new PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntry {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#description PolicyIntrusionServicePolicy#description}
  */
  readonly description?: string;
  /**
  * Set of destination ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#destination_ports PolicyIntrusionServicePolicy#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#display_name PolicyIntrusionServicePolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * L4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#protocol PolicyIntrusionServicePolicy#protocol}
  */
  readonly protocol: string;
  /**
  * Set of source ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#source_ports PolicyIntrusionServicePolicy#source_ports}
  */
  readonly sourcePorts?: string[];
}

export function policyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryToTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntry | cdktf.IResolvable): any {
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


export function policyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryToHclTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntry | cdktf.IResolvable): any {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntry | cdktf.IResolvable | undefined) {
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

export class PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntry[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryOutputReference {
    return new PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIntrusionServicePolicyRuleServiceEntries {
  /**
  * algorithm_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#algorithm_entry PolicyIntrusionServicePolicy#algorithm_entry}
  */
  readonly algorithmEntry?: PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntry[] | cdktf.IResolvable;
  /**
  * ether_type_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#ether_type_entry PolicyIntrusionServicePolicy#ether_type_entry}
  */
  readonly etherTypeEntry?: PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntry[] | cdktf.IResolvable;
  /**
  * icmp_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#icmp_entry PolicyIntrusionServicePolicy#icmp_entry}
  */
  readonly icmpEntry?: PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntry[] | cdktf.IResolvable;
  /**
  * igmp_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#igmp_entry PolicyIntrusionServicePolicy#igmp_entry}
  */
  readonly igmpEntry?: PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntry[] | cdktf.IResolvable;
  /**
  * ip_protocol_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#ip_protocol_entry PolicyIntrusionServicePolicy#ip_protocol_entry}
  */
  readonly ipProtocolEntry?: PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntry[] | cdktf.IResolvable;
  /**
  * l4_port_set_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#l4_port_set_entry PolicyIntrusionServicePolicy#l4_port_set_entry}
  */
  readonly l4PortSetEntry?: PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntry[] | cdktf.IResolvable;
}

export function policyIntrusionServicePolicyRuleServiceEntriesToTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesOutputReference | PolicyIntrusionServicePolicyRuleServiceEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_entry: cdktf.listMapper(policyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryToTerraform, true)(struct!.algorithmEntry),
    ether_type_entry: cdktf.listMapper(policyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryToTerraform, true)(struct!.etherTypeEntry),
    icmp_entry: cdktf.listMapper(policyIntrusionServicePolicyRuleServiceEntriesIcmpEntryToTerraform, true)(struct!.icmpEntry),
    igmp_entry: cdktf.listMapper(policyIntrusionServicePolicyRuleServiceEntriesIgmpEntryToTerraform, true)(struct!.igmpEntry),
    ip_protocol_entry: cdktf.listMapper(policyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryToTerraform, true)(struct!.ipProtocolEntry),
    l4_port_set_entry: cdktf.listMapper(policyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryToTerraform, true)(struct!.l4PortSetEntry),
  }
}


export function policyIntrusionServicePolicyRuleServiceEntriesToHclTerraform(struct?: PolicyIntrusionServicePolicyRuleServiceEntriesOutputReference | PolicyIntrusionServicePolicyRuleServiceEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_entry: {
      value: cdktf.listMapperHcl(policyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryToHclTerraform, true)(struct!.algorithmEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryList",
    },
    ether_type_entry: {
      value: cdktf.listMapperHcl(policyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryToHclTerraform, true)(struct!.etherTypeEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryList",
    },
    icmp_entry: {
      value: cdktf.listMapperHcl(policyIntrusionServicePolicyRuleServiceEntriesIcmpEntryToHclTerraform, true)(struct!.icmpEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntryList",
    },
    igmp_entry: {
      value: cdktf.listMapperHcl(policyIntrusionServicePolicyRuleServiceEntriesIgmpEntryToHclTerraform, true)(struct!.igmpEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntryList",
    },
    ip_protocol_entry: {
      value: cdktf.listMapperHcl(policyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryToHclTerraform, true)(struct!.ipProtocolEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryList",
    },
    l4_port_set_entry: {
      value: cdktf.listMapperHcl(policyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryToHclTerraform, true)(struct!.l4PortSetEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIntrusionServicePolicyRuleServiceEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyIntrusionServicePolicyRuleServiceEntries | undefined {
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

  public set internalValue(value: PolicyIntrusionServicePolicyRuleServiceEntries | undefined) {
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
  private _algorithmEntry = new PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntryList(this, "algorithm_entry", true);
  public get algorithmEntry() {
    return this._algorithmEntry;
  }
  public putAlgorithmEntry(value: PolicyIntrusionServicePolicyRuleServiceEntriesAlgorithmEntry[] | cdktf.IResolvable) {
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
  private _etherTypeEntry = new PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntryList(this, "ether_type_entry", true);
  public get etherTypeEntry() {
    return this._etherTypeEntry;
  }
  public putEtherTypeEntry(value: PolicyIntrusionServicePolicyRuleServiceEntriesEtherTypeEntry[] | cdktf.IResolvable) {
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
  private _icmpEntry = new PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntryList(this, "icmp_entry", true);
  public get icmpEntry() {
    return this._icmpEntry;
  }
  public putIcmpEntry(value: PolicyIntrusionServicePolicyRuleServiceEntriesIcmpEntry[] | cdktf.IResolvable) {
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
  private _igmpEntry = new PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntryList(this, "igmp_entry", true);
  public get igmpEntry() {
    return this._igmpEntry;
  }
  public putIgmpEntry(value: PolicyIntrusionServicePolicyRuleServiceEntriesIgmpEntry[] | cdktf.IResolvable) {
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
  private _ipProtocolEntry = new PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntryList(this, "ip_protocol_entry", true);
  public get ipProtocolEntry() {
    return this._ipProtocolEntry;
  }
  public putIpProtocolEntry(value: PolicyIntrusionServicePolicyRuleServiceEntriesIpProtocolEntry[] | cdktf.IResolvable) {
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
  private _l4PortSetEntry = new PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntryList(this, "l4_port_set_entry", true);
  public get l4PortSetEntry() {
    return this._l4PortSetEntry;
  }
  public putL4PortSetEntry(value: PolicyIntrusionServicePolicyRuleServiceEntriesL4PortSetEntry[] | cdktf.IResolvable) {
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
export interface PolicyIntrusionServicePolicyRuleTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#scope PolicyIntrusionServicePolicy#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#tag PolicyIntrusionServicePolicy#tag}
  */
  readonly tag?: string;
}

export function policyIntrusionServicePolicyRuleTagToTerraform(struct?: PolicyIntrusionServicePolicyRuleTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIntrusionServicePolicyRuleTagToHclTerraform(struct?: PolicyIntrusionServicePolicyRuleTag | cdktf.IResolvable): any {
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

export class PolicyIntrusionServicePolicyRuleTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServicePolicyRuleTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIntrusionServicePolicyRuleTag | cdktf.IResolvable | undefined) {
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

export class PolicyIntrusionServicePolicyRuleTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServicePolicyRuleTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServicePolicyRuleTagOutputReference {
    return new PolicyIntrusionServicePolicyRuleTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIntrusionServicePolicyRule {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#action PolicyIntrusionServicePolicy#action}
  */
  readonly action?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#description PolicyIntrusionServicePolicy#description}
  */
  readonly description?: string;
  /**
  * List of destination groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#destination_groups PolicyIntrusionServicePolicy#destination_groups}
  */
  readonly destinationGroups?: string[];
  /**
  * Negation of destination groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#destinations_excluded PolicyIntrusionServicePolicy#destinations_excluded}
  */
  readonly destinationsExcluded?: boolean | cdktf.IResolvable;
  /**
  * Traffic direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#direction PolicyIntrusionServicePolicy#direction}
  */
  readonly direction?: string;
  /**
  * Flag to disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#disabled PolicyIntrusionServicePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#display_name PolicyIntrusionServicePolicy#display_name}
  */
  readonly displayName: string;
  /**
  * List of policy Paths for IDS Profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#ids_profiles PolicyIntrusionServicePolicy#ids_profiles}
  */
  readonly idsProfiles: string[];
  /**
  * IP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#ip_version PolicyIntrusionServicePolicy#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Additional information (string) which will be propagated to the rule syslog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#log_label PolicyIntrusionServicePolicy#log_label}
  */
  readonly logLabel?: string;
  /**
  * Flag to enable packet logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#logged PolicyIntrusionServicePolicy#logged}
  */
  readonly logged?: boolean | cdktf.IResolvable;
  /**
  * Text for additional notes on changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#notes PolicyIntrusionServicePolicy#notes}
  */
  readonly notes?: string;
  /**
  * List of profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#profiles PolicyIntrusionServicePolicy#profiles}
  */
  readonly profiles?: string[];
  /**
  * List of policy paths where the rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#scope PolicyIntrusionServicePolicy#scope}
  */
  readonly scope?: string[];
  /**
  * Sequence number of the this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#sequence_number PolicyIntrusionServicePolicy#sequence_number}
  */
  readonly sequenceNumber?: number;
  /**
  * List of services to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#services PolicyIntrusionServicePolicy#services}
  */
  readonly services?: string[];
  /**
  * List of source groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#source_groups PolicyIntrusionServicePolicy#source_groups}
  */
  readonly sourceGroups?: string[];
  /**
  * Negation of source groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#sources_excluded PolicyIntrusionServicePolicy#sources_excluded}
  */
  readonly sourcesExcluded?: boolean | cdktf.IResolvable;
  /**
  * service_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#service_entries PolicyIntrusionServicePolicy#service_entries}
  */
  readonly serviceEntries?: PolicyIntrusionServicePolicyRuleServiceEntries;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#tag PolicyIntrusionServicePolicy#tag}
  */
  readonly tag?: PolicyIntrusionServicePolicyRuleTag[] | cdktf.IResolvable;
}

export function policyIntrusionServicePolicyRuleToTerraform(struct?: PolicyIntrusionServicePolicyRule | cdktf.IResolvable): any {
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
    ids_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.idsProfiles),
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
    service_entries: policyIntrusionServicePolicyRuleServiceEntriesToTerraform(struct!.serviceEntries),
    tag: cdktf.listMapper(policyIntrusionServicePolicyRuleTagToTerraform, true)(struct!.tag),
  }
}


export function policyIntrusionServicePolicyRuleToHclTerraform(struct?: PolicyIntrusionServicePolicyRule | cdktf.IResolvable): any {
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
    ids_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.idsProfiles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      value: policyIntrusionServicePolicyRuleServiceEntriesToHclTerraform(struct!.serviceEntries),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyIntrusionServicePolicyRuleServiceEntriesList",
    },
    tag: {
      value: cdktf.listMapperHcl(policyIntrusionServicePolicyRuleTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyIntrusionServicePolicyRuleTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIntrusionServicePolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServicePolicyRule | cdktf.IResolvable | undefined {
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
    if (this._idsProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.idsProfiles = this._idsProfiles;
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

  public set internalValue(value: PolicyIntrusionServicePolicyRule | cdktf.IResolvable | undefined) {
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
      this._idsProfiles = undefined;
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
      this._idsProfiles = value.idsProfiles;
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

  // ids_profiles - computed: false, optional: false, required: true
  private _idsProfiles?: string[]; 
  public get idsProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('ids_profiles'));
  }
  public set idsProfiles(value: string[]) {
    this._idsProfiles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsProfilesInput() {
    return this._idsProfiles;
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
  private _serviceEntries = new PolicyIntrusionServicePolicyRuleServiceEntriesOutputReference(this, "service_entries");
  public get serviceEntries() {
    return this._serviceEntries;
  }
  public putServiceEntries(value: PolicyIntrusionServicePolicyRuleServiceEntries) {
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
  private _tag = new PolicyIntrusionServicePolicyRuleTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIntrusionServicePolicyRuleTag[] | cdktf.IResolvable) {
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

export class PolicyIntrusionServicePolicyRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServicePolicyRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServicePolicyRuleOutputReference {
    return new PolicyIntrusionServicePolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIntrusionServicePolicyTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#scope PolicyIntrusionServicePolicy#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#tag PolicyIntrusionServicePolicy#tag}
  */
  readonly tag?: string;
}

export function policyIntrusionServicePolicyTagToTerraform(struct?: PolicyIntrusionServicePolicyTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIntrusionServicePolicyTagToHclTerraform(struct?: PolicyIntrusionServicePolicyTag | cdktf.IResolvable): any {
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

export class PolicyIntrusionServicePolicyTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIntrusionServicePolicyTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIntrusionServicePolicyTag | cdktf.IResolvable | undefined) {
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

export class PolicyIntrusionServicePolicyTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIntrusionServicePolicyTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIntrusionServicePolicyTagOutputReference {
    return new PolicyIntrusionServicePolicyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy nsxt_policy_intrusion_service_policy}
*/
export class PolicyIntrusionServicePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_intrusion_service_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIntrusionServicePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIntrusionServicePolicy to import
  * @param importFromId The id of the existing PolicyIntrusionServicePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIntrusionServicePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_intrusion_service_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_intrusion_service_policy nsxt_policy_intrusion_service_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIntrusionServicePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIntrusionServicePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_intrusion_service_policy',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
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
    this._domain = config.domain;
    this._id = config.id;
    this._locked = config.locked;
    this._nsxId = config.nsxId;
    this._sequenceNumber = config.sequenceNumber;
    this._stateful = config.stateful;
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // context - computed: false, optional: true, required: false
  private _context = new PolicyIntrusionServicePolicyContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyIntrusionServicePolicyContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new PolicyIntrusionServicePolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: PolicyIntrusionServicePolicyRule[] | cdktf.IResolvable) {
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
  private _tag = new PolicyIntrusionServicePolicyTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIntrusionServicePolicyTag[] | cdktf.IResolvable) {
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
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      locked: cdktf.booleanToTerraform(this._locked),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      sequence_number: cdktf.numberToTerraform(this._sequenceNumber),
      stateful: cdktf.booleanToTerraform(this._stateful),
      context: policyIntrusionServicePolicyContextToTerraform(this._context.internalValue),
      rule: cdktf.listMapper(policyIntrusionServicePolicyRuleToTerraform, true)(this._rule.internalValue),
      tag: cdktf.listMapper(policyIntrusionServicePolicyTagToTerraform, true)(this._tag.internalValue),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      context: {
        value: policyIntrusionServicePolicyContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyIntrusionServicePolicyContextList",
      },
      rule: {
        value: cdktf.listMapperHcl(policyIntrusionServicePolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyIntrusionServicePolicyRuleList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyIntrusionServicePolicyTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIntrusionServicePolicyTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
