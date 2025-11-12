// https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#name Connection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#trigger_mode Connection#trigger_mode}
  */
  readonly triggerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#trigger_types Connection#trigger_types}
  */
  readonly triggerTypes?: string[];
  /**
  * alert_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#alert_source Connection#alert_source}
  */
  readonly alertSource: ConnectionAlertSource;
  /**
  * autotask block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#autotask Connection#autotask}
  */
  readonly autotask?: ConnectionAutotask;
  /**
  * aws_lambda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#aws_lambda Connection#aws_lambda}
  */
  readonly awsLambda?: ConnectionAwsLambda;
  /**
  * azure_faas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#azure_faas Connection#azure_faas}
  */
  readonly azureFaas?: ConnectionAzureFaas;
  /**
  * connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#connector Connection#connector}
  */
  readonly connector: ConnectionConnector;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#datadog Connection#datadog}
  */
  readonly datadog?: ConnectionDatadog;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#email Connection#email}
  */
  readonly email?: ConnectionEmail;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#github Connection#github}
  */
  readonly github?: ConnectionGithub;
  /**
  * google_faas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#google_faas Connection#google_faas}
  */
  readonly googleFaas?: ConnectionGoogleFaas;
  /**
  * jira block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#jira Connection#jira}
  */
  readonly jira?: ConnectionJira;
  /**
  * servicenow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#servicenow Connection#servicenow}
  */
  readonly servicenow?: ConnectionServicenow;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#slack Connection#slack}
  */
  readonly slack?: ConnectionSlack;
  /**
  * status_page_io block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#status_page_io Connection#status_page_io}
  */
  readonly statusPageIo?: ConnectionStatusPageIo;
  /**
  * sysdig block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#sysdig Connection#sysdig}
  */
  readonly sysdig?: ConnectionSysdig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#timeouts Connection#timeouts}
  */
  readonly timeouts?: ConnectionTimeouts;
  /**
  * topdesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#topdesk Connection#topdesk}
  */
  readonly topdesk?: ConnectionTopdesk;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#webhook Connection#webhook}
  */
  readonly webhook?: ConnectionWebhook;
  /**
  * zammad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#zammad Connection#zammad}
  */
  readonly zammad?: ConnectionZammad;
  /**
  * zapier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#zapier Connection#zapier}
  */
  readonly zapier?: ConnectionZapier;
  /**
  * zendesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#zendesk Connection#zendesk}
  */
  readonly zendesk?: ConnectionZendesk;
}
export interface ConnectionAlertSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function connectionAlertSourceToTerraform(struct?: ConnectionAlertSourceOutputReference | ConnectionAlertSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function connectionAlertSourceToHclTerraform(struct?: ConnectionAlertSourceOutputReference | ConnectionAlertSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionAlertSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionAlertSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionAlertSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ConnectionAutotask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#company_id Connection#company_id}
  */
  readonly companyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#issue_type Connection#issue_type}
  */
  readonly issueType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#queue_id Connection#queue_id}
  */
  readonly queueId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#ticket_category Connection#ticket_category}
  */
  readonly ticketCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#ticket_type Connection#ticket_type}
  */
  readonly ticketType?: string;
}

export function connectionAutotaskToTerraform(struct?: ConnectionAutotaskOutputReference | ConnectionAutotask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company_id: cdktf.stringToTerraform(struct!.companyId),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    queue_id: cdktf.numberToTerraform(struct!.queueId),
    ticket_category: cdktf.stringToTerraform(struct!.ticketCategory),
    ticket_type: cdktf.stringToTerraform(struct!.ticketType),
  }
}


export function connectionAutotaskToHclTerraform(struct?: ConnectionAutotaskOutputReference | ConnectionAutotask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company_id: {
      value: cdktf.stringToHclTerraform(struct!.companyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_id: {
      value: cdktf.numberToHclTerraform(struct!.queueId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ticket_category: {
      value: cdktf.stringToHclTerraform(struct!.ticketCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ticket_type: {
      value: cdktf.stringToHclTerraform(struct!.ticketType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionAutotaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionAutotask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._companyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyId = this._companyId;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    if (this._ticketCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketCategory = this._ticketCategory;
    }
    if (this._ticketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketType = this._ticketType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionAutotask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._companyId = undefined;
      this._issueType = undefined;
      this._queueId = undefined;
      this._ticketCategory = undefined;
      this._ticketType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._companyId = value.companyId;
      this._issueType = value.issueType;
      this._queueId = value.queueId;
      this._ticketCategory = value.ticketCategory;
      this._ticketType = value.ticketType;
    }
  }

  // company_id - computed: false, optional: true, required: false
  private _companyId?: string; 
  public get companyId() {
    return this.getStringAttribute('company_id');
  }
  public set companyId(value: string) {
    this._companyId = value;
  }
  public resetCompanyId() {
    this._companyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
  }

  // issue_type - computed: false, optional: true, required: false
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  public resetIssueType() {
    this._issueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // queue_id - computed: false, optional: false, required: true
  private _queueId?: number; 
  public get queueId() {
    return this.getNumberAttribute('queue_id');
  }
  public set queueId(value: number) {
    this._queueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // ticket_category - computed: false, optional: true, required: false
  private _ticketCategory?: string; 
  public get ticketCategory() {
    return this.getStringAttribute('ticket_category');
  }
  public set ticketCategory(value: string) {
    this._ticketCategory = value;
  }
  public resetTicketCategory() {
    this._ticketCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketCategoryInput() {
    return this._ticketCategory;
  }

  // ticket_type - computed: false, optional: true, required: false
  private _ticketType?: string; 
  public get ticketType() {
    return this.getStringAttribute('ticket_type');
  }
  public set ticketType(value: string) {
    this._ticketType = value;
  }
  public resetTicketType() {
    this._ticketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketTypeInput() {
    return this._ticketType;
  }
}
export interface ConnectionAwsLambda {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#body_template Connection#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#url Connection#url}
  */
  readonly url: string;
}

export function connectionAwsLambdaToTerraform(struct?: ConnectionAwsLambdaOutputReference | ConnectionAwsLambda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function connectionAwsLambdaToHclTerraform(struct?: ConnectionAwsLambdaOutputReference | ConnectionAwsLambda): any {
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionAwsLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionAwsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionAwsLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._url = value.url;
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
}
export interface ConnectionAzureFaas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#body_template Connection#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#url Connection#url}
  */
  readonly url: string;
}

export function connectionAzureFaasToTerraform(struct?: ConnectionAzureFaasOutputReference | ConnectionAzureFaas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function connectionAzureFaasToHclTerraform(struct?: ConnectionAzureFaasOutputReference | ConnectionAzureFaas): any {
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionAzureFaasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionAzureFaas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionAzureFaas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._url = value.url;
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
}
export interface ConnectionConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#type Connection#type}
  */
  readonly type: string;
}

export function connectionConnectorToTerraform(struct?: ConnectionConnectorOutputReference | ConnectionConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectionConnectorToHclTerraform(struct?: ConnectionConnectorOutputReference | ConnectionConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ConnectionDatadog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#priority Connection#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#site Connection#site}
  */
  readonly site?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#tags Connection#tags}
  */
  readonly tags?: string[];
}

export function connectionDatadogToTerraform(struct?: ConnectionDatadogOutputReference | ConnectionDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
    site: cdktf.stringToTerraform(struct!.site),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function connectionDatadogToHclTerraform(struct?: ConnectionDatadogOutputReference | ConnectionDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: cdktf.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
      this._site = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
      this._site = value.site;
      this._tags = value.tags;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface ConnectionEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#body_template Connection#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#recipients Connection#recipients}
  */
  readonly recipients: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#subject Connection#subject}
  */
  readonly subject: string;
}

export function connectionEmailToTerraform(struct?: ConnectionEmailOutputReference | ConnectionEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function connectionEmailToHclTerraform(struct?: ConnectionEmailOutputReference | ConnectionEmail): any {
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
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._recipients = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._recipients = value.recipients;
      this._subject = value.subject;
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

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ConnectionGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#labels Connection#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#owner Connection#owner}
  */
  readonly owner: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#repository Connection#repository}
  */
  readonly repository: string;
}

export function connectionGithubToTerraform(struct?: ConnectionGithubOutputReference | ConnectionGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    owner: cdktf.stringToTerraform(struct!.owner),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function connectionGithubToHclTerraform(struct?: ConnectionGithubOutputReference | ConnectionGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._owner = undefined;
      this._repository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._owner = value.owner;
      this._repository = value.repository;
    }
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

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
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
}
export interface ConnectionGoogleFaas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#body_template Connection#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#url Connection#url}
  */
  readonly url: string;
}

export function connectionGoogleFaasToTerraform(struct?: ConnectionGoogleFaasOutputReference | ConnectionGoogleFaas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function connectionGoogleFaasToHclTerraform(struct?: ConnectionGoogleFaasOutputReference | ConnectionGoogleFaas): any {
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionGoogleFaasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionGoogleFaas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionGoogleFaas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._url = value.url;
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
}
export interface ConnectionJira {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#body_template Connection#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#issue_type Connection#issue_type}
  */
  readonly issueType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#project Connection#project}
  */
  readonly project: string;
}

export function connectionJiraToTerraform(struct?: ConnectionJiraOutputReference | ConnectionJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    issue_type: cdktf.stringToTerraform(struct!.issueType),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function connectionJiraToHclTerraform(struct?: ConnectionJiraOutputReference | ConnectionJira): any {
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
    issue_type: {
      value: cdktf.stringToHclTerraform(struct!.issueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionJiraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionJira | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._issueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueType = this._issueType;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionJira | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._issueType = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._issueType = value.issueType;
      this._project = value.project;
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

  // issue_type - computed: false, optional: true, required: false
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  public resetIssueType() {
    this._issueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface ConnectionServicenow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#caller_id Connection#caller_id}
  */
  readonly callerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#impact Connection#impact}
  */
  readonly impact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#urgency Connection#urgency}
  */
  readonly urgency?: string;
}

export function connectionServicenowToTerraform(struct?: ConnectionServicenowOutputReference | ConnectionServicenow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caller_id: cdktf.stringToTerraform(struct!.callerId),
    impact: cdktf.stringToTerraform(struct!.impact),
    urgency: cdktf.stringToTerraform(struct!.urgency),
  }
}


export function connectionServicenowToHclTerraform(struct?: ConnectionServicenowOutputReference | ConnectionServicenow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caller_id: {
      value: cdktf.stringToHclTerraform(struct!.callerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    impact: {
      value: cdktf.stringToHclTerraform(struct!.impact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urgency: {
      value: cdktf.stringToHclTerraform(struct!.urgency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionServicenowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionServicenow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.callerId = this._callerId;
    }
    if (this._impact !== undefined) {
      hasAnyValues = true;
      internalValueResult.impact = this._impact;
    }
    if (this._urgency !== undefined) {
      hasAnyValues = true;
      internalValueResult.urgency = this._urgency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionServicenow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callerId = undefined;
      this._impact = undefined;
      this._urgency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callerId = value.callerId;
      this._impact = value.impact;
      this._urgency = value.urgency;
    }
  }

  // caller_id - computed: false, optional: true, required: false
  private _callerId?: string; 
  public get callerId() {
    return this.getStringAttribute('caller_id');
  }
  public set callerId(value: string) {
    this._callerId = value;
  }
  public resetCallerId() {
    this._callerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerIdInput() {
    return this._callerId;
  }

  // impact - computed: false, optional: true, required: false
  private _impact?: string; 
  public get impact() {
    return this.getStringAttribute('impact');
  }
  public set impact(value: string) {
    this._impact = value;
  }
  public resetImpact() {
    this._impact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactInput() {
    return this._impact;
  }

  // urgency - computed: false, optional: true, required: false
  private _urgency?: string; 
  public get urgency() {
    return this.getStringAttribute('urgency');
  }
  public set urgency(value: string) {
    this._urgency = value;
  }
  public resetUrgency() {
    this._urgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urgencyInput() {
    return this._urgency;
  }
}
export interface ConnectionSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#channel_id Connection#channel_id}
  */
  readonly channelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#channel_name Connection#channel_name}
  */
  readonly channelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#team_domain Connection#team_domain}
  */
  readonly teamDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#team_id Connection#team_id}
  */
  readonly teamId: string;
}

export function connectionSlackToTerraform(struct?: ConnectionSlackOutputReference | ConnectionSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    team_domain: cdktf.stringToTerraform(struct!.teamDomain),
    team_id: cdktf.stringToTerraform(struct!.teamId),
  }
}


export function connectionSlackToHclTerraform(struct?: ConnectionSlackOutputReference | ConnectionSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_name: {
      value: cdktf.stringToHclTerraform(struct!.channelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_domain: {
      value: cdktf.stringToHclTerraform(struct!.teamDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._channelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelName = this._channelName;
    }
    if (this._teamDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamDomain = this._teamDomain;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelId = undefined;
      this._channelName = undefined;
      this._teamDomain = undefined;
      this._teamId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelId = value.channelId;
      this._channelName = value.channelName;
      this._teamDomain = value.teamDomain;
      this._teamId = value.teamId;
    }
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // channel_name - computed: false, optional: true, required: false
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  public resetChannelName() {
    this._channelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName;
  }

  // team_domain - computed: false, optional: true, required: false
  private _teamDomain?: string; 
  public get teamDomain() {
    return this.getStringAttribute('team_domain');
  }
  public set teamDomain(value: string) {
    this._teamDomain = value;
  }
  public resetTeamDomain() {
    this._teamDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamDomainInput() {
    return this._teamDomain;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }
}
export interface ConnectionStatusPageIo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#page_id Connection#page_id}
  */
  readonly pageId?: string;
}

export function connectionStatusPageIoToTerraform(struct?: ConnectionStatusPageIoOutputReference | ConnectionStatusPageIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    page_id: cdktf.stringToTerraform(struct!.pageId),
  }
}


export function connectionStatusPageIoToHclTerraform(struct?: ConnectionStatusPageIoOutputReference | ConnectionStatusPageIo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    page_id: {
      value: cdktf.stringToHclTerraform(struct!.pageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionStatusPageIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionStatusPageIo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageId = this._pageId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionStatusPageIo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pageId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pageId = value.pageId;
    }
  }

  // page_id - computed: false, optional: true, required: false
  private _pageId?: string; 
  public get pageId() {
    return this.getStringAttribute('page_id');
  }
  public set pageId(value: string) {
    this._pageId = value;
  }
  public resetPageId() {
    this._pageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
  }
}
export interface ConnectionSysdig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#event_filter Connection#event_filter}
  */
  readonly eventFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#tags Connection#tags}
  */
  readonly tags?: string[];
}

export function connectionSysdigToTerraform(struct?: ConnectionSysdigOutputReference | ConnectionSysdig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_filter: cdktf.stringToTerraform(struct!.eventFilter),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function connectionSysdigToHclTerraform(struct?: ConnectionSysdigOutputReference | ConnectionSysdig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_filter: {
      value: cdktf.stringToHclTerraform(struct!.eventFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionSysdigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSysdig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventFilter = this._eventFilter;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionSysdig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventFilter = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventFilter = value.eventFilter;
      this._tags = value.tags;
    }
  }

  // event_filter - computed: false, optional: true, required: false
  private _eventFilter?: string; 
  public get eventFilter() {
    return this.getStringAttribute('event_filter');
  }
  public set eventFilter(value: string) {
    this._eventFilter = value;
  }
  public resetEventFilter() {
    this._eventFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventFilterInput() {
    return this._eventFilter;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface ConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#create Connection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#delete Connection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#read Connection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#update Connection#update}
  */
  readonly update?: string;
}

export function connectionTimeoutsToTerraform(struct?: ConnectionTimeouts | cdktf.IResolvable): any {
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


export function connectionTimeoutsToHclTerraform(struct?: ConnectionTimeouts | cdktf.IResolvable): any {
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

export class ConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConnectionTimeouts | cdktf.IResolvable | undefined) {
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
export interface ConnectionTopdesk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#status Connection#status}
  */
  readonly status?: string;
}

export function connectionTopdeskToTerraform(struct?: ConnectionTopdeskOutputReference | ConnectionTopdesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function connectionTopdeskToHclTerraform(struct?: ConnectionTopdeskOutputReference | ConnectionTopdesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionTopdeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionTopdesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionTopdesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._status = value.status;
    }
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ConnectionWebhook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#body_template Connection#body_template}
  */
  readonly bodyTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#url Connection#url}
  */
  readonly url: string;
}

export function connectionWebhookToTerraform(struct?: ConnectionWebhookOutputReference | ConnectionWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_template: cdktf.stringToTerraform(struct!.bodyTemplate),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function connectionWebhookToHclTerraform(struct?: ConnectionWebhookOutputReference | ConnectionWebhook): any {
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTemplate = this._bodyTemplate;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTemplate = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTemplate = value.bodyTemplate;
      this._url = value.url;
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
}
export interface ConnectionZammad {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#email Connection#email}
  */
  readonly email?: string;
}

export function connectionZammadToTerraform(struct?: ConnectionZammadOutputReference | ConnectionZammad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function connectionZammadToHclTerraform(struct?: ConnectionZammadOutputReference | ConnectionZammad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionZammadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionZammad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionZammad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface ConnectionZapier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#url Connection#url}
  */
  readonly url: string;
}

export function connectionZapierToTerraform(struct?: ConnectionZapierOutputReference | ConnectionZapier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function connectionZapierToHclTerraform(struct?: ConnectionZapierOutputReference | ConnectionZapier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionZapierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionZapier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionZapier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
}
export interface ConnectionZendesk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#priority Connection#priority}
  */
  readonly priority?: string;
}

export function connectionZendeskToTerraform(struct?: ConnectionZendeskOutputReference | ConnectionZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function connectionZendeskToHclTerraform(struct?: ConnectionZendeskOutputReference | ConnectionZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionZendeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
    }
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection ilert_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ilert_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ilert_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/connection ilert_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'ilert_connection',
      terraformGeneratorMetadata: {
        providerName: 'ilert',
        providerVersion: '2.14.3',
        providerVersionConstraint: '2.14.3'
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
    this._triggerMode = config.triggerMode;
    this._triggerTypes = config.triggerTypes;
    this._alertSource.internalValue = config.alertSource;
    this._autotask.internalValue = config.autotask;
    this._awsLambda.internalValue = config.awsLambda;
    this._azureFaas.internalValue = config.azureFaas;
    this._connector.internalValue = config.connector;
    this._datadog.internalValue = config.datadog;
    this._email.internalValue = config.email;
    this._github.internalValue = config.github;
    this._googleFaas.internalValue = config.googleFaas;
    this._jira.internalValue = config.jira;
    this._servicenow.internalValue = config.servicenow;
    this._slack.internalValue = config.slack;
    this._statusPageIo.internalValue = config.statusPageIo;
    this._sysdig.internalValue = config.sysdig;
    this._timeouts.internalValue = config.timeouts;
    this._topdesk.internalValue = config.topdesk;
    this._webhook.internalValue = config.webhook;
    this._zammad.internalValue = config.zammad;
    this._zapier.internalValue = config.zapier;
    this._zendesk.internalValue = config.zendesk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // trigger_mode - computed: false, optional: true, required: false
  private _triggerMode?: string; 
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
  public set triggerMode(value: string) {
    this._triggerMode = value;
  }
  public resetTriggerMode() {
    this._triggerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerModeInput() {
    return this._triggerMode;
  }

  // trigger_types - computed: false, optional: true, required: false
  private _triggerTypes?: string[]; 
  public get triggerTypes() {
    return this.getListAttribute('trigger_types');
  }
  public set triggerTypes(value: string[]) {
    this._triggerTypes = value;
  }
  public resetTriggerTypes() {
    this._triggerTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypesInput() {
    return this._triggerTypes;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // alert_source - computed: false, optional: false, required: true
  private _alertSource = new ConnectionAlertSourceOutputReference(this, "alert_source");
  public get alertSource() {
    return this._alertSource;
  }
  public putAlertSource(value: ConnectionAlertSource) {
    this._alertSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourceInput() {
    return this._alertSource.internalValue;
  }

  // autotask - computed: false, optional: true, required: false
  private _autotask = new ConnectionAutotaskOutputReference(this, "autotask");
  public get autotask() {
    return this._autotask;
  }
  public putAutotask(value: ConnectionAutotask) {
    this._autotask.internalValue = value;
  }
  public resetAutotask() {
    this._autotask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotaskInput() {
    return this._autotask.internalValue;
  }

  // aws_lambda - computed: false, optional: true, required: false
  private _awsLambda = new ConnectionAwsLambdaOutputReference(this, "aws_lambda");
  public get awsLambda() {
    return this._awsLambda;
  }
  public putAwsLambda(value: ConnectionAwsLambda) {
    this._awsLambda.internalValue = value;
  }
  public resetAwsLambda() {
    this._awsLambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLambdaInput() {
    return this._awsLambda.internalValue;
  }

  // azure_faas - computed: false, optional: true, required: false
  private _azureFaas = new ConnectionAzureFaasOutputReference(this, "azure_faas");
  public get azureFaas() {
    return this._azureFaas;
  }
  public putAzureFaas(value: ConnectionAzureFaas) {
    this._azureFaas.internalValue = value;
  }
  public resetAzureFaas() {
    this._azureFaas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFaasInput() {
    return this._azureFaas.internalValue;
  }

  // connector - computed: false, optional: false, required: true
  private _connector = new ConnectionConnectorOutputReference(this, "connector");
  public get connector() {
    return this._connector;
  }
  public putConnector(value: ConnectionConnector) {
    this._connector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new ConnectionDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: ConnectionDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new ConnectionEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: ConnectionEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new ConnectionGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: ConnectionGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // google_faas - computed: false, optional: true, required: false
  private _googleFaas = new ConnectionGoogleFaasOutputReference(this, "google_faas");
  public get googleFaas() {
    return this._googleFaas;
  }
  public putGoogleFaas(value: ConnectionGoogleFaas) {
    this._googleFaas.internalValue = value;
  }
  public resetGoogleFaas() {
    this._googleFaas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleFaasInput() {
    return this._googleFaas.internalValue;
  }

  // jira - computed: false, optional: true, required: false
  private _jira = new ConnectionJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: ConnectionJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }

  // servicenow - computed: false, optional: true, required: false
  private _servicenow = new ConnectionServicenowOutputReference(this, "servicenow");
  public get servicenow() {
    return this._servicenow;
  }
  public putServicenow(value: ConnectionServicenow) {
    this._servicenow.internalValue = value;
  }
  public resetServicenow() {
    this._servicenow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowInput() {
    return this._servicenow.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new ConnectionSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: ConnectionSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // status_page_io - computed: false, optional: true, required: false
  private _statusPageIo = new ConnectionStatusPageIoOutputReference(this, "status_page_io");
  public get statusPageIo() {
    return this._statusPageIo;
  }
  public putStatusPageIo(value: ConnectionStatusPageIo) {
    this._statusPageIo.internalValue = value;
  }
  public resetStatusPageIo() {
    this._statusPageIo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusPageIoInput() {
    return this._statusPageIo.internalValue;
  }

  // sysdig - computed: false, optional: true, required: false
  private _sysdig = new ConnectionSysdigOutputReference(this, "sysdig");
  public get sysdig() {
    return this._sysdig;
  }
  public putSysdig(value: ConnectionSysdig) {
    this._sysdig.internalValue = value;
  }
  public resetSysdig() {
    this._sysdig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigInput() {
    return this._sysdig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topdesk - computed: false, optional: true, required: false
  private _topdesk = new ConnectionTopdeskOutputReference(this, "topdesk");
  public get topdesk() {
    return this._topdesk;
  }
  public putTopdesk(value: ConnectionTopdesk) {
    this._topdesk.internalValue = value;
  }
  public resetTopdesk() {
    this._topdesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topdeskInput() {
    return this._topdesk.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new ConnectionWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: ConnectionWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }

  // zammad - computed: false, optional: true, required: false
  private _zammad = new ConnectionZammadOutputReference(this, "zammad");
  public get zammad() {
    return this._zammad;
  }
  public putZammad(value: ConnectionZammad) {
    this._zammad.internalValue = value;
  }
  public resetZammad() {
    this._zammad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zammadInput() {
    return this._zammad.internalValue;
  }

  // zapier - computed: false, optional: true, required: false
  private _zapier = new ConnectionZapierOutputReference(this, "zapier");
  public get zapier() {
    return this._zapier;
  }
  public putZapier(value: ConnectionZapier) {
    this._zapier.internalValue = value;
  }
  public resetZapier() {
    this._zapier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zapierInput() {
    return this._zapier.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new ConnectionZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: ConnectionZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      trigger_mode: cdktf.stringToTerraform(this._triggerMode),
      trigger_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerTypes),
      alert_source: connectionAlertSourceToTerraform(this._alertSource.internalValue),
      autotask: connectionAutotaskToTerraform(this._autotask.internalValue),
      aws_lambda: connectionAwsLambdaToTerraform(this._awsLambda.internalValue),
      azure_faas: connectionAzureFaasToTerraform(this._azureFaas.internalValue),
      connector: connectionConnectorToTerraform(this._connector.internalValue),
      datadog: connectionDatadogToTerraform(this._datadog.internalValue),
      email: connectionEmailToTerraform(this._email.internalValue),
      github: connectionGithubToTerraform(this._github.internalValue),
      google_faas: connectionGoogleFaasToTerraform(this._googleFaas.internalValue),
      jira: connectionJiraToTerraform(this._jira.internalValue),
      servicenow: connectionServicenowToTerraform(this._servicenow.internalValue),
      slack: connectionSlackToTerraform(this._slack.internalValue),
      status_page_io: connectionStatusPageIoToTerraform(this._statusPageIo.internalValue),
      sysdig: connectionSysdigToTerraform(this._sysdig.internalValue),
      timeouts: connectionTimeoutsToTerraform(this._timeouts.internalValue),
      topdesk: connectionTopdeskToTerraform(this._topdesk.internalValue),
      webhook: connectionWebhookToTerraform(this._webhook.internalValue),
      zammad: connectionZammadToTerraform(this._zammad.internalValue),
      zapier: connectionZapierToTerraform(this._zapier.internalValue),
      zendesk: connectionZendeskToTerraform(this._zendesk.internalValue),
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
      trigger_mode: {
        value: cdktf.stringToHclTerraform(this._triggerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggerTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alert_source: {
        value: connectionAlertSourceToHclTerraform(this._alertSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionAlertSourceList",
      },
      autotask: {
        value: connectionAutotaskToHclTerraform(this._autotask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionAutotaskList",
      },
      aws_lambda: {
        value: connectionAwsLambdaToHclTerraform(this._awsLambda.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionAwsLambdaList",
      },
      azure_faas: {
        value: connectionAzureFaasToHclTerraform(this._azureFaas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionAzureFaasList",
      },
      connector: {
        value: connectionConnectorToHclTerraform(this._connector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionConnectorList",
      },
      datadog: {
        value: connectionDatadogToHclTerraform(this._datadog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionDatadogList",
      },
      email: {
        value: connectionEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionEmailList",
      },
      github: {
        value: connectionGithubToHclTerraform(this._github.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionGithubList",
      },
      google_faas: {
        value: connectionGoogleFaasToHclTerraform(this._googleFaas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionGoogleFaasList",
      },
      jira: {
        value: connectionJiraToHclTerraform(this._jira.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionJiraList",
      },
      servicenow: {
        value: connectionServicenowToHclTerraform(this._servicenow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionServicenowList",
      },
      slack: {
        value: connectionSlackToHclTerraform(this._slack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionSlackList",
      },
      status_page_io: {
        value: connectionStatusPageIoToHclTerraform(this._statusPageIo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionStatusPageIoList",
      },
      sysdig: {
        value: connectionSysdigToHclTerraform(this._sysdig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionSysdigList",
      },
      timeouts: {
        value: connectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionTimeouts",
      },
      topdesk: {
        value: connectionTopdeskToHclTerraform(this._topdesk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionTopdeskList",
      },
      webhook: {
        value: connectionWebhookToHclTerraform(this._webhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionWebhookList",
      },
      zammad: {
        value: connectionZammadToHclTerraform(this._zammad.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionZammadList",
      },
      zapier: {
        value: connectionZapierToHclTerraform(this._zapier.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionZapierList",
      },
      zendesk: {
        value: connectionZendeskToHclTerraform(this._zendesk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionZendeskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
