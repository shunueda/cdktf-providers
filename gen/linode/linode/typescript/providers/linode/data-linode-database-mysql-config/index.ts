// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/database_mysql_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeDatabaseMysqlConfigAConfig extends cdktf.TerraformMetaArguments {
}
export interface DataLinodeDatabaseMysqlConfigBinlogRetentionPeriod {
}

export function dataLinodeDatabaseMysqlConfigBinlogRetentionPeriodToTerraform(struct?: DataLinodeDatabaseMysqlConfigBinlogRetentionPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigBinlogRetentionPeriodToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigBinlogRetentionPeriod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigBinlogRetentionPeriodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabaseMysqlConfigBinlogRetentionPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigBinlogRetentionPeriod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLinodeDatabaseMysqlConfigBinlogRetentionPeriodList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabaseMysqlConfigBinlogRetentionPeriodOutputReference {
    return new DataLinodeDatabaseMysqlConfigBinlogRetentionPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlConnectTimeout {
}

export function dataLinodeDatabaseMysqlConfigMysqlConnectTimeoutToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlConnectTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlConnectTimeoutToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlConnectTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlConnectTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlConnectTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlConnectTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlDefaultTimeZone {
}

export function dataLinodeDatabaseMysqlConfigMysqlDefaultTimeZoneToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlDefaultTimeZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlDefaultTimeZoneToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlDefaultTimeZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlDefaultTimeZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlDefaultTimeZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlDefaultTimeZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // maxLength - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('maxLength');
  }

  // minLength - computed: true, optional: false, required: false
  public get minLength() {
    return this.getNumberAttribute('minLength');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlGroupConcatMaxLen {
}

export function dataLinodeDatabaseMysqlConfigMysqlGroupConcatMaxLenToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlGroupConcatMaxLen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlGroupConcatMaxLenToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlGroupConcatMaxLen): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlGroupConcatMaxLenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlGroupConcatMaxLen | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlGroupConcatMaxLen | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInformationSchemaStatsExpiry {
}

export function dataLinodeDatabaseMysqlConfigMysqlInformationSchemaStatsExpiryToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInformationSchemaStatsExpiry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInformationSchemaStatsExpiryToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInformationSchemaStatsExpiry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInformationSchemaStatsExpiryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInformationSchemaStatsExpiry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInformationSchemaStatsExpiry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbChangeBufferMaxSize {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbChangeBufferMaxSizeToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbChangeBufferMaxSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbChangeBufferMaxSizeToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbChangeBufferMaxSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbChangeBufferMaxSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbChangeBufferMaxSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbChangeBufferMaxSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbFlushNeighbors {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbFlushNeighborsToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbFlushNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbFlushNeighborsToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbFlushNeighbors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbFlushNeighborsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbFlushNeighbors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbFlushNeighbors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbFtMinTokenSize {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbFtMinTokenSizeToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbFtMinTokenSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbFtMinTokenSizeToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbFtMinTokenSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbFtMinTokenSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbFtMinTokenSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbFtMinTokenSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbFtServerStopwordTable {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbFtServerStopwordTableToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbFtServerStopwordTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbFtServerStopwordTableToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbFtServerStopwordTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbFtServerStopwordTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbFtServerStopwordTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbFtServerStopwordTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // maxLength - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('maxLength');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getListAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbLockWaitTimeout {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbLockWaitTimeoutToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbLockWaitTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbLockWaitTimeoutToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbLockWaitTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbLockWaitTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbLockWaitTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbLockWaitTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbLogBufferSize {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbLogBufferSizeToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbLogBufferSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbLogBufferSizeToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbLogBufferSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbLogBufferSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbLogBufferSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbLogBufferSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbOnlineAlterLogMaxSize {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbOnlineAlterLogMaxSizeToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbOnlineAlterLogMaxSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbOnlineAlterLogMaxSizeToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbOnlineAlterLogMaxSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbOnlineAlterLogMaxSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbOnlineAlterLogMaxSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbOnlineAlterLogMaxSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbReadIoThreads {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbReadIoThreadsToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbReadIoThreads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbReadIoThreadsToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbReadIoThreads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbReadIoThreadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbReadIoThreads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbReadIoThreads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbRollbackOnTimeout {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbRollbackOnTimeoutToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbRollbackOnTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbRollbackOnTimeoutToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbRollbackOnTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbRollbackOnTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbRollbackOnTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbRollbackOnTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getBooleanAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbThreadConcurrency {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbThreadConcurrencyToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbThreadConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbThreadConcurrencyToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbThreadConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbThreadConcurrencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbThreadConcurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbThreadConcurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInnodbWriteIoThreads {
}

export function dataLinodeDatabaseMysqlConfigMysqlInnodbWriteIoThreadsToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbWriteIoThreads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInnodbWriteIoThreadsToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInnodbWriteIoThreads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInnodbWriteIoThreadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInnodbWriteIoThreads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInnodbWriteIoThreads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInteractiveTimeout {
}

export function dataLinodeDatabaseMysqlConfigMysqlInteractiveTimeoutToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInteractiveTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInteractiveTimeoutToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInteractiveTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInteractiveTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInteractiveTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInteractiveTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlInternalTmpMemStorageEngine {
}

export function dataLinodeDatabaseMysqlConfigMysqlInternalTmpMemStorageEngineToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInternalTmpMemStorageEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlInternalTmpMemStorageEngineToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlInternalTmpMemStorageEngine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlInternalTmpMemStorageEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlInternalTmpMemStorageEngine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlInternalTmpMemStorageEngine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enum - computed: true, optional: false, required: false
  public get enum() {
    return this.getListAttribute('enum');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlMaxAllowedPacket {
}

export function dataLinodeDatabaseMysqlConfigMysqlMaxAllowedPacketToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlMaxAllowedPacket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlMaxAllowedPacketToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlMaxAllowedPacket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlMaxAllowedPacketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlMaxAllowedPacket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlMaxAllowedPacket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlMaxHeapTableSize {
}

export function dataLinodeDatabaseMysqlConfigMysqlMaxHeapTableSizeToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlMaxHeapTableSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlMaxHeapTableSizeToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlMaxHeapTableSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlMaxHeapTableSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlMaxHeapTableSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlMaxHeapTableSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlNetBufferLength {
}

export function dataLinodeDatabaseMysqlConfigMysqlNetBufferLengthToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlNetBufferLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlNetBufferLengthToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlNetBufferLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlNetBufferLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlNetBufferLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlNetBufferLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlNetReadTimeout {
}

export function dataLinodeDatabaseMysqlConfigMysqlNetReadTimeoutToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlNetReadTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlNetReadTimeoutToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlNetReadTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlNetReadTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlNetReadTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlNetReadTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlNetWriteTimeout {
}

export function dataLinodeDatabaseMysqlConfigMysqlNetWriteTimeoutToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlNetWriteTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlNetWriteTimeoutToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlNetWriteTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlNetWriteTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlNetWriteTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlNetWriteTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlSortBufferSize {
}

export function dataLinodeDatabaseMysqlConfigMysqlSortBufferSizeToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlSortBufferSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlSortBufferSizeToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlSortBufferSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlSortBufferSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlSortBufferSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlSortBufferSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlSqlMode {
}

export function dataLinodeDatabaseMysqlConfigMysqlSqlModeToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlSqlMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlSqlModeToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlSqlMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlSqlModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlSqlMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlSqlMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getStringAttribute('example');
  }

  // maxLength - computed: true, optional: false, required: false
  public get maxLength() {
    return this.getNumberAttribute('maxLength');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlSqlRequirePrimaryKey {
}

export function dataLinodeDatabaseMysqlConfigMysqlSqlRequirePrimaryKeyToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlSqlRequirePrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlSqlRequirePrimaryKeyToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlSqlRequirePrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlSqlRequirePrimaryKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlSqlRequirePrimaryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlSqlRequirePrimaryKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getBooleanAttribute('example');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlTmpTableSize {
}

export function dataLinodeDatabaseMysqlConfigMysqlTmpTableSizeToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlTmpTableSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlTmpTableSizeToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlTmpTableSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlTmpTableSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlTmpTableSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlTmpTableSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysqlWaitTimeout {
}

export function dataLinodeDatabaseMysqlConfigMysqlWaitTimeoutToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlWaitTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlWaitTimeoutToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysqlWaitTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlWaitTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysqlWaitTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysqlWaitTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // example - computed: true, optional: false, required: false
  public get example() {
    return this.getNumberAttribute('example');
  }

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // requires_restart - computed: true, optional: false, required: false
  public get requiresRestart() {
    return this.getBooleanAttribute('requires_restart');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataLinodeDatabaseMysqlConfigMysql {
}

export function dataLinodeDatabaseMysqlConfigMysqlToTerraform(struct?: DataLinodeDatabaseMysqlConfigMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseMysqlConfigMysqlToHclTerraform(struct?: DataLinodeDatabaseMysqlConfigMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseMysqlConfigMysqlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLinodeDatabaseMysqlConfigMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseMysqlConfigMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_timeout - computed: true, optional: false, required: false
  private _connectTimeout = new DataLinodeDatabaseMysqlConfigMysqlConnectTimeoutOutputReference(this, "connect_timeout");
  public get connectTimeout() {
    return this._connectTimeout;
  }

  // default_time_zone - computed: true, optional: false, required: false
  private _defaultTimeZone = new DataLinodeDatabaseMysqlConfigMysqlDefaultTimeZoneOutputReference(this, "default_time_zone");
  public get defaultTimeZone() {
    return this._defaultTimeZone;
  }

  // group_concat_max_len - computed: true, optional: false, required: false
  private _groupConcatMaxLen = new DataLinodeDatabaseMysqlConfigMysqlGroupConcatMaxLenOutputReference(this, "group_concat_max_len");
  public get groupConcatMaxLen() {
    return this._groupConcatMaxLen;
  }

  // information_schema_stats_expiry - computed: true, optional: false, required: false
  private _informationSchemaStatsExpiry = new DataLinodeDatabaseMysqlConfigMysqlInformationSchemaStatsExpiryOutputReference(this, "information_schema_stats_expiry");
  public get informationSchemaStatsExpiry() {
    return this._informationSchemaStatsExpiry;
  }

  // innodb_change_buffer_max_size - computed: true, optional: false, required: false
  private _innodbChangeBufferMaxSize = new DataLinodeDatabaseMysqlConfigMysqlInnodbChangeBufferMaxSizeOutputReference(this, "innodb_change_buffer_max_size");
  public get innodbChangeBufferMaxSize() {
    return this._innodbChangeBufferMaxSize;
  }

  // innodb_flush_neighbors - computed: true, optional: false, required: false
  private _innodbFlushNeighbors = new DataLinodeDatabaseMysqlConfigMysqlInnodbFlushNeighborsOutputReference(this, "innodb_flush_neighbors");
  public get innodbFlushNeighbors() {
    return this._innodbFlushNeighbors;
  }

  // innodb_ft_min_token_size - computed: true, optional: false, required: false
  private _innodbFtMinTokenSize = new DataLinodeDatabaseMysqlConfigMysqlInnodbFtMinTokenSizeOutputReference(this, "innodb_ft_min_token_size");
  public get innodbFtMinTokenSize() {
    return this._innodbFtMinTokenSize;
  }

  // innodb_ft_server_stopword_table - computed: true, optional: false, required: false
  private _innodbFtServerStopwordTable = new DataLinodeDatabaseMysqlConfigMysqlInnodbFtServerStopwordTableOutputReference(this, "innodb_ft_server_stopword_table");
  public get innodbFtServerStopwordTable() {
    return this._innodbFtServerStopwordTable;
  }

  // innodb_lock_wait_timeout - computed: true, optional: false, required: false
  private _innodbLockWaitTimeout = new DataLinodeDatabaseMysqlConfigMysqlInnodbLockWaitTimeoutOutputReference(this, "innodb_lock_wait_timeout");
  public get innodbLockWaitTimeout() {
    return this._innodbLockWaitTimeout;
  }

  // innodb_log_buffer_size - computed: true, optional: false, required: false
  private _innodbLogBufferSize = new DataLinodeDatabaseMysqlConfigMysqlInnodbLogBufferSizeOutputReference(this, "innodb_log_buffer_size");
  public get innodbLogBufferSize() {
    return this._innodbLogBufferSize;
  }

  // innodb_online_alter_log_max_size - computed: true, optional: false, required: false
  private _innodbOnlineAlterLogMaxSize = new DataLinodeDatabaseMysqlConfigMysqlInnodbOnlineAlterLogMaxSizeOutputReference(this, "innodb_online_alter_log_max_size");
  public get innodbOnlineAlterLogMaxSize() {
    return this._innodbOnlineAlterLogMaxSize;
  }

  // innodb_read_io_threads - computed: true, optional: false, required: false
  private _innodbReadIoThreads = new DataLinodeDatabaseMysqlConfigMysqlInnodbReadIoThreadsOutputReference(this, "innodb_read_io_threads");
  public get innodbReadIoThreads() {
    return this._innodbReadIoThreads;
  }

  // innodb_rollback_on_timeout - computed: true, optional: false, required: false
  private _innodbRollbackOnTimeout = new DataLinodeDatabaseMysqlConfigMysqlInnodbRollbackOnTimeoutOutputReference(this, "innodb_rollback_on_timeout");
  public get innodbRollbackOnTimeout() {
    return this._innodbRollbackOnTimeout;
  }

  // innodb_thread_concurrency - computed: true, optional: false, required: false
  private _innodbThreadConcurrency = new DataLinodeDatabaseMysqlConfigMysqlInnodbThreadConcurrencyOutputReference(this, "innodb_thread_concurrency");
  public get innodbThreadConcurrency() {
    return this._innodbThreadConcurrency;
  }

  // innodb_write_io_threads - computed: true, optional: false, required: false
  private _innodbWriteIoThreads = new DataLinodeDatabaseMysqlConfigMysqlInnodbWriteIoThreadsOutputReference(this, "innodb_write_io_threads");
  public get innodbWriteIoThreads() {
    return this._innodbWriteIoThreads;
  }

  // interactive_timeout - computed: true, optional: false, required: false
  private _interactiveTimeout = new DataLinodeDatabaseMysqlConfigMysqlInteractiveTimeoutOutputReference(this, "interactive_timeout");
  public get interactiveTimeout() {
    return this._interactiveTimeout;
  }

  // internal_tmp_mem_storage_engine - computed: true, optional: false, required: false
  private _internalTmpMemStorageEngine = new DataLinodeDatabaseMysqlConfigMysqlInternalTmpMemStorageEngineOutputReference(this, "internal_tmp_mem_storage_engine");
  public get internalTmpMemStorageEngine() {
    return this._internalTmpMemStorageEngine;
  }

  // max_allowed_packet - computed: true, optional: false, required: false
  private _maxAllowedPacket = new DataLinodeDatabaseMysqlConfigMysqlMaxAllowedPacketOutputReference(this, "max_allowed_packet");
  public get maxAllowedPacket() {
    return this._maxAllowedPacket;
  }

  // max_heap_table_size - computed: true, optional: false, required: false
  private _maxHeapTableSize = new DataLinodeDatabaseMysqlConfigMysqlMaxHeapTableSizeOutputReference(this, "max_heap_table_size");
  public get maxHeapTableSize() {
    return this._maxHeapTableSize;
  }

  // net_buffer_length - computed: true, optional: false, required: false
  private _netBufferLength = new DataLinodeDatabaseMysqlConfigMysqlNetBufferLengthOutputReference(this, "net_buffer_length");
  public get netBufferLength() {
    return this._netBufferLength;
  }

  // net_read_timeout - computed: true, optional: false, required: false
  private _netReadTimeout = new DataLinodeDatabaseMysqlConfigMysqlNetReadTimeoutOutputReference(this, "net_read_timeout");
  public get netReadTimeout() {
    return this._netReadTimeout;
  }

  // net_write_timeout - computed: true, optional: false, required: false
  private _netWriteTimeout = new DataLinodeDatabaseMysqlConfigMysqlNetWriteTimeoutOutputReference(this, "net_write_timeout");
  public get netWriteTimeout() {
    return this._netWriteTimeout;
  }

  // sort_buffer_size - computed: true, optional: false, required: false
  private _sortBufferSize = new DataLinodeDatabaseMysqlConfigMysqlSortBufferSizeOutputReference(this, "sort_buffer_size");
  public get sortBufferSize() {
    return this._sortBufferSize;
  }

  // sql_mode - computed: true, optional: false, required: false
  private _sqlMode = new DataLinodeDatabaseMysqlConfigMysqlSqlModeOutputReference(this, "sql_mode");
  public get sqlMode() {
    return this._sqlMode;
  }

  // sql_require_primary_key - computed: true, optional: false, required: false
  private _sqlRequirePrimaryKey = new DataLinodeDatabaseMysqlConfigMysqlSqlRequirePrimaryKeyOutputReference(this, "sql_require_primary_key");
  public get sqlRequirePrimaryKey() {
    return this._sqlRequirePrimaryKey;
  }

  // tmp_table_size - computed: true, optional: false, required: false
  private _tmpTableSize = new DataLinodeDatabaseMysqlConfigMysqlTmpTableSizeOutputReference(this, "tmp_table_size");
  public get tmpTableSize() {
    return this._tmpTableSize;
  }

  // wait_timeout - computed: true, optional: false, required: false
  private _waitTimeout = new DataLinodeDatabaseMysqlConfigMysqlWaitTimeoutOutputReference(this, "wait_timeout");
  public get waitTimeout() {
    return this._waitTimeout;
  }
}

export class DataLinodeDatabaseMysqlConfigMysqlList extends cdktf.ComplexList {

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
  public get(index: number): DataLinodeDatabaseMysqlConfigMysqlOutputReference {
    return new DataLinodeDatabaseMysqlConfigMysqlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/database_mysql_config linode_database_mysql_config}
*/
export class DataLinodeDatabaseMysqlConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_mysql_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeDatabaseMysqlConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeDatabaseMysqlConfigA to import
  * @param importFromId The id of the existing DataLinodeDatabaseMysqlConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/database_mysql_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeDatabaseMysqlConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_mysql_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/data-sources/database_mysql_config linode_database_mysql_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeDatabaseMysqlConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinodeDatabaseMysqlConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_database_mysql_config',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // binlog_retention_period - computed: true, optional: false, required: false
  private _binlogRetentionPeriod = new DataLinodeDatabaseMysqlConfigBinlogRetentionPeriodList(this, "binlog_retention_period", false);
  public get binlogRetentionPeriod() {
    return this._binlogRetentionPeriod;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mysql - computed: true, optional: false, required: false
  private _mysql = new DataLinodeDatabaseMysqlConfigMysqlList(this, "mysql", false);
  public get mysql() {
    return this._mysql;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
