// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access codes assigned to Security Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#access_codes TdSecurityPolicy#access_codes}
  */
  readonly accessCodes?: string[];
  /**
  * The policy-level action gets applied when none of the policy rules apply/match. The default value for default_action is "action_allow".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#default_action TdSecurityPolicy#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Name of the custom redirect, if the default_action is "action_redirect".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#default_redirect_name TdSecurityPolicy#default_redirect_name}
  */
  readonly defaultRedirectName?: string;
  /**
  * The brief description for the security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#description TdSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * The list of DNS Forwarding Proxy object identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#dfps TdSecurityPolicy#dfps}
  */
  readonly dfps?: number[];
  /**
  * Use ECS for handling policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#ecs TdSecurityPolicy#ecs}
  */
  readonly ecs?: boolean | cdktf.IResolvable;
  /**
  * The name of the security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#name TdSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * List of DFPs associated with this policy via network address (with corresponding network address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#net_address_dfps TdSecurityPolicy#net_address_dfps}
  */
  readonly netAddressDfps?: TdSecurityPolicyNetAddressDfps[] | cdktf.IResolvable;
  /**
  * The list of Network Lists identifiers that represents networks that you want to protect from malicious attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#network_lists TdSecurityPolicy#network_lists}
  */
  readonly networkLists?: number[];
  /**
  * Use DNS resolve on onprem side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#onprem_resolve TdSecurityPolicy#onprem_resolve}
  */
  readonly onpremResolve?: boolean | cdktf.IResolvable;
  /**
  * Security precedence enable selection of the highest priority policy, in cases where a query matches multiple policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#precedence TdSecurityPolicy#precedence}
  */
  readonly precedence?: number;
  /**
  * The list of BloxOne Endpoint groups identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#roaming_device_groups TdSecurityPolicy#roaming_device_groups}
  */
  readonly roamingDeviceGroups?: number[];
  /**
  * The list of Security Policy Rules objects that represent the set of rules and actions that you define to balance access and constraints so you can mitigate malicious attacks and provide security for your networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#rules TdSecurityPolicy#rules}
  */
  readonly rules?: TdSecurityPolicyRules[] | cdktf.IResolvable;
  /**
  * Apply automated rules to enforce safe search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#safe_search TdSecurityPolicy#safe_search}
  */
  readonly safeSearch?: boolean | cdktf.IResolvable;
  /**
  * Enables tag support for resource where tags attribute contains user-defined key value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#tags TdSecurityPolicy#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * List of user groups associated with this policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#user_groups TdSecurityPolicy#user_groups}
  */
  readonly userGroups?: string[];
}
export interface TdSecurityPolicyNetAddressDfps {
  /**
  * network address in IPv4 CIDR (address/bitmask length) string format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#addr_net TdSecurityPolicy#addr_net}
  */
  readonly addrNet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#end TdSecurityPolicy#end}
  */
  readonly end?: string;
  /**
  * external scope ID, UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#external_scope_id TdSecurityPolicy#external_scope_id}
  */
  readonly externalScopeId?: string;
  /**
  * Host reference, UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#host_id TdSecurityPolicy#host_id}
  */
  readonly hostId?: string;
  /**
  * IPSpace reference, UUID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#ip_space_id TdSecurityPolicy#ip_space_id}
  */
  readonly ipSpaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#scope_type TdSecurityPolicy#scope_type}
  */
  readonly scopeType?: string;
  /**
  * Start and end pair of addresses used for range scope type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#start TdSecurityPolicy#start}
  */
  readonly start?: string;
}

export function tdSecurityPolicyNetAddressDfpsToTerraform(struct?: TdSecurityPolicyNetAddressDfps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_net: cdktf.stringToTerraform(struct!.addrNet),
    end: cdktf.stringToTerraform(struct!.end),
    external_scope_id: cdktf.stringToTerraform(struct!.externalScopeId),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    ip_space_id: cdktf.stringToTerraform(struct!.ipSpaceId),
    scope_type: cdktf.stringToTerraform(struct!.scopeType),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function tdSecurityPolicyNetAddressDfpsToHclTerraform(struct?: TdSecurityPolicyNetAddressDfps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_net: {
      value: cdktf.stringToHclTerraform(struct!.addrNet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_scope_id: {
      value: cdktf.stringToHclTerraform(struct!.externalScopeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_space_id: {
      value: cdktf.stringToHclTerraform(struct!.ipSpaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope_type: {
      value: cdktf.stringToHclTerraform(struct!.scopeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TdSecurityPolicyNetAddressDfpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TdSecurityPolicyNetAddressDfps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrNet !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrNet = this._addrNet;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._externalScopeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalScopeId = this._externalScopeId;
    }
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._ipSpaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSpaceId = this._ipSpaceId;
    }
    if (this._scopeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeType = this._scopeType;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TdSecurityPolicyNetAddressDfps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrNet = undefined;
      this._end = undefined;
      this._externalScopeId = undefined;
      this._hostId = undefined;
      this._ipSpaceId = undefined;
      this._scopeType = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrNet = value.addrNet;
      this._end = value.end;
      this._externalScopeId = value.externalScopeId;
      this._hostId = value.hostId;
      this._ipSpaceId = value.ipSpaceId;
      this._scopeType = value.scopeType;
      this._start = value.start;
    }
  }

  // addr_net - computed: false, optional: true, required: false
  private _addrNet?: string; 
  public get addrNet() {
    return this.getStringAttribute('addr_net');
  }
  public set addrNet(value: string) {
    this._addrNet = value;
  }
  public resetAddrNet() {
    this._addrNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrNetInput() {
    return this._addrNet;
  }

  // dfp_ids - computed: true, optional: false, required: false
  public get dfpIds() {
    return this.getNumberListAttribute('dfp_ids');
  }

  // dfp_service_ids - computed: true, optional: false, required: false
  public get dfpServiceIds() {
    return this.getListAttribute('dfp_service_ids');
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // external_scope_id - computed: false, optional: true, required: false
  private _externalScopeId?: string; 
  public get externalScopeId() {
    return this.getStringAttribute('external_scope_id');
  }
  public set externalScopeId(value: string) {
    this._externalScopeId = value;
  }
  public resetExternalScopeId() {
    this._externalScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalScopeIdInput() {
    return this._externalScopeId;
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // ip_space_id - computed: false, optional: true, required: false
  private _ipSpaceId?: string; 
  public get ipSpaceId() {
    return this.getStringAttribute('ip_space_id');
  }
  public set ipSpaceId(value: string) {
    this._ipSpaceId = value;
  }
  public resetIpSpaceId() {
    this._ipSpaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceIdInput() {
    return this._ipSpaceId;
  }

  // scope_type - computed: true, optional: true, required: false
  private _scopeType?: string; 
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }
  public set scopeType(value: string) {
    this._scopeType = value;
  }
  public resetScopeType() {
    this._scopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeTypeInput() {
    return this._scopeType;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class TdSecurityPolicyNetAddressDfpsList extends cdktf.ComplexList {
  public internalValue? : TdSecurityPolicyNetAddressDfps[] | cdktf.IResolvable

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
  public get(index: number): TdSecurityPolicyNetAddressDfpsOutputReference {
    return new TdSecurityPolicyNetAddressDfpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TdSecurityPolicyRules {
  /**
  * The action for the policy rule that can be either "action_allow" or "action_log" or "action_redirect" or "action_block" or "action_allow_with_local_resolution". "action_allow_with_local_resolution" only supported for application filter rule with enabled onprem_resolve flag on the Security policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#action TdSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * The data source for the policy rule, that can be either a name of the predefined feed for "named_feed", custom list name for "custom_list" type, category filter name for "category_filter" type and application filter name for "application_filter" type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#data TdSecurityPolicy#data}
  */
  readonly data?: string;
  /**
  * The name of the security policy with which the policy rule is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#policy_name TdSecurityPolicy#policy_name}
  */
  readonly policyName?: string;
  /**
  * The name of the redirect address for redirect actions that can be either IPv4 address or a domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#redirect_name TdSecurityPolicy#redirect_name}
  */
  readonly redirectName?: string;
  /**
  * The policy rule type that can be either "named_feed" or "custom_list" or "category_filter" or "application_filter".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#type TdSecurityPolicy#type}
  */
  readonly type?: string;
}

export function tdSecurityPolicyRulesToTerraform(struct?: TdSecurityPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    data: cdktf.stringToTerraform(struct!.data),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    redirect_name: cdktf.stringToTerraform(struct!.redirectName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tdSecurityPolicyRulesToHclTerraform(struct?: TdSecurityPolicyRules | cdktf.IResolvable): any {
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
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_name: {
      value: cdktf.stringToHclTerraform(struct!.redirectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class TdSecurityPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TdSecurityPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._redirectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectName = this._redirectName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TdSecurityPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._data = undefined;
      this._policyName = undefined;
      this._redirectName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._data = value.data;
      this._policyName = value.policyName;
      this._redirectName = value.redirectName;
      this._type = value.type;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // data - computed: true, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // list_id - computed: true, optional: false, required: false
  public get listId() {
    return this.getNumberAttribute('list_id');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }

  // policy_name - computed: true, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // redirect_name - computed: true, optional: true, required: false
  private _redirectName?: string; 
  public get redirectName() {
    return this.getStringAttribute('redirect_name');
  }
  public set redirectName(value: string) {
    this._redirectName = value;
  }
  public resetRedirectName() {
    this._redirectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectNameInput() {
    return this._redirectName;
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

export class TdSecurityPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : TdSecurityPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): TdSecurityPolicyRulesOutputReference {
    return new TdSecurityPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy bloxone_td_security_policy}
*/
export class TdSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_td_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdSecurityPolicy to import
  * @param importFromId The id of the existing TdSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_td_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/td_security_policy bloxone_td_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TdSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_td_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessCodes = config.accessCodes;
    this._defaultAction = config.defaultAction;
    this._defaultRedirectName = config.defaultRedirectName;
    this._description = config.description;
    this._dfps = config.dfps;
    this._ecs = config.ecs;
    this._name = config.name;
    this._netAddressDfps.internalValue = config.netAddressDfps;
    this._networkLists = config.networkLists;
    this._onpremResolve = config.onpremResolve;
    this._precedence = config.precedence;
    this._roamingDeviceGroups = config.roamingDeviceGroups;
    this._rules.internalValue = config.rules;
    this._safeSearch = config.safeSearch;
    this._tags = config.tags;
    this._userGroups = config.userGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_codes - computed: true, optional: true, required: false
  private _accessCodes?: string[]; 
  public get accessCodes() {
    return this.getListAttribute('access_codes');
  }
  public set accessCodes(value: string[]) {
    this._accessCodes = value;
  }
  public resetAccessCodes() {
    this._accessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessCodesInput() {
    return this._accessCodes;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // default_action - computed: true, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // default_redirect_name - computed: true, optional: true, required: false
  private _defaultRedirectName?: string; 
  public get defaultRedirectName() {
    return this.getStringAttribute('default_redirect_name');
  }
  public set defaultRedirectName(value: string) {
    this._defaultRedirectName = value;
  }
  public resetDefaultRedirectName() {
    this._defaultRedirectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectNameInput() {
    return this._defaultRedirectName;
  }

  // description - computed: true, optional: true, required: false
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

  // dfp_services - computed: true, optional: false, required: false
  public get dfpServices() {
    return this.getListAttribute('dfp_services');
  }

  // dfps - computed: true, optional: true, required: false
  private _dfps?: number[]; 
  public get dfps() {
    return this.getNumberListAttribute('dfps');
  }
  public set dfps(value: number[]) {
    this._dfps = value;
  }
  public resetDfps() {
    this._dfps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfpsInput() {
    return this._dfps;
  }

  // ecs - computed: true, optional: true, required: false
  private _ecs?: boolean | cdktf.IResolvable; 
  public get ecs() {
    return this.getBooleanAttribute('ecs');
  }
  public set ecs(value: boolean | cdktf.IResolvable) {
    this._ecs = value;
  }
  public resetEcs() {
    this._ecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsInput() {
    return this._ecs;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
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

  // net_address_dfps - computed: false, optional: true, required: false
  private _netAddressDfps = new TdSecurityPolicyNetAddressDfpsList(this, "net_address_dfps", false);
  public get netAddressDfps() {
    return this._netAddressDfps;
  }
  public putNetAddressDfps(value: TdSecurityPolicyNetAddressDfps[] | cdktf.IResolvable) {
    this._netAddressDfps.internalValue = value;
  }
  public resetNetAddressDfps() {
    this._netAddressDfps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netAddressDfpsInput() {
    return this._netAddressDfps.internalValue;
  }

  // network_lists - computed: true, optional: true, required: false
  private _networkLists?: number[]; 
  public get networkLists() {
    return this.getNumberListAttribute('network_lists');
  }
  public set networkLists(value: number[]) {
    this._networkLists = value;
  }
  public resetNetworkLists() {
    this._networkLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkListsInput() {
    return this._networkLists;
  }

  // onprem_resolve - computed: true, optional: true, required: false
  private _onpremResolve?: boolean | cdktf.IResolvable; 
  public get onpremResolve() {
    return this.getBooleanAttribute('onprem_resolve');
  }
  public set onpremResolve(value: boolean | cdktf.IResolvable) {
    this._onpremResolve = value;
  }
  public resetOnpremResolve() {
    this._onpremResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onpremResolveInput() {
    return this._onpremResolve;
  }

  // precedence - computed: true, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // roaming_device_groups - computed: true, optional: true, required: false
  private _roamingDeviceGroups?: number[]; 
  public get roamingDeviceGroups() {
    return this.getNumberListAttribute('roaming_device_groups');
  }
  public set roamingDeviceGroups(value: number[]) {
    this._roamingDeviceGroups = value;
  }
  public resetRoamingDeviceGroups() {
    this._roamingDeviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamingDeviceGroupsInput() {
    return this._roamingDeviceGroups;
  }

  // rules - computed: true, optional: true, required: false
  private _rules = new TdSecurityPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TdSecurityPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // safe_search - computed: true, optional: true, required: false
  private _safeSearch?: boolean | cdktf.IResolvable; 
  public get safeSearch() {
    return this.getBooleanAttribute('safe_search');
  }
  public set safeSearch(value: boolean | cdktf.IResolvable) {
    this._safeSearch = value;
  }
  public resetSafeSearch() {
    this._safeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchInput() {
    return this._safeSearch;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessCodes),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      default_redirect_name: cdktf.stringToTerraform(this._defaultRedirectName),
      description: cdktf.stringToTerraform(this._description),
      dfps: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dfps),
      ecs: cdktf.booleanToTerraform(this._ecs),
      name: cdktf.stringToTerraform(this._name),
      net_address_dfps: cdktf.listMapper(tdSecurityPolicyNetAddressDfpsToTerraform, false)(this._netAddressDfps.internalValue),
      network_lists: cdktf.listMapper(cdktf.numberToTerraform, false)(this._networkLists),
      onprem_resolve: cdktf.booleanToTerraform(this._onpremResolve),
      precedence: cdktf.numberToTerraform(this._precedence),
      roaming_device_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._roamingDeviceGroups),
      rules: cdktf.listMapper(tdSecurityPolicyRulesToTerraform, false)(this._rules.internalValue),
      safe_search: cdktf.booleanToTerraform(this._safeSearch),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroups),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_redirect_name: {
        value: cdktf.stringToHclTerraform(this._defaultRedirectName),
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
      dfps: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dfps),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      ecs: {
        value: cdktf.booleanToHclTerraform(this._ecs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_address_dfps: {
        value: cdktf.listMapperHcl(tdSecurityPolicyNetAddressDfpsToHclTerraform, false)(this._netAddressDfps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TdSecurityPolicyNetAddressDfpsList",
      },
      network_lists: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._networkLists),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      onprem_resolve: {
        value: cdktf.booleanToHclTerraform(this._onpremResolve),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      precedence: {
        value: cdktf.numberToHclTerraform(this._precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      roaming_device_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._roamingDeviceGroups),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      rules: {
        value: cdktf.listMapperHcl(tdSecurityPolicyRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TdSecurityPolicyRulesList",
      },
      safe_search: {
        value: cdktf.booleanToHclTerraform(this._safeSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
