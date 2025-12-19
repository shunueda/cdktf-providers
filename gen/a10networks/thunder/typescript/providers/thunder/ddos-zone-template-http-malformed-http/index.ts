// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosZoneTemplateHttpMalformedHttpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * HttpTmplName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#http_tmpl_name DdosZoneTemplateHttpMalformedHttpA#http_tmpl_name}
  */
  readonly httpTmplName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#id DdosZoneTemplateHttpMalformedHttpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'check': Configure malformed HTTP parameters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#malformed_http DdosZoneTemplateHttpMalformedHttpA#malformed_http}
  */
  readonly malformedHttp: string;
  /**
  * 'drop': Drop packets (Default); 'reset': Reset client connection; 'blacklist-src': Blacklist-src;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#malformed_http_action DdosZoneTemplateHttpMalformedHttpA#malformed_http_action}
  */
  readonly malformedHttpAction?: string;
  /**
  * Configure action-list to take
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#malformed_http_action_list_name DdosZoneTemplateHttpMalformedHttpA#malformed_http_action_list_name}
  */
  readonly malformedHttpActionListName?: string;
  /**
  * Enabling bad chunk monitoring. Default is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#malformed_http_bad_chunk_mon_enabled DdosZoneTemplateHttpMalformedHttpA#malformed_http_bad_chunk_mon_enabled}
  */
  readonly malformedHttpBadChunkMonEnabled?: number;
  /**
  * Set the maxinum content-length header. Default value is 4294967295 bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#malformed_http_max_content_length DdosZoneTemplateHttpMalformedHttpA#malformed_http_max_content_length}
  */
  readonly malformedHttpMaxContentLength?: number;
  /**
  * Set the maxinum header name length. Default value is 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#malformed_http_max_header_name_size DdosZoneTemplateHttpMalformedHttpA#malformed_http_max_header_name_size}
  */
  readonly malformedHttpMaxHeaderNameSize?: number;
  /**
  * Set the maximum line size. Default value is 32512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#malformed_http_max_line_size DdosZoneTemplateHttpMalformedHttpA#malformed_http_max_line_size}
  */
  readonly malformedHttpMaxLineSize?: number;
  /**
  * Set the maximum number of headers. Default value is 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#malformed_http_max_num_headers DdosZoneTemplateHttpMalformedHttpA#malformed_http_max_num_headers}
  */
  readonly malformedHttpMaxNumHeaders?: number;
  /**
  * Set the maximum request line size. Default value is 32512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#malformed_http_max_req_line_size DdosZoneTemplateHttpMalformedHttpA#malformed_http_max_req_line_size}
  */
  readonly malformedHttpMaxReqLineSize?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#uuid DdosZoneTemplateHttpMalformedHttpA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http thunder_ddos_zone_template_http_malformed_http}
*/
export class DdosZoneTemplateHttpMalformedHttpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_zone_template_http_malformed_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosZoneTemplateHttpMalformedHttpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosZoneTemplateHttpMalformedHttpA to import
  * @param importFromId The id of the existing DdosZoneTemplateHttpMalformedHttpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosZoneTemplateHttpMalformedHttpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_zone_template_http_malformed_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_zone_template_http_malformed_http thunder_ddos_zone_template_http_malformed_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosZoneTemplateHttpMalformedHttpAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosZoneTemplateHttpMalformedHttpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_zone_template_http_malformed_http',
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
    this._httpTmplName = config.httpTmplName;
    this._id = config.id;
    this._malformedHttp = config.malformedHttp;
    this._malformedHttpAction = config.malformedHttpAction;
    this._malformedHttpActionListName = config.malformedHttpActionListName;
    this._malformedHttpBadChunkMonEnabled = config.malformedHttpBadChunkMonEnabled;
    this._malformedHttpMaxContentLength = config.malformedHttpMaxContentLength;
    this._malformedHttpMaxHeaderNameSize = config.malformedHttpMaxHeaderNameSize;
    this._malformedHttpMaxLineSize = config.malformedHttpMaxLineSize;
    this._malformedHttpMaxNumHeaders = config.malformedHttpMaxNumHeaders;
    this._malformedHttpMaxReqLineSize = config.malformedHttpMaxReqLineSize;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_tmpl_name - computed: false, optional: false, required: true
  private _httpTmplName?: string; 
  public get httpTmplName() {
    return this.getStringAttribute('http_tmpl_name');
  }
  public set httpTmplName(value: string) {
    this._httpTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTmplNameInput() {
    return this._httpTmplName;
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

  // malformed_http - computed: false, optional: false, required: true
  private _malformedHttp?: string; 
  public get malformedHttp() {
    return this.getStringAttribute('malformed_http');
  }
  public set malformedHttp(value: string) {
    this._malformedHttp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpInput() {
    return this._malformedHttp;
  }

  // malformed_http_action - computed: false, optional: true, required: false
  private _malformedHttpAction?: string; 
  public get malformedHttpAction() {
    return this.getStringAttribute('malformed_http_action');
  }
  public set malformedHttpAction(value: string) {
    this._malformedHttpAction = value;
  }
  public resetMalformedHttpAction() {
    this._malformedHttpAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpActionInput() {
    return this._malformedHttpAction;
  }

  // malformed_http_action_list_name - computed: false, optional: true, required: false
  private _malformedHttpActionListName?: string; 
  public get malformedHttpActionListName() {
    return this.getStringAttribute('malformed_http_action_list_name');
  }
  public set malformedHttpActionListName(value: string) {
    this._malformedHttpActionListName = value;
  }
  public resetMalformedHttpActionListName() {
    this._malformedHttpActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpActionListNameInput() {
    return this._malformedHttpActionListName;
  }

  // malformed_http_bad_chunk_mon_enabled - computed: false, optional: true, required: false
  private _malformedHttpBadChunkMonEnabled?: number; 
  public get malformedHttpBadChunkMonEnabled() {
    return this.getNumberAttribute('malformed_http_bad_chunk_mon_enabled');
  }
  public set malformedHttpBadChunkMonEnabled(value: number) {
    this._malformedHttpBadChunkMonEnabled = value;
  }
  public resetMalformedHttpBadChunkMonEnabled() {
    this._malformedHttpBadChunkMonEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpBadChunkMonEnabledInput() {
    return this._malformedHttpBadChunkMonEnabled;
  }

  // malformed_http_max_content_length - computed: false, optional: true, required: false
  private _malformedHttpMaxContentLength?: number; 
  public get malformedHttpMaxContentLength() {
    return this.getNumberAttribute('malformed_http_max_content_length');
  }
  public set malformedHttpMaxContentLength(value: number) {
    this._malformedHttpMaxContentLength = value;
  }
  public resetMalformedHttpMaxContentLength() {
    this._malformedHttpMaxContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxContentLengthInput() {
    return this._malformedHttpMaxContentLength;
  }

  // malformed_http_max_header_name_size - computed: false, optional: true, required: false
  private _malformedHttpMaxHeaderNameSize?: number; 
  public get malformedHttpMaxHeaderNameSize() {
    return this.getNumberAttribute('malformed_http_max_header_name_size');
  }
  public set malformedHttpMaxHeaderNameSize(value: number) {
    this._malformedHttpMaxHeaderNameSize = value;
  }
  public resetMalformedHttpMaxHeaderNameSize() {
    this._malformedHttpMaxHeaderNameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxHeaderNameSizeInput() {
    return this._malformedHttpMaxHeaderNameSize;
  }

  // malformed_http_max_line_size - computed: false, optional: true, required: false
  private _malformedHttpMaxLineSize?: number; 
  public get malformedHttpMaxLineSize() {
    return this.getNumberAttribute('malformed_http_max_line_size');
  }
  public set malformedHttpMaxLineSize(value: number) {
    this._malformedHttpMaxLineSize = value;
  }
  public resetMalformedHttpMaxLineSize() {
    this._malformedHttpMaxLineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxLineSizeInput() {
    return this._malformedHttpMaxLineSize;
  }

  // malformed_http_max_num_headers - computed: false, optional: true, required: false
  private _malformedHttpMaxNumHeaders?: number; 
  public get malformedHttpMaxNumHeaders() {
    return this.getNumberAttribute('malformed_http_max_num_headers');
  }
  public set malformedHttpMaxNumHeaders(value: number) {
    this._malformedHttpMaxNumHeaders = value;
  }
  public resetMalformedHttpMaxNumHeaders() {
    this._malformedHttpMaxNumHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxNumHeadersInput() {
    return this._malformedHttpMaxNumHeaders;
  }

  // malformed_http_max_req_line_size - computed: false, optional: true, required: false
  private _malformedHttpMaxReqLineSize?: number; 
  public get malformedHttpMaxReqLineSize() {
    return this.getNumberAttribute('malformed_http_max_req_line_size');
  }
  public set malformedHttpMaxReqLineSize(value: number) {
    this._malformedHttpMaxReqLineSize = value;
  }
  public resetMalformedHttpMaxReqLineSize() {
    this._malformedHttpMaxReqLineSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMaxReqLineSizeInput() {
    return this._malformedHttpMaxReqLineSize;
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
      http_tmpl_name: cdktf.stringToTerraform(this._httpTmplName),
      id: cdktf.stringToTerraform(this._id),
      malformed_http: cdktf.stringToTerraform(this._malformedHttp),
      malformed_http_action: cdktf.stringToTerraform(this._malformedHttpAction),
      malformed_http_action_list_name: cdktf.stringToTerraform(this._malformedHttpActionListName),
      malformed_http_bad_chunk_mon_enabled: cdktf.numberToTerraform(this._malformedHttpBadChunkMonEnabled),
      malformed_http_max_content_length: cdktf.numberToTerraform(this._malformedHttpMaxContentLength),
      malformed_http_max_header_name_size: cdktf.numberToTerraform(this._malformedHttpMaxHeaderNameSize),
      malformed_http_max_line_size: cdktf.numberToTerraform(this._malformedHttpMaxLineSize),
      malformed_http_max_num_headers: cdktf.numberToTerraform(this._malformedHttpMaxNumHeaders),
      malformed_http_max_req_line_size: cdktf.numberToTerraform(this._malformedHttpMaxReqLineSize),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._httpTmplName),
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
      malformed_http: {
        value: cdktf.stringToHclTerraform(this._malformedHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_http_action: {
        value: cdktf.stringToHclTerraform(this._malformedHttpAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_http_action_list_name: {
        value: cdktf.stringToHclTerraform(this._malformedHttpActionListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformed_http_bad_chunk_mon_enabled: {
        value: cdktf.numberToHclTerraform(this._malformedHttpBadChunkMonEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_http_max_content_length: {
        value: cdktf.numberToHclTerraform(this._malformedHttpMaxContentLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_http_max_header_name_size: {
        value: cdktf.numberToHclTerraform(this._malformedHttpMaxHeaderNameSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_http_max_line_size: {
        value: cdktf.numberToHclTerraform(this._malformedHttpMaxLineSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_http_max_num_headers: {
        value: cdktf.numberToHclTerraform(this._malformedHttpMaxNumHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      malformed_http_max_req_line_size: {
        value: cdktf.numberToHclTerraform(this._malformedHttpMaxReqLineSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
