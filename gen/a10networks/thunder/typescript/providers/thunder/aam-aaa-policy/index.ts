// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAaaPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#id AamAaaPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify AAA policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#name AamAaaPolicy#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#packet_capture_template AamAaaPolicy#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#user_tag AamAaaPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#uuid AamAaaPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * aaa_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#aaa_rule_list AamAaaPolicy#aaa_rule_list}
  */
  readonly aaaRuleList?: AamAaaPolicyAaaRuleListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#sampling_enable AamAaaPolicy#sampling_enable}
  */
  readonly samplingEnable?: AamAaaPolicySamplingEnable[] | cdktf.IResolvable;
}
export interface AamAaaPolicyAaaRuleListAccessListStruct {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#acl_id AamAaaPolicy#acl_id}
  */
  readonly aclId?: number;
  /**
  * 'ip-name': Apply an IP named access list; 'ipv6-name': Apply an IPv6 named access list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#acl_name AamAaaPolicy#acl_name}
  */
  readonly aclName?: string;
  /**
  * Specify Named Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#name AamAaaPolicy#name}
  */
  readonly name?: string;
}

export function aamAaaPolicyAaaRuleListAccessListStructToTerraform(struct?: AamAaaPolicyAaaRuleListAccessListStructOutputReference | AamAaaPolicyAaaRuleListAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aamAaaPolicyAaaRuleListAccessListStructToHclTerraform(struct?: AamAaaPolicyAaaRuleListAccessListStructOutputReference | AamAaaPolicyAaaRuleListAccessListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAaaPolicyAaaRuleListAccessListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAaaPolicyAaaRuleListAccessListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAaaPolicyAaaRuleListAccessListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclId = undefined;
      this._aclName = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclId = value.aclId;
      this._aclName = value.aclName;
      this._name = value.name;
    }
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface AamAaaPolicyAaaRuleListHost {
  /**
  * 'contains': Match HOST if request HTTP HOST header contains specified hostname; 'ends-with': Match HOST if request HTTP HOST header ends with specified hostname; 'equals': Match HOST if request HTTP HOST header equals specified hostname; 'starts-with': Match HOST if request HTTP HOST header starts with specified hostname;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#host_match_type AamAaaPolicy#host_match_type}
  */
  readonly hostMatchType?: string;
  /**
  * Specify URI string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#host_str AamAaaPolicy#host_str}
  */
  readonly hostStr?: string;
}

export function aamAaaPolicyAaaRuleListHostToTerraform(struct?: AamAaaPolicyAaaRuleListHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_match_type: cdktf.stringToTerraform(struct!.hostMatchType),
    host_str: cdktf.stringToTerraform(struct!.hostStr),
  }
}


export function aamAaaPolicyAaaRuleListHostToHclTerraform(struct?: AamAaaPolicyAaaRuleListHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_match_type: {
      value: cdktf.stringToHclTerraform(struct!.hostMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_str: {
      value: cdktf.stringToHclTerraform(struct!.hostStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAaaPolicyAaaRuleListHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicyAaaRuleListHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMatchType = this._hostMatchType;
    }
    if (this._hostStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostStr = this._hostStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAaaPolicyAaaRuleListHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostMatchType = undefined;
      this._hostStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostMatchType = value.hostMatchType;
      this._hostStr = value.hostStr;
    }
  }

  // host_match_type - computed: false, optional: true, required: false
  private _hostMatchType?: string; 
  public get hostMatchType() {
    return this.getStringAttribute('host_match_type');
  }
  public set hostMatchType(value: string) {
    this._hostMatchType = value;
  }
  public resetHostMatchType() {
    this._hostMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMatchTypeInput() {
    return this._hostMatchType;
  }

  // host_str - computed: false, optional: true, required: false
  private _hostStr?: string; 
  public get hostStr() {
    return this.getStringAttribute('host_str');
  }
  public set hostStr(value: string) {
    this._hostStr = value;
  }
  public resetHostStr() {
    this._hostStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostStrInput() {
    return this._hostStr;
  }
}

export class AamAaaPolicyAaaRuleListHostList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicyAaaRuleListHost[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicyAaaRuleListHostOutputReference {
    return new AamAaaPolicyAaaRuleListHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAaaPolicyAaaRuleListSamplingEnable {
  /**
  * 'all': all; 'total_count': total_count; 'hit_deny': hit_deny; 'hit_auth': hit_auth; 'hit_bypass': hit_bypass; 'failure_bypass': failure_bypass;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#counters1 AamAaaPolicy#counters1}
  */
  readonly counters1?: string;
}

export function aamAaaPolicyAaaRuleListSamplingEnableToTerraform(struct?: AamAaaPolicyAaaRuleListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAaaPolicyAaaRuleListSamplingEnableToHclTerraform(struct?: AamAaaPolicyAaaRuleListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAaaPolicyAaaRuleListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicyAaaRuleListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAaaPolicyAaaRuleListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAaaPolicyAaaRuleListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicyAaaRuleListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicyAaaRuleListSamplingEnableOutputReference {
    return new AamAaaPolicyAaaRuleListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAaaPolicyAaaRuleListUri {
  /**
  * 'contains': Match URI if request URI contains specified URI; 'ends-with': Match URI if request URI ends with specified URI; 'equals': Match URI if request URI equals specified URI; 'starts-with': Match URI if request URI starts with specified URI;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#match_type AamAaaPolicy#match_type}
  */
  readonly matchType?: string;
  /**
  * Specify URI string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#uri_str AamAaaPolicy#uri_str}
  */
  readonly uriStr?: string;
}

export function aamAaaPolicyAaaRuleListUriToTerraform(struct?: AamAaaPolicyAaaRuleListUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    uri_str: cdktf.stringToTerraform(struct!.uriStr),
  }
}


export function aamAaaPolicyAaaRuleListUriToHclTerraform(struct?: AamAaaPolicyAaaRuleListUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_str: {
      value: cdktf.stringToHclTerraform(struct!.uriStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAaaPolicyAaaRuleListUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicyAaaRuleListUri | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._uriStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriStr = this._uriStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAaaPolicyAaaRuleListUri | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchType = undefined;
      this._uriStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchType = value.matchType;
      this._uriStr = value.uriStr;
    }
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // uri_str - computed: false, optional: true, required: false
  private _uriStr?: string; 
  public get uriStr() {
    return this.getStringAttribute('uri_str');
  }
  public set uriStr(value: string) {
    this._uriStr = value;
  }
  public resetUriStr() {
    this._uriStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriStrInput() {
    return this._uriStr;
  }
}

export class AamAaaPolicyAaaRuleListUriList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicyAaaRuleListUri[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicyAaaRuleListUriOutputReference {
    return new AamAaaPolicyAaaRuleListUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAaaPolicyAaaRuleListUserAgent {
  /**
  * 'contains': Match request User-Agent header if it contains specified string; 'ends-with': Match request User-Agent header if it ends with specified string; 'equals': Match request User-Agent header if it equals specified string; 'starts-with': Match request User-Agent header if it starts with specified string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#user_agent_match_type AamAaaPolicy#user_agent_match_type}
  */
  readonly userAgentMatchType?: string;
  /**
  * Specify request User-Agent string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#user_agent_str AamAaaPolicy#user_agent_str}
  */
  readonly userAgentStr?: string;
}

export function aamAaaPolicyAaaRuleListUserAgentToTerraform(struct?: AamAaaPolicyAaaRuleListUserAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_agent_match_type: cdktf.stringToTerraform(struct!.userAgentMatchType),
    user_agent_str: cdktf.stringToTerraform(struct!.userAgentStr),
  }
}


export function aamAaaPolicyAaaRuleListUserAgentToHclTerraform(struct?: AamAaaPolicyAaaRuleListUserAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_agent_match_type: {
      value: cdktf.stringToHclTerraform(struct!.userAgentMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_agent_str: {
      value: cdktf.stringToHclTerraform(struct!.userAgentStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAaaPolicyAaaRuleListUserAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicyAaaRuleListUserAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userAgentMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentMatchType = this._userAgentMatchType;
    }
    if (this._userAgentStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgentStr = this._userAgentStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAaaPolicyAaaRuleListUserAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userAgentMatchType = undefined;
      this._userAgentStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userAgentMatchType = value.userAgentMatchType;
      this._userAgentStr = value.userAgentStr;
    }
  }

  // user_agent_match_type - computed: false, optional: true, required: false
  private _userAgentMatchType?: string; 
  public get userAgentMatchType() {
    return this.getStringAttribute('user_agent_match_type');
  }
  public set userAgentMatchType(value: string) {
    this._userAgentMatchType = value;
  }
  public resetUserAgentMatchType() {
    this._userAgentMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentMatchTypeInput() {
    return this._userAgentMatchType;
  }

  // user_agent_str - computed: false, optional: true, required: false
  private _userAgentStr?: string; 
  public get userAgentStr() {
    return this.getStringAttribute('user_agent_str');
  }
  public set userAgentStr(value: string) {
    this._userAgentStr = value;
  }
  public resetUserAgentStr() {
    this._userAgentStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentStrInput() {
    return this._userAgentStr;
  }
}

export class AamAaaPolicyAaaRuleListUserAgentList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicyAaaRuleListUserAgent[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicyAaaRuleListUserAgentOutputReference {
    return new AamAaaPolicyAaaRuleListUserAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAaaPolicyAaaRuleListStruct {
  /**
  * 'allow': Allow traffic that matches this rule; 'deny': Deny traffic that matches this rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#action AamAaaPolicy#action}
  */
  readonly action?: string;
  /**
  * Forward client request even though authentication has failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#auth_failure_bypass AamAaaPolicy#auth_failure_bypass}
  */
  readonly authFailureBypass?: number;
  /**
  * Specify authentication template name to bind to the AAA rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#authentication_template AamAaaPolicy#authentication_template}
  */
  readonly authenticationTemplate?: string;
  /**
  * Specify authorization policy to bind to the AAA rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#authorize_policy AamAaaPolicy#authorize_policy}
  */
  readonly authorizePolicy?: string;
  /**
  * Specify authorization policy for CAPTCHA (Authorization policy name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#captcha_authz_policy AamAaaPolicy#captcha_authz_policy}
  */
  readonly captchaAuthzPolicy?: string;
  /**
  * Specify domain name to bind to the AAA rule (ex: a10networks.com, www.a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#domain_name AamAaaPolicy#domain_name}
  */
  readonly domainName?: string;
  /**
  * Specify the AC type class-list for the domain-whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#domain_whitelist AamAaaPolicy#domain_whitelist}
  */
  readonly domainWhitelist?: string;
  /**
  * Specify AAA rule index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#index AamAaaPolicy#index}
  */
  readonly index: number;
  /**
  * Enable URL decoding for URI matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#match_encoded_uri AamAaaPolicy#match_encoded_uri}
  */
  readonly matchEncodedUri?: number;
  /**
  * Specify port number for aaa-rule, default is 0 for all port numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#port AamAaaPolicy#port}
  */
  readonly port?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#user_tag AamAaaPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#uuid AamAaaPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#access_list AamAaaPolicy#access_list}
  */
  readonly accessList?: AamAaaPolicyAaaRuleListAccessListStruct;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#host AamAaaPolicy#host}
  */
  readonly host?: AamAaaPolicyAaaRuleListHost[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#sampling_enable AamAaaPolicy#sampling_enable}
  */
  readonly samplingEnable?: AamAaaPolicyAaaRuleListSamplingEnable[] | cdktf.IResolvable;
  /**
  * uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#uri AamAaaPolicy#uri}
  */
  readonly uri?: AamAaaPolicyAaaRuleListUri[] | cdktf.IResolvable;
  /**
  * user_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#user_agent AamAaaPolicy#user_agent}
  */
  readonly userAgent?: AamAaaPolicyAaaRuleListUserAgent[] | cdktf.IResolvable;
}

export function aamAaaPolicyAaaRuleListStructToTerraform(struct?: AamAaaPolicyAaaRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    auth_failure_bypass: cdktf.numberToTerraform(struct!.authFailureBypass),
    authentication_template: cdktf.stringToTerraform(struct!.authenticationTemplate),
    authorize_policy: cdktf.stringToTerraform(struct!.authorizePolicy),
    captcha_authz_policy: cdktf.stringToTerraform(struct!.captchaAuthzPolicy),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_whitelist: cdktf.stringToTerraform(struct!.domainWhitelist),
    index: cdktf.numberToTerraform(struct!.index),
    match_encoded_uri: cdktf.numberToTerraform(struct!.matchEncodedUri),
    port: cdktf.numberToTerraform(struct!.port),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    access_list: aamAaaPolicyAaaRuleListAccessListStructToTerraform(struct!.accessList),
    host: cdktf.listMapper(aamAaaPolicyAaaRuleListHostToTerraform, true)(struct!.host),
    sampling_enable: cdktf.listMapper(aamAaaPolicyAaaRuleListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    uri: cdktf.listMapper(aamAaaPolicyAaaRuleListUriToTerraform, true)(struct!.uri),
    user_agent: cdktf.listMapper(aamAaaPolicyAaaRuleListUserAgentToTerraform, true)(struct!.userAgent),
  }
}


export function aamAaaPolicyAaaRuleListStructToHclTerraform(struct?: AamAaaPolicyAaaRuleListStruct | cdktf.IResolvable): any {
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
    auth_failure_bypass: {
      value: cdktf.numberToHclTerraform(struct!.authFailureBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_template: {
      value: cdktf.stringToHclTerraform(struct!.authenticationTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorize_policy: {
      value: cdktf.stringToHclTerraform(struct!.authorizePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_authz_policy: {
      value: cdktf.stringToHclTerraform(struct!.captchaAuthzPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.domainWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_encoded_uri: {
      value: cdktf.numberToHclTerraform(struct!.matchEncodedUri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_list: {
      value: aamAaaPolicyAaaRuleListAccessListStructToHclTerraform(struct!.accessList),
      isBlock: true,
      type: "list",
      storageClassType: "AamAaaPolicyAaaRuleListAccessListStructList",
    },
    host: {
      value: cdktf.listMapperHcl(aamAaaPolicyAaaRuleListHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "list",
      storageClassType: "AamAaaPolicyAaaRuleListHostList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(aamAaaPolicyAaaRuleListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "AamAaaPolicyAaaRuleListSamplingEnableList",
    },
    uri: {
      value: cdktf.listMapperHcl(aamAaaPolicyAaaRuleListUriToHclTerraform, true)(struct!.uri),
      isBlock: true,
      type: "list",
      storageClassType: "AamAaaPolicyAaaRuleListUriList",
    },
    user_agent: {
      value: cdktf.listMapperHcl(aamAaaPolicyAaaRuleListUserAgentToHclTerraform, true)(struct!.userAgent),
      isBlock: true,
      type: "list",
      storageClassType: "AamAaaPolicyAaaRuleListUserAgentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAaaPolicyAaaRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicyAaaRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._authFailureBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailureBypass = this._authFailureBypass;
    }
    if (this._authenticationTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationTemplate = this._authenticationTemplate;
    }
    if (this._authorizePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizePolicy = this._authorizePolicy;
    }
    if (this._captchaAuthzPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaAuthzPolicy = this._captchaAuthzPolicy;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainWhitelist = this._domainWhitelist;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._matchEncodedUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEncodedUri = this._matchEncodedUri;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._accessList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    if (this._userAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAaaPolicyAaaRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._authFailureBypass = undefined;
      this._authenticationTemplate = undefined;
      this._authorizePolicy = undefined;
      this._captchaAuthzPolicy = undefined;
      this._domainName = undefined;
      this._domainWhitelist = undefined;
      this._index = undefined;
      this._matchEncodedUri = undefined;
      this._port = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._accessList.internalValue = undefined;
      this._host.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._uri.internalValue = undefined;
      this._userAgent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._authFailureBypass = value.authFailureBypass;
      this._authenticationTemplate = value.authenticationTemplate;
      this._authorizePolicy = value.authorizePolicy;
      this._captchaAuthzPolicy = value.captchaAuthzPolicy;
      this._domainName = value.domainName;
      this._domainWhitelist = value.domainWhitelist;
      this._index = value.index;
      this._matchEncodedUri = value.matchEncodedUri;
      this._port = value.port;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._accessList.internalValue = value.accessList;
      this._host.internalValue = value.host;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._uri.internalValue = value.uri;
      this._userAgent.internalValue = value.userAgent;
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

  // auth_failure_bypass - computed: false, optional: true, required: false
  private _authFailureBypass?: number; 
  public get authFailureBypass() {
    return this.getNumberAttribute('auth_failure_bypass');
  }
  public set authFailureBypass(value: number) {
    this._authFailureBypass = value;
  }
  public resetAuthFailureBypass() {
    this._authFailureBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailureBypassInput() {
    return this._authFailureBypass;
  }

  // authentication_template - computed: false, optional: true, required: false
  private _authenticationTemplate?: string; 
  public get authenticationTemplate() {
    return this.getStringAttribute('authentication_template');
  }
  public set authenticationTemplate(value: string) {
    this._authenticationTemplate = value;
  }
  public resetAuthenticationTemplate() {
    this._authenticationTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTemplateInput() {
    return this._authenticationTemplate;
  }

  // authorize_policy - computed: false, optional: true, required: false
  private _authorizePolicy?: string; 
  public get authorizePolicy() {
    return this.getStringAttribute('authorize_policy');
  }
  public set authorizePolicy(value: string) {
    this._authorizePolicy = value;
  }
  public resetAuthorizePolicy() {
    this._authorizePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizePolicyInput() {
    return this._authorizePolicy;
  }

  // captcha_authz_policy - computed: false, optional: true, required: false
  private _captchaAuthzPolicy?: string; 
  public get captchaAuthzPolicy() {
    return this.getStringAttribute('captcha_authz_policy');
  }
  public set captchaAuthzPolicy(value: string) {
    this._captchaAuthzPolicy = value;
  }
  public resetCaptchaAuthzPolicy() {
    this._captchaAuthzPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaAuthzPolicyInput() {
    return this._captchaAuthzPolicy;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_whitelist - computed: false, optional: true, required: false
  private _domainWhitelist?: string; 
  public get domainWhitelist() {
    return this.getStringAttribute('domain_whitelist');
  }
  public set domainWhitelist(value: string) {
    this._domainWhitelist = value;
  }
  public resetDomainWhitelist() {
    this._domainWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainWhitelistInput() {
    return this._domainWhitelist;
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // match_encoded_uri - computed: false, optional: true, required: false
  private _matchEncodedUri?: number; 
  public get matchEncodedUri() {
    return this.getNumberAttribute('match_encoded_uri');
  }
  public set matchEncodedUri(value: number) {
    this._matchEncodedUri = value;
  }
  public resetMatchEncodedUri() {
    this._matchEncodedUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEncodedUriInput() {
    return this._matchEncodedUri;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList = new AamAaaPolicyAaaRuleListAccessListStructOutputReference(this, "access_list");
  public get accessList() {
    return this._accessList;
  }
  public putAccessList(value: AamAaaPolicyAaaRuleListAccessListStruct) {
    this._accessList.internalValue = value;
  }
  public resetAccessList() {
    this._accessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new AamAaaPolicyAaaRuleListHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: AamAaaPolicyAaaRuleListHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAaaPolicyAaaRuleListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAaaPolicyAaaRuleListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // uri - computed: false, optional: true, required: false
  private _uri = new AamAaaPolicyAaaRuleListUriList(this, "uri", false);
  public get uri() {
    return this._uri;
  }
  public putUri(value: AamAaaPolicyAaaRuleListUri[] | cdktf.IResolvable) {
    this._uri.internalValue = value;
  }
  public resetUri() {
    this._uri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri.internalValue;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent = new AamAaaPolicyAaaRuleListUserAgentList(this, "user_agent", false);
  public get userAgent() {
    return this._userAgent;
  }
  public putUserAgent(value: AamAaaPolicyAaaRuleListUserAgent[] | cdktf.IResolvable) {
    this._userAgent.internalValue = value;
  }
  public resetUserAgent() {
    this._userAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent.internalValue;
  }
}

export class AamAaaPolicyAaaRuleListStructList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicyAaaRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicyAaaRuleListStructOutputReference {
    return new AamAaaPolicyAaaRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAaaPolicySamplingEnable {
  /**
  * 'all': all; 'req': Request; 'req-reject': Request Rejected; 'req-auth': Request Matching Authentication Template; 'req-bypass': Request Bypassed; 'req-skip': Request Skipped; 'error': Error; 'failure-bypass': Auth Failure Bypass;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#counters1 AamAaaPolicy#counters1}
  */
  readonly counters1?: string;
}

export function aamAaaPolicySamplingEnableToTerraform(struct?: AamAaaPolicySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAaaPolicySamplingEnableToHclTerraform(struct?: AamAaaPolicySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAaaPolicySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicySamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAaaPolicySamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAaaPolicySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicySamplingEnableOutputReference {
    return new AamAaaPolicySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy thunder_aam_aaa_policy}
*/
export class AamAaaPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_aaa_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAaaPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAaaPolicy to import
  * @param importFromId The id of the existing AamAaaPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAaaPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_aaa_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy thunder_aam_aaa_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAaaPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AamAaaPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_aaa_policy',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._aaaRuleList.internalValue = config.aaaRuleList;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // aaa_rule_list - computed: false, optional: true, required: false
  private _aaaRuleList = new AamAaaPolicyAaaRuleListStructList(this, "aaa_rule_list", false);
  public get aaaRuleList() {
    return this._aaaRuleList;
  }
  public putAaaRuleList(value: AamAaaPolicyAaaRuleListStruct[] | cdktf.IResolvable) {
    this._aaaRuleList.internalValue = value;
  }
  public resetAaaRuleList() {
    this._aaaRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaRuleListInput() {
    return this._aaaRuleList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAaaPolicySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAaaPolicySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      aaa_rule_list: cdktf.listMapper(aamAaaPolicyAaaRuleListStructToTerraform, true)(this._aaaRuleList.internalValue),
      sampling_enable: cdktf.listMapper(aamAaaPolicySamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_rule_list: {
        value: cdktf.listMapperHcl(aamAaaPolicyAaaRuleListStructToHclTerraform, true)(this._aaaRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAaaPolicyAaaRuleListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAaaPolicySamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAaaPolicySamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
