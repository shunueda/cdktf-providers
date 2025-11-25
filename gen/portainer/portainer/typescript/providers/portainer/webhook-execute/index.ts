// https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/webhook_execute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebhookExecuteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge Stack ID for triggering edge stack GitOps update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/webhook_execute#edge_stack_id WebhookExecute#edge_stack_id}
  */
  readonly edgeStackId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/webhook_execute#id WebhookExecute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Stack ID for triggering stack GitOps update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/webhook_execute#stack_id WebhookExecute#stack_id}
  */
  readonly stackId?: string;
  /**
  * Webhook token for service restart webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/webhook_execute#token WebhookExecute#token}
  */
  readonly token?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/webhook_execute portainer_webhook_execute}
*/
export class WebhookExecute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_webhook_execute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebhookExecute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebhookExecute to import
  * @param importFromId The id of the existing WebhookExecute that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/webhook_execute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebhookExecute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_webhook_execute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.18.0/docs/resources/webhook_execute portainer_webhook_execute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookExecuteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebhookExecuteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'portainer_webhook_execute',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeStackId = config.edgeStackId;
    this._id = config.id;
    this._stackId = config.stackId;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_stack_id - computed: false, optional: true, required: false
  private _edgeStackId?: string; 
  public get edgeStackId() {
    return this.getStringAttribute('edge_stack_id');
  }
  public set edgeStackId(value: string) {
    this._edgeStackId = value;
  }
  public resetEdgeStackId() {
    this._edgeStackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeStackIdInput() {
    return this._edgeStackId;
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

  // stack_id - computed: false, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_stack_id: cdktf.stringToTerraform(this._edgeStackId),
      id: cdktf.stringToTerraform(this._id),
      stack_id: cdktf.stringToTerraform(this._stackId),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_stack_id: {
        value: cdktf.stringToHclTerraform(this._edgeStackId),
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
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
