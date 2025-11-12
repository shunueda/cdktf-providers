// https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * a description of the variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#description ConfigurationVariable#description}
  */
  readonly description?: string;
  /**
  * limit possible values to values from this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#enum ConfigurationVariable#enum}
  */
  readonly enum?: string[];
  /**
  * create the variable under this environment, not globally. Make sure to 'ignore changes' on environment.configuration to prevent drifts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#environment_id ConfigurationVariable#environment_id}
  */
  readonly environmentId?: string;
  /**
  * specifies the format of the configuration value ('HCL' or 'JSON'). If none is specified, 'JSON' and 'HCL' values will be considered to be a 'string' (text) type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#format ConfigurationVariable#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#id ConfigurationVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the value of this variable cannot be edited by lower scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#is_read_only ConfigurationVariable#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * the value of this variable must be set by lower scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#is_required ConfigurationVariable#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * is the variable sensitive, defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#is_sensitive ConfigurationVariable#is_sensitive}
  */
  readonly isSensitive?: boolean | cdktf.IResolvable;
  /**
  * name to give the configuration variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#name ConfigurationVariable#name}
  */
  readonly name: string;
  /**
  * create the variable under this project, not globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#project_id ConfigurationVariable#project_id}
  */
  readonly projectId?: string;
  /**
  * the value of this variable must match provided regular expression (enforced only in env0 UI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#regex ConfigurationVariable#regex}
  */
  readonly regex?: string;
  /**
  * soft delete the configuration variable, once removed from the configuration it won't be deleted from env0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#soft_delete ConfigurationVariable#soft_delete}
  */
  readonly softDelete?: boolean | cdktf.IResolvable;
  /**
  * create the variable for sub templates of a workflow. Requires template_id to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#sub_environment_alias ConfigurationVariable#sub_environment_alias}
  */
  readonly subEnvironmentAlias?: string;
  /**
  * create the variable under this template, not globally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#template_id ConfigurationVariable#template_id}
  */
  readonly templateId?: string;
  /**
  * default 'environment'. set to 'terraform' to create a terraform variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#type ConfigurationVariable#type}
  */
  readonly type?: string;
  /**
  * value for the configuration variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#value ConfigurationVariable#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable env0_configuration_variable}
*/
export class ConfigurationVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_configuration_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationVariable to import
  * @param importFromId The id of the existing ConfigurationVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_configuration_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.6/docs/resources/configuration_variable env0_configuration_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationVariableConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_configuration_variable',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.6',
        providerVersionConstraint: '1.29.6'
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
    this._enum = config.enum;
    this._environmentId = config.environmentId;
    this._format = config.format;
    this._id = config.id;
    this._isReadOnly = config.isReadOnly;
    this._isRequired = config.isRequired;
    this._isSensitive = config.isSensitive;
    this._name = config.name;
    this._projectId = config.projectId;
    this._regex = config.regex;
    this._softDelete = config.softDelete;
    this._subEnvironmentAlias = config.subEnvironmentAlias;
    this._templateId = config.templateId;
    this._type = config.type;
    this._value = config.value;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // is_read_only - computed: false, optional: true, required: false
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

  // is_required - computed: false, optional: true, required: false
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

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: boolean | cdktf.IResolvable; 
  public get isSensitive() {
    return this.getBooleanAttribute('is_sensitive');
  }
  public set isSensitive(value: boolean | cdktf.IResolvable) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
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

  // regex - computed: false, optional: true, required: false
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

  // soft_delete - computed: false, optional: true, required: false
  private _softDelete?: boolean | cdktf.IResolvable; 
  public get softDelete() {
    return this.getBooleanAttribute('soft_delete');
  }
  public set softDelete(value: boolean | cdktf.IResolvable) {
    this._softDelete = value;
  }
  public resetSoftDelete() {
    this._softDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDeleteInput() {
    return this._softDelete;
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
      description: cdktf.stringToTerraform(this._description),
      enum: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enum),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      is_required: cdktf.booleanToTerraform(this._isRequired),
      is_sensitive: cdktf.booleanToTerraform(this._isSensitive),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      regex: cdktf.stringToTerraform(this._regex),
      soft_delete: cdktf.booleanToTerraform(this._softDelete),
      sub_environment_alias: cdktf.stringToTerraform(this._subEnvironmentAlias),
      template_id: cdktf.stringToTerraform(this._templateId),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
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
      enum: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enum),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      is_sensitive: {
        value: cdktf.booleanToHclTerraform(this._isSensitive),
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
      soft_delete: {
        value: cdktf.booleanToHclTerraform(this._softDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
