// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/trino_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexTrinoCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Trino cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/trino_catalog#cluster_id DataYandexTrinoCatalog#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/trino_catalog#id DataYandexTrinoCatalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/trino_catalog#name DataYandexTrinoCatalog#name}
  */
  readonly name?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/trino_catalog#timeouts DataYandexTrinoCatalog#timeouts}
  */
  readonly timeouts?: DataYandexTrinoCatalogTimeouts;
}
export interface DataYandexTrinoCatalogClickhouseConnectionManager {
}

export function dataYandexTrinoCatalogClickhouseConnectionManagerToTerraform(struct?: DataYandexTrinoCatalogClickhouseConnectionManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogClickhouseConnectionManagerToHclTerraform(struct?: DataYandexTrinoCatalogClickhouseConnectionManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogClickhouseConnectionManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogClickhouseConnectionManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogClickhouseConnectionManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_properties - computed: true, optional: false, required: false
  private _connectionProperties = new cdktf.StringMap(this, "connection_properties");
  public get connectionProperties() {
    return this._connectionProperties;
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }
}
export interface DataYandexTrinoCatalogClickhouseOnPremise {
}

export function dataYandexTrinoCatalogClickhouseOnPremiseToTerraform(struct?: DataYandexTrinoCatalogClickhouseOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogClickhouseOnPremiseToHclTerraform(struct?: DataYandexTrinoCatalogClickhouseOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogClickhouseOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogClickhouseOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogClickhouseOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}
export interface DataYandexTrinoCatalogClickhouse {
}

export function dataYandexTrinoCatalogClickhouseToTerraform(struct?: DataYandexTrinoCatalogClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogClickhouseToHclTerraform(struct?: DataYandexTrinoCatalogClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogClickhouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogClickhouse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // connection_manager - computed: true, optional: false, required: false
  private _connectionManager = new DataYandexTrinoCatalogClickhouseConnectionManagerOutputReference(this, "connection_manager");
  public get connectionManager() {
    return this._connectionManager;
  }

  // on_premise - computed: true, optional: false, required: false
  private _onPremise = new DataYandexTrinoCatalogClickhouseOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
}
export interface DataYandexTrinoCatalogDeltaLakeFileSystemExternalS3 {
}

export function dataYandexTrinoCatalogDeltaLakeFileSystemExternalS3ToTerraform(struct?: DataYandexTrinoCatalogDeltaLakeFileSystemExternalS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogDeltaLakeFileSystemExternalS3ToHclTerraform(struct?: DataYandexTrinoCatalogDeltaLakeFileSystemExternalS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogDeltaLakeFileSystemExternalS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogDeltaLakeFileSystemExternalS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogDeltaLakeFileSystemExternalS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_access_key - computed: true, optional: false, required: false
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }

  // aws_endpoint - computed: true, optional: false, required: false
  public get awsEndpoint() {
    return this.getStringAttribute('aws_endpoint');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // aws_secret_key - computed: true, optional: false, required: false
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
}
export interface DataYandexTrinoCatalogDeltaLakeFileSystemS3 {
}

export function dataYandexTrinoCatalogDeltaLakeFileSystemS3ToTerraform(struct?: DataYandexTrinoCatalogDeltaLakeFileSystemS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogDeltaLakeFileSystemS3ToHclTerraform(struct?: DataYandexTrinoCatalogDeltaLakeFileSystemS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogDeltaLakeFileSystemS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogDeltaLakeFileSystemS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogDeltaLakeFileSystemS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexTrinoCatalogDeltaLakeFileSystem {
}

export function dataYandexTrinoCatalogDeltaLakeFileSystemToTerraform(struct?: DataYandexTrinoCatalogDeltaLakeFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogDeltaLakeFileSystemToHclTerraform(struct?: DataYandexTrinoCatalogDeltaLakeFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogDeltaLakeFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogDeltaLakeFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogDeltaLakeFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_s3 - computed: true, optional: false, required: false
  private _externalS3 = new DataYandexTrinoCatalogDeltaLakeFileSystemExternalS3OutputReference(this, "external_s3");
  public get externalS3() {
    return this._externalS3;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataYandexTrinoCatalogDeltaLakeFileSystemS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataYandexTrinoCatalogDeltaLakeMetastore {
}

export function dataYandexTrinoCatalogDeltaLakeMetastoreToTerraform(struct?: DataYandexTrinoCatalogDeltaLakeMetastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogDeltaLakeMetastoreToHclTerraform(struct?: DataYandexTrinoCatalogDeltaLakeMetastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogDeltaLakeMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogDeltaLakeMetastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogDeltaLakeMetastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataYandexTrinoCatalogDeltaLake {
}

export function dataYandexTrinoCatalogDeltaLakeToTerraform(struct?: DataYandexTrinoCatalogDeltaLake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogDeltaLakeToHclTerraform(struct?: DataYandexTrinoCatalogDeltaLake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogDeltaLakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogDeltaLake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogDeltaLake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // file_system - computed: true, optional: false, required: false
  private _fileSystem = new DataYandexTrinoCatalogDeltaLakeFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }

  // metastore - computed: true, optional: false, required: false
  private _metastore = new DataYandexTrinoCatalogDeltaLakeMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
}
export interface DataYandexTrinoCatalogHiveFileSystemExternalS3 {
}

export function dataYandexTrinoCatalogHiveFileSystemExternalS3ToTerraform(struct?: DataYandexTrinoCatalogHiveFileSystemExternalS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHiveFileSystemExternalS3ToHclTerraform(struct?: DataYandexTrinoCatalogHiveFileSystemExternalS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHiveFileSystemExternalS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHiveFileSystemExternalS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHiveFileSystemExternalS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_access_key - computed: true, optional: false, required: false
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }

  // aws_endpoint - computed: true, optional: false, required: false
  public get awsEndpoint() {
    return this.getStringAttribute('aws_endpoint');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // aws_secret_key - computed: true, optional: false, required: false
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
}
export interface DataYandexTrinoCatalogHiveFileSystemS3 {
}

export function dataYandexTrinoCatalogHiveFileSystemS3ToTerraform(struct?: DataYandexTrinoCatalogHiveFileSystemS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHiveFileSystemS3ToHclTerraform(struct?: DataYandexTrinoCatalogHiveFileSystemS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHiveFileSystemS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHiveFileSystemS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHiveFileSystemS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexTrinoCatalogHiveFileSystem {
}

export function dataYandexTrinoCatalogHiveFileSystemToTerraform(struct?: DataYandexTrinoCatalogHiveFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHiveFileSystemToHclTerraform(struct?: DataYandexTrinoCatalogHiveFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHiveFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHiveFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHiveFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_s3 - computed: true, optional: false, required: false
  private _externalS3 = new DataYandexTrinoCatalogHiveFileSystemExternalS3OutputReference(this, "external_s3");
  public get externalS3() {
    return this._externalS3;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataYandexTrinoCatalogHiveFileSystemS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataYandexTrinoCatalogHiveMetastore {
}

export function dataYandexTrinoCatalogHiveMetastoreToTerraform(struct?: DataYandexTrinoCatalogHiveMetastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHiveMetastoreToHclTerraform(struct?: DataYandexTrinoCatalogHiveMetastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHiveMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHiveMetastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHiveMetastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataYandexTrinoCatalogHive {
}

export function dataYandexTrinoCatalogHiveToTerraform(struct?: DataYandexTrinoCatalogHive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHiveToHclTerraform(struct?: DataYandexTrinoCatalogHive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // file_system - computed: true, optional: false, required: false
  private _fileSystem = new DataYandexTrinoCatalogHiveFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }

  // metastore - computed: true, optional: false, required: false
  private _metastore = new DataYandexTrinoCatalogHiveMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
}
export interface DataYandexTrinoCatalogHudiFileSystemExternalS3 {
}

export function dataYandexTrinoCatalogHudiFileSystemExternalS3ToTerraform(struct?: DataYandexTrinoCatalogHudiFileSystemExternalS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHudiFileSystemExternalS3ToHclTerraform(struct?: DataYandexTrinoCatalogHudiFileSystemExternalS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHudiFileSystemExternalS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHudiFileSystemExternalS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHudiFileSystemExternalS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_access_key - computed: true, optional: false, required: false
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }

  // aws_endpoint - computed: true, optional: false, required: false
  public get awsEndpoint() {
    return this.getStringAttribute('aws_endpoint');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // aws_secret_key - computed: true, optional: false, required: false
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
}
export interface DataYandexTrinoCatalogHudiFileSystemS3 {
}

export function dataYandexTrinoCatalogHudiFileSystemS3ToTerraform(struct?: DataYandexTrinoCatalogHudiFileSystemS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHudiFileSystemS3ToHclTerraform(struct?: DataYandexTrinoCatalogHudiFileSystemS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHudiFileSystemS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHudiFileSystemS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHudiFileSystemS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexTrinoCatalogHudiFileSystem {
}

export function dataYandexTrinoCatalogHudiFileSystemToTerraform(struct?: DataYandexTrinoCatalogHudiFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHudiFileSystemToHclTerraform(struct?: DataYandexTrinoCatalogHudiFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHudiFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHudiFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHudiFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_s3 - computed: true, optional: false, required: false
  private _externalS3 = new DataYandexTrinoCatalogHudiFileSystemExternalS3OutputReference(this, "external_s3");
  public get externalS3() {
    return this._externalS3;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataYandexTrinoCatalogHudiFileSystemS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataYandexTrinoCatalogHudiMetastore {
}

export function dataYandexTrinoCatalogHudiMetastoreToTerraform(struct?: DataYandexTrinoCatalogHudiMetastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHudiMetastoreToHclTerraform(struct?: DataYandexTrinoCatalogHudiMetastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHudiMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHudiMetastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHudiMetastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataYandexTrinoCatalogHudi {
}

export function dataYandexTrinoCatalogHudiToTerraform(struct?: DataYandexTrinoCatalogHudi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogHudiToHclTerraform(struct?: DataYandexTrinoCatalogHudi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogHudiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogHudi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogHudi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // file_system - computed: true, optional: false, required: false
  private _fileSystem = new DataYandexTrinoCatalogHudiFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }

  // metastore - computed: true, optional: false, required: false
  private _metastore = new DataYandexTrinoCatalogHudiMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
}
export interface DataYandexTrinoCatalogIcebergFileSystemExternalS3 {
}

export function dataYandexTrinoCatalogIcebergFileSystemExternalS3ToTerraform(struct?: DataYandexTrinoCatalogIcebergFileSystemExternalS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogIcebergFileSystemExternalS3ToHclTerraform(struct?: DataYandexTrinoCatalogIcebergFileSystemExternalS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogIcebergFileSystemExternalS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogIcebergFileSystemExternalS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogIcebergFileSystemExternalS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_access_key - computed: true, optional: false, required: false
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }

  // aws_endpoint - computed: true, optional: false, required: false
  public get awsEndpoint() {
    return this.getStringAttribute('aws_endpoint');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // aws_secret_key - computed: true, optional: false, required: false
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
}
export interface DataYandexTrinoCatalogIcebergFileSystemS3 {
}

export function dataYandexTrinoCatalogIcebergFileSystemS3ToTerraform(struct?: DataYandexTrinoCatalogIcebergFileSystemS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogIcebergFileSystemS3ToHclTerraform(struct?: DataYandexTrinoCatalogIcebergFileSystemS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogIcebergFileSystemS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogIcebergFileSystemS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogIcebergFileSystemS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexTrinoCatalogIcebergFileSystem {
}

export function dataYandexTrinoCatalogIcebergFileSystemToTerraform(struct?: DataYandexTrinoCatalogIcebergFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogIcebergFileSystemToHclTerraform(struct?: DataYandexTrinoCatalogIcebergFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogIcebergFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogIcebergFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogIcebergFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_s3 - computed: true, optional: false, required: false
  private _externalS3 = new DataYandexTrinoCatalogIcebergFileSystemExternalS3OutputReference(this, "external_s3");
  public get externalS3() {
    return this._externalS3;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataYandexTrinoCatalogIcebergFileSystemS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
}
export interface DataYandexTrinoCatalogIcebergMetastore {
}

export function dataYandexTrinoCatalogIcebergMetastoreToTerraform(struct?: DataYandexTrinoCatalogIcebergMetastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogIcebergMetastoreToHclTerraform(struct?: DataYandexTrinoCatalogIcebergMetastore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogIcebergMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogIcebergMetastore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogIcebergMetastore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface DataYandexTrinoCatalogIceberg {
}

export function dataYandexTrinoCatalogIcebergToTerraform(struct?: DataYandexTrinoCatalogIceberg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogIcebergToHclTerraform(struct?: DataYandexTrinoCatalogIceberg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogIcebergOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogIceberg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogIceberg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // file_system - computed: true, optional: false, required: false
  private _fileSystem = new DataYandexTrinoCatalogIcebergFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }

  // metastore - computed: true, optional: false, required: false
  private _metastore = new DataYandexTrinoCatalogIcebergMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
}
export interface DataYandexTrinoCatalogMysqlConnectionManager {
}

export function dataYandexTrinoCatalogMysqlConnectionManagerToTerraform(struct?: DataYandexTrinoCatalogMysqlConnectionManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogMysqlConnectionManagerToHclTerraform(struct?: DataYandexTrinoCatalogMysqlConnectionManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogMysqlConnectionManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogMysqlConnectionManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogMysqlConnectionManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_properties - computed: true, optional: false, required: false
  private _connectionProperties = new cdktf.StringMap(this, "connection_properties");
  public get connectionProperties() {
    return this._connectionProperties;
  }
}
export interface DataYandexTrinoCatalogMysqlOnPremise {
}

export function dataYandexTrinoCatalogMysqlOnPremiseToTerraform(struct?: DataYandexTrinoCatalogMysqlOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogMysqlOnPremiseToHclTerraform(struct?: DataYandexTrinoCatalogMysqlOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogMysqlOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogMysqlOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogMysqlOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}
export interface DataYandexTrinoCatalogMysql {
}

export function dataYandexTrinoCatalogMysqlToTerraform(struct?: DataYandexTrinoCatalogMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogMysqlToHclTerraform(struct?: DataYandexTrinoCatalogMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // connection_manager - computed: true, optional: false, required: false
  private _connectionManager = new DataYandexTrinoCatalogMysqlConnectionManagerOutputReference(this, "connection_manager");
  public get connectionManager() {
    return this._connectionManager;
  }

  // on_premise - computed: true, optional: false, required: false
  private _onPremise = new DataYandexTrinoCatalogMysqlOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
}
export interface DataYandexTrinoCatalogOracleOnPremise {
}

export function dataYandexTrinoCatalogOracleOnPremiseToTerraform(struct?: DataYandexTrinoCatalogOracleOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogOracleOnPremiseToHclTerraform(struct?: DataYandexTrinoCatalogOracleOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogOracleOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogOracleOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogOracleOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}
export interface DataYandexTrinoCatalogOracle {
}

export function dataYandexTrinoCatalogOracleToTerraform(struct?: DataYandexTrinoCatalogOracle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogOracleToHclTerraform(struct?: DataYandexTrinoCatalogOracle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogOracleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogOracle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogOracle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // on_premise - computed: true, optional: false, required: false
  private _onPremise = new DataYandexTrinoCatalogOracleOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
}
export interface DataYandexTrinoCatalogPostgresqlConnectionManager {
}

export function dataYandexTrinoCatalogPostgresqlConnectionManagerToTerraform(struct?: DataYandexTrinoCatalogPostgresqlConnectionManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogPostgresqlConnectionManagerToHclTerraform(struct?: DataYandexTrinoCatalogPostgresqlConnectionManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogPostgresqlConnectionManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogPostgresqlConnectionManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogPostgresqlConnectionManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_properties - computed: true, optional: false, required: false
  private _connectionProperties = new cdktf.StringMap(this, "connection_properties");
  public get connectionProperties() {
    return this._connectionProperties;
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }
}
export interface DataYandexTrinoCatalogPostgresqlOnPremise {
}

export function dataYandexTrinoCatalogPostgresqlOnPremiseToTerraform(struct?: DataYandexTrinoCatalogPostgresqlOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogPostgresqlOnPremiseToHclTerraform(struct?: DataYandexTrinoCatalogPostgresqlOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogPostgresqlOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogPostgresqlOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogPostgresqlOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}
export interface DataYandexTrinoCatalogPostgresql {
}

export function dataYandexTrinoCatalogPostgresqlToTerraform(struct?: DataYandexTrinoCatalogPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogPostgresqlToHclTerraform(struct?: DataYandexTrinoCatalogPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // connection_manager - computed: true, optional: false, required: false
  private _connectionManager = new DataYandexTrinoCatalogPostgresqlConnectionManagerOutputReference(this, "connection_manager");
  public get connectionManager() {
    return this._connectionManager;
  }

  // on_premise - computed: true, optional: false, required: false
  private _onPremise = new DataYandexTrinoCatalogPostgresqlOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
}
export interface DataYandexTrinoCatalogSqlserverOnPremise {
}

export function dataYandexTrinoCatalogSqlserverOnPremiseToTerraform(struct?: DataYandexTrinoCatalogSqlserverOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogSqlserverOnPremiseToHclTerraform(struct?: DataYandexTrinoCatalogSqlserverOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogSqlserverOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogSqlserverOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogSqlserverOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_url - computed: true, optional: false, required: false
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}
export interface DataYandexTrinoCatalogSqlserver {
}

export function dataYandexTrinoCatalogSqlserverToTerraform(struct?: DataYandexTrinoCatalogSqlserver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogSqlserverToHclTerraform(struct?: DataYandexTrinoCatalogSqlserver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogSqlserverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogSqlserver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogSqlserver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // on_premise - computed: true, optional: false, required: false
  private _onPremise = new DataYandexTrinoCatalogSqlserverOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
}
export interface DataYandexTrinoCatalogTpcds {
}

export function dataYandexTrinoCatalogTpcdsToTerraform(struct?: DataYandexTrinoCatalogTpcds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogTpcdsToHclTerraform(struct?: DataYandexTrinoCatalogTpcds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogTpcdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogTpcds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogTpcds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }
}
export interface DataYandexTrinoCatalogTpch {
}

export function dataYandexTrinoCatalogTpchToTerraform(struct?: DataYandexTrinoCatalogTpch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexTrinoCatalogTpchToHclTerraform(struct?: DataYandexTrinoCatalogTpch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexTrinoCatalogTpchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogTpch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogTpch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }
}
export interface DataYandexTrinoCatalogTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/trino_catalog#read DataYandexTrinoCatalog#read}
  */
  readonly read?: string;
}

export function dataYandexTrinoCatalogTimeoutsToTerraform(struct?: DataYandexTrinoCatalogTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataYandexTrinoCatalogTimeoutsToHclTerraform(struct?: DataYandexTrinoCatalogTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataYandexTrinoCatalogTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexTrinoCatalogTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexTrinoCatalogTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/trino_catalog yandex_trino_catalog}
*/
export class DataYandexTrinoCatalog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_trino_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexTrinoCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexTrinoCatalog to import
  * @param importFromId The id of the existing DataYandexTrinoCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/trino_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexTrinoCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_trino_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/data-sources/trino_catalog yandex_trino_catalog} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexTrinoCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexTrinoCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_trino_catalog',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
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
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clickhouse - computed: true, optional: false, required: false
  private _clickhouse = new DataYandexTrinoCatalogClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }

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

  // delta_lake - computed: true, optional: false, required: false
  private _deltaLake = new DataYandexTrinoCatalogDeltaLakeOutputReference(this, "delta_lake");
  public get deltaLake() {
    return this._deltaLake;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hive - computed: true, optional: false, required: false
  private _hive = new DataYandexTrinoCatalogHiveOutputReference(this, "hive");
  public get hive() {
    return this._hive;
  }

  // hudi - computed: true, optional: false, required: false
  private _hudi = new DataYandexTrinoCatalogHudiOutputReference(this, "hudi");
  public get hudi() {
    return this._hudi;
  }

  // iceberg - computed: true, optional: false, required: false
  private _iceberg = new DataYandexTrinoCatalogIcebergOutputReference(this, "iceberg");
  public get iceberg() {
    return this._iceberg;
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // mysql - computed: true, optional: false, required: false
  private _mysql = new DataYandexTrinoCatalogMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
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

  // oracle - computed: true, optional: false, required: false
  private _oracle = new DataYandexTrinoCatalogOracleOutputReference(this, "oracle");
  public get oracle() {
    return this._oracle;
  }

  // postgresql - computed: true, optional: false, required: false
  private _postgresql = new DataYandexTrinoCatalogPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }

  // sqlserver - computed: true, optional: false, required: false
  private _sqlserver = new DataYandexTrinoCatalogSqlserverOutputReference(this, "sqlserver");
  public get sqlserver() {
    return this._sqlserver;
  }

  // tpcds - computed: true, optional: false, required: false
  private _tpcds = new DataYandexTrinoCatalogTpcdsOutputReference(this, "tpcds");
  public get tpcds() {
    return this._tpcds;
  }

  // tpch - computed: true, optional: false, required: false
  private _tpch = new DataYandexTrinoCatalogTpchOutputReference(this, "tpch");
  public get tpch() {
    return this._tpch;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataYandexTrinoCatalogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexTrinoCatalogTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataYandexTrinoCatalogTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataYandexTrinoCatalogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexTrinoCatalogTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
