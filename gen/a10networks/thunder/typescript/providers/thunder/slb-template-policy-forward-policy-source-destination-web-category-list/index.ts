// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#action SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList#action}
  */
  readonly action?: string;
  /**
  * Dual-stack action to be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#dual_stack_action SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList#dual_stack_action}
  */
  readonly dualStackAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#id SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#policy_name SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList#policy_name}
  */
  readonly policyName: string;
  /**
  * Priority value of the action(higher the number higher the priority)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#priority SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList#priority}
  */
  readonly priority?: number;
  /**
  * Source_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#source_name SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList#source_name}
  */
  readonly sourceName: string;
  /**
  * 'host': Match hostname; 'url': match URL;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#type SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList#type}
  */
  readonly type?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#uuid SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList#uuid}
  */
  readonly uuid?: string;
  /**
  * Destination Web Category List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#web_category_list SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList#web_category_list}
  */
  readonly webCategoryList: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list thunder_slb_template_policy_forward_policy_source_destination_web_category_list}
*/
export class SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_policy_forward_policy_source_destination_web_category_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList to import
  * @param importFromId The id of the existing SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_policy_forward_policy_source_destination_web_category_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_policy_forward_policy_source_destination_web_category_list thunder_slb_template_policy_forward_policy_source_destination_web_category_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplatePolicyForwardPolicySourceDestinationWebCategoryListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_policy_forward_policy_source_destination_web_category_list',
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
    this._action = config.action;
    this._dualStackAction = config.dualStackAction;
    this._id = config.id;
    this._policyName = config.policyName;
    this._priority = config.priority;
    this._sourceName = config.sourceName;
    this._type = config.type;
    this._uuid = config.uuid;
    this._webCategoryList = config.webCategoryList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // dual_stack_action - computed: false, optional: true, required: false
  private _dualStackAction?: string; 
  public get dualStackAction() {
    return this.getStringAttribute('dual_stack_action');
  }
  public set dualStackAction(value: string) {
    this._dualStackAction = value;
  }
  public resetDualStackAction() {
    this._dualStackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStackActionInput() {
    return this._dualStackAction;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // web_category_list - computed: false, optional: false, required: true
  private _webCategoryList?: string; 
  public get webCategoryList() {
    return this.getStringAttribute('web_category_list');
  }
  public set webCategoryList(value: string) {
    this._webCategoryList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webCategoryListInput() {
    return this._webCategoryList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      dual_stack_action: cdktf.stringToTerraform(this._dualStackAction),
      id: cdktf.stringToTerraform(this._id),
      policy_name: cdktf.stringToTerraform(this._policyName),
      priority: cdktf.numberToTerraform(this._priority),
      source_name: cdktf.stringToTerraform(this._sourceName),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      web_category_list: cdktf.stringToTerraform(this._webCategoryList),
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
      dual_stack_action: {
        value: cdktf.stringToHclTerraform(this._dualStackAction),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      web_category_list: {
        value: cdktf.stringToHclTerraform(this._webCategoryList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
