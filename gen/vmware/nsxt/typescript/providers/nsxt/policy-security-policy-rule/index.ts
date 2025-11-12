// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySecurityPolicyRuleAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#action PolicySecurityPolicyRuleA#action}
  */
  readonly action?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#description PolicySecurityPolicyRuleA#description}
  */
  readonly description?: string;
  /**
  * List of destination groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#destination_groups PolicySecurityPolicyRuleA#destination_groups}
  */
  readonly destinationGroups?: string[];
  /**
  * Negation of destination groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#destinations_excluded PolicySecurityPolicyRuleA#destinations_excluded}
  */
  readonly destinationsExcluded?: boolean | cdktf.IResolvable;
  /**
  * Traffic direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#direction PolicySecurityPolicyRuleA#direction}
  */
  readonly direction?: string;
  /**
  * Flag to disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#disabled PolicySecurityPolicyRuleA#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#display_name PolicySecurityPolicyRuleA#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#id PolicySecurityPolicyRuleA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#ip_version PolicySecurityPolicyRuleA#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Additional information (string) which will be propagated to the rule syslog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#log_label PolicySecurityPolicyRuleA#log_label}
  */
  readonly logLabel?: string;
  /**
  * Flag to enable packet logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#logged PolicySecurityPolicyRuleA#logged}
  */
  readonly logged?: boolean | cdktf.IResolvable;
  /**
  * Text for additional notes on changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#notes PolicySecurityPolicyRuleA#notes}
  */
  readonly notes?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#nsx_id PolicySecurityPolicyRuleA#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Security Policy path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#policy_path PolicySecurityPolicyRuleA#policy_path}
  */
  readonly policyPath: string;
  /**
  * List of profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#profiles PolicySecurityPolicyRuleA#profiles}
  */
  readonly profiles?: string[];
  /**
  * List of policy paths where the rule is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#scope PolicySecurityPolicyRuleA#scope}
  */
  readonly scope?: string[];
  /**
  * Sequence number of the this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#sequence_number PolicySecurityPolicyRuleA#sequence_number}
  */
  readonly sequenceNumber: number;
  /**
  * List of services to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#services PolicySecurityPolicyRuleA#services}
  */
  readonly services?: string[];
  /**
  * List of source groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#source_groups PolicySecurityPolicyRuleA#source_groups}
  */
  readonly sourceGroups?: string[];
  /**
  * Negation of source groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#sources_excluded PolicySecurityPolicyRuleA#sources_excluded}
  */
  readonly sourcesExcluded?: boolean | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#context PolicySecurityPolicyRuleA#context}
  */
  readonly context?: PolicySecurityPolicyRuleContext;
  /**
  * service_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#service_entries PolicySecurityPolicyRuleA#service_entries}
  */
  readonly serviceEntries?: PolicySecurityPolicyRuleServiceEntriesA;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#tag PolicySecurityPolicyRuleA#tag}
  */
  readonly tag?: PolicySecurityPolicyRuleTagA[] | cdktf.IResolvable;
}
export interface PolicySecurityPolicyRuleContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#project_id PolicySecurityPolicyRuleA#project_id}
  */
  readonly projectId: string;
}

export function policySecurityPolicyRuleContextToTerraform(struct?: PolicySecurityPolicyRuleContextOutputReference | PolicySecurityPolicyRuleContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policySecurityPolicyRuleContextToHclTerraform(struct?: PolicySecurityPolicyRuleContextOutputReference | PolicySecurityPolicyRuleContext): any {
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

export class PolicySecurityPolicyRuleContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySecurityPolicyRuleContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySecurityPolicyRuleContext | undefined) {
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
export interface PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryA {
  /**
  * Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#algorithm PolicySecurityPolicyRuleA#algorithm}
  */
  readonly algorithm: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#description PolicySecurityPolicyRuleA#description}
  */
  readonly description?: string;
  /**
  * A single destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#destination_port PolicySecurityPolicyRuleA#destination_port}
  */
  readonly destinationPort: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#display_name PolicySecurityPolicyRuleA#display_name}
  */
  readonly displayName?: string;
  /**
  * Set of source ports or ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#source_ports PolicySecurityPolicyRuleA#source_ports}
  */
  readonly sourcePorts?: string[];
}

export function policySecurityPolicyRuleServiceEntriesAlgorithmEntryAToTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryA | cdktf.IResolvable): any {
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


export function policySecurityPolicyRuleServiceEntriesAlgorithmEntryAToHclTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryA | cdktf.IResolvable): any {
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

export class PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryA | cdktf.IResolvable | undefined) {
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

export class PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryAList extends cdktf.ComplexList {
  public internalValue? : PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryA[] | cdktf.IResolvable

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
  public get(index: number): PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryAOutputReference {
    return new PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryA {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#description PolicySecurityPolicyRuleA#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#display_name PolicySecurityPolicyRuleA#display_name}
  */
  readonly displayName?: string;
  /**
  * Type of the encapsulated protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#ether_type PolicySecurityPolicyRuleA#ether_type}
  */
  readonly etherType: number;
}

export function policySecurityPolicyRuleServiceEntriesEtherTypeEntryAToTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryA | cdktf.IResolvable): any {
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


export function policySecurityPolicyRuleServiceEntriesEtherTypeEntryAToHclTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryA | cdktf.IResolvable): any {
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

export class PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryA | cdktf.IResolvable | undefined) {
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

export class PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryAList extends cdktf.ComplexList {
  public internalValue? : PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryA[] | cdktf.IResolvable

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
  public get(index: number): PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryAOutputReference {
    return new PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySecurityPolicyRuleServiceEntriesIcmpEntryA {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#description PolicySecurityPolicyRuleA#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#display_name PolicySecurityPolicyRuleA#display_name}
  */
  readonly displayName?: string;
  /**
  * ICMP message code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#icmp_code PolicySecurityPolicyRuleA#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * ICMP message type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#icmp_type PolicySecurityPolicyRuleA#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Version of ICMP protocol (ICMPv4/ICMPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#protocol PolicySecurityPolicyRuleA#protocol}
  */
  readonly protocol: string;
}

export function policySecurityPolicyRuleServiceEntriesIcmpEntryAToTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesIcmpEntryA | cdktf.IResolvable): any {
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


export function policySecurityPolicyRuleServiceEntriesIcmpEntryAToHclTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesIcmpEntryA | cdktf.IResolvable): any {
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

export class PolicySecurityPolicyRuleServiceEntriesIcmpEntryAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySecurityPolicyRuleServiceEntriesIcmpEntryA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySecurityPolicyRuleServiceEntriesIcmpEntryA | cdktf.IResolvable | undefined) {
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

export class PolicySecurityPolicyRuleServiceEntriesIcmpEntryAList extends cdktf.ComplexList {
  public internalValue? : PolicySecurityPolicyRuleServiceEntriesIcmpEntryA[] | cdktf.IResolvable

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
  public get(index: number): PolicySecurityPolicyRuleServiceEntriesIcmpEntryAOutputReference {
    return new PolicySecurityPolicyRuleServiceEntriesIcmpEntryAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySecurityPolicyRuleServiceEntriesIgmpEntryA {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#description PolicySecurityPolicyRuleA#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#display_name PolicySecurityPolicyRuleA#display_name}
  */
  readonly displayName?: string;
}

export function policySecurityPolicyRuleServiceEntriesIgmpEntryAToTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesIgmpEntryA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function policySecurityPolicyRuleServiceEntriesIgmpEntryAToHclTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesIgmpEntryA | cdktf.IResolvable): any {
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

export class PolicySecurityPolicyRuleServiceEntriesIgmpEntryAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySecurityPolicyRuleServiceEntriesIgmpEntryA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySecurityPolicyRuleServiceEntriesIgmpEntryA | cdktf.IResolvable | undefined) {
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

export class PolicySecurityPolicyRuleServiceEntriesIgmpEntryAList extends cdktf.ComplexList {
  public internalValue? : PolicySecurityPolicyRuleServiceEntriesIgmpEntryA[] | cdktf.IResolvable

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
  public get(index: number): PolicySecurityPolicyRuleServiceEntriesIgmpEntryAOutputReference {
    return new PolicySecurityPolicyRuleServiceEntriesIgmpEntryAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryA {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#description PolicySecurityPolicyRuleA#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#display_name PolicySecurityPolicyRuleA#display_name}
  */
  readonly displayName?: string;
  /**
  * IP protocol number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#protocol PolicySecurityPolicyRuleA#protocol}
  */
  readonly protocol: number;
}

export function policySecurityPolicyRuleServiceEntriesIpProtocolEntryAToTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryA | cdktf.IResolvable): any {
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


export function policySecurityPolicyRuleServiceEntriesIpProtocolEntryAToHclTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryA | cdktf.IResolvable): any {
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

export class PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryA | cdktf.IResolvable | undefined) {
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

export class PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryAList extends cdktf.ComplexList {
  public internalValue? : PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryA[] | cdktf.IResolvable

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
  public get(index: number): PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryAOutputReference {
    return new PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryA {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#description PolicySecurityPolicyRuleA#description}
  */
  readonly description?: string;
  /**
  * Set of destination ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#destination_ports PolicySecurityPolicyRuleA#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#display_name PolicySecurityPolicyRuleA#display_name}
  */
  readonly displayName?: string;
  /**
  * L4 Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#protocol PolicySecurityPolicyRuleA#protocol}
  */
  readonly protocol: string;
  /**
  * Set of source ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#source_ports PolicySecurityPolicyRuleA#source_ports}
  */
  readonly sourcePorts?: string[];
}

export function policySecurityPolicyRuleServiceEntriesL4PortSetEntryAToTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryA | cdktf.IResolvable): any {
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


export function policySecurityPolicyRuleServiceEntriesL4PortSetEntryAToHclTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryA | cdktf.IResolvable): any {
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

export class PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryA | cdktf.IResolvable | undefined) {
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

export class PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryAList extends cdktf.ComplexList {
  public internalValue? : PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryA[] | cdktf.IResolvable

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
  public get(index: number): PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryAOutputReference {
    return new PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySecurityPolicyRuleServiceEntriesA {
  /**
  * algorithm_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#algorithm_entry PolicySecurityPolicyRuleA#algorithm_entry}
  */
  readonly algorithmEntry?: PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryA[] | cdktf.IResolvable;
  /**
  * ether_type_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#ether_type_entry PolicySecurityPolicyRuleA#ether_type_entry}
  */
  readonly etherTypeEntry?: PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryA[] | cdktf.IResolvable;
  /**
  * icmp_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#icmp_entry PolicySecurityPolicyRuleA#icmp_entry}
  */
  readonly icmpEntry?: PolicySecurityPolicyRuleServiceEntriesIcmpEntryA[] | cdktf.IResolvable;
  /**
  * igmp_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#igmp_entry PolicySecurityPolicyRuleA#igmp_entry}
  */
  readonly igmpEntry?: PolicySecurityPolicyRuleServiceEntriesIgmpEntryA[] | cdktf.IResolvable;
  /**
  * ip_protocol_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#ip_protocol_entry PolicySecurityPolicyRuleA#ip_protocol_entry}
  */
  readonly ipProtocolEntry?: PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryA[] | cdktf.IResolvable;
  /**
  * l4_port_set_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#l4_port_set_entry PolicySecurityPolicyRuleA#l4_port_set_entry}
  */
  readonly l4PortSetEntry?: PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryA[] | cdktf.IResolvable;
}

export function policySecurityPolicyRuleServiceEntriesAToTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesAOutputReference | PolicySecurityPolicyRuleServiceEntriesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_entry: cdktf.listMapper(policySecurityPolicyRuleServiceEntriesAlgorithmEntryAToTerraform, true)(struct!.algorithmEntry),
    ether_type_entry: cdktf.listMapper(policySecurityPolicyRuleServiceEntriesEtherTypeEntryAToTerraform, true)(struct!.etherTypeEntry),
    icmp_entry: cdktf.listMapper(policySecurityPolicyRuleServiceEntriesIcmpEntryAToTerraform, true)(struct!.icmpEntry),
    igmp_entry: cdktf.listMapper(policySecurityPolicyRuleServiceEntriesIgmpEntryAToTerraform, true)(struct!.igmpEntry),
    ip_protocol_entry: cdktf.listMapper(policySecurityPolicyRuleServiceEntriesIpProtocolEntryAToTerraform, true)(struct!.ipProtocolEntry),
    l4_port_set_entry: cdktf.listMapper(policySecurityPolicyRuleServiceEntriesL4PortSetEntryAToTerraform, true)(struct!.l4PortSetEntry),
  }
}


export function policySecurityPolicyRuleServiceEntriesAToHclTerraform(struct?: PolicySecurityPolicyRuleServiceEntriesAOutputReference | PolicySecurityPolicyRuleServiceEntriesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_entry: {
      value: cdktf.listMapperHcl(policySecurityPolicyRuleServiceEntriesAlgorithmEntryAToHclTerraform, true)(struct!.algorithmEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryAList",
    },
    ether_type_entry: {
      value: cdktf.listMapperHcl(policySecurityPolicyRuleServiceEntriesEtherTypeEntryAToHclTerraform, true)(struct!.etherTypeEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryAList",
    },
    icmp_entry: {
      value: cdktf.listMapperHcl(policySecurityPolicyRuleServiceEntriesIcmpEntryAToHclTerraform, true)(struct!.icmpEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySecurityPolicyRuleServiceEntriesIcmpEntryAList",
    },
    igmp_entry: {
      value: cdktf.listMapperHcl(policySecurityPolicyRuleServiceEntriesIgmpEntryAToHclTerraform, true)(struct!.igmpEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySecurityPolicyRuleServiceEntriesIgmpEntryAList",
    },
    ip_protocol_entry: {
      value: cdktf.listMapperHcl(policySecurityPolicyRuleServiceEntriesIpProtocolEntryAToHclTerraform, true)(struct!.ipProtocolEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryAList",
    },
    l4_port_set_entry: {
      value: cdktf.listMapperHcl(policySecurityPolicyRuleServiceEntriesL4PortSetEntryAToHclTerraform, true)(struct!.l4PortSetEntry),
      isBlock: true,
      type: "set",
      storageClassType: "PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySecurityPolicyRuleServiceEntriesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySecurityPolicyRuleServiceEntriesA | undefined {
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

  public set internalValue(value: PolicySecurityPolicyRuleServiceEntriesA | undefined) {
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
  private _algorithmEntry = new PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryAList(this, "algorithm_entry", true);
  public get algorithmEntry() {
    return this._algorithmEntry;
  }
  public putAlgorithmEntry(value: PolicySecurityPolicyRuleServiceEntriesAlgorithmEntryA[] | cdktf.IResolvable) {
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
  private _etherTypeEntry = new PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryAList(this, "ether_type_entry", true);
  public get etherTypeEntry() {
    return this._etherTypeEntry;
  }
  public putEtherTypeEntry(value: PolicySecurityPolicyRuleServiceEntriesEtherTypeEntryA[] | cdktf.IResolvable) {
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
  private _icmpEntry = new PolicySecurityPolicyRuleServiceEntriesIcmpEntryAList(this, "icmp_entry", true);
  public get icmpEntry() {
    return this._icmpEntry;
  }
  public putIcmpEntry(value: PolicySecurityPolicyRuleServiceEntriesIcmpEntryA[] | cdktf.IResolvable) {
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
  private _igmpEntry = new PolicySecurityPolicyRuleServiceEntriesIgmpEntryAList(this, "igmp_entry", true);
  public get igmpEntry() {
    return this._igmpEntry;
  }
  public putIgmpEntry(value: PolicySecurityPolicyRuleServiceEntriesIgmpEntryA[] | cdktf.IResolvable) {
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
  private _ipProtocolEntry = new PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryAList(this, "ip_protocol_entry", true);
  public get ipProtocolEntry() {
    return this._ipProtocolEntry;
  }
  public putIpProtocolEntry(value: PolicySecurityPolicyRuleServiceEntriesIpProtocolEntryA[] | cdktf.IResolvable) {
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
  private _l4PortSetEntry = new PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryAList(this, "l4_port_set_entry", true);
  public get l4PortSetEntry() {
    return this._l4PortSetEntry;
  }
  public putL4PortSetEntry(value: PolicySecurityPolicyRuleServiceEntriesL4PortSetEntryA[] | cdktf.IResolvable) {
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
export interface PolicySecurityPolicyRuleTagA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#scope PolicySecurityPolicyRuleA#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#tag PolicySecurityPolicyRuleA#tag}
  */
  readonly tag?: string;
}

export function policySecurityPolicyRuleTagAToTerraform(struct?: PolicySecurityPolicyRuleTagA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policySecurityPolicyRuleTagAToHclTerraform(struct?: PolicySecurityPolicyRuleTagA | cdktf.IResolvable): any {
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

export class PolicySecurityPolicyRuleTagAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySecurityPolicyRuleTagA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySecurityPolicyRuleTagA | cdktf.IResolvable | undefined) {
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

export class PolicySecurityPolicyRuleTagAList extends cdktf.ComplexList {
  public internalValue? : PolicySecurityPolicyRuleTagA[] | cdktf.IResolvable

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
  public get(index: number): PolicySecurityPolicyRuleTagAOutputReference {
    return new PolicySecurityPolicyRuleTagAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule nsxt_policy_security_policy_rule}
*/
export class PolicySecurityPolicyRuleA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_security_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySecurityPolicyRuleA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySecurityPolicyRuleA to import
  * @param importFromId The id of the existing PolicySecurityPolicyRuleA that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySecurityPolicyRuleA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_security_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_security_policy_rule nsxt_policy_security_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySecurityPolicyRuleAConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySecurityPolicyRuleAConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_security_policy_rule',
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
    this._action = config.action;
    this._description = config.description;
    this._destinationGroups = config.destinationGroups;
    this._destinationsExcluded = config.destinationsExcluded;
    this._direction = config.direction;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._logLabel = config.logLabel;
    this._logged = config.logged;
    this._notes = config.notes;
    this._nsxId = config.nsxId;
    this._policyPath = config.policyPath;
    this._profiles = config.profiles;
    this._scope = config.scope;
    this._sequenceNumber = config.sequenceNumber;
    this._services = config.services;
    this._sourceGroups = config.sourceGroups;
    this._sourcesExcluded = config.sourcesExcluded;
    this._context.internalValue = config.context;
    this._serviceEntries.internalValue = config.serviceEntries;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policy_path - computed: false, optional: false, required: true
  private _policyPath?: string; 
  public get policyPath() {
    return this.getStringAttribute('policy_path');
  }
  public set policyPath(value: string) {
    this._policyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPathInput() {
    return this._policyPath;
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

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
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

  // context - computed: false, optional: true, required: false
  private _context = new PolicySecurityPolicyRuleContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicySecurityPolicyRuleContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // service_entries - computed: false, optional: true, required: false
  private _serviceEntries = new PolicySecurityPolicyRuleServiceEntriesAOutputReference(this, "service_entries");
  public get serviceEntries() {
    return this._serviceEntries;
  }
  public putServiceEntries(value: PolicySecurityPolicyRuleServiceEntriesA) {
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
  private _tag = new PolicySecurityPolicyRuleTagAList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicySecurityPolicyRuleTagA[] | cdktf.IResolvable) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      destination_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationGroups),
      destinations_excluded: cdktf.booleanToTerraform(this._destinationsExcluded),
      direction: cdktf.stringToTerraform(this._direction),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      log_label: cdktf.stringToTerraform(this._logLabel),
      logged: cdktf.booleanToTerraform(this._logged),
      notes: cdktf.stringToTerraform(this._notes),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      policy_path: cdktf.stringToTerraform(this._policyPath),
      profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profiles),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      sequence_number: cdktf.numberToTerraform(this._sequenceNumber),
      services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._services),
      source_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceGroups),
      sources_excluded: cdktf.booleanToTerraform(this._sourcesExcluded),
      context: policySecurityPolicyRuleContextToTerraform(this._context.internalValue),
      service_entries: policySecurityPolicyRuleServiceEntriesAToTerraform(this._serviceEntries.internalValue),
      tag: cdktf.listMapper(policySecurityPolicyRuleTagAToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      destination_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      destinations_excluded: {
        value: cdktf.booleanToHclTerraform(this._destinationsExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_label: {
        value: cdktf.stringToHclTerraform(this._logLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logged: {
        value: cdktf.booleanToHclTerraform(this._logged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_path: {
        value: cdktf.stringToHclTerraform(this._policyPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sequence_number: {
        value: cdktf.numberToHclTerraform(this._sequenceNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._services),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sources_excluded: {
        value: cdktf.booleanToHclTerraform(this._sourcesExcluded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context: {
        value: policySecurityPolicyRuleContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySecurityPolicyRuleContextList",
      },
      service_entries: {
        value: policySecurityPolicyRuleServiceEntriesAToHclTerraform(this._serviceEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySecurityPolicyRuleServiceEntriesAList",
      },
      tag: {
        value: cdktf.listMapperHcl(policySecurityPolicyRuleTagAToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicySecurityPolicyRuleTagAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
