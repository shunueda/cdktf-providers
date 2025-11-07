// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FgsFunctionTriggerStatusActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action#enable_force_new FgsFunctionTriggerStatusAction#enable_force_new}
  */
  readonly enableForceNew?: string;
  /**
  * The event data of the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action#event_data FgsFunctionTriggerStatusAction#event_data}
  */
  readonly eventData: string;
  /**
  * The URN of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action#function_urn FgsFunctionTriggerStatusAction#function_urn}
  */
  readonly functionUrn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action#id FgsFunctionTriggerStatusAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region where the function trigger is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action#region FgsFunctionTriggerStatusAction#region}
  */
  readonly region?: string;
  /**
  * The trigger ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action#trigger_id FgsFunctionTriggerStatusAction#trigger_id}
  */
  readonly triggerId: string;
  /**
  * The status of the trigger. Valid values are ACTIVE and DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action#trigger_status FgsFunctionTriggerStatusAction#trigger_status}
  */
  readonly triggerStatus: string;
  /**
  * The trigger type code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action#trigger_type_code FgsFunctionTriggerStatusAction#trigger_type_code}
  */
  readonly triggerTypeCode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action sbercloud_fgs_function_trigger_status_action}
*/
export class FgsFunctionTriggerStatusAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_fgs_function_trigger_status_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FgsFunctionTriggerStatusAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FgsFunctionTriggerStatusAction to import
  * @param importFromId The id of the existing FgsFunctionTriggerStatusAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FgsFunctionTriggerStatusAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_fgs_function_trigger_status_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/fgs_function_trigger_status_action sbercloud_fgs_function_trigger_status_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FgsFunctionTriggerStatusActionConfig
  */
  public constructor(scope: Construct, id: string, config: FgsFunctionTriggerStatusActionConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_fgs_function_trigger_status_action',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableForceNew = config.enableForceNew;
    this._eventData = config.eventData;
    this._functionUrn = config.functionUrn;
    this._id = config.id;
    this._region = config.region;
    this._triggerId = config.triggerId;
    this._triggerStatus = config.triggerStatus;
    this._triggerTypeCode = config.triggerTypeCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_force_new - computed: false, optional: true, required: false
  private _enableForceNew?: string; 
  public get enableForceNew() {
    return this.getStringAttribute('enable_force_new');
  }
  public set enableForceNew(value: string) {
    this._enableForceNew = value;
  }
  public resetEnableForceNew() {
    this._enableForceNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForceNewInput() {
    return this._enableForceNew;
  }

  // event_data - computed: false, optional: false, required: true
  private _eventData?: string; 
  public get eventData() {
    return this.getStringAttribute('event_data');
  }
  public set eventData(value: string) {
    this._eventData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDataInput() {
    return this._eventData;
  }

  // function_urn - computed: false, optional: false, required: true
  private _functionUrn?: string; 
  public get functionUrn() {
    return this.getStringAttribute('function_urn');
  }
  public set functionUrn(value: string) {
    this._functionUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionUrnInput() {
    return this._functionUrn;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // trigger_id - computed: false, optional: false, required: true
  private _triggerId?: string; 
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }
  public set triggerId(value: string) {
    this._triggerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerIdInput() {
    return this._triggerId;
  }

  // trigger_status - computed: false, optional: false, required: true
  private _triggerStatus?: string; 
  public get triggerStatus() {
    return this.getStringAttribute('trigger_status');
  }
  public set triggerStatus(value: string) {
    this._triggerStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatusInput() {
    return this._triggerStatus;
  }

  // trigger_type_code - computed: false, optional: false, required: true
  private _triggerTypeCode?: string; 
  public get triggerTypeCode() {
    return this.getStringAttribute('trigger_type_code');
  }
  public set triggerTypeCode(value: string) {
    this._triggerTypeCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeCodeInput() {
    return this._triggerTypeCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_force_new: cdktf.stringToTerraform(this._enableForceNew),
      event_data: cdktf.stringToTerraform(this._eventData),
      function_urn: cdktf.stringToTerraform(this._functionUrn),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      trigger_id: cdktf.stringToTerraform(this._triggerId),
      trigger_status: cdktf.stringToTerraform(this._triggerStatus),
      trigger_type_code: cdktf.stringToTerraform(this._triggerTypeCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_force_new: {
        value: cdktf.stringToHclTerraform(this._enableForceNew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_data: {
        value: cdktf.stringToHclTerraform(this._eventData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_urn: {
        value: cdktf.stringToHclTerraform(this._functionUrn),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_id: {
        value: cdktf.stringToHclTerraform(this._triggerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_status: {
        value: cdktf.stringToHclTerraform(this._triggerStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_type_code: {
        value: cdktf.stringToHclTerraform(this._triggerTypeCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
