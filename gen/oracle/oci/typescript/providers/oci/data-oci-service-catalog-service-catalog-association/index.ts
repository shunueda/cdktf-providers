// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/service_catalog_service_catalog_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciServiceCatalogServiceCatalogAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/service_catalog_service_catalog_association#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociation#service_catalog_association_id}
  */
  readonly serviceCatalogAssociationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/service_catalog_service_catalog_association oci_service_catalog_service_catalog_association}
*/
export class DataOciServiceCatalogServiceCatalogAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_catalog_service_catalog_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciServiceCatalogServiceCatalogAssociation to import
  * @param importFromId The id of the existing DataOciServiceCatalogServiceCatalogAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/service_catalog_service_catalog_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciServiceCatalogServiceCatalogAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_catalog_service_catalog_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/service_catalog_service_catalog_association oci_service_catalog_service_catalog_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciServiceCatalogServiceCatalogAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciServiceCatalogServiceCatalogAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_catalog_service_catalog_association',
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
    this._serviceCatalogAssociationId = config.serviceCatalogAssociationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_catalog_association_id - computed: false, optional: false, required: true
  private _serviceCatalogAssociationId?: string; 
  public get serviceCatalogAssociationId() {
    return this.getStringAttribute('service_catalog_association_id');
  }
  public set serviceCatalogAssociationId(value: string) {
    this._serviceCatalogAssociationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCatalogAssociationIdInput() {
    return this._serviceCatalogAssociationId;
  }

  // service_catalog_id - computed: true, optional: false, required: false
  public get serviceCatalogId() {
    return this.getStringAttribute('service_catalog_id');
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
      service_catalog_association_id: cdktf.stringToTerraform(this._serviceCatalogAssociationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      service_catalog_association_id: {
        value: cdktf.stringToHclTerraform(this._serviceCatalogAssociationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
