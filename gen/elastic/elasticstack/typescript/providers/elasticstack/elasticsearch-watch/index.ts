// https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchWatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of actions that will be run if the condition matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#actions ElasticsearchWatch#actions}
  */
  readonly actions?: string;
  /**
  * Defines whether the watch is active or inactive by default. The default value is true, which means the watch is active by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#active ElasticsearchWatch#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * The condition that defines if the actions should be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#condition ElasticsearchWatch#condition}
  */
  readonly condition?: string;
  /**
  * The input that defines the input that loads the data for the watch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#input ElasticsearchWatch#input}
  */
  readonly input?: string;
  /**
  * Metadata json that will be copied into the history entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#metadata ElasticsearchWatch#metadata}
  */
  readonly metadata?: string;
  /**
  * Minimum time in milliseconds between actions being run. Defaults to 5000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#throttle_period_in_millis ElasticsearchWatch#throttle_period_in_millis}
  */
  readonly throttlePeriodInMillis?: number;
  /**
  * Processes the watch payload to prepare it for the watch actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#transform ElasticsearchWatch#transform}
  */
  readonly transform?: string;
  /**
  * The trigger that defines when the watch should run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#trigger ElasticsearchWatch#trigger}
  */
  readonly trigger: string;
  /**
  * Identifier for the watch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#watch_id ElasticsearchWatch#watch_id}
  */
  readonly watchId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch elasticstack_elasticsearch_watch}
*/
export class ElasticsearchWatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_elasticsearch_watch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchWatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchWatch to import
  * @param importFromId The id of the existing ElasticsearchWatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchWatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_elasticsearch_watch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.1/docs/resources/elasticsearch_watch elasticstack_elasticsearch_watch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchWatchConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchWatchConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_elasticsearch_watch',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.1'
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
    this._active = config.active;
    this._condition = config.condition;
    this._input = config.input;
    this._metadata = config.metadata;
    this._throttlePeriodInMillis = config.throttlePeriodInMillis;
    this._transform = config.transform;
    this._trigger = config.trigger;
    this._watchId = config.watchId;
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // throttle_period_in_millis - computed: false, optional: true, required: false
  private _throttlePeriodInMillis?: number; 
  public get throttlePeriodInMillis() {
    return this.getNumberAttribute('throttle_period_in_millis');
  }
  public set throttlePeriodInMillis(value: number) {
    this._throttlePeriodInMillis = value;
  }
  public resetThrottlePeriodInMillis() {
    this._throttlePeriodInMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlePeriodInMillisInput() {
    return this._throttlePeriodInMillis;
  }

  // transform - computed: false, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // watch_id - computed: false, optional: false, required: true
  private _watchId?: string; 
  public get watchId() {
    return this.getStringAttribute('watch_id');
  }
  public set watchId(value: string) {
    this._watchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get watchIdInput() {
    return this._watchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.stringToTerraform(this._actions),
      active: cdktf.booleanToTerraform(this._active),
      condition: cdktf.stringToTerraform(this._condition),
      input: cdktf.stringToTerraform(this._input),
      metadata: cdktf.stringToTerraform(this._metadata),
      throttle_period_in_millis: cdktf.numberToTerraform(this._throttlePeriodInMillis),
      transform: cdktf.stringToTerraform(this._transform),
      trigger: cdktf.stringToTerraform(this._trigger),
      watch_id: cdktf.stringToTerraform(this._watchId),
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
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      condition: {
        value: cdktf.stringToHclTerraform(this._condition),
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
      throttle_period_in_millis: {
        value: cdktf.numberToHclTerraform(this._throttlePeriodInMillis),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transform: {
        value: cdktf.stringToHclTerraform(this._transform),
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
      watch_id: {
        value: cdktf.stringToHclTerraform(this._watchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
