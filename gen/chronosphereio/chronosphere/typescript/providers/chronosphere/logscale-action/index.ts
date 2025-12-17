// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogscaleActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#id LogscaleAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#name LogscaleAction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#repository LogscaleAction#repository}
  */
  readonly repository: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#slug LogscaleAction#slug}
  */
  readonly slug?: string;
  /**
  * email_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#email_action LogscaleAction#email_action}
  */
  readonly emailAction?: LogscaleActionEmailAction;
  /**
  * humio_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#humio_action LogscaleAction#humio_action}
  */
  readonly humioAction?: LogscaleActionHumioAction;
  /**
  * ops_genie_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#ops_genie_action LogscaleAction#ops_genie_action}
  */
  readonly opsGenieAction?: LogscaleActionOpsGenieAction;
  /**
  * pager_duty_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#pager_duty_action LogscaleAction#pager_duty_action}
  */
  readonly pagerDutyAction?: LogscaleActionPagerDutyAction;
  /**
  * slack_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#slack_action LogscaleAction#slack_action}
  */
  readonly slackAction?: LogscaleActionSlackAction;
  /**
  * slack_post_message_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#slack_post_message_action LogscaleAction#slack_post_message_action}
  */
  readonly slackPostMessageAction?: LogscaleActionSlackPostMessageAction;
  /**
  * upload_file_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#upload_file_action LogscaleAction#upload_file_action}
  */
  readonly uploadFileAction?: LogscaleActionUploadFileAction;
  /**
  * victor_ops_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#victor_ops_action LogscaleAction#victor_ops_action}
  */
  readonly victorOpsAction?: LogscaleActionVictorOpsAction;
  /**
  * webhook_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#webhook_action LogscaleAction#webhook_action}
  */
  readonly webhookAction?: LogscaleActionWebhookAction;
}
export interface LogscaleActionEmailAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#attach_csv LogscaleAction#attach_csv}
  */
  readonly attachCsv?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#body_template LogscaleAction#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#recipients LogscaleAction#recipients}
  */
  readonly recipients: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#subject_template LogscaleAction#subject_template}
  */
  readonly subjectTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#use_proxy LogscaleAction#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
}

export function logscaleActionEmailActionToTerraform(struct?: LogscaleActionEmailActionOutputReference | LogscaleActionEmailAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attach_csv: cdktf.booleanToTerraform(struct!.attachCsv),
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    subject_template: cdktf.stringToTerraform(struct!.subjectTemplate),
    use_proxy: cdktf.booleanToTerraform(struct!.useProxy),
  }
}


export function logscaleActionEmailActionToHclTerraform(struct?: LogscaleActionEmailActionOutputReference | LogscaleActionEmailAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attach_csv: {
      value: cdktf.booleanToHclTerraform(struct!.attachCsv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    body_template: {
      value: cdktf.stringToHclTerraform(struct!.bodyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject_template: {
      value: cdktf.stringToHclTerraform(struct!.subjectTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogscaleActionEmailActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogscaleActionEmailAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachCsv !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachCsv = this._attachCsv;
    }
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._subjectTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectTemplate = this._subjectTemplate;
    }
    if (this._useProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxy = this._useProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogscaleActionEmailAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attachCsv = undefined;
      this._bodyTemplate = undefined;
      this._recipients = undefined;
      this._subjectTemplate = undefined;
      this._useProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attachCsv = value.attachCsv;
      this._bodyTemplate = value.bodyTemplate;
      this._recipients = value.recipients;
      this._subjectTemplate = value.subjectTemplate;
      this._useProxy = value.useProxy;
    }
  }

  // attach_csv - computed: false, optional: true, required: false
  private _attachCsv?: boolean | cdktf.IResolvable; 
  public get attachCsv() {
    return this.getBooleanAttribute('attach_csv');
  }
  public set attachCsv(value: boolean | cdktf.IResolvable) {
    this._attachCsv = value;
  }
  public resetAttachCsv() {
    this._attachCsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachCsvInput() {
    return this._attachCsv;
  }

  // body_template - computed: false, optional: true, required: false
  private _bodyTemplate?: string; 
  public get bodyTemplate() {
    return this.getStringAttribute('body_template');
  }
  public set bodyTemplate(value: string) {
    this._bodyTemplate = value;
  }
  public resetBodyTemplate() {
    this._bodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTemplateInput() {
    return this._bodyTemplate;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return this.getListAttribute('recipients');
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // subject_template - computed: false, optional: true, required: false
  private _subjectTemplate?: string; 
  public get subjectTemplate() {
    return this.getStringAttribute('subject_template');
  }
  public set subjectTemplate(value: string) {
    this._subjectTemplate = value;
  }
  public resetSubjectTemplate() {
    this._subjectTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTemplateInput() {
    return this._subjectTemplate;
  }

  // use_proxy - computed: false, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }
}
export interface LogscaleActionHumioAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#ingest_token LogscaleAction#ingest_token}
  */
  readonly ingestToken: string;
}

export function logscaleActionHumioActionToTerraform(struct?: LogscaleActionHumioActionOutputReference | LogscaleActionHumioAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingest_token: cdktf.stringToTerraform(struct!.ingestToken),
  }
}


export function logscaleActionHumioActionToHclTerraform(struct?: LogscaleActionHumioActionOutputReference | LogscaleActionHumioAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingest_token: {
      value: cdktf.stringToHclTerraform(struct!.ingestToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogscaleActionHumioActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogscaleActionHumioAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestToken = this._ingestToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogscaleActionHumioAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ingestToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ingestToken = value.ingestToken;
    }
  }

  // ingest_token - computed: false, optional: false, required: true
  private _ingestToken?: string; 
  public get ingestToken() {
    return this.getStringAttribute('ingest_token');
  }
  public set ingestToken(value: string) {
    this._ingestToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestTokenInput() {
    return this._ingestToken;
  }
}
export interface LogscaleActionOpsGenieAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#api_url LogscaleAction#api_url}
  */
  readonly apiUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#ops_genie_key LogscaleAction#ops_genie_key}
  */
  readonly opsGenieKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#use_proxy LogscaleAction#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
}

export function logscaleActionOpsGenieActionToTerraform(struct?: LogscaleActionOpsGenieActionOutputReference | LogscaleActionOpsGenieAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_url: cdktf.stringToTerraform(struct!.apiUrl),
    ops_genie_key: cdktf.stringToTerraform(struct!.opsGenieKey),
    use_proxy: cdktf.booleanToTerraform(struct!.useProxy),
  }
}


export function logscaleActionOpsGenieActionToHclTerraform(struct?: LogscaleActionOpsGenieActionOutputReference | LogscaleActionOpsGenieAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_url: {
      value: cdktf.stringToHclTerraform(struct!.apiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ops_genie_key: {
      value: cdktf.stringToHclTerraform(struct!.opsGenieKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogscaleActionOpsGenieActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogscaleActionOpsGenieAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrl = this._apiUrl;
    }
    if (this._opsGenieKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsGenieKey = this._opsGenieKey;
    }
    if (this._useProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxy = this._useProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogscaleActionOpsGenieAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiUrl = undefined;
      this._opsGenieKey = undefined;
      this._useProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiUrl = value.apiUrl;
      this._opsGenieKey = value.opsGenieKey;
      this._useProxy = value.useProxy;
    }
  }

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // ops_genie_key - computed: false, optional: false, required: true
  private _opsGenieKey?: string; 
  public get opsGenieKey() {
    return this.getStringAttribute('ops_genie_key');
  }
  public set opsGenieKey(value: string) {
    this._opsGenieKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opsGenieKeyInput() {
    return this._opsGenieKey;
  }

  // use_proxy - computed: false, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }
}
export interface LogscaleActionPagerDutyAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#routing_key LogscaleAction#routing_key}
  */
  readonly routingKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#severity LogscaleAction#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#use_proxy LogscaleAction#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
}

export function logscaleActionPagerDutyActionToTerraform(struct?: LogscaleActionPagerDutyActionOutputReference | LogscaleActionPagerDutyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_key: cdktf.stringToTerraform(struct!.routingKey),
    severity: cdktf.stringToTerraform(struct!.severity),
    use_proxy: cdktf.booleanToTerraform(struct!.useProxy),
  }
}


export function logscaleActionPagerDutyActionToHclTerraform(struct?: LogscaleActionPagerDutyActionOutputReference | LogscaleActionPagerDutyAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_key: {
      value: cdktf.stringToHclTerraform(struct!.routingKey),
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
    use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogscaleActionPagerDutyActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogscaleActionPagerDutyAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingKey = this._routingKey;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._useProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxy = this._useProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogscaleActionPagerDutyAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routingKey = undefined;
      this._severity = undefined;
      this._useProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routingKey = value.routingKey;
      this._severity = value.severity;
      this._useProxy = value.useProxy;
    }
  }

  // routing_key - computed: false, optional: false, required: true
  private _routingKey?: string; 
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }
  public set routingKey(value: string) {
    this._routingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // use_proxy - computed: false, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }
}
export interface LogscaleActionSlackAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#fields LogscaleAction#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#url LogscaleAction#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#use_proxy LogscaleAction#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
}

export function logscaleActionSlackActionToTerraform(struct?: LogscaleActionSlackActionOutputReference | LogscaleActionSlackAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    url: cdktf.stringToTerraform(struct!.url),
    use_proxy: cdktf.booleanToTerraform(struct!.useProxy),
  }
}


export function logscaleActionSlackActionToHclTerraform(struct?: LogscaleActionSlackActionOutputReference | LogscaleActionSlackAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogscaleActionSlackActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogscaleActionSlackAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxy = this._useProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogscaleActionSlackAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._url = undefined;
      this._useProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._url = value.url;
      this._useProxy = value.useProxy;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_proxy - computed: false, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }
}
export interface LogscaleActionSlackPostMessageAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#api_token LogscaleAction#api_token}
  */
  readonly apiToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#channels LogscaleAction#channels}
  */
  readonly channels: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#fields LogscaleAction#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#use_proxy LogscaleAction#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
}

export function logscaleActionSlackPostMessageActionToTerraform(struct?: LogscaleActionSlackPostMessageActionOutputReference | LogscaleActionSlackPostMessageAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    use_proxy: cdktf.booleanToTerraform(struct!.useProxy),
  }
}


export function logscaleActionSlackPostMessageActionToHclTerraform(struct?: LogscaleActionSlackPostMessageActionOutputReference | LogscaleActionSlackPostMessageAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogscaleActionSlackPostMessageActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogscaleActionSlackPostMessageAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._useProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxy = this._useProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogscaleActionSlackPostMessageAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._channels = undefined;
      this._fields = undefined;
      this._useProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._channels = value.channels;
      this._fields = value.fields;
      this._useProxy = value.useProxy;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // channels - computed: false, optional: false, required: true
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // use_proxy - computed: false, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }
}
export interface LogscaleActionUploadFileAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#file_name LogscaleAction#file_name}
  */
  readonly fileName: string;
}

export function logscaleActionUploadFileActionToTerraform(struct?: LogscaleActionUploadFileActionOutputReference | LogscaleActionUploadFileAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function logscaleActionUploadFileActionToHclTerraform(struct?: LogscaleActionUploadFileActionOutputReference | LogscaleActionUploadFileAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogscaleActionUploadFileActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogscaleActionUploadFileAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogscaleActionUploadFileAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileName = value.fileName;
    }
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }
}
export interface LogscaleActionVictorOpsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#message_type LogscaleAction#message_type}
  */
  readonly messageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#notify_url LogscaleAction#notify_url}
  */
  readonly notifyUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#use_proxy LogscaleAction#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
}

export function logscaleActionVictorOpsActionToTerraform(struct?: LogscaleActionVictorOpsActionOutputReference | LogscaleActionVictorOpsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_type: cdktf.stringToTerraform(struct!.messageType),
    notify_url: cdktf.stringToTerraform(struct!.notifyUrl),
    use_proxy: cdktf.booleanToTerraform(struct!.useProxy),
  }
}


export function logscaleActionVictorOpsActionToHclTerraform(struct?: LogscaleActionVictorOpsActionOutputReference | LogscaleActionVictorOpsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_type: {
      value: cdktf.stringToHclTerraform(struct!.messageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_url: {
      value: cdktf.stringToHclTerraform(struct!.notifyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogscaleActionVictorOpsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogscaleActionVictorOpsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageType = this._messageType;
    }
    if (this._notifyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyUrl = this._notifyUrl;
    }
    if (this._useProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxy = this._useProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogscaleActionVictorOpsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageType = undefined;
      this._notifyUrl = undefined;
      this._useProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageType = value.messageType;
      this._notifyUrl = value.notifyUrl;
      this._useProxy = value.useProxy;
    }
  }

  // message_type - computed: false, optional: false, required: true
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // notify_url - computed: false, optional: false, required: true
  private _notifyUrl?: string; 
  public get notifyUrl() {
    return this.getStringAttribute('notify_url');
  }
  public set notifyUrl(value: string) {
    this._notifyUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyUrlInput() {
    return this._notifyUrl;
  }

  // use_proxy - computed: false, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }
}
export interface LogscaleActionWebhookAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#body_template LogscaleAction#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#headers LogscaleAction#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#ignore_ssl LogscaleAction#ignore_ssl}
  */
  readonly ignoreSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#method LogscaleAction#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#url LogscaleAction#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#use_proxy LogscaleAction#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
}

export function logscaleActionWebhookActionToTerraform(struct?: LogscaleActionWebhookActionOutputReference | LogscaleActionWebhookAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    ignore_ssl: cdktf.booleanToTerraform(struct!.ignoreSsl),
    method: cdktf.stringToTerraform(struct!.method),
    url: cdktf.stringToTerraform(struct!.url),
    use_proxy: cdktf.booleanToTerraform(struct!.useProxy),
  }
}


export function logscaleActionWebhookActionToHclTerraform(struct?: LogscaleActionWebhookActionOutputReference | LogscaleActionWebhookAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_template: {
      value: cdktf.stringToHclTerraform(struct!.bodyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ignore_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogscaleActionWebhookActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogscaleActionWebhookAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ignoreSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSsl = this._ignoreSsl;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxy = this._useProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogscaleActionWebhookAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._headers = undefined;
      this._ignoreSsl = undefined;
      this._method = undefined;
      this._url = undefined;
      this._useProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._headers = value.headers;
      this._ignoreSsl = value.ignoreSsl;
      this._method = value.method;
      this._url = value.url;
      this._useProxy = value.useProxy;
    }
  }

  // body_template - computed: false, optional: true, required: false
  private _bodyTemplate?: string; 
  public get bodyTemplate() {
    return this.getStringAttribute('body_template');
  }
  public set bodyTemplate(value: string) {
    this._bodyTemplate = value;
  }
  public resetBodyTemplate() {
    this._bodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTemplateInput() {
    return this._bodyTemplate;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // ignore_ssl - computed: false, optional: true, required: false
  private _ignoreSsl?: boolean | cdktf.IResolvable; 
  public get ignoreSsl() {
    return this.getBooleanAttribute('ignore_ssl');
  }
  public set ignoreSsl(value: boolean | cdktf.IResolvable) {
    this._ignoreSsl = value;
  }
  public resetIgnoreSsl() {
    this._ignoreSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSslInput() {
    return this._ignoreSsl;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_proxy - computed: false, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action chronosphere_logscale_action}
*/
export class LogscaleAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_logscale_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogscaleAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogscaleAction to import
  * @param importFromId The id of the existing LogscaleAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogscaleAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_logscale_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.19.0/docs/resources/logscale_action chronosphere_logscale_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogscaleActionConfig
  */
  public constructor(scope: Construct, id: string, config: LogscaleActionConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_logscale_action',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.19.0',
        providerVersionConstraint: '1.19.0'
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
    this._name = config.name;
    this._repository = config.repository;
    this._slug = config.slug;
    this._emailAction.internalValue = config.emailAction;
    this._humioAction.internalValue = config.humioAction;
    this._opsGenieAction.internalValue = config.opsGenieAction;
    this._pagerDutyAction.internalValue = config.pagerDutyAction;
    this._slackAction.internalValue = config.slackAction;
    this._slackPostMessageAction.internalValue = config.slackPostMessageAction;
    this._uploadFileAction.internalValue = config.uploadFileAction;
    this._victorOpsAction.internalValue = config.victorOpsAction;
    this._webhookAction.internalValue = config.webhookAction;
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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // email_action - computed: false, optional: true, required: false
  private _emailAction = new LogscaleActionEmailActionOutputReference(this, "email_action");
  public get emailAction() {
    return this._emailAction;
  }
  public putEmailAction(value: LogscaleActionEmailAction) {
    this._emailAction.internalValue = value;
  }
  public resetEmailAction() {
    this._emailAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailActionInput() {
    return this._emailAction.internalValue;
  }

  // humio_action - computed: false, optional: true, required: false
  private _humioAction = new LogscaleActionHumioActionOutputReference(this, "humio_action");
  public get humioAction() {
    return this._humioAction;
  }
  public putHumioAction(value: LogscaleActionHumioAction) {
    this._humioAction.internalValue = value;
  }
  public resetHumioAction() {
    this._humioAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humioActionInput() {
    return this._humioAction.internalValue;
  }

  // ops_genie_action - computed: false, optional: true, required: false
  private _opsGenieAction = new LogscaleActionOpsGenieActionOutputReference(this, "ops_genie_action");
  public get opsGenieAction() {
    return this._opsGenieAction;
  }
  public putOpsGenieAction(value: LogscaleActionOpsGenieAction) {
    this._opsGenieAction.internalValue = value;
  }
  public resetOpsGenieAction() {
    this._opsGenieAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsGenieActionInput() {
    return this._opsGenieAction.internalValue;
  }

  // pager_duty_action - computed: false, optional: true, required: false
  private _pagerDutyAction = new LogscaleActionPagerDutyActionOutputReference(this, "pager_duty_action");
  public get pagerDutyAction() {
    return this._pagerDutyAction;
  }
  public putPagerDutyAction(value: LogscaleActionPagerDutyAction) {
    this._pagerDutyAction.internalValue = value;
  }
  public resetPagerDutyAction() {
    this._pagerDutyAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyActionInput() {
    return this._pagerDutyAction.internalValue;
  }

  // slack_action - computed: false, optional: true, required: false
  private _slackAction = new LogscaleActionSlackActionOutputReference(this, "slack_action");
  public get slackAction() {
    return this._slackAction;
  }
  public putSlackAction(value: LogscaleActionSlackAction) {
    this._slackAction.internalValue = value;
  }
  public resetSlackAction() {
    this._slackAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackActionInput() {
    return this._slackAction.internalValue;
  }

  // slack_post_message_action - computed: false, optional: true, required: false
  private _slackPostMessageAction = new LogscaleActionSlackPostMessageActionOutputReference(this, "slack_post_message_action");
  public get slackPostMessageAction() {
    return this._slackPostMessageAction;
  }
  public putSlackPostMessageAction(value: LogscaleActionSlackPostMessageAction) {
    this._slackPostMessageAction.internalValue = value;
  }
  public resetSlackPostMessageAction() {
    this._slackPostMessageAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackPostMessageActionInput() {
    return this._slackPostMessageAction.internalValue;
  }

  // upload_file_action - computed: false, optional: true, required: false
  private _uploadFileAction = new LogscaleActionUploadFileActionOutputReference(this, "upload_file_action");
  public get uploadFileAction() {
    return this._uploadFileAction;
  }
  public putUploadFileAction(value: LogscaleActionUploadFileAction) {
    this._uploadFileAction.internalValue = value;
  }
  public resetUploadFileAction() {
    this._uploadFileAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadFileActionInput() {
    return this._uploadFileAction.internalValue;
  }

  // victor_ops_action - computed: false, optional: true, required: false
  private _victorOpsAction = new LogscaleActionVictorOpsActionOutputReference(this, "victor_ops_action");
  public get victorOpsAction() {
    return this._victorOpsAction;
  }
  public putVictorOpsAction(value: LogscaleActionVictorOpsAction) {
    this._victorOpsAction.internalValue = value;
  }
  public resetVictorOpsAction() {
    this._victorOpsAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victorOpsActionInput() {
    return this._victorOpsAction.internalValue;
  }

  // webhook_action - computed: false, optional: true, required: false
  private _webhookAction = new LogscaleActionWebhookActionOutputReference(this, "webhook_action");
  public get webhookAction() {
    return this._webhookAction;
  }
  public putWebhookAction(value: LogscaleActionWebhookAction) {
    this._webhookAction.internalValue = value;
  }
  public resetWebhookAction() {
    this._webhookAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookActionInput() {
    return this._webhookAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
      slug: cdktf.stringToTerraform(this._slug),
      email_action: logscaleActionEmailActionToTerraform(this._emailAction.internalValue),
      humio_action: logscaleActionHumioActionToTerraform(this._humioAction.internalValue),
      ops_genie_action: logscaleActionOpsGenieActionToTerraform(this._opsGenieAction.internalValue),
      pager_duty_action: logscaleActionPagerDutyActionToTerraform(this._pagerDutyAction.internalValue),
      slack_action: logscaleActionSlackActionToTerraform(this._slackAction.internalValue),
      slack_post_message_action: logscaleActionSlackPostMessageActionToTerraform(this._slackPostMessageAction.internalValue),
      upload_file_action: logscaleActionUploadFileActionToTerraform(this._uploadFileAction.internalValue),
      victor_ops_action: logscaleActionVictorOpsActionToTerraform(this._victorOpsAction.internalValue),
      webhook_action: logscaleActionWebhookActionToTerraform(this._webhookAction.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_action: {
        value: logscaleActionEmailActionToHclTerraform(this._emailAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogscaleActionEmailActionList",
      },
      humio_action: {
        value: logscaleActionHumioActionToHclTerraform(this._humioAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogscaleActionHumioActionList",
      },
      ops_genie_action: {
        value: logscaleActionOpsGenieActionToHclTerraform(this._opsGenieAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogscaleActionOpsGenieActionList",
      },
      pager_duty_action: {
        value: logscaleActionPagerDutyActionToHclTerraform(this._pagerDutyAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogscaleActionPagerDutyActionList",
      },
      slack_action: {
        value: logscaleActionSlackActionToHclTerraform(this._slackAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogscaleActionSlackActionList",
      },
      slack_post_message_action: {
        value: logscaleActionSlackPostMessageActionToHclTerraform(this._slackPostMessageAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogscaleActionSlackPostMessageActionList",
      },
      upload_file_action: {
        value: logscaleActionUploadFileActionToHclTerraform(this._uploadFileAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogscaleActionUploadFileActionList",
      },
      victor_ops_action: {
        value: logscaleActionVictorOpsActionToHclTerraform(this._victorOpsAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogscaleActionVictorOpsActionList",
      },
      webhook_action: {
        value: logscaleActionWebhookActionToHclTerraform(this._webhookAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogscaleActionWebhookActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
