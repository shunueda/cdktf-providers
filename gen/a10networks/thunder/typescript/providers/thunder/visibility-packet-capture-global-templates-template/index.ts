// generated from terraform resource schema

import { VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChange, 
visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeToTerraform, 
visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeToHclTerraform, 
VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeOutputReference, 
VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverity, 
visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverityToTerraform, 
visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverityToHclTerraform, 
VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverityOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VisibilityPacketCaptureGlobalTemplatesTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template#capture_config VisibilityPacketCaptureGlobalTemplatesTemplate#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template#id VisibilityPacketCaptureGlobalTemplatesTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template#name VisibilityPacketCaptureGlobalTemplatesTemplate#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template#user_tag VisibilityPacketCaptureGlobalTemplatesTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template#uuid VisibilityPacketCaptureGlobalTemplatesTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_sys_obj_stats_change block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template#trigger_sys_obj_stats_change VisibilityPacketCaptureGlobalTemplatesTemplate#trigger_sys_obj_stats_change}
  */
  readonly triggerSysObjStatsChange?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChange;
  /**
  * trigger_sys_obj_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template#trigger_sys_obj_stats_severity VisibilityPacketCaptureGlobalTemplatesTemplate#trigger_sys_obj_stats_severity}
  */
  readonly triggerSysObjStatsSeverity?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverity;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template thunder_visibility_packet_capture_global_templates_template}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplate to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template thunder_visibility_packet_capture_global_templates_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template',
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
    this._captureConfig = config.captureConfig;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._triggerSysObjStatsChange.internalValue = config.triggerSysObjStatsChange;
    this._triggerSysObjStatsSeverity.internalValue = config.triggerSysObjStatsSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // trigger_sys_obj_stats_change - computed: false, optional: true, required: false
  private _triggerSysObjStatsChange = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeOutputReference(this, "trigger_sys_obj_stats_change");
  public get triggerSysObjStatsChange() {
    return this._triggerSysObjStatsChange;
  }
  public putTriggerSysObjStatsChange(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChange) {
    this._triggerSysObjStatsChange.internalValue = value;
  }
  public resetTriggerSysObjStatsChange() {
    this._triggerSysObjStatsChange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSysObjStatsChangeInput() {
    return this._triggerSysObjStatsChange.internalValue;
  }

  // trigger_sys_obj_stats_severity - computed: false, optional: true, required: false
  private _triggerSysObjStatsSeverity = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverityOutputReference(this, "trigger_sys_obj_stats_severity");
  public get triggerSysObjStatsSeverity() {
    return this._triggerSysObjStatsSeverity;
  }
  public putTriggerSysObjStatsSeverity(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverity) {
    this._triggerSysObjStatsSeverity.internalValue = value;
  }
  public resetTriggerSysObjStatsSeverity() {
    this._triggerSysObjStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSysObjStatsSeverityInput() {
    return this._triggerSysObjStatsSeverity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_config: cdktf.stringToTerraform(this._captureConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_sys_obj_stats_change: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeToTerraform(this._triggerSysObjStatsChange.internalValue),
      trigger_sys_obj_stats_severity: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverityToTerraform(this._triggerSysObjStatsSeverity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_config: {
        value: cdktf.stringToHclTerraform(this._captureConfig),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      trigger_sys_obj_stats_change: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeToHclTerraform(this._triggerSysObjStatsChange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeList",
      },
      trigger_sys_obj_stats_severity: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverityToHclTerraform(this._triggerSysObjStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
