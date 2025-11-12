// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderGoogleWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON format expected. Use `jsonencode()` to pass objects. Defaults to `{}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#credentials ProviderGoogleWorkspace#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#default_group_email_domain ProviderGoogleWorkspace#default_group_email_domain}
  */
  readonly defaultGroupEmailDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#delegated_subject ProviderGoogleWorkspace#delegated_subject}
  */
  readonly delegatedSubject?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#dry_run ProviderGoogleWorkspace#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#exclude_users_service_account ProviderGoogleWorkspace#exclude_users_service_account}
  */
  readonly excludeUsersServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#filter_group ProviderGoogleWorkspace#filter_group}
  */
  readonly filterGroup?: string;
  /**
  * Allowed values:
  *   - `delete`
  *   - `do_nothing`
  *  Defaults to `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#group_delete_action ProviderGoogleWorkspace#group_delete_action}
  */
  readonly groupDeleteAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#id ProviderGoogleWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#name ProviderGoogleWorkspace#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#property_mappings ProviderGoogleWorkspace#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#property_mappings_group ProviderGoogleWorkspace#property_mappings_group}
  */
  readonly propertyMappingsGroup?: string[];
  /**
  * Allowed values:
  *   - `do_nothing`
  *   - `delete`
  *   - `suspend`
  *  Defaults to `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#user_delete_action ProviderGoogleWorkspace#user_delete_action}
  */
  readonly userDeleteAction?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace authentik_provider_google_workspace}
*/
export class ProviderGoogleWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_google_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderGoogleWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderGoogleWorkspace to import
  * @param importFromId The id of the existing ProviderGoogleWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderGoogleWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_google_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_google_workspace authentik_provider_google_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderGoogleWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderGoogleWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_google_workspace',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentials = config.credentials;
    this._defaultGroupEmailDomain = config.defaultGroupEmailDomain;
    this._delegatedSubject = config.delegatedSubject;
    this._dryRun = config.dryRun;
    this._excludeUsersServiceAccount = config.excludeUsersServiceAccount;
    this._filterGroup = config.filterGroup;
    this._groupDeleteAction = config.groupDeleteAction;
    this._id = config.id;
    this._name = config.name;
    this._propertyMappings = config.propertyMappings;
    this._propertyMappingsGroup = config.propertyMappingsGroup;
    this._userDeleteAction = config.userDeleteAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // default_group_email_domain - computed: false, optional: false, required: true
  private _defaultGroupEmailDomain?: string; 
  public get defaultGroupEmailDomain() {
    return this.getStringAttribute('default_group_email_domain');
  }
  public set defaultGroupEmailDomain(value: string) {
    this._defaultGroupEmailDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGroupEmailDomainInput() {
    return this._defaultGroupEmailDomain;
  }

  // delegated_subject - computed: false, optional: true, required: false
  private _delegatedSubject?: string; 
  public get delegatedSubject() {
    return this.getStringAttribute('delegated_subject');
  }
  public set delegatedSubject(value: string) {
    this._delegatedSubject = value;
  }
  public resetDelegatedSubject() {
    this._delegatedSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedSubjectInput() {
    return this._delegatedSubject;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // exclude_users_service_account - computed: false, optional: true, required: false
  private _excludeUsersServiceAccount?: boolean | cdktf.IResolvable; 
  public get excludeUsersServiceAccount() {
    return this.getBooleanAttribute('exclude_users_service_account');
  }
  public set excludeUsersServiceAccount(value: boolean | cdktf.IResolvable) {
    this._excludeUsersServiceAccount = value;
  }
  public resetExcludeUsersServiceAccount() {
    this._excludeUsersServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUsersServiceAccountInput() {
    return this._excludeUsersServiceAccount;
  }

  // filter_group - computed: false, optional: true, required: false
  private _filterGroup?: string; 
  public get filterGroup() {
    return this.getStringAttribute('filter_group');
  }
  public set filterGroup(value: string) {
    this._filterGroup = value;
  }
  public resetFilterGroup() {
    this._filterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterGroupInput() {
    return this._filterGroup;
  }

  // group_delete_action - computed: false, optional: true, required: false
  private _groupDeleteAction?: string; 
  public get groupDeleteAction() {
    return this.getStringAttribute('group_delete_action');
  }
  public set groupDeleteAction(value: string) {
    this._groupDeleteAction = value;
  }
  public resetGroupDeleteAction() {
    this._groupDeleteAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDeleteActionInput() {
    return this._groupDeleteAction;
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

  // property_mappings - computed: false, optional: true, required: false
  private _propertyMappings?: string[]; 
  public get propertyMappings() {
    return this.getListAttribute('property_mappings');
  }
  public set propertyMappings(value: string[]) {
    this._propertyMappings = value;
  }
  public resetPropertyMappings() {
    this._propertyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsInput() {
    return this._propertyMappings;
  }

  // property_mappings_group - computed: false, optional: true, required: false
  private _propertyMappingsGroup?: string[]; 
  public get propertyMappingsGroup() {
    return this.getListAttribute('property_mappings_group');
  }
  public set propertyMappingsGroup(value: string[]) {
    this._propertyMappingsGroup = value;
  }
  public resetPropertyMappingsGroup() {
    this._propertyMappingsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsGroupInput() {
    return this._propertyMappingsGroup;
  }

  // user_delete_action - computed: false, optional: true, required: false
  private _userDeleteAction?: string; 
  public get userDeleteAction() {
    return this.getStringAttribute('user_delete_action');
  }
  public set userDeleteAction(value: string) {
    this._userDeleteAction = value;
  }
  public resetUserDeleteAction() {
    this._userDeleteAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeleteActionInput() {
    return this._userDeleteAction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials: cdktf.stringToTerraform(this._credentials),
      default_group_email_domain: cdktf.stringToTerraform(this._defaultGroupEmailDomain),
      delegated_subject: cdktf.stringToTerraform(this._delegatedSubject),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      exclude_users_service_account: cdktf.booleanToTerraform(this._excludeUsersServiceAccount),
      filter_group: cdktf.stringToTerraform(this._filterGroup),
      group_delete_action: cdktf.stringToTerraform(this._groupDeleteAction),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      property_mappings_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappingsGroup),
      user_delete_action: cdktf.stringToTerraform(this._userDeleteAction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_group_email_domain: {
        value: cdktf.stringToHclTerraform(this._defaultGroupEmailDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_subject: {
        value: cdktf.stringToHclTerraform(this._delegatedSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_users_service_account: {
        value: cdktf.booleanToHclTerraform(this._excludeUsersServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_group: {
        value: cdktf.stringToHclTerraform(this._filterGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_delete_action: {
        value: cdktf.stringToHclTerraform(this._groupDeleteAction),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_mappings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      property_mappings_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappingsGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_delete_action: {
        value: cdktf.stringToHclTerraform(this._userDeleteAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
