// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EbEventBusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Event set description, unlimited character type, description within 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus#description EbEventBus#description}
  */
  readonly description?: string;
  /**
  * Whether the EB storage is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus#enable_store EbEventBus#enable_store}
  */
  readonly enableStore?: boolean | cdktf.IResolvable;
  /**
  * Event set name, which can only contain letters, numbers, underscores, hyphens, starts with a letter and ends with a number or letter, 2~60 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus#event_bus_name EbEventBus#event_bus_name}
  */
  readonly eventBusName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus#id EbEventBus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * EB storage duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus#save_days EbEventBus#save_days}
  */
  readonly saveDays?: number;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus#tags EbEventBus#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus tencentcloud_eb_event_bus}
*/
export class EbEventBus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eb_event_bus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EbEventBus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EbEventBus to import
  * @param importFromId The id of the existing EbEventBus that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EbEventBus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eb_event_bus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/eb_event_bus tencentcloud_eb_event_bus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EbEventBusConfig
  */
  public constructor(scope: Construct, id: string, config: EbEventBusConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eb_event_bus',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
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
    this._enableStore = config.enableStore;
    this._eventBusName = config.eventBusName;
    this._id = config.id;
    this._saveDays = config.saveDays;
    this._tags = config.tags;
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

  // enable_store - computed: false, optional: true, required: false
  private _enableStore?: boolean | cdktf.IResolvable; 
  public get enableStore() {
    return this.getBooleanAttribute('enable_store');
  }
  public set enableStore(value: boolean | cdktf.IResolvable) {
    this._enableStore = value;
  }
  public resetEnableStore() {
    this._enableStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStoreInput() {
    return this._enableStore;
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

  // save_days - computed: false, optional: true, required: false
  private _saveDays?: number; 
  public get saveDays() {
    return this.getNumberAttribute('save_days');
  }
  public set saveDays(value: number) {
    this._saveDays = value;
  }
  public resetSaveDays() {
    this._saveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveDaysInput() {
    return this._saveDays;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable_store: cdktf.booleanToTerraform(this._enableStore),
      event_bus_name: cdktf.stringToTerraform(this._eventBusName),
      id: cdktf.stringToTerraform(this._id),
      save_days: cdktf.numberToTerraform(this._saveDays),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      enable_store: {
        value: cdktf.booleanToHclTerraform(this._enableStore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_bus_name: {
        value: cdktf.stringToHclTerraform(this._eventBusName),
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
      save_days: {
        value: cdktf.numberToHclTerraform(this._saveDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
