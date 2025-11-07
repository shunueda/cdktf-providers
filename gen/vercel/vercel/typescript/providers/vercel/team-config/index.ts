// https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `avatar` should be a the 'file' attribute from a vercel_file data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#avatar TeamConfig#avatar}
  */
  readonly avatar?: { [key: string]: string };
  /**
  * A description of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#description TeamConfig#description}
  */
  readonly description?: string;
  /**
  * Hostname that'll be matched with emails on sign-up to automatically join the Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#email_domain TeamConfig#email_domain}
  */
  readonly emailDomain?: string;
  /**
  * Enables the Vercel Toolbar on your preview deployments: one of on, off or default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#enable_preview_feedback TeamConfig#enable_preview_feedback}
  */
  readonly enablePreviewFeedback?: string;
  /**
  * Enables the Vercel Toolbar on your production deployments: one of on, off or default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#enable_production_feedback TeamConfig#enable_production_feedback}
  */
  readonly enableProductionFeedback?: string;
  /**
  * Indicates if ip addresses should be accessible in o11y tooling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#hide_ip_addresses TeamConfig#hide_ip_addresses}
  */
  readonly hideIpAddresses?: boolean | cdktf.IResolvable;
  /**
  * Indicates if ip addresses should be accessible in log drains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#hide_ip_addresses_in_log_drains TeamConfig#hide_ip_addresses_in_log_drains}
  */
  readonly hideIpAddressesInLogDrains?: boolean | cdktf.IResolvable;
  /**
  * The ID of the existing Vercel Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#id TeamConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#name TeamConfig#name}
  */
  readonly name?: string;
  /**
  * The hostname that is used as the preview deployment suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#preview_deployment_suffix TeamConfig#preview_deployment_suffix}
  */
  readonly previewDeploymentSuffix?: string;
  /**
  * Configuration for Remote Caching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#remote_caching TeamConfig#remote_caching}
  */
  readonly remoteCaching?: TeamConfigRemoteCaching;
  /**
  * Configuration for SAML authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#saml TeamConfig#saml}
  */
  readonly saml?: TeamConfigSaml;
  /**
  * Ensures that all environment variables created by members of this team will be created as Sensitive Environment Variables which can only be decrypted by Vercel's deployment system.: one of on, off or default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#sensitive_environment_variable_policy TeamConfig#sensitive_environment_variable_policy}
  */
  readonly sensitiveEnvironmentVariablePolicy?: string;
  /**
  * The slug of the team. Will be used in the URL of the team's dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#slug TeamConfig#slug}
  */
  readonly slug?: string;
}
export interface TeamConfigRemoteCaching {
  /**
  * Indicates if Remote Caching is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#enabled TeamConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function teamConfigRemoteCachingToTerraform(struct?: TeamConfigRemoteCaching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function teamConfigRemoteCachingToHclTerraform(struct?: TeamConfigRemoteCaching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamConfigRemoteCachingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamConfigRemoteCaching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamConfigRemoteCaching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface TeamConfigSamlRoles {
  /**
  * The access group id to assign to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#access_group_id TeamConfig#access_group_id}
  */
  readonly accessGroupId?: string;
  /**
  * The team level role to assign to the user. One of 'MEMBER', 'OWNER', 'VIEWER', 'DEVELOPER', 'BILLING' or 'CONTRIBUTOR'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#role TeamConfig#role}
  */
  readonly role?: string;
}

export function teamConfigSamlRolesToTerraform(struct?: TeamConfigSamlRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_group_id: cdktf.stringToTerraform(struct!.accessGroupId),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function teamConfigSamlRolesToHclTerraform(struct?: TeamConfigSamlRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_group_id: {
      value: cdktf.stringToHclTerraform(struct!.accessGroupId),
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

export class TeamConfigSamlRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): TeamConfigSamlRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessGroupId = this._accessGroupId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamConfigSamlRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessGroupId = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessGroupId = value.accessGroupId;
      this._role = value.role;
    }
  }

  // access_group_id - computed: true, optional: true, required: false
  private _accessGroupId?: string; 
  public get accessGroupId() {
    return this.getStringAttribute('access_group_id');
  }
  public set accessGroupId(value: string) {
    this._accessGroupId = value;
  }
  public resetAccessGroupId() {
    this._accessGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGroupIdInput() {
    return this._accessGroupId;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class TeamConfigSamlRolesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: TeamConfigSamlRoles } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): TeamConfigSamlRolesOutputReference {
    return new TeamConfigSamlRolesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface TeamConfigSaml {
  /**
  * Indicates if SAML is enforced for the team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#enforced TeamConfig#enforced}
  */
  readonly enforced?: boolean | cdktf.IResolvable;
  /**
  * Directory groups to role or access group mappings. For each directory group, specify either a role or access group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#roles TeamConfig#roles}
  */
  readonly roles?: { [key: string]: TeamConfigSamlRoles } | cdktf.IResolvable;
}

export function teamConfigSamlToTerraform(struct?: TeamConfigSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforced: cdktf.booleanToTerraform(struct!.enforced),
    roles: cdktf.hashMapper(teamConfigSamlRolesToTerraform)(struct!.roles),
  }
}


export function teamConfigSamlToHclTerraform(struct?: TeamConfigSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforced: {
      value: cdktf.booleanToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roles: {
      value: cdktf.hashMapperHcl(teamConfigSamlRolesToHclTerraform)(struct!.roles),
      isBlock: true,
      type: "map",
      storageClassType: "TeamConfigSamlRolesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamConfigSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamConfigSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamConfigSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforced = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforced = value.enforced;
      this._roles.internalValue = value.roles;
    }
  }

  // enforced - computed: true, optional: true, required: false
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // roles - computed: true, optional: true, required: false
  private _roles = new TeamConfigSamlRolesMap(this, "roles");
  public get roles() {
    return this._roles;
  }
  public putRoles(value: { [key: string]: TeamConfigSamlRoles } | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config vercel_team_config}
*/
export class TeamConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_team_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamConfig to import
  * @param importFromId The id of the existing TeamConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_team_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/resources/team_config vercel_team_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_team_config',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._avatar = config.avatar;
    this._description = config.description;
    this._emailDomain = config.emailDomain;
    this._enablePreviewFeedback = config.enablePreviewFeedback;
    this._enableProductionFeedback = config.enableProductionFeedback;
    this._hideIpAddresses = config.hideIpAddresses;
    this._hideIpAddressesInLogDrains = config.hideIpAddressesInLogDrains;
    this._id = config.id;
    this._name = config.name;
    this._previewDeploymentSuffix = config.previewDeploymentSuffix;
    this._remoteCaching.internalValue = config.remoteCaching;
    this._saml.internalValue = config.saml;
    this._sensitiveEnvironmentVariablePolicy = config.sensitiveEnvironmentVariablePolicy;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar - computed: false, optional: true, required: false
  private _avatar?: { [key: string]: string }; 
  public get avatar() {
    return this.getStringMapAttribute('avatar');
  }
  public set avatar(value: { [key: string]: string }) {
    this._avatar = value;
  }
  public resetAvatar() {
    this._avatar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarInput() {
    return this._avatar;
  }

  // description - computed: true, optional: true, required: false
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

  // email_domain - computed: true, optional: true, required: false
  private _emailDomain?: string; 
  public get emailDomain() {
    return this.getStringAttribute('email_domain');
  }
  public set emailDomain(value: string) {
    this._emailDomain = value;
  }
  public resetEmailDomain() {
    this._emailDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainInput() {
    return this._emailDomain;
  }

  // enable_preview_feedback - computed: true, optional: true, required: false
  private _enablePreviewFeedback?: string; 
  public get enablePreviewFeedback() {
    return this.getStringAttribute('enable_preview_feedback');
  }
  public set enablePreviewFeedback(value: string) {
    this._enablePreviewFeedback = value;
  }
  public resetEnablePreviewFeedback() {
    this._enablePreviewFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreviewFeedbackInput() {
    return this._enablePreviewFeedback;
  }

  // enable_production_feedback - computed: true, optional: true, required: false
  private _enableProductionFeedback?: string; 
  public get enableProductionFeedback() {
    return this.getStringAttribute('enable_production_feedback');
  }
  public set enableProductionFeedback(value: string) {
    this._enableProductionFeedback = value;
  }
  public resetEnableProductionFeedback() {
    this._enableProductionFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProductionFeedbackInput() {
    return this._enableProductionFeedback;
  }

  // hide_ip_addresses - computed: true, optional: true, required: false
  private _hideIpAddresses?: boolean | cdktf.IResolvable; 
  public get hideIpAddresses() {
    return this.getBooleanAttribute('hide_ip_addresses');
  }
  public set hideIpAddresses(value: boolean | cdktf.IResolvable) {
    this._hideIpAddresses = value;
  }
  public resetHideIpAddresses() {
    this._hideIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideIpAddressesInput() {
    return this._hideIpAddresses;
  }

  // hide_ip_addresses_in_log_drains - computed: true, optional: true, required: false
  private _hideIpAddressesInLogDrains?: boolean | cdktf.IResolvable; 
  public get hideIpAddressesInLogDrains() {
    return this.getBooleanAttribute('hide_ip_addresses_in_log_drains');
  }
  public set hideIpAddressesInLogDrains(value: boolean | cdktf.IResolvable) {
    this._hideIpAddressesInLogDrains = value;
  }
  public resetHideIpAddressesInLogDrains() {
    this._hideIpAddressesInLogDrains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideIpAddressesInLogDrainsInput() {
    return this._hideIpAddressesInLogDrains;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // invite_code - computed: true, optional: false, required: false
  public get inviteCode() {
    return this.getStringAttribute('invite_code');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preview_deployment_suffix - computed: true, optional: true, required: false
  private _previewDeploymentSuffix?: string; 
  public get previewDeploymentSuffix() {
    return this.getStringAttribute('preview_deployment_suffix');
  }
  public set previewDeploymentSuffix(value: string) {
    this._previewDeploymentSuffix = value;
  }
  public resetPreviewDeploymentSuffix() {
    this._previewDeploymentSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewDeploymentSuffixInput() {
    return this._previewDeploymentSuffix;
  }

  // remote_caching - computed: true, optional: true, required: false
  private _remoteCaching = new TeamConfigRemoteCachingOutputReference(this, "remote_caching");
  public get remoteCaching() {
    return this._remoteCaching;
  }
  public putRemoteCaching(value: TeamConfigRemoteCaching) {
    this._remoteCaching.internalValue = value;
  }
  public resetRemoteCaching() {
    this._remoteCaching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCachingInput() {
    return this._remoteCaching.internalValue;
  }

  // saml - computed: true, optional: true, required: false
  private _saml = new TeamConfigSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: TeamConfigSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // sensitive_environment_variable_policy - computed: true, optional: true, required: false
  private _sensitiveEnvironmentVariablePolicy?: string; 
  public get sensitiveEnvironmentVariablePolicy() {
    return this.getStringAttribute('sensitive_environment_variable_policy');
  }
  public set sensitiveEnvironmentVariablePolicy(value: string) {
    this._sensitiveEnvironmentVariablePolicy = value;
  }
  public resetSensitiveEnvironmentVariablePolicy() {
    this._sensitiveEnvironmentVariablePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveEnvironmentVariablePolicyInput() {
    return this._sensitiveEnvironmentVariablePolicy;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      avatar: cdktf.hashMapper(cdktf.stringToTerraform)(this._avatar),
      description: cdktf.stringToTerraform(this._description),
      email_domain: cdktf.stringToTerraform(this._emailDomain),
      enable_preview_feedback: cdktf.stringToTerraform(this._enablePreviewFeedback),
      enable_production_feedback: cdktf.stringToTerraform(this._enableProductionFeedback),
      hide_ip_addresses: cdktf.booleanToTerraform(this._hideIpAddresses),
      hide_ip_addresses_in_log_drains: cdktf.booleanToTerraform(this._hideIpAddressesInLogDrains),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      preview_deployment_suffix: cdktf.stringToTerraform(this._previewDeploymentSuffix),
      remote_caching: teamConfigRemoteCachingToTerraform(this._remoteCaching.internalValue),
      saml: teamConfigSamlToTerraform(this._saml.internalValue),
      sensitive_environment_variable_policy: cdktf.stringToTerraform(this._sensitiveEnvironmentVariablePolicy),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avatar: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._avatar),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_domain: {
        value: cdktf.stringToHclTerraform(this._emailDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_preview_feedback: {
        value: cdktf.stringToHclTerraform(this._enablePreviewFeedback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_production_feedback: {
        value: cdktf.stringToHclTerraform(this._enableProductionFeedback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_ip_addresses: {
        value: cdktf.booleanToHclTerraform(this._hideIpAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_ip_addresses_in_log_drains: {
        value: cdktf.booleanToHclTerraform(this._hideIpAddressesInLogDrains),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview_deployment_suffix: {
        value: cdktf.stringToHclTerraform(this._previewDeploymentSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_caching: {
        value: teamConfigRemoteCachingToHclTerraform(this._remoteCaching.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TeamConfigRemoteCaching",
      },
      saml: {
        value: teamConfigSamlToHclTerraform(this._saml.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TeamConfigSaml",
      },
      sensitive_environment_variable_policy: {
        value: cdktf.stringToHclTerraform(this._sensitiveEnvironmentVariablePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
