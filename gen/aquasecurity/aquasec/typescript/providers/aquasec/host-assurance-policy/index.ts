// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostAssurancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aggregated vulnerability information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#aggregated_vulnerability HostAssurancePolicy#aggregated_vulnerability}
  */
  readonly aggregatedVulnerability?: { [key: string]: string };
  /**
  * List of explicitly allowed images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#allowed_images HostAssurancePolicy#allowed_images}
  */
  readonly allowedImages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#application_scopes HostAssurancePolicy#application_scopes}
  */
  readonly applicationScopes: string[];
  /**
  * What type of assurance policy is described.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#assurance_type HostAssurancePolicy#assurance_type}
  */
  readonly assuranceType: string;
  /**
  * Indicates if auditing for failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#audit_on_failure HostAssurancePolicy#audit_on_failure}
  */
  readonly auditOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Name of user account that created the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#author HostAssurancePolicy#author}
  */
  readonly author?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#auto_scan_configured HostAssurancePolicy#auto_scan_configured}
  */
  readonly autoScanConfigured?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#auto_scan_enabled HostAssurancePolicy#auto_scan_enabled}
  */
  readonly autoScanEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of function's forbidden permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#blacklist_permissions HostAssurancePolicy#blacklist_permissions}
  */
  readonly blacklistPermissions?: string[];
  /**
  * Indicates if blacklist permissions is relevant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#blacklist_permissions_enabled HostAssurancePolicy#blacklist_permissions_enabled}
  */
  readonly blacklistPermissionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of blacklisted licenses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#blacklisted_licenses HostAssurancePolicy#blacklisted_licenses}
  */
  readonly blacklistedLicenses?: string[];
  /**
  * Indicates if license blacklist is relevant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#blacklisted_licenses_enabled HostAssurancePolicy#blacklisted_licenses_enabled}
  */
  readonly blacklistedLicensesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates if failed images are blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#block_failed HostAssurancePolicy#block_failed}
  */
  readonly blockFailed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#control_exclude_no_fix HostAssurancePolicy#control_exclude_no_fix}
  */
  readonly controlExcludeNoFix?: boolean | cdktf.IResolvable;
  /**
  * Indicates if scanning should include custom checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#custom_checks_enabled HostAssurancePolicy#custom_checks_enabled}
  */
  readonly customChecksEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#custom_severity HostAssurancePolicy#custom_severity}
  */
  readonly customSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#custom_severity_enabled HostAssurancePolicy#custom_severity_enabled}
  */
  readonly customSeverityEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of CVEs blacklisted items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#cves_black_list HostAssurancePolicy#cves_black_list}
  */
  readonly cvesBlackList?: string[];
  /**
  * Indicates if CVEs blacklist is relevant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#cves_black_list_enabled HostAssurancePolicy#cves_black_list_enabled}
  */
  readonly cvesBlackListEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of cves whitelisted licenses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#cves_white_list HostAssurancePolicy#cves_white_list}
  */
  readonly cvesWhiteList?: string[];
  /**
  * Indicates if CVEs whitelist is relevant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#cves_white_list_enabled HostAssurancePolicy#cves_white_list_enabled}
  */
  readonly cvesWhiteListEnabled?: boolean | cdktf.IResolvable;
  /**
  * Identifier of the cvss severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#cvss_severity HostAssurancePolicy#cvss_severity}
  */
  readonly cvssSeverity?: string;
  /**
  * Indicates if the cvss severity is scanned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#cvss_severity_enabled HostAssurancePolicy#cvss_severity_enabled}
  */
  readonly cvssSeverityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates that policy should ignore cvss cases that do not have a known fix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#cvss_severity_exclude_no_fix HostAssurancePolicy#cvss_severity_exclude_no_fix}
  */
  readonly cvssSeverityExcludeNoFix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#description HostAssurancePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#disallow_exploit_types HostAssurancePolicy#disallow_exploit_types}
  */
  readonly disallowExploitTypes?: string[];
  /**
  * Indicates if malware should block the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#disallow_malware HostAssurancePolicy#disallow_malware}
  */
  readonly disallowMalware?: boolean | cdktf.IResolvable;
  /**
  * Checks the host according to the Docker CIS benchmark, if Docker is found on the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#docker_cis_enabled HostAssurancePolicy#docker_cis_enabled}
  */
  readonly dockerCisEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#domain HostAssurancePolicy#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#domain_name HostAssurancePolicy#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#dta_enabled HostAssurancePolicy#dta_enabled}
  */
  readonly dtaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#dta_severity HostAssurancePolicy#dta_severity}
  */
  readonly dtaSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#enabled HostAssurancePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#enforce HostAssurancePolicy#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#enforce_after_days HostAssurancePolicy#enforce_after_days}
  */
  readonly enforceAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#enforce_excessive_permissions HostAssurancePolicy#enforce_excessive_permissions}
  */
  readonly enforceExcessivePermissions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#exceptional_monitored_malware_paths HostAssurancePolicy#exceptional_monitored_malware_paths}
  */
  readonly exceptionalMonitoredMalwarePaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#exclude_application_scopes HostAssurancePolicy#exclude_application_scopes}
  */
  readonly excludeApplicationScopes?: string[];
  /**
  * Indicates if cicd failures will fail the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#fail_cicd HostAssurancePolicy#fail_cicd}
  */
  readonly failCicd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#forbidden_labels_enabled HostAssurancePolicy#forbidden_labels_enabled}
  */
  readonly forbiddenLabelsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#force_microenforcer HostAssurancePolicy#force_microenforcer}
  */
  readonly forceMicroenforcer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#function_integrity_enabled HostAssurancePolicy#function_integrity_enabled}
  */
  readonly functionIntegrityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#id HostAssurancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#ignore_base_image_vln HostAssurancePolicy#ignore_base_image_vln}
  */
  readonly ignoreBaseImageVln?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#ignore_recently_published_fix_vln HostAssurancePolicy#ignore_recently_published_fix_vln}
  */
  readonly ignoreRecentlyPublishedFixVln?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#ignore_recently_published_fix_vln_period HostAssurancePolicy#ignore_recently_published_fix_vln_period}
  */
  readonly ignoreRecentlyPublishedFixVlnPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#ignore_recently_published_vln HostAssurancePolicy#ignore_recently_published_vln}
  */
  readonly ignoreRecentlyPublishedVln?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#ignore_recently_published_vln_period HostAssurancePolicy#ignore_recently_published_vln_period}
  */
  readonly ignoreRecentlyPublishedVlnPeriod?: number;
  /**
  * Indicates if risk resources are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#ignore_risk_resources_enabled HostAssurancePolicy#ignore_risk_resources_enabled}
  */
  readonly ignoreRiskResourcesEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of ignored risk resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#ignored_risk_resources HostAssurancePolicy#ignored_risk_resources}
  */
  readonly ignoredRiskResources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#ignored_sensitive_resources HostAssurancePolicy#ignored_sensitive_resources}
  */
  readonly ignoredSensitiveResources?: string[];
  /**
  * List of images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#images HostAssurancePolicy#images}
  */
  readonly images?: string[];
  /**
  * Performs a Kubernetes CIS benchmark check for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#kube_cis_enabled HostAssurancePolicy#kube_cis_enabled}
  */
  readonly kubeCisEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#kubernetes_controls HostAssurancePolicy#kubernetes_controls}
  */
  readonly kubernetesControls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#kubernetes_controls_avd_ids HostAssurancePolicy#kubernetes_controls_avd_ids}
  */
  readonly kubernetesControlsAvdIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#kubernetes_controls_names HostAssurancePolicy#kubernetes_controls_names}
  */
  readonly kubernetesControlsNames?: string[];
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#labels HostAssurancePolicy#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#lastupdate HostAssurancePolicy#lastupdate}
  */
  readonly lastupdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#linux_cis_enabled HostAssurancePolicy#linux_cis_enabled}
  */
  readonly linuxCisEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#malware_action HostAssurancePolicy#malware_action}
  */
  readonly malwareAction?: string;
  /**
  * Value of allowed maximum score.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#maximum_score HostAssurancePolicy#maximum_score}
  */
  readonly maximumScore?: number;
  /**
  * Indicates if exceeding the maximum score is scanned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#maximum_score_enabled HostAssurancePolicy#maximum_score_enabled}
  */
  readonly maximumScoreEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates that policy should ignore cases that do not have a known fix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#maximum_score_exclude_no_fix HostAssurancePolicy#maximum_score_exclude_no_fix}
  */
  readonly maximumScoreExcludeNoFix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#monitored_malware_paths HostAssurancePolicy#monitored_malware_paths}
  */
  readonly monitoredMalwarePaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#name HostAssurancePolicy#name}
  */
  readonly name: string;
  /**
  * Indicates if raise a warning for images that should only be run as root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#only_none_root_users HostAssurancePolicy#only_none_root_users}
  */
  readonly onlyNoneRootUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#openshift_hardening_enabled HostAssurancePolicy#openshift_hardening_enabled}
  */
  readonly openshiftHardeningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates if packages blacklist is relevant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#packages_black_list_enabled HostAssurancePolicy#packages_black_list_enabled}
  */
  readonly packagesBlackListEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates if packages whitelist is relevant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#packages_white_list_enabled HostAssurancePolicy#packages_white_list_enabled}
  */
  readonly packagesWhiteListEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#partial_results_image_fail HostAssurancePolicy#partial_results_image_fail}
  */
  readonly partialResultsImageFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#permission HostAssurancePolicy#permission}
  */
  readonly permission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#read_only HostAssurancePolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * List of registries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#registries HostAssurancePolicy#registries}
  */
  readonly registries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#registry HostAssurancePolicy#registry}
  */
  readonly registry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#required_labels_enabled HostAssurancePolicy#required_labels_enabled}
  */
  readonly requiredLabelsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#scan_malware_in_archives HostAssurancePolicy#scan_malware_in_archives}
  */
  readonly scanMalwareInArchives?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#scan_nfs_mounts HostAssurancePolicy#scan_nfs_mounts}
  */
  readonly scanNfsMounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#scan_process_memory HostAssurancePolicy#scan_process_memory}
  */
  readonly scanProcessMemory?: boolean | cdktf.IResolvable;
  /**
  * Indicates if scan should include sensitive data in the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#scan_sensitive_data HostAssurancePolicy#scan_sensitive_data}
  */
  readonly scanSensitiveData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#scan_windows_registry HostAssurancePolicy#scan_windows_registry}
  */
  readonly scanWindowsRegistry?: boolean | cdktf.IResolvable;
  /**
  * Indicates if scanning should include scap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#scap_enabled HostAssurancePolicy#scap_enabled}
  */
  readonly scapEnabled?: boolean | cdktf.IResolvable;
  /**
  * List of SCAP user scripts for checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#scap_files HostAssurancePolicy#scap_files}
  */
  readonly scapFiles?: string[];
  /**
  * Indicates if list of trusted base images is relevant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#trusted_base_images_enabled HostAssurancePolicy#trusted_base_images_enabled}
  */
  readonly trustedBaseImagesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#vulnerability_exploitability HostAssurancePolicy#vulnerability_exploitability}
  */
  readonly vulnerabilityExploitability?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#vulnerability_score_range HostAssurancePolicy#vulnerability_score_range}
  */
  readonly vulnerabilityScoreRange?: number[];
  /**
  * List of whitelisted licenses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#whitelisted_licenses HostAssurancePolicy#whitelisted_licenses}
  */
  readonly whitelistedLicenses?: string[];
  /**
  * Indicates if license blacklist is relevant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#whitelisted_licenses_enabled HostAssurancePolicy#whitelisted_licenses_enabled}
  */
  readonly whitelistedLicensesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Checks the host according to the Windows CIS benchmark (relevant for hosts running Windows).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#windows_cis_enabled HostAssurancePolicy#windows_cis_enabled}
  */
  readonly windowsCisEnabled?: boolean | cdktf.IResolvable;
  /**
  * auto_scan_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#auto_scan_time HostAssurancePolicy#auto_scan_time}
  */
  readonly autoScanTime?: HostAssurancePolicyAutoScanTime[] | cdktf.IResolvable;
  /**
  * custom_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#custom_checks HostAssurancePolicy#custom_checks}
  */
  readonly customChecks?: HostAssurancePolicyCustomChecks[] | cdktf.IResolvable;
  /**
  * forbidden_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#forbidden_labels HostAssurancePolicy#forbidden_labels}
  */
  readonly forbiddenLabels?: HostAssurancePolicyForbiddenLabels[] | cdktf.IResolvable;
  /**
  * packages_black_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#packages_black_list HostAssurancePolicy#packages_black_list}
  */
  readonly packagesBlackList?: HostAssurancePolicyPackagesBlackListStruct[] | cdktf.IResolvable;
  /**
  * packages_white_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#packages_white_list HostAssurancePolicy#packages_white_list}
  */
  readonly packagesWhiteList?: HostAssurancePolicyPackagesWhiteListStruct[] | cdktf.IResolvable;
  /**
  * policy_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#policy_settings HostAssurancePolicy#policy_settings}
  */
  readonly policySettings?: HostAssurancePolicyPolicySettings;
  /**
  * required_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#required_labels HostAssurancePolicy#required_labels}
  */
  readonly requiredLabels?: HostAssurancePolicyRequiredLabels[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#scope HostAssurancePolicy#scope}
  */
  readonly scope?: HostAssurancePolicyScope[] | cdktf.IResolvable;
  /**
  * trusted_base_images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#trusted_base_images HostAssurancePolicy#trusted_base_images}
  */
  readonly trustedBaseImages?: HostAssurancePolicyTrustedBaseImages[] | cdktf.IResolvable;
}
export interface HostAssurancePolicyAutoScanTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#iteration HostAssurancePolicy#iteration}
  */
  readonly iteration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#iteration_type HostAssurancePolicy#iteration_type}
  */
  readonly iterationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#time HostAssurancePolicy#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#week_days HostAssurancePolicy#week_days}
  */
  readonly weekDays?: string[];
}

export function hostAssurancePolicyAutoScanTimeToTerraform(struct?: HostAssurancePolicyAutoScanTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iteration: cdktf.numberToTerraform(struct!.iteration),
    iteration_type: cdktf.stringToTerraform(struct!.iterationType),
    time: cdktf.stringToTerraform(struct!.time),
    week_days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekDays),
  }
}


export function hostAssurancePolicyAutoScanTimeToHclTerraform(struct?: HostAssurancePolicyAutoScanTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iteration: {
      value: cdktf.numberToHclTerraform(struct!.iteration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iteration_type: {
      value: cdktf.stringToHclTerraform(struct!.iterationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    week_days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekDays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAssurancePolicyAutoScanTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostAssurancePolicyAutoScanTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iteration !== undefined) {
      hasAnyValues = true;
      internalValueResult.iteration = this._iteration;
    }
    if (this._iterationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.iterationType = this._iterationType;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._weekDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDays = this._weekDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAssurancePolicyAutoScanTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iteration = undefined;
      this._iterationType = undefined;
      this._time = undefined;
      this._weekDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iteration = value.iteration;
      this._iterationType = value.iterationType;
      this._time = value.time;
      this._weekDays = value.weekDays;
    }
  }

  // iteration - computed: true, optional: true, required: false
  private _iteration?: number; 
  public get iteration() {
    return this.getNumberAttribute('iteration');
  }
  public set iteration(value: number) {
    this._iteration = value;
  }
  public resetIteration() {
    this._iteration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationInput() {
    return this._iteration;
  }

  // iteration_type - computed: false, optional: true, required: false
  private _iterationType?: string; 
  public get iterationType() {
    return this.getStringAttribute('iteration_type');
  }
  public set iterationType(value: string) {
    this._iterationType = value;
  }
  public resetIterationType() {
    this._iterationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationTypeInput() {
    return this._iterationType;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // week_days - computed: true, optional: true, required: false
  private _weekDays?: string[]; 
  public get weekDays() {
    return this.getListAttribute('week_days');
  }
  public set weekDays(value: string[]) {
    this._weekDays = value;
  }
  public resetWeekDays() {
    this._weekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDaysInput() {
    return this._weekDays;
  }
}

export class HostAssurancePolicyAutoScanTimeList extends cdktf.ComplexList {
  public internalValue? : HostAssurancePolicyAutoScanTime[] | cdktf.IResolvable

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
  public get(index: number): HostAssurancePolicyAutoScanTimeOutputReference {
    return new HostAssurancePolicyAutoScanTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostAssurancePolicyCustomChecks {
  /**
  * Name of user account that created the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#author HostAssurancePolicy#author}
  */
  readonly author?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#description HostAssurancePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#engine HostAssurancePolicy#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#last_modified HostAssurancePolicy#last_modified}
  */
  readonly lastModified?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#name HostAssurancePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#path HostAssurancePolicy#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#read_only HostAssurancePolicy#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#script_id HostAssurancePolicy#script_id}
  */
  readonly scriptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#severity HostAssurancePolicy#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#snippet HostAssurancePolicy#snippet}
  */
  readonly snippet?: string;
}

export function hostAssurancePolicyCustomChecksToTerraform(struct?: HostAssurancePolicyCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    author: cdktf.stringToTerraform(struct!.author),
    description: cdktf.stringToTerraform(struct!.description),
    engine: cdktf.stringToTerraform(struct!.engine),
    last_modified: cdktf.numberToTerraform(struct!.lastModified),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    script_id: cdktf.stringToTerraform(struct!.scriptId),
    severity: cdktf.stringToTerraform(struct!.severity),
    snippet: cdktf.stringToTerraform(struct!.snippet),
  }
}


export function hostAssurancePolicyCustomChecksToHclTerraform(struct?: HostAssurancePolicyCustomChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    author: {
      value: cdktf.stringToHclTerraform(struct!.author),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_modified: {
      value: cdktf.numberToHclTerraform(struct!.lastModified),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    script_id: {
      value: cdktf.stringToHclTerraform(struct!.scriptId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snippet: {
      value: cdktf.stringToHclTerraform(struct!.snippet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAssurancePolicyCustomChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostAssurancePolicyCustomChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._author !== undefined) {
      hasAnyValues = true;
      internalValueResult.author = this._author;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._lastModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModified = this._lastModified;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._scriptId !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptId = this._scriptId;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._snippet !== undefined) {
      hasAnyValues = true;
      internalValueResult.snippet = this._snippet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAssurancePolicyCustomChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._author = undefined;
      this._description = undefined;
      this._engine = undefined;
      this._lastModified = undefined;
      this._name = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._scriptId = undefined;
      this._severity = undefined;
      this._snippet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._author = value.author;
      this._description = value.description;
      this._engine = value.engine;
      this._lastModified = value.lastModified;
      this._name = value.name;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._scriptId = value.scriptId;
      this._severity = value.severity;
      this._snippet = value.snippet;
    }
  }

  // author - computed: false, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
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

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // last_modified - computed: false, optional: true, required: false
  private _lastModified?: number; 
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }
  public set lastModified(value: number) {
    this._lastModified = value;
  }
  public resetLastModified() {
    this._lastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedInput() {
    return this._lastModified;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // script_id - computed: false, optional: true, required: false
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  public resetScriptId() {
    this._scriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }
}

export class HostAssurancePolicyCustomChecksList extends cdktf.ComplexList {
  public internalValue? : HostAssurancePolicyCustomChecks[] | cdktf.IResolvable

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
  public get(index: number): HostAssurancePolicyCustomChecksOutputReference {
    return new HostAssurancePolicyCustomChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostAssurancePolicyForbiddenLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#key HostAssurancePolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#value HostAssurancePolicy#value}
  */
  readonly value?: string;
}

export function hostAssurancePolicyForbiddenLabelsToTerraform(struct?: HostAssurancePolicyForbiddenLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostAssurancePolicyForbiddenLabelsToHclTerraform(struct?: HostAssurancePolicyForbiddenLabels | cdktf.IResolvable): any {
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

export class HostAssurancePolicyForbiddenLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostAssurancePolicyForbiddenLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostAssurancePolicyForbiddenLabels | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class HostAssurancePolicyForbiddenLabelsList extends cdktf.ComplexList {
  public internalValue? : HostAssurancePolicyForbiddenLabels[] | cdktf.IResolvable

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
  public get(index: number): HostAssurancePolicyForbiddenLabelsOutputReference {
    return new HostAssurancePolicyForbiddenLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostAssurancePolicyPackagesBlackListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#arch HostAssurancePolicy#arch}
  */
  readonly arch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#display HostAssurancePolicy#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#epoch HostAssurancePolicy#epoch}
  */
  readonly epoch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#format HostAssurancePolicy#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#license HostAssurancePolicy#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#name HostAssurancePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#release HostAssurancePolicy#release}
  */
  readonly release?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#version HostAssurancePolicy#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#version_range HostAssurancePolicy#version_range}
  */
  readonly versionRange?: string;
}

export function hostAssurancePolicyPackagesBlackListStructToTerraform(struct?: HostAssurancePolicyPackagesBlackListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    display: cdktf.stringToTerraform(struct!.display),
    epoch: cdktf.stringToTerraform(struct!.epoch),
    format: cdktf.stringToTerraform(struct!.format),
    license: cdktf.stringToTerraform(struct!.license),
    name: cdktf.stringToTerraform(struct!.name),
    release: cdktf.stringToTerraform(struct!.release),
    version: cdktf.stringToTerraform(struct!.version),
    version_range: cdktf.stringToTerraform(struct!.versionRange),
  }
}


export function hostAssurancePolicyPackagesBlackListStructToHclTerraform(struct?: HostAssurancePolicyPackagesBlackListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    epoch: {
      value: cdktf.stringToHclTerraform(struct!.epoch),
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
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release: {
      value: cdktf.stringToHclTerraform(struct!.release),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_range: {
      value: cdktf.stringToHclTerraform(struct!.versionRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAssurancePolicyPackagesBlackListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostAssurancePolicyPackagesBlackListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._epoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.epoch = this._epoch;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._release !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionRange = this._versionRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAssurancePolicyPackagesBlackListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._display = undefined;
      this._epoch = undefined;
      this._format = undefined;
      this._license = undefined;
      this._name = undefined;
      this._release = undefined;
      this._version = undefined;
      this._versionRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._display = value.display;
      this._epoch = value.epoch;
      this._format = value.format;
      this._license = value.license;
      this._name = value.name;
      this._release = value.release;
      this._version = value.version;
      this._versionRange = value.versionRange;
    }
  }

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // epoch - computed: false, optional: true, required: false
  private _epoch?: string; 
  public get epoch() {
    return this.getStringAttribute('epoch');
  }
  public set epoch(value: string) {
    this._epoch = value;
  }
  public resetEpoch() {
    this._epoch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochInput() {
    return this._epoch;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
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

  // release - computed: false, optional: true, required: false
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_range - computed: false, optional: true, required: false
  private _versionRange?: string; 
  public get versionRange() {
    return this.getStringAttribute('version_range');
  }
  public set versionRange(value: string) {
    this._versionRange = value;
  }
  public resetVersionRange() {
    this._versionRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionRangeInput() {
    return this._versionRange;
  }
}

export class HostAssurancePolicyPackagesBlackListStructList extends cdktf.ComplexList {
  public internalValue? : HostAssurancePolicyPackagesBlackListStruct[] | cdktf.IResolvable

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
  public get(index: number): HostAssurancePolicyPackagesBlackListStructOutputReference {
    return new HostAssurancePolicyPackagesBlackListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostAssurancePolicyPackagesWhiteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#arch HostAssurancePolicy#arch}
  */
  readonly arch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#display HostAssurancePolicy#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#epoch HostAssurancePolicy#epoch}
  */
  readonly epoch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#format HostAssurancePolicy#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#license HostAssurancePolicy#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#name HostAssurancePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#release HostAssurancePolicy#release}
  */
  readonly release?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#version HostAssurancePolicy#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#version_range HostAssurancePolicy#version_range}
  */
  readonly versionRange?: string;
}

export function hostAssurancePolicyPackagesWhiteListStructToTerraform(struct?: HostAssurancePolicyPackagesWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    display: cdktf.stringToTerraform(struct!.display),
    epoch: cdktf.stringToTerraform(struct!.epoch),
    format: cdktf.stringToTerraform(struct!.format),
    license: cdktf.stringToTerraform(struct!.license),
    name: cdktf.stringToTerraform(struct!.name),
    release: cdktf.stringToTerraform(struct!.release),
    version: cdktf.stringToTerraform(struct!.version),
    version_range: cdktf.stringToTerraform(struct!.versionRange),
  }
}


export function hostAssurancePolicyPackagesWhiteListStructToHclTerraform(struct?: HostAssurancePolicyPackagesWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    epoch: {
      value: cdktf.stringToHclTerraform(struct!.epoch),
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
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release: {
      value: cdktf.stringToHclTerraform(struct!.release),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_range: {
      value: cdktf.stringToHclTerraform(struct!.versionRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAssurancePolicyPackagesWhiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostAssurancePolicyPackagesWhiteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._epoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.epoch = this._epoch;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._release !== undefined) {
      hasAnyValues = true;
      internalValueResult.release = this._release;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionRange = this._versionRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAssurancePolicyPackagesWhiteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._display = undefined;
      this._epoch = undefined;
      this._format = undefined;
      this._license = undefined;
      this._name = undefined;
      this._release = undefined;
      this._version = undefined;
      this._versionRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._display = value.display;
      this._epoch = value.epoch;
      this._format = value.format;
      this._license = value.license;
      this._name = value.name;
      this._release = value.release;
      this._version = value.version;
      this._versionRange = value.versionRange;
    }
  }

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // display - computed: false, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // epoch - computed: false, optional: true, required: false
  private _epoch?: string; 
  public get epoch() {
    return this.getStringAttribute('epoch');
  }
  public set epoch(value: string) {
    this._epoch = value;
  }
  public resetEpoch() {
    this._epoch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochInput() {
    return this._epoch;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
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

  // release - computed: false, optional: true, required: false
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_range - computed: false, optional: true, required: false
  private _versionRange?: string; 
  public get versionRange() {
    return this.getStringAttribute('version_range');
  }
  public set versionRange(value: string) {
    this._versionRange = value;
  }
  public resetVersionRange() {
    this._versionRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionRangeInput() {
    return this._versionRange;
  }
}

export class HostAssurancePolicyPackagesWhiteListStructList extends cdktf.ComplexList {
  public internalValue? : HostAssurancePolicyPackagesWhiteListStruct[] | cdktf.IResolvable

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
  public get(index: number): HostAssurancePolicyPackagesWhiteListStructOutputReference {
    return new HostAssurancePolicyPackagesWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostAssurancePolicyPolicySettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#enforce HostAssurancePolicy#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#is_audit_checked HostAssurancePolicy#is_audit_checked}
  */
  readonly isAuditChecked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#warn HostAssurancePolicy#warn}
  */
  readonly warn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#warning_message HostAssurancePolicy#warning_message}
  */
  readonly warningMessage?: string;
}

export function hostAssurancePolicyPolicySettingsToTerraform(struct?: HostAssurancePolicyPolicySettingsOutputReference | HostAssurancePolicyPolicySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    is_audit_checked: cdktf.booleanToTerraform(struct!.isAuditChecked),
    warn: cdktf.booleanToTerraform(struct!.warn),
    warning_message: cdktf.stringToTerraform(struct!.warningMessage),
  }
}


export function hostAssurancePolicyPolicySettingsToHclTerraform(struct?: HostAssurancePolicyPolicySettingsOutputReference | HostAssurancePolicyPolicySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_audit_checked: {
      value: cdktf.booleanToHclTerraform(struct!.isAuditChecked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warn: {
      value: cdktf.booleanToHclTerraform(struct!.warn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warning_message: {
      value: cdktf.stringToHclTerraform(struct!.warningMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAssurancePolicyPolicySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HostAssurancePolicyPolicySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._isAuditChecked !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuditChecked = this._isAuditChecked;
    }
    if (this._warn !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn;
    }
    if (this._warningMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningMessage = this._warningMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAssurancePolicyPolicySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce = undefined;
      this._isAuditChecked = undefined;
      this._warn = undefined;
      this._warningMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce = value.enforce;
      this._isAuditChecked = value.isAuditChecked;
      this._warn = value.warn;
      this._warningMessage = value.warningMessage;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // is_audit_checked - computed: false, optional: true, required: false
  private _isAuditChecked?: boolean | cdktf.IResolvable; 
  public get isAuditChecked() {
    return this.getBooleanAttribute('is_audit_checked');
  }
  public set isAuditChecked(value: boolean | cdktf.IResolvable) {
    this._isAuditChecked = value;
  }
  public resetIsAuditChecked() {
    this._isAuditChecked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuditCheckedInput() {
    return this._isAuditChecked;
  }

  // warn - computed: false, optional: true, required: false
  private _warn?: boolean | cdktf.IResolvable; 
  public get warn() {
    return this.getBooleanAttribute('warn');
  }
  public set warn(value: boolean | cdktf.IResolvable) {
    this._warn = value;
  }
  public resetWarn() {
    this._warn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn;
  }

  // warning_message - computed: false, optional: true, required: false
  private _warningMessage?: string; 
  public get warningMessage() {
    return this.getStringAttribute('warning_message');
  }
  public set warningMessage(value: string) {
    this._warningMessage = value;
  }
  public resetWarningMessage() {
    this._warningMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningMessageInput() {
    return this._warningMessage;
  }
}
export interface HostAssurancePolicyRequiredLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#key HostAssurancePolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#value HostAssurancePolicy#value}
  */
  readonly value?: string;
}

export function hostAssurancePolicyRequiredLabelsToTerraform(struct?: HostAssurancePolicyRequiredLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostAssurancePolicyRequiredLabelsToHclTerraform(struct?: HostAssurancePolicyRequiredLabels | cdktf.IResolvable): any {
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

export class HostAssurancePolicyRequiredLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostAssurancePolicyRequiredLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HostAssurancePolicyRequiredLabels | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
}

export class HostAssurancePolicyRequiredLabelsList extends cdktf.ComplexList {
  public internalValue? : HostAssurancePolicyRequiredLabels[] | cdktf.IResolvable

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
  public get(index: number): HostAssurancePolicyRequiredLabelsOutputReference {
    return new HostAssurancePolicyRequiredLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostAssurancePolicyScopeVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#attribute HostAssurancePolicy#attribute}
  */
  readonly attribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#name HostAssurancePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#value HostAssurancePolicy#value}
  */
  readonly value?: string;
}

export function hostAssurancePolicyScopeVariablesToTerraform(struct?: HostAssurancePolicyScopeVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function hostAssurancePolicyScopeVariablesToHclTerraform(struct?: HostAssurancePolicyScopeVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class HostAssurancePolicyScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostAssurancePolicyScopeVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAssurancePolicyScopeVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // attribute - computed: true, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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

  // value - computed: true, optional: true, required: false
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
}

export class HostAssurancePolicyScopeVariablesList extends cdktf.ComplexList {
  public internalValue? : HostAssurancePolicyScopeVariables[] | cdktf.IResolvable

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
  public get(index: number): HostAssurancePolicyScopeVariablesOutputReference {
    return new HostAssurancePolicyScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostAssurancePolicyScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#expression HostAssurancePolicy#expression}
  */
  readonly expression?: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#variables HostAssurancePolicy#variables}
  */
  readonly variables?: HostAssurancePolicyScopeVariables[] | cdktf.IResolvable;
}

export function hostAssurancePolicyScopeToTerraform(struct?: HostAssurancePolicyScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(hostAssurancePolicyScopeVariablesToTerraform, true)(struct!.variables),
  }
}


export function hostAssurancePolicyScopeToHclTerraform(struct?: HostAssurancePolicyScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.listMapperHcl(hostAssurancePolicyScopeVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "HostAssurancePolicyScopeVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAssurancePolicyScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostAssurancePolicyScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAssurancePolicyScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._variables.internalValue = value.variables;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new HostAssurancePolicyScopeVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: HostAssurancePolicyScopeVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class HostAssurancePolicyScopeList extends cdktf.ComplexList {
  public internalValue? : HostAssurancePolicyScope[] | cdktf.IResolvable

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
  public get(index: number): HostAssurancePolicyScopeOutputReference {
    return new HostAssurancePolicyScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HostAssurancePolicyTrustedBaseImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#imagename HostAssurancePolicy#imagename}
  */
  readonly imagename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#registry HostAssurancePolicy#registry}
  */
  readonly registry?: string;
}

export function hostAssurancePolicyTrustedBaseImagesToTerraform(struct?: HostAssurancePolicyTrustedBaseImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imagename: cdktf.stringToTerraform(struct!.imagename),
    registry: cdktf.stringToTerraform(struct!.registry),
  }
}


export function hostAssurancePolicyTrustedBaseImagesToHclTerraform(struct?: HostAssurancePolicyTrustedBaseImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imagename: {
      value: cdktf.stringToHclTerraform(struct!.imagename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostAssurancePolicyTrustedBaseImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HostAssurancePolicyTrustedBaseImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imagename !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagename = this._imagename;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAssurancePolicyTrustedBaseImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imagename = undefined;
      this._registry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imagename = value.imagename;
      this._registry = value.registry;
    }
  }

  // imagename - computed: false, optional: true, required: false
  private _imagename?: string; 
  public get imagename() {
    return this.getStringAttribute('imagename');
  }
  public set imagename(value: string) {
    this._imagename = value;
  }
  public resetImagename() {
    this._imagename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagenameInput() {
    return this._imagename;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }
}

export class HostAssurancePolicyTrustedBaseImagesList extends cdktf.ComplexList {
  public internalValue? : HostAssurancePolicyTrustedBaseImages[] | cdktf.IResolvable

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
  public get(index: number): HostAssurancePolicyTrustedBaseImagesOutputReference {
    return new HostAssurancePolicyTrustedBaseImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy aquasec_host_assurance_policy}
*/
export class HostAssurancePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_host_assurance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostAssurancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostAssurancePolicy to import
  * @param importFromId The id of the existing HostAssurancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostAssurancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_host_assurance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/resources/host_assurance_policy aquasec_host_assurance_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostAssurancePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: HostAssurancePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_host_assurance_policy',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregatedVulnerability = config.aggregatedVulnerability;
    this._allowedImages = config.allowedImages;
    this._applicationScopes = config.applicationScopes;
    this._assuranceType = config.assuranceType;
    this._auditOnFailure = config.auditOnFailure;
    this._author = config.author;
    this._autoScanConfigured = config.autoScanConfigured;
    this._autoScanEnabled = config.autoScanEnabled;
    this._blacklistPermissions = config.blacklistPermissions;
    this._blacklistPermissionsEnabled = config.blacklistPermissionsEnabled;
    this._blacklistedLicenses = config.blacklistedLicenses;
    this._blacklistedLicensesEnabled = config.blacklistedLicensesEnabled;
    this._blockFailed = config.blockFailed;
    this._controlExcludeNoFix = config.controlExcludeNoFix;
    this._customChecksEnabled = config.customChecksEnabled;
    this._customSeverity = config.customSeverity;
    this._customSeverityEnabled = config.customSeverityEnabled;
    this._cvesBlackList = config.cvesBlackList;
    this._cvesBlackListEnabled = config.cvesBlackListEnabled;
    this._cvesWhiteList = config.cvesWhiteList;
    this._cvesWhiteListEnabled = config.cvesWhiteListEnabled;
    this._cvssSeverity = config.cvssSeverity;
    this._cvssSeverityEnabled = config.cvssSeverityEnabled;
    this._cvssSeverityExcludeNoFix = config.cvssSeverityExcludeNoFix;
    this._description = config.description;
    this._disallowExploitTypes = config.disallowExploitTypes;
    this._disallowMalware = config.disallowMalware;
    this._dockerCisEnabled = config.dockerCisEnabled;
    this._domain = config.domain;
    this._domainName = config.domainName;
    this._dtaEnabled = config.dtaEnabled;
    this._dtaSeverity = config.dtaSeverity;
    this._enabled = config.enabled;
    this._enforce = config.enforce;
    this._enforceAfterDays = config.enforceAfterDays;
    this._enforceExcessivePermissions = config.enforceExcessivePermissions;
    this._exceptionalMonitoredMalwarePaths = config.exceptionalMonitoredMalwarePaths;
    this._excludeApplicationScopes = config.excludeApplicationScopes;
    this._failCicd = config.failCicd;
    this._forbiddenLabelsEnabled = config.forbiddenLabelsEnabled;
    this._forceMicroenforcer = config.forceMicroenforcer;
    this._functionIntegrityEnabled = config.functionIntegrityEnabled;
    this._id = config.id;
    this._ignoreBaseImageVln = config.ignoreBaseImageVln;
    this._ignoreRecentlyPublishedFixVln = config.ignoreRecentlyPublishedFixVln;
    this._ignoreRecentlyPublishedFixVlnPeriod = config.ignoreRecentlyPublishedFixVlnPeriod;
    this._ignoreRecentlyPublishedVln = config.ignoreRecentlyPublishedVln;
    this._ignoreRecentlyPublishedVlnPeriod = config.ignoreRecentlyPublishedVlnPeriod;
    this._ignoreRiskResourcesEnabled = config.ignoreRiskResourcesEnabled;
    this._ignoredRiskResources = config.ignoredRiskResources;
    this._ignoredSensitiveResources = config.ignoredSensitiveResources;
    this._images = config.images;
    this._kubeCisEnabled = config.kubeCisEnabled;
    this._kubernetesControls = config.kubernetesControls;
    this._kubernetesControlsAvdIds = config.kubernetesControlsAvdIds;
    this._kubernetesControlsNames = config.kubernetesControlsNames;
    this._labels = config.labels;
    this._lastupdate = config.lastupdate;
    this._linuxCisEnabled = config.linuxCisEnabled;
    this._malwareAction = config.malwareAction;
    this._maximumScore = config.maximumScore;
    this._maximumScoreEnabled = config.maximumScoreEnabled;
    this._maximumScoreExcludeNoFix = config.maximumScoreExcludeNoFix;
    this._monitoredMalwarePaths = config.monitoredMalwarePaths;
    this._name = config.name;
    this._onlyNoneRootUsers = config.onlyNoneRootUsers;
    this._openshiftHardeningEnabled = config.openshiftHardeningEnabled;
    this._packagesBlackListEnabled = config.packagesBlackListEnabled;
    this._packagesWhiteListEnabled = config.packagesWhiteListEnabled;
    this._partialResultsImageFail = config.partialResultsImageFail;
    this._permission = config.permission;
    this._readOnly = config.readOnly;
    this._registries = config.registries;
    this._registry = config.registry;
    this._requiredLabelsEnabled = config.requiredLabelsEnabled;
    this._scanMalwareInArchives = config.scanMalwareInArchives;
    this._scanNfsMounts = config.scanNfsMounts;
    this._scanProcessMemory = config.scanProcessMemory;
    this._scanSensitiveData = config.scanSensitiveData;
    this._scanWindowsRegistry = config.scanWindowsRegistry;
    this._scapEnabled = config.scapEnabled;
    this._scapFiles = config.scapFiles;
    this._trustedBaseImagesEnabled = config.trustedBaseImagesEnabled;
    this._vulnerabilityExploitability = config.vulnerabilityExploitability;
    this._vulnerabilityScoreRange = config.vulnerabilityScoreRange;
    this._whitelistedLicenses = config.whitelistedLicenses;
    this._whitelistedLicensesEnabled = config.whitelistedLicensesEnabled;
    this._windowsCisEnabled = config.windowsCisEnabled;
    this._autoScanTime.internalValue = config.autoScanTime;
    this._customChecks.internalValue = config.customChecks;
    this._forbiddenLabels.internalValue = config.forbiddenLabels;
    this._packagesBlackList.internalValue = config.packagesBlackList;
    this._packagesWhiteList.internalValue = config.packagesWhiteList;
    this._policySettings.internalValue = config.policySettings;
    this._requiredLabels.internalValue = config.requiredLabels;
    this._scope.internalValue = config.scope;
    this._trustedBaseImages.internalValue = config.trustedBaseImages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregated_vulnerability - computed: false, optional: true, required: false
  private _aggregatedVulnerability?: { [key: string]: string }; 
  public get aggregatedVulnerability() {
    return this.getStringMapAttribute('aggregated_vulnerability');
  }
  public set aggregatedVulnerability(value: { [key: string]: string }) {
    this._aggregatedVulnerability = value;
  }
  public resetAggregatedVulnerability() {
    this._aggregatedVulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatedVulnerabilityInput() {
    return this._aggregatedVulnerability;
  }

  // allowed_images - computed: false, optional: true, required: false
  private _allowedImages?: string[]; 
  public get allowedImages() {
    return this.getListAttribute('allowed_images');
  }
  public set allowedImages(value: string[]) {
    this._allowedImages = value;
  }
  public resetAllowedImages() {
    this._allowedImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedImagesInput() {
    return this._allowedImages;
  }

  // application_scopes - computed: false, optional: false, required: true
  private _applicationScopes?: string[]; 
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }
  public set applicationScopes(value: string[]) {
    this._applicationScopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationScopesInput() {
    return this._applicationScopes;
  }

  // assurance_type - computed: false, optional: false, required: true
  private _assuranceType?: string; 
  public get assuranceType() {
    return this.getStringAttribute('assurance_type');
  }
  public set assuranceType(value: string) {
    this._assuranceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assuranceTypeInput() {
    return this._assuranceType;
  }

  // audit_on_failure - computed: false, optional: true, required: false
  private _auditOnFailure?: boolean | cdktf.IResolvable; 
  public get auditOnFailure() {
    return this.getBooleanAttribute('audit_on_failure');
  }
  public set auditOnFailure(value: boolean | cdktf.IResolvable) {
    this._auditOnFailure = value;
  }
  public resetAuditOnFailure() {
    this._auditOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditOnFailureInput() {
    return this._auditOnFailure;
  }

  // author - computed: true, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // auto_scan_configured - computed: false, optional: true, required: false
  private _autoScanConfigured?: boolean | cdktf.IResolvable; 
  public get autoScanConfigured() {
    return this.getBooleanAttribute('auto_scan_configured');
  }
  public set autoScanConfigured(value: boolean | cdktf.IResolvable) {
    this._autoScanConfigured = value;
  }
  public resetAutoScanConfigured() {
    this._autoScanConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScanConfiguredInput() {
    return this._autoScanConfigured;
  }

  // auto_scan_enabled - computed: false, optional: true, required: false
  private _autoScanEnabled?: boolean | cdktf.IResolvable; 
  public get autoScanEnabled() {
    return this.getBooleanAttribute('auto_scan_enabled');
  }
  public set autoScanEnabled(value: boolean | cdktf.IResolvable) {
    this._autoScanEnabled = value;
  }
  public resetAutoScanEnabled() {
    this._autoScanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScanEnabledInput() {
    return this._autoScanEnabled;
  }

  // blacklist_permissions - computed: false, optional: true, required: false
  private _blacklistPermissions?: string[]; 
  public get blacklistPermissions() {
    return this.getListAttribute('blacklist_permissions');
  }
  public set blacklistPermissions(value: string[]) {
    this._blacklistPermissions = value;
  }
  public resetBlacklistPermissions() {
    this._blacklistPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistPermissionsInput() {
    return this._blacklistPermissions;
  }

  // blacklist_permissions_enabled - computed: false, optional: true, required: false
  private _blacklistPermissionsEnabled?: boolean | cdktf.IResolvable; 
  public get blacklistPermissionsEnabled() {
    return this.getBooleanAttribute('blacklist_permissions_enabled');
  }
  public set blacklistPermissionsEnabled(value: boolean | cdktf.IResolvable) {
    this._blacklistPermissionsEnabled = value;
  }
  public resetBlacklistPermissionsEnabled() {
    this._blacklistPermissionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistPermissionsEnabledInput() {
    return this._blacklistPermissionsEnabled;
  }

  // blacklisted_licenses - computed: false, optional: true, required: false
  private _blacklistedLicenses?: string[]; 
  public get blacklistedLicenses() {
    return this.getListAttribute('blacklisted_licenses');
  }
  public set blacklistedLicenses(value: string[]) {
    this._blacklistedLicenses = value;
  }
  public resetBlacklistedLicenses() {
    this._blacklistedLicenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistedLicensesInput() {
    return this._blacklistedLicenses;
  }

  // blacklisted_licenses_enabled - computed: false, optional: true, required: false
  private _blacklistedLicensesEnabled?: boolean | cdktf.IResolvable; 
  public get blacklistedLicensesEnabled() {
    return this.getBooleanAttribute('blacklisted_licenses_enabled');
  }
  public set blacklistedLicensesEnabled(value: boolean | cdktf.IResolvable) {
    this._blacklistedLicensesEnabled = value;
  }
  public resetBlacklistedLicensesEnabled() {
    this._blacklistedLicensesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistedLicensesEnabledInput() {
    return this._blacklistedLicensesEnabled;
  }

  // block_failed - computed: false, optional: true, required: false
  private _blockFailed?: boolean | cdktf.IResolvable; 
  public get blockFailed() {
    return this.getBooleanAttribute('block_failed');
  }
  public set blockFailed(value: boolean | cdktf.IResolvable) {
    this._blockFailed = value;
  }
  public resetBlockFailed() {
    this._blockFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockFailedInput() {
    return this._blockFailed;
  }

  // control_exclude_no_fix - computed: false, optional: true, required: false
  private _controlExcludeNoFix?: boolean | cdktf.IResolvable; 
  public get controlExcludeNoFix() {
    return this.getBooleanAttribute('control_exclude_no_fix');
  }
  public set controlExcludeNoFix(value: boolean | cdktf.IResolvable) {
    this._controlExcludeNoFix = value;
  }
  public resetControlExcludeNoFix() {
    this._controlExcludeNoFix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlExcludeNoFixInput() {
    return this._controlExcludeNoFix;
  }

  // custom_checks_enabled - computed: false, optional: true, required: false
  private _customChecksEnabled?: boolean | cdktf.IResolvable; 
  public get customChecksEnabled() {
    return this.getBooleanAttribute('custom_checks_enabled');
  }
  public set customChecksEnabled(value: boolean | cdktf.IResolvable) {
    this._customChecksEnabled = value;
  }
  public resetCustomChecksEnabled() {
    this._customChecksEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksEnabledInput() {
    return this._customChecksEnabled;
  }

  // custom_severity - computed: true, optional: true, required: false
  private _customSeverity?: string; 
  public get customSeverity() {
    return this.getStringAttribute('custom_severity');
  }
  public set customSeverity(value: string) {
    this._customSeverity = value;
  }
  public resetCustomSeverity() {
    this._customSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSeverityInput() {
    return this._customSeverity;
  }

  // custom_severity_enabled - computed: false, optional: true, required: false
  private _customSeverityEnabled?: boolean | cdktf.IResolvable; 
  public get customSeverityEnabled() {
    return this.getBooleanAttribute('custom_severity_enabled');
  }
  public set customSeverityEnabled(value: boolean | cdktf.IResolvable) {
    this._customSeverityEnabled = value;
  }
  public resetCustomSeverityEnabled() {
    this._customSeverityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSeverityEnabledInput() {
    return this._customSeverityEnabled;
  }

  // cves_black_list - computed: false, optional: true, required: false
  private _cvesBlackList?: string[]; 
  public get cvesBlackList() {
    return this.getListAttribute('cves_black_list');
  }
  public set cvesBlackList(value: string[]) {
    this._cvesBlackList = value;
  }
  public resetCvesBlackList() {
    this._cvesBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvesBlackListInput() {
    return this._cvesBlackList;
  }

  // cves_black_list_enabled - computed: false, optional: true, required: false
  private _cvesBlackListEnabled?: boolean | cdktf.IResolvable; 
  public get cvesBlackListEnabled() {
    return this.getBooleanAttribute('cves_black_list_enabled');
  }
  public set cvesBlackListEnabled(value: boolean | cdktf.IResolvable) {
    this._cvesBlackListEnabled = value;
  }
  public resetCvesBlackListEnabled() {
    this._cvesBlackListEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvesBlackListEnabledInput() {
    return this._cvesBlackListEnabled;
  }

  // cves_white_list - computed: false, optional: true, required: false
  private _cvesWhiteList?: string[]; 
  public get cvesWhiteList() {
    return this.getListAttribute('cves_white_list');
  }
  public set cvesWhiteList(value: string[]) {
    this._cvesWhiteList = value;
  }
  public resetCvesWhiteList() {
    this._cvesWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvesWhiteListInput() {
    return this._cvesWhiteList;
  }

  // cves_white_list_enabled - computed: false, optional: true, required: false
  private _cvesWhiteListEnabled?: boolean | cdktf.IResolvable; 
  public get cvesWhiteListEnabled() {
    return this.getBooleanAttribute('cves_white_list_enabled');
  }
  public set cvesWhiteListEnabled(value: boolean | cdktf.IResolvable) {
    this._cvesWhiteListEnabled = value;
  }
  public resetCvesWhiteListEnabled() {
    this._cvesWhiteListEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvesWhiteListEnabledInput() {
    return this._cvesWhiteListEnabled;
  }

  // cvss_severity - computed: false, optional: true, required: false
  private _cvssSeverity?: string; 
  public get cvssSeverity() {
    return this.getStringAttribute('cvss_severity');
  }
  public set cvssSeverity(value: string) {
    this._cvssSeverity = value;
  }
  public resetCvssSeverity() {
    this._cvssSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvssSeverityInput() {
    return this._cvssSeverity;
  }

  // cvss_severity_enabled - computed: false, optional: true, required: false
  private _cvssSeverityEnabled?: boolean | cdktf.IResolvable; 
  public get cvssSeverityEnabled() {
    return this.getBooleanAttribute('cvss_severity_enabled');
  }
  public set cvssSeverityEnabled(value: boolean | cdktf.IResolvable) {
    this._cvssSeverityEnabled = value;
  }
  public resetCvssSeverityEnabled() {
    this._cvssSeverityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvssSeverityEnabledInput() {
    return this._cvssSeverityEnabled;
  }

  // cvss_severity_exclude_no_fix - computed: false, optional: true, required: false
  private _cvssSeverityExcludeNoFix?: boolean | cdktf.IResolvable; 
  public get cvssSeverityExcludeNoFix() {
    return this.getBooleanAttribute('cvss_severity_exclude_no_fix');
  }
  public set cvssSeverityExcludeNoFix(value: boolean | cdktf.IResolvable) {
    this._cvssSeverityExcludeNoFix = value;
  }
  public resetCvssSeverityExcludeNoFix() {
    this._cvssSeverityExcludeNoFix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvssSeverityExcludeNoFixInput() {
    return this._cvssSeverityExcludeNoFix;
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

  // disallow_exploit_types - computed: false, optional: true, required: false
  private _disallowExploitTypes?: string[]; 
  public get disallowExploitTypes() {
    return this.getListAttribute('disallow_exploit_types');
  }
  public set disallowExploitTypes(value: string[]) {
    this._disallowExploitTypes = value;
  }
  public resetDisallowExploitTypes() {
    this._disallowExploitTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowExploitTypesInput() {
    return this._disallowExploitTypes;
  }

  // disallow_malware - computed: false, optional: true, required: false
  private _disallowMalware?: boolean | cdktf.IResolvable; 
  public get disallowMalware() {
    return this.getBooleanAttribute('disallow_malware');
  }
  public set disallowMalware(value: boolean | cdktf.IResolvable) {
    this._disallowMalware = value;
  }
  public resetDisallowMalware() {
    this._disallowMalware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowMalwareInput() {
    return this._disallowMalware;
  }

  // docker_cis_enabled - computed: false, optional: true, required: false
  private _dockerCisEnabled?: boolean | cdktf.IResolvable; 
  public get dockerCisEnabled() {
    return this.getBooleanAttribute('docker_cis_enabled');
  }
  public set dockerCisEnabled(value: boolean | cdktf.IResolvable) {
    this._dockerCisEnabled = value;
  }
  public resetDockerCisEnabled() {
    this._dockerCisEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerCisEnabledInput() {
    return this._dockerCisEnabled;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // dta_enabled - computed: false, optional: true, required: false
  private _dtaEnabled?: boolean | cdktf.IResolvable; 
  public get dtaEnabled() {
    return this.getBooleanAttribute('dta_enabled');
  }
  public set dtaEnabled(value: boolean | cdktf.IResolvable) {
    this._dtaEnabled = value;
  }
  public resetDtaEnabled() {
    this._dtaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtaEnabledInput() {
    return this._dtaEnabled;
  }

  // dta_severity - computed: false, optional: true, required: false
  private _dtaSeverity?: string; 
  public get dtaSeverity() {
    return this.getStringAttribute('dta_severity');
  }
  public set dtaSeverity(value: string) {
    this._dtaSeverity = value;
  }
  public resetDtaSeverity() {
    this._dtaSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtaSeverityInput() {
    return this._dtaSeverity;
  }

  // enabled - computed: false, optional: true, required: false
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

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // enforce_after_days - computed: false, optional: true, required: false
  private _enforceAfterDays?: number; 
  public get enforceAfterDays() {
    return this.getNumberAttribute('enforce_after_days');
  }
  public set enforceAfterDays(value: number) {
    this._enforceAfterDays = value;
  }
  public resetEnforceAfterDays() {
    this._enforceAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAfterDaysInput() {
    return this._enforceAfterDays;
  }

  // enforce_excessive_permissions - computed: false, optional: true, required: false
  private _enforceExcessivePermissions?: boolean | cdktf.IResolvable; 
  public get enforceExcessivePermissions() {
    return this.getBooleanAttribute('enforce_excessive_permissions');
  }
  public set enforceExcessivePermissions(value: boolean | cdktf.IResolvable) {
    this._enforceExcessivePermissions = value;
  }
  public resetEnforceExcessivePermissions() {
    this._enforceExcessivePermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceExcessivePermissionsInput() {
    return this._enforceExcessivePermissions;
  }

  // exceptional_monitored_malware_paths - computed: false, optional: true, required: false
  private _exceptionalMonitoredMalwarePaths?: string[]; 
  public get exceptionalMonitoredMalwarePaths() {
    return this.getListAttribute('exceptional_monitored_malware_paths');
  }
  public set exceptionalMonitoredMalwarePaths(value: string[]) {
    this._exceptionalMonitoredMalwarePaths = value;
  }
  public resetExceptionalMonitoredMalwarePaths() {
    this._exceptionalMonitoredMalwarePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredMalwarePathsInput() {
    return this._exceptionalMonitoredMalwarePaths;
  }

  // exclude_application_scopes - computed: false, optional: true, required: false
  private _excludeApplicationScopes?: string[]; 
  public get excludeApplicationScopes() {
    return this.getListAttribute('exclude_application_scopes');
  }
  public set excludeApplicationScopes(value: string[]) {
    this._excludeApplicationScopes = value;
  }
  public resetExcludeApplicationScopes() {
    this._excludeApplicationScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeApplicationScopesInput() {
    return this._excludeApplicationScopes;
  }

  // fail_cicd - computed: false, optional: true, required: false
  private _failCicd?: boolean | cdktf.IResolvable; 
  public get failCicd() {
    return this.getBooleanAttribute('fail_cicd');
  }
  public set failCicd(value: boolean | cdktf.IResolvable) {
    this._failCicd = value;
  }
  public resetFailCicd() {
    this._failCicd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failCicdInput() {
    return this._failCicd;
  }

  // forbidden_labels_enabled - computed: false, optional: true, required: false
  private _forbiddenLabelsEnabled?: boolean | cdktf.IResolvable; 
  public get forbiddenLabelsEnabled() {
    return this.getBooleanAttribute('forbidden_labels_enabled');
  }
  public set forbiddenLabelsEnabled(value: boolean | cdktf.IResolvable) {
    this._forbiddenLabelsEnabled = value;
  }
  public resetForbiddenLabelsEnabled() {
    this._forbiddenLabelsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenLabelsEnabledInput() {
    return this._forbiddenLabelsEnabled;
  }

  // force_microenforcer - computed: false, optional: true, required: false
  private _forceMicroenforcer?: boolean | cdktf.IResolvable; 
  public get forceMicroenforcer() {
    return this.getBooleanAttribute('force_microenforcer');
  }
  public set forceMicroenforcer(value: boolean | cdktf.IResolvable) {
    this._forceMicroenforcer = value;
  }
  public resetForceMicroenforcer() {
    this._forceMicroenforcer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceMicroenforcerInput() {
    return this._forceMicroenforcer;
  }

  // function_integrity_enabled - computed: false, optional: true, required: false
  private _functionIntegrityEnabled?: boolean | cdktf.IResolvable; 
  public get functionIntegrityEnabled() {
    return this.getBooleanAttribute('function_integrity_enabled');
  }
  public set functionIntegrityEnabled(value: boolean | cdktf.IResolvable) {
    this._functionIntegrityEnabled = value;
  }
  public resetFunctionIntegrityEnabled() {
    this._functionIntegrityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIntegrityEnabledInput() {
    return this._functionIntegrityEnabled;
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

  // ignore_base_image_vln - computed: false, optional: true, required: false
  private _ignoreBaseImageVln?: boolean | cdktf.IResolvable; 
  public get ignoreBaseImageVln() {
    return this.getBooleanAttribute('ignore_base_image_vln');
  }
  public set ignoreBaseImageVln(value: boolean | cdktf.IResolvable) {
    this._ignoreBaseImageVln = value;
  }
  public resetIgnoreBaseImageVln() {
    this._ignoreBaseImageVln = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreBaseImageVlnInput() {
    return this._ignoreBaseImageVln;
  }

  // ignore_recently_published_fix_vln - computed: false, optional: true, required: false
  private _ignoreRecentlyPublishedFixVln?: boolean | cdktf.IResolvable; 
  public get ignoreRecentlyPublishedFixVln() {
    return this.getBooleanAttribute('ignore_recently_published_fix_vln');
  }
  public set ignoreRecentlyPublishedFixVln(value: boolean | cdktf.IResolvable) {
    this._ignoreRecentlyPublishedFixVln = value;
  }
  public resetIgnoreRecentlyPublishedFixVln() {
    this._ignoreRecentlyPublishedFixVln = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRecentlyPublishedFixVlnInput() {
    return this._ignoreRecentlyPublishedFixVln;
  }

  // ignore_recently_published_fix_vln_period - computed: true, optional: true, required: false
  private _ignoreRecentlyPublishedFixVlnPeriod?: number; 
  public get ignoreRecentlyPublishedFixVlnPeriod() {
    return this.getNumberAttribute('ignore_recently_published_fix_vln_period');
  }
  public set ignoreRecentlyPublishedFixVlnPeriod(value: number) {
    this._ignoreRecentlyPublishedFixVlnPeriod = value;
  }
  public resetIgnoreRecentlyPublishedFixVlnPeriod() {
    this._ignoreRecentlyPublishedFixVlnPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRecentlyPublishedFixVlnPeriodInput() {
    return this._ignoreRecentlyPublishedFixVlnPeriod;
  }

  // ignore_recently_published_vln - computed: false, optional: true, required: false
  private _ignoreRecentlyPublishedVln?: boolean | cdktf.IResolvable; 
  public get ignoreRecentlyPublishedVln() {
    return this.getBooleanAttribute('ignore_recently_published_vln');
  }
  public set ignoreRecentlyPublishedVln(value: boolean | cdktf.IResolvable) {
    this._ignoreRecentlyPublishedVln = value;
  }
  public resetIgnoreRecentlyPublishedVln() {
    this._ignoreRecentlyPublishedVln = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRecentlyPublishedVlnInput() {
    return this._ignoreRecentlyPublishedVln;
  }

  // ignore_recently_published_vln_period - computed: true, optional: true, required: false
  private _ignoreRecentlyPublishedVlnPeriod?: number; 
  public get ignoreRecentlyPublishedVlnPeriod() {
    return this.getNumberAttribute('ignore_recently_published_vln_period');
  }
  public set ignoreRecentlyPublishedVlnPeriod(value: number) {
    this._ignoreRecentlyPublishedVlnPeriod = value;
  }
  public resetIgnoreRecentlyPublishedVlnPeriod() {
    this._ignoreRecentlyPublishedVlnPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRecentlyPublishedVlnPeriodInput() {
    return this._ignoreRecentlyPublishedVlnPeriod;
  }

  // ignore_risk_resources_enabled - computed: false, optional: true, required: false
  private _ignoreRiskResourcesEnabled?: boolean | cdktf.IResolvable; 
  public get ignoreRiskResourcesEnabled() {
    return this.getBooleanAttribute('ignore_risk_resources_enabled');
  }
  public set ignoreRiskResourcesEnabled(value: boolean | cdktf.IResolvable) {
    this._ignoreRiskResourcesEnabled = value;
  }
  public resetIgnoreRiskResourcesEnabled() {
    this._ignoreRiskResourcesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRiskResourcesEnabledInput() {
    return this._ignoreRiskResourcesEnabled;
  }

  // ignored_risk_resources - computed: false, optional: true, required: false
  private _ignoredRiskResources?: string[]; 
  public get ignoredRiskResources() {
    return this.getListAttribute('ignored_risk_resources');
  }
  public set ignoredRiskResources(value: string[]) {
    this._ignoredRiskResources = value;
  }
  public resetIgnoredRiskResources() {
    this._ignoredRiskResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredRiskResourcesInput() {
    return this._ignoredRiskResources;
  }

  // ignored_sensitive_resources - computed: false, optional: true, required: false
  private _ignoredSensitiveResources?: string[]; 
  public get ignoredSensitiveResources() {
    return this.getListAttribute('ignored_sensitive_resources');
  }
  public set ignoredSensitiveResources(value: string[]) {
    this._ignoredSensitiveResources = value;
  }
  public resetIgnoredSensitiveResources() {
    this._ignoredSensitiveResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredSensitiveResourcesInput() {
    return this._ignoredSensitiveResources;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // kube_cis_enabled - computed: false, optional: true, required: false
  private _kubeCisEnabled?: boolean | cdktf.IResolvable; 
  public get kubeCisEnabled() {
    return this.getBooleanAttribute('kube_cis_enabled');
  }
  public set kubeCisEnabled(value: boolean | cdktf.IResolvable) {
    this._kubeCisEnabled = value;
  }
  public resetKubeCisEnabled() {
    this._kubeCisEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeCisEnabledInput() {
    return this._kubeCisEnabled;
  }

  // kubernetes_controls - computed: false, optional: true, required: false
  private _kubernetesControls?: string[]; 
  public get kubernetesControls() {
    return this.getListAttribute('kubernetes_controls');
  }
  public set kubernetesControls(value: string[]) {
    this._kubernetesControls = value;
  }
  public resetKubernetesControls() {
    this._kubernetesControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesControlsInput() {
    return this._kubernetesControls;
  }

  // kubernetes_controls_avd_ids - computed: false, optional: true, required: false
  private _kubernetesControlsAvdIds?: string[]; 
  public get kubernetesControlsAvdIds() {
    return this.getListAttribute('kubernetes_controls_avd_ids');
  }
  public set kubernetesControlsAvdIds(value: string[]) {
    this._kubernetesControlsAvdIds = value;
  }
  public resetKubernetesControlsAvdIds() {
    this._kubernetesControlsAvdIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesControlsAvdIdsInput() {
    return this._kubernetesControlsAvdIds;
  }

  // kubernetes_controls_names - computed: false, optional: true, required: false
  private _kubernetesControlsNames?: string[]; 
  public get kubernetesControlsNames() {
    return this.getListAttribute('kubernetes_controls_names');
  }
  public set kubernetesControlsNames(value: string[]) {
    this._kubernetesControlsNames = value;
  }
  public resetKubernetesControlsNames() {
    this._kubernetesControlsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesControlsNamesInput() {
    return this._kubernetesControlsNames;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // lastupdate - computed: true, optional: true, required: false
  private _lastupdate?: string; 
  public get lastupdate() {
    return this.getStringAttribute('lastupdate');
  }
  public set lastupdate(value: string) {
    this._lastupdate = value;
  }
  public resetLastupdate() {
    this._lastupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastupdateInput() {
    return this._lastupdate;
  }

  // linux_cis_enabled - computed: false, optional: true, required: false
  private _linuxCisEnabled?: boolean | cdktf.IResolvable; 
  public get linuxCisEnabled() {
    return this.getBooleanAttribute('linux_cis_enabled');
  }
  public set linuxCisEnabled(value: boolean | cdktf.IResolvable) {
    this._linuxCisEnabled = value;
  }
  public resetLinuxCisEnabled() {
    this._linuxCisEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxCisEnabledInput() {
    return this._linuxCisEnabled;
  }

  // malware_action - computed: false, optional: true, required: false
  private _malwareAction?: string; 
  public get malwareAction() {
    return this.getStringAttribute('malware_action');
  }
  public set malwareAction(value: string) {
    this._malwareAction = value;
  }
  public resetMalwareAction() {
    this._malwareAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareActionInput() {
    return this._malwareAction;
  }

  // maximum_score - computed: false, optional: true, required: false
  private _maximumScore?: number; 
  public get maximumScore() {
    return this.getNumberAttribute('maximum_score');
  }
  public set maximumScore(value: number) {
    this._maximumScore = value;
  }
  public resetMaximumScore() {
    this._maximumScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumScoreInput() {
    return this._maximumScore;
  }

  // maximum_score_enabled - computed: false, optional: true, required: false
  private _maximumScoreEnabled?: boolean | cdktf.IResolvable; 
  public get maximumScoreEnabled() {
    return this.getBooleanAttribute('maximum_score_enabled');
  }
  public set maximumScoreEnabled(value: boolean | cdktf.IResolvable) {
    this._maximumScoreEnabled = value;
  }
  public resetMaximumScoreEnabled() {
    this._maximumScoreEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumScoreEnabledInput() {
    return this._maximumScoreEnabled;
  }

  // maximum_score_exclude_no_fix - computed: false, optional: true, required: false
  private _maximumScoreExcludeNoFix?: boolean | cdktf.IResolvable; 
  public get maximumScoreExcludeNoFix() {
    return this.getBooleanAttribute('maximum_score_exclude_no_fix');
  }
  public set maximumScoreExcludeNoFix(value: boolean | cdktf.IResolvable) {
    this._maximumScoreExcludeNoFix = value;
  }
  public resetMaximumScoreExcludeNoFix() {
    this._maximumScoreExcludeNoFix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumScoreExcludeNoFixInput() {
    return this._maximumScoreExcludeNoFix;
  }

  // monitored_malware_paths - computed: false, optional: true, required: false
  private _monitoredMalwarePaths?: string[]; 
  public get monitoredMalwarePaths() {
    return this.getListAttribute('monitored_malware_paths');
  }
  public set monitoredMalwarePaths(value: string[]) {
    this._monitoredMalwarePaths = value;
  }
  public resetMonitoredMalwarePaths() {
    this._monitoredMalwarePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredMalwarePathsInput() {
    return this._monitoredMalwarePaths;
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

  // only_none_root_users - computed: false, optional: true, required: false
  private _onlyNoneRootUsers?: boolean | cdktf.IResolvable; 
  public get onlyNoneRootUsers() {
    return this.getBooleanAttribute('only_none_root_users');
  }
  public set onlyNoneRootUsers(value: boolean | cdktf.IResolvable) {
    this._onlyNoneRootUsers = value;
  }
  public resetOnlyNoneRootUsers() {
    this._onlyNoneRootUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyNoneRootUsersInput() {
    return this._onlyNoneRootUsers;
  }

  // openshift_hardening_enabled - computed: false, optional: true, required: false
  private _openshiftHardeningEnabled?: boolean | cdktf.IResolvable; 
  public get openshiftHardeningEnabled() {
    return this.getBooleanAttribute('openshift_hardening_enabled');
  }
  public set openshiftHardeningEnabled(value: boolean | cdktf.IResolvable) {
    this._openshiftHardeningEnabled = value;
  }
  public resetOpenshiftHardeningEnabled() {
    this._openshiftHardeningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftHardeningEnabledInput() {
    return this._openshiftHardeningEnabled;
  }

  // packages_black_list_enabled - computed: false, optional: true, required: false
  private _packagesBlackListEnabled?: boolean | cdktf.IResolvable; 
  public get packagesBlackListEnabled() {
    return this.getBooleanAttribute('packages_black_list_enabled');
  }
  public set packagesBlackListEnabled(value: boolean | cdktf.IResolvable) {
    this._packagesBlackListEnabled = value;
  }
  public resetPackagesBlackListEnabled() {
    this._packagesBlackListEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesBlackListEnabledInput() {
    return this._packagesBlackListEnabled;
  }

  // packages_white_list_enabled - computed: false, optional: true, required: false
  private _packagesWhiteListEnabled?: boolean | cdktf.IResolvable; 
  public get packagesWhiteListEnabled() {
    return this.getBooleanAttribute('packages_white_list_enabled');
  }
  public set packagesWhiteListEnabled(value: boolean | cdktf.IResolvable) {
    this._packagesWhiteListEnabled = value;
  }
  public resetPackagesWhiteListEnabled() {
    this._packagesWhiteListEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesWhiteListEnabledInput() {
    return this._packagesWhiteListEnabled;
  }

  // partial_results_image_fail - computed: false, optional: true, required: false
  private _partialResultsImageFail?: boolean | cdktf.IResolvable; 
  public get partialResultsImageFail() {
    return this.getBooleanAttribute('partial_results_image_fail');
  }
  public set partialResultsImageFail(value: boolean | cdktf.IResolvable) {
    this._partialResultsImageFail = value;
  }
  public resetPartialResultsImageFail() {
    this._partialResultsImageFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialResultsImageFailInput() {
    return this._partialResultsImageFail;
  }

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // registries - computed: false, optional: true, required: false
  private _registries?: string[]; 
  public get registries() {
    return this.getListAttribute('registries');
  }
  public set registries(value: string[]) {
    this._registries = value;
  }
  public resetRegistries() {
    this._registries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registriesInput() {
    return this._registries;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // required_labels_enabled - computed: false, optional: true, required: false
  private _requiredLabelsEnabled?: boolean | cdktf.IResolvable; 
  public get requiredLabelsEnabled() {
    return this.getBooleanAttribute('required_labels_enabled');
  }
  public set requiredLabelsEnabled(value: boolean | cdktf.IResolvable) {
    this._requiredLabelsEnabled = value;
  }
  public resetRequiredLabelsEnabled() {
    this._requiredLabelsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredLabelsEnabledInput() {
    return this._requiredLabelsEnabled;
  }

  // scan_malware_in_archives - computed: false, optional: true, required: false
  private _scanMalwareInArchives?: boolean | cdktf.IResolvable; 
  public get scanMalwareInArchives() {
    return this.getBooleanAttribute('scan_malware_in_archives');
  }
  public set scanMalwareInArchives(value: boolean | cdktf.IResolvable) {
    this._scanMalwareInArchives = value;
  }
  public resetScanMalwareInArchives() {
    this._scanMalwareInArchives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanMalwareInArchivesInput() {
    return this._scanMalwareInArchives;
  }

  // scan_nfs_mounts - computed: false, optional: true, required: false
  private _scanNfsMounts?: boolean | cdktf.IResolvable; 
  public get scanNfsMounts() {
    return this.getBooleanAttribute('scan_nfs_mounts');
  }
  public set scanNfsMounts(value: boolean | cdktf.IResolvable) {
    this._scanNfsMounts = value;
  }
  public resetScanNfsMounts() {
    this._scanNfsMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanNfsMountsInput() {
    return this._scanNfsMounts;
  }

  // scan_process_memory - computed: false, optional: true, required: false
  private _scanProcessMemory?: boolean | cdktf.IResolvable; 
  public get scanProcessMemory() {
    return this.getBooleanAttribute('scan_process_memory');
  }
  public set scanProcessMemory(value: boolean | cdktf.IResolvable) {
    this._scanProcessMemory = value;
  }
  public resetScanProcessMemory() {
    this._scanProcessMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanProcessMemoryInput() {
    return this._scanProcessMemory;
  }

  // scan_sensitive_data - computed: false, optional: true, required: false
  private _scanSensitiveData?: boolean | cdktf.IResolvable; 
  public get scanSensitiveData() {
    return this.getBooleanAttribute('scan_sensitive_data');
  }
  public set scanSensitiveData(value: boolean | cdktf.IResolvable) {
    this._scanSensitiveData = value;
  }
  public resetScanSensitiveData() {
    this._scanSensitiveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanSensitiveDataInput() {
    return this._scanSensitiveData;
  }

  // scan_windows_registry - computed: false, optional: true, required: false
  private _scanWindowsRegistry?: boolean | cdktf.IResolvable; 
  public get scanWindowsRegistry() {
    return this.getBooleanAttribute('scan_windows_registry');
  }
  public set scanWindowsRegistry(value: boolean | cdktf.IResolvable) {
    this._scanWindowsRegistry = value;
  }
  public resetScanWindowsRegistry() {
    this._scanWindowsRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanWindowsRegistryInput() {
    return this._scanWindowsRegistry;
  }

  // scap_enabled - computed: false, optional: true, required: false
  private _scapEnabled?: boolean | cdktf.IResolvable; 
  public get scapEnabled() {
    return this.getBooleanAttribute('scap_enabled');
  }
  public set scapEnabled(value: boolean | cdktf.IResolvable) {
    this._scapEnabled = value;
  }
  public resetScapEnabled() {
    this._scapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scapEnabledInput() {
    return this._scapEnabled;
  }

  // scap_files - computed: false, optional: true, required: false
  private _scapFiles?: string[]; 
  public get scapFiles() {
    return this.getListAttribute('scap_files');
  }
  public set scapFiles(value: string[]) {
    this._scapFiles = value;
  }
  public resetScapFiles() {
    this._scapFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scapFilesInput() {
    return this._scapFiles;
  }

  // trusted_base_images_enabled - computed: false, optional: true, required: false
  private _trustedBaseImagesEnabled?: boolean | cdktf.IResolvable; 
  public get trustedBaseImagesEnabled() {
    return this.getBooleanAttribute('trusted_base_images_enabled');
  }
  public set trustedBaseImagesEnabled(value: boolean | cdktf.IResolvable) {
    this._trustedBaseImagesEnabled = value;
  }
  public resetTrustedBaseImagesEnabled() {
    this._trustedBaseImagesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedBaseImagesEnabledInput() {
    return this._trustedBaseImagesEnabled;
  }

  // vulnerability_exploitability - computed: false, optional: true, required: false
  private _vulnerabilityExploitability?: boolean | cdktf.IResolvable; 
  public get vulnerabilityExploitability() {
    return this.getBooleanAttribute('vulnerability_exploitability');
  }
  public set vulnerabilityExploitability(value: boolean | cdktf.IResolvable) {
    this._vulnerabilityExploitability = value;
  }
  public resetVulnerabilityExploitability() {
    this._vulnerabilityExploitability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityExploitabilityInput() {
    return this._vulnerabilityExploitability;
  }

  // vulnerability_score_range - computed: true, optional: true, required: false
  private _vulnerabilityScoreRange?: number[]; 
  public get vulnerabilityScoreRange() {
    return this.getNumberListAttribute('vulnerability_score_range');
  }
  public set vulnerabilityScoreRange(value: number[]) {
    this._vulnerabilityScoreRange = value;
  }
  public resetVulnerabilityScoreRange() {
    this._vulnerabilityScoreRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityScoreRangeInput() {
    return this._vulnerabilityScoreRange;
  }

  // whitelisted_licenses - computed: false, optional: true, required: false
  private _whitelistedLicenses?: string[]; 
  public get whitelistedLicenses() {
    return this.getListAttribute('whitelisted_licenses');
  }
  public set whitelistedLicenses(value: string[]) {
    this._whitelistedLicenses = value;
  }
  public resetWhitelistedLicenses() {
    this._whitelistedLicenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedLicensesInput() {
    return this._whitelistedLicenses;
  }

  // whitelisted_licenses_enabled - computed: false, optional: true, required: false
  private _whitelistedLicensesEnabled?: boolean | cdktf.IResolvable; 
  public get whitelistedLicensesEnabled() {
    return this.getBooleanAttribute('whitelisted_licenses_enabled');
  }
  public set whitelistedLicensesEnabled(value: boolean | cdktf.IResolvable) {
    this._whitelistedLicensesEnabled = value;
  }
  public resetWhitelistedLicensesEnabled() {
    this._whitelistedLicensesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedLicensesEnabledInput() {
    return this._whitelistedLicensesEnabled;
  }

  // windows_cis_enabled - computed: false, optional: true, required: false
  private _windowsCisEnabled?: boolean | cdktf.IResolvable; 
  public get windowsCisEnabled() {
    return this.getBooleanAttribute('windows_cis_enabled');
  }
  public set windowsCisEnabled(value: boolean | cdktf.IResolvable) {
    this._windowsCisEnabled = value;
  }
  public resetWindowsCisEnabled() {
    this._windowsCisEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsCisEnabledInput() {
    return this._windowsCisEnabled;
  }

  // auto_scan_time - computed: false, optional: true, required: false
  private _autoScanTime = new HostAssurancePolicyAutoScanTimeList(this, "auto_scan_time", true);
  public get autoScanTime() {
    return this._autoScanTime;
  }
  public putAutoScanTime(value: HostAssurancePolicyAutoScanTime[] | cdktf.IResolvable) {
    this._autoScanTime.internalValue = value;
  }
  public resetAutoScanTime() {
    this._autoScanTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScanTimeInput() {
    return this._autoScanTime.internalValue;
  }

  // custom_checks - computed: false, optional: true, required: false
  private _customChecks = new HostAssurancePolicyCustomChecksList(this, "custom_checks", false);
  public get customChecks() {
    return this._customChecks;
  }
  public putCustomChecks(value: HostAssurancePolicyCustomChecks[] | cdktf.IResolvable) {
    this._customChecks.internalValue = value;
  }
  public resetCustomChecks() {
    this._customChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customChecksInput() {
    return this._customChecks.internalValue;
  }

  // forbidden_labels - computed: false, optional: true, required: false
  private _forbiddenLabels = new HostAssurancePolicyForbiddenLabelsList(this, "forbidden_labels", true);
  public get forbiddenLabels() {
    return this._forbiddenLabels;
  }
  public putForbiddenLabels(value: HostAssurancePolicyForbiddenLabels[] | cdktf.IResolvable) {
    this._forbiddenLabels.internalValue = value;
  }
  public resetForbiddenLabels() {
    this._forbiddenLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenLabelsInput() {
    return this._forbiddenLabels.internalValue;
  }

  // packages_black_list - computed: false, optional: true, required: false
  private _packagesBlackList = new HostAssurancePolicyPackagesBlackListStructList(this, "packages_black_list", true);
  public get packagesBlackList() {
    return this._packagesBlackList;
  }
  public putPackagesBlackList(value: HostAssurancePolicyPackagesBlackListStruct[] | cdktf.IResolvable) {
    this._packagesBlackList.internalValue = value;
  }
  public resetPackagesBlackList() {
    this._packagesBlackList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesBlackListInput() {
    return this._packagesBlackList.internalValue;
  }

  // packages_white_list - computed: false, optional: true, required: false
  private _packagesWhiteList = new HostAssurancePolicyPackagesWhiteListStructList(this, "packages_white_list", true);
  public get packagesWhiteList() {
    return this._packagesWhiteList;
  }
  public putPackagesWhiteList(value: HostAssurancePolicyPackagesWhiteListStruct[] | cdktf.IResolvable) {
    this._packagesWhiteList.internalValue = value;
  }
  public resetPackagesWhiteList() {
    this._packagesWhiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesWhiteListInput() {
    return this._packagesWhiteList.internalValue;
  }

  // policy_settings - computed: false, optional: true, required: false
  private _policySettings = new HostAssurancePolicyPolicySettingsOutputReference(this, "policy_settings");
  public get policySettings() {
    return this._policySettings;
  }
  public putPolicySettings(value: HostAssurancePolicyPolicySettings) {
    this._policySettings.internalValue = value;
  }
  public resetPolicySettings() {
    this._policySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySettingsInput() {
    return this._policySettings.internalValue;
  }

  // required_labels - computed: false, optional: true, required: false
  private _requiredLabels = new HostAssurancePolicyRequiredLabelsList(this, "required_labels", true);
  public get requiredLabels() {
    return this._requiredLabels;
  }
  public putRequiredLabels(value: HostAssurancePolicyRequiredLabels[] | cdktf.IResolvable) {
    this._requiredLabels.internalValue = value;
  }
  public resetRequiredLabels() {
    this._requiredLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredLabelsInput() {
    return this._requiredLabels.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new HostAssurancePolicyScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }
  public putScope(value: HostAssurancePolicyScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // trusted_base_images - computed: false, optional: true, required: false
  private _trustedBaseImages = new HostAssurancePolicyTrustedBaseImagesList(this, "trusted_base_images", true);
  public get trustedBaseImages() {
    return this._trustedBaseImages;
  }
  public putTrustedBaseImages(value: HostAssurancePolicyTrustedBaseImages[] | cdktf.IResolvable) {
    this._trustedBaseImages.internalValue = value;
  }
  public resetTrustedBaseImages() {
    this._trustedBaseImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedBaseImagesInput() {
    return this._trustedBaseImages.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregated_vulnerability: cdktf.hashMapper(cdktf.stringToTerraform)(this._aggregatedVulnerability),
      allowed_images: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedImages),
      application_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationScopes),
      assurance_type: cdktf.stringToTerraform(this._assuranceType),
      audit_on_failure: cdktf.booleanToTerraform(this._auditOnFailure),
      author: cdktf.stringToTerraform(this._author),
      auto_scan_configured: cdktf.booleanToTerraform(this._autoScanConfigured),
      auto_scan_enabled: cdktf.booleanToTerraform(this._autoScanEnabled),
      blacklist_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blacklistPermissions),
      blacklist_permissions_enabled: cdktf.booleanToTerraform(this._blacklistPermissionsEnabled),
      blacklisted_licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blacklistedLicenses),
      blacklisted_licenses_enabled: cdktf.booleanToTerraform(this._blacklistedLicensesEnabled),
      block_failed: cdktf.booleanToTerraform(this._blockFailed),
      control_exclude_no_fix: cdktf.booleanToTerraform(this._controlExcludeNoFix),
      custom_checks_enabled: cdktf.booleanToTerraform(this._customChecksEnabled),
      custom_severity: cdktf.stringToTerraform(this._customSeverity),
      custom_severity_enabled: cdktf.booleanToTerraform(this._customSeverityEnabled),
      cves_black_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cvesBlackList),
      cves_black_list_enabled: cdktf.booleanToTerraform(this._cvesBlackListEnabled),
      cves_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cvesWhiteList),
      cves_white_list_enabled: cdktf.booleanToTerraform(this._cvesWhiteListEnabled),
      cvss_severity: cdktf.stringToTerraform(this._cvssSeverity),
      cvss_severity_enabled: cdktf.booleanToTerraform(this._cvssSeverityEnabled),
      cvss_severity_exclude_no_fix: cdktf.booleanToTerraform(this._cvssSeverityExcludeNoFix),
      description: cdktf.stringToTerraform(this._description),
      disallow_exploit_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disallowExploitTypes),
      disallow_malware: cdktf.booleanToTerraform(this._disallowMalware),
      docker_cis_enabled: cdktf.booleanToTerraform(this._dockerCisEnabled),
      domain: cdktf.stringToTerraform(this._domain),
      domain_name: cdktf.stringToTerraform(this._domainName),
      dta_enabled: cdktf.booleanToTerraform(this._dtaEnabled),
      dta_severity: cdktf.stringToTerraform(this._dtaSeverity),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enforce: cdktf.booleanToTerraform(this._enforce),
      enforce_after_days: cdktf.numberToTerraform(this._enforceAfterDays),
      enforce_excessive_permissions: cdktf.booleanToTerraform(this._enforceExcessivePermissions),
      exceptional_monitored_malware_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exceptionalMonitoredMalwarePaths),
      exclude_application_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeApplicationScopes),
      fail_cicd: cdktf.booleanToTerraform(this._failCicd),
      forbidden_labels_enabled: cdktf.booleanToTerraform(this._forbiddenLabelsEnabled),
      force_microenforcer: cdktf.booleanToTerraform(this._forceMicroenforcer),
      function_integrity_enabled: cdktf.booleanToTerraform(this._functionIntegrityEnabled),
      id: cdktf.stringToTerraform(this._id),
      ignore_base_image_vln: cdktf.booleanToTerraform(this._ignoreBaseImageVln),
      ignore_recently_published_fix_vln: cdktf.booleanToTerraform(this._ignoreRecentlyPublishedFixVln),
      ignore_recently_published_fix_vln_period: cdktf.numberToTerraform(this._ignoreRecentlyPublishedFixVlnPeriod),
      ignore_recently_published_vln: cdktf.booleanToTerraform(this._ignoreRecentlyPublishedVln),
      ignore_recently_published_vln_period: cdktf.numberToTerraform(this._ignoreRecentlyPublishedVlnPeriod),
      ignore_risk_resources_enabled: cdktf.booleanToTerraform(this._ignoreRiskResourcesEnabled),
      ignored_risk_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoredRiskResources),
      ignored_sensitive_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoredSensitiveResources),
      images: cdktf.listMapper(cdktf.stringToTerraform, false)(this._images),
      kube_cis_enabled: cdktf.booleanToTerraform(this._kubeCisEnabled),
      kubernetes_controls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kubernetesControls),
      kubernetes_controls_avd_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kubernetesControlsAvdIds),
      kubernetes_controls_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._kubernetesControlsNames),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      lastupdate: cdktf.stringToTerraform(this._lastupdate),
      linux_cis_enabled: cdktf.booleanToTerraform(this._linuxCisEnabled),
      malware_action: cdktf.stringToTerraform(this._malwareAction),
      maximum_score: cdktf.numberToTerraform(this._maximumScore),
      maximum_score_enabled: cdktf.booleanToTerraform(this._maximumScoreEnabled),
      maximum_score_exclude_no_fix: cdktf.booleanToTerraform(this._maximumScoreExcludeNoFix),
      monitored_malware_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitoredMalwarePaths),
      name: cdktf.stringToTerraform(this._name),
      only_none_root_users: cdktf.booleanToTerraform(this._onlyNoneRootUsers),
      openshift_hardening_enabled: cdktf.booleanToTerraform(this._openshiftHardeningEnabled),
      packages_black_list_enabled: cdktf.booleanToTerraform(this._packagesBlackListEnabled),
      packages_white_list_enabled: cdktf.booleanToTerraform(this._packagesWhiteListEnabled),
      partial_results_image_fail: cdktf.booleanToTerraform(this._partialResultsImageFail),
      permission: cdktf.stringToTerraform(this._permission),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      registries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._registries),
      registry: cdktf.stringToTerraform(this._registry),
      required_labels_enabled: cdktf.booleanToTerraform(this._requiredLabelsEnabled),
      scan_malware_in_archives: cdktf.booleanToTerraform(this._scanMalwareInArchives),
      scan_nfs_mounts: cdktf.booleanToTerraform(this._scanNfsMounts),
      scan_process_memory: cdktf.booleanToTerraform(this._scanProcessMemory),
      scan_sensitive_data: cdktf.booleanToTerraform(this._scanSensitiveData),
      scan_windows_registry: cdktf.booleanToTerraform(this._scanWindowsRegistry),
      scap_enabled: cdktf.booleanToTerraform(this._scapEnabled),
      scap_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scapFiles),
      trusted_base_images_enabled: cdktf.booleanToTerraform(this._trustedBaseImagesEnabled),
      vulnerability_exploitability: cdktf.booleanToTerraform(this._vulnerabilityExploitability),
      vulnerability_score_range: cdktf.listMapper(cdktf.numberToTerraform, false)(this._vulnerabilityScoreRange),
      whitelisted_licenses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._whitelistedLicenses),
      whitelisted_licenses_enabled: cdktf.booleanToTerraform(this._whitelistedLicensesEnabled),
      windows_cis_enabled: cdktf.booleanToTerraform(this._windowsCisEnabled),
      auto_scan_time: cdktf.listMapper(hostAssurancePolicyAutoScanTimeToTerraform, true)(this._autoScanTime.internalValue),
      custom_checks: cdktf.listMapper(hostAssurancePolicyCustomChecksToTerraform, true)(this._customChecks.internalValue),
      forbidden_labels: cdktf.listMapper(hostAssurancePolicyForbiddenLabelsToTerraform, true)(this._forbiddenLabels.internalValue),
      packages_black_list: cdktf.listMapper(hostAssurancePolicyPackagesBlackListStructToTerraform, true)(this._packagesBlackList.internalValue),
      packages_white_list: cdktf.listMapper(hostAssurancePolicyPackagesWhiteListStructToTerraform, true)(this._packagesWhiteList.internalValue),
      policy_settings: hostAssurancePolicyPolicySettingsToTerraform(this._policySettings.internalValue),
      required_labels: cdktf.listMapper(hostAssurancePolicyRequiredLabelsToTerraform, true)(this._requiredLabels.internalValue),
      scope: cdktf.listMapper(hostAssurancePolicyScopeToTerraform, true)(this._scope.internalValue),
      trusted_base_images: cdktf.listMapper(hostAssurancePolicyTrustedBaseImagesToTerraform, true)(this._trustedBaseImages.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregated_vulnerability: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._aggregatedVulnerability),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      allowed_images: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedImages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      application_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      assurance_type: {
        value: cdktf.stringToHclTerraform(this._assuranceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audit_on_failure: {
        value: cdktf.booleanToHclTerraform(this._auditOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      author: {
        value: cdktf.stringToHclTerraform(this._author),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_scan_configured: {
        value: cdktf.booleanToHclTerraform(this._autoScanConfigured),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_scan_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoScanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blacklist_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blacklistPermissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blacklist_permissions_enabled: {
        value: cdktf.booleanToHclTerraform(this._blacklistPermissionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blacklisted_licenses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blacklistedLicenses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blacklisted_licenses_enabled: {
        value: cdktf.booleanToHclTerraform(this._blacklistedLicensesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_failed: {
        value: cdktf.booleanToHclTerraform(this._blockFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      control_exclude_no_fix: {
        value: cdktf.booleanToHclTerraform(this._controlExcludeNoFix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_checks_enabled: {
        value: cdktf.booleanToHclTerraform(this._customChecksEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_severity: {
        value: cdktf.stringToHclTerraform(this._customSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_severity_enabled: {
        value: cdktf.booleanToHclTerraform(this._customSeverityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cves_black_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cvesBlackList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cves_black_list_enabled: {
        value: cdktf.booleanToHclTerraform(this._cvesBlackListEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cves_white_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cvesWhiteList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cves_white_list_enabled: {
        value: cdktf.booleanToHclTerraform(this._cvesWhiteListEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cvss_severity: {
        value: cdktf.stringToHclTerraform(this._cvssSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cvss_severity_enabled: {
        value: cdktf.booleanToHclTerraform(this._cvssSeverityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cvss_severity_exclude_no_fix: {
        value: cdktf.booleanToHclTerraform(this._cvssSeverityExcludeNoFix),
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
      disallow_exploit_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disallowExploitTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disallow_malware: {
        value: cdktf.booleanToHclTerraform(this._disallowMalware),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      docker_cis_enabled: {
        value: cdktf.booleanToHclTerraform(this._dockerCisEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dta_enabled: {
        value: cdktf.booleanToHclTerraform(this._dtaEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dta_severity: {
        value: cdktf.stringToHclTerraform(this._dtaSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce: {
        value: cdktf.booleanToHclTerraform(this._enforce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_after_days: {
        value: cdktf.numberToHclTerraform(this._enforceAfterDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enforce_excessive_permissions: {
        value: cdktf.booleanToHclTerraform(this._enforceExcessivePermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exceptional_monitored_malware_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exceptionalMonitoredMalwarePaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      exclude_application_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeApplicationScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fail_cicd: {
        value: cdktf.booleanToHclTerraform(this._failCicd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forbidden_labels_enabled: {
        value: cdktf.booleanToHclTerraform(this._forbiddenLabelsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_microenforcer: {
        value: cdktf.booleanToHclTerraform(this._forceMicroenforcer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      function_integrity_enabled: {
        value: cdktf.booleanToHclTerraform(this._functionIntegrityEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_base_image_vln: {
        value: cdktf.booleanToHclTerraform(this._ignoreBaseImageVln),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_recently_published_fix_vln: {
        value: cdktf.booleanToHclTerraform(this._ignoreRecentlyPublishedFixVln),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_recently_published_fix_vln_period: {
        value: cdktf.numberToHclTerraform(this._ignoreRecentlyPublishedFixVlnPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ignore_recently_published_vln: {
        value: cdktf.booleanToHclTerraform(this._ignoreRecentlyPublishedVln),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_recently_published_vln_period: {
        value: cdktf.numberToHclTerraform(this._ignoreRecentlyPublishedVlnPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ignore_risk_resources_enabled: {
        value: cdktf.booleanToHclTerraform(this._ignoreRiskResourcesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignored_risk_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoredRiskResources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ignored_sensitive_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoredSensitiveResources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      images: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._images),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      kube_cis_enabled: {
        value: cdktf.booleanToHclTerraform(this._kubeCisEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubernetes_controls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kubernetesControls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      kubernetes_controls_avd_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kubernetesControlsAvdIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      kubernetes_controls_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._kubernetesControlsNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lastupdate: {
        value: cdktf.stringToHclTerraform(this._lastupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linux_cis_enabled: {
        value: cdktf.booleanToHclTerraform(this._linuxCisEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      malware_action: {
        value: cdktf.stringToHclTerraform(this._malwareAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_score: {
        value: cdktf.numberToHclTerraform(this._maximumScore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_score_enabled: {
        value: cdktf.booleanToHclTerraform(this._maximumScoreEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_score_exclude_no_fix: {
        value: cdktf.booleanToHclTerraform(this._maximumScoreExcludeNoFix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitored_malware_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitoredMalwarePaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_none_root_users: {
        value: cdktf.booleanToHclTerraform(this._onlyNoneRootUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      openshift_hardening_enabled: {
        value: cdktf.booleanToHclTerraform(this._openshiftHardeningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      packages_black_list_enabled: {
        value: cdktf.booleanToHclTerraform(this._packagesBlackListEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      packages_white_list_enabled: {
        value: cdktf.booleanToHclTerraform(this._packagesWhiteListEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      partial_results_image_fail: {
        value: cdktf.booleanToHclTerraform(this._partialResultsImageFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._registries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      registry: {
        value: cdktf.stringToHclTerraform(this._registry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required_labels_enabled: {
        value: cdktf.booleanToHclTerraform(this._requiredLabelsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_malware_in_archives: {
        value: cdktf.booleanToHclTerraform(this._scanMalwareInArchives),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_nfs_mounts: {
        value: cdktf.booleanToHclTerraform(this._scanNfsMounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_process_memory: {
        value: cdktf.booleanToHclTerraform(this._scanProcessMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_sensitive_data: {
        value: cdktf.booleanToHclTerraform(this._scanSensitiveData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scan_windows_registry: {
        value: cdktf.booleanToHclTerraform(this._scanWindowsRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scap_enabled: {
        value: cdktf.booleanToHclTerraform(this._scapEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scap_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scapFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusted_base_images_enabled: {
        value: cdktf.booleanToHclTerraform(this._trustedBaseImagesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vulnerability_exploitability: {
        value: cdktf.booleanToHclTerraform(this._vulnerabilityExploitability),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vulnerability_score_range: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._vulnerabilityScoreRange),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      whitelisted_licenses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._whitelistedLicenses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      whitelisted_licenses_enabled: {
        value: cdktf.booleanToHclTerraform(this._whitelistedLicensesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      windows_cis_enabled: {
        value: cdktf.booleanToHclTerraform(this._windowsCisEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_scan_time: {
        value: cdktf.listMapperHcl(hostAssurancePolicyAutoScanTimeToHclTerraform, true)(this._autoScanTime.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HostAssurancePolicyAutoScanTimeList",
      },
      custom_checks: {
        value: cdktf.listMapperHcl(hostAssurancePolicyCustomChecksToHclTerraform, true)(this._customChecks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAssurancePolicyCustomChecksList",
      },
      forbidden_labels: {
        value: cdktf.listMapperHcl(hostAssurancePolicyForbiddenLabelsToHclTerraform, true)(this._forbiddenLabels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HostAssurancePolicyForbiddenLabelsList",
      },
      packages_black_list: {
        value: cdktf.listMapperHcl(hostAssurancePolicyPackagesBlackListStructToHclTerraform, true)(this._packagesBlackList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HostAssurancePolicyPackagesBlackListStructList",
      },
      packages_white_list: {
        value: cdktf.listMapperHcl(hostAssurancePolicyPackagesWhiteListStructToHclTerraform, true)(this._packagesWhiteList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HostAssurancePolicyPackagesWhiteListStructList",
      },
      policy_settings: {
        value: hostAssurancePolicyPolicySettingsToHclTerraform(this._policySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HostAssurancePolicyPolicySettingsList",
      },
      required_labels: {
        value: cdktf.listMapperHcl(hostAssurancePolicyRequiredLabelsToHclTerraform, true)(this._requiredLabels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HostAssurancePolicyRequiredLabelsList",
      },
      scope: {
        value: cdktf.listMapperHcl(hostAssurancePolicyScopeToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HostAssurancePolicyScopeList",
      },
      trusted_base_images: {
        value: cdktf.listMapperHcl(hostAssurancePolicyTrustedBaseImagesToHclTerraform, true)(this._trustedBaseImages.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HostAssurancePolicyTrustedBaseImagesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
