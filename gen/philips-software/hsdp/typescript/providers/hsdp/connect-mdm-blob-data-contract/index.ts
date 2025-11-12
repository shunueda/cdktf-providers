// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmBlobDataContractConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract#bucket_id ConnectMdmBlobDataContract#bucket_id}
  */
  readonly bucketId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract#cross_region_replication_enabled ConnectMdmBlobDataContract#cross_region_replication_enabled}
  */
  readonly crossRegionReplicationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract#data_type_id ConnectMdmBlobDataContract#data_type_id}
  */
  readonly dataTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract#id ConnectMdmBlobDataContract#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract#logging_enabled ConnectMdmBlobDataContract#logging_enabled}
  */
  readonly loggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract#name ConnectMdmBlobDataContract#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract#root_path_in_bucket ConnectMdmBlobDataContract#root_path_in_bucket}
  */
  readonly rootPathInBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract#storage_class_id ConnectMdmBlobDataContract#storage_class_id}
  */
  readonly storageClassId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract hsdp_connect_mdm_blob_data_contract}
*/
export class ConnectMdmBlobDataContract extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_blob_data_contract";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmBlobDataContract resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmBlobDataContract to import
  * @param importFromId The id of the existing ConnectMdmBlobDataContract that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmBlobDataContract to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_blob_data_contract", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_blob_data_contract hsdp_connect_mdm_blob_data_contract} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmBlobDataContractConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmBlobDataContractConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_blob_data_contract',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketId = config.bucketId;
    this._crossRegionReplicationEnabled = config.crossRegionReplicationEnabled;
    this._dataTypeId = config.dataTypeId;
    this._id = config.id;
    this._loggingEnabled = config.loggingEnabled;
    this._name = config.name;
    this._rootPathInBucket = config.rootPathInBucket;
    this._storageClassId = config.storageClassId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // cross_region_replication_enabled - computed: false, optional: true, required: false
  private _crossRegionReplicationEnabled?: boolean | cdktf.IResolvable; 
  public get crossRegionReplicationEnabled() {
    return this.getBooleanAttribute('cross_region_replication_enabled');
  }
  public set crossRegionReplicationEnabled(value: boolean | cdktf.IResolvable) {
    this._crossRegionReplicationEnabled = value;
  }
  public resetCrossRegionReplicationEnabled() {
    this._crossRegionReplicationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossRegionReplicationEnabledInput() {
    return this._crossRegionReplicationEnabled;
  }

  // data_type_id - computed: false, optional: false, required: true
  private _dataTypeId?: string; 
  public get dataTypeId() {
    return this.getStringAttribute('data_type_id');
  }
  public set dataTypeId(value: string) {
    this._dataTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeIdInput() {
    return this._dataTypeId;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled?: boolean | cdktf.IResolvable; 
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }
  public set loggingEnabled(value: boolean | cdktf.IResolvable) {
    this._loggingEnabled = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // root_path_in_bucket - computed: false, optional: false, required: true
  private _rootPathInBucket?: string; 
  public get rootPathInBucket() {
    return this.getStringAttribute('root_path_in_bucket');
  }
  public set rootPathInBucket(value: string) {
    this._rootPathInBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInBucketInput() {
    return this._rootPathInBucket;
  }

  // storage_class_id - computed: false, optional: false, required: true
  private _storageClassId?: string; 
  public get storageClassId() {
    return this.getStringAttribute('storage_class_id');
  }
  public set storageClassId(value: string) {
    this._storageClassId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassIdInput() {
    return this._storageClassId;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      cross_region_replication_enabled: cdktf.booleanToTerraform(this._crossRegionReplicationEnabled),
      data_type_id: cdktf.stringToTerraform(this._dataTypeId),
      id: cdktf.stringToTerraform(this._id),
      logging_enabled: cdktf.booleanToTerraform(this._loggingEnabled),
      name: cdktf.stringToTerraform(this._name),
      root_path_in_bucket: cdktf.stringToTerraform(this._rootPathInBucket),
      storage_class_id: cdktf.stringToTerraform(this._storageClassId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_region_replication_enabled: {
        value: cdktf.booleanToHclTerraform(this._crossRegionReplicationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_type_id: {
        value: cdktf.stringToHclTerraform(this._dataTypeId),
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
      logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._loggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_path_in_bucket: {
        value: cdktf.stringToHclTerraform(this._rootPathInBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class_id: {
        value: cdktf.stringToHclTerraform(this._storageClassId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
