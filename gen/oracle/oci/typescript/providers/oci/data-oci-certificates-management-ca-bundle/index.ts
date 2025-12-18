// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/certificates_management_ca_bundle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCertificatesManagementCaBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/certificates_management_ca_bundle#ca_bundle_id DataOciCertificatesManagementCaBundle#ca_bundle_id}
  */
  readonly caBundleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/certificates_management_ca_bundle oci_certificates_management_ca_bundle}
*/
export class DataOciCertificatesManagementCaBundle extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_certificates_management_ca_bundle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCertificatesManagementCaBundle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCertificatesManagementCaBundle to import
  * @param importFromId The id of the existing DataOciCertificatesManagementCaBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/certificates_management_ca_bundle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCertificatesManagementCaBundle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_certificates_management_ca_bundle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/certificates_management_ca_bundle oci_certificates_management_ca_bundle} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCertificatesManagementCaBundleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCertificatesManagementCaBundleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_certificates_management_ca_bundle',
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
    this._caBundleId = config.caBundleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_bundle_id - computed: false, optional: false, required: true
  private _caBundleId?: string; 
  public get caBundleId() {
    return this.getStringAttribute('ca_bundle_id');
  }
  public set caBundleId(value: string) {
    this._caBundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleIdInput() {
    return this._caBundleId;
  }

  // ca_bundle_pem - computed: true, optional: false, required: false
  public get caBundlePem() {
    return this.getStringAttribute('ca_bundle_pem');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_bundle_id: cdktf.stringToTerraform(this._caBundleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_bundle_id: {
        value: cdktf.stringToHclTerraform(this._caBundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
