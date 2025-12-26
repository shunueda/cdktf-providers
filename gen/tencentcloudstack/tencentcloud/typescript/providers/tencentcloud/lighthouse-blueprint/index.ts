// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lighthouse_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LighthouseBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blueprint name, which can contain up to 60 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lighthouse_blueprint#blueprint_name LighthouseBlueprint#blueprint_name}
  */
  readonly blueprintName: string;
  /**
  * Blueprint description, which can contain up to 60 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lighthouse_blueprint#description LighthouseBlueprint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lighthouse_blueprint#id LighthouseBlueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the instance for which to make a blueprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lighthouse_blueprint#instance_id LighthouseBlueprint#instance_id}
  */
  readonly instanceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lighthouse_blueprint tencentcloud_lighthouse_blueprint}
*/
export class LighthouseBlueprint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_lighthouse_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LighthouseBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LighthouseBlueprint to import
  * @param importFromId The id of the existing LighthouseBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lighthouse_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LighthouseBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_lighthouse_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/lighthouse_blueprint tencentcloud_lighthouse_blueprint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LighthouseBlueprintConfig
  */
  public constructor(scope: Construct, id: string, config: LighthouseBlueprintConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_lighthouse_blueprint',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintName = config.blueprintName;
    this._description = config.description;
    this._id = config.id;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint_name - computed: false, optional: false, required: true
  private _blueprintName?: string; 
  public get blueprintName() {
    return this.getStringAttribute('blueprint_name');
  }
  public set blueprintName(value: string) {
    this._blueprintName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintNameInput() {
    return this._blueprintName;
  }

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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_name: cdktf.stringToTerraform(this._blueprintName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_name: {
        value: cdktf.stringToHclTerraform(this._blueprintName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
