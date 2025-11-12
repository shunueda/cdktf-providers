// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosTemplateTcpProgressionTrackingTimeWindowTrackingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#id DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#name DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#name}
  */
  readonly name: string;
  /**
  * 'enable-check': Enable Progression Tracking per Time Window;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#progression_tracking_win_enabled DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#progression_tracking_win_enabled}
  */
  readonly progressionTrackingWinEnabled: string;
  /**
  * 'drop': Drop packets for progression tracking violation exceed (Default); 'blacklist-src': Blacklist-src for progression tracking violation exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#progression_tracking_windows_action DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#progression_tracking_windows_action}
  */
  readonly progressionTrackingWindowsAction?: string;
  /**
  * Configure action-list to take when progression tracking violation exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#progression_tracking_windows_action_list_name DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#progression_tracking_windows_action_list_name}
  */
  readonly progressionTrackingWindowsActionListName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#uuid DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Set the maximum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#window_rcvd_max DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#window_rcvd_max}
  */
  readonly windowRcvdMax?: number;
  /**
  * Set the minimum total received byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#window_rcvd_min DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#window_rcvd_min}
  */
  readonly windowRcvdMin?: number;
  /**
  * Set the maximum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#window_rcvd_sent_ratio_max DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#window_rcvd_sent_ratio_max}
  */
  readonly windowRcvdSentRatioMax?: number;
  /**
  * Set the minimum received to sent ratio (in unit of 0.1% [1:1000])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#window_rcvd_sent_ratio_min DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#window_rcvd_sent_ratio_min}
  */
  readonly windowRcvdSentRatioMin?: number;
  /**
  * Set the maximum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#window_sent_max DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#window_sent_max}
  */
  readonly windowSentMax?: number;
  /**
  * Set the minimum total sent byte
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#window_sent_min DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#window_sent_min}
  */
  readonly windowSentMin?: number;
  /**
  * Set the violation threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#window_violation DdosTemplateTcpProgressionTrackingTimeWindowTrackingA#window_violation}
  */
  readonly windowViolation?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking thunder_ddos_template_tcp_progression_tracking_time_window_tracking}
*/
export class DdosTemplateTcpProgressionTrackingTimeWindowTrackingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_template_tcp_progression_tracking_time_window_tracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosTemplateTcpProgressionTrackingTimeWindowTrackingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosTemplateTcpProgressionTrackingTimeWindowTrackingA to import
  * @param importFromId The id of the existing DdosTemplateTcpProgressionTrackingTimeWindowTrackingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosTemplateTcpProgressionTrackingTimeWindowTrackingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_template_tcp_progression_tracking_time_window_tracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_template_tcp_progression_tracking_time_window_tracking thunder_ddos_template_tcp_progression_tracking_time_window_tracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosTemplateTcpProgressionTrackingTimeWindowTrackingAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosTemplateTcpProgressionTrackingTimeWindowTrackingAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_template_tcp_progression_tracking_time_window_tracking',
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
    this._id = config.id;
    this._name = config.name;
    this._progressionTrackingWinEnabled = config.progressionTrackingWinEnabled;
    this._progressionTrackingWindowsAction = config.progressionTrackingWindowsAction;
    this._progressionTrackingWindowsActionListName = config.progressionTrackingWindowsActionListName;
    this._uuid = config.uuid;
    this._windowRcvdMax = config.windowRcvdMax;
    this._windowRcvdMin = config.windowRcvdMin;
    this._windowRcvdSentRatioMax = config.windowRcvdSentRatioMax;
    this._windowRcvdSentRatioMin = config.windowRcvdSentRatioMin;
    this._windowSentMax = config.windowSentMax;
    this._windowSentMin = config.windowSentMin;
    this._windowViolation = config.windowViolation;
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

  // progression_tracking_win_enabled - computed: false, optional: false, required: true
  private _progressionTrackingWinEnabled?: string; 
  public get progressionTrackingWinEnabled() {
    return this.getStringAttribute('progression_tracking_win_enabled');
  }
  public set progressionTrackingWinEnabled(value: string) {
    this._progressionTrackingWinEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingWinEnabledInput() {
    return this._progressionTrackingWinEnabled;
  }

  // progression_tracking_windows_action - computed: false, optional: true, required: false
  private _progressionTrackingWindowsAction?: string; 
  public get progressionTrackingWindowsAction() {
    return this.getStringAttribute('progression_tracking_windows_action');
  }
  public set progressionTrackingWindowsAction(value: string) {
    this._progressionTrackingWindowsAction = value;
  }
  public resetProgressionTrackingWindowsAction() {
    this._progressionTrackingWindowsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingWindowsActionInput() {
    return this._progressionTrackingWindowsAction;
  }

  // progression_tracking_windows_action_list_name - computed: false, optional: true, required: false
  private _progressionTrackingWindowsActionListName?: string; 
  public get progressionTrackingWindowsActionListName() {
    return this.getStringAttribute('progression_tracking_windows_action_list_name');
  }
  public set progressionTrackingWindowsActionListName(value: string) {
    this._progressionTrackingWindowsActionListName = value;
  }
  public resetProgressionTrackingWindowsActionListName() {
    this._progressionTrackingWindowsActionListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressionTrackingWindowsActionListNameInput() {
    return this._progressionTrackingWindowsActionListName;
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

  // window_rcvd_max - computed: false, optional: true, required: false
  private _windowRcvdMax?: number; 
  public get windowRcvdMax() {
    return this.getNumberAttribute('window_rcvd_max');
  }
  public set windowRcvdMax(value: number) {
    this._windowRcvdMax = value;
  }
  public resetWindowRcvdMax() {
    this._windowRcvdMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdMaxInput() {
    return this._windowRcvdMax;
  }

  // window_rcvd_min - computed: false, optional: true, required: false
  private _windowRcvdMin?: number; 
  public get windowRcvdMin() {
    return this.getNumberAttribute('window_rcvd_min');
  }
  public set windowRcvdMin(value: number) {
    this._windowRcvdMin = value;
  }
  public resetWindowRcvdMin() {
    this._windowRcvdMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdMinInput() {
    return this._windowRcvdMin;
  }

  // window_rcvd_sent_ratio_max - computed: false, optional: true, required: false
  private _windowRcvdSentRatioMax?: number; 
  public get windowRcvdSentRatioMax() {
    return this.getNumberAttribute('window_rcvd_sent_ratio_max');
  }
  public set windowRcvdSentRatioMax(value: number) {
    this._windowRcvdSentRatioMax = value;
  }
  public resetWindowRcvdSentRatioMax() {
    this._windowRcvdSentRatioMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdSentRatioMaxInput() {
    return this._windowRcvdSentRatioMax;
  }

  // window_rcvd_sent_ratio_min - computed: false, optional: true, required: false
  private _windowRcvdSentRatioMin?: number; 
  public get windowRcvdSentRatioMin() {
    return this.getNumberAttribute('window_rcvd_sent_ratio_min');
  }
  public set windowRcvdSentRatioMin(value: number) {
    this._windowRcvdSentRatioMin = value;
  }
  public resetWindowRcvdSentRatioMin() {
    this._windowRcvdSentRatioMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowRcvdSentRatioMinInput() {
    return this._windowRcvdSentRatioMin;
  }

  // window_sent_max - computed: false, optional: true, required: false
  private _windowSentMax?: number; 
  public get windowSentMax() {
    return this.getNumberAttribute('window_sent_max');
  }
  public set windowSentMax(value: number) {
    this._windowSentMax = value;
  }
  public resetWindowSentMax() {
    this._windowSentMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSentMaxInput() {
    return this._windowSentMax;
  }

  // window_sent_min - computed: false, optional: true, required: false
  private _windowSentMin?: number; 
  public get windowSentMin() {
    return this.getNumberAttribute('window_sent_min');
  }
  public set windowSentMin(value: number) {
    this._windowSentMin = value;
  }
  public resetWindowSentMin() {
    this._windowSentMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSentMinInput() {
    return this._windowSentMin;
  }

  // window_violation - computed: false, optional: true, required: false
  private _windowViolation?: number; 
  public get windowViolation() {
    return this.getNumberAttribute('window_violation');
  }
  public set windowViolation(value: number) {
    this._windowViolation = value;
  }
  public resetWindowViolation() {
    this._windowViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowViolationInput() {
    return this._windowViolation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      progression_tracking_win_enabled: cdktf.stringToTerraform(this._progressionTrackingWinEnabled),
      progression_tracking_windows_action: cdktf.stringToTerraform(this._progressionTrackingWindowsAction),
      progression_tracking_windows_action_list_name: cdktf.stringToTerraform(this._progressionTrackingWindowsActionListName),
      uuid: cdktf.stringToTerraform(this._uuid),
      window_rcvd_max: cdktf.numberToTerraform(this._windowRcvdMax),
      window_rcvd_min: cdktf.numberToTerraform(this._windowRcvdMin),
      window_rcvd_sent_ratio_max: cdktf.numberToTerraform(this._windowRcvdSentRatioMax),
      window_rcvd_sent_ratio_min: cdktf.numberToTerraform(this._windowRcvdSentRatioMin),
      window_sent_max: cdktf.numberToTerraform(this._windowSentMax),
      window_sent_min: cdktf.numberToTerraform(this._windowSentMin),
      window_violation: cdktf.numberToTerraform(this._windowViolation),
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
      progression_tracking_win_enabled: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingWinEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking_windows_action: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingWindowsAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progression_tracking_windows_action_list_name: {
        value: cdktf.stringToHclTerraform(this._progressionTrackingWindowsActionListName),
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
      window_rcvd_max: {
        value: cdktf.numberToHclTerraform(this._windowRcvdMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      window_rcvd_min: {
        value: cdktf.numberToHclTerraform(this._windowRcvdMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      window_rcvd_sent_ratio_max: {
        value: cdktf.numberToHclTerraform(this._windowRcvdSentRatioMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      window_rcvd_sent_ratio_min: {
        value: cdktf.numberToHclTerraform(this._windowRcvdSentRatioMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      window_sent_max: {
        value: cdktf.numberToHclTerraform(this._windowSentMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      window_sent_min: {
        value: cdktf.numberToHclTerraform(this._windowSentMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      window_violation: {
        value: cdktf.numberToHclTerraform(this._windowViolation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
