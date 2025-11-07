// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderMicrosoftEntraConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#client_id ProviderMicrosoftEntra#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#client_secret ProviderMicrosoftEntra#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#dry_run ProviderMicrosoftEntra#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#exclude_users_service_account ProviderMicrosoftEntra#exclude_users_service_account}
  */
  readonly excludeUsersServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#filter_group ProviderMicrosoftEntra#filter_group}
  */
  readonly filterGroup?: string;
  /**
  * Allowed values:
  *   - `delete`
  *   - `do_nothing`
  *  Defaults to `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#group_delete_action ProviderMicrosoftEntra#group_delete_action}
  */
  readonly groupDeleteAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#id ProviderMicrosoftEntra#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#name ProviderMicrosoftEntra#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#property_mappings ProviderMicrosoftEntra#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#property_mappings_group ProviderMicrosoftEntra#property_mappings_group}
  */
  readonly propertyMappingsGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#tenant_id ProviderMicrosoftEntra#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Allowed values:
  *   - `delete`
  *   - `do_nothing`
  *  Defaults to `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#user_delete_action ProviderMicrosoftEntra#user_delete_action}
  */
  readonly userDeleteAction?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra authentik_provider_microsoft_entra}
*/
export class ProviderMicrosoftEntra extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_microsoft_entra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderMicrosoftEntra resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderMicrosoftEntra to import
  * @param importFromId The id of the existing ProviderMicrosoftEntra that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderMicrosoftEntra to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_microsoft_entra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_microsoft_entra authentik_provider_microsoft_entra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderMicrosoftEntraConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderMicrosoftEntraConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_microsoft_entra',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._dryRun = config.dryRun;
    this._excludeUsersServiceAccount = config.excludeUsersServiceAccount;
    this._filterGroup = config.filterGroup;
    this._groupDeleteAction = config.groupDeleteAction;
    this._id = config.id;
    this._name = config.name;
    this._propertyMappings = config.propertyMappings;
    this._propertyMappingsGroup = config.propertyMappingsGroup;
    this._tenantId = config.tenantId;
    this._userDeleteAction = config.userDeleteAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      exclude_users_service_account: cdktf.booleanToTerraform(this._excludeUsersServiceAccount),
      filter_group: cdktf.stringToTerraform(this._filterGroup),
      group_delete_action: cdktf.stringToTerraform(this._groupDeleteAction),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      property_mappings_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappingsGroup),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      user_delete_action: cdktf.stringToTerraform(this._userDeleteAction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
