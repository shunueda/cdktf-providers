// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Method to use for delete operation. If not specified, DELETE is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#delete_method RestApi#delete_method}
  */
  readonly deleteMethod?: string;
  /**
  * Query parameters for DELETE API if any; format is key1=value1&key2=value2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#delete_parameters RestApi#delete_parameters}
  */
  readonly deleteParameters?: string;
  /**
  * Payload to send for delete operation. Ignored if the method is `DELETE`.
  * This field supports Text/template. Use `{{.field_name}}` to refer to a field from the `response_message`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#delete_payload RestApi#delete_payload}
  */
  readonly deletePayload?: string;
  /**
  * URL to be used for delete operation. If not specified, the same URL as the create URL is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#delete_url RestApi#delete_url}
  */
  readonly deleteUrl?: string;
  /**
  * Method to use GET/POST/PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#method RestApi#method}
  */
  readonly method: string;
  /**
  * Payload to send for CREATE/UPDATE operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#payload RestApi#payload}
  */
  readonly payload: string;
  /**
  * URL to be used for GET(Read) operation. If not specified Read does not query NDFC
  * This field supports Text/template. Use `{{.field_name}}` to refer to a field from the `response_message`
  * The response from the GET operation is used to overwrite `payload`
  * Note: The GET response must be an exact match of `payload`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#read_url RestApi#read_url}
  */
  readonly readUrl?: string;
  /**
  * Stateful set to true triggers update only when something changes in config. If set to false every plan shows changes 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#stateful RestApi#stateful}
  */
  readonly stateful?: boolean | cdktf.IResolvable;
  /**
  * Method to use for update operation. PUT is used if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#update_method RestApi#update_method}
  */
  readonly updateMethod?: string;
  /**
  * Payload to send for update operation. If not specified, the same payload as the create payload is used. 
  * This field supports Text/template. Use `{{.field_name}}` to refer to a field from the `response_message`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#update_payload RestApi#update_payload}
  */
  readonly updatePayload?: string;
  /**
  * URL to be used for update operation. If not specified, the same URL as the create URL is used. 
  * This field supports Text/template. Use `{{.field_name}}` to refer to a field from the `response_message`
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#update_url RestApi#update_url}
  */
  readonly updateUrl?: string;
  /**
  * URL to be used for operations - mainly CREATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#url RestApi#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api ndfc_rest_api}
*/
export class RestApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_rest_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RestApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestApi to import
  * @param importFromId The id of the existing RestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_rest_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.0/docs/resources/rest_api ndfc_rest_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestApiConfig
  */
  public constructor(scope: Construct, id: string, config: RestApiConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_rest_api',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMethod = config.deleteMethod;
    this._deleteParameters = config.deleteParameters;
    this._deletePayload = config.deletePayload;
    this._deleteUrl = config.deleteUrl;
    this._method = config.method;
    this._payload = config.payload;
    this._readUrl = config.readUrl;
    this._stateful = config.stateful;
    this._updateMethod = config.updateMethod;
    this._updatePayload = config.updatePayload;
    this._updateUrl = config.updateUrl;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_method - computed: false, optional: true, required: false
  private _deleteMethod?: string; 
  public get deleteMethod() {
    return this.getStringAttribute('delete_method');
  }
  public set deleteMethod(value: string) {
    this._deleteMethod = value;
  }
  public resetDeleteMethod() {
    this._deleteMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteMethodInput() {
    return this._deleteMethod;
  }

  // delete_parameters - computed: false, optional: true, required: false
  private _deleteParameters?: string; 
  public get deleteParameters() {
    return this.getStringAttribute('delete_parameters');
  }
  public set deleteParameters(value: string) {
    this._deleteParameters = value;
  }
  public resetDeleteParameters() {
    this._deleteParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteParametersInput() {
    return this._deleteParameters;
  }

  // delete_payload - computed: false, optional: true, required: false
  private _deletePayload?: string; 
  public get deletePayload() {
    return this.getStringAttribute('delete_payload');
  }
  public set deletePayload(value: string) {
    this._deletePayload = value;
  }
  public resetDeletePayload() {
    this._deletePayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePayloadInput() {
    return this._deletePayload;
  }

  // delete_url - computed: false, optional: true, required: false
  private _deleteUrl?: string; 
  public get deleteUrl() {
    return this.getStringAttribute('delete_url');
  }
  public set deleteUrl(value: string) {
    this._deleteUrl = value;
  }
  public resetDeleteUrl() {
    this._deleteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteUrlInput() {
    return this._deleteUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // payload - computed: false, optional: false, required: true
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // read_url - computed: false, optional: true, required: false
  private _readUrl?: string; 
  public get readUrl() {
    return this.getStringAttribute('read_url');
  }
  public set readUrl(value: string) {
    this._readUrl = value;
  }
  public resetReadUrl() {
    this._readUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readUrlInput() {
    return this._readUrl;
  }

  // response_message - computed: true, optional: false, required: false
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }

  // stateful - computed: true, optional: true, required: false
  private _stateful?: boolean | cdktf.IResolvable; 
  public get stateful() {
    return this.getBooleanAttribute('stateful');
  }
  public set stateful(value: boolean | cdktf.IResolvable) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // update_method - computed: false, optional: true, required: false
  private _updateMethod?: string; 
  public get updateMethod() {
    return this.getStringAttribute('update_method');
  }
  public set updateMethod(value: string) {
    this._updateMethod = value;
  }
  public resetUpdateMethod() {
    this._updateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMethodInput() {
    return this._updateMethod;
  }

  // update_payload - computed: false, optional: true, required: false
  private _updatePayload?: string; 
  public get updatePayload() {
    return this.getStringAttribute('update_payload');
  }
  public set updatePayload(value: string) {
    this._updatePayload = value;
  }
  public resetUpdatePayload() {
    this._updatePayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatePayloadInput() {
    return this._updatePayload;
  }

  // update_url - computed: false, optional: true, required: false
  private _updateUrl?: string; 
  public get updateUrl() {
    return this.getStringAttribute('update_url');
  }
  public set updateUrl(value: string) {
    this._updateUrl = value;
  }
  public resetUpdateUrl() {
    this._updateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUrlInput() {
    return this._updateUrl;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_method: cdktf.stringToTerraform(this._deleteMethod),
      delete_parameters: cdktf.stringToTerraform(this._deleteParameters),
      delete_payload: cdktf.stringToTerraform(this._deletePayload),
      delete_url: cdktf.stringToTerraform(this._deleteUrl),
      method: cdktf.stringToTerraform(this._method),
      payload: cdktf.stringToTerraform(this._payload),
      read_url: cdktf.stringToTerraform(this._readUrl),
      stateful: cdktf.booleanToTerraform(this._stateful),
      update_method: cdktf.stringToTerraform(this._updateMethod),
      update_payload: cdktf.stringToTerraform(this._updatePayload),
      update_url: cdktf.stringToTerraform(this._updateUrl),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_method: {
        value: cdktf.stringToHclTerraform(this._deleteMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_parameters: {
        value: cdktf.stringToHclTerraform(this._deleteParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_payload: {
        value: cdktf.stringToHclTerraform(this._deletePayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_url: {
        value: cdktf.stringToHclTerraform(this._deleteUrl),
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
      payload: {
        value: cdktf.stringToHclTerraform(this._payload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_url: {
        value: cdktf.stringToHclTerraform(this._readUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stateful: {
        value: cdktf.booleanToHclTerraform(this._stateful),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_method: {
        value: cdktf.stringToHclTerraform(this._updateMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_payload: {
        value: cdktf.stringToHclTerraform(this._updatePayload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_url: {
        value: cdktf.stringToHclTerraform(this._updateUrl),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
