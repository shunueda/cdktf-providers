// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/s3_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataClumioS3BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of s3 bucket names to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/s3_bucket#bucket_names DataClumioS3Bucket#bucket_names}
  */
  readonly bucketNames: string[];
}
export interface DataClumioS3BucketS3Buckets {
}

export function dataClumioS3BucketS3BucketsToTerraform(struct?: DataClumioS3BucketS3Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataClumioS3BucketS3BucketsToHclTerraform(struct?: DataClumioS3BucketS3Buckets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataClumioS3BucketS3BucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataClumioS3BucketS3Buckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataClumioS3BucketS3Buckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_native_id - computed: true, optional: false, required: false
  public get accountNativeId() {
    return this.getStringAttribute('account_native_id');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // event_bridge_enabled - computed: true, optional: false, required: false
  public get eventBridgeEnabled() {
    return this.getBooleanAttribute('event_bridge_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_backup_timestamp - computed: true, optional: false, required: false
  public get lastBackupTimestamp() {
    return this.getStringAttribute('last_backup_timestamp');
  }

  // last_continuous_backup_timestamp - computed: true, optional: false, required: false
  public get lastContinuousBackupTimestamp() {
    return this.getStringAttribute('last_continuous_backup_timestamp');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protection_group_count - computed: true, optional: false, required: false
  public get protectionGroupCount() {
    return this.getNumberAttribute('protection_group_count');
  }
}

export class DataClumioS3BucketS3BucketsList extends cdktf.ComplexList {

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
  public get(index: number): DataClumioS3BucketS3BucketsOutputReference {
    return new DataClumioS3BucketS3BucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/s3_bucket clumio_s3_bucket}
*/
export class DataClumioS3Bucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_s3_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataClumioS3Bucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClumioS3Bucket to import
  * @param importFromId The id of the existing DataClumioS3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/s3_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClumioS3Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_s3_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/s3_bucket clumio_s3_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClumioS3BucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataClumioS3BucketConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_s3_bucket',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketNames = config.bucketNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_names - computed: false, optional: false, required: true
  private _bucketNames?: string[]; 
  public get bucketNames() {
    return cdktf.Fn.tolist(this.getListAttribute('bucket_names'));
  }
  public set bucketNames(value: string[]) {
    this._bucketNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNamesInput() {
    return this._bucketNames;
  }

  // s3_buckets - computed: true, optional: false, required: false
  private _s3Buckets = new DataClumioS3BucketS3BucketsList(this, "s3_buckets", true);
  public get s3Buckets() {
    return this._s3Buckets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bucketNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bucketNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
