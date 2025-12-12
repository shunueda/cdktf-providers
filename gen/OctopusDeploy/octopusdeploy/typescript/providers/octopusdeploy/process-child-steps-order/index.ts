// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/process_child_steps_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessChildStepsOrderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Child steps in the order of execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/process_child_steps_order#children ProcessChildStepsOrder#children}
  */
  readonly children: string[];
  /**
  * Id of the process step children belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/process_child_steps_order#parent_id ProcessChildStepsOrder#parent_id}
  */
  readonly parentId: string;
  /**
  * Id of the process parent step belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/process_child_steps_order#process_id ProcessChildStepsOrder#process_id}
  */
  readonly processId: string;
  /**
  * The space ID associated with this process_child_steps_order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/process_child_steps_order#space_id ProcessChildStepsOrder#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/process_child_steps_order octopusdeploy_process_child_steps_order}
*/
export class ProcessChildStepsOrder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_process_child_steps_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessChildStepsOrder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessChildStepsOrder to import
  * @param importFromId The id of the existing ProcessChildStepsOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/process_child_steps_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessChildStepsOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_process_child_steps_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/resources/process_child_steps_order octopusdeploy_process_child_steps_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessChildStepsOrderConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessChildStepsOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_process_child_steps_order',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._children = config.children;
    this._parentId = config.parentId;
    this._processId = config.processId;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // children - computed: false, optional: false, required: true
  private _children?: string[]; 
  public get children() {
    return this.getListAttribute('children');
  }
  public set children(value: string[]) {
    this._children = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childrenInput() {
    return this._children;
  }

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

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      children: cdktf.listMapper(cdktf.stringToTerraform, false)(this._children),
      parent_id: cdktf.stringToTerraform(this._parentId),
      process_id: cdktf.stringToTerraform(this._processId),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      children: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._children),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
