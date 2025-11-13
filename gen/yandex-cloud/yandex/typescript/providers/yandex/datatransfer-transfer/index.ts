// https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatatransferTransferConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#description DatatransferTransfer#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#folder_id DatatransferTransfer#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#id DatatransferTransfer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#labels DatatransferTransfer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#name DatatransferTransfer#name}
  */
  readonly name?: string;
  /**
  * Activation action on create a new incremental transfer. It is not part of the transfer parameter and is used only on create. One of `sync_activate`, `async_activate`, `dont_activate`. The default is `sync_activate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#on_create_activate_mode DatatransferTransfer#on_create_activate_mode}
  */
  readonly onCreateActivateMode?: string;
  /**
  * ID of the source endpoint for the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#source_id DatatransferTransfer#source_id}
  */
  readonly sourceId?: string;
  /**
  * ID of the target endpoint for the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#target_id DatatransferTransfer#target_id}
  */
  readonly targetId?: string;
  /**
  * Type of the transfer. One of `SNAPSHOT_ONLY`, `INCREMENT_ONLY`, `SNAPSHOT_AND_INCREMENT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#type DatatransferTransfer#type}
  */
  readonly type?: string;
  /**
  * runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#runtime DatatransferTransfer#runtime}
  */
  readonly runtime?: DatatransferTransferRuntime;
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#transformation DatatransferTransfer#transformation}
  */
  readonly transformation?: DatatransferTransferTransformation;
}
export interface DatatransferTransferRuntimeYcRuntimeUploadShardParams {
  /**
  * Number of workers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#job_count DatatransferTransfer#job_count}
  */
  readonly jobCount?: number;
  /**
  * Number of threads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#process_count DatatransferTransfer#process_count}
  */
  readonly processCount?: number;
}

export function datatransferTransferRuntimeYcRuntimeUploadShardParamsToTerraform(struct?: DatatransferTransferRuntimeYcRuntimeUploadShardParamsOutputReference | DatatransferTransferRuntimeYcRuntimeUploadShardParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_count: cdktf.numberToTerraform(struct!.jobCount),
    process_count: cdktf.numberToTerraform(struct!.processCount),
  }
}


export function datatransferTransferRuntimeYcRuntimeUploadShardParamsToHclTerraform(struct?: DatatransferTransferRuntimeYcRuntimeUploadShardParamsOutputReference | DatatransferTransferRuntimeYcRuntimeUploadShardParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_count: {
      value: cdktf.numberToHclTerraform(struct!.jobCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    process_count: {
      value: cdktf.numberToHclTerraform(struct!.processCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferRuntimeYcRuntimeUploadShardParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferRuntimeYcRuntimeUploadShardParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCount = this._jobCount;
    }
    if (this._processCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.processCount = this._processCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferRuntimeYcRuntimeUploadShardParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobCount = undefined;
      this._processCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobCount = value.jobCount;
      this._processCount = value.processCount;
    }
  }

  // job_count - computed: true, optional: true, required: false
  private _jobCount?: number; 
  public get jobCount() {
    return this.getNumberAttribute('job_count');
  }
  public set jobCount(value: number) {
    this._jobCount = value;
  }
  public resetJobCount() {
    this._jobCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCountInput() {
    return this._jobCount;
  }

  // process_count - computed: true, optional: true, required: false
  private _processCount?: number; 
  public get processCount() {
    return this.getNumberAttribute('process_count');
  }
  public set processCount(value: number) {
    this._processCount = value;
  }
  public resetProcessCount() {
    this._processCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processCountInput() {
    return this._processCount;
  }
}
export interface DatatransferTransferRuntimeYcRuntime {
  /**
  * Number of workers in parallel replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#job_count DatatransferTransfer#job_count}
  */
  readonly jobCount?: number;
  /**
  * upload_shard_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#upload_shard_params DatatransferTransfer#upload_shard_params}
  */
  readonly uploadShardParams?: DatatransferTransferRuntimeYcRuntimeUploadShardParams;
}

export function datatransferTransferRuntimeYcRuntimeToTerraform(struct?: DatatransferTransferRuntimeYcRuntimeOutputReference | DatatransferTransferRuntimeYcRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_count: cdktf.numberToTerraform(struct!.jobCount),
    upload_shard_params: datatransferTransferRuntimeYcRuntimeUploadShardParamsToTerraform(struct!.uploadShardParams),
  }
}


export function datatransferTransferRuntimeYcRuntimeToHclTerraform(struct?: DatatransferTransferRuntimeYcRuntimeOutputReference | DatatransferTransferRuntimeYcRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_count: {
      value: cdktf.numberToHclTerraform(struct!.jobCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upload_shard_params: {
      value: datatransferTransferRuntimeYcRuntimeUploadShardParamsToHclTerraform(struct!.uploadShardParams),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferRuntimeYcRuntimeUploadShardParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferRuntimeYcRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferRuntimeYcRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCount = this._jobCount;
    }
    if (this._uploadShardParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadShardParams = this._uploadShardParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferRuntimeYcRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobCount = undefined;
      this._uploadShardParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobCount = value.jobCount;
      this._uploadShardParams.internalValue = value.uploadShardParams;
    }
  }

  // job_count - computed: true, optional: true, required: false
  private _jobCount?: number; 
  public get jobCount() {
    return this.getNumberAttribute('job_count');
  }
  public set jobCount(value: number) {
    this._jobCount = value;
  }
  public resetJobCount() {
    this._jobCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCountInput() {
    return this._jobCount;
  }

  // upload_shard_params - computed: false, optional: true, required: false
  private _uploadShardParams = new DatatransferTransferRuntimeYcRuntimeUploadShardParamsOutputReference(this, "upload_shard_params");
  public get uploadShardParams() {
    return this._uploadShardParams;
  }
  public putUploadShardParams(value: DatatransferTransferRuntimeYcRuntimeUploadShardParams) {
    this._uploadShardParams.internalValue = value;
  }
  public resetUploadShardParams() {
    this._uploadShardParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadShardParamsInput() {
    return this._uploadShardParams.internalValue;
  }
}
export interface DatatransferTransferRuntime {
  /**
  * yc_runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#yc_runtime DatatransferTransfer#yc_runtime}
  */
  readonly ycRuntime?: DatatransferTransferRuntimeYcRuntime;
}

export function datatransferTransferRuntimeToTerraform(struct?: DatatransferTransferRuntimeOutputReference | DatatransferTransferRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    yc_runtime: datatransferTransferRuntimeYcRuntimeToTerraform(struct!.ycRuntime),
  }
}


export function datatransferTransferRuntimeToHclTerraform(struct?: DatatransferTransferRuntimeOutputReference | DatatransferTransferRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    yc_runtime: {
      value: datatransferTransferRuntimeYcRuntimeToHclTerraform(struct!.ycRuntime),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferRuntimeYcRuntimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ycRuntime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ycRuntime = this._ycRuntime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ycRuntime.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ycRuntime.internalValue = value.ycRuntime;
    }
  }

  // yc_runtime - computed: false, optional: true, required: false
  private _ycRuntime = new DatatransferTransferRuntimeYcRuntimeOutputReference(this, "yc_runtime");
  public get ycRuntime() {
    return this._ycRuntime;
  }
  public putYcRuntime(value: DatatransferTransferRuntimeYcRuntime) {
    this._ycRuntime.internalValue = value;
  }
  public resetYcRuntime() {
    this._ycRuntime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ycRuntimeInput() {
    return this._ycRuntime.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformersConvertToStringColumns {
  /**
  * List of columns that will be excluded to transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_columns DatatransferTransfer#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * List of columns that will be included to transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_columns DatatransferTransfer#include_columns}
  */
  readonly includeColumns?: string[];
}

export function datatransferTransferTransformationTransformersConvertToStringColumnsToTerraform(struct?: DatatransferTransferTransformationTransformersConvertToStringColumnsOutputReference | DatatransferTransferTransformationTransformersConvertToStringColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeColumns),
    include_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeColumns),
  }
}


export function datatransferTransferTransformationTransformersConvertToStringColumnsToHclTerraform(struct?: DatatransferTransferTransformationTransformersConvertToStringColumnsOutputReference | DatatransferTransferTransformationTransformersConvertToStringColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersConvertToStringColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersConvertToStringColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeColumns = this._excludeColumns;
    }
    if (this._includeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeColumns = this._includeColumns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersConvertToStringColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeColumns = undefined;
      this._includeColumns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeColumns = value.excludeColumns;
      this._includeColumns = value.includeColumns;
    }
  }

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
  }

  // include_columns - computed: false, optional: true, required: false
  private _includeColumns?: string[]; 
  public get includeColumns() {
    return this.getListAttribute('include_columns');
  }
  public set includeColumns(value: string[]) {
    this._includeColumns = value;
  }
  public resetIncludeColumns() {
    this._includeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeColumnsInput() {
    return this._includeColumns;
  }
}
export interface DatatransferTransferTransformationTransformersConvertToStringTables {
  /**
  * List of tables that will be excluded to transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_tables DatatransferTransfer#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * List of tables that will be included to transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_tables DatatransferTransfer#include_tables}
  */
  readonly includeTables?: string[];
}

export function datatransferTransferTransformationTransformersConvertToStringTablesToTerraform(struct?: DatatransferTransferTransformationTransformersConvertToStringTablesOutputReference | DatatransferTransferTransformationTransformersConvertToStringTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
  }
}


export function datatransferTransferTransformationTransformersConvertToStringTablesToHclTerraform(struct?: DatatransferTransferTransformationTransformersConvertToStringTablesOutputReference | DatatransferTransferTransformationTransformersConvertToStringTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersConvertToStringTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersConvertToStringTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersConvertToStringTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeTables = undefined;
      this._includeTables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
    }
  }

  // exclude_tables - computed: false, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: false, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }
}
export interface DatatransferTransferTransformationTransformersConvertToString {
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#columns DatatransferTransfer#columns}
  */
  readonly columns?: DatatransferTransferTransformationTransformersConvertToStringColumns;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#tables DatatransferTransfer#tables}
  */
  readonly tables?: DatatransferTransferTransformationTransformersConvertToStringTables;
}

export function datatransferTransferTransformationTransformersConvertToStringToTerraform(struct?: DatatransferTransferTransformationTransformersConvertToStringOutputReference | DatatransferTransferTransformationTransformersConvertToString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: datatransferTransferTransformationTransformersConvertToStringColumnsToTerraform(struct!.columns),
    tables: datatransferTransferTransformationTransformersConvertToStringTablesToTerraform(struct!.tables),
  }
}


export function datatransferTransferTransformationTransformersConvertToStringToHclTerraform(struct?: DatatransferTransferTransformationTransformersConvertToStringOutputReference | DatatransferTransferTransformationTransformersConvertToString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: datatransferTransferTransformationTransformersConvertToStringColumnsToHclTerraform(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersConvertToStringColumnsList",
    },
    tables: {
      value: datatransferTransferTransformationTransformersConvertToStringTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersConvertToStringTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersConvertToStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersConvertToString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersConvertToString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns.internalValue = value.columns;
      this._tables.internalValue = value.tables;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DatatransferTransferTransformationTransformersConvertToStringColumnsOutputReference(this, "columns");
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DatatransferTransferTransformationTransformersConvertToStringColumns) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DatatransferTransferTransformationTransformersConvertToStringTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatatransferTransferTransformationTransformersConvertToStringTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformersFilterColumnsColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_columns DatatransferTransfer#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_columns DatatransferTransfer#include_columns}
  */
  readonly includeColumns?: string[];
}

export function datatransferTransferTransformationTransformersFilterColumnsColumnsToTerraform(struct?: DatatransferTransferTransformationTransformersFilterColumnsColumnsOutputReference | DatatransferTransferTransformationTransformersFilterColumnsColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeColumns),
    include_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeColumns),
  }
}


export function datatransferTransferTransformationTransformersFilterColumnsColumnsToHclTerraform(struct?: DatatransferTransferTransformationTransformersFilterColumnsColumnsOutputReference | DatatransferTransferTransformationTransformersFilterColumnsColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersFilterColumnsColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersFilterColumnsColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeColumns = this._excludeColumns;
    }
    if (this._includeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeColumns = this._includeColumns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersFilterColumnsColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeColumns = undefined;
      this._includeColumns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeColumns = value.excludeColumns;
      this._includeColumns = value.includeColumns;
    }
  }

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
  }

  // include_columns - computed: false, optional: true, required: false
  private _includeColumns?: string[]; 
  public get includeColumns() {
    return this.getListAttribute('include_columns');
  }
  public set includeColumns(value: string[]) {
    this._includeColumns = value;
  }
  public resetIncludeColumns() {
    this._includeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeColumnsInput() {
    return this._includeColumns;
  }
}
export interface DatatransferTransferTransformationTransformersFilterColumnsTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_tables DatatransferTransfer#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_tables DatatransferTransfer#include_tables}
  */
  readonly includeTables?: string[];
}

export function datatransferTransferTransformationTransformersFilterColumnsTablesToTerraform(struct?: DatatransferTransferTransformationTransformersFilterColumnsTablesOutputReference | DatatransferTransferTransformationTransformersFilterColumnsTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
  }
}


export function datatransferTransferTransformationTransformersFilterColumnsTablesToHclTerraform(struct?: DatatransferTransferTransformationTransformersFilterColumnsTablesOutputReference | DatatransferTransferTransformationTransformersFilterColumnsTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersFilterColumnsTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersFilterColumnsTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersFilterColumnsTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeTables = undefined;
      this._includeTables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
    }
  }

  // exclude_tables - computed: false, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: false, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }
}
export interface DatatransferTransferTransformationTransformersFilterColumns {
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#columns DatatransferTransfer#columns}
  */
  readonly columns?: DatatransferTransferTransformationTransformersFilterColumnsColumns;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#tables DatatransferTransfer#tables}
  */
  readonly tables?: DatatransferTransferTransformationTransformersFilterColumnsTables;
}

export function datatransferTransferTransformationTransformersFilterColumnsToTerraform(struct?: DatatransferTransferTransformationTransformersFilterColumnsOutputReference | DatatransferTransferTransformationTransformersFilterColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: datatransferTransferTransformationTransformersFilterColumnsColumnsToTerraform(struct!.columns),
    tables: datatransferTransferTransformationTransformersFilterColumnsTablesToTerraform(struct!.tables),
  }
}


export function datatransferTransferTransformationTransformersFilterColumnsToHclTerraform(struct?: DatatransferTransferTransformationTransformersFilterColumnsOutputReference | DatatransferTransferTransformationTransformersFilterColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: datatransferTransferTransformationTransformersFilterColumnsColumnsToHclTerraform(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersFilterColumnsColumnsList",
    },
    tables: {
      value: datatransferTransferTransformationTransformersFilterColumnsTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersFilterColumnsTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersFilterColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersFilterColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersFilterColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns.internalValue = value.columns;
      this._tables.internalValue = value.tables;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DatatransferTransferTransformationTransformersFilterColumnsColumnsOutputReference(this, "columns");
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DatatransferTransferTransformationTransformersFilterColumnsColumns) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DatatransferTransferTransformationTransformersFilterColumnsTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatatransferTransferTransformationTransformersFilterColumnsTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformersFilterRowsTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_tables DatatransferTransfer#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_tables DatatransferTransfer#include_tables}
  */
  readonly includeTables?: string[];
}

export function datatransferTransferTransformationTransformersFilterRowsTablesToTerraform(struct?: DatatransferTransferTransformationTransformersFilterRowsTablesOutputReference | DatatransferTransferTransformationTransformersFilterRowsTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
  }
}


export function datatransferTransferTransformationTransformersFilterRowsTablesToHclTerraform(struct?: DatatransferTransferTransformationTransformersFilterRowsTablesOutputReference | DatatransferTransferTransformationTransformersFilterRowsTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersFilterRowsTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersFilterRowsTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersFilterRowsTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeTables = undefined;
      this._includeTables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
    }
  }

  // exclude_tables - computed: false, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: false, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }
}
export interface DatatransferTransferTransformationTransformersFilterRows {
  /**
  * Filtering criterion. This can be comparison operators for numeric, string, and Boolean values, comparison to NULL, and checking whether a substring is part of a string. See details [here](https://yandex.cloud/docs/data-transfer/concepts/data-transformation#append-only-sources).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#filter DatatransferTransfer#filter}
  */
  readonly filter?: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#tables DatatransferTransfer#tables}
  */
  readonly tables?: DatatransferTransferTransformationTransformersFilterRowsTables;
}

export function datatransferTransferTransformationTransformersFilterRowsToTerraform(struct?: DatatransferTransferTransformationTransformersFilterRowsOutputReference | DatatransferTransferTransformationTransformersFilterRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    tables: datatransferTransferTransformationTransformersFilterRowsTablesToTerraform(struct!.tables),
  }
}


export function datatransferTransferTransformationTransformersFilterRowsToHclTerraform(struct?: DatatransferTransferTransformationTransformersFilterRowsOutputReference | DatatransferTransferTransformationTransformersFilterRows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: datatransferTransferTransformationTransformersFilterRowsTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersFilterRowsTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersFilterRowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersFilterRows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersFilterRows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter = value.filter;
      this._tables.internalValue = value.tables;
    }
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DatatransferTransferTransformationTransformersFilterRowsTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatatransferTransferTransformationTransformersFilterRowsTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHash {
  /**
  * This string will be used in the HMAC(sha256, salt) function applied to the column data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#user_defined_salt DatatransferTransfer#user_defined_salt}
  */
  readonly userDefinedSalt?: string;
}

export function datatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHashToTerraform(struct?: DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHashOutputReference | DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_defined_salt: cdktf.stringToTerraform(struct!.userDefinedSalt),
  }
}


export function datatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHashToHclTerraform(struct?: DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHashOutputReference | DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_defined_salt: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedSalt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userDefinedSalt !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedSalt = this._userDefinedSalt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userDefinedSalt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userDefinedSalt = value.userDefinedSalt;
    }
  }

  // user_defined_salt - computed: false, optional: true, required: false
  private _userDefinedSalt?: string; 
  public get userDefinedSalt() {
    return this.getStringAttribute('user_defined_salt');
  }
  public set userDefinedSalt(value: string) {
    this._userDefinedSalt = value;
  }
  public resetUserDefinedSalt() {
    this._userDefinedSalt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedSaltInput() {
    return this._userDefinedSalt;
  }
}
export interface DatatransferTransferTransformationTransformersMaskFieldFunction {
  /**
  * mask_function_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#mask_function_hash DatatransferTransfer#mask_function_hash}
  */
  readonly maskFunctionHash?: DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHash;
}

export function datatransferTransferTransformationTransformersMaskFieldFunctionToTerraform(struct?: DatatransferTransferTransformationTransformersMaskFieldFunctionOutputReference | DatatransferTransferTransformationTransformersMaskFieldFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask_function_hash: datatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHashToTerraform(struct!.maskFunctionHash),
  }
}


export function datatransferTransferTransformationTransformersMaskFieldFunctionToHclTerraform(struct?: DatatransferTransferTransformationTransformersMaskFieldFunctionOutputReference | DatatransferTransferTransformationTransformersMaskFieldFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask_function_hash: {
      value: datatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHashToHclTerraform(struct!.maskFunctionHash),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHashList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersMaskFieldFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersMaskFieldFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maskFunctionHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskFunctionHash = this._maskFunctionHash?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersMaskFieldFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maskFunctionHash.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maskFunctionHash.internalValue = value.maskFunctionHash;
    }
  }

  // mask_function_hash - computed: false, optional: true, required: false
  private _maskFunctionHash = new DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHashOutputReference(this, "mask_function_hash");
  public get maskFunctionHash() {
    return this._maskFunctionHash;
  }
  public putMaskFunctionHash(value: DatatransferTransferTransformationTransformersMaskFieldFunctionMaskFunctionHash) {
    this._maskFunctionHash.internalValue = value;
  }
  public resetMaskFunctionHash() {
    this._maskFunctionHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskFunctionHashInput() {
    return this._maskFunctionHash.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformersMaskFieldTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_tables DatatransferTransfer#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_tables DatatransferTransfer#include_tables}
  */
  readonly includeTables?: string[];
}

export function datatransferTransferTransformationTransformersMaskFieldTablesToTerraform(struct?: DatatransferTransferTransformationTransformersMaskFieldTablesOutputReference | DatatransferTransferTransformationTransformersMaskFieldTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
  }
}


export function datatransferTransferTransformationTransformersMaskFieldTablesToHclTerraform(struct?: DatatransferTransferTransformationTransformersMaskFieldTablesOutputReference | DatatransferTransferTransformationTransformersMaskFieldTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersMaskFieldTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersMaskFieldTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersMaskFieldTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeTables = undefined;
      this._includeTables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
    }
  }

  // exclude_tables - computed: false, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: false, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }
}
export interface DatatransferTransferTransformationTransformersMaskField {
  /**
  * List of strings that specify the name of the column for data masking (a regular expression).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#columns DatatransferTransfer#columns}
  */
  readonly columns?: string[];
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#function DatatransferTransfer#function}
  */
  readonly function?: DatatransferTransferTransformationTransformersMaskFieldFunction;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#tables DatatransferTransfer#tables}
  */
  readonly tables?: DatatransferTransferTransformationTransformersMaskFieldTables;
}

export function datatransferTransferTransformationTransformersMaskFieldToTerraform(struct?: DatatransferTransferTransformationTransformersMaskFieldOutputReference | DatatransferTransferTransformationTransformersMaskField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    function: datatransferTransferTransformationTransformersMaskFieldFunctionToTerraform(struct!.function),
    tables: datatransferTransferTransformationTransformersMaskFieldTablesToTerraform(struct!.tables),
  }
}


export function datatransferTransferTransformationTransformersMaskFieldToHclTerraform(struct?: DatatransferTransferTransformationTransformersMaskFieldOutputReference | DatatransferTransferTransformationTransformersMaskField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    function: {
      value: datatransferTransferTransformationTransformersMaskFieldFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersMaskFieldFunctionList",
    },
    tables: {
      value: datatransferTransferTransformationTransformersMaskFieldTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersMaskFieldTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersMaskFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersMaskField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersMaskField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
      this._function.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
      this._function.internalValue = value.function;
      this._tables.internalValue = value.tables;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // function - computed: false, optional: true, required: false
  private _function = new DatatransferTransferTransformationTransformersMaskFieldFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: DatatransferTransferTransformationTransformersMaskFieldFunction) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DatatransferTransferTransformationTransformersMaskFieldTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatatransferTransferTransformationTransformersMaskFieldTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#name DatatransferTransfer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#name_space DatatransferTransfer#name_space}
  */
  readonly nameSpace?: string;
}

export function datatransferTransferTransformationTransformersRenameTablesRenameTablesNewNameToTerraform(struct?: DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewNameOutputReference | DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_space: cdktf.stringToTerraform(struct!.nameSpace),
  }
}


export function datatransferTransferTransformationTransformersRenameTablesRenameTablesNewNameToHclTerraform(struct?: DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewNameOutputReference | DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_space: {
      value: cdktf.stringToHclTerraform(struct!.nameSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSpace = this._nameSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nameSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nameSpace = value.nameSpace;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_space - computed: false, optional: true, required: false
  private _nameSpace?: string; 
  public get nameSpace() {
    return this.getStringAttribute('name_space');
  }
  public set nameSpace(value: string) {
    this._nameSpace = value;
  }
  public resetNameSpace() {
    this._nameSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSpaceInput() {
    return this._nameSpace;
  }
}
export interface DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#name DatatransferTransfer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#name_space DatatransferTransfer#name_space}
  */
  readonly nameSpace?: string;
}

export function datatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalNameToTerraform(struct?: DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalNameOutputReference | DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_space: cdktf.stringToTerraform(struct!.nameSpace),
  }
}


export function datatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalNameToHclTerraform(struct?: DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalNameOutputReference | DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_space: {
      value: cdktf.stringToHclTerraform(struct!.nameSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSpace = this._nameSpace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nameSpace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nameSpace = value.nameSpace;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_space - computed: false, optional: true, required: false
  private _nameSpace?: string; 
  public get nameSpace() {
    return this.getStringAttribute('name_space');
  }
  public set nameSpace(value: string) {
    this._nameSpace = value;
  }
  public resetNameSpace() {
    this._nameSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSpaceInput() {
    return this._nameSpace;
  }
}
export interface DatatransferTransferTransformationTransformersRenameTablesRenameTables {
  /**
  * new_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#new_name DatatransferTransfer#new_name}
  */
  readonly newName?: DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewName;
  /**
  * original_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#original_name DatatransferTransfer#original_name}
  */
  readonly originalName?: DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalName;
}

export function datatransferTransferTransformationTransformersRenameTablesRenameTablesToTerraform(struct?: DatatransferTransferTransformationTransformersRenameTablesRenameTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_name: datatransferTransferTransformationTransformersRenameTablesRenameTablesNewNameToTerraform(struct!.newName),
    original_name: datatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalNameToTerraform(struct!.originalName),
  }
}


export function datatransferTransferTransformationTransformersRenameTablesRenameTablesToHclTerraform(struct?: DatatransferTransferTransformationTransformersRenameTablesRenameTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_name: {
      value: datatransferTransferTransformationTransformersRenameTablesRenameTablesNewNameToHclTerraform(struct!.newName),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewNameList",
    },
    original_name: {
      value: datatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalNameToHclTerraform(struct!.originalName),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersRenameTablesRenameTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferTransferTransformationTransformersRenameTablesRenameTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newName = this._newName?.internalValue;
    }
    if (this._originalName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalName = this._originalName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersRenameTablesRenameTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newName.internalValue = undefined;
      this._originalName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newName.internalValue = value.newName;
      this._originalName.internalValue = value.originalName;
    }
  }

  // new_name - computed: false, optional: true, required: false
  private _newName = new DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewNameOutputReference(this, "new_name");
  public get newName() {
    return this._newName;
  }
  public putNewName(value: DatatransferTransferTransformationTransformersRenameTablesRenameTablesNewName) {
    this._newName.internalValue = value;
  }
  public resetNewName() {
    this._newName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNameInput() {
    return this._newName.internalValue;
  }

  // original_name - computed: false, optional: true, required: false
  private _originalName = new DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalNameOutputReference(this, "original_name");
  public get originalName() {
    return this._originalName;
  }
  public putOriginalName(value: DatatransferTransferTransformationTransformersRenameTablesRenameTablesOriginalName) {
    this._originalName.internalValue = value;
  }
  public resetOriginalName() {
    this._originalName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalNameInput() {
    return this._originalName.internalValue;
  }
}

export class DatatransferTransferTransformationTransformersRenameTablesRenameTablesList extends cdktf.ComplexList {
  public internalValue? : DatatransferTransferTransformationTransformersRenameTablesRenameTables[] | cdktf.IResolvable

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
  public get(index: number): DatatransferTransferTransformationTransformersRenameTablesRenameTablesOutputReference {
    return new DatatransferTransferTransformationTransformersRenameTablesRenameTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferTransferTransformationTransformersRenameTables {
  /**
  * rename_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#rename_tables DatatransferTransfer#rename_tables}
  */
  readonly renameTables?: DatatransferTransferTransformationTransformersRenameTablesRenameTables[] | cdktf.IResolvable;
}

export function datatransferTransferTransformationTransformersRenameTablesToTerraform(struct?: DatatransferTransferTransformationTransformersRenameTablesOutputReference | DatatransferTransferTransformationTransformersRenameTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rename_tables: cdktf.listMapper(datatransferTransferTransformationTransformersRenameTablesRenameTablesToTerraform, true)(struct!.renameTables),
  }
}


export function datatransferTransferTransformationTransformersRenameTablesToHclTerraform(struct?: DatatransferTransferTransformationTransformersRenameTablesOutputReference | DatatransferTransferTransformationTransformersRenameTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rename_tables: {
      value: cdktf.listMapperHcl(datatransferTransferTransformationTransformersRenameTablesRenameTablesToHclTerraform, true)(struct!.renameTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersRenameTablesRenameTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersRenameTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersRenameTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._renameTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameTables = this._renameTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersRenameTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._renameTables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._renameTables.internalValue = value.renameTables;
    }
  }

  // rename_tables - computed: false, optional: true, required: false
  private _renameTables = new DatatransferTransferTransformationTransformersRenameTablesRenameTablesList(this, "rename_tables", false);
  public get renameTables() {
    return this._renameTables;
  }
  public putRenameTables(value: DatatransferTransferTransformationTransformersRenameTablesRenameTables[] | cdktf.IResolvable) {
    this._renameTables.internalValue = value;
  }
  public resetRenameTables() {
    this._renameTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameTablesInput() {
    return this._renameTables.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformersReplacePrimaryKeyTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_tables DatatransferTransfer#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_tables DatatransferTransfer#include_tables}
  */
  readonly includeTables?: string[];
}

export function datatransferTransferTransformationTransformersReplacePrimaryKeyTablesToTerraform(struct?: DatatransferTransferTransformationTransformersReplacePrimaryKeyTablesOutputReference | DatatransferTransferTransformationTransformersReplacePrimaryKeyTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
  }
}


export function datatransferTransferTransformationTransformersReplacePrimaryKeyTablesToHclTerraform(struct?: DatatransferTransferTransformationTransformersReplacePrimaryKeyTablesOutputReference | DatatransferTransferTransformationTransformersReplacePrimaryKeyTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersReplacePrimaryKeyTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersReplacePrimaryKeyTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersReplacePrimaryKeyTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeTables = undefined;
      this._includeTables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
    }
  }

  // exclude_tables - computed: false, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: false, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }
}
export interface DatatransferTransferTransformationTransformersReplacePrimaryKey {
  /**
  * List of columns to be used as primary keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#keys DatatransferTransfer#keys}
  */
  readonly keys?: string[];
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#tables DatatransferTransfer#tables}
  */
  readonly tables?: DatatransferTransferTransformationTransformersReplacePrimaryKeyTables;
}

export function datatransferTransferTransformationTransformersReplacePrimaryKeyToTerraform(struct?: DatatransferTransferTransformationTransformersReplacePrimaryKeyOutputReference | DatatransferTransferTransformationTransformersReplacePrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    tables: datatransferTransferTransformationTransformersReplacePrimaryKeyTablesToTerraform(struct!.tables),
  }
}


export function datatransferTransferTransformationTransformersReplacePrimaryKeyToHclTerraform(struct?: DatatransferTransferTransformationTransformersReplacePrimaryKeyOutputReference | DatatransferTransferTransformationTransformersReplacePrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tables: {
      value: datatransferTransferTransformationTransformersReplacePrimaryKeyTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersReplacePrimaryKeyTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersReplacePrimaryKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersReplacePrimaryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersReplacePrimaryKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keys = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keys = value.keys;
      this._tables.internalValue = value.tables;
    }
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DatatransferTransferTransformationTransformersReplacePrimaryKeyTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatatransferTransferTransformationTransformersReplacePrimaryKeyTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformersSharderTransformerColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_columns DatatransferTransfer#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_columns DatatransferTransfer#include_columns}
  */
  readonly includeColumns?: string[];
}

export function datatransferTransferTransformationTransformersSharderTransformerColumnsToTerraform(struct?: DatatransferTransferTransformationTransformersSharderTransformerColumnsOutputReference | DatatransferTransferTransformationTransformersSharderTransformerColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeColumns),
    include_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeColumns),
  }
}


export function datatransferTransferTransformationTransformersSharderTransformerColumnsToHclTerraform(struct?: DatatransferTransferTransformationTransformersSharderTransformerColumnsOutputReference | DatatransferTransferTransformationTransformersSharderTransformerColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersSharderTransformerColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersSharderTransformerColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeColumns = this._excludeColumns;
    }
    if (this._includeColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeColumns = this._includeColumns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersSharderTransformerColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeColumns = undefined;
      this._includeColumns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeColumns = value.excludeColumns;
      this._includeColumns = value.includeColumns;
    }
  }

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
  }

  // include_columns - computed: false, optional: true, required: false
  private _includeColumns?: string[]; 
  public get includeColumns() {
    return this.getListAttribute('include_columns');
  }
  public set includeColumns(value: string[]) {
    this._includeColumns = value;
  }
  public resetIncludeColumns() {
    this._includeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeColumnsInput() {
    return this._includeColumns;
  }
}
export interface DatatransferTransferTransformationTransformersSharderTransformerTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_tables DatatransferTransfer#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_tables DatatransferTransfer#include_tables}
  */
  readonly includeTables?: string[];
}

export function datatransferTransferTransformationTransformersSharderTransformerTablesToTerraform(struct?: DatatransferTransferTransformationTransformersSharderTransformerTablesOutputReference | DatatransferTransferTransformationTransformersSharderTransformerTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
  }
}


export function datatransferTransferTransformationTransformersSharderTransformerTablesToHclTerraform(struct?: DatatransferTransferTransformationTransformersSharderTransformerTablesOutputReference | DatatransferTransferTransformationTransformersSharderTransformerTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersSharderTransformerTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersSharderTransformerTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersSharderTransformerTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeTables = undefined;
      this._includeTables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
    }
  }

  // exclude_tables - computed: false, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: false, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }
}
export interface DatatransferTransferTransformationTransformersSharderTransformer {
  /**
  * Number of shards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#shards_count DatatransferTransfer#shards_count}
  */
  readonly shardsCount?: number;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#columns DatatransferTransfer#columns}
  */
  readonly columns?: DatatransferTransferTransformationTransformersSharderTransformerColumns;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#tables DatatransferTransfer#tables}
  */
  readonly tables?: DatatransferTransferTransformationTransformersSharderTransformerTables;
}

export function datatransferTransferTransformationTransformersSharderTransformerToTerraform(struct?: DatatransferTransferTransformationTransformersSharderTransformerOutputReference | DatatransferTransferTransformationTransformersSharderTransformer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shards_count: cdktf.numberToTerraform(struct!.shardsCount),
    columns: datatransferTransferTransformationTransformersSharderTransformerColumnsToTerraform(struct!.columns),
    tables: datatransferTransferTransformationTransformersSharderTransformerTablesToTerraform(struct!.tables),
  }
}


export function datatransferTransferTransformationTransformersSharderTransformerToHclTerraform(struct?: DatatransferTransferTransformationTransformersSharderTransformerOutputReference | DatatransferTransferTransformationTransformersSharderTransformer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shards_count: {
      value: cdktf.numberToHclTerraform(struct!.shardsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    columns: {
      value: datatransferTransferTransformationTransformersSharderTransformerColumnsToHclTerraform(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersSharderTransformerColumnsList",
    },
    tables: {
      value: datatransferTransferTransformationTransformersSharderTransformerTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersSharderTransformerTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersSharderTransformerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersSharderTransformer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shardsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardsCount = this._shardsCount;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersSharderTransformer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shardsCount = undefined;
      this._columns.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shardsCount = value.shardsCount;
      this._columns.internalValue = value.columns;
      this._tables.internalValue = value.tables;
    }
  }

  // shards_count - computed: false, optional: true, required: false
  private _shardsCount?: number; 
  public get shardsCount() {
    return this.getNumberAttribute('shards_count');
  }
  public set shardsCount(value: number) {
    this._shardsCount = value;
  }
  public resetShardsCount() {
    this._shardsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsCountInput() {
    return this._shardsCount;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new DatatransferTransferTransformationTransformersSharderTransformerColumnsOutputReference(this, "columns");
  public get columns() {
    return this._columns;
  }
  public putColumns(value: DatatransferTransferTransformationTransformersSharderTransformerColumns) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DatatransferTransferTransformationTransformersSharderTransformerTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatatransferTransferTransformationTransformersSharderTransformerTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformersTableSplitterTransformerTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#exclude_tables DatatransferTransfer#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#include_tables DatatransferTransfer#include_tables}
  */
  readonly includeTables?: string[];
}

export function datatransferTransferTransformationTransformersTableSplitterTransformerTablesToTerraform(struct?: DatatransferTransferTransformationTransformersTableSplitterTransformerTablesOutputReference | DatatransferTransferTransformationTransformersTableSplitterTransformerTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
  }
}


export function datatransferTransferTransformationTransformersTableSplitterTransformerTablesToHclTerraform(struct?: DatatransferTransferTransformationTransformersTableSplitterTransformerTablesOutputReference | DatatransferTransferTransformationTransformersTableSplitterTransformerTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersTableSplitterTransformerTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersTableSplitterTransformerTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersTableSplitterTransformerTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeTables = undefined;
      this._includeTables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
    }
  }

  // exclude_tables - computed: false, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: false, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }
}
export interface DatatransferTransferTransformationTransformersTableSplitterTransformer {
  /**
  * List of strings that specify the columns in the tables to be partitioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#columns DatatransferTransfer#columns}
  */
  readonly columns?: string[];
  /**
  * Specify the split string to be used for merging components in a new table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#splitter DatatransferTransfer#splitter}
  */
  readonly splitter?: string;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#tables DatatransferTransfer#tables}
  */
  readonly tables?: DatatransferTransferTransformationTransformersTableSplitterTransformerTables;
}

export function datatransferTransferTransformationTransformersTableSplitterTransformerToTerraform(struct?: DatatransferTransferTransformationTransformersTableSplitterTransformerOutputReference | DatatransferTransferTransformationTransformersTableSplitterTransformer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    splitter: cdktf.stringToTerraform(struct!.splitter),
    tables: datatransferTransferTransformationTransformersTableSplitterTransformerTablesToTerraform(struct!.tables),
  }
}


export function datatransferTransferTransformationTransformersTableSplitterTransformerToHclTerraform(struct?: DatatransferTransferTransformationTransformersTableSplitterTransformerOutputReference | DatatransferTransferTransformationTransformersTableSplitterTransformer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    splitter: {
      value: cdktf.stringToHclTerraform(struct!.splitter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: datatransferTransferTransformationTransformersTableSplitterTransformerTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersTableSplitterTransformerTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersTableSplitterTransformerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformationTransformersTableSplitterTransformer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._splitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitter = this._splitter;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformersTableSplitterTransformer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
      this._splitter = undefined;
      this._tables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
      this._splitter = value.splitter;
      this._tables.internalValue = value.tables;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // splitter - computed: false, optional: true, required: false
  private _splitter?: string; 
  public get splitter() {
    return this.getStringAttribute('splitter');
  }
  public set splitter(value: string) {
    this._splitter = value;
  }
  public resetSplitter() {
    this._splitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitterInput() {
    return this._splitter;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new DatatransferTransferTransformationTransformersTableSplitterTransformerTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: DatatransferTransferTransformationTransformersTableSplitterTransformerTables) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}
export interface DatatransferTransferTransformationTransformers {
  /**
  * convert_to_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#convert_to_string DatatransferTransfer#convert_to_string}
  */
  readonly convertToString?: DatatransferTransferTransformationTransformersConvertToString;
  /**
  * filter_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#filter_columns DatatransferTransfer#filter_columns}
  */
  readonly filterColumns?: DatatransferTransferTransformationTransformersFilterColumns;
  /**
  * filter_rows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#filter_rows DatatransferTransfer#filter_rows}
  */
  readonly filterRows?: DatatransferTransferTransformationTransformersFilterRows;
  /**
  * mask_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#mask_field DatatransferTransfer#mask_field}
  */
  readonly maskField?: DatatransferTransferTransformationTransformersMaskField;
  /**
  * rename_tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#rename_tables DatatransferTransfer#rename_tables}
  */
  readonly renameTables?: DatatransferTransferTransformationTransformersRenameTables;
  /**
  * replace_primary_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#replace_primary_key DatatransferTransfer#replace_primary_key}
  */
  readonly replacePrimaryKey?: DatatransferTransferTransformationTransformersReplacePrimaryKey;
  /**
  * sharder_transformer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#sharder_transformer DatatransferTransfer#sharder_transformer}
  */
  readonly sharderTransformer?: DatatransferTransferTransformationTransformersSharderTransformer;
  /**
  * table_splitter_transformer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#table_splitter_transformer DatatransferTransfer#table_splitter_transformer}
  */
  readonly tableSplitterTransformer?: DatatransferTransferTransformationTransformersTableSplitterTransformer;
}

export function datatransferTransferTransformationTransformersToTerraform(struct?: DatatransferTransferTransformationTransformers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    convert_to_string: datatransferTransferTransformationTransformersConvertToStringToTerraform(struct!.convertToString),
    filter_columns: datatransferTransferTransformationTransformersFilterColumnsToTerraform(struct!.filterColumns),
    filter_rows: datatransferTransferTransformationTransformersFilterRowsToTerraform(struct!.filterRows),
    mask_field: datatransferTransferTransformationTransformersMaskFieldToTerraform(struct!.maskField),
    rename_tables: datatransferTransferTransformationTransformersRenameTablesToTerraform(struct!.renameTables),
    replace_primary_key: datatransferTransferTransformationTransformersReplacePrimaryKeyToTerraform(struct!.replacePrimaryKey),
    sharder_transformer: datatransferTransferTransformationTransformersSharderTransformerToTerraform(struct!.sharderTransformer),
    table_splitter_transformer: datatransferTransferTransformationTransformersTableSplitterTransformerToTerraform(struct!.tableSplitterTransformer),
  }
}


export function datatransferTransferTransformationTransformersToHclTerraform(struct?: DatatransferTransferTransformationTransformers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    convert_to_string: {
      value: datatransferTransferTransformationTransformersConvertToStringToHclTerraform(struct!.convertToString),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersConvertToStringList",
    },
    filter_columns: {
      value: datatransferTransferTransformationTransformersFilterColumnsToHclTerraform(struct!.filterColumns),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersFilterColumnsList",
    },
    filter_rows: {
      value: datatransferTransferTransformationTransformersFilterRowsToHclTerraform(struct!.filterRows),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersFilterRowsList",
    },
    mask_field: {
      value: datatransferTransferTransformationTransformersMaskFieldToHclTerraform(struct!.maskField),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersMaskFieldList",
    },
    rename_tables: {
      value: datatransferTransferTransformationTransformersRenameTablesToHclTerraform(struct!.renameTables),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersRenameTablesList",
    },
    replace_primary_key: {
      value: datatransferTransferTransformationTransformersReplacePrimaryKeyToHclTerraform(struct!.replacePrimaryKey),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersReplacePrimaryKeyList",
    },
    sharder_transformer: {
      value: datatransferTransferTransformationTransformersSharderTransformerToHclTerraform(struct!.sharderTransformer),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersSharderTransformerList",
    },
    table_splitter_transformer: {
      value: datatransferTransferTransformationTransformersTableSplitterTransformerToHclTerraform(struct!.tableSplitterTransformer),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersTableSplitterTransformerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationTransformersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferTransferTransformationTransformers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._convertToString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertToString = this._convertToString?.internalValue;
    }
    if (this._filterColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterColumns = this._filterColumns?.internalValue;
    }
    if (this._filterRows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterRows = this._filterRows?.internalValue;
    }
    if (this._maskField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskField = this._maskField?.internalValue;
    }
    if (this._renameTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameTables = this._renameTables?.internalValue;
    }
    if (this._replacePrimaryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacePrimaryKey = this._replacePrimaryKey?.internalValue;
    }
    if (this._sharderTransformer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharderTransformer = this._sharderTransformer?.internalValue;
    }
    if (this._tableSplitterTransformer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableSplitterTransformer = this._tableSplitterTransformer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformationTransformers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._convertToString.internalValue = undefined;
      this._filterColumns.internalValue = undefined;
      this._filterRows.internalValue = undefined;
      this._maskField.internalValue = undefined;
      this._renameTables.internalValue = undefined;
      this._replacePrimaryKey.internalValue = undefined;
      this._sharderTransformer.internalValue = undefined;
      this._tableSplitterTransformer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._convertToString.internalValue = value.convertToString;
      this._filterColumns.internalValue = value.filterColumns;
      this._filterRows.internalValue = value.filterRows;
      this._maskField.internalValue = value.maskField;
      this._renameTables.internalValue = value.renameTables;
      this._replacePrimaryKey.internalValue = value.replacePrimaryKey;
      this._sharderTransformer.internalValue = value.sharderTransformer;
      this._tableSplitterTransformer.internalValue = value.tableSplitterTransformer;
    }
  }

  // convert_to_string - computed: false, optional: true, required: false
  private _convertToString = new DatatransferTransferTransformationTransformersConvertToStringOutputReference(this, "convert_to_string");
  public get convertToString() {
    return this._convertToString;
  }
  public putConvertToString(value: DatatransferTransferTransformationTransformersConvertToString) {
    this._convertToString.internalValue = value;
  }
  public resetConvertToString() {
    this._convertToString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertToStringInput() {
    return this._convertToString.internalValue;
  }

  // filter_columns - computed: false, optional: true, required: false
  private _filterColumns = new DatatransferTransferTransformationTransformersFilterColumnsOutputReference(this, "filter_columns");
  public get filterColumns() {
    return this._filterColumns;
  }
  public putFilterColumns(value: DatatransferTransferTransformationTransformersFilterColumns) {
    this._filterColumns.internalValue = value;
  }
  public resetFilterColumns() {
    this._filterColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterColumnsInput() {
    return this._filterColumns.internalValue;
  }

  // filter_rows - computed: false, optional: true, required: false
  private _filterRows = new DatatransferTransferTransformationTransformersFilterRowsOutputReference(this, "filter_rows");
  public get filterRows() {
    return this._filterRows;
  }
  public putFilterRows(value: DatatransferTransferTransformationTransformersFilterRows) {
    this._filterRows.internalValue = value;
  }
  public resetFilterRows() {
    this._filterRows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRowsInput() {
    return this._filterRows.internalValue;
  }

  // mask_field - computed: false, optional: true, required: false
  private _maskField = new DatatransferTransferTransformationTransformersMaskFieldOutputReference(this, "mask_field");
  public get maskField() {
    return this._maskField;
  }
  public putMaskField(value: DatatransferTransferTransformationTransformersMaskField) {
    this._maskField.internalValue = value;
  }
  public resetMaskField() {
    this._maskField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskFieldInput() {
    return this._maskField.internalValue;
  }

  // rename_tables - computed: false, optional: true, required: false
  private _renameTables = new DatatransferTransferTransformationTransformersRenameTablesOutputReference(this, "rename_tables");
  public get renameTables() {
    return this._renameTables;
  }
  public putRenameTables(value: DatatransferTransferTransformationTransformersRenameTables) {
    this._renameTables.internalValue = value;
  }
  public resetRenameTables() {
    this._renameTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameTablesInput() {
    return this._renameTables.internalValue;
  }

  // replace_primary_key - computed: false, optional: true, required: false
  private _replacePrimaryKey = new DatatransferTransferTransformationTransformersReplacePrimaryKeyOutputReference(this, "replace_primary_key");
  public get replacePrimaryKey() {
    return this._replacePrimaryKey;
  }
  public putReplacePrimaryKey(value: DatatransferTransferTransformationTransformersReplacePrimaryKey) {
    this._replacePrimaryKey.internalValue = value;
  }
  public resetReplacePrimaryKey() {
    this._replacePrimaryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrimaryKeyInput() {
    return this._replacePrimaryKey.internalValue;
  }

  // sharder_transformer - computed: false, optional: true, required: false
  private _sharderTransformer = new DatatransferTransferTransformationTransformersSharderTransformerOutputReference(this, "sharder_transformer");
  public get sharderTransformer() {
    return this._sharderTransformer;
  }
  public putSharderTransformer(value: DatatransferTransferTransformationTransformersSharderTransformer) {
    this._sharderTransformer.internalValue = value;
  }
  public resetSharderTransformer() {
    this._sharderTransformer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharderTransformerInput() {
    return this._sharderTransformer.internalValue;
  }

  // table_splitter_transformer - computed: false, optional: true, required: false
  private _tableSplitterTransformer = new DatatransferTransferTransformationTransformersTableSplitterTransformerOutputReference(this, "table_splitter_transformer");
  public get tableSplitterTransformer() {
    return this._tableSplitterTransformer;
  }
  public putTableSplitterTransformer(value: DatatransferTransferTransformationTransformersTableSplitterTransformer) {
    this._tableSplitterTransformer.internalValue = value;
  }
  public resetTableSplitterTransformer() {
    this._tableSplitterTransformer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableSplitterTransformerInput() {
    return this._tableSplitterTransformer.internalValue;
  }
}

export class DatatransferTransferTransformationTransformersList extends cdktf.ComplexList {
  public internalValue? : DatatransferTransferTransformationTransformers[] | cdktf.IResolvable

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
  public get(index: number): DatatransferTransferTransformationTransformersOutputReference {
    return new DatatransferTransferTransformationTransformersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferTransferTransformation {
  /**
  * transformers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#transformers DatatransferTransfer#transformers}
  */
  readonly transformers?: DatatransferTransferTransformationTransformers[] | cdktf.IResolvable;
}

export function datatransferTransferTransformationToTerraform(struct?: DatatransferTransferTransformationOutputReference | DatatransferTransferTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformers: cdktf.listMapper(datatransferTransferTransformationTransformersToTerraform, true)(struct!.transformers),
  }
}


export function datatransferTransferTransformationToHclTerraform(struct?: DatatransferTransferTransformationOutputReference | DatatransferTransferTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformers: {
      value: cdktf.listMapperHcl(datatransferTransferTransformationTransformersToHclTerraform, true)(struct!.transformers),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferTransferTransformationTransformersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferTransferTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferTransferTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferTransferTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformers.internalValue = value.transformers;
    }
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers = new DatatransferTransferTransformationTransformersList(this, "transformers", false);
  public get transformers() {
    return this._transformers;
  }
  public putTransformers(value: DatatransferTransferTransformationTransformers[] | cdktf.IResolvable) {
    this._transformers.internalValue = value;
  }
  public resetTransformers() {
    this._transformers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer yandex_datatransfer_transfer}
*/
export class DatatransferTransfer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_datatransfer_transfer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatatransferTransfer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatatransferTransfer to import
  * @param importFromId The id of the existing DatatransferTransfer that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatatransferTransfer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_datatransfer_transfer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/datatransfer_transfer yandex_datatransfer_transfer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatatransferTransferConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatatransferTransferConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_datatransfer_transfer',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.170.0',
        providerVersionConstraint: '0.170.0'
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
    this._onCreateActivateMode = config.onCreateActivateMode;
    this._sourceId = config.sourceId;
    this._targetId = config.targetId;
    this._type = config.type;
    this._runtime.internalValue = config.runtime;
    this._transformation.internalValue = config.transformation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
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

  // labels - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // on_create_activate_mode - computed: false, optional: true, required: false
  private _onCreateActivateMode?: string; 
  public get onCreateActivateMode() {
    return this.getStringAttribute('on_create_activate_mode');
  }
  public set onCreateActivateMode(value: string) {
    this._onCreateActivateMode = value;
  }
  public resetOnCreateActivateMode() {
    this._onCreateActivateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCreateActivateModeInput() {
    return this._onCreateActivateMode;
  }

  // source_id - computed: true, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getStringAttribute('warning');
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new DatatransferTransferRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: DatatransferTransferRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new DatatransferTransferTransformationOutputReference(this, "transformation");
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: DatatransferTransferTransformation) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
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
      on_create_activate_mode: cdktf.stringToTerraform(this._onCreateActivateMode),
      source_id: cdktf.stringToTerraform(this._sourceId),
      target_id: cdktf.stringToTerraform(this._targetId),
      type: cdktf.stringToTerraform(this._type),
      runtime: datatransferTransferRuntimeToTerraform(this._runtime.internalValue),
      transformation: datatransferTransferTransformationToTerraform(this._transformation.internalValue),
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
      on_create_activate_mode: {
        value: cdktf.stringToHclTerraform(this._onCreateActivateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_id: {
        value: cdktf.stringToHclTerraform(this._targetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: datatransferTransferRuntimeToHclTerraform(this._runtime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatatransferTransferRuntimeList",
      },
      transformation: {
        value: datatransferTransferTransformationToHclTerraform(this._transformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatatransferTransferTransformationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
