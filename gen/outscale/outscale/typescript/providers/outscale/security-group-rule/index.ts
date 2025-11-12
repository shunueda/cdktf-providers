// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#flow SecurityGroupRule#flow}
  */
  readonly flow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#from_port_range SecurityGroupRule#from_port_range}
  */
  readonly fromPortRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#id SecurityGroupRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#ip_protocol SecurityGroupRule#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#ip_range SecurityGroupRule#ip_range}
  */
  readonly ipRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#security_group_account_id_to_link SecurityGroupRule#security_group_account_id_to_link}
  */
  readonly securityGroupAccountIdToLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#security_group_id SecurityGroupRule#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#security_group_name_to_link SecurityGroupRule#security_group_name_to_link}
  */
  readonly securityGroupNameToLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#to_port_range SecurityGroupRule#to_port_range}
  */
  readonly toPortRange?: number;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#rules SecurityGroupRule#rules}
  */
  readonly rules?: SecurityGroupRuleRules[] | cdktf.IResolvable;
}
export interface SecurityGroupRuleRulesSecurityGroupsMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#account_id SecurityGroupRule#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#security_group_id SecurityGroupRule#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#security_group_name SecurityGroupRule#security_group_name}
  */
  readonly securityGroupName?: string;
}

export function securityGroupRuleRulesSecurityGroupsMembersToTerraform(struct?: SecurityGroupRuleRulesSecurityGroupsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
  }
}


export function securityGroupRuleRulesSecurityGroupsMembersToHclTerraform(struct?: SecurityGroupRuleRulesSecurityGroupsMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_name: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGroupRuleRulesSecurityGroupsMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityGroupRuleRulesSecurityGroupsMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGroupRuleRulesSecurityGroupsMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._securityGroupId = undefined;
      this._securityGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._securityGroupId = value.securityGroupId;
      this._securityGroupName = value.securityGroupName;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_name - computed: false, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }
}

export class SecurityGroupRuleRulesSecurityGroupsMembersList extends cdktf.ComplexList {
  public internalValue? : SecurityGroupRuleRulesSecurityGroupsMembers[] | cdktf.IResolvable

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
  public get(index: number): SecurityGroupRuleRulesSecurityGroupsMembersOutputReference {
    return new SecurityGroupRuleRulesSecurityGroupsMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityGroupRuleRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#from_port_range SecurityGroupRule#from_port_range}
  */
  readonly fromPortRange?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#ip_protocol SecurityGroupRule#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#ip_ranges SecurityGroupRule#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#service_ids SecurityGroupRule#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#to_port_range SecurityGroupRule#to_port_range}
  */
  readonly toPortRange?: number;
  /**
  * security_groups_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#security_groups_members SecurityGroupRule#security_groups_members}
  */
  readonly securityGroupsMembers?: SecurityGroupRuleRulesSecurityGroupsMembers[] | cdktf.IResolvable;
}

export function securityGroupRuleRulesToTerraform(struct?: SecurityGroupRuleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port_range: cdktf.numberToTerraform(struct!.fromPortRange),
    ip_protocol: cdktf.stringToTerraform(struct!.ipProtocol),
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
    service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceIds),
    to_port_range: cdktf.numberToTerraform(struct!.toPortRange),
    security_groups_members: cdktf.listMapper(securityGroupRuleRulesSecurityGroupsMembersToTerraform, true)(struct!.securityGroupsMembers),
  }
}


export function securityGroupRuleRulesToHclTerraform(struct?: SecurityGroupRuleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_port_range: {
      value: cdktf.numberToHclTerraform(struct!.fromPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.ipProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to_port_range: {
      value: cdktf.numberToHclTerraform(struct!.toPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_groups_members: {
      value: cdktf.listMapperHcl(securityGroupRuleRulesSecurityGroupsMembersToHclTerraform, true)(struct!.securityGroupsMembers),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityGroupRuleRulesSecurityGroupsMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityGroupRuleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityGroupRuleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPortRange = this._fromPortRange;
    }
    if (this._ipProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtocol = this._ipProtocol;
    }
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    if (this._serviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIds = this._serviceIds;
    }
    if (this._toPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPortRange = this._toPortRange;
    }
    if (this._securityGroupsMembers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsMembers = this._securityGroupsMembers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityGroupRuleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPortRange = undefined;
      this._ipProtocol = undefined;
      this._ipRanges = undefined;
      this._serviceIds = undefined;
      this._toPortRange = undefined;
      this._securityGroupsMembers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPortRange = value.fromPortRange;
      this._ipProtocol = value.ipProtocol;
      this._ipRanges = value.ipRanges;
      this._serviceIds = value.serviceIds;
      this._toPortRange = value.toPortRange;
      this._securityGroupsMembers.internalValue = value.securityGroupsMembers;
    }
  }

  // from_port_range - computed: false, optional: true, required: false
  private _fromPortRange?: number; 
  public get fromPortRange() {
    return this.getNumberAttribute('from_port_range');
  }
  public set fromPortRange(value: number) {
    this._fromPortRange = value;
  }
  public resetFromPortRange() {
    this._fromPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortRangeInput() {
    return this._fromPortRange;
  }

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return this.getListAttribute('service_ids');
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // to_port_range - computed: false, optional: true, required: false
  private _toPortRange?: number; 
  public get toPortRange() {
    return this.getNumberAttribute('to_port_range');
  }
  public set toPortRange(value: number) {
    this._toPortRange = value;
  }
  public resetToPortRange() {
    this._toPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortRangeInput() {
    return this._toPortRange;
  }

  // security_groups_members - computed: false, optional: true, required: false
  private _securityGroupsMembers = new SecurityGroupRuleRulesSecurityGroupsMembersList(this, "security_groups_members", false);
  public get securityGroupsMembers() {
    return this._securityGroupsMembers;
  }
  public putSecurityGroupsMembers(value: SecurityGroupRuleRulesSecurityGroupsMembers[] | cdktf.IResolvable) {
    this._securityGroupsMembers.internalValue = value;
  }
  public resetSecurityGroupsMembers() {
    this._securityGroupsMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsMembersInput() {
    return this._securityGroupsMembers.internalValue;
  }
}

export class SecurityGroupRuleRulesList extends cdktf.ComplexList {
  public internalValue? : SecurityGroupRuleRules[] | cdktf.IResolvable

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
  public get(index: number): SecurityGroupRuleRulesOutputReference {
    return new SecurityGroupRuleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule outscale_security_group_rule}
*/
export class SecurityGroupRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_security_group_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityGroupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityGroupRule to import
  * @param importFromId The id of the existing SecurityGroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityGroupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_security_group_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/security_group_rule outscale_security_group_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityGroupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityGroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_security_group_rule',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._flow = config.flow;
    this._fromPortRange = config.fromPortRange;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._ipRange = config.ipRange;
    this._securityGroupAccountIdToLink = config.securityGroupAccountIdToLink;
    this._securityGroupId = config.securityGroupId;
    this._securityGroupNameToLink = config.securityGroupNameToLink;
    this._toPortRange = config.toPortRange;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // flow - computed: false, optional: false, required: true
  private _flow?: string; 
  public get flow() {
    return this.getStringAttribute('flow');
  }
  public set flow(value: string) {
    this._flow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInput() {
    return this._flow;
  }

  // from_port_range - computed: false, optional: true, required: false
  private _fromPortRange?: number; 
  public get fromPortRange() {
    return this.getNumberAttribute('from_port_range');
  }
  public set fromPortRange(value: number) {
    this._fromPortRange = value;
  }
  public resetFromPortRange() {
    this._fromPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortRangeInput() {
    return this._fromPortRange;
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

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // net_id - computed: true, optional: false, required: false
  public get netId() {
    return this.getStringAttribute('net_id');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // security_group_account_id_to_link - computed: false, optional: true, required: false
  private _securityGroupAccountIdToLink?: string; 
  public get securityGroupAccountIdToLink() {
    return this.getStringAttribute('security_group_account_id_to_link');
  }
  public set securityGroupAccountIdToLink(value: string) {
    this._securityGroupAccountIdToLink = value;
  }
  public resetSecurityGroupAccountIdToLink() {
    this._securityGroupAccountIdToLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupAccountIdToLinkInput() {
    return this._securityGroupAccountIdToLink;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_name - computed: true, optional: false, required: false
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }

  // security_group_name_to_link - computed: false, optional: true, required: false
  private _securityGroupNameToLink?: string; 
  public get securityGroupNameToLink() {
    return this.getStringAttribute('security_group_name_to_link');
  }
  public set securityGroupNameToLink(value: string) {
    this._securityGroupNameToLink = value;
  }
  public resetSecurityGroupNameToLink() {
    this._securityGroupNameToLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameToLinkInput() {
    return this._securityGroupNameToLink;
  }

  // to_port_range - computed: false, optional: true, required: false
  private _toPortRange?: number; 
  public get toPortRange() {
    return this.getNumberAttribute('to_port_range');
  }
  public set toPortRange(value: number) {
    this._toPortRange = value;
  }
  public resetToPortRange() {
    this._toPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortRangeInput() {
    return this._toPortRange;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new SecurityGroupRuleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SecurityGroupRuleRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flow: cdktf.stringToTerraform(this._flow),
      from_port_range: cdktf.numberToTerraform(this._fromPortRange),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      ip_range: cdktf.stringToTerraform(this._ipRange),
      security_group_account_id_to_link: cdktf.stringToTerraform(this._securityGroupAccountIdToLink),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_group_name_to_link: cdktf.stringToTerraform(this._securityGroupNameToLink),
      to_port_range: cdktf.numberToTerraform(this._toPortRange),
      rules: cdktf.listMapper(securityGroupRuleRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      flow: {
        value: cdktf.stringToHclTerraform(this._flow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_port_range: {
        value: cdktf.numberToHclTerraform(this._fromPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_range: {
        value: cdktf.stringToHclTerraform(this._ipRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_account_id_to_link: {
        value: cdktf.stringToHclTerraform(this._securityGroupAccountIdToLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_name_to_link: {
        value: cdktf.stringToHclTerraform(this._securityGroupNameToLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_port_range: {
        value: cdktf.numberToHclTerraform(this._toPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rules: {
        value: cdktf.listMapperHcl(securityGroupRuleRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityGroupRuleRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
