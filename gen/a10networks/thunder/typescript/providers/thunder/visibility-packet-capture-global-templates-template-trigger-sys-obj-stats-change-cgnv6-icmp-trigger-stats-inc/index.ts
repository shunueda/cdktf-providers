// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for ICMP to ICMP Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc#icmp_to_icmp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA#icmp_to_icmp_err}
  */
  readonly icmpToIcmpErr?: number;
  /**
  * Enable automatic packet-capture for ICMP to ICMPv6 Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc#icmp_to_icmpv6_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA#icmp_to_icmpv6_err}
  */
  readonly icmpToIcmpv6Err?: number;
  /**
  * Enable automatic packet-capture for ICMPv6 to ICMP Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc#icmpv6_to_icmp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA#icmpv6_to_icmp_err}
  */
  readonly icmpv6ToIcmpErr?: number;
  /**
  * Enable automatic packet-capture for ICMPv6 to ICMPv6 Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc#icmpv6_to_icmpv6_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA#icmpv6_to_icmpv6_err}
  */
  readonly icmpv6ToIcmpv6Err?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp_trigger_stats_inc',
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
    this._icmpToIcmpErr = config.icmpToIcmpErr;
    this._icmpToIcmpv6Err = config.icmpToIcmpv6Err;
    this._icmpv6ToIcmpErr = config.icmpv6ToIcmpErr;
    this._icmpv6ToIcmpv6Err = config.icmpv6ToIcmpv6Err;
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icmp_to_icmp_err - computed: false, optional: true, required: false
  private _icmpToIcmpErr?: number; 
  public get icmpToIcmpErr() {
    return this.getNumberAttribute('icmp_to_icmp_err');
  }
  public set icmpToIcmpErr(value: number) {
    this._icmpToIcmpErr = value;
  }
  public resetIcmpToIcmpErr() {
    this._icmpToIcmpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpErrInput() {
    return this._icmpToIcmpErr;
  }

  // icmp_to_icmpv6_err - computed: false, optional: true, required: false
  private _icmpToIcmpv6Err?: number; 
  public get icmpToIcmpv6Err() {
    return this.getNumberAttribute('icmp_to_icmpv6_err');
  }
  public set icmpToIcmpv6Err(value: number) {
    this._icmpToIcmpv6Err = value;
  }
  public resetIcmpToIcmpv6Err() {
    this._icmpToIcmpv6Err = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpv6ErrInput() {
    return this._icmpToIcmpv6Err;
  }

  // icmpv6_to_icmp_err - computed: false, optional: true, required: false
  private _icmpv6ToIcmpErr?: number; 
  public get icmpv6ToIcmpErr() {
    return this.getNumberAttribute('icmpv6_to_icmp_err');
  }
  public set icmpv6ToIcmpErr(value: number) {
    this._icmpv6ToIcmpErr = value;
  }
  public resetIcmpv6ToIcmpErr() {
    this._icmpv6ToIcmpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpErrInput() {
    return this._icmpv6ToIcmpErr;
  }

  // icmpv6_to_icmpv6_err - computed: false, optional: true, required: false
  private _icmpv6ToIcmpv6Err?: number; 
  public get icmpv6ToIcmpv6Err() {
    return this.getNumberAttribute('icmpv6_to_icmpv6_err');
  }
  public set icmpv6ToIcmpv6Err(value: number) {
    this._icmpv6ToIcmpv6Err = value;
  }
  public resetIcmpv6ToIcmpv6Err() {
    this._icmpv6ToIcmpv6Err = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpv6ErrInput() {
    return this._icmpv6ToIcmpv6Err;
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
      icmp_to_icmp_err: cdktf.numberToTerraform(this._icmpToIcmpErr),
      icmp_to_icmpv6_err: cdktf.numberToTerraform(this._icmpToIcmpv6Err),
      icmpv6_to_icmp_err: cdktf.numberToTerraform(this._icmpv6ToIcmpErr),
      icmpv6_to_icmpv6_err: cdktf.numberToTerraform(this._icmpv6ToIcmpv6Err),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmp_to_icmp_err: {
        value: cdktf.numberToHclTerraform(this._icmpToIcmpErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_to_icmpv6_err: {
        value: cdktf.numberToHclTerraform(this._icmpToIcmpv6Err),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv6_to_icmp_err: {
        value: cdktf.numberToHclTerraform(this._icmpv6ToIcmpErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmpv6_to_icmpv6_err: {
        value: cdktf.numberToHclTerraform(this._icmpv6ToIcmpv6Err),
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
