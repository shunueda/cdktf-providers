// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationRelayFormBasedInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#id AamAuthenticationRelayFormBasedInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify form-based authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#name AamAuthenticationRelayFormBasedInstance#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#packet_capture_template AamAuthenticationRelayFormBasedInstance#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#uuid AamAuthenticationRelayFormBasedInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * request_uri_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#request_uri_list AamAuthenticationRelayFormBasedInstance#request_uri_list}
  */
  readonly requestUriList?: AamAuthenticationRelayFormBasedInstanceRequestUriListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#sampling_enable AamAuthenticationRelayFormBasedInstance#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationRelayFormBasedInstanceSamplingEnable[] | cdktf.IResolvable;
}
export interface AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValue {
  /**
  * Specify cookie in POST packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#cookie_value AamAuthenticationRelayFormBasedInstance#cookie_value}
  */
  readonly cookieValue?: string;
}

export function aamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValueToTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValueOutputReference | AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_value: cdktf.stringToTerraform(struct!.cookieValue),
  }
}


export function aamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValueToHclTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValueOutputReference | AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_value: {
      value: cdktf.stringToHclTerraform(struct!.cookieValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValue = this._cookieValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieValue = value.cookieValue;
    }
  }

  // cookie_value - computed: false, optional: true, required: false
  private _cookieValue?: string; 
  public get cookieValue() {
    return this.getStringAttribute('cookie_value');
  }
  public set cookieValue(value: string) {
    this._cookieValue = value;
  }
  public resetCookieValue() {
    this._cookieValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueInput() {
    return this._cookieValue;
  }
}
export interface AamAuthenticationRelayFormBasedInstanceRequestUriListCookie {
  /**
  * cookie_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#cookie_value AamAuthenticationRelayFormBasedInstance#cookie_value}
  */
  readonly cookieValue?: AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValue;
}

export function aamAuthenticationRelayFormBasedInstanceRequestUriListCookieToTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriListCookieOutputReference | AamAuthenticationRelayFormBasedInstanceRequestUriListCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_value: aamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValueToTerraform(struct!.cookieValue),
  }
}


export function aamAuthenticationRelayFormBasedInstanceRequestUriListCookieToHclTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriListCookieOutputReference | AamAuthenticationRelayFormBasedInstanceRequestUriListCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_value: {
      value: aamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValueToHclTerraform(struct!.cookieValue),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationRelayFormBasedInstanceRequestUriListCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationRelayFormBasedInstanceRequestUriListCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValue = this._cookieValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationRelayFormBasedInstanceRequestUriListCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieValue.internalValue = value.cookieValue;
    }
  }

  // cookie_value - computed: false, optional: true, required: false
  private _cookieValue = new AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValueOutputReference(this, "cookie_value");
  public get cookieValue() {
    return this._cookieValue;
  }
  public putCookieValue(value: AamAuthenticationRelayFormBasedInstanceRequestUriListCookieCookieValue) {
    this._cookieValue.internalValue = value;
  }
  public resetCookieValue() {
    this._cookieValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieValueInput() {
    return this._cookieValue.internalValue;
  }
}
export interface AamAuthenticationRelayFormBasedInstanceRequestUriListStruct {
  /**
  * Specify the action-URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#action_uri AamAuthenticationRelayFormBasedInstance#action_uri}
  */
  readonly actionUri?: string;
  /**
  * Specify domain variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#domain_variable AamAuthenticationRelayFormBasedInstance#domain_variable}
  */
  readonly domainVariable?: string;
  /**
  * 'equals': URI exactly matches the string; 'contains': URI string contains another sub string; 'starts-with': URI string starts with sub string; 'ends-with': URI string ends with sub string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#match_type AamAuthenticationRelayFormBasedInstance#match_type}
  */
  readonly matchType: string;
  /**
  * Specify the max packet collection size in bytes, default is 1MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#max_packet_collect_size AamAuthenticationRelayFormBasedInstance#max_packet_collect_size}
  */
  readonly maxPacketCollectSize?: number;
  /**
  * Specify other variables (n1=v1&n2=v2) in form relay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#other_variables AamAuthenticationRelayFormBasedInstance#other_variables}
  */
  readonly otherVariables?: string;
  /**
  * Specify password variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#password_variable AamAuthenticationRelayFormBasedInstance#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * Specify request URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#uri AamAuthenticationRelayFormBasedInstance#uri}
  */
  readonly uri: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#user_tag AamAuthenticationRelayFormBasedInstance#user_tag}
  */
  readonly userTag?: string;
  /**
  * Specify username variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#user_variable AamAuthenticationRelayFormBasedInstance#user_variable}
  */
  readonly userVariable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#uuid AamAuthenticationRelayFormBasedInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#cookie AamAuthenticationRelayFormBasedInstance#cookie}
  */
  readonly cookie?: AamAuthenticationRelayFormBasedInstanceRequestUriListCookie;
}

export function aamAuthenticationRelayFormBasedInstanceRequestUriListStructToTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_uri: cdktf.stringToTerraform(struct!.actionUri),
    domain_variable: cdktf.stringToTerraform(struct!.domainVariable),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    max_packet_collect_size: cdktf.numberToTerraform(struct!.maxPacketCollectSize),
    other_variables: cdktf.stringToTerraform(struct!.otherVariables),
    password_variable: cdktf.stringToTerraform(struct!.passwordVariable),
    uri: cdktf.stringToTerraform(struct!.uri),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    user_variable: cdktf.stringToTerraform(struct!.userVariable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cookie: aamAuthenticationRelayFormBasedInstanceRequestUriListCookieToTerraform(struct!.cookie),
  }
}


export function aamAuthenticationRelayFormBasedInstanceRequestUriListStructToHclTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_uri: {
      value: cdktf.stringToHclTerraform(struct!.actionUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_variable: {
      value: cdktf.stringToHclTerraform(struct!.domainVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_packet_collect_size: {
      value: cdktf.numberToHclTerraform(struct!.maxPacketCollectSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_variables: {
      value: cdktf.stringToHclTerraform(struct!.otherVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_variable: {
      value: cdktf.stringToHclTerraform(struct!.passwordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_variable: {
      value: cdktf.stringToHclTerraform(struct!.userVariable),
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
    cookie: {
      value: aamAuthenticationRelayFormBasedInstanceRequestUriListCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationRelayFormBasedInstanceRequestUriListCookieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationRelayFormBasedInstanceRequestUriListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationRelayFormBasedInstanceRequestUriListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionUri = this._actionUri;
    }
    if (this._domainVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainVariable = this._domainVariable;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._maxPacketCollectSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPacketCollectSize = this._maxPacketCollectSize;
    }
    if (this._otherVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherVariables = this._otherVariables;
    }
    if (this._passwordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVariable = this._passwordVariable;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._userVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.userVariable = this._userVariable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationRelayFormBasedInstanceRequestUriListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionUri = undefined;
      this._domainVariable = undefined;
      this._matchType = undefined;
      this._maxPacketCollectSize = undefined;
      this._otherVariables = undefined;
      this._passwordVariable = undefined;
      this._uri = undefined;
      this._userTag = undefined;
      this._userVariable = undefined;
      this._uuid = undefined;
      this._cookie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionUri = value.actionUri;
      this._domainVariable = value.domainVariable;
      this._matchType = value.matchType;
      this._maxPacketCollectSize = value.maxPacketCollectSize;
      this._otherVariables = value.otherVariables;
      this._passwordVariable = value.passwordVariable;
      this._uri = value.uri;
      this._userTag = value.userTag;
      this._userVariable = value.userVariable;
      this._uuid = value.uuid;
      this._cookie.internalValue = value.cookie;
    }
  }

  // action_uri - computed: false, optional: true, required: false
  private _actionUri?: string; 
  public get actionUri() {
    return this.getStringAttribute('action_uri');
  }
  public set actionUri(value: string) {
    this._actionUri = value;
  }
  public resetActionUri() {
    this._actionUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionUriInput() {
    return this._actionUri;
  }

  // domain_variable - computed: false, optional: true, required: false
  private _domainVariable?: string; 
  public get domainVariable() {
    return this.getStringAttribute('domain_variable');
  }
  public set domainVariable(value: string) {
    this._domainVariable = value;
  }
  public resetDomainVariable() {
    this._domainVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainVariableInput() {
    return this._domainVariable;
  }

  // match_type - computed: false, optional: false, required: true
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // max_packet_collect_size - computed: false, optional: true, required: false
  private _maxPacketCollectSize?: number; 
  public get maxPacketCollectSize() {
    return this.getNumberAttribute('max_packet_collect_size');
  }
  public set maxPacketCollectSize(value: number) {
    this._maxPacketCollectSize = value;
  }
  public resetMaxPacketCollectSize() {
    this._maxPacketCollectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketCollectSizeInput() {
    return this._maxPacketCollectSize;
  }

  // other_variables - computed: false, optional: true, required: false
  private _otherVariables?: string; 
  public get otherVariables() {
    return this.getStringAttribute('other_variables');
  }
  public set otherVariables(value: string) {
    this._otherVariables = value;
  }
  public resetOtherVariables() {
    this._otherVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherVariablesInput() {
    return this._otherVariables;
  }

  // password_variable - computed: false, optional: true, required: false
  private _passwordVariable?: string; 
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }
  public set passwordVariable(value: string) {
    this._passwordVariable = value;
  }
  public resetPasswordVariable() {
    this._passwordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVariableInput() {
    return this._passwordVariable;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
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

  // user_variable - computed: false, optional: true, required: false
  private _userVariable?: string; 
  public get userVariable() {
    return this.getStringAttribute('user_variable');
  }
  public set userVariable(value: string) {
    this._userVariable = value;
  }
  public resetUserVariable() {
    this._userVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVariableInput() {
    return this._userVariable;
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

  // cookie - computed: false, optional: true, required: false
  private _cookie = new AamAuthenticationRelayFormBasedInstanceRequestUriListCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: AamAuthenticationRelayFormBasedInstanceRequestUriListCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}

export class AamAuthenticationRelayFormBasedInstanceRequestUriListStructList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationRelayFormBasedInstanceRequestUriListStruct[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationRelayFormBasedInstanceRequestUriListStructOutputReference {
    return new AamAuthenticationRelayFormBasedInstanceRequestUriListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthenticationRelayFormBasedInstanceSamplingEnable {
  /**
  * 'all': all; 'request': Request; 'invalid_srv_rsp': Invalid Server Response; 'post_fail': POST Failed; 'invalid_cred': Invalid Credential; 'bad_req': Bad Request; 'not_fnd': Not Found; 'error': Internal Server Error; 'other_error': Other Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#counters1 AamAuthenticationRelayFormBasedInstance#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationRelayFormBasedInstanceSamplingEnableToTerraform(struct?: AamAuthenticationRelayFormBasedInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationRelayFormBasedInstanceSamplingEnableToHclTerraform(struct?: AamAuthenticationRelayFormBasedInstanceSamplingEnable | cdktf.IResolvable): any {
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

export class AamAuthenticationRelayFormBasedInstanceSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationRelayFormBasedInstanceSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAuthenticationRelayFormBasedInstanceSamplingEnable | cdktf.IResolvable | undefined) {
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

export class AamAuthenticationRelayFormBasedInstanceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationRelayFormBasedInstanceSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationRelayFormBasedInstanceSamplingEnableOutputReference {
    return new AamAuthenticationRelayFormBasedInstanceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance thunder_aam_authentication_relay_form_based_instance}
*/
export class AamAuthenticationRelayFormBasedInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_form_based_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationRelayFormBasedInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationRelayFormBasedInstance to import
  * @param importFromId The id of the existing AamAuthenticationRelayFormBasedInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationRelayFormBasedInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_form_based_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_relay_form_based_instance thunder_aam_authentication_relay_form_based_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationRelayFormBasedInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationRelayFormBasedInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_form_based_instance',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._uuid = config.uuid;
    this._requestUriList.internalValue = config.requestUriList;
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

  // request_uri_list - computed: false, optional: true, required: false
  private _requestUriList = new AamAuthenticationRelayFormBasedInstanceRequestUriListStructList(this, "request_uri_list", false);
  public get requestUriList() {
    return this._requestUriList;
  }
  public putRequestUriList(value: AamAuthenticationRelayFormBasedInstanceRequestUriListStruct[] | cdktf.IResolvable) {
    this._requestUriList.internalValue = value;
  }
  public resetRequestUriList() {
    this._requestUriList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriListInput() {
    return this._requestUriList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationRelayFormBasedInstanceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationRelayFormBasedInstanceSamplingEnable[] | cdktf.IResolvable) {
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
      uuid: cdktf.stringToTerraform(this._uuid),
      request_uri_list: cdktf.listMapper(aamAuthenticationRelayFormBasedInstanceRequestUriListStructToTerraform, true)(this._requestUriList.internalValue),
      sampling_enable: cdktf.listMapper(aamAuthenticationRelayFormBasedInstanceSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_uri_list: {
        value: cdktf.listMapperHcl(aamAuthenticationRelayFormBasedInstanceRequestUriListStructToHclTerraform, true)(this._requestUriList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationRelayFormBasedInstanceRequestUriListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationRelayFormBasedInstanceSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationRelayFormBasedInstanceSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
