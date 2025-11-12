// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ToolGraphingQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue#___path___ ToolGraphingQueue#___path___}
  */
  readonly path?: string;
  /**
  * IP address range from which is allowed to access graphing information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue#allow_address ToolGraphingQueue#allow_address}
  */
  readonly allowAddress?: string;
  /**
  * Whether to allow access to graphs from queue's target-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue#allow_target ToolGraphingQueue#allow_target}
  */
  readonly allowTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue#disabled ToolGraphingQueue#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue#id ToolGraphingQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines which queues will be monitored. all means that all queues on router will be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue#simple_queue ToolGraphingQueue#simple_queue}
  */
  readonly simpleQueue: string;
  /**
  * Defines whether to store collected information on system drive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue#store_on_disk ToolGraphingQueue#store_on_disk}
  */
  readonly storeOnDisk?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue routeros_tool_graphing_queue}
*/
export class ToolGraphingQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_tool_graphing_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ToolGraphingQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ToolGraphingQueue to import
  * @param importFromId The id of the existing ToolGraphingQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ToolGraphingQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_tool_graphing_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/tool_graphing_queue routeros_tool_graphing_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ToolGraphingQueueConfig
  */
  public constructor(scope: Construct, id: string, config: ToolGraphingQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_tool_graphing_queue',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._allowAddress = config.allowAddress;
    this._allowTarget = config.allowTarget;
    this._disabled = config.disabled;
    this._id = config.id;
    this._simpleQueue = config.simpleQueue;
    this._storeOnDisk = config.storeOnDisk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // allow_address - computed: false, optional: true, required: false
  private _allowAddress?: string; 
  public get allowAddress() {
    return this.getStringAttribute('allow_address');
  }
  public set allowAddress(value: string) {
    this._allowAddress = value;
  }
  public resetAllowAddress() {
    this._allowAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAddressInput() {
    return this._allowAddress;
  }

  // allow_target - computed: false, optional: true, required: false
  private _allowTarget?: boolean | cdktf.IResolvable; 
  public get allowTarget() {
    return this.getBooleanAttribute('allow_target');
  }
  public set allowTarget(value: boolean | cdktf.IResolvable) {
    this._allowTarget = value;
  }
  public resetAllowTarget() {
    this._allowTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTargetInput() {
    return this._allowTarget;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // simple_queue - computed: false, optional: false, required: true
  private _simpleQueue?: string; 
  public get simpleQueue() {
    return this.getStringAttribute('simple_queue');
  }
  public set simpleQueue(value: string) {
    this._simpleQueue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleQueueInput() {
    return this._simpleQueue;
  }

  // store_on_disk - computed: false, optional: true, required: false
  private _storeOnDisk?: boolean | cdktf.IResolvable; 
  public get storeOnDisk() {
    return this.getBooleanAttribute('store_on_disk');
  }
  public set storeOnDisk(value: boolean | cdktf.IResolvable) {
    this._storeOnDisk = value;
  }
  public resetStoreOnDisk() {
    this._storeOnDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeOnDiskInput() {
    return this._storeOnDisk;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allow_address: cdktf.stringToTerraform(this._allowAddress),
      allow_target: cdktf.booleanToTerraform(this._allowTarget),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      simple_queue: cdktf.stringToTerraform(this._simpleQueue),
      store_on_disk: cdktf.booleanToTerraform(this._storeOnDisk),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_address: {
        value: cdktf.stringToHclTerraform(this._allowAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_target: {
        value: cdktf.booleanToHclTerraform(this._allowTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      simple_queue: {
        value: cdktf.stringToHclTerraform(this._simpleQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_on_disk: {
        value: cdktf.booleanToHclTerraform(this._storeOnDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
