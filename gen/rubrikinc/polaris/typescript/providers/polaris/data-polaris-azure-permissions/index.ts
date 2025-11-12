// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPolarisAzurePermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC feature. Note that the feature must be given in the `EXAMPLE_FEATURE_NAME` style. Possible values are `AZURE_SQL_DB_PROTECTION`, `AZURE_SQL_MI_PROTECTION`,  `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_ARCHIVAL_ENCRYPTION`, `CLOUD_NATIVE_BLOB_PROTECTION`, `CLOUD_NATIVE_PROTECTION`, `SERVERS_AND_APPS` and `EXOCOMPUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_permissions#feature DataPolarisAzurePermissions#feature}
  */
  readonly feature?: string;
  /**
  * RSC features. Possible values are `AZURE_SQL_DB_PROTECTION`, `AZURE_SQL_MI_PROTECTION`, `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_ARCHIVAL_ENCRYPTION`, `CLOUD_NATIVE_BLOB_PROTECTION`, `CLOUD_NATIVE_PROTECTION`, `SERVERS_AND_APPS`  and `EXOCOMPUTE`. **Deprecated:** use `feature` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_permissions#features DataPolarisAzurePermissions#features}
  */
  readonly features?: string[];
  /**
  * Permission groups for the RSC feature. Possible values are `BASIC`, `EXPORT_AND_RESTORE`, `FILE_LEVEL_RECOVERY`, `SNAPSHOT_PRIVATE_ACCESS`, `PRIVATE_ENDPOINTS`, `CUSTOMER_MANAGED_BASIC`, `ENCRYPTION`, `SQL_ARCHIVAL`, `RECOVERY`, `CLOUD_CLUSTER_ES` and `BACKUP_V2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_permissions#permission_groups DataPolarisAzurePermissions#permission_groups}
  */
  readonly permissionGroups?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_permissions polaris_azure_permissions}
*/
export class DataPolarisAzurePermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_azure_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPolarisAzurePermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPolarisAzurePermissions to import
  * @param importFromId The id of the existing DataPolarisAzurePermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPolarisAzurePermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_azure_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/data-sources/azure_permissions polaris_azure_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPolarisAzurePermissionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPolarisAzurePermissionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'polaris_azure_permissions',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._feature = config.feature;
    this._features = config.features;
    this._permissionGroups = config.permissionGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getListAttribute('actions');
  }

  // data_actions - computed: true, optional: false, required: false
  public get dataActions() {
    return this.getListAttribute('data_actions');
  }

  // feature - computed: false, optional: true, required: false
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  public resetFeature() {
    this._feature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // features - computed: false, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return cdktf.Fn.tolist(this.getListAttribute('features'));
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // not_actions - computed: true, optional: false, required: false
  public get notActions() {
    return this.getListAttribute('not_actions');
  }

  // not_data_actions - computed: true, optional: false, required: false
  public get notDataActions() {
    return this.getListAttribute('not_data_actions');
  }

  // permission_groups - computed: false, optional: true, required: false
  private _permissionGroups?: string[]; 
  public get permissionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('permission_groups'));
  }
  public set permissionGroups(value: string[]) {
    this._permissionGroups = value;
  }
  public resetPermissionGroups() {
    this._permissionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionGroupsInput() {
    return this._permissionGroups;
  }

  // resource_group_actions - computed: true, optional: false, required: false
  public get resourceGroupActions() {
    return this.getListAttribute('resource_group_actions');
  }

  // resource_group_data_actions - computed: true, optional: false, required: false
  public get resourceGroupDataActions() {
    return this.getListAttribute('resource_group_data_actions');
  }

  // resource_group_not_actions - computed: true, optional: false, required: false
  public get resourceGroupNotActions() {
    return this.getListAttribute('resource_group_not_actions');
  }

  // resource_group_not_data_actions - computed: true, optional: false, required: false
  public get resourceGroupNotDataActions() {
    return this.getListAttribute('resource_group_not_data_actions');
  }

  // subscription_actions - computed: true, optional: false, required: false
  public get subscriptionActions() {
    return this.getListAttribute('subscription_actions');
  }

  // subscription_data_actions - computed: true, optional: false, required: false
  public get subscriptionDataActions() {
    return this.getListAttribute('subscription_data_actions');
  }

  // subscription_not_actions - computed: true, optional: false, required: false
  public get subscriptionNotActions() {
    return this.getListAttribute('subscription_not_actions');
  }

  // subscription_not_data_actions - computed: true, optional: false, required: false
  public get subscriptionNotDataActions() {
    return this.getListAttribute('subscription_not_data_actions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature: cdktf.stringToTerraform(this._feature),
      features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._features),
      permission_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissionGroups),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature: {
        value: cdktf.stringToHclTerraform(this._feature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._features),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      permission_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissionGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
