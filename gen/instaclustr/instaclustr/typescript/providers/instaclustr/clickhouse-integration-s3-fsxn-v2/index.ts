// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseIntegrationS3FsxnV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the ClickHouse cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#cluster_id ClickhouseIntegrationS3FsxnV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#id ClickhouseIntegrationS3FsxnV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A convenience named collection for query use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#named_collection ClickhouseIntegrationS3FsxnV2#named_collection}
  */
  readonly namedCollection?: string;
  /**
  * Status of the S3 FSxN Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#status ClickhouseIntegrationS3FsxnV2#status}
  */
  readonly status?: string;
  /**
  * fsxn_filesystem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#fsxn_filesystem ClickhouseIntegrationS3FsxnV2#fsxn_filesystem}
  */
  readonly fsxnFilesystem: ClickhouseIntegrationS3FsxnV2FsxnFilesystem;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#timeouts ClickhouseIntegrationS3FsxnV2#timeouts}
  */
  readonly timeouts?: ClickhouseIntegrationS3FsxnV2Timeouts;
}
export interface ClickhouseIntegrationS3FsxnV2FsxnFilesystem {
  /**
  * S3 access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#access_key_id ClickhouseIntegrationS3FsxnV2#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * S3 endpoint address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#endpoint_address ClickhouseIntegrationS3FsxnV2#endpoint_address}
  */
  readonly endpointAddress?: string;
  /**
  * AWS ID of the FSx file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#fsxn_id ClickhouseIntegrationS3FsxnV2#fsxn_id}
  */
  readonly fsxnId: string;
  /**
  * S3 secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#secret_access_key ClickhouseIntegrationS3FsxnV2#secret_access_key}
  */
  readonly secretAccessKey?: string;
}

export function clickhouseIntegrationS3FsxnV2FsxnFilesystemToTerraform(struct?: ClickhouseIntegrationS3FsxnV2FsxnFilesystemOutputReference | ClickhouseIntegrationS3FsxnV2FsxnFilesystem): any {
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


export function clickhouseIntegrationS3FsxnV2FsxnFilesystemToHclTerraform(struct?: ClickhouseIntegrationS3FsxnV2FsxnFilesystemOutputReference | ClickhouseIntegrationS3FsxnV2FsxnFilesystem): any {
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

export class ClickhouseIntegrationS3FsxnV2FsxnFilesystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseIntegrationS3FsxnV2FsxnFilesystem | undefined {
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

  public set internalValue(value: ClickhouseIntegrationS3FsxnV2FsxnFilesystem | undefined) {
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

  // access_key_id - computed: false, optional: true, required: false
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

  // fsxn_id - computed: false, optional: false, required: true
  private _fsxnId?: string; 
  public get fsxnId() {
    return this.getStringAttribute('fsxn_id');
  }
  public set fsxnId(value: string) {
    this._fsxnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxnIdInput() {
    return this._fsxnId;
  }

  // secret_access_key - computed: false, optional: true, required: false
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
export interface ClickhouseIntegrationS3FsxnV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#create ClickhouseIntegrationS3FsxnV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#default ClickhouseIntegrationS3FsxnV2#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#delete ClickhouseIntegrationS3FsxnV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#read ClickhouseIntegrationS3FsxnV2#read}
  */
  readonly read?: string;
}

export function clickhouseIntegrationS3FsxnV2TimeoutsToTerraform(struct?: ClickhouseIntegrationS3FsxnV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function clickhouseIntegrationS3FsxnV2TimeoutsToHclTerraform(struct?: ClickhouseIntegrationS3FsxnV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseIntegrationS3FsxnV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseIntegrationS3FsxnV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseIntegrationS3FsxnV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2 instaclustr_clickhouse_integration_s3_fsxn_v2}
*/
export class ClickhouseIntegrationS3FsxnV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_clickhouse_integration_s3_fsxn_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhouseIntegrationS3FsxnV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhouseIntegrationS3FsxnV2 to import
  * @param importFromId The id of the existing ClickhouseIntegrationS3FsxnV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhouseIntegrationS3FsxnV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_clickhouse_integration_s3_fsxn_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/resources/clickhouse_integration_s3_fsxn_v2 instaclustr_clickhouse_integration_s3_fsxn_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseIntegrationS3FsxnV2Config
  */
  public constructor(scope: Construct, id: string, config: ClickhouseIntegrationS3FsxnV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_clickhouse_integration_s3_fsxn_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.29',
        providerVersionConstraint: '2.1.29'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // fsxn_filesystem - computed: false, optional: false, required: true
  private _fsxnFilesystem = new ClickhouseIntegrationS3FsxnV2FsxnFilesystemOutputReference(this, "fsxn_filesystem");
  public get fsxnFilesystem() {
    return this._fsxnFilesystem;
  }
  public putFsxnFilesystem(value: ClickhouseIntegrationS3FsxnV2FsxnFilesystem) {
    this._fsxnFilesystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxnFilesystemInput() {
    return this._fsxnFilesystem.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClickhouseIntegrationS3FsxnV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClickhouseIntegrationS3FsxnV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      fsxn_filesystem: clickhouseIntegrationS3FsxnV2FsxnFilesystemToTerraform(this._fsxnFilesystem.internalValue),
      timeouts: clickhouseIntegrationS3FsxnV2TimeoutsToTerraform(this._timeouts.internalValue),
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
        value: clickhouseIntegrationS3FsxnV2FsxnFilesystemToHclTerraform(this._fsxnFilesystem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseIntegrationS3FsxnV2FsxnFilesystemList",
      },
      timeouts: {
        value: clickhouseIntegrationS3FsxnV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickhouseIntegrationS3FsxnV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
