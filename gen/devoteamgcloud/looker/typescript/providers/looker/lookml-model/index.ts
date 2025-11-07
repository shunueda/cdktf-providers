// https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/lookml_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LookmlModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of names of connections this model is allowed to use (looker_connection)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/lookml_model#allowed_db_connection_names LookmlModel#allowed_db_connection_names}
  */
  readonly allowedDbConnectionNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/lookml_model#id LookmlModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the model. Also used as the unique identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/lookml_model#name LookmlModel#name}
  */
  readonly name: string;
  /**
  * Name of project containing the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/lookml_model#project_name LookmlModel#project_name}
  */
  readonly projectName: string;
  /**
  * Is this model allowed to use all current and future connections?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/lookml_model#unlimited_db_connections LookmlModel#unlimited_db_connections}
  */
  readonly unlimitedDbConnections?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/lookml_model looker_lookml_model}
*/
export class LookmlModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "looker_lookml_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LookmlModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LookmlModel to import
  * @param importFromId The id of the existing LookmlModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/lookml_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LookmlModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "looker_lookml_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devoteamgcloud/looker/0.4.0/docs/resources/lookml_model looker_lookml_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LookmlModelConfig
  */
  public constructor(scope: Construct, id: string, config: LookmlModelConfig) {
    super(scope, id, {
      terraformResourceType: 'looker_lookml_model',
      terraformGeneratorMetadata: {
        providerName: 'looker',
        providerVersion: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedDbConnectionNames = config.allowedDbConnectionNames;
    this._id = config.id;
    this._name = config.name;
    this._projectName = config.projectName;
    this._unlimitedDbConnections = config.unlimitedDbConnections;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_db_connection_names - computed: false, optional: false, required: true
  private _allowedDbConnectionNames?: string[]; 
  public get allowedDbConnectionNames() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_db_connection_names'));
  }
  public set allowedDbConnectionNames(value: string[]) {
    this._allowedDbConnectionNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDbConnectionNamesInput() {
    return this._allowedDbConnectionNames;
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

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // unlimited_db_connections - computed: false, optional: true, required: false
  private _unlimitedDbConnections?: boolean | cdktf.IResolvable; 
  public get unlimitedDbConnections() {
    return this.getBooleanAttribute('unlimited_db_connections');
  }
  public set unlimitedDbConnections(value: boolean | cdktf.IResolvable) {
    this._unlimitedDbConnections = value;
  }
  public resetUnlimitedDbConnections() {
    this._unlimitedDbConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedDbConnectionsInput() {
    return this._unlimitedDbConnections;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_db_connection_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDbConnectionNames),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_name: cdktf.stringToTerraform(this._projectName),
      unlimited_db_connections: cdktf.booleanToTerraform(this._unlimitedDbConnections),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_db_connection_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedDbConnectionNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unlimited_db_connections: {
        value: cdktf.booleanToHclTerraform(this._unlimitedDbConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
