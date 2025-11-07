// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#drop VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#drop_alert VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#drop_critical VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#drop_warning VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#error VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#error_alert VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#error_critical VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#error_warning VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#id VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#name VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#uuid VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity}
*/
export class VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesInterfaceTunnelTmplTriggerStatsSeverityAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_interface_tunnel_tmpl_trigger_stats_severity',
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
    this._drop = config.drop;
    this._dropAlert = config.dropAlert;
    this._dropCritical = config.dropCritical;
    this._dropWarning = config.dropWarning;
    this._error = config.error;
    this._errorAlert = config.errorAlert;
    this._errorCritical = config.errorCritical;
    this._errorWarning = config.errorWarning;
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
      drop: cdktf.numberToTerraform(this._drop),
      drop_alert: cdktf.numberToTerraform(this._dropAlert),
      drop_critical: cdktf.numberToTerraform(this._dropCritical),
      drop_warning: cdktf.numberToTerraform(this._dropWarning),
      error: cdktf.numberToTerraform(this._error),
      error_alert: cdktf.numberToTerraform(this._errorAlert),
      error_critical: cdktf.numberToTerraform(this._errorCritical),
      error_warning: cdktf.numberToTerraform(this._errorWarning),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      drop: {
        value: cdktf.numberToHclTerraform(this._drop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_alert: {
        value: cdktf.numberToHclTerraform(this._dropAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_critical: {
        value: cdktf.numberToHclTerraform(this._dropCritical),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      drop_warning: {
        value: cdktf.numberToHclTerraform(this._dropWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error: {
        value: cdktf.numberToHclTerraform(this._error),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_alert: {
        value: cdktf.numberToHclTerraform(this._errorAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_critical: {
        value: cdktf.numberToHclTerraform(this._errorCritical),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_warning: {
        value: cdktf.numberToHclTerraform(this._errorWarning),
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
