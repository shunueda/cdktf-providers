// https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/serverless_exports
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTidbcloudServerlessExportsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/serverless_exports#cluster_id DataTidbcloudServerlessExports#cluster_id}
  */
  readonly clusterId: string;
}
export interface DataTidbcloudServerlessExportsExportsExportOptionsCsvFormat {
}

export function dataTidbcloudServerlessExportsExportsExportOptionsCsvFormatToTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptionsCsvFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsExportOptionsCsvFormatToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptionsCsvFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsExportOptionsCsvFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsExportOptionsCsvFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsExportOptionsCsvFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // null_value - computed: true, optional: false, required: false
  public get nullValue() {
    return this.getStringAttribute('null_value');
  }

  // separator - computed: true, optional: false, required: false
  public get separator() {
    return this.getStringAttribute('separator');
  }

  // skip_header - computed: true, optional: false, required: false
  public get skipHeader() {
    return this.getBooleanAttribute('skip_header');
  }
}
export interface DataTidbcloudServerlessExportsExportsExportOptionsFilterTable {
}

export function dataTidbcloudServerlessExportsExportsExportOptionsFilterTableToTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptionsFilterTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsExportOptionsFilterTableToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptionsFilterTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsExportOptionsFilterTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsExportOptionsFilterTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsExportOptionsFilterTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // patterns - computed: true, optional: false, required: false
  public get patterns() {
    return this.getListAttribute('patterns');
  }

  // where - computed: true, optional: false, required: false
  public get where() {
    return this.getStringAttribute('where');
  }
}
export interface DataTidbcloudServerlessExportsExportsExportOptionsFilter {
}

export function dataTidbcloudServerlessExportsExportsExportOptionsFilterToTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptionsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsExportOptionsFilterToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptionsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsExportOptionsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsExportOptionsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsExportOptionsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sql - computed: true, optional: false, required: false
  public get sql() {
    return this.getStringAttribute('sql');
  }

  // table - computed: true, optional: false, required: false
  private _table = new DataTidbcloudServerlessExportsExportsExportOptionsFilterTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
}
export interface DataTidbcloudServerlessExportsExportsExportOptionsParquetFormat {
}

export function dataTidbcloudServerlessExportsExportsExportOptionsParquetFormatToTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptionsParquetFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsExportOptionsParquetFormatToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptionsParquetFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsExportOptionsParquetFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsExportOptionsParquetFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsExportOptionsParquetFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }
}
export interface DataTidbcloudServerlessExportsExportsExportOptions {
}

export function dataTidbcloudServerlessExportsExportsExportOptionsToTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsExportOptionsToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsExportOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsExportOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsExportOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsExportOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // csv_format - computed: true, optional: false, required: false
  private _csvFormat = new DataTidbcloudServerlessExportsExportsExportOptionsCsvFormatOutputReference(this, "csv_format");
  public get csvFormat() {
    return this._csvFormat;
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // filter - computed: true, optional: false, required: false
  private _filter = new DataTidbcloudServerlessExportsExportsExportOptionsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }

  // parquet_format - computed: true, optional: false, required: false
  private _parquetFormat = new DataTidbcloudServerlessExportsExportsExportOptionsParquetFormatOutputReference(this, "parquet_format");
  public get parquetFormat() {
    return this._parquetFormat;
  }
}
export interface DataTidbcloudServerlessExportsExportsTargetAzureBlob {
}

export function dataTidbcloudServerlessExportsExportsTargetAzureBlobToTerraform(struct?: DataTidbcloudServerlessExportsExportsTargetAzureBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsTargetAzureBlobToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsTargetAzureBlob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsTargetAzureBlobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsTargetAzureBlob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsTargetAzureBlob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataTidbcloudServerlessExportsExportsTargetGcs {
}

export function dataTidbcloudServerlessExportsExportsTargetGcsToTerraform(struct?: DataTidbcloudServerlessExportsExportsTargetGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsTargetGcsToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsTargetGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsTargetGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsTargetGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsTargetGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataTidbcloudServerlessExportsExportsTargetS3AccessKey {
}

export function dataTidbcloudServerlessExportsExportsTargetS3AccessKeyToTerraform(struct?: DataTidbcloudServerlessExportsExportsTargetS3AccessKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsTargetS3AccessKeyToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsTargetS3AccessKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsTargetS3AccessKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsTargetS3AccessKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsTargetS3AccessKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataTidbcloudServerlessExportsExportsTargetS3 {
}

export function dataTidbcloudServerlessExportsExportsTargetS3ToTerraform(struct?: DataTidbcloudServerlessExportsExportsTargetS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsTargetS3ToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsTargetS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsTargetS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsTargetS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsTargetS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  private _accessKey = new DataTidbcloudServerlessExportsExportsTargetS3AccessKeyOutputReference(this, "access_key");
  public get accessKey() {
    return this._accessKey;
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataTidbcloudServerlessExportsExportsTarget {
}

export function dataTidbcloudServerlessExportsExportsTargetToTerraform(struct?: DataTidbcloudServerlessExportsExportsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsTargetToHclTerraform(struct?: DataTidbcloudServerlessExportsExportsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTidbcloudServerlessExportsExportsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExportsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_blob - computed: true, optional: false, required: false
  private _azureBlob = new DataTidbcloudServerlessExportsExportsTargetAzureBlobOutputReference(this, "azure_blob");
  public get azureBlob() {
    return this._azureBlob;
  }

  // gcs - computed: true, optional: false, required: false
  private _gcs = new DataTidbcloudServerlessExportsExportsTargetGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataTidbcloudServerlessExportsExportsTargetS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataTidbcloudServerlessExportsExports {
}

export function dataTidbcloudServerlessExportsExportsToTerraform(struct?: DataTidbcloudServerlessExportsExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTidbcloudServerlessExportsExportsToHclTerraform(struct?: DataTidbcloudServerlessExportsExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTidbcloudServerlessExportsExportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTidbcloudServerlessExportsExports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTidbcloudServerlessExportsExports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // complete_time - computed: true, optional: false, required: false
  public get completeTime() {
    return this.getStringAttribute('complete_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // export_id - computed: true, optional: false, required: false
  public get exportId() {
    return this.getStringAttribute('export_id');
  }

  // export_options - computed: true, optional: false, required: false
  private _exportOptions = new DataTidbcloudServerlessExportsExportsExportOptionsOutputReference(this, "export_options");
  public get exportOptions() {
    return this._exportOptions;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // snapshot_time - computed: true, optional: false, required: false
  public get snapshotTime() {
    return this.getStringAttribute('snapshot_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataTidbcloudServerlessExportsExportsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataTidbcloudServerlessExportsExportsList extends cdktf.ComplexList {

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
  public get(index: number): DataTidbcloudServerlessExportsExportsOutputReference {
    return new DataTidbcloudServerlessExportsExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/serverless_exports tidbcloud_serverless_exports}
*/
export class DataTidbcloudServerlessExports extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tidbcloud_serverless_exports";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTidbcloudServerlessExports resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTidbcloudServerlessExports to import
  * @param importFromId The id of the existing DataTidbcloudServerlessExports that should be imported. Refer to the {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/serverless_exports#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTidbcloudServerlessExports to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tidbcloud_serverless_exports", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tidbcloud/tidbcloud/0.4.5/docs/data-sources/serverless_exports tidbcloud_serverless_exports} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTidbcloudServerlessExportsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTidbcloudServerlessExportsConfig) {
    super(scope, id, {
      terraformResourceType: 'tidbcloud_serverless_exports',
      terraformGeneratorMetadata: {
        providerName: 'tidbcloud',
        providerVersion: '0.4.5'
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

  // exports - computed: true, optional: false, required: false
  private _exports = new DataTidbcloudServerlessExportsExportsList(this, "exports", false);
  public get exports() {
    return this._exports;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
