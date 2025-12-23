// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DistributedFirewallingPolicyListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#id DistributedFirewallingPolicyList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#policies DistributedFirewallingPolicyList#policies}
  */
  readonly policies: DistributedFirewallingPolicyListPolicies[] | cdktf.IResolvable;
}
export interface DistributedFirewallingPolicyListPoliciesPortRanges {
  /**
  * Upper bound of port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#hi DistributedFirewallingPolicyList#hi}
  */
  readonly hi?: number;
  /**
  * Lower bound of port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#lo DistributedFirewallingPolicyList#lo}
  */
  readonly lo: number;
}

export function distributedFirewallingPolicyListPoliciesPortRangesToTerraform(struct?: DistributedFirewallingPolicyListPoliciesPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hi: cdktf.numberToTerraform(struct!.hi),
    lo: cdktf.numberToTerraform(struct!.lo),
  }
}


export function distributedFirewallingPolicyListPoliciesPortRangesToHclTerraform(struct?: DistributedFirewallingPolicyListPoliciesPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hi: {
      value: cdktf.numberToHclTerraform(struct!.hi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lo: {
      value: cdktf.numberToHclTerraform(struct!.lo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DistributedFirewallingPolicyListPoliciesPortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DistributedFirewallingPolicyListPoliciesPortRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hi !== undefined) {
      hasAnyValues = true;
      internalValueResult.hi = this._hi;
    }
    if (this._lo !== undefined) {
      hasAnyValues = true;
      internalValueResult.lo = this._lo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DistributedFirewallingPolicyListPoliciesPortRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hi = undefined;
      this._lo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hi = value.hi;
      this._lo = value.lo;
    }
  }

  // hi - computed: false, optional: true, required: false
  private _hi?: number; 
  public get hi() {
    return this.getNumberAttribute('hi');
  }
  public set hi(value: number) {
    this._hi = value;
  }
  public resetHi() {
    this._hi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiInput() {
    return this._hi;
  }

  // lo - computed: false, optional: false, required: true
  private _lo?: number; 
  public get lo() {
    return this.getNumberAttribute('lo');
  }
  public set lo(value: number) {
    this._lo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loInput() {
    return this._lo;
  }
}

export class DistributedFirewallingPolicyListPoliciesPortRangesList extends cdktf.ComplexList {
  public internalValue? : DistributedFirewallingPolicyListPoliciesPortRanges[] | cdktf.IResolvable

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
  public get(index: number): DistributedFirewallingPolicyListPoliciesPortRangesOutputReference {
    return new DistributedFirewallingPolicyListPoliciesPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DistributedFirewallingPolicyListPolicies {
  /**
  * Action for the specified source and destination Smart Groups.Must be one of PERMIT or DENY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#action DistributedFirewallingPolicyList#action}
  */
  readonly action: string;
  /**
  * Decryption options for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#decrypt_policy DistributedFirewallingPolicyList#decrypt_policy}
  */
  readonly decryptPolicy?: string;
  /**
  * Set of destination Smart Group UUIDs for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#dst_smart_groups DistributedFirewallingPolicyList#dst_smart_groups}
  */
  readonly dstSmartGroups: string[];
  /**
  * If this flag is set to true, this policy will be ignored for SG orchestration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#exclude_sg_orchestration DistributedFirewallingPolicyList#exclude_sg_orchestration}
  */
  readonly excludeSgOrchestration?: boolean | cdktf.IResolvable;
  /**
  * Flow application requirement for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#flow_app_requirement DistributedFirewallingPolicyList#flow_app_requirement}
  */
  readonly flowAppRequirement?: string;
  /**
  * Log profile UUID for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#log_profile DistributedFirewallingPolicyList#log_profile}
  */
  readonly logProfile?: string;
  /**
  * Whether to enable logging for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#logging DistributedFirewallingPolicyList#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * Name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#name DistributedFirewallingPolicyList#name}
  */
  readonly name: string;
  /**
  * Priority level of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#priority DistributedFirewallingPolicyList#priority}
  */
  readonly priority?: number;
  /**
  * Protocol for the policy to filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#protocol DistributedFirewallingPolicyList#protocol}
  */
  readonly protocol: string;
  /**
  * Set of source Smart Group UUIDs for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#src_smart_groups DistributedFirewallingPolicyList#src_smart_groups}
  */
  readonly srcSmartGroups: string[];
  /**
  * TLS profile UUID for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#tls_profile DistributedFirewallingPolicyList#tls_profile}
  */
  readonly tlsProfile?: string;
  /**
  * Whether to enable watch mode for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#watch DistributedFirewallingPolicyList#watch}
  */
  readonly watch?: boolean | cdktf.IResolvable;
  /**
  * Set of Web Group UUIDs for the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#web_groups DistributedFirewallingPolicyList#web_groups}
  */
  readonly webGroups?: string[];
  /**
  * port_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#port_ranges DistributedFirewallingPolicyList#port_ranges}
  */
  readonly portRanges?: DistributedFirewallingPolicyListPoliciesPortRanges[] | cdktf.IResolvable;
}

export function distributedFirewallingPolicyListPoliciesToTerraform(struct?: DistributedFirewallingPolicyListPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    decrypt_policy: cdktf.stringToTerraform(struct!.decryptPolicy),
    dst_smart_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstSmartGroups),
    exclude_sg_orchestration: cdktf.booleanToTerraform(struct!.excludeSgOrchestration),
    flow_app_requirement: cdktf.stringToTerraform(struct!.flowAppRequirement),
    log_profile: cdktf.stringToTerraform(struct!.logProfile),
    logging: cdktf.booleanToTerraform(struct!.logging),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_smart_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcSmartGroups),
    tls_profile: cdktf.stringToTerraform(struct!.tlsProfile),
    watch: cdktf.booleanToTerraform(struct!.watch),
    web_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webGroups),
    port_ranges: cdktf.listMapper(distributedFirewallingPolicyListPoliciesPortRangesToTerraform, true)(struct!.portRanges),
  }
}


export function distributedFirewallingPolicyListPoliciesToHclTerraform(struct?: DistributedFirewallingPolicyListPolicies | cdktf.IResolvable): any {
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
    decrypt_policy: {
      value: cdktf.stringToHclTerraform(struct!.decryptPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_smart_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstSmartGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    exclude_sg_orchestration: {
      value: cdktf.booleanToHclTerraform(struct!.excludeSgOrchestration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flow_app_requirement: {
      value: cdktf.stringToHclTerraform(struct!.flowAppRequirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_profile: {
      value: cdktf.stringToHclTerraform(struct!.logProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.booleanToHclTerraform(struct!.logging),
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
    src_smart_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcSmartGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tls_profile: {
      value: cdktf.stringToHclTerraform(struct!.tlsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watch: {
      value: cdktf.booleanToHclTerraform(struct!.watch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port_ranges: {
      value: cdktf.listMapperHcl(distributedFirewallingPolicyListPoliciesPortRangesToHclTerraform, true)(struct!.portRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DistributedFirewallingPolicyListPoliciesPortRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DistributedFirewallingPolicyListPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DistributedFirewallingPolicyListPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._decryptPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptPolicy = this._decryptPolicy;
    }
    if (this._dstSmartGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSmartGroups = this._dstSmartGroups;
    }
    if (this._excludeSgOrchestration !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSgOrchestration = this._excludeSgOrchestration;
    }
    if (this._flowAppRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowAppRequirement = this._flowAppRequirement;
    }
    if (this._logProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.logProfile = this._logProfile;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcSmartGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSmartGroups = this._srcSmartGroups;
    }
    if (this._tlsProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsProfile = this._tlsProfile;
    }
    if (this._watch !== undefined) {
      hasAnyValues = true;
      internalValueResult.watch = this._watch;
    }
    if (this._webGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.webGroups = this._webGroups;
    }
    if (this._portRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DistributedFirewallingPolicyListPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._decryptPolicy = undefined;
      this._dstSmartGroups = undefined;
      this._excludeSgOrchestration = undefined;
      this._flowAppRequirement = undefined;
      this._logProfile = undefined;
      this._logging = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._srcSmartGroups = undefined;
      this._tlsProfile = undefined;
      this._watch = undefined;
      this._webGroups = undefined;
      this._portRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._decryptPolicy = value.decryptPolicy;
      this._dstSmartGroups = value.dstSmartGroups;
      this._excludeSgOrchestration = value.excludeSgOrchestration;
      this._flowAppRequirement = value.flowAppRequirement;
      this._logProfile = value.logProfile;
      this._logging = value.logging;
      this._name = value.name;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._srcSmartGroups = value.srcSmartGroups;
      this._tlsProfile = value.tlsProfile;
      this._watch = value.watch;
      this._webGroups = value.webGroups;
      this._portRanges.internalValue = value.portRanges;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // decrypt_policy - computed: false, optional: true, required: false
  private _decryptPolicy?: string; 
  public get decryptPolicy() {
    return this.getStringAttribute('decrypt_policy');
  }
  public set decryptPolicy(value: string) {
    this._decryptPolicy = value;
  }
  public resetDecryptPolicy() {
    this._decryptPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptPolicyInput() {
    return this._decryptPolicy;
  }

  // dst_smart_groups - computed: false, optional: false, required: true
  private _dstSmartGroups?: string[]; 
  public get dstSmartGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('dst_smart_groups'));
  }
  public set dstSmartGroups(value: string[]) {
    this._dstSmartGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSmartGroupsInput() {
    return this._dstSmartGroups;
  }

  // exclude_sg_orchestration - computed: false, optional: true, required: false
  private _excludeSgOrchestration?: boolean | cdktf.IResolvable; 
  public get excludeSgOrchestration() {
    return this.getBooleanAttribute('exclude_sg_orchestration');
  }
  public set excludeSgOrchestration(value: boolean | cdktf.IResolvable) {
    this._excludeSgOrchestration = value;
  }
  public resetExcludeSgOrchestration() {
    this._excludeSgOrchestration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSgOrchestrationInput() {
    return this._excludeSgOrchestration;
  }

  // flow_app_requirement - computed: false, optional: true, required: false
  private _flowAppRequirement?: string; 
  public get flowAppRequirement() {
    return this.getStringAttribute('flow_app_requirement');
  }
  public set flowAppRequirement(value: string) {
    this._flowAppRequirement = value;
  }
  public resetFlowAppRequirement() {
    this._flowAppRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowAppRequirementInput() {
    return this._flowAppRequirement;
  }

  // log_profile - computed: false, optional: true, required: false
  private _logProfile?: string; 
  public get logProfile() {
    return this.getStringAttribute('log_profile');
  }
  public set logProfile(value: string) {
    this._logProfile = value;
  }
  public resetLogProfile() {
    this._logProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProfileInput() {
    return this._logProfile;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
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

  // src_smart_groups - computed: false, optional: false, required: true
  private _srcSmartGroups?: string[]; 
  public get srcSmartGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('src_smart_groups'));
  }
  public set srcSmartGroups(value: string[]) {
    this._srcSmartGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSmartGroupsInput() {
    return this._srcSmartGroups;
  }

  // tls_profile - computed: false, optional: true, required: false
  private _tlsProfile?: string; 
  public get tlsProfile() {
    return this.getStringAttribute('tls_profile');
  }
  public set tlsProfile(value: string) {
    this._tlsProfile = value;
  }
  public resetTlsProfile() {
    this._tlsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProfileInput() {
    return this._tlsProfile;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // watch - computed: false, optional: true, required: false
  private _watch?: boolean | cdktf.IResolvable; 
  public get watch() {
    return this.getBooleanAttribute('watch');
  }
  public set watch(value: boolean | cdktf.IResolvable) {
    this._watch = value;
  }
  public resetWatch() {
    this._watch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchInput() {
    return this._watch;
  }

  // web_groups - computed: false, optional: true, required: false
  private _webGroups?: string[]; 
  public get webGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('web_groups'));
  }
  public set webGroups(value: string[]) {
    this._webGroups = value;
  }
  public resetWebGroups() {
    this._webGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webGroupsInput() {
    return this._webGroups;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges = new DistributedFirewallingPolicyListPoliciesPortRangesList(this, "port_ranges", false);
  public get portRanges() {
    return this._portRanges;
  }
  public putPortRanges(value: DistributedFirewallingPolicyListPoliciesPortRanges[] | cdktf.IResolvable) {
    this._portRanges.internalValue = value;
  }
  public resetPortRanges() {
    this._portRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges.internalValue;
  }
}

export class DistributedFirewallingPolicyListPoliciesList extends cdktf.ComplexList {
  public internalValue? : DistributedFirewallingPolicyListPolicies[] | cdktf.IResolvable

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
  public get(index: number): DistributedFirewallingPolicyListPoliciesOutputReference {
    return new DistributedFirewallingPolicyListPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list aviatrix_distributed_firewalling_policy_list}
*/
export class DistributedFirewallingPolicyList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_distributed_firewalling_policy_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DistributedFirewallingPolicyList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DistributedFirewallingPolicyList to import
  * @param importFromId The id of the existing DistributedFirewallingPolicyList that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DistributedFirewallingPolicyList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_distributed_firewalling_policy_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/distributed_firewalling_policy_list aviatrix_distributed_firewalling_policy_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DistributedFirewallingPolicyListConfig
  */
  public constructor(scope: Construct, id: string, config: DistributedFirewallingPolicyListConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_distributed_firewalling_policy_list',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
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
    this._policies.internalValue = config.policies;
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

  // policies - computed: false, optional: false, required: true
  private _policies = new DistributedFirewallingPolicyListPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DistributedFirewallingPolicyListPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policies: cdktf.listMapper(distributedFirewallingPolicyListPoliciesToTerraform, true)(this._policies.internalValue),
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
      policies: {
        value: cdktf.listMapperHcl(distributedFirewallingPolicyListPoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DistributedFirewallingPolicyListPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
