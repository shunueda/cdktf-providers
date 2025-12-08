// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the ClickHouse cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance#cluster_id DataInstaclustrClickhouseIntegrationPrivateS3V2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance#id DataInstaclustrClickhouseIntegrationPrivateS3V2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * List of KMS key ARNs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance#kms_key_arns DataInstaclustrClickhouseIntegrationPrivateS3V2Instance#kms_key_arns}
  */
  readonly kmsKeyArns?: string[];
  /**
  * Status of the Private S3 integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance#status DataInstaclustrClickhouseIntegrationPrivateS3V2Instance#status}
  */
  readonly status?: string;
  /**
  * buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance#buckets DataInstaclustrClickhouseIntegrationPrivateS3V2Instance#buckets}
  */
  readonly buckets?: DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBuckets[] | cdktf.IResolvable;
}
export interface DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBuckets {
  /**
  * ARN for the S3 bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance#arn DataInstaclustrClickhouseIntegrationPrivateS3V2Instance#arn}
  */
  readonly arn?: string;
  /**
  * Boolean recording whether the S3 bucket is read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance#read_only DataInstaclustrClickhouseIntegrationPrivateS3V2Instance#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsToTerraform(struct?: DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsToHclTerraform(struct?: DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBuckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBuckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._readOnly = value.readOnly;
    }
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBuckets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsOutputReference {
    return new DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance instaclustr_clickhouse_integration_private_s3_v2_instance}
*/
export class DataInstaclustrClickhouseIntegrationPrivateS3V2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_clickhouse_integration_private_s3_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrClickhouseIntegrationPrivateS3V2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrClickhouseIntegrationPrivateS3V2Instance to import
  * @param importFromId The id of the existing DataInstaclustrClickhouseIntegrationPrivateS3V2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrClickhouseIntegrationPrivateS3V2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_clickhouse_integration_private_s3_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.33/docs/data-sources/clickhouse_integration_private_s3_v2_instance instaclustr_clickhouse_integration_private_s3_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_clickhouse_integration_private_s3_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.33',
        providerVersionConstraint: '2.1.33'
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
    this._kmsKeyArns = config.kmsKeyArns;
    this._status = config.status;
    this._buckets.internalValue = config.buckets;
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

  // kms_key_arns - computed: true, optional: true, required: false
  private _kmsKeyArns?: string[]; 
  public get kmsKeyArns() {
    return this.getListAttribute('kms_key_arns');
  }
  public set kmsKeyArns(value: string[]) {
    this._kmsKeyArns = value;
  }
  public resetKmsKeyArns() {
    this._kmsKeyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnsInput() {
    return this._kmsKeyArns;
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

  // buckets - computed: false, optional: true, required: false
  private _buckets = new DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBuckets[] | cdktf.IResolvable) {
    this._buckets.internalValue = value;
  }
  public resetBuckets() {
    this._buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      kms_key_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kmsKeyArns),
      status: cdktf.stringToTerraform(this._status),
      buckets: cdktf.listMapper(dataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsToTerraform, true)(this._buckets.internalValue),
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
      kms_key_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kmsKeyArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buckets: {
        value: cdktf.listMapperHcl(dataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsToHclTerraform, true)(this._buckets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrClickhouseIntegrationPrivateS3V2InstanceBucketsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
