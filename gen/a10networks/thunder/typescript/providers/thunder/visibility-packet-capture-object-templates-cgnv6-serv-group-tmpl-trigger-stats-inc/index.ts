// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc#name VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Service selection fail drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc#server_selection_fail_drop VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA#server_selection_fail_drop}
  */
  readonly serverSelectionFailDrop?: number;
  /**
  * Enable automatic packet-capture for Service selection fail reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc#server_selection_fail_reset VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA#server_selection_fail_reset}
  */
  readonly serverSelectionFailReset?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesCgnv6ServGroupTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_cgnv6_serv_group_tmpl_trigger_stats_inc',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._serverSelectionFailDrop = config.serverSelectionFailDrop;
    this._serverSelectionFailReset = config.serverSelectionFailReset;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // server_selection_fail_drop - computed: false, optional: true, required: false
  private _serverSelectionFailDrop?: number; 
  public get serverSelectionFailDrop() {
    return this.getNumberAttribute('server_selection_fail_drop');
  }
  public set serverSelectionFailDrop(value: number) {
    this._serverSelectionFailDrop = value;
  }
  public resetServerSelectionFailDrop() {
    this._serverSelectionFailDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionFailDropInput() {
    return this._serverSelectionFailDrop;
  }

  // server_selection_fail_reset - computed: false, optional: true, required: false
  private _serverSelectionFailReset?: number; 
  public get serverSelectionFailReset() {
    return this.getNumberAttribute('server_selection_fail_reset');
  }
  public set serverSelectionFailReset(value: number) {
    this._serverSelectionFailReset = value;
  }
  public resetServerSelectionFailReset() {
    this._serverSelectionFailReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionFailResetInput() {
    return this._serverSelectionFailReset;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      server_selection_fail_drop: cdktf.numberToTerraform(this._serverSelectionFailDrop),
      server_selection_fail_reset: cdktf.numberToTerraform(this._serverSelectionFailReset),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      server_selection_fail_drop: {
        value: cdktf.numberToHclTerraform(this._serverSelectionFailDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_selection_fail_reset: {
        value: cdktf.numberToHclTerraform(this._serverSelectionFailReset),
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
