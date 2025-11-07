// https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs/resources/context_environment_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContextEnvironmentVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the context where the environment variable is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs/resources/context_environment_variable#context_id ContextEnvironmentVariable#context_id}
  */
  readonly contextId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs/resources/context_environment_variable#id ContextEnvironmentVariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The organization where the context is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs/resources/context_environment_variable#organization ContextEnvironmentVariable#organization}
  */
  readonly organization?: string;
  /**
  * The value that will be set for the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs/resources/context_environment_variable#value ContextEnvironmentVariable#value}
  */
  readonly value: string;
  /**
  * The name of the environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs/resources/context_environment_variable#variable ContextEnvironmentVariable#variable}
  */
  readonly variable: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs/resources/context_environment_variable circleci_context_environment_variable}
*/
export class ContextEnvironmentVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circleci_context_environment_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContextEnvironmentVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContextEnvironmentVariable to import
  * @param importFromId The id of the existing ContextEnvironmentVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs/resources/context_environment_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContextEnvironmentVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circleci_context_environment_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrolla/circleci/0.6.1/docs/resources/context_environment_variable circleci_context_environment_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContextEnvironmentVariableConfig
  */
  public constructor(scope: Construct, id: string, config: ContextEnvironmentVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'circleci_context_environment_variable',
      terraformGeneratorMetadata: {
        providerName: 'circleci',
        providerVersion: '0.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contextId = config.contextId;
    this._id = config.id;
    this._organization = config.organization;
    this._value = config.value;
    this._variable = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context_id - computed: false, optional: false, required: true
  private _contextId?: string; 
  public get contextId() {
    return this.getStringAttribute('context_id');
  }
  public set contextId(value: string) {
    this._contextId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdInput() {
    return this._contextId;
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

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // variable - computed: false, optional: false, required: true
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context_id: cdktf.stringToTerraform(this._contextId),
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      value: cdktf.stringToTerraform(this._value),
      variable: cdktf.stringToTerraform(this._variable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context_id: {
        value: cdktf.stringToHclTerraform(this._contextId),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
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
      variable: {
        value: cdktf.stringToHclTerraform(this._variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
