// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventBridgeEventSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source#description EventBridgeEventSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source#event_bus_name EventBridgeEventSource#event_bus_name}
  */
  readonly eventBusName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source#event_source_name EventBridgeEventSource#event_source_name}
  */
  readonly eventSourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source#external_source_config EventBridgeEventSource#external_source_config}
  */
  readonly externalSourceConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source#external_source_type EventBridgeEventSource#external_source_type}
  */
  readonly externalSourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source#id EventBridgeEventSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source#linked_external_source EventBridgeEventSource#linked_external_source}
  */
  readonly linkedExternalSource?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source alicloud_event_bridge_event_source}
*/
export class EventBridgeEventSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_event_bridge_event_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventBridgeEventSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventBridgeEventSource to import
  * @param importFromId The id of the existing EventBridgeEventSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventBridgeEventSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_event_bridge_event_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/event_bridge_event_source alicloud_event_bridge_event_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventBridgeEventSourceConfig
  */
  public constructor(scope: Construct, id: string, config: EventBridgeEventSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_event_bridge_event_source',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
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
    this._eventBusName = config.eventBusName;
    this._eventSourceName = config.eventSourceName;
    this._externalSourceConfig = config.externalSourceConfig;
    this._externalSourceType = config.externalSourceType;
    this._id = config.id;
    this._linkedExternalSource = config.linkedExternalSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // event_bus_name - computed: false, optional: false, required: true
  private _eventBusName?: string; 
  public get eventBusName() {
    return this.getStringAttribute('event_bus_name');
  }
  public set eventBusName(value: string) {
    this._eventBusName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusNameInput() {
    return this._eventBusName;
  }

  // event_source_name - computed: false, optional: false, required: true
  private _eventSourceName?: string; 
  public get eventSourceName() {
    return this.getStringAttribute('event_source_name');
  }
  public set eventSourceName(value: string) {
    this._eventSourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceNameInput() {
    return this._eventSourceName;
  }

  // external_source_config - computed: false, optional: true, required: false
  private _externalSourceConfig?: { [key: string]: string }; 
  public get externalSourceConfig() {
    return this.getStringMapAttribute('external_source_config');
  }
  public set externalSourceConfig(value: { [key: string]: string }) {
    this._externalSourceConfig = value;
  }
  public resetExternalSourceConfig() {
    this._externalSourceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSourceConfigInput() {
    return this._externalSourceConfig;
  }

  // external_source_type - computed: false, optional: true, required: false
  private _externalSourceType?: string; 
  public get externalSourceType() {
    return this.getStringAttribute('external_source_type');
  }
  public set externalSourceType(value: string) {
    this._externalSourceType = value;
  }
  public resetExternalSourceType() {
    this._externalSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSourceTypeInput() {
    return this._externalSourceType;
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

  // linked_external_source - computed: false, optional: true, required: false
  private _linkedExternalSource?: boolean | cdktf.IResolvable; 
  public get linkedExternalSource() {
    return this.getBooleanAttribute('linked_external_source');
  }
  public set linkedExternalSource(value: boolean | cdktf.IResolvable) {
    this._linkedExternalSource = value;
  }
  public resetLinkedExternalSource() {
    this._linkedExternalSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedExternalSourceInput() {
    return this._linkedExternalSource;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      event_bus_name: cdktf.stringToTerraform(this._eventBusName),
      event_source_name: cdktf.stringToTerraform(this._eventSourceName),
      external_source_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._externalSourceConfig),
      external_source_type: cdktf.stringToTerraform(this._externalSourceType),
      id: cdktf.stringToTerraform(this._id),
      linked_external_source: cdktf.booleanToTerraform(this._linkedExternalSource),
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
      event_bus_name: {
        value: cdktf.stringToHclTerraform(this._eventBusName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_source_name: {
        value: cdktf.stringToHclTerraform(this._eventSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_source_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._externalSourceConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_source_type: {
        value: cdktf.stringToHclTerraform(this._externalSourceType),
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
      linked_external_source: {
        value: cdktf.booleanToHclTerraform(this._linkedExternalSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
