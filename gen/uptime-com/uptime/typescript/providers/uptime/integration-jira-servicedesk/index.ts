// https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationJiraServicedeskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email address for JIRA API authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#api_email IntegrationJiraServicedesk#api_email}
  */
  readonly apiEmail: string;
  /**
  * API token for JIRA authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#api_token IntegrationJiraServicedesk#api_token}
  */
  readonly apiToken: string;
  /**
  * List of contact group names to receive notifications. 
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations) 
  * that will be notified when alerts are triggered. Defaults to ['Default'] if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#contact_groups IntegrationJiraServicedesk#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Custom field ID for account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#custom_field_id_account_name IntegrationJiraServicedesk#custom_field_id_account_name}
  */
  readonly customFieldIdAccountName?: number;
  /**
  * Custom field ID for check name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#custom_field_id_check_name IntegrationJiraServicedesk#custom_field_id_check_name}
  */
  readonly customFieldIdCheckName?: number;
  /**
  * Custom field ID for check URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#custom_field_id_check_url IntegrationJiraServicedesk#custom_field_id_check_url}
  */
  readonly customFieldIdCheckUrl?: number;
  /**
  * Additional custom fields as JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#custom_fields_json IntegrationJiraServicedesk#custom_fields_json}
  */
  readonly customFieldsJson?: string;
  /**
  * JIRA subdomain (e.g., 'mycompany' for mycompany.atlassian.net)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#jira_subdomain IntegrationJiraServicedesk#jira_subdomain}
  */
  readonly jiraSubdomain: string;
  /**
  * Comma-separated list of labels to add to created issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#labels IntegrationJiraServicedesk#labels}
  */
  readonly labels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#name IntegrationJiraServicedesk#name}
  */
  readonly name: string;
  /**
  * JIRA project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#project_key IntegrationJiraServicedesk#project_key}
  */
  readonly projectKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk uptime_integration_jira_servicedesk}
*/
export class IntegrationJiraServicedesk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_integration_jira_servicedesk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationJiraServicedesk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationJiraServicedesk to import
  * @param importFromId The id of the existing IntegrationJiraServicedesk that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationJiraServicedesk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_integration_jira_servicedesk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/resources/integration_jira_servicedesk uptime_integration_jira_servicedesk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationJiraServicedeskConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationJiraServicedeskConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_integration_jira_servicedesk',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.1',
        providerVersionConstraint: '2.18.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiEmail = config.apiEmail;
    this._apiToken = config.apiToken;
    this._contactGroups = config.contactGroups;
    this._customFieldIdAccountName = config.customFieldIdAccountName;
    this._customFieldIdCheckName = config.customFieldIdCheckName;
    this._customFieldIdCheckUrl = config.customFieldIdCheckUrl;
    this._customFieldsJson = config.customFieldsJson;
    this._jiraSubdomain = config.jiraSubdomain;
    this._labels = config.labels;
    this._name = config.name;
    this._projectKey = config.projectKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_email - computed: false, optional: false, required: true
  private _apiEmail?: string; 
  public get apiEmail() {
    return this.getStringAttribute('api_email');
  }
  public set apiEmail(value: string) {
    this._apiEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEmailInput() {
    return this._apiEmail;
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // contact_groups - computed: true, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // custom_field_id_account_name - computed: true, optional: true, required: false
  private _customFieldIdAccountName?: number; 
  public get customFieldIdAccountName() {
    return this.getNumberAttribute('custom_field_id_account_name');
  }
  public set customFieldIdAccountName(value: number) {
    this._customFieldIdAccountName = value;
  }
  public resetCustomFieldIdAccountName() {
    this._customFieldIdAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldIdAccountNameInput() {
    return this._customFieldIdAccountName;
  }

  // custom_field_id_check_name - computed: true, optional: true, required: false
  private _customFieldIdCheckName?: number; 
  public get customFieldIdCheckName() {
    return this.getNumberAttribute('custom_field_id_check_name');
  }
  public set customFieldIdCheckName(value: number) {
    this._customFieldIdCheckName = value;
  }
  public resetCustomFieldIdCheckName() {
    this._customFieldIdCheckName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldIdCheckNameInput() {
    return this._customFieldIdCheckName;
  }

  // custom_field_id_check_url - computed: true, optional: true, required: false
  private _customFieldIdCheckUrl?: number; 
  public get customFieldIdCheckUrl() {
    return this.getNumberAttribute('custom_field_id_check_url');
  }
  public set customFieldIdCheckUrl(value: number) {
    this._customFieldIdCheckUrl = value;
  }
  public resetCustomFieldIdCheckUrl() {
    this._customFieldIdCheckUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldIdCheckUrlInput() {
    return this._customFieldIdCheckUrl;
  }

  // custom_fields_json - computed: true, optional: true, required: false
  private _customFieldsJson?: string; 
  public get customFieldsJson() {
    return this.getStringAttribute('custom_fields_json');
  }
  public set customFieldsJson(value: string) {
    this._customFieldsJson = value;
  }
  public resetCustomFieldsJson() {
    this._customFieldsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsJsonInput() {
    return this._customFieldsJson;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // jira_subdomain - computed: false, optional: false, required: true
  private _jiraSubdomain?: string; 
  public get jiraSubdomain() {
    return this.getStringAttribute('jira_subdomain');
  }
  public set jiraSubdomain(value: string) {
    this._jiraSubdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraSubdomainInput() {
    return this._jiraSubdomain;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_email: cdktf.stringToTerraform(this._apiEmail),
      api_token: cdktf.stringToTerraform(this._apiToken),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      custom_field_id_account_name: cdktf.numberToTerraform(this._customFieldIdAccountName),
      custom_field_id_check_name: cdktf.numberToTerraform(this._customFieldIdCheckName),
      custom_field_id_check_url: cdktf.numberToTerraform(this._customFieldIdCheckUrl),
      custom_fields_json: cdktf.stringToTerraform(this._customFieldsJson),
      jira_subdomain: cdktf.stringToTerraform(this._jiraSubdomain),
      labels: cdktf.stringToTerraform(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_email: {
        value: cdktf.stringToHclTerraform(this._apiEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      custom_field_id_account_name: {
        value: cdktf.numberToHclTerraform(this._customFieldIdAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_field_id_check_name: {
        value: cdktf.numberToHclTerraform(this._customFieldIdCheckName),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_field_id_check_url: {
        value: cdktf.numberToHclTerraform(this._customFieldIdCheckUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_fields_json: {
        value: cdktf.stringToHclTerraform(this._customFieldsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_subdomain: {
        value: cdktf.stringToHclTerraform(this._jiraSubdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.stringToHclTerraform(this._labels),
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
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
