// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Represent the Feature Management permission. Possible values: readOnly, full, custom
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#accesstype PermissionGroup#accesstype}
  */
  readonly accesstype?: string;
  /**
  * Group members can create/update Configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_createorupdate_config PermissionGroup#can_createorupdate_config}
  */
  readonly canCreateorupdateConfig?: boolean | cdktf.IResolvable;
  /**
  * Group members can create/update Environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_createorupdate_environment PermissionGroup#can_createorupdate_environment}
  */
  readonly canCreateorupdateEnvironment?: boolean | cdktf.IResolvable;
  /**
  * Group members can create/update Segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_createorupdate_segment PermissionGroup#can_createorupdate_segment}
  */
  readonly canCreateorupdateSegment?: boolean | cdktf.IResolvable;
  /**
  * Group members can create/update Feature Flags and Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_createorupdate_setting PermissionGroup#can_createorupdate_setting}
  */
  readonly canCreateorupdateSetting?: boolean | cdktf.IResolvable;
  /**
  * Group members can create/update Tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_createorupdate_tag PermissionGroup#can_createorupdate_tag}
  */
  readonly canCreateorupdateTag?: boolean | cdktf.IResolvable;
  /**
  * Group members can delete Configs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_delete_config PermissionGroup#can_delete_config}
  */
  readonly canDeleteConfig?: boolean | cdktf.IResolvable;
  /**
  * Group members can delete Environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_delete_environment PermissionGroup#can_delete_environment}
  */
  readonly canDeleteEnvironment?: boolean | cdktf.IResolvable;
  /**
  * Group members can delete Segments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_delete_segment PermissionGroup#can_delete_segment}
  */
  readonly canDeleteSegment?: boolean | cdktf.IResolvable;
  /**
  * Group members can delete Feature Flags and Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_delete_setting PermissionGroup#can_delete_setting}
  */
  readonly canDeleteSetting?: boolean | cdktf.IResolvable;
  /**
  * Group members can delete Tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_delete_tag PermissionGroup#can_delete_tag}
  */
  readonly canDeleteTag?: boolean | cdktf.IResolvable;
  /**
  * Group members can disable two-factor authentication for other members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_disable_2fa PermissionGroup#can_disable_2fa}
  */
  readonly canDisable2Fa?: boolean | cdktf.IResolvable;
  /**
  * Group members can add and configure integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_manage_integrations PermissionGroup#can_manage_integrations}
  */
  readonly canManageIntegrations?: boolean | cdktf.IResolvable;
  /**
  * Group members can manage team members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_manage_members PermissionGroup#can_manage_members}
  */
  readonly canManageMembers?: boolean | cdktf.IResolvable;
  /**
  * Group members can update Product preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_manage_product_preferences PermissionGroup#can_manage_product_preferences}
  */
  readonly canManageProductPreferences?: boolean | cdktf.IResolvable;
  /**
  * Group members can create/update/delete Webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_manage_webhook PermissionGroup#can_manage_webhook}
  */
  readonly canManageWebhook?: boolean | cdktf.IResolvable;
  /**
  * Group members can rotate SDK keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_rotate_sdkkey PermissionGroup#can_rotate_sdkkey}
  */
  readonly canRotateSdkkey?: boolean | cdktf.IResolvable;
  /**
  * Group members can attach/detach Tags to Feature Flags and Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_tag_setting PermissionGroup#can_tag_setting}
  */
  readonly canTagSetting?: boolean | cdktf.IResolvable;
  /**
  * Group members can use the export/import feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_use_exportimport PermissionGroup#can_use_exportimport}
  */
  readonly canUseExportimport?: boolean | cdktf.IResolvable;
  /**
  * Group members has access to audit logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_view_product_auditlog PermissionGroup#can_view_product_auditlog}
  */
  readonly canViewProductAuditlog?: boolean | cdktf.IResolvable;
  /**
  * Group members has access to product statistics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_view_product_statistics PermissionGroup#can_view_product_statistics}
  */
  readonly canViewProductStatistics?: boolean | cdktf.IResolvable;
  /**
  * Group members has access to SDK keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#can_view_sdkkey PermissionGroup#can_view_sdkkey}
  */
  readonly canViewSdkkey?: boolean | cdktf.IResolvable;
  /**
  * The environment specific permissions map block. Keys are the Environment IDs and the values represent the environment specific Feature Management permission. Possible values: full, readOnly
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#environment_accesses PermissionGroup#environment_accesses}
  */
  readonly environmentAccesses?: { [key: string]: string };
  /**
  * The name of the Permission Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#name PermissionGroup#name}
  */
  readonly name: string;
  /**
  * Represent the environment specific Feature Management permission for new Environments. Possible values: full, readOnly, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#new_environment_accesstype PermissionGroup#new_environment_accesstype}
  */
  readonly newEnvironmentAccesstype?: string;
  /**
  * The ID of the Product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#product_id PermissionGroup#product_id}
  */
  readonly productId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group configcat_permission_group}
*/
export class PermissionGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat_permission_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PermissionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PermissionGroup to import
  * @param importFromId The id of the existing PermissionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PermissionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat_permission_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/resources/permission_group configcat_permission_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'configcat_permission_group',
      terraformGeneratorMetadata: {
        providerName: 'configcat',
        providerVersion: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accesstype = config.accesstype;
    this._canCreateorupdateConfig = config.canCreateorupdateConfig;
    this._canCreateorupdateEnvironment = config.canCreateorupdateEnvironment;
    this._canCreateorupdateSegment = config.canCreateorupdateSegment;
    this._canCreateorupdateSetting = config.canCreateorupdateSetting;
    this._canCreateorupdateTag = config.canCreateorupdateTag;
    this._canDeleteConfig = config.canDeleteConfig;
    this._canDeleteEnvironment = config.canDeleteEnvironment;
    this._canDeleteSegment = config.canDeleteSegment;
    this._canDeleteSetting = config.canDeleteSetting;
    this._canDeleteTag = config.canDeleteTag;
    this._canDisable2Fa = config.canDisable2Fa;
    this._canManageIntegrations = config.canManageIntegrations;
    this._canManageMembers = config.canManageMembers;
    this._canManageProductPreferences = config.canManageProductPreferences;
    this._canManageWebhook = config.canManageWebhook;
    this._canRotateSdkkey = config.canRotateSdkkey;
    this._canTagSetting = config.canTagSetting;
    this._canUseExportimport = config.canUseExportimport;
    this._canViewProductAuditlog = config.canViewProductAuditlog;
    this._canViewProductStatistics = config.canViewProductStatistics;
    this._canViewSdkkey = config.canViewSdkkey;
    this._environmentAccesses = config.environmentAccesses;
    this._name = config.name;
    this._newEnvironmentAccesstype = config.newEnvironmentAccesstype;
    this._productId = config.productId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accesstype - computed: true, optional: true, required: false
  private _accesstype?: string; 
  public get accesstype() {
    return this.getStringAttribute('accesstype');
  }
  public set accesstype(value: string) {
    this._accesstype = value;
  }
  public resetAccesstype() {
    this._accesstype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accesstypeInput() {
    return this._accesstype;
  }

  // can_createorupdate_config - computed: true, optional: true, required: false
  private _canCreateorupdateConfig?: boolean | cdktf.IResolvable; 
  public get canCreateorupdateConfig() {
    return this.getBooleanAttribute('can_createorupdate_config');
  }
  public set canCreateorupdateConfig(value: boolean | cdktf.IResolvable) {
    this._canCreateorupdateConfig = value;
  }
  public resetCanCreateorupdateConfig() {
    this._canCreateorupdateConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateorupdateConfigInput() {
    return this._canCreateorupdateConfig;
  }

  // can_createorupdate_environment - computed: true, optional: true, required: false
  private _canCreateorupdateEnvironment?: boolean | cdktf.IResolvable; 
  public get canCreateorupdateEnvironment() {
    return this.getBooleanAttribute('can_createorupdate_environment');
  }
  public set canCreateorupdateEnvironment(value: boolean | cdktf.IResolvable) {
    this._canCreateorupdateEnvironment = value;
  }
  public resetCanCreateorupdateEnvironment() {
    this._canCreateorupdateEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateorupdateEnvironmentInput() {
    return this._canCreateorupdateEnvironment;
  }

  // can_createorupdate_segment - computed: true, optional: true, required: false
  private _canCreateorupdateSegment?: boolean | cdktf.IResolvable; 
  public get canCreateorupdateSegment() {
    return this.getBooleanAttribute('can_createorupdate_segment');
  }
  public set canCreateorupdateSegment(value: boolean | cdktf.IResolvable) {
    this._canCreateorupdateSegment = value;
  }
  public resetCanCreateorupdateSegment() {
    this._canCreateorupdateSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateorupdateSegmentInput() {
    return this._canCreateorupdateSegment;
  }

  // can_createorupdate_setting - computed: true, optional: true, required: false
  private _canCreateorupdateSetting?: boolean | cdktf.IResolvable; 
  public get canCreateorupdateSetting() {
    return this.getBooleanAttribute('can_createorupdate_setting');
  }
  public set canCreateorupdateSetting(value: boolean | cdktf.IResolvable) {
    this._canCreateorupdateSetting = value;
  }
  public resetCanCreateorupdateSetting() {
    this._canCreateorupdateSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateorupdateSettingInput() {
    return this._canCreateorupdateSetting;
  }

  // can_createorupdate_tag - computed: true, optional: true, required: false
  private _canCreateorupdateTag?: boolean | cdktf.IResolvable; 
  public get canCreateorupdateTag() {
    return this.getBooleanAttribute('can_createorupdate_tag');
  }
  public set canCreateorupdateTag(value: boolean | cdktf.IResolvable) {
    this._canCreateorupdateTag = value;
  }
  public resetCanCreateorupdateTag() {
    this._canCreateorupdateTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateorupdateTagInput() {
    return this._canCreateorupdateTag;
  }

  // can_delete_config - computed: true, optional: true, required: false
  private _canDeleteConfig?: boolean | cdktf.IResolvable; 
  public get canDeleteConfig() {
    return this.getBooleanAttribute('can_delete_config');
  }
  public set canDeleteConfig(value: boolean | cdktf.IResolvable) {
    this._canDeleteConfig = value;
  }
  public resetCanDeleteConfig() {
    this._canDeleteConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDeleteConfigInput() {
    return this._canDeleteConfig;
  }

  // can_delete_environment - computed: true, optional: true, required: false
  private _canDeleteEnvironment?: boolean | cdktf.IResolvable; 
  public get canDeleteEnvironment() {
    return this.getBooleanAttribute('can_delete_environment');
  }
  public set canDeleteEnvironment(value: boolean | cdktf.IResolvable) {
    this._canDeleteEnvironment = value;
  }
  public resetCanDeleteEnvironment() {
    this._canDeleteEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDeleteEnvironmentInput() {
    return this._canDeleteEnvironment;
  }

  // can_delete_segment - computed: true, optional: true, required: false
  private _canDeleteSegment?: boolean | cdktf.IResolvable; 
  public get canDeleteSegment() {
    return this.getBooleanAttribute('can_delete_segment');
  }
  public set canDeleteSegment(value: boolean | cdktf.IResolvable) {
    this._canDeleteSegment = value;
  }
  public resetCanDeleteSegment() {
    this._canDeleteSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDeleteSegmentInput() {
    return this._canDeleteSegment;
  }

  // can_delete_setting - computed: true, optional: true, required: false
  private _canDeleteSetting?: boolean | cdktf.IResolvable; 
  public get canDeleteSetting() {
    return this.getBooleanAttribute('can_delete_setting');
  }
  public set canDeleteSetting(value: boolean | cdktf.IResolvable) {
    this._canDeleteSetting = value;
  }
  public resetCanDeleteSetting() {
    this._canDeleteSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDeleteSettingInput() {
    return this._canDeleteSetting;
  }

  // can_delete_tag - computed: true, optional: true, required: false
  private _canDeleteTag?: boolean | cdktf.IResolvable; 
  public get canDeleteTag() {
    return this.getBooleanAttribute('can_delete_tag');
  }
  public set canDeleteTag(value: boolean | cdktf.IResolvable) {
    this._canDeleteTag = value;
  }
  public resetCanDeleteTag() {
    this._canDeleteTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDeleteTagInput() {
    return this._canDeleteTag;
  }

  // can_disable_2fa - computed: true, optional: true, required: false
  private _canDisable2Fa?: boolean | cdktf.IResolvable; 
  public get canDisable2Fa() {
    return this.getBooleanAttribute('can_disable_2fa');
  }
  public set canDisable2Fa(value: boolean | cdktf.IResolvable) {
    this._canDisable2Fa = value;
  }
  public resetCanDisable2Fa() {
    this._canDisable2Fa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canDisable2FaInput() {
    return this._canDisable2Fa;
  }

  // can_manage_integrations - computed: true, optional: true, required: false
  private _canManageIntegrations?: boolean | cdktf.IResolvable; 
  public get canManageIntegrations() {
    return this.getBooleanAttribute('can_manage_integrations');
  }
  public set canManageIntegrations(value: boolean | cdktf.IResolvable) {
    this._canManageIntegrations = value;
  }
  public resetCanManageIntegrations() {
    this._canManageIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canManageIntegrationsInput() {
    return this._canManageIntegrations;
  }

  // can_manage_members - computed: true, optional: true, required: false
  private _canManageMembers?: boolean | cdktf.IResolvable; 
  public get canManageMembers() {
    return this.getBooleanAttribute('can_manage_members');
  }
  public set canManageMembers(value: boolean | cdktf.IResolvable) {
    this._canManageMembers = value;
  }
  public resetCanManageMembers() {
    this._canManageMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canManageMembersInput() {
    return this._canManageMembers;
  }

  // can_manage_product_preferences - computed: true, optional: true, required: false
  private _canManageProductPreferences?: boolean | cdktf.IResolvable; 
  public get canManageProductPreferences() {
    return this.getBooleanAttribute('can_manage_product_preferences');
  }
  public set canManageProductPreferences(value: boolean | cdktf.IResolvable) {
    this._canManageProductPreferences = value;
  }
  public resetCanManageProductPreferences() {
    this._canManageProductPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canManageProductPreferencesInput() {
    return this._canManageProductPreferences;
  }

  // can_manage_webhook - computed: true, optional: true, required: false
  private _canManageWebhook?: boolean | cdktf.IResolvable; 
  public get canManageWebhook() {
    return this.getBooleanAttribute('can_manage_webhook');
  }
  public set canManageWebhook(value: boolean | cdktf.IResolvable) {
    this._canManageWebhook = value;
  }
  public resetCanManageWebhook() {
    this._canManageWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canManageWebhookInput() {
    return this._canManageWebhook;
  }

  // can_rotate_sdkkey - computed: true, optional: true, required: false
  private _canRotateSdkkey?: boolean | cdktf.IResolvable; 
  public get canRotateSdkkey() {
    return this.getBooleanAttribute('can_rotate_sdkkey');
  }
  public set canRotateSdkkey(value: boolean | cdktf.IResolvable) {
    this._canRotateSdkkey = value;
  }
  public resetCanRotateSdkkey() {
    this._canRotateSdkkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canRotateSdkkeyInput() {
    return this._canRotateSdkkey;
  }

  // can_tag_setting - computed: true, optional: true, required: false
  private _canTagSetting?: boolean | cdktf.IResolvable; 
  public get canTagSetting() {
    return this.getBooleanAttribute('can_tag_setting');
  }
  public set canTagSetting(value: boolean | cdktf.IResolvable) {
    this._canTagSetting = value;
  }
  public resetCanTagSetting() {
    this._canTagSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canTagSettingInput() {
    return this._canTagSetting;
  }

  // can_use_exportimport - computed: true, optional: true, required: false
  private _canUseExportimport?: boolean | cdktf.IResolvable; 
  public get canUseExportimport() {
    return this.getBooleanAttribute('can_use_exportimport');
  }
  public set canUseExportimport(value: boolean | cdktf.IResolvable) {
    this._canUseExportimport = value;
  }
  public resetCanUseExportimport() {
    this._canUseExportimport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canUseExportimportInput() {
    return this._canUseExportimport;
  }

  // can_view_product_auditlog - computed: true, optional: true, required: false
  private _canViewProductAuditlog?: boolean | cdktf.IResolvable; 
  public get canViewProductAuditlog() {
    return this.getBooleanAttribute('can_view_product_auditlog');
  }
  public set canViewProductAuditlog(value: boolean | cdktf.IResolvable) {
    this._canViewProductAuditlog = value;
  }
  public resetCanViewProductAuditlog() {
    this._canViewProductAuditlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canViewProductAuditlogInput() {
    return this._canViewProductAuditlog;
  }

  // can_view_product_statistics - computed: true, optional: true, required: false
  private _canViewProductStatistics?: boolean | cdktf.IResolvable; 
  public get canViewProductStatistics() {
    return this.getBooleanAttribute('can_view_product_statistics');
  }
  public set canViewProductStatistics(value: boolean | cdktf.IResolvable) {
    this._canViewProductStatistics = value;
  }
  public resetCanViewProductStatistics() {
    this._canViewProductStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canViewProductStatisticsInput() {
    return this._canViewProductStatistics;
  }

  // can_view_sdkkey - computed: true, optional: true, required: false
  private _canViewSdkkey?: boolean | cdktf.IResolvable; 
  public get canViewSdkkey() {
    return this.getBooleanAttribute('can_view_sdkkey');
  }
  public set canViewSdkkey(value: boolean | cdktf.IResolvable) {
    this._canViewSdkkey = value;
  }
  public resetCanViewSdkkey() {
    this._canViewSdkkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canViewSdkkeyInput() {
    return this._canViewSdkkey;
  }

  // environment_accesses - computed: true, optional: true, required: false
  private _environmentAccesses?: { [key: string]: string }; 
  public get environmentAccesses() {
    return this.getStringMapAttribute('environment_accesses');
  }
  public set environmentAccesses(value: { [key: string]: string }) {
    this._environmentAccesses = value;
  }
  public resetEnvironmentAccesses() {
    this._environmentAccesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentAccessesInput() {
    return this._environmentAccesses;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // new_environment_accesstype - computed: true, optional: true, required: false
  private _newEnvironmentAccesstype?: string; 
  public get newEnvironmentAccesstype() {
    return this.getStringAttribute('new_environment_accesstype');
  }
  public set newEnvironmentAccesstype(value: string) {
    this._newEnvironmentAccesstype = value;
  }
  public resetNewEnvironmentAccesstype() {
    this._newEnvironmentAccesstype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newEnvironmentAccesstypeInput() {
    return this._newEnvironmentAccesstype;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accesstype: cdktf.stringToTerraform(this._accesstype),
      can_createorupdate_config: cdktf.booleanToTerraform(this._canCreateorupdateConfig),
      can_createorupdate_environment: cdktf.booleanToTerraform(this._canCreateorupdateEnvironment),
      can_createorupdate_segment: cdktf.booleanToTerraform(this._canCreateorupdateSegment),
      can_createorupdate_setting: cdktf.booleanToTerraform(this._canCreateorupdateSetting),
      can_createorupdate_tag: cdktf.booleanToTerraform(this._canCreateorupdateTag),
      can_delete_config: cdktf.booleanToTerraform(this._canDeleteConfig),
      can_delete_environment: cdktf.booleanToTerraform(this._canDeleteEnvironment),
      can_delete_segment: cdktf.booleanToTerraform(this._canDeleteSegment),
      can_delete_setting: cdktf.booleanToTerraform(this._canDeleteSetting),
      can_delete_tag: cdktf.booleanToTerraform(this._canDeleteTag),
      can_disable_2fa: cdktf.booleanToTerraform(this._canDisable2Fa),
      can_manage_integrations: cdktf.booleanToTerraform(this._canManageIntegrations),
      can_manage_members: cdktf.booleanToTerraform(this._canManageMembers),
      can_manage_product_preferences: cdktf.booleanToTerraform(this._canManageProductPreferences),
      can_manage_webhook: cdktf.booleanToTerraform(this._canManageWebhook),
      can_rotate_sdkkey: cdktf.booleanToTerraform(this._canRotateSdkkey),
      can_tag_setting: cdktf.booleanToTerraform(this._canTagSetting),
      can_use_exportimport: cdktf.booleanToTerraform(this._canUseExportimport),
      can_view_product_auditlog: cdktf.booleanToTerraform(this._canViewProductAuditlog),
      can_view_product_statistics: cdktf.booleanToTerraform(this._canViewProductStatistics),
      can_view_sdkkey: cdktf.booleanToTerraform(this._canViewSdkkey),
      environment_accesses: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentAccesses),
      name: cdktf.stringToTerraform(this._name),
      new_environment_accesstype: cdktf.stringToTerraform(this._newEnvironmentAccesstype),
      product_id: cdktf.stringToTerraform(this._productId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accesstype: {
        value: cdktf.stringToHclTerraform(this._accesstype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      can_createorupdate_config: {
        value: cdktf.booleanToHclTerraform(this._canCreateorupdateConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_createorupdate_environment: {
        value: cdktf.booleanToHclTerraform(this._canCreateorupdateEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_createorupdate_segment: {
        value: cdktf.booleanToHclTerraform(this._canCreateorupdateSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_createorupdate_setting: {
        value: cdktf.booleanToHclTerraform(this._canCreateorupdateSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_createorupdate_tag: {
        value: cdktf.booleanToHclTerraform(this._canCreateorupdateTag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_delete_config: {
        value: cdktf.booleanToHclTerraform(this._canDeleteConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_delete_environment: {
        value: cdktf.booleanToHclTerraform(this._canDeleteEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_delete_segment: {
        value: cdktf.booleanToHclTerraform(this._canDeleteSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_delete_setting: {
        value: cdktf.booleanToHclTerraform(this._canDeleteSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_delete_tag: {
        value: cdktf.booleanToHclTerraform(this._canDeleteTag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_disable_2fa: {
        value: cdktf.booleanToHclTerraform(this._canDisable2Fa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_manage_integrations: {
        value: cdktf.booleanToHclTerraform(this._canManageIntegrations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_manage_members: {
        value: cdktf.booleanToHclTerraform(this._canManageMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_manage_product_preferences: {
        value: cdktf.booleanToHclTerraform(this._canManageProductPreferences),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_manage_webhook: {
        value: cdktf.booleanToHclTerraform(this._canManageWebhook),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_rotate_sdkkey: {
        value: cdktf.booleanToHclTerraform(this._canRotateSdkkey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_tag_setting: {
        value: cdktf.booleanToHclTerraform(this._canTagSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_use_exportimport: {
        value: cdktf.booleanToHclTerraform(this._canUseExportimport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_view_product_auditlog: {
        value: cdktf.booleanToHclTerraform(this._canViewProductAuditlog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_view_product_statistics: {
        value: cdktf.booleanToHclTerraform(this._canViewProductStatistics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      can_view_sdkkey: {
        value: cdktf.booleanToHclTerraform(this._canViewSdkkey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_accesses: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentAccesses),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_environment_accesstype: {
        value: cdktf.stringToHclTerraform(this._newEnvironmentAccesstype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
