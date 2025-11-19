// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentOutputConfigurationVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * a description of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#description EnvironmentOutputConfigurationVariable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#id EnvironmentOutputConfigurationVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * set to 'true' if the value of this variable cannot be edited in lower scopes (applicable only to 'PROJECT' scope)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#is_read_only EnvironmentOutputConfigurationVariable#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktf.IResolvable;
  /**
  * set to 'true' if the value of this variable is required in lower scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#is_required EnvironmentOutputConfigurationVariable#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * the name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#name EnvironmentOutputConfigurationVariable#name}
  */
  readonly name: string;
  /**
  * the environment id of the output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#output_environment_id EnvironmentOutputConfigurationVariable#output_environment_id}
  */
  readonly outputEnvironmentId: string;
  /**
  * the name of the output value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#output_name EnvironmentOutputConfigurationVariable#output_name}
  */
  readonly outputName: string;
  /**
  * the type of resource to assign to. Valid values: 'PROJECT', 'ENVIRONMENT', 'WORKFLOW', and 'DEPLOYMENT'. Default value: 'ENVIRONMENT'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#scope EnvironmentOutputConfigurationVariable#scope}
  */
  readonly scope?: string;
  /**
  * the id of the of the resource to assign to (E.g. the environment id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#scope_id EnvironmentOutputConfigurationVariable#scope_id}
  */
  readonly scopeId: string;
  /**
  * defaults to 'environment'. Set to 'terraform' to create a terraform output variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#type EnvironmentOutputConfigurationVariable#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable env0_environment_output_configuration_variable}
*/
export class EnvironmentOutputConfigurationVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_environment_output_configuration_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentOutputConfigurationVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentOutputConfigurationVariable to import
  * @param importFromId The id of the existing EnvironmentOutputConfigurationVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentOutputConfigurationVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_environment_output_configuration_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/environment_output_configuration_variable env0_environment_output_configuration_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentOutputConfigurationVariableConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentOutputConfigurationVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_environment_output_configuration_variable',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
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
    this._id = config.id;
    this._isReadOnly = config.isReadOnly;
    this._isRequired = config.isRequired;
    this._name = config.name;
    this._outputEnvironmentId = config.outputEnvironmentId;
    this._outputName = config.outputName;
    this._scope = config.scope;
    this._scopeId = config.scopeId;
    this._type = config.type;
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

  // output_environment_id - computed: false, optional: false, required: true
  private _outputEnvironmentId?: string; 
  public get outputEnvironmentId() {
    return this.getStringAttribute('output_environment_id');
  }
  public set outputEnvironmentId(value: string) {
    this._outputEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEnvironmentIdInput() {
    return this._outputEnvironmentId;
  }

  // output_name - computed: false, optional: false, required: true
  private _outputName?: string; 
  public get outputName() {
    return this.getStringAttribute('output_name');
  }
  public set outputName(value: string) {
    this._outputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputNameInput() {
    return this._outputName;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_read_only: cdktf.booleanToTerraform(this._isReadOnly),
      is_required: cdktf.booleanToTerraform(this._isRequired),
      name: cdktf.stringToTerraform(this._name),
      output_environment_id: cdktf.stringToTerraform(this._outputEnvironmentId),
      output_name: cdktf.stringToTerraform(this._outputName),
      scope: cdktf.stringToTerraform(this._scope),
      scope_id: cdktf.stringToTerraform(this._scopeId),
      type: cdktf.stringToTerraform(this._type),
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
      output_environment_id: {
        value: cdktf.stringToHclTerraform(this._outputEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_name: {
        value: cdktf.stringToHclTerraform(this._outputName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_id: {
        value: cdktf.stringToHclTerraform(this._scopeId),
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
