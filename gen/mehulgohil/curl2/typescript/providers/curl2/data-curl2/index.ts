// https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCurl2Config extends cdktf.TerraformMetaArguments {
  /**
  * Authentication Type, Bearer or Basic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2#auth_type DataCurl2#auth_type}
  */
  readonly authType?: string;
  /**
  * Password to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2#basic_auth_password DataCurl2#basic_auth_password}
  */
  readonly basicAuthPassword?: string;
  /**
  * Username to be used for Basic Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2#basic_auth_username DataCurl2#basic_auth_username}
  */
  readonly basicAuthUsername?: string;
  /**
  * Bearer Token to be used for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2#bearer_token DataCurl2#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Headers to be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2#headers DataCurl2#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * HTTP method like GET, POST, PUT, DELETE, PATCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2#http_method DataCurl2#http_method}
  */
  readonly httpMethod: string;
  /**
  * JSON object in string format if using POST, PUT or PATCH method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2#json DataCurl2#json}
  */
  readonly json?: string;
  /**
  * URI of resource you'd like to retrieve via HTTP(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2#uri DataCurl2#uri}
  */
  readonly uri: string;
}
export interface DataCurl2Response {
}

export function dataCurl2ResponseToTerraform(struct?: DataCurl2Response): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCurl2ResponseToHclTerraform(struct?: DataCurl2Response): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCurl2ResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCurl2Response | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCurl2Response | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2 curl2}
*/
export class DataCurl2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "curl2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCurl2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCurl2 to import
  * @param importFromId The id of the existing DataCurl2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCurl2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "curl2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mehulgohil/curl2/1.6.1/docs/data-sources/curl2 curl2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCurl2Config
  */
  public constructor(scope: Construct, id: string, config: DataCurl2Config) {
    super(scope, id, {
      terraformResourceType: 'curl2',
      terraformGeneratorMetadata: {
        providerName: 'curl2',
        providerVersion: '1.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._basicAuthPassword = config.basicAuthPassword;
    this._basicAuthUsername = config.basicAuthUsername;
    this._bearerToken = config.bearerToken;
    this._headers = config.headers;
    this._httpMethod = config.httpMethod;
    this._json = config.json;
    this._uri = config.uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // basic_auth_password - computed: false, optional: true, required: false
  private _basicAuthPassword?: string; 
  public get basicAuthPassword() {
    return this.getStringAttribute('basic_auth_password');
  }
  public set basicAuthPassword(value: string) {
    this._basicAuthPassword = value;
  }
  public resetBasicAuthPassword() {
    this._basicAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordInput() {
    return this._basicAuthPassword;
  }

  // basic_auth_username - computed: false, optional: true, required: false
  private _basicAuthUsername?: string; 
  public get basicAuthUsername() {
    return this.getStringAttribute('basic_auth_username');
  }
  public set basicAuthUsername(value: string) {
    this._basicAuthUsername = value;
  }
  public resetBasicAuthUsername() {
    this._basicAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameInput() {
    return this._basicAuthUsername;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // json - computed: false, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // response - computed: true, optional: false, required: false
  private _response = new DataCurl2ResponseOutputReference(this, "response");
  public get response() {
    return this._response;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      basic_auth_password: cdktf.stringToTerraform(this._basicAuthPassword),
      basic_auth_username: cdktf.stringToTerraform(this._basicAuthUsername),
      bearer_token: cdktf.stringToTerraform(this._bearerToken),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      http_method: cdktf.stringToTerraform(this._httpMethod),
      json: cdktf.stringToTerraform(this._json),
      uri: cdktf.stringToTerraform(this._uri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_password: {
        value: cdktf.stringToHclTerraform(this._basicAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_username: {
        value: cdktf.stringToHclTerraform(this._basicAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bearer_token: {
        value: cdktf.stringToHclTerraform(this._bearerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      http_method: {
        value: cdktf.stringToHclTerraform(this._httpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json: {
        value: cdktf.stringToHclTerraform(this._json),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
