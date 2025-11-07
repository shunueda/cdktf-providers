// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Details regarding dismissed alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#alert_dismissal_details Automation#alert_dismissal_details}
  */
  readonly alertDismissalDetails?: AutomationAlertDismissalDetails;
  /**
  * Details regarding the new score for the selected alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#alert_score_decrease_details Automation#alert_score_decrease_details}
  */
  readonly alertScoreDecreaseDetails?: AutomationAlertScoreDecreaseDetails;
  /**
  * Details regarding the new score for the selected alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#alert_score_increase_details Automation#alert_score_increase_details}
  */
  readonly alertScoreIncreaseDetails?: AutomationAlertScoreIncreaseDetails;
  /**
  * Details regarding the new score for the selected alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#alert_score_specify_details Automation#alert_score_specify_details}
  */
  readonly alertScoreSpecifyDetails?: AutomationAlertScoreSpecifyDetails;
  /**
  * AWS Security Hub template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#aws_security_hub_template Automation#aws_security_hub_template}
  */
  readonly awsSecurityHubTemplate?: AutomationAwsSecurityHubTemplate;
  /**
  * AWS Security Lake template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#aws_security_lake_template Automation#aws_security_lake_template}
  */
  readonly awsSecurityLakeTemplate?: AutomationAwsSecurityLakeTemplate;
  /**
  * AWS SQS template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#aws_sqs_template Automation#aws_sqs_template}
  */
  readonly awsSqsTemplate?: AutomationAwsSqsTemplate;
  /**
  * Azure DevOps template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#azure_devops_template Automation#azure_devops_template}
  */
  readonly azureDevopsTemplate?: AutomationAzureDevopsTemplate;
  /**
  * Azure Sentinel template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#azure_sentinel_template Automation#azure_sentinel_template}
  */
  readonly azureSentinelTemplate?: AutomationAzureSentinelTemplate;
  /**
  * Business units that this automation applies to, specified by their Orca ID. The business unit list cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#business_units Automation#business_units}
  */
  readonly businessUnits?: string[];
  /**
  * Coralogix template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#coralogix_template Automation#coralogix_template}
  */
  readonly coralogixTemplate?: AutomationCoralogixTemplate;
  /**
  * Automation description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#description Automation#description}
  */
  readonly description?: string;
  /**
  * Email settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#email_template Automation#email_template}
  */
  readonly emailTemplate?: AutomationEmailTemplate;
  /**
  * Automation status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#enabled Automation#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * GCP Pub/Sub template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#gcp_pub_sub_template Automation#gcp_pub_sub_template}
  */
  readonly gcpPubSubTemplate?: AutomationGcpPubSubTemplate;
  /**
  * Jira Cloud integration template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#jira_cloud_template Automation#jira_cloud_template}
  */
  readonly jiraCloudTemplate?: AutomationJiraCloudTemplate;
  /**
  * Jira Server integration template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#jira_server_template Automation#jira_server_template}
  */
  readonly jiraServerTemplate?: AutomationJiraServerTemplate;
  /**
  * Automation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#name Automation#name}
  */
  readonly name: string;
  /**
  * Opsgenie template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#opsgenie_template Automation#opsgenie_template}
  */
  readonly opsgenieTemplate?: AutomationOpsgenieTemplate;
  /**
  * Pager Duty template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#pager_duty_template Automation#pager_duty_template}
  */
  readonly pagerDutyTemplate?: AutomationPagerDutyTemplate;
  /**
  * The query that selects the alerts this automation applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#query Automation#query}
  */
  readonly query: AutomationQuery;
  /**
  * Slack template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#slack_template Automation#slack_template}
  */
  readonly slackTemplate?: AutomationSlackTemplate;
  /**
  * Snowflake template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#snowflake_template Automation#snowflake_template}
  */
  readonly snowflakeTemplate?: AutomationSnowflakeTemplate;
  /**
  * Splunk template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#splunk_template Automation#splunk_template}
  */
  readonly splunkTemplate?: AutomationSplunkTemplate;
  /**
  * Sumo Logic template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#sumo_logic_template Automation#sumo_logic_template}
  */
  readonly sumoLogicTemplate?: AutomationSumoLogicTemplate;
  /**
  * Tines template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#tines_template Automation#tines_template}
  */
  readonly tinesTemplate?: AutomationTinesTemplate;
  /**
  * Torq template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#torq_template Automation#torq_template}
  */
  readonly torqTemplate?: AutomationTorqTemplate;
  /**
  * Webhook template to use for the automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#webhook_template Automation#webhook_template}
  */
  readonly webhookTemplate?: AutomationWebhookTemplate;
}
export interface AutomationAlertDismissalDetails {
  /**
  * More detailed reasoning as to why these alerts are being dismissed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#justification Automation#justification}
  */
  readonly justification?: string;
  /**
  * The reason these alerts are being dismissed. Valid values are `Acceptable Risk`, `False Positives`, `Non-Actionable`, `Non-Production`, and `Other`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#reason Automation#reason}
  */
  readonly reason?: string;
}

export function automationAlertDismissalDetailsToTerraform(struct?: AutomationAlertDismissalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    justification: cdktf.stringToTerraform(struct!.justification),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function automationAlertDismissalDetailsToHclTerraform(struct?: AutomationAlertDismissalDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    justification: {
      value: cdktf.stringToHclTerraform(struct!.justification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationAlertDismissalDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationAlertDismissalDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._justification !== undefined) {
      hasAnyValues = true;
      internalValueResult.justification = this._justification;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationAlertDismissalDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._justification = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._justification = value.justification;
      this._reason = value.reason;
    }
  }

  // justification - computed: false, optional: true, required: false
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  public resetJustification() {
    this._justification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface AutomationAlertScoreDecreaseDetails {
  /**
  * More detailed reasoning as to why these alerts are having their score changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#justification Automation#justification}
  */
  readonly justification?: string;
  /**
  * The reason these alerts are being dismissed. Valid values are `Acceptable risk`, `Non-Actionable`, `Non-Production`, `Organization preferences`, and `Other`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#reason Automation#reason}
  */
  readonly reason?: string;
}

export function automationAlertScoreDecreaseDetailsToTerraform(struct?: AutomationAlertScoreDecreaseDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    justification: cdktf.stringToTerraform(struct!.justification),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function automationAlertScoreDecreaseDetailsToHclTerraform(struct?: AutomationAlertScoreDecreaseDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    justification: {
      value: cdktf.stringToHclTerraform(struct!.justification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationAlertScoreDecreaseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationAlertScoreDecreaseDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._justification !== undefined) {
      hasAnyValues = true;
      internalValueResult.justification = this._justification;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationAlertScoreDecreaseDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._justification = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._justification = value.justification;
      this._reason = value.reason;
    }
  }

  // justification - computed: false, optional: true, required: false
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  public resetJustification() {
    this._justification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface AutomationAlertScoreIncreaseDetails {
  /**
  * More detailed reasoning as to why these alerts are having their score changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#justification Automation#justification}
  */
  readonly justification?: string;
  /**
  * The reason these alerts are being dismissed. Valid values are `Acceptable risk`, `Non-Actionable`, `Non-Production`, `Organization preferences`, and `Other`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#reason Automation#reason}
  */
  readonly reason?: string;
}

export function automationAlertScoreIncreaseDetailsToTerraform(struct?: AutomationAlertScoreIncreaseDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    justification: cdktf.stringToTerraform(struct!.justification),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function automationAlertScoreIncreaseDetailsToHclTerraform(struct?: AutomationAlertScoreIncreaseDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    justification: {
      value: cdktf.stringToHclTerraform(struct!.justification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationAlertScoreIncreaseDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationAlertScoreIncreaseDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._justification !== undefined) {
      hasAnyValues = true;
      internalValueResult.justification = this._justification;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationAlertScoreIncreaseDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._justification = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._justification = value.justification;
      this._reason = value.reason;
    }
  }

  // justification - computed: false, optional: true, required: false
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  public resetJustification() {
    this._justification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface AutomationAlertScoreSpecifyDetails {
  /**
  * More detailed reasoning as to why these alerts are having their score changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#justification Automation#justification}
  */
  readonly justification?: string;
  /**
  * New score to be assigned to the selected alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#new_score Automation#new_score}
  */
  readonly newScore: number;
  /**
  * The reason these alerts are being dismissed. Valid values are `Acceptable risk`, `Non-Actionable`, `Non-Production`, `Organization preferences`, and `Other`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#reason Automation#reason}
  */
  readonly reason?: string;
}

export function automationAlertScoreSpecifyDetailsToTerraform(struct?: AutomationAlertScoreSpecifyDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    justification: cdktf.stringToTerraform(struct!.justification),
    new_score: cdktf.numberToTerraform(struct!.newScore),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function automationAlertScoreSpecifyDetailsToHclTerraform(struct?: AutomationAlertScoreSpecifyDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    justification: {
      value: cdktf.stringToHclTerraform(struct!.justification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_score: {
      value: cdktf.numberToHclTerraform(struct!.newScore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationAlertScoreSpecifyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationAlertScoreSpecifyDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._justification !== undefined) {
      hasAnyValues = true;
      internalValueResult.justification = this._justification;
    }
    if (this._newScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.newScore = this._newScore;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationAlertScoreSpecifyDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._justification = undefined;
      this._newScore = undefined;
      this._reason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._justification = value.justification;
      this._newScore = value.newScore;
      this._reason = value.reason;
    }
  }

  // justification - computed: false, optional: true, required: false
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  public resetJustification() {
    this._justification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // new_score - computed: false, optional: false, required: true
  private _newScore?: number; 
  public get newScore() {
    return this.getNumberAttribute('new_score');
  }
  public set newScore(value: number) {
    this._newScore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newScoreInput() {
    return this._newScore;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface AutomationAwsSecurityHubTemplate {
  /**
  * AWS Security Hub template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationAwsSecurityHubTemplateToTerraform(struct?: AutomationAwsSecurityHubTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationAwsSecurityHubTemplateToHclTerraform(struct?: AutomationAwsSecurityHubTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationAwsSecurityHubTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationAwsSecurityHubTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationAwsSecurityHubTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationAwsSecurityLakeTemplate {
  /**
  * AWS Security Lake template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationAwsSecurityLakeTemplateToTerraform(struct?: AutomationAwsSecurityLakeTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationAwsSecurityLakeTemplateToHclTerraform(struct?: AutomationAwsSecurityLakeTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationAwsSecurityLakeTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationAwsSecurityLakeTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationAwsSecurityLakeTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationAwsSqsTemplate {
  /**
  * AWS SQS template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationAwsSqsTemplateToTerraform(struct?: AutomationAwsSqsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationAwsSqsTemplateToHclTerraform(struct?: AutomationAwsSqsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationAwsSqsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationAwsSqsTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationAwsSqsTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationAzureDevopsTemplate {
  /**
  * Automatically nest under parent issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#parent_issue Automation#parent_issue}
  */
  readonly parentIssue?: string;
  /**
  * An ADO work item template to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationAzureDevopsTemplateToTerraform(struct?: AutomationAzureDevopsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent_issue: cdktf.stringToTerraform(struct!.parentIssue),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationAzureDevopsTemplateToHclTerraform(struct?: AutomationAzureDevopsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent_issue: {
      value: cdktf.stringToHclTerraform(struct!.parentIssue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationAzureDevopsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationAzureDevopsTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parentIssue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentIssue = this._parentIssue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationAzureDevopsTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parentIssue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parentIssue = value.parentIssue;
      this._template = value.template;
    }
  }

  // parent_issue - computed: false, optional: true, required: false
  private _parentIssue?: string; 
  public get parentIssue() {
    return this.getStringAttribute('parent_issue');
  }
  public set parentIssue(value: string) {
    this._parentIssue = value;
  }
  public resetParentIssue() {
    this._parentIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIssueInput() {
    return this._parentIssue;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationAzureSentinelTemplate {
}

export function automationAzureSentinelTemplateToTerraform(struct?: AutomationAzureSentinelTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function automationAzureSentinelTemplateToHclTerraform(struct?: AutomationAzureSentinelTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AutomationAzureSentinelTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationAzureSentinelTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationAzureSentinelTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AutomationCoralogixTemplate {
  /**
  * Coralogix template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationCoralogixTemplateToTerraform(struct?: AutomationCoralogixTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationCoralogixTemplateToHclTerraform(struct?: AutomationCoralogixTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationCoralogixTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationCoralogixTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationCoralogixTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationEmailTemplate {
  /**
  * Email addresses to send the alerts to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#email Automation#email}
  */
  readonly email: string[];
  /**
  * `true` means multiple alerts will be aggregated into 1 email. `false` means the email recipients will receive 1 email per alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#multi_alerts Automation#multi_alerts}
  */
  readonly multiAlerts: boolean | cdktf.IResolvable;
}

export function automationEmailTemplateToTerraform(struct?: AutomationEmailTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    multi_alerts: cdktf.booleanToTerraform(struct!.multiAlerts),
  }
}


export function automationEmailTemplateToHclTerraform(struct?: AutomationEmailTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multi_alerts: {
      value: cdktf.booleanToHclTerraform(struct!.multiAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationEmailTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationEmailTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._multiAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAlerts = this._multiAlerts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationEmailTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._multiAlerts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._multiAlerts = value.multiAlerts;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // multi_alerts - computed: false, optional: false, required: true
  private _multiAlerts?: boolean | cdktf.IResolvable; 
  public get multiAlerts() {
    return this.getBooleanAttribute('multi_alerts');
  }
  public set multiAlerts(value: boolean | cdktf.IResolvable) {
    this._multiAlerts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAlertsInput() {
    return this._multiAlerts;
  }
}
export interface AutomationGcpPubSubTemplate {
  /**
  * GCP Pub/Sub template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationGcpPubSubTemplateToTerraform(struct?: AutomationGcpPubSubTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationGcpPubSubTemplateToHclTerraform(struct?: AutomationGcpPubSubTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationGcpPubSubTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationGcpPubSubTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationGcpPubSubTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationJiraCloudTemplate {
  /**
  * Automatically nest under this parent issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#parent_issue Automation#parent_issue}
  */
  readonly parentIssue?: string;
  /**
  * Name of the Jira Cloud integration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationJiraCloudTemplateToTerraform(struct?: AutomationJiraCloudTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent_issue: cdktf.stringToTerraform(struct!.parentIssue),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationJiraCloudTemplateToHclTerraform(struct?: AutomationJiraCloudTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent_issue: {
      value: cdktf.stringToHclTerraform(struct!.parentIssue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationJiraCloudTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationJiraCloudTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parentIssue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentIssue = this._parentIssue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationJiraCloudTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parentIssue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parentIssue = value.parentIssue;
      this._template = value.template;
    }
  }

  // parent_issue - computed: false, optional: true, required: false
  private _parentIssue?: string; 
  public get parentIssue() {
    return this.getStringAttribute('parent_issue');
  }
  public set parentIssue(value: string) {
    this._parentIssue = value;
  }
  public resetParentIssue() {
    this._parentIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIssueInput() {
    return this._parentIssue;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationJiraServerTemplate {
  /**
  * Automatically nest under this parent issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#parent_issue Automation#parent_issue}
  */
  readonly parentIssue?: string;
  /**
  * Name of the Jira Server integration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationJiraServerTemplateToTerraform(struct?: AutomationJiraServerTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent_issue: cdktf.stringToTerraform(struct!.parentIssue),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationJiraServerTemplateToHclTerraform(struct?: AutomationJiraServerTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent_issue: {
      value: cdktf.stringToHclTerraform(struct!.parentIssue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationJiraServerTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationJiraServerTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parentIssue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentIssue = this._parentIssue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationJiraServerTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parentIssue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parentIssue = value.parentIssue;
      this._template = value.template;
    }
  }

  // parent_issue - computed: false, optional: true, required: false
  private _parentIssue?: string; 
  public get parentIssue() {
    return this.getStringAttribute('parent_issue');
  }
  public set parentIssue(value: string) {
    this._parentIssue = value;
  }
  public resetParentIssue() {
    this._parentIssue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIssueInput() {
    return this._parentIssue;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationOpsgenieTemplate {
  /**
  * Opsgenie template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationOpsgenieTemplateToTerraform(struct?: AutomationOpsgenieTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationOpsgenieTemplateToHclTerraform(struct?: AutomationOpsgenieTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationOpsgenieTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationOpsgenieTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationOpsgenieTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationPagerDutyTemplate {
  /**
  * Pager Duty template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationPagerDutyTemplateToTerraform(struct?: AutomationPagerDutyTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationPagerDutyTemplateToHclTerraform(struct?: AutomationPagerDutyTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationPagerDutyTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationPagerDutyTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationPagerDutyTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationQueryFilter {
  /**
  * When `excludes` is used, the automation applies to the negation of the specified field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#excludes Automation#excludes}
  */
  readonly excludes?: string[];
  /**
  * When `includes` is used, the automation applies to the specified field. Valid values include (but are not limited to):
  *   - `category` - alert categories
  *   - `asset_regions` - regions where the assets reside
  *   - `cve_list` - CVEs linked to the alerts
  *   - `state.risk_level` - alert risk scores
  *   - `state.status` - alert statuses
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#field Automation#field}
  */
  readonly field: string;
  /**
  * When `includes` is used, the automation applies to the specified field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#includes Automation#includes}
  */
  readonly includes?: string[];
}

export function automationQueryFilterToTerraform(struct?: AutomationQueryFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    field: cdktf.stringToTerraform(struct!.field),
    includes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includes),
  }
}


export function automationQueryFilterToHclTerraform(struct?: AutomationQueryFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excludes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    includes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationQueryFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutomationQueryFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._includes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includes = this._includes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationQueryFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludes = undefined;
      this._field = undefined;
      this._includes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludes = value.excludes;
      this._field = value.field;
      this._includes = value.includes;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: string[]; 
  public get includes() {
    return this.getListAttribute('includes');
  }
  public set includes(value: string[]) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes;
  }
}

export class AutomationQueryFilterList extends cdktf.ComplexList {
  public internalValue? : AutomationQueryFilter[] | cdktf.IResolvable

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
  public get(index: number): AutomationQueryFilterOutputReference {
    return new AutomationQueryFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationQuery {
  /**
  * List of filters upon which alerts are selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#filter Automation#filter}
  */
  readonly filter: AutomationQueryFilter[] | cdktf.IResolvable;
}

export function automationQueryToTerraform(struct?: AutomationQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(automationQueryFilterToTerraform, false)(struct!.filter),
  }
}


export function automationQueryToHclTerraform(struct?: AutomationQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.listMapperHcl(automationQueryFilterToHclTerraform, false)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationQueryFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new AutomationQueryFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: AutomationQueryFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface AutomationSlackTemplate {
  /**
  * Slack channel ID to post the alert to. Example: `C04CLKEF7PU`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#channel Automation#channel}
  */
  readonly channel: string;
  /**
  * Slack workspace to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#workspace Automation#workspace}
  */
  readonly workspace: string;
}

export function automationSlackTemplateToTerraform(struct?: AutomationSlackTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    workspace: cdktf.stringToTerraform(struct!.workspace),
  }
}


export function automationSlackTemplateToHclTerraform(struct?: AutomationSlackTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace: {
      value: cdktf.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSlackTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationSlackTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSlackTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._workspace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._workspace = value.workspace;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }
}
export interface AutomationSnowflakeTemplate {
}

export function automationSnowflakeTemplateToTerraform(struct?: AutomationSnowflakeTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function automationSnowflakeTemplateToHclTerraform(struct?: AutomationSnowflakeTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AutomationSnowflakeTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationSnowflakeTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSnowflakeTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AutomationSplunkTemplate {
  /**
  * Splunk template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationSplunkTemplateToTerraform(struct?: AutomationSplunkTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationSplunkTemplateToHclTerraform(struct?: AutomationSplunkTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSplunkTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationSplunkTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSplunkTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationSumoLogicTemplate {
}

export function automationSumoLogicTemplateToTerraform(struct?: AutomationSumoLogicTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function automationSumoLogicTemplateToHclTerraform(struct?: AutomationSumoLogicTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AutomationSumoLogicTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationSumoLogicTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSumoLogicTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface AutomationTinesTemplate {
  /**
  * Tines template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationTinesTemplateToTerraform(struct?: AutomationTinesTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationTinesTemplateToHclTerraform(struct?: AutomationTinesTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTinesTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTinesTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTinesTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationTorqTemplate {
  /**
  * Torq template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationTorqTemplateToTerraform(struct?: AutomationTorqTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationTorqTemplateToHclTerraform(struct?: AutomationTorqTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationTorqTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationTorqTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationTorqTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface AutomationWebhookTemplate {
  /**
  * Webhook template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#template Automation#template}
  */
  readonly template: string;
}

export function automationWebhookTemplateToTerraform(struct?: AutomationWebhookTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function automationWebhookTemplateToHclTerraform(struct?: AutomationWebhookTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationWebhookTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationWebhookTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationWebhookTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation orcasecurity_automation}
*/
export class Automation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Automation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Automation to import
  * @param importFromId The id of the existing Automation that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Automation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.23/docs/resources/automation orcasecurity_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_automation',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertDismissalDetails.internalValue = config.alertDismissalDetails;
    this._alertScoreDecreaseDetails.internalValue = config.alertScoreDecreaseDetails;
    this._alertScoreIncreaseDetails.internalValue = config.alertScoreIncreaseDetails;
    this._alertScoreSpecifyDetails.internalValue = config.alertScoreSpecifyDetails;
    this._awsSecurityHubTemplate.internalValue = config.awsSecurityHubTemplate;
    this._awsSecurityLakeTemplate.internalValue = config.awsSecurityLakeTemplate;
    this._awsSqsTemplate.internalValue = config.awsSqsTemplate;
    this._azureDevopsTemplate.internalValue = config.azureDevopsTemplate;
    this._azureSentinelTemplate.internalValue = config.azureSentinelTemplate;
    this._businessUnits = config.businessUnits;
    this._coralogixTemplate.internalValue = config.coralogixTemplate;
    this._description = config.description;
    this._emailTemplate.internalValue = config.emailTemplate;
    this._enabled = config.enabled;
    this._gcpPubSubTemplate.internalValue = config.gcpPubSubTemplate;
    this._jiraCloudTemplate.internalValue = config.jiraCloudTemplate;
    this._jiraServerTemplate.internalValue = config.jiraServerTemplate;
    this._name = config.name;
    this._opsgenieTemplate.internalValue = config.opsgenieTemplate;
    this._pagerDutyTemplate.internalValue = config.pagerDutyTemplate;
    this._query.internalValue = config.query;
    this._slackTemplate.internalValue = config.slackTemplate;
    this._snowflakeTemplate.internalValue = config.snowflakeTemplate;
    this._splunkTemplate.internalValue = config.splunkTemplate;
    this._sumoLogicTemplate.internalValue = config.sumoLogicTemplate;
    this._tinesTemplate.internalValue = config.tinesTemplate;
    this._torqTemplate.internalValue = config.torqTemplate;
    this._webhookTemplate.internalValue = config.webhookTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_dismissal_details - computed: false, optional: true, required: false
  private _alertDismissalDetails = new AutomationAlertDismissalDetailsOutputReference(this, "alert_dismissal_details");
  public get alertDismissalDetails() {
    return this._alertDismissalDetails;
  }
  public putAlertDismissalDetails(value: AutomationAlertDismissalDetails) {
    this._alertDismissalDetails.internalValue = value;
  }
  public resetAlertDismissalDetails() {
    this._alertDismissalDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDismissalDetailsInput() {
    return this._alertDismissalDetails.internalValue;
  }

  // alert_score_decrease_details - computed: false, optional: true, required: false
  private _alertScoreDecreaseDetails = new AutomationAlertScoreDecreaseDetailsOutputReference(this, "alert_score_decrease_details");
  public get alertScoreDecreaseDetails() {
    return this._alertScoreDecreaseDetails;
  }
  public putAlertScoreDecreaseDetails(value: AutomationAlertScoreDecreaseDetails) {
    this._alertScoreDecreaseDetails.internalValue = value;
  }
  public resetAlertScoreDecreaseDetails() {
    this._alertScoreDecreaseDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertScoreDecreaseDetailsInput() {
    return this._alertScoreDecreaseDetails.internalValue;
  }

  // alert_score_increase_details - computed: false, optional: true, required: false
  private _alertScoreIncreaseDetails = new AutomationAlertScoreIncreaseDetailsOutputReference(this, "alert_score_increase_details");
  public get alertScoreIncreaseDetails() {
    return this._alertScoreIncreaseDetails;
  }
  public putAlertScoreIncreaseDetails(value: AutomationAlertScoreIncreaseDetails) {
    this._alertScoreIncreaseDetails.internalValue = value;
  }
  public resetAlertScoreIncreaseDetails() {
    this._alertScoreIncreaseDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertScoreIncreaseDetailsInput() {
    return this._alertScoreIncreaseDetails.internalValue;
  }

  // alert_score_specify_details - computed: false, optional: true, required: false
  private _alertScoreSpecifyDetails = new AutomationAlertScoreSpecifyDetailsOutputReference(this, "alert_score_specify_details");
  public get alertScoreSpecifyDetails() {
    return this._alertScoreSpecifyDetails;
  }
  public putAlertScoreSpecifyDetails(value: AutomationAlertScoreSpecifyDetails) {
    this._alertScoreSpecifyDetails.internalValue = value;
  }
  public resetAlertScoreSpecifyDetails() {
    this._alertScoreSpecifyDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertScoreSpecifyDetailsInput() {
    return this._alertScoreSpecifyDetails.internalValue;
  }

  // aws_security_hub_template - computed: false, optional: true, required: false
  private _awsSecurityHubTemplate = new AutomationAwsSecurityHubTemplateOutputReference(this, "aws_security_hub_template");
  public get awsSecurityHubTemplate() {
    return this._awsSecurityHubTemplate;
  }
  public putAwsSecurityHubTemplate(value: AutomationAwsSecurityHubTemplate) {
    this._awsSecurityHubTemplate.internalValue = value;
  }
  public resetAwsSecurityHubTemplate() {
    this._awsSecurityHubTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecurityHubTemplateInput() {
    return this._awsSecurityHubTemplate.internalValue;
  }

  // aws_security_lake_template - computed: false, optional: true, required: false
  private _awsSecurityLakeTemplate = new AutomationAwsSecurityLakeTemplateOutputReference(this, "aws_security_lake_template");
  public get awsSecurityLakeTemplate() {
    return this._awsSecurityLakeTemplate;
  }
  public putAwsSecurityLakeTemplate(value: AutomationAwsSecurityLakeTemplate) {
    this._awsSecurityLakeTemplate.internalValue = value;
  }
  public resetAwsSecurityLakeTemplate() {
    this._awsSecurityLakeTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecurityLakeTemplateInput() {
    return this._awsSecurityLakeTemplate.internalValue;
  }

  // aws_sqs_template - computed: false, optional: true, required: false
  private _awsSqsTemplate = new AutomationAwsSqsTemplateOutputReference(this, "aws_sqs_template");
  public get awsSqsTemplate() {
    return this._awsSqsTemplate;
  }
  public putAwsSqsTemplate(value: AutomationAwsSqsTemplate) {
    this._awsSqsTemplate.internalValue = value;
  }
  public resetAwsSqsTemplate() {
    this._awsSqsTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSqsTemplateInput() {
    return this._awsSqsTemplate.internalValue;
  }

  // azure_devops_template - computed: false, optional: true, required: false
  private _azureDevopsTemplate = new AutomationAzureDevopsTemplateOutputReference(this, "azure_devops_template");
  public get azureDevopsTemplate() {
    return this._azureDevopsTemplate;
  }
  public putAzureDevopsTemplate(value: AutomationAzureDevopsTemplate) {
    this._azureDevopsTemplate.internalValue = value;
  }
  public resetAzureDevopsTemplate() {
    this._azureDevopsTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevopsTemplateInput() {
    return this._azureDevopsTemplate.internalValue;
  }

  // azure_sentinel_template - computed: false, optional: true, required: false
  private _azureSentinelTemplate = new AutomationAzureSentinelTemplateOutputReference(this, "azure_sentinel_template");
  public get azureSentinelTemplate() {
    return this._azureSentinelTemplate;
  }
  public putAzureSentinelTemplate(value: AutomationAzureSentinelTemplate) {
    this._azureSentinelTemplate.internalValue = value;
  }
  public resetAzureSentinelTemplate() {
    this._azureSentinelTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSentinelTemplateInput() {
    return this._azureSentinelTemplate.internalValue;
  }

  // business_units - computed: false, optional: true, required: false
  private _businessUnits?: string[]; 
  public get businessUnits() {
    return this.getListAttribute('business_units');
  }
  public set businessUnits(value: string[]) {
    this._businessUnits = value;
  }
  public resetBusinessUnits() {
    this._businessUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessUnitsInput() {
    return this._businessUnits;
  }

  // coralogix_template - computed: false, optional: true, required: false
  private _coralogixTemplate = new AutomationCoralogixTemplateOutputReference(this, "coralogix_template");
  public get coralogixTemplate() {
    return this._coralogixTemplate;
  }
  public putCoralogixTemplate(value: AutomationCoralogixTemplate) {
    this._coralogixTemplate.internalValue = value;
  }
  public resetCoralogixTemplate() {
    this._coralogixTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coralogixTemplateInput() {
    return this._coralogixTemplate.internalValue;
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

  // email_template - computed: false, optional: true, required: false
  private _emailTemplate = new AutomationEmailTemplateOutputReference(this, "email_template");
  public get emailTemplate() {
    return this._emailTemplate;
  }
  public putEmailTemplate(value: AutomationEmailTemplate) {
    this._emailTemplate.internalValue = value;
  }
  public resetEmailTemplate() {
    this._emailTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateInput() {
    return this._emailTemplate.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // gcp_pub_sub_template - computed: false, optional: true, required: false
  private _gcpPubSubTemplate = new AutomationGcpPubSubTemplateOutputReference(this, "gcp_pub_sub_template");
  public get gcpPubSubTemplate() {
    return this._gcpPubSubTemplate;
  }
  public putGcpPubSubTemplate(value: AutomationGcpPubSubTemplate) {
    this._gcpPubSubTemplate.internalValue = value;
  }
  public resetGcpPubSubTemplate() {
    this._gcpPubSubTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPubSubTemplateInput() {
    return this._gcpPubSubTemplate.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jira_cloud_template - computed: false, optional: true, required: false
  private _jiraCloudTemplate = new AutomationJiraCloudTemplateOutputReference(this, "jira_cloud_template");
  public get jiraCloudTemplate() {
    return this._jiraCloudTemplate;
  }
  public putJiraCloudTemplate(value: AutomationJiraCloudTemplate) {
    this._jiraCloudTemplate.internalValue = value;
  }
  public resetJiraCloudTemplate() {
    this._jiraCloudTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraCloudTemplateInput() {
    return this._jiraCloudTemplate.internalValue;
  }

  // jira_server_template - computed: false, optional: true, required: false
  private _jiraServerTemplate = new AutomationJiraServerTemplateOutputReference(this, "jira_server_template");
  public get jiraServerTemplate() {
    return this._jiraServerTemplate;
  }
  public putJiraServerTemplate(value: AutomationJiraServerTemplate) {
    this._jiraServerTemplate.internalValue = value;
  }
  public resetJiraServerTemplate() {
    this._jiraServerTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraServerTemplateInput() {
    return this._jiraServerTemplate.internalValue;
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

  // opsgenie_template - computed: false, optional: true, required: false
  private _opsgenieTemplate = new AutomationOpsgenieTemplateOutputReference(this, "opsgenie_template");
  public get opsgenieTemplate() {
    return this._opsgenieTemplate;
  }
  public putOpsgenieTemplate(value: AutomationOpsgenieTemplate) {
    this._opsgenieTemplate.internalValue = value;
  }
  public resetOpsgenieTemplate() {
    this._opsgenieTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieTemplateInput() {
    return this._opsgenieTemplate.internalValue;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // pager_duty_template - computed: false, optional: true, required: false
  private _pagerDutyTemplate = new AutomationPagerDutyTemplateOutputReference(this, "pager_duty_template");
  public get pagerDutyTemplate() {
    return this._pagerDutyTemplate;
  }
  public putPagerDutyTemplate(value: AutomationPagerDutyTemplate) {
    this._pagerDutyTemplate.internalValue = value;
  }
  public resetPagerDutyTemplate() {
    this._pagerDutyTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyTemplateInput() {
    return this._pagerDutyTemplate.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new AutomationQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: AutomationQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // slack_template - computed: false, optional: true, required: false
  private _slackTemplate = new AutomationSlackTemplateOutputReference(this, "slack_template");
  public get slackTemplate() {
    return this._slackTemplate;
  }
  public putSlackTemplate(value: AutomationSlackTemplate) {
    this._slackTemplate.internalValue = value;
  }
  public resetSlackTemplate() {
    this._slackTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackTemplateInput() {
    return this._slackTemplate.internalValue;
  }

  // snowflake_template - computed: false, optional: true, required: false
  private _snowflakeTemplate = new AutomationSnowflakeTemplateOutputReference(this, "snowflake_template");
  public get snowflakeTemplate() {
    return this._snowflakeTemplate;
  }
  public putSnowflakeTemplate(value: AutomationSnowflakeTemplate) {
    this._snowflakeTemplate.internalValue = value;
  }
  public resetSnowflakeTemplate() {
    this._snowflakeTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeTemplateInput() {
    return this._snowflakeTemplate.internalValue;
  }

  // splunk_template - computed: false, optional: true, required: false
  private _splunkTemplate = new AutomationSplunkTemplateOutputReference(this, "splunk_template");
  public get splunkTemplate() {
    return this._splunkTemplate;
  }
  public putSplunkTemplate(value: AutomationSplunkTemplate) {
    this._splunkTemplate.internalValue = value;
  }
  public resetSplunkTemplate() {
    this._splunkTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkTemplateInput() {
    return this._splunkTemplate.internalValue;
  }

  // sumo_logic_template - computed: false, optional: true, required: false
  private _sumoLogicTemplate = new AutomationSumoLogicTemplateOutputReference(this, "sumo_logic_template");
  public get sumoLogicTemplate() {
    return this._sumoLogicTemplate;
  }
  public putSumoLogicTemplate(value: AutomationSumoLogicTemplate) {
    this._sumoLogicTemplate.internalValue = value;
  }
  public resetSumoLogicTemplate() {
    this._sumoLogicTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumoLogicTemplateInput() {
    return this._sumoLogicTemplate.internalValue;
  }

  // tines_template - computed: false, optional: true, required: false
  private _tinesTemplate = new AutomationTinesTemplateOutputReference(this, "tines_template");
  public get tinesTemplate() {
    return this._tinesTemplate;
  }
  public putTinesTemplate(value: AutomationTinesTemplate) {
    this._tinesTemplate.internalValue = value;
  }
  public resetTinesTemplate() {
    this._tinesTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tinesTemplateInput() {
    return this._tinesTemplate.internalValue;
  }

  // torq_template - computed: false, optional: true, required: false
  private _torqTemplate = new AutomationTorqTemplateOutputReference(this, "torq_template");
  public get torqTemplate() {
    return this._torqTemplate;
  }
  public putTorqTemplate(value: AutomationTorqTemplate) {
    this._torqTemplate.internalValue = value;
  }
  public resetTorqTemplate() {
    this._torqTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get torqTemplateInput() {
    return this._torqTemplate.internalValue;
  }

  // webhook_template - computed: false, optional: true, required: false
  private _webhookTemplate = new AutomationWebhookTemplateOutputReference(this, "webhook_template");
  public get webhookTemplate() {
    return this._webhookTemplate;
  }
  public putWebhookTemplate(value: AutomationWebhookTemplate) {
    this._webhookTemplate.internalValue = value;
  }
  public resetWebhookTemplate() {
    this._webhookTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookTemplateInput() {
    return this._webhookTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_dismissal_details: automationAlertDismissalDetailsToTerraform(this._alertDismissalDetails.internalValue),
      alert_score_decrease_details: automationAlertScoreDecreaseDetailsToTerraform(this._alertScoreDecreaseDetails.internalValue),
      alert_score_increase_details: automationAlertScoreIncreaseDetailsToTerraform(this._alertScoreIncreaseDetails.internalValue),
      alert_score_specify_details: automationAlertScoreSpecifyDetailsToTerraform(this._alertScoreSpecifyDetails.internalValue),
      aws_security_hub_template: automationAwsSecurityHubTemplateToTerraform(this._awsSecurityHubTemplate.internalValue),
      aws_security_lake_template: automationAwsSecurityLakeTemplateToTerraform(this._awsSecurityLakeTemplate.internalValue),
      aws_sqs_template: automationAwsSqsTemplateToTerraform(this._awsSqsTemplate.internalValue),
      azure_devops_template: automationAzureDevopsTemplateToTerraform(this._azureDevopsTemplate.internalValue),
      azure_sentinel_template: automationAzureSentinelTemplateToTerraform(this._azureSentinelTemplate.internalValue),
      business_units: cdktf.listMapper(cdktf.stringToTerraform, false)(this._businessUnits),
      coralogix_template: automationCoralogixTemplateToTerraform(this._coralogixTemplate.internalValue),
      description: cdktf.stringToTerraform(this._description),
      email_template: automationEmailTemplateToTerraform(this._emailTemplate.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      gcp_pub_sub_template: automationGcpPubSubTemplateToTerraform(this._gcpPubSubTemplate.internalValue),
      jira_cloud_template: automationJiraCloudTemplateToTerraform(this._jiraCloudTemplate.internalValue),
      jira_server_template: automationJiraServerTemplateToTerraform(this._jiraServerTemplate.internalValue),
      name: cdktf.stringToTerraform(this._name),
      opsgenie_template: automationOpsgenieTemplateToTerraform(this._opsgenieTemplate.internalValue),
      pager_duty_template: automationPagerDutyTemplateToTerraform(this._pagerDutyTemplate.internalValue),
      query: automationQueryToTerraform(this._query.internalValue),
      slack_template: automationSlackTemplateToTerraform(this._slackTemplate.internalValue),
      snowflake_template: automationSnowflakeTemplateToTerraform(this._snowflakeTemplate.internalValue),
      splunk_template: automationSplunkTemplateToTerraform(this._splunkTemplate.internalValue),
      sumo_logic_template: automationSumoLogicTemplateToTerraform(this._sumoLogicTemplate.internalValue),
      tines_template: automationTinesTemplateToTerraform(this._tinesTemplate.internalValue),
      torq_template: automationTorqTemplateToTerraform(this._torqTemplate.internalValue),
      webhook_template: automationWebhookTemplateToTerraform(this._webhookTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_dismissal_details: {
        value: automationAlertDismissalDetailsToHclTerraform(this._alertDismissalDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationAlertDismissalDetails",
      },
      alert_score_decrease_details: {
        value: automationAlertScoreDecreaseDetailsToHclTerraform(this._alertScoreDecreaseDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationAlertScoreDecreaseDetails",
      },
      alert_score_increase_details: {
        value: automationAlertScoreIncreaseDetailsToHclTerraform(this._alertScoreIncreaseDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationAlertScoreIncreaseDetails",
      },
      alert_score_specify_details: {
        value: automationAlertScoreSpecifyDetailsToHclTerraform(this._alertScoreSpecifyDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationAlertScoreSpecifyDetails",
      },
      aws_security_hub_template: {
        value: automationAwsSecurityHubTemplateToHclTerraform(this._awsSecurityHubTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationAwsSecurityHubTemplate",
      },
      aws_security_lake_template: {
        value: automationAwsSecurityLakeTemplateToHclTerraform(this._awsSecurityLakeTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationAwsSecurityLakeTemplate",
      },
      aws_sqs_template: {
        value: automationAwsSqsTemplateToHclTerraform(this._awsSqsTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationAwsSqsTemplate",
      },
      azure_devops_template: {
        value: automationAzureDevopsTemplateToHclTerraform(this._azureDevopsTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationAzureDevopsTemplate",
      },
      azure_sentinel_template: {
        value: automationAzureSentinelTemplateToHclTerraform(this._azureSentinelTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationAzureSentinelTemplate",
      },
      business_units: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._businessUnits),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      coralogix_template: {
        value: automationCoralogixTemplateToHclTerraform(this._coralogixTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationCoralogixTemplate",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_template: {
        value: automationEmailTemplateToHclTerraform(this._emailTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationEmailTemplate",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gcp_pub_sub_template: {
        value: automationGcpPubSubTemplateToHclTerraform(this._gcpPubSubTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationGcpPubSubTemplate",
      },
      jira_cloud_template: {
        value: automationJiraCloudTemplateToHclTerraform(this._jiraCloudTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationJiraCloudTemplate",
      },
      jira_server_template: {
        value: automationJiraServerTemplateToHclTerraform(this._jiraServerTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationJiraServerTemplate",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opsgenie_template: {
        value: automationOpsgenieTemplateToHclTerraform(this._opsgenieTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationOpsgenieTemplate",
      },
      pager_duty_template: {
        value: automationPagerDutyTemplateToHclTerraform(this._pagerDutyTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationPagerDutyTemplate",
      },
      query: {
        value: automationQueryToHclTerraform(this._query.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationQuery",
      },
      slack_template: {
        value: automationSlackTemplateToHclTerraform(this._slackTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationSlackTemplate",
      },
      snowflake_template: {
        value: automationSnowflakeTemplateToHclTerraform(this._snowflakeTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationSnowflakeTemplate",
      },
      splunk_template: {
        value: automationSplunkTemplateToHclTerraform(this._splunkTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationSplunkTemplate",
      },
      sumo_logic_template: {
        value: automationSumoLogicTemplateToHclTerraform(this._sumoLogicTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationSumoLogicTemplate",
      },
      tines_template: {
        value: automationTinesTemplateToHclTerraform(this._tinesTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationTinesTemplate",
      },
      torq_template: {
        value: automationTorqTemplateToHclTerraform(this._torqTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationTorqTemplate",
      },
      webhook_template: {
        value: automationWebhookTemplateToHclTerraform(this._webhookTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationWebhookTemplate",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
