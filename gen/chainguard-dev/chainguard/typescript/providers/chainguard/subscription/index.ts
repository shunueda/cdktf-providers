// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.40/docs/resources/subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Parent IAM group of subscription. Sets the scope of the events subscribed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.40/docs/resources/subscription#parent_id Subscription#parent_id}
  */
  readonly parentId: string;
  /**
  * Address to which events will be sent using the selected protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.40/docs/resources/subscription#sink Subscription#sink}
  */
  readonly sink: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.40/docs/resources/subscription chainguard_subscription}
*/
export class Subscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subscription to import
  * @param importFromId The id of the existing Subscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.40/docs/resources/subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.40/docs/resources/subscription chainguard_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: SubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_subscription',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.40',
        providerVersionConstraint: '0.1.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._parentId = config.parentId;
    this._sink = config.sink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // sink - computed: false, optional: false, required: true
  private _sink?: string; 
  public get sink() {
    return this.getStringAttribute('sink');
  }
  public set sink(value: string) {
    this._sink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkInput() {
    return this._sink;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent_id: cdktf.stringToTerraform(this._parentId),
      sink: cdktf.stringToTerraform(this._sink),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sink: {
        value: cdktf.stringToHclTerraform(this._sink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
