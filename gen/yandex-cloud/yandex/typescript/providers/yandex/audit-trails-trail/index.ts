// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditTrailsTrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#description AuditTrailsTrail#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#folder_id AuditTrailsTrail#folder_id}
  */
  readonly folderId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#id AuditTrailsTrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#labels AuditTrailsTrail#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#name AuditTrailsTrail#name}
  */
  readonly name: string;
  /**
  * [Service account](https://yandex.cloud/docs/iam/concepts/users/service-accounts) which linked to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#service_account_id AuditTrailsTrail#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * data_stream_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#data_stream_destination AuditTrailsTrail#data_stream_destination}
  */
  readonly dataStreamDestination?: AuditTrailsTrailDataStreamDestination;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#filter AuditTrailsTrail#filter}
  */
  readonly filter?: AuditTrailsTrailFilter;
  /**
  * filtering_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#filtering_policy AuditTrailsTrail#filtering_policy}
  */
  readonly filteringPolicy?: AuditTrailsTrailFilteringPolicy;
  /**
  * logging_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#logging_destination AuditTrailsTrail#logging_destination}
  */
  readonly loggingDestination?: AuditTrailsTrailLoggingDestination;
  /**
  * storage_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#storage_destination AuditTrailsTrail#storage_destination}
  */
  readonly storageDestination?: AuditTrailsTrailStorageDestination;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#timeouts AuditTrailsTrail#timeouts}
  */
  readonly timeouts?: AuditTrailsTrailTimeouts;
}
export interface AuditTrailsTrailDataStreamDestination {
  /**
  * Codec for compressing events. Allowed values: RAW, GZIP, ZSTD. Default: RAW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#codec AuditTrailsTrail#codec}
  */
  readonly codec?: string;
  /**
  * ID of the [YDB](https://yandex.cloud/docs/ydb/concepts/resources) hosting the destination data stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#database_id AuditTrailsTrail#database_id}
  */
  readonly databaseId: string;
  /**
  * Name of the [YDS stream](https://yandex.cloud/docs/data-streams/concepts/glossary#stream-concepts) belonging to the specified YDB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#stream_name AuditTrailsTrail#stream_name}
  */
  readonly streamName: string;
}

export function auditTrailsTrailDataStreamDestinationToTerraform(struct?: AuditTrailsTrailDataStreamDestinationOutputReference | AuditTrailsTrailDataStreamDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codec: cdktf.stringToTerraform(struct!.codec),
    database_id: cdktf.stringToTerraform(struct!.databaseId),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}


export function auditTrailsTrailDataStreamDestinationToHclTerraform(struct?: AuditTrailsTrailDataStreamDestinationOutputReference | AuditTrailsTrailDataStreamDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_id: {
      value: cdktf.stringToHclTerraform(struct!.databaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_name: {
      value: cdktf.stringToHclTerraform(struct!.streamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailDataStreamDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailDataStreamDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._databaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseId = this._databaseId;
    }
    if (this._streamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamName = this._streamName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailDataStreamDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codec = undefined;
      this._databaseId = undefined;
      this._streamName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codec = value.codec;
      this._databaseId = value.databaseId;
      this._streamName = value.streamName;
    }
  }

  // codec - computed: false, optional: true, required: false
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  public resetCodec() {
    this._codec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }
}
export interface AuditTrailsTrailFilterEventFiltersCategories {
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#plane AuditTrailsTrail#plane}
  */
  readonly plane: string;
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#type AuditTrailsTrail#type}
  */
  readonly type: string;
}

export function auditTrailsTrailFilterEventFiltersCategoriesToTerraform(struct?: AuditTrailsTrailFilterEventFiltersCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plane: cdktf.stringToTerraform(struct!.plane),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function auditTrailsTrailFilterEventFiltersCategoriesToHclTerraform(struct?: AuditTrailsTrailFilterEventFiltersCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plane: {
      value: cdktf.stringToHclTerraform(struct!.plane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterEventFiltersCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditTrailsTrailFilterEventFiltersCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plane !== undefined) {
      hasAnyValues = true;
      internalValueResult.plane = this._plane;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterEventFiltersCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._plane = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._plane = value.plane;
      this._type = value.type;
    }
  }

  // plane - computed: false, optional: false, required: true
  private _plane?: string; 
  public get plane() {
    return this.getStringAttribute('plane');
  }
  public set plane(value: string) {
    this._plane = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planeInput() {
    return this._plane;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class AuditTrailsTrailFilterEventFiltersCategoriesList extends cdktf.ComplexList {
  public internalValue? : AuditTrailsTrailFilterEventFiltersCategories[] | cdktf.IResolvable

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
  public get(index: number): AuditTrailsTrailFilterEventFiltersCategoriesOutputReference {
    return new AuditTrailsTrailFilterEventFiltersCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditTrailsTrailFilterEventFiltersPathFilterAnyFilter {
  /**
  * Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_id AuditTrailsTrail#resource_id}
  */
  readonly resourceId: string;
  /**
  * Resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_type AuditTrailsTrail#resource_type}
  */
  readonly resourceType: string;
}

export function auditTrailsTrailFilterEventFiltersPathFilterAnyFilterToTerraform(struct?: AuditTrailsTrailFilterEventFiltersPathFilterAnyFilterOutputReference | AuditTrailsTrailFilterEventFiltersPathFilterAnyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function auditTrailsTrailFilterEventFiltersPathFilterAnyFilterToHclTerraform(struct?: AuditTrailsTrailFilterEventFiltersPathFilterAnyFilterOutputReference | AuditTrailsTrailFilterEventFiltersPathFilterAnyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterEventFiltersPathFilterAnyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilterEventFiltersPathFilterAnyFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterEventFiltersPathFilterAnyFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}
export interface AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFilters {
  /**
  * Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_id AuditTrailsTrail#resource_id}
  */
  readonly resourceId: string;
  /**
  * Resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_type AuditTrailsTrail#resource_type}
  */
  readonly resourceType: string;
}

export function auditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersToTerraform(struct?: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function auditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersToHclTerraform(struct?: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersList extends cdktf.ComplexList {
  public internalValue? : AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFilters[] | cdktf.IResolvable

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
  public get(index: number): AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersOutputReference {
    return new AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditTrailsTrailFilterEventFiltersPathFilterSomeFilter {
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_id AuditTrailsTrail#resource_id}
  */
  readonly resourceId: string;
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_type AuditTrailsTrail#resource_type}
  */
  readonly resourceType: string;
  /**
  * any_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#any_filters AuditTrailsTrail#any_filters}
  */
  readonly anyFilters: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFilters[] | cdktf.IResolvable;
}

export function auditTrailsTrailFilterEventFiltersPathFilterSomeFilterToTerraform(struct?: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterOutputReference | AuditTrailsTrailFilterEventFiltersPathFilterSomeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    any_filters: cdktf.listMapper(auditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersToTerraform, true)(struct!.anyFilters),
  }
}


export function auditTrailsTrailFilterEventFiltersPathFilterSomeFilterToHclTerraform(struct?: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterOutputReference | AuditTrailsTrailFilterEventFiltersPathFilterSomeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_filters: {
      value: cdktf.listMapperHcl(auditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersToHclTerraform, true)(struct!.anyFilters),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilterEventFiltersPathFilterSomeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._anyFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyFilters = this._anyFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceId = undefined;
      this._resourceType = undefined;
      this._anyFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
      this._anyFilters.internalValue = value.anyFilters;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // any_filters - computed: false, optional: false, required: true
  private _anyFilters = new AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFiltersList(this, "any_filters", false);
  public get anyFilters() {
    return this._anyFilters;
  }
  public putAnyFilters(value: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterAnyFilters[] | cdktf.IResolvable) {
    this._anyFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyFiltersInput() {
    return this._anyFilters.internalValue;
  }
}
export interface AuditTrailsTrailFilterEventFiltersPathFilter {
  /**
  * any_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#any_filter AuditTrailsTrail#any_filter}
  */
  readonly anyFilter?: AuditTrailsTrailFilterEventFiltersPathFilterAnyFilter;
  /**
  * some_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#some_filter AuditTrailsTrail#some_filter}
  */
  readonly someFilter?: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilter;
}

export function auditTrailsTrailFilterEventFiltersPathFilterToTerraform(struct?: AuditTrailsTrailFilterEventFiltersPathFilterOutputReference | AuditTrailsTrailFilterEventFiltersPathFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_filter: auditTrailsTrailFilterEventFiltersPathFilterAnyFilterToTerraform(struct!.anyFilter),
    some_filter: auditTrailsTrailFilterEventFiltersPathFilterSomeFilterToTerraform(struct!.someFilter),
  }
}


export function auditTrailsTrailFilterEventFiltersPathFilterToHclTerraform(struct?: AuditTrailsTrailFilterEventFiltersPathFilterOutputReference | AuditTrailsTrailFilterEventFiltersPathFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_filter: {
      value: auditTrailsTrailFilterEventFiltersPathFilterAnyFilterToHclTerraform(struct!.anyFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterEventFiltersPathFilterAnyFilterList",
    },
    some_filter: {
      value: auditTrailsTrailFilterEventFiltersPathFilterSomeFilterToHclTerraform(struct!.someFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterEventFiltersPathFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilterEventFiltersPathFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyFilter = this._anyFilter?.internalValue;
    }
    if (this._someFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.someFilter = this._someFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterEventFiltersPathFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyFilter.internalValue = undefined;
      this._someFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyFilter.internalValue = value.anyFilter;
      this._someFilter.internalValue = value.someFilter;
    }
  }

  // any_filter - computed: false, optional: true, required: false
  private _anyFilter = new AuditTrailsTrailFilterEventFiltersPathFilterAnyFilterOutputReference(this, "any_filter");
  public get anyFilter() {
    return this._anyFilter;
  }
  public putAnyFilter(value: AuditTrailsTrailFilterEventFiltersPathFilterAnyFilter) {
    this._anyFilter.internalValue = value;
  }
  public resetAnyFilter() {
    this._anyFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyFilterInput() {
    return this._anyFilter.internalValue;
  }

  // some_filter - computed: false, optional: true, required: false
  private _someFilter = new AuditTrailsTrailFilterEventFiltersPathFilterSomeFilterOutputReference(this, "some_filter");
  public get someFilter() {
    return this._someFilter;
  }
  public putSomeFilter(value: AuditTrailsTrailFilterEventFiltersPathFilterSomeFilter) {
    this._someFilter.internalValue = value;
  }
  public resetSomeFilter() {
    this._someFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get someFilterInput() {
    return this._someFilter.internalValue;
  }
}
export interface AuditTrailsTrailFilterEventFilters {
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#service AuditTrailsTrail#service}
  */
  readonly service: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#categories AuditTrailsTrail#categories}
  */
  readonly categories: AuditTrailsTrailFilterEventFiltersCategories[] | cdktf.IResolvable;
  /**
  * path_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#path_filter AuditTrailsTrail#path_filter}
  */
  readonly pathFilter: AuditTrailsTrailFilterEventFiltersPathFilter;
}

export function auditTrailsTrailFilterEventFiltersToTerraform(struct?: AuditTrailsTrailFilterEventFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    categories: cdktf.listMapper(auditTrailsTrailFilterEventFiltersCategoriesToTerraform, true)(struct!.categories),
    path_filter: auditTrailsTrailFilterEventFiltersPathFilterToTerraform(struct!.pathFilter),
  }
}


export function auditTrailsTrailFilterEventFiltersToHclTerraform(struct?: AuditTrailsTrailFilterEventFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    categories: {
      value: cdktf.listMapperHcl(auditTrailsTrailFilterEventFiltersCategoriesToHclTerraform, true)(struct!.categories),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterEventFiltersCategoriesList",
    },
    path_filter: {
      value: auditTrailsTrailFilterEventFiltersPathFilterToHclTerraform(struct!.pathFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterEventFiltersPathFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterEventFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditTrailsTrailFilterEventFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._categories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories?.internalValue;
    }
    if (this._pathFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathFilter = this._pathFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterEventFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service = undefined;
      this._categories.internalValue = undefined;
      this._pathFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service = value.service;
      this._categories.internalValue = value.categories;
      this._pathFilter.internalValue = value.pathFilter;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // categories - computed: false, optional: false, required: true
  private _categories = new AuditTrailsTrailFilterEventFiltersCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: AuditTrailsTrailFilterEventFiltersCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // path_filter - computed: false, optional: false, required: true
  private _pathFilter = new AuditTrailsTrailFilterEventFiltersPathFilterOutputReference(this, "path_filter");
  public get pathFilter() {
    return this._pathFilter;
  }
  public putPathFilter(value: AuditTrailsTrailFilterEventFiltersPathFilter) {
    this._pathFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathFilterInput() {
    return this._pathFilter.internalValue;
  }
}

export class AuditTrailsTrailFilterEventFiltersList extends cdktf.ComplexList {
  public internalValue? : AuditTrailsTrailFilterEventFilters[] | cdktf.IResolvable

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
  public get(index: number): AuditTrailsTrailFilterEventFiltersOutputReference {
    return new AuditTrailsTrailFilterEventFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditTrailsTrailFilterPathFilterAnyFilter {
  /**
  * Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_id AuditTrailsTrail#resource_id}
  */
  readonly resourceId: string;
  /**
  * Resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_type AuditTrailsTrail#resource_type}
  */
  readonly resourceType: string;
}

export function auditTrailsTrailFilterPathFilterAnyFilterToTerraform(struct?: AuditTrailsTrailFilterPathFilterAnyFilterOutputReference | AuditTrailsTrailFilterPathFilterAnyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function auditTrailsTrailFilterPathFilterAnyFilterToHclTerraform(struct?: AuditTrailsTrailFilterPathFilterAnyFilterOutputReference | AuditTrailsTrailFilterPathFilterAnyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterPathFilterAnyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilterPathFilterAnyFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterPathFilterAnyFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}
export interface AuditTrailsTrailFilterPathFilterSomeFilterAnyFilters {
  /**
  * Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_id AuditTrailsTrail#resource_id}
  */
  readonly resourceId: string;
  /**
  * Resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_type AuditTrailsTrail#resource_type}
  */
  readonly resourceType: string;
}

export function auditTrailsTrailFilterPathFilterSomeFilterAnyFiltersToTerraform(struct?: AuditTrailsTrailFilterPathFilterSomeFilterAnyFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function auditTrailsTrailFilterPathFilterSomeFilterAnyFiltersToHclTerraform(struct?: AuditTrailsTrailFilterPathFilterSomeFilterAnyFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterPathFilterSomeFilterAnyFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditTrailsTrailFilterPathFilterSomeFilterAnyFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterPathFilterSomeFilterAnyFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class AuditTrailsTrailFilterPathFilterSomeFilterAnyFiltersList extends cdktf.ComplexList {
  public internalValue? : AuditTrailsTrailFilterPathFilterSomeFilterAnyFilters[] | cdktf.IResolvable

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
  public get(index: number): AuditTrailsTrailFilterPathFilterSomeFilterAnyFiltersOutputReference {
    return new AuditTrailsTrailFilterPathFilterSomeFilterAnyFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditTrailsTrailFilterPathFilterSomeFilter {
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_id AuditTrailsTrail#resource_id}
  */
  readonly resourceId: string;
  /**
  * Deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_type AuditTrailsTrail#resource_type}
  */
  readonly resourceType: string;
  /**
  * any_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#any_filters AuditTrailsTrail#any_filters}
  */
  readonly anyFilters: AuditTrailsTrailFilterPathFilterSomeFilterAnyFilters[] | cdktf.IResolvable;
}

export function auditTrailsTrailFilterPathFilterSomeFilterToTerraform(struct?: AuditTrailsTrailFilterPathFilterSomeFilterOutputReference | AuditTrailsTrailFilterPathFilterSomeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    any_filters: cdktf.listMapper(auditTrailsTrailFilterPathFilterSomeFilterAnyFiltersToTerraform, true)(struct!.anyFilters),
  }
}


export function auditTrailsTrailFilterPathFilterSomeFilterToHclTerraform(struct?: AuditTrailsTrailFilterPathFilterSomeFilterOutputReference | AuditTrailsTrailFilterPathFilterSomeFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_filters: {
      value: cdktf.listMapperHcl(auditTrailsTrailFilterPathFilterSomeFilterAnyFiltersToHclTerraform, true)(struct!.anyFilters),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterPathFilterSomeFilterAnyFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterPathFilterSomeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilterPathFilterSomeFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._anyFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyFilters = this._anyFilters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterPathFilterSomeFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceId = undefined;
      this._resourceType = undefined;
      this._anyFilters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
      this._anyFilters.internalValue = value.anyFilters;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // any_filters - computed: false, optional: false, required: true
  private _anyFilters = new AuditTrailsTrailFilterPathFilterSomeFilterAnyFiltersList(this, "any_filters", false);
  public get anyFilters() {
    return this._anyFilters;
  }
  public putAnyFilters(value: AuditTrailsTrailFilterPathFilterSomeFilterAnyFilters[] | cdktf.IResolvable) {
    this._anyFilters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyFiltersInput() {
    return this._anyFilters.internalValue;
  }
}
export interface AuditTrailsTrailFilterPathFilter {
  /**
  * any_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#any_filter AuditTrailsTrail#any_filter}
  */
  readonly anyFilter?: AuditTrailsTrailFilterPathFilterAnyFilter;
  /**
  * some_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#some_filter AuditTrailsTrail#some_filter}
  */
  readonly someFilter?: AuditTrailsTrailFilterPathFilterSomeFilter;
}

export function auditTrailsTrailFilterPathFilterToTerraform(struct?: AuditTrailsTrailFilterPathFilterOutputReference | AuditTrailsTrailFilterPathFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_filter: auditTrailsTrailFilterPathFilterAnyFilterToTerraform(struct!.anyFilter),
    some_filter: auditTrailsTrailFilterPathFilterSomeFilterToTerraform(struct!.someFilter),
  }
}


export function auditTrailsTrailFilterPathFilterToHclTerraform(struct?: AuditTrailsTrailFilterPathFilterOutputReference | AuditTrailsTrailFilterPathFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_filter: {
      value: auditTrailsTrailFilterPathFilterAnyFilterToHclTerraform(struct!.anyFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterPathFilterAnyFilterList",
    },
    some_filter: {
      value: auditTrailsTrailFilterPathFilterSomeFilterToHclTerraform(struct!.someFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterPathFilterSomeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterPathFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilterPathFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyFilter = this._anyFilter?.internalValue;
    }
    if (this._someFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.someFilter = this._someFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilterPathFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyFilter.internalValue = undefined;
      this._someFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyFilter.internalValue = value.anyFilter;
      this._someFilter.internalValue = value.someFilter;
    }
  }

  // any_filter - computed: false, optional: true, required: false
  private _anyFilter = new AuditTrailsTrailFilterPathFilterAnyFilterOutputReference(this, "any_filter");
  public get anyFilter() {
    return this._anyFilter;
  }
  public putAnyFilter(value: AuditTrailsTrailFilterPathFilterAnyFilter) {
    this._anyFilter.internalValue = value;
  }
  public resetAnyFilter() {
    this._anyFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyFilterInput() {
    return this._anyFilter.internalValue;
  }

  // some_filter - computed: false, optional: true, required: false
  private _someFilter = new AuditTrailsTrailFilterPathFilterSomeFilterOutputReference(this, "some_filter");
  public get someFilter() {
    return this._someFilter;
  }
  public putSomeFilter(value: AuditTrailsTrailFilterPathFilterSomeFilter) {
    this._someFilter.internalValue = value;
  }
  public resetSomeFilter() {
    this._someFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get someFilterInput() {
    return this._someFilter.internalValue;
  }
}
export interface AuditTrailsTrailFilter {
  /**
  * event_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#event_filters AuditTrailsTrail#event_filters}
  */
  readonly eventFilters?: AuditTrailsTrailFilterEventFilters[] | cdktf.IResolvable;
  /**
  * path_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#path_filter AuditTrailsTrail#path_filter}
  */
  readonly pathFilter?: AuditTrailsTrailFilterPathFilter;
}

export function auditTrailsTrailFilterToTerraform(struct?: AuditTrailsTrailFilterOutputReference | AuditTrailsTrailFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_filters: cdktf.listMapper(auditTrailsTrailFilterEventFiltersToTerraform, true)(struct!.eventFilters),
    path_filter: auditTrailsTrailFilterPathFilterToTerraform(struct!.pathFilter),
  }
}


export function auditTrailsTrailFilterToHclTerraform(struct?: AuditTrailsTrailFilterOutputReference | AuditTrailsTrailFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_filters: {
      value: cdktf.listMapperHcl(auditTrailsTrailFilterEventFiltersToHclTerraform, true)(struct!.eventFilters),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterEventFiltersList",
    },
    path_filter: {
      value: auditTrailsTrailFilterPathFilterToHclTerraform(struct!.pathFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilterPathFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFilters = this._eventFilters?.internalValue;
    }
    if (this._pathFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathFilter = this._pathFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventFilters.internalValue = undefined;
      this._pathFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventFilters.internalValue = value.eventFilters;
      this._pathFilter.internalValue = value.pathFilter;
    }
  }

  // event_filters - computed: false, optional: true, required: false
  private _eventFilters = new AuditTrailsTrailFilterEventFiltersList(this, "event_filters", false);
  public get eventFilters() {
    return this._eventFilters;
  }
  public putEventFilters(value: AuditTrailsTrailFilterEventFilters[] | cdktf.IResolvable) {
    this._eventFilters.internalValue = value;
  }
  public resetEventFilters() {
    this._eventFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFiltersInput() {
    return this._eventFilters.internalValue;
  }

  // path_filter - computed: false, optional: true, required: false
  private _pathFilter = new AuditTrailsTrailFilterPathFilterOutputReference(this, "path_filter");
  public get pathFilter() {
    return this._pathFilter;
  }
  public putPathFilter(value: AuditTrailsTrailFilterPathFilter) {
    this._pathFilter.internalValue = value;
  }
  public resetPathFilter() {
    this._pathFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathFilterInput() {
    return this._pathFilter.internalValue;
  }
}
export interface AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilter {
  /**
  * All types of queries will be delivered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#include_nonrecursive_queries AuditTrailsTrail#include_nonrecursive_queries}
  */
  readonly includeNonrecursiveQueries: boolean | cdktf.IResolvable;
}

export function auditTrailsTrailFilteringPolicyDataEventsFilterDnsFilterToTerraform(struct?: AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilterOutputReference | AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_nonrecursive_queries: cdktf.booleanToTerraform(struct!.includeNonrecursiveQueries),
  }
}


export function auditTrailsTrailFilteringPolicyDataEventsFilterDnsFilterToHclTerraform(struct?: AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilterOutputReference | AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_nonrecursive_queries: {
      value: cdktf.booleanToHclTerraform(struct!.includeNonrecursiveQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNonrecursiveQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNonrecursiveQueries = this._includeNonrecursiveQueries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeNonrecursiveQueries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeNonrecursiveQueries = value.includeNonrecursiveQueries;
    }
  }

  // include_nonrecursive_queries - computed: false, optional: false, required: true
  private _includeNonrecursiveQueries?: boolean | cdktf.IResolvable; 
  public get includeNonrecursiveQueries() {
    return this.getBooleanAttribute('include_nonrecursive_queries');
  }
  public set includeNonrecursiveQueries(value: boolean | cdktf.IResolvable) {
    this._includeNonrecursiveQueries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonrecursiveQueriesInput() {
    return this._includeNonrecursiveQueries;
  }
}
export interface AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScope {
  /**
  * Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_id AuditTrailsTrail#resource_id}
  */
  readonly resourceId: string;
  /**
  * Resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_type AuditTrailsTrail#resource_type}
  */
  readonly resourceType: string;
}

export function auditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeToTerraform(struct?: AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function auditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeToHclTerraform(struct?: AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeList extends cdktf.ComplexList {
  public internalValue? : AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScope[] | cdktf.IResolvable

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
  public get(index: number): AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeOutputReference {
    return new AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditTrailsTrailFilteringPolicyDataEventsFilter {
  /**
  * A list of events that won't be gathered by the trail from this service. New events will be automatically gathered when this option is specified. Mutually exclusive with `included_events`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#excluded_events AuditTrailsTrail#excluded_events}
  */
  readonly excludedEvents?: string[];
  /**
  * A list of events that will be gathered by the trail from this service. New events won't be gathered by default when this option is specified. Mutually exclusive with `excluded_events`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#included_events AuditTrailsTrail#included_events}
  */
  readonly includedEvents?: string[];
  /**
  * ID of the service which events will be gathered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#service AuditTrailsTrail#service}
  */
  readonly service: string;
  /**
  * dns_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#dns_filter AuditTrailsTrail#dns_filter}
  */
  readonly dnsFilter?: AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilter;
  /**
  * resource_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_scope AuditTrailsTrail#resource_scope}
  */
  readonly resourceScope: AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScope[] | cdktf.IResolvable;
}

export function auditTrailsTrailFilteringPolicyDataEventsFilterToTerraform(struct?: AuditTrailsTrailFilteringPolicyDataEventsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedEvents),
    included_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedEvents),
    service: cdktf.stringToTerraform(struct!.service),
    dns_filter: auditTrailsTrailFilteringPolicyDataEventsFilterDnsFilterToTerraform(struct!.dnsFilter),
    resource_scope: cdktf.listMapper(auditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeToTerraform, true)(struct!.resourceScope),
  }
}


export function auditTrailsTrailFilteringPolicyDataEventsFilterToHclTerraform(struct?: AuditTrailsTrailFilteringPolicyDataEventsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_filter: {
      value: auditTrailsTrailFilteringPolicyDataEventsFilterDnsFilterToHclTerraform(struct!.dnsFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilterList",
    },
    resource_scope: {
      value: cdktf.listMapperHcl(auditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeToHclTerraform, true)(struct!.resourceScope),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilteringPolicyDataEventsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditTrailsTrailFilteringPolicyDataEventsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedEvents = this._excludedEvents;
    }
    if (this._includedEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedEvents = this._includedEvents;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._dnsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFilter = this._dnsFilter?.internalValue;
    }
    if (this._resourceScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceScope = this._resourceScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilteringPolicyDataEventsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedEvents = undefined;
      this._includedEvents = undefined;
      this._service = undefined;
      this._dnsFilter.internalValue = undefined;
      this._resourceScope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedEvents = value.excludedEvents;
      this._includedEvents = value.includedEvents;
      this._service = value.service;
      this._dnsFilter.internalValue = value.dnsFilter;
      this._resourceScope.internalValue = value.resourceScope;
    }
  }

  // excluded_events - computed: false, optional: true, required: false
  private _excludedEvents?: string[]; 
  public get excludedEvents() {
    return this.getListAttribute('excluded_events');
  }
  public set excludedEvents(value: string[]) {
    this._excludedEvents = value;
  }
  public resetExcludedEvents() {
    this._excludedEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedEventsInput() {
    return this._excludedEvents;
  }

  // included_events - computed: false, optional: true, required: false
  private _includedEvents?: string[]; 
  public get includedEvents() {
    return this.getListAttribute('included_events');
  }
  public set includedEvents(value: string[]) {
    this._includedEvents = value;
  }
  public resetIncludedEvents() {
    this._includedEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedEventsInput() {
    return this._includedEvents;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // dns_filter - computed: false, optional: true, required: false
  private _dnsFilter = new AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilterOutputReference(this, "dns_filter");
  public get dnsFilter() {
    return this._dnsFilter;
  }
  public putDnsFilter(value: AuditTrailsTrailFilteringPolicyDataEventsFilterDnsFilter) {
    this._dnsFilter.internalValue = value;
  }
  public resetDnsFilter() {
    this._dnsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFilterInput() {
    return this._dnsFilter.internalValue;
  }

  // resource_scope - computed: false, optional: false, required: true
  private _resourceScope = new AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScopeList(this, "resource_scope", false);
  public get resourceScope() {
    return this._resourceScope;
  }
  public putResourceScope(value: AuditTrailsTrailFilteringPolicyDataEventsFilterResourceScope[] | cdktf.IResolvable) {
    this._resourceScope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceScopeInput() {
    return this._resourceScope.internalValue;
  }
}

export class AuditTrailsTrailFilteringPolicyDataEventsFilterList extends cdktf.ComplexList {
  public internalValue? : AuditTrailsTrailFilteringPolicyDataEventsFilter[] | cdktf.IResolvable

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
  public get(index: number): AuditTrailsTrailFilteringPolicyDataEventsFilterOutputReference {
    return new AuditTrailsTrailFilteringPolicyDataEventsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScope {
  /**
  * Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_id AuditTrailsTrail#resource_id}
  */
  readonly resourceId: string;
  /**
  * Resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_type AuditTrailsTrail#resource_type}
  */
  readonly resourceType: string;
}

export function auditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeToTerraform(struct?: AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function auditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeToHclTerraform(struct?: AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeList extends cdktf.ComplexList {
  public internalValue? : AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScope[] | cdktf.IResolvable

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
  public get(index: number): AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeOutputReference {
    return new AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuditTrailsTrailFilteringPolicyManagementEventsFilter {
  /**
  * resource_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#resource_scope AuditTrailsTrail#resource_scope}
  */
  readonly resourceScope: AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScope[] | cdktf.IResolvable;
}

export function auditTrailsTrailFilteringPolicyManagementEventsFilterToTerraform(struct?: AuditTrailsTrailFilteringPolicyManagementEventsFilterOutputReference | AuditTrailsTrailFilteringPolicyManagementEventsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_scope: cdktf.listMapper(auditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeToTerraform, true)(struct!.resourceScope),
  }
}


export function auditTrailsTrailFilteringPolicyManagementEventsFilterToHclTerraform(struct?: AuditTrailsTrailFilteringPolicyManagementEventsFilterOutputReference | AuditTrailsTrailFilteringPolicyManagementEventsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_scope: {
      value: cdktf.listMapperHcl(auditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeToHclTerraform, true)(struct!.resourceScope),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilteringPolicyManagementEventsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilteringPolicyManagementEventsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceScope = this._resourceScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilteringPolicyManagementEventsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceScope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceScope.internalValue = value.resourceScope;
    }
  }

  // resource_scope - computed: false, optional: false, required: true
  private _resourceScope = new AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScopeList(this, "resource_scope", false);
  public get resourceScope() {
    return this._resourceScope;
  }
  public putResourceScope(value: AuditTrailsTrailFilteringPolicyManagementEventsFilterResourceScope[] | cdktf.IResolvable) {
    this._resourceScope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceScopeInput() {
    return this._resourceScope.internalValue;
  }
}
export interface AuditTrailsTrailFilteringPolicy {
  /**
  * data_events_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#data_events_filter AuditTrailsTrail#data_events_filter}
  */
  readonly dataEventsFilter?: AuditTrailsTrailFilteringPolicyDataEventsFilter[] | cdktf.IResolvable;
  /**
  * management_events_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#management_events_filter AuditTrailsTrail#management_events_filter}
  */
  readonly managementEventsFilter?: AuditTrailsTrailFilteringPolicyManagementEventsFilter;
}

export function auditTrailsTrailFilteringPolicyToTerraform(struct?: AuditTrailsTrailFilteringPolicyOutputReference | AuditTrailsTrailFilteringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_events_filter: cdktf.listMapper(auditTrailsTrailFilteringPolicyDataEventsFilterToTerraform, true)(struct!.dataEventsFilter),
    management_events_filter: auditTrailsTrailFilteringPolicyManagementEventsFilterToTerraform(struct!.managementEventsFilter),
  }
}


export function auditTrailsTrailFilteringPolicyToHclTerraform(struct?: AuditTrailsTrailFilteringPolicyOutputReference | AuditTrailsTrailFilteringPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_events_filter: {
      value: cdktf.listMapperHcl(auditTrailsTrailFilteringPolicyDataEventsFilterToHclTerraform, true)(struct!.dataEventsFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilteringPolicyDataEventsFilterList",
    },
    management_events_filter: {
      value: auditTrailsTrailFilteringPolicyManagementEventsFilterToHclTerraform(struct!.managementEventsFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AuditTrailsTrailFilteringPolicyManagementEventsFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailFilteringPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailFilteringPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataEventsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEventsFilter = this._dataEventsFilter?.internalValue;
    }
    if (this._managementEventsFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementEventsFilter = this._managementEventsFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailFilteringPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataEventsFilter.internalValue = undefined;
      this._managementEventsFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataEventsFilter.internalValue = value.dataEventsFilter;
      this._managementEventsFilter.internalValue = value.managementEventsFilter;
    }
  }

  // data_events_filter - computed: false, optional: true, required: false
  private _dataEventsFilter = new AuditTrailsTrailFilteringPolicyDataEventsFilterList(this, "data_events_filter", false);
  public get dataEventsFilter() {
    return this._dataEventsFilter;
  }
  public putDataEventsFilter(value: AuditTrailsTrailFilteringPolicyDataEventsFilter[] | cdktf.IResolvable) {
    this._dataEventsFilter.internalValue = value;
  }
  public resetDataEventsFilter() {
    this._dataEventsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEventsFilterInput() {
    return this._dataEventsFilter.internalValue;
  }

  // management_events_filter - computed: false, optional: true, required: false
  private _managementEventsFilter = new AuditTrailsTrailFilteringPolicyManagementEventsFilterOutputReference(this, "management_events_filter");
  public get managementEventsFilter() {
    return this._managementEventsFilter;
  }
  public putManagementEventsFilter(value: AuditTrailsTrailFilteringPolicyManagementEventsFilter) {
    this._managementEventsFilter.internalValue = value;
  }
  public resetManagementEventsFilter() {
    this._managementEventsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEventsFilterInput() {
    return this._managementEventsFilter.internalValue;
  }
}
export interface AuditTrailsTrailLoggingDestination {
  /**
  * ID of the destination [Cloud Logging Group](https://yandex.cloud/docs/logging/concepts/log-group).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#log_group_id AuditTrailsTrail#log_group_id}
  */
  readonly logGroupId: string;
}

export function auditTrailsTrailLoggingDestinationToTerraform(struct?: AuditTrailsTrailLoggingDestinationOutputReference | AuditTrailsTrailLoggingDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
  }
}


export function auditTrailsTrailLoggingDestinationToHclTerraform(struct?: AuditTrailsTrailLoggingDestinationOutputReference | AuditTrailsTrailLoggingDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailLoggingDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailLoggingDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailLoggingDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupId = value.logGroupId;
    }
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }
}
export interface AuditTrailsTrailStorageDestination {
  /**
  * Name of the [destination bucket](https://yandex.cloud/docs/storage/concepts/bucket).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#bucket_name AuditTrailsTrail#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Additional prefix of the uploaded objects. If not specified, objects will be uploaded with prefix equal to `trail_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#object_prefix AuditTrailsTrail#object_prefix}
  */
  readonly objectPrefix?: string;
}

export function auditTrailsTrailStorageDestinationToTerraform(struct?: AuditTrailsTrailStorageDestinationOutputReference | AuditTrailsTrailStorageDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    object_prefix: cdktf.stringToTerraform(struct!.objectPrefix),
  }
}


export function auditTrailsTrailStorageDestinationToHclTerraform(struct?: AuditTrailsTrailStorageDestinationOutputReference | AuditTrailsTrailStorageDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_prefix: {
      value: cdktf.stringToHclTerraform(struct!.objectPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailStorageDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditTrailsTrailStorageDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._objectPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectPrefix = this._objectPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailStorageDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._objectPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._objectPrefix = value.objectPrefix;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // object_prefix - computed: false, optional: true, required: false
  private _objectPrefix?: string; 
  public get objectPrefix() {
    return this.getStringAttribute('object_prefix');
  }
  public set objectPrefix(value: string) {
    this._objectPrefix = value;
  }
  public resetObjectPrefix() {
    this._objectPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPrefixInput() {
    return this._objectPrefix;
  }
}
export interface AuditTrailsTrailTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#default AuditTrailsTrail#default}
  */
  readonly default?: string;
}

export function auditTrailsTrailTimeoutsToTerraform(struct?: AuditTrailsTrailTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function auditTrailsTrailTimeoutsToHclTerraform(struct?: AuditTrailsTrailTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditTrailsTrailTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuditTrailsTrailTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditTrailsTrailTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail yandex_audit_trails_trail}
*/
export class AuditTrailsTrail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_audit_trails_trail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditTrailsTrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditTrailsTrail to import
  * @param importFromId The id of the existing AuditTrailsTrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditTrailsTrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_audit_trails_trail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/audit_trails_trail yandex_audit_trails_trail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditTrailsTrailConfig
  */
  public constructor(scope: Construct, id: string, config: AuditTrailsTrailConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_audit_trails_trail',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._serviceAccountId = config.serviceAccountId;
    this._dataStreamDestination.internalValue = config.dataStreamDestination;
    this._filter.internalValue = config.filter;
    this._filteringPolicy.internalValue = config.filteringPolicy;
    this._loggingDestination.internalValue = config.loggingDestination;
    this._storageDestination.internalValue = config.storageDestination;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // folder_id - computed: false, optional: false, required: true
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trail_id - computed: true, optional: false, required: false
  public get trailId() {
    return this.getStringAttribute('trail_id');
  }

  // data_stream_destination - computed: false, optional: true, required: false
  private _dataStreamDestination = new AuditTrailsTrailDataStreamDestinationOutputReference(this, "data_stream_destination");
  public get dataStreamDestination() {
    return this._dataStreamDestination;
  }
  public putDataStreamDestination(value: AuditTrailsTrailDataStreamDestination) {
    this._dataStreamDestination.internalValue = value;
  }
  public resetDataStreamDestination() {
    this._dataStreamDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamDestinationInput() {
    return this._dataStreamDestination.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new AuditTrailsTrailFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: AuditTrailsTrailFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // filtering_policy - computed: false, optional: true, required: false
  private _filteringPolicy = new AuditTrailsTrailFilteringPolicyOutputReference(this, "filtering_policy");
  public get filteringPolicy() {
    return this._filteringPolicy;
  }
  public putFilteringPolicy(value: AuditTrailsTrailFilteringPolicy) {
    this._filteringPolicy.internalValue = value;
  }
  public resetFilteringPolicy() {
    this._filteringPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringPolicyInput() {
    return this._filteringPolicy.internalValue;
  }

  // logging_destination - computed: false, optional: true, required: false
  private _loggingDestination = new AuditTrailsTrailLoggingDestinationOutputReference(this, "logging_destination");
  public get loggingDestination() {
    return this._loggingDestination;
  }
  public putLoggingDestination(value: AuditTrailsTrailLoggingDestination) {
    this._loggingDestination.internalValue = value;
  }
  public resetLoggingDestination() {
    this._loggingDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingDestinationInput() {
    return this._loggingDestination.internalValue;
  }

  // storage_destination - computed: false, optional: true, required: false
  private _storageDestination = new AuditTrailsTrailStorageDestinationOutputReference(this, "storage_destination");
  public get storageDestination() {
    return this._storageDestination;
  }
  public putStorageDestination(value: AuditTrailsTrailStorageDestination) {
    this._storageDestination.internalValue = value;
  }
  public resetStorageDestination() {
    this._storageDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDestinationInput() {
    return this._storageDestination.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AuditTrailsTrailTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AuditTrailsTrailTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      data_stream_destination: auditTrailsTrailDataStreamDestinationToTerraform(this._dataStreamDestination.internalValue),
      filter: auditTrailsTrailFilterToTerraform(this._filter.internalValue),
      filtering_policy: auditTrailsTrailFilteringPolicyToTerraform(this._filteringPolicy.internalValue),
      logging_destination: auditTrailsTrailLoggingDestinationToTerraform(this._loggingDestination.internalValue),
      storage_destination: auditTrailsTrailStorageDestinationToTerraform(this._storageDestination.internalValue),
      timeouts: auditTrailsTrailTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_stream_destination: {
        value: auditTrailsTrailDataStreamDestinationToHclTerraform(this._dataStreamDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuditTrailsTrailDataStreamDestinationList",
      },
      filter: {
        value: auditTrailsTrailFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuditTrailsTrailFilterList",
      },
      filtering_policy: {
        value: auditTrailsTrailFilteringPolicyToHclTerraform(this._filteringPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuditTrailsTrailFilteringPolicyList",
      },
      logging_destination: {
        value: auditTrailsTrailLoggingDestinationToHclTerraform(this._loggingDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuditTrailsTrailLoggingDestinationList",
      },
      storage_destination: {
        value: auditTrailsTrailStorageDestinationToHclTerraform(this._storageDestination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuditTrailsTrailStorageDestinationList",
      },
      timeouts: {
        value: auditTrailsTrailTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuditTrailsTrailTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
