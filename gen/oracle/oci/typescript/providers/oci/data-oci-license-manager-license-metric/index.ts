// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLicenseManagerLicenseMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_metric#compartment_id DataOciLicenseManagerLicenseMetric#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_metric#id DataOciLicenseManagerLicenseMetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_metric#is_compartment_id_in_subtree DataOciLicenseManagerLicenseMetric#is_compartment_id_in_subtree}
  */
  readonly isCompartmentIdInSubtree?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_metric oci_license_manager_license_metric}
*/
export class DataOciLicenseManagerLicenseMetric extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_license_manager_license_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLicenseManagerLicenseMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLicenseManagerLicenseMetric to import
  * @param importFromId The id of the existing DataOciLicenseManagerLicenseMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLicenseManagerLicenseMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_license_manager_license_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/license_manager_license_metric oci_license_manager_license_metric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLicenseManagerLicenseMetricConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLicenseManagerLicenseMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_license_manager_license_metric',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._isCompartmentIdInSubtree = config.isCompartmentIdInSubtree;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // is_compartment_id_in_subtree - computed: false, optional: true, required: false
  private _isCompartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get isCompartmentIdInSubtree() {
    return this.getBooleanAttribute('is_compartment_id_in_subtree');
  }
  public set isCompartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._isCompartmentIdInSubtree = value;
  }
  public resetIsCompartmentIdInSubtree() {
    this._isCompartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompartmentIdInSubtreeInput() {
    return this._isCompartmentIdInSubtree;
  }

  // license_record_expiring_soon_count - computed: true, optional: false, required: false
  public get licenseRecordExpiringSoonCount() {
    return this.getNumberAttribute('license_record_expiring_soon_count');
  }

  // total_byol_instance_count - computed: true, optional: false, required: false
  public get totalByolInstanceCount() {
    return this.getNumberAttribute('total_byol_instance_count');
  }

  // total_license_included_instance_count - computed: true, optional: false, required: false
  public get totalLicenseIncludedInstanceCount() {
    return this.getNumberAttribute('total_license_included_instance_count');
  }

  // total_product_license_count - computed: true, optional: false, required: false
  public get totalProductLicenseCount() {
    return this.getNumberAttribute('total_product_license_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      is_compartment_id_in_subtree: cdktf.booleanToTerraform(this._isCompartmentIdInSubtree),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._isCompartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
