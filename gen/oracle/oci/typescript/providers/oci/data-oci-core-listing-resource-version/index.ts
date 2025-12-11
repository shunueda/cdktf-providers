// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_listing_resource_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreListingResourceVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_listing_resource_version#id DataOciCoreListingResourceVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_listing_resource_version#listing_id DataOciCoreListingResourceVersion#listing_id}
  */
  readonly listingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_listing_resource_version#resource_version DataOciCoreListingResourceVersion#resource_version}
  */
  readonly resourceVersion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_listing_resource_version oci_core_listing_resource_version}
*/
export class DataOciCoreListingResourceVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_listing_resource_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreListingResourceVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreListingResourceVersion to import
  * @param importFromId The id of the existing DataOciCoreListingResourceVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_listing_resource_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreListingResourceVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_listing_resource_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_listing_resource_version oci_core_listing_resource_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreListingResourceVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreListingResourceVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_listing_resource_version',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._listingId = config.listingId;
    this._resourceVersion = config.resourceVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessible_ports - computed: true, optional: false, required: false
  public get accessiblePorts() {
    return this.getNumberListAttribute('accessible_ports');
  }

  // allowed_actions - computed: true, optional: false, required: false
  public get allowedActions() {
    return this.getListAttribute('allowed_actions');
  }

  // available_regions - computed: true, optional: false, required: false
  public get availableRegions() {
    return this.getListAttribute('available_regions');
  }

  // compatible_shapes - computed: true, optional: false, required: false
  public get compatibleShapes() {
    return this.getListAttribute('compatible_shapes');
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

  // listing_id - computed: false, optional: false, required: true
  private _listingId?: string; 
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }
  public set listingId(value: string) {
    this._listingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listingIdInput() {
    return this._listingId;
  }

  // listing_resource_id - computed: true, optional: false, required: false
  public get listingResourceId() {
    return this.getStringAttribute('listing_resource_id');
  }

  // listing_resource_version - computed: true, optional: false, required: false
  public get listingResourceVersion() {
    return this.getStringAttribute('listing_resource_version');
  }

  // resource_version - computed: false, optional: false, required: true
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // time_published - computed: true, optional: false, required: false
  public get timePublished() {
    return this.getStringAttribute('time_published');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      listing_id: cdktf.stringToTerraform(this._listingId),
      resource_version: cdktf.stringToTerraform(this._resourceVersion),
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
      listing_id: {
        value: cdktf.stringToHclTerraform(this._listingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_version: {
        value: cdktf.stringToHclTerraform(this._resourceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
