// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLicenseManagerLicenseRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_record#license_record_id DataOciLicenseManagerLicenseRecord#license_record_id}
  */
  readonly licenseRecordId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_record oci_license_manager_license_record}
*/
export class DataOciLicenseManagerLicenseRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_license_manager_license_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLicenseManagerLicenseRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLicenseManagerLicenseRecord to import
  * @param importFromId The id of the existing DataOciLicenseManagerLicenseRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLicenseManagerLicenseRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_license_manager_license_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_record oci_license_manager_license_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLicenseManagerLicenseRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLicenseManagerLicenseRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_license_manager_license_record',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._licenseRecordId = config.licenseRecordId;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
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

  // is_perpetual - computed: true, optional: false, required: false
  public get isPerpetual() {
    return this.getBooleanAttribute('is_perpetual');
  }

  // is_unlimited - computed: true, optional: false, required: false
  public get isUnlimited() {
    return this.getBooleanAttribute('is_unlimited');
  }

  // license_count - computed: true, optional: false, required: false
  public get licenseCount() {
    return this.getNumberAttribute('license_count');
  }

  // license_record_id - computed: false, optional: false, required: true
  private _licenseRecordId?: string; 
  public get licenseRecordId() {
    return this.getStringAttribute('license_record_id');
  }
  public set licenseRecordId(value: string) {
    this._licenseRecordId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseRecordIdInput() {
    return this._licenseRecordId;
  }

  // license_unit - computed: true, optional: false, required: false
  public get licenseUnit() {
    return this.getStringAttribute('license_unit');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // product_license - computed: true, optional: false, required: false
  public get productLicense() {
    return this.getStringAttribute('product_license');
  }

  // product_license_id - computed: true, optional: false, required: false
  public get productLicenseId() {
    return this.getStringAttribute('product_license_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // support_end_date - computed: true, optional: false, required: false
  public get supportEndDate() {
    return this.getStringAttribute('support_end_date');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
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
      license_record_id: cdktf.stringToTerraform(this._licenseRecordId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      license_record_id: {
        value: cdktf.stringToHclTerraform(this._licenseRecordId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
