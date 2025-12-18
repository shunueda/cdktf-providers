// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_security_recipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudGuardSecurityRecipeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_security_recipe#security_recipe_id DataOciCloudGuardSecurityRecipe#security_recipe_id}
  */
  readonly securityRecipeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_security_recipe oci_cloud_guard_security_recipe}
*/
export class DataOciCloudGuardSecurityRecipe extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_security_recipe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudGuardSecurityRecipe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudGuardSecurityRecipe to import
  * @param importFromId The id of the existing DataOciCloudGuardSecurityRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_security_recipe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudGuardSecurityRecipe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_guard_security_recipe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_security_recipe oci_cloud_guard_security_recipe} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudGuardSecurityRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudGuardSecurityRecipeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_security_recipe',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._securityRecipeId = config.securityRecipeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // security_policies - computed: true, optional: false, required: false
  public get securityPolicies() {
    return this.getListAttribute('security_policies');
  }

  // security_recipe_id - computed: false, optional: false, required: true
  private _securityRecipeId?: string; 
  public get securityRecipeId() {
    return this.getStringAttribute('security_recipe_id');
  }
  public set securityRecipeId(value: string) {
    this._securityRecipeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRecipeIdInput() {
    return this._securityRecipeId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      security_recipe_id: cdktf.stringToTerraform(this._securityRecipeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      security_recipe_id: {
        value: cdktf.stringToHclTerraform(this._securityRecipeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
