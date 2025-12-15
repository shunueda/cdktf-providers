// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbGreenplumClusterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * ID of the folder that the Greenplum® cluster belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#folder_id DataYandexMdbGreenplumClusterV2#folder_id}
  */
  readonly folderId?: string;
  /**
  * ID of the Greenplum® cluster resource to return.
  * 
  *  To get the cluster ID, use a [ClusterService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#id DataYandexMdbGreenplumClusterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Service account that will be used to access a Yandex Cloud resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#service_account_id DataYandexMdbGreenplumClusterV2#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#timeouts DataYandexMdbGreenplumClusterV2#timeouts}
  */
  readonly timeouts?: DataYandexMdbGreenplumClusterV2Timeouts;
}
export interface DataYandexMdbGreenplumClusterV2CloudStorage {
}

export function dataYandexMdbGreenplumClusterV2CloudStorageToTerraform(struct?: DataYandexMdbGreenplumClusterV2CloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2CloudStorageToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2CloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2CloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2CloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2CloudStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyze_timeout - computed: true, optional: false, required: false
  public get analyzeTimeout() {
    return this.getNumberAttribute('analyze_timeout');
  }

  // start - computed: true, optional: false, required: false
  private _start = new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumStartOutputReference(this, "start");
  public get start() {
    return this._start;
  }

  // vacuum_timeout - computed: true, optional: false, required: false
  public get vacuumTimeout() {
    return this.getNumberAttribute('vacuum_timeout');
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // ignore_users - computed: true, optional: false, required: false
  public get ignoreUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_users'));
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransaction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // ignore_users - computed: true, optional: false, required: false
  public get ignoreUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_users'));
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // ignore_users - computed: true, optional: false, required: false
  public get ignoreUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('ignore_users'));
  }

  // max_age - computed: true, optional: false, required: false
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScripts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // idle - computed: true, optional: false, required: false
  private _idle = new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }

  // idle_in_transaction - computed: true, optional: false, required: false
  private _idleInTransaction = new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsIdleInTransactionOutputReference(this, "idle_in_transaction");
  public get idleInTransaction() {
    return this._idleInTransaction;
  }

  // long_running - computed: true, optional: false, required: false
  private _longRunning = new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsLongRunningOutputReference(this, "long_running");
  public get longRunning() {
    return this._longRunning;
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStarts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsOutputReference {
    return new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // starts - computed: true, optional: false, required: false
  private _starts = new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesStartsList(this, "starts", true);
  public get starts() {
    return this._starts;
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivities {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // analyze_and_vacuum - computed: true, optional: false, required: false
  private _analyzeAndVacuum = new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesAnalyzeAndVacuumOutputReference(this, "analyze_and_vacuum");
  public get analyzeAndVacuum() {
    return this._analyzeAndVacuum;
  }

  // query_killer_scripts - computed: true, optional: false, required: false
  private _queryKillerScripts = new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesQueryKillerScriptsOutputReference(this, "query_killer_scripts");
  public get queryKillerScripts() {
    return this._queryKillerScripts;
  }

  // table_sizes - computed: true, optional: false, required: false
  private _tableSizes = new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesTableSizesOutputReference(this, "table_sizes");
  public get tableSizes() {
    return this._tableSizes;
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigGreenplumConfigSet6 {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigGreenplumConfigSet6ToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigGreenplumConfigSet6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigGreenplumConfigSet6ToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigGreenplumConfigSet6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigGreenplumConfigSet6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigGreenplumConfigSet6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigGreenplumConfigSet6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gp_add_column_inherits_table_setting - computed: true, optional: false, required: false
  public get gpAddColumnInheritsTableSetting() {
    return this.getBooleanAttribute('gp_add_column_inherits_table_setting');
  }

  // gp_autostats_mode - computed: true, optional: false, required: false
  public get gpAutostatsMode() {
    return this.getStringAttribute('gp_autostats_mode');
  }

  // gp_autostats_on_change_threshold - computed: true, optional: false, required: false
  public get gpAutostatsOnChangeThreshold() {
    return this.getNumberAttribute('gp_autostats_on_change_threshold');
  }

  // gp_cached_segworkers_threshold - computed: true, optional: false, required: false
  public get gpCachedSegworkersThreshold() {
    return this.getNumberAttribute('gp_cached_segworkers_threshold');
  }

  // gp_enable_global_deadlock_detector - computed: true, optional: false, required: false
  public get gpEnableGlobalDeadlockDetector() {
    return this.getBooleanAttribute('gp_enable_global_deadlock_detector');
  }

  // gp_enable_zstd_memory_accounting - computed: true, optional: false, required: false
  public get gpEnableZstdMemoryAccounting() {
    return this.getBooleanAttribute('gp_enable_zstd_memory_accounting');
  }

  // gp_global_deadlock_detector_period - computed: true, optional: false, required: false
  public get gpGlobalDeadlockDetectorPeriod() {
    return this.getNumberAttribute('gp_global_deadlock_detector_period');
  }

  // gp_max_plan_size - computed: true, optional: false, required: false
  public get gpMaxPlanSize() {
    return this.getNumberAttribute('gp_max_plan_size');
  }

  // gp_max_slices - computed: true, optional: false, required: false
  public get gpMaxSlices() {
    return this.getNumberAttribute('gp_max_slices');
  }

  // gp_resource_group_memory_limit - computed: true, optional: false, required: false
  public get gpResourceGroupMemoryLimit() {
    return this.getNumberAttribute('gp_resource_group_memory_limit');
  }

  // gp_vmem_protect_segworker_cache_limit - computed: true, optional: false, required: false
  public get gpVmemProtectSegworkerCacheLimit() {
    return this.getNumberAttribute('gp_vmem_protect_segworker_cache_limit');
  }

  // gp_workfile_compression - computed: true, optional: false, required: false
  public get gpWorkfileCompression() {
    return this.getBooleanAttribute('gp_workfile_compression');
  }

  // gp_workfile_limit_files_per_query - computed: true, optional: false, required: false
  public get gpWorkfileLimitFilesPerQuery() {
    return this.getNumberAttribute('gp_workfile_limit_files_per_query');
  }

  // gp_workfile_limit_per_query - computed: true, optional: false, required: false
  public get gpWorkfileLimitPerQuery() {
    return this.getNumberAttribute('gp_workfile_limit_per_query');
  }

  // gp_workfile_limit_per_segment - computed: true, optional: false, required: false
  public get gpWorkfileLimitPerSegment() {
    return this.getNumberAttribute('gp_workfile_limit_per_segment');
  }

  // idle_in_transaction_session_timeout - computed: true, optional: false, required: false
  public get idleInTransactionSessionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_session_timeout');
  }

  // lock_timeout - computed: true, optional: false, required: false
  public get lockTimeout() {
    return this.getNumberAttribute('lock_timeout');
  }

  // log_statement - computed: true, optional: false, required: false
  public get logStatement() {
    return this.getStringAttribute('log_statement');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_prepared_transactions - computed: true, optional: false, required: false
  public get maxPreparedTransactions() {
    return this.getNumberAttribute('max_prepared_transactions');
  }

  // max_slot_wal_keep_size - computed: true, optional: false, required: false
  public get maxSlotWalKeepSize() {
    return this.getNumberAttribute('max_slot_wal_keep_size');
  }

  // max_statement_mem - computed: true, optional: false, required: false
  public get maxStatementMem() {
    return this.getNumberAttribute('max_statement_mem');
  }

  // runaway_detector_activation_percent - computed: true, optional: false, required: false
  public get runawayDetectorActivationPercent() {
    return this.getNumberAttribute('runaway_detector_activation_percent');
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigPool {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigPoolToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigPoolToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_idle_timeout - computed: true, optional: false, required: false
  public get clientIdleTimeout() {
    return this.getNumberAttribute('client_idle_timeout');
  }

  // idle_in_transaction_timeout - computed: true, optional: false, required: false
  public get idleInTransactionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_timeout');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfigPxfConfig {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigPxfConfigToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigPxfConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigPxfConfigToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfigPxfConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigPxfConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfigPxfConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfigPxfConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // max_threads - computed: true, optional: false, required: false
  public get maxThreads() {
    return this.getNumberAttribute('max_threads');
  }

  // pool_allow_core_thread_timeout - computed: true, optional: false, required: false
  public get poolAllowCoreThreadTimeout() {
    return this.getBooleanAttribute('pool_allow_core_thread_timeout');
  }

  // pool_core_size - computed: true, optional: false, required: false
  public get poolCoreSize() {
    return this.getNumberAttribute('pool_core_size');
  }

  // pool_max_size - computed: true, optional: false, required: false
  public get poolMaxSize() {
    return this.getNumberAttribute('pool_max_size');
  }

  // pool_queue_capacity - computed: true, optional: false, required: false
  public get poolQueueCapacity() {
    return this.getNumberAttribute('pool_queue_capacity');
  }

  // upload_timeout - computed: true, optional: false, required: false
  public get uploadTimeout() {
    return this.getNumberAttribute('upload_timeout');
  }

  // xms - computed: true, optional: false, required: false
  public get xms() {
    return this.getNumberAttribute('xms');
  }

  // xmx - computed: true, optional: false, required: false
  public get xmx() {
    return this.getNumberAttribute('xmx');
  }
}
export interface DataYandexMdbGreenplumClusterV2ClusterConfig {
}

export function dataYandexMdbGreenplumClusterV2ClusterConfigToTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ClusterConfigToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_activities - computed: true, optional: false, required: false
  private _backgroundActivities = new DataYandexMdbGreenplumClusterV2ClusterConfigBackgroundActivitiesOutputReference(this, "background_activities");
  public get backgroundActivities() {
    return this._backgroundActivities;
  }

  // greenplum_config_set_6 - computed: true, optional: false, required: false
  private _greenplumConfigSet6 = new DataYandexMdbGreenplumClusterV2ClusterConfigGreenplumConfigSet6OutputReference(this, "greenplum_config_set_6");
  public get greenplumConfigSet6() {
    return this._greenplumConfigSet6;
  }

  // pool - computed: true, optional: false, required: false
  private _pool = new DataYandexMdbGreenplumClusterV2ClusterConfigPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }

  // pxf_config - computed: true, optional: false, required: false
  private _pxfConfig = new DataYandexMdbGreenplumClusterV2ClusterConfigPxfConfigOutputReference(this, "pxf_config");
  public get pxfConfig() {
    return this._pxfConfig;
  }
}
export interface DataYandexMdbGreenplumClusterV2ConfigAccess {
}

export function dataYandexMdbGreenplumClusterV2ConfigAccessToTerraform(struct?: DataYandexMdbGreenplumClusterV2ConfigAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ConfigAccessToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ConfigAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ConfigAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ConfigAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ConfigAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_lens - computed: true, optional: false, required: false
  public get dataLens() {
    return this.getBooleanAttribute('data_lens');
  }

  // data_transfer - computed: true, optional: false, required: false
  public get dataTransfer() {
    return this.getBooleanAttribute('data_transfer');
  }

  // web_sql - computed: true, optional: false, required: false
  public get webSql() {
    return this.getBooleanAttribute('web_sql');
  }

  // yandex_query - computed: true, optional: false, required: false
  public get yandexQuery() {
    return this.getBooleanAttribute('yandex_query');
  }
}
export interface DataYandexMdbGreenplumClusterV2ConfigA {
}

export function dataYandexMdbGreenplumClusterV2ConfigAToTerraform(struct?: DataYandexMdbGreenplumClusterV2ConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2ConfigAToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2ConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2ConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2ConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2ConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access - computed: true, optional: false, required: false
  private _access = new DataYandexMdbGreenplumClusterV2ConfigAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // backup_retain_period_days - computed: true, optional: false, required: false
  public get backupRetainPeriodDays() {
    return this.getNumberAttribute('backup_retain_period_days');
  }

  // backup_window_start - computed: true, optional: false, required: false
  public get backupWindowStart() {
    return this.getStringAttribute('backup_window_start');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}
export interface DataYandexMdbGreenplumClusterV2Logging {
  /**
  * package: yandex.cloud.mdb.greenplum.v1
  * filename: yandex/cloud/mdb/greenplum/v1/cluster.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#folder_id DataYandexMdbGreenplumClusterV2#folder_id}
  */
  readonly folderId?: string;
}

export function dataYandexMdbGreenplumClusterV2LoggingToTerraform(struct?: DataYandexMdbGreenplumClusterV2Logging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_id: cdktf.stringToTerraform(struct!.folderId),
  }
}


export function dataYandexMdbGreenplumClusterV2LoggingToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2Logging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbGreenplumClusterV2LoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2Logging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2Logging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._folderId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._folderId = value.folderId;
    }
  }

  // command_center_enabled - computed: true, optional: false, required: false
  public get commandCenterEnabled() {
    return this.getBooleanAttribute('command_center_enabled');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // greenplum_enabled - computed: true, optional: false, required: false
  public get greenplumEnabled() {
    return this.getBooleanAttribute('greenplum_enabled');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // pooler_enabled - computed: true, optional: false, required: false
  public get poolerEnabled() {
    return this.getBooleanAttribute('pooler_enabled');
  }
}
export interface DataYandexMdbGreenplumClusterV2MaintenanceWindowAnytime {
}

export function dataYandexMdbGreenplumClusterV2MaintenanceWindowAnytimeToTerraform(struct?: DataYandexMdbGreenplumClusterV2MaintenanceWindowAnytime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2MaintenanceWindowAnytimeToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2MaintenanceWindowAnytime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2MaintenanceWindowAnytimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2MaintenanceWindowAnytime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2MaintenanceWindowAnytime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataYandexMdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow {
}

export function dataYandexMdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowToTerraform(struct?: DataYandexMdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }
}
export interface DataYandexMdbGreenplumClusterV2MaintenanceWindow {
}

export function dataYandexMdbGreenplumClusterV2MaintenanceWindowToTerraform(struct?: DataYandexMdbGreenplumClusterV2MaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2MaintenanceWindowToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2MaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2MaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2MaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2MaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anytime - computed: true, optional: false, required: false
  private _anytime = new DataYandexMdbGreenplumClusterV2MaintenanceWindowAnytimeOutputReference(this, "anytime");
  public get anytime() {
    return this._anytime;
  }

  // weekly_maintenance_window - computed: true, optional: false, required: false
  private _weeklyMaintenanceWindow = new DataYandexMdbGreenplumClusterV2MaintenanceWindowWeeklyMaintenanceWindowOutputReference(this, "weekly_maintenance_window");
  public get weeklyMaintenanceWindow() {
    return this._weeklyMaintenanceWindow;
  }
}
export interface DataYandexMdbGreenplumClusterV2MasterConfigResources {
}

export function dataYandexMdbGreenplumClusterV2MasterConfigResourcesToTerraform(struct?: DataYandexMdbGreenplumClusterV2MasterConfigResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2MasterConfigResourcesToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2MasterConfigResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2MasterConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2MasterConfigResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2MasterConfigResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type_id - computed: true, optional: false, required: false
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }

  // resource_preset_id - computed: true, optional: false, required: false
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
}
export interface DataYandexMdbGreenplumClusterV2MasterConfig {
}

export function dataYandexMdbGreenplumClusterV2MasterConfigToTerraform(struct?: DataYandexMdbGreenplumClusterV2MasterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2MasterConfigToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2MasterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2MasterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2MasterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2MasterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexMdbGreenplumClusterV2MasterConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
}
export interface DataYandexMdbGreenplumClusterV2Monitoring {
}

export function dataYandexMdbGreenplumClusterV2MonitoringToTerraform(struct?: DataYandexMdbGreenplumClusterV2Monitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2MonitoringToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2Monitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2MonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbGreenplumClusterV2Monitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2Monitoring | undefined) {
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

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataYandexMdbGreenplumClusterV2MonitoringList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMdbGreenplumClusterV2MonitoringOutputReference {
    return new DataYandexMdbGreenplumClusterV2MonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMdbGreenplumClusterV2PlannedOperation {
}

export function dataYandexMdbGreenplumClusterV2PlannedOperationToTerraform(struct?: DataYandexMdbGreenplumClusterV2PlannedOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2PlannedOperationToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2PlannedOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2PlannedOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2PlannedOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2PlannedOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delayed_until - computed: true, optional: false, required: false
  public get delayedUntil() {
    return this.getStringAttribute('delayed_until');
  }

  // info - computed: true, optional: false, required: false
  public get info() {
    return this.getStringAttribute('info');
  }
}
export interface DataYandexMdbGreenplumClusterV2SegmentConfigResources {
}

export function dataYandexMdbGreenplumClusterV2SegmentConfigResourcesToTerraform(struct?: DataYandexMdbGreenplumClusterV2SegmentConfigResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2SegmentConfigResourcesToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2SegmentConfigResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2SegmentConfigResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2SegmentConfigResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2SegmentConfigResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type_id - computed: true, optional: false, required: false
  public get diskTypeId() {
    return this.getStringAttribute('disk_type_id');
  }

  // resource_preset_id - computed: true, optional: false, required: false
  public get resourcePresetId() {
    return this.getStringAttribute('resource_preset_id');
  }
}
export interface DataYandexMdbGreenplumClusterV2SegmentConfig {
}

export function dataYandexMdbGreenplumClusterV2SegmentConfigToTerraform(struct?: DataYandexMdbGreenplumClusterV2SegmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMdbGreenplumClusterV2SegmentConfigToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2SegmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMdbGreenplumClusterV2SegmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2SegmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2SegmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataYandexMdbGreenplumClusterV2SegmentConfigResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
}
export interface DataYandexMdbGreenplumClusterV2Timeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#create DataYandexMdbGreenplumClusterV2#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#delete DataYandexMdbGreenplumClusterV2#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#read DataYandexMdbGreenplumClusterV2#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#update DataYandexMdbGreenplumClusterV2#update}
  */
  readonly update?: string;
}

export function dataYandexMdbGreenplumClusterV2TimeoutsToTerraform(struct?: DataYandexMdbGreenplumClusterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataYandexMdbGreenplumClusterV2TimeoutsToHclTerraform(struct?: DataYandexMdbGreenplumClusterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbGreenplumClusterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexMdbGreenplumClusterV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbGreenplumClusterV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2 yandex_mdb_greenplum_cluster_v2}
*/
export class DataYandexMdbGreenplumClusterV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_greenplum_cluster_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMdbGreenplumClusterV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMdbGreenplumClusterV2 to import
  * @param importFromId The id of the existing DataYandexMdbGreenplumClusterV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMdbGreenplumClusterV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_greenplum_cluster_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/mdb_greenplum_cluster_v2 yandex_mdb_greenplum_cluster_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbGreenplumClusterV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbGreenplumClusterV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_greenplum_cluster_v2',
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
    this._folderId = config.folderId;
    this._id = config.id;
    this._serviceAccountId = config.serviceAccountId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_storage - computed: true, optional: false, required: false
  private _cloudStorage = new DataYandexMdbGreenplumClusterV2CloudStorageOutputReference(this, "cloud_storage");
  public get cloudStorage() {
    return this._cloudStorage;
  }

  // cluster_config - computed: true, optional: false, required: false
  private _clusterConfig = new DataYandexMdbGreenplumClusterV2ClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataYandexMdbGreenplumClusterV2ConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
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

  // host_group_ids - computed: true, optional: false, required: false
  public get hostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_group_ids'));
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

  // logging - computed: true, optional: false, required: false
  private _logging = new DataYandexMdbGreenplumClusterV2LoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }

  // maintenance_window - computed: true, optional: false, required: false
  private _maintenanceWindow = new DataYandexMdbGreenplumClusterV2MaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }

  // master_config - computed: true, optional: false, required: false
  private _masterConfig = new DataYandexMdbGreenplumClusterV2MasterConfigOutputReference(this, "master_config");
  public get masterConfig() {
    return this._masterConfig;
  }

  // master_host_count - computed: true, optional: false, required: false
  public get masterHostCount() {
    return this.getNumberAttribute('master_host_count');
  }

  // master_host_group_ids - computed: true, optional: false, required: false
  public get masterHostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('master_host_group_ids'));
  }

  // monitoring - computed: true, optional: false, required: false
  private _monitoring = new DataYandexMdbGreenplumClusterV2MonitoringList(this, "monitoring", true);
  public get monitoring() {
    return this._monitoring;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // planned_operation - computed: true, optional: false, required: false
  private _plannedOperation = new DataYandexMdbGreenplumClusterV2PlannedOperationOutputReference(this, "planned_operation");
  public get plannedOperation() {
    return this._plannedOperation;
  }

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }

  // segment_config - computed: true, optional: false, required: false
  private _segmentConfig = new DataYandexMdbGreenplumClusterV2SegmentConfigOutputReference(this, "segment_config");
  public get segmentConfig() {
    return this._segmentConfig;
  }

  // segment_host_count - computed: true, optional: false, required: false
  public get segmentHostCount() {
    return this.getNumberAttribute('segment_host_count');
  }

  // segment_host_group_ids - computed: true, optional: false, required: false
  public get segmentHostGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('segment_host_group_ids'));
  }

  // segment_in_host - computed: true, optional: false, required: false
  public get segmentInHost() {
    return this.getNumberAttribute('segment_in_host');
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataYandexMdbGreenplumClusterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataYandexMdbGreenplumClusterV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      timeouts: dataYandexMdbGreenplumClusterV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataYandexMdbGreenplumClusterV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexMdbGreenplumClusterV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
