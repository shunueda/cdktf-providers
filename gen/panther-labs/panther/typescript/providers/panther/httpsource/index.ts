// https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpsourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication bearer token value of the http source. Used for Bearer auth method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#auth_bearer_token Httpsource#auth_bearer_token}
  */
  readonly authBearerToken?: string;
  /**
  * The authentication header key of the http source. Used for HMAC and SharedSecret auth methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#auth_header_key Httpsource#auth_header_key}
  */
  readonly authHeaderKey?: string;
  /**
  * The authentication algorithm of the http source. Used for HMAC auth method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#auth_hmac_alg Httpsource#auth_hmac_alg}
  */
  readonly authHmacAlg?: string;
  /**
  * The authentication method of the http source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#auth_method Httpsource#auth_method}
  */
  readonly authMethod: string;
  /**
  * The authentication header password of the http source. Used for Basic auth method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#auth_password Httpsource#auth_password}
  */
  readonly authPassword?: string;
  /**
  * The authentication header secret value of the http source. Used for HMAC and SharedSecret auth methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#auth_secret_value Httpsource#auth_secret_value}
  */
  readonly authSecretValue?: string;
  /**
  * The authentication header username of the http source. Used for Basic auth method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#auth_username Httpsource#auth_username}
  */
  readonly authUsername?: string;
  /**
  * ID of the http source to fetch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#id Httpsource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The integration label (name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#integration_label Httpsource#integration_label}
  */
  readonly integrationLabel: string;
  /**
  * The log stream type. Supported log stream types: Auto, JSON, JsonArray, Lines, CloudWatchLogs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#log_stream_type Httpsource#log_stream_type}
  */
  readonly logStreamType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#log_stream_type_options Httpsource#log_stream_type_options}
  */
  readonly logStreamTypeOptions?: HttpsourceLogStreamTypeOptions;
  /**
  * The log types of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#log_types Httpsource#log_types}
  */
  readonly logTypes: string[];
}
export interface HttpsourceLogStreamTypeOptions {
  /**
  * Path to the array value to extract elements from, only applicable if logStreamType is JsonArray. Leave empty if the input JSON is an array itself
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#json_array_envelope_field Httpsource#json_array_envelope_field}
  */
  readonly jsonArrayEnvelopeField?: string;
}

export function httpsourceLogStreamTypeOptionsToTerraform(struct?: HttpsourceLogStreamTypeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_array_envelope_field: cdktf.stringToTerraform(struct!.jsonArrayEnvelopeField),
  }
}


export function httpsourceLogStreamTypeOptionsToHclTerraform(struct?: HttpsourceLogStreamTypeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_array_envelope_field: {
      value: cdktf.stringToHclTerraform(struct!.jsonArrayEnvelopeField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpsourceLogStreamTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HttpsourceLogStreamTypeOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonArrayEnvelopeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonArrayEnvelopeField = this._jsonArrayEnvelopeField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpsourceLogStreamTypeOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonArrayEnvelopeField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonArrayEnvelopeField = value.jsonArrayEnvelopeField;
    }
  }

  // json_array_envelope_field - computed: true, optional: true, required: false
  private _jsonArrayEnvelopeField?: string; 
  public get jsonArrayEnvelopeField() {
    return this.getStringAttribute('json_array_envelope_field');
  }
  public set jsonArrayEnvelopeField(value: string) {
    this._jsonArrayEnvelopeField = value;
  }
  public resetJsonArrayEnvelopeField() {
    this._jsonArrayEnvelopeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonArrayEnvelopeFieldInput() {
    return this._jsonArrayEnvelopeField;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource panther_httpsource}
*/
export class Httpsource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panther_httpsource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Httpsource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Httpsource to import
  * @param importFromId The id of the existing Httpsource that should be imported. Refer to the {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Httpsource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panther_httpsource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/panther-labs/panther/0.2.7/docs/resources/httpsource panther_httpsource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpsourceConfig
  */
  public constructor(scope: Construct, id: string, config: HttpsourceConfig) {
    super(scope, id, {
      terraformResourceType: 'panther_httpsource',
      terraformGeneratorMetadata: {
        providerName: 'panther',
        providerVersion: '0.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authBearerToken = config.authBearerToken;
    this._authHeaderKey = config.authHeaderKey;
    this._authHmacAlg = config.authHmacAlg;
    this._authMethod = config.authMethod;
    this._authPassword = config.authPassword;
    this._authSecretValue = config.authSecretValue;
    this._authUsername = config.authUsername;
    this._id = config.id;
    this._integrationLabel = config.integrationLabel;
    this._logStreamType = config.logStreamType;
    this._logStreamTypeOptions.internalValue = config.logStreamTypeOptions;
    this._logTypes = config.logTypes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_bearer_token - computed: true, optional: true, required: false
  private _authBearerToken?: string; 
  public get authBearerToken() {
    return this.getStringAttribute('auth_bearer_token');
  }
  public set authBearerToken(value: string) {
    this._authBearerToken = value;
  }
  public resetAuthBearerToken() {
    this._authBearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authBearerTokenInput() {
    return this._authBearerToken;
  }

  // auth_header_key - computed: true, optional: true, required: false
  private _authHeaderKey?: string; 
  public get authHeaderKey() {
    return this.getStringAttribute('auth_header_key');
  }
  public set authHeaderKey(value: string) {
    this._authHeaderKey = value;
  }
  public resetAuthHeaderKey() {
    this._authHeaderKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHeaderKeyInput() {
    return this._authHeaderKey;
  }

  // auth_hmac_alg - computed: true, optional: true, required: false
  private _authHmacAlg?: string; 
  public get authHmacAlg() {
    return this.getStringAttribute('auth_hmac_alg');
  }
  public set authHmacAlg(value: string) {
    this._authHmacAlg = value;
  }
  public resetAuthHmacAlg() {
    this._authHmacAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authHmacAlgInput() {
    return this._authHmacAlg;
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // auth_password - computed: true, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_secret_value - computed: true, optional: true, required: false
  private _authSecretValue?: string; 
  public get authSecretValue() {
    return this.getStringAttribute('auth_secret_value');
  }
  public set authSecretValue(value: string) {
    this._authSecretValue = value;
  }
  public resetAuthSecretValue() {
    this._authSecretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSecretValueInput() {
    return this._authSecretValue;
  }

  // auth_username - computed: true, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
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

  // integration_label - computed: false, optional: false, required: true
  private _integrationLabel?: string; 
  public get integrationLabel() {
    return this.getStringAttribute('integration_label');
  }
  public set integrationLabel(value: string) {
    this._integrationLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationLabelInput() {
    return this._integrationLabel;
  }

  // log_stream_type - computed: false, optional: false, required: true
  private _logStreamType?: string; 
  public get logStreamType() {
    return this.getStringAttribute('log_stream_type');
  }
  public set logStreamType(value: string) {
    this._logStreamType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamTypeInput() {
    return this._logStreamType;
  }

  // log_stream_type_options - computed: true, optional: true, required: false
  private _logStreamTypeOptions = new HttpsourceLogStreamTypeOptionsOutputReference(this, "log_stream_type_options");
  public get logStreamTypeOptions() {
    return this._logStreamTypeOptions;
  }
  public putLogStreamTypeOptions(value: HttpsourceLogStreamTypeOptions) {
    this._logStreamTypeOptions.internalValue = value;
  }
  public resetLogStreamTypeOptions() {
    this._logStreamTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamTypeOptionsInput() {
    return this._logStreamTypeOptions.internalValue;
  }

  // log_types - computed: false, optional: false, required: true
  private _logTypes?: string[]; 
  public get logTypes() {
    return this.getListAttribute('log_types');
  }
  public set logTypes(value: string[]) {
    this._logTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypesInput() {
    return this._logTypes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_bearer_token: cdktf.stringToTerraform(this._authBearerToken),
      auth_header_key: cdktf.stringToTerraform(this._authHeaderKey),
      auth_hmac_alg: cdktf.stringToTerraform(this._authHmacAlg),
      auth_method: cdktf.stringToTerraform(this._authMethod),
      auth_password: cdktf.stringToTerraform(this._authPassword),
      auth_secret_value: cdktf.stringToTerraform(this._authSecretValue),
      auth_username: cdktf.stringToTerraform(this._authUsername),
      id: cdktf.stringToTerraform(this._id),
      integration_label: cdktf.stringToTerraform(this._integrationLabel),
      log_stream_type: cdktf.stringToTerraform(this._logStreamType),
      log_stream_type_options: httpsourceLogStreamTypeOptionsToTerraform(this._logStreamTypeOptions.internalValue),
      log_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logTypes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_bearer_token: {
        value: cdktf.stringToHclTerraform(this._authBearerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_header_key: {
        value: cdktf.stringToHclTerraform(this._authHeaderKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_hmac_alg: {
        value: cdktf.stringToHclTerraform(this._authHmacAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_password: {
        value: cdktf.stringToHclTerraform(this._authPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_secret_value: {
        value: cdktf.stringToHclTerraform(this._authSecretValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_username: {
        value: cdktf.stringToHclTerraform(this._authUsername),
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
      integration_label: {
        value: cdktf.stringToHclTerraform(this._integrationLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_type: {
        value: cdktf.stringToHclTerraform(this._logStreamType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_type_options: {
        value: httpsourceLogStreamTypeOptionsToHclTerraform(this._logStreamTypeOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HttpsourceLogStreamTypeOptions",
      },
      log_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
