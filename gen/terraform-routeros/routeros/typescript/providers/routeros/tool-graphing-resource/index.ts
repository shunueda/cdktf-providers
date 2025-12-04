// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/tool_graphing_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ToolGraphingResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/tool_graphing_resource#___path___ ToolGraphingResource#___path___}
  */
  readonly path?: string;
  /**
  * IP address range from which is allowed to access graphing information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/tool_graphing_resource#allow_address ToolGraphingResource#allow_address}
  */
  readonly allowAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/tool_graphing_resource#disabled ToolGraphingResource#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/tool_graphing_resource#id ToolGraphingResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines whether to store collected information on system drive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/tool_graphing_resource#store_on_disk ToolGraphingResource#store_on_disk}
  */
  readonly storeOnDisk?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/tool_graphing_resource routeros_tool_graphing_resource}
*/
export class ToolGraphingResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_tool_graphing_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ToolGraphingResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ToolGraphingResource to import
  * @param importFromId The id of the existing ToolGraphingResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/tool_graphing_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ToolGraphingResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_tool_graphing_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/tool_graphing_resource routeros_tool_graphing_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ToolGraphingResourceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ToolGraphingResourceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_tool_graphing_resource',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
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
    this._disabled = config.disabled;
    this._id = config.id;
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
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
