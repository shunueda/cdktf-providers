// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationCaptchaInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify client ip parameter name used in API (Set parameter name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#client_ip_param_name AamAuthenticationCaptchaInstance#client_ip_param_name}
  */
  readonly clientIpParamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#id AamAuthenticationCaptchaInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'POST': API uses POST method; 'GET': API uses GET method;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#method AamAuthenticationCaptchaInstance#method}
  */
  readonly method?: string;
  /**
  * Specify captcha profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#name AamAuthenticationCaptchaInstance#name}
  */
  readonly name: string;
  /**
  * Specify error code field name used in JSON response (Set field name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#resp_error_code_field_name AamAuthenticationCaptchaInstance#resp_error_code_field_name}
  */
  readonly respErrorCodeFieldName?: string;
  /**
  * Specify result field name used in JSON response (Set field name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#resp_result_field_name AamAuthenticationCaptchaInstance#resp_result_field_name}
  */
  readonly respResultFieldName?: string;
  /**
  * Specify secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#secret_key AamAuthenticationCaptchaInstance#secret_key}
  */
  readonly secretKey?: number;
  /**
  * Specify secret key parameter name used in API (Set parameter name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#secret_key_param_name AamAuthenticationCaptchaInstance#secret_key_param_name}
  */
  readonly secretKeyParamName?: string;
  /**
  * Secret key string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#secret_key_string AamAuthenticationCaptchaInstance#secret_key_string}
  */
  readonly secretKeyString?: string;
  /**
  * Send client IP address in API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#send_client_ip AamAuthenticationCaptchaInstance#send_client_ip}
  */
  readonly sendClientIp?: number;
  /**
  * Specify timeout for verify API response (Specify timeout value, default is 10 seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#timeout AamAuthenticationCaptchaInstance#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify token parameter name used in API (Set parameter name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#token_param_name AamAuthenticationCaptchaInstance#token_param_name}
  */
  readonly tokenParamName?: string;
  /**
  * Specify verify API URL, default scheme is https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#url AamAuthenticationCaptchaInstance#url}
  */
  readonly url?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#uuid AamAuthenticationCaptchaInstance#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance thunder_aam_authentication_captcha_instance}
*/
export class AamAuthenticationCaptchaInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_captcha_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationCaptchaInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationCaptchaInstance to import
  * @param importFromId The id of the existing AamAuthenticationCaptchaInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationCaptchaInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_captcha_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_captcha_instance thunder_aam_authentication_captcha_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationCaptchaInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationCaptchaInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_captcha_instance',
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
    this._clientIpParamName = config.clientIpParamName;
    this._id = config.id;
    this._method = config.method;
    this._name = config.name;
    this._respErrorCodeFieldName = config.respErrorCodeFieldName;
    this._respResultFieldName = config.respResultFieldName;
    this._secretKey = config.secretKey;
    this._secretKeyParamName = config.secretKeyParamName;
    this._secretKeyString = config.secretKeyString;
    this._sendClientIp = config.sendClientIp;
    this._timeout = config.timeout;
    this._tokenParamName = config.tokenParamName;
    this._url = config.url;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_ip_param_name: cdktf.stringToTerraform(this._clientIpParamName),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      resp_error_code_field_name: cdktf.stringToTerraform(this._respErrorCodeFieldName),
      resp_result_field_name: cdktf.stringToTerraform(this._respResultFieldName),
      secret_key: cdktf.numberToTerraform(this._secretKey),
      secret_key_param_name: cdktf.stringToTerraform(this._secretKeyParamName),
      secret_key_string: cdktf.stringToTerraform(this._secretKeyString),
      send_client_ip: cdktf.numberToTerraform(this._sendClientIp),
      timeout: cdktf.numberToTerraform(this._timeout),
      token_param_name: cdktf.stringToTerraform(this._tokenParamName),
      url: cdktf.stringToTerraform(this._url),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_ip_param_name: {
        value: cdktf.stringToHclTerraform(this._clientIpParamName),
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
      resp_error_code_field_name: {
        value: cdktf.stringToHclTerraform(this._respErrorCodeFieldName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resp_result_field_name: {
        value: cdktf.stringToHclTerraform(this._respResultFieldName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.numberToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_key_param_name: {
        value: cdktf.stringToHclTerraform(this._secretKeyParamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key_string: {
        value: cdktf.stringToHclTerraform(this._secretKeyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_client_ip: {
        value: cdktf.numberToHclTerraform(this._sendClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_param_name: {
        value: cdktf.stringToHclTerraform(this._tokenParamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
