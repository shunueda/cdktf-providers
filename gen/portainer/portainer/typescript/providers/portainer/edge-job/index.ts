// https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job#cron_expression EdgeJob#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job#edge_groups EdgeJob#edge_groups}
  */
  readonly edgeGroups: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job#endpoints EdgeJob#endpoints}
  */
  readonly endpoints: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job#file_content EdgeJob#file_content}
  */
  readonly fileContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job#file_path EdgeJob#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job#id EdgeJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job#name EdgeJob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job#recurring EdgeJob#recurring}
  */
  readonly recurring?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job portainer_edge_job}
*/
export class EdgeJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_edge_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeJob to import
  * @param importFromId The id of the existing EdgeJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_edge_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.16.1/docs/resources/edge_job portainer_edge_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeJobConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeJobConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_edge_job',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.16.1',
        providerVersionConstraint: '1.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cronExpression = config.cronExpression;
    this._edgeGroups = config.edgeGroups;
    this._endpoints = config.endpoints;
    this._fileContent = config.fileContent;
    this._filePath = config.filePath;
    this._id = config.id;
    this._name = config.name;
    this._recurring = config.recurring;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // edge_groups - computed: false, optional: false, required: true
  private _edgeGroups?: number[]; 
  public get edgeGroups() {
    return this.getNumberListAttribute('edge_groups');
  }
  public set edgeGroups(value: number[]) {
    this._edgeGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGroupsInput() {
    return this._edgeGroups;
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: number[]; 
  public get endpoints() {
    return this.getNumberListAttribute('endpoints');
  }
  public set endpoints(value: number[]) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // file_content - computed: false, optional: true, required: false
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  public resetFileContent() {
    this._fileContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
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

  // recurring - computed: false, optional: true, required: false
  private _recurring?: boolean | cdktf.IResolvable; 
  public get recurring() {
    return this.getBooleanAttribute('recurring');
  }
  public set recurring(value: boolean | cdktf.IResolvable) {
    this._recurring = value;
  }
  public resetRecurring() {
    this._recurring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_expression: cdktf.stringToTerraform(this._cronExpression),
      edge_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._edgeGroups),
      endpoints: cdktf.listMapper(cdktf.numberToTerraform, false)(this._endpoints),
      file_content: cdktf.stringToTerraform(this._fileContent),
      file_path: cdktf.stringToTerraform(this._filePath),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      recurring: cdktf.booleanToTerraform(this._recurring),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_expression: {
        value: cdktf.stringToHclTerraform(this._cronExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._edgeGroups),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      endpoints: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._endpoints),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      file_content: {
        value: cdktf.stringToHclTerraform(this._fileContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurring: {
        value: cdktf.booleanToHclTerraform(this._recurring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
