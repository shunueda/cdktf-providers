// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationRelaySamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#id AamAuthenticationRelaySaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the URI for IDP to handle SAML authentication request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#idp_auth_uri AamAuthenticationRelaySaml#idp_auth_uri}
  */
  readonly idpAuthUri?: string;
  /**
  * 'equals': URI exactly matches the string; 'contains': URI string contains another sub string; 'starts-with': URI string starts with sub string; 'ends-with': URI string ends with sub string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#match_type AamAuthenticationRelaySaml#match_type}
  */
  readonly matchType?: string;
  /**
  * Match URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#match_uri AamAuthenticationRelaySaml#match_uri}
  */
  readonly matchUri?: string;
  /**
  * 'get-from-backend': Get RelayState parameter from backend server; 'request-uri': Use the (URL encoded) current request-uri as the RelayState;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#method AamAuthenticationRelaySaml#method}
  */
  readonly method?: string;
  /**
  * Specify SAML authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#name AamAuthenticationRelaySaml#name}
  */
  readonly name: string;
  /**
  * Specify the backend server assertion consuming service URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#relay_acs_uri AamAuthenticationRelaySaml#relay_acs_uri}
  */
  readonly relayAcsUri?: string;
  /**
  * Specify how many continuous fail for SAML relay will trigger. Default will not retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#retry_number AamAuthenticationRelaySaml#retry_number}
  */
  readonly retryNumber?: number;
  /**
  * Specify the cookie name that used by backend server for authenticated users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#server_cookie_name AamAuthenticationRelaySaml#server_cookie_name}
  */
  readonly serverCookieName?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#user_tag AamAuthenticationRelaySaml#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#uuid AamAuthenticationRelaySaml#uuid}
  */
  readonly uuid?: string;
  /**
  * Use the fixed string as the RelayState
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#value AamAuthenticationRelaySaml#value}
  */
  readonly value?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#sampling_enable AamAuthenticationRelaySaml#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationRelaySamlSamplingEnable[] | cdktf.IResolvable;
}
export interface AamAuthenticationRelaySamlSamplingEnable {
  /**
  * 'all': all; 'request': Request; 'success': Success; 'failure': Failure; 'error': Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#counters1 AamAuthenticationRelaySaml#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationRelaySamlSamplingEnableToTerraform(struct?: AamAuthenticationRelaySamlSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationRelaySamlSamplingEnableToHclTerraform(struct?: AamAuthenticationRelaySamlSamplingEnable | cdktf.IResolvable): any {
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

export class AamAuthenticationRelaySamlSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationRelaySamlSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AamAuthenticationRelaySamlSamplingEnable | cdktf.IResolvable | undefined) {
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

export class AamAuthenticationRelaySamlSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationRelaySamlSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationRelaySamlSamplingEnableOutputReference {
    return new AamAuthenticationRelaySamlSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml thunder_aam_authentication_relay_saml}
*/
export class AamAuthenticationRelaySaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationRelaySaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationRelaySaml to import
  * @param importFromId The id of the existing AamAuthenticationRelaySaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationRelaySaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_relay_saml thunder_aam_authentication_relay_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationRelaySamlConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationRelaySamlConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_saml',
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
    this._id = config.id;
    this._idpAuthUri = config.idpAuthUri;
    this._matchType = config.matchType;
    this._matchUri = config.matchUri;
    this._method = config.method;
    this._name = config.name;
    this._relayAcsUri = config.relayAcsUri;
    this._retryNumber = config.retryNumber;
    this._serverCookieName = config.serverCookieName;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._value = config.value;
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

  // idp_auth_uri - computed: false, optional: true, required: false
  private _idpAuthUri?: string; 
  public get idpAuthUri() {
    return this.getStringAttribute('idp_auth_uri');
  }
  public set idpAuthUri(value: string) {
    this._idpAuthUri = value;
  }
  public resetIdpAuthUri() {
    this._idpAuthUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpAuthUriInput() {
    return this._idpAuthUri;
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

  // match_uri - computed: false, optional: true, required: false
  private _matchUri?: string; 
  public get matchUri() {
    return this.getStringAttribute('match_uri');
  }
  public set matchUri(value: string) {
    this._matchUri = value;
  }
  public resetMatchUri() {
    this._matchUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchUriInput() {
    return this._matchUri;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // relay_acs_uri - computed: false, optional: true, required: false
  private _relayAcsUri?: string; 
  public get relayAcsUri() {
    return this.getStringAttribute('relay_acs_uri');
  }
  public set relayAcsUri(value: string) {
    this._relayAcsUri = value;
  }
  public resetRelayAcsUri() {
    this._relayAcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAcsUriInput() {
    return this._relayAcsUri;
  }

  // retry_number - computed: false, optional: true, required: false
  private _retryNumber?: number; 
  public get retryNumber() {
    return this.getNumberAttribute('retry_number');
  }
  public set retryNumber(value: number) {
    this._retryNumber = value;
  }
  public resetRetryNumber() {
    this._retryNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryNumberInput() {
    return this._retryNumber;
  }

  // server_cookie_name - computed: false, optional: true, required: false
  private _serverCookieName?: string; 
  public get serverCookieName() {
    return this.getStringAttribute('server_cookie_name');
  }
  public set serverCookieName(value: string) {
    this._serverCookieName = value;
  }
  public resetServerCookieName() {
    this._serverCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCookieNameInput() {
    return this._serverCookieName;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationRelaySamlSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationRelaySamlSamplingEnable[] | cdktf.IResolvable) {
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
      idp_auth_uri: cdktf.stringToTerraform(this._idpAuthUri),
      match_type: cdktf.stringToTerraform(this._matchType),
      match_uri: cdktf.stringToTerraform(this._matchUri),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      relay_acs_uri: cdktf.stringToTerraform(this._relayAcsUri),
      retry_number: cdktf.numberToTerraform(this._retryNumber),
      server_cookie_name: cdktf.stringToTerraform(this._serverCookieName),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      value: cdktf.stringToTerraform(this._value),
      sampling_enable: cdktf.listMapper(aamAuthenticationRelaySamlSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      idp_auth_uri: {
        value: cdktf.stringToHclTerraform(this._idpAuthUri),
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
      match_uri: {
        value: cdktf.stringToHclTerraform(this._matchUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      relay_acs_uri: {
        value: cdktf.stringToHclTerraform(this._relayAcsUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_number: {
        value: cdktf.numberToHclTerraform(this._retryNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_cookie_name: {
        value: cdktf.stringToHclTerraform(this._serverCookieName),
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
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationRelaySamlSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationRelaySamlSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
