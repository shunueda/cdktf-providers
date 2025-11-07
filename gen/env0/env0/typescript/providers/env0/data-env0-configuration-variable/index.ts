// https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0ConfigurationVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * search for the variable under this deployment log, not globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#deployment_log_id DataEnv0ConfigurationVariable#deployment_log_id}
  */
  readonly deploymentLogId?: string;
  /**
  * a description of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#description DataEnv0ConfigurationVariable#description}
  */
  readonly description?: string;
  /**
  * search for the variable under this environment, not globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#environment_id DataEnv0ConfigurationVariable#environment_id}
  */
  readonly environmentId?: string;
  /**
  * id of the configuration variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#id DataEnv0ConfigurationVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * specifies if the value of this variable cannot be edited by lower scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#is_read_only DataEnv0ConfigurationVariable#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * specifies if the value of this variable must be set by lower scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#is_required DataEnv0ConfigurationVariable#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * the name of the configuration variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#name DataEnv0ConfigurationVariable#name}
  */
  readonly name?: string;
  /**
  * search for the variable under this project, not globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#project_id DataEnv0ConfigurationVariable#project_id}
  */
  readonly projectId?: string;
  /**
  * specifies a regular expression to validate variable value (enforced only in env0 UI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#regex DataEnv0ConfigurationVariable#regex}
  */
  readonly regex?: string;
  /**
  * search for the variable for sub templates of a workflow. Requires template_id as well
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#sub_environment_alias DataEnv0ConfigurationVariable#sub_environment_alias}
  */
  readonly subEnvironmentAlias?: string;
  /**
  * search for the variable under this template, not globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#template_id DataEnv0ConfigurationVariable#template_id}
  */
  readonly templateId?: string;
  /**
  * 'terraform' or 'environment'. If specified as an argument, limits searching by variable name only to variables of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#type DataEnv0ConfigurationVariable#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable env0_configuration_variable}
*/
export class DataEnv0ConfigurationVariable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_configuration_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0ConfigurationVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0ConfigurationVariable to import
  * @param importFromId The id of the existing DataEnv0ConfigurationVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0ConfigurationVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_configuration_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/data-sources/configuration_variable env0_configuration_variable} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0ConfigurationVariableConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEnv0ConfigurationVariableConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0_configuration_variable',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentLogId = config.deploymentLogId;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._isReadOnly = config.isReadOnly;
    this._isRequired = config.isRequired;
    this._name = config.name;
    this._projectId = config.projectId;
    this._regex = config.regex;
    this._subEnvironmentAlias = config.subEnvironmentAlias;
    this._templateId = config.templateId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_log_id - computed: false, optional: true, required: false
  private _deploymentLogId?: string; 
  public get deploymentLogId() {
    return this.getStringAttribute('deployment_log_id');
  }
  public set deploymentLogId(value: string) {
    this._deploymentLogId = value;
  }
  public resetDeploymentLogId() {
    this._deploymentLogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentLogIdInput() {
    return this._deploymentLogId;
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

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // id - computed: false, optional: true, required: false
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

  // is_read_only - computed: true, optional: true, required: false
  private _isReadOnly?: boolean | cdktf.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktf.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // is_sensitive - computed: true, optional: false, required: false
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // sub_environment_alias - computed: false, optional: true, required: false
  private _subEnvironmentAlias?: string; 
  public get subEnvironmentAlias() {
    return this.getStringAttribute('sub_environment_alias');
  }
  public set subEnvironmentAlias(value: string) {
    this._subEnvironmentAlias = value;
  }
  public resetSubEnvironmentAlias() {
    this._subEnvironmentAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subEnvironmentAliasInput() {
    return this._subEnvironmentAlias;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_log_id: cdktf.stringToTerraform(this._deploymentLogId),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      is_required: cdktf.booleanToTerraform(this._isRequired),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      regex: cdktf.stringToTerraform(this._regex),
      sub_environment_alias: cdktf.stringToTerraform(this._subEnvironmentAlias),
      template_id: cdktf.stringToTerraform(this._templateId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_log_id: {
        value: cdktf.stringToHclTerraform(this._deploymentLogId),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      is_read_only: {
        value: cdktf.booleanToHclTerraform(this._isReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_required: {
        value: cdktf.booleanToHclTerraform(this._isRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regex: {
        value: cdktf.stringToHclTerraform(this._regex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_environment_alias: {
        value: cdktf.stringToHclTerraform(this._subEnvironmentAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
