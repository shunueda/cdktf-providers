// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Group access control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#access_control_group_options SystemApplication#access_control_group_options}
  */
  readonly accessControlGroupOptions?: SystemApplicationAccessControlGroupOptions;
  /**
  * A string that specifies the user role required to access the application. A user is an admin user if they have one or more of the following roles assigned: `Organization Admin`, `Environment Admin`, `Identity Data Admin`, or `Client Application Developer`.  Options are `ADMIN_USERS_ONLY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#access_control_role_type SystemApplication#access_control_role_type}
  */
  readonly accessControlRoleType?: string;
  /**
  * A boolean that specifies whether to apply the default theme to the Self-Service or PingOne Portal application.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#apply_default_theme SystemApplication#apply_default_theme}
  */
  readonly applyDefaultTheme?: boolean | cdktf.IResolvable;
  /**
  * A boolean that specifies whether to show the default theme footer on the self-service application. Configurable only when the `type` is `PING_ONE_SELF_SERVICE` and `apply_default_theme` is also `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#enable_default_theme_footer SystemApplication#enable_default_theme_footer}
  */
  readonly enableDefaultThemeFooter?: boolean | cdktf.IResolvable;
  /**
  * A boolean that specifies the enabled/disabled status of the application.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#enabled SystemApplication#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The ID of the environment to manage built-in system applications in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#environment_id SystemApplication#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the type of system application, used as the primary identifier.  Options are `PING_ONE_PORTAL`, `PING_ONE_SELF_SERVICE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#type SystemApplication#type}
  */
  readonly type: string;
}
export interface SystemApplicationAccessControlGroupOptions {
  /**
  * A set that specifies the group IDs for the groups the actor must belong to for access to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#groups SystemApplication#groups}
  */
  readonly groups: string[];
  /**
  * A string that specifies the group type required to access the application.  Options are `ALL_GROUPS` (the actor must belong to all groups listed in the `groups` property), `ANY_GROUP` (the actor must belong to at least one group listed in the `groups` property).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#type SystemApplication#type}
  */
  readonly type: string;
}

export function systemApplicationAccessControlGroupOptionsToTerraform(struct?: SystemApplicationAccessControlGroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function systemApplicationAccessControlGroupOptionsToHclTerraform(struct?: SystemApplicationAccessControlGroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemApplicationAccessControlGroupOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemApplicationAccessControlGroupOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemApplicationAccessControlGroupOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._type = value.type;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application pingone_system_application}
*/
export class SystemApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_system_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemApplication to import
  * @param importFromId The id of the existing SystemApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_system_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/system_application pingone_system_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: SystemApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_system_application',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlGroupOptions.internalValue = config.accessControlGroupOptions;
    this._accessControlRoleType = config.accessControlRoleType;
    this._applyDefaultTheme = config.applyDefaultTheme;
    this._enableDefaultThemeFooter = config.enableDefaultThemeFooter;
    this._enabled = config.enabled;
    this._environmentId = config.environmentId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_group_options - computed: false, optional: true, required: false
  private _accessControlGroupOptions = new SystemApplicationAccessControlGroupOptionsOutputReference(this, "access_control_group_options");
  public get accessControlGroupOptions() {
    return this._accessControlGroupOptions;
  }
  public putAccessControlGroupOptions(value: SystemApplicationAccessControlGroupOptions) {
    this._accessControlGroupOptions.internalValue = value;
  }
  public resetAccessControlGroupOptions() {
    this._accessControlGroupOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlGroupOptionsInput() {
    return this._accessControlGroupOptions.internalValue;
  }

  // access_control_role_type - computed: false, optional: true, required: false
  private _accessControlRoleType?: string; 
  public get accessControlRoleType() {
    return this.getStringAttribute('access_control_role_type');
  }
  public set accessControlRoleType(value: string) {
    this._accessControlRoleType = value;
  }
  public resetAccessControlRoleType() {
    this._accessControlRoleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlRoleTypeInput() {
    return this._accessControlRoleType;
  }

  // apply_default_theme - computed: true, optional: true, required: false
  private _applyDefaultTheme?: boolean | cdktf.IResolvable; 
  public get applyDefaultTheme() {
    return this.getBooleanAttribute('apply_default_theme');
  }
  public set applyDefaultTheme(value: boolean | cdktf.IResolvable) {
    this._applyDefaultTheme = value;
  }
  public resetApplyDefaultTheme() {
    this._applyDefaultTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyDefaultThemeInput() {
    return this._applyDefaultTheme;
  }

  // enable_default_theme_footer - computed: false, optional: true, required: false
  private _enableDefaultThemeFooter?: boolean | cdktf.IResolvable; 
  public get enableDefaultThemeFooter() {
    return this.getBooleanAttribute('enable_default_theme_footer');
  }
  public set enableDefaultThemeFooter(value: boolean | cdktf.IResolvable) {
    this._enableDefaultThemeFooter = value;
  }
  public resetEnableDefaultThemeFooter() {
    this._enableDefaultThemeFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultThemeFooterInput() {
    return this._enableDefaultThemeFooter;
  }

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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_group_options: systemApplicationAccessControlGroupOptionsToTerraform(this._accessControlGroupOptions.internalValue),
      access_control_role_type: cdktf.stringToTerraform(this._accessControlRoleType),
      apply_default_theme: cdktf.booleanToTerraform(this._applyDefaultTheme),
      enable_default_theme_footer: cdktf.booleanToTerraform(this._enableDefaultThemeFooter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_group_options: {
        value: systemApplicationAccessControlGroupOptionsToHclTerraform(this._accessControlGroupOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemApplicationAccessControlGroupOptions",
      },
      access_control_role_type: {
        value: cdktf.stringToHclTerraform(this._accessControlRoleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply_default_theme: {
        value: cdktf.booleanToHclTerraform(this._applyDefaultTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_default_theme_footer: {
        value: cdktf.booleanToHclTerraform(this._enableDefaultThemeFooter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
