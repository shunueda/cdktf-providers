// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/service_catalog_private_application_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciServiceCatalogPrivateApplicationPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/service_catalog_private_application_package#id DataOciServiceCatalogPrivateApplicationPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/service_catalog_private_application_package#private_application_package_id DataOciServiceCatalogPrivateApplicationPackage#private_application_package_id}
  */
  readonly privateApplicationPackageId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/service_catalog_private_application_package oci_service_catalog_private_application_package}
*/
export class DataOciServiceCatalogPrivateApplicationPackage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_catalog_private_application_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciServiceCatalogPrivateApplicationPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciServiceCatalogPrivateApplicationPackage to import
  * @param importFromId The id of the existing DataOciServiceCatalogPrivateApplicationPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/service_catalog_private_application_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciServiceCatalogPrivateApplicationPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_catalog_private_application_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/service_catalog_private_application_package oci_service_catalog_private_application_package} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciServiceCatalogPrivateApplicationPackageConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciServiceCatalogPrivateApplicationPackageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_catalog_private_application_package',
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
    this._privateApplicationPackageId = config.privateApplicationPackageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_url - computed: true, optional: false, required: false
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // private_application_id - computed: true, optional: false, required: false
  public get privateApplicationId() {
    return this.getStringAttribute('private_application_id');
  }

  // private_application_package_id - computed: false, optional: false, required: true
  private _privateApplicationPackageId?: string; 
  public get privateApplicationPackageId() {
    return this.getStringAttribute('private_application_package_id');
  }
  public set privateApplicationPackageId(value: string) {
    this._privateApplicationPackageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateApplicationPackageIdInput() {
    return this._privateApplicationPackageId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      private_application_package_id: cdktf.stringToTerraform(this._privateApplicationPackageId),
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
      private_application_package_id: {
        value: cdktf.stringToHclTerraform(this._privateApplicationPackageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
