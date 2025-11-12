// https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SavedSearchesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabled XSOAR Alert Sending.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_create_xsoar_incident SavedSearches#action_create_xsoar_incident}
  */
  readonly actionCreateXsoarIncident?: string;
  /**
  * Enter the XSOAR incident custom_fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_create_xsoar_incident_param_custom_fields SavedSearches#action_create_xsoar_incident_param_custom_fields}
  */
  readonly actionCreateXsoarIncidentParamCustomFields?: string;
  /**
  * Enter the XSOAR incident details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_create_xsoar_incident_param_details SavedSearches#action_create_xsoar_incident_param_details}
  */
  readonly actionCreateXsoarIncidentParamDetails?: string;
  /**
  * Enter the XSOAR incident name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_create_xsoar_incident_param_incident_name SavedSearches#action_create_xsoar_incident_param_incident_name}
  */
  readonly actionCreateXsoarIncidentParamIncidentName?: string;
  /**
  * Eneter the XSOAR incident occurred datetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_create_xsoar_incident_param_occurred SavedSearches#action_create_xsoar_incident_param_occurred}
  */
  readonly actionCreateXsoarIncidentParamOccurred?: string;
  /**
  * Enabled XSOAR alert sending to all servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_create_xsoar_incident_param_send_all_servers SavedSearches#action_create_xsoar_incident_param_send_all_servers}
  */
  readonly actionCreateXsoarIncidentParamSendAllServers?: string;
  /**
  * Enter the XSOAR server URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_create_xsoar_incident_param_server_url SavedSearches#action_create_xsoar_incident_param_server_url}
  */
  readonly actionCreateXsoarIncidentParamServerUrl?: string;
  /**
  * Enter the XSOAR incident serverity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_create_xsoar_incident_param_severity SavedSearches#action_create_xsoar_incident_param_severity}
  */
  readonly actionCreateXsoarIncidentParamSeverity?: string;
  /**
  * Enter the XSOAR incident type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_create_xsoar_incident_param_type SavedSearches#action_create_xsoar_incident_param_type}
  */
  readonly actionCreateXsoarIncidentParamType?: string;
  /**
  * The password to use when authenticating with the SMTP server. Normally this value is set when editing the email settings, however you can set a clear text password here and it is encrypted on the next platform restart.Defaults to empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_auth_password SavedSearches#action_email_auth_password}
  */
  readonly actionEmailAuthPassword?: string;
  /**
  * The username to use when authenticating with the SMTP server. If this is empty string, no authentication is attempted. Defaults to empty stringNOTE: Your SMTP server might reject unauthenticated emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_auth_username SavedSearches#action_email_auth_username}
  */
  readonly actionEmailAuthUsername?: string;
  /**
  * BCC email address to use if action.email is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_bcc SavedSearches#action_email_bcc}
  */
  readonly actionEmailBcc?: string;
  /**
  * CC email address to use if action.email is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_cc SavedSearches#action_email_cc}
  */
  readonly actionEmailCc?: string;
  /**
  * The search command (or pipeline) which is responsible for executing the action.Generally the command is a template search pipeline which is realized with values from the saved search. To reference saved search field values wrap them in $, for example to reference the savedsearch name use $name$, to reference the search use $search$. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_command SavedSearches#action_email_command}
  */
  readonly actionEmailCommand?: string;
  /**
  * Valid values: (table | plain | html | raw | csv)Specify the format of text in the email. This value also applies to any attachments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_format SavedSearches#action_email_format}
  */
  readonly actionEmailFormat?: string;
  /**
  * Email address from which the email action originates.Defaults to splunk@$LOCALHOST or whatever value is set in alert_actions.conf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_from SavedSearches#action_email_from}
  */
  readonly actionEmailFrom?: string;
  /**
  * Sets the hostname used in the web link (url) sent in email actions.This value accepts two forms:hostname (for example, splunkserver, splunkserver.example.com) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_hostname SavedSearches#action_email_hostname}
  */
  readonly actionEmailHostname?: string;
  /**
  * Specify whether to include a link to the results. [1|0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_include_results_link SavedSearches#action_email_include_results_link}
  */
  readonly actionEmailIncludeResultsLink?: number;
  /**
  * Specify whether to include the search that caused an email to be sent. [1|0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_include_search SavedSearches#action_email_include_search}
  */
  readonly actionEmailIncludeSearch?: number;
  /**
  * Specify whether to show the trigger condition that caused the alert to fire. [1|0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_include_trigger SavedSearches#action_email_include_trigger}
  */
  readonly actionEmailIncludeTrigger?: number;
  /**
  * Specify whether to show the time that the alert was fired. [1|0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_include_trigger_time SavedSearches#action_email_include_trigger_time}
  */
  readonly actionEmailIncludeTriggerTime?: number;
  /**
  * Specify whether to show the title and a link to enable the user to edit the saved search. [1|0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_include_view_link SavedSearches#action_email_include_view_link}
  */
  readonly actionEmailIncludeViewLink?: number;
  /**
  * Indicates whether the search results are contained in the body of the email.Results can be either inline or attached to an email. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_inline SavedSearches#action_email_inline}
  */
  readonly actionEmailInline?: boolean | cdktf.IResolvable;
  /**
  * Set the address of the MTA server to be used to send the emails.Defaults to <LOCALHOST> or whatever is set in alert_actions.conf. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_mailserver SavedSearches#action_email_mailserver}
  */
  readonly actionEmailMailserver?: string;
  /**
  * Sets the global maximum number of search results to send when email.action is enabled. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_max_results SavedSearches#action_email_max_results}
  */
  readonly actionEmailMaxResults?: number;
  /**
  * Valid values are Integer[m|s|h|d].Specifies the maximum amount of time the execution of an email action takes before the action is aborted. Defaults to 5m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_max_time SavedSearches#action_email_max_time}
  */
  readonly actionEmailMaxTime?: string;
  /**
  * Message sent in the emailed alert. Defaults to: The alert condition for '$name$' was triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_message_alert SavedSearches#action_email_message_alert}
  */
  readonly actionEmailMessageAlert?: string;
  /**
  * Message sent in the emailed report. Defaults to: The scheduled report '$name$' has run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_message_report SavedSearches#action_email_message_report}
  */
  readonly actionEmailMessageReport?: string;
  /**
  * The name of the view to deliver if sendpdf is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_pdfview SavedSearches#action_email_pdfview}
  */
  readonly actionEmailPdfview?: string;
  /**
  * Search string to preprocess results before emailing them. Defaults to empty string (no preprocessing).Usually the preprocessing consists of filtering out unwanted internal fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_preprocess_results SavedSearches#action_email_preprocess_results}
  */
  readonly actionEmailPreprocessResults?: string;
  /**
  * Space-separated list. Specifies the set (and load order) of CID fonts for handling Simplified Chinese(gb), Traditional Chinese(cns), Japanese(jp), and Korean(kor) in Integrated PDF Rendering.If multiple fonts provide a glyph for a given character code, the glyph from the first font specified in the list is used.To skip loading any CID fonts, specify the empty string.Defaults to 'gb cns jp kor'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_report_cid_font_list SavedSearches#action_email_report_cid_font_list}
  */
  readonly actionEmailReportCidFontList?: string;
  /**
  * Indicates whether to include the Splunk logo with the report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_report_include_splunk_logo SavedSearches#action_email_report_include_splunk_logo}
  */
  readonly actionEmailReportIncludeSplunkLogo?: boolean | cdktf.IResolvable;
  /**
  * Valid values: (portrait | landscape)Specifies the paper orientation: portrait or landscape. Defaults to portrait.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_report_paper_orientation SavedSearches#action_email_report_paper_orientation}
  */
  readonly actionEmailReportPaperOrientation?: string;
  /**
  * Valid values: (letter | legal | ledger | a2 | a3 | a4 | a5)Specifies the paper size for PDFs. Defaults to letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_report_paper_size SavedSearches#action_email_report_paper_size}
  */
  readonly actionEmailReportPaperSize?: string;
  /**
  * No Supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_report_server_enabled SavedSearches#action_email_report_server_enabled}
  */
  readonly actionEmailReportServerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Not supported.For a default locally installed report server, the URL is http://localhost:8091/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_report_server_url SavedSearches#action_email_report_server_url}
  */
  readonly actionEmailReportServerUrl?: string;
  /**
  * Specify whether to send results as a CSV file. Default: 0 (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_send_csv SavedSearches#action_email_send_csv}
  */
  readonly actionEmailSendCsv?: number;
  /**
  * Indicates whether to create and send the results as a PDF. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_send_pdf SavedSearches#action_email_send_pdf}
  */
  readonly actionEmailSendPdf?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to attach the search results in the email.Results can be either attached or inline. See action.email.inline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_send_results SavedSearches#action_email_send_results}
  */
  readonly actionEmailSendResults?: boolean | cdktf.IResolvable;
  /**
  * Specifies an alternate email subject.Defaults to SplunkAlert-<savedsearchname>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_subject SavedSearches#action_email_subject}
  */
  readonly actionEmailSubject?: string;
  /**
  * A comma or semicolon separated list of recipient email addresses. Required if this search is scheduled and the email alert action is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_to SavedSearches#action_email_to}
  */
  readonly actionEmailTo?: string;
  /**
  * Indicates whether the execution of this action signifies a trackable alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_track_alert SavedSearches#action_email_track_alert}
  */
  readonly actionEmailTrackAlert?: boolean | cdktf.IResolvable;
  /**
  * Valid values are Integer[p].Specifies the minimum time-to-live in seconds of the search artifacts if this action is triggered. If p follows <Integer>, int is the number of scheduled periods. Defaults to 86400 (24 hours).If no actions are triggered, the artifacts have their ttl determined by dispatch.ttl in savedsearches.conf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_ttl SavedSearches#action_email_ttl}
  */
  readonly actionEmailTtl?: string;
  /**
  * Indicates whether to use SSL when communicating with the SMTP server. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_use_ssl SavedSearches#action_email_use_ssl}
  */
  readonly actionEmailUseSsl?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use TLS (transport layer security) when communicating with the SMTP server (starttls).Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_use_tls SavedSearches#action_email_use_tls}
  */
  readonly actionEmailUseTls?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether columns should be sorted from least wide to most wide, left to right.Only valid if format=text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_email_width_sort_columns SavedSearches#action_email_width_sort_columns}
  */
  readonly actionEmailWidthSortColumns?: boolean | cdktf.IResolvable;
  /**
  * This is where you would put the account name you set in the Jira Service Desk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_jira_service_desk_param_account SavedSearches#action_jira_service_desk_param_account}
  */
  readonly actionJiraServiceDeskParamAccount?: string;
  /**
  * Enter custom fields data for the issue created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_jira_service_desk_param_jira_customfields SavedSearches#action_jira_service_desk_param_jira_customfields}
  */
  readonly actionJiraServiceDeskParamJiraCustomfields?: string;
  /**
  * Enter the description of issue created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_jira_service_desk_param_jira_description SavedSearches#action_jira_service_desk_param_jira_description}
  */
  readonly actionJiraServiceDeskParamJiraDescription?: string;
  /**
  * Jira Issue Type you would like to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_jira_service_desk_param_jira_issue_type SavedSearches#action_jira_service_desk_param_jira_issue_type}
  */
  readonly actionJiraServiceDeskParamJiraIssueType?: string;
  /**
  * Priority of issue created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_jira_service_desk_param_jira_priority SavedSearches#action_jira_service_desk_param_jira_priority}
  */
  readonly actionJiraServiceDeskParamJiraPriority?: string;
  /**
  * Jira Project where the issue will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_jira_service_desk_param_jira_project SavedSearches#action_jira_service_desk_param_jira_project}
  */
  readonly actionJiraServiceDeskParamJiraProject?: string;
  /**
  * Jira Issue Summary or title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_jira_service_desk_param_jira_summary SavedSearches#action_jira_service_desk_param_jira_summary}
  */
  readonly actionJiraServiceDeskParamJiraSummary?: string;
  /**
  * Enabled event logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_logevent SavedSearches#action_logevent}
  */
  readonly actionLogevent?: string;
  /**
  * Event text for the logged event entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_logevent_param_event SavedSearches#action_logevent_param_event}
  */
  readonly actionLogeventParamEvent?: string;
  /**
  * Value of the host field for the logged event entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_logevent_param_host SavedSearches#action_logevent_param_host}
  */
  readonly actionLogeventParamHost?: string;
  /**
  * Destination index for the logged event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_logevent_param_index SavedSearches#action_logevent_param_index}
  */
  readonly actionLogeventParamIndex?: string;
  /**
  * Value of the source field for the logged event entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_logevent_param_source SavedSearches#action_logevent_param_source}
  */
  readonly actionLogeventParamSource?: string;
  /**
  * Destination sourcetype for the logged event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_logevent_param_sourcetype SavedSearches#action_logevent_param_sourcetype}
  */
  readonly actionLogeventParamSourcetype?: string;
  /**
  * The PagerDuty custom details information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_pagerduty_custom_details SavedSearches#action_pagerduty_custom_details}
  */
  readonly actionPagerdutyCustomDetails?: string;
  /**
  * The PagerDuty integration Key.NOTE: None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_pagerduty_integration_key SavedSearches#action_pagerduty_integration_key}
  */
  readonly actionPagerdutyIntegrationKey?: string;
  /**
  * The PagerDuty integration Key override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_pagerduty_integration_key_override SavedSearches#action_pagerduty_integration_key_override}
  */
  readonly actionPagerdutyIntegrationKeyOverride?: string;
  /**
  * The pagerduty integration URL. This integration uses Splunk's native webhooks to send events to PagerDuty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_pagerduty_integration_url SavedSearches#action_pagerduty_integration_url}
  */
  readonly actionPagerdutyIntegrationUrl?: string;
  /**
  * The pagerduty integration URL override. This integration uses Splunk's native webhooks to send events to PagerDuty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_pagerduty_integration_url_override SavedSearches#action_pagerduty_integration_url_override}
  */
  readonly actionPagerdutyIntegrationUrlOverride?: string;
  /**
  * The search command (or pipeline) which is responsible for executing the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_populate_lookup_command SavedSearches#action_populate_lookup_command}
  */
  readonly actionPopulateLookupCommand?: string;
  /**
  * Lookup name of path of the lookup to populate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_populate_lookup_dest SavedSearches#action_populate_lookup_dest}
  */
  readonly actionPopulateLookupDest?: string;
  /**
  * Sets the hostname used in the web link (url) sent in alert actions.This value accepts two forms: hostname (for example, splunkserver, splunkserver.example.com)
  * 
  * protocol://hostname:port (for example, http://splunkserver:8000, https://splunkserver.example.com:443)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_populate_lookup_hostname SavedSearches#action_populate_lookup_hostname}
  */
  readonly actionPopulateLookupHostname?: string;
  /**
  * Sets the maximum number of search results sent using alerts. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_populate_lookup_max_results SavedSearches#action_populate_lookup_max_results}
  */
  readonly actionPopulateLookupMaxResults?: number;
  /**
  * Valid values are: Integer[m|s|h|d]Sets the maximum amount of time the execution of an action takes before the action is aborted. Defaults to 5m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_populate_lookup_max_time SavedSearches#action_populate_lookup_max_time}
  */
  readonly actionPopulateLookupMaxTime?: number;
  /**
  * Indicates whether the execution of this action signifies a trackable alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_populate_lookup_track_alert SavedSearches#action_populate_lookup_track_alert}
  */
  readonly actionPopulateLookupTrackAlert?: boolean | cdktf.IResolvable;
  /**
  * Valid values are Integer[p]Specifies the minimum time-to-live in seconds of the search artifacts if this action is triggered. If p follows Integer, then this specifies the number of scheduled periods. Defaults to 10p.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_populate_lookup_ttl SavedSearches#action_populate_lookup_ttl}
  */
  readonly actionPopulateLookupTtl?: string;
  /**
  * The search command (or pipeline) which is responsible for executing the action.Generally the command is a template search pipeline which is realized with values from the saved search. To reference saved search field values wrap them in $, for example to reference the savedsearch name use $name$, to reference the search use $search$.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_rss_command SavedSearches#action_rss_command}
  */
  readonly actionRssCommand?: string;
  /**
  * Sets the hostname used in the web link (url) sent in alert actions.This value accepts two forms:hostname (for example, splunkserver, splunkserver.example.com)
  * 
  * protocol://hostname:port (for example, http://splunkserver:8000, https://splunkserver.example.com:443)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_rss_hostname SavedSearches#action_rss_hostname}
  */
  readonly actionRssHostname?: string;
  /**
  * Sets the maximum number of search results sent using alerts. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_rss_max_results SavedSearches#action_rss_max_results}
  */
  readonly actionRssMaxResults?: number;
  /**
  * Valid values are Integer[m|s|h|d].Sets the maximum amount of time the execution of an action takes before the action is aborted. Defaults to 1m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_rss_max_time SavedSearches#action_rss_max_time}
  */
  readonly actionRssMaxTime?: number;
  /**
  * Indicates whether the execution of this action signifies a trackable alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_rss_track_alert SavedSearches#action_rss_track_alert}
  */
  readonly actionRssTrackAlert?: boolean | cdktf.IResolvable;
  /**
  * Valid values are: Integer[p] Specifies the minimum time-to-live in seconds of the search artifacts if this action is triggered. If p follows Integer, specifies the number of scheduled periods. Defaults to 86400 (24 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_rss_ttl SavedSearches#action_rss_ttl}
  */
  readonly actionRssTtl?: string;
  /**
  * The search command (or pipeline) which is responsible for executing the action.Generally the command is a template search pipeline which is realized with values from the saved search. To reference saved search field values wrap them in $, for example to reference the savedsearch name use $name$, to reference the search use $search$.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_script_command SavedSearches#action_script_command}
  */
  readonly actionScriptCommand?: string;
  /**
  * File name of the script to call. Required if script action is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_script_filename SavedSearches#action_script_filename}
  */
  readonly actionScriptFilename?: string;
  /**
  * Sets the hostname used in the web link (url) sent in alert actions.This value accepts two forms:hostname (for example, splunkserver, splunkserver.example.com)
  * 
  * protocol://hostname:port (for example, http://splunkserver:8000, https://splunkserver.example.com:443)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_script_hostname SavedSearches#action_script_hostname}
  */
  readonly actionScriptHostname?: string;
  /**
  * Sets the maximum number of search results sent using alerts. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_script_max_results SavedSearches#action_script_max_results}
  */
  readonly actionScriptMaxResults?: number;
  /**
  * Valid values are Integer[m|s|h|d].Sets the maximum amount of time the execution of an action takes before the action is aborted. Defaults to 1m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_script_max_time SavedSearches#action_script_max_time}
  */
  readonly actionScriptMaxTime?: number;
  /**
  * Indicates whether the execution of this action signifies a trackable alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_script_track_alert SavedSearches#action_script_track_alert}
  */
  readonly actionScriptTrackAlert?: boolean | cdktf.IResolvable;
  /**
  * Valid values are: Integer[p] Specifies the minimum time-to-live in seconds of the search artifacts if this action is triggered. If p follows Integer, specifies the number of scheduled periods. Defaults to 86400 (24 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_script_ttl SavedSearches#action_script_ttl}
  */
  readonly actionScriptTtl?: string;
  /**
  * Optionally include a message attachment. Valid values are message, alert_link, or none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_slack_param_attachment SavedSearches#action_slack_param_attachment}
  */
  readonly actionSlackParamAttachment?: string;
  /**
  * Slack channel to send the message to (Should start with # or @)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_slack_param_channel SavedSearches#action_slack_param_channel}
  */
  readonly actionSlackParamChannel?: string;
  /**
  * Show one or more fields from the search results below your Slack message. Comma-separated list of field names. Allows wildcards. eg. index,source*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_slack_param_fields SavedSearches#action_slack_param_fields}
  */
  readonly actionSlackParamFields?: string;
  /**
  * Enter the chat message to send to the Slack channel. The message can include tokens that insert text based on the results of the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_slack_param_message SavedSearches#action_slack_param_message}
  */
  readonly actionSlackParamMessage?: string;
  /**
  * You can override the Slack webhook URL here if you need to send the alert message to a different Slack team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_slack_param_webhook_url_override SavedSearches#action_slack_param_webhook_url_override}
  */
  readonly actionSlackParamWebhookUrlOverride?: string;
  /**
  * Account(s) for which the event is/ are to be created across ServiceNow instance(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_snow_event_param_account SavedSearches#action_snow_event_param_account}
  */
  readonly actionSnowEventParamAccount?: string;
  /**
  * You can pass additional information that might be of use to the user. This field can also be used to supply the URL of your Splunk search head. When you use the snow_event.py alert-triggered script, the Splunk platform uses the URL to create a deep link that allows a ServiceNow user to navigate back to this Splunk platform search. You can find the resulting full URL for navigation from ServiceNow to the Splunk platform search by clicking Splunk Drilldown in the event page in ServiceNow. See an example below. Note that if you create events using the commands snowevent or snoweventstream, you must supply the URL in this field.You can pass the URL of Splunk as url=<value>. You can also pass other fields and their values by || separated key-value format. For example, url=<value>||k1=v1||k2=v2||....
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_snow_event_param_additional_info SavedSearches#action_snow_event_param_additional_info}
  */
  readonly actionSnowEventParamAdditionalInfo?: string;
  /**
  * String that represents a configuration item in your network. You can pass value as || separated key-value format. For example, k1=v1||k2=v2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_snow_event_param_ci_identifier SavedSearches#action_snow_event_param_ci_identifier}
  */
  readonly actionSnowEventParamCiIdentifier?: string;
  /**
  * The custom fields which are configured at the ServiceNow Instance. You can pass the custom fields and their values in the || separated format. For example, custom_field1=value1||custom_field2=value2||...custom_fields used must be present in the em_event table of ServiceNow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_snow_event_param_custom_fields SavedSearches#action_snow_event_param_custom_fields}
  */
  readonly actionSnowEventParamCustomFields?: string;
  /**
  * 	A brief description of the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_snow_event_param_description SavedSearches#action_snow_event_param_description}
  */
  readonly actionSnowEventParamDescription?: string;
  /**
  * The node, formatted to follow your organization's ITIL standards and mapping. If the node value matches a CI with the same host name, the event is automatically assigned to the matching CI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_snow_event_param_node SavedSearches#action_snow_event_param_node}
  */
  readonly actionSnowEventParamNode?: string;
  /**
  * The resource, formatted to follow your organization's ITIL standards and mapping. For example, resource='CPU'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_snow_event_param_resource SavedSearches#action_snow_event_param_resource}
  */
  readonly actionSnowEventParamResource?: string;
  /**
  * The severity associated with the event. 0 - Clear 1 - Critical 2 - Major 3 - Minor 4 - Warning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_snow_event_param_severity SavedSearches#action_snow_event_param_severity}
  */
  readonly actionSnowEventParamSeverity?: number;
  /**
  * The type, formatted to follow your organization's ITIL standards and mapping. For example, type='Virtual Machine'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_snow_event_param_type SavedSearches#action_snow_event_param_type}
  */
  readonly actionSnowEventParamType?: string;
  /**
  * The search command (or pipeline) which is responsible for executing the action.Generally the command is a template search pipeline which is realized with values from the saved search. To reference saved search field values wrap them in $, for example to reference the savedsearch name use $name$, to reference the search use $search$.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_summary_index_command SavedSearches#action_summary_index_command}
  */
  readonly actionSummaryIndexCommand?: string;
  /**
  * Sets the hostname used in the web link (url) sent in summary-index alert actions.This value accepts two forms:hostname (for example, splunkserver, splunkserver.example.com)protocol://hostname:port (for example, http://splunkserver:8000, https://splunkserver.example.com:443)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_summary_index_hostname SavedSearches#action_summary_index_hostname}
  */
  readonly actionSummaryIndexHostname?: string;
  /**
  * Determines whether to execute the summary indexing action as part of the scheduled search.NOTE: This option is considered only if the summary index action is enabled and is always executed (in other words, if counttype = always).Defaults to true 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_summary_index_inline SavedSearches#action_summary_index_inline}
  */
  readonly actionSummaryIndexInline?: boolean | cdktf.IResolvable;
  /**
  * Sets the maximum number of search results sent using alerts. Defaults to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_summary_index_max_results SavedSearches#action_summary_index_max_results}
  */
  readonly actionSummaryIndexMaxResults?: number;
  /**
  * Valid values are Integer[m|s|h|d].Sets the maximum amount of time the execution of an action takes before the action is aborted. Defaults to 1m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_summary_index_max_time SavedSearches#action_summary_index_max_time}
  */
  readonly actionSummaryIndexMaxTime?: number;
  /**
  * Specifies the name of the summary index where the results of the scheduled search are saved.Defaults to summary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_summary_index_name SavedSearches#action_summary_index_name}
  */
  readonly actionSummaryIndexName?: string;
  /**
  * Indicates whether the execution of this action signifies a trackable alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_summary_index_track_alert SavedSearches#action_summary_index_track_alert}
  */
  readonly actionSummaryIndexTrackAlert?: boolean | cdktf.IResolvable;
  /**
  * Valid values are: Integer[p] Specifies the minimum time-to-live in seconds of the search artifacts if this action is triggered. If p follows Integer, specifies the number of scheduled periods. Defaults to 86400 (24 hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_summary_index_ttl SavedSearches#action_summary_index_ttl}
  */
  readonly actionSummaryIndexTtl?: string;
  /**
  * URL to send the HTTP POST request to. Must be accessible from the Splunk server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#action_webhook_param_url SavedSearches#action_webhook_param_url}
  */
  readonly actionWebhookParamUrl?: string;
  /**
  * A comma-separated list of actions to enable. For example: rss,email 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#actions SavedSearches#actions}
  */
  readonly actions?: string;
  /**
  * One of the following strings: greater than, less than, equal to, rises by, drops by, rises by perc, drops by percUsed with alert_threshold to trigger alert actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_comparator SavedSearches#alert_comparator}
  */
  readonly alertComparator?: string;
  /**
  * Contains a conditional search that is evaluated against the results of the saved search. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_condition SavedSearches#alert_condition}
  */
  readonly alertCondition?: string;
  /**
  * Specifies whether alert actions are applied to the entire result set or on each individual result.Defaults to 1 (true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_digest_mode SavedSearches#alert_digest_mode}
  */
  readonly alertDigestMode?: boolean | cdktf.IResolvable;
  /**
  * Valid values: [number][time-unit]Sets the period of time to show the alert in the dashboard. Defaults to 24h.Use [number][time-unit] to specify a time. For example: 60 = 60 seconds, 1m = 1 minute, 1h = 60 minutes = 1 hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_expires SavedSearches#alert_expires}
  */
  readonly alertExpires?: string;
  /**
  * Valid values: (1 | 2 | 3 | 4 | 5 | 6) Sets the alert severity level.Valid values are:1 DEBUG 2 INFO 3 WARN 4 ERROR 5 SEVERE 6 FATAL Defaults to 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_severity SavedSearches#alert_severity}
  */
  readonly alertSeverity?: number;
  /**
  * Indicates whether alert suppression is enabled for this scheduled search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_suppress SavedSearches#alert_suppress}
  */
  readonly alertSuppress?: boolean | cdktf.IResolvable;
  /**
  * Comma delimited list of fields to use for suppression when doing per result alerting. Required if suppression is turned on and per result alerting is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_suppress_fields SavedSearches#alert_suppress_fields}
  */
  readonly alertSuppressFields?: string;
  /**
  * Valid values: [number][time-unit] Specifies the suppresion period. Only valid if alert.supress is enabled.Use [number][time-unit] to specify a time. For example: 60 = 60 seconds, 1m = 1 minute, 1h = 60 minutes = 1 hour. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_suppress_period SavedSearches#alert_suppress_period}
  */
  readonly alertSuppressPeriod?: string;
  /**
  * Valid values are: Integer[%]Specifies the value to compare (see alert_comparator) before triggering the alert actions. If expressed as a percentage, indicates value to use when alert_comparator is set to rises by perc or drops by perc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_threshold SavedSearches#alert_threshold}
  */
  readonly alertThreshold?: string;
  /**
  * Valid values: (true | false | auto) Specifies whether to track the actions triggered by this scheduled search.auto - determine whether to track or not based on the tracking setting of each action, do not track scheduled searches that always trigger actions. Default value true - force alert tracking.false - disable alert tracking for this search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_track SavedSearches#alert_track}
  */
  readonly alertTrack?: boolean | cdktf.IResolvable;
  /**
  * What to base the alert on, overriden by alert_condition if it is specified. Valid values are: always, custom, number of events, number of hosts, number of sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#alert_type SavedSearches#alert_type}
  */
  readonly alertType?: string;
  /**
  * Allows the search scheduler to distribute scheduled searches randomly and more evenly over their specified search periods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#allow_skew SavedSearches#allow_skew}
  */
  readonly allowSkew?: string;
  /**
  * Indicates whether the scheduler should ensure that the data for this search is automatically summarized. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize SavedSearches#auto_summarize}
  */
  readonly autoSummarize?: boolean | cdktf.IResolvable;
  /**
  * An auto summarization template for this search. See auto summarization options in savedsearches.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_command SavedSearches#auto_summarize_command}
  */
  readonly autoSummarizeCommand?: string;
  /**
  * Cron schedule that probes and generates the summaries for this saved search.The default value is * /10 * * * * and corresponds to "every ten hours".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_cron_schedule SavedSearches#auto_summarize_cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly autoSummarizeCronSchedule?: string;
  /**
  * A time string that specifies the earliest time for summarizing this search. Can be a relative or absolute time.If this value is an absolute time, use the dispatch.time_format to format the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_dispatch_earliest_time SavedSearches#auto_summarize_dispatch_earliest_time}
  */
  readonly autoSummarizeDispatchEarliestTime?: string;
  /**
  * A time string that specifies the latest time for summarizing this saved search. Can be a relative or absolute time.If this value is an absolute time, use the dispatch.time_format to format the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_dispatch_latest_time SavedSearches#auto_summarize_dispatch_latest_time}
  */
  readonly autoSummarizeDispatchLatestTime?: string;
  /**
  * Defines the time format that Splunk software uses to specify the earliest and latest time. Defaults to %FT%T.%Q%:z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_dispatch_time_format SavedSearches#auto_summarize_dispatch_time_format}
  */
  readonly autoSummarizeDispatchTimeFormat?: string;
  /**
  * Valid values: Integer[p]. Defaults to 60.Indicates the time to live (in seconds) for the artifacts of the summarization of the scheduled search. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_dispatch_ttl SavedSearches#auto_summarize_dispatch_ttl}
  */
  readonly autoSummarizeDispatchTtl?: string;
  /**
  * The maximum number of buckets with the suspended summarization before the summarization search is completely stopped, and the summarization of the search is suspended for auto_summarize.suspend_period. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_max_disabled_buckets SavedSearches#auto_summarize_max_disabled_buckets}
  */
  readonly autoSummarizeMaxDisabledBuckets?: number;
  /**
  * The maximum ratio of summary_size/bucket_size, which specifies when to stop summarization and deem it unhelpful for a bucket. Defaults to 0.1 Note: The test is only performed if the summary size is larger than auto_summarize.max_summary_size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_max_summary_ratio SavedSearches#auto_summarize_max_summary_ratio}
  */
  readonly autoSummarizeMaxSummaryRatio?: number;
  /**
  * The minimum summary size, in bytes, before testing whether the summarization is helpful.The default value is 52428800 and is equivalent to 5MB. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_max_summary_size SavedSearches#auto_summarize_max_summary_size}
  */
  readonly autoSummarizeMaxSummarySize?: number;
  /**
  * Maximum time (in seconds) that the summary search is allowed to run. Defaults to 3600.Note: This is an approximate time. The summary search stops at clean bucket boundaries. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_max_time SavedSearches#auto_summarize_max_time}
  */
  readonly autoSummarizeMaxTime?: number;
  /**
  * Time specfier indicating when to suspend summarization of this search if the summarization is deemed unhelpful.Defaults to 24h. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_suspend_period SavedSearches#auto_summarize_suspend_period}
  */
  readonly autoSummarizeSuspendPeriod?: string;
  /**
  * The list of time ranges that each summarized chunk should span. This comprises the list of available granularity levels for which summaries would be available. Specify a comma delimited list of time specifiers.For example a timechart over the last month whose granuality is at the day level should set this to 1d. If you need the same data summarized at the hour level for weekly charts, use: 1h,1d. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#auto_summarize_timespan SavedSearches#auto_summarize_timespan}
  */
  readonly autoSummarizeTimespan?: string;
  /**
  * Valid values: cron stringThe cron schedule to execute this search. For example: * /5 * * * * causes the search to execute every 5 minutes. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#cron_schedule SavedSearches#cron_schedule}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly cronSchedule?: string;
  /**
  * Human-readable description of this saved search. Defaults to empty string. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#description SavedSearches#description}
  */
  readonly description?: string;
  /**
  * Indicates if the saved search is enabled. Defaults to 0.Disabled saved searches are not visible in Splunk Web. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#disabled SavedSearches#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of timeline buckets. Defaults to 0. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_buckets SavedSearches#dispatch_buckets}
  */
  readonly dispatchBuckets?: number;
  /**
  * A time string that specifies the earliest time for this search. Can be a relative or absolute time.If this value is an absolute time, use the dispatch.time_format to format the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_earliest_time SavedSearches#dispatch_earliest_time}
  */
  readonly dispatchEarliestTime?: string;
  /**
  * A time string that specifies the latest time for this search. Can be a relative or absolute time.If this value is an absolute time, use the dispatch.time_format to format the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_index_earliest SavedSearches#dispatch_index_earliest}
  */
  readonly dispatchIndexEarliest?: string;
  /**
  * A time string that specifies the earliest time for this search. Can be a relative or absolute time.If this value is an absolute time, use the dispatch.time_format to format the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_index_latest SavedSearches#dispatch_index_latest}
  */
  readonly dispatchIndexLatest?: string;
  /**
  * A time string that specifies the earliest time for this search. Can be a relative or absolute time.If this value is an absolute time, use the dispatch.time_format to format the value. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_indexed_realtime SavedSearches#dispatch_indexed_realtime}
  */
  readonly dispatchIndexedRealtime?: boolean | cdktf.IResolvable;
  /**
  * Allows for a per-job override of the [search] indexed_realtime_disk_sync_delay setting in limits.conf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_indexed_realtime_minspan SavedSearches#dispatch_indexed_realtime_minspan}
  */
  readonly dispatchIndexedRealtimeMinspan?: number;
  /**
  * Allows for a per-job override of the [search] indexed_realtime_disk_sync_delay setting in limits.conf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_indexed_realtime_offset SavedSearches#dispatch_indexed_realtime_offset}
  */
  readonly dispatchIndexedRealtimeOffset?: number;
  /**
  * A time string that specifies the latest time for this saved search. Can be a relative or absolute time.If this value is an absolute time, use the dispatch.time_format to format the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_latest_time SavedSearches#dispatch_latest_time}
  */
  readonly dispatchLatestTime?: string;
  /**
  * Enables or disables the lookups for this search. Defaults to 1. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_lookups SavedSearches#dispatch_lookups}
  */
  readonly dispatchLookups?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of results before finalizing the search. Defaults to 500000. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_max_count SavedSearches#dispatch_max_count}
  */
  readonly dispatchMaxCount?: number;
  /**
  * Indicates the maximum amount of time (in seconds) before finalizing the search. Defaults to 0. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_max_time SavedSearches#dispatch_max_time}
  */
  readonly dispatchMaxTime?: number;
  /**
  * Specifies, in seconds, how frequently the MapReduce reduce phase runs on accumulated map values. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_reduce_freq SavedSearches#dispatch_reduce_freq}
  */
  readonly dispatchReduceFreq?: number;
  /**
  * Whether to back fill the real time window for this search. Parameter valid only if this is a real time search. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_rt_backfill SavedSearches#dispatch_rt_backfill}
  */
  readonly dispatchRtBackfill?: boolean | cdktf.IResolvable;
  /**
  * Allows for a per-job override of the [search] indexed_realtime_maximum_span setting in limits.conf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_rt_maximum_span SavedSearches#dispatch_rt_maximum_span}
  */
  readonly dispatchRtMaximumSpan?: number;
  /**
  * Specifies whether a new search process spawns when this saved search is executed. Defaults to 1. Searches against indexes must run in a separate process. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_spawn_process SavedSearches#dispatch_spawn_process}
  */
  readonly dispatchSpawnProcess?: boolean | cdktf.IResolvable;
  /**
  * A time format string that defines the time format for specifying the earliest and latest time. Defaults to %FT%T.%Q%:z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_time_format SavedSearches#dispatch_time_format}
  */
  readonly dispatchTimeFormat?: string;
  /**
  * Valid values: Integer[p]. Defaults to 2p.Indicates the time to live (in seconds) for the artifacts of the scheduled search, if no actions are triggered. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#dispatch_ttl SavedSearches#dispatch_ttl}
  */
  readonly dispatchTtl?: string;
  /**
  * Defines the default UI view name (not label) in which to load the results. Accessibility is subject to the user having sufficient permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#display_view SavedSearches#display_view}
  */
  readonly displayView?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#id SavedSearches#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether this search is to be run on a schedule 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#is_scheduled SavedSearches#is_scheduled}
  */
  readonly isScheduled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether this saved search should be listed in the visible saved search list. Defaults to 1. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#is_visible SavedSearches#is_visible}
  */
  readonly isVisible?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of concurrent instances of this search the scheduler is allowed to run. Defaults to 1. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#max_concurrent SavedSearches#max_concurrent}
  */
  readonly maxConcurrent?: number;
  /**
  * A name for the search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#name SavedSearches#name}
  */
  readonly name: string;
  /**
  * Defaults to 1. Controls the way the scheduler computes the next execution time of a scheduled search. If this value is set to 1, the scheduler bases its determination of the next scheduled search execution time on the current time. If this value is set to 0, the scheduler bases its determination of the next scheduled search on the last search execution time. This is called continuous scheduling. If set to 0, the scheduler never skips scheduled execution periods. However, the execution of the saved search might fall behind depending on the scheduler load. Use continuous scheduling whenever you enable the summary index option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#realtime_schedule SavedSearches#realtime_schedule}
  */
  readonly realtimeSchedule?: boolean | cdktf.IResolvable;
  /**
  * Specifies a field used by Splunk Web to denote the app this search should be dispatched in. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#request_ui_dispatch_app SavedSearches#request_ui_dispatch_app}
  */
  readonly requestUiDispatchApp?: string;
  /**
  * Specifies a field used by Splunk Web to denote the view this search should be displayed in. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#request_ui_dispatch_view SavedSearches#request_ui_dispatch_view}
  */
  readonly requestUiDispatchView?: string;
  /**
  * Specifies whether to restart a real-time search managed by the scheduler when a search peer becomes available for this saved search. Defaults to 1. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#restart_on_searchpeer_add SavedSearches#restart_on_searchpeer_add}
  */
  readonly restartOnSearchpeerAdd?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether this search runs at startup. If it does not run on startup, it runs at the next scheduled time. Defaults to 0. Set to 1 for scheduled searches that populate lookup tables. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#run_on_startup SavedSearches#run_on_startup}
  */
  readonly runOnStartup?: boolean | cdktf.IResolvable;
  /**
  * Raises the scheduling priority of the named search. Defaults to Default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#schedule_priority SavedSearches#schedule_priority}
  */
  readonly schedulePriority?: string;
  /**
  * Time window (in minutes) during which the search has lower priority. Defaults to 0. The scheduler can give higher priority to more critical searches during this window. The window must be smaller than the search period.Set to auto to let the scheduler determine the optimal window value automatically. Requires the edit_search_schedule_window capability to override auto. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#schedule_window SavedSearches#schedule_window}
  */
  readonly scheduleWindow?: string;
  /**
  * Required when creating a new search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#search SavedSearches#search}
  */
  readonly search: string;
  /**
  * Defines the viewstate id associated with the UI view listed in 'displayview'. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#vsid SavedSearches#vsid}
  */
  readonly vsid?: string;
  /**
  * Specifies the new workload pool where the existing running search will be placed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#workload_pool SavedSearches#workload_pool}
  */
  readonly workloadPool?: string;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#acl SavedSearches#acl}
  */
  readonly acl?: SavedSearchesAcl;
}
export interface SavedSearchesAcl {
  /**
  * The app context for the resource. Required for updating saved search ACL properties. Allowed values are:The name of an app and system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#app SavedSearches#app}
  */
  readonly app?: string;
  /**
  * Indicates if the active user can change permissions for this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#can_change_perms SavedSearches#can_change_perms}
  */
  readonly canChangePerms?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to app level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#can_share_app SavedSearches#can_share_app}
  */
  readonly canShareApp?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to system level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#can_share_global SavedSearches#can_share_global}
  */
  readonly canShareGlobal?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can change sharing to user level. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#can_share_user SavedSearches#can_share_user}
  */
  readonly canShareUser?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the active user can edit this object. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#can_write SavedSearches#can_write}
  */
  readonly canWrite?: boolean | cdktf.IResolvable;
  /**
  * User name of resource owner. Defaults to the resource creator. Required for updating any knowledge object ACL properties.nobody = All users may access the resource, but write access to the resource might be restricted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#owner SavedSearches#owner}
  */
  readonly owner?: string;
  /**
  * Properties that indicate resource read permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#read SavedSearches#read}
  */
  readonly read?: string[];
  /**
  * Indicates whether an admin or user with sufficient permissions can delete the entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#removable SavedSearches#removable}
  */
  readonly removable?: boolean | cdktf.IResolvable;
  /**
  * Indicates how the resource is shared. Required for updating any knowledge object ACL properties.app: Shared within a specific appglobal: (Default) Shared globally to all apps.user: Private to a user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#sharing SavedSearches#sharing}
  */
  readonly sharing?: string;
  /**
  * Properties that indicate resource write permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#write SavedSearches#write}
  */
  readonly write?: string[];
}

export function savedSearchesAclToTerraform(struct?: SavedSearchesAclOutputReference | SavedSearchesAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app: cdktf.stringToTerraform(struct!.app),
    can_change_perms: cdktf.booleanToTerraform(struct!.canChangePerms),
    can_share_app: cdktf.booleanToTerraform(struct!.canShareApp),
    can_share_global: cdktf.booleanToTerraform(struct!.canShareGlobal),
    can_share_user: cdktf.booleanToTerraform(struct!.canShareUser),
    can_write: cdktf.booleanToTerraform(struct!.canWrite),
    owner: cdktf.stringToTerraform(struct!.owner),
    read: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.read),
    removable: cdktf.booleanToTerraform(struct!.removable),
    sharing: cdktf.stringToTerraform(struct!.sharing),
    write: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.write),
  }
}


export function savedSearchesAclToHclTerraform(struct?: SavedSearchesAclOutputReference | SavedSearchesAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app: {
      value: cdktf.stringToHclTerraform(struct!.app),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    can_change_perms: {
      value: cdktf.booleanToHclTerraform(struct!.canChangePerms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_share_app: {
      value: cdktf.booleanToHclTerraform(struct!.canShareApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_share_global: {
      value: cdktf.booleanToHclTerraform(struct!.canShareGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_share_user: {
      value: cdktf.booleanToHclTerraform(struct!.canShareUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_write: {
      value: cdktf.booleanToHclTerraform(struct!.canWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.read),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    removable: {
      value: cdktf.booleanToHclTerraform(struct!.removable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sharing: {
      value: cdktf.stringToHclTerraform(struct!.sharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.write),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SavedSearchesAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SavedSearchesAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._app !== undefined) {
      hasAnyValues = true;
      internalValueResult.app = this._app;
    }
    if (this._canChangePerms !== undefined) {
      hasAnyValues = true;
      internalValueResult.canChangePerms = this._canChangePerms;
    }
    if (this._canShareApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.canShareApp = this._canShareApp;
    }
    if (this._canShareGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.canShareGlobal = this._canShareGlobal;
    }
    if (this._canShareUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.canShareUser = this._canShareUser;
    }
    if (this._canWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.canWrite = this._canWrite;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._removable !== undefined) {
      hasAnyValues = true;
      internalValueResult.removable = this._removable;
    }
    if (this._sharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SavedSearchesAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._app = undefined;
      this._canChangePerms = undefined;
      this._canShareApp = undefined;
      this._canShareGlobal = undefined;
      this._canShareUser = undefined;
      this._canWrite = undefined;
      this._owner = undefined;
      this._read = undefined;
      this._removable = undefined;
      this._sharing = undefined;
      this._write = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._app = value.app;
      this._canChangePerms = value.canChangePerms;
      this._canShareApp = value.canShareApp;
      this._canShareGlobal = value.canShareGlobal;
      this._canShareUser = value.canShareUser;
      this._canWrite = value.canWrite;
      this._owner = value.owner;
      this._read = value.read;
      this._removable = value.removable;
      this._sharing = value.sharing;
      this._write = value.write;
    }
  }

  // app - computed: true, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // can_change_perms - computed: true, optional: true, required: false
  private _canChangePerms?: boolean | cdktf.IResolvable; 
  public get canChangePerms() {
    return this.getBooleanAttribute('can_change_perms');
  }
  public set canChangePerms(value: boolean | cdktf.IResolvable) {
    this._canChangePerms = value;
  }
  public resetCanChangePerms() {
    this._canChangePerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canChangePermsInput() {
    return this._canChangePerms;
  }

  // can_share_app - computed: true, optional: true, required: false
  private _canShareApp?: boolean | cdktf.IResolvable; 
  public get canShareApp() {
    return this.getBooleanAttribute('can_share_app');
  }
  public set canShareApp(value: boolean | cdktf.IResolvable) {
    this._canShareApp = value;
  }
  public resetCanShareApp() {
    this._canShareApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canShareAppInput() {
    return this._canShareApp;
  }

  // can_share_global - computed: true, optional: true, required: false
  private _canShareGlobal?: boolean | cdktf.IResolvable; 
  public get canShareGlobal() {
    return this.getBooleanAttribute('can_share_global');
  }
  public set canShareGlobal(value: boolean | cdktf.IResolvable) {
    this._canShareGlobal = value;
  }
  public resetCanShareGlobal() {
    this._canShareGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canShareGlobalInput() {
    return this._canShareGlobal;
  }

  // can_share_user - computed: true, optional: true, required: false
  private _canShareUser?: boolean | cdktf.IResolvable; 
  public get canShareUser() {
    return this.getBooleanAttribute('can_share_user');
  }
  public set canShareUser(value: boolean | cdktf.IResolvable) {
    this._canShareUser = value;
  }
  public resetCanShareUser() {
    this._canShareUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canShareUserInput() {
    return this._canShareUser;
  }

  // can_write - computed: true, optional: true, required: false
  private _canWrite?: boolean | cdktf.IResolvable; 
  public get canWrite() {
    return this.getBooleanAttribute('can_write');
  }
  public set canWrite(value: boolean | cdktf.IResolvable) {
    this._canWrite = value;
  }
  public resetCanWrite() {
    this._canWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canWriteInput() {
    return this._canWrite;
  }

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // read - computed: true, optional: true, required: false
  private _read?: string[]; 
  public get read() {
    return this.getListAttribute('read');
  }
  public set read(value: string[]) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // removable - computed: true, optional: true, required: false
  private _removable?: boolean | cdktf.IResolvable; 
  public get removable() {
    return this.getBooleanAttribute('removable');
  }
  public set removable(value: boolean | cdktf.IResolvable) {
    this._removable = value;
  }
  public resetRemovable() {
    this._removable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removableInput() {
    return this._removable;
  }

  // sharing - computed: true, optional: true, required: false
  private _sharing?: string; 
  public get sharing() {
    return this.getStringAttribute('sharing');
  }
  public set sharing(value: string) {
    this._sharing = value;
  }
  public resetSharing() {
    this._sharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing;
  }

  // write - computed: true, optional: true, required: false
  private _write?: string[]; 
  public get write() {
    return this.getListAttribute('write');
  }
  public set write(value: string[]) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches splunk_saved_searches}
*/
export class SavedSearches extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunk_saved_searches";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SavedSearches resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SavedSearches to import
  * @param importFromId The id of the existing SavedSearches that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SavedSearches to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunk_saved_searches", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunk/1.4.32/docs/resources/saved_searches splunk_saved_searches} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SavedSearchesConfig
  */
  public constructor(scope: Construct, id: string, config: SavedSearchesConfig) {
    super(scope, id, {
      terraformResourceType: 'splunk_saved_searches',
      terraformGeneratorMetadata: {
        providerName: 'splunk',
        providerVersion: '1.4.32',
        providerVersionConstraint: '1.4.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionCreateXsoarIncident = config.actionCreateXsoarIncident;
    this._actionCreateXsoarIncidentParamCustomFields = config.actionCreateXsoarIncidentParamCustomFields;
    this._actionCreateXsoarIncidentParamDetails = config.actionCreateXsoarIncidentParamDetails;
    this._actionCreateXsoarIncidentParamIncidentName = config.actionCreateXsoarIncidentParamIncidentName;
    this._actionCreateXsoarIncidentParamOccurred = config.actionCreateXsoarIncidentParamOccurred;
    this._actionCreateXsoarIncidentParamSendAllServers = config.actionCreateXsoarIncidentParamSendAllServers;
    this._actionCreateXsoarIncidentParamServerUrl = config.actionCreateXsoarIncidentParamServerUrl;
    this._actionCreateXsoarIncidentParamSeverity = config.actionCreateXsoarIncidentParamSeverity;
    this._actionCreateXsoarIncidentParamType = config.actionCreateXsoarIncidentParamType;
    this._actionEmailAuthPassword = config.actionEmailAuthPassword;
    this._actionEmailAuthUsername = config.actionEmailAuthUsername;
    this._actionEmailBcc = config.actionEmailBcc;
    this._actionEmailCc = config.actionEmailCc;
    this._actionEmailCommand = config.actionEmailCommand;
    this._actionEmailFormat = config.actionEmailFormat;
    this._actionEmailFrom = config.actionEmailFrom;
    this._actionEmailHostname = config.actionEmailHostname;
    this._actionEmailIncludeResultsLink = config.actionEmailIncludeResultsLink;
    this._actionEmailIncludeSearch = config.actionEmailIncludeSearch;
    this._actionEmailIncludeTrigger = config.actionEmailIncludeTrigger;
    this._actionEmailIncludeTriggerTime = config.actionEmailIncludeTriggerTime;
    this._actionEmailIncludeViewLink = config.actionEmailIncludeViewLink;
    this._actionEmailInline = config.actionEmailInline;
    this._actionEmailMailserver = config.actionEmailMailserver;
    this._actionEmailMaxResults = config.actionEmailMaxResults;
    this._actionEmailMaxTime = config.actionEmailMaxTime;
    this._actionEmailMessageAlert = config.actionEmailMessageAlert;
    this._actionEmailMessageReport = config.actionEmailMessageReport;
    this._actionEmailPdfview = config.actionEmailPdfview;
    this._actionEmailPreprocessResults = config.actionEmailPreprocessResults;
    this._actionEmailReportCidFontList = config.actionEmailReportCidFontList;
    this._actionEmailReportIncludeSplunkLogo = config.actionEmailReportIncludeSplunkLogo;
    this._actionEmailReportPaperOrientation = config.actionEmailReportPaperOrientation;
    this._actionEmailReportPaperSize = config.actionEmailReportPaperSize;
    this._actionEmailReportServerEnabled = config.actionEmailReportServerEnabled;
    this._actionEmailReportServerUrl = config.actionEmailReportServerUrl;
    this._actionEmailSendCsv = config.actionEmailSendCsv;
    this._actionEmailSendPdf = config.actionEmailSendPdf;
    this._actionEmailSendResults = config.actionEmailSendResults;
    this._actionEmailSubject = config.actionEmailSubject;
    this._actionEmailTo = config.actionEmailTo;
    this._actionEmailTrackAlert = config.actionEmailTrackAlert;
    this._actionEmailTtl = config.actionEmailTtl;
    this._actionEmailUseSsl = config.actionEmailUseSsl;
    this._actionEmailUseTls = config.actionEmailUseTls;
    this._actionEmailWidthSortColumns = config.actionEmailWidthSortColumns;
    this._actionJiraServiceDeskParamAccount = config.actionJiraServiceDeskParamAccount;
    this._actionJiraServiceDeskParamJiraCustomfields = config.actionJiraServiceDeskParamJiraCustomfields;
    this._actionJiraServiceDeskParamJiraDescription = config.actionJiraServiceDeskParamJiraDescription;
    this._actionJiraServiceDeskParamJiraIssueType = config.actionJiraServiceDeskParamJiraIssueType;
    this._actionJiraServiceDeskParamJiraPriority = config.actionJiraServiceDeskParamJiraPriority;
    this._actionJiraServiceDeskParamJiraProject = config.actionJiraServiceDeskParamJiraProject;
    this._actionJiraServiceDeskParamJiraSummary = config.actionJiraServiceDeskParamJiraSummary;
    this._actionLogevent = config.actionLogevent;
    this._actionLogeventParamEvent = config.actionLogeventParamEvent;
    this._actionLogeventParamHost = config.actionLogeventParamHost;
    this._actionLogeventParamIndex = config.actionLogeventParamIndex;
    this._actionLogeventParamSource = config.actionLogeventParamSource;
    this._actionLogeventParamSourcetype = config.actionLogeventParamSourcetype;
    this._actionPagerdutyCustomDetails = config.actionPagerdutyCustomDetails;
    this._actionPagerdutyIntegrationKey = config.actionPagerdutyIntegrationKey;
    this._actionPagerdutyIntegrationKeyOverride = config.actionPagerdutyIntegrationKeyOverride;
    this._actionPagerdutyIntegrationUrl = config.actionPagerdutyIntegrationUrl;
    this._actionPagerdutyIntegrationUrlOverride = config.actionPagerdutyIntegrationUrlOverride;
    this._actionPopulateLookupCommand = config.actionPopulateLookupCommand;
    this._actionPopulateLookupDest = config.actionPopulateLookupDest;
    this._actionPopulateLookupHostname = config.actionPopulateLookupHostname;
    this._actionPopulateLookupMaxResults = config.actionPopulateLookupMaxResults;
    this._actionPopulateLookupMaxTime = config.actionPopulateLookupMaxTime;
    this._actionPopulateLookupTrackAlert = config.actionPopulateLookupTrackAlert;
    this._actionPopulateLookupTtl = config.actionPopulateLookupTtl;
    this._actionRssCommand = config.actionRssCommand;
    this._actionRssHostname = config.actionRssHostname;
    this._actionRssMaxResults = config.actionRssMaxResults;
    this._actionRssMaxTime = config.actionRssMaxTime;
    this._actionRssTrackAlert = config.actionRssTrackAlert;
    this._actionRssTtl = config.actionRssTtl;
    this._actionScriptCommand = config.actionScriptCommand;
    this._actionScriptFilename = config.actionScriptFilename;
    this._actionScriptHostname = config.actionScriptHostname;
    this._actionScriptMaxResults = config.actionScriptMaxResults;
    this._actionScriptMaxTime = config.actionScriptMaxTime;
    this._actionScriptTrackAlert = config.actionScriptTrackAlert;
    this._actionScriptTtl = config.actionScriptTtl;
    this._actionSlackParamAttachment = config.actionSlackParamAttachment;
    this._actionSlackParamChannel = config.actionSlackParamChannel;
    this._actionSlackParamFields = config.actionSlackParamFields;
    this._actionSlackParamMessage = config.actionSlackParamMessage;
    this._actionSlackParamWebhookUrlOverride = config.actionSlackParamWebhookUrlOverride;
    this._actionSnowEventParamAccount = config.actionSnowEventParamAccount;
    this._actionSnowEventParamAdditionalInfo = config.actionSnowEventParamAdditionalInfo;
    this._actionSnowEventParamCiIdentifier = config.actionSnowEventParamCiIdentifier;
    this._actionSnowEventParamCustomFields = config.actionSnowEventParamCustomFields;
    this._actionSnowEventParamDescription = config.actionSnowEventParamDescription;
    this._actionSnowEventParamNode = config.actionSnowEventParamNode;
    this._actionSnowEventParamResource = config.actionSnowEventParamResource;
    this._actionSnowEventParamSeverity = config.actionSnowEventParamSeverity;
    this._actionSnowEventParamType = config.actionSnowEventParamType;
    this._actionSummaryIndexCommand = config.actionSummaryIndexCommand;
    this._actionSummaryIndexHostname = config.actionSummaryIndexHostname;
    this._actionSummaryIndexInline = config.actionSummaryIndexInline;
    this._actionSummaryIndexMaxResults = config.actionSummaryIndexMaxResults;
    this._actionSummaryIndexMaxTime = config.actionSummaryIndexMaxTime;
    this._actionSummaryIndexName = config.actionSummaryIndexName;
    this._actionSummaryIndexTrackAlert = config.actionSummaryIndexTrackAlert;
    this._actionSummaryIndexTtl = config.actionSummaryIndexTtl;
    this._actionWebhookParamUrl = config.actionWebhookParamUrl;
    this._actions = config.actions;
    this._alertComparator = config.alertComparator;
    this._alertCondition = config.alertCondition;
    this._alertDigestMode = config.alertDigestMode;
    this._alertExpires = config.alertExpires;
    this._alertSeverity = config.alertSeverity;
    this._alertSuppress = config.alertSuppress;
    this._alertSuppressFields = config.alertSuppressFields;
    this._alertSuppressPeriod = config.alertSuppressPeriod;
    this._alertThreshold = config.alertThreshold;
    this._alertTrack = config.alertTrack;
    this._alertType = config.alertType;
    this._allowSkew = config.allowSkew;
    this._autoSummarize = config.autoSummarize;
    this._autoSummarizeCommand = config.autoSummarizeCommand;
    this._autoSummarizeCronSchedule = config.autoSummarizeCronSchedule;
    this._autoSummarizeDispatchEarliestTime = config.autoSummarizeDispatchEarliestTime;
    this._autoSummarizeDispatchLatestTime = config.autoSummarizeDispatchLatestTime;
    this._autoSummarizeDispatchTimeFormat = config.autoSummarizeDispatchTimeFormat;
    this._autoSummarizeDispatchTtl = config.autoSummarizeDispatchTtl;
    this._autoSummarizeMaxDisabledBuckets = config.autoSummarizeMaxDisabledBuckets;
    this._autoSummarizeMaxSummaryRatio = config.autoSummarizeMaxSummaryRatio;
    this._autoSummarizeMaxSummarySize = config.autoSummarizeMaxSummarySize;
    this._autoSummarizeMaxTime = config.autoSummarizeMaxTime;
    this._autoSummarizeSuspendPeriod = config.autoSummarizeSuspendPeriod;
    this._autoSummarizeTimespan = config.autoSummarizeTimespan;
    this._cronSchedule = config.cronSchedule;
    this._description = config.description;
    this._disabled = config.disabled;
    this._dispatchBuckets = config.dispatchBuckets;
    this._dispatchEarliestTime = config.dispatchEarliestTime;
    this._dispatchIndexEarliest = config.dispatchIndexEarliest;
    this._dispatchIndexLatest = config.dispatchIndexLatest;
    this._dispatchIndexedRealtime = config.dispatchIndexedRealtime;
    this._dispatchIndexedRealtimeMinspan = config.dispatchIndexedRealtimeMinspan;
    this._dispatchIndexedRealtimeOffset = config.dispatchIndexedRealtimeOffset;
    this._dispatchLatestTime = config.dispatchLatestTime;
    this._dispatchLookups = config.dispatchLookups;
    this._dispatchMaxCount = config.dispatchMaxCount;
    this._dispatchMaxTime = config.dispatchMaxTime;
    this._dispatchReduceFreq = config.dispatchReduceFreq;
    this._dispatchRtBackfill = config.dispatchRtBackfill;
    this._dispatchRtMaximumSpan = config.dispatchRtMaximumSpan;
    this._dispatchSpawnProcess = config.dispatchSpawnProcess;
    this._dispatchTimeFormat = config.dispatchTimeFormat;
    this._dispatchTtl = config.dispatchTtl;
    this._displayView = config.displayView;
    this._id = config.id;
    this._isScheduled = config.isScheduled;
    this._isVisible = config.isVisible;
    this._maxConcurrent = config.maxConcurrent;
    this._name = config.name;
    this._realtimeSchedule = config.realtimeSchedule;
    this._requestUiDispatchApp = config.requestUiDispatchApp;
    this._requestUiDispatchView = config.requestUiDispatchView;
    this._restartOnSearchpeerAdd = config.restartOnSearchpeerAdd;
    this._runOnStartup = config.runOnStartup;
    this._schedulePriority = config.schedulePriority;
    this._scheduleWindow = config.scheduleWindow;
    this._search = config.search;
    this._vsid = config.vsid;
    this._workloadPool = config.workloadPool;
    this._acl.internalValue = config.acl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_create_xsoar_incident - computed: false, optional: true, required: false
  private _actionCreateXsoarIncident?: string; 
  public get actionCreateXsoarIncident() {
    return this.getStringAttribute('action_create_xsoar_incident');
  }
  public set actionCreateXsoarIncident(value: string) {
    this._actionCreateXsoarIncident = value;
  }
  public resetActionCreateXsoarIncident() {
    this._actionCreateXsoarIncident = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCreateXsoarIncidentInput() {
    return this._actionCreateXsoarIncident;
  }

  // action_create_xsoar_incident_param_custom_fields - computed: false, optional: true, required: false
  private _actionCreateXsoarIncidentParamCustomFields?: string; 
  public get actionCreateXsoarIncidentParamCustomFields() {
    return this.getStringAttribute('action_create_xsoar_incident_param_custom_fields');
  }
  public set actionCreateXsoarIncidentParamCustomFields(value: string) {
    this._actionCreateXsoarIncidentParamCustomFields = value;
  }
  public resetActionCreateXsoarIncidentParamCustomFields() {
    this._actionCreateXsoarIncidentParamCustomFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCreateXsoarIncidentParamCustomFieldsInput() {
    return this._actionCreateXsoarIncidentParamCustomFields;
  }

  // action_create_xsoar_incident_param_details - computed: false, optional: true, required: false
  private _actionCreateXsoarIncidentParamDetails?: string; 
  public get actionCreateXsoarIncidentParamDetails() {
    return this.getStringAttribute('action_create_xsoar_incident_param_details');
  }
  public set actionCreateXsoarIncidentParamDetails(value: string) {
    this._actionCreateXsoarIncidentParamDetails = value;
  }
  public resetActionCreateXsoarIncidentParamDetails() {
    this._actionCreateXsoarIncidentParamDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCreateXsoarIncidentParamDetailsInput() {
    return this._actionCreateXsoarIncidentParamDetails;
  }

  // action_create_xsoar_incident_param_incident_name - computed: false, optional: true, required: false
  private _actionCreateXsoarIncidentParamIncidentName?: string; 
  public get actionCreateXsoarIncidentParamIncidentName() {
    return this.getStringAttribute('action_create_xsoar_incident_param_incident_name');
  }
  public set actionCreateXsoarIncidentParamIncidentName(value: string) {
    this._actionCreateXsoarIncidentParamIncidentName = value;
  }
  public resetActionCreateXsoarIncidentParamIncidentName() {
    this._actionCreateXsoarIncidentParamIncidentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCreateXsoarIncidentParamIncidentNameInput() {
    return this._actionCreateXsoarIncidentParamIncidentName;
  }

  // action_create_xsoar_incident_param_occurred - computed: false, optional: true, required: false
  private _actionCreateXsoarIncidentParamOccurred?: string; 
  public get actionCreateXsoarIncidentParamOccurred() {
    return this.getStringAttribute('action_create_xsoar_incident_param_occurred');
  }
  public set actionCreateXsoarIncidentParamOccurred(value: string) {
    this._actionCreateXsoarIncidentParamOccurred = value;
  }
  public resetActionCreateXsoarIncidentParamOccurred() {
    this._actionCreateXsoarIncidentParamOccurred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCreateXsoarIncidentParamOccurredInput() {
    return this._actionCreateXsoarIncidentParamOccurred;
  }

  // action_create_xsoar_incident_param_send_all_servers - computed: false, optional: true, required: false
  private _actionCreateXsoarIncidentParamSendAllServers?: string; 
  public get actionCreateXsoarIncidentParamSendAllServers() {
    return this.getStringAttribute('action_create_xsoar_incident_param_send_all_servers');
  }
  public set actionCreateXsoarIncidentParamSendAllServers(value: string) {
    this._actionCreateXsoarIncidentParamSendAllServers = value;
  }
  public resetActionCreateXsoarIncidentParamSendAllServers() {
    this._actionCreateXsoarIncidentParamSendAllServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCreateXsoarIncidentParamSendAllServersInput() {
    return this._actionCreateXsoarIncidentParamSendAllServers;
  }

  // action_create_xsoar_incident_param_server_url - computed: false, optional: true, required: false
  private _actionCreateXsoarIncidentParamServerUrl?: string; 
  public get actionCreateXsoarIncidentParamServerUrl() {
    return this.getStringAttribute('action_create_xsoar_incident_param_server_url');
  }
  public set actionCreateXsoarIncidentParamServerUrl(value: string) {
    this._actionCreateXsoarIncidentParamServerUrl = value;
  }
  public resetActionCreateXsoarIncidentParamServerUrl() {
    this._actionCreateXsoarIncidentParamServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCreateXsoarIncidentParamServerUrlInput() {
    return this._actionCreateXsoarIncidentParamServerUrl;
  }

  // action_create_xsoar_incident_param_severity - computed: false, optional: true, required: false
  private _actionCreateXsoarIncidentParamSeverity?: string; 
  public get actionCreateXsoarIncidentParamSeverity() {
    return this.getStringAttribute('action_create_xsoar_incident_param_severity');
  }
  public set actionCreateXsoarIncidentParamSeverity(value: string) {
    this._actionCreateXsoarIncidentParamSeverity = value;
  }
  public resetActionCreateXsoarIncidentParamSeverity() {
    this._actionCreateXsoarIncidentParamSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCreateXsoarIncidentParamSeverityInput() {
    return this._actionCreateXsoarIncidentParamSeverity;
  }

  // action_create_xsoar_incident_param_type - computed: false, optional: true, required: false
  private _actionCreateXsoarIncidentParamType?: string; 
  public get actionCreateXsoarIncidentParamType() {
    return this.getStringAttribute('action_create_xsoar_incident_param_type');
  }
  public set actionCreateXsoarIncidentParamType(value: string) {
    this._actionCreateXsoarIncidentParamType = value;
  }
  public resetActionCreateXsoarIncidentParamType() {
    this._actionCreateXsoarIncidentParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCreateXsoarIncidentParamTypeInput() {
    return this._actionCreateXsoarIncidentParamType;
  }

  // action_email - computed: true, optional: false, required: false
  public get actionEmail() {
    return this.getBooleanAttribute('action_email');
  }

  // action_email_auth_password - computed: true, optional: true, required: false
  private _actionEmailAuthPassword?: string; 
  public get actionEmailAuthPassword() {
    return this.getStringAttribute('action_email_auth_password');
  }
  public set actionEmailAuthPassword(value: string) {
    this._actionEmailAuthPassword = value;
  }
  public resetActionEmailAuthPassword() {
    this._actionEmailAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailAuthPasswordInput() {
    return this._actionEmailAuthPassword;
  }

  // action_email_auth_username - computed: true, optional: true, required: false
  private _actionEmailAuthUsername?: string; 
  public get actionEmailAuthUsername() {
    return this.getStringAttribute('action_email_auth_username');
  }
  public set actionEmailAuthUsername(value: string) {
    this._actionEmailAuthUsername = value;
  }
  public resetActionEmailAuthUsername() {
    this._actionEmailAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailAuthUsernameInput() {
    return this._actionEmailAuthUsername;
  }

  // action_email_bcc - computed: true, optional: true, required: false
  private _actionEmailBcc?: string; 
  public get actionEmailBcc() {
    return this.getStringAttribute('action_email_bcc');
  }
  public set actionEmailBcc(value: string) {
    this._actionEmailBcc = value;
  }
  public resetActionEmailBcc() {
    this._actionEmailBcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailBccInput() {
    return this._actionEmailBcc;
  }

  // action_email_cc - computed: true, optional: true, required: false
  private _actionEmailCc?: string; 
  public get actionEmailCc() {
    return this.getStringAttribute('action_email_cc');
  }
  public set actionEmailCc(value: string) {
    this._actionEmailCc = value;
  }
  public resetActionEmailCc() {
    this._actionEmailCc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailCcInput() {
    return this._actionEmailCc;
  }

  // action_email_command - computed: true, optional: true, required: false
  private _actionEmailCommand?: string; 
  public get actionEmailCommand() {
    return this.getStringAttribute('action_email_command');
  }
  public set actionEmailCommand(value: string) {
    this._actionEmailCommand = value;
  }
  public resetActionEmailCommand() {
    this._actionEmailCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailCommandInput() {
    return this._actionEmailCommand;
  }

  // action_email_format - computed: true, optional: true, required: false
  private _actionEmailFormat?: string; 
  public get actionEmailFormat() {
    return this.getStringAttribute('action_email_format');
  }
  public set actionEmailFormat(value: string) {
    this._actionEmailFormat = value;
  }
  public resetActionEmailFormat() {
    this._actionEmailFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailFormatInput() {
    return this._actionEmailFormat;
  }

  // action_email_from - computed: true, optional: true, required: false
  private _actionEmailFrom?: string; 
  public get actionEmailFrom() {
    return this.getStringAttribute('action_email_from');
  }
  public set actionEmailFrom(value: string) {
    this._actionEmailFrom = value;
  }
  public resetActionEmailFrom() {
    this._actionEmailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailFromInput() {
    return this._actionEmailFrom;
  }

  // action_email_hostname - computed: true, optional: true, required: false
  private _actionEmailHostname?: string; 
  public get actionEmailHostname() {
    return this.getStringAttribute('action_email_hostname');
  }
  public set actionEmailHostname(value: string) {
    this._actionEmailHostname = value;
  }
  public resetActionEmailHostname() {
    this._actionEmailHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailHostnameInput() {
    return this._actionEmailHostname;
  }

  // action_email_include_results_link - computed: true, optional: true, required: false
  private _actionEmailIncludeResultsLink?: number; 
  public get actionEmailIncludeResultsLink() {
    return this.getNumberAttribute('action_email_include_results_link');
  }
  public set actionEmailIncludeResultsLink(value: number) {
    this._actionEmailIncludeResultsLink = value;
  }
  public resetActionEmailIncludeResultsLink() {
    this._actionEmailIncludeResultsLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailIncludeResultsLinkInput() {
    return this._actionEmailIncludeResultsLink;
  }

  // action_email_include_search - computed: true, optional: true, required: false
  private _actionEmailIncludeSearch?: number; 
  public get actionEmailIncludeSearch() {
    return this.getNumberAttribute('action_email_include_search');
  }
  public set actionEmailIncludeSearch(value: number) {
    this._actionEmailIncludeSearch = value;
  }
  public resetActionEmailIncludeSearch() {
    this._actionEmailIncludeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailIncludeSearchInput() {
    return this._actionEmailIncludeSearch;
  }

  // action_email_include_trigger - computed: true, optional: true, required: false
  private _actionEmailIncludeTrigger?: number; 
  public get actionEmailIncludeTrigger() {
    return this.getNumberAttribute('action_email_include_trigger');
  }
  public set actionEmailIncludeTrigger(value: number) {
    this._actionEmailIncludeTrigger = value;
  }
  public resetActionEmailIncludeTrigger() {
    this._actionEmailIncludeTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailIncludeTriggerInput() {
    return this._actionEmailIncludeTrigger;
  }

  // action_email_include_trigger_time - computed: true, optional: true, required: false
  private _actionEmailIncludeTriggerTime?: number; 
  public get actionEmailIncludeTriggerTime() {
    return this.getNumberAttribute('action_email_include_trigger_time');
  }
  public set actionEmailIncludeTriggerTime(value: number) {
    this._actionEmailIncludeTriggerTime = value;
  }
  public resetActionEmailIncludeTriggerTime() {
    this._actionEmailIncludeTriggerTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailIncludeTriggerTimeInput() {
    return this._actionEmailIncludeTriggerTime;
  }

  // action_email_include_view_link - computed: true, optional: true, required: false
  private _actionEmailIncludeViewLink?: number; 
  public get actionEmailIncludeViewLink() {
    return this.getNumberAttribute('action_email_include_view_link');
  }
  public set actionEmailIncludeViewLink(value: number) {
    this._actionEmailIncludeViewLink = value;
  }
  public resetActionEmailIncludeViewLink() {
    this._actionEmailIncludeViewLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailIncludeViewLinkInput() {
    return this._actionEmailIncludeViewLink;
  }

  // action_email_inline - computed: true, optional: true, required: false
  private _actionEmailInline?: boolean | cdktf.IResolvable; 
  public get actionEmailInline() {
    return this.getBooleanAttribute('action_email_inline');
  }
  public set actionEmailInline(value: boolean | cdktf.IResolvable) {
    this._actionEmailInline = value;
  }
  public resetActionEmailInline() {
    this._actionEmailInline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailInlineInput() {
    return this._actionEmailInline;
  }

  // action_email_mailserver - computed: true, optional: true, required: false
  private _actionEmailMailserver?: string; 
  public get actionEmailMailserver() {
    return this.getStringAttribute('action_email_mailserver');
  }
  public set actionEmailMailserver(value: string) {
    this._actionEmailMailserver = value;
  }
  public resetActionEmailMailserver() {
    this._actionEmailMailserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailMailserverInput() {
    return this._actionEmailMailserver;
  }

  // action_email_max_results - computed: true, optional: true, required: false
  private _actionEmailMaxResults?: number; 
  public get actionEmailMaxResults() {
    return this.getNumberAttribute('action_email_max_results');
  }
  public set actionEmailMaxResults(value: number) {
    this._actionEmailMaxResults = value;
  }
  public resetActionEmailMaxResults() {
    this._actionEmailMaxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailMaxResultsInput() {
    return this._actionEmailMaxResults;
  }

  // action_email_max_time - computed: true, optional: true, required: false
  private _actionEmailMaxTime?: string; 
  public get actionEmailMaxTime() {
    return this.getStringAttribute('action_email_max_time');
  }
  public set actionEmailMaxTime(value: string) {
    this._actionEmailMaxTime = value;
  }
  public resetActionEmailMaxTime() {
    this._actionEmailMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailMaxTimeInput() {
    return this._actionEmailMaxTime;
  }

  // action_email_message_alert - computed: true, optional: true, required: false
  private _actionEmailMessageAlert?: string; 
  public get actionEmailMessageAlert() {
    return this.getStringAttribute('action_email_message_alert');
  }
  public set actionEmailMessageAlert(value: string) {
    this._actionEmailMessageAlert = value;
  }
  public resetActionEmailMessageAlert() {
    this._actionEmailMessageAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailMessageAlertInput() {
    return this._actionEmailMessageAlert;
  }

  // action_email_message_report - computed: true, optional: true, required: false
  private _actionEmailMessageReport?: string; 
  public get actionEmailMessageReport() {
    return this.getStringAttribute('action_email_message_report');
  }
  public set actionEmailMessageReport(value: string) {
    this._actionEmailMessageReport = value;
  }
  public resetActionEmailMessageReport() {
    this._actionEmailMessageReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailMessageReportInput() {
    return this._actionEmailMessageReport;
  }

  // action_email_pdfview - computed: true, optional: true, required: false
  private _actionEmailPdfview?: string; 
  public get actionEmailPdfview() {
    return this.getStringAttribute('action_email_pdfview');
  }
  public set actionEmailPdfview(value: string) {
    this._actionEmailPdfview = value;
  }
  public resetActionEmailPdfview() {
    this._actionEmailPdfview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailPdfviewInput() {
    return this._actionEmailPdfview;
  }

  // action_email_preprocess_results - computed: true, optional: true, required: false
  private _actionEmailPreprocessResults?: string; 
  public get actionEmailPreprocessResults() {
    return this.getStringAttribute('action_email_preprocess_results');
  }
  public set actionEmailPreprocessResults(value: string) {
    this._actionEmailPreprocessResults = value;
  }
  public resetActionEmailPreprocessResults() {
    this._actionEmailPreprocessResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailPreprocessResultsInput() {
    return this._actionEmailPreprocessResults;
  }

  // action_email_report_cid_font_list - computed: true, optional: true, required: false
  private _actionEmailReportCidFontList?: string; 
  public get actionEmailReportCidFontList() {
    return this.getStringAttribute('action_email_report_cid_font_list');
  }
  public set actionEmailReportCidFontList(value: string) {
    this._actionEmailReportCidFontList = value;
  }
  public resetActionEmailReportCidFontList() {
    this._actionEmailReportCidFontList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailReportCidFontListInput() {
    return this._actionEmailReportCidFontList;
  }

  // action_email_report_include_splunk_logo - computed: true, optional: true, required: false
  private _actionEmailReportIncludeSplunkLogo?: boolean | cdktf.IResolvable; 
  public get actionEmailReportIncludeSplunkLogo() {
    return this.getBooleanAttribute('action_email_report_include_splunk_logo');
  }
  public set actionEmailReportIncludeSplunkLogo(value: boolean | cdktf.IResolvable) {
    this._actionEmailReportIncludeSplunkLogo = value;
  }
  public resetActionEmailReportIncludeSplunkLogo() {
    this._actionEmailReportIncludeSplunkLogo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailReportIncludeSplunkLogoInput() {
    return this._actionEmailReportIncludeSplunkLogo;
  }

  // action_email_report_paper_orientation - computed: true, optional: true, required: false
  private _actionEmailReportPaperOrientation?: string; 
  public get actionEmailReportPaperOrientation() {
    return this.getStringAttribute('action_email_report_paper_orientation');
  }
  public set actionEmailReportPaperOrientation(value: string) {
    this._actionEmailReportPaperOrientation = value;
  }
  public resetActionEmailReportPaperOrientation() {
    this._actionEmailReportPaperOrientation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailReportPaperOrientationInput() {
    return this._actionEmailReportPaperOrientation;
  }

  // action_email_report_paper_size - computed: true, optional: true, required: false
  private _actionEmailReportPaperSize?: string; 
  public get actionEmailReportPaperSize() {
    return this.getStringAttribute('action_email_report_paper_size');
  }
  public set actionEmailReportPaperSize(value: string) {
    this._actionEmailReportPaperSize = value;
  }
  public resetActionEmailReportPaperSize() {
    this._actionEmailReportPaperSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailReportPaperSizeInput() {
    return this._actionEmailReportPaperSize;
  }

  // action_email_report_server_enabled - computed: true, optional: true, required: false
  private _actionEmailReportServerEnabled?: boolean | cdktf.IResolvable; 
  public get actionEmailReportServerEnabled() {
    return this.getBooleanAttribute('action_email_report_server_enabled');
  }
  public set actionEmailReportServerEnabled(value: boolean | cdktf.IResolvable) {
    this._actionEmailReportServerEnabled = value;
  }
  public resetActionEmailReportServerEnabled() {
    this._actionEmailReportServerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailReportServerEnabledInput() {
    return this._actionEmailReportServerEnabled;
  }

  // action_email_report_server_url - computed: true, optional: true, required: false
  private _actionEmailReportServerUrl?: string; 
  public get actionEmailReportServerUrl() {
    return this.getStringAttribute('action_email_report_server_url');
  }
  public set actionEmailReportServerUrl(value: string) {
    this._actionEmailReportServerUrl = value;
  }
  public resetActionEmailReportServerUrl() {
    this._actionEmailReportServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailReportServerUrlInput() {
    return this._actionEmailReportServerUrl;
  }

  // action_email_send_csv - computed: true, optional: true, required: false
  private _actionEmailSendCsv?: number; 
  public get actionEmailSendCsv() {
    return this.getNumberAttribute('action_email_send_csv');
  }
  public set actionEmailSendCsv(value: number) {
    this._actionEmailSendCsv = value;
  }
  public resetActionEmailSendCsv() {
    this._actionEmailSendCsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailSendCsvInput() {
    return this._actionEmailSendCsv;
  }

  // action_email_send_pdf - computed: true, optional: true, required: false
  private _actionEmailSendPdf?: boolean | cdktf.IResolvable; 
  public get actionEmailSendPdf() {
    return this.getBooleanAttribute('action_email_send_pdf');
  }
  public set actionEmailSendPdf(value: boolean | cdktf.IResolvable) {
    this._actionEmailSendPdf = value;
  }
  public resetActionEmailSendPdf() {
    this._actionEmailSendPdf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailSendPdfInput() {
    return this._actionEmailSendPdf;
  }

  // action_email_send_results - computed: true, optional: true, required: false
  private _actionEmailSendResults?: boolean | cdktf.IResolvable; 
  public get actionEmailSendResults() {
    return this.getBooleanAttribute('action_email_send_results');
  }
  public set actionEmailSendResults(value: boolean | cdktf.IResolvable) {
    this._actionEmailSendResults = value;
  }
  public resetActionEmailSendResults() {
    this._actionEmailSendResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailSendResultsInput() {
    return this._actionEmailSendResults;
  }

  // action_email_subject - computed: true, optional: true, required: false
  private _actionEmailSubject?: string; 
  public get actionEmailSubject() {
    return this.getStringAttribute('action_email_subject');
  }
  public set actionEmailSubject(value: string) {
    this._actionEmailSubject = value;
  }
  public resetActionEmailSubject() {
    this._actionEmailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailSubjectInput() {
    return this._actionEmailSubject;
  }

  // action_email_to - computed: true, optional: true, required: false
  private _actionEmailTo?: string; 
  public get actionEmailTo() {
    return this.getStringAttribute('action_email_to');
  }
  public set actionEmailTo(value: string) {
    this._actionEmailTo = value;
  }
  public resetActionEmailTo() {
    this._actionEmailTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailToInput() {
    return this._actionEmailTo;
  }

  // action_email_track_alert - computed: true, optional: true, required: false
  private _actionEmailTrackAlert?: boolean | cdktf.IResolvable; 
  public get actionEmailTrackAlert() {
    return this.getBooleanAttribute('action_email_track_alert');
  }
  public set actionEmailTrackAlert(value: boolean | cdktf.IResolvable) {
    this._actionEmailTrackAlert = value;
  }
  public resetActionEmailTrackAlert() {
    this._actionEmailTrackAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailTrackAlertInput() {
    return this._actionEmailTrackAlert;
  }

  // action_email_ttl - computed: true, optional: true, required: false
  private _actionEmailTtl?: string; 
  public get actionEmailTtl() {
    return this.getStringAttribute('action_email_ttl');
  }
  public set actionEmailTtl(value: string) {
    this._actionEmailTtl = value;
  }
  public resetActionEmailTtl() {
    this._actionEmailTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailTtlInput() {
    return this._actionEmailTtl;
  }

  // action_email_use_ssl - computed: true, optional: true, required: false
  private _actionEmailUseSsl?: boolean | cdktf.IResolvable; 
  public get actionEmailUseSsl() {
    return this.getBooleanAttribute('action_email_use_ssl');
  }
  public set actionEmailUseSsl(value: boolean | cdktf.IResolvable) {
    this._actionEmailUseSsl = value;
  }
  public resetActionEmailUseSsl() {
    this._actionEmailUseSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailUseSslInput() {
    return this._actionEmailUseSsl;
  }

  // action_email_use_tls - computed: true, optional: true, required: false
  private _actionEmailUseTls?: boolean | cdktf.IResolvable; 
  public get actionEmailUseTls() {
    return this.getBooleanAttribute('action_email_use_tls');
  }
  public set actionEmailUseTls(value: boolean | cdktf.IResolvable) {
    this._actionEmailUseTls = value;
  }
  public resetActionEmailUseTls() {
    this._actionEmailUseTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailUseTlsInput() {
    return this._actionEmailUseTls;
  }

  // action_email_width_sort_columns - computed: true, optional: true, required: false
  private _actionEmailWidthSortColumns?: boolean | cdktf.IResolvable; 
  public get actionEmailWidthSortColumns() {
    return this.getBooleanAttribute('action_email_width_sort_columns');
  }
  public set actionEmailWidthSortColumns(value: boolean | cdktf.IResolvable) {
    this._actionEmailWidthSortColumns = value;
  }
  public resetActionEmailWidthSortColumns() {
    this._actionEmailWidthSortColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEmailWidthSortColumnsInput() {
    return this._actionEmailWidthSortColumns;
  }

  // action_jira_service_desk_param_account - computed: false, optional: true, required: false
  private _actionJiraServiceDeskParamAccount?: string; 
  public get actionJiraServiceDeskParamAccount() {
    return this.getStringAttribute('action_jira_service_desk_param_account');
  }
  public set actionJiraServiceDeskParamAccount(value: string) {
    this._actionJiraServiceDeskParamAccount = value;
  }
  public resetActionJiraServiceDeskParamAccount() {
    this._actionJiraServiceDeskParamAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionJiraServiceDeskParamAccountInput() {
    return this._actionJiraServiceDeskParamAccount;
  }

  // action_jira_service_desk_param_jira_customfields - computed: false, optional: true, required: false
  private _actionJiraServiceDeskParamJiraCustomfields?: string; 
  public get actionJiraServiceDeskParamJiraCustomfields() {
    return this.getStringAttribute('action_jira_service_desk_param_jira_customfields');
  }
  public set actionJiraServiceDeskParamJiraCustomfields(value: string) {
    this._actionJiraServiceDeskParamJiraCustomfields = value;
  }
  public resetActionJiraServiceDeskParamJiraCustomfields() {
    this._actionJiraServiceDeskParamJiraCustomfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionJiraServiceDeskParamJiraCustomfieldsInput() {
    return this._actionJiraServiceDeskParamJiraCustomfields;
  }

  // action_jira_service_desk_param_jira_description - computed: false, optional: true, required: false
  private _actionJiraServiceDeskParamJiraDescription?: string; 
  public get actionJiraServiceDeskParamJiraDescription() {
    return this.getStringAttribute('action_jira_service_desk_param_jira_description');
  }
  public set actionJiraServiceDeskParamJiraDescription(value: string) {
    this._actionJiraServiceDeskParamJiraDescription = value;
  }
  public resetActionJiraServiceDeskParamJiraDescription() {
    this._actionJiraServiceDeskParamJiraDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionJiraServiceDeskParamJiraDescriptionInput() {
    return this._actionJiraServiceDeskParamJiraDescription;
  }

  // action_jira_service_desk_param_jira_issue_type - computed: false, optional: true, required: false
  private _actionJiraServiceDeskParamJiraIssueType?: string; 
  public get actionJiraServiceDeskParamJiraIssueType() {
    return this.getStringAttribute('action_jira_service_desk_param_jira_issue_type');
  }
  public set actionJiraServiceDeskParamJiraIssueType(value: string) {
    this._actionJiraServiceDeskParamJiraIssueType = value;
  }
  public resetActionJiraServiceDeskParamJiraIssueType() {
    this._actionJiraServiceDeskParamJiraIssueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionJiraServiceDeskParamJiraIssueTypeInput() {
    return this._actionJiraServiceDeskParamJiraIssueType;
  }

  // action_jira_service_desk_param_jira_priority - computed: false, optional: true, required: false
  private _actionJiraServiceDeskParamJiraPriority?: string; 
  public get actionJiraServiceDeskParamJiraPriority() {
    return this.getStringAttribute('action_jira_service_desk_param_jira_priority');
  }
  public set actionJiraServiceDeskParamJiraPriority(value: string) {
    this._actionJiraServiceDeskParamJiraPriority = value;
  }
  public resetActionJiraServiceDeskParamJiraPriority() {
    this._actionJiraServiceDeskParamJiraPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionJiraServiceDeskParamJiraPriorityInput() {
    return this._actionJiraServiceDeskParamJiraPriority;
  }

  // action_jira_service_desk_param_jira_project - computed: false, optional: true, required: false
  private _actionJiraServiceDeskParamJiraProject?: string; 
  public get actionJiraServiceDeskParamJiraProject() {
    return this.getStringAttribute('action_jira_service_desk_param_jira_project');
  }
  public set actionJiraServiceDeskParamJiraProject(value: string) {
    this._actionJiraServiceDeskParamJiraProject = value;
  }
  public resetActionJiraServiceDeskParamJiraProject() {
    this._actionJiraServiceDeskParamJiraProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionJiraServiceDeskParamJiraProjectInput() {
    return this._actionJiraServiceDeskParamJiraProject;
  }

  // action_jira_service_desk_param_jira_summary - computed: false, optional: true, required: false
  private _actionJiraServiceDeskParamJiraSummary?: string; 
  public get actionJiraServiceDeskParamJiraSummary() {
    return this.getStringAttribute('action_jira_service_desk_param_jira_summary');
  }
  public set actionJiraServiceDeskParamJiraSummary(value: string) {
    this._actionJiraServiceDeskParamJiraSummary = value;
  }
  public resetActionJiraServiceDeskParamJiraSummary() {
    this._actionJiraServiceDeskParamJiraSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionJiraServiceDeskParamJiraSummaryInput() {
    return this._actionJiraServiceDeskParamJiraSummary;
  }

  // action_logevent - computed: true, optional: true, required: false
  private _actionLogevent?: string; 
  public get actionLogevent() {
    return this.getStringAttribute('action_logevent');
  }
  public set actionLogevent(value: string) {
    this._actionLogevent = value;
  }
  public resetActionLogevent() {
    this._actionLogevent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionLogeventInput() {
    return this._actionLogevent;
  }

  // action_logevent_param_event - computed: true, optional: true, required: false
  private _actionLogeventParamEvent?: string; 
  public get actionLogeventParamEvent() {
    return this.getStringAttribute('action_logevent_param_event');
  }
  public set actionLogeventParamEvent(value: string) {
    this._actionLogeventParamEvent = value;
  }
  public resetActionLogeventParamEvent() {
    this._actionLogeventParamEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionLogeventParamEventInput() {
    return this._actionLogeventParamEvent;
  }

  // action_logevent_param_host - computed: true, optional: true, required: false
  private _actionLogeventParamHost?: string; 
  public get actionLogeventParamHost() {
    return this.getStringAttribute('action_logevent_param_host');
  }
  public set actionLogeventParamHost(value: string) {
    this._actionLogeventParamHost = value;
  }
  public resetActionLogeventParamHost() {
    this._actionLogeventParamHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionLogeventParamHostInput() {
    return this._actionLogeventParamHost;
  }

  // action_logevent_param_index - computed: true, optional: true, required: false
  private _actionLogeventParamIndex?: string; 
  public get actionLogeventParamIndex() {
    return this.getStringAttribute('action_logevent_param_index');
  }
  public set actionLogeventParamIndex(value: string) {
    this._actionLogeventParamIndex = value;
  }
  public resetActionLogeventParamIndex() {
    this._actionLogeventParamIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionLogeventParamIndexInput() {
    return this._actionLogeventParamIndex;
  }

  // action_logevent_param_source - computed: true, optional: true, required: false
  private _actionLogeventParamSource?: string; 
  public get actionLogeventParamSource() {
    return this.getStringAttribute('action_logevent_param_source');
  }
  public set actionLogeventParamSource(value: string) {
    this._actionLogeventParamSource = value;
  }
  public resetActionLogeventParamSource() {
    this._actionLogeventParamSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionLogeventParamSourceInput() {
    return this._actionLogeventParamSource;
  }

  // action_logevent_param_sourcetype - computed: true, optional: true, required: false
  private _actionLogeventParamSourcetype?: string; 
  public get actionLogeventParamSourcetype() {
    return this.getStringAttribute('action_logevent_param_sourcetype');
  }
  public set actionLogeventParamSourcetype(value: string) {
    this._actionLogeventParamSourcetype = value;
  }
  public resetActionLogeventParamSourcetype() {
    this._actionLogeventParamSourcetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionLogeventParamSourcetypeInput() {
    return this._actionLogeventParamSourcetype;
  }

  // action_pagerduty_custom_details - computed: true, optional: true, required: false
  private _actionPagerdutyCustomDetails?: string; 
  public get actionPagerdutyCustomDetails() {
    return this.getStringAttribute('action_pagerduty_custom_details');
  }
  public set actionPagerdutyCustomDetails(value: string) {
    this._actionPagerdutyCustomDetails = value;
  }
  public resetActionPagerdutyCustomDetails() {
    this._actionPagerdutyCustomDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPagerdutyCustomDetailsInput() {
    return this._actionPagerdutyCustomDetails;
  }

  // action_pagerduty_integration_key - computed: true, optional: true, required: false
  private _actionPagerdutyIntegrationKey?: string; 
  public get actionPagerdutyIntegrationKey() {
    return this.getStringAttribute('action_pagerduty_integration_key');
  }
  public set actionPagerdutyIntegrationKey(value: string) {
    this._actionPagerdutyIntegrationKey = value;
  }
  public resetActionPagerdutyIntegrationKey() {
    this._actionPagerdutyIntegrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPagerdutyIntegrationKeyInput() {
    return this._actionPagerdutyIntegrationKey;
  }

  // action_pagerduty_integration_key_override - computed: true, optional: true, required: false
  private _actionPagerdutyIntegrationKeyOverride?: string; 
  public get actionPagerdutyIntegrationKeyOverride() {
    return this.getStringAttribute('action_pagerduty_integration_key_override');
  }
  public set actionPagerdutyIntegrationKeyOverride(value: string) {
    this._actionPagerdutyIntegrationKeyOverride = value;
  }
  public resetActionPagerdutyIntegrationKeyOverride() {
    this._actionPagerdutyIntegrationKeyOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPagerdutyIntegrationKeyOverrideInput() {
    return this._actionPagerdutyIntegrationKeyOverride;
  }

  // action_pagerduty_integration_url - computed: false, optional: true, required: false
  private _actionPagerdutyIntegrationUrl?: string; 
  public get actionPagerdutyIntegrationUrl() {
    return this.getStringAttribute('action_pagerduty_integration_url');
  }
  public set actionPagerdutyIntegrationUrl(value: string) {
    this._actionPagerdutyIntegrationUrl = value;
  }
  public resetActionPagerdutyIntegrationUrl() {
    this._actionPagerdutyIntegrationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPagerdutyIntegrationUrlInput() {
    return this._actionPagerdutyIntegrationUrl;
  }

  // action_pagerduty_integration_url_override - computed: false, optional: true, required: false
  private _actionPagerdutyIntegrationUrlOverride?: string; 
  public get actionPagerdutyIntegrationUrlOverride() {
    return this.getStringAttribute('action_pagerduty_integration_url_override');
  }
  public set actionPagerdutyIntegrationUrlOverride(value: string) {
    this._actionPagerdutyIntegrationUrlOverride = value;
  }
  public resetActionPagerdutyIntegrationUrlOverride() {
    this._actionPagerdutyIntegrationUrlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPagerdutyIntegrationUrlOverrideInput() {
    return this._actionPagerdutyIntegrationUrlOverride;
  }

  // action_populate_lookup - computed: true, optional: false, required: false
  public get actionPopulateLookup() {
    return this.getBooleanAttribute('action_populate_lookup');
  }

  // action_populate_lookup_command - computed: true, optional: true, required: false
  private _actionPopulateLookupCommand?: string; 
  public get actionPopulateLookupCommand() {
    return this.getStringAttribute('action_populate_lookup_command');
  }
  public set actionPopulateLookupCommand(value: string) {
    this._actionPopulateLookupCommand = value;
  }
  public resetActionPopulateLookupCommand() {
    this._actionPopulateLookupCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPopulateLookupCommandInput() {
    return this._actionPopulateLookupCommand;
  }

  // action_populate_lookup_dest - computed: true, optional: true, required: false
  private _actionPopulateLookupDest?: string; 
  public get actionPopulateLookupDest() {
    return this.getStringAttribute('action_populate_lookup_dest');
  }
  public set actionPopulateLookupDest(value: string) {
    this._actionPopulateLookupDest = value;
  }
  public resetActionPopulateLookupDest() {
    this._actionPopulateLookupDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPopulateLookupDestInput() {
    return this._actionPopulateLookupDest;
  }

  // action_populate_lookup_hostname - computed: true, optional: true, required: false
  private _actionPopulateLookupHostname?: string; 
  public get actionPopulateLookupHostname() {
    return this.getStringAttribute('action_populate_lookup_hostname');
  }
  public set actionPopulateLookupHostname(value: string) {
    this._actionPopulateLookupHostname = value;
  }
  public resetActionPopulateLookupHostname() {
    this._actionPopulateLookupHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPopulateLookupHostnameInput() {
    return this._actionPopulateLookupHostname;
  }

  // action_populate_lookup_max_results - computed: true, optional: true, required: false
  private _actionPopulateLookupMaxResults?: number; 
  public get actionPopulateLookupMaxResults() {
    return this.getNumberAttribute('action_populate_lookup_max_results');
  }
  public set actionPopulateLookupMaxResults(value: number) {
    this._actionPopulateLookupMaxResults = value;
  }
  public resetActionPopulateLookupMaxResults() {
    this._actionPopulateLookupMaxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPopulateLookupMaxResultsInput() {
    return this._actionPopulateLookupMaxResults;
  }

  // action_populate_lookup_max_time - computed: true, optional: true, required: false
  private _actionPopulateLookupMaxTime?: number; 
  public get actionPopulateLookupMaxTime() {
    return this.getNumberAttribute('action_populate_lookup_max_time');
  }
  public set actionPopulateLookupMaxTime(value: number) {
    this._actionPopulateLookupMaxTime = value;
  }
  public resetActionPopulateLookupMaxTime() {
    this._actionPopulateLookupMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPopulateLookupMaxTimeInput() {
    return this._actionPopulateLookupMaxTime;
  }

  // action_populate_lookup_track_alert - computed: true, optional: true, required: false
  private _actionPopulateLookupTrackAlert?: boolean | cdktf.IResolvable; 
  public get actionPopulateLookupTrackAlert() {
    return this.getBooleanAttribute('action_populate_lookup_track_alert');
  }
  public set actionPopulateLookupTrackAlert(value: boolean | cdktf.IResolvable) {
    this._actionPopulateLookupTrackAlert = value;
  }
  public resetActionPopulateLookupTrackAlert() {
    this._actionPopulateLookupTrackAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPopulateLookupTrackAlertInput() {
    return this._actionPopulateLookupTrackAlert;
  }

  // action_populate_lookup_ttl - computed: true, optional: true, required: false
  private _actionPopulateLookupTtl?: string; 
  public get actionPopulateLookupTtl() {
    return this.getStringAttribute('action_populate_lookup_ttl');
  }
  public set actionPopulateLookupTtl(value: string) {
    this._actionPopulateLookupTtl = value;
  }
  public resetActionPopulateLookupTtl() {
    this._actionPopulateLookupTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionPopulateLookupTtlInput() {
    return this._actionPopulateLookupTtl;
  }

  // action_rss - computed: true, optional: false, required: false
  public get actionRss() {
    return this.getBooleanAttribute('action_rss');
  }

  // action_rss_command - computed: true, optional: true, required: false
  private _actionRssCommand?: string; 
  public get actionRssCommand() {
    return this.getStringAttribute('action_rss_command');
  }
  public set actionRssCommand(value: string) {
    this._actionRssCommand = value;
  }
  public resetActionRssCommand() {
    this._actionRssCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRssCommandInput() {
    return this._actionRssCommand;
  }

  // action_rss_hostname - computed: true, optional: true, required: false
  private _actionRssHostname?: string; 
  public get actionRssHostname() {
    return this.getStringAttribute('action_rss_hostname');
  }
  public set actionRssHostname(value: string) {
    this._actionRssHostname = value;
  }
  public resetActionRssHostname() {
    this._actionRssHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRssHostnameInput() {
    return this._actionRssHostname;
  }

  // action_rss_max_results - computed: true, optional: true, required: false
  private _actionRssMaxResults?: number; 
  public get actionRssMaxResults() {
    return this.getNumberAttribute('action_rss_max_results');
  }
  public set actionRssMaxResults(value: number) {
    this._actionRssMaxResults = value;
  }
  public resetActionRssMaxResults() {
    this._actionRssMaxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRssMaxResultsInput() {
    return this._actionRssMaxResults;
  }

  // action_rss_max_time - computed: true, optional: true, required: false
  private _actionRssMaxTime?: number; 
  public get actionRssMaxTime() {
    return this.getNumberAttribute('action_rss_max_time');
  }
  public set actionRssMaxTime(value: number) {
    this._actionRssMaxTime = value;
  }
  public resetActionRssMaxTime() {
    this._actionRssMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRssMaxTimeInput() {
    return this._actionRssMaxTime;
  }

  // action_rss_track_alert - computed: true, optional: true, required: false
  private _actionRssTrackAlert?: boolean | cdktf.IResolvable; 
  public get actionRssTrackAlert() {
    return this.getBooleanAttribute('action_rss_track_alert');
  }
  public set actionRssTrackAlert(value: boolean | cdktf.IResolvable) {
    this._actionRssTrackAlert = value;
  }
  public resetActionRssTrackAlert() {
    this._actionRssTrackAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRssTrackAlertInput() {
    return this._actionRssTrackAlert;
  }

  // action_rss_ttl - computed: true, optional: true, required: false
  private _actionRssTtl?: string; 
  public get actionRssTtl() {
    return this.getStringAttribute('action_rss_ttl');
  }
  public set actionRssTtl(value: string) {
    this._actionRssTtl = value;
  }
  public resetActionRssTtl() {
    this._actionRssTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRssTtlInput() {
    return this._actionRssTtl;
  }

  // action_script - computed: true, optional: false, required: false
  public get actionScript() {
    return this.getBooleanAttribute('action_script');
  }

  // action_script_command - computed: true, optional: true, required: false
  private _actionScriptCommand?: string; 
  public get actionScriptCommand() {
    return this.getStringAttribute('action_script_command');
  }
  public set actionScriptCommand(value: string) {
    this._actionScriptCommand = value;
  }
  public resetActionScriptCommand() {
    this._actionScriptCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionScriptCommandInput() {
    return this._actionScriptCommand;
  }

  // action_script_filename - computed: true, optional: true, required: false
  private _actionScriptFilename?: string; 
  public get actionScriptFilename() {
    return this.getStringAttribute('action_script_filename');
  }
  public set actionScriptFilename(value: string) {
    this._actionScriptFilename = value;
  }
  public resetActionScriptFilename() {
    this._actionScriptFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionScriptFilenameInput() {
    return this._actionScriptFilename;
  }

  // action_script_hostname - computed: true, optional: true, required: false
  private _actionScriptHostname?: string; 
  public get actionScriptHostname() {
    return this.getStringAttribute('action_script_hostname');
  }
  public set actionScriptHostname(value: string) {
    this._actionScriptHostname = value;
  }
  public resetActionScriptHostname() {
    this._actionScriptHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionScriptHostnameInput() {
    return this._actionScriptHostname;
  }

  // action_script_max_results - computed: true, optional: true, required: false
  private _actionScriptMaxResults?: number; 
  public get actionScriptMaxResults() {
    return this.getNumberAttribute('action_script_max_results');
  }
  public set actionScriptMaxResults(value: number) {
    this._actionScriptMaxResults = value;
  }
  public resetActionScriptMaxResults() {
    this._actionScriptMaxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionScriptMaxResultsInput() {
    return this._actionScriptMaxResults;
  }

  // action_script_max_time - computed: true, optional: true, required: false
  private _actionScriptMaxTime?: number; 
  public get actionScriptMaxTime() {
    return this.getNumberAttribute('action_script_max_time');
  }
  public set actionScriptMaxTime(value: number) {
    this._actionScriptMaxTime = value;
  }
  public resetActionScriptMaxTime() {
    this._actionScriptMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionScriptMaxTimeInput() {
    return this._actionScriptMaxTime;
  }

  // action_script_track_alert - computed: true, optional: true, required: false
  private _actionScriptTrackAlert?: boolean | cdktf.IResolvable; 
  public get actionScriptTrackAlert() {
    return this.getBooleanAttribute('action_script_track_alert');
  }
  public set actionScriptTrackAlert(value: boolean | cdktf.IResolvable) {
    this._actionScriptTrackAlert = value;
  }
  public resetActionScriptTrackAlert() {
    this._actionScriptTrackAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionScriptTrackAlertInput() {
    return this._actionScriptTrackAlert;
  }

  // action_script_ttl - computed: true, optional: true, required: false
  private _actionScriptTtl?: string; 
  public get actionScriptTtl() {
    return this.getStringAttribute('action_script_ttl');
  }
  public set actionScriptTtl(value: string) {
    this._actionScriptTtl = value;
  }
  public resetActionScriptTtl() {
    this._actionScriptTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionScriptTtlInput() {
    return this._actionScriptTtl;
  }

  // action_slack_param_attachment - computed: false, optional: true, required: false
  private _actionSlackParamAttachment?: string; 
  public get actionSlackParamAttachment() {
    return this.getStringAttribute('action_slack_param_attachment');
  }
  public set actionSlackParamAttachment(value: string) {
    this._actionSlackParamAttachment = value;
  }
  public resetActionSlackParamAttachment() {
    this._actionSlackParamAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSlackParamAttachmentInput() {
    return this._actionSlackParamAttachment;
  }

  // action_slack_param_channel - computed: false, optional: true, required: false
  private _actionSlackParamChannel?: string; 
  public get actionSlackParamChannel() {
    return this.getStringAttribute('action_slack_param_channel');
  }
  public set actionSlackParamChannel(value: string) {
    this._actionSlackParamChannel = value;
  }
  public resetActionSlackParamChannel() {
    this._actionSlackParamChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSlackParamChannelInput() {
    return this._actionSlackParamChannel;
  }

  // action_slack_param_fields - computed: false, optional: true, required: false
  private _actionSlackParamFields?: string; 
  public get actionSlackParamFields() {
    return this.getStringAttribute('action_slack_param_fields');
  }
  public set actionSlackParamFields(value: string) {
    this._actionSlackParamFields = value;
  }
  public resetActionSlackParamFields() {
    this._actionSlackParamFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSlackParamFieldsInput() {
    return this._actionSlackParamFields;
  }

  // action_slack_param_message - computed: false, optional: true, required: false
  private _actionSlackParamMessage?: string; 
  public get actionSlackParamMessage() {
    return this.getStringAttribute('action_slack_param_message');
  }
  public set actionSlackParamMessage(value: string) {
    this._actionSlackParamMessage = value;
  }
  public resetActionSlackParamMessage() {
    this._actionSlackParamMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSlackParamMessageInput() {
    return this._actionSlackParamMessage;
  }

  // action_slack_param_webhook_url_override - computed: false, optional: true, required: false
  private _actionSlackParamWebhookUrlOverride?: string; 
  public get actionSlackParamWebhookUrlOverride() {
    return this.getStringAttribute('action_slack_param_webhook_url_override');
  }
  public set actionSlackParamWebhookUrlOverride(value: string) {
    this._actionSlackParamWebhookUrlOverride = value;
  }
  public resetActionSlackParamWebhookUrlOverride() {
    this._actionSlackParamWebhookUrlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSlackParamWebhookUrlOverrideInput() {
    return this._actionSlackParamWebhookUrlOverride;
  }

  // action_snow_event_param_account - computed: true, optional: true, required: false
  private _actionSnowEventParamAccount?: string; 
  public get actionSnowEventParamAccount() {
    return this.getStringAttribute('action_snow_event_param_account');
  }
  public set actionSnowEventParamAccount(value: string) {
    this._actionSnowEventParamAccount = value;
  }
  public resetActionSnowEventParamAccount() {
    this._actionSnowEventParamAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSnowEventParamAccountInput() {
    return this._actionSnowEventParamAccount;
  }

  // action_snow_event_param_additional_info - computed: true, optional: true, required: false
  private _actionSnowEventParamAdditionalInfo?: string; 
  public get actionSnowEventParamAdditionalInfo() {
    return this.getStringAttribute('action_snow_event_param_additional_info');
  }
  public set actionSnowEventParamAdditionalInfo(value: string) {
    this._actionSnowEventParamAdditionalInfo = value;
  }
  public resetActionSnowEventParamAdditionalInfo() {
    this._actionSnowEventParamAdditionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSnowEventParamAdditionalInfoInput() {
    return this._actionSnowEventParamAdditionalInfo;
  }

  // action_snow_event_param_ci_identifier - computed: true, optional: true, required: false
  private _actionSnowEventParamCiIdentifier?: string; 
  public get actionSnowEventParamCiIdentifier() {
    return this.getStringAttribute('action_snow_event_param_ci_identifier');
  }
  public set actionSnowEventParamCiIdentifier(value: string) {
    this._actionSnowEventParamCiIdentifier = value;
  }
  public resetActionSnowEventParamCiIdentifier() {
    this._actionSnowEventParamCiIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSnowEventParamCiIdentifierInput() {
    return this._actionSnowEventParamCiIdentifier;
  }

  // action_snow_event_param_custom_fields - computed: true, optional: true, required: false
  private _actionSnowEventParamCustomFields?: string; 
  public get actionSnowEventParamCustomFields() {
    return this.getStringAttribute('action_snow_event_param_custom_fields');
  }
  public set actionSnowEventParamCustomFields(value: string) {
    this._actionSnowEventParamCustomFields = value;
  }
  public resetActionSnowEventParamCustomFields() {
    this._actionSnowEventParamCustomFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSnowEventParamCustomFieldsInput() {
    return this._actionSnowEventParamCustomFields;
  }

  // action_snow_event_param_description - computed: true, optional: true, required: false
  private _actionSnowEventParamDescription?: string; 
  public get actionSnowEventParamDescription() {
    return this.getStringAttribute('action_snow_event_param_description');
  }
  public set actionSnowEventParamDescription(value: string) {
    this._actionSnowEventParamDescription = value;
  }
  public resetActionSnowEventParamDescription() {
    this._actionSnowEventParamDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSnowEventParamDescriptionInput() {
    return this._actionSnowEventParamDescription;
  }

  // action_snow_event_param_node - computed: true, optional: true, required: false
  private _actionSnowEventParamNode?: string; 
  public get actionSnowEventParamNode() {
    return this.getStringAttribute('action_snow_event_param_node');
  }
  public set actionSnowEventParamNode(value: string) {
    this._actionSnowEventParamNode = value;
  }
  public resetActionSnowEventParamNode() {
    this._actionSnowEventParamNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSnowEventParamNodeInput() {
    return this._actionSnowEventParamNode;
  }

  // action_snow_event_param_resource - computed: true, optional: true, required: false
  private _actionSnowEventParamResource?: string; 
  public get actionSnowEventParamResource() {
    return this.getStringAttribute('action_snow_event_param_resource');
  }
  public set actionSnowEventParamResource(value: string) {
    this._actionSnowEventParamResource = value;
  }
  public resetActionSnowEventParamResource() {
    this._actionSnowEventParamResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSnowEventParamResourceInput() {
    return this._actionSnowEventParamResource;
  }

  // action_snow_event_param_severity - computed: true, optional: true, required: false
  private _actionSnowEventParamSeverity?: number; 
  public get actionSnowEventParamSeverity() {
    return this.getNumberAttribute('action_snow_event_param_severity');
  }
  public set actionSnowEventParamSeverity(value: number) {
    this._actionSnowEventParamSeverity = value;
  }
  public resetActionSnowEventParamSeverity() {
    this._actionSnowEventParamSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSnowEventParamSeverityInput() {
    return this._actionSnowEventParamSeverity;
  }

  // action_snow_event_param_type - computed: true, optional: true, required: false
  private _actionSnowEventParamType?: string; 
  public get actionSnowEventParamType() {
    return this.getStringAttribute('action_snow_event_param_type');
  }
  public set actionSnowEventParamType(value: string) {
    this._actionSnowEventParamType = value;
  }
  public resetActionSnowEventParamType() {
    this._actionSnowEventParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSnowEventParamTypeInput() {
    return this._actionSnowEventParamType;
  }

  // action_summary_index - computed: true, optional: false, required: false
  public get actionSummaryIndex() {
    return this.getBooleanAttribute('action_summary_index');
  }

  // action_summary_index_command - computed: true, optional: true, required: false
  private _actionSummaryIndexCommand?: string; 
  public get actionSummaryIndexCommand() {
    return this.getStringAttribute('action_summary_index_command');
  }
  public set actionSummaryIndexCommand(value: string) {
    this._actionSummaryIndexCommand = value;
  }
  public resetActionSummaryIndexCommand() {
    this._actionSummaryIndexCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSummaryIndexCommandInput() {
    return this._actionSummaryIndexCommand;
  }

  // action_summary_index_hostname - computed: true, optional: true, required: false
  private _actionSummaryIndexHostname?: string; 
  public get actionSummaryIndexHostname() {
    return this.getStringAttribute('action_summary_index_hostname');
  }
  public set actionSummaryIndexHostname(value: string) {
    this._actionSummaryIndexHostname = value;
  }
  public resetActionSummaryIndexHostname() {
    this._actionSummaryIndexHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSummaryIndexHostnameInput() {
    return this._actionSummaryIndexHostname;
  }

  // action_summary_index_inline - computed: true, optional: true, required: false
  private _actionSummaryIndexInline?: boolean | cdktf.IResolvable; 
  public get actionSummaryIndexInline() {
    return this.getBooleanAttribute('action_summary_index_inline');
  }
  public set actionSummaryIndexInline(value: boolean | cdktf.IResolvable) {
    this._actionSummaryIndexInline = value;
  }
  public resetActionSummaryIndexInline() {
    this._actionSummaryIndexInline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSummaryIndexInlineInput() {
    return this._actionSummaryIndexInline;
  }

  // action_summary_index_max_results - computed: true, optional: true, required: false
  private _actionSummaryIndexMaxResults?: number; 
  public get actionSummaryIndexMaxResults() {
    return this.getNumberAttribute('action_summary_index_max_results');
  }
  public set actionSummaryIndexMaxResults(value: number) {
    this._actionSummaryIndexMaxResults = value;
  }
  public resetActionSummaryIndexMaxResults() {
    this._actionSummaryIndexMaxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSummaryIndexMaxResultsInput() {
    return this._actionSummaryIndexMaxResults;
  }

  // action_summary_index_max_time - computed: true, optional: true, required: false
  private _actionSummaryIndexMaxTime?: number; 
  public get actionSummaryIndexMaxTime() {
    return this.getNumberAttribute('action_summary_index_max_time');
  }
  public set actionSummaryIndexMaxTime(value: number) {
    this._actionSummaryIndexMaxTime = value;
  }
  public resetActionSummaryIndexMaxTime() {
    this._actionSummaryIndexMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSummaryIndexMaxTimeInput() {
    return this._actionSummaryIndexMaxTime;
  }

  // action_summary_index_name - computed: true, optional: true, required: false
  private _actionSummaryIndexName?: string; 
  public get actionSummaryIndexName() {
    return this.getStringAttribute('action_summary_index_name');
  }
  public set actionSummaryIndexName(value: string) {
    this._actionSummaryIndexName = value;
  }
  public resetActionSummaryIndexName() {
    this._actionSummaryIndexName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSummaryIndexNameInput() {
    return this._actionSummaryIndexName;
  }

  // action_summary_index_track_alert - computed: true, optional: true, required: false
  private _actionSummaryIndexTrackAlert?: boolean | cdktf.IResolvable; 
  public get actionSummaryIndexTrackAlert() {
    return this.getBooleanAttribute('action_summary_index_track_alert');
  }
  public set actionSummaryIndexTrackAlert(value: boolean | cdktf.IResolvable) {
    this._actionSummaryIndexTrackAlert = value;
  }
  public resetActionSummaryIndexTrackAlert() {
    this._actionSummaryIndexTrackAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSummaryIndexTrackAlertInput() {
    return this._actionSummaryIndexTrackAlert;
  }

  // action_summary_index_ttl - computed: true, optional: true, required: false
  private _actionSummaryIndexTtl?: string; 
  public get actionSummaryIndexTtl() {
    return this.getStringAttribute('action_summary_index_ttl');
  }
  public set actionSummaryIndexTtl(value: string) {
    this._actionSummaryIndexTtl = value;
  }
  public resetActionSummaryIndexTtl() {
    this._actionSummaryIndexTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSummaryIndexTtlInput() {
    return this._actionSummaryIndexTtl;
  }

  // action_webhook_param_url - computed: false, optional: true, required: false
  private _actionWebhookParamUrl?: string; 
  public get actionWebhookParamUrl() {
    return this.getStringAttribute('action_webhook_param_url');
  }
  public set actionWebhookParamUrl(value: string) {
    this._actionWebhookParamUrl = value;
  }
  public resetActionWebhookParamUrl() {
    this._actionWebhookParamUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionWebhookParamUrlInput() {
    return this._actionWebhookParamUrl;
  }

  // actions - computed: true, optional: true, required: false
  private _actions?: string; 
  public get actions() {
    return this.getStringAttribute('actions');
  }
  public set actions(value: string) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // alert_comparator - computed: true, optional: true, required: false
  private _alertComparator?: string; 
  public get alertComparator() {
    return this.getStringAttribute('alert_comparator');
  }
  public set alertComparator(value: string) {
    this._alertComparator = value;
  }
  public resetAlertComparator() {
    this._alertComparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertComparatorInput() {
    return this._alertComparator;
  }

  // alert_condition - computed: true, optional: true, required: false
  private _alertCondition?: string; 
  public get alertCondition() {
    return this.getStringAttribute('alert_condition');
  }
  public set alertCondition(value: string) {
    this._alertCondition = value;
  }
  public resetAlertCondition() {
    this._alertCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionInput() {
    return this._alertCondition;
  }

  // alert_digest_mode - computed: true, optional: true, required: false
  private _alertDigestMode?: boolean | cdktf.IResolvable; 
  public get alertDigestMode() {
    return this.getBooleanAttribute('alert_digest_mode');
  }
  public set alertDigestMode(value: boolean | cdktf.IResolvable) {
    this._alertDigestMode = value;
  }
  public resetAlertDigestMode() {
    this._alertDigestMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDigestModeInput() {
    return this._alertDigestMode;
  }

  // alert_expires - computed: true, optional: true, required: false
  private _alertExpires?: string; 
  public get alertExpires() {
    return this.getStringAttribute('alert_expires');
  }
  public set alertExpires(value: string) {
    this._alertExpires = value;
  }
  public resetAlertExpires() {
    this._alertExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertExpiresInput() {
    return this._alertExpires;
  }

  // alert_severity - computed: true, optional: true, required: false
  private _alertSeverity?: number; 
  public get alertSeverity() {
    return this.getNumberAttribute('alert_severity');
  }
  public set alertSeverity(value: number) {
    this._alertSeverity = value;
  }
  public resetAlertSeverity() {
    this._alertSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSeverityInput() {
    return this._alertSeverity;
  }

  // alert_suppress - computed: true, optional: true, required: false
  private _alertSuppress?: boolean | cdktf.IResolvable; 
  public get alertSuppress() {
    return this.getBooleanAttribute('alert_suppress');
  }
  public set alertSuppress(value: boolean | cdktf.IResolvable) {
    this._alertSuppress = value;
  }
  public resetAlertSuppress() {
    this._alertSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSuppressInput() {
    return this._alertSuppress;
  }

  // alert_suppress_fields - computed: true, optional: true, required: false
  private _alertSuppressFields?: string; 
  public get alertSuppressFields() {
    return this.getStringAttribute('alert_suppress_fields');
  }
  public set alertSuppressFields(value: string) {
    this._alertSuppressFields = value;
  }
  public resetAlertSuppressFields() {
    this._alertSuppressFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSuppressFieldsInput() {
    return this._alertSuppressFields;
  }

  // alert_suppress_period - computed: true, optional: true, required: false
  private _alertSuppressPeriod?: string; 
  public get alertSuppressPeriod() {
    return this.getStringAttribute('alert_suppress_period');
  }
  public set alertSuppressPeriod(value: string) {
    this._alertSuppressPeriod = value;
  }
  public resetAlertSuppressPeriod() {
    this._alertSuppressPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSuppressPeriodInput() {
    return this._alertSuppressPeriod;
  }

  // alert_threshold - computed: true, optional: true, required: false
  private _alertThreshold?: string; 
  public get alertThreshold() {
    return this.getStringAttribute('alert_threshold');
  }
  public set alertThreshold(value: string) {
    this._alertThreshold = value;
  }
  public resetAlertThreshold() {
    this._alertThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertThresholdInput() {
    return this._alertThreshold;
  }

  // alert_track - computed: true, optional: true, required: false
  private _alertTrack?: boolean | cdktf.IResolvable; 
  public get alertTrack() {
    return this.getBooleanAttribute('alert_track');
  }
  public set alertTrack(value: boolean | cdktf.IResolvable) {
    this._alertTrack = value;
  }
  public resetAlertTrack() {
    this._alertTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTrackInput() {
    return this._alertTrack;
  }

  // alert_type - computed: true, optional: true, required: false
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  public resetAlertType() {
    this._alertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // allow_skew - computed: true, optional: true, required: false
  private _allowSkew?: string; 
  public get allowSkew() {
    return this.getStringAttribute('allow_skew');
  }
  public set allowSkew(value: string) {
    this._allowSkew = value;
  }
  public resetAllowSkew() {
    this._allowSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSkewInput() {
    return this._allowSkew;
  }

  // auto_summarize - computed: true, optional: true, required: false
  private _autoSummarize?: boolean | cdktf.IResolvable; 
  public get autoSummarize() {
    return this.getBooleanAttribute('auto_summarize');
  }
  public set autoSummarize(value: boolean | cdktf.IResolvable) {
    this._autoSummarize = value;
  }
  public resetAutoSummarize() {
    this._autoSummarize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeInput() {
    return this._autoSummarize;
  }

  // auto_summarize_command - computed: true, optional: true, required: false
  private _autoSummarizeCommand?: string; 
  public get autoSummarizeCommand() {
    return this.getStringAttribute('auto_summarize_command');
  }
  public set autoSummarizeCommand(value: string) {
    this._autoSummarizeCommand = value;
  }
  public resetAutoSummarizeCommand() {
    this._autoSummarizeCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeCommandInput() {
    return this._autoSummarizeCommand;
  }

  // auto_summarize_cron_schedule - computed: true, optional: true, required: false
  private _autoSummarizeCronSchedule?: string; 
  public get autoSummarizeCronSchedule() {
    return this.getStringAttribute('auto_summarize_cron_schedule');
  }
  public set autoSummarizeCronSchedule(value: string) {
    this._autoSummarizeCronSchedule = value;
  }
  public resetAutoSummarizeCronSchedule() {
    this._autoSummarizeCronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeCronScheduleInput() {
    return this._autoSummarizeCronSchedule;
  }

  // auto_summarize_dispatch_earliest_time - computed: true, optional: true, required: false
  private _autoSummarizeDispatchEarliestTime?: string; 
  public get autoSummarizeDispatchEarliestTime() {
    return this.getStringAttribute('auto_summarize_dispatch_earliest_time');
  }
  public set autoSummarizeDispatchEarliestTime(value: string) {
    this._autoSummarizeDispatchEarliestTime = value;
  }
  public resetAutoSummarizeDispatchEarliestTime() {
    this._autoSummarizeDispatchEarliestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeDispatchEarliestTimeInput() {
    return this._autoSummarizeDispatchEarliestTime;
  }

  // auto_summarize_dispatch_latest_time - computed: true, optional: true, required: false
  private _autoSummarizeDispatchLatestTime?: string; 
  public get autoSummarizeDispatchLatestTime() {
    return this.getStringAttribute('auto_summarize_dispatch_latest_time');
  }
  public set autoSummarizeDispatchLatestTime(value: string) {
    this._autoSummarizeDispatchLatestTime = value;
  }
  public resetAutoSummarizeDispatchLatestTime() {
    this._autoSummarizeDispatchLatestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeDispatchLatestTimeInput() {
    return this._autoSummarizeDispatchLatestTime;
  }

  // auto_summarize_dispatch_time_format - computed: true, optional: true, required: false
  private _autoSummarizeDispatchTimeFormat?: string; 
  public get autoSummarizeDispatchTimeFormat() {
    return this.getStringAttribute('auto_summarize_dispatch_time_format');
  }
  public set autoSummarizeDispatchTimeFormat(value: string) {
    this._autoSummarizeDispatchTimeFormat = value;
  }
  public resetAutoSummarizeDispatchTimeFormat() {
    this._autoSummarizeDispatchTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeDispatchTimeFormatInput() {
    return this._autoSummarizeDispatchTimeFormat;
  }

  // auto_summarize_dispatch_ttl - computed: true, optional: true, required: false
  private _autoSummarizeDispatchTtl?: string; 
  public get autoSummarizeDispatchTtl() {
    return this.getStringAttribute('auto_summarize_dispatch_ttl');
  }
  public set autoSummarizeDispatchTtl(value: string) {
    this._autoSummarizeDispatchTtl = value;
  }
  public resetAutoSummarizeDispatchTtl() {
    this._autoSummarizeDispatchTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeDispatchTtlInput() {
    return this._autoSummarizeDispatchTtl;
  }

  // auto_summarize_max_disabled_buckets - computed: true, optional: true, required: false
  private _autoSummarizeMaxDisabledBuckets?: number; 
  public get autoSummarizeMaxDisabledBuckets() {
    return this.getNumberAttribute('auto_summarize_max_disabled_buckets');
  }
  public set autoSummarizeMaxDisabledBuckets(value: number) {
    this._autoSummarizeMaxDisabledBuckets = value;
  }
  public resetAutoSummarizeMaxDisabledBuckets() {
    this._autoSummarizeMaxDisabledBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeMaxDisabledBucketsInput() {
    return this._autoSummarizeMaxDisabledBuckets;
  }

  // auto_summarize_max_summary_ratio - computed: true, optional: true, required: false
  private _autoSummarizeMaxSummaryRatio?: number; 
  public get autoSummarizeMaxSummaryRatio() {
    return this.getNumberAttribute('auto_summarize_max_summary_ratio');
  }
  public set autoSummarizeMaxSummaryRatio(value: number) {
    this._autoSummarizeMaxSummaryRatio = value;
  }
  public resetAutoSummarizeMaxSummaryRatio() {
    this._autoSummarizeMaxSummaryRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeMaxSummaryRatioInput() {
    return this._autoSummarizeMaxSummaryRatio;
  }

  // auto_summarize_max_summary_size - computed: true, optional: true, required: false
  private _autoSummarizeMaxSummarySize?: number; 
  public get autoSummarizeMaxSummarySize() {
    return this.getNumberAttribute('auto_summarize_max_summary_size');
  }
  public set autoSummarizeMaxSummarySize(value: number) {
    this._autoSummarizeMaxSummarySize = value;
  }
  public resetAutoSummarizeMaxSummarySize() {
    this._autoSummarizeMaxSummarySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeMaxSummarySizeInput() {
    return this._autoSummarizeMaxSummarySize;
  }

  // auto_summarize_max_time - computed: true, optional: true, required: false
  private _autoSummarizeMaxTime?: number; 
  public get autoSummarizeMaxTime() {
    return this.getNumberAttribute('auto_summarize_max_time');
  }
  public set autoSummarizeMaxTime(value: number) {
    this._autoSummarizeMaxTime = value;
  }
  public resetAutoSummarizeMaxTime() {
    this._autoSummarizeMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeMaxTimeInput() {
    return this._autoSummarizeMaxTime;
  }

  // auto_summarize_suspend_period - computed: true, optional: true, required: false
  private _autoSummarizeSuspendPeriod?: string; 
  public get autoSummarizeSuspendPeriod() {
    return this.getStringAttribute('auto_summarize_suspend_period');
  }
  public set autoSummarizeSuspendPeriod(value: string) {
    this._autoSummarizeSuspendPeriod = value;
  }
  public resetAutoSummarizeSuspendPeriod() {
    this._autoSummarizeSuspendPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeSuspendPeriodInput() {
    return this._autoSummarizeSuspendPeriod;
  }

  // auto_summarize_timespan - computed: true, optional: true, required: false
  private _autoSummarizeTimespan?: string; 
  public get autoSummarizeTimespan() {
    return this.getStringAttribute('auto_summarize_timespan');
  }
  public set autoSummarizeTimespan(value: string) {
    this._autoSummarizeTimespan = value;
  }
  public resetAutoSummarizeTimespan() {
    this._autoSummarizeTimespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummarizeTimespanInput() {
    return this._autoSummarizeTimespan;
  }

  // cron_schedule - computed: true, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
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

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dispatch_buckets - computed: true, optional: true, required: false
  private _dispatchBuckets?: number; 
  public get dispatchBuckets() {
    return this.getNumberAttribute('dispatch_buckets');
  }
  public set dispatchBuckets(value: number) {
    this._dispatchBuckets = value;
  }
  public resetDispatchBuckets() {
    this._dispatchBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchBucketsInput() {
    return this._dispatchBuckets;
  }

  // dispatch_earliest_time - computed: true, optional: true, required: false
  private _dispatchEarliestTime?: string; 
  public get dispatchEarliestTime() {
    return this.getStringAttribute('dispatch_earliest_time');
  }
  public set dispatchEarliestTime(value: string) {
    this._dispatchEarliestTime = value;
  }
  public resetDispatchEarliestTime() {
    this._dispatchEarliestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchEarliestTimeInput() {
    return this._dispatchEarliestTime;
  }

  // dispatch_index_earliest - computed: true, optional: true, required: false
  private _dispatchIndexEarliest?: string; 
  public get dispatchIndexEarliest() {
    return this.getStringAttribute('dispatch_index_earliest');
  }
  public set dispatchIndexEarliest(value: string) {
    this._dispatchIndexEarliest = value;
  }
  public resetDispatchIndexEarliest() {
    this._dispatchIndexEarliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchIndexEarliestInput() {
    return this._dispatchIndexEarliest;
  }

  // dispatch_index_latest - computed: true, optional: true, required: false
  private _dispatchIndexLatest?: string; 
  public get dispatchIndexLatest() {
    return this.getStringAttribute('dispatch_index_latest');
  }
  public set dispatchIndexLatest(value: string) {
    this._dispatchIndexLatest = value;
  }
  public resetDispatchIndexLatest() {
    this._dispatchIndexLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchIndexLatestInput() {
    return this._dispatchIndexLatest;
  }

  // dispatch_indexed_realtime - computed: true, optional: true, required: false
  private _dispatchIndexedRealtime?: boolean | cdktf.IResolvable; 
  public get dispatchIndexedRealtime() {
    return this.getBooleanAttribute('dispatch_indexed_realtime');
  }
  public set dispatchIndexedRealtime(value: boolean | cdktf.IResolvable) {
    this._dispatchIndexedRealtime = value;
  }
  public resetDispatchIndexedRealtime() {
    this._dispatchIndexedRealtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchIndexedRealtimeInput() {
    return this._dispatchIndexedRealtime;
  }

  // dispatch_indexed_realtime_minspan - computed: true, optional: true, required: false
  private _dispatchIndexedRealtimeMinspan?: number; 
  public get dispatchIndexedRealtimeMinspan() {
    return this.getNumberAttribute('dispatch_indexed_realtime_minspan');
  }
  public set dispatchIndexedRealtimeMinspan(value: number) {
    this._dispatchIndexedRealtimeMinspan = value;
  }
  public resetDispatchIndexedRealtimeMinspan() {
    this._dispatchIndexedRealtimeMinspan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchIndexedRealtimeMinspanInput() {
    return this._dispatchIndexedRealtimeMinspan;
  }

  // dispatch_indexed_realtime_offset - computed: true, optional: true, required: false
  private _dispatchIndexedRealtimeOffset?: number; 
  public get dispatchIndexedRealtimeOffset() {
    return this.getNumberAttribute('dispatch_indexed_realtime_offset');
  }
  public set dispatchIndexedRealtimeOffset(value: number) {
    this._dispatchIndexedRealtimeOffset = value;
  }
  public resetDispatchIndexedRealtimeOffset() {
    this._dispatchIndexedRealtimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchIndexedRealtimeOffsetInput() {
    return this._dispatchIndexedRealtimeOffset;
  }

  // dispatch_latest_time - computed: true, optional: true, required: false
  private _dispatchLatestTime?: string; 
  public get dispatchLatestTime() {
    return this.getStringAttribute('dispatch_latest_time');
  }
  public set dispatchLatestTime(value: string) {
    this._dispatchLatestTime = value;
  }
  public resetDispatchLatestTime() {
    this._dispatchLatestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchLatestTimeInput() {
    return this._dispatchLatestTime;
  }

  // dispatch_lookups - computed: true, optional: true, required: false
  private _dispatchLookups?: boolean | cdktf.IResolvable; 
  public get dispatchLookups() {
    return this.getBooleanAttribute('dispatch_lookups');
  }
  public set dispatchLookups(value: boolean | cdktf.IResolvable) {
    this._dispatchLookups = value;
  }
  public resetDispatchLookups() {
    this._dispatchLookups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchLookupsInput() {
    return this._dispatchLookups;
  }

  // dispatch_max_count - computed: true, optional: true, required: false
  private _dispatchMaxCount?: number; 
  public get dispatchMaxCount() {
    return this.getNumberAttribute('dispatch_max_count');
  }
  public set dispatchMaxCount(value: number) {
    this._dispatchMaxCount = value;
  }
  public resetDispatchMaxCount() {
    this._dispatchMaxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchMaxCountInput() {
    return this._dispatchMaxCount;
  }

  // dispatch_max_time - computed: true, optional: true, required: false
  private _dispatchMaxTime?: number; 
  public get dispatchMaxTime() {
    return this.getNumberAttribute('dispatch_max_time');
  }
  public set dispatchMaxTime(value: number) {
    this._dispatchMaxTime = value;
  }
  public resetDispatchMaxTime() {
    this._dispatchMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchMaxTimeInput() {
    return this._dispatchMaxTime;
  }

  // dispatch_reduce_freq - computed: true, optional: true, required: false
  private _dispatchReduceFreq?: number; 
  public get dispatchReduceFreq() {
    return this.getNumberAttribute('dispatch_reduce_freq');
  }
  public set dispatchReduceFreq(value: number) {
    this._dispatchReduceFreq = value;
  }
  public resetDispatchReduceFreq() {
    this._dispatchReduceFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchReduceFreqInput() {
    return this._dispatchReduceFreq;
  }

  // dispatch_rt_backfill - computed: true, optional: true, required: false
  private _dispatchRtBackfill?: boolean | cdktf.IResolvable; 
  public get dispatchRtBackfill() {
    return this.getBooleanAttribute('dispatch_rt_backfill');
  }
  public set dispatchRtBackfill(value: boolean | cdktf.IResolvable) {
    this._dispatchRtBackfill = value;
  }
  public resetDispatchRtBackfill() {
    this._dispatchRtBackfill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRtBackfillInput() {
    return this._dispatchRtBackfill;
  }

  // dispatch_rt_maximum_span - computed: true, optional: true, required: false
  private _dispatchRtMaximumSpan?: number; 
  public get dispatchRtMaximumSpan() {
    return this.getNumberAttribute('dispatch_rt_maximum_span');
  }
  public set dispatchRtMaximumSpan(value: number) {
    this._dispatchRtMaximumSpan = value;
  }
  public resetDispatchRtMaximumSpan() {
    this._dispatchRtMaximumSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRtMaximumSpanInput() {
    return this._dispatchRtMaximumSpan;
  }

  // dispatch_spawn_process - computed: true, optional: true, required: false
  private _dispatchSpawnProcess?: boolean | cdktf.IResolvable; 
  public get dispatchSpawnProcess() {
    return this.getBooleanAttribute('dispatch_spawn_process');
  }
  public set dispatchSpawnProcess(value: boolean | cdktf.IResolvable) {
    this._dispatchSpawnProcess = value;
  }
  public resetDispatchSpawnProcess() {
    this._dispatchSpawnProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchSpawnProcessInput() {
    return this._dispatchSpawnProcess;
  }

  // dispatch_time_format - computed: true, optional: true, required: false
  private _dispatchTimeFormat?: string; 
  public get dispatchTimeFormat() {
    return this.getStringAttribute('dispatch_time_format');
  }
  public set dispatchTimeFormat(value: string) {
    this._dispatchTimeFormat = value;
  }
  public resetDispatchTimeFormat() {
    this._dispatchTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchTimeFormatInput() {
    return this._dispatchTimeFormat;
  }

  // dispatch_ttl - computed: true, optional: true, required: false
  private _dispatchTtl?: string; 
  public get dispatchTtl() {
    return this.getStringAttribute('dispatch_ttl');
  }
  public set dispatchTtl(value: string) {
    this._dispatchTtl = value;
  }
  public resetDispatchTtl() {
    this._dispatchTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchTtlInput() {
    return this._dispatchTtl;
  }

  // display_view - computed: true, optional: true, required: false
  private _displayView?: string; 
  public get displayView() {
    return this.getStringAttribute('display_view');
  }
  public set displayView(value: string) {
    this._displayView = value;
  }
  public resetDisplayView() {
    this._displayView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayViewInput() {
    return this._displayView;
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

  // is_scheduled - computed: true, optional: true, required: false
  private _isScheduled?: boolean | cdktf.IResolvable; 
  public get isScheduled() {
    return this.getBooleanAttribute('is_scheduled');
  }
  public set isScheduled(value: boolean | cdktf.IResolvable) {
    this._isScheduled = value;
  }
  public resetIsScheduled() {
    this._isScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScheduledInput() {
    return this._isScheduled;
  }

  // is_visible - computed: false, optional: true, required: false
  private _isVisible?: boolean | cdktf.IResolvable; 
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }
  public set isVisible(value: boolean | cdktf.IResolvable) {
    this._isVisible = value;
  }
  public resetIsVisible() {
    this._isVisible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVisibleInput() {
    return this._isVisible;
  }

  // max_concurrent - computed: true, optional: true, required: false
  private _maxConcurrent?: number; 
  public get maxConcurrent() {
    return this.getNumberAttribute('max_concurrent');
  }
  public set maxConcurrent(value: number) {
    this._maxConcurrent = value;
  }
  public resetMaxConcurrent() {
    this._maxConcurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentInput() {
    return this._maxConcurrent;
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

  // realtime_schedule - computed: true, optional: true, required: false
  private _realtimeSchedule?: boolean | cdktf.IResolvable; 
  public get realtimeSchedule() {
    return this.getBooleanAttribute('realtime_schedule');
  }
  public set realtimeSchedule(value: boolean | cdktf.IResolvable) {
    this._realtimeSchedule = value;
  }
  public resetRealtimeSchedule() {
    this._realtimeSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeScheduleInput() {
    return this._realtimeSchedule;
  }

  // request_ui_dispatch_app - computed: true, optional: true, required: false
  private _requestUiDispatchApp?: string; 
  public get requestUiDispatchApp() {
    return this.getStringAttribute('request_ui_dispatch_app');
  }
  public set requestUiDispatchApp(value: string) {
    this._requestUiDispatchApp = value;
  }
  public resetRequestUiDispatchApp() {
    this._requestUiDispatchApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUiDispatchAppInput() {
    return this._requestUiDispatchApp;
  }

  // request_ui_dispatch_view - computed: true, optional: true, required: false
  private _requestUiDispatchView?: string; 
  public get requestUiDispatchView() {
    return this.getStringAttribute('request_ui_dispatch_view');
  }
  public set requestUiDispatchView(value: string) {
    this._requestUiDispatchView = value;
  }
  public resetRequestUiDispatchView() {
    this._requestUiDispatchView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUiDispatchViewInput() {
    return this._requestUiDispatchView;
  }

  // restart_on_searchpeer_add - computed: true, optional: true, required: false
  private _restartOnSearchpeerAdd?: boolean | cdktf.IResolvable; 
  public get restartOnSearchpeerAdd() {
    return this.getBooleanAttribute('restart_on_searchpeer_add');
  }
  public set restartOnSearchpeerAdd(value: boolean | cdktf.IResolvable) {
    this._restartOnSearchpeerAdd = value;
  }
  public resetRestartOnSearchpeerAdd() {
    this._restartOnSearchpeerAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartOnSearchpeerAddInput() {
    return this._restartOnSearchpeerAdd;
  }

  // run_on_startup - computed: true, optional: true, required: false
  private _runOnStartup?: boolean | cdktf.IResolvable; 
  public get runOnStartup() {
    return this.getBooleanAttribute('run_on_startup');
  }
  public set runOnStartup(value: boolean | cdktf.IResolvable) {
    this._runOnStartup = value;
  }
  public resetRunOnStartup() {
    this._runOnStartup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnStartupInput() {
    return this._runOnStartup;
  }

  // schedule_priority - computed: true, optional: true, required: false
  private _schedulePriority?: string; 
  public get schedulePriority() {
    return this.getStringAttribute('schedule_priority');
  }
  public set schedulePriority(value: string) {
    this._schedulePriority = value;
  }
  public resetSchedulePriority() {
    this._schedulePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulePriorityInput() {
    return this._schedulePriority;
  }

  // schedule_window - computed: true, optional: true, required: false
  private _scheduleWindow?: string; 
  public get scheduleWindow() {
    return this.getStringAttribute('schedule_window');
  }
  public set scheduleWindow(value: string) {
    this._scheduleWindow = value;
  }
  public resetScheduleWindow() {
    this._scheduleWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleWindowInput() {
    return this._scheduleWindow;
  }

  // search - computed: false, optional: false, required: true
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // vsid - computed: true, optional: true, required: false
  private _vsid?: string; 
  public get vsid() {
    return this.getStringAttribute('vsid');
  }
  public set vsid(value: string) {
    this._vsid = value;
  }
  public resetVsid() {
    this._vsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsidInput() {
    return this._vsid;
  }

  // workload_pool - computed: true, optional: true, required: false
  private _workloadPool?: string; 
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
  public set workloadPool(value: string) {
    this._workloadPool = value;
  }
  public resetWorkloadPool() {
    this._workloadPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPoolInput() {
    return this._workloadPool;
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new SavedSearchesAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: SavedSearchesAcl) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_create_xsoar_incident: cdktf.stringToTerraform(this._actionCreateXsoarIncident),
      action_create_xsoar_incident_param_custom_fields: cdktf.stringToTerraform(this._actionCreateXsoarIncidentParamCustomFields),
      action_create_xsoar_incident_param_details: cdktf.stringToTerraform(this._actionCreateXsoarIncidentParamDetails),
      action_create_xsoar_incident_param_incident_name: cdktf.stringToTerraform(this._actionCreateXsoarIncidentParamIncidentName),
      action_create_xsoar_incident_param_occurred: cdktf.stringToTerraform(this._actionCreateXsoarIncidentParamOccurred),
      action_create_xsoar_incident_param_send_all_servers: cdktf.stringToTerraform(this._actionCreateXsoarIncidentParamSendAllServers),
      action_create_xsoar_incident_param_server_url: cdktf.stringToTerraform(this._actionCreateXsoarIncidentParamServerUrl),
      action_create_xsoar_incident_param_severity: cdktf.stringToTerraform(this._actionCreateXsoarIncidentParamSeverity),
      action_create_xsoar_incident_param_type: cdktf.stringToTerraform(this._actionCreateXsoarIncidentParamType),
      action_email_auth_password: cdktf.stringToTerraform(this._actionEmailAuthPassword),
      action_email_auth_username: cdktf.stringToTerraform(this._actionEmailAuthUsername),
      action_email_bcc: cdktf.stringToTerraform(this._actionEmailBcc),
      action_email_cc: cdktf.stringToTerraform(this._actionEmailCc),
      action_email_command: cdktf.stringToTerraform(this._actionEmailCommand),
      action_email_format: cdktf.stringToTerraform(this._actionEmailFormat),
      action_email_from: cdktf.stringToTerraform(this._actionEmailFrom),
      action_email_hostname: cdktf.stringToTerraform(this._actionEmailHostname),
      action_email_include_results_link: cdktf.numberToTerraform(this._actionEmailIncludeResultsLink),
      action_email_include_search: cdktf.numberToTerraform(this._actionEmailIncludeSearch),
      action_email_include_trigger: cdktf.numberToTerraform(this._actionEmailIncludeTrigger),
      action_email_include_trigger_time: cdktf.numberToTerraform(this._actionEmailIncludeTriggerTime),
      action_email_include_view_link: cdktf.numberToTerraform(this._actionEmailIncludeViewLink),
      action_email_inline: cdktf.booleanToTerraform(this._actionEmailInline),
      action_email_mailserver: cdktf.stringToTerraform(this._actionEmailMailserver),
      action_email_max_results: cdktf.numberToTerraform(this._actionEmailMaxResults),
      action_email_max_time: cdktf.stringToTerraform(this._actionEmailMaxTime),
      action_email_message_alert: cdktf.stringToTerraform(this._actionEmailMessageAlert),
      action_email_message_report: cdktf.stringToTerraform(this._actionEmailMessageReport),
      action_email_pdfview: cdktf.stringToTerraform(this._actionEmailPdfview),
      action_email_preprocess_results: cdktf.stringToTerraform(this._actionEmailPreprocessResults),
      action_email_report_cid_font_list: cdktf.stringToTerraform(this._actionEmailReportCidFontList),
      action_email_report_include_splunk_logo: cdktf.booleanToTerraform(this._actionEmailReportIncludeSplunkLogo),
      action_email_report_paper_orientation: cdktf.stringToTerraform(this._actionEmailReportPaperOrientation),
      action_email_report_paper_size: cdktf.stringToTerraform(this._actionEmailReportPaperSize),
      action_email_report_server_enabled: cdktf.booleanToTerraform(this._actionEmailReportServerEnabled),
      action_email_report_server_url: cdktf.stringToTerraform(this._actionEmailReportServerUrl),
      action_email_send_csv: cdktf.numberToTerraform(this._actionEmailSendCsv),
      action_email_send_pdf: cdktf.booleanToTerraform(this._actionEmailSendPdf),
      action_email_send_results: cdktf.booleanToTerraform(this._actionEmailSendResults),
      action_email_subject: cdktf.stringToTerraform(this._actionEmailSubject),
      action_email_to: cdktf.stringToTerraform(this._actionEmailTo),
      action_email_track_alert: cdktf.booleanToTerraform(this._actionEmailTrackAlert),
      action_email_ttl: cdktf.stringToTerraform(this._actionEmailTtl),
      action_email_use_ssl: cdktf.booleanToTerraform(this._actionEmailUseSsl),
      action_email_use_tls: cdktf.booleanToTerraform(this._actionEmailUseTls),
      action_email_width_sort_columns: cdktf.booleanToTerraform(this._actionEmailWidthSortColumns),
      action_jira_service_desk_param_account: cdktf.stringToTerraform(this._actionJiraServiceDeskParamAccount),
      action_jira_service_desk_param_jira_customfields: cdktf.stringToTerraform(this._actionJiraServiceDeskParamJiraCustomfields),
      action_jira_service_desk_param_jira_description: cdktf.stringToTerraform(this._actionJiraServiceDeskParamJiraDescription),
      action_jira_service_desk_param_jira_issue_type: cdktf.stringToTerraform(this._actionJiraServiceDeskParamJiraIssueType),
      action_jira_service_desk_param_jira_priority: cdktf.stringToTerraform(this._actionJiraServiceDeskParamJiraPriority),
      action_jira_service_desk_param_jira_project: cdktf.stringToTerraform(this._actionJiraServiceDeskParamJiraProject),
      action_jira_service_desk_param_jira_summary: cdktf.stringToTerraform(this._actionJiraServiceDeskParamJiraSummary),
      action_logevent: cdktf.stringToTerraform(this._actionLogevent),
      action_logevent_param_event: cdktf.stringToTerraform(this._actionLogeventParamEvent),
      action_logevent_param_host: cdktf.stringToTerraform(this._actionLogeventParamHost),
      action_logevent_param_index: cdktf.stringToTerraform(this._actionLogeventParamIndex),
      action_logevent_param_source: cdktf.stringToTerraform(this._actionLogeventParamSource),
      action_logevent_param_sourcetype: cdktf.stringToTerraform(this._actionLogeventParamSourcetype),
      action_pagerduty_custom_details: cdktf.stringToTerraform(this._actionPagerdutyCustomDetails),
      action_pagerduty_integration_key: cdktf.stringToTerraform(this._actionPagerdutyIntegrationKey),
      action_pagerduty_integration_key_override: cdktf.stringToTerraform(this._actionPagerdutyIntegrationKeyOverride),
      action_pagerduty_integration_url: cdktf.stringToTerraform(this._actionPagerdutyIntegrationUrl),
      action_pagerduty_integration_url_override: cdktf.stringToTerraform(this._actionPagerdutyIntegrationUrlOverride),
      action_populate_lookup_command: cdktf.stringToTerraform(this._actionPopulateLookupCommand),
      action_populate_lookup_dest: cdktf.stringToTerraform(this._actionPopulateLookupDest),
      action_populate_lookup_hostname: cdktf.stringToTerraform(this._actionPopulateLookupHostname),
      action_populate_lookup_max_results: cdktf.numberToTerraform(this._actionPopulateLookupMaxResults),
      action_populate_lookup_max_time: cdktf.numberToTerraform(this._actionPopulateLookupMaxTime),
      action_populate_lookup_track_alert: cdktf.booleanToTerraform(this._actionPopulateLookupTrackAlert),
      action_populate_lookup_ttl: cdktf.stringToTerraform(this._actionPopulateLookupTtl),
      action_rss_command: cdktf.stringToTerraform(this._actionRssCommand),
      action_rss_hostname: cdktf.stringToTerraform(this._actionRssHostname),
      action_rss_max_results: cdktf.numberToTerraform(this._actionRssMaxResults),
      action_rss_max_time: cdktf.numberToTerraform(this._actionRssMaxTime),
      action_rss_track_alert: cdktf.booleanToTerraform(this._actionRssTrackAlert),
      action_rss_ttl: cdktf.stringToTerraform(this._actionRssTtl),
      action_script_command: cdktf.stringToTerraform(this._actionScriptCommand),
      action_script_filename: cdktf.stringToTerraform(this._actionScriptFilename),
      action_script_hostname: cdktf.stringToTerraform(this._actionScriptHostname),
      action_script_max_results: cdktf.numberToTerraform(this._actionScriptMaxResults),
      action_script_max_time: cdktf.numberToTerraform(this._actionScriptMaxTime),
      action_script_track_alert: cdktf.booleanToTerraform(this._actionScriptTrackAlert),
      action_script_ttl: cdktf.stringToTerraform(this._actionScriptTtl),
      action_slack_param_attachment: cdktf.stringToTerraform(this._actionSlackParamAttachment),
      action_slack_param_channel: cdktf.stringToTerraform(this._actionSlackParamChannel),
      action_slack_param_fields: cdktf.stringToTerraform(this._actionSlackParamFields),
      action_slack_param_message: cdktf.stringToTerraform(this._actionSlackParamMessage),
      action_slack_param_webhook_url_override: cdktf.stringToTerraform(this._actionSlackParamWebhookUrlOverride),
      action_snow_event_param_account: cdktf.stringToTerraform(this._actionSnowEventParamAccount),
      action_snow_event_param_additional_info: cdktf.stringToTerraform(this._actionSnowEventParamAdditionalInfo),
      action_snow_event_param_ci_identifier: cdktf.stringToTerraform(this._actionSnowEventParamCiIdentifier),
      action_snow_event_param_custom_fields: cdktf.stringToTerraform(this._actionSnowEventParamCustomFields),
      action_snow_event_param_description: cdktf.stringToTerraform(this._actionSnowEventParamDescription),
      action_snow_event_param_node: cdktf.stringToTerraform(this._actionSnowEventParamNode),
      action_snow_event_param_resource: cdktf.stringToTerraform(this._actionSnowEventParamResource),
      action_snow_event_param_severity: cdktf.numberToTerraform(this._actionSnowEventParamSeverity),
      action_snow_event_param_type: cdktf.stringToTerraform(this._actionSnowEventParamType),
      action_summary_index_command: cdktf.stringToTerraform(this._actionSummaryIndexCommand),
      action_summary_index_hostname: cdktf.stringToTerraform(this._actionSummaryIndexHostname),
      action_summary_index_inline: cdktf.booleanToTerraform(this._actionSummaryIndexInline),
      action_summary_index_max_results: cdktf.numberToTerraform(this._actionSummaryIndexMaxResults),
      action_summary_index_max_time: cdktf.numberToTerraform(this._actionSummaryIndexMaxTime),
      action_summary_index_name: cdktf.stringToTerraform(this._actionSummaryIndexName),
      action_summary_index_track_alert: cdktf.booleanToTerraform(this._actionSummaryIndexTrackAlert),
      action_summary_index_ttl: cdktf.stringToTerraform(this._actionSummaryIndexTtl),
      action_webhook_param_url: cdktf.stringToTerraform(this._actionWebhookParamUrl),
      actions: cdktf.stringToTerraform(this._actions),
      alert_comparator: cdktf.stringToTerraform(this._alertComparator),
      alert_condition: cdktf.stringToTerraform(this._alertCondition),
      alert_digest_mode: cdktf.booleanToTerraform(this._alertDigestMode),
      alert_expires: cdktf.stringToTerraform(this._alertExpires),
      alert_severity: cdktf.numberToTerraform(this._alertSeverity),
      alert_suppress: cdktf.booleanToTerraform(this._alertSuppress),
      alert_suppress_fields: cdktf.stringToTerraform(this._alertSuppressFields),
      alert_suppress_period: cdktf.stringToTerraform(this._alertSuppressPeriod),
      alert_threshold: cdktf.stringToTerraform(this._alertThreshold),
      alert_track: cdktf.booleanToTerraform(this._alertTrack),
      alert_type: cdktf.stringToTerraform(this._alertType),
      allow_skew: cdktf.stringToTerraform(this._allowSkew),
      auto_summarize: cdktf.booleanToTerraform(this._autoSummarize),
      auto_summarize_command: cdktf.stringToTerraform(this._autoSummarizeCommand),
      auto_summarize_cron_schedule: cdktf.stringToTerraform(this._autoSummarizeCronSchedule),
      auto_summarize_dispatch_earliest_time: cdktf.stringToTerraform(this._autoSummarizeDispatchEarliestTime),
      auto_summarize_dispatch_latest_time: cdktf.stringToTerraform(this._autoSummarizeDispatchLatestTime),
      auto_summarize_dispatch_time_format: cdktf.stringToTerraform(this._autoSummarizeDispatchTimeFormat),
      auto_summarize_dispatch_ttl: cdktf.stringToTerraform(this._autoSummarizeDispatchTtl),
      auto_summarize_max_disabled_buckets: cdktf.numberToTerraform(this._autoSummarizeMaxDisabledBuckets),
      auto_summarize_max_summary_ratio: cdktf.numberToTerraform(this._autoSummarizeMaxSummaryRatio),
      auto_summarize_max_summary_size: cdktf.numberToTerraform(this._autoSummarizeMaxSummarySize),
      auto_summarize_max_time: cdktf.numberToTerraform(this._autoSummarizeMaxTime),
      auto_summarize_suspend_period: cdktf.stringToTerraform(this._autoSummarizeSuspendPeriod),
      auto_summarize_timespan: cdktf.stringToTerraform(this._autoSummarizeTimespan),
      cron_schedule: cdktf.stringToTerraform(this._cronSchedule),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dispatch_buckets: cdktf.numberToTerraform(this._dispatchBuckets),
      dispatch_earliest_time: cdktf.stringToTerraform(this._dispatchEarliestTime),
      dispatch_index_earliest: cdktf.stringToTerraform(this._dispatchIndexEarliest),
      dispatch_index_latest: cdktf.stringToTerraform(this._dispatchIndexLatest),
      dispatch_indexed_realtime: cdktf.booleanToTerraform(this._dispatchIndexedRealtime),
      dispatch_indexed_realtime_minspan: cdktf.numberToTerraform(this._dispatchIndexedRealtimeMinspan),
      dispatch_indexed_realtime_offset: cdktf.numberToTerraform(this._dispatchIndexedRealtimeOffset),
      dispatch_latest_time: cdktf.stringToTerraform(this._dispatchLatestTime),
      dispatch_lookups: cdktf.booleanToTerraform(this._dispatchLookups),
      dispatch_max_count: cdktf.numberToTerraform(this._dispatchMaxCount),
      dispatch_max_time: cdktf.numberToTerraform(this._dispatchMaxTime),
      dispatch_reduce_freq: cdktf.numberToTerraform(this._dispatchReduceFreq),
      dispatch_rt_backfill: cdktf.booleanToTerraform(this._dispatchRtBackfill),
      dispatch_rt_maximum_span: cdktf.numberToTerraform(this._dispatchRtMaximumSpan),
      dispatch_spawn_process: cdktf.booleanToTerraform(this._dispatchSpawnProcess),
      dispatch_time_format: cdktf.stringToTerraform(this._dispatchTimeFormat),
      dispatch_ttl: cdktf.stringToTerraform(this._dispatchTtl),
      display_view: cdktf.stringToTerraform(this._displayView),
      id: cdktf.stringToTerraform(this._id),
      is_scheduled: cdktf.booleanToTerraform(this._isScheduled),
      is_visible: cdktf.booleanToTerraform(this._isVisible),
      max_concurrent: cdktf.numberToTerraform(this._maxConcurrent),
      name: cdktf.stringToTerraform(this._name),
      realtime_schedule: cdktf.booleanToTerraform(this._realtimeSchedule),
      request_ui_dispatch_app: cdktf.stringToTerraform(this._requestUiDispatchApp),
      request_ui_dispatch_view: cdktf.stringToTerraform(this._requestUiDispatchView),
      restart_on_searchpeer_add: cdktf.booleanToTerraform(this._restartOnSearchpeerAdd),
      run_on_startup: cdktf.booleanToTerraform(this._runOnStartup),
      schedule_priority: cdktf.stringToTerraform(this._schedulePriority),
      schedule_window: cdktf.stringToTerraform(this._scheduleWindow),
      search: cdktf.stringToTerraform(this._search),
      vsid: cdktf.stringToTerraform(this._vsid),
      workload_pool: cdktf.stringToTerraform(this._workloadPool),
      acl: savedSearchesAclToTerraform(this._acl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_create_xsoar_incident: {
        value: cdktf.stringToHclTerraform(this._actionCreateXsoarIncident),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_create_xsoar_incident_param_custom_fields: {
        value: cdktf.stringToHclTerraform(this._actionCreateXsoarIncidentParamCustomFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_create_xsoar_incident_param_details: {
        value: cdktf.stringToHclTerraform(this._actionCreateXsoarIncidentParamDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_create_xsoar_incident_param_incident_name: {
        value: cdktf.stringToHclTerraform(this._actionCreateXsoarIncidentParamIncidentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_create_xsoar_incident_param_occurred: {
        value: cdktf.stringToHclTerraform(this._actionCreateXsoarIncidentParamOccurred),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_create_xsoar_incident_param_send_all_servers: {
        value: cdktf.stringToHclTerraform(this._actionCreateXsoarIncidentParamSendAllServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_create_xsoar_incident_param_server_url: {
        value: cdktf.stringToHclTerraform(this._actionCreateXsoarIncidentParamServerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_create_xsoar_incident_param_severity: {
        value: cdktf.stringToHclTerraform(this._actionCreateXsoarIncidentParamSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_create_xsoar_incident_param_type: {
        value: cdktf.stringToHclTerraform(this._actionCreateXsoarIncidentParamType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_auth_password: {
        value: cdktf.stringToHclTerraform(this._actionEmailAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_auth_username: {
        value: cdktf.stringToHclTerraform(this._actionEmailAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_bcc: {
        value: cdktf.stringToHclTerraform(this._actionEmailBcc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_cc: {
        value: cdktf.stringToHclTerraform(this._actionEmailCc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_command: {
        value: cdktf.stringToHclTerraform(this._actionEmailCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_format: {
        value: cdktf.stringToHclTerraform(this._actionEmailFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_from: {
        value: cdktf.stringToHclTerraform(this._actionEmailFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_hostname: {
        value: cdktf.stringToHclTerraform(this._actionEmailHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_include_results_link: {
        value: cdktf.numberToHclTerraform(this._actionEmailIncludeResultsLink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_email_include_search: {
        value: cdktf.numberToHclTerraform(this._actionEmailIncludeSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_email_include_trigger: {
        value: cdktf.numberToHclTerraform(this._actionEmailIncludeTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_email_include_trigger_time: {
        value: cdktf.numberToHclTerraform(this._actionEmailIncludeTriggerTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_email_include_view_link: {
        value: cdktf.numberToHclTerraform(this._actionEmailIncludeViewLink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_email_inline: {
        value: cdktf.booleanToHclTerraform(this._actionEmailInline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_email_mailserver: {
        value: cdktf.stringToHclTerraform(this._actionEmailMailserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_max_results: {
        value: cdktf.numberToHclTerraform(this._actionEmailMaxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_email_max_time: {
        value: cdktf.stringToHclTerraform(this._actionEmailMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_message_alert: {
        value: cdktf.stringToHclTerraform(this._actionEmailMessageAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_message_report: {
        value: cdktf.stringToHclTerraform(this._actionEmailMessageReport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_pdfview: {
        value: cdktf.stringToHclTerraform(this._actionEmailPdfview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_preprocess_results: {
        value: cdktf.stringToHclTerraform(this._actionEmailPreprocessResults),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_report_cid_font_list: {
        value: cdktf.stringToHclTerraform(this._actionEmailReportCidFontList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_report_include_splunk_logo: {
        value: cdktf.booleanToHclTerraform(this._actionEmailReportIncludeSplunkLogo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_email_report_paper_orientation: {
        value: cdktf.stringToHclTerraform(this._actionEmailReportPaperOrientation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_report_paper_size: {
        value: cdktf.stringToHclTerraform(this._actionEmailReportPaperSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_report_server_enabled: {
        value: cdktf.booleanToHclTerraform(this._actionEmailReportServerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_email_report_server_url: {
        value: cdktf.stringToHclTerraform(this._actionEmailReportServerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_send_csv: {
        value: cdktf.numberToHclTerraform(this._actionEmailSendCsv),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_email_send_pdf: {
        value: cdktf.booleanToHclTerraform(this._actionEmailSendPdf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_email_send_results: {
        value: cdktf.booleanToHclTerraform(this._actionEmailSendResults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_email_subject: {
        value: cdktf.stringToHclTerraform(this._actionEmailSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_to: {
        value: cdktf.stringToHclTerraform(this._actionEmailTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_track_alert: {
        value: cdktf.booleanToHclTerraform(this._actionEmailTrackAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_email_ttl: {
        value: cdktf.stringToHclTerraform(this._actionEmailTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_email_use_ssl: {
        value: cdktf.booleanToHclTerraform(this._actionEmailUseSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_email_use_tls: {
        value: cdktf.booleanToHclTerraform(this._actionEmailUseTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_email_width_sort_columns: {
        value: cdktf.booleanToHclTerraform(this._actionEmailWidthSortColumns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_jira_service_desk_param_account: {
        value: cdktf.stringToHclTerraform(this._actionJiraServiceDeskParamAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_jira_service_desk_param_jira_customfields: {
        value: cdktf.stringToHclTerraform(this._actionJiraServiceDeskParamJiraCustomfields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_jira_service_desk_param_jira_description: {
        value: cdktf.stringToHclTerraform(this._actionJiraServiceDeskParamJiraDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_jira_service_desk_param_jira_issue_type: {
        value: cdktf.stringToHclTerraform(this._actionJiraServiceDeskParamJiraIssueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_jira_service_desk_param_jira_priority: {
        value: cdktf.stringToHclTerraform(this._actionJiraServiceDeskParamJiraPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_jira_service_desk_param_jira_project: {
        value: cdktf.stringToHclTerraform(this._actionJiraServiceDeskParamJiraProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_jira_service_desk_param_jira_summary: {
        value: cdktf.stringToHclTerraform(this._actionJiraServiceDeskParamJiraSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_logevent: {
        value: cdktf.stringToHclTerraform(this._actionLogevent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_logevent_param_event: {
        value: cdktf.stringToHclTerraform(this._actionLogeventParamEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_logevent_param_host: {
        value: cdktf.stringToHclTerraform(this._actionLogeventParamHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_logevent_param_index: {
        value: cdktf.stringToHclTerraform(this._actionLogeventParamIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_logevent_param_source: {
        value: cdktf.stringToHclTerraform(this._actionLogeventParamSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_logevent_param_sourcetype: {
        value: cdktf.stringToHclTerraform(this._actionLogeventParamSourcetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_pagerduty_custom_details: {
        value: cdktf.stringToHclTerraform(this._actionPagerdutyCustomDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_pagerduty_integration_key: {
        value: cdktf.stringToHclTerraform(this._actionPagerdutyIntegrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_pagerduty_integration_key_override: {
        value: cdktf.stringToHclTerraform(this._actionPagerdutyIntegrationKeyOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_pagerduty_integration_url: {
        value: cdktf.stringToHclTerraform(this._actionPagerdutyIntegrationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_pagerduty_integration_url_override: {
        value: cdktf.stringToHclTerraform(this._actionPagerdutyIntegrationUrlOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_populate_lookup_command: {
        value: cdktf.stringToHclTerraform(this._actionPopulateLookupCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_populate_lookup_dest: {
        value: cdktf.stringToHclTerraform(this._actionPopulateLookupDest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_populate_lookup_hostname: {
        value: cdktf.stringToHclTerraform(this._actionPopulateLookupHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_populate_lookup_max_results: {
        value: cdktf.numberToHclTerraform(this._actionPopulateLookupMaxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_populate_lookup_max_time: {
        value: cdktf.numberToHclTerraform(this._actionPopulateLookupMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_populate_lookup_track_alert: {
        value: cdktf.booleanToHclTerraform(this._actionPopulateLookupTrackAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_populate_lookup_ttl: {
        value: cdktf.stringToHclTerraform(this._actionPopulateLookupTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_rss_command: {
        value: cdktf.stringToHclTerraform(this._actionRssCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_rss_hostname: {
        value: cdktf.stringToHclTerraform(this._actionRssHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_rss_max_results: {
        value: cdktf.numberToHclTerraform(this._actionRssMaxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_rss_max_time: {
        value: cdktf.numberToHclTerraform(this._actionRssMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_rss_track_alert: {
        value: cdktf.booleanToHclTerraform(this._actionRssTrackAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_rss_ttl: {
        value: cdktf.stringToHclTerraform(this._actionRssTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_script_command: {
        value: cdktf.stringToHclTerraform(this._actionScriptCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_script_filename: {
        value: cdktf.stringToHclTerraform(this._actionScriptFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_script_hostname: {
        value: cdktf.stringToHclTerraform(this._actionScriptHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_script_max_results: {
        value: cdktf.numberToHclTerraform(this._actionScriptMaxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_script_max_time: {
        value: cdktf.numberToHclTerraform(this._actionScriptMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_script_track_alert: {
        value: cdktf.booleanToHclTerraform(this._actionScriptTrackAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_script_ttl: {
        value: cdktf.stringToHclTerraform(this._actionScriptTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_slack_param_attachment: {
        value: cdktf.stringToHclTerraform(this._actionSlackParamAttachment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_slack_param_channel: {
        value: cdktf.stringToHclTerraform(this._actionSlackParamChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_slack_param_fields: {
        value: cdktf.stringToHclTerraform(this._actionSlackParamFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_slack_param_message: {
        value: cdktf.stringToHclTerraform(this._actionSlackParamMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_slack_param_webhook_url_override: {
        value: cdktf.stringToHclTerraform(this._actionSlackParamWebhookUrlOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_snow_event_param_account: {
        value: cdktf.stringToHclTerraform(this._actionSnowEventParamAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_snow_event_param_additional_info: {
        value: cdktf.stringToHclTerraform(this._actionSnowEventParamAdditionalInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_snow_event_param_ci_identifier: {
        value: cdktf.stringToHclTerraform(this._actionSnowEventParamCiIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_snow_event_param_custom_fields: {
        value: cdktf.stringToHclTerraform(this._actionSnowEventParamCustomFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_snow_event_param_description: {
        value: cdktf.stringToHclTerraform(this._actionSnowEventParamDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_snow_event_param_node: {
        value: cdktf.stringToHclTerraform(this._actionSnowEventParamNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_snow_event_param_resource: {
        value: cdktf.stringToHclTerraform(this._actionSnowEventParamResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_snow_event_param_severity: {
        value: cdktf.numberToHclTerraform(this._actionSnowEventParamSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_snow_event_param_type: {
        value: cdktf.stringToHclTerraform(this._actionSnowEventParamType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_summary_index_command: {
        value: cdktf.stringToHclTerraform(this._actionSummaryIndexCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_summary_index_hostname: {
        value: cdktf.stringToHclTerraform(this._actionSummaryIndexHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_summary_index_inline: {
        value: cdktf.booleanToHclTerraform(this._actionSummaryIndexInline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_summary_index_max_results: {
        value: cdktf.numberToHclTerraform(this._actionSummaryIndexMaxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_summary_index_max_time: {
        value: cdktf.numberToHclTerraform(this._actionSummaryIndexMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      action_summary_index_name: {
        value: cdktf.stringToHclTerraform(this._actionSummaryIndexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_summary_index_track_alert: {
        value: cdktf.booleanToHclTerraform(this._actionSummaryIndexTrackAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      action_summary_index_ttl: {
        value: cdktf.stringToHclTerraform(this._actionSummaryIndexTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_webhook_param_url: {
        value: cdktf.stringToHclTerraform(this._actionWebhookParamUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions: {
        value: cdktf.stringToHclTerraform(this._actions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_comparator: {
        value: cdktf.stringToHclTerraform(this._alertComparator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_condition: {
        value: cdktf.stringToHclTerraform(this._alertCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_digest_mode: {
        value: cdktf.booleanToHclTerraform(this._alertDigestMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_expires: {
        value: cdktf.stringToHclTerraform(this._alertExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_severity: {
        value: cdktf.numberToHclTerraform(this._alertSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert_suppress: {
        value: cdktf.booleanToHclTerraform(this._alertSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_suppress_fields: {
        value: cdktf.stringToHclTerraform(this._alertSuppressFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_suppress_period: {
        value: cdktf.stringToHclTerraform(this._alertSuppressPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_threshold: {
        value: cdktf.stringToHclTerraform(this._alertThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_track: {
        value: cdktf.booleanToHclTerraform(this._alertTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alert_type: {
        value: cdktf.stringToHclTerraform(this._alertType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_skew: {
        value: cdktf.stringToHclTerraform(this._allowSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_summarize: {
        value: cdktf.booleanToHclTerraform(this._autoSummarize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_summarize_command: {
        value: cdktf.stringToHclTerraform(this._autoSummarizeCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_summarize_cron_schedule: {
        value: cdktf.stringToHclTerraform(this._autoSummarizeCronSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_summarize_dispatch_earliest_time: {
        value: cdktf.stringToHclTerraform(this._autoSummarizeDispatchEarliestTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_summarize_dispatch_latest_time: {
        value: cdktf.stringToHclTerraform(this._autoSummarizeDispatchLatestTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_summarize_dispatch_time_format: {
        value: cdktf.stringToHclTerraform(this._autoSummarizeDispatchTimeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_summarize_dispatch_ttl: {
        value: cdktf.stringToHclTerraform(this._autoSummarizeDispatchTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_summarize_max_disabled_buckets: {
        value: cdktf.numberToHclTerraform(this._autoSummarizeMaxDisabledBuckets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_summarize_max_summary_ratio: {
        value: cdktf.numberToHclTerraform(this._autoSummarizeMaxSummaryRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_summarize_max_summary_size: {
        value: cdktf.numberToHclTerraform(this._autoSummarizeMaxSummarySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_summarize_max_time: {
        value: cdktf.numberToHclTerraform(this._autoSummarizeMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_summarize_suspend_period: {
        value: cdktf.stringToHclTerraform(this._autoSummarizeSuspendPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_summarize_timespan: {
        value: cdktf.stringToHclTerraform(this._autoSummarizeTimespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cron_schedule: {
        value: cdktf.stringToHclTerraform(this._cronSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dispatch_buckets: {
        value: cdktf.numberToHclTerraform(this._dispatchBuckets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dispatch_earliest_time: {
        value: cdktf.stringToHclTerraform(this._dispatchEarliestTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_index_earliest: {
        value: cdktf.stringToHclTerraform(this._dispatchIndexEarliest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_index_latest: {
        value: cdktf.stringToHclTerraform(this._dispatchIndexLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_indexed_realtime: {
        value: cdktf.booleanToHclTerraform(this._dispatchIndexedRealtime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dispatch_indexed_realtime_minspan: {
        value: cdktf.numberToHclTerraform(this._dispatchIndexedRealtimeMinspan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dispatch_indexed_realtime_offset: {
        value: cdktf.numberToHclTerraform(this._dispatchIndexedRealtimeOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dispatch_latest_time: {
        value: cdktf.stringToHclTerraform(this._dispatchLatestTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_lookups: {
        value: cdktf.booleanToHclTerraform(this._dispatchLookups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dispatch_max_count: {
        value: cdktf.numberToHclTerraform(this._dispatchMaxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dispatch_max_time: {
        value: cdktf.numberToHclTerraform(this._dispatchMaxTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dispatch_reduce_freq: {
        value: cdktf.numberToHclTerraform(this._dispatchReduceFreq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dispatch_rt_backfill: {
        value: cdktf.booleanToHclTerraform(this._dispatchRtBackfill),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dispatch_rt_maximum_span: {
        value: cdktf.numberToHclTerraform(this._dispatchRtMaximumSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dispatch_spawn_process: {
        value: cdktf.booleanToHclTerraform(this._dispatchSpawnProcess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dispatch_time_format: {
        value: cdktf.stringToHclTerraform(this._dispatchTimeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_ttl: {
        value: cdktf.stringToHclTerraform(this._dispatchTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_view: {
        value: cdktf.stringToHclTerraform(this._displayView),
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
      is_scheduled: {
        value: cdktf.booleanToHclTerraform(this._isScheduled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_visible: {
        value: cdktf.booleanToHclTerraform(this._isVisible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_concurrent: {
        value: cdktf.numberToHclTerraform(this._maxConcurrent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realtime_schedule: {
        value: cdktf.booleanToHclTerraform(this._realtimeSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_ui_dispatch_app: {
        value: cdktf.stringToHclTerraform(this._requestUiDispatchApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_ui_dispatch_view: {
        value: cdktf.stringToHclTerraform(this._requestUiDispatchView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_on_searchpeer_add: {
        value: cdktf.booleanToHclTerraform(this._restartOnSearchpeerAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_on_startup: {
        value: cdktf.booleanToHclTerraform(this._runOnStartup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schedule_priority: {
        value: cdktf.stringToHclTerraform(this._schedulePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_window: {
        value: cdktf.stringToHclTerraform(this._scheduleWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsid: {
        value: cdktf.stringToHclTerraform(this._vsid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_pool: {
        value: cdktf.stringToHclTerraform(this._workloadPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl: {
        value: savedSearchesAclToHclTerraform(this._acl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SavedSearchesAclList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
