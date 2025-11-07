// https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_type#avatar_id IssueType#avatar_id}
  */
  readonly avatarId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_type#description IssueType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_type#id IssueType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_type#is_subtask IssueType#is_subtask}
  */
  readonly isSubtask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_type#name IssueType#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_type jira_issue_type}
*/
export class IssueType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jira_issue_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IssueType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IssueType to import
  * @param importFromId The id of the existing IssueType that should be imported. Refer to the {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IssueType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jira_issue_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue_type jira_issue_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueTypeConfig
  */
  public constructor(scope: Construct, id: string, config: IssueTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'jira_issue_type',
      terraformGeneratorMetadata: {
        providerName: 'jira',
        providerVersion: '0.1.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avatarId = config.avatarId;
    this._description = config.description;
    this._id = config.id;
    this._isSubtask = config.isSubtask;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_id - computed: false, optional: true, required: false
  private _avatarId?: number; 
  public get avatarId() {
    return this.getNumberAttribute('avatar_id');
  }
  public set avatarId(value: number) {
    this._avatarId = value;
  }
  public resetAvatarId() {
    this._avatarId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarIdInput() {
    return this._avatarId;
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

  // is_subtask - computed: false, optional: true, required: false
  private _isSubtask?: boolean | cdktf.IResolvable; 
  public get isSubtask() {
    return this.getBooleanAttribute('is_subtask');
  }
  public set isSubtask(value: boolean | cdktf.IResolvable) {
    this._isSubtask = value;
  }
  public resetIsSubtask() {
    this._isSubtask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSubtaskInput() {
    return this._isSubtask;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avatar_id: cdktf.numberToTerraform(this._avatarId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_subtask: cdktf.booleanToTerraform(this._isSubtask),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avatar_id: {
        value: cdktf.numberToHclTerraform(this._avatarId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_subtask: {
        value: cdktf.booleanToHclTerraform(this._isSubtask),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
