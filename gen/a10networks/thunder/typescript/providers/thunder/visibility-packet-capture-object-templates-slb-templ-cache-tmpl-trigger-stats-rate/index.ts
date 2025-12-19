// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToobig, help content_toobig
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#content_toobig VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#content_toobig}
  */
  readonly contentToobig?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheContentToosmall, help content_toosmall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#content_toosmall VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#content_toosmall}
  */
  readonly contentToosmall?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheEntryCreateFailures, help entry_create_failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#entry_create_failures VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#entry_create_failures}
  */
  readonly entryCreateFailures?: number;
  /**
  * Enable automatic packet-capture for header_save_error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#header_save_error VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#header_save_error}
  */
  readonly headerSaveError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcReqHeader, help nc_req_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#nc_req_header VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#nc_req_header}
  */
  readonly ncReqHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheNcResHeader, help nc_res_header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#nc_res_header VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#nc_res_header}
  */
  readonly ncResHeader?: number;
  /**
  * Enable automatic packet-capture for slbTemplateCacheRvFailure, help rv_failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#rv_failure VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#rv_failure}
  */
  readonly rvFailure?: number;
  /**
  * Slb_templ_cache_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#slb_templ_cache_tmpl_name VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#slb_templ_cache_tmpl_name}
  */
  readonly slbTemplCacheTmplName: string;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesSlbTemplCacheTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_slb_templ_cache_tmpl_trigger_stats_rate',
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
    this._contentToobig = config.contentToobig;
    this._contentToosmall = config.contentToosmall;
    this._duration = config.duration;
    this._entryCreateFailures = config.entryCreateFailures;
    this._headerSaveError = config.headerSaveError;
    this._id = config.id;
    this._ncReqHeader = config.ncReqHeader;
    this._ncResHeader = config.ncResHeader;
    this._rvFailure = config.rvFailure;
    this._slbTemplCacheTmplName = config.slbTemplCacheTmplName;
    this._thresholdExceededBy = config.thresholdExceededBy;
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

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // slb_templ_cache_tmpl_name - computed: false, optional: false, required: true
  private _slbTemplCacheTmplName?: string; 
  public get slbTemplCacheTmplName() {
    return this.getStringAttribute('slb_templ_cache_tmpl_name');
  }
  public set slbTemplCacheTmplName(value: string) {
    this._slbTemplCacheTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slbTemplCacheTmplNameInput() {
    return this._slbTemplCacheTmplName;
  }

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
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
      duration: cdktf.numberToTerraform(this._duration),
      entry_create_failures: cdktf.numberToTerraform(this._entryCreateFailures),
      header_save_error: cdktf.numberToTerraform(this._headerSaveError),
      id: cdktf.stringToTerraform(this._id),
      nc_req_header: cdktf.numberToTerraform(this._ncReqHeader),
      nc_res_header: cdktf.numberToTerraform(this._ncResHeader),
      rv_failure: cdktf.numberToTerraform(this._rvFailure),
      slb_templ_cache_tmpl_name: cdktf.stringToTerraform(this._slbTemplCacheTmplName),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
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
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      slb_templ_cache_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._slbTemplCacheTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
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
