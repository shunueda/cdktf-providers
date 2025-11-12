// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OssBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#acl OssBucket#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#bucket OssBucket#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#bucket_sync OssBucket#bucket_sync}
  */
  readonly bucketSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#dual_kms_key OssBucket#dual_kms_key}
  */
  readonly dualKmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#dual_sync_role OssBucket#dual_sync_role}
  */
  readonly dualSyncRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#id OssBucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#kms_key_id OssBucket#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#oss_cluster OssBucket#oss_cluster}
  */
  readonly ossCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#sse_algorithm OssBucket#sse_algorithm}
  */
  readonly sseAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#storage_capacity OssBucket#storage_capacity}
  */
  readonly storageCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#storage_class OssBucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#tags OssBucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#vpclist OssBucket#vpclist}
  */
  readonly vpclist?: string[];
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#logging OssBucket#logging}
  */
  readonly logging?: OssBucketLogging;
}
export interface OssBucketLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#target_bucket OssBucket#target_bucket}
  */
  readonly targetBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#target_prefix OssBucket#target_prefix}
  */
  readonly targetPrefix?: string;
}

export function ossBucketLoggingToTerraform(struct?: OssBucketLoggingOutputReference | OssBucketLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_bucket: cdktf.stringToTerraform(struct!.targetBucket),
    target_prefix: cdktf.stringToTerraform(struct!.targetPrefix),
  }
}


export function ossBucketLoggingToHclTerraform(struct?: OssBucketLoggingOutputReference | OssBucketLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_bucket: {
      value: cdktf.stringToHclTerraform(struct!.targetBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_prefix: {
      value: cdktf.stringToHclTerraform(struct!.targetPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetBucket = this._targetBucket;
    }
    if (this._targetPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPrefix = this._targetPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetBucket = undefined;
      this._targetPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetBucket = value.targetBucket;
      this._targetPrefix = value.targetPrefix;
    }
  }

  // target_bucket - computed: false, optional: false, required: true
  private _targetBucket?: string; 
  public get targetBucket() {
    return this.getStringAttribute('target_bucket');
  }
  public set targetBucket(value: string) {
    this._targetBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBucketInput() {
    return this._targetBucket;
  }

  // target_prefix - computed: false, optional: true, required: false
  private _targetPrefix?: string; 
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
  public set targetPrefix(value: string) {
    this._targetPrefix = value;
  }
  public resetTargetPrefix() {
    this._targetPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrefixInput() {
    return this._targetPrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket alibabacloudstack_oss_bucket}
*/
export class OssBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_oss_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OssBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OssBucket to import
  * @param importFromId The id of the existing OssBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OssBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_oss_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.16.21/docs/resources/oss_bucket alibabacloudstack_oss_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OssBucketConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OssBucketConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_oss_bucket',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.16.21',
        providerVersionConstraint: '3.16.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._bucketSync = config.bucketSync;
    this._dualKmsKey = config.dualKmsKey;
    this._dualSyncRole = config.dualSyncRole;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._ossCluster = config.ossCluster;
    this._sseAlgorithm = config.sseAlgorithm;
    this._storageCapacity = config.storageCapacity;
    this._storageClass = config.storageClass;
    this._tags = config.tags;
    this._vpclist = config.vpclist;
    this._logging.internalValue = config.logging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_sync - computed: true, optional: true, required: false
  private _bucketSync?: boolean | cdktf.IResolvable; 
  public get bucketSync() {
    return this.getBooleanAttribute('bucket_sync');
  }
  public set bucketSync(value: boolean | cdktf.IResolvable) {
    this._bucketSync = value;
  }
  public resetBucketSync() {
    this._bucketSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSyncInput() {
    return this._bucketSync;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // dual_kms_key - computed: false, optional: true, required: false
  private _dualKmsKey?: string; 
  public get dualKmsKey() {
    return this.getStringAttribute('dual_kms_key');
  }
  public set dualKmsKey(value: string) {
    this._dualKmsKey = value;
  }
  public resetDualKmsKey() {
    this._dualKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualKmsKeyInput() {
    return this._dualKmsKey;
  }

  // dual_sync_role - computed: false, optional: true, required: false
  private _dualSyncRole?: string; 
  public get dualSyncRole() {
    return this.getStringAttribute('dual_sync_role');
  }
  public set dualSyncRole(value: string) {
    this._dualSyncRole = value;
  }
  public resetDualSyncRole() {
    this._dualSyncRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualSyncRoleInput() {
    return this._dualSyncRole;
  }

  // extranet_endpoint - computed: true, optional: false, required: false
  public get extranetEndpoint() {
    return this.getStringAttribute('extranet_endpoint');
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

  // intranet_endpoint - computed: true, optional: false, required: false
  public get intranetEndpoint() {
    return this.getStringAttribute('intranet_endpoint');
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // oss_cluster - computed: true, optional: true, required: false
  private _ossCluster?: string; 
  public get ossCluster() {
    return this.getStringAttribute('oss_cluster');
  }
  public set ossCluster(value: string) {
    this._ossCluster = value;
  }
  public resetOssCluster() {
    this._ossCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossClusterInput() {
    return this._ossCluster;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // sse_algorithm - computed: false, optional: true, required: false
  private _sseAlgorithm?: string; 
  public get sseAlgorithm() {
    return this.getStringAttribute('sse_algorithm');
  }
  public set sseAlgorithm(value: string) {
    this._sseAlgorithm = value;
  }
  public resetSseAlgorithm() {
    this._sseAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseAlgorithmInput() {
    return this._sseAlgorithm;
  }

  // storage_capacity - computed: false, optional: true, required: false
  private _storageCapacity?: number; 
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number) {
    this._storageCapacity = value;
  }
  public resetStorageCapacity() {
    this._storageCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityInput() {
    return this._storageCapacity;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpclist - computed: false, optional: true, required: false
  private _vpclist?: string[]; 
  public get vpclist() {
    return this.getListAttribute('vpclist');
  }
  public set vpclist(value: string[]) {
    this._vpclist = value;
  }
  public resetVpclist() {
    this._vpclist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpclistInput() {
    return this._vpclist;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new OssBucketLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: OssBucketLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_sync: cdktf.booleanToTerraform(this._bucketSync),
      dual_kms_key: cdktf.stringToTerraform(this._dualKmsKey),
      dual_sync_role: cdktf.stringToTerraform(this._dualSyncRole),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      oss_cluster: cdktf.stringToTerraform(this._ossCluster),
      sse_algorithm: cdktf.stringToTerraform(this._sseAlgorithm),
      storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpclist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpclist),
      logging: ossBucketLoggingToTerraform(this._logging.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl: {
        value: cdktf.stringToHclTerraform(this._acl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_sync: {
        value: cdktf.booleanToHclTerraform(this._bucketSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dual_kms_key: {
        value: cdktf.stringToHclTerraform(this._dualKmsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dual_sync_role: {
        value: cdktf.stringToHclTerraform(this._dualSyncRole),
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_cluster: {
        value: cdktf.stringToHclTerraform(this._ossCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sse_algorithm: {
        value: cdktf.stringToHclTerraform(this._sseAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_capacity: {
        value: cdktf.numberToHclTerraform(this._storageCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpclist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpclist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      logging: {
        value: ossBucketLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketLoggingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
