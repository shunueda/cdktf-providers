// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_akamai_bot_category_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotmanAkamaiBotCategoryActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_akamai_bot_category_action#akamai_bot_category_action BotmanAkamaiBotCategoryAction#akamai_bot_category_action}
  */
  readonly akamaiBotCategoryAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_akamai_bot_category_action#category_id BotmanAkamaiBotCategoryAction#category_id}
  */
  readonly categoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_akamai_bot_category_action#config_id BotmanAkamaiBotCategoryAction#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_akamai_bot_category_action#id BotmanAkamaiBotCategoryAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_akamai_bot_category_action#security_policy_id BotmanAkamaiBotCategoryAction#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_akamai_bot_category_action akamai_botman_akamai_bot_category_action}
*/
export class BotmanAkamaiBotCategoryAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_botman_akamai_bot_category_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotmanAkamaiBotCategoryAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotmanAkamaiBotCategoryAction to import
  * @param importFromId The id of the existing BotmanAkamaiBotCategoryAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_akamai_bot_category_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotmanAkamaiBotCategoryAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_botman_akamai_bot_category_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_akamai_bot_category_action akamai_botman_akamai_bot_category_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotmanAkamaiBotCategoryActionConfig
  */
  public constructor(scope: Construct, id: string, config: BotmanAkamaiBotCategoryActionConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_botman_akamai_bot_category_action',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._akamaiBotCategoryAction = config.akamaiBotCategoryAction;
    this._categoryId = config.categoryId;
    this._configId = config.configId;
    this._id = config.id;
    this._securityPolicyId = config.securityPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // akamai_bot_category_action - computed: false, optional: false, required: true
  private _akamaiBotCategoryAction?: string; 
  public get akamaiBotCategoryAction() {
    return this.getStringAttribute('akamai_bot_category_action');
  }
  public set akamaiBotCategoryAction(value: string) {
    this._akamaiBotCategoryAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get akamaiBotCategoryActionInput() {
    return this._akamaiBotCategoryAction;
  }

  // category_id - computed: false, optional: false, required: true
  private _categoryId?: string; 
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }
  public set categoryId(value: string) {
    this._categoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdInput() {
    return this._categoryId;
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // security_policy_id - computed: false, optional: false, required: true
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      akamai_bot_category_action: cdktf.stringToTerraform(this._akamaiBotCategoryAction),
      category_id: cdktf.stringToTerraform(this._categoryId),
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      akamai_bot_category_action: {
        value: cdktf.stringToHclTerraform(this._akamaiBotCategoryAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category_id: {
        value: cdktf.stringToHclTerraform(this._categoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
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
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
