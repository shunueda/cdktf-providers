// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cgnv6_dns64_vs_port_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc#cgnv6_dns64_vs_port_tmpl_name VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncA#cgnv6_dns64_vs_port_tmpl_name}
  */
  readonly cgnv6Dns64VsPortTmplName: string;
  /**
  * Enable automatic packet-capture for Total failure actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc#es_total_failure_actions VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncA#es_total_failure_actions}
  */
  readonly esTotalFailureActions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesCgnv6Dns64VsPortTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_cgnv6_dns64_vs_port_tmpl_trigger_stats_inc',
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
    this._cgnv6Dns64VsPortTmplName = config.cgnv6Dns64VsPortTmplName;
    this._esTotalFailureActions = config.esTotalFailureActions;
    this._id = config.id;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cgnv6_dns64_vs_port_tmpl_name - computed: false, optional: false, required: true
  private _cgnv6Dns64VsPortTmplName?: string; 
  public get cgnv6Dns64VsPortTmplName() {
    return this.getStringAttribute('cgnv6_dns64_vs_port_tmpl_name');
  }
  public set cgnv6Dns64VsPortTmplName(value: string) {
    this._cgnv6Dns64VsPortTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnv6Dns64VsPortTmplNameInput() {
    return this._cgnv6Dns64VsPortTmplName;
  }

  // es_total_failure_actions - computed: false, optional: true, required: false
  private _esTotalFailureActions?: number; 
  public get esTotalFailureActions() {
    return this.getNumberAttribute('es_total_failure_actions');
  }
  public set esTotalFailureActions(value: number) {
    this._esTotalFailureActions = value;
  }
  public resetEsTotalFailureActions() {
    this._esTotalFailureActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esTotalFailureActionsInput() {
    return this._esTotalFailureActions;
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
      cgnv6_dns64_vs_port_tmpl_name: cdktf.stringToTerraform(this._cgnv6Dns64VsPortTmplName),
      es_total_failure_actions: cdktf.numberToTerraform(this._esTotalFailureActions),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cgnv6_dns64_vs_port_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._cgnv6Dns64VsPortTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      es_total_failure_actions: {
        value: cdktf.numberToHclTerraform(this._esTotalFailureActions),
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
