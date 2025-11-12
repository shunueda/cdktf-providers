// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynciqPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, SyncIQ will perform failback configuration tasks during the next job run, rather than waiting to perform those tasks during the failback process. Performing these tasks ahead of time will increase the speed of failback operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#accelerated_failback SynciqPolicy#accelerated_failback}
  */
  readonly acceleratedFailback?: boolean | cdktf.IResolvable;
  /**
  * If 'copy', source files will be copied to the target cluster.  If 'sync', the target directory will be made an image of the source directory:  Files and directories that have been deleted on the source, have been moved within the target directory, or no longer match the selection criteria will be deleted from the target directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#action SynciqPolicy#action}
  */
  readonly action: string;
  /**
  * If set to true, SyncIQ will allow a policy with copy action failback which is not supported by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#allow_copy_fb SynciqPolicy#allow_copy_fb}
  */
  readonly allowCopyFb?: boolean | cdktf.IResolvable;
  /**
  * The desired bandwidth reservation for this policy in kb/s. This feature will not activate unless a SyncIQ bandwidth rule is in effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#bandwidth_reservation SynciqPolicy#bandwidth_reservation}
  */
  readonly bandwidthReservation?: number;
  /**
  * If true, retain previous source snapshot and incremental repstate, both of which are required for changelist creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#changelist SynciqPolicy#changelist}
  */
  readonly changelist?: boolean | cdktf.IResolvable;
  /**
  * If true, the sync target performs cyclic redundancy checks (CRC) on the data as it is received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#check_integrity SynciqPolicy#check_integrity}
  */
  readonly checkIntegrity?: boolean | cdktf.IResolvable;
  /**
  * If set to deny, replicates all CloudPools smartlinks to the target cluster as smartlinks; if the target cluster does not support the smartlinks, the job will fail. If set to force, replicates all smartlinks to the target cluster as regular files. If set to allow, SyncIQ will attempt to replicate smartlinks to the target cluster as smartlinks; if the target cluster does not support the smartlinks, SyncIQ will replicate the smartlinks as regular files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#cloud_deep_copy SynciqPolicy#cloud_deep_copy}
  */
  readonly cloudDeepCopy?: string;
  /**
  * NOTE: This field should not be changed without the help of PowerScale support.  If true, the most recent run of this policy encountered an error and this policy will not start any more scheduled jobs until this field is manually set back to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#conflicted SynciqPolicy#conflicted}
  */
  readonly conflicted?: boolean | cdktf.IResolvable;
  /**
  * If true, forcibly remove quotas on the target after they have been removed on the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#delete_quotas SynciqPolicy#delete_quotas}
  */
  readonly deleteQuotas?: boolean | cdktf.IResolvable;
  /**
  * User-assigned description of this sync policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#description SynciqPolicy#description}
  */
  readonly description?: string;
  /**
  * NOTE: This field should not be changed without the help of PowerScale support.  If true, the 7.2+ file splitting capability will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#disable_file_split SynciqPolicy#disable_file_split}
  */
  readonly disableFileSplit?: boolean | cdktf.IResolvable;
  /**
  * NOTE: This field should not be changed without the help of PowerScale support.  Enable/disable sync failover/failback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#disable_fofb SynciqPolicy#disable_fofb}
  */
  readonly disableFofb?: boolean | cdktf.IResolvable;
  /**
  * If set to true, SyncIQ will not create temporary quota directories to aid in replication to target paths which contain quotas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#disable_quota_tmp_dir SynciqPolicy#disable_quota_tmp_dir}
  */
  readonly disableQuotaTmpDir?: boolean | cdktf.IResolvable;
  /**
  * NOTE: This field should not be changed without the help of PowerScale support.  Enable/disable the 6.5+ STF based data transfer and uses only treewalk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#disable_stf SynciqPolicy#disable_stf}
  */
  readonly disableStf?: boolean | cdktf.IResolvable;
  /**
  * If true, syncs will use temporary working directory subdirectories to reduce lock contention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#enable_hash_tmpdir SynciqPolicy#enable_hash_tmpdir}
  */
  readonly enableHashTmpdir?: boolean | cdktf.IResolvable;
  /**
  * If true, jobs will be automatically run based on this policy, according to its schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#enabled SynciqPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The cipher list (comma separated) being used with encryption. For SyncIQ targets, this list serves as a list of supported ciphers. For SyncIQ sources, the list of ciphers will be attempted to be used in order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#encryption_cipher_list SynciqPolicy#encryption_cipher_list}
  */
  readonly encryptionCipherList?: string;
  /**
  * NOTE: This field should not be changed without the help of PowerScale support.  Continue sending files even with the corrupted filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#expected_dataloss SynciqPolicy#expected_dataloss}
  */
  readonly expectedDataloss?: boolean | cdktf.IResolvable;
  /**
  * A file matching pattern, organized as an OR'ed set of AND'ed file criteria, for example ((a AND b) OR (x AND y)) used to define a set of files with specific properties.  Policies of type 'sync' cannot use 'path' or time criteria in their matching patterns, but policies of type 'copy' can use all listed criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#file_matching_pattern SynciqPolicy#file_matching_pattern}
  */
  readonly fileMatchingPattern?: SynciqPolicyFileMatchingPattern;
  /**
  * NOTE: This field should not be changed without the help of PowerScale support.  Determines whether data is sent only through the subnet and pool specified in the "source_network" field. This option can be useful if there are multiple interfaces for the given source subnet.  If you enable this option, the net.inet.ip.choose_ifa_by_ipsrc sysctl should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#force_interface SynciqPolicy#force_interface}
  */
  readonly forceInterface?: boolean | cdktf.IResolvable;
  /**
  * If set to true, SyncIQ will not check the recursive quota in target paths to aid in replication to target paths which contain no quota but target cluster has lots of quotas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#ignore_recursive_quota SynciqPolicy#ignore_recursive_quota}
  */
  readonly ignoreRecursiveQuota?: boolean | cdktf.IResolvable;
  /**
  * If `schedule` is set to `when-source-modified`, the duration to wait after a modification is made before starting a job (default is 0 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#job_delay SynciqPolicy#job_delay}
  */
  readonly jobDelay?: number;
  /**
  * Severity an event must reach before it is logged. Accepted values are `fatal`, `error`, `notice`, `info`, `copy`, `debug`, `trace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#log_level SynciqPolicy#log_level}
  */
  readonly logLevel?: string;
  /**
  * If true, the system will log any files or directories that are deleted due to a sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#log_removed_files SynciqPolicy#log_removed_files}
  */
  readonly logRemovedFiles?: boolean | cdktf.IResolvable;
  /**
  * User-assigned name of this sync policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#name SynciqPolicy#name}
  */
  readonly name: string;
  /**
  * The address of the OCSP responder to which to connect. Set to empty string to disable OCSP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#ocsp_address SynciqPolicy#ocsp_address}
  */
  readonly ocspAddress?: string;
  /**
  * The ID of the certificate authority that issued the certificate whose revocation status is being checked. Set to empty string to disable certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#ocsp_issuer_certificate_id SynciqPolicy#ocsp_issuer_certificate_id}
  */
  readonly ocspIssuerCertificateId?: string;
  /**
  * The password for the target cluster. This field is not readable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#password SynciqPolicy#password}
  */
  readonly password?: string;
  /**
  * Determines the priority level of a policy. Policies with higher priority will have precedence to run over lower priority policies. Valid range is [0, 1]. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#priority SynciqPolicy#priority}
  */
  readonly priority?: number;
  /**
  * Length of time (in seconds) a policy report will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#report_max_age SynciqPolicy#report_max_age}
  */
  readonly reportMaxAge?: number;
  /**
  * Maximum number of policy reports that will be stored on the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#report_max_count SynciqPolicy#report_max_count}
  */
  readonly reportMaxCount?: number;
  /**
  * If you specify true, and you specify a SmartConnect zone in the "target_host" field, replication policies will connect only to nodes in the specified SmartConnect zone.  If you specify false, replication policies are not restricted to specific nodes on the target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#restrict_target_network SynciqPolicy#restrict_target_network}
  */
  readonly restrictTargetNetwork?: boolean | cdktf.IResolvable;
  /**
  * If `schedule` is set to a time/date, an alert is created if the specified RPO for this policy is exceeded. The default value is 0, which will not generate RPO alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#rpo_alert SynciqPolicy#rpo_alert}
  */
  readonly rpoAlert?: number;
  /**
  * The schedule on which new jobs will be run for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#schedule SynciqPolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Skip DNS lookup of target IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#skip_lookup SynciqPolicy#skip_lookup}
  */
  readonly skipLookup?: boolean | cdktf.IResolvable;
  /**
  * If true and `schedule` is set to a time/date, the policy will not run if no changes have been made to the contents of the source directory since the last job successfully completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#skip_when_source_unmodified SynciqPolicy#skip_when_source_unmodified}
  */
  readonly skipWhenSourceUnmodified?: boolean | cdktf.IResolvable;
  /**
  * If true, snapshot-triggered syncs will include snapshots taken before policy creation time (requires --schedule when-snapshot-taken).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#snapshot_sync_existing SynciqPolicy#snapshot_sync_existing}
  */
  readonly snapshotSyncExisting?: boolean | cdktf.IResolvable;
  /**
  * The naming pattern that a snapshot must match to trigger a sync when the schedule is when-snapshot-taken (default is "*").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#snapshot_sync_pattern SynciqPolicy#snapshot_sync_pattern}
  */
  readonly snapshotSyncPattern?: string;
  /**
  * Directories that will be excluded from the sync.  Modifying this field will result in a full synchronization of all data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#source_exclude_directories SynciqPolicy#source_exclude_directories}
  */
  readonly sourceExcludeDirectories?: string[];
  /**
  * Directories that will be included in the sync.  Modifying this field will result in a full synchronization of all data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#source_include_directories SynciqPolicy#source_include_directories}
  */
  readonly sourceIncludeDirectories?: string[];
  /**
  * Restricts replication policies on the local cluster to running on the specified subnet and pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#source_network SynciqPolicy#source_network}
  */
  readonly sourceNetwork?: SynciqPolicySourceNetwork;
  /**
  * The root directory on the source cluster the files will be synced from.  Modifying this field will result in a full synchronization of all data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#source_root_path SynciqPolicy#source_root_path}
  */
  readonly sourceRootPath: string;
  /**
  * If true, archival snapshots of the source data will be taken on the source cluster before a sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#source_snapshot_archive SynciqPolicy#source_snapshot_archive}
  */
  readonly sourceSnapshotArchive?: boolean | cdktf.IResolvable;
  /**
  * The length of time in seconds to keep snapshots on the source cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#source_snapshot_expiration SynciqPolicy#source_snapshot_expiration}
  */
  readonly sourceSnapshotExpiration?: number;
  /**
  * The name pattern for snapshots taken on the source cluster before a sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#source_snapshot_pattern SynciqPolicy#source_snapshot_pattern}
  */
  readonly sourceSnapshotPattern?: string;
  /**
  * If set to true, the expire duration for target archival snapshot is the remaining expire duration of source snapshot, requires --sync-existing-snapshot=true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#sync_existing_snapshot_expiration SynciqPolicy#sync_existing_snapshot_expiration}
  */
  readonly syncExistingSnapshotExpiration?: boolean | cdktf.IResolvable;
  /**
  * The naming pattern for snapshot on the destination cluster when --sync-existing-snapshot is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#sync_existing_target_snapshot_pattern SynciqPolicy#sync_existing_target_snapshot_pattern}
  */
  readonly syncExistingTargetSnapshotPattern?: string;
  /**
  * The ID of the target cluster certificate being used for encryption. Set to empty string to disable target certificate verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#target_certificate_id SynciqPolicy#target_certificate_id}
  */
  readonly targetCertificateId?: string;
  /**
  * If true, the target creates diffs against the original sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#target_compare_initial_sync SynciqPolicy#target_compare_initial_sync}
  */
  readonly targetCompareInitialSync?: boolean | cdktf.IResolvable;
  /**
  * If true, target cluster will detect if files have been changed on the target by legacy tree walk syncs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#target_detect_modifications SynciqPolicy#target_detect_modifications}
  */
  readonly targetDetectModifications?: boolean | cdktf.IResolvable;
  /**
  * Hostname or IP address of sync target cluster.  Modifying the target cluster host can result in the policy being unrunnable if the new target does not match the current target association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#target_host SynciqPolicy#target_host}
  */
  readonly targetHost: string;
  /**
  * Absolute filesystem path on the target cluster for the sync destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#target_path SynciqPolicy#target_path}
  */
  readonly targetPath: string;
  /**
  * The alias of the snapshot taken on the target cluster after the sync completes. Do not use the value `DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#target_snapshot_alias SynciqPolicy#target_snapshot_alias}
  */
  readonly targetSnapshotAlias?: string;
  /**
  * If true, archival snapshots of the target data will be taken on the target cluster after successful sync completions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#target_snapshot_archive SynciqPolicy#target_snapshot_archive}
  */
  readonly targetSnapshotArchive?: boolean | cdktf.IResolvable;
  /**
  * The length of time in seconds to keep snapshots on the target cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#target_snapshot_expiration SynciqPolicy#target_snapshot_expiration}
  */
  readonly targetSnapshotExpiration?: number;
  /**
  * The name pattern for snapshots taken on the target cluster after the sync completes. Do not use the value `@DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#target_snapshot_pattern SynciqPolicy#target_snapshot_pattern}
  */
  readonly targetSnapshotPattern?: string;
  /**
  * The number of worker threads on a node performing a sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#workers_per_node SynciqPolicy#workers_per_node}
  */
  readonly workersPerNode?: number;
}
export interface SynciqPolicyFileMatchingPatternOrCriteriaAndCriteria {
  /**
  * For "custom_attribute" type criteria.  The file will match as long as the attribute named by "field" exists.  Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#attribute_exists SynciqPolicy#attribute_exists}
  */
  readonly attributeExists?: boolean | cdktf.IResolvable;
  /**
  * If true, the value comparison will be case sensitive.  Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#case_sensitive SynciqPolicy#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * The name of the file attribute to match on (only required if this is a custom_attribute type criterion).  Default is an empty string "".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#field SynciqPolicy#field}
  */
  readonly field?: string;
  /**
  * How to compare the specified attribute of each file to the specified value.  Possible values are: `==`, `!=`, `>`, `>=`, `<`, `<=`, `!`.  Default is `==`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#operator SynciqPolicy#operator}
  */
  readonly operator?: string;
  /**
  * The type of this criterion, that is, which file attribute to match on. Accepted values are , `name`, `path`, `accessed_time`, `birth_time`, `changed_time`, `size`, `file_type`, `posix_regex_name`, `user_name`, `user_id`, `group_name`, `group_id`, `no_user`, `no_group`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#type SynciqPolicy#type}
  */
  readonly type?: string;
  /**
  * The value to compare the specified attribute of each file to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#value SynciqPolicy#value}
  */
  readonly value?: string;
  /**
  * If true, the attribute must match the entire word.  Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#whole_word SynciqPolicy#whole_word}
  */
  readonly wholeWord?: boolean | cdktf.IResolvable;
}

export function synciqPolicyFileMatchingPatternOrCriteriaAndCriteriaToTerraform(struct?: SynciqPolicyFileMatchingPatternOrCriteriaAndCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_exists: cdktf.booleanToTerraform(struct!.attributeExists),
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    whole_word: cdktf.booleanToTerraform(struct!.wholeWord),
  }
}


export function synciqPolicyFileMatchingPatternOrCriteriaAndCriteriaToHclTerraform(struct?: SynciqPolicyFileMatchingPatternOrCriteriaAndCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_exists: {
      value: cdktf.booleanToHclTerraform(struct!.attributeExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whole_word: {
      value: cdktf.booleanToHclTerraform(struct!.wholeWord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynciqPolicyFileMatchingPatternOrCriteriaAndCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SynciqPolicyFileMatchingPatternOrCriteriaAndCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeExists = this._attributeExists;
    }
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._wholeWord !== undefined) {
      hasAnyValues = true;
      internalValueResult.wholeWord = this._wholeWord;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynciqPolicyFileMatchingPatternOrCriteriaAndCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeExists = undefined;
      this._caseSensitive = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._value = undefined;
      this._wholeWord = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeExists = value.attributeExists;
      this._caseSensitive = value.caseSensitive;
      this._field = value.field;
      this._operator = value.operator;
      this._type = value.type;
      this._value = value.value;
      this._wholeWord = value.wholeWord;
    }
  }

  // attribute_exists - computed: false, optional: true, required: false
  private _attributeExists?: boolean | cdktf.IResolvable; 
  public get attributeExists() {
    return this.getBooleanAttribute('attribute_exists');
  }
  public set attributeExists(value: boolean | cdktf.IResolvable) {
    this._attributeExists = value;
  }
  public resetAttributeExists() {
    this._attributeExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeExistsInput() {
    return this._attributeExists;
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // whole_word - computed: false, optional: true, required: false
  private _wholeWord?: boolean | cdktf.IResolvable; 
  public get wholeWord() {
    return this.getBooleanAttribute('whole_word');
  }
  public set wholeWord(value: boolean | cdktf.IResolvable) {
    this._wholeWord = value;
  }
  public resetWholeWord() {
    this._wholeWord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wholeWordInput() {
    return this._wholeWord;
  }
}

export class SynciqPolicyFileMatchingPatternOrCriteriaAndCriteriaList extends cdktf.ComplexList {
  public internalValue? : SynciqPolicyFileMatchingPatternOrCriteriaAndCriteria[] | cdktf.IResolvable

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
  public get(index: number): SynciqPolicyFileMatchingPatternOrCriteriaAndCriteriaOutputReference {
    return new SynciqPolicyFileMatchingPatternOrCriteriaAndCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SynciqPolicyFileMatchingPatternOrCriteria {
  /**
  * An array containing individual file criterion objects each describing one criterion.  These are logically AND'ed together to form a set of criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#and_criteria SynciqPolicy#and_criteria}
  */
  readonly andCriteria: SynciqPolicyFileMatchingPatternOrCriteriaAndCriteria[] | cdktf.IResolvable;
}

export function synciqPolicyFileMatchingPatternOrCriteriaToTerraform(struct?: SynciqPolicyFileMatchingPatternOrCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_criteria: cdktf.listMapper(synciqPolicyFileMatchingPatternOrCriteriaAndCriteriaToTerraform, false)(struct!.andCriteria),
  }
}


export function synciqPolicyFileMatchingPatternOrCriteriaToHclTerraform(struct?: SynciqPolicyFileMatchingPatternOrCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    and_criteria: {
      value: cdktf.listMapperHcl(synciqPolicyFileMatchingPatternOrCriteriaAndCriteriaToHclTerraform, false)(struct!.andCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "SynciqPolicyFileMatchingPatternOrCriteriaAndCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynciqPolicyFileMatchingPatternOrCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SynciqPolicyFileMatchingPatternOrCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andCriteria = this._andCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynciqPolicyFileMatchingPatternOrCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._andCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._andCriteria.internalValue = value.andCriteria;
    }
  }

  // and_criteria - computed: false, optional: false, required: true
  private _andCriteria = new SynciqPolicyFileMatchingPatternOrCriteriaAndCriteriaList(this, "and_criteria", false);
  public get andCriteria() {
    return this._andCriteria;
  }
  public putAndCriteria(value: SynciqPolicyFileMatchingPatternOrCriteriaAndCriteria[] | cdktf.IResolvable) {
    this._andCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get andCriteriaInput() {
    return this._andCriteria.internalValue;
  }
}

export class SynciqPolicyFileMatchingPatternOrCriteriaList extends cdktf.ComplexList {
  public internalValue? : SynciqPolicyFileMatchingPatternOrCriteria[] | cdktf.IResolvable

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
  public get(index: number): SynciqPolicyFileMatchingPatternOrCriteriaOutputReference {
    return new SynciqPolicyFileMatchingPatternOrCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SynciqPolicyFileMatchingPattern {
  /**
  * An array containing objects with "and_criteria" properties, each set of and_criteria will be logically OR'ed together to create the full file matching pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#or_criteria SynciqPolicy#or_criteria}
  */
  readonly orCriteria: SynciqPolicyFileMatchingPatternOrCriteria[] | cdktf.IResolvable;
}

export function synciqPolicyFileMatchingPatternToTerraform(struct?: SynciqPolicyFileMatchingPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    or_criteria: cdktf.listMapper(synciqPolicyFileMatchingPatternOrCriteriaToTerraform, false)(struct!.orCriteria),
  }
}


export function synciqPolicyFileMatchingPatternToHclTerraform(struct?: SynciqPolicyFileMatchingPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    or_criteria: {
      value: cdktf.listMapperHcl(synciqPolicyFileMatchingPatternOrCriteriaToHclTerraform, false)(struct!.orCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "SynciqPolicyFileMatchingPatternOrCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynciqPolicyFileMatchingPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SynciqPolicyFileMatchingPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orCriteria = this._orCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynciqPolicyFileMatchingPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orCriteria.internalValue = value.orCriteria;
    }
  }

  // or_criteria - computed: false, optional: false, required: true
  private _orCriteria = new SynciqPolicyFileMatchingPatternOrCriteriaList(this, "or_criteria", false);
  public get orCriteria() {
    return this._orCriteria;
  }
  public putOrCriteria(value: SynciqPolicyFileMatchingPatternOrCriteria[] | cdktf.IResolvable) {
    this._orCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orCriteriaInput() {
    return this._orCriteria.internalValue;
  }
}
export interface SynciqPolicySourceNetwork {
  /**
  * The pool to restrict replication policies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#pool SynciqPolicy#pool}
  */
  readonly pool?: string;
  /**
  * The subnet to restrict replication policies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#subnet SynciqPolicy#subnet}
  */
  readonly subnet?: string;
}

export function synciqPolicySourceNetworkToTerraform(struct?: SynciqPolicySourceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool: cdktf.stringToTerraform(struct!.pool),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function synciqPolicySourceNetworkToHclTerraform(struct?: SynciqPolicySourceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynciqPolicySourceNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SynciqPolicySourceNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynciqPolicySourceNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pool = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pool = value.pool;
      this._subnet = value.subnet;
    }
  }

  // pool - computed: true, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy powerscale_synciq_policy}
*/
export class SynciqPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_synciq_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SynciqPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SynciqPolicy to import
  * @param importFromId The id of the existing SynciqPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SynciqPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_synciq_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/synciq_policy powerscale_synciq_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynciqPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SynciqPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_synciq_policy',
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
    this._acceleratedFailback = config.acceleratedFailback;
    this._action = config.action;
    this._allowCopyFb = config.allowCopyFb;
    this._bandwidthReservation = config.bandwidthReservation;
    this._changelist = config.changelist;
    this._checkIntegrity = config.checkIntegrity;
    this._cloudDeepCopy = config.cloudDeepCopy;
    this._conflicted = config.conflicted;
    this._deleteQuotas = config.deleteQuotas;
    this._description = config.description;
    this._disableFileSplit = config.disableFileSplit;
    this._disableFofb = config.disableFofb;
    this._disableQuotaTmpDir = config.disableQuotaTmpDir;
    this._disableStf = config.disableStf;
    this._enableHashTmpdir = config.enableHashTmpdir;
    this._enabled = config.enabled;
    this._encryptionCipherList = config.encryptionCipherList;
    this._expectedDataloss = config.expectedDataloss;
    this._fileMatchingPattern.internalValue = config.fileMatchingPattern;
    this._forceInterface = config.forceInterface;
    this._ignoreRecursiveQuota = config.ignoreRecursiveQuota;
    this._jobDelay = config.jobDelay;
    this._logLevel = config.logLevel;
    this._logRemovedFiles = config.logRemovedFiles;
    this._name = config.name;
    this._ocspAddress = config.ocspAddress;
    this._ocspIssuerCertificateId = config.ocspIssuerCertificateId;
    this._password = config.password;
    this._priority = config.priority;
    this._reportMaxAge = config.reportMaxAge;
    this._reportMaxCount = config.reportMaxCount;
    this._restrictTargetNetwork = config.restrictTargetNetwork;
    this._rpoAlert = config.rpoAlert;
    this._schedule = config.schedule;
    this._skipLookup = config.skipLookup;
    this._skipWhenSourceUnmodified = config.skipWhenSourceUnmodified;
    this._snapshotSyncExisting = config.snapshotSyncExisting;
    this._snapshotSyncPattern = config.snapshotSyncPattern;
    this._sourceExcludeDirectories = config.sourceExcludeDirectories;
    this._sourceIncludeDirectories = config.sourceIncludeDirectories;
    this._sourceNetwork.internalValue = config.sourceNetwork;
    this._sourceRootPath = config.sourceRootPath;
    this._sourceSnapshotArchive = config.sourceSnapshotArchive;
    this._sourceSnapshotExpiration = config.sourceSnapshotExpiration;
    this._sourceSnapshotPattern = config.sourceSnapshotPattern;
    this._syncExistingSnapshotExpiration = config.syncExistingSnapshotExpiration;
    this._syncExistingTargetSnapshotPattern = config.syncExistingTargetSnapshotPattern;
    this._targetCertificateId = config.targetCertificateId;
    this._targetCompareInitialSync = config.targetCompareInitialSync;
    this._targetDetectModifications = config.targetDetectModifications;
    this._targetHost = config.targetHost;
    this._targetPath = config.targetPath;
    this._targetSnapshotAlias = config.targetSnapshotAlias;
    this._targetSnapshotArchive = config.targetSnapshotArchive;
    this._targetSnapshotExpiration = config.targetSnapshotExpiration;
    this._targetSnapshotPattern = config.targetSnapshotPattern;
    this._workersPerNode = config.workersPerNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated_failback - computed: true, optional: true, required: false
  private _acceleratedFailback?: boolean | cdktf.IResolvable; 
  public get acceleratedFailback() {
    return this.getBooleanAttribute('accelerated_failback');
  }
  public set acceleratedFailback(value: boolean | cdktf.IResolvable) {
    this._acceleratedFailback = value;
  }
  public resetAcceleratedFailback() {
    this._acceleratedFailback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedFailbackInput() {
    return this._acceleratedFailback;
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // allow_copy_fb - computed: true, optional: true, required: false
  private _allowCopyFb?: boolean | cdktf.IResolvable; 
  public get allowCopyFb() {
    return this.getBooleanAttribute('allow_copy_fb');
  }
  public set allowCopyFb(value: boolean | cdktf.IResolvable) {
    this._allowCopyFb = value;
  }
  public resetAllowCopyFb() {
    this._allowCopyFb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCopyFbInput() {
    return this._allowCopyFb;
  }

  // bandwidth_reservation - computed: true, optional: true, required: false
  private _bandwidthReservation?: number; 
  public get bandwidthReservation() {
    return this.getNumberAttribute('bandwidth_reservation');
  }
  public set bandwidthReservation(value: number) {
    this._bandwidthReservation = value;
  }
  public resetBandwidthReservation() {
    this._bandwidthReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthReservationInput() {
    return this._bandwidthReservation;
  }

  // changelist - computed: true, optional: true, required: false
  private _changelist?: boolean | cdktf.IResolvable; 
  public get changelist() {
    return this.getBooleanAttribute('changelist');
  }
  public set changelist(value: boolean | cdktf.IResolvable) {
    this._changelist = value;
  }
  public resetChangelist() {
    this._changelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelistInput() {
    return this._changelist;
  }

  // check_integrity - computed: true, optional: true, required: false
  private _checkIntegrity?: boolean | cdktf.IResolvable; 
  public get checkIntegrity() {
    return this.getBooleanAttribute('check_integrity');
  }
  public set checkIntegrity(value: boolean | cdktf.IResolvable) {
    this._checkIntegrity = value;
  }
  public resetCheckIntegrity() {
    this._checkIntegrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntegrityInput() {
    return this._checkIntegrity;
  }

  // cloud_deep_copy - computed: true, optional: true, required: false
  private _cloudDeepCopy?: string; 
  public get cloudDeepCopy() {
    return this.getStringAttribute('cloud_deep_copy');
  }
  public set cloudDeepCopy(value: string) {
    this._cloudDeepCopy = value;
  }
  public resetCloudDeepCopy() {
    this._cloudDeepCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDeepCopyInput() {
    return this._cloudDeepCopy;
  }

  // conflicted - computed: true, optional: true, required: false
  private _conflicted?: boolean | cdktf.IResolvable; 
  public get conflicted() {
    return this.getBooleanAttribute('conflicted');
  }
  public set conflicted(value: boolean | cdktf.IResolvable) {
    this._conflicted = value;
  }
  public resetConflicted() {
    this._conflicted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictedInput() {
    return this._conflicted;
  }

  // delete_quotas - computed: true, optional: true, required: false
  private _deleteQuotas?: boolean | cdktf.IResolvable; 
  public get deleteQuotas() {
    return this.getBooleanAttribute('delete_quotas');
  }
  public set deleteQuotas(value: boolean | cdktf.IResolvable) {
    this._deleteQuotas = value;
  }
  public resetDeleteQuotas() {
    this._deleteQuotas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteQuotasInput() {
    return this._deleteQuotas;
  }

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

  // disable_file_split - computed: true, optional: true, required: false
  private _disableFileSplit?: boolean | cdktf.IResolvable; 
  public get disableFileSplit() {
    return this.getBooleanAttribute('disable_file_split');
  }
  public set disableFileSplit(value: boolean | cdktf.IResolvable) {
    this._disableFileSplit = value;
  }
  public resetDisableFileSplit() {
    this._disableFileSplit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFileSplitInput() {
    return this._disableFileSplit;
  }

  // disable_fofb - computed: true, optional: true, required: false
  private _disableFofb?: boolean | cdktf.IResolvable; 
  public get disableFofb() {
    return this.getBooleanAttribute('disable_fofb');
  }
  public set disableFofb(value: boolean | cdktf.IResolvable) {
    this._disableFofb = value;
  }
  public resetDisableFofb() {
    this._disableFofb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFofbInput() {
    return this._disableFofb;
  }

  // disable_quota_tmp_dir - computed: true, optional: true, required: false
  private _disableQuotaTmpDir?: boolean | cdktf.IResolvable; 
  public get disableQuotaTmpDir() {
    return this.getBooleanAttribute('disable_quota_tmp_dir');
  }
  public set disableQuotaTmpDir(value: boolean | cdktf.IResolvable) {
    this._disableQuotaTmpDir = value;
  }
  public resetDisableQuotaTmpDir() {
    this._disableQuotaTmpDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableQuotaTmpDirInput() {
    return this._disableQuotaTmpDir;
  }

  // disable_stf - computed: true, optional: true, required: false
  private _disableStf?: boolean | cdktf.IResolvable; 
  public get disableStf() {
    return this.getBooleanAttribute('disable_stf');
  }
  public set disableStf(value: boolean | cdktf.IResolvable) {
    this._disableStf = value;
  }
  public resetDisableStf() {
    this._disableStf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStfInput() {
    return this._disableStf;
  }

  // enable_hash_tmpdir - computed: true, optional: true, required: false
  private _enableHashTmpdir?: boolean | cdktf.IResolvable; 
  public get enableHashTmpdir() {
    return this.getBooleanAttribute('enable_hash_tmpdir');
  }
  public set enableHashTmpdir(value: boolean | cdktf.IResolvable) {
    this._enableHashTmpdir = value;
  }
  public resetEnableHashTmpdir() {
    this._enableHashTmpdir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHashTmpdirInput() {
    return this._enableHashTmpdir;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // encryption_cipher_list - computed: true, optional: true, required: false
  private _encryptionCipherList?: string; 
  public get encryptionCipherList() {
    return this.getStringAttribute('encryption_cipher_list');
  }
  public set encryptionCipherList(value: string) {
    this._encryptionCipherList = value;
  }
  public resetEncryptionCipherList() {
    this._encryptionCipherList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionCipherListInput() {
    return this._encryptionCipherList;
  }

  // expected_dataloss - computed: true, optional: true, required: false
  private _expectedDataloss?: boolean | cdktf.IResolvable; 
  public get expectedDataloss() {
    return this.getBooleanAttribute('expected_dataloss');
  }
  public set expectedDataloss(value: boolean | cdktf.IResolvable) {
    this._expectedDataloss = value;
  }
  public resetExpectedDataloss() {
    this._expectedDataloss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedDatalossInput() {
    return this._expectedDataloss;
  }

  // file_matching_pattern - computed: false, optional: true, required: false
  private _fileMatchingPattern = new SynciqPolicyFileMatchingPatternOutputReference(this, "file_matching_pattern");
  public get fileMatchingPattern() {
    return this._fileMatchingPattern;
  }
  public putFileMatchingPattern(value: SynciqPolicyFileMatchingPattern) {
    this._fileMatchingPattern.internalValue = value;
  }
  public resetFileMatchingPattern() {
    this._fileMatchingPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMatchingPatternInput() {
    return this._fileMatchingPattern.internalValue;
  }

  // force_interface - computed: true, optional: true, required: false
  private _forceInterface?: boolean | cdktf.IResolvable; 
  public get forceInterface() {
    return this.getBooleanAttribute('force_interface');
  }
  public set forceInterface(value: boolean | cdktf.IResolvable) {
    this._forceInterface = value;
  }
  public resetForceInterface() {
    this._forceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInterfaceInput() {
    return this._forceInterface;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_recursive_quota - computed: true, optional: true, required: false
  private _ignoreRecursiveQuota?: boolean | cdktf.IResolvable; 
  public get ignoreRecursiveQuota() {
    return this.getBooleanAttribute('ignore_recursive_quota');
  }
  public set ignoreRecursiveQuota(value: boolean | cdktf.IResolvable) {
    this._ignoreRecursiveQuota = value;
  }
  public resetIgnoreRecursiveQuota() {
    this._ignoreRecursiveQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRecursiveQuotaInput() {
    return this._ignoreRecursiveQuota;
  }

  // job_delay - computed: true, optional: true, required: false
  private _jobDelay?: number; 
  public get jobDelay() {
    return this.getNumberAttribute('job_delay');
  }
  public set jobDelay(value: number) {
    this._jobDelay = value;
  }
  public resetJobDelay() {
    this._jobDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobDelayInput() {
    return this._jobDelay;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // log_removed_files - computed: true, optional: true, required: false
  private _logRemovedFiles?: boolean | cdktf.IResolvable; 
  public get logRemovedFiles() {
    return this.getBooleanAttribute('log_removed_files');
  }
  public set logRemovedFiles(value: boolean | cdktf.IResolvable) {
    this._logRemovedFiles = value;
  }
  public resetLogRemovedFiles() {
    this._logRemovedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRemovedFilesInput() {
    return this._logRemovedFiles;
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

  // ocsp_address - computed: true, optional: true, required: false
  private _ocspAddress?: string; 
  public get ocspAddress() {
    return this.getStringAttribute('ocsp_address');
  }
  public set ocspAddress(value: string) {
    this._ocspAddress = value;
  }
  public resetOcspAddress() {
    this._ocspAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspAddressInput() {
    return this._ocspAddress;
  }

  // ocsp_issuer_certificate_id - computed: true, optional: true, required: false
  private _ocspIssuerCertificateId?: string; 
  public get ocspIssuerCertificateId() {
    return this.getStringAttribute('ocsp_issuer_certificate_id');
  }
  public set ocspIssuerCertificateId(value: string) {
    this._ocspIssuerCertificateId = value;
  }
  public resetOcspIssuerCertificateId() {
    this._ocspIssuerCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspIssuerCertificateIdInput() {
    return this._ocspIssuerCertificateId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // report_max_age - computed: true, optional: true, required: false
  private _reportMaxAge?: number; 
  public get reportMaxAge() {
    return this.getNumberAttribute('report_max_age');
  }
  public set reportMaxAge(value: number) {
    this._reportMaxAge = value;
  }
  public resetReportMaxAge() {
    this._reportMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportMaxAgeInput() {
    return this._reportMaxAge;
  }

  // report_max_count - computed: true, optional: true, required: false
  private _reportMaxCount?: number; 
  public get reportMaxCount() {
    return this.getNumberAttribute('report_max_count');
  }
  public set reportMaxCount(value: number) {
    this._reportMaxCount = value;
  }
  public resetReportMaxCount() {
    this._reportMaxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportMaxCountInput() {
    return this._reportMaxCount;
  }

  // restrict_target_network - computed: true, optional: true, required: false
  private _restrictTargetNetwork?: boolean | cdktf.IResolvable; 
  public get restrictTargetNetwork() {
    return this.getBooleanAttribute('restrict_target_network');
  }
  public set restrictTargetNetwork(value: boolean | cdktf.IResolvable) {
    this._restrictTargetNetwork = value;
  }
  public resetRestrictTargetNetwork() {
    this._restrictTargetNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictTargetNetworkInput() {
    return this._restrictTargetNetwork;
  }

  // rpo_alert - computed: true, optional: true, required: false
  private _rpoAlert?: number; 
  public get rpoAlert() {
    return this.getNumberAttribute('rpo_alert');
  }
  public set rpoAlert(value: number) {
    this._rpoAlert = value;
  }
  public resetRpoAlert() {
    this._rpoAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoAlertInput() {
    return this._rpoAlert;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // skip_lookup - computed: true, optional: true, required: false
  private _skipLookup?: boolean | cdktf.IResolvable; 
  public get skipLookup() {
    return this.getBooleanAttribute('skip_lookup');
  }
  public set skipLookup(value: boolean | cdktf.IResolvable) {
    this._skipLookup = value;
  }
  public resetSkipLookup() {
    this._skipLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLookupInput() {
    return this._skipLookup;
  }

  // skip_when_source_unmodified - computed: true, optional: true, required: false
  private _skipWhenSourceUnmodified?: boolean | cdktf.IResolvable; 
  public get skipWhenSourceUnmodified() {
    return this.getBooleanAttribute('skip_when_source_unmodified');
  }
  public set skipWhenSourceUnmodified(value: boolean | cdktf.IResolvable) {
    this._skipWhenSourceUnmodified = value;
  }
  public resetSkipWhenSourceUnmodified() {
    this._skipWhenSourceUnmodified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWhenSourceUnmodifiedInput() {
    return this._skipWhenSourceUnmodified;
  }

  // snapshot_sync_existing - computed: true, optional: true, required: false
  private _snapshotSyncExisting?: boolean | cdktf.IResolvable; 
  public get snapshotSyncExisting() {
    return this.getBooleanAttribute('snapshot_sync_existing');
  }
  public set snapshotSyncExisting(value: boolean | cdktf.IResolvable) {
    this._snapshotSyncExisting = value;
  }
  public resetSnapshotSyncExisting() {
    this._snapshotSyncExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSyncExistingInput() {
    return this._snapshotSyncExisting;
  }

  // snapshot_sync_pattern - computed: true, optional: true, required: false
  private _snapshotSyncPattern?: string; 
  public get snapshotSyncPattern() {
    return this.getStringAttribute('snapshot_sync_pattern');
  }
  public set snapshotSyncPattern(value: string) {
    this._snapshotSyncPattern = value;
  }
  public resetSnapshotSyncPattern() {
    this._snapshotSyncPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotSyncPatternInput() {
    return this._snapshotSyncPattern;
  }

  // source_exclude_directories - computed: true, optional: true, required: false
  private _sourceExcludeDirectories?: string[]; 
  public get sourceExcludeDirectories() {
    return this.getListAttribute('source_exclude_directories');
  }
  public set sourceExcludeDirectories(value: string[]) {
    this._sourceExcludeDirectories = value;
  }
  public resetSourceExcludeDirectories() {
    this._sourceExcludeDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceExcludeDirectoriesInput() {
    return this._sourceExcludeDirectories;
  }

  // source_include_directories - computed: true, optional: true, required: false
  private _sourceIncludeDirectories?: string[]; 
  public get sourceIncludeDirectories() {
    return this.getListAttribute('source_include_directories');
  }
  public set sourceIncludeDirectories(value: string[]) {
    this._sourceIncludeDirectories = value;
  }
  public resetSourceIncludeDirectories() {
    this._sourceIncludeDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIncludeDirectoriesInput() {
    return this._sourceIncludeDirectories;
  }

  // source_network - computed: true, optional: true, required: false
  private _sourceNetwork = new SynciqPolicySourceNetworkOutputReference(this, "source_network");
  public get sourceNetwork() {
    return this._sourceNetwork;
  }
  public putSourceNetwork(value: SynciqPolicySourceNetwork) {
    this._sourceNetwork.internalValue = value;
  }
  public resetSourceNetwork() {
    this._sourceNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkInput() {
    return this._sourceNetwork.internalValue;
  }

  // source_root_path - computed: false, optional: false, required: true
  private _sourceRootPath?: string; 
  public get sourceRootPath() {
    return this.getStringAttribute('source_root_path');
  }
  public set sourceRootPath(value: string) {
    this._sourceRootPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRootPathInput() {
    return this._sourceRootPath;
  }

  // source_snapshot_archive - computed: true, optional: true, required: false
  private _sourceSnapshotArchive?: boolean | cdktf.IResolvable; 
  public get sourceSnapshotArchive() {
    return this.getBooleanAttribute('source_snapshot_archive');
  }
  public set sourceSnapshotArchive(value: boolean | cdktf.IResolvable) {
    this._sourceSnapshotArchive = value;
  }
  public resetSourceSnapshotArchive() {
    this._sourceSnapshotArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotArchiveInput() {
    return this._sourceSnapshotArchive;
  }

  // source_snapshot_expiration - computed: true, optional: true, required: false
  private _sourceSnapshotExpiration?: number; 
  public get sourceSnapshotExpiration() {
    return this.getNumberAttribute('source_snapshot_expiration');
  }
  public set sourceSnapshotExpiration(value: number) {
    this._sourceSnapshotExpiration = value;
  }
  public resetSourceSnapshotExpiration() {
    this._sourceSnapshotExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotExpirationInput() {
    return this._sourceSnapshotExpiration;
  }

  // source_snapshot_pattern - computed: true, optional: true, required: false
  private _sourceSnapshotPattern?: string; 
  public get sourceSnapshotPattern() {
    return this.getStringAttribute('source_snapshot_pattern');
  }
  public set sourceSnapshotPattern(value: string) {
    this._sourceSnapshotPattern = value;
  }
  public resetSourceSnapshotPattern() {
    this._sourceSnapshotPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotPatternInput() {
    return this._sourceSnapshotPattern;
  }

  // sync_existing_snapshot_expiration - computed: true, optional: true, required: false
  private _syncExistingSnapshotExpiration?: boolean | cdktf.IResolvable; 
  public get syncExistingSnapshotExpiration() {
    return this.getBooleanAttribute('sync_existing_snapshot_expiration');
  }
  public set syncExistingSnapshotExpiration(value: boolean | cdktf.IResolvable) {
    this._syncExistingSnapshotExpiration = value;
  }
  public resetSyncExistingSnapshotExpiration() {
    this._syncExistingSnapshotExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncExistingSnapshotExpirationInput() {
    return this._syncExistingSnapshotExpiration;
  }

  // sync_existing_target_snapshot_pattern - computed: true, optional: true, required: false
  private _syncExistingTargetSnapshotPattern?: string; 
  public get syncExistingTargetSnapshotPattern() {
    return this.getStringAttribute('sync_existing_target_snapshot_pattern');
  }
  public set syncExistingTargetSnapshotPattern(value: string) {
    this._syncExistingTargetSnapshotPattern = value;
  }
  public resetSyncExistingTargetSnapshotPattern() {
    this._syncExistingTargetSnapshotPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncExistingTargetSnapshotPatternInput() {
    return this._syncExistingTargetSnapshotPattern;
  }

  // target_certificate_id - computed: true, optional: true, required: false
  private _targetCertificateId?: string; 
  public get targetCertificateId() {
    return this.getStringAttribute('target_certificate_id');
  }
  public set targetCertificateId(value: string) {
    this._targetCertificateId = value;
  }
  public resetTargetCertificateId() {
    this._targetCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCertificateIdInput() {
    return this._targetCertificateId;
  }

  // target_compare_initial_sync - computed: true, optional: true, required: false
  private _targetCompareInitialSync?: boolean | cdktf.IResolvable; 
  public get targetCompareInitialSync() {
    return this.getBooleanAttribute('target_compare_initial_sync');
  }
  public set targetCompareInitialSync(value: boolean | cdktf.IResolvable) {
    this._targetCompareInitialSync = value;
  }
  public resetTargetCompareInitialSync() {
    this._targetCompareInitialSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCompareInitialSyncInput() {
    return this._targetCompareInitialSync;
  }

  // target_detect_modifications - computed: true, optional: true, required: false
  private _targetDetectModifications?: boolean | cdktf.IResolvable; 
  public get targetDetectModifications() {
    return this.getBooleanAttribute('target_detect_modifications');
  }
  public set targetDetectModifications(value: boolean | cdktf.IResolvable) {
    this._targetDetectModifications = value;
  }
  public resetTargetDetectModifications() {
    this._targetDetectModifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDetectModificationsInput() {
    return this._targetDetectModifications;
  }

  // target_host - computed: false, optional: false, required: true
  private _targetHost?: string; 
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }
  public set targetHost(value: string) {
    this._targetHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetHostInput() {
    return this._targetHost;
  }

  // target_path - computed: false, optional: false, required: true
  private _targetPath?: string; 
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }
  public set targetPath(value: string) {
    this._targetPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathInput() {
    return this._targetPath;
  }

  // target_snapshot_alias - computed: true, optional: true, required: false
  private _targetSnapshotAlias?: string; 
  public get targetSnapshotAlias() {
    return this.getStringAttribute('target_snapshot_alias');
  }
  public set targetSnapshotAlias(value: string) {
    this._targetSnapshotAlias = value;
  }
  public resetTargetSnapshotAlias() {
    this._targetSnapshotAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSnapshotAliasInput() {
    return this._targetSnapshotAlias;
  }

  // target_snapshot_archive - computed: true, optional: true, required: false
  private _targetSnapshotArchive?: boolean | cdktf.IResolvable; 
  public get targetSnapshotArchive() {
    return this.getBooleanAttribute('target_snapshot_archive');
  }
  public set targetSnapshotArchive(value: boolean | cdktf.IResolvable) {
    this._targetSnapshotArchive = value;
  }
  public resetTargetSnapshotArchive() {
    this._targetSnapshotArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSnapshotArchiveInput() {
    return this._targetSnapshotArchive;
  }

  // target_snapshot_expiration - computed: true, optional: true, required: false
  private _targetSnapshotExpiration?: number; 
  public get targetSnapshotExpiration() {
    return this.getNumberAttribute('target_snapshot_expiration');
  }
  public set targetSnapshotExpiration(value: number) {
    this._targetSnapshotExpiration = value;
  }
  public resetTargetSnapshotExpiration() {
    this._targetSnapshotExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSnapshotExpirationInput() {
    return this._targetSnapshotExpiration;
  }

  // target_snapshot_pattern - computed: true, optional: true, required: false
  private _targetSnapshotPattern?: string; 
  public get targetSnapshotPattern() {
    return this.getStringAttribute('target_snapshot_pattern');
  }
  public set targetSnapshotPattern(value: string) {
    this._targetSnapshotPattern = value;
  }
  public resetTargetSnapshotPattern() {
    this._targetSnapshotPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSnapshotPatternInput() {
    return this._targetSnapshotPattern;
  }

  // workers_per_node - computed: true, optional: true, required: false
  private _workersPerNode?: number; 
  public get workersPerNode() {
    return this.getNumberAttribute('workers_per_node');
  }
  public set workersPerNode(value: number) {
    this._workersPerNode = value;
  }
  public resetWorkersPerNode() {
    this._workersPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersPerNodeInput() {
    return this._workersPerNode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerated_failback: cdktf.booleanToTerraform(this._acceleratedFailback),
      action: cdktf.stringToTerraform(this._action),
      allow_copy_fb: cdktf.booleanToTerraform(this._allowCopyFb),
      bandwidth_reservation: cdktf.numberToTerraform(this._bandwidthReservation),
      changelist: cdktf.booleanToTerraform(this._changelist),
      check_integrity: cdktf.booleanToTerraform(this._checkIntegrity),
      cloud_deep_copy: cdktf.stringToTerraform(this._cloudDeepCopy),
      conflicted: cdktf.booleanToTerraform(this._conflicted),
      delete_quotas: cdktf.booleanToTerraform(this._deleteQuotas),
      description: cdktf.stringToTerraform(this._description),
      disable_file_split: cdktf.booleanToTerraform(this._disableFileSplit),
      disable_fofb: cdktf.booleanToTerraform(this._disableFofb),
      disable_quota_tmp_dir: cdktf.booleanToTerraform(this._disableQuotaTmpDir),
      disable_stf: cdktf.booleanToTerraform(this._disableStf),
      enable_hash_tmpdir: cdktf.booleanToTerraform(this._enableHashTmpdir),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encryption_cipher_list: cdktf.stringToTerraform(this._encryptionCipherList),
      expected_dataloss: cdktf.booleanToTerraform(this._expectedDataloss),
      file_matching_pattern: synciqPolicyFileMatchingPatternToTerraform(this._fileMatchingPattern.internalValue),
      force_interface: cdktf.booleanToTerraform(this._forceInterface),
      ignore_recursive_quota: cdktf.booleanToTerraform(this._ignoreRecursiveQuota),
      job_delay: cdktf.numberToTerraform(this._jobDelay),
      log_level: cdktf.stringToTerraform(this._logLevel),
      log_removed_files: cdktf.booleanToTerraform(this._logRemovedFiles),
      name: cdktf.stringToTerraform(this._name),
      ocsp_address: cdktf.stringToTerraform(this._ocspAddress),
      ocsp_issuer_certificate_id: cdktf.stringToTerraform(this._ocspIssuerCertificateId),
      password: cdktf.stringToTerraform(this._password),
      priority: cdktf.numberToTerraform(this._priority),
      report_max_age: cdktf.numberToTerraform(this._reportMaxAge),
      report_max_count: cdktf.numberToTerraform(this._reportMaxCount),
      restrict_target_network: cdktf.booleanToTerraform(this._restrictTargetNetwork),
      rpo_alert: cdktf.numberToTerraform(this._rpoAlert),
      schedule: cdktf.stringToTerraform(this._schedule),
      skip_lookup: cdktf.booleanToTerraform(this._skipLookup),
      skip_when_source_unmodified: cdktf.booleanToTerraform(this._skipWhenSourceUnmodified),
      snapshot_sync_existing: cdktf.booleanToTerraform(this._snapshotSyncExisting),
      snapshot_sync_pattern: cdktf.stringToTerraform(this._snapshotSyncPattern),
      source_exclude_directories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceExcludeDirectories),
      source_include_directories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIncludeDirectories),
      source_network: synciqPolicySourceNetworkToTerraform(this._sourceNetwork.internalValue),
      source_root_path: cdktf.stringToTerraform(this._sourceRootPath),
      source_snapshot_archive: cdktf.booleanToTerraform(this._sourceSnapshotArchive),
      source_snapshot_expiration: cdktf.numberToTerraform(this._sourceSnapshotExpiration),
      source_snapshot_pattern: cdktf.stringToTerraform(this._sourceSnapshotPattern),
      sync_existing_snapshot_expiration: cdktf.booleanToTerraform(this._syncExistingSnapshotExpiration),
      sync_existing_target_snapshot_pattern: cdktf.stringToTerraform(this._syncExistingTargetSnapshotPattern),
      target_certificate_id: cdktf.stringToTerraform(this._targetCertificateId),
      target_compare_initial_sync: cdktf.booleanToTerraform(this._targetCompareInitialSync),
      target_detect_modifications: cdktf.booleanToTerraform(this._targetDetectModifications),
      target_host: cdktf.stringToTerraform(this._targetHost),
      target_path: cdktf.stringToTerraform(this._targetPath),
      target_snapshot_alias: cdktf.stringToTerraform(this._targetSnapshotAlias),
      target_snapshot_archive: cdktf.booleanToTerraform(this._targetSnapshotArchive),
      target_snapshot_expiration: cdktf.numberToTerraform(this._targetSnapshotExpiration),
      target_snapshot_pattern: cdktf.stringToTerraform(this._targetSnapshotPattern),
      workers_per_node: cdktf.numberToTerraform(this._workersPerNode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerated_failback: {
        value: cdktf.booleanToHclTerraform(this._acceleratedFailback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_copy_fb: {
        value: cdktf.booleanToHclTerraform(this._allowCopyFb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth_reservation: {
        value: cdktf.numberToHclTerraform(this._bandwidthReservation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      changelist: {
        value: cdktf.booleanToHclTerraform(this._changelist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_integrity: {
        value: cdktf.booleanToHclTerraform(this._checkIntegrity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_deep_copy: {
        value: cdktf.stringToHclTerraform(this._cloudDeepCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conflicted: {
        value: cdktf.booleanToHclTerraform(this._conflicted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_quotas: {
        value: cdktf.booleanToHclTerraform(this._deleteQuotas),
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
      disable_file_split: {
        value: cdktf.booleanToHclTerraform(this._disableFileSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_fofb: {
        value: cdktf.booleanToHclTerraform(this._disableFofb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_quota_tmp_dir: {
        value: cdktf.booleanToHclTerraform(this._disableQuotaTmpDir),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_stf: {
        value: cdktf.booleanToHclTerraform(this._disableStf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_hash_tmpdir: {
        value: cdktf.booleanToHclTerraform(this._enableHashTmpdir),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_cipher_list: {
        value: cdktf.stringToHclTerraform(this._encryptionCipherList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expected_dataloss: {
        value: cdktf.booleanToHclTerraform(this._expectedDataloss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_matching_pattern: {
        value: synciqPolicyFileMatchingPatternToHclTerraform(this._fileMatchingPattern.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SynciqPolicyFileMatchingPattern",
      },
      force_interface: {
        value: cdktf.booleanToHclTerraform(this._forceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_recursive_quota: {
        value: cdktf.booleanToHclTerraform(this._ignoreRecursiveQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      job_delay: {
        value: cdktf.numberToHclTerraform(this._jobDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_removed_files: {
        value: cdktf.booleanToHclTerraform(this._logRemovedFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_address: {
        value: cdktf.stringToHclTerraform(this._ocspAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_issuer_certificate_id: {
        value: cdktf.stringToHclTerraform(this._ocspIssuerCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      report_max_age: {
        value: cdktf.numberToHclTerraform(this._reportMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      report_max_count: {
        value: cdktf.numberToHclTerraform(this._reportMaxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_target_network: {
        value: cdktf.booleanToHclTerraform(this._restrictTargetNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rpo_alert: {
        value: cdktf.numberToHclTerraform(this._rpoAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_lookup: {
        value: cdktf.booleanToHclTerraform(this._skipLookup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_when_source_unmodified: {
        value: cdktf.booleanToHclTerraform(this._skipWhenSourceUnmodified),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_sync_existing: {
        value: cdktf.booleanToHclTerraform(this._snapshotSyncExisting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snapshot_sync_pattern: {
        value: cdktf.stringToHclTerraform(this._snapshotSyncPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_exclude_directories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceExcludeDirectories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_include_directories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIncludeDirectories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_network: {
        value: synciqPolicySourceNetworkToHclTerraform(this._sourceNetwork.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SynciqPolicySourceNetwork",
      },
      source_root_path: {
        value: cdktf.stringToHclTerraform(this._sourceRootPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_snapshot_archive: {
        value: cdktf.booleanToHclTerraform(this._sourceSnapshotArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_snapshot_expiration: {
        value: cdktf.numberToHclTerraform(this._sourceSnapshotExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_snapshot_pattern: {
        value: cdktf.stringToHclTerraform(this._sourceSnapshotPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_existing_snapshot_expiration: {
        value: cdktf.booleanToHclTerraform(this._syncExistingSnapshotExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_existing_target_snapshot_pattern: {
        value: cdktf.stringToHclTerraform(this._syncExistingTargetSnapshotPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_certificate_id: {
        value: cdktf.stringToHclTerraform(this._targetCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_compare_initial_sync: {
        value: cdktf.booleanToHclTerraform(this._targetCompareInitialSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_detect_modifications: {
        value: cdktf.booleanToHclTerraform(this._targetDetectModifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_host: {
        value: cdktf.stringToHclTerraform(this._targetHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_path: {
        value: cdktf.stringToHclTerraform(this._targetPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_snapshot_alias: {
        value: cdktf.stringToHclTerraform(this._targetSnapshotAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_snapshot_archive: {
        value: cdktf.booleanToHclTerraform(this._targetSnapshotArchive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_snapshot_expiration: {
        value: cdktf.numberToHclTerraform(this._targetSnapshotExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_snapshot_pattern: {
        value: cdktf.stringToHclTerraform(this._targetSnapshotPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workers_per_node: {
        value: cdktf.numberToHclTerraform(this._workersPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
