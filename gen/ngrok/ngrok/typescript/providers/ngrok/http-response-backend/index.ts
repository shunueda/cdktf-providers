// https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/http_response_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpResponseBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * body to return as fixed content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/http_response_backend#body HttpResponseBackend#body}
  */
  readonly body?: string;
  /**
  * human-readable description of this backend. Optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/http_response_backend#description HttpResponseBackend#description}
  */
  readonly description?: string;
  /**
  * headers to return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/http_response_backend#headers HttpResponseBackend#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * arbitrary user-defined machine-readable data of this backend. Optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/http_response_backend#metadata HttpResponseBackend#metadata}
  */
  readonly metadata?: string;
  /**
  * status code to return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/http_response_backend#status_code HttpResponseBackend#status_code}
  */
  readonly statusCode?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/http_response_backend ngrok_http_response_backend}
*/
export class HttpResponseBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok_http_response_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpResponseBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpResponseBackend to import
  * @param importFromId The id of the existing HttpResponseBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/http_response_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpResponseBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok_http_response_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/http_response_backend ngrok_http_response_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpResponseBackendConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HttpResponseBackendConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ngrok_http_response_backend',
      terraformGeneratorMetadata: {
        providerName: 'ngrok',
        providerVersion: '0.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._description = config.description;
    this._headers = config.headers;
    this._metadata = config.metadata;
    this._statusCode = config.statusCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      description: cdktf.stringToTerraform(this._description),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      metadata: cdktf.stringToTerraform(this._metadata),
      status_code: cdktf.numberToTerraform(this._statusCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_code: {
        value: cdktf.numberToHclTerraform(this._statusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
