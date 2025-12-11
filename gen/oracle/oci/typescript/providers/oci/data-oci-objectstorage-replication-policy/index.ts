// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/objectstorage_replication_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciObjectstorageReplicationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/objectstorage_replication_policy#bucket DataOciObjectstorageReplicationPolicy#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/objectstorage_replication_policy#namespace DataOciObjectstorageReplicationPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/objectstorage_replication_policy#replication_id DataOciObjectstorageReplicationPolicy#replication_id}
  */
  readonly replicationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/objectstorage_replication_policy oci_objectstorage_replication_policy}
*/
export class DataOciObjectstorageReplicationPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_objectstorage_replication_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciObjectstorageReplicationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciObjectstorageReplicationPolicy to import
  * @param importFromId The id of the existing DataOciObjectstorageReplicationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/objectstorage_replication_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciObjectstorageReplicationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_objectstorage_replication_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/objectstorage_replication_policy oci_objectstorage_replication_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciObjectstorageReplicationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciObjectstorageReplicationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_replication_policy',
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
    this._bucket = config.bucket;
    this._namespace = config.namespace;
    this._replicationId = config.replicationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // delete_object_in_destination_bucket - computed: true, optional: false, required: false
  public get deleteObjectInDestinationBucket() {
    return this.getStringAttribute('delete_object_in_destination_bucket');
  }

  // destination_bucket_name - computed: true, optional: false, required: false
  public get destinationBucketName() {
    return this.getStringAttribute('destination_bucket_name');
  }

  // destination_region_name - computed: true, optional: false, required: false
  public get destinationRegionName() {
    return this.getStringAttribute('destination_region_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // replication_id - computed: false, optional: false, required: true
  private _replicationId?: string; 
  public get replicationId() {
    return this.getStringAttribute('replication_id');
  }
  public set replicationId(value: string) {
    this._replicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationIdInput() {
    return this._replicationId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_sync - computed: true, optional: false, required: false
  public get timeLastSync() {
    return this.getStringAttribute('time_last_sync');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      namespace: cdktf.stringToTerraform(this._namespace),
      replication_id: cdktf.stringToTerraform(this._replicationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_id: {
        value: cdktf.stringToHclTerraform(this._replicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
