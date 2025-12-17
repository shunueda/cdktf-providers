// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/data-sources/gcp_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPolarisGcpPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC feature. Note that the feature must be given in the `EXAMPLE_FEATURE_NAME` style. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `GCP_SHARED_VPC_HOST` and `EXOCOMPUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/data-sources/gcp_permissions#feature DataPolarisGcpPermissions#feature}
  */
  readonly feature?: string;
  /**
  * RSC features. Possible values are `CLOUD_NATIVE_ARCHIVAL`, `CLOUD_NATIVE_PROTECTION`, `GCP_SHARED_VPC_HOST` and `EXOCOMPUTE`. **Deprecated:** use `feature` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/data-sources/gcp_permissions#features DataPolarisGcpPermissions#features}
  */
  readonly features?: string[];
  /**
  * Permission groups for the RSC feature. Possible values are `BASIC`, `ENCRYPTION`, `EXPORT_AND_RESTORE` and `FILE_LEVEL_RECOVERY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/data-sources/gcp_permissions#permission_groups DataPolarisGcpPermissions#permission_groups}
  */
  readonly permissionGroups?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/data-sources/gcp_permissions polaris_gcp_permissions}
*/
export class DataPolarisGcpPermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_gcp_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPolarisGcpPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPolarisGcpPermissions to import
  * @param importFromId The id of the existing DataPolarisGcpPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/data-sources/gcp_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPolarisGcpPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_gcp_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.2/docs/data-sources/gcp_permissions polaris_gcp_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPolarisGcpPermissionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPolarisGcpPermissionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'polaris_gcp_permissions',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
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

  // conditions - computed: true, optional: false, required: false
  public get conditions() {
    return cdktf.Fn.tolist(this.getListAttribute('conditions'));
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

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }

  // with_conditions - computed: true, optional: false, required: false
  public get withConditions() {
    return cdktf.Fn.tolist(this.getListAttribute('with_conditions'));
  }

  // without_conditions - computed: true, optional: false, required: false
  public get withoutConditions() {
    return cdktf.Fn.tolist(this.getListAttribute('without_conditions'));
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
