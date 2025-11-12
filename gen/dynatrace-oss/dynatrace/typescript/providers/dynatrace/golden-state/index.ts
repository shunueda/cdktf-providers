// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoldenStateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IDs for resource of type `dynatrace_aix_extension` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_aix_extension GoldenState#dynatrace_aix_extension}
  */
  readonly dynatraceAixExtension?: string[];
  /**
  * The IDs for resource of type `dynatrace_alerting` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_alerting GoldenState#dynatrace_alerting}
  */
  readonly dynatraceAlerting?: string[];
  /**
  * The IDs for resource of type `dynatrace_ansible_tower_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_ansible_tower_notification GoldenState#dynatrace_ansible_tower_notification}
  */
  readonly dynatraceAnsibleTowerNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_application_detection_rule` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_application_detection_rule GoldenState#dynatrace_application_detection_rule}
  */
  readonly dynatraceApplicationDetectionRule?: string[];
  /**
  * The IDs for resource of type `dynatrace_application_error_rules` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_application_error_rules GoldenState#dynatrace_application_error_rules}
  */
  readonly dynatraceApplicationErrorRules?: string[];
  /**
  * The IDs for resource of type `dynatrace_autotag_v2` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_autotag_v2 GoldenState#dynatrace_autotag_v2}
  */
  readonly dynatraceAutotagV2?: string[];
  /**
  * The IDs for resource of type `dynatrace_aws_credentials` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_aws_credentials GoldenState#dynatrace_aws_credentials}
  */
  readonly dynatraceAwsCredentials?: string[];
  /**
  * The IDs for resource of type `dynatrace_azure_credentials` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_azure_credentials GoldenState#dynatrace_azure_credentials}
  */
  readonly dynatraceAzureCredentials?: string[];
  /**
  * The IDs for resource of type `dynatrace_browser_monitor` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_browser_monitor GoldenState#dynatrace_browser_monitor}
  */
  readonly dynatraceBrowserMonitor?: string[];
  /**
  * The IDs for resource of type `dynatrace_calculated_mobile_metric` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_calculated_mobile_metric GoldenState#dynatrace_calculated_mobile_metric}
  */
  readonly dynatraceCalculatedMobileMetric?: string[];
  /**
  * The IDs for resource of type `dynatrace_calculated_service_metric` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_calculated_service_metric GoldenState#dynatrace_calculated_service_metric}
  */
  readonly dynatraceCalculatedServiceMetric?: string[];
  /**
  * The IDs for resource of type `dynatrace_calculated_synthetic_metric` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_calculated_synthetic_metric GoldenState#dynatrace_calculated_synthetic_metric}
  */
  readonly dynatraceCalculatedSyntheticMetric?: string[];
  /**
  * The IDs for resource of type `dynatrace_calculated_web_metric` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_calculated_web_metric GoldenState#dynatrace_calculated_web_metric}
  */
  readonly dynatraceCalculatedWebMetric?: string[];
  /**
  * The IDs for resource of type `dynatrace_credentials` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_credentials GoldenState#dynatrace_credentials}
  */
  readonly dynatraceCredentials?: string[];
  /**
  * The IDs for resource of type `dynatrace_custom_app_anomalies` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_custom_app_anomalies GoldenState#dynatrace_custom_app_anomalies}
  */
  readonly dynatraceCustomAppAnomalies?: string[];
  /**
  * The IDs for resource of type `dynatrace_custom_app_crash_rate` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_custom_app_crash_rate GoldenState#dynatrace_custom_app_crash_rate}
  */
  readonly dynatraceCustomAppCrashRate?: string[];
  /**
  * The IDs for resource of type `dynatrace_custom_app_enablement` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_custom_app_enablement GoldenState#dynatrace_custom_app_enablement}
  */
  readonly dynatraceCustomAppEnablement?: string[];
  /**
  * The IDs for resource of type `dynatrace_custom_service` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_custom_service GoldenState#dynatrace_custom_service}
  */
  readonly dynatraceCustomService?: string[];
  /**
  * The IDs for resource of type `dynatrace_data_privacy` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_data_privacy GoldenState#dynatrace_data_privacy}
  */
  readonly dynatraceDataPrivacy?: string[];
  /**
  * The IDs for resource of type `dynatrace_database_anomalies_v2` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_database_anomalies_v2 GoldenState#dynatrace_database_anomalies_v2}
  */
  readonly dynatraceDatabaseAnomaliesV2?: string[];
  /**
  * The IDs for resource of type `dynatrace_declarative_grouping` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_declarative_grouping GoldenState#dynatrace_declarative_grouping}
  */
  readonly dynatraceDeclarativeGrouping?: string[];
  /**
  * The IDs for resource of type `dynatrace_disk_anomalies_v2` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_disk_anomalies_v2 GoldenState#dynatrace_disk_anomalies_v2}
  */
  readonly dynatraceDiskAnomaliesV2?: string[];
  /**
  * The IDs for resource of type `dynatrace_disk_options` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_disk_options GoldenState#dynatrace_disk_options}
  */
  readonly dynatraceDiskOptions?: string[];
  /**
  * The IDs for resource of type `dynatrace_disk_specific_anomalies_v2` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_disk_specific_anomalies_v2 GoldenState#dynatrace_disk_specific_anomalies_v2}
  */
  readonly dynatraceDiskSpecificAnomaliesV2?: string[];
  /**
  * The IDs for resource of type `dynatrace_email_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_email_notification GoldenState#dynatrace_email_notification}
  */
  readonly dynatraceEmailNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_extension_execution_controller` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_extension_execution_controller GoldenState#dynatrace_extension_execution_controller}
  */
  readonly dynatraceExtensionExecutionController?: string[];
  /**
  * The IDs for resource of type `dynatrace_generic_types` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_generic_types GoldenState#dynatrace_generic_types}
  */
  readonly dynatraceGenericTypes?: string[];
  /**
  * The IDs for resource of type `dynatrace_host_anomalies_v2` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_host_anomalies_v2 GoldenState#dynatrace_host_anomalies_v2}
  */
  readonly dynatraceHostAnomaliesV2?: string[];
  /**
  * The IDs for resource of type `dynatrace_host_naming` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_host_naming GoldenState#dynatrace_host_naming}
  */
  readonly dynatraceHostNaming?: string[];
  /**
  * The IDs for resource of type `dynatrace_host_process_group_monitoring` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_host_process_group_monitoring GoldenState#dynatrace_host_process_group_monitoring}
  */
  readonly dynatraceHostProcessGroupMonitoring?: string[];
  /**
  * The IDs for resource of type `dynatrace_http_monitor` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_http_monitor GoldenState#dynatrace_http_monitor}
  */
  readonly dynatraceHttpMonitor?: string[];
  /**
  * The IDs for resource of type `dynatrace_ims_bridges` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_ims_bridges GoldenState#dynatrace_ims_bridges}
  */
  readonly dynatraceImsBridges?: string[];
  /**
  * The IDs for resource of type `dynatrace_jira_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_jira_notification GoldenState#dynatrace_jira_notification}
  */
  readonly dynatraceJiraNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_k8s_namespace_anomalies` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_k8s_namespace_anomalies GoldenState#dynatrace_k8s_namespace_anomalies}
  */
  readonly dynatraceK8SNamespaceAnomalies?: string[];
  /**
  * The IDs for resource of type `dynatrace_key_requests` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_key_requests GoldenState#dynatrace_key_requests}
  */
  readonly dynatraceKeyRequests?: string[];
  /**
  * The IDs for resource of type `dynatrace_log_metrics` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_log_metrics GoldenState#dynatrace_log_metrics}
  */
  readonly dynatraceLogMetrics?: string[];
  /**
  * The IDs for resource of type `dynatrace_maintenance` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_maintenance GoldenState#dynatrace_maintenance}
  */
  readonly dynatraceMaintenance?: string[];
  /**
  * The IDs for resource of type `dynatrace_management_zone_v2` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_management_zone_v2 GoldenState#dynatrace_management_zone_v2}
  */
  readonly dynatraceManagementZoneV2?: string[];
  /**
  * The IDs for resource of type `dynatrace_metric_events` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_metric_events GoldenState#dynatrace_metric_events}
  */
  readonly dynatraceMetricEvents?: string[];
  /**
  * The IDs for resource of type `dynatrace_mobile_app_anomalies` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_mobile_app_anomalies GoldenState#dynatrace_mobile_app_anomalies}
  */
  readonly dynatraceMobileAppAnomalies?: string[];
  /**
  * The IDs for resource of type `dynatrace_mobile_app_crash_rate` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_mobile_app_crash_rate GoldenState#dynatrace_mobile_app_crash_rate}
  */
  readonly dynatraceMobileAppCrashRate?: string[];
  /**
  * The IDs for resource of type `dynatrace_mobile_app_enablement` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_mobile_app_enablement GoldenState#dynatrace_mobile_app_enablement}
  */
  readonly dynatraceMobileAppEnablement?: string[];
  /**
  * The IDs for resource of type `dynatrace_mobile_application` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_mobile_application GoldenState#dynatrace_mobile_application}
  */
  readonly dynatraceMobileApplication?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_apache` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_apache GoldenState#dynatrace_monitored_technologies_apache}
  */
  readonly dynatraceMonitoredTechnologiesApache?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_dotnet` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_dotnet GoldenState#dynatrace_monitored_technologies_dotnet}
  */
  readonly dynatraceMonitoredTechnologiesDotnet?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_go` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_go GoldenState#dynatrace_monitored_technologies_go}
  */
  readonly dynatraceMonitoredTechnologiesGo?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_iis` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_iis GoldenState#dynatrace_monitored_technologies_iis}
  */
  readonly dynatraceMonitoredTechnologiesIis?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_java` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_java GoldenState#dynatrace_monitored_technologies_java}
  */
  readonly dynatraceMonitoredTechnologiesJava?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_nginx` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_nginx GoldenState#dynatrace_monitored_technologies_nginx}
  */
  readonly dynatraceMonitoredTechnologiesNginx?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_nodejs` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_nodejs GoldenState#dynatrace_monitored_technologies_nodejs}
  */
  readonly dynatraceMonitoredTechnologiesNodejs?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_opentracing` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_opentracing GoldenState#dynatrace_monitored_technologies_opentracing}
  */
  readonly dynatraceMonitoredTechnologiesOpentracing?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_php` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_php GoldenState#dynatrace_monitored_technologies_php}
  */
  readonly dynatraceMonitoredTechnologiesPhp?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_varnish` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_varnish GoldenState#dynatrace_monitored_technologies_varnish}
  */
  readonly dynatraceMonitoredTechnologiesVarnish?: string[];
  /**
  * The IDs for resource of type `dynatrace_monitored_technologies_wsmb` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_monitored_technologies_wsmb GoldenState#dynatrace_monitored_technologies_wsmb}
  */
  readonly dynatraceMonitoredTechnologiesWsmb?: string[];
  /**
  * The IDs for resource of type `dynatrace_muted_requests` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_muted_requests GoldenState#dynatrace_muted_requests}
  */
  readonly dynatraceMutedRequests?: string[];
  /**
  * The IDs for resource of type `dynatrace_nettracer` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_nettracer GoldenState#dynatrace_nettracer}
  */
  readonly dynatraceNettracer?: string[];
  /**
  * The IDs for resource of type `dynatrace_oneagent_features` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_oneagent_features GoldenState#dynatrace_oneagent_features}
  */
  readonly dynatraceOneagentFeatures?: string[];
  /**
  * The IDs for resource of type `dynatrace_ops_genie_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_ops_genie_notification GoldenState#dynatrace_ops_genie_notification}
  */
  readonly dynatraceOpsGenieNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_pager_duty_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_pager_duty_notification GoldenState#dynatrace_pager_duty_notification}
  */
  readonly dynatracePagerDutyNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_pg_alerting` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_pg_alerting GoldenState#dynatrace_pg_alerting}
  */
  readonly dynatracePgAlerting?: string[];
  /**
  * The IDs for resource of type `dynatrace_process_availability` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_process_availability GoldenState#dynatrace_process_availability}
  */
  readonly dynatraceProcessAvailability?: string[];
  /**
  * The IDs for resource of type `dynatrace_process_group_detection` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_process_group_detection GoldenState#dynatrace_process_group_detection}
  */
  readonly dynatraceProcessGroupDetection?: string[];
  /**
  * The IDs for resource of type `dynatrace_process_group_detection_flags` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_process_group_detection_flags GoldenState#dynatrace_process_group_detection_flags}
  */
  readonly dynatraceProcessGroupDetectionFlags?: string[];
  /**
  * The IDs for resource of type `dynatrace_process_group_monitoring` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_process_group_monitoring GoldenState#dynatrace_process_group_monitoring}
  */
  readonly dynatraceProcessGroupMonitoring?: string[];
  /**
  * The IDs for resource of type `dynatrace_process_group_rum` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_process_group_rum GoldenState#dynatrace_process_group_rum}
  */
  readonly dynatraceProcessGroupRum?: string[];
  /**
  * The IDs for resource of type `dynatrace_process_group_simple_detection` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_process_group_simple_detection GoldenState#dynatrace_process_group_simple_detection}
  */
  readonly dynatraceProcessGroupSimpleDetection?: string[];
  /**
  * The IDs for resource of type `dynatrace_process_monitoring` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_process_monitoring GoldenState#dynatrace_process_monitoring}
  */
  readonly dynatraceProcessMonitoring?: string[];
  /**
  * The IDs for resource of type `dynatrace_process_monitoring_rule` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_process_monitoring_rule GoldenState#dynatrace_process_monitoring_rule}
  */
  readonly dynatraceProcessMonitoringRule?: string[];
  /**
  * The IDs for resource of type `dynatrace_process_visibility` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_process_visibility GoldenState#dynatrace_process_visibility}
  */
  readonly dynatraceProcessVisibility?: string[];
  /**
  * The IDs for resource of type `dynatrace_processgroup_naming` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_processgroup_naming GoldenState#dynatrace_processgroup_naming}
  */
  readonly dynatraceProcessgroupNaming?: string[];
  /**
  * The IDs for resource of type `dynatrace_queue_manager` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_queue_manager GoldenState#dynatrace_queue_manager}
  */
  readonly dynatraceQueueManager?: string[];
  /**
  * The IDs for resource of type `dynatrace_queue_sharing_groups` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_queue_sharing_groups GoldenState#dynatrace_queue_sharing_groups}
  */
  readonly dynatraceQueueSharingGroups?: string[];
  /**
  * The IDs for resource of type `dynatrace_request_attribute` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_request_attribute GoldenState#dynatrace_request_attribute}
  */
  readonly dynatraceRequestAttribute?: string[];
  /**
  * The IDs for resource of type `dynatrace_request_naming` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_request_naming GoldenState#dynatrace_request_naming}
  */
  readonly dynatraceRequestNaming?: string[];
  /**
  * The IDs for resource of type `dynatrace_rum_advanced_correlation` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_rum_advanced_correlation GoldenState#dynatrace_rum_advanced_correlation}
  */
  readonly dynatraceRumAdvancedCorrelation?: string[];
  /**
  * The IDs for resource of type `dynatrace_rum_ip_locations` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_rum_ip_locations GoldenState#dynatrace_rum_ip_locations}
  */
  readonly dynatraceRumIpLocations?: string[];
  /**
  * The IDs for resource of type `dynatrace_rum_provider_breakdown` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_rum_provider_breakdown GoldenState#dynatrace_rum_provider_breakdown}
  */
  readonly dynatraceRumProviderBreakdown?: string[];
  /**
  * The IDs for resource of type `dynatrace_service_failure` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_service_failure GoldenState#dynatrace_service_failure}
  */
  readonly dynatraceServiceFailure?: string[];
  /**
  * The IDs for resource of type `dynatrace_service_http_failure` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_service_http_failure GoldenState#dynatrace_service_http_failure}
  */
  readonly dynatraceServiceHttpFailure?: string[];
  /**
  * The IDs for resource of type `dynatrace_service_naming` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_service_naming GoldenState#dynatrace_service_naming}
  */
  readonly dynatraceServiceNaming?: string[];
  /**
  * The IDs for resource of type `dynatrace_service_now_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_service_now_notification GoldenState#dynatrace_service_now_notification}
  */
  readonly dynatraceServiceNowNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_session_replay_web_privacy` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_session_replay_web_privacy GoldenState#dynatrace_session_replay_web_privacy}
  */
  readonly dynatraceSessionReplayWebPrivacy?: string[];
  /**
  * The IDs for resource of type `dynatrace_slack_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_slack_notification GoldenState#dynatrace_slack_notification}
  */
  readonly dynatraceSlackNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_slo_v2` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_slo_v2 GoldenState#dynatrace_slo_v2}
  */
  readonly dynatraceSloV2?: string[];
  /**
  * The IDs for resource of type `dynatrace_span_capture_rule` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_span_capture_rule GoldenState#dynatrace_span_capture_rule}
  */
  readonly dynatraceSpanCaptureRule?: string[];
  /**
  * The IDs for resource of type `dynatrace_span_context_propagation` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_span_context_propagation GoldenState#dynatrace_span_context_propagation}
  */
  readonly dynatraceSpanContextPropagation?: string[];
  /**
  * The IDs for resource of type `dynatrace_synthetic_location` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_synthetic_location GoldenState#dynatrace_synthetic_location}
  */
  readonly dynatraceSyntheticLocation?: string[];
  /**
  * The IDs for resource of type `dynatrace_trello_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_trello_notification GoldenState#dynatrace_trello_notification}
  */
  readonly dynatraceTrelloNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_update_windows` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_update_windows GoldenState#dynatrace_update_windows}
  */
  readonly dynatraceUpdateWindows?: string[];
  /**
  * The IDs for resource of type `dynatrace_usability_analytics` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_usability_analytics GoldenState#dynatrace_usability_analytics}
  */
  readonly dynatraceUsabilityAnalytics?: string[];
  /**
  * The IDs for resource of type `dynatrace_victor_ops_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_victor_ops_notification GoldenState#dynatrace_victor_ops_notification}
  */
  readonly dynatraceVictorOpsNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_web_app_anomalies` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_web_app_anomalies GoldenState#dynatrace_web_app_anomalies}
  */
  readonly dynatraceWebAppAnomalies?: string[];
  /**
  * The IDs for resource of type `dynatrace_web_app_beacon_origins` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_web_app_beacon_origins GoldenState#dynatrace_web_app_beacon_origins}
  */
  readonly dynatraceWebAppBeaconOrigins?: string[];
  /**
  * The IDs for resource of type `dynatrace_web_app_enablement` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_web_app_enablement GoldenState#dynatrace_web_app_enablement}
  */
  readonly dynatraceWebAppEnablement?: string[];
  /**
  * The IDs for resource of type `dynatrace_web_app_resource_cleanup` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_web_app_resource_cleanup GoldenState#dynatrace_web_app_resource_cleanup}
  */
  readonly dynatraceWebAppResourceCleanup?: string[];
  /**
  * The IDs for resource of type `dynatrace_web_app_resource_types` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_web_app_resource_types GoldenState#dynatrace_web_app_resource_types}
  */
  readonly dynatraceWebAppResourceTypes?: string[];
  /**
  * The IDs for resource of type `dynatrace_web_application` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_web_application GoldenState#dynatrace_web_application}
  */
  readonly dynatraceWebApplication?: string[];
  /**
  * The IDs for resource of type `dynatrace_webhook_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_webhook_notification GoldenState#dynatrace_webhook_notification}
  */
  readonly dynatraceWebhookNotification?: string[];
  /**
  * The IDs for resource of type `dynatrace_xmatters_notification` this `dynatrace_golden_state` should ignore (and therefore neither warn about their existence nor attempt to delete them). Specify `[]` if you expect no such resources to exist in Dynatrace. Omit this attribute if you don't care about these kinds of resources regarding the golden state of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#dynatrace_xmatters_notification GoldenState#dynatrace_xmatters_notification}
  */
  readonly dynatraceXmattersNotification?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#id GoldenState#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible values are:
  * * `DELETE` if you want resources to automatally get deleted`n* `WARN` if you want to get notified about resources that aren't managed by Terraform via a warning message from this resource`
  * Default is `WARN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#mode GoldenState#mode}
  */
  readonly mode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state dynatrace_golden_state}
*/
export class GoldenState extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_golden_state";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoldenState resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoldenState to import
  * @param importFromId The id of the existing GoldenState that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoldenState to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_golden_state", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/golden_state dynatrace_golden_state} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoldenStateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoldenStateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_golden_state',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynatraceAixExtension = config.dynatraceAixExtension;
    this._dynatraceAlerting = config.dynatraceAlerting;
    this._dynatraceAnsibleTowerNotification = config.dynatraceAnsibleTowerNotification;
    this._dynatraceApplicationDetectionRule = config.dynatraceApplicationDetectionRule;
    this._dynatraceApplicationErrorRules = config.dynatraceApplicationErrorRules;
    this._dynatraceAutotagV2 = config.dynatraceAutotagV2;
    this._dynatraceAwsCredentials = config.dynatraceAwsCredentials;
    this._dynatraceAzureCredentials = config.dynatraceAzureCredentials;
    this._dynatraceBrowserMonitor = config.dynatraceBrowserMonitor;
    this._dynatraceCalculatedMobileMetric = config.dynatraceCalculatedMobileMetric;
    this._dynatraceCalculatedServiceMetric = config.dynatraceCalculatedServiceMetric;
    this._dynatraceCalculatedSyntheticMetric = config.dynatraceCalculatedSyntheticMetric;
    this._dynatraceCalculatedWebMetric = config.dynatraceCalculatedWebMetric;
    this._dynatraceCredentials = config.dynatraceCredentials;
    this._dynatraceCustomAppAnomalies = config.dynatraceCustomAppAnomalies;
    this._dynatraceCustomAppCrashRate = config.dynatraceCustomAppCrashRate;
    this._dynatraceCustomAppEnablement = config.dynatraceCustomAppEnablement;
    this._dynatraceCustomService = config.dynatraceCustomService;
    this._dynatraceDataPrivacy = config.dynatraceDataPrivacy;
    this._dynatraceDatabaseAnomaliesV2 = config.dynatraceDatabaseAnomaliesV2;
    this._dynatraceDeclarativeGrouping = config.dynatraceDeclarativeGrouping;
    this._dynatraceDiskAnomaliesV2 = config.dynatraceDiskAnomaliesV2;
    this._dynatraceDiskOptions = config.dynatraceDiskOptions;
    this._dynatraceDiskSpecificAnomaliesV2 = config.dynatraceDiskSpecificAnomaliesV2;
    this._dynatraceEmailNotification = config.dynatraceEmailNotification;
    this._dynatraceExtensionExecutionController = config.dynatraceExtensionExecutionController;
    this._dynatraceGenericTypes = config.dynatraceGenericTypes;
    this._dynatraceHostAnomaliesV2 = config.dynatraceHostAnomaliesV2;
    this._dynatraceHostNaming = config.dynatraceHostNaming;
    this._dynatraceHostProcessGroupMonitoring = config.dynatraceHostProcessGroupMonitoring;
    this._dynatraceHttpMonitor = config.dynatraceHttpMonitor;
    this._dynatraceImsBridges = config.dynatraceImsBridges;
    this._dynatraceJiraNotification = config.dynatraceJiraNotification;
    this._dynatraceK8SNamespaceAnomalies = config.dynatraceK8SNamespaceAnomalies;
    this._dynatraceKeyRequests = config.dynatraceKeyRequests;
    this._dynatraceLogMetrics = config.dynatraceLogMetrics;
    this._dynatraceMaintenance = config.dynatraceMaintenance;
    this._dynatraceManagementZoneV2 = config.dynatraceManagementZoneV2;
    this._dynatraceMetricEvents = config.dynatraceMetricEvents;
    this._dynatraceMobileAppAnomalies = config.dynatraceMobileAppAnomalies;
    this._dynatraceMobileAppCrashRate = config.dynatraceMobileAppCrashRate;
    this._dynatraceMobileAppEnablement = config.dynatraceMobileAppEnablement;
    this._dynatraceMobileApplication = config.dynatraceMobileApplication;
    this._dynatraceMonitoredTechnologiesApache = config.dynatraceMonitoredTechnologiesApache;
    this._dynatraceMonitoredTechnologiesDotnet = config.dynatraceMonitoredTechnologiesDotnet;
    this._dynatraceMonitoredTechnologiesGo = config.dynatraceMonitoredTechnologiesGo;
    this._dynatraceMonitoredTechnologiesIis = config.dynatraceMonitoredTechnologiesIis;
    this._dynatraceMonitoredTechnologiesJava = config.dynatraceMonitoredTechnologiesJava;
    this._dynatraceMonitoredTechnologiesNginx = config.dynatraceMonitoredTechnologiesNginx;
    this._dynatraceMonitoredTechnologiesNodejs = config.dynatraceMonitoredTechnologiesNodejs;
    this._dynatraceMonitoredTechnologiesOpentracing = config.dynatraceMonitoredTechnologiesOpentracing;
    this._dynatraceMonitoredTechnologiesPhp = config.dynatraceMonitoredTechnologiesPhp;
    this._dynatraceMonitoredTechnologiesVarnish = config.dynatraceMonitoredTechnologiesVarnish;
    this._dynatraceMonitoredTechnologiesWsmb = config.dynatraceMonitoredTechnologiesWsmb;
    this._dynatraceMutedRequests = config.dynatraceMutedRequests;
    this._dynatraceNettracer = config.dynatraceNettracer;
    this._dynatraceOneagentFeatures = config.dynatraceOneagentFeatures;
    this._dynatraceOpsGenieNotification = config.dynatraceOpsGenieNotification;
    this._dynatracePagerDutyNotification = config.dynatracePagerDutyNotification;
    this._dynatracePgAlerting = config.dynatracePgAlerting;
    this._dynatraceProcessAvailability = config.dynatraceProcessAvailability;
    this._dynatraceProcessGroupDetection = config.dynatraceProcessGroupDetection;
    this._dynatraceProcessGroupDetectionFlags = config.dynatraceProcessGroupDetectionFlags;
    this._dynatraceProcessGroupMonitoring = config.dynatraceProcessGroupMonitoring;
    this._dynatraceProcessGroupRum = config.dynatraceProcessGroupRum;
    this._dynatraceProcessGroupSimpleDetection = config.dynatraceProcessGroupSimpleDetection;
    this._dynatraceProcessMonitoring = config.dynatraceProcessMonitoring;
    this._dynatraceProcessMonitoringRule = config.dynatraceProcessMonitoringRule;
    this._dynatraceProcessVisibility = config.dynatraceProcessVisibility;
    this._dynatraceProcessgroupNaming = config.dynatraceProcessgroupNaming;
    this._dynatraceQueueManager = config.dynatraceQueueManager;
    this._dynatraceQueueSharingGroups = config.dynatraceQueueSharingGroups;
    this._dynatraceRequestAttribute = config.dynatraceRequestAttribute;
    this._dynatraceRequestNaming = config.dynatraceRequestNaming;
    this._dynatraceRumAdvancedCorrelation = config.dynatraceRumAdvancedCorrelation;
    this._dynatraceRumIpLocations = config.dynatraceRumIpLocations;
    this._dynatraceRumProviderBreakdown = config.dynatraceRumProviderBreakdown;
    this._dynatraceServiceFailure = config.dynatraceServiceFailure;
    this._dynatraceServiceHttpFailure = config.dynatraceServiceHttpFailure;
    this._dynatraceServiceNaming = config.dynatraceServiceNaming;
    this._dynatraceServiceNowNotification = config.dynatraceServiceNowNotification;
    this._dynatraceSessionReplayWebPrivacy = config.dynatraceSessionReplayWebPrivacy;
    this._dynatraceSlackNotification = config.dynatraceSlackNotification;
    this._dynatraceSloV2 = config.dynatraceSloV2;
    this._dynatraceSpanCaptureRule = config.dynatraceSpanCaptureRule;
    this._dynatraceSpanContextPropagation = config.dynatraceSpanContextPropagation;
    this._dynatraceSyntheticLocation = config.dynatraceSyntheticLocation;
    this._dynatraceTrelloNotification = config.dynatraceTrelloNotification;
    this._dynatraceUpdateWindows = config.dynatraceUpdateWindows;
    this._dynatraceUsabilityAnalytics = config.dynatraceUsabilityAnalytics;
    this._dynatraceVictorOpsNotification = config.dynatraceVictorOpsNotification;
    this._dynatraceWebAppAnomalies = config.dynatraceWebAppAnomalies;
    this._dynatraceWebAppBeaconOrigins = config.dynatraceWebAppBeaconOrigins;
    this._dynatraceWebAppEnablement = config.dynatraceWebAppEnablement;
    this._dynatraceWebAppResourceCleanup = config.dynatraceWebAppResourceCleanup;
    this._dynatraceWebAppResourceTypes = config.dynatraceWebAppResourceTypes;
    this._dynatraceWebApplication = config.dynatraceWebApplication;
    this._dynatraceWebhookNotification = config.dynatraceWebhookNotification;
    this._dynatraceXmattersNotification = config.dynatraceXmattersNotification;
    this._id = config.id;
    this._mode = config.mode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynatrace_aix_extension - computed: true, optional: true, required: false
  private _dynatraceAixExtension?: string[]; 
  public get dynatraceAixExtension() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_aix_extension'));
  }
  public set dynatraceAixExtension(value: string[]) {
    this._dynatraceAixExtension = value;
  }
  public resetDynatraceAixExtension() {
    this._dynatraceAixExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceAixExtensionInput() {
    return this._dynatraceAixExtension;
  }

  // dynatrace_alerting - computed: true, optional: true, required: false
  private _dynatraceAlerting?: string[]; 
  public get dynatraceAlerting() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_alerting'));
  }
  public set dynatraceAlerting(value: string[]) {
    this._dynatraceAlerting = value;
  }
  public resetDynatraceAlerting() {
    this._dynatraceAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceAlertingInput() {
    return this._dynatraceAlerting;
  }

  // dynatrace_ansible_tower_notification - computed: true, optional: true, required: false
  private _dynatraceAnsibleTowerNotification?: string[]; 
  public get dynatraceAnsibleTowerNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_ansible_tower_notification'));
  }
  public set dynatraceAnsibleTowerNotification(value: string[]) {
    this._dynatraceAnsibleTowerNotification = value;
  }
  public resetDynatraceAnsibleTowerNotification() {
    this._dynatraceAnsibleTowerNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceAnsibleTowerNotificationInput() {
    return this._dynatraceAnsibleTowerNotification;
  }

  // dynatrace_application_detection_rule - computed: true, optional: true, required: false
  private _dynatraceApplicationDetectionRule?: string[]; 
  public get dynatraceApplicationDetectionRule() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_application_detection_rule'));
  }
  public set dynatraceApplicationDetectionRule(value: string[]) {
    this._dynatraceApplicationDetectionRule = value;
  }
  public resetDynatraceApplicationDetectionRule() {
    this._dynatraceApplicationDetectionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceApplicationDetectionRuleInput() {
    return this._dynatraceApplicationDetectionRule;
  }

  // dynatrace_application_error_rules - computed: true, optional: true, required: false
  private _dynatraceApplicationErrorRules?: string[]; 
  public get dynatraceApplicationErrorRules() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_application_error_rules'));
  }
  public set dynatraceApplicationErrorRules(value: string[]) {
    this._dynatraceApplicationErrorRules = value;
  }
  public resetDynatraceApplicationErrorRules() {
    this._dynatraceApplicationErrorRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceApplicationErrorRulesInput() {
    return this._dynatraceApplicationErrorRules;
  }

  // dynatrace_autotag_v2 - computed: true, optional: true, required: false
  private _dynatraceAutotagV2?: string[]; 
  public get dynatraceAutotagV2() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_autotag_v2'));
  }
  public set dynatraceAutotagV2(value: string[]) {
    this._dynatraceAutotagV2 = value;
  }
  public resetDynatraceAutotagV2() {
    this._dynatraceAutotagV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceAutotagV2Input() {
    return this._dynatraceAutotagV2;
  }

  // dynatrace_aws_credentials - computed: true, optional: true, required: false
  private _dynatraceAwsCredentials?: string[]; 
  public get dynatraceAwsCredentials() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_aws_credentials'));
  }
  public set dynatraceAwsCredentials(value: string[]) {
    this._dynatraceAwsCredentials = value;
  }
  public resetDynatraceAwsCredentials() {
    this._dynatraceAwsCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceAwsCredentialsInput() {
    return this._dynatraceAwsCredentials;
  }

  // dynatrace_azure_credentials - computed: true, optional: true, required: false
  private _dynatraceAzureCredentials?: string[]; 
  public get dynatraceAzureCredentials() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_azure_credentials'));
  }
  public set dynatraceAzureCredentials(value: string[]) {
    this._dynatraceAzureCredentials = value;
  }
  public resetDynatraceAzureCredentials() {
    this._dynatraceAzureCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceAzureCredentialsInput() {
    return this._dynatraceAzureCredentials;
  }

  // dynatrace_browser_monitor - computed: true, optional: true, required: false
  private _dynatraceBrowserMonitor?: string[]; 
  public get dynatraceBrowserMonitor() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_browser_monitor'));
  }
  public set dynatraceBrowserMonitor(value: string[]) {
    this._dynatraceBrowserMonitor = value;
  }
  public resetDynatraceBrowserMonitor() {
    this._dynatraceBrowserMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceBrowserMonitorInput() {
    return this._dynatraceBrowserMonitor;
  }

  // dynatrace_calculated_mobile_metric - computed: true, optional: true, required: false
  private _dynatraceCalculatedMobileMetric?: string[]; 
  public get dynatraceCalculatedMobileMetric() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_calculated_mobile_metric'));
  }
  public set dynatraceCalculatedMobileMetric(value: string[]) {
    this._dynatraceCalculatedMobileMetric = value;
  }
  public resetDynatraceCalculatedMobileMetric() {
    this._dynatraceCalculatedMobileMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceCalculatedMobileMetricInput() {
    return this._dynatraceCalculatedMobileMetric;
  }

  // dynatrace_calculated_service_metric - computed: true, optional: true, required: false
  private _dynatraceCalculatedServiceMetric?: string[]; 
  public get dynatraceCalculatedServiceMetric() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_calculated_service_metric'));
  }
  public set dynatraceCalculatedServiceMetric(value: string[]) {
    this._dynatraceCalculatedServiceMetric = value;
  }
  public resetDynatraceCalculatedServiceMetric() {
    this._dynatraceCalculatedServiceMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceCalculatedServiceMetricInput() {
    return this._dynatraceCalculatedServiceMetric;
  }

  // dynatrace_calculated_synthetic_metric - computed: true, optional: true, required: false
  private _dynatraceCalculatedSyntheticMetric?: string[]; 
  public get dynatraceCalculatedSyntheticMetric() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_calculated_synthetic_metric'));
  }
  public set dynatraceCalculatedSyntheticMetric(value: string[]) {
    this._dynatraceCalculatedSyntheticMetric = value;
  }
  public resetDynatraceCalculatedSyntheticMetric() {
    this._dynatraceCalculatedSyntheticMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceCalculatedSyntheticMetricInput() {
    return this._dynatraceCalculatedSyntheticMetric;
  }

  // dynatrace_calculated_web_metric - computed: true, optional: true, required: false
  private _dynatraceCalculatedWebMetric?: string[]; 
  public get dynatraceCalculatedWebMetric() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_calculated_web_metric'));
  }
  public set dynatraceCalculatedWebMetric(value: string[]) {
    this._dynatraceCalculatedWebMetric = value;
  }
  public resetDynatraceCalculatedWebMetric() {
    this._dynatraceCalculatedWebMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceCalculatedWebMetricInput() {
    return this._dynatraceCalculatedWebMetric;
  }

  // dynatrace_credentials - computed: true, optional: true, required: false
  private _dynatraceCredentials?: string[]; 
  public get dynatraceCredentials() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_credentials'));
  }
  public set dynatraceCredentials(value: string[]) {
    this._dynatraceCredentials = value;
  }
  public resetDynatraceCredentials() {
    this._dynatraceCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceCredentialsInput() {
    return this._dynatraceCredentials;
  }

  // dynatrace_custom_app_anomalies - computed: true, optional: true, required: false
  private _dynatraceCustomAppAnomalies?: string[]; 
  public get dynatraceCustomAppAnomalies() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_custom_app_anomalies'));
  }
  public set dynatraceCustomAppAnomalies(value: string[]) {
    this._dynatraceCustomAppAnomalies = value;
  }
  public resetDynatraceCustomAppAnomalies() {
    this._dynatraceCustomAppAnomalies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceCustomAppAnomaliesInput() {
    return this._dynatraceCustomAppAnomalies;
  }

  // dynatrace_custom_app_crash_rate - computed: true, optional: true, required: false
  private _dynatraceCustomAppCrashRate?: string[]; 
  public get dynatraceCustomAppCrashRate() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_custom_app_crash_rate'));
  }
  public set dynatraceCustomAppCrashRate(value: string[]) {
    this._dynatraceCustomAppCrashRate = value;
  }
  public resetDynatraceCustomAppCrashRate() {
    this._dynatraceCustomAppCrashRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceCustomAppCrashRateInput() {
    return this._dynatraceCustomAppCrashRate;
  }

  // dynatrace_custom_app_enablement - computed: true, optional: true, required: false
  private _dynatraceCustomAppEnablement?: string[]; 
  public get dynatraceCustomAppEnablement() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_custom_app_enablement'));
  }
  public set dynatraceCustomAppEnablement(value: string[]) {
    this._dynatraceCustomAppEnablement = value;
  }
  public resetDynatraceCustomAppEnablement() {
    this._dynatraceCustomAppEnablement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceCustomAppEnablementInput() {
    return this._dynatraceCustomAppEnablement;
  }

  // dynatrace_custom_service - computed: true, optional: true, required: false
  private _dynatraceCustomService?: string[]; 
  public get dynatraceCustomService() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_custom_service'));
  }
  public set dynatraceCustomService(value: string[]) {
    this._dynatraceCustomService = value;
  }
  public resetDynatraceCustomService() {
    this._dynatraceCustomService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceCustomServiceInput() {
    return this._dynatraceCustomService;
  }

  // dynatrace_data_privacy - computed: true, optional: true, required: false
  private _dynatraceDataPrivacy?: string[]; 
  public get dynatraceDataPrivacy() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_data_privacy'));
  }
  public set dynatraceDataPrivacy(value: string[]) {
    this._dynatraceDataPrivacy = value;
  }
  public resetDynatraceDataPrivacy() {
    this._dynatraceDataPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceDataPrivacyInput() {
    return this._dynatraceDataPrivacy;
  }

  // dynatrace_database_anomalies_v2 - computed: true, optional: true, required: false
  private _dynatraceDatabaseAnomaliesV2?: string[]; 
  public get dynatraceDatabaseAnomaliesV2() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_database_anomalies_v2'));
  }
  public set dynatraceDatabaseAnomaliesV2(value: string[]) {
    this._dynatraceDatabaseAnomaliesV2 = value;
  }
  public resetDynatraceDatabaseAnomaliesV2() {
    this._dynatraceDatabaseAnomaliesV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceDatabaseAnomaliesV2Input() {
    return this._dynatraceDatabaseAnomaliesV2;
  }

  // dynatrace_declarative_grouping - computed: true, optional: true, required: false
  private _dynatraceDeclarativeGrouping?: string[]; 
  public get dynatraceDeclarativeGrouping() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_declarative_grouping'));
  }
  public set dynatraceDeclarativeGrouping(value: string[]) {
    this._dynatraceDeclarativeGrouping = value;
  }
  public resetDynatraceDeclarativeGrouping() {
    this._dynatraceDeclarativeGrouping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceDeclarativeGroupingInput() {
    return this._dynatraceDeclarativeGrouping;
  }

  // dynatrace_disk_anomalies_v2 - computed: true, optional: true, required: false
  private _dynatraceDiskAnomaliesV2?: string[]; 
  public get dynatraceDiskAnomaliesV2() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_disk_anomalies_v2'));
  }
  public set dynatraceDiskAnomaliesV2(value: string[]) {
    this._dynatraceDiskAnomaliesV2 = value;
  }
  public resetDynatraceDiskAnomaliesV2() {
    this._dynatraceDiskAnomaliesV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceDiskAnomaliesV2Input() {
    return this._dynatraceDiskAnomaliesV2;
  }

  // dynatrace_disk_options - computed: true, optional: true, required: false
  private _dynatraceDiskOptions?: string[]; 
  public get dynatraceDiskOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_disk_options'));
  }
  public set dynatraceDiskOptions(value: string[]) {
    this._dynatraceDiskOptions = value;
  }
  public resetDynatraceDiskOptions() {
    this._dynatraceDiskOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceDiskOptionsInput() {
    return this._dynatraceDiskOptions;
  }

  // dynatrace_disk_specific_anomalies_v2 - computed: true, optional: true, required: false
  private _dynatraceDiskSpecificAnomaliesV2?: string[]; 
  public get dynatraceDiskSpecificAnomaliesV2() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_disk_specific_anomalies_v2'));
  }
  public set dynatraceDiskSpecificAnomaliesV2(value: string[]) {
    this._dynatraceDiskSpecificAnomaliesV2 = value;
  }
  public resetDynatraceDiskSpecificAnomaliesV2() {
    this._dynatraceDiskSpecificAnomaliesV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceDiskSpecificAnomaliesV2Input() {
    return this._dynatraceDiskSpecificAnomaliesV2;
  }

  // dynatrace_email_notification - computed: true, optional: true, required: false
  private _dynatraceEmailNotification?: string[]; 
  public get dynatraceEmailNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_email_notification'));
  }
  public set dynatraceEmailNotification(value: string[]) {
    this._dynatraceEmailNotification = value;
  }
  public resetDynatraceEmailNotification() {
    this._dynatraceEmailNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceEmailNotificationInput() {
    return this._dynatraceEmailNotification;
  }

  // dynatrace_extension_execution_controller - computed: true, optional: true, required: false
  private _dynatraceExtensionExecutionController?: string[]; 
  public get dynatraceExtensionExecutionController() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_extension_execution_controller'));
  }
  public set dynatraceExtensionExecutionController(value: string[]) {
    this._dynatraceExtensionExecutionController = value;
  }
  public resetDynatraceExtensionExecutionController() {
    this._dynatraceExtensionExecutionController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceExtensionExecutionControllerInput() {
    return this._dynatraceExtensionExecutionController;
  }

  // dynatrace_generic_types - computed: true, optional: true, required: false
  private _dynatraceGenericTypes?: string[]; 
  public get dynatraceGenericTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_generic_types'));
  }
  public set dynatraceGenericTypes(value: string[]) {
    this._dynatraceGenericTypes = value;
  }
  public resetDynatraceGenericTypes() {
    this._dynatraceGenericTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceGenericTypesInput() {
    return this._dynatraceGenericTypes;
  }

  // dynatrace_host_anomalies_v2 - computed: true, optional: true, required: false
  private _dynatraceHostAnomaliesV2?: string[]; 
  public get dynatraceHostAnomaliesV2() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_host_anomalies_v2'));
  }
  public set dynatraceHostAnomaliesV2(value: string[]) {
    this._dynatraceHostAnomaliesV2 = value;
  }
  public resetDynatraceHostAnomaliesV2() {
    this._dynatraceHostAnomaliesV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceHostAnomaliesV2Input() {
    return this._dynatraceHostAnomaliesV2;
  }

  // dynatrace_host_naming - computed: true, optional: true, required: false
  private _dynatraceHostNaming?: string[]; 
  public get dynatraceHostNaming() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_host_naming'));
  }
  public set dynatraceHostNaming(value: string[]) {
    this._dynatraceHostNaming = value;
  }
  public resetDynatraceHostNaming() {
    this._dynatraceHostNaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceHostNamingInput() {
    return this._dynatraceHostNaming;
  }

  // dynatrace_host_process_group_monitoring - computed: true, optional: true, required: false
  private _dynatraceHostProcessGroupMonitoring?: string[]; 
  public get dynatraceHostProcessGroupMonitoring() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_host_process_group_monitoring'));
  }
  public set dynatraceHostProcessGroupMonitoring(value: string[]) {
    this._dynatraceHostProcessGroupMonitoring = value;
  }
  public resetDynatraceHostProcessGroupMonitoring() {
    this._dynatraceHostProcessGroupMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceHostProcessGroupMonitoringInput() {
    return this._dynatraceHostProcessGroupMonitoring;
  }

  // dynatrace_http_monitor - computed: true, optional: true, required: false
  private _dynatraceHttpMonitor?: string[]; 
  public get dynatraceHttpMonitor() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_http_monitor'));
  }
  public set dynatraceHttpMonitor(value: string[]) {
    this._dynatraceHttpMonitor = value;
  }
  public resetDynatraceHttpMonitor() {
    this._dynatraceHttpMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceHttpMonitorInput() {
    return this._dynatraceHttpMonitor;
  }

  // dynatrace_ims_bridges - computed: true, optional: true, required: false
  private _dynatraceImsBridges?: string[]; 
  public get dynatraceImsBridges() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_ims_bridges'));
  }
  public set dynatraceImsBridges(value: string[]) {
    this._dynatraceImsBridges = value;
  }
  public resetDynatraceImsBridges() {
    this._dynatraceImsBridges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceImsBridgesInput() {
    return this._dynatraceImsBridges;
  }

  // dynatrace_jira_notification - computed: true, optional: true, required: false
  private _dynatraceJiraNotification?: string[]; 
  public get dynatraceJiraNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_jira_notification'));
  }
  public set dynatraceJiraNotification(value: string[]) {
    this._dynatraceJiraNotification = value;
  }
  public resetDynatraceJiraNotification() {
    this._dynatraceJiraNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceJiraNotificationInput() {
    return this._dynatraceJiraNotification;
  }

  // dynatrace_k8s_namespace_anomalies - computed: true, optional: true, required: false
  private _dynatraceK8SNamespaceAnomalies?: string[]; 
  public get dynatraceK8SNamespaceAnomalies() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_k8s_namespace_anomalies'));
  }
  public set dynatraceK8SNamespaceAnomalies(value: string[]) {
    this._dynatraceK8SNamespaceAnomalies = value;
  }
  public resetDynatraceK8SNamespaceAnomalies() {
    this._dynatraceK8SNamespaceAnomalies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceK8SNamespaceAnomaliesInput() {
    return this._dynatraceK8SNamespaceAnomalies;
  }

  // dynatrace_key_requests - computed: true, optional: true, required: false
  private _dynatraceKeyRequests?: string[]; 
  public get dynatraceKeyRequests() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_key_requests'));
  }
  public set dynatraceKeyRequests(value: string[]) {
    this._dynatraceKeyRequests = value;
  }
  public resetDynatraceKeyRequests() {
    this._dynatraceKeyRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceKeyRequestsInput() {
    return this._dynatraceKeyRequests;
  }

  // dynatrace_log_metrics - computed: true, optional: true, required: false
  private _dynatraceLogMetrics?: string[]; 
  public get dynatraceLogMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_log_metrics'));
  }
  public set dynatraceLogMetrics(value: string[]) {
    this._dynatraceLogMetrics = value;
  }
  public resetDynatraceLogMetrics() {
    this._dynatraceLogMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceLogMetricsInput() {
    return this._dynatraceLogMetrics;
  }

  // dynatrace_maintenance - computed: true, optional: true, required: false
  private _dynatraceMaintenance?: string[]; 
  public get dynatraceMaintenance() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_maintenance'));
  }
  public set dynatraceMaintenance(value: string[]) {
    this._dynatraceMaintenance = value;
  }
  public resetDynatraceMaintenance() {
    this._dynatraceMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMaintenanceInput() {
    return this._dynatraceMaintenance;
  }

  // dynatrace_management_zone_v2 - computed: true, optional: true, required: false
  private _dynatraceManagementZoneV2?: string[]; 
  public get dynatraceManagementZoneV2() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_management_zone_v2'));
  }
  public set dynatraceManagementZoneV2(value: string[]) {
    this._dynatraceManagementZoneV2 = value;
  }
  public resetDynatraceManagementZoneV2() {
    this._dynatraceManagementZoneV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceManagementZoneV2Input() {
    return this._dynatraceManagementZoneV2;
  }

  // dynatrace_metric_events - computed: true, optional: true, required: false
  private _dynatraceMetricEvents?: string[]; 
  public get dynatraceMetricEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_metric_events'));
  }
  public set dynatraceMetricEvents(value: string[]) {
    this._dynatraceMetricEvents = value;
  }
  public resetDynatraceMetricEvents() {
    this._dynatraceMetricEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMetricEventsInput() {
    return this._dynatraceMetricEvents;
  }

  // dynatrace_mobile_app_anomalies - computed: true, optional: true, required: false
  private _dynatraceMobileAppAnomalies?: string[]; 
  public get dynatraceMobileAppAnomalies() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_mobile_app_anomalies'));
  }
  public set dynatraceMobileAppAnomalies(value: string[]) {
    this._dynatraceMobileAppAnomalies = value;
  }
  public resetDynatraceMobileAppAnomalies() {
    this._dynatraceMobileAppAnomalies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMobileAppAnomaliesInput() {
    return this._dynatraceMobileAppAnomalies;
  }

  // dynatrace_mobile_app_crash_rate - computed: true, optional: true, required: false
  private _dynatraceMobileAppCrashRate?: string[]; 
  public get dynatraceMobileAppCrashRate() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_mobile_app_crash_rate'));
  }
  public set dynatraceMobileAppCrashRate(value: string[]) {
    this._dynatraceMobileAppCrashRate = value;
  }
  public resetDynatraceMobileAppCrashRate() {
    this._dynatraceMobileAppCrashRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMobileAppCrashRateInput() {
    return this._dynatraceMobileAppCrashRate;
  }

  // dynatrace_mobile_app_enablement - computed: true, optional: true, required: false
  private _dynatraceMobileAppEnablement?: string[]; 
  public get dynatraceMobileAppEnablement() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_mobile_app_enablement'));
  }
  public set dynatraceMobileAppEnablement(value: string[]) {
    this._dynatraceMobileAppEnablement = value;
  }
  public resetDynatraceMobileAppEnablement() {
    this._dynatraceMobileAppEnablement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMobileAppEnablementInput() {
    return this._dynatraceMobileAppEnablement;
  }

  // dynatrace_mobile_application - computed: true, optional: true, required: false
  private _dynatraceMobileApplication?: string[]; 
  public get dynatraceMobileApplication() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_mobile_application'));
  }
  public set dynatraceMobileApplication(value: string[]) {
    this._dynatraceMobileApplication = value;
  }
  public resetDynatraceMobileApplication() {
    this._dynatraceMobileApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMobileApplicationInput() {
    return this._dynatraceMobileApplication;
  }

  // dynatrace_monitored_technologies_apache - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesApache?: string[]; 
  public get dynatraceMonitoredTechnologiesApache() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_apache'));
  }
  public set dynatraceMonitoredTechnologiesApache(value: string[]) {
    this._dynatraceMonitoredTechnologiesApache = value;
  }
  public resetDynatraceMonitoredTechnologiesApache() {
    this._dynatraceMonitoredTechnologiesApache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesApacheInput() {
    return this._dynatraceMonitoredTechnologiesApache;
  }

  // dynatrace_monitored_technologies_dotnet - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesDotnet?: string[]; 
  public get dynatraceMonitoredTechnologiesDotnet() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_dotnet'));
  }
  public set dynatraceMonitoredTechnologiesDotnet(value: string[]) {
    this._dynatraceMonitoredTechnologiesDotnet = value;
  }
  public resetDynatraceMonitoredTechnologiesDotnet() {
    this._dynatraceMonitoredTechnologiesDotnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesDotnetInput() {
    return this._dynatraceMonitoredTechnologiesDotnet;
  }

  // dynatrace_monitored_technologies_go - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesGo?: string[]; 
  public get dynatraceMonitoredTechnologiesGo() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_go'));
  }
  public set dynatraceMonitoredTechnologiesGo(value: string[]) {
    this._dynatraceMonitoredTechnologiesGo = value;
  }
  public resetDynatraceMonitoredTechnologiesGo() {
    this._dynatraceMonitoredTechnologiesGo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesGoInput() {
    return this._dynatraceMonitoredTechnologiesGo;
  }

  // dynatrace_monitored_technologies_iis - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesIis?: string[]; 
  public get dynatraceMonitoredTechnologiesIis() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_iis'));
  }
  public set dynatraceMonitoredTechnologiesIis(value: string[]) {
    this._dynatraceMonitoredTechnologiesIis = value;
  }
  public resetDynatraceMonitoredTechnologiesIis() {
    this._dynatraceMonitoredTechnologiesIis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesIisInput() {
    return this._dynatraceMonitoredTechnologiesIis;
  }

  // dynatrace_monitored_technologies_java - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesJava?: string[]; 
  public get dynatraceMonitoredTechnologiesJava() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_java'));
  }
  public set dynatraceMonitoredTechnologiesJava(value: string[]) {
    this._dynatraceMonitoredTechnologiesJava = value;
  }
  public resetDynatraceMonitoredTechnologiesJava() {
    this._dynatraceMonitoredTechnologiesJava = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesJavaInput() {
    return this._dynatraceMonitoredTechnologiesJava;
  }

  // dynatrace_monitored_technologies_nginx - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesNginx?: string[]; 
  public get dynatraceMonitoredTechnologiesNginx() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_nginx'));
  }
  public set dynatraceMonitoredTechnologiesNginx(value: string[]) {
    this._dynatraceMonitoredTechnologiesNginx = value;
  }
  public resetDynatraceMonitoredTechnologiesNginx() {
    this._dynatraceMonitoredTechnologiesNginx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesNginxInput() {
    return this._dynatraceMonitoredTechnologiesNginx;
  }

  // dynatrace_monitored_technologies_nodejs - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesNodejs?: string[]; 
  public get dynatraceMonitoredTechnologiesNodejs() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_nodejs'));
  }
  public set dynatraceMonitoredTechnologiesNodejs(value: string[]) {
    this._dynatraceMonitoredTechnologiesNodejs = value;
  }
  public resetDynatraceMonitoredTechnologiesNodejs() {
    this._dynatraceMonitoredTechnologiesNodejs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesNodejsInput() {
    return this._dynatraceMonitoredTechnologiesNodejs;
  }

  // dynatrace_monitored_technologies_opentracing - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesOpentracing?: string[]; 
  public get dynatraceMonitoredTechnologiesOpentracing() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_opentracing'));
  }
  public set dynatraceMonitoredTechnologiesOpentracing(value: string[]) {
    this._dynatraceMonitoredTechnologiesOpentracing = value;
  }
  public resetDynatraceMonitoredTechnologiesOpentracing() {
    this._dynatraceMonitoredTechnologiesOpentracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesOpentracingInput() {
    return this._dynatraceMonitoredTechnologiesOpentracing;
  }

  // dynatrace_monitored_technologies_php - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesPhp?: string[]; 
  public get dynatraceMonitoredTechnologiesPhp() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_php'));
  }
  public set dynatraceMonitoredTechnologiesPhp(value: string[]) {
    this._dynatraceMonitoredTechnologiesPhp = value;
  }
  public resetDynatraceMonitoredTechnologiesPhp() {
    this._dynatraceMonitoredTechnologiesPhp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesPhpInput() {
    return this._dynatraceMonitoredTechnologiesPhp;
  }

  // dynatrace_monitored_technologies_varnish - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesVarnish?: string[]; 
  public get dynatraceMonitoredTechnologiesVarnish() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_varnish'));
  }
  public set dynatraceMonitoredTechnologiesVarnish(value: string[]) {
    this._dynatraceMonitoredTechnologiesVarnish = value;
  }
  public resetDynatraceMonitoredTechnologiesVarnish() {
    this._dynatraceMonitoredTechnologiesVarnish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesVarnishInput() {
    return this._dynatraceMonitoredTechnologiesVarnish;
  }

  // dynatrace_monitored_technologies_wsmb - computed: true, optional: true, required: false
  private _dynatraceMonitoredTechnologiesWsmb?: string[]; 
  public get dynatraceMonitoredTechnologiesWsmb() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_monitored_technologies_wsmb'));
  }
  public set dynatraceMonitoredTechnologiesWsmb(value: string[]) {
    this._dynatraceMonitoredTechnologiesWsmb = value;
  }
  public resetDynatraceMonitoredTechnologiesWsmb() {
    this._dynatraceMonitoredTechnologiesWsmb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMonitoredTechnologiesWsmbInput() {
    return this._dynatraceMonitoredTechnologiesWsmb;
  }

  // dynatrace_muted_requests - computed: true, optional: true, required: false
  private _dynatraceMutedRequests?: string[]; 
  public get dynatraceMutedRequests() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_muted_requests'));
  }
  public set dynatraceMutedRequests(value: string[]) {
    this._dynatraceMutedRequests = value;
  }
  public resetDynatraceMutedRequests() {
    this._dynatraceMutedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceMutedRequestsInput() {
    return this._dynatraceMutedRequests;
  }

  // dynatrace_nettracer - computed: true, optional: true, required: false
  private _dynatraceNettracer?: string[]; 
  public get dynatraceNettracer() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_nettracer'));
  }
  public set dynatraceNettracer(value: string[]) {
    this._dynatraceNettracer = value;
  }
  public resetDynatraceNettracer() {
    this._dynatraceNettracer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceNettracerInput() {
    return this._dynatraceNettracer;
  }

  // dynatrace_oneagent_features - computed: true, optional: true, required: false
  private _dynatraceOneagentFeatures?: string[]; 
  public get dynatraceOneagentFeatures() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_oneagent_features'));
  }
  public set dynatraceOneagentFeatures(value: string[]) {
    this._dynatraceOneagentFeatures = value;
  }
  public resetDynatraceOneagentFeatures() {
    this._dynatraceOneagentFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceOneagentFeaturesInput() {
    return this._dynatraceOneagentFeatures;
  }

  // dynatrace_ops_genie_notification - computed: true, optional: true, required: false
  private _dynatraceOpsGenieNotification?: string[]; 
  public get dynatraceOpsGenieNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_ops_genie_notification'));
  }
  public set dynatraceOpsGenieNotification(value: string[]) {
    this._dynatraceOpsGenieNotification = value;
  }
  public resetDynatraceOpsGenieNotification() {
    this._dynatraceOpsGenieNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceOpsGenieNotificationInput() {
    return this._dynatraceOpsGenieNotification;
  }

  // dynatrace_pager_duty_notification - computed: true, optional: true, required: false
  private _dynatracePagerDutyNotification?: string[]; 
  public get dynatracePagerDutyNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_pager_duty_notification'));
  }
  public set dynatracePagerDutyNotification(value: string[]) {
    this._dynatracePagerDutyNotification = value;
  }
  public resetDynatracePagerDutyNotification() {
    this._dynatracePagerDutyNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatracePagerDutyNotificationInput() {
    return this._dynatracePagerDutyNotification;
  }

  // dynatrace_pg_alerting - computed: true, optional: true, required: false
  private _dynatracePgAlerting?: string[]; 
  public get dynatracePgAlerting() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_pg_alerting'));
  }
  public set dynatracePgAlerting(value: string[]) {
    this._dynatracePgAlerting = value;
  }
  public resetDynatracePgAlerting() {
    this._dynatracePgAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatracePgAlertingInput() {
    return this._dynatracePgAlerting;
  }

  // dynatrace_process_availability - computed: true, optional: true, required: false
  private _dynatraceProcessAvailability?: string[]; 
  public get dynatraceProcessAvailability() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_process_availability'));
  }
  public set dynatraceProcessAvailability(value: string[]) {
    this._dynatraceProcessAvailability = value;
  }
  public resetDynatraceProcessAvailability() {
    this._dynatraceProcessAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessAvailabilityInput() {
    return this._dynatraceProcessAvailability;
  }

  // dynatrace_process_group_detection - computed: true, optional: true, required: false
  private _dynatraceProcessGroupDetection?: string[]; 
  public get dynatraceProcessGroupDetection() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_process_group_detection'));
  }
  public set dynatraceProcessGroupDetection(value: string[]) {
    this._dynatraceProcessGroupDetection = value;
  }
  public resetDynatraceProcessGroupDetection() {
    this._dynatraceProcessGroupDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessGroupDetectionInput() {
    return this._dynatraceProcessGroupDetection;
  }

  // dynatrace_process_group_detection_flags - computed: true, optional: true, required: false
  private _dynatraceProcessGroupDetectionFlags?: string[]; 
  public get dynatraceProcessGroupDetectionFlags() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_process_group_detection_flags'));
  }
  public set dynatraceProcessGroupDetectionFlags(value: string[]) {
    this._dynatraceProcessGroupDetectionFlags = value;
  }
  public resetDynatraceProcessGroupDetectionFlags() {
    this._dynatraceProcessGroupDetectionFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessGroupDetectionFlagsInput() {
    return this._dynatraceProcessGroupDetectionFlags;
  }

  // dynatrace_process_group_monitoring - computed: true, optional: true, required: false
  private _dynatraceProcessGroupMonitoring?: string[]; 
  public get dynatraceProcessGroupMonitoring() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_process_group_monitoring'));
  }
  public set dynatraceProcessGroupMonitoring(value: string[]) {
    this._dynatraceProcessGroupMonitoring = value;
  }
  public resetDynatraceProcessGroupMonitoring() {
    this._dynatraceProcessGroupMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessGroupMonitoringInput() {
    return this._dynatraceProcessGroupMonitoring;
  }

  // dynatrace_process_group_rum - computed: true, optional: true, required: false
  private _dynatraceProcessGroupRum?: string[]; 
  public get dynatraceProcessGroupRum() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_process_group_rum'));
  }
  public set dynatraceProcessGroupRum(value: string[]) {
    this._dynatraceProcessGroupRum = value;
  }
  public resetDynatraceProcessGroupRum() {
    this._dynatraceProcessGroupRum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessGroupRumInput() {
    return this._dynatraceProcessGroupRum;
  }

  // dynatrace_process_group_simple_detection - computed: true, optional: true, required: false
  private _dynatraceProcessGroupSimpleDetection?: string[]; 
  public get dynatraceProcessGroupSimpleDetection() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_process_group_simple_detection'));
  }
  public set dynatraceProcessGroupSimpleDetection(value: string[]) {
    this._dynatraceProcessGroupSimpleDetection = value;
  }
  public resetDynatraceProcessGroupSimpleDetection() {
    this._dynatraceProcessGroupSimpleDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessGroupSimpleDetectionInput() {
    return this._dynatraceProcessGroupSimpleDetection;
  }

  // dynatrace_process_monitoring - computed: true, optional: true, required: false
  private _dynatraceProcessMonitoring?: string[]; 
  public get dynatraceProcessMonitoring() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_process_monitoring'));
  }
  public set dynatraceProcessMonitoring(value: string[]) {
    this._dynatraceProcessMonitoring = value;
  }
  public resetDynatraceProcessMonitoring() {
    this._dynatraceProcessMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessMonitoringInput() {
    return this._dynatraceProcessMonitoring;
  }

  // dynatrace_process_monitoring_rule - computed: true, optional: true, required: false
  private _dynatraceProcessMonitoringRule?: string[]; 
  public get dynatraceProcessMonitoringRule() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_process_monitoring_rule'));
  }
  public set dynatraceProcessMonitoringRule(value: string[]) {
    this._dynatraceProcessMonitoringRule = value;
  }
  public resetDynatraceProcessMonitoringRule() {
    this._dynatraceProcessMonitoringRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessMonitoringRuleInput() {
    return this._dynatraceProcessMonitoringRule;
  }

  // dynatrace_process_visibility - computed: true, optional: true, required: false
  private _dynatraceProcessVisibility?: string[]; 
  public get dynatraceProcessVisibility() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_process_visibility'));
  }
  public set dynatraceProcessVisibility(value: string[]) {
    this._dynatraceProcessVisibility = value;
  }
  public resetDynatraceProcessVisibility() {
    this._dynatraceProcessVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessVisibilityInput() {
    return this._dynatraceProcessVisibility;
  }

  // dynatrace_processgroup_naming - computed: true, optional: true, required: false
  private _dynatraceProcessgroupNaming?: string[]; 
  public get dynatraceProcessgroupNaming() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_processgroup_naming'));
  }
  public set dynatraceProcessgroupNaming(value: string[]) {
    this._dynatraceProcessgroupNaming = value;
  }
  public resetDynatraceProcessgroupNaming() {
    this._dynatraceProcessgroupNaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceProcessgroupNamingInput() {
    return this._dynatraceProcessgroupNaming;
  }

  // dynatrace_queue_manager - computed: true, optional: true, required: false
  private _dynatraceQueueManager?: string[]; 
  public get dynatraceQueueManager() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_queue_manager'));
  }
  public set dynatraceQueueManager(value: string[]) {
    this._dynatraceQueueManager = value;
  }
  public resetDynatraceQueueManager() {
    this._dynatraceQueueManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceQueueManagerInput() {
    return this._dynatraceQueueManager;
  }

  // dynatrace_queue_sharing_groups - computed: true, optional: true, required: false
  private _dynatraceQueueSharingGroups?: string[]; 
  public get dynatraceQueueSharingGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_queue_sharing_groups'));
  }
  public set dynatraceQueueSharingGroups(value: string[]) {
    this._dynatraceQueueSharingGroups = value;
  }
  public resetDynatraceQueueSharingGroups() {
    this._dynatraceQueueSharingGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceQueueSharingGroupsInput() {
    return this._dynatraceQueueSharingGroups;
  }

  // dynatrace_request_attribute - computed: true, optional: true, required: false
  private _dynatraceRequestAttribute?: string[]; 
  public get dynatraceRequestAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_request_attribute'));
  }
  public set dynatraceRequestAttribute(value: string[]) {
    this._dynatraceRequestAttribute = value;
  }
  public resetDynatraceRequestAttribute() {
    this._dynatraceRequestAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceRequestAttributeInput() {
    return this._dynatraceRequestAttribute;
  }

  // dynatrace_request_naming - computed: true, optional: true, required: false
  private _dynatraceRequestNaming?: string[]; 
  public get dynatraceRequestNaming() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_request_naming'));
  }
  public set dynatraceRequestNaming(value: string[]) {
    this._dynatraceRequestNaming = value;
  }
  public resetDynatraceRequestNaming() {
    this._dynatraceRequestNaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceRequestNamingInput() {
    return this._dynatraceRequestNaming;
  }

  // dynatrace_rum_advanced_correlation - computed: true, optional: true, required: false
  private _dynatraceRumAdvancedCorrelation?: string[]; 
  public get dynatraceRumAdvancedCorrelation() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_rum_advanced_correlation'));
  }
  public set dynatraceRumAdvancedCorrelation(value: string[]) {
    this._dynatraceRumAdvancedCorrelation = value;
  }
  public resetDynatraceRumAdvancedCorrelation() {
    this._dynatraceRumAdvancedCorrelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceRumAdvancedCorrelationInput() {
    return this._dynatraceRumAdvancedCorrelation;
  }

  // dynatrace_rum_ip_locations - computed: true, optional: true, required: false
  private _dynatraceRumIpLocations?: string[]; 
  public get dynatraceRumIpLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_rum_ip_locations'));
  }
  public set dynatraceRumIpLocations(value: string[]) {
    this._dynatraceRumIpLocations = value;
  }
  public resetDynatraceRumIpLocations() {
    this._dynatraceRumIpLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceRumIpLocationsInput() {
    return this._dynatraceRumIpLocations;
  }

  // dynatrace_rum_provider_breakdown - computed: true, optional: true, required: false
  private _dynatraceRumProviderBreakdown?: string[]; 
  public get dynatraceRumProviderBreakdown() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_rum_provider_breakdown'));
  }
  public set dynatraceRumProviderBreakdown(value: string[]) {
    this._dynatraceRumProviderBreakdown = value;
  }
  public resetDynatraceRumProviderBreakdown() {
    this._dynatraceRumProviderBreakdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceRumProviderBreakdownInput() {
    return this._dynatraceRumProviderBreakdown;
  }

  // dynatrace_service_failure - computed: true, optional: true, required: false
  private _dynatraceServiceFailure?: string[]; 
  public get dynatraceServiceFailure() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_service_failure'));
  }
  public set dynatraceServiceFailure(value: string[]) {
    this._dynatraceServiceFailure = value;
  }
  public resetDynatraceServiceFailure() {
    this._dynatraceServiceFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceServiceFailureInput() {
    return this._dynatraceServiceFailure;
  }

  // dynatrace_service_http_failure - computed: true, optional: true, required: false
  private _dynatraceServiceHttpFailure?: string[]; 
  public get dynatraceServiceHttpFailure() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_service_http_failure'));
  }
  public set dynatraceServiceHttpFailure(value: string[]) {
    this._dynatraceServiceHttpFailure = value;
  }
  public resetDynatraceServiceHttpFailure() {
    this._dynatraceServiceHttpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceServiceHttpFailureInput() {
    return this._dynatraceServiceHttpFailure;
  }

  // dynatrace_service_naming - computed: true, optional: true, required: false
  private _dynatraceServiceNaming?: string[]; 
  public get dynatraceServiceNaming() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_service_naming'));
  }
  public set dynatraceServiceNaming(value: string[]) {
    this._dynatraceServiceNaming = value;
  }
  public resetDynatraceServiceNaming() {
    this._dynatraceServiceNaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceServiceNamingInput() {
    return this._dynatraceServiceNaming;
  }

  // dynatrace_service_now_notification - computed: true, optional: true, required: false
  private _dynatraceServiceNowNotification?: string[]; 
  public get dynatraceServiceNowNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_service_now_notification'));
  }
  public set dynatraceServiceNowNotification(value: string[]) {
    this._dynatraceServiceNowNotification = value;
  }
  public resetDynatraceServiceNowNotification() {
    this._dynatraceServiceNowNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceServiceNowNotificationInput() {
    return this._dynatraceServiceNowNotification;
  }

  // dynatrace_session_replay_web_privacy - computed: true, optional: true, required: false
  private _dynatraceSessionReplayWebPrivacy?: string[]; 
  public get dynatraceSessionReplayWebPrivacy() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_session_replay_web_privacy'));
  }
  public set dynatraceSessionReplayWebPrivacy(value: string[]) {
    this._dynatraceSessionReplayWebPrivacy = value;
  }
  public resetDynatraceSessionReplayWebPrivacy() {
    this._dynatraceSessionReplayWebPrivacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceSessionReplayWebPrivacyInput() {
    return this._dynatraceSessionReplayWebPrivacy;
  }

  // dynatrace_slack_notification - computed: true, optional: true, required: false
  private _dynatraceSlackNotification?: string[]; 
  public get dynatraceSlackNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_slack_notification'));
  }
  public set dynatraceSlackNotification(value: string[]) {
    this._dynatraceSlackNotification = value;
  }
  public resetDynatraceSlackNotification() {
    this._dynatraceSlackNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceSlackNotificationInput() {
    return this._dynatraceSlackNotification;
  }

  // dynatrace_slo_v2 - computed: true, optional: true, required: false
  private _dynatraceSloV2?: string[]; 
  public get dynatraceSloV2() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_slo_v2'));
  }
  public set dynatraceSloV2(value: string[]) {
    this._dynatraceSloV2 = value;
  }
  public resetDynatraceSloV2() {
    this._dynatraceSloV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceSloV2Input() {
    return this._dynatraceSloV2;
  }

  // dynatrace_span_capture_rule - computed: true, optional: true, required: false
  private _dynatraceSpanCaptureRule?: string[]; 
  public get dynatraceSpanCaptureRule() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_span_capture_rule'));
  }
  public set dynatraceSpanCaptureRule(value: string[]) {
    this._dynatraceSpanCaptureRule = value;
  }
  public resetDynatraceSpanCaptureRule() {
    this._dynatraceSpanCaptureRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceSpanCaptureRuleInput() {
    return this._dynatraceSpanCaptureRule;
  }

  // dynatrace_span_context_propagation - computed: true, optional: true, required: false
  private _dynatraceSpanContextPropagation?: string[]; 
  public get dynatraceSpanContextPropagation() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_span_context_propagation'));
  }
  public set dynatraceSpanContextPropagation(value: string[]) {
    this._dynatraceSpanContextPropagation = value;
  }
  public resetDynatraceSpanContextPropagation() {
    this._dynatraceSpanContextPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceSpanContextPropagationInput() {
    return this._dynatraceSpanContextPropagation;
  }

  // dynatrace_synthetic_location - computed: true, optional: true, required: false
  private _dynatraceSyntheticLocation?: string[]; 
  public get dynatraceSyntheticLocation() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_synthetic_location'));
  }
  public set dynatraceSyntheticLocation(value: string[]) {
    this._dynatraceSyntheticLocation = value;
  }
  public resetDynatraceSyntheticLocation() {
    this._dynatraceSyntheticLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceSyntheticLocationInput() {
    return this._dynatraceSyntheticLocation;
  }

  // dynatrace_trello_notification - computed: true, optional: true, required: false
  private _dynatraceTrelloNotification?: string[]; 
  public get dynatraceTrelloNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_trello_notification'));
  }
  public set dynatraceTrelloNotification(value: string[]) {
    this._dynatraceTrelloNotification = value;
  }
  public resetDynatraceTrelloNotification() {
    this._dynatraceTrelloNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceTrelloNotificationInput() {
    return this._dynatraceTrelloNotification;
  }

  // dynatrace_update_windows - computed: true, optional: true, required: false
  private _dynatraceUpdateWindows?: string[]; 
  public get dynatraceUpdateWindows() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_update_windows'));
  }
  public set dynatraceUpdateWindows(value: string[]) {
    this._dynatraceUpdateWindows = value;
  }
  public resetDynatraceUpdateWindows() {
    this._dynatraceUpdateWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceUpdateWindowsInput() {
    return this._dynatraceUpdateWindows;
  }

  // dynatrace_usability_analytics - computed: true, optional: true, required: false
  private _dynatraceUsabilityAnalytics?: string[]; 
  public get dynatraceUsabilityAnalytics() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_usability_analytics'));
  }
  public set dynatraceUsabilityAnalytics(value: string[]) {
    this._dynatraceUsabilityAnalytics = value;
  }
  public resetDynatraceUsabilityAnalytics() {
    this._dynatraceUsabilityAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceUsabilityAnalyticsInput() {
    return this._dynatraceUsabilityAnalytics;
  }

  // dynatrace_victor_ops_notification - computed: true, optional: true, required: false
  private _dynatraceVictorOpsNotification?: string[]; 
  public get dynatraceVictorOpsNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_victor_ops_notification'));
  }
  public set dynatraceVictorOpsNotification(value: string[]) {
    this._dynatraceVictorOpsNotification = value;
  }
  public resetDynatraceVictorOpsNotification() {
    this._dynatraceVictorOpsNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceVictorOpsNotificationInput() {
    return this._dynatraceVictorOpsNotification;
  }

  // dynatrace_web_app_anomalies - computed: true, optional: true, required: false
  private _dynatraceWebAppAnomalies?: string[]; 
  public get dynatraceWebAppAnomalies() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_web_app_anomalies'));
  }
  public set dynatraceWebAppAnomalies(value: string[]) {
    this._dynatraceWebAppAnomalies = value;
  }
  public resetDynatraceWebAppAnomalies() {
    this._dynatraceWebAppAnomalies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceWebAppAnomaliesInput() {
    return this._dynatraceWebAppAnomalies;
  }

  // dynatrace_web_app_beacon_origins - computed: true, optional: true, required: false
  private _dynatraceWebAppBeaconOrigins?: string[]; 
  public get dynatraceWebAppBeaconOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_web_app_beacon_origins'));
  }
  public set dynatraceWebAppBeaconOrigins(value: string[]) {
    this._dynatraceWebAppBeaconOrigins = value;
  }
  public resetDynatraceWebAppBeaconOrigins() {
    this._dynatraceWebAppBeaconOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceWebAppBeaconOriginsInput() {
    return this._dynatraceWebAppBeaconOrigins;
  }

  // dynatrace_web_app_enablement - computed: true, optional: true, required: false
  private _dynatraceWebAppEnablement?: string[]; 
  public get dynatraceWebAppEnablement() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_web_app_enablement'));
  }
  public set dynatraceWebAppEnablement(value: string[]) {
    this._dynatraceWebAppEnablement = value;
  }
  public resetDynatraceWebAppEnablement() {
    this._dynatraceWebAppEnablement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceWebAppEnablementInput() {
    return this._dynatraceWebAppEnablement;
  }

  // dynatrace_web_app_resource_cleanup - computed: true, optional: true, required: false
  private _dynatraceWebAppResourceCleanup?: string[]; 
  public get dynatraceWebAppResourceCleanup() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_web_app_resource_cleanup'));
  }
  public set dynatraceWebAppResourceCleanup(value: string[]) {
    this._dynatraceWebAppResourceCleanup = value;
  }
  public resetDynatraceWebAppResourceCleanup() {
    this._dynatraceWebAppResourceCleanup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceWebAppResourceCleanupInput() {
    return this._dynatraceWebAppResourceCleanup;
  }

  // dynatrace_web_app_resource_types - computed: true, optional: true, required: false
  private _dynatraceWebAppResourceTypes?: string[]; 
  public get dynatraceWebAppResourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_web_app_resource_types'));
  }
  public set dynatraceWebAppResourceTypes(value: string[]) {
    this._dynatraceWebAppResourceTypes = value;
  }
  public resetDynatraceWebAppResourceTypes() {
    this._dynatraceWebAppResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceWebAppResourceTypesInput() {
    return this._dynatraceWebAppResourceTypes;
  }

  // dynatrace_web_application - computed: true, optional: true, required: false
  private _dynatraceWebApplication?: string[]; 
  public get dynatraceWebApplication() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_web_application'));
  }
  public set dynatraceWebApplication(value: string[]) {
    this._dynatraceWebApplication = value;
  }
  public resetDynatraceWebApplication() {
    this._dynatraceWebApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceWebApplicationInput() {
    return this._dynatraceWebApplication;
  }

  // dynatrace_webhook_notification - computed: true, optional: true, required: false
  private _dynatraceWebhookNotification?: string[]; 
  public get dynatraceWebhookNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_webhook_notification'));
  }
  public set dynatraceWebhookNotification(value: string[]) {
    this._dynatraceWebhookNotification = value;
  }
  public resetDynatraceWebhookNotification() {
    this._dynatraceWebhookNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceWebhookNotificationInput() {
    return this._dynatraceWebhookNotification;
  }

  // dynatrace_xmatters_notification - computed: true, optional: true, required: false
  private _dynatraceXmattersNotification?: string[]; 
  public get dynatraceXmattersNotification() {
    return cdktf.Fn.tolist(this.getListAttribute('dynatrace_xmatters_notification'));
  }
  public set dynatraceXmattersNotification(value: string[]) {
    this._dynatraceXmattersNotification = value;
  }
  public resetDynatraceXmattersNotification() {
    this._dynatraceXmattersNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceXmattersNotificationInput() {
    return this._dynatraceXmattersNotification;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynatrace_aix_extension: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceAixExtension),
      dynatrace_alerting: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceAlerting),
      dynatrace_ansible_tower_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceAnsibleTowerNotification),
      dynatrace_application_detection_rule: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceApplicationDetectionRule),
      dynatrace_application_error_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceApplicationErrorRules),
      dynatrace_autotag_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceAutotagV2),
      dynatrace_aws_credentials: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceAwsCredentials),
      dynatrace_azure_credentials: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceAzureCredentials),
      dynatrace_browser_monitor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceBrowserMonitor),
      dynatrace_calculated_mobile_metric: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceCalculatedMobileMetric),
      dynatrace_calculated_service_metric: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceCalculatedServiceMetric),
      dynatrace_calculated_synthetic_metric: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceCalculatedSyntheticMetric),
      dynatrace_calculated_web_metric: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceCalculatedWebMetric),
      dynatrace_credentials: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceCredentials),
      dynatrace_custom_app_anomalies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceCustomAppAnomalies),
      dynatrace_custom_app_crash_rate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceCustomAppCrashRate),
      dynatrace_custom_app_enablement: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceCustomAppEnablement),
      dynatrace_custom_service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceCustomService),
      dynatrace_data_privacy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceDataPrivacy),
      dynatrace_database_anomalies_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceDatabaseAnomaliesV2),
      dynatrace_declarative_grouping: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceDeclarativeGrouping),
      dynatrace_disk_anomalies_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceDiskAnomaliesV2),
      dynatrace_disk_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceDiskOptions),
      dynatrace_disk_specific_anomalies_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceDiskSpecificAnomaliesV2),
      dynatrace_email_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceEmailNotification),
      dynatrace_extension_execution_controller: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceExtensionExecutionController),
      dynatrace_generic_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceGenericTypes),
      dynatrace_host_anomalies_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceHostAnomaliesV2),
      dynatrace_host_naming: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceHostNaming),
      dynatrace_host_process_group_monitoring: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceHostProcessGroupMonitoring),
      dynatrace_http_monitor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceHttpMonitor),
      dynatrace_ims_bridges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceImsBridges),
      dynatrace_jira_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceJiraNotification),
      dynatrace_k8s_namespace_anomalies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceK8SNamespaceAnomalies),
      dynatrace_key_requests: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceKeyRequests),
      dynatrace_log_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceLogMetrics),
      dynatrace_maintenance: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMaintenance),
      dynatrace_management_zone_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceManagementZoneV2),
      dynatrace_metric_events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMetricEvents),
      dynatrace_mobile_app_anomalies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMobileAppAnomalies),
      dynatrace_mobile_app_crash_rate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMobileAppCrashRate),
      dynatrace_mobile_app_enablement: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMobileAppEnablement),
      dynatrace_mobile_application: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMobileApplication),
      dynatrace_monitored_technologies_apache: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesApache),
      dynatrace_monitored_technologies_dotnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesDotnet),
      dynatrace_monitored_technologies_go: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesGo),
      dynatrace_monitored_technologies_iis: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesIis),
      dynatrace_monitored_technologies_java: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesJava),
      dynatrace_monitored_technologies_nginx: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesNginx),
      dynatrace_monitored_technologies_nodejs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesNodejs),
      dynatrace_monitored_technologies_opentracing: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesOpentracing),
      dynatrace_monitored_technologies_php: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesPhp),
      dynatrace_monitored_technologies_varnish: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesVarnish),
      dynatrace_monitored_technologies_wsmb: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMonitoredTechnologiesWsmb),
      dynatrace_muted_requests: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceMutedRequests),
      dynatrace_nettracer: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceNettracer),
      dynatrace_oneagent_features: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceOneagentFeatures),
      dynatrace_ops_genie_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceOpsGenieNotification),
      dynatrace_pager_duty_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatracePagerDutyNotification),
      dynatrace_pg_alerting: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatracePgAlerting),
      dynatrace_process_availability: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessAvailability),
      dynatrace_process_group_detection: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessGroupDetection),
      dynatrace_process_group_detection_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessGroupDetectionFlags),
      dynatrace_process_group_monitoring: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessGroupMonitoring),
      dynatrace_process_group_rum: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessGroupRum),
      dynatrace_process_group_simple_detection: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessGroupSimpleDetection),
      dynatrace_process_monitoring: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessMonitoring),
      dynatrace_process_monitoring_rule: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessMonitoringRule),
      dynatrace_process_visibility: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessVisibility),
      dynatrace_processgroup_naming: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceProcessgroupNaming),
      dynatrace_queue_manager: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceQueueManager),
      dynatrace_queue_sharing_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceQueueSharingGroups),
      dynatrace_request_attribute: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceRequestAttribute),
      dynatrace_request_naming: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceRequestNaming),
      dynatrace_rum_advanced_correlation: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceRumAdvancedCorrelation),
      dynatrace_rum_ip_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceRumIpLocations),
      dynatrace_rum_provider_breakdown: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceRumProviderBreakdown),
      dynatrace_service_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceServiceFailure),
      dynatrace_service_http_failure: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceServiceHttpFailure),
      dynatrace_service_naming: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceServiceNaming),
      dynatrace_service_now_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceServiceNowNotification),
      dynatrace_session_replay_web_privacy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceSessionReplayWebPrivacy),
      dynatrace_slack_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceSlackNotification),
      dynatrace_slo_v2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceSloV2),
      dynatrace_span_capture_rule: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceSpanCaptureRule),
      dynatrace_span_context_propagation: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceSpanContextPropagation),
      dynatrace_synthetic_location: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceSyntheticLocation),
      dynatrace_trello_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceTrelloNotification),
      dynatrace_update_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceUpdateWindows),
      dynatrace_usability_analytics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceUsabilityAnalytics),
      dynatrace_victor_ops_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceVictorOpsNotification),
      dynatrace_web_app_anomalies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceWebAppAnomalies),
      dynatrace_web_app_beacon_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceWebAppBeaconOrigins),
      dynatrace_web_app_enablement: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceWebAppEnablement),
      dynatrace_web_app_resource_cleanup: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceWebAppResourceCleanup),
      dynatrace_web_app_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceWebAppResourceTypes),
      dynatrace_web_application: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceWebApplication),
      dynatrace_webhook_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceWebhookNotification),
      dynatrace_xmatters_notification: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynatraceXmattersNotification),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynatrace_aix_extension: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceAixExtension),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_alerting: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceAlerting),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_ansible_tower_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceAnsibleTowerNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_application_detection_rule: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceApplicationDetectionRule),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_application_error_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceApplicationErrorRules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_autotag_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceAutotagV2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_aws_credentials: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceAwsCredentials),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_azure_credentials: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceAzureCredentials),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_browser_monitor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceBrowserMonitor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_calculated_mobile_metric: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceCalculatedMobileMetric),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_calculated_service_metric: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceCalculatedServiceMetric),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_calculated_synthetic_metric: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceCalculatedSyntheticMetric),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_calculated_web_metric: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceCalculatedWebMetric),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_credentials: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceCredentials),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_custom_app_anomalies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceCustomAppAnomalies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_custom_app_crash_rate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceCustomAppCrashRate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_custom_app_enablement: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceCustomAppEnablement),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_custom_service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceCustomService),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_data_privacy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceDataPrivacy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_database_anomalies_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceDatabaseAnomaliesV2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_declarative_grouping: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceDeclarativeGrouping),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_disk_anomalies_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceDiskAnomaliesV2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_disk_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceDiskOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_disk_specific_anomalies_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceDiskSpecificAnomaliesV2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_email_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceEmailNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_extension_execution_controller: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceExtensionExecutionController),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_generic_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceGenericTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_host_anomalies_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceHostAnomaliesV2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_host_naming: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceHostNaming),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_host_process_group_monitoring: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceHostProcessGroupMonitoring),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_http_monitor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceHttpMonitor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_ims_bridges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceImsBridges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_jira_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceJiraNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_k8s_namespace_anomalies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceK8SNamespaceAnomalies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_key_requests: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceKeyRequests),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_log_metrics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceLogMetrics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_maintenance: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMaintenance),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_management_zone_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceManagementZoneV2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_metric_events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMetricEvents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_mobile_app_anomalies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMobileAppAnomalies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_mobile_app_crash_rate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMobileAppCrashRate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_mobile_app_enablement: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMobileAppEnablement),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_mobile_application: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMobileApplication),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_apache: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesApache),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_dotnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesDotnet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_go: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesGo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_iis: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesIis),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_java: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesJava),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_nginx: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesNginx),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_nodejs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesNodejs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_opentracing: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesOpentracing),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_php: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesPhp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_varnish: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesVarnish),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_monitored_technologies_wsmb: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMonitoredTechnologiesWsmb),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_muted_requests: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceMutedRequests),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_nettracer: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceNettracer),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_oneagent_features: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceOneagentFeatures),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_ops_genie_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceOpsGenieNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_pager_duty_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatracePagerDutyNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_pg_alerting: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatracePgAlerting),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_process_availability: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessAvailability),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_process_group_detection: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessGroupDetection),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_process_group_detection_flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessGroupDetectionFlags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_process_group_monitoring: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessGroupMonitoring),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_process_group_rum: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessGroupRum),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_process_group_simple_detection: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessGroupSimpleDetection),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_process_monitoring: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessMonitoring),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_process_monitoring_rule: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessMonitoringRule),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_process_visibility: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessVisibility),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_processgroup_naming: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceProcessgroupNaming),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_queue_manager: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceQueueManager),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_queue_sharing_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceQueueSharingGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_request_attribute: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceRequestAttribute),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_request_naming: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceRequestNaming),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_rum_advanced_correlation: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceRumAdvancedCorrelation),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_rum_ip_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceRumIpLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_rum_provider_breakdown: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceRumProviderBreakdown),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_service_failure: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceServiceFailure),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_service_http_failure: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceServiceHttpFailure),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_service_naming: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceServiceNaming),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_service_now_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceServiceNowNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_session_replay_web_privacy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceSessionReplayWebPrivacy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_slack_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceSlackNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_slo_v2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceSloV2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_span_capture_rule: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceSpanCaptureRule),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_span_context_propagation: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceSpanContextPropagation),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_synthetic_location: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceSyntheticLocation),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_trello_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceTrelloNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_update_windows: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceUpdateWindows),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_usability_analytics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceUsabilityAnalytics),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_victor_ops_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceVictorOpsNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_web_app_anomalies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceWebAppAnomalies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_web_app_beacon_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceWebAppBeaconOrigins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_web_app_enablement: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceWebAppEnablement),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_web_app_resource_cleanup: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceWebAppResourceCleanup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_web_app_resource_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceWebAppResourceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_web_application: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceWebApplication),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_webhook_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceWebhookNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynatrace_xmatters_notification: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynatraceXmattersNotification),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
