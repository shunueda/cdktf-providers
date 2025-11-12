// https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/permission_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConfigcatPermissionGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter the Permission Groups by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/permission_groups#name_filter_regex DataConfigcatPermissionGroups#name_filter_regex}
  */
  readonly nameFilterRegex?: string;
  /**
  * The ID of the Product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/permission_groups#product_id DataConfigcatPermissionGroups#product_id}
  */
  readonly productId: string;
}
export interface DataConfigcatPermissionGroupsPermissionGroups {
}

export function dataConfigcatPermissionGroupsPermissionGroupsToTerraform(struct?: DataConfigcatPermissionGroupsPermissionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConfigcatPermissionGroupsPermissionGroupsToHclTerraform(struct?: DataConfigcatPermissionGroupsPermissionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConfigcatPermissionGroupsPermissionGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataConfigcatPermissionGroupsPermissionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConfigcatPermissionGroupsPermissionGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accesstype - computed: true, optional: false, required: false
  public get accesstype() {
    return this.getStringAttribute('accesstype');
  }

  // can_createorupdate_config - computed: true, optional: false, required: false
  public get canCreateorupdateConfig() {
    return this.getBooleanAttribute('can_createorupdate_config');
  }

  // can_createorupdate_environment - computed: true, optional: false, required: false
  public get canCreateorupdateEnvironment() {
    return this.getBooleanAttribute('can_createorupdate_environment');
  }

  // can_createorupdate_segment - computed: true, optional: false, required: false
  public get canCreateorupdateSegment() {
    return this.getBooleanAttribute('can_createorupdate_segment');
  }

  // can_createorupdate_setting - computed: true, optional: false, required: false
  public get canCreateorupdateSetting() {
    return this.getBooleanAttribute('can_createorupdate_setting');
  }

  // can_createorupdate_tag - computed: true, optional: false, required: false
  public get canCreateorupdateTag() {
    return this.getBooleanAttribute('can_createorupdate_tag');
  }

  // can_delete_config - computed: true, optional: false, required: false
  public get canDeleteConfig() {
    return this.getBooleanAttribute('can_delete_config');
  }

  // can_delete_environment - computed: true, optional: false, required: false
  public get canDeleteEnvironment() {
    return this.getBooleanAttribute('can_delete_environment');
  }

  // can_delete_segment - computed: true, optional: false, required: false
  public get canDeleteSegment() {
    return this.getBooleanAttribute('can_delete_segment');
  }

  // can_delete_setting - computed: true, optional: false, required: false
  public get canDeleteSetting() {
    return this.getBooleanAttribute('can_delete_setting');
  }

  // can_delete_tag - computed: true, optional: false, required: false
  public get canDeleteTag() {
    return this.getBooleanAttribute('can_delete_tag');
  }

  // can_disable_2fa - computed: true, optional: false, required: false
  public get canDisable2Fa() {
    return this.getBooleanAttribute('can_disable_2fa');
  }

  // can_manage_integrations - computed: true, optional: false, required: false
  public get canManageIntegrations() {
    return this.getBooleanAttribute('can_manage_integrations');
  }

  // can_manage_members - computed: true, optional: false, required: false
  public get canManageMembers() {
    return this.getBooleanAttribute('can_manage_members');
  }

  // can_manage_product_preferences - computed: true, optional: false, required: false
  public get canManageProductPreferences() {
    return this.getBooleanAttribute('can_manage_product_preferences');
  }

  // can_manage_webhook - computed: true, optional: false, required: false
  public get canManageWebhook() {
    return this.getBooleanAttribute('can_manage_webhook');
  }

  // can_rotate_sdkkey - computed: true, optional: false, required: false
  public get canRotateSdkkey() {
    return this.getBooleanAttribute('can_rotate_sdkkey');
  }

  // can_tag_setting - computed: true, optional: false, required: false
  public get canTagSetting() {
    return this.getBooleanAttribute('can_tag_setting');
  }

  // can_use_exportimport - computed: true, optional: false, required: false
  public get canUseExportimport() {
    return this.getBooleanAttribute('can_use_exportimport');
  }

  // can_view_product_auditlog - computed: true, optional: false, required: false
  public get canViewProductAuditlog() {
    return this.getBooleanAttribute('can_view_product_auditlog');
  }

  // can_view_product_statistics - computed: true, optional: false, required: false
  public get canViewProductStatistics() {
    return this.getBooleanAttribute('can_view_product_statistics');
  }

  // can_view_sdkkey - computed: true, optional: false, required: false
  public get canViewSdkkey() {
    return this.getBooleanAttribute('can_view_sdkkey');
  }

  // environment_accesses - computed: true, optional: false, required: false
  private _environmentAccesses = new cdktf.StringMap(this, "environment_accesses");
  public get environmentAccesses() {
    return this._environmentAccesses;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // new_environment_accesstype - computed: true, optional: false, required: false
  public get newEnvironmentAccesstype() {
    return this.getStringAttribute('new_environment_accesstype');
  }

  // permission_group_id - computed: true, optional: false, required: false
  public get permissionGroupId() {
    return this.getNumberAttribute('permission_group_id');
  }
}

export class DataConfigcatPermissionGroupsPermissionGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataConfigcatPermissionGroupsPermissionGroupsOutputReference {
    return new DataConfigcatPermissionGroupsPermissionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/permission_groups configcat_permission_groups}
*/
export class DataConfigcatPermissionGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "configcat_permission_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConfigcatPermissionGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConfigcatPermissionGroups to import
  * @param importFromId The id of the existing DataConfigcatPermissionGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/permission_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConfigcatPermissionGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "configcat_permission_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/configcat/configcat/5.6.0/docs/data-sources/permission_groups configcat_permission_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConfigcatPermissionGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataConfigcatPermissionGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'configcat_permission_groups',
      terraformGeneratorMetadata: {
        providerName: 'configcat',
        providerVersion: '5.6.0',
        providerVersionConstraint: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._nameFilterRegex = config.nameFilterRegex;
    this._productId = config.productId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name_filter_regex - computed: false, optional: true, required: false
  private _nameFilterRegex?: string; 
  public get nameFilterRegex() {
    return this.getStringAttribute('name_filter_regex');
  }
  public set nameFilterRegex(value: string) {
    this._nameFilterRegex = value;
  }
  public resetNameFilterRegex() {
    this._nameFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterRegexInput() {
    return this._nameFilterRegex;
  }

  // permission_groups - computed: true, optional: false, required: false
  private _permissionGroups = new DataConfigcatPermissionGroupsPermissionGroupsList(this, "permission_groups", false);
  public get permissionGroups() {
    return this._permissionGroups;
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
      name_filter_regex: cdktf.stringToTerraform(this._nameFilterRegex),
      product_id: cdktf.stringToTerraform(this._productId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name_filter_regex: {
        value: cdktf.stringToHclTerraform(this._nameFilterRegex),
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
