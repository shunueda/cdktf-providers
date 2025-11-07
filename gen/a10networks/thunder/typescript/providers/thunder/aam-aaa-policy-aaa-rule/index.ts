// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAaaPolicyAaaRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'allow': Allow traffic that matches this rule; 'deny': Deny traffic that matches this rule;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#action AamAaaPolicyAaaRule#action}
  */
  readonly action?: string;
  /**
  * Forward client request even though authentication has failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#auth_failure_bypass AamAaaPolicyAaaRule#auth_failure_bypass}
  */
  readonly authFailureBypass?: number;
  /**
  * Specify authentication template name to bind to the AAA rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#authentication_template AamAaaPolicyAaaRule#authentication_template}
  */
  readonly authenticationTemplate?: string;
  /**
  * Specify authorization policy to bind to the AAA rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#authorize_policy AamAaaPolicyAaaRule#authorize_policy}
  */
  readonly authorizePolicy?: string;
  /**
  * Specify authorization policy for CAPTCHA (Authorization policy name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#captcha_authz_policy AamAaaPolicyAaaRule#captcha_authz_policy}
  */
  readonly captchaAuthzPolicy?: string;
  /**
  * Specify domain name to bind to the AAA rule (ex: a10networks.com, www.a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#domain_name AamAaaPolicyAaaRule#domain_name}
  */
  readonly domainName?: string;
  /**
  * Specify the AC type class-list for the domain-whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#domain_whitelist AamAaaPolicyAaaRule#domain_whitelist}
  */
  readonly domainWhitelist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#id AamAaaPolicyAaaRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify AAA rule index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#index AamAaaPolicyAaaRule#index}
  */
  readonly index: number;
  /**
  * Enable URL decoding for URI matching
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#match_encoded_uri AamAaaPolicyAaaRule#match_encoded_uri}
  */
  readonly matchEncodedUri?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#name AamAaaPolicyAaaRule#name}
  */
  readonly name: string;
  /**
  * Specify port number for aaa-rule, default is 0 for all port numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#port AamAaaPolicyAaaRule#port}
  */
  readonly port?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#user_tag AamAaaPolicyAaaRule#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#uuid AamAaaPolicyAaaRule#uuid}
  */
  readonly uuid?: string;
  /**
  * access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#access_list AamAaaPolicyAaaRule#access_list}
  */
  readonly accessList?: AamAaaPolicyAaaRuleAccessListStruct;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#host AamAaaPolicyAaaRule#host}
  */
  readonly host?: AamAaaPolicyAaaRuleHost[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#sampling_enable AamAaaPolicyAaaRule#sampling_enable}
  */
  readonly samplingEnable?: AamAaaPolicyAaaRuleSamplingEnable[] | cdktf.IResolvable;
  /**
  * uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#uri AamAaaPolicyAaaRule#uri}
  */
  readonly uri?: AamAaaPolicyAaaRuleUri[] | cdktf.IResolvable;
  /**
  * user_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#user_agent AamAaaPolicyAaaRule#user_agent}
  */
  readonly userAgent?: AamAaaPolicyAaaRuleUserAgent[] | cdktf.IResolvable;
}
export interface AamAaaPolicyAaaRuleAccessListStruct {
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#acl_id AamAaaPolicyAaaRule#acl_id}
  */
  readonly aclId?: number;
  /**
  * 'ip-name': Apply an IP named access list; 'ipv6-name': Apply an IPv6 named access list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#acl_name AamAaaPolicyAaaRule#acl_name}
  */
  readonly aclName?: string;
  /**
  * Specify Named Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#name AamAaaPolicyAaaRule#name}
  */
  readonly name?: string;
}

export function aamAaaPolicyAaaRuleAccessListStructToTerraform(struct?: AamAaaPolicyAaaRuleAccessListStructOutputReference | AamAaaPolicyAaaRuleAccessListStruct): any {
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


export function aamAaaPolicyAaaRuleAccessListStructToHclTerraform(struct?: AamAaaPolicyAaaRuleAccessListStructOutputReference | AamAaaPolicyAaaRuleAccessListStruct): any {
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

export class AamAaaPolicyAaaRuleAccessListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAaaPolicyAaaRuleAccessListStruct | undefined {
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

  public set internalValue(value: AamAaaPolicyAaaRuleAccessListStruct | undefined) {
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
export interface AamAaaPolicyAaaRuleHost {
  /**
  * 'contains': Match HOST if request HTTP HOST header contains specified hostname; 'ends-with': Match HOST if request HTTP HOST header ends with specified hostname; 'equals': Match HOST if request HTTP HOST header equals specified hostname; 'starts-with': Match HOST if request HTTP HOST header starts with specified hostname;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#host_match_type AamAaaPolicyAaaRule#host_match_type}
  */
  readonly hostMatchType?: string;
  /**
  * Specify URI string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#host_str AamAaaPolicyAaaRule#host_str}
  */
  readonly hostStr?: string;
}

export function aamAaaPolicyAaaRuleHostToTerraform(struct?: AamAaaPolicyAaaRuleHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_match_type: cdktf.stringToTerraform(struct!.hostMatchType),
    host_str: cdktf.stringToTerraform(struct!.hostStr),
  }
}


export function aamAaaPolicyAaaRuleHostToHclTerraform(struct?: AamAaaPolicyAaaRuleHost | cdktf.IResolvable): any {
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

export class AamAaaPolicyAaaRuleHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicyAaaRuleHost | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAaaPolicyAaaRuleHost | cdktf.IResolvable | undefined) {
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

export class AamAaaPolicyAaaRuleHostList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicyAaaRuleHost[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicyAaaRuleHostOutputReference {
    return new AamAaaPolicyAaaRuleHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAaaPolicyAaaRuleSamplingEnable {
  /**
  * 'all': all; 'total_count': total_count; 'hit_deny': hit_deny; 'hit_auth': hit_auth; 'hit_bypass': hit_bypass; 'failure_bypass': failure_bypass;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#counters1 AamAaaPolicyAaaRule#counters1}
  */
  readonly counters1?: string;
}

export function aamAaaPolicyAaaRuleSamplingEnableToTerraform(struct?: AamAaaPolicyAaaRuleSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAaaPolicyAaaRuleSamplingEnableToHclTerraform(struct?: AamAaaPolicyAaaRuleSamplingEnable | cdktf.IResolvable): any {
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

export class AamAaaPolicyAaaRuleSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicyAaaRuleSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAaaPolicyAaaRuleSamplingEnable | cdktf.IResolvable | undefined) {
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

export class AamAaaPolicyAaaRuleSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicyAaaRuleSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicyAaaRuleSamplingEnableOutputReference {
    return new AamAaaPolicyAaaRuleSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAaaPolicyAaaRuleUri {
  /**
  * 'contains': Match URI if request URI contains specified URI; 'ends-with': Match URI if request URI ends with specified URI; 'equals': Match URI if request URI equals specified URI; 'starts-with': Match URI if request URI starts with specified URI;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#match_type AamAaaPolicyAaaRule#match_type}
  */
  readonly matchType?: string;
  /**
  * Specify URI string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#uri_str AamAaaPolicyAaaRule#uri_str}
  */
  readonly uriStr?: string;
}

export function aamAaaPolicyAaaRuleUriToTerraform(struct?: AamAaaPolicyAaaRuleUri | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_type: cdktf.stringToTerraform(struct!.matchType),
    uri_str: cdktf.stringToTerraform(struct!.uriStr),
  }
}


export function aamAaaPolicyAaaRuleUriToHclTerraform(struct?: AamAaaPolicyAaaRuleUri | cdktf.IResolvable): any {
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

export class AamAaaPolicyAaaRuleUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicyAaaRuleUri | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAaaPolicyAaaRuleUri | cdktf.IResolvable | undefined) {
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

export class AamAaaPolicyAaaRuleUriList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicyAaaRuleUri[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicyAaaRuleUriOutputReference {
    return new AamAaaPolicyAaaRuleUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAaaPolicyAaaRuleUserAgent {
  /**
  * 'contains': Match request User-Agent header if it contains specified string; 'ends-with': Match request User-Agent header if it ends with specified string; 'equals': Match request User-Agent header if it equals specified string; 'starts-with': Match request User-Agent header if it starts with specified string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#user_agent_match_type AamAaaPolicyAaaRule#user_agent_match_type}
  */
  readonly userAgentMatchType?: string;
  /**
  * Specify request User-Agent string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#user_agent_str AamAaaPolicyAaaRule#user_agent_str}
  */
  readonly userAgentStr?: string;
}

export function aamAaaPolicyAaaRuleUserAgentToTerraform(struct?: AamAaaPolicyAaaRuleUserAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_agent_match_type: cdktf.stringToTerraform(struct!.userAgentMatchType),
    user_agent_str: cdktf.stringToTerraform(struct!.userAgentStr),
  }
}


export function aamAaaPolicyAaaRuleUserAgentToHclTerraform(struct?: AamAaaPolicyAaaRuleUserAgent | cdktf.IResolvable): any {
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

export class AamAaaPolicyAaaRuleUserAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAaaPolicyAaaRuleUserAgent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAaaPolicyAaaRuleUserAgent | cdktf.IResolvable | undefined) {
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

export class AamAaaPolicyAaaRuleUserAgentList extends cdktf.ComplexList {
  public internalValue? : AamAaaPolicyAaaRuleUserAgent[] | cdktf.IResolvable

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
  public get(index: number): AamAaaPolicyAaaRuleUserAgentOutputReference {
    return new AamAaaPolicyAaaRuleUserAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule thunder_aam_aaa_policy_aaa_rule}
*/
export class AamAaaPolicyAaaRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_aaa_policy_aaa_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAaaPolicyAaaRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAaaPolicyAaaRule to import
  * @param importFromId The id of the existing AamAaaPolicyAaaRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAaaPolicyAaaRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_aaa_policy_aaa_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_aaa_policy_aaa_rule thunder_aam_aaa_policy_aaa_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAaaPolicyAaaRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AamAaaPolicyAaaRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_aaa_policy_aaa_rule',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._authFailureBypass = config.authFailureBypass;
    this._authenticationTemplate = config.authenticationTemplate;
    this._authorizePolicy = config.authorizePolicy;
    this._captchaAuthzPolicy = config.captchaAuthzPolicy;
    this._domainName = config.domainName;
    this._domainWhitelist = config.domainWhitelist;
    this._id = config.id;
    this._index = config.index;
    this._matchEncodedUri = config.matchEncodedUri;
    this._name = config.name;
    this._port = config.port;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._accessList.internalValue = config.accessList;
    this._host.internalValue = config.host;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._uri.internalValue = config.uri;
    this._userAgent.internalValue = config.userAgent;
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
  private _accessList = new AamAaaPolicyAaaRuleAccessListStructOutputReference(this, "access_list");
  public get accessList() {
    return this._accessList;
  }
  public putAccessList(value: AamAaaPolicyAaaRuleAccessListStruct) {
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
  private _host = new AamAaaPolicyAaaRuleHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: AamAaaPolicyAaaRuleHost[] | cdktf.IResolvable) {
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
  private _samplingEnable = new AamAaaPolicyAaaRuleSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAaaPolicyAaaRuleSamplingEnable[] | cdktf.IResolvable) {
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
  private _uri = new AamAaaPolicyAaaRuleUriList(this, "uri", false);
  public get uri() {
    return this._uri;
  }
  public putUri(value: AamAaaPolicyAaaRuleUri[] | cdktf.IResolvable) {
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
  private _userAgent = new AamAaaPolicyAaaRuleUserAgentList(this, "user_agent", false);
  public get userAgent() {
    return this._userAgent;
  }
  public putUserAgent(value: AamAaaPolicyAaaRuleUserAgent[] | cdktf.IResolvable) {
    this._userAgent.internalValue = value;
  }
  public resetUserAgent() {
    this._userAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      auth_failure_bypass: cdktf.numberToTerraform(this._authFailureBypass),
      authentication_template: cdktf.stringToTerraform(this._authenticationTemplate),
      authorize_policy: cdktf.stringToTerraform(this._authorizePolicy),
      captcha_authz_policy: cdktf.stringToTerraform(this._captchaAuthzPolicy),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_whitelist: cdktf.stringToTerraform(this._domainWhitelist),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.numberToTerraform(this._index),
      match_encoded_uri: cdktf.numberToTerraform(this._matchEncodedUri),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      access_list: aamAaaPolicyAaaRuleAccessListStructToTerraform(this._accessList.internalValue),
      host: cdktf.listMapper(aamAaaPolicyAaaRuleHostToTerraform, true)(this._host.internalValue),
      sampling_enable: cdktf.listMapper(aamAaaPolicyAaaRuleSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      uri: cdktf.listMapper(aamAaaPolicyAaaRuleUriToTerraform, true)(this._uri.internalValue),
      user_agent: cdktf.listMapper(aamAaaPolicyAaaRuleUserAgentToTerraform, true)(this._userAgent.internalValue),
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
      auth_failure_bypass: {
        value: cdktf.numberToHclTerraform(this._authFailureBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_template: {
        value: cdktf.stringToHclTerraform(this._authenticationTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorize_policy: {
        value: cdktf.stringToHclTerraform(this._authorizePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captcha_authz_policy: {
        value: cdktf.stringToHclTerraform(this._captchaAuthzPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_whitelist: {
        value: cdktf.stringToHclTerraform(this._domainWhitelist),
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
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_encoded_uri: {
        value: cdktf.numberToHclTerraform(this._matchEncodedUri),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      access_list: {
        value: aamAaaPolicyAaaRuleAccessListStructToHclTerraform(this._accessList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAaaPolicyAaaRuleAccessListStructList",
      },
      host: {
        value: cdktf.listMapperHcl(aamAaaPolicyAaaRuleHostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAaaPolicyAaaRuleHostList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAaaPolicyAaaRuleSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAaaPolicyAaaRuleSamplingEnableList",
      },
      uri: {
        value: cdktf.listMapperHcl(aamAaaPolicyAaaRuleUriToHclTerraform, true)(this._uri.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAaaPolicyAaaRuleUriList",
      },
      user_agent: {
        value: cdktf.listMapperHcl(aamAaaPolicyAaaRuleUserAgentToHclTerraform, true)(this._userAgent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAaaPolicyAaaRuleUserAgentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
