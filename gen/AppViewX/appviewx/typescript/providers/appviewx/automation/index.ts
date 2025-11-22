// https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation#action_id Automation#action_id}
  */
  readonly actionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation#certificate_download_path Automation#certificate_download_path}
  */
  readonly certificateDownloadPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation#headers Automation#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation#id Automation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation#master_payload Automation#master_payload}
  */
  readonly masterPayload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation#payload Automation#payload}
  */
  readonly payload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation#query_params Automation#query_params}
  */
  readonly queryParams?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation appviewx_automation}
*/
export class Automation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appviewx_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Automation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Automation to import
  * @param importFromId The id of the existing Automation that should be imported. Refer to the {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Automation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appviewx_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.9/docs/resources/automation appviewx_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'appviewx_automation',
      terraformGeneratorMetadata: {
        providerName: 'appviewx',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionId = config.actionId;
    this._certificateDownloadPath = config.certificateDownloadPath;
    this._headers = config.headers;
    this._id = config.id;
    this._masterPayload = config.masterPayload;
    this._payload = config.payload;
    this._queryParams = config.queryParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // certificate_download_path - computed: false, optional: true, required: false
  private _certificateDownloadPath?: string; 
  public get certificateDownloadPath() {
    return this.getStringAttribute('certificate_download_path');
  }
  public set certificateDownloadPath(value: string) {
    this._certificateDownloadPath = value;
  }
  public resetCertificateDownloadPath() {
    this._certificateDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadPathInput() {
    return this._certificateDownloadPath;
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

  // master_payload - computed: false, optional: true, required: false
  private _masterPayload?: string; 
  public get masterPayload() {
    return this.getStringAttribute('master_payload');
  }
  public set masterPayload(value: string) {
    this._masterPayload = value;
  }
  public resetMasterPayload() {
    this._masterPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterPayloadInput() {
    return this._masterPayload;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: { [key: string]: string }; 
  public get queryParams() {
    return this.getStringMapAttribute('query_params');
  }
  public set queryParams(value: { [key: string]: string }) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_id: cdktf.stringToTerraform(this._actionId),
      certificate_download_path: cdktf.stringToTerraform(this._certificateDownloadPath),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      id: cdktf.stringToTerraform(this._id),
      master_payload: cdktf.stringToTerraform(this._masterPayload),
      payload: cdktf.stringToTerraform(this._payload),
      query_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._queryParams),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_id: {
        value: cdktf.stringToHclTerraform(this._actionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_download_path: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadPath),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_payload: {
        value: cdktf.stringToHclTerraform(this._masterPayload),
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
      query_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._queryParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
