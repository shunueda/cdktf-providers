// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OssBucketReplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#action OssBucketReplication#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#bucket OssBucketReplication#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#historical_object_replication OssBucketReplication#historical_object_replication}
  */
  readonly historicalObjectReplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#id OssBucketReplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#sync_role OssBucketReplication#sync_role}
  */
  readonly syncRole?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#destination OssBucketReplication#destination}
  */
  readonly destination: OssBucketReplicationDestination;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#encryption_configuration OssBucketReplication#encryption_configuration}
  */
  readonly encryptionConfiguration?: OssBucketReplicationEncryptionConfiguration;
  /**
  * prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#prefix_set OssBucketReplication#prefix_set}
  */
  readonly prefixSet?: OssBucketReplicationPrefixSet;
  /**
  * progress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#progress OssBucketReplication#progress}
  */
  readonly progress?: OssBucketReplicationProgress;
  /**
  * rtc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#rtc OssBucketReplication#rtc}
  */
  readonly rtc?: OssBucketReplicationRtc;
  /**
  * source_selection_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#source_selection_criteria OssBucketReplication#source_selection_criteria}
  */
  readonly sourceSelectionCriteria?: OssBucketReplicationSourceSelectionCriteria;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#timeouts OssBucketReplication#timeouts}
  */
  readonly timeouts?: OssBucketReplicationTimeouts;
}
export interface OssBucketReplicationDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#bucket OssBucketReplication#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#location OssBucketReplication#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#transfer_type OssBucketReplication#transfer_type}
  */
  readonly transferType?: string;
}

export function ossBucketReplicationDestinationToTerraform(struct?: OssBucketReplicationDestinationOutputReference | OssBucketReplicationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    location: cdktf.stringToTerraform(struct!.location),
    transfer_type: cdktf.stringToTerraform(struct!.transferType),
  }
}


export function ossBucketReplicationDestinationToHclTerraform(struct?: OssBucketReplicationDestinationOutputReference | OssBucketReplicationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transfer_type: {
      value: cdktf.stringToHclTerraform(struct!.transferType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketReplicationDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketReplicationDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._transferType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferType = this._transferType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketReplicationDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._location = undefined;
      this._transferType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._location = value.location;
      this._transferType = value.transferType;
    }
  }

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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // transfer_type - computed: false, optional: true, required: false
  private _transferType?: string; 
  public get transferType() {
    return this.getStringAttribute('transfer_type');
  }
  public set transferType(value: string) {
    this._transferType = value;
  }
  public resetTransferType() {
    this._transferType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferTypeInput() {
    return this._transferType;
  }
}
export interface OssBucketReplicationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#replica_kms_key_id OssBucketReplication#replica_kms_key_id}
  */
  readonly replicaKmsKeyId: string;
}

export function ossBucketReplicationEncryptionConfigurationToTerraform(struct?: OssBucketReplicationEncryptionConfigurationOutputReference | OssBucketReplicationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_kms_key_id: cdktf.stringToTerraform(struct!.replicaKmsKeyId),
  }
}


export function ossBucketReplicationEncryptionConfigurationToHclTerraform(struct?: OssBucketReplicationEncryptionConfigurationOutputReference | OssBucketReplicationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replica_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.replicaKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketReplicationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketReplicationEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaKmsKeyId = this._replicaKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketReplicationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replicaKmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replicaKmsKeyId = value.replicaKmsKeyId;
    }
  }

  // replica_kms_key_id - computed: false, optional: false, required: true
  private _replicaKmsKeyId?: string; 
  public get replicaKmsKeyId() {
    return this.getStringAttribute('replica_kms_key_id');
  }
  public set replicaKmsKeyId(value: string) {
    this._replicaKmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaKmsKeyIdInput() {
    return this._replicaKmsKeyId;
  }
}
export interface OssBucketReplicationPrefixSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#prefixes OssBucketReplication#prefixes}
  */
  readonly prefixes: string[];
}

export function ossBucketReplicationPrefixSetToTerraform(struct?: OssBucketReplicationPrefixSetOutputReference | OssBucketReplicationPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function ossBucketReplicationPrefixSetToHclTerraform(struct?: OssBucketReplicationPrefixSetOutputReference | OssBucketReplicationPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketReplicationPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketReplicationPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketReplicationPrefixSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixes = value.prefixes;
    }
  }

  // prefixes - computed: false, optional: false, required: true
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface OssBucketReplicationProgress {
}

export function ossBucketReplicationProgressToTerraform(struct?: OssBucketReplicationProgressOutputReference | OssBucketReplicationProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ossBucketReplicationProgressToHclTerraform(struct?: OssBucketReplicationProgressOutputReference | OssBucketReplicationProgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OssBucketReplicationProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketReplicationProgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketReplicationProgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // historical_object - computed: true, optional: false, required: false
  public get historicalObject() {
    return this.getStringAttribute('historical_object');
  }

  // new_object - computed: true, optional: false, required: false
  public get newObject() {
    return this.getStringAttribute('new_object');
  }
}
export interface OssBucketReplicationRtc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#enabled OssBucketReplication#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function ossBucketReplicationRtcToTerraform(struct?: OssBucketReplicationRtcOutputReference | OssBucketReplicationRtc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function ossBucketReplicationRtcToHclTerraform(struct?: OssBucketReplicationRtcOutputReference | OssBucketReplicationRtc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketReplicationRtcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketReplicationRtc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketReplicationRtc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#status OssBucketReplication#status}
  */
  readonly status?: string;
}

export function ossBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function ossBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct?: OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
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
}
export interface OssBucketReplicationSourceSelectionCriteria {
  /**
  * sse_kms_encrypted_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#sse_kms_encrypted_objects OssBucketReplication#sse_kms_encrypted_objects}
  */
  readonly sseKmsEncryptedObjects?: OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjects;
}

export function ossBucketReplicationSourceSelectionCriteriaToTerraform(struct?: OssBucketReplicationSourceSelectionCriteriaOutputReference | OssBucketReplicationSourceSelectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sse_kms_encrypted_objects: ossBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct!.sseKmsEncryptedObjects),
  }
}


export function ossBucketReplicationSourceSelectionCriteriaToHclTerraform(struct?: OssBucketReplicationSourceSelectionCriteriaOutputReference | OssBucketReplicationSourceSelectionCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sse_kms_encrypted_objects: {
      value: ossBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjectsToHclTerraform(struct!.sseKmsEncryptedObjects),
      isBlock: true,
      type: "list",
      storageClassType: "OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketReplicationSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OssBucketReplicationSourceSelectionCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseKmsEncryptedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseKmsEncryptedObjects = this._sseKmsEncryptedObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketReplicationSourceSelectionCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseKmsEncryptedObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseKmsEncryptedObjects.internalValue = value.sseKmsEncryptedObjects;
    }
  }

  // sse_kms_encrypted_objects - computed: false, optional: true, required: false
  private _sseKmsEncryptedObjects = new OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(this, "sse_kms_encrypted_objects");
  public get sseKmsEncryptedObjects() {
    return this._sseKmsEncryptedObjects;
  }
  public putSseKmsEncryptedObjects(value: OssBucketReplicationSourceSelectionCriteriaSseKmsEncryptedObjects) {
    this._sseKmsEncryptedObjects.internalValue = value;
  }
  public resetSseKmsEncryptedObjects() {
    this._sseKmsEncryptedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsEncryptedObjectsInput() {
    return this._sseKmsEncryptedObjects.internalValue;
  }
}
export interface OssBucketReplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#delete OssBucketReplication#delete}
  */
  readonly delete?: string;
}

export function ossBucketReplicationTimeoutsToTerraform(struct?: OssBucketReplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function ossBucketReplicationTimeoutsToHclTerraform(struct?: OssBucketReplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OssBucketReplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OssBucketReplicationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OssBucketReplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication alicloud_oss_bucket_replication}
*/
export class OssBucketReplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_oss_bucket_replication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OssBucketReplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OssBucketReplication to import
  * @param importFromId The id of the existing OssBucketReplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OssBucketReplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_oss_bucket_replication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/oss_bucket_replication alicloud_oss_bucket_replication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OssBucketReplicationConfig
  */
  public constructor(scope: Construct, id: string, config: OssBucketReplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_oss_bucket_replication',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._bucket = config.bucket;
    this._historicalObjectReplication = config.historicalObjectReplication;
    this._id = config.id;
    this._syncRole = config.syncRole;
    this._destination.internalValue = config.destination;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._prefixSet.internalValue = config.prefixSet;
    this._progress.internalValue = config.progress;
    this._rtc.internalValue = config.rtc;
    this._sourceSelectionCriteria.internalValue = config.sourceSelectionCriteria;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // historical_object_replication - computed: false, optional: true, required: false
  private _historicalObjectReplication?: string; 
  public get historicalObjectReplication() {
    return this.getStringAttribute('historical_object_replication');
  }
  public set historicalObjectReplication(value: string) {
    this._historicalObjectReplication = value;
  }
  public resetHistoricalObjectReplication() {
    this._historicalObjectReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalObjectReplicationInput() {
    return this._historicalObjectReplication;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_role - computed: false, optional: true, required: false
  private _syncRole?: string; 
  public get syncRole() {
    return this.getStringAttribute('sync_role');
  }
  public set syncRole(value: string) {
    this._syncRole = value;
  }
  public resetSyncRole() {
    this._syncRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRoleInput() {
    return this._syncRole;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new OssBucketReplicationDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: OssBucketReplicationDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new OssBucketReplicationEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: OssBucketReplicationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // prefix_set - computed: false, optional: true, required: false
  private _prefixSet = new OssBucketReplicationPrefixSetOutputReference(this, "prefix_set");
  public get prefixSet() {
    return this._prefixSet;
  }
  public putPrefixSet(value: OssBucketReplicationPrefixSet) {
    this._prefixSet.internalValue = value;
  }
  public resetPrefixSet() {
    this._prefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetInput() {
    return this._prefixSet.internalValue;
  }

  // progress - computed: false, optional: true, required: false
  private _progress = new OssBucketReplicationProgressOutputReference(this, "progress");
  public get progress() {
    return this._progress;
  }
  public putProgress(value: OssBucketReplicationProgress) {
    this._progress.internalValue = value;
  }
  public resetProgress() {
    this._progress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressInput() {
    return this._progress.internalValue;
  }

  // rtc - computed: false, optional: true, required: false
  private _rtc = new OssBucketReplicationRtcOutputReference(this, "rtc");
  public get rtc() {
    return this._rtc;
  }
  public putRtc(value: OssBucketReplicationRtc) {
    this._rtc.internalValue = value;
  }
  public resetRtc() {
    this._rtc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtcInput() {
    return this._rtc.internalValue;
  }

  // source_selection_criteria - computed: false, optional: true, required: false
  private _sourceSelectionCriteria = new OssBucketReplicationSourceSelectionCriteriaOutputReference(this, "source_selection_criteria");
  public get sourceSelectionCriteria() {
    return this._sourceSelectionCriteria;
  }
  public putSourceSelectionCriteria(value: OssBucketReplicationSourceSelectionCriteria) {
    this._sourceSelectionCriteria.internalValue = value;
  }
  public resetSourceSelectionCriteria() {
    this._sourceSelectionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSelectionCriteriaInput() {
    return this._sourceSelectionCriteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OssBucketReplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OssBucketReplicationTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      bucket: cdktf.stringToTerraform(this._bucket),
      historical_object_replication: cdktf.stringToTerraform(this._historicalObjectReplication),
      id: cdktf.stringToTerraform(this._id),
      sync_role: cdktf.stringToTerraform(this._syncRole),
      destination: ossBucketReplicationDestinationToTerraform(this._destination.internalValue),
      encryption_configuration: ossBucketReplicationEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      prefix_set: ossBucketReplicationPrefixSetToTerraform(this._prefixSet.internalValue),
      progress: ossBucketReplicationProgressToTerraform(this._progress.internalValue),
      rtc: ossBucketReplicationRtcToTerraform(this._rtc.internalValue),
      source_selection_criteria: ossBucketReplicationSourceSelectionCriteriaToTerraform(this._sourceSelectionCriteria.internalValue),
      timeouts: ossBucketReplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      historical_object_replication: {
        value: cdktf.stringToHclTerraform(this._historicalObjectReplication),
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
      sync_role: {
        value: cdktf.stringToHclTerraform(this._syncRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: ossBucketReplicationDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketReplicationDestinationList",
      },
      encryption_configuration: {
        value: ossBucketReplicationEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketReplicationEncryptionConfigurationList",
      },
      prefix_set: {
        value: ossBucketReplicationPrefixSetToHclTerraform(this._prefixSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketReplicationPrefixSetList",
      },
      progress: {
        value: ossBucketReplicationProgressToHclTerraform(this._progress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketReplicationProgressList",
      },
      rtc: {
        value: ossBucketReplicationRtcToHclTerraform(this._rtc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketReplicationRtcList",
      },
      source_selection_criteria: {
        value: ossBucketReplicationSourceSelectionCriteriaToHclTerraform(this._sourceSelectionCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OssBucketReplicationSourceSelectionCriteriaList",
      },
      timeouts: {
        value: ossBucketReplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OssBucketReplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
