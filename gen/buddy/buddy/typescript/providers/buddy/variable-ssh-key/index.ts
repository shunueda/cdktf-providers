// https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VariableSshKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The variable's action ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#action_id VariableSshKey#action_id}
  */
  readonly actionId?: number;
  /**
  * The variable's description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#description VariableSshKey#description}
  */
  readonly description?: string;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#domain VariableSshKey#domain}
  */
  readonly domain: string;
  /**
  * The variable's file permission in an action's container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#file_chmod VariableSshKey#file_chmod}
  */
  readonly fileChmod: string;
  /**
  * The variable's path in the action's container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#file_path VariableSshKey#file_path}
  */
  readonly filePath: string;
  /**
  * Should the variable's be copied to an action's container in **file_path** (`CONTAINER`, `NONE`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#file_place VariableSshKey#file_place}
  */
  readonly filePlace: string;
  /**
  * The variable's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#key VariableSshKey#key}
  */
  readonly key: string;
  /**
  * The variable's pipeline ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#pipeline_id VariableSshKey#pipeline_id}
  */
  readonly pipelineId?: number;
  /**
  * The variable's project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#project_name VariableSshKey#project_name}
  */
  readonly projectName?: string;
  /**
  * The variable's value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#value VariableSshKey#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key buddy_variable_ssh_key}
*/
export class VariableSshKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_variable_ssh_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VariableSshKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VariableSshKey to import
  * @param importFromId The id of the existing VariableSshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VariableSshKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_variable_ssh_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.38.0/docs/resources/variable_ssh_key buddy_variable_ssh_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VariableSshKeyConfig
  */
  public constructor(scope: Construct, id: string, config: VariableSshKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_variable_ssh_key',
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
    this._fileChmod = config.fileChmod;
    this._filePath = config.filePath;
    this._filePlace = config.filePlace;
    this._key = config.key;
    this._pipelineId = config.pipelineId;
    this._projectName = config.projectName;
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

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
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

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // file_chmod - computed: false, optional: false, required: true
  private _fileChmod?: string; 
  public get fileChmod() {
    return this.getStringAttribute('file_chmod');
  }
  public set fileChmod(value: string) {
    this._fileChmod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileChmodInput() {
    return this._fileChmod;
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // file_place - computed: false, optional: false, required: true
  private _filePlace?: string; 
  public get filePlace() {
    return this.getStringAttribute('file_place');
  }
  public set filePlace(value: string) {
    this._filePlace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePlaceInput() {
    return this._filePlace;
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

  // key_fingerprint - computed: true, optional: false, required: false
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
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

  // public_value - computed: true, optional: false, required: false
  public get publicValue() {
    return this.getStringAttribute('public_value');
  }

  // settable - computed: true, optional: false, required: false
  public get settable() {
    return this.getBooleanAttribute('settable');
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
      file_chmod: cdktf.stringToTerraform(this._fileChmod),
      file_path: cdktf.stringToTerraform(this._filePath),
      file_place: cdktf.stringToTerraform(this._filePlace),
      key: cdktf.stringToTerraform(this._key),
      pipeline_id: cdktf.numberToTerraform(this._pipelineId),
      project_name: cdktf.stringToTerraform(this._projectName),
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
      file_chmod: {
        value: cdktf.stringToHclTerraform(this._fileChmod),
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
      file_place: {
        value: cdktf.stringToHclTerraform(this._filePlace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
