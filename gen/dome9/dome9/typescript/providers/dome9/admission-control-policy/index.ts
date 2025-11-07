// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdmissionControlPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy#action AdmissionControlPolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy#id AdmissionControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy#notification_ids AdmissionControlPolicy#notification_ids}
  */
  readonly notificationIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy#ruleset_id AdmissionControlPolicy#ruleset_id}
  */
  readonly rulesetId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy#target_id AdmissionControlPolicy#target_id}
  */
  readonly targetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy#target_type AdmissionControlPolicy#target_type}
  */
  readonly targetType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy dome9_admission_control_policy}
*/
export class AdmissionControlPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_admission_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdmissionControlPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdmissionControlPolicy to import
  * @param importFromId The id of the existing AdmissionControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdmissionControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_admission_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/admission_control_policy dome9_admission_control_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdmissionControlPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AdmissionControlPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_admission_control_policy',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._notificationIds = config.notificationIds;
    this._rulesetId = config.rulesetId;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // notification_ids - computed: false, optional: false, required: true
  private _notificationIds?: string[]; 
  public get notificationIds() {
    return this.getListAttribute('notification_ids');
  }
  public set notificationIds(value: string[]) {
    this._notificationIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationIdsInput() {
    return this._notificationIds;
  }

  // ruleset_id - computed: false, optional: false, required: true
  private _rulesetId?: number; 
  public get rulesetId() {
    return this.getNumberAttribute('ruleset_id');
  }
  public set rulesetId(value: number) {
    this._rulesetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetIdInput() {
    return this._rulesetId;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      notification_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationIds),
      ruleset_id: cdktf.numberToTerraform(this._rulesetId),
      target_id: cdktf.stringToTerraform(this._targetId),
      target_type: cdktf.stringToTerraform(this._targetType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      notification_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ruleset_id: {
        value: cdktf.numberToHclTerraform(this._rulesetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
