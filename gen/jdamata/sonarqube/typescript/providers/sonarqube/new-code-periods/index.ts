// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/new_code_periods
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NewCodePeriodsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of a branch of a project for which the new code period will be configured. Changing this will force a new resource to be created. Setting this also requires setting the 'project' argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/new_code_periods#branch NewCodePeriods#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/new_code_periods#id NewCodePeriods#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key of a project for which the new code period will be configured. Changing this will force a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/new_code_periods#project NewCodePeriods#project}
  */
  readonly project?: string;
  /**
  * The kind of new code period to use. Supported values are SPECIFIC_ANALYSIS, PREVIOUS_VERSION, NUMBER_OF_DAYS, or REFERENCE_BRANCH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/new_code_periods#type NewCodePeriods#type}
  */
  readonly type: string;
  /**
  * The desired value of the new code period. Varies based on the 'type'. For SPECIFIC_ANALYIS, the value must be the UUID of a previous analysis. For NUMBER_OF_DAYS it must be a numeric string. For REFERENCE_BRANCH it should be the name of branch on the project. For PREVIOUS_VERSION it must **not** be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/new_code_periods#value NewCodePeriods#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/new_code_periods sonarqube_new_code_periods}
*/
export class NewCodePeriods extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_new_code_periods";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NewCodePeriods resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NewCodePeriods to import
  * @param importFromId The id of the existing NewCodePeriods that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/new_code_periods#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NewCodePeriods to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_new_code_periods", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/new_code_periods sonarqube_new_code_periods} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NewCodePeriodsConfig
  */
  public constructor(scope: Construct, id: string, config: NewCodePeriodsConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_new_code_periods',
      terraformGeneratorMetadata: {
        providerName: 'sonarqube',
        providerVersion: '0.16.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._branch = config.branch;
    this._id = config.id;
    this._project = config.project;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
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

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
