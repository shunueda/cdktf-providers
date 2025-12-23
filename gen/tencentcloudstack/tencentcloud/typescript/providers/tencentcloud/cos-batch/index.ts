// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosBatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Appid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#appid CosBatch#appid}
  */
  readonly appid: number;
  /**
  * Whether to confirm before performing the task. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#confirmation_required CosBatch#confirmation_required}
  */
  readonly confirmationRequired?: boolean | cdktf.IResolvable;
  /**
  * Mission description. If you configured this information when you created the task, the content is returned. The description length ranges from 0 to 256 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#description CosBatch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#id CosBatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mission priority. The higher the value, the higher the priority of the task. Priority values range from 0 to 2147483647.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#priority CosBatch#priority}
  */
  readonly priority: number;
  /**
  * COS resource identifier, which is used to identify the role you created. You need this resource identifier to verify your identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#role_arn CosBatch#role_arn}
  */
  readonly roleArn: string;
  /**
  * Current status of the task.
  * Legal parameter values include Active, Cancelled, Cancelling, Complete, Completing, Failed, Failing, New, Paused, Pausing, Preparing, Ready, Suspended.
  * For Update status, when you move a task to the Ready state, COS will assume that you have confirmed the task and will perform it. When you move a task to the Cancelled state, COS cancels the task. Optional parameters include: Ready, Cancelled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#status CosBatch#status}
  */
  readonly status?: string;
  /**
  * Uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#uin CosBatch#uin}
  */
  readonly uin: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#manifest CosBatch#manifest}
  */
  readonly manifest: CosBatchManifest;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#operation CosBatch#operation}
  */
  readonly operation: CosBatchOperation;
  /**
  * report block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#report CosBatch#report}
  */
  readonly report: CosBatchReport;
}
export interface CosBatchManifestLocation {
  /**
  * Specifies the etag of the object list. Length 1-1024 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#etag CosBatch#etag}
  */
  readonly etag: string;
  /**
  * Specifies the unique resource identifier of the object manifest, which is 1-1024 bytes long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#object_arn CosBatch#object_arn}
  */
  readonly objectArn: string;
  /**
  * Specifies the version of the object manifest ID, which is 1-1024 bytes long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#object_version_id CosBatch#object_version_id}
  */
  readonly objectVersionId?: string;
}

export function cosBatchManifestLocationToTerraform(struct?: CosBatchManifestLocationOutputReference | CosBatchManifestLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etag: cdktf.stringToTerraform(struct!.etag),
    object_arn: cdktf.stringToTerraform(struct!.objectArn),
    object_version_id: cdktf.stringToTerraform(struct!.objectVersionId),
  }
}


export function cosBatchManifestLocationToHclTerraform(struct?: CosBatchManifestLocationOutputReference | CosBatchManifestLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etag: {
      value: cdktf.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_arn: {
      value: cdktf.stringToHclTerraform(struct!.objectArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_version_id: {
      value: cdktf.stringToHclTerraform(struct!.objectVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchManifestLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBatchManifestLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._objectArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectArn = this._objectArn;
    }
    if (this._objectVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectVersionId = this._objectVersionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchManifestLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._etag = undefined;
      this._objectArn = undefined;
      this._objectVersionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._etag = value.etag;
      this._objectArn = value.objectArn;
      this._objectVersionId = value.objectVersionId;
    }
  }

  // etag - computed: false, optional: false, required: true
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // object_arn - computed: false, optional: false, required: true
  private _objectArn?: string; 
  public get objectArn() {
    return this.getStringAttribute('object_arn');
  }
  public set objectArn(value: string) {
    this._objectArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectArnInput() {
    return this._objectArn;
  }

  // object_version_id - computed: false, optional: true, required: false
  private _objectVersionId?: string; 
  public get objectVersionId() {
    return this.getStringAttribute('object_version_id');
  }
  public set objectVersionId(value: string) {
    this._objectVersionId = value;
  }
  public resetObjectVersionId() {
    this._objectVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectVersionIdInput() {
    return this._objectVersionId;
  }
}
export interface CosBatchManifestSpec {
  /**
  * Describes the fields contained in the listing, which you need to use to specify CSV file fields when Format is COSBatchOperations_CSV_V1. Legal fields are: Ignore, Bucket, Key, VersionId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#fields CosBatch#fields}
  */
  readonly fields?: string[];
  /**
  * Specifies the format information for the list of objects. Legal fields are: COSBatchOperations_CSV_V1, COSInventoryReport_CSV_V1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#format CosBatch#format}
  */
  readonly format: string;
}

export function cosBatchManifestSpecToTerraform(struct?: CosBatchManifestSpecOutputReference | CosBatchManifestSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function cosBatchManifestSpecToHclTerraform(struct?: CosBatchManifestSpecOutputReference | CosBatchManifestSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBatchManifestSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchManifestSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._format = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._format = value.format;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
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
}
export interface CosBatchManifest {
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#location CosBatch#location}
  */
  readonly location: CosBatchManifestLocation;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#spec CosBatch#spec}
  */
  readonly spec: CosBatchManifestSpec;
}

export function cosBatchManifestToTerraform(struct?: CosBatchManifestOutputReference | CosBatchManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cosBatchManifestLocationToTerraform(struct!.location),
    spec: cosBatchManifestSpecToTerraform(struct!.spec),
  }
}


export function cosBatchManifestToHclTerraform(struct?: CosBatchManifestOutputReference | CosBatchManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cosBatchManifestLocationToHclTerraform(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "CosBatchManifestLocationList",
    },
    spec: {
      value: cosBatchManifestSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "CosBatchManifestSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchManifestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBatchManifest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchManifest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location.internalValue = value.location;
      this._spec.internalValue = value.spec;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location = new CosBatchManifestLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: CosBatchManifestLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new CosBatchManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CosBatchManifestSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface CosBatchOperationCosInitiateRestoreObject {
  /**
  * Sets the number of days after which the copy will be automatically expired and deleted, an integer in the range of 1-365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#expiration_in_days CosBatch#expiration_in_days}
  */
  readonly expirationInDays: number;
  /**
  * Select archive recovery model. Available values: Bulk, Standard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#job_tier CosBatch#job_tier}
  */
  readonly jobTier: string;
}

export function cosBatchOperationCosInitiateRestoreObjectToTerraform(struct?: CosBatchOperationCosInitiateRestoreObjectOutputReference | CosBatchOperationCosInitiateRestoreObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_in_days: cdktf.numberToTerraform(struct!.expirationInDays),
    job_tier: cdktf.stringToTerraform(struct!.jobTier),
  }
}


export function cosBatchOperationCosInitiateRestoreObjectToHclTerraform(struct?: CosBatchOperationCosInitiateRestoreObjectOutputReference | CosBatchOperationCosInitiateRestoreObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_in_days: {
      value: cdktf.numberToHclTerraform(struct!.expirationInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_tier: {
      value: cdktf.stringToHclTerraform(struct!.jobTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchOperationCosInitiateRestoreObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBatchOperationCosInitiateRestoreObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationInDays = this._expirationInDays;
    }
    if (this._jobTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTier = this._jobTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchOperationCosInitiateRestoreObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationInDays = undefined;
      this._jobTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationInDays = value.expirationInDays;
      this._jobTier = value.jobTier;
    }
  }

  // expiration_in_days - computed: false, optional: false, required: true
  private _expirationInDays?: number; 
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }
  public set expirationInDays(value: number) {
    this._expirationInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInDaysInput() {
    return this._expirationInDays;
  }

  // job_tier - computed: false, optional: false, required: true
  private _jobTier?: string; 
  public get jobTier() {
    return this.getStringAttribute('job_tier');
  }
  public set jobTier(value: string) {
    this._jobTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTierInput() {
    return this._jobTier;
  }
}
export interface CosBatchOperationCosPutObjectCopyAccessControlGrants {
  /**
  * User name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#display_name CosBatch#display_name}
  */
  readonly displayName?: string;
  /**
  * User ID (UIN) in qcs format. For example: qcs::cam::uin/100000000001:uin/100000000001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#identifier CosBatch#identifier}
  */
  readonly identifier: string;
  /**
  * Specify a permission to be granted. Enumerated value: READ,WRITE,FULL_CONTROL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#permission CosBatch#permission}
  */
  readonly permission: string;
  /**
  * Specifies the type of Identifier. Currently, only user ID is supported. Enumerated value: ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#type_identifier CosBatch#type_identifier}
  */
  readonly typeIdentifier: string;
}

export function cosBatchOperationCosPutObjectCopyAccessControlGrantsToTerraform(struct?: CosBatchOperationCosPutObjectCopyAccessControlGrantsOutputReference | CosBatchOperationCosPutObjectCopyAccessControlGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    permission: cdktf.stringToTerraform(struct!.permission),
    type_identifier: cdktf.stringToTerraform(struct!.typeIdentifier),
  }
}


export function cosBatchOperationCosPutObjectCopyAccessControlGrantsToHclTerraform(struct?: CosBatchOperationCosPutObjectCopyAccessControlGrantsOutputReference | CosBatchOperationCosPutObjectCopyAccessControlGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_identifier: {
      value: cdktf.stringToHclTerraform(struct!.typeIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchOperationCosPutObjectCopyAccessControlGrantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBatchOperationCosPutObjectCopyAccessControlGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._typeIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeIdentifier = this._typeIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchOperationCosPutObjectCopyAccessControlGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._identifier = undefined;
      this._permission = undefined;
      this._typeIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._identifier = value.identifier;
      this._permission = value.permission;
      this._typeIdentifier = value.typeIdentifier;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // type_identifier - computed: false, optional: false, required: true
  private _typeIdentifier?: string; 
  public get typeIdentifier() {
    return this.getStringAttribute('type_identifier');
  }
  public set typeIdentifier(value: string) {
    this._typeIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdentifierInput() {
    return this._typeIdentifier;
  }
}
export interface CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadata {
  /**
  * key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#key CosBatch#key}
  */
  readonly key: string;
  /**
  * value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#value CosBatch#value}
  */
  readonly value: string;
}

export function cosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataToTerraform(struct?: CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataToHclTerraform(struct?: CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataList extends cdktf.ComplexList {
  public internalValue? : CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadata[] | cdktf.IResolvable

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
  public get(index: number): CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataOutputReference {
    return new CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBatchOperationCosPutObjectCopyNewObjectMetadata {
  /**
  * The caching instructions defined in RFC 2616 are saved as object metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#cache_control CosBatch#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * The file name defined in RFC 2616 is saved as object metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#content_disposition CosBatch#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * The encoding format defined in RFC 2616 is saved as object metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#content_encoding CosBatch#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * The content types defined in RFC 2616 are saved as object metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#content_type CosBatch#content_type}
  */
  readonly contentType?: string;
  /**
  * The cache expiration time defined in RFC 2616 is saved as object metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#http_expires_date CosBatch#http_expires_date}
  */
  readonly httpExpiresDate?: string;
  /**
  * Server encryption algorithm. Currently, only AES256 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#sse_algorithm CosBatch#sse_algorithm}
  */
  readonly sseAlgorithm?: string;
  /**
  * user_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#user_metadata CosBatch#user_metadata}
  */
  readonly userMetadata?: CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadata[] | cdktf.IResolvable;
}

export function cosBatchOperationCosPutObjectCopyNewObjectMetadataToTerraform(struct?: CosBatchOperationCosPutObjectCopyNewObjectMetadataOutputReference | CosBatchOperationCosPutObjectCopyNewObjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_control: cdktf.stringToTerraform(struct!.cacheControl),
    content_disposition: cdktf.stringToTerraform(struct!.contentDisposition),
    content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    http_expires_date: cdktf.stringToTerraform(struct!.httpExpiresDate),
    sse_algorithm: cdktf.stringToTerraform(struct!.sseAlgorithm),
    user_metadata: cdktf.listMapper(cosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataToTerraform, true)(struct!.userMetadata),
  }
}


export function cosBatchOperationCosPutObjectCopyNewObjectMetadataToHclTerraform(struct?: CosBatchOperationCosPutObjectCopyNewObjectMetadataOutputReference | CosBatchOperationCosPutObjectCopyNewObjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_control: {
      value: cdktf.stringToHclTerraform(struct!.cacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_disposition: {
      value: cdktf.stringToHclTerraform(struct!.contentDisposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.contentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_expires_date: {
      value: cdktf.stringToHclTerraform(struct!.httpExpiresDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sse_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sseAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_metadata: {
      value: cdktf.listMapperHcl(cosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataToHclTerraform, true)(struct!.userMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchOperationCosPutObjectCopyNewObjectMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBatchOperationCosPutObjectCopyNewObjectMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheControl = this._cacheControl;
    }
    if (this._contentDisposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentDisposition = this._contentDisposition;
    }
    if (this._contentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentEncoding = this._contentEncoding;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._httpExpiresDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpExpiresDate = this._httpExpiresDate;
    }
    if (this._sseAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sseAlgorithm = this._sseAlgorithm;
    }
    if (this._userMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMetadata = this._userMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchOperationCosPutObjectCopyNewObjectMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheControl = undefined;
      this._contentDisposition = undefined;
      this._contentEncoding = undefined;
      this._contentType = undefined;
      this._httpExpiresDate = undefined;
      this._sseAlgorithm = undefined;
      this._userMetadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheControl = value.cacheControl;
      this._contentDisposition = value.contentDisposition;
      this._contentEncoding = value.contentEncoding;
      this._contentType = value.contentType;
      this._httpExpiresDate = value.httpExpiresDate;
      this._sseAlgorithm = value.sseAlgorithm;
      this._userMetadata.internalValue = value.userMetadata;
    }
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // http_expires_date - computed: false, optional: true, required: false
  private _httpExpiresDate?: string; 
  public get httpExpiresDate() {
    return this.getStringAttribute('http_expires_date');
  }
  public set httpExpiresDate(value: string) {
    this._httpExpiresDate = value;
  }
  public resetHttpExpiresDate() {
    this._httpExpiresDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpExpiresDateInput() {
    return this._httpExpiresDate;
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

  // user_metadata - computed: false, optional: true, required: false
  private _userMetadata = new CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadataList(this, "user_metadata", false);
  public get userMetadata() {
    return this._userMetadata;
  }
  public putUserMetadata(value: CosBatchOperationCosPutObjectCopyNewObjectMetadataUserMetadata[] | cdktf.IResolvable) {
    this._userMetadata.internalValue = value;
  }
  public resetUserMetadata() {
    this._userMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMetadataInput() {
    return this._userMetadata.internalValue;
  }
}
export interface CosBatchOperationCosPutObjectCopyNewObjectTagging {
  /**
  * key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#key CosBatch#key}
  */
  readonly key: string;
  /**
  * value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#value CosBatch#value}
  */
  readonly value: string;
}

export function cosBatchOperationCosPutObjectCopyNewObjectTaggingToTerraform(struct?: CosBatchOperationCosPutObjectCopyNewObjectTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cosBatchOperationCosPutObjectCopyNewObjectTaggingToHclTerraform(struct?: CosBatchOperationCosPutObjectCopyNewObjectTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchOperationCosPutObjectCopyNewObjectTaggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CosBatchOperationCosPutObjectCopyNewObjectTagging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchOperationCosPutObjectCopyNewObjectTagging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CosBatchOperationCosPutObjectCopyNewObjectTaggingList extends cdktf.ComplexList {
  public internalValue? : CosBatchOperationCosPutObjectCopyNewObjectTagging[] | cdktf.IResolvable

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
  public get(index: number): CosBatchOperationCosPutObjectCopyNewObjectTaggingOutputReference {
    return new CosBatchOperationCosPutObjectCopyNewObjectTaggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CosBatchOperationCosPutObjectCopy {
  /**
  * This element specifies how ACL is copied. Valid values:
  * - Copy: inherits the source object ACL
  * - Replaced: replace source ACL
  * - Add: add a new ACL based on the source ACL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#access_control_directive CosBatch#access_control_directive}
  */
  readonly accessControlDirective?: string;
  /**
  * Defines the ACL property of the object. Valid values: private, public-read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#canned_access_control_list CosBatch#canned_access_control_list}
  */
  readonly cannedAccessControlList?: string;
  /**
  * This element specifies whether to copy object metadata from the source object or replace it with metadata in the < NewObjectMetadata > element. Valid values are: Copy, Replaced, Add. Copy: inherit source object metadata; Replaced: replace source metadata; Add: add new metadata based on source metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#metadata_directive CosBatch#metadata_directive}
  */
  readonly metadataDirective?: string;
  /**
  * When the object is modified after the specified time, the operation is performed, otherwise 412 is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#modified_since_constraint CosBatch#modified_since_constraint}
  */
  readonly modifiedSinceConstraint?: number;
  /**
  * Specifies whether the prefix of the source object needs to be replaced. A value of true indicates the replacement object prefix, which needs to be used with <ResourcesPrefix> and <TargetKeyPrefix>. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#prefix_replace CosBatch#prefix_replace}
  */
  readonly prefixReplace?: boolean | cdktf.IResolvable;
  /**
  * This field is valid only when the < PrefixReplace > value is true. Specify the source object prefix to be replaced, and the replacement directory should end with `/`. Can be empty with a maximum length of 1024 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#resources_prefix CosBatch#resources_prefix}
  */
  readonly resourcesPrefix?: string;
  /**
  * Sets the storage level of the object. Enumerated value: STANDARD,STANDARD_IA. Default value: STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#storage_class CosBatch#storage_class}
  */
  readonly storageClass?: string;
  /**
  * This element specifies whether to copy the object tag from the source object or replace it with the tag in the < NewObjectTagging > element. Valid values are: Copy, Replaced, Add. Copy: inherits the source object tag; Replaced: replaces the source tag; Add: adds a new tag based on the source tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#tagging_directive CosBatch#tagging_directive}
  */
  readonly taggingDirective?: string;
  /**
  * This field is valid only when the <PrefixReplace> value is true. This value represents the replaced prefix, and the replacement directory should end with /. Can be empty with a maximum length of 1024 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#target_key_prefix CosBatch#target_key_prefix}
  */
  readonly targetKeyPrefix?: string;
  /**
  * Sets the target bucket for the Copy. Use qcs to specify, for example, qcs::cos:ap-chengdu:uid/1250000000:examplebucket-1250000000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#target_resource CosBatch#target_resource}
  */
  readonly targetResource: string;
  /**
  * When the object has not been modified after the specified time, the operation is performed, otherwise 412 is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#unmodified_since_constraint CosBatch#unmodified_since_constraint}
  */
  readonly unmodifiedSinceConstraint?: number;
  /**
  * access_control_grants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#access_control_grants CosBatch#access_control_grants}
  */
  readonly accessControlGrants?: CosBatchOperationCosPutObjectCopyAccessControlGrants;
  /**
  * new_object_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#new_object_metadata CosBatch#new_object_metadata}
  */
  readonly newObjectMetadata?: CosBatchOperationCosPutObjectCopyNewObjectMetadata;
  /**
  * new_object_tagging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#new_object_tagging CosBatch#new_object_tagging}
  */
  readonly newObjectTagging?: CosBatchOperationCosPutObjectCopyNewObjectTagging[] | cdktf.IResolvable;
}

export function cosBatchOperationCosPutObjectCopyToTerraform(struct?: CosBatchOperationCosPutObjectCopyOutputReference | CosBatchOperationCosPutObjectCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_directive: cdktf.stringToTerraform(struct!.accessControlDirective),
    canned_access_control_list: cdktf.stringToTerraform(struct!.cannedAccessControlList),
    metadata_directive: cdktf.stringToTerraform(struct!.metadataDirective),
    modified_since_constraint: cdktf.numberToTerraform(struct!.modifiedSinceConstraint),
    prefix_replace: cdktf.booleanToTerraform(struct!.prefixReplace),
    resources_prefix: cdktf.stringToTerraform(struct!.resourcesPrefix),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    tagging_directive: cdktf.stringToTerraform(struct!.taggingDirective),
    target_key_prefix: cdktf.stringToTerraform(struct!.targetKeyPrefix),
    target_resource: cdktf.stringToTerraform(struct!.targetResource),
    unmodified_since_constraint: cdktf.numberToTerraform(struct!.unmodifiedSinceConstraint),
    access_control_grants: cosBatchOperationCosPutObjectCopyAccessControlGrantsToTerraform(struct!.accessControlGrants),
    new_object_metadata: cosBatchOperationCosPutObjectCopyNewObjectMetadataToTerraform(struct!.newObjectMetadata),
    new_object_tagging: cdktf.listMapper(cosBatchOperationCosPutObjectCopyNewObjectTaggingToTerraform, true)(struct!.newObjectTagging),
  }
}


export function cosBatchOperationCosPutObjectCopyToHclTerraform(struct?: CosBatchOperationCosPutObjectCopyOutputReference | CosBatchOperationCosPutObjectCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_control_directive: {
      value: cdktf.stringToHclTerraform(struct!.accessControlDirective),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    canned_access_control_list: {
      value: cdktf.stringToHclTerraform(struct!.cannedAccessControlList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_directive: {
      value: cdktf.stringToHclTerraform(struct!.metadataDirective),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modified_since_constraint: {
      value: cdktf.numberToHclTerraform(struct!.modifiedSinceConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_replace: {
      value: cdktf.booleanToHclTerraform(struct!.prefixReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources_prefix: {
      value: cdktf.stringToHclTerraform(struct!.resourcesPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tagging_directive: {
      value: cdktf.stringToHclTerraform(struct!.taggingDirective),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.targetKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource: {
      value: cdktf.stringToHclTerraform(struct!.targetResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unmodified_since_constraint: {
      value: cdktf.numberToHclTerraform(struct!.unmodifiedSinceConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_control_grants: {
      value: cosBatchOperationCosPutObjectCopyAccessControlGrantsToHclTerraform(struct!.accessControlGrants),
      isBlock: true,
      type: "list",
      storageClassType: "CosBatchOperationCosPutObjectCopyAccessControlGrantsList",
    },
    new_object_metadata: {
      value: cosBatchOperationCosPutObjectCopyNewObjectMetadataToHclTerraform(struct!.newObjectMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "CosBatchOperationCosPutObjectCopyNewObjectMetadataList",
    },
    new_object_tagging: {
      value: cdktf.listMapperHcl(cosBatchOperationCosPutObjectCopyNewObjectTaggingToHclTerraform, true)(struct!.newObjectTagging),
      isBlock: true,
      type: "list",
      storageClassType: "CosBatchOperationCosPutObjectCopyNewObjectTaggingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchOperationCosPutObjectCopyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBatchOperationCosPutObjectCopy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlDirective !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlDirective = this._accessControlDirective;
    }
    if (this._cannedAccessControlList !== undefined) {
      hasAnyValues = true;
      internalValueResult.cannedAccessControlList = this._cannedAccessControlList;
    }
    if (this._metadataDirective !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataDirective = this._metadataDirective;
    }
    if (this._modifiedSinceConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiedSinceConstraint = this._modifiedSinceConstraint;
    }
    if (this._prefixReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixReplace = this._prefixReplace;
    }
    if (this._resourcesPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcesPrefix = this._resourcesPrefix;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._taggingDirective !== undefined) {
      hasAnyValues = true;
      internalValueResult.taggingDirective = this._taggingDirective;
    }
    if (this._targetKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetKeyPrefix = this._targetKeyPrefix;
    }
    if (this._targetResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResource = this._targetResource;
    }
    if (this._unmodifiedSinceConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmodifiedSinceConstraint = this._unmodifiedSinceConstraint;
    }
    if (this._accessControlGrants?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlGrants = this._accessControlGrants?.internalValue;
    }
    if (this._newObjectMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newObjectMetadata = this._newObjectMetadata?.internalValue;
    }
    if (this._newObjectTagging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newObjectTagging = this._newObjectTagging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchOperationCosPutObjectCopy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessControlDirective = undefined;
      this._cannedAccessControlList = undefined;
      this._metadataDirective = undefined;
      this._modifiedSinceConstraint = undefined;
      this._prefixReplace = undefined;
      this._resourcesPrefix = undefined;
      this._storageClass = undefined;
      this._taggingDirective = undefined;
      this._targetKeyPrefix = undefined;
      this._targetResource = undefined;
      this._unmodifiedSinceConstraint = undefined;
      this._accessControlGrants.internalValue = undefined;
      this._newObjectMetadata.internalValue = undefined;
      this._newObjectTagging.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessControlDirective = value.accessControlDirective;
      this._cannedAccessControlList = value.cannedAccessControlList;
      this._metadataDirective = value.metadataDirective;
      this._modifiedSinceConstraint = value.modifiedSinceConstraint;
      this._prefixReplace = value.prefixReplace;
      this._resourcesPrefix = value.resourcesPrefix;
      this._storageClass = value.storageClass;
      this._taggingDirective = value.taggingDirective;
      this._targetKeyPrefix = value.targetKeyPrefix;
      this._targetResource = value.targetResource;
      this._unmodifiedSinceConstraint = value.unmodifiedSinceConstraint;
      this._accessControlGrants.internalValue = value.accessControlGrants;
      this._newObjectMetadata.internalValue = value.newObjectMetadata;
      this._newObjectTagging.internalValue = value.newObjectTagging;
    }
  }

  // access_control_directive - computed: false, optional: true, required: false
  private _accessControlDirective?: string; 
  public get accessControlDirective() {
    return this.getStringAttribute('access_control_directive');
  }
  public set accessControlDirective(value: string) {
    this._accessControlDirective = value;
  }
  public resetAccessControlDirective() {
    this._accessControlDirective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlDirectiveInput() {
    return this._accessControlDirective;
  }

  // canned_access_control_list - computed: false, optional: true, required: false
  private _cannedAccessControlList?: string; 
  public get cannedAccessControlList() {
    return this.getStringAttribute('canned_access_control_list');
  }
  public set cannedAccessControlList(value: string) {
    this._cannedAccessControlList = value;
  }
  public resetCannedAccessControlList() {
    this._cannedAccessControlList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cannedAccessControlListInput() {
    return this._cannedAccessControlList;
  }

  // metadata_directive - computed: false, optional: true, required: false
  private _metadataDirective?: string; 
  public get metadataDirective() {
    return this.getStringAttribute('metadata_directive');
  }
  public set metadataDirective(value: string) {
    this._metadataDirective = value;
  }
  public resetMetadataDirective() {
    this._metadataDirective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataDirectiveInput() {
    return this._metadataDirective;
  }

  // modified_since_constraint - computed: false, optional: true, required: false
  private _modifiedSinceConstraint?: number; 
  public get modifiedSinceConstraint() {
    return this.getNumberAttribute('modified_since_constraint');
  }
  public set modifiedSinceConstraint(value: number) {
    this._modifiedSinceConstraint = value;
  }
  public resetModifiedSinceConstraint() {
    this._modifiedSinceConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedSinceConstraintInput() {
    return this._modifiedSinceConstraint;
  }

  // prefix_replace - computed: false, optional: true, required: false
  private _prefixReplace?: boolean | cdktf.IResolvable; 
  public get prefixReplace() {
    return this.getBooleanAttribute('prefix_replace');
  }
  public set prefixReplace(value: boolean | cdktf.IResolvable) {
    this._prefixReplace = value;
  }
  public resetPrefixReplace() {
    this._prefixReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixReplaceInput() {
    return this._prefixReplace;
  }

  // resources_prefix - computed: false, optional: true, required: false
  private _resourcesPrefix?: string; 
  public get resourcesPrefix() {
    return this.getStringAttribute('resources_prefix');
  }
  public set resourcesPrefix(value: string) {
    this._resourcesPrefix = value;
  }
  public resetResourcesPrefix() {
    this._resourcesPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesPrefixInput() {
    return this._resourcesPrefix;
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

  // tagging_directive - computed: false, optional: true, required: false
  private _taggingDirective?: string; 
  public get taggingDirective() {
    return this.getStringAttribute('tagging_directive');
  }
  public set taggingDirective(value: string) {
    this._taggingDirective = value;
  }
  public resetTaggingDirective() {
    this._taggingDirective = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingDirectiveInput() {
    return this._taggingDirective;
  }

  // target_key_prefix - computed: false, optional: true, required: false
  private _targetKeyPrefix?: string; 
  public get targetKeyPrefix() {
    return this.getStringAttribute('target_key_prefix');
  }
  public set targetKeyPrefix(value: string) {
    this._targetKeyPrefix = value;
  }
  public resetTargetKeyPrefix() {
    this._targetKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetKeyPrefixInput() {
    return this._targetKeyPrefix;
  }

  // target_resource - computed: false, optional: false, required: true
  private _targetResource?: string; 
  public get targetResource() {
    return this.getStringAttribute('target_resource');
  }
  public set targetResource(value: string) {
    this._targetResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceInput() {
    return this._targetResource;
  }

  // unmodified_since_constraint - computed: false, optional: true, required: false
  private _unmodifiedSinceConstraint?: number; 
  public get unmodifiedSinceConstraint() {
    return this.getNumberAttribute('unmodified_since_constraint');
  }
  public set unmodifiedSinceConstraint(value: number) {
    this._unmodifiedSinceConstraint = value;
  }
  public resetUnmodifiedSinceConstraint() {
    this._unmodifiedSinceConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmodifiedSinceConstraintInput() {
    return this._unmodifiedSinceConstraint;
  }

  // access_control_grants - computed: false, optional: true, required: false
  private _accessControlGrants = new CosBatchOperationCosPutObjectCopyAccessControlGrantsOutputReference(this, "access_control_grants");
  public get accessControlGrants() {
    return this._accessControlGrants;
  }
  public putAccessControlGrants(value: CosBatchOperationCosPutObjectCopyAccessControlGrants) {
    this._accessControlGrants.internalValue = value;
  }
  public resetAccessControlGrants() {
    this._accessControlGrants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlGrantsInput() {
    return this._accessControlGrants.internalValue;
  }

  // new_object_metadata - computed: false, optional: true, required: false
  private _newObjectMetadata = new CosBatchOperationCosPutObjectCopyNewObjectMetadataOutputReference(this, "new_object_metadata");
  public get newObjectMetadata() {
    return this._newObjectMetadata;
  }
  public putNewObjectMetadata(value: CosBatchOperationCosPutObjectCopyNewObjectMetadata) {
    this._newObjectMetadata.internalValue = value;
  }
  public resetNewObjectMetadata() {
    this._newObjectMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newObjectMetadataInput() {
    return this._newObjectMetadata.internalValue;
  }

  // new_object_tagging - computed: false, optional: true, required: false
  private _newObjectTagging = new CosBatchOperationCosPutObjectCopyNewObjectTaggingList(this, "new_object_tagging", false);
  public get newObjectTagging() {
    return this._newObjectTagging;
  }
  public putNewObjectTagging(value: CosBatchOperationCosPutObjectCopyNewObjectTagging[] | cdktf.IResolvable) {
    this._newObjectTagging.internalValue = value;
  }
  public resetNewObjectTagging() {
    this._newObjectTagging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newObjectTaggingInput() {
    return this._newObjectTagging.internalValue;
  }
}
export interface CosBatchOperation {
  /**
  * cos_initiate_restore_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#cos_initiate_restore_object CosBatch#cos_initiate_restore_object}
  */
  readonly cosInitiateRestoreObject?: CosBatchOperationCosInitiateRestoreObject;
  /**
  * cos_put_object_copy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#cos_put_object_copy CosBatch#cos_put_object_copy}
  */
  readonly cosPutObjectCopy?: CosBatchOperationCosPutObjectCopy;
}

export function cosBatchOperationToTerraform(struct?: CosBatchOperationOutputReference | CosBatchOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos_initiate_restore_object: cosBatchOperationCosInitiateRestoreObjectToTerraform(struct!.cosInitiateRestoreObject),
    cos_put_object_copy: cosBatchOperationCosPutObjectCopyToTerraform(struct!.cosPutObjectCopy),
  }
}


export function cosBatchOperationToHclTerraform(struct?: CosBatchOperationOutputReference | CosBatchOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos_initiate_restore_object: {
      value: cosBatchOperationCosInitiateRestoreObjectToHclTerraform(struct!.cosInitiateRestoreObject),
      isBlock: true,
      type: "list",
      storageClassType: "CosBatchOperationCosInitiateRestoreObjectList",
    },
    cos_put_object_copy: {
      value: cosBatchOperationCosPutObjectCopyToHclTerraform(struct!.cosPutObjectCopy),
      isBlock: true,
      type: "list",
      storageClassType: "CosBatchOperationCosPutObjectCopyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBatchOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cosInitiateRestoreObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInitiateRestoreObject = this._cosInitiateRestoreObject?.internalValue;
    }
    if (this._cosPutObjectCopy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosPutObjectCopy = this._cosPutObjectCopy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cosInitiateRestoreObject.internalValue = undefined;
      this._cosPutObjectCopy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cosInitiateRestoreObject.internalValue = value.cosInitiateRestoreObject;
      this._cosPutObjectCopy.internalValue = value.cosPutObjectCopy;
    }
  }

  // cos_initiate_restore_object - computed: false, optional: true, required: false
  private _cosInitiateRestoreObject = new CosBatchOperationCosInitiateRestoreObjectOutputReference(this, "cos_initiate_restore_object");
  public get cosInitiateRestoreObject() {
    return this._cosInitiateRestoreObject;
  }
  public putCosInitiateRestoreObject(value: CosBatchOperationCosInitiateRestoreObject) {
    this._cosInitiateRestoreObject.internalValue = value;
  }
  public resetCosInitiateRestoreObject() {
    this._cosInitiateRestoreObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInitiateRestoreObjectInput() {
    return this._cosInitiateRestoreObject.internalValue;
  }

  // cos_put_object_copy - computed: false, optional: true, required: false
  private _cosPutObjectCopy = new CosBatchOperationCosPutObjectCopyOutputReference(this, "cos_put_object_copy");
  public get cosPutObjectCopy() {
    return this._cosPutObjectCopy;
  }
  public putCosPutObjectCopy(value: CosBatchOperationCosPutObjectCopy) {
    this._cosPutObjectCopy.internalValue = value;
  }
  public resetCosPutObjectCopy() {
    this._cosPutObjectCopy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosPutObjectCopyInput() {
    return this._cosPutObjectCopy.internalValue;
  }
}
export interface CosBatchReport {
  /**
  * Delivery bucket for task completion reports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#bucket CosBatch#bucket}
  */
  readonly bucket: string;
  /**
  * Whether to output the task completion report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#enabled CosBatch#enabled}
  */
  readonly enabled: string;
  /**
  * Task completion report format information. Legal value: Report_CSV_V1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#format CosBatch#format}
  */
  readonly format: string;
  /**
  * Prefix information for the task completion report. Length 0-256 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#prefix CosBatch#prefix}
  */
  readonly prefix?: string;
  /**
  * Task completion report the task information that needs to be recorded to determine whether to record the execution information of all operations or the information of failed operations. Legal values: AllTasks, FailedTasksOnly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#report_scope CosBatch#report_scope}
  */
  readonly reportScope: string;
}

export function cosBatchReportToTerraform(struct?: CosBatchReportOutputReference | CosBatchReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    format: cdktf.stringToTerraform(struct!.format),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    report_scope: cdktf.stringToTerraform(struct!.reportScope),
  }
}


export function cosBatchReportToHclTerraform(struct?: CosBatchReportOutputReference | CosBatchReport): any {
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
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
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
    report_scope: {
      value: cdktf.stringToHclTerraform(struct!.reportScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CosBatchReportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CosBatchReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._reportScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportScope = this._reportScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosBatchReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._enabled = undefined;
      this._format = undefined;
      this._prefix = undefined;
      this._reportScope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._enabled = value.enabled;
      this._format = value.format;
      this._prefix = value.prefix;
      this._reportScope = value.reportScope;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // report_scope - computed: false, optional: false, required: true
  private _reportScope?: string; 
  public get reportScope() {
    return this.getStringAttribute('report_scope');
  }
  public set reportScope(value: string) {
    this._reportScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportScopeInput() {
    return this._reportScope;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch tencentcloud_cos_batch}
*/
export class CosBatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cos_batch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosBatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosBatch to import
  * @param importFromId The id of the existing CosBatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosBatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cos_batch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cos_batch tencentcloud_cos_batch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosBatchConfig
  */
  public constructor(scope: Construct, id: string, config: CosBatchConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cos_batch',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appid = config.appid;
    this._confirmationRequired = config.confirmationRequired;
    this._description = config.description;
    this._id = config.id;
    this._priority = config.priority;
    this._roleArn = config.roleArn;
    this._status = config.status;
    this._uin = config.uin;
    this._manifest.internalValue = config.manifest;
    this._operation.internalValue = config.operation;
    this._report.internalValue = config.report;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appid - computed: false, optional: false, required: true
  private _appid?: number; 
  public get appid() {
    return this.getNumberAttribute('appid');
  }
  public set appid(value: number) {
    this._appid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appidInput() {
    return this._appid;
  }

  // confirmation_required - computed: false, optional: true, required: false
  private _confirmationRequired?: boolean | cdktf.IResolvable; 
  public get confirmationRequired() {
    return this.getBooleanAttribute('confirmation_required');
  }
  public set confirmationRequired(value: boolean | cdktf.IResolvable) {
    this._confirmationRequired = value;
  }
  public resetConfirmationRequired() {
    this._confirmationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationRequiredInput() {
    return this._confirmationRequired;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // uin - computed: false, optional: false, required: true
  private _uin?: string; 
  public get uin() {
    return this.getStringAttribute('uin');
  }
  public set uin(value: string) {
    this._uin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uinInput() {
    return this._uin;
  }

  // manifest - computed: false, optional: false, required: true
  private _manifest = new CosBatchManifestOutputReference(this, "manifest");
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: CosBatchManifest) {
    this._manifest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest.internalValue;
  }

  // operation - computed: false, optional: false, required: true
  private _operation = new CosBatchOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: CosBatchOperation) {
    this._operation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }

  // report - computed: false, optional: false, required: true
  private _report = new CosBatchReportOutputReference(this, "report");
  public get report() {
    return this._report;
  }
  public putReport(value: CosBatchReport) {
    this._report.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appid: cdktf.numberToTerraform(this._appid),
      confirmation_required: cdktf.booleanToTerraform(this._confirmationRequired),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      status: cdktf.stringToTerraform(this._status),
      uin: cdktf.stringToTerraform(this._uin),
      manifest: cosBatchManifestToTerraform(this._manifest.internalValue),
      operation: cosBatchOperationToTerraform(this._operation.internalValue),
      report: cosBatchReportToTerraform(this._report.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appid: {
        value: cdktf.numberToHclTerraform(this._appid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      confirmation_required: {
        value: cdktf.booleanToHclTerraform(this._confirmationRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
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
      uin: {
        value: cdktf.stringToHclTerraform(this._uin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest: {
        value: cosBatchManifestToHclTerraform(this._manifest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBatchManifestList",
      },
      operation: {
        value: cosBatchOperationToHclTerraform(this._operation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBatchOperationList",
      },
      report: {
        value: cosBatchReportToHclTerraform(this._report.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CosBatchReportList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
