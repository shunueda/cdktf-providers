// https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_stack_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeStackWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_stack_webhook#id EdgeStackWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * UUID of the webhook to trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_stack_webhook#webhook_id EdgeStackWebhook#webhook_id}
  */
  readonly webhookId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_stack_webhook portainer_edge_stack_webhook}
*/
export class EdgeStackWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_edge_stack_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeStackWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeStackWebhook to import
  * @param importFromId The id of the existing EdgeStackWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_stack_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeStackWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_edge_stack_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/edge_stack_webhook portainer_edge_stack_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeStackWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeStackWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_edge_stack_webhook',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.20.1',
        providerVersionConstraint: '1.20.1'
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
    this._webhookId = config.webhookId;
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

  // webhook_id - computed: false, optional: false, required: true
  private _webhookId?: string; 
  public get webhookId() {
    return this.getStringAttribute('webhook_id');
  }
  public set webhookId(value: string) {
    this._webhookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookIdInput() {
    return this._webhookId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      webhook_id: cdktf.stringToTerraform(this._webhookId),
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
      webhook_id: {
        value: cdktf.stringToHclTerraform(this._webhookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
