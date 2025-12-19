// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosBucketInventoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#bucket CosBucketInventory#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#id CosBucketInventory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to include object versions in the inventory. All or No.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#included_object_versions CosBucketInventory#included_object_versions}
  */
  readonly includedObjectVersions: string;
  /**
  * Whether to enable the inventory. true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#is_enabled CosBucketInventory#is_enabled}
  */
  readonly isEnabled: string;
  /**
  * Inventory Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#name CosBucketInventory#name}
  */
  readonly name: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#destination CosBucketInventory#destination}
  */
  readonly destination: CosBucketInventoryDestination;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#filter CosBucketInventory#filter}
  */
  readonly filter?: CosBucketInventoryFilter;
  /**
  * optional_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#optional_fields CosBucketInventory#optional_fields}
  */
  readonly optionalFields?: CosBucketInventoryOptionalFields;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#schedule CosBucketInventory#schedule}
  */
  readonly schedule: CosBucketInventorySchedule;
}
export interface CosBucketInventoryDestinationEncryption {
  /**
  * Encryption with COS-managed key. This field can be left empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#sse_cos CosBucketInventory#sse_cos}
  */
  readonly sseCos?: string;
}

export function cosBucketInventoryDestinationEncryptionToTerraform(struct?: CosBucketInventoryDestinationEncryptionOutputReference | CosBucketInventoryDestinationEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sse_cos: cdktf.stringToTerraform(struct!.sseCos),
  }
}


export function cosBucketInventoryDestinationEncryptionToHclTerraform(struct?: CosBucketInventoryDestinationEncryptionOutputReference | CosBucketInventoryDestinationEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sse_cos: {
      value: cdktf.stringToHclTerraform(struct!.sseCos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketInventoryDestinationEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketInventoryDestinationEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sseCos !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseCos = this._sseCos;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketInventoryDestinationEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sseCos = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sseCos = value.sseCos;
    }
  }

  // sse_cos - computed: false, optional: true, required: false
  private _sseCos?: string; 
  public get sseCos() {
    return this.getStringAttribute('sse_cos');
  }
  public set sseCos(value: string) {
    this._sseCos = value;
  }
  public resetSseCos() {
    this._sseCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseCosInput() {
    return this._sseCos;
  }
}
export interface CosBucketInventoryDestination {
  /**
  * ID of the bucket owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#account_id CosBucketInventory#account_id}
  */
  readonly accountId?: string;
  /**
  * Bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#bucket CosBucketInventory#bucket}
  */
  readonly bucket: string;
  /**
  * Format of the inventory result. Valid value: CSV.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#format CosBucketInventory#format}
  */
  readonly format: string;
  /**
  * Prefix of the inventory result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#prefix CosBucketInventory#prefix}
  */
  readonly prefix?: string;
  /**
  * encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#encryption CosBucketInventory#encryption}
  */
  readonly encryption?: CosBucketInventoryDestinationEncryption;
}

export function cosBucketInventoryDestinationToTerraform(struct?: CosBucketInventoryDestinationOutputReference | CosBucketInventoryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    format: cdktf.stringToTerraform(struct!.format),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    encryption: cosBucketInventoryDestinationEncryptionToTerraform(struct!.encryption),
  }
}


export function cosBucketInventoryDestinationToHclTerraform(struct?: CosBucketInventoryDestinationOutputReference | CosBucketInventoryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cosBucketInventoryDestinationEncryptionToHclTerraform(struct!.encryption),
      isBlock: true,
      type: "list",
      storageClassType: "CosBucketInventoryDestinationEncryptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketInventoryDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketInventoryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._encryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketInventoryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._bucket = undefined;
      this._format = undefined;
      this._prefix = undefined;
      this._encryption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._bucket = value.bucket;
      this._format = value.format;
      this._prefix = value.prefix;
      this._encryption.internalValue = value.encryption;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption = new CosBucketInventoryDestinationEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: CosBucketInventoryDestinationEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }
}
export interface CosBucketInventoryFilterPeriod {
  /**
  * Creation end time of the objects to analyze. The parameter is a timestamp in seconds, for example, 1568688762.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#end_time CosBucketInventory#end_time}
  */
  readonly endTime?: string;
  /**
  * Creation start time of the objects to analyze. The parameter is a timestamp in seconds, for example, 1568688761.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#start_time CosBucketInventory#start_time}
  */
  readonly startTime?: string;
}

export function cosBucketInventoryFilterPeriodToTerraform(struct?: CosBucketInventoryFilterPeriodOutputReference | CosBucketInventoryFilterPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function cosBucketInventoryFilterPeriodToHclTerraform(struct?: CosBucketInventoryFilterPeriodOutputReference | CosBucketInventoryFilterPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketInventoryFilterPeriodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketInventoryFilterPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketInventoryFilterPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface CosBucketInventoryFilter {
  /**
  * Prefix of the objects to analyze.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#prefix CosBucketInventory#prefix}
  */
  readonly prefix?: string;
  /**
  * period block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#period CosBucketInventory#period}
  */
  readonly period?: CosBucketInventoryFilterPeriod;
}

export function cosBucketInventoryFilterToTerraform(struct?: CosBucketInventoryFilterOutputReference | CosBucketInventoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    period: cosBucketInventoryFilterPeriodToTerraform(struct!.period),
  }
}


export function cosBucketInventoryFilterToHclTerraform(struct?: CosBucketInventoryFilterOutputReference | CosBucketInventoryFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cosBucketInventoryFilterPeriodToHclTerraform(struct!.period),
      isBlock: true,
      type: "list",
      storageClassType: "CosBucketInventoryFilterPeriodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketInventoryFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketInventoryFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._period?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketInventoryFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
      this._period.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
      this._period.internalValue = value.period;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // period - computed: false, optional: true, required: false
  private _period = new CosBucketInventoryFilterPeriodOutputReference(this, "period");
  public get period() {
    return this._period;
  }
  public putPeriod(value: CosBucketInventoryFilterPeriod) {
    this._period.internalValue = value;
  }
  public resetPeriod() {
    this._period.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period.internalValue;
  }
}
export interface CosBucketInventoryOptionalFields {
  /**
  * Optional analysis items to include in the inventory result. The optional fields include Size, LastModifiedDate, StorageClass, ETag, IsMultipartUploaded, ReplicationStatus, Tag, Crc64, and x-cos-meta-*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#fields CosBucketInventory#fields}
  */
  readonly fields?: string[];
}

export function cosBucketInventoryOptionalFieldsToTerraform(struct?: CosBucketInventoryOptionalFieldsOutputReference | CosBucketInventoryOptionalFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function cosBucketInventoryOptionalFieldsToHclTerraform(struct?: CosBucketInventoryOptionalFieldsOutputReference | CosBucketInventoryOptionalFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketInventoryOptionalFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketInventoryOptionalFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketInventoryOptionalFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}
export interface CosBucketInventorySchedule {
  /**
  * Frequency of the inventory job. Enumerated values: Daily, Weekly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#frequency CosBucketInventory#frequency}
  */
  readonly frequency: string;
}

export function cosBucketInventoryScheduleToTerraform(struct?: CosBucketInventoryScheduleOutputReference | CosBucketInventorySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}


export function cosBucketInventoryScheduleToHclTerraform(struct?: CosBucketInventoryScheduleOutputReference | CosBucketInventorySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBucketInventoryScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBucketInventorySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBucketInventorySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory tencentcloud_cos_bucket_inventory}
*/
export class CosBucketInventory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cos_bucket_inventory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosBucketInventory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosBucketInventory to import
  * @param importFromId The id of the existing CosBucketInventory that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosBucketInventory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cos_bucket_inventory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/cos_bucket_inventory tencentcloud_cos_bucket_inventory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosBucketInventoryConfig
  */
  public constructor(scope: Construct, id: string, config: CosBucketInventoryConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cos_bucket_inventory',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._id = config.id;
    this._includedObjectVersions = config.includedObjectVersions;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._destination.internalValue = config.destination;
    this._filter.internalValue = config.filter;
    this._optionalFields.internalValue = config.optionalFields;
    this._schedule.internalValue = config.schedule;
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

  // included_object_versions - computed: false, optional: false, required: true
  private _includedObjectVersions?: string; 
  public get includedObjectVersions() {
    return this.getStringAttribute('included_object_versions');
  }
  public set includedObjectVersions(value: string) {
    this._includedObjectVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedObjectVersionsInput() {
    return this._includedObjectVersions;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: string; 
  public get isEnabled() {
    return this.getStringAttribute('is_enabled');
  }
  public set isEnabled(value: string) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // destination - computed: false, optional: false, required: true
  private _destination = new CosBucketInventoryDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: CosBucketInventoryDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new CosBucketInventoryFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CosBucketInventoryFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // optional_fields - computed: false, optional: true, required: false
  private _optionalFields = new CosBucketInventoryOptionalFieldsOutputReference(this, "optional_fields");
  public get optionalFields() {
    return this._optionalFields;
  }
  public putOptionalFields(value: CosBucketInventoryOptionalFields) {
    this._optionalFields.internalValue = value;
  }
  public resetOptionalFields() {
    this._optionalFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalFieldsInput() {
    return this._optionalFields.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new CosBucketInventoryScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: CosBucketInventorySchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      included_object_versions: cdktf.stringToTerraform(this._includedObjectVersions),
      is_enabled: cdktf.stringToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      destination: cosBucketInventoryDestinationToTerraform(this._destination.internalValue),
      filter: cosBucketInventoryFilterToTerraform(this._filter.internalValue),
      optional_fields: cosBucketInventoryOptionalFieldsToTerraform(this._optionalFields.internalValue),
      schedule: cosBucketInventoryScheduleToTerraform(this._schedule.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included_object_versions: {
        value: cdktf.stringToHclTerraform(this._includedObjectVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.stringToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cosBucketInventoryDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketInventoryDestinationList",
      },
      filter: {
        value: cosBucketInventoryFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketInventoryFilterList",
      },
      optional_fields: {
        value: cosBucketInventoryOptionalFieldsToHclTerraform(this._optionalFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketInventoryOptionalFieldsList",
      },
      schedule: {
        value: cosBucketInventoryScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBucketInventoryScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
