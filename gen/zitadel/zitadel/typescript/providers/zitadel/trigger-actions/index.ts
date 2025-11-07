// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/trigger_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TriggerActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDs of the triggered actions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/trigger_actions#action_ids TriggerActions#action_ids}
  */
  readonly actionIds: string[];
  /**
  * Type of the flow to which the action triggers belong, supported values: FLOW_TYPE_EXTERNAL_AUTHENTICATION, FLOW_TYPE_CUSTOMISE_TOKEN, FLOW_TYPE_INTERNAL_AUTHENTICATION, FLOW_TYPE_SAML_RESPONSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/trigger_actions#flow_type TriggerActions#flow_type}
  */
  readonly flowType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/trigger_actions#id TriggerActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/trigger_actions#org_id TriggerActions#org_id}
  */
  readonly orgId?: string;
  /**
  * Trigger type on when the actions get triggered, supported values: TRIGGER_TYPE_POST_AUTHENTICATION, TRIGGER_TYPE_PRE_CREATION, TRIGGER_TYPE_POST_CREATION, TRIGGER_TYPE_PRE_USERINFO_CREATION, TRIGGER_TYPE_PRE_ACCESS_TOKEN_CREATION, TRIGGER_TYPE_PRE_SAML_RESPONSE_CREATION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/trigger_actions#trigger_type TriggerActions#trigger_type}
  */
  readonly triggerType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/trigger_actions zitadel_trigger_actions}
*/
export class TriggerActions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_trigger_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TriggerActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TriggerActions to import
  * @param importFromId The id of the existing TriggerActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/trigger_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TriggerActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_trigger_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/trigger_actions zitadel_trigger_actions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TriggerActionsConfig
  */
  public constructor(scope: Construct, id: string, config: TriggerActionsConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_trigger_actions',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionIds = config.actionIds;
    this._flowType = config.flowType;
    this._id = config.id;
    this._orgId = config.orgId;
    this._triggerType = config.triggerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_ids - computed: false, optional: false, required: true
  private _actionIds?: string[]; 
  public get actionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('action_ids'));
  }
  public set actionIds(value: string[]) {
    this._actionIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdsInput() {
    return this._actionIds;
  }

  // flow_type - computed: false, optional: false, required: true
  private _flowType?: string; 
  public get flowType() {
    return this.getStringAttribute('flow_type');
  }
  public set flowType(value: string) {
    this._flowType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowTypeInput() {
    return this._flowType;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actionIds),
      flow_type: cdktf.stringToTerraform(this._flowType),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      trigger_type: cdktf.stringToTerraform(this._triggerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actionIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      flow_type: {
        value: cdktf.stringToHclTerraform(this._flowType),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_type: {
        value: cdktf.stringToHclTerraform(this._triggerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
