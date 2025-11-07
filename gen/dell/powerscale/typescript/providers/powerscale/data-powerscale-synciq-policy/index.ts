// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleSynciqPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_policy#id DataPowerscaleSynciqPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteria {
}

export function dataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteriaToTerraform(struct?: DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteriaToHclTerraform(struct?: DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteria | undefined) {
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

export class DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteriaOutputReference {
    return new DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteria {
}

export function dataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaToTerraform(struct?: DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaToHclTerraform(struct?: DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // and_criteria - computed: true, optional: false, required: false
  private _andCriteria = new DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaAndCriteriaList(this, "and_criteria", false);
  public get andCriteria() {
    return this._andCriteria;
  }
}

export class DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaOutputReference {
    return new DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerscaleSynciqPolicyPoliciesFileMatchingPattern {
}

export function dataPowerscaleSynciqPolicyPoliciesFileMatchingPatternToTerraform(struct?: DataPowerscaleSynciqPolicyPoliciesFileMatchingPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqPolicyPoliciesFileMatchingPatternToHclTerraform(struct?: DataPowerscaleSynciqPolicyPoliciesFileMatchingPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSynciqPolicyPoliciesFileMatchingPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqPolicyPoliciesFileMatchingPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // or_criteria - computed: true, optional: false, required: false
  private _orCriteria = new DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOrCriteriaList(this, "or_criteria", false);
  public get orCriteria() {
    return this._orCriteria;
  }
}
export interface DataPowerscaleSynciqPolicyPoliciesSourceNetwork {
}

export function dataPowerscaleSynciqPolicyPoliciesSourceNetworkToTerraform(struct?: DataPowerscaleSynciqPolicyPoliciesSourceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqPolicyPoliciesSourceNetworkToHclTerraform(struct?: DataPowerscaleSynciqPolicyPoliciesSourceNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqPolicyPoliciesSourceNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSynciqPolicyPoliciesSourceNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqPolicyPoliciesSourceNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pool - computed: true, optional: false, required: false
  public get pool() {
    return this.getStringAttribute('pool');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}
export interface DataPowerscaleSynciqPolicyPolicies {
}

export function dataPowerscaleSynciqPolicyPoliciesToTerraform(struct?: DataPowerscaleSynciqPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSynciqPolicyPoliciesToHclTerraform(struct?: DataPowerscaleSynciqPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSynciqPolicyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerscaleSynciqPolicyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSynciqPolicyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerated_failback - computed: true, optional: false, required: false
  public get acceleratedFailback() {
    return this.getBooleanAttribute('accelerated_failback');
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // allow_copy_fb - computed: true, optional: false, required: false
  public get allowCopyFb() {
    return this.getBooleanAttribute('allow_copy_fb');
  }

  // bandwidth_reservation - computed: true, optional: false, required: false
  public get bandwidthReservation() {
    return this.getNumberAttribute('bandwidth_reservation');
  }

  // changelist - computed: true, optional: false, required: false
  public get changelist() {
    return this.getBooleanAttribute('changelist');
  }

  // check_integrity - computed: true, optional: false, required: false
  public get checkIntegrity() {
    return this.getBooleanAttribute('check_integrity');
  }

  // cloud_deep_copy - computed: true, optional: false, required: false
  public get cloudDeepCopy() {
    return this.getStringAttribute('cloud_deep_copy');
  }

  // conflicted - computed: true, optional: false, required: false
  public get conflicted() {
    return this.getBooleanAttribute('conflicted');
  }

  // database_mirrored - computed: true, optional: false, required: false
  public get databaseMirrored() {
    return this.getBooleanAttribute('database_mirrored');
  }

  // delete_quotas - computed: true, optional: false, required: false
  public get deleteQuotas() {
    return this.getBooleanAttribute('delete_quotas');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disable_file_split - computed: true, optional: false, required: false
  public get disableFileSplit() {
    return this.getBooleanAttribute('disable_file_split');
  }

  // disable_fofb - computed: true, optional: false, required: false
  public get disableFofb() {
    return this.getBooleanAttribute('disable_fofb');
  }

  // disable_quota_tmp_dir - computed: true, optional: false, required: false
  public get disableQuotaTmpDir() {
    return this.getBooleanAttribute('disable_quota_tmp_dir');
  }

  // disable_stf - computed: true, optional: false, required: false
  public get disableStf() {
    return this.getBooleanAttribute('disable_stf');
  }

  // enable_hash_tmpdir - computed: true, optional: false, required: false
  public get enableHashTmpdir() {
    return this.getBooleanAttribute('enable_hash_tmpdir');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encrypted - computed: true, optional: false, required: false
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }

  // encryption_cipher_list - computed: true, optional: false, required: false
  public get encryptionCipherList() {
    return this.getStringAttribute('encryption_cipher_list');
  }

  // expected_dataloss - computed: true, optional: false, required: false
  public get expectedDataloss() {
    return this.getBooleanAttribute('expected_dataloss');
  }

  // file_matching_pattern - computed: true, optional: false, required: false
  private _fileMatchingPattern = new DataPowerscaleSynciqPolicyPoliciesFileMatchingPatternOutputReference(this, "file_matching_pattern");
  public get fileMatchingPattern() {
    return this._fileMatchingPattern;
  }

  // force_interface - computed: true, optional: false, required: false
  public get forceInterface() {
    return this.getBooleanAttribute('force_interface');
  }

  // has_sync_state - computed: true, optional: false, required: false
  public get hasSyncState() {
    return this.getBooleanAttribute('has_sync_state');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_recursive_quota - computed: true, optional: false, required: false
  public get ignoreRecursiveQuota() {
    return this.getBooleanAttribute('ignore_recursive_quota');
  }

  // job_delay - computed: true, optional: false, required: false
  public get jobDelay() {
    return this.getNumberAttribute('job_delay');
  }

  // last_job_state - computed: true, optional: false, required: false
  public get lastJobState() {
    return this.getStringAttribute('last_job_state');
  }

  // last_started - computed: true, optional: false, required: false
  public get lastStarted() {
    return this.getNumberAttribute('last_started');
  }

  // last_success - computed: true, optional: false, required: false
  public get lastSuccess() {
    return this.getNumberAttribute('last_success');
  }

  // linked_service_policies - computed: true, optional: false, required: false
  public get linkedServicePolicies() {
    return this.getListAttribute('linked_service_policies');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // log_removed_files - computed: true, optional: false, required: false
  public get logRemovedFiles() {
    return this.getBooleanAttribute('log_removed_files');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_run - computed: true, optional: false, required: false
  public get nextRun() {
    return this.getNumberAttribute('next_run');
  }

  // ocsp_address - computed: true, optional: false, required: false
  public get ocspAddress() {
    return this.getStringAttribute('ocsp_address');
  }

  // ocsp_issuer_certificate_id - computed: true, optional: false, required: false
  public get ocspIssuerCertificateId() {
    return this.getStringAttribute('ocsp_issuer_certificate_id');
  }

  // password_set - computed: true, optional: false, required: false
  public get passwordSet() {
    return this.getBooleanAttribute('password_set');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // report_max_age - computed: true, optional: false, required: false
  public get reportMaxAge() {
    return this.getNumberAttribute('report_max_age');
  }

  // report_max_count - computed: true, optional: false, required: false
  public get reportMaxCount() {
    return this.getNumberAttribute('report_max_count');
  }

  // restrict_target_network - computed: true, optional: false, required: false
  public get restrictTargetNetwork() {
    return this.getBooleanAttribute('restrict_target_network');
  }

  // rpo_alert - computed: true, optional: false, required: false
  public get rpoAlert() {
    return this.getNumberAttribute('rpo_alert');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // service_policy - computed: true, optional: false, required: false
  public get servicePolicy() {
    return this.getBooleanAttribute('service_policy');
  }

  // skip_lookup - computed: true, optional: false, required: false
  public get skipLookup() {
    return this.getBooleanAttribute('skip_lookup');
  }

  // skip_when_source_unmodified - computed: true, optional: false, required: false
  public get skipWhenSourceUnmodified() {
    return this.getBooleanAttribute('skip_when_source_unmodified');
  }

  // snapshot_sync_existing - computed: true, optional: false, required: false
  public get snapshotSyncExisting() {
    return this.getBooleanAttribute('snapshot_sync_existing');
  }

  // snapshot_sync_pattern - computed: true, optional: false, required: false
  public get snapshotSyncPattern() {
    return this.getStringAttribute('snapshot_sync_pattern');
  }

  // source_certificate_id - computed: true, optional: false, required: false
  public get sourceCertificateId() {
    return this.getStringAttribute('source_certificate_id');
  }

  // source_domain_marked - computed: true, optional: false, required: false
  public get sourceDomainMarked() {
    return this.getBooleanAttribute('source_domain_marked');
  }

  // source_exclude_directories - computed: true, optional: false, required: false
  public get sourceExcludeDirectories() {
    return this.getListAttribute('source_exclude_directories');
  }

  // source_include_directories - computed: true, optional: false, required: false
  public get sourceIncludeDirectories() {
    return this.getListAttribute('source_include_directories');
  }

  // source_network - computed: true, optional: false, required: false
  private _sourceNetwork = new DataPowerscaleSynciqPolicyPoliciesSourceNetworkOutputReference(this, "source_network");
  public get sourceNetwork() {
    return this._sourceNetwork;
  }

  // source_root_path - computed: true, optional: false, required: false
  public get sourceRootPath() {
    return this.getStringAttribute('source_root_path');
  }

  // source_snapshot_archive - computed: true, optional: false, required: false
  public get sourceSnapshotArchive() {
    return this.getBooleanAttribute('source_snapshot_archive');
  }

  // source_snapshot_expiration - computed: true, optional: false, required: false
  public get sourceSnapshotExpiration() {
    return this.getNumberAttribute('source_snapshot_expiration');
  }

  // source_snapshot_pattern - computed: true, optional: false, required: false
  public get sourceSnapshotPattern() {
    return this.getStringAttribute('source_snapshot_pattern');
  }

  // sync_existing_snapshot_expiration - computed: true, optional: false, required: false
  public get syncExistingSnapshotExpiration() {
    return this.getBooleanAttribute('sync_existing_snapshot_expiration');
  }

  // sync_existing_target_snapshot_pattern - computed: true, optional: false, required: false
  public get syncExistingTargetSnapshotPattern() {
    return this.getStringAttribute('sync_existing_target_snapshot_pattern');
  }

  // target_certificate_id - computed: true, optional: false, required: false
  public get targetCertificateId() {
    return this.getStringAttribute('target_certificate_id');
  }

  // target_compare_initial_sync - computed: true, optional: false, required: false
  public get targetCompareInitialSync() {
    return this.getBooleanAttribute('target_compare_initial_sync');
  }

  // target_detect_modifications - computed: true, optional: false, required: false
  public get targetDetectModifications() {
    return this.getBooleanAttribute('target_detect_modifications');
  }

  // target_host - computed: true, optional: false, required: false
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }

  // target_path - computed: true, optional: false, required: false
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }

  // target_snapshot_alias - computed: true, optional: false, required: false
  public get targetSnapshotAlias() {
    return this.getStringAttribute('target_snapshot_alias');
  }

  // target_snapshot_archive - computed: true, optional: false, required: false
  public get targetSnapshotArchive() {
    return this.getBooleanAttribute('target_snapshot_archive');
  }

  // target_snapshot_expiration - computed: true, optional: false, required: false
  public get targetSnapshotExpiration() {
    return this.getNumberAttribute('target_snapshot_expiration');
  }

  // target_snapshot_pattern - computed: true, optional: false, required: false
  public get targetSnapshotPattern() {
    return this.getStringAttribute('target_snapshot_pattern');
  }

  // workers_per_node - computed: true, optional: false, required: false
  public get workersPerNode() {
    return this.getNumberAttribute('workers_per_node');
  }
}

export class DataPowerscaleSynciqPolicyPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerscaleSynciqPolicyPoliciesOutputReference {
    return new DataPowerscaleSynciqPolicyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_policy powerscale_synciq_policy}
*/
export class DataPowerscaleSynciqPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_synciq_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleSynciqPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleSynciqPolicy to import
  * @param importFromId The id of the existing DataPowerscaleSynciqPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleSynciqPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_synciq_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/synciq_policy powerscale_synciq_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleSynciqPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleSynciqPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_synciq_policy',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policies - computed: true, optional: false, required: false
  private _policies = new DataPowerscaleSynciqPolicyPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
