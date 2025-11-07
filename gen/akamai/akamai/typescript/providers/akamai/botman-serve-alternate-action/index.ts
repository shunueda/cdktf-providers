// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_serve_alternate_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotmanServeAlternateActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_serve_alternate_action#config_id BotmanServeAlternateAction#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_serve_alternate_action#id BotmanServeAlternateAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_serve_alternate_action#serve_alternate_action BotmanServeAlternateAction#serve_alternate_action}
  */
  readonly serveAlternateAction: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_serve_alternate_action akamai_botman_serve_alternate_action}
*/
export class BotmanServeAlternateAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_botman_serve_alternate_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotmanServeAlternateAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotmanServeAlternateAction to import
  * @param importFromId The id of the existing BotmanServeAlternateAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_serve_alternate_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotmanServeAlternateAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_botman_serve_alternate_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/botman_serve_alternate_action akamai_botman_serve_alternate_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotmanServeAlternateActionConfig
  */
  public constructor(scope: Construct, id: string, config: BotmanServeAlternateActionConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_botman_serve_alternate_action',
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
    this._configId = config.configId;
    this._id = config.id;
    this._serveAlternateAction = config.serveAlternateAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
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

  // serve_alternate_action - computed: false, optional: false, required: true
  private _serveAlternateAction?: string; 
  public get serveAlternateAction() {
    return this.getStringAttribute('serve_alternate_action');
  }
  public set serveAlternateAction(value: string) {
    this._serveAlternateAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serveAlternateActionInput() {
    return this._serveAlternateAction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      serve_alternate_action: cdktf.stringToTerraform(this._serveAlternateAction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      serve_alternate_action: {
        value: cdktf.stringToHclTerraform(this._serveAlternateAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
