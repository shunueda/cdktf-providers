// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlIdpConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to true, allow overriding the mapped SSO role for specific users. Must be set `true` if `use_provided_roles` is false.
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#allow_manual_role_override SamlIdp#allow_manual_role_override}
  */
  readonly allowManualRoleOverride?: boolean | cdktf.IResolvable;
  /**
  * PEM certificate from IdP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#certificate SamlIdp#certificate}
  */
  readonly certificate: string;
  /**
  * A list of domains the IdP handles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#domains SamlIdp#domains}
  */
  readonly domains?: string[];
  /**
  * If undefined, this will default to the login_url value. Set to the same value as login_url if unsure what value to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#issuer_url SamlIdp#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * IdP Login URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#login_url SamlIdp#login_url}
  */
  readonly loginUrl: string;
  /**
  * IdP Logout URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#logout_url SamlIdp#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Manage group mapping by role?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#merge_groups_mapping_by_role SamlIdp#merge_groups_mapping_by_role}
  */
  readonly mergeGroupsMappingByRole?: boolean | cdktf.IResolvable;
  /**
  * IdP name to display in Wiz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#name SamlIdp#name}
  */
  readonly name: string;
  /**
  * When set to true, roles will be provided by the SSO provider. Manage the roles via Wiz portal otherwise.
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#use_provider_managed_roles SamlIdp#use_provider_managed_roles}
  */
  readonly useProviderManagedRoles?: boolean | cdktf.IResolvable;
  /**
  * group_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#group_mapping SamlIdp#group_mapping}
  */
  readonly groupMapping?: SamlIdpGroupMapping[] | cdktf.IResolvable;
}
export interface SamlIdpGroupMapping {
  /**
  * Project mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#projects SamlIdp#projects}
  */
  readonly projects?: string[];
  /**
  * Provider group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#provider_group_id SamlIdp#provider_group_id}
  */
  readonly providerGroupId: string;
  /**
  * Wiz Role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#role SamlIdp#role}
  */
  readonly role: string;
}

export function samlIdpGroupMappingToTerraform(struct?: SamlIdpGroupMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projects),
    provider_group_id: cdktf.stringToTerraform(struct!.providerGroupId),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function samlIdpGroupMappingToHclTerraform(struct?: SamlIdpGroupMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provider_group_id: {
      value: cdktf.stringToHclTerraform(struct!.providerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SamlIdpGroupMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SamlIdpGroupMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projects !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects;
    }
    if (this._providerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerGroupId = this._providerGroupId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlIdpGroupMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projects = undefined;
      this._providerGroupId = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projects = value.projects;
      this._providerGroupId = value.providerGroupId;
      this._role = value.role;
    }
  }

  // projects - computed: false, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return this.getListAttribute('projects');
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // provider_group_id - computed: false, optional: false, required: true
  private _providerGroupId?: string; 
  public get providerGroupId() {
    return this.getStringAttribute('provider_group_id');
  }
  public set providerGroupId(value: string) {
    this._providerGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerGroupIdInput() {
    return this._providerGroupId;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class SamlIdpGroupMappingList extends cdktf.ComplexList {
  public internalValue? : SamlIdpGroupMapping[] | cdktf.IResolvable

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
  public get(index: number): SamlIdpGroupMappingOutputReference {
    return new SamlIdpGroupMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp wiz_saml_idp}
*/
export class SamlIdp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_saml_idp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlIdp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlIdp to import
  * @param importFromId The id of the existing SamlIdp that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlIdp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_saml_idp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/saml_idp wiz_saml_idp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlIdpConfig
  */
  public constructor(scope: Construct, id: string, config: SamlIdpConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_saml_idp',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowManualRoleOverride = config.allowManualRoleOverride;
    this._certificate = config.certificate;
    this._domains = config.domains;
    this._issuerUrl = config.issuerUrl;
    this._loginUrl = config.loginUrl;
    this._logoutUrl = config.logoutUrl;
    this._mergeGroupsMappingByRole = config.mergeGroupsMappingByRole;
    this._name = config.name;
    this._useProviderManagedRoles = config.useProviderManagedRoles;
    this._groupMapping.internalValue = config.groupMapping;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_manual_role_override - computed: false, optional: true, required: false
  private _allowManualRoleOverride?: boolean | cdktf.IResolvable; 
  public get allowManualRoleOverride() {
    return this.getBooleanAttribute('allow_manual_role_override');
  }
  public set allowManualRoleOverride(value: boolean | cdktf.IResolvable) {
    this._allowManualRoleOverride = value;
  }
  public resetAllowManualRoleOverride() {
    this._allowManualRoleOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowManualRoleOverrideInput() {
    return this._allowManualRoleOverride;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // login_url - computed: false, optional: false, required: true
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // logout_url - computed: false, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // merge_groups_mapping_by_role - computed: false, optional: true, required: false
  private _mergeGroupsMappingByRole?: boolean | cdktf.IResolvable; 
  public get mergeGroupsMappingByRole() {
    return this.getBooleanAttribute('merge_groups_mapping_by_role');
  }
  public set mergeGroupsMappingByRole(value: boolean | cdktf.IResolvable) {
    this._mergeGroupsMappingByRole = value;
  }
  public resetMergeGroupsMappingByRole() {
    this._mergeGroupsMappingByRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeGroupsMappingByRoleInput() {
    return this._mergeGroupsMappingByRole;
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

  // use_provider_managed_roles - computed: false, optional: true, required: false
  private _useProviderManagedRoles?: boolean | cdktf.IResolvable; 
  public get useProviderManagedRoles() {
    return this.getBooleanAttribute('use_provider_managed_roles');
  }
  public set useProviderManagedRoles(value: boolean | cdktf.IResolvable) {
    this._useProviderManagedRoles = value;
  }
  public resetUseProviderManagedRoles() {
    this._useProviderManagedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProviderManagedRolesInput() {
    return this._useProviderManagedRoles;
  }

  // group_mapping - computed: false, optional: true, required: false
  private _groupMapping = new SamlIdpGroupMappingList(this, "group_mapping", true);
  public get groupMapping() {
    return this._groupMapping;
  }
  public putGroupMapping(value: SamlIdpGroupMapping[] | cdktf.IResolvable) {
    this._groupMapping.internalValue = value;
  }
  public resetGroupMapping() {
    this._groupMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMappingInput() {
    return this._groupMapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_manual_role_override: cdktf.booleanToTerraform(this._allowManualRoleOverride),
      certificate: cdktf.stringToTerraform(this._certificate),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      issuer_url: cdktf.stringToTerraform(this._issuerUrl),
      login_url: cdktf.stringToTerraform(this._loginUrl),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      merge_groups_mapping_by_role: cdktf.booleanToTerraform(this._mergeGroupsMappingByRole),
      name: cdktf.stringToTerraform(this._name),
      use_provider_managed_roles: cdktf.booleanToTerraform(this._useProviderManagedRoles),
      group_mapping: cdktf.listMapper(samlIdpGroupMappingToTerraform, true)(this._groupMapping.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_manual_role_override: {
        value: cdktf.booleanToHclTerraform(this._allowManualRoleOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      issuer_url: {
        value: cdktf.stringToHclTerraform(this._issuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_url: {
        value: cdktf.stringToHclTerraform(this._loginUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_url: {
        value: cdktf.stringToHclTerraform(this._logoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_groups_mapping_by_role: {
        value: cdktf.booleanToHclTerraform(this._mergeGroupsMappingByRole),
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
      use_provider_managed_roles: {
        value: cdktf.booleanToHclTerraform(this._useProviderManagedRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_mapping: {
        value: cdktf.listMapperHcl(samlIdpGroupMappingToHclTerraform, true)(this._groupMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SamlIdpGroupMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
