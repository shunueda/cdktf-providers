// https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#assignee_type Project#assignee_type}
  */
  readonly assigneeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#avatar_id Project#avatar_id}
  */
  readonly avatarId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#category_id Project#category_id}
  */
  readonly categoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#issue_security_scheme Project#issue_security_scheme}
  */
  readonly issueSecurityScheme?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#key Project#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#lead Project#lead}
  */
  readonly lead?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#lead_account_id Project#lead_account_id}
  */
  readonly leadAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#notification_scheme Project#notification_scheme}
  */
  readonly notificationScheme?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#permission_scheme Project#permission_scheme}
  */
  readonly permissionScheme?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#project_template_key Project#project_template_key}
  */
  readonly projectTemplateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#project_type_key Project#project_type_key}
  */
  readonly projectTypeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#shared_configuration_project_id Project#shared_configuration_project_id}
  */
  readonly sharedConfigurationProjectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#url Project#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project jira_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jira_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jira_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fourplusone/jira/0.1.20/docs/resources/project jira_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'jira_project',
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
    this._assigneeType = config.assigneeType;
    this._avatarId = config.avatarId;
    this._categoryId = config.categoryId;
    this._description = config.description;
    this._id = config.id;
    this._issueSecurityScheme = config.issueSecurityScheme;
    this._key = config.key;
    this._lead = config.lead;
    this._leadAccountId = config.leadAccountId;
    this._name = config.name;
    this._notificationScheme = config.notificationScheme;
    this._permissionScheme = config.permissionScheme;
    this._projectTemplateKey = config.projectTemplateKey;
    this._projectTypeKey = config.projectTypeKey;
    this._sharedConfigurationProjectId = config.sharedConfigurationProjectId;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignee_type - computed: false, optional: true, required: false
  private _assigneeType?: string; 
  public get assigneeType() {
    return this.getStringAttribute('assignee_type');
  }
  public set assigneeType(value: string) {
    this._assigneeType = value;
  }
  public resetAssigneeType() {
    this._assigneeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeTypeInput() {
    return this._assigneeType;
  }

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

  // category_id - computed: false, optional: true, required: false
  private _categoryId?: string; 
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }
  public set categoryId(value: string) {
    this._categoryId = value;
  }
  public resetCategoryId() {
    this._categoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdInput() {
    return this._categoryId;
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

  // issue_security_scheme - computed: false, optional: true, required: false
  private _issueSecurityScheme?: number; 
  public get issueSecurityScheme() {
    return this.getNumberAttribute('issue_security_scheme');
  }
  public set issueSecurityScheme(value: number) {
    this._issueSecurityScheme = value;
  }
  public resetIssueSecurityScheme() {
    this._issueSecurityScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueSecuritySchemeInput() {
    return this._issueSecurityScheme;
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

  // lead - computed: false, optional: true, required: false
  private _lead?: string; 
  public get lead() {
    return this.getStringAttribute('lead');
  }
  public set lead(value: string) {
    this._lead = value;
  }
  public resetLead() {
    this._lead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadInput() {
    return this._lead;
  }

  // lead_account_id - computed: false, optional: true, required: false
  private _leadAccountId?: string; 
  public get leadAccountId() {
    return this.getStringAttribute('lead_account_id');
  }
  public set leadAccountId(value: string) {
    this._leadAccountId = value;
  }
  public resetLeadAccountId() {
    this._leadAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadAccountIdInput() {
    return this._leadAccountId;
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

  // notification_scheme - computed: false, optional: true, required: false
  private _notificationScheme?: number; 
  public get notificationScheme() {
    return this.getNumberAttribute('notification_scheme');
  }
  public set notificationScheme(value: number) {
    this._notificationScheme = value;
  }
  public resetNotificationScheme() {
    this._notificationScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationSchemeInput() {
    return this._notificationScheme;
  }

  // permission_scheme - computed: false, optional: true, required: false
  private _permissionScheme?: number; 
  public get permissionScheme() {
    return this.getNumberAttribute('permission_scheme');
  }
  public set permissionScheme(value: number) {
    this._permissionScheme = value;
  }
  public resetPermissionScheme() {
    this._permissionScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSchemeInput() {
    return this._permissionScheme;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // project_template_key - computed: false, optional: true, required: false
  private _projectTemplateKey?: string; 
  public get projectTemplateKey() {
    return this.getStringAttribute('project_template_key');
  }
  public set projectTemplateKey(value: string) {
    this._projectTemplateKey = value;
  }
  public resetProjectTemplateKey() {
    this._projectTemplateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectTemplateKeyInput() {
    return this._projectTemplateKey;
  }

  // project_type_key - computed: false, optional: true, required: false
  private _projectTypeKey?: string; 
  public get projectTypeKey() {
    return this.getStringAttribute('project_type_key');
  }
  public set projectTypeKey(value: string) {
    this._projectTypeKey = value;
  }
  public resetProjectTypeKey() {
    this._projectTypeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectTypeKeyInput() {
    return this._projectTypeKey;
  }

  // shared_configuration_project_id - computed: false, optional: true, required: false
  private _sharedConfigurationProjectId?: number; 
  public get sharedConfigurationProjectId() {
    return this.getNumberAttribute('shared_configuration_project_id');
  }
  public set sharedConfigurationProjectId(value: number) {
    this._sharedConfigurationProjectId = value;
  }
  public resetSharedConfigurationProjectId() {
    this._sharedConfigurationProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedConfigurationProjectIdInput() {
    return this._sharedConfigurationProjectId;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignee_type: cdktf.stringToTerraform(this._assigneeType),
      avatar_id: cdktf.numberToTerraform(this._avatarId),
      category_id: cdktf.stringToTerraform(this._categoryId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      issue_security_scheme: cdktf.numberToTerraform(this._issueSecurityScheme),
      key: cdktf.stringToTerraform(this._key),
      lead: cdktf.stringToTerraform(this._lead),
      lead_account_id: cdktf.stringToTerraform(this._leadAccountId),
      name: cdktf.stringToTerraform(this._name),
      notification_scheme: cdktf.numberToTerraform(this._notificationScheme),
      permission_scheme: cdktf.numberToTerraform(this._permissionScheme),
      project_template_key: cdktf.stringToTerraform(this._projectTemplateKey),
      project_type_key: cdktf.stringToTerraform(this._projectTypeKey),
      shared_configuration_project_id: cdktf.numberToTerraform(this._sharedConfigurationProjectId),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignee_type: {
        value: cdktf.stringToHclTerraform(this._assigneeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avatar_id: {
        value: cdktf.numberToHclTerraform(this._avatarId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      category_id: {
        value: cdktf.stringToHclTerraform(this._categoryId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issue_security_scheme: {
        value: cdktf.numberToHclTerraform(this._issueSecurityScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lead: {
        value: cdktf.stringToHclTerraform(this._lead),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lead_account_id: {
        value: cdktf.stringToHclTerraform(this._leadAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_scheme: {
        value: cdktf.numberToHclTerraform(this._notificationScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permission_scheme: {
        value: cdktf.numberToHclTerraform(this._permissionScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_template_key: {
        value: cdktf.stringToHclTerraform(this._projectTemplateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_type_key: {
        value: cdktf.stringToHclTerraform(this._projectTypeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_configuration_project_id: {
        value: cdktf.numberToHclTerraform(this._sharedConfigurationProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
