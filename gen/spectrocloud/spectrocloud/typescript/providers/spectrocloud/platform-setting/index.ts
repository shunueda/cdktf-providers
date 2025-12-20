// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables automatic cluster role binding for clusters deployed under a tenant or project. Setting it to `false` disables automatic cluster role binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#automatic_cluster_role_binding PlatformSetting#automatic_cluster_role_binding}
  */
  readonly automaticClusterRoleBinding?: boolean | cdktf.IResolvable;
  /**
  * Enables automatic remediation for unhealthy nodes in Palette-provisioned clusters by replacing them with new nodes. Disabling this feature prevents auto-remediation. Not applicable to `EKS`, `AKS`, or `TKE` clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#cluster_auto_remediation PlatformSetting#cluster_auto_remediation}
  */
  readonly clusterAutoRemediation?: boolean | cdktf.IResolvable;
  /**
  * Defines the scope of the platform setting. Valid values are `project` or `tenant`. By default, it is set to `tenant`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#context PlatformSetting#context}
  */
  readonly context?: string;
  /**
  * Enables automatic remediation. set only with `project' context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#enable_auto_remediation PlatformSetting#enable_auto_remediation}
  */
  readonly enableAutoRemediation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#id PlatformSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allows users in this tenant to use non-FIPS-compliant addon packs when creating cluster profiles. The `non_fips_addon_pack` only supported in palette vertex environment. Allowed only for `tenant` context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#non_fips_addon_pack PlatformSetting#non_fips_addon_pack}
  */
  readonly nonFipsAddonPack?: boolean | cdktf.IResolvable;
  /**
  * Allows users in this tenant to import clusters, but the imported clusters may not be FIPS-compliant.  The `non_fips_cluster_import` only supported in palette vertex environment. Allowed only for `tenant` context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#non_fips_cluster_import PlatformSetting#non_fips_cluster_import}
  */
  readonly nonFipsClusterImport?: boolean | cdktf.IResolvable;
  /**
  * Allows users in this tenant to access non-FIPS-compliant features such as backup, restore, and scans. The `non_fips_features` only supported in palette vertex environment. Allowed only for `tenant` context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#non_fips_features PlatformSetting#non_fips_features}
  */
  readonly nonFipsFeatures?: boolean | cdktf.IResolvable;
  /**
  * Controls automatic upgrades for Palette components and agents in clusters deployed under a tenant or project. Setting it to `lock` disables automatic upgrades, while `unlock` (default) allows automatic upgrades.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#pause_agent_upgrades PlatformSetting#pause_agent_upgrades}
  */
  readonly pauseAgentUpgrades?: string;
  /**
  * Specifies the duration (in minutes) of inactivity before a user is automatically logged out. The default is 240 minutes allowed in Palette. Allowed only for `tenant` context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#session_timeout PlatformSetting#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * login_banner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#login_banner PlatformSetting#login_banner}
  */
  readonly loginBanner?: PlatformSettingLoginBanner;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#timeouts PlatformSetting#timeouts}
  */
  readonly timeouts?: PlatformSettingTimeouts;
}
export interface PlatformSettingLoginBanner {
  /**
  * Specify the message displayed in the login banner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#message PlatformSetting#message}
  */
  readonly message: string;
  /**
  * Specify the title of the login banner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#title PlatformSetting#title}
  */
  readonly title: string;
}

export function platformSettingLoginBannerToTerraform(struct?: PlatformSettingLoginBannerOutputReference | PlatformSettingLoginBanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function platformSettingLoginBannerToHclTerraform(struct?: PlatformSettingLoginBannerOutputReference | PlatformSettingLoginBanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSettingLoginBannerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformSettingLoginBanner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSettingLoginBanner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
      this._title = value.title;
    }
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface PlatformSettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#create PlatformSetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#delete PlatformSetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#update PlatformSetting#update}
  */
  readonly update?: string;
}

export function platformSettingTimeoutsToTerraform(struct?: PlatformSettingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function platformSettingTimeoutsToHclTerraform(struct?: PlatformSettingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformSettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformSettingTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformSettingTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting spectrocloud_platform_setting}
*/
export class PlatformSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_platform_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformSetting to import
  * @param importFromId The id of the existing PlatformSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_platform_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.2/docs/resources/platform_setting spectrocloud_platform_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PlatformSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_platform_setting',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.2',
        providerVersionConstraint: '0.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticClusterRoleBinding = config.automaticClusterRoleBinding;
    this._clusterAutoRemediation = config.clusterAutoRemediation;
    this._context = config.context;
    this._enableAutoRemediation = config.enableAutoRemediation;
    this._id = config.id;
    this._nonFipsAddonPack = config.nonFipsAddonPack;
    this._nonFipsClusterImport = config.nonFipsClusterImport;
    this._nonFipsFeatures = config.nonFipsFeatures;
    this._pauseAgentUpgrades = config.pauseAgentUpgrades;
    this._sessionTimeout = config.sessionTimeout;
    this._loginBanner.internalValue = config.loginBanner;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_cluster_role_binding - computed: false, optional: true, required: false
  private _automaticClusterRoleBinding?: boolean | cdktf.IResolvable; 
  public get automaticClusterRoleBinding() {
    return this.getBooleanAttribute('automatic_cluster_role_binding');
  }
  public set automaticClusterRoleBinding(value: boolean | cdktf.IResolvable) {
    this._automaticClusterRoleBinding = value;
  }
  public resetAutomaticClusterRoleBinding() {
    this._automaticClusterRoleBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticClusterRoleBindingInput() {
    return this._automaticClusterRoleBinding;
  }

  // cluster_auto_remediation - computed: false, optional: true, required: false
  private _clusterAutoRemediation?: boolean | cdktf.IResolvable; 
  public get clusterAutoRemediation() {
    return this.getBooleanAttribute('cluster_auto_remediation');
  }
  public set clusterAutoRemediation(value: boolean | cdktf.IResolvable) {
    this._clusterAutoRemediation = value;
  }
  public resetClusterAutoRemediation() {
    this._clusterAutoRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAutoRemediationInput() {
    return this._clusterAutoRemediation;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // enable_auto_remediation - computed: false, optional: true, required: false
  private _enableAutoRemediation?: boolean | cdktf.IResolvable; 
  public get enableAutoRemediation() {
    return this.getBooleanAttribute('enable_auto_remediation');
  }
  public set enableAutoRemediation(value: boolean | cdktf.IResolvable) {
    this._enableAutoRemediation = value;
  }
  public resetEnableAutoRemediation() {
    this._enableAutoRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoRemediationInput() {
    return this._enableAutoRemediation;
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

  // non_fips_addon_pack - computed: false, optional: true, required: false
  private _nonFipsAddonPack?: boolean | cdktf.IResolvable; 
  public get nonFipsAddonPack() {
    return this.getBooleanAttribute('non_fips_addon_pack');
  }
  public set nonFipsAddonPack(value: boolean | cdktf.IResolvable) {
    this._nonFipsAddonPack = value;
  }
  public resetNonFipsAddonPack() {
    this._nonFipsAddonPack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonFipsAddonPackInput() {
    return this._nonFipsAddonPack;
  }

  // non_fips_cluster_import - computed: false, optional: true, required: false
  private _nonFipsClusterImport?: boolean | cdktf.IResolvable; 
  public get nonFipsClusterImport() {
    return this.getBooleanAttribute('non_fips_cluster_import');
  }
  public set nonFipsClusterImport(value: boolean | cdktf.IResolvable) {
    this._nonFipsClusterImport = value;
  }
  public resetNonFipsClusterImport() {
    this._nonFipsClusterImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonFipsClusterImportInput() {
    return this._nonFipsClusterImport;
  }

  // non_fips_features - computed: false, optional: true, required: false
  private _nonFipsFeatures?: boolean | cdktf.IResolvable; 
  public get nonFipsFeatures() {
    return this.getBooleanAttribute('non_fips_features');
  }
  public set nonFipsFeatures(value: boolean | cdktf.IResolvable) {
    this._nonFipsFeatures = value;
  }
  public resetNonFipsFeatures() {
    this._nonFipsFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonFipsFeaturesInput() {
    return this._nonFipsFeatures;
  }

  // pause_agent_upgrades - computed: false, optional: true, required: false
  private _pauseAgentUpgrades?: string; 
  public get pauseAgentUpgrades() {
    return this.getStringAttribute('pause_agent_upgrades');
  }
  public set pauseAgentUpgrades(value: string) {
    this._pauseAgentUpgrades = value;
  }
  public resetPauseAgentUpgrades() {
    this._pauseAgentUpgrades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseAgentUpgradesInput() {
    return this._pauseAgentUpgrades;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // login_banner - computed: false, optional: true, required: false
  private _loginBanner = new PlatformSettingLoginBannerOutputReference(this, "login_banner");
  public get loginBanner() {
    return this._loginBanner;
  }
  public putLoginBanner(value: PlatformSettingLoginBanner) {
    this._loginBanner.internalValue = value;
  }
  public resetLoginBanner() {
    this._loginBanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginBannerInput() {
    return this._loginBanner.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PlatformSettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PlatformSettingTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_cluster_role_binding: cdktf.booleanToTerraform(this._automaticClusterRoleBinding),
      cluster_auto_remediation: cdktf.booleanToTerraform(this._clusterAutoRemediation),
      context: cdktf.stringToTerraform(this._context),
      enable_auto_remediation: cdktf.booleanToTerraform(this._enableAutoRemediation),
      id: cdktf.stringToTerraform(this._id),
      non_fips_addon_pack: cdktf.booleanToTerraform(this._nonFipsAddonPack),
      non_fips_cluster_import: cdktf.booleanToTerraform(this._nonFipsClusterImport),
      non_fips_features: cdktf.booleanToTerraform(this._nonFipsFeatures),
      pause_agent_upgrades: cdktf.stringToTerraform(this._pauseAgentUpgrades),
      session_timeout: cdktf.numberToTerraform(this._sessionTimeout),
      login_banner: platformSettingLoginBannerToTerraform(this._loginBanner.internalValue),
      timeouts: platformSettingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_cluster_role_binding: {
        value: cdktf.booleanToHclTerraform(this._automaticClusterRoleBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_auto_remediation: {
        value: cdktf.booleanToHclTerraform(this._clusterAutoRemediation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auto_remediation: {
        value: cdktf.booleanToHclTerraform(this._enableAutoRemediation),
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
      non_fips_addon_pack: {
        value: cdktf.booleanToHclTerraform(this._nonFipsAddonPack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      non_fips_cluster_import: {
        value: cdktf.booleanToHclTerraform(this._nonFipsClusterImport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      non_fips_features: {
        value: cdktf.booleanToHclTerraform(this._nonFipsFeatures),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pause_agent_upgrades: {
        value: cdktf.stringToHclTerraform(this._pauseAgentUpgrades),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_banner: {
        value: platformSettingLoginBannerToHclTerraform(this._loginBanner.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformSettingLoginBannerList",
      },
      timeouts: {
        value: platformSettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlatformSettingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
