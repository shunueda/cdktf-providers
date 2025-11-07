// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Too many DDOS entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc#ddos_entries_too_many VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA#ddos_entries_too_many}
  */
  readonly ddosEntriesTooMany?: number;
  /**
  * Enable automatic packet-capture for DDoS Entry BGP add failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc#ddos_entry_add_to_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA#ddos_entry_add_to_bgp_failure}
  */
  readonly ddosEntryAddToBgpFailure?: number;
  /**
  * Enable automatic packet-capture for DDOS entry BGP remove failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc#ddos_entry_remove_from_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA#ddos_entry_remove_from_bgp_failure}
  */
  readonly ddosEntryRemoveFromBgpFailure?: number;
  /**
  * Enable automatic packet-capture for DDOS Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc#ddos_packet_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA#ddos_packet_dropped}
  */
  readonly ddosPacketDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection_trigger_stats_inc',
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
    this._ddosEntriesTooMany = config.ddosEntriesTooMany;
    this._ddosEntryAddToBgpFailure = config.ddosEntryAddToBgpFailure;
    this._ddosEntryRemoveFromBgpFailure = config.ddosEntryRemoveFromBgpFailure;
    this._ddosPacketDropped = config.ddosPacketDropped;
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ddos_entries_too_many - computed: false, optional: true, required: false
  private _ddosEntriesTooMany?: number; 
  public get ddosEntriesTooMany() {
    return this.getNumberAttribute('ddos_entries_too_many');
  }
  public set ddosEntriesTooMany(value: number) {
    this._ddosEntriesTooMany = value;
  }
  public resetDdosEntriesTooMany() {
    this._ddosEntriesTooMany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntriesTooManyInput() {
    return this._ddosEntriesTooMany;
  }

  // ddos_entry_add_to_bgp_failure - computed: false, optional: true, required: false
  private _ddosEntryAddToBgpFailure?: number; 
  public get ddosEntryAddToBgpFailure() {
    return this.getNumberAttribute('ddos_entry_add_to_bgp_failure');
  }
  public set ddosEntryAddToBgpFailure(value: number) {
    this._ddosEntryAddToBgpFailure = value;
  }
  public resetDdosEntryAddToBgpFailure() {
    this._ddosEntryAddToBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryAddToBgpFailureInput() {
    return this._ddosEntryAddToBgpFailure;
  }

  // ddos_entry_remove_from_bgp_failure - computed: false, optional: true, required: false
  private _ddosEntryRemoveFromBgpFailure?: number; 
  public get ddosEntryRemoveFromBgpFailure() {
    return this.getNumberAttribute('ddos_entry_remove_from_bgp_failure');
  }
  public set ddosEntryRemoveFromBgpFailure(value: number) {
    this._ddosEntryRemoveFromBgpFailure = value;
  }
  public resetDdosEntryRemoveFromBgpFailure() {
    this._ddosEntryRemoveFromBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryRemoveFromBgpFailureInput() {
    return this._ddosEntryRemoveFromBgpFailure;
  }

  // ddos_packet_dropped - computed: false, optional: true, required: false
  private _ddosPacketDropped?: number; 
  public get ddosPacketDropped() {
    return this.getNumberAttribute('ddos_packet_dropped');
  }
  public set ddosPacketDropped(value: number) {
    this._ddosPacketDropped = value;
  }
  public resetDdosPacketDropped() {
    this._ddosPacketDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosPacketDroppedInput() {
    return this._ddosPacketDropped;
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
      ddos_entries_too_many: cdktf.numberToTerraform(this._ddosEntriesTooMany),
      ddos_entry_add_to_bgp_failure: cdktf.numberToTerraform(this._ddosEntryAddToBgpFailure),
      ddos_entry_remove_from_bgp_failure: cdktf.numberToTerraform(this._ddosEntryRemoveFromBgpFailure),
      ddos_packet_dropped: cdktf.numberToTerraform(this._ddosPacketDropped),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ddos_entries_too_many: {
        value: cdktf.numberToHclTerraform(this._ddosEntriesTooMany),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddos_entry_add_to_bgp_failure: {
        value: cdktf.numberToHclTerraform(this._ddosEntryAddToBgpFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddos_entry_remove_from_bgp_failure: {
        value: cdktf.numberToHclTerraform(this._ddosEntryRemoveFromBgpFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ddos_packet_dropped: {
        value: cdktf.numberToHclTerraform(this._ddosPacketDropped),
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
