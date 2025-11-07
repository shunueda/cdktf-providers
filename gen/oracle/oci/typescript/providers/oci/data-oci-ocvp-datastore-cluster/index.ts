// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ocvp_datastore_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOcvpDatastoreClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ocvp_datastore_cluster#datastore_cluster_id DataOciOcvpDatastoreCluster#datastore_cluster_id}
  */
  readonly datastoreClusterId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ocvp_datastore_cluster oci_ocvp_datastore_cluster}
*/
export class DataOciOcvpDatastoreCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ocvp_datastore_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOcvpDatastoreCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOcvpDatastoreCluster to import
  * @param importFromId The id of the existing DataOciOcvpDatastoreCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ocvp_datastore_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOcvpDatastoreCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ocvp_datastore_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ocvp_datastore_cluster oci_ocvp_datastore_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOcvpDatastoreClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOcvpDatastoreClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ocvp_datastore_cluster',
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
    this._datastoreClusterId = config.datastoreClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_in_gbs - computed: true, optional: false, required: false
  public get capacityInGbs() {
    return this.getNumberAttribute('capacity_in_gbs');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // datastore_cluster_id - computed: false, optional: false, required: true
  private _datastoreClusterId?: string; 
  public get datastoreClusterId() {
    return this.getStringAttribute('datastore_cluster_id');
  }
  public set datastoreClusterId(value: string) {
    this._datastoreClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreClusterIdInput() {
    return this._datastoreClusterId;
  }

  // datastore_cluster_type - computed: true, optional: false, required: false
  public get datastoreClusterType() {
    return this.getStringAttribute('datastore_cluster_type');
  }

  // datastore_ids - computed: true, optional: false, required: false
  public get datastoreIds() {
    return this.getListAttribute('datastore_ids');
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

  // esxi_host_ids - computed: true, optional: false, required: false
  public get esxiHostIds() {
    return this.getListAttribute('esxi_host_ids');
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

  // sddc_id - computed: true, optional: false, required: false
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      datastore_cluster_id: cdktf.stringToTerraform(this._datastoreClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datastore_cluster_id: {
        value: cdktf.stringToHclTerraform(this._datastoreClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
