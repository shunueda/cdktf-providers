// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the ClickHouse cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#cluster_id DataInstaclustrClickhouseIntegrationS3FsxnV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#id DataInstaclustrClickhouseIntegrationS3FsxnV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A convenience named collection for query use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#named_collection DataInstaclustrClickhouseIntegrationS3FsxnV2Instance#named_collection}
  */
  readonly namedCollection?: string;
  /**
  * Status of the S3 FSxN Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#status DataInstaclustrClickhouseIntegrationS3FsxnV2Instance#status}
  */
  readonly status?: string;
  /**
  * fsxn_filesystem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#fsxn_filesystem DataInstaclustrClickhouseIntegrationS3FsxnV2Instance#fsxn_filesystem}
  */
  readonly fsxnFilesystem?: DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystem;
}
export interface DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystem {
  /**
  * S3 access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#access_key_id DataInstaclustrClickhouseIntegrationS3FsxnV2Instance#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * S3 endpoint address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#endpoint_address DataInstaclustrClickhouseIntegrationS3FsxnV2Instance#endpoint_address}
  */
  readonly endpointAddress?: string;
  /**
  * AWS ID of the FSx file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#fsxn_id DataInstaclustrClickhouseIntegrationS3FsxnV2Instance#fsxn_id}
  */
  readonly fsxnId?: string;
  /**
  * S3 secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#secret_access_key DataInstaclustrClickhouseIntegrationS3FsxnV2Instance#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function dataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystemToTerraform(struct?: DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystemOutputReference | DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    endpoint_address: cdktf.stringToTerraform(struct!.endpointAddress),
    fsxn_id: cdktf.stringToTerraform(struct!.fsxnId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function dataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystemToHclTerraform(struct?: DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystemOutputReference | DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_address: {
      value: cdktf.stringToHclTerraform(struct!.endpointAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fsxn_id: {
      value: cdktf.stringToHclTerraform(struct!.fsxnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._endpointAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointAddress = this._endpointAddress;
    }
    if (this._fsxnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsxnId = this._fsxnId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._endpointAddress = undefined;
      this._fsxnId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._endpointAddress = value.endpointAddress;
      this._fsxnId = value.fsxnId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: true, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // endpoint_address - computed: true, optional: true, required: false
  private _endpointAddress?: string; 
  public get endpointAddress() {
    return this.getStringAttribute('endpoint_address');
  }
  public set endpointAddress(value: string) {
    this._endpointAddress = value;
  }
  public resetEndpointAddress() {
    this._endpointAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAddressInput() {
    return this._endpointAddress;
  }

  // fsxn_id - computed: true, optional: true, required: false
  private _fsxnId?: string; 
  public get fsxnId() {
    return this.getStringAttribute('fsxn_id');
  }
  public set fsxnId(value: string) {
    this._fsxnId = value;
  }
  public resetFsxnId() {
    this._fsxnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxnIdInput() {
    return this._fsxnId;
  }

  // secret_access_key - computed: true, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance instaclustr_clickhouse_integration_s3_fsxn_v2_instance}
*/
export class DataInstaclustrClickhouseIntegrationS3FsxnV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_clickhouse_integration_s3_fsxn_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClickhouseIntegrationS3FsxnV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClickhouseIntegrationS3FsxnV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrClickhouseIntegrationS3FsxnV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClickhouseIntegrationS3FsxnV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_clickhouse_integration_s3_fsxn_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.35/docs/data-sources/clickhouse_integration_s3_fsxn_v2_instance instaclustr_clickhouse_integration_s3_fsxn_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_clickhouse_integration_s3_fsxn_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.35',
        providerVersionConstraint: '2.1.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._namedCollection = config.namedCollection;
    this._status = config.status;
    this._fsxnFilesystem.internalValue = config.fsxnFilesystem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // named_collection - computed: true, optional: true, required: false
  private _namedCollection?: string; 
  public get namedCollection() {
    return this.getStringAttribute('named_collection');
  }
  public set namedCollection(value: string) {
    this._namedCollection = value;
  }
  public resetNamedCollection() {
    this._namedCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedCollectionInput() {
    return this._namedCollection;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // fsxn_filesystem - computed: false, optional: true, required: false
  private _fsxnFilesystem = new DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystemOutputReference(this, "fsxn_filesystem");
  public get fsxnFilesystem() {
    return this._fsxnFilesystem;
  }
  public putFsxnFilesystem(value: DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystem) {
    this._fsxnFilesystem.internalValue = value;
  }
  public resetFsxnFilesystem() {
    this._fsxnFilesystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxnFilesystemInput() {
    return this._fsxnFilesystem.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      named_collection: cdktf.stringToTerraform(this._namedCollection),
      status: cdktf.stringToTerraform(this._status),
      fsxn_filesystem: dataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystemToTerraform(this._fsxnFilesystem.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      named_collection: {
        value: cdktf.stringToHclTerraform(this._namedCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsxn_filesystem: {
        value: dataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystemToHclTerraform(this._fsxnFilesystem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClickhouseIntegrationS3FsxnV2InstanceFsxnFilesystemList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
