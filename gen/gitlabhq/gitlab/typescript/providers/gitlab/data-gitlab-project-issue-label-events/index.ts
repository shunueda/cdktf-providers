// https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_issue_label_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabProjectIssueLabelEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The internal ID of the issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_issue_label_events#issue_iid DataGitlabProjectIssueLabelEvents#issue_iid}
  */
  readonly issueIid: number;
  /**
  * Number of pages to return. Default is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_issue_label_events#pages_returned DataGitlabProjectIssueLabelEvents#pages_returned}
  */
  readonly pagesReturned?: number;
  /**
  * The ID or full path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_issue_label_events#project DataGitlabProjectIssueLabelEvents#project}
  */
  readonly project: string;
}
export interface DataGitlabProjectIssueLabelEventsEventsLabel {
}

export function dataGitlabProjectIssueLabelEventsEventsLabelToTerraform(struct?: DataGitlabProjectIssueLabelEventsEventsLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectIssueLabelEventsEventsLabelToHclTerraform(struct?: DataGitlabProjectIssueLabelEventsEventsLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectIssueLabelEventsEventsLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabProjectIssueLabelEventsEventsLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectIssueLabelEventsEventsLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataGitlabProjectIssueLabelEventsEventsUser {
}

export function dataGitlabProjectIssueLabelEventsEventsUserToTerraform(struct?: DataGitlabProjectIssueLabelEventsEventsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectIssueLabelEventsEventsUserToHclTerraform(struct?: DataGitlabProjectIssueLabelEventsEventsUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectIssueLabelEventsEventsUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataGitlabProjectIssueLabelEventsEventsUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectIssueLabelEventsEventsUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // web_url - computed: true, optional: false, required: false
  public get webUrl() {
    return this.getStringAttribute('web_url');
  }
}
export interface DataGitlabProjectIssueLabelEventsEvents {
}

export function dataGitlabProjectIssueLabelEventsEventsToTerraform(struct?: DataGitlabProjectIssueLabelEventsEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitlabProjectIssueLabelEventsEventsToHclTerraform(struct?: DataGitlabProjectIssueLabelEventsEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitlabProjectIssueLabelEventsEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGitlabProjectIssueLabelEventsEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitlabProjectIssueLabelEventsEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  private _label = new DataGitlabProjectIssueLabelEventsEventsLabelOutputReference(this, "label");
  public get label() {
    return this._label;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getNumberAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // user - computed: true, optional: false, required: false
  private _user = new DataGitlabProjectIssueLabelEventsEventsUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
}

export class DataGitlabProjectIssueLabelEventsEventsList extends cdktf.ComplexList {

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
  public get(index: number): DataGitlabProjectIssueLabelEventsEventsOutputReference {
    return new DataGitlabProjectIssueLabelEventsEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_issue_label_events gitlab_project_issue_label_events}
*/
export class DataGitlabProjectIssueLabelEvents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_issue_label_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabProjectIssueLabelEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabProjectIssueLabelEvents to import
  * @param importFromId The id of the existing DataGitlabProjectIssueLabelEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_issue_label_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabProjectIssueLabelEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_issue_label_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.7.0/docs/data-sources/project_issue_label_events gitlab_project_issue_label_events} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabProjectIssueLabelEventsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabProjectIssueLabelEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_issue_label_events',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.7.0',
        providerVersionConstraint: '18.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._issueIid = config.issueIid;
    this._pagesReturned = config.pagesReturned;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // events - computed: true, optional: false, required: false
  private _events = new DataGitlabProjectIssueLabelEventsEventsList(this, "events", false);
  public get events() {
    return this._events;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issue_iid - computed: false, optional: false, required: true
  private _issueIid?: number; 
  public get issueIid() {
    return this.getNumberAttribute('issue_iid');
  }
  public set issueIid(value: number) {
    this._issueIid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueIidInput() {
    return this._issueIid;
  }

  // pages_returned - computed: false, optional: true, required: false
  private _pagesReturned?: number; 
  public get pagesReturned() {
    return this.getNumberAttribute('pages_returned');
  }
  public set pagesReturned(value: number) {
    this._pagesReturned = value;
  }
  public resetPagesReturned() {
    this._pagesReturned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagesReturnedInput() {
    return this._pagesReturned;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      issue_iid: cdktf.numberToTerraform(this._issueIid),
      pages_returned: cdktf.numberToTerraform(this._pagesReturned),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      issue_iid: {
        value: cdktf.numberToHclTerraform(this._issueIid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pages_returned: {
        value: cdktf.numberToHclTerraform(this._pagesReturned),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
