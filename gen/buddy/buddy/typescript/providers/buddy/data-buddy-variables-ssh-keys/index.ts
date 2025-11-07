// https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/variables_ssh_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBuddyVariablesSshKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Get only from provided action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/variables_ssh_keys#action_id DataBuddyVariablesSshKeys#action_id}
  */
  readonly actionId?: number;
  /**
  * The workspace's URL handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/variables_ssh_keys#domain DataBuddyVariablesSshKeys#domain}
  */
  readonly domain: string;
  /**
  * The variable's key regular expression to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/variables_ssh_keys#key_regex DataBuddyVariablesSshKeys#key_regex}
  */
  readonly keyRegex?: string;
  /**
  * Get only from provided pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/variables_ssh_keys#pipeline_id DataBuddyVariablesSshKeys#pipeline_id}
  */
  readonly pipelineId?: number;
  /**
  * Get only from provided project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/variables_ssh_keys#project_name DataBuddyVariablesSshKeys#project_name}
  */
  readonly projectName?: string;
}
export interface DataBuddyVariablesSshKeysVariables {
}

export function dataBuddyVariablesSshKeysVariablesToTerraform(struct?: DataBuddyVariablesSshKeysVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBuddyVariablesSshKeysVariablesToHclTerraform(struct?: DataBuddyVariablesSshKeysVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBuddyVariablesSshKeysVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBuddyVariablesSshKeysVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBuddyVariablesSshKeysVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // file_chmod - computed: true, optional: false, required: false
  public get fileChmod() {
    return this.getStringAttribute('file_chmod');
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // file_place - computed: true, optional: false, required: false
  public get filePlace() {
    return this.getStringAttribute('file_place');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_fingerprint - computed: true, optional: false, required: false
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
  }

  // public_value - computed: true, optional: false, required: false
  public get publicValue() {
    return this.getStringAttribute('public_value');
  }

  // settable - computed: true, optional: false, required: false
  public get settable() {
    return this.getBooleanAttribute('settable');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // variable_id - computed: true, optional: false, required: false
  public get variableId() {
    return this.getNumberAttribute('variable_id');
  }
}

export class DataBuddyVariablesSshKeysVariablesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataBuddyVariablesSshKeysVariablesOutputReference {
    return new DataBuddyVariablesSshKeysVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/variables_ssh_keys buddy_variables_ssh_keys}
*/
export class DataBuddyVariablesSshKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "buddy_variables_ssh_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBuddyVariablesSshKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBuddyVariablesSshKeys to import
  * @param importFromId The id of the existing DataBuddyVariablesSshKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/variables_ssh_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBuddyVariablesSshKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "buddy_variables_ssh_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/buddy/buddy/1.37.1/docs/data-sources/variables_ssh_keys buddy_variables_ssh_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBuddyVariablesSshKeysConfig
  */
  public constructor(scope: Construct, id: string, config: DataBuddyVariablesSshKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'buddy_variables_ssh_keys',
      terraformGeneratorMetadata: {
        providerName: 'buddy',
        providerVersion: '1.37.1'
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
    this._domain = config.domain;
    this._keyRegex = config.keyRegex;
    this._pipelineId = config.pipelineId;
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_id - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_regex - computed: false, optional: true, required: false
  private _keyRegex?: string; 
  public get keyRegex() {
    return this.getStringAttribute('key_regex');
  }
  public set keyRegex(value: string) {
    this._keyRegex = value;
  }
  public resetKeyRegex() {
    this._keyRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRegexInput() {
    return this._keyRegex;
  }

  // pipeline_id - computed: false, optional: true, required: false
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

  // project_name - computed: false, optional: true, required: false
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

  // variables - computed: true, optional: false, required: false
  private _variables = new DataBuddyVariablesSshKeysVariablesList(this, "variables", true);
  public get variables() {
    return this._variables;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_id: cdktf.numberToTerraform(this._actionId),
      domain: cdktf.stringToTerraform(this._domain),
      key_regex: cdktf.stringToTerraform(this._keyRegex),
      pipeline_id: cdktf.numberToTerraform(this._pipelineId),
      project_name: cdktf.stringToTerraform(this._projectName),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_regex: {
        value: cdktf.stringToHclTerraform(this._keyRegex),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
