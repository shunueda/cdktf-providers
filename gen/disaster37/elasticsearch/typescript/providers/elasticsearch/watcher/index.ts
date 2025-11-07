// https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WatcherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher#actions Watcher#actions}
  */
  readonly actions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher#condition Watcher#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher#id Watcher#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher#input Watcher#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher#metadata Watcher#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher#name Watcher#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher#throttle_period Watcher#throttle_period}
  */
  readonly throttlePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher#trigger Watcher#trigger}
  */
  readonly trigger?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher elasticsearch_watcher}
*/
export class Watcher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticsearch_watcher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Watcher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Watcher to import
  * @param importFromId The id of the existing Watcher that should be imported. Refer to the {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Watcher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticsearch_watcher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disaster37/elasticsearch/8.4.0/docs/resources/watcher elasticsearch_watcher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WatcherConfig
  */
  public constructor(scope: Construct, id: string, config: WatcherConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticsearch_watcher',
      terraformGeneratorMetadata: {
        providerName: 'elasticsearch',
        providerVersion: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._condition = config.condition;
    this._id = config.id;
    this._input = config.input;
    this._metadata = config.metadata;
    this._name = config.name;
    this._throttlePeriod = config.throttlePeriod;
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: true, required: false
  private _actions?: string; 
  public get actions() {
    return this.getStringAttribute('actions');
  }
  public set actions(value: string) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // throttle_period - computed: false, optional: true, required: false
  private _throttlePeriod?: string; 
  public get throttlePeriod() {
    return this.getStringAttribute('throttle_period');
  }
  public set throttlePeriod(value: string) {
    this._throttlePeriod = value;
  }
  public resetThrottlePeriod() {
    this._throttlePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlePeriodInput() {
    return this._throttlePeriod;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.stringToTerraform(this._actions),
      condition: cdktf.stringToTerraform(this._condition),
      id: cdktf.stringToTerraform(this._id),
      input: cdktf.stringToTerraform(this._input),
      metadata: cdktf.stringToTerraform(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      throttle_period: cdktf.stringToTerraform(this._throttlePeriod),
      trigger: cdktf.stringToTerraform(this._trigger),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.stringToHclTerraform(this._actions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
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
      input: {
        value: cdktf.stringToHclTerraform(this._input),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throttle_period: {
        value: cdktf.stringToHclTerraform(this._throttlePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger: {
        value: cdktf.stringToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
