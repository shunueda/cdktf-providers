// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oce_oce_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOceOceInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oce_oce_instance#oce_instance_id DataOciOceOceInstance#oce_instance_id}
  */
  readonly oceInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oce_oce_instance oci_oce_oce_instance}
*/
export class DataOciOceOceInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_oce_oce_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOceOceInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOceOceInstance to import
  * @param importFromId The id of the existing DataOciOceOceInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oce_oce_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOceOceInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_oce_oce_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oce_oce_instance oci_oce_oce_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOceOceInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOceOceInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oce_oce_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._oceInstanceId = config.oceInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_features - computed: true, optional: false, required: false
  public get addOnFeatures() {
    return this.getListAttribute('add_on_features');
  }

  // admin_email - computed: true, optional: false, required: false
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }

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

  // dr_region - computed: true, optional: false, required: false
  public get drRegion() {
    return this.getStringAttribute('dr_region');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_access_token - computed: true, optional: false, required: false
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }

  // idcs_tenancy - computed: true, optional: false, required: false
  public get idcsTenancy() {
    return this.getStringAttribute('idcs_tenancy');
  }

  // instance_access_type - computed: true, optional: false, required: false
  public get instanceAccessType() {
    return this.getStringAttribute('instance_access_type');
  }

  // instance_license_type - computed: true, optional: false, required: false
  public get instanceLicenseType() {
    return this.getStringAttribute('instance_license_type');
  }

  // instance_usage_type - computed: true, optional: false, required: false
  public get instanceUsageType() {
    return this.getStringAttribute('instance_usage_type');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_storage_namespace - computed: true, optional: false, required: false
  public get objectStorageNamespace() {
    return this.getStringAttribute('object_storage_namespace');
  }

  // oce_instance_id - computed: false, optional: false, required: true
  private _oceInstanceId?: string; 
  public get oceInstanceId() {
    return this.getStringAttribute('oce_instance_id');
  }
  public set oceInstanceId(value: string) {
    this._oceInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oceInstanceIdInput() {
    return this._oceInstanceId;
  }

  // service - computed: true, optional: false, required: false
  private _service = new cdktf.StringMap(this, "service");
  public get service() {
    return this._service;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // tenancy_name - computed: true, optional: false, required: false
  public get tenancyName() {
    return this.getStringAttribute('tenancy_name');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upgrade_schedule - computed: true, optional: false, required: false
  public get upgradeSchedule() {
    return this.getStringAttribute('upgrade_schedule');
  }

  // waf_primary_domain - computed: true, optional: false, required: false
  public get wafPrimaryDomain() {
    return this.getStringAttribute('waf_primary_domain');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      oce_instance_id: cdktf.stringToTerraform(this._oceInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oce_instance_id: {
        value: cdktf.stringToHclTerraform(this._oceInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
