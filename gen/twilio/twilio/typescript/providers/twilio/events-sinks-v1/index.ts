// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_sinks_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventsSinksV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_sinks_v1#description EventsSinksV1#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_sinks_v1#id EventsSinksV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_sinks_v1#sink_configuration EventsSinksV1#sink_configuration}
  */
  readonly sinkConfiguration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_sinks_v1#sink_type EventsSinksV1#sink_type}
  */
  readonly sinkType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_sinks_v1 twilio_events_sinks_v1}
*/
export class EventsSinksV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_events_sinks_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventsSinksV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventsSinksV1 to import
  * @param importFromId The id of the existing EventsSinksV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_sinks_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventsSinksV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_events_sinks_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/events_sinks_v1 twilio_events_sinks_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventsSinksV1Config
  */
  public constructor(scope: Construct, id: string, config: EventsSinksV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_events_sinks_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._sinkConfiguration = config.sinkConfiguration;
    this._sinkType = config.sinkType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // sink_configuration - computed: false, optional: false, required: true
  private _sinkConfiguration?: string; 
  public get sinkConfiguration() {
    return this.getStringAttribute('sink_configuration');
  }
  public set sinkConfiguration(value: string) {
    this._sinkConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkConfigurationInput() {
    return this._sinkConfiguration;
  }

  // sink_type - computed: false, optional: false, required: true
  private _sinkType?: string; 
  public get sinkType() {
    return this.getStringAttribute('sink_type');
  }
  public set sinkType(value: string) {
    this._sinkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkTypeInput() {
    return this._sinkType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      sink_configuration: cdktf.stringToTerraform(this._sinkConfiguration),
      sink_type: cdktf.stringToTerraform(this._sinkType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      sink_configuration: {
        value: cdktf.stringToHclTerraform(this._sinkConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sink_type: {
        value: cdktf.stringToHclTerraform(this._sinkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
