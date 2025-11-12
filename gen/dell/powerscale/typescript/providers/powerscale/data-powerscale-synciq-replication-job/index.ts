// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_replication_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleSynciqReplicationJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_replication_job#filter DataPowerscaleSynciqReplicationJob#filter}
  */
  readonly filter?: DataPowerscaleSynciqReplicationJobFilter;
}
export interface DataPowerscaleSynciqReplicationJobSynciqJobsPhases {
}

export function dataPowerscaleSynciqReplicationJobSynciqJobsPhasesToTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPhases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqReplicationJobSynciqJobsPhasesToHclTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPhases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsPhasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSynciqReplicationJobSynciqJobsPhases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqReplicationJobSynciqJobsPhases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsPhasesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSynciqReplicationJobSynciqJobsPhasesOutputReference {
    return new DataPowerscaleSynciqReplicationJobSynciqJobsPhasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteria {
}

export function dataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteriaToTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteriaToHclTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_exists - computed: true, optional: false, required: false
  public get attributeExists() {
    return this.getBooleanAttribute('attribute_exists');
  }

  // case_sensitive - computed: true, optional: false, required: false
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // whole_word - computed: true, optional: false, required: false
  public get wholeWord() {
    return this.getBooleanAttribute('whole_word');
  }
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteriaOutputReference {
    return new DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteria {
}

export function dataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaToTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaToHclTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_criteria - computed: true, optional: false, required: false
  private _andCriteria = new DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaAndCriteriaList(this, "and_criteria", false);
  public get andCriteria() {
    return this._andCriteria;
  }
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaOutputReference {
    return new DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPattern {
}

export function dataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternToTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternToHclTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // or_criteria - computed: true, optional: false, required: false
  private _orCriteria = new DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOrCriteriaList(this, "or_criteria", false);
  public get orCriteria() {
    return this._orCriteria;
  }
}
export interface DataPowerscaleSynciqReplicationJobSynciqJobsPolicy {
}

export function dataPowerscaleSynciqReplicationJobSynciqJobsPolicyToTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqReplicationJobSynciqJobsPolicyToHclTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSynciqReplicationJobSynciqJobsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqReplicationJobSynciqJobsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // file_matching_pattern - computed: true, optional: false, required: false
  private _fileMatchingPattern = new DataPowerscaleSynciqReplicationJobSynciqJobsPolicyFileMatchingPatternOutputReference(this, "file_matching_pattern");
  public get fileMatchingPattern() {
    return this._fileMatchingPattern;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_exclude_directories - computed: true, optional: false, required: false
  public get sourceExcludeDirectories() {
    return this.getListAttribute('source_exclude_directories');
  }

  // source_include_directories - computed: true, optional: false, required: false
  public get sourceIncludeDirectories() {
    return this.getListAttribute('source_include_directories');
  }

  // source_root_path - computed: true, optional: false, required: false
  public get sourceRootPath() {
    return this.getStringAttribute('source_root_path');
  }

  // target_host - computed: true, optional: false, required: false
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }

  // target_path - computed: true, optional: false, required: false
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }
}
export interface DataPowerscaleSynciqReplicationJobSynciqJobsServiceReport {
}

export function dataPowerscaleSynciqReplicationJobSynciqJobsServiceReportToTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsServiceReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqReplicationJobSynciqJobsServiceReportToHclTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsServiceReport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsServiceReportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSynciqReplicationJobSynciqJobsServiceReport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqReplicationJobSynciqJobsServiceReport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // error_msg - computed: true, optional: false, required: false
  public get errorMsg() {
    return this.getListAttribute('error_msg');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getListAttribute('filter');
  }

  // handlers_failed - computed: true, optional: false, required: false
  public get handlersFailed() {
    return this.getNumberAttribute('handlers_failed');
  }

  // handlers_skipped - computed: true, optional: false, required: false
  public get handlersSkipped() {
    return this.getNumberAttribute('handlers_skipped');
  }

  // handlers_transferred - computed: true, optional: false, required: false
  public get handlersTransferred() {
    return this.getNumberAttribute('handlers_transferred');
  }

  // records_failed - computed: true, optional: false, required: false
  public get recordsFailed() {
    return this.getNumberAttribute('records_failed');
  }

  // records_skipped - computed: true, optional: false, required: false
  public get recordsSkipped() {
    return this.getNumberAttribute('records_skipped');
  }

  // records_transferred - computed: true, optional: false, required: false
  public get recordsTransferred() {
    return this.getNumberAttribute('records_transferred');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsServiceReportList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSynciqReplicationJobSynciqJobsServiceReportOutputReference {
    return new DataPowerscaleSynciqReplicationJobSynciqJobsServiceReportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSynciqReplicationJobSynciqJobsWorkers {
}

export function dataPowerscaleSynciqReplicationJobSynciqJobsWorkersToTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqReplicationJobSynciqJobsWorkersToHclTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobsWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsWorkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSynciqReplicationJobSynciqJobsWorkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqReplicationJobSynciqJobsWorkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connected - computed: true, optional: false, required: false
  public get connected() {
    return this.getBooleanAttribute('connected');
  }

  // last_split - computed: true, optional: false, required: false
  public get lastSplit() {
    return this.getNumberAttribute('last_split');
  }

  // last_work - computed: true, optional: false, required: false
  public get lastWork() {
    return this.getNumberAttribute('last_work');
  }

  // lin - computed: true, optional: false, required: false
  public get lin() {
    return this.getNumberAttribute('lin');
  }

  // lnn - computed: true, optional: false, required: false
  public get lnn() {
    return this.getNumberAttribute('lnn');
  }

  // process_id - computed: true, optional: false, required: false
  public get processId() {
    return this.getNumberAttribute('process_id');
  }

  // source_host - computed: true, optional: false, required: false
  public get sourceHost() {
    return this.getStringAttribute('source_host');
  }

  // target_host - computed: true, optional: false, required: false
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }

  // worker_id - computed: true, optional: false, required: false
  public get workerId() {
    return this.getNumberAttribute('worker_id');
  }
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsWorkersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSynciqReplicationJobSynciqJobsWorkersOutputReference {
    return new DataPowerscaleSynciqReplicationJobSynciqJobsWorkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSynciqReplicationJobSynciqJobs {
}

export function dataPowerscaleSynciqReplicationJobSynciqJobsToTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqReplicationJobSynciqJobsToHclTerraform(struct?: DataPowerscaleSynciqReplicationJobSynciqJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSynciqReplicationJobSynciqJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqReplicationJobSynciqJobs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // ads_streams_replicated - computed: true, optional: false, required: false
  public get adsStreamsReplicated() {
    return this.getNumberAttribute('ads_streams_replicated');
  }

  // block_specs_replicated - computed: true, optional: false, required: false
  public get blockSpecsReplicated() {
    return this.getNumberAttribute('block_specs_replicated');
  }

  // bytes_recoverable - computed: true, optional: false, required: false
  public get bytesRecoverable() {
    return this.getNumberAttribute('bytes_recoverable');
  }

  // bytes_transferred - computed: true, optional: false, required: false
  public get bytesTransferred() {
    return this.getNumberAttribute('bytes_transferred');
  }

  // char_specs_replicated - computed: true, optional: false, required: false
  public get charSpecsReplicated() {
    return this.getNumberAttribute('char_specs_replicated');
  }

  // committed_files - computed: true, optional: false, required: false
  public get committedFiles() {
    return this.getNumberAttribute('committed_files');
  }

  // corrected_lins - computed: true, optional: false, required: false
  public get correctedLins() {
    return this.getNumberAttribute('corrected_lins');
  }

  // dead_node - computed: true, optional: false, required: false
  public get deadNode() {
    return this.getBooleanAttribute('dead_node');
  }

  // directories_replicated - computed: true, optional: false, required: false
  public get directoriesReplicated() {
    return this.getNumberAttribute('directories_replicated');
  }

  // dirs_changed - computed: true, optional: false, required: false
  public get dirsChanged() {
    return this.getNumberAttribute('dirs_changed');
  }

  // dirs_deleted - computed: true, optional: false, required: false
  public get dirsDeleted() {
    return this.getNumberAttribute('dirs_deleted');
  }

  // dirs_moved - computed: true, optional: false, required: false
  public get dirsMoved() {
    return this.getNumberAttribute('dirs_moved');
  }

  // dirs_new - computed: true, optional: false, required: false
  public get dirsNew() {
    return this.getNumberAttribute('dirs_new');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // error_checksum_files_skipped - computed: true, optional: false, required: false
  public get errorChecksumFilesSkipped() {
    return this.getNumberAttribute('error_checksum_files_skipped');
  }

  // error_io_files_skipped - computed: true, optional: false, required: false
  public get errorIoFilesSkipped() {
    return this.getNumberAttribute('error_io_files_skipped');
  }

  // error_net_files_skipped - computed: true, optional: false, required: false
  public get errorNetFilesSkipped() {
    return this.getNumberAttribute('error_net_files_skipped');
  }

  // errors - computed: true, optional: false, required: false
  public get errors() {
    return this.getListAttribute('errors');
  }

  // failed_chunks - computed: true, optional: false, required: false
  public get failedChunks() {
    return this.getNumberAttribute('failed_chunks');
  }

  // fifos_replicated - computed: true, optional: false, required: false
  public get fifosReplicated() {
    return this.getNumberAttribute('fifos_replicated');
  }

  // file_data_bytes - computed: true, optional: false, required: false
  public get fileDataBytes() {
    return this.getNumberAttribute('file_data_bytes');
  }

  // files_changed - computed: true, optional: false, required: false
  public get filesChanged() {
    return this.getNumberAttribute('files_changed');
  }

  // files_linked - computed: true, optional: false, required: false
  public get filesLinked() {
    return this.getNumberAttribute('files_linked');
  }

  // files_new - computed: true, optional: false, required: false
  public get filesNew() {
    return this.getNumberAttribute('files_new');
  }

  // files_selected - computed: true, optional: false, required: false
  public get filesSelected() {
    return this.getNumberAttribute('files_selected');
  }

  // files_transferred - computed: true, optional: false, required: false
  public get filesTransferred() {
    return this.getNumberAttribute('files_transferred');
  }

  // files_unlinked - computed: true, optional: false, required: false
  public get filesUnlinked() {
    return this.getNumberAttribute('files_unlinked');
  }

  // files_with_ads_replicated - computed: true, optional: false, required: false
  public get filesWithAdsReplicated() {
    return this.getNumberAttribute('files_with_ads_replicated');
  }

  // flipped_lins - computed: true, optional: false, required: false
  public get flippedLins() {
    return this.getNumberAttribute('flipped_lins');
  }

  // hard_links_replicated - computed: true, optional: false, required: false
  public get hardLinksReplicated() {
    return this.getNumberAttribute('hard_links_replicated');
  }

  // hash_exceptions_fixed - computed: true, optional: false, required: false
  public get hashExceptionsFixed() {
    return this.getNumberAttribute('hash_exceptions_fixed');
  }

  // hash_exceptions_found - computed: true, optional: false, required: false
  public get hashExceptionsFound() {
    return this.getNumberAttribute('hash_exceptions_found');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getNumberAttribute('job_id');
  }

  // lins_total - computed: true, optional: false, required: false
  public get linsTotal() {
    return this.getNumberAttribute('lins_total');
  }

  // network_bytes_to_source - computed: true, optional: false, required: false
  public get networkBytesToSource() {
    return this.getNumberAttribute('network_bytes_to_source');
  }

  // network_bytes_to_target - computed: true, optional: false, required: false
  public get networkBytesToTarget() {
    return this.getNumberAttribute('network_bytes_to_target');
  }

  // new_files_replicated - computed: true, optional: false, required: false
  public get newFilesReplicated() {
    return this.getNumberAttribute('new_files_replicated');
  }

  // num_retransmitted_files - computed: true, optional: false, required: false
  public get numRetransmittedFiles() {
    return this.getNumberAttribute('num_retransmitted_files');
  }

  // phases - computed: true, optional: false, required: false
  private _phases = new DataPowerscaleSynciqReplicationJobSynciqJobsPhasesList(this, "phases", false);
  public get phases() {
    return this._phases;
  }

  // policy - computed: true, optional: false, required: false
  private _policy = new DataPowerscaleSynciqReplicationJobSynciqJobsPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }

  // policy_action - computed: true, optional: false, required: false
  public get policyAction() {
    return this.getStringAttribute('policy_action');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // quotas_deleted - computed: true, optional: false, required: false
  public get quotasDeleted() {
    return this.getNumberAttribute('quotas_deleted');
  }

  // regular_files_replicated - computed: true, optional: false, required: false
  public get regularFilesReplicated() {
    return this.getNumberAttribute('regular_files_replicated');
  }

  // resynced_lins - computed: true, optional: false, required: false
  public get resyncedLins() {
    return this.getNumberAttribute('resynced_lins');
  }

  // retransmitted_files - computed: true, optional: false, required: false
  public get retransmittedFiles() {
    return this.getListAttribute('retransmitted_files');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getNumberAttribute('retry');
  }

  // running_chunks - computed: true, optional: false, required: false
  public get runningChunks() {
    return this.getNumberAttribute('running_chunks');
  }

  // service_report - computed: true, optional: false, required: false
  private _serviceReport = new DataPowerscaleSynciqReplicationJobSynciqJobsServiceReportList(this, "service_report", false);
  public get serviceReport() {
    return this._serviceReport;
  }

  // sockets_replicated - computed: true, optional: false, required: false
  public get socketsReplicated() {
    return this.getNumberAttribute('sockets_replicated');
  }

  // source_bytes_recovered - computed: true, optional: false, required: false
  public get sourceBytesRecovered() {
    return this.getNumberAttribute('source_bytes_recovered');
  }

  // source_directories_created - computed: true, optional: false, required: false
  public get sourceDirectoriesCreated() {
    return this.getNumberAttribute('source_directories_created');
  }

  // source_directories_deleted - computed: true, optional: false, required: false
  public get sourceDirectoriesDeleted() {
    return this.getNumberAttribute('source_directories_deleted');
  }

  // source_directories_linked - computed: true, optional: false, required: false
  public get sourceDirectoriesLinked() {
    return this.getNumberAttribute('source_directories_linked');
  }

  // source_directories_unlinked - computed: true, optional: false, required: false
  public get sourceDirectoriesUnlinked() {
    return this.getNumberAttribute('source_directories_unlinked');
  }

  // source_directories_visited - computed: true, optional: false, required: false
  public get sourceDirectoriesVisited() {
    return this.getNumberAttribute('source_directories_visited');
  }

  // source_files_deleted - computed: true, optional: false, required: false
  public get sourceFilesDeleted() {
    return this.getNumberAttribute('source_files_deleted');
  }

  // source_files_linked - computed: true, optional: false, required: false
  public get sourceFilesLinked() {
    return this.getNumberAttribute('source_files_linked');
  }

  // source_files_unlinked - computed: true, optional: false, required: false
  public get sourceFilesUnlinked() {
    return this.getNumberAttribute('source_files_unlinked');
  }

  // sparse_data_bytes - computed: true, optional: false, required: false
  public get sparseDataBytes() {
    return this.getNumberAttribute('sparse_data_bytes');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // succeeded_chunks - computed: true, optional: false, required: false
  public get succeededChunks() {
    return this.getNumberAttribute('succeeded_chunks');
  }

  // symlinks_replicated - computed: true, optional: false, required: false
  public get symlinksReplicated() {
    return this.getNumberAttribute('symlinks_replicated');
  }

  // sync_type - computed: true, optional: false, required: false
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }

  // target_bytes_recovered - computed: true, optional: false, required: false
  public get targetBytesRecovered() {
    return this.getNumberAttribute('target_bytes_recovered');
  }

  // target_directories_created - computed: true, optional: false, required: false
  public get targetDirectoriesCreated() {
    return this.getNumberAttribute('target_directories_created');
  }

  // target_directories_deleted - computed: true, optional: false, required: false
  public get targetDirectoriesDeleted() {
    return this.getNumberAttribute('target_directories_deleted');
  }

  // target_directories_linked - computed: true, optional: false, required: false
  public get targetDirectoriesLinked() {
    return this.getNumberAttribute('target_directories_linked');
  }

  // target_directories_unlinked - computed: true, optional: false, required: false
  public get targetDirectoriesUnlinked() {
    return this.getNumberAttribute('target_directories_unlinked');
  }

  // target_files_deleted - computed: true, optional: false, required: false
  public get targetFilesDeleted() {
    return this.getNumberAttribute('target_files_deleted');
  }

  // target_files_linked - computed: true, optional: false, required: false
  public get targetFilesLinked() {
    return this.getNumberAttribute('target_files_linked');
  }

  // target_files_unlinked - computed: true, optional: false, required: false
  public get targetFilesUnlinked() {
    return this.getNumberAttribute('target_files_unlinked');
  }

  // target_snapshots - computed: true, optional: false, required: false
  public get targetSnapshots() {
    return this.getListAttribute('target_snapshots');
  }

  // total_chunks - computed: true, optional: false, required: false
  public get totalChunks() {
    return this.getNumberAttribute('total_chunks');
  }

  // total_data_bytes - computed: true, optional: false, required: false
  public get totalDataBytes() {
    return this.getNumberAttribute('total_data_bytes');
  }

  // total_exported_services - computed: true, optional: false, required: false
  public get totalExportedServices() {
    return this.getNumberAttribute('total_exported_services');
  }

  // total_files - computed: true, optional: false, required: false
  public get totalFiles() {
    return this.getNumberAttribute('total_files');
  }

  // total_network_bytes - computed: true, optional: false, required: false
  public get totalNetworkBytes() {
    return this.getNumberAttribute('total_network_bytes');
  }

  // total_phases - computed: true, optional: false, required: false
  public get totalPhases() {
    return this.getNumberAttribute('total_phases');
  }

  // unchanged_data_bytes - computed: true, optional: false, required: false
  public get unchangedDataBytes() {
    return this.getNumberAttribute('unchanged_data_bytes');
  }

  // up_to_date_files_skipped - computed: true, optional: false, required: false
  public get upToDateFilesSkipped() {
    return this.getNumberAttribute('up_to_date_files_skipped');
  }

  // updated_files_replicated - computed: true, optional: false, required: false
  public get updatedFilesReplicated() {
    return this.getNumberAttribute('updated_files_replicated');
  }

  // user_conflict_files_skipped - computed: true, optional: false, required: false
  public get userConflictFilesSkipped() {
    return this.getNumberAttribute('user_conflict_files_skipped');
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return this.getListAttribute('warnings');
  }

  // workers - computed: true, optional: false, required: false
  private _workers = new DataPowerscaleSynciqReplicationJobSynciqJobsWorkersList(this, "workers", false);
  public get workers() {
    return this._workers;
  }

  // worm_committed_file_conflicts - computed: true, optional: false, required: false
  public get wormCommittedFileConflicts() {
    return this.getNumberAttribute('worm_committed_file_conflicts');
  }
}

export class DataPowerscaleSynciqReplicationJobSynciqJobsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSynciqReplicationJobSynciqJobsOutputReference {
    return new DataPowerscaleSynciqReplicationJobSynciqJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSynciqReplicationJobFilter {
  /**
  * The direction of the sort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_replication_job#dir DataPowerscaleSynciqReplicationJob#dir}
  */
  readonly dir?: string;
  /**
  * Return no more than this many results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_replication_job#limit DataPowerscaleSynciqReplicationJob#limit}
  */
  readonly limit?: number;
  /**
  * The field that will be used for sorting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_replication_job#sort DataPowerscaleSynciqReplicationJob#sort}
  */
  readonly sort?: string;
  /**
  * Only list SyncIQ replication jobs matching this state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_replication_job#state DataPowerscaleSynciqReplicationJob#state}
  */
  readonly state?: string;
}

export function dataPowerscaleSynciqReplicationJobFilterToTerraform(struct?: DataPowerscaleSynciqReplicationJobFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    limit: cdktf.numberToTerraform(struct!.limit),
    sort: cdktf.stringToTerraform(struct!.sort),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataPowerscaleSynciqReplicationJobFilterToHclTerraform(struct?: DataPowerscaleSynciqReplicationJobFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sort: {
      value: cdktf.stringToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerscaleSynciqReplicationJobFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSynciqReplicationJobFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqReplicationJobFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dir = undefined;
      this._limit = undefined;
      this._sort = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dir = value.dir;
      this._limit = value.limit;
      this._sort = value.sort;
      this._state = value.state;
    }
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_replication_job powerscale_synciq_replication_job}
*/
export class DataPowerscaleSynciqReplicationJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_synciq_replication_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleSynciqReplicationJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleSynciqReplicationJob to import
  * @param importFromId The id of the existing DataPowerscaleSynciqReplicationJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_replication_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleSynciqReplicationJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_synciq_replication_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_replication_job powerscale_synciq_replication_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleSynciqReplicationJobConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleSynciqReplicationJobConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_synciq_replication_job',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // synciq_jobs - computed: true, optional: false, required: false
  private _synciqJobs = new DataPowerscaleSynciqReplicationJobSynciqJobsList(this, "synciq_jobs", false);
  public get synciqJobs() {
    return this._synciqJobs;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerscaleSynciqReplicationJobFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerscaleSynciqReplicationJobFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerscaleSynciqReplicationJobFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerscaleSynciqReplicationJobFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerscaleSynciqReplicationJobFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
