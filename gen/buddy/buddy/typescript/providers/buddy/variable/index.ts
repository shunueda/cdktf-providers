// https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The variable's action ID. Set for action scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#action_id Variable#action_id}
  */
  readonly actionId?: number;
  /**
  * The variable's description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#description Variable#description}
  */
  readonly description?: string;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#domain Variable#domain}
  */
  readonly domain: string;
  /**
  * Is the variable's value encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#encrypted Variable#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * The variable's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#key Variable#key}
  */
  readonly key: string;
  /**
  * The variable's pipeline ID. Set for pipeline scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#pipeline_id Variable#pipeline_id}
  */
  readonly pipelineId?: number;
  /**
  * The variable's project name. Set for project scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#project_name Variable#project_name}
  */
  readonly projectName?: string;
  /**
  * Is the variable's value changeable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#settable Variable#settable}
  */
  readonly settable?: boolean | cdktf.IResolvable;
  /**
  * The variable's value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#value Variable#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable buddy_variable}
*/
export class Variable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Variable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Variable to import
  * @param importFromId The id of the existing Variable that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Variable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable buddy_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VariableConfig
  */
  public constructor(scope: Construct, id: string, config: VariableConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_variable',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionId = config.actionId;
    this._description = config.description;
    this._domain = config.domain;
    this._encrypted = config.encrypted;
    this._key = config.key;
    this._pipelineId = config.pipelineId;
    this._projectName = config.projectName;
    this._settable = config.settable;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_id - computed: true, optional: true, required: false
  private _actionId?: number; 
  public get actionId() {
    return this.getNumberAttribute('action_id');
  }
  public set actionId(value: number) {
    this._actionId = value;
  }
  public resetActionId() {
    this._actionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // description - computed: true, optional: true, required: false
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // pipeline_id - computed: true, optional: true, required: false
  private _pipelineId?: number; 
  public get pipelineId() {
    return this.getNumberAttribute('pipeline_id');
  }
  public set pipelineId(value: number) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // settable - computed: true, optional: true, required: false
  private _settable?: boolean | cdktf.IResolvable; 
  public get settable() {
    return this.getBooleanAttribute('settable');
  }
  public set settable(value: boolean | cdktf.IResolvable) {
    this._settable = value;
  }
  public resetSettable() {
    this._settable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settableInput() {
    return this._settable;
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

  // value_processed - computed: true, optional: false, required: false
  public get valueProcessed() {
    return this.getStringAttribute('value_processed');
  }

  // variable_id - computed: true, optional: false, required: false
  public get variableId() {
    return this.getNumberAttribute('variable_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_id: cdktf.numberToTerraform(this._actionId),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      encrypted: cdktf.booleanToTerraform(this._encrypted),
      key: cdktf.stringToTerraform(this._key),
      pipeline_id: cdktf.numberToTerraform(this._pipelineId),
      project_name: cdktf.stringToTerraform(this._projectName),
      settable: cdktf.booleanToTerraform(this._settable),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_id: {
        value: cdktf.numberToHclTerraform(this._actionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted: {
        value: cdktf.booleanToHclTerraform(this._encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_id: {
        value: cdktf.numberToHclTerraform(this._pipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settable: {
        value: cdktf.booleanToHclTerraform(this._settable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
