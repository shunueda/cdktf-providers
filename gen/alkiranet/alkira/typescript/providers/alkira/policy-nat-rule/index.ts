// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The category of NAT rule. The value could be `DEFAULT` or `INTERNET_CONNECTOR`. Default value is `DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#category PolicyNatRule#category}
  */
  readonly category?: string;
  /**
  * The description of the policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#description PolicyNatRule#description}
  */
  readonly description?: string;
  /**
  * Enable the rule or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#enabled PolicyNatRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#id PolicyNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#name PolicyNatRule#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#action PolicyNatRule#action}
  */
  readonly action: PolicyNatRuleAction[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#match PolicyNatRule#match}
  */
  readonly match: PolicyNatRuleMatch[] | cdktf.IResolvable;
}
export interface PolicyNatRuleAction {
  /**
  * Whether the destination address should be advertised to connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#dst_addr_translation_advertise_to_connector PolicyNatRule#dst_addr_translation_advertise_to_connector}
  */
  readonly dstAddrTranslationAdvertiseToConnector?: boolean | cdktf.IResolvable;
  /**
  * The ID of policy FQDN list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#dst_addr_translation_list_policy_fqdn_id PolicyNatRule#dst_addr_translation_list_policy_fqdn_id}
  */
  readonly dstAddrTranslationListPolicyFqdnId?: number;
  /**
  * The port list to translate the destination prefixes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#dst_addr_translation_ports PolicyNatRule#dst_addr_translation_ports}
  */
  readonly dstAddrTranslationPorts?: string[];
  /**
  * The list of prefix list IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#dst_addr_translation_prefix_list_ids PolicyNatRule#dst_addr_translation_prefix_list_ids}
  */
  readonly dstAddrTranslationPrefixListIds?: number[];
  /**
  * The list of prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#dst_addr_translation_prefixes PolicyNatRule#dst_addr_translation_prefixes}
  */
  readonly dstAddrTranslationPrefixes?: string[];
  /**
  * The translation type are: `STATIC_IP`, `STATIC_IP_AND_PORT` , `STATIC_PORT` and `NONE`. Default value is `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#dst_addr_translation_type PolicyNatRule#dst_addr_translation_type}
  */
  readonly dstAddrTranslationType?: string;
  /**
  * The egress type to use with the match. Options are are `ALKIRA_PUBLIC_IP` or `BYOIP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#egress_type PolicyNatRule#egress_type}
  */
  readonly egressType?: string;
  /**
  * Whether the translation match and invalidate. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_addr_translation_match_and_invalidate PolicyNatRule#src_addr_translation_match_and_invalidate}
  */
  readonly srcAddrTranslationMatchAndInvalidate?: boolean | cdktf.IResolvable;
  /**
  * The list of prefix list IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_addr_translation_prefix_list_ids PolicyNatRule#src_addr_translation_prefix_list_ids}
  */
  readonly srcAddrTranslationPrefixListIds?: number[];
  /**
  * The list of prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_addr_translation_prefixes PolicyNatRule#src_addr_translation_prefixes}
  */
  readonly srcAddrTranslationPrefixes?: string[];
  /**
  * Whether to invalidate the track prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_addr_translation_routing_track_invalidate_prefixes PolicyNatRule#src_addr_translation_routing_track_invalidate_prefixes}
  */
  readonly srcAddrTranslationRoutingTrackInvalidatePrefixes?: boolean | cdktf.IResolvable;
  /**
  * The list of prefix list IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_addr_translation_routing_track_prefix_list_ids PolicyNatRule#src_addr_translation_routing_track_prefix_list_ids}
  */
  readonly srcAddrTranslationRoutingTrackPrefixListIds?: number[];
  /**
  * The list of prefixes to track.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_addr_translation_routing_track_prefixes PolicyNatRule#src_addr_translation_routing_track_prefixes}
  */
  readonly srcAddrTranslationRoutingTrackPrefixes?: string[];
  /**
  * The translation type are: `STATIC_IP`, `DYNAMIC_IP_AND_PORT` and `NONE`. Default value is `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_addr_translation_type PolicyNatRule#src_addr_translation_type}
  */
  readonly srcAddrTranslationType?: string;
}

export function policyNatRuleActionToTerraform(struct?: PolicyNatRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_addr_translation_advertise_to_connector: cdktf.booleanToTerraform(struct!.dstAddrTranslationAdvertiseToConnector),
    dst_addr_translation_list_policy_fqdn_id: cdktf.numberToTerraform(struct!.dstAddrTranslationListPolicyFqdnId),
    dst_addr_translation_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstAddrTranslationPorts),
    dst_addr_translation_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dstAddrTranslationPrefixListIds),
    dst_addr_translation_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstAddrTranslationPrefixes),
    dst_addr_translation_type: cdktf.stringToTerraform(struct!.dstAddrTranslationType),
    egress_type: cdktf.stringToTerraform(struct!.egressType),
    src_addr_translation_match_and_invalidate: cdktf.booleanToTerraform(struct!.srcAddrTranslationMatchAndInvalidate),
    src_addr_translation_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.srcAddrTranslationPrefixListIds),
    src_addr_translation_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcAddrTranslationPrefixes),
    src_addr_translation_routing_track_invalidate_prefixes: cdktf.booleanToTerraform(struct!.srcAddrTranslationRoutingTrackInvalidatePrefixes),
    src_addr_translation_routing_track_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.srcAddrTranslationRoutingTrackPrefixListIds),
    src_addr_translation_routing_track_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcAddrTranslationRoutingTrackPrefixes),
    src_addr_translation_type: cdktf.stringToTerraform(struct!.srcAddrTranslationType),
  }
}


export function policyNatRuleActionToHclTerraform(struct?: PolicyNatRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_addr_translation_advertise_to_connector: {
      value: cdktf.booleanToHclTerraform(struct!.dstAddrTranslationAdvertiseToConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dst_addr_translation_list_policy_fqdn_id: {
      value: cdktf.numberToHclTerraform(struct!.dstAddrTranslationListPolicyFqdnId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_addr_translation_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstAddrTranslationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dst_addr_translation_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dstAddrTranslationPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    dst_addr_translation_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstAddrTranslationPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dst_addr_translation_type: {
      value: cdktf.stringToHclTerraform(struct!.dstAddrTranslationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_type: {
      value: cdktf.stringToHclTerraform(struct!.egressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_addr_translation_match_and_invalidate: {
      value: cdktf.booleanToHclTerraform(struct!.srcAddrTranslationMatchAndInvalidate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    src_addr_translation_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.srcAddrTranslationPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    src_addr_translation_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcAddrTranslationPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_addr_translation_routing_track_invalidate_prefixes: {
      value: cdktf.booleanToHclTerraform(struct!.srcAddrTranslationRoutingTrackInvalidatePrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    src_addr_translation_routing_track_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.srcAddrTranslationRoutingTrackPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    src_addr_translation_routing_track_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcAddrTranslationRoutingTrackPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_addr_translation_type: {
      value: cdktf.stringToHclTerraform(struct!.srcAddrTranslationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyNatRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyNatRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstAddrTranslationAdvertiseToConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddrTranslationAdvertiseToConnector = this._dstAddrTranslationAdvertiseToConnector;
    }
    if (this._dstAddrTranslationListPolicyFqdnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddrTranslationListPolicyFqdnId = this._dstAddrTranslationListPolicyFqdnId;
    }
    if (this._dstAddrTranslationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddrTranslationPorts = this._dstAddrTranslationPorts;
    }
    if (this._dstAddrTranslationPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddrTranslationPrefixListIds = this._dstAddrTranslationPrefixListIds;
    }
    if (this._dstAddrTranslationPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddrTranslationPrefixes = this._dstAddrTranslationPrefixes;
    }
    if (this._dstAddrTranslationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddrTranslationType = this._dstAddrTranslationType;
    }
    if (this._egressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressType = this._egressType;
    }
    if (this._srcAddrTranslationMatchAndInvalidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddrTranslationMatchAndInvalidate = this._srcAddrTranslationMatchAndInvalidate;
    }
    if (this._srcAddrTranslationPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddrTranslationPrefixListIds = this._srcAddrTranslationPrefixListIds;
    }
    if (this._srcAddrTranslationPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddrTranslationPrefixes = this._srcAddrTranslationPrefixes;
    }
    if (this._srcAddrTranslationRoutingTrackInvalidatePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddrTranslationRoutingTrackInvalidatePrefixes = this._srcAddrTranslationRoutingTrackInvalidatePrefixes;
    }
    if (this._srcAddrTranslationRoutingTrackPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddrTranslationRoutingTrackPrefixListIds = this._srcAddrTranslationRoutingTrackPrefixListIds;
    }
    if (this._srcAddrTranslationRoutingTrackPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddrTranslationRoutingTrackPrefixes = this._srcAddrTranslationRoutingTrackPrefixes;
    }
    if (this._srcAddrTranslationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddrTranslationType = this._srcAddrTranslationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyNatRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstAddrTranslationAdvertiseToConnector = undefined;
      this._dstAddrTranslationListPolicyFqdnId = undefined;
      this._dstAddrTranslationPorts = undefined;
      this._dstAddrTranslationPrefixListIds = undefined;
      this._dstAddrTranslationPrefixes = undefined;
      this._dstAddrTranslationType = undefined;
      this._egressType = undefined;
      this._srcAddrTranslationMatchAndInvalidate = undefined;
      this._srcAddrTranslationPrefixListIds = undefined;
      this._srcAddrTranslationPrefixes = undefined;
      this._srcAddrTranslationRoutingTrackInvalidatePrefixes = undefined;
      this._srcAddrTranslationRoutingTrackPrefixListIds = undefined;
      this._srcAddrTranslationRoutingTrackPrefixes = undefined;
      this._srcAddrTranslationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstAddrTranslationAdvertiseToConnector = value.dstAddrTranslationAdvertiseToConnector;
      this._dstAddrTranslationListPolicyFqdnId = value.dstAddrTranslationListPolicyFqdnId;
      this._dstAddrTranslationPorts = value.dstAddrTranslationPorts;
      this._dstAddrTranslationPrefixListIds = value.dstAddrTranslationPrefixListIds;
      this._dstAddrTranslationPrefixes = value.dstAddrTranslationPrefixes;
      this._dstAddrTranslationType = value.dstAddrTranslationType;
      this._egressType = value.egressType;
      this._srcAddrTranslationMatchAndInvalidate = value.srcAddrTranslationMatchAndInvalidate;
      this._srcAddrTranslationPrefixListIds = value.srcAddrTranslationPrefixListIds;
      this._srcAddrTranslationPrefixes = value.srcAddrTranslationPrefixes;
      this._srcAddrTranslationRoutingTrackInvalidatePrefixes = value.srcAddrTranslationRoutingTrackInvalidatePrefixes;
      this._srcAddrTranslationRoutingTrackPrefixListIds = value.srcAddrTranslationRoutingTrackPrefixListIds;
      this._srcAddrTranslationRoutingTrackPrefixes = value.srcAddrTranslationRoutingTrackPrefixes;
      this._srcAddrTranslationType = value.srcAddrTranslationType;
    }
  }

  // dst_addr_translation_advertise_to_connector - computed: false, optional: true, required: false
  private _dstAddrTranslationAdvertiseToConnector?: boolean | cdktf.IResolvable; 
  public get dstAddrTranslationAdvertiseToConnector() {
    return this.getBooleanAttribute('dst_addr_translation_advertise_to_connector');
  }
  public set dstAddrTranslationAdvertiseToConnector(value: boolean | cdktf.IResolvable) {
    this._dstAddrTranslationAdvertiseToConnector = value;
  }
  public resetDstAddrTranslationAdvertiseToConnector() {
    this._dstAddrTranslationAdvertiseToConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrTranslationAdvertiseToConnectorInput() {
    return this._dstAddrTranslationAdvertiseToConnector;
  }

  // dst_addr_translation_list_policy_fqdn_id - computed: false, optional: true, required: false
  private _dstAddrTranslationListPolicyFqdnId?: number; 
  public get dstAddrTranslationListPolicyFqdnId() {
    return this.getNumberAttribute('dst_addr_translation_list_policy_fqdn_id');
  }
  public set dstAddrTranslationListPolicyFqdnId(value: number) {
    this._dstAddrTranslationListPolicyFqdnId = value;
  }
  public resetDstAddrTranslationListPolicyFqdnId() {
    this._dstAddrTranslationListPolicyFqdnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrTranslationListPolicyFqdnIdInput() {
    return this._dstAddrTranslationListPolicyFqdnId;
  }

  // dst_addr_translation_ports - computed: false, optional: true, required: false
  private _dstAddrTranslationPorts?: string[]; 
  public get dstAddrTranslationPorts() {
    return this.getListAttribute('dst_addr_translation_ports');
  }
  public set dstAddrTranslationPorts(value: string[]) {
    this._dstAddrTranslationPorts = value;
  }
  public resetDstAddrTranslationPorts() {
    this._dstAddrTranslationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrTranslationPortsInput() {
    return this._dstAddrTranslationPorts;
  }

  // dst_addr_translation_prefix_list_ids - computed: false, optional: true, required: false
  private _dstAddrTranslationPrefixListIds?: number[]; 
  public get dstAddrTranslationPrefixListIds() {
    return this.getNumberListAttribute('dst_addr_translation_prefix_list_ids');
  }
  public set dstAddrTranslationPrefixListIds(value: number[]) {
    this._dstAddrTranslationPrefixListIds = value;
  }
  public resetDstAddrTranslationPrefixListIds() {
    this._dstAddrTranslationPrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrTranslationPrefixListIdsInput() {
    return this._dstAddrTranslationPrefixListIds;
  }

  // dst_addr_translation_prefixes - computed: false, optional: true, required: false
  private _dstAddrTranslationPrefixes?: string[]; 
  public get dstAddrTranslationPrefixes() {
    return this.getListAttribute('dst_addr_translation_prefixes');
  }
  public set dstAddrTranslationPrefixes(value: string[]) {
    this._dstAddrTranslationPrefixes = value;
  }
  public resetDstAddrTranslationPrefixes() {
    this._dstAddrTranslationPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrTranslationPrefixesInput() {
    return this._dstAddrTranslationPrefixes;
  }

  // dst_addr_translation_type - computed: false, optional: true, required: false
  private _dstAddrTranslationType?: string; 
  public get dstAddrTranslationType() {
    return this.getStringAttribute('dst_addr_translation_type');
  }
  public set dstAddrTranslationType(value: string) {
    this._dstAddrTranslationType = value;
  }
  public resetDstAddrTranslationType() {
    this._dstAddrTranslationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrTranslationTypeInput() {
    return this._dstAddrTranslationType;
  }

  // egress_type - computed: false, optional: true, required: false
  private _egressType?: string; 
  public get egressType() {
    return this.getStringAttribute('egress_type');
  }
  public set egressType(value: string) {
    this._egressType = value;
  }
  public resetEgressType() {
    this._egressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressTypeInput() {
    return this._egressType;
  }

  // src_addr_translation_match_and_invalidate - computed: false, optional: true, required: false
  private _srcAddrTranslationMatchAndInvalidate?: boolean | cdktf.IResolvable; 
  public get srcAddrTranslationMatchAndInvalidate() {
    return this.getBooleanAttribute('src_addr_translation_match_and_invalidate');
  }
  public set srcAddrTranslationMatchAndInvalidate(value: boolean | cdktf.IResolvable) {
    this._srcAddrTranslationMatchAndInvalidate = value;
  }
  public resetSrcAddrTranslationMatchAndInvalidate() {
    this._srcAddrTranslationMatchAndInvalidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTranslationMatchAndInvalidateInput() {
    return this._srcAddrTranslationMatchAndInvalidate;
  }

  // src_addr_translation_prefix_list_ids - computed: false, optional: true, required: false
  private _srcAddrTranslationPrefixListIds?: number[]; 
  public get srcAddrTranslationPrefixListIds() {
    return this.getNumberListAttribute('src_addr_translation_prefix_list_ids');
  }
  public set srcAddrTranslationPrefixListIds(value: number[]) {
    this._srcAddrTranslationPrefixListIds = value;
  }
  public resetSrcAddrTranslationPrefixListIds() {
    this._srcAddrTranslationPrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTranslationPrefixListIdsInput() {
    return this._srcAddrTranslationPrefixListIds;
  }

  // src_addr_translation_prefixes - computed: false, optional: true, required: false
  private _srcAddrTranslationPrefixes?: string[]; 
  public get srcAddrTranslationPrefixes() {
    return this.getListAttribute('src_addr_translation_prefixes');
  }
  public set srcAddrTranslationPrefixes(value: string[]) {
    this._srcAddrTranslationPrefixes = value;
  }
  public resetSrcAddrTranslationPrefixes() {
    this._srcAddrTranslationPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTranslationPrefixesInput() {
    return this._srcAddrTranslationPrefixes;
  }

  // src_addr_translation_routing_track_invalidate_prefixes - computed: false, optional: true, required: false
  private _srcAddrTranslationRoutingTrackInvalidatePrefixes?: boolean | cdktf.IResolvable; 
  public get srcAddrTranslationRoutingTrackInvalidatePrefixes() {
    return this.getBooleanAttribute('src_addr_translation_routing_track_invalidate_prefixes');
  }
  public set srcAddrTranslationRoutingTrackInvalidatePrefixes(value: boolean | cdktf.IResolvable) {
    this._srcAddrTranslationRoutingTrackInvalidatePrefixes = value;
  }
  public resetSrcAddrTranslationRoutingTrackInvalidatePrefixes() {
    this._srcAddrTranslationRoutingTrackInvalidatePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTranslationRoutingTrackInvalidatePrefixesInput() {
    return this._srcAddrTranslationRoutingTrackInvalidatePrefixes;
  }

  // src_addr_translation_routing_track_prefix_list_ids - computed: false, optional: true, required: false
  private _srcAddrTranslationRoutingTrackPrefixListIds?: number[]; 
  public get srcAddrTranslationRoutingTrackPrefixListIds() {
    return this.getNumberListAttribute('src_addr_translation_routing_track_prefix_list_ids');
  }
  public set srcAddrTranslationRoutingTrackPrefixListIds(value: number[]) {
    this._srcAddrTranslationRoutingTrackPrefixListIds = value;
  }
  public resetSrcAddrTranslationRoutingTrackPrefixListIds() {
    this._srcAddrTranslationRoutingTrackPrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTranslationRoutingTrackPrefixListIdsInput() {
    return this._srcAddrTranslationRoutingTrackPrefixListIds;
  }

  // src_addr_translation_routing_track_prefixes - computed: false, optional: true, required: false
  private _srcAddrTranslationRoutingTrackPrefixes?: string[]; 
  public get srcAddrTranslationRoutingTrackPrefixes() {
    return this.getListAttribute('src_addr_translation_routing_track_prefixes');
  }
  public set srcAddrTranslationRoutingTrackPrefixes(value: string[]) {
    this._srcAddrTranslationRoutingTrackPrefixes = value;
  }
  public resetSrcAddrTranslationRoutingTrackPrefixes() {
    this._srcAddrTranslationRoutingTrackPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTranslationRoutingTrackPrefixesInput() {
    return this._srcAddrTranslationRoutingTrackPrefixes;
  }

  // src_addr_translation_type - computed: false, optional: true, required: false
  private _srcAddrTranslationType?: string; 
  public get srcAddrTranslationType() {
    return this.getStringAttribute('src_addr_translation_type');
  }
  public set srcAddrTranslationType(value: string) {
    this._srcAddrTranslationType = value;
  }
  public resetSrcAddrTranslationType() {
    this._srcAddrTranslationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTranslationTypeInput() {
    return this._srcAddrTranslationType;
  }
}

export class PolicyNatRuleActionList extends cdktf.ComplexList {
  public internalValue? : PolicyNatRuleAction[] | cdktf.IResolvable

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
  public get(index: number): PolicyNatRuleActionOutputReference {
    return new PolicyNatRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyNatRuleMatch {
  /**
  * The list of ports for destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#dst_ports PolicyNatRule#dst_ports}
  */
  readonly dstPorts?: string[];
  /**
  * The list of prefix IDs as destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#dst_prefix_list_ids PolicyNatRule#dst_prefix_list_ids}
  */
  readonly dstPrefixListIds?: number[];
  /**
  * The list of prefixes for destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#dst_prefixes PolicyNatRule#dst_prefixes}
  */
  readonly dstPrefixes?: string[];
  /**
  * The following protocols are supported, `icmp`, `tcp`, `udp` or `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#protocol PolicyNatRule#protocol}
  */
  readonly protocol: string;
  /**
  * The list of ports for source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_ports PolicyNatRule#src_ports}
  */
  readonly srcPorts?: string[];
  /**
  * The list of prefix IDs as source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_prefix_list_ids PolicyNatRule#src_prefix_list_ids}
  */
  readonly srcPrefixListIds?: number[];
  /**
  * The list of prefixes for source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#src_prefixes PolicyNatRule#src_prefixes}
  */
  readonly srcPrefixes?: string[];
}

export function policyNatRuleMatchToTerraform(struct?: PolicyNatRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstPorts),
    dst_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dstPrefixListIds),
    dst_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dstPrefixes),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcPorts),
    src_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.srcPrefixListIds),
    src_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcPrefixes),
  }
}


export function policyNatRuleMatchToHclTerraform(struct?: PolicyNatRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dst_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dstPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    dst_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dstPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.srcPrefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    src_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyNatRuleMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyNatRuleMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPorts = this._dstPorts;
    }
    if (this._dstPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPrefixListIds = this._dstPrefixListIds;
    }
    if (this._dstPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPrefixes = this._dstPrefixes;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPorts = this._srcPorts;
    }
    if (this._srcPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPrefixListIds = this._srcPrefixListIds;
    }
    if (this._srcPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPrefixes = this._srcPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyNatRuleMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstPorts = undefined;
      this._dstPrefixListIds = undefined;
      this._dstPrefixes = undefined;
      this._protocol = undefined;
      this._srcPorts = undefined;
      this._srcPrefixListIds = undefined;
      this._srcPrefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstPorts = value.dstPorts;
      this._dstPrefixListIds = value.dstPrefixListIds;
      this._dstPrefixes = value.dstPrefixes;
      this._protocol = value.protocol;
      this._srcPorts = value.srcPorts;
      this._srcPrefixListIds = value.srcPrefixListIds;
      this._srcPrefixes = value.srcPrefixes;
    }
  }

  // dst_ports - computed: false, optional: true, required: false
  private _dstPorts?: string[]; 
  public get dstPorts() {
    return this.getListAttribute('dst_ports');
  }
  public set dstPorts(value: string[]) {
    this._dstPorts = value;
  }
  public resetDstPorts() {
    this._dstPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortsInput() {
    return this._dstPorts;
  }

  // dst_prefix_list_ids - computed: false, optional: true, required: false
  private _dstPrefixListIds?: number[]; 
  public get dstPrefixListIds() {
    return this.getNumberListAttribute('dst_prefix_list_ids');
  }
  public set dstPrefixListIds(value: number[]) {
    this._dstPrefixListIds = value;
  }
  public resetDstPrefixListIds() {
    this._dstPrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPrefixListIdsInput() {
    return this._dstPrefixListIds;
  }

  // dst_prefixes - computed: false, optional: true, required: false
  private _dstPrefixes?: string[]; 
  public get dstPrefixes() {
    return this.getListAttribute('dst_prefixes');
  }
  public set dstPrefixes(value: string[]) {
    this._dstPrefixes = value;
  }
  public resetDstPrefixes() {
    this._dstPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPrefixesInput() {
    return this._dstPrefixes;
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

  // src_ports - computed: false, optional: true, required: false
  private _srcPorts?: string[]; 
  public get srcPorts() {
    return this.getListAttribute('src_ports');
  }
  public set srcPorts(value: string[]) {
    this._srcPorts = value;
  }
  public resetSrcPorts() {
    this._srcPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortsInput() {
    return this._srcPorts;
  }

  // src_prefix_list_ids - computed: false, optional: true, required: false
  private _srcPrefixListIds?: number[]; 
  public get srcPrefixListIds() {
    return this.getNumberListAttribute('src_prefix_list_ids');
  }
  public set srcPrefixListIds(value: number[]) {
    this._srcPrefixListIds = value;
  }
  public resetSrcPrefixListIds() {
    this._srcPrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrefixListIdsInput() {
    return this._srcPrefixListIds;
  }

  // src_prefixes - computed: false, optional: true, required: false
  private _srcPrefixes?: string[]; 
  public get srcPrefixes() {
    return this.getListAttribute('src_prefixes');
  }
  public set srcPrefixes(value: string[]) {
    this._srcPrefixes = value;
  }
  public resetSrcPrefixes() {
    this._srcPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrefixesInput() {
    return this._srcPrefixes;
  }
}

export class PolicyNatRuleMatchList extends cdktf.ComplexList {
  public internalValue? : PolicyNatRuleMatch[] | cdktf.IResolvable

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
  public get(index: number): PolicyNatRuleMatchOutputReference {
    return new PolicyNatRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule alkira_policy_nat_rule}
*/
export class PolicyNatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_policy_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyNatRule to import
  * @param importFromId The id of the existing PolicyNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_policy_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_nat_rule alkira_policy_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_policy_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._action.internalValue = config.action;
    this._match.internalValue = config.match;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // action - computed: false, optional: false, required: true
  private _action = new PolicyNatRuleActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: PolicyNatRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new PolicyNatRuleMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: PolicyNatRuleMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      action: cdktf.listMapper(policyNatRuleActionToTerraform, true)(this._action.internalValue),
      match: cdktf.listMapper(policyNatRuleMatchToTerraform, true)(this._match.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.listMapperHcl(policyNatRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyNatRuleActionList",
      },
      match: {
        value: cdktf.listMapperHcl(policyNatRuleMatchToHclTerraform, true)(this._match.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyNatRuleMatchList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
