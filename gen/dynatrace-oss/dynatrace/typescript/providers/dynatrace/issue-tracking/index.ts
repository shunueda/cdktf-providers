// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IssueTrackingConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#enabled IssueTracking#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#id IssueTracking#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#insert_after IssueTracking#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Set a label to identify these issues, for example, `release_blocker` or `non-critical`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#issuelabel IssueTracking#issuelabel}
  */
  readonly issuelabel: string;
  /**
  * You can use the following placeholders to automatically insert values from the **Release monitoring** page in your query: `{NAME}`, `{VERSION}`, `{STAGE}`, `{PRODUCT}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#issuequery IssueTracking#issuequery}
  */
  readonly issuequery: string;
  /**
  * Possible Values: `ERROR`, `INFO`, `RESOLVED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#issuetheme IssueTracking#issuetheme}
  */
  readonly issuetheme: string;
  /**
  * Possible Values: `GITHUB`, `GITLAB`, `JIRA`, `JIRA_CLOUD`, `JIRA_ON_PREMISE`, `SERVICENOW`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#issuetrackersystem IssueTracking#issuetrackersystem}
  */
  readonly issuetrackersystem: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#password IssueTracking#password}
  */
  readonly password?: string;
  /**
  * Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#token IssueTracking#token}
  */
  readonly token?: string;
  /**
  * For Jira, use the base URL (for example, https://jira.yourcompany.com); for GitHub, use the repository URL (for example, https://github.com/org/repo); for GitLab, use the specific project API for a single project (for example, https://gitlab.com/api/v4/projects/:projectId), and the specific group API for a multiple projects (for example, https://gitlab.com/api/v4/groups/:groupId); for ServiceNow, use your company instance URL (for example, https://yourinstance.service-now.com/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#url IssueTracking#url}
  */
  readonly url: string;
  /**
  * Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#username IssueTracking#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking dynatrace_issue_tracking}
*/
export class IssueTracking extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_issue_tracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IssueTracking resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IssueTracking to import
  * @param importFromId The id of the existing IssueTracking that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IssueTracking to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_issue_tracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/issue_tracking dynatrace_issue_tracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IssueTrackingConfig
  */
  public constructor(scope: Construct, id: string, config: IssueTrackingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_issue_tracking',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._issuelabel = config.issuelabel;
    this._issuequery = config.issuequery;
    this._issuetheme = config.issuetheme;
    this._issuetrackersystem = config.issuetrackersystem;
    this._password = config.password;
    this._token = config.token;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // issuelabel - computed: false, optional: false, required: true
  private _issuelabel?: string; 
  public get issuelabel() {
    return this.getStringAttribute('issuelabel');
  }
  public set issuelabel(value: string) {
    this._issuelabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuelabelInput() {
    return this._issuelabel;
  }

  // issuequery - computed: false, optional: false, required: true
  private _issuequery?: string; 
  public get issuequery() {
    return this.getStringAttribute('issuequery');
  }
  public set issuequery(value: string) {
    this._issuequery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuequeryInput() {
    return this._issuequery;
  }

  // issuetheme - computed: false, optional: false, required: true
  private _issuetheme?: string; 
  public get issuetheme() {
    return this.getStringAttribute('issuetheme');
  }
  public set issuetheme(value: string) {
    this._issuetheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuethemeInput() {
    return this._issuetheme;
  }

  // issuetrackersystem - computed: false, optional: false, required: true
  private _issuetrackersystem?: string; 
  public get issuetrackersystem() {
    return this.getStringAttribute('issuetrackersystem');
  }
  public set issuetrackersystem(value: string) {
    this._issuetrackersystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuetrackersystemInput() {
    return this._issuetrackersystem;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      issuelabel: cdktf.stringToTerraform(this._issuelabel),
      issuequery: cdktf.stringToTerraform(this._issuequery),
      issuetheme: cdktf.stringToTerraform(this._issuetheme),
      issuetrackersystem: cdktf.stringToTerraform(this._issuetrackersystem),
      password: cdktf.stringToTerraform(this._password),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuelabel: {
        value: cdktf.stringToHclTerraform(this._issuelabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuequery: {
        value: cdktf.stringToHclTerraform(this._issuequery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuetheme: {
        value: cdktf.stringToHclTerraform(this._issuetheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuetrackersystem: {
        value: cdktf.stringToHclTerraform(this._issuetrackersystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
