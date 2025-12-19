// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationCaptchaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#id AamAuthenticationCaptcha#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#uuid AamAuthenticationCaptcha#uuid}
  */
  readonly uuid?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#instance_list AamAuthenticationCaptcha#instance_list}
  */
  readonly instanceList?: AamAuthenticationCaptchaInstanceListStruct[] | cdktf.IResolvable;
}
export interface AamAuthenticationCaptchaInstanceListStruct {
  /**
  * Specify client ip parameter name used in API (Set parameter name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#client_ip_param_name AamAuthenticationCaptcha#client_ip_param_name}
  */
  readonly clientIpParamName?: string;
  /**
  * 'POST': API uses POST method; 'GET': API uses GET method;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#method AamAuthenticationCaptcha#method}
  */
  readonly method?: string;
  /**
  * Specify captcha profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#name AamAuthenticationCaptcha#name}
  */
  readonly name: string;
  /**
  * Specify error code field name used in JSON response (Set field name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#resp_error_code_field_name AamAuthenticationCaptcha#resp_error_code_field_name}
  */
  readonly respErrorCodeFieldName?: string;
  /**
  * Specify result field name used in JSON response (Set field name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#resp_result_field_name AamAuthenticationCaptcha#resp_result_field_name}
  */
  readonly respResultFieldName?: string;
  /**
  * Specify secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#secret_key AamAuthenticationCaptcha#secret_key}
  */
  readonly secretKey?: number;
  /**
  * Specify secret key parameter name used in API (Set parameter name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#secret_key_param_name AamAuthenticationCaptcha#secret_key_param_name}
  */
  readonly secretKeyParamName?: string;
  /**
  * Secret key string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#secret_key_string AamAuthenticationCaptcha#secret_key_string}
  */
  readonly secretKeyString?: string;
  /**
  * Send client IP address in API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#send_client_ip AamAuthenticationCaptcha#send_client_ip}
  */
  readonly sendClientIp?: number;
  /**
  * Specify timeout for verify API response (Specify timeout value, default is 10 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#timeout AamAuthenticationCaptcha#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify token parameter name used in API (Set parameter name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#token_param_name AamAuthenticationCaptcha#token_param_name}
  */
  readonly tokenParamName?: string;
  /**
  * Specify verify API URL, default scheme is https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#url AamAuthenticationCaptcha#url}
  */
  readonly url?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#uuid AamAuthenticationCaptcha#uuid}
  */
  readonly uuid?: string;
}

export function aamAuthenticationCaptchaInstanceListStructToTerraform(struct?: AamAuthenticationCaptchaInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip_param_name: cdktf.stringToTerraform(struct!.clientIpParamName),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    resp_error_code_field_name: cdktf.stringToTerraform(struct!.respErrorCodeFieldName),
    resp_result_field_name: cdktf.stringToTerraform(struct!.respResultFieldName),
    secret_key: cdktf.numberToTerraform(struct!.secretKey),
    secret_key_param_name: cdktf.stringToTerraform(struct!.secretKeyParamName),
    secret_key_string: cdktf.stringToTerraform(struct!.secretKeyString),
    send_client_ip: cdktf.numberToTerraform(struct!.sendClientIp),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    token_param_name: cdktf.stringToTerraform(struct!.tokenParamName),
    url: cdktf.stringToTerraform(struct!.url),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function aamAuthenticationCaptchaInstanceListStructToHclTerraform(struct?: AamAuthenticationCaptchaInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip_param_name: {
      value: cdktf.stringToHclTerraform(struct!.clientIpParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    resp_error_code_field_name: {
      value: cdktf.stringToHclTerraform(struct!.respErrorCodeFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resp_result_field_name: {
      value: cdktf.stringToHclTerraform(struct!.respResultFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.numberToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_key_param_name: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_string: {
      value: cdktf.stringToHclTerraform(struct!.secretKeyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_client_ip: {
      value: cdktf.numberToHclTerraform(struct!.sendClientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_param_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationCaptchaInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationCaptchaInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpParamName = this._clientIpParamName;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._respErrorCodeFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.respErrorCodeFieldName = this._respErrorCodeFieldName;
    }
    if (this._respResultFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.respResultFieldName = this._respResultFieldName;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._secretKeyParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyParamName = this._secretKeyParamName;
    }
    if (this._secretKeyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyString = this._secretKeyString;
    }
    if (this._sendClientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientIp = this._sendClientIp;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tokenParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenParamName = this._tokenParamName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationCaptchaInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIpParamName = undefined;
      this._method = undefined;
      this._name = undefined;
      this._respErrorCodeFieldName = undefined;
      this._respResultFieldName = undefined;
      this._secretKey = undefined;
      this._secretKeyParamName = undefined;
      this._secretKeyString = undefined;
      this._sendClientIp = undefined;
      this._timeout = undefined;
      this._tokenParamName = undefined;
      this._url = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIpParamName = value.clientIpParamName;
      this._method = value.method;
      this._name = value.name;
      this._respErrorCodeFieldName = value.respErrorCodeFieldName;
      this._respResultFieldName = value.respResultFieldName;
      this._secretKey = value.secretKey;
      this._secretKeyParamName = value.secretKeyParamName;
      this._secretKeyString = value.secretKeyString;
      this._sendClientIp = value.sendClientIp;
      this._timeout = value.timeout;
      this._tokenParamName = value.tokenParamName;
      this._url = value.url;
      this._uuid = value.uuid;
    }
  }

  // client_ip_param_name - computed: false, optional: true, required: false
  private _clientIpParamName?: string; 
  public get clientIpParamName() {
    return this.getStringAttribute('client_ip_param_name');
  }
  public set clientIpParamName(value: string) {
    this._clientIpParamName = value;
  }
  public resetClientIpParamName() {
    this._clientIpParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpParamNameInput() {
    return this._clientIpParamName;
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

  // resp_error_code_field_name - computed: false, optional: true, required: false
  private _respErrorCodeFieldName?: string; 
  public get respErrorCodeFieldName() {
    return this.getStringAttribute('resp_error_code_field_name');
  }
  public set respErrorCodeFieldName(value: string) {
    this._respErrorCodeFieldName = value;
  }
  public resetRespErrorCodeFieldName() {
    this._respErrorCodeFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respErrorCodeFieldNameInput() {
    return this._respErrorCodeFieldName;
  }

  // resp_result_field_name - computed: false, optional: true, required: false
  private _respResultFieldName?: string; 
  public get respResultFieldName() {
    return this.getStringAttribute('resp_result_field_name');
  }
  public set respResultFieldName(value: string) {
    this._respResultFieldName = value;
  }
  public resetRespResultFieldName() {
    this._respResultFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respResultFieldNameInput() {
    return this._respResultFieldName;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: number; 
  public get secretKey() {
    return this.getNumberAttribute('secret_key');
  }
  public set secretKey(value: number) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_key_param_name - computed: false, optional: true, required: false
  private _secretKeyParamName?: string; 
  public get secretKeyParamName() {
    return this.getStringAttribute('secret_key_param_name');
  }
  public set secretKeyParamName(value: string) {
    this._secretKeyParamName = value;
  }
  public resetSecretKeyParamName() {
    this._secretKeyParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyParamNameInput() {
    return this._secretKeyParamName;
  }

  // secret_key_string - computed: false, optional: true, required: false
  private _secretKeyString?: string; 
  public get secretKeyString() {
    return this.getStringAttribute('secret_key_string');
  }
  public set secretKeyString(value: string) {
    this._secretKeyString = value;
  }
  public resetSecretKeyString() {
    this._secretKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyStringInput() {
    return this._secretKeyString;
  }

  // send_client_ip - computed: false, optional: true, required: false
  private _sendClientIp?: number; 
  public get sendClientIp() {
    return this.getNumberAttribute('send_client_ip');
  }
  public set sendClientIp(value: number) {
    this._sendClientIp = value;
  }
  public resetSendClientIp() {
    this._sendClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientIpInput() {
    return this._sendClientIp;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // token_param_name - computed: false, optional: true, required: false
  private _tokenParamName?: string; 
  public get tokenParamName() {
    return this.getStringAttribute('token_param_name');
  }
  public set tokenParamName(value: string) {
    this._tokenParamName = value;
  }
  public resetTokenParamName() {
    this._tokenParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenParamNameInput() {
    return this._tokenParamName;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
}

export class AamAuthenticationCaptchaInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationCaptchaInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationCaptchaInstanceListStructOutputReference {
    return new AamAuthenticationCaptchaInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha thunder_aam_authentication_captcha}
*/
export class AamAuthenticationCaptcha extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_captcha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationCaptcha resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationCaptcha to import
  * @param importFromId The id of the existing AamAuthenticationCaptcha that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationCaptcha to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_captcha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha thunder_aam_authentication_captcha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationCaptchaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationCaptchaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_captcha',
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
    this._uuid = config.uuid;
    this._instanceList.internalValue = config.instanceList;
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

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new AamAuthenticationCaptchaInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: AamAuthenticationCaptchaInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      instance_list: cdktf.listMapper(aamAuthenticationCaptchaInstanceListStructToTerraform, true)(this._instanceList.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_list: {
        value: cdktf.listMapperHcl(aamAuthenticationCaptchaInstanceListStructToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationCaptchaInstanceListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
