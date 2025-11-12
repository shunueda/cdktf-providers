// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToobig, help content_toobig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#content_toobig VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#content_toobig}
  */
  readonly contentToobig?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToosmall, help content_toosmall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#content_toosmall VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#content_toosmall}
  */
  readonly contentToosmall?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheEntryCreateFailures, help entry_create_failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#entry_create_failures VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#entry_create_failures}
  */
  readonly entryCreateFailures?: number;
  /**
  * Enable automatic packet-capture for header_save_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#header_save_error VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#header_save_error}
  */
  readonly headerSaveError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#name VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcReqHeader, help nc_req_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#nc_req_header VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#nc_req_header}
  */
  readonly ncReqHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcResHeader, help nc_res_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#nc_res_header VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#nc_res_header}
  */
  readonly ncResHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheRvFailure, help rv_failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#rv_failure VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#rv_failure}
  */
  readonly rvFailure?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_inc',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentToobig = config.contentToobig;
    this._contentToosmall = config.contentToosmall;
    this._entryCreateFailures = config.entryCreateFailures;
    this._headerSaveError = config.headerSaveError;
    this._id = config.id;
    this._name = config.name;
    this._ncReqHeader = config.ncReqHeader;
    this._ncResHeader = config.ncResHeader;
    this._rvFailure = config.rvFailure;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_toobig - computed: false, optional: true, required: false
  private _contentToobig?: number; 
  public get contentToobig() {
    return this.getNumberAttribute('content_toobig');
  }
  public set contentToobig(value: number) {
    this._contentToobig = value;
  }
  public resetContentToobig() {
    this._contentToobig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToobigInput() {
    return this._contentToobig;
  }

  // content_toosmall - computed: false, optional: true, required: false
  private _contentToosmall?: number; 
  public get contentToosmall() {
    return this.getNumberAttribute('content_toosmall');
  }
  public set contentToosmall(value: number) {
    this._contentToosmall = value;
  }
  public resetContentToosmall() {
    this._contentToosmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentToosmallInput() {
    return this._contentToosmall;
  }

  // entry_create_failures - computed: false, optional: true, required: false
  private _entryCreateFailures?: number; 
  public get entryCreateFailures() {
    return this.getNumberAttribute('entry_create_failures');
  }
  public set entryCreateFailures(value: number) {
    this._entryCreateFailures = value;
  }
  public resetEntryCreateFailures() {
    this._entryCreateFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateFailuresInput() {
    return this._entryCreateFailures;
  }

  // header_save_error - computed: false, optional: true, required: false
  private _headerSaveError?: number; 
  public get headerSaveError() {
    return this.getNumberAttribute('header_save_error');
  }
  public set headerSaveError(value: number) {
    this._headerSaveError = value;
  }
  public resetHeaderSaveError() {
    this._headerSaveError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSaveErrorInput() {
    return this._headerSaveError;
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

  // nc_req_header - computed: false, optional: true, required: false
  private _ncReqHeader?: number; 
  public get ncReqHeader() {
    return this.getNumberAttribute('nc_req_header');
  }
  public set ncReqHeader(value: number) {
    this._ncReqHeader = value;
  }
  public resetNcReqHeader() {
    this._ncReqHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncReqHeaderInput() {
    return this._ncReqHeader;
  }

  // nc_res_header - computed: false, optional: true, required: false
  private _ncResHeader?: number; 
  public get ncResHeader() {
    return this.getNumberAttribute('nc_res_header');
  }
  public set ncResHeader(value: number) {
    this._ncResHeader = value;
  }
  public resetNcResHeader() {
    this._ncResHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ncResHeaderInput() {
    return this._ncResHeader;
  }

  // rv_failure - computed: false, optional: true, required: false
  private _rvFailure?: number; 
  public get rvFailure() {
    return this.getNumberAttribute('rv_failure');
  }
  public set rvFailure(value: number) {
    this._rvFailure = value;
  }
  public resetRvFailure() {
    this._rvFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rvFailureInput() {
    return this._rvFailure;
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
      content_toobig: cdktf.numberToTerraform(this._contentToobig),
      content_toosmall: cdktf.numberToTerraform(this._contentToosmall),
      entry_create_failures: cdktf.numberToTerraform(this._entryCreateFailures),
      header_save_error: cdktf.numberToTerraform(this._headerSaveError),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nc_req_header: cdktf.numberToTerraform(this._ncReqHeader),
      nc_res_header: cdktf.numberToTerraform(this._ncResHeader),
      rv_failure: cdktf.numberToTerraform(this._rvFailure),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_toobig: {
        value: cdktf.numberToHclTerraform(this._contentToobig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content_toosmall: {
        value: cdktf.numberToHclTerraform(this._contentToosmall),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      entry_create_failures: {
        value: cdktf.numberToHclTerraform(this._entryCreateFailures),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_save_error: {
        value: cdktf.numberToHclTerraform(this._headerSaveError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      nc_req_header: {
        value: cdktf.numberToHclTerraform(this._ncReqHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nc_res_header: {
        value: cdktf.numberToHclTerraform(this._ncResHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rv_failure: {
        value: cdktf.numberToHclTerraform(this._rvFailure),
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
