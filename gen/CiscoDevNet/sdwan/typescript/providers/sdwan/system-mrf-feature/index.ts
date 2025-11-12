// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemMrfFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#description SystemMrfFeature#description}
  */
  readonly description?: string;
  /**
  * Enable migration mode to Multi-Region Fabric
  *   - Choices: `enabled`, `enabled-from-bgp-core`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#enable_migration_to_mrf SystemMrfFeature#enable_migration_to_mrf}
  */
  readonly enableMigrationToMrf?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#feature_profile_id SystemMrfFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Set BGP community during migration from BGP-core based network
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#migration_bgp_community SystemMrfFeature#migration_bgp_community}
  */
  readonly migrationBgpCommunity?: number;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#name SystemMrfFeature#name}
  */
  readonly name: string;
  /**
  * Set region ID
  *   - Range: `1`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#region_id SystemMrfFeature#region_id}
  */
  readonly regionId?: number;
  /**
  * Set the role for router
  *   - Choices: `edge-router`, `border-router`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#role SystemMrfFeature#role}
  */
  readonly role?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#role_variable SystemMrfFeature#role_variable}
  */
  readonly roleVariable?: string;
  /**
  * Set secondary region ID
  *   - Range: `1`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#secondary_region_id SystemMrfFeature#secondary_region_id}
  */
  readonly secondaryRegionId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#secondary_region_id_variable SystemMrfFeature#secondary_region_id_variable}
  */
  readonly secondaryRegionIdVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature sdwan_system_mrf_feature}
*/
export class SystemMrfFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_mrf_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemMrfFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemMrfFeature to import
  * @param importFromId The id of the existing SystemMrfFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemMrfFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_mrf_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_mrf_feature sdwan_system_mrf_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemMrfFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemMrfFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_mrf_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enableMigrationToMrf = config.enableMigrationToMrf;
    this._featureProfileId = config.featureProfileId;
    this._migrationBgpCommunity = config.migrationBgpCommunity;
    this._name = config.name;
    this._regionId = config.regionId;
    this._role = config.role;
    this._roleVariable = config.roleVariable;
    this._secondaryRegionId = config.secondaryRegionId;
    this._secondaryRegionIdVariable = config.secondaryRegionIdVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // enable_migration_to_mrf - computed: false, optional: true, required: false
  private _enableMigrationToMrf?: string; 
  public get enableMigrationToMrf() {
    return this.getStringAttribute('enable_migration_to_mrf');
  }
  public set enableMigrationToMrf(value: string) {
    this._enableMigrationToMrf = value;
  }
  public resetEnableMigrationToMrf() {
    this._enableMigrationToMrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMigrationToMrfInput() {
    return this._enableMigrationToMrf;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // migration_bgp_community - computed: false, optional: true, required: false
  private _migrationBgpCommunity?: number; 
  public get migrationBgpCommunity() {
    return this.getNumberAttribute('migration_bgp_community');
  }
  public set migrationBgpCommunity(value: number) {
    this._migrationBgpCommunity = value;
  }
  public resetMigrationBgpCommunity() {
    this._migrationBgpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationBgpCommunityInput() {
    return this._migrationBgpCommunity;
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

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // role - computed: false, optional: true, required: false
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

  // role_variable - computed: false, optional: true, required: false
  private _roleVariable?: string; 
  public get roleVariable() {
    return this.getStringAttribute('role_variable');
  }
  public set roleVariable(value: string) {
    this._roleVariable = value;
  }
  public resetRoleVariable() {
    this._roleVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleVariableInput() {
    return this._roleVariable;
  }

  // secondary_region_id - computed: false, optional: true, required: false
  private _secondaryRegionId?: number; 
  public get secondaryRegionId() {
    return this.getNumberAttribute('secondary_region_id');
  }
  public set secondaryRegionId(value: number) {
    this._secondaryRegionId = value;
  }
  public resetSecondaryRegionId() {
    this._secondaryRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRegionIdInput() {
    return this._secondaryRegionId;
  }

  // secondary_region_id_variable - computed: false, optional: true, required: false
  private _secondaryRegionIdVariable?: string; 
  public get secondaryRegionIdVariable() {
    return this.getStringAttribute('secondary_region_id_variable');
  }
  public set secondaryRegionIdVariable(value: string) {
    this._secondaryRegionIdVariable = value;
  }
  public resetSecondaryRegionIdVariable() {
    this._secondaryRegionIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryRegionIdVariableInput() {
    return this._secondaryRegionIdVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable_migration_to_mrf: cdktf.stringToTerraform(this._enableMigrationToMrf),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      migration_bgp_community: cdktf.numberToTerraform(this._migrationBgpCommunity),
      name: cdktf.stringToTerraform(this._name),
      region_id: cdktf.numberToTerraform(this._regionId),
      role: cdktf.stringToTerraform(this._role),
      role_variable: cdktf.stringToTerraform(this._roleVariable),
      secondary_region_id: cdktf.numberToTerraform(this._secondaryRegionId),
      secondary_region_id_variable: cdktf.stringToTerraform(this._secondaryRegionIdVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_migration_to_mrf: {
        value: cdktf.stringToHclTerraform(this._enableMigrationToMrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_bgp_community: {
        value: cdktf.numberToHclTerraform(this._migrationBgpCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_variable: {
        value: cdktf.stringToHclTerraform(this._roleVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_region_id: {
        value: cdktf.numberToHclTerraform(this._secondaryRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_region_id_variable: {
        value: cdktf.stringToHclTerraform(this._secondaryRegionIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
