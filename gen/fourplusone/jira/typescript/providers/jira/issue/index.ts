// https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#assignee Issue#assignee}
  */
  readonly assignee?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#delete_transition Issue#delete_transition}
  */
  readonly deleteTransition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#description Issue#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#fields Issue#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#id Issue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#issue_type Issue#issue_type}
  */
  readonly issueType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#labels Issue#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#project_key Issue#project_key}
  */
  readonly projectKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#reporter Issue#reporter}
  */
  readonly reporter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#state Issue#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#state_transition Issue#state_transition}
  */
  readonly stateTransition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#summary Issue#summary}
  */
  readonly summary: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue jira_issue}
*/
export class Issue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jira_issue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Issue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Issue to import
  * @param importFromId The id of the existing Issue that should be imported. Refer to the {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Issue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jira_issue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/issue jira_issue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueConfig
  */
  public constructor(scope: Construct, id: string, config: IssueConfig) {
    super(scope, id, {
      terraformResourceType: 'jira_issue',
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
    this._assignee = config.assignee;
    this._deleteTransition = config.deleteTransition;
    this._description = config.description;
    this._fields = config.fields;
    this._id = config.id;
    this._issueType = config.issueType;
    this._labels = config.labels;
    this._projectKey = config.projectKey;
    this._reporter = config.reporter;
    this._state = config.state;
    this._stateTransition = config.stateTransition;
    this._summary = config.summary;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignee - computed: false, optional: true, required: false
  private _assignee?: string; 
  public get assignee() {
    return this.getStringAttribute('assignee');
  }
  public set assignee(value: string) {
    this._assignee = value;
  }
  public resetAssignee() {
    this._assignee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeInput() {
    return this._assignee;
  }

  // delete_transition - computed: false, optional: true, required: false
  private _deleteTransition?: string; 
  public get deleteTransition() {
    return this.getStringAttribute('delete_transition');
  }
  public set deleteTransition(value: string) {
    this._deleteTransition = value;
  }
  public resetDeleteTransition() {
    this._deleteTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteTransitionInput() {
    return this._deleteTransition;
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

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // issue_key - computed: true, optional: false, required: false
  public get issueKey() {
    return this.getStringAttribute('issue_key');
  }

  // issue_type - computed: false, optional: false, required: true
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // reporter - computed: false, optional: true, required: false
  private _reporter?: string; 
  public get reporter() {
    return this.getStringAttribute('reporter');
  }
  public set reporter(value: string) {
    this._reporter = value;
  }
  public resetReporter() {
    this._reporter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reporterInput() {
    return this._reporter;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // state_transition - computed: false, optional: true, required: false
  private _stateTransition?: string; 
  public get stateTransition() {
    return this.getStringAttribute('state_transition');
  }
  public set stateTransition(value: string) {
    this._stateTransition = value;
  }
  public resetStateTransition() {
    this._stateTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateTransitionInput() {
    return this._stateTransition;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignee: cdktf.stringToTerraform(this._assignee),
      delete_transition: cdktf.stringToTerraform(this._deleteTransition),
      description: cdktf.stringToTerraform(this._description),
      fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      issue_type: cdktf.stringToTerraform(this._issueType),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      project_key: cdktf.stringToTerraform(this._projectKey),
      reporter: cdktf.stringToTerraform(this._reporter),
      state: cdktf.stringToTerraform(this._state),
      state_transition: cdktf.stringToTerraform(this._stateTransition),
      summary: cdktf.stringToTerraform(this._summary),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignee: {
        value: cdktf.stringToHclTerraform(this._assignee),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_transition: {
        value: cdktf.stringToHclTerraform(this._deleteTransition),
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
      fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._fields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issue_type: {
        value: cdktf.stringToHclTerraform(this._issueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reporter: {
        value: cdktf.stringToHclTerraform(this._reporter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_transition: {
        value: cdktf.stringToHclTerraform(this._stateTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
