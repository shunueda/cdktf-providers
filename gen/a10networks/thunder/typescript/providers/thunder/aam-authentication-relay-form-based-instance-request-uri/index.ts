// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationRelayFormBasedInstanceRequestUriConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the action-URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#action_uri AamAuthenticationRelayFormBasedInstanceRequestUri#action_uri}
  */
  readonly actionUri?: string;
  /**
  * Specify domain variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#domain_variable AamAuthenticationRelayFormBasedInstanceRequestUri#domain_variable}
  */
  readonly domainVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#id AamAuthenticationRelayFormBasedInstanceRequestUri#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'equals': URI exactly matches the string; 'contains': URI string contains another sub string; 'starts-with': URI string starts with sub string; 'ends-with': URI string ends with sub string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#match_type AamAuthenticationRelayFormBasedInstanceRequestUri#match_type}
  */
  readonly matchType: string;
  /**
  * Specify the max packet collection size in bytes, default is 1MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#max_packet_collect_size AamAuthenticationRelayFormBasedInstanceRequestUri#max_packet_collect_size}
  */
  readonly maxPacketCollectSize?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#name AamAuthenticationRelayFormBasedInstanceRequestUri#name}
  */
  readonly name: string;
  /**
  * Specify other variables (n1=v1&n2=v2) in form relay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#other_variables AamAuthenticationRelayFormBasedInstanceRequestUri#other_variables}
  */
  readonly otherVariables?: string;
  /**
  * Specify password variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#password_variable AamAuthenticationRelayFormBasedInstanceRequestUri#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * Specify request URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#uri AamAuthenticationRelayFormBasedInstanceRequestUri#uri}
  */
  readonly uri: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#user_tag AamAuthenticationRelayFormBasedInstanceRequestUri#user_tag}
  */
  readonly userTag?: string;
  /**
  * Specify username variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#user_variable AamAuthenticationRelayFormBasedInstanceRequestUri#user_variable}
  */
  readonly userVariable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#uuid AamAuthenticationRelayFormBasedInstanceRequestUri#uuid}
  */
  readonly uuid?: string;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#cookie AamAuthenticationRelayFormBasedInstanceRequestUri#cookie}
  */
  readonly cookie?: AamAuthenticationRelayFormBasedInstanceRequestUriCookie;
}
export interface AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValue {
  /**
  * Specify cookie in POST packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#cookie_value AamAuthenticationRelayFormBasedInstanceRequestUri#cookie_value}
  */
  readonly cookieValue?: string;
}

export function aamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValueToTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValueOutputReference | AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_value: cdktf.stringToTerraform(struct!.cookieValue),
  }
}


export function aamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValueToHclTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValueOutputReference | AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValue): any {
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

export class AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValue = this._cookieValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValue | undefined) {
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
export interface AamAuthenticationRelayFormBasedInstanceRequestUriCookie {
  /**
  * cookie_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#cookie_value AamAuthenticationRelayFormBasedInstanceRequestUri#cookie_value}
  */
  readonly cookieValue?: AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValue;
}

export function aamAuthenticationRelayFormBasedInstanceRequestUriCookieToTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriCookieOutputReference | AamAuthenticationRelayFormBasedInstanceRequestUriCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_value: aamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValueToTerraform(struct!.cookieValue),
  }
}


export function aamAuthenticationRelayFormBasedInstanceRequestUriCookieToHclTerraform(struct?: AamAuthenticationRelayFormBasedInstanceRequestUriCookieOutputReference | AamAuthenticationRelayFormBasedInstanceRequestUriCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_value: {
      value: aamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValueToHclTerraform(struct!.cookieValue),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationRelayFormBasedInstanceRequestUriCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationRelayFormBasedInstanceRequestUriCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieValue = this._cookieValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationRelayFormBasedInstanceRequestUriCookie | undefined) {
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
  private _cookieValue = new AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValueOutputReference(this, "cookie_value");
  public get cookieValue() {
    return this._cookieValue;
  }
  public putCookieValue(value: AamAuthenticationRelayFormBasedInstanceRequestUriCookieCookieValue) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri thunder_aam_authentication_relay_form_based_instance_request_uri}
*/
export class AamAuthenticationRelayFormBasedInstanceRequestUri extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_form_based_instance_request_uri";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationRelayFormBasedInstanceRequestUri resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationRelayFormBasedInstanceRequestUri to import
  * @param importFromId The id of the existing AamAuthenticationRelayFormBasedInstanceRequestUri that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationRelayFormBasedInstanceRequestUri to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_form_based_instance_request_uri", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_form_based_instance_request_uri thunder_aam_authentication_relay_form_based_instance_request_uri} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationRelayFormBasedInstanceRequestUriConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationRelayFormBasedInstanceRequestUriConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_form_based_instance_request_uri',
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
    this._actionUri = config.actionUri;
    this._domainVariable = config.domainVariable;
    this._id = config.id;
    this._matchType = config.matchType;
    this._maxPacketCollectSize = config.maxPacketCollectSize;
    this._name = config.name;
    this._otherVariables = config.otherVariables;
    this._passwordVariable = config.passwordVariable;
    this._uri = config.uri;
    this._userTag = config.userTag;
    this._userVariable = config.userVariable;
    this._uuid = config.uuid;
    this._cookie.internalValue = config.cookie;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _cookie = new AamAuthenticationRelayFormBasedInstanceRequestUriCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: AamAuthenticationRelayFormBasedInstanceRequestUriCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_uri: cdktf.stringToTerraform(this._actionUri),
      domain_variable: cdktf.stringToTerraform(this._domainVariable),
      id: cdktf.stringToTerraform(this._id),
      match_type: cdktf.stringToTerraform(this._matchType),
      max_packet_collect_size: cdktf.numberToTerraform(this._maxPacketCollectSize),
      name: cdktf.stringToTerraform(this._name),
      other_variables: cdktf.stringToTerraform(this._otherVariables),
      password_variable: cdktf.stringToTerraform(this._passwordVariable),
      uri: cdktf.stringToTerraform(this._uri),
      user_tag: cdktf.stringToTerraform(this._userTag),
      user_variable: cdktf.stringToTerraform(this._userVariable),
      uuid: cdktf.stringToTerraform(this._uuid),
      cookie: aamAuthenticationRelayFormBasedInstanceRequestUriCookieToTerraform(this._cookie.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_uri: {
        value: cdktf.stringToHclTerraform(this._actionUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_variable: {
        value: cdktf.stringToHclTerraform(this._domainVariable),
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
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_packet_collect_size: {
        value: cdktf.numberToHclTerraform(this._maxPacketCollectSize),
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
      other_variables: {
        value: cdktf.stringToHclTerraform(this._otherVariables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_variable: {
        value: cdktf.stringToHclTerraform(this._passwordVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
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
      user_variable: {
        value: cdktf.stringToHclTerraform(this._userVariable),
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
      cookie: {
        value: aamAuthenticationRelayFormBasedInstanceRequestUriCookieToHclTerraform(this._cookie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationRelayFormBasedInstanceRequestUriCookieList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
