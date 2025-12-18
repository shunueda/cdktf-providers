// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_tenancy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIdentityTenancyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_tenancy#id DataOciIdentityTenancy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_tenancy#tenancy_id DataOciIdentityTenancy#tenancy_id}
  */
  readonly tenancyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_tenancy oci_identity_tenancy}
*/
export class DataOciIdentityTenancy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_tenancy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIdentityTenancy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIdentityTenancy to import
  * @param importFromId The id of the existing DataOciIdentityTenancy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_tenancy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIdentityTenancy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_tenancy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/identity_tenancy oci_identity_tenancy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIdentityTenancyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIdentityTenancyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_tenancy',
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
    this._id = config.id;
    this._tenancyId = config.tenancyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // home_region_key - computed: true, optional: false, required: false
  public get homeRegionKey() {
    return this.getStringAttribute('home_region_key');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tenancy_id - computed: false, optional: false, required: true
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // upi_idcs_compatibility_layer_endpoint - computed: true, optional: false, required: false
  public get upiIdcsCompatibilityLayerEndpoint() {
    return this.getStringAttribute('upi_idcs_compatibility_layer_endpoint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tenancy_id: cdktf.stringToTerraform(this._tenancyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenancy_id: {
        value: cdktf.stringToHclTerraform(this._tenancyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
