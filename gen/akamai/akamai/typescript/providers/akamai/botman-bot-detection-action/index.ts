// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_bot_detection_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotmanBotDetectionActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_bot_detection_action#bot_detection_action BotmanBotDetectionAction#bot_detection_action}
  */
  readonly botDetectionAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_bot_detection_action#config_id BotmanBotDetectionAction#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_bot_detection_action#detection_id BotmanBotDetectionAction#detection_id}
  */
  readonly detectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_bot_detection_action#id BotmanBotDetectionAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_bot_detection_action#security_policy_id BotmanBotDetectionAction#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_bot_detection_action akamai_botman_bot_detection_action}
*/
export class BotmanBotDetectionAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_botman_bot_detection_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotmanBotDetectionAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotmanBotDetectionAction to import
  * @param importFromId The id of the existing BotmanBotDetectionAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_bot_detection_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotmanBotDetectionAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_botman_bot_detection_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_bot_detection_action akamai_botman_bot_detection_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotmanBotDetectionActionConfig
  */
  public constructor(scope: Construct, id: string, config: BotmanBotDetectionActionConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_botman_bot_detection_action',
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
    this._botDetectionAction = config.botDetectionAction;
    this._configId = config.configId;
    this._detectionId = config.detectionId;
    this._id = config.id;
    this._securityPolicyId = config.securityPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bot_detection_action - computed: false, optional: false, required: true
  private _botDetectionAction?: string; 
  public get botDetectionAction() {
    return this.getStringAttribute('bot_detection_action');
  }
  public set botDetectionAction(value: string) {
    this._botDetectionAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botDetectionActionInput() {
    return this._botDetectionAction;
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

  // detection_id - computed: false, optional: false, required: true
  private _detectionId?: string; 
  public get detectionId() {
    return this.getStringAttribute('detection_id');
  }
  public set detectionId(value: string) {
    this._detectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionIdInput() {
    return this._detectionId;
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
      bot_detection_action: cdktf.stringToTerraform(this._botDetectionAction),
      config_id: cdktf.numberToTerraform(this._configId),
      detection_id: cdktf.stringToTerraform(this._detectionId),
      id: cdktf.stringToTerraform(this._id),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bot_detection_action: {
        value: cdktf.stringToHclTerraform(this._botDetectionAction),
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
      detection_id: {
        value: cdktf.stringToHclTerraform(this._detectionId),
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
