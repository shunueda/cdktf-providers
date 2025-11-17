// https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email notification of the approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#approval_email_notification PortAction#approval_email_notification}
  */
  readonly approvalEmailNotification?: PortActionApprovalEmailNotification;
  /**
  * The webhook notification of the approval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#approval_webhook_notification PortAction#approval_webhook_notification}
  */
  readonly approvalWebhookNotification?: PortActionApprovalWebhookNotification;
  /**
  * Automation trigger for the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#automation_trigger PortAction#automation_trigger}
  */
  readonly automationTrigger?: PortActionAutomationTrigger;
  /**
  * Azure DevOps invocation method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#azure_method PortAction#azure_method}
  */
  readonly azureMethod?: PortActionAzureMethod;
  /**
  * The blueprint identifier the action relates to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint PortAction#blueprint}
  */
  readonly blueprint?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#description PortAction#description}
  */
  readonly description?: string;
  /**
  * GitHub invocation method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#github_method PortAction#github_method}
  */
  readonly githubMethod?: PortActionGithubMethod;
  /**
  * Gitlab invocation method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#gitlab_method PortAction#gitlab_method}
  */
  readonly gitlabMethod?: PortActionGitlabMethod;
  /**
  * Icon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#icon PortAction#icon}
  */
  readonly icon?: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#identifier PortAction#identifier}
  */
  readonly identifier: string;
  /**
  * Whether members can view the runs of this action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#is_view_run_access PortAction#is_view_run_access}
  */
  readonly isViewRunAccess?: boolean | cdktf.IResolvable;
  /**
  * Kafka invocation method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#kafka_method PortAction#kafka_method}
  */
  readonly kafkaMethod?: PortActionKafkaMethod;
  /**
  * Publish action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#publish PortAction#publish}
  */
  readonly publish?: boolean | cdktf.IResolvable;
  /**
  * Require approval before invoking the action. Can be one of "true", "false", "ANY" or "ALL"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#required_approval PortAction#required_approval}
  */
  readonly requiredApproval?: string;
  /**
  * Self service trigger for the action. Note: you can define only one of `order_properties` and `steps`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#self_service_trigger PortAction#self_service_trigger}
  */
  readonly selfServiceTrigger?: PortActionSelfServiceTrigger;
  /**
  * Title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#title PortAction#title}
  */
  readonly title?: string;
  /**
  * Upsert Entity invocation method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#upsert_entity_method PortAction#upsert_entity_method}
  */
  readonly upsertEntityMethod?: PortActionUpsertEntityMethod;
  /**
  * Webhook invocation method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#webhook_method PortAction#webhook_method}
  */
  readonly webhookMethod?: PortActionWebhookMethod;
}
export interface PortActionApprovalEmailNotification {
}

export function portActionApprovalEmailNotificationToTerraform(struct?: PortActionApprovalEmailNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portActionApprovalEmailNotificationToHclTerraform(struct?: PortActionApprovalEmailNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortActionApprovalEmailNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionApprovalEmailNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionApprovalEmailNotification | cdktf.IResolvable | undefined) {
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
export interface PortActionApprovalWebhookNotification {
  /**
  * The format to invoke the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#format PortAction#format}
  */
  readonly format?: string;
  /**
  * The URL to invoke the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#url PortAction#url}
  */
  readonly url: string;
}

export function portActionApprovalWebhookNotificationToTerraform(struct?: PortActionApprovalWebhookNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function portActionApprovalWebhookNotificationToHclTerraform(struct?: PortActionApprovalWebhookNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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

export class PortActionApprovalWebhookNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionApprovalWebhookNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionApprovalWebhookNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._url = value.url;
    }
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
export interface PortActionAutomationTriggerAnyEntityChangeEvent {
  /**
  * The blueprint identifier of the changed entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint_identifier PortAction#blueprint_identifier}
  */
  readonly blueprintIdentifier: string;
}

export function portActionAutomationTriggerAnyEntityChangeEventToTerraform(struct?: PortActionAutomationTriggerAnyEntityChangeEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint_identifier: cdktf.stringToTerraform(struct!.blueprintIdentifier),
  }
}


export function portActionAutomationTriggerAnyEntityChangeEventToHclTerraform(struct?: PortActionAutomationTriggerAnyEntityChangeEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint_identifier: {
      value: cdktf.stringToHclTerraform(struct!.blueprintIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerAnyEntityChangeEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTriggerAnyEntityChangeEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintIdentifier = this._blueprintIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTriggerAnyEntityChangeEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = value.blueprintIdentifier;
    }
  }

  // blueprint_identifier - computed: false, optional: false, required: true
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }
}
export interface PortActionAutomationTriggerAnyRunChangeEvent {
  /**
  * The action identifier of the changed run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#action_identifier PortAction#action_identifier}
  */
  readonly actionIdentifier: string;
}

export function portActionAutomationTriggerAnyRunChangeEventToTerraform(struct?: PortActionAutomationTriggerAnyRunChangeEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_identifier: cdktf.stringToTerraform(struct!.actionIdentifier),
  }
}


export function portActionAutomationTriggerAnyRunChangeEventToHclTerraform(struct?: PortActionAutomationTriggerAnyRunChangeEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_identifier: {
      value: cdktf.stringToHclTerraform(struct!.actionIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerAnyRunChangeEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTriggerAnyRunChangeEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionIdentifier = this._actionIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTriggerAnyRunChangeEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionIdentifier = value.actionIdentifier;
    }
  }

  // action_identifier - computed: false, optional: false, required: true
  private _actionIdentifier?: string; 
  public get actionIdentifier() {
    return this.getStringAttribute('action_identifier');
  }
  public set actionIdentifier(value: string) {
    this._actionIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdentifierInput() {
    return this._actionIdentifier;
  }
}
export interface PortActionAutomationTriggerEntityCreatedEvent {
  /**
  * The blueprint identifier of the created entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint_identifier PortAction#blueprint_identifier}
  */
  readonly blueprintIdentifier: string;
}

export function portActionAutomationTriggerEntityCreatedEventToTerraform(struct?: PortActionAutomationTriggerEntityCreatedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint_identifier: cdktf.stringToTerraform(struct!.blueprintIdentifier),
  }
}


export function portActionAutomationTriggerEntityCreatedEventToHclTerraform(struct?: PortActionAutomationTriggerEntityCreatedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint_identifier: {
      value: cdktf.stringToHclTerraform(struct!.blueprintIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerEntityCreatedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTriggerEntityCreatedEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintIdentifier = this._blueprintIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTriggerEntityCreatedEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = value.blueprintIdentifier;
    }
  }

  // blueprint_identifier - computed: false, optional: false, required: true
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }
}
export interface PortActionAutomationTriggerEntityDeletedEvent {
  /**
  * The blueprint identifier of the deleted entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint_identifier PortAction#blueprint_identifier}
  */
  readonly blueprintIdentifier: string;
}

export function portActionAutomationTriggerEntityDeletedEventToTerraform(struct?: PortActionAutomationTriggerEntityDeletedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint_identifier: cdktf.stringToTerraform(struct!.blueprintIdentifier),
  }
}


export function portActionAutomationTriggerEntityDeletedEventToHclTerraform(struct?: PortActionAutomationTriggerEntityDeletedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint_identifier: {
      value: cdktf.stringToHclTerraform(struct!.blueprintIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerEntityDeletedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTriggerEntityDeletedEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintIdentifier = this._blueprintIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTriggerEntityDeletedEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = value.blueprintIdentifier;
    }
  }

  // blueprint_identifier - computed: false, optional: false, required: true
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }
}
export interface PortActionAutomationTriggerEntityUpdatedEvent {
  /**
  * The blueprint identifier of the updated entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint_identifier PortAction#blueprint_identifier}
  */
  readonly blueprintIdentifier: string;
}

export function portActionAutomationTriggerEntityUpdatedEventToTerraform(struct?: PortActionAutomationTriggerEntityUpdatedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint_identifier: cdktf.stringToTerraform(struct!.blueprintIdentifier),
  }
}


export function portActionAutomationTriggerEntityUpdatedEventToHclTerraform(struct?: PortActionAutomationTriggerEntityUpdatedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint_identifier: {
      value: cdktf.stringToHclTerraform(struct!.blueprintIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerEntityUpdatedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTriggerEntityUpdatedEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintIdentifier = this._blueprintIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTriggerEntityUpdatedEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = value.blueprintIdentifier;
    }
  }

  // blueprint_identifier - computed: false, optional: false, required: true
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }
}
export interface PortActionAutomationTriggerJqCondition {
  /**
  * The combinator of the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#combinator PortAction#combinator}
  */
  readonly combinator?: string;
  /**
  * The jq expressions of the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#expressions PortAction#expressions}
  */
  readonly expressions: string[];
}

export function portActionAutomationTriggerJqConditionToTerraform(struct?: PortActionAutomationTriggerJqCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combinator: cdktf.stringToTerraform(struct!.combinator),
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function portActionAutomationTriggerJqConditionToHclTerraform(struct?: PortActionAutomationTriggerJqCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combinator: {
      value: cdktf.stringToHclTerraform(struct!.combinator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerJqConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTriggerJqCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combinator !== undefined) {
      hasAnyValues = true;
      internalValueResult.combinator = this._combinator;
    }
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTriggerJqCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._combinator = undefined;
      this._expressions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._combinator = value.combinator;
      this._expressions = value.expressions;
    }
  }

  // combinator - computed: true, optional: true, required: false
  private _combinator?: string; 
  public get combinator() {
    return this.getStringAttribute('combinator');
  }
  public set combinator(value: string) {
    this._combinator = value;
  }
  public resetCombinator() {
    this._combinator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combinatorInput() {
    return this._combinator;
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface PortActionAutomationTriggerRunCreatedEvent {
  /**
  * The action identifier of the created run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#action_identifier PortAction#action_identifier}
  */
  readonly actionIdentifier: string;
}

export function portActionAutomationTriggerRunCreatedEventToTerraform(struct?: PortActionAutomationTriggerRunCreatedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_identifier: cdktf.stringToTerraform(struct!.actionIdentifier),
  }
}


export function portActionAutomationTriggerRunCreatedEventToHclTerraform(struct?: PortActionAutomationTriggerRunCreatedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_identifier: {
      value: cdktf.stringToHclTerraform(struct!.actionIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerRunCreatedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTriggerRunCreatedEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionIdentifier = this._actionIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTriggerRunCreatedEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionIdentifier = value.actionIdentifier;
    }
  }

  // action_identifier - computed: false, optional: false, required: true
  private _actionIdentifier?: string; 
  public get actionIdentifier() {
    return this.getStringAttribute('action_identifier');
  }
  public set actionIdentifier(value: string) {
    this._actionIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdentifierInput() {
    return this._actionIdentifier;
  }
}
export interface PortActionAutomationTriggerRunUpdatedEvent {
  /**
  * The action identifier of the updated run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#action_identifier PortAction#action_identifier}
  */
  readonly actionIdentifier: string;
}

export function portActionAutomationTriggerRunUpdatedEventToTerraform(struct?: PortActionAutomationTriggerRunUpdatedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_identifier: cdktf.stringToTerraform(struct!.actionIdentifier),
  }
}


export function portActionAutomationTriggerRunUpdatedEventToHclTerraform(struct?: PortActionAutomationTriggerRunUpdatedEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_identifier: {
      value: cdktf.stringToHclTerraform(struct!.actionIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerRunUpdatedEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTriggerRunUpdatedEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionIdentifier = this._actionIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTriggerRunUpdatedEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionIdentifier = value.actionIdentifier;
    }
  }

  // action_identifier - computed: false, optional: false, required: true
  private _actionIdentifier?: string; 
  public get actionIdentifier() {
    return this.getStringAttribute('action_identifier');
  }
  public set actionIdentifier(value: string) {
    this._actionIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdentifierInput() {
    return this._actionIdentifier;
  }
}
export interface PortActionAutomationTriggerTimerPropertyExpiredEvent {
  /**
  * The blueprint identifier of the expired timer property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint_identifier PortAction#blueprint_identifier}
  */
  readonly blueprintIdentifier: string;
  /**
  * The property identifier of the expired timer property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#property_identifier PortAction#property_identifier}
  */
  readonly propertyIdentifier: string;
}

export function portActionAutomationTriggerTimerPropertyExpiredEventToTerraform(struct?: PortActionAutomationTriggerTimerPropertyExpiredEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint_identifier: cdktf.stringToTerraform(struct!.blueprintIdentifier),
    property_identifier: cdktf.stringToTerraform(struct!.propertyIdentifier),
  }
}


export function portActionAutomationTriggerTimerPropertyExpiredEventToHclTerraform(struct?: PortActionAutomationTriggerTimerPropertyExpiredEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint_identifier: {
      value: cdktf.stringToHclTerraform(struct!.blueprintIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_identifier: {
      value: cdktf.stringToHclTerraform(struct!.propertyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerTimerPropertyExpiredEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTriggerTimerPropertyExpiredEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintIdentifier = this._blueprintIdentifier;
    }
    if (this._propertyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyIdentifier = this._propertyIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTriggerTimerPropertyExpiredEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = undefined;
      this._propertyIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = value.blueprintIdentifier;
      this._propertyIdentifier = value.propertyIdentifier;
    }
  }

  // blueprint_identifier - computed: false, optional: false, required: true
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }

  // property_identifier - computed: false, optional: false, required: true
  private _propertyIdentifier?: string; 
  public get propertyIdentifier() {
    return this.getStringAttribute('property_identifier');
  }
  public set propertyIdentifier(value: string) {
    this._propertyIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyIdentifierInput() {
    return this._propertyIdentifier;
  }
}
export interface PortActionAutomationTrigger {
  /**
  * Any entity change event trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#any_entity_change_event PortAction#any_entity_change_event}
  */
  readonly anyEntityChangeEvent?: PortActionAutomationTriggerAnyEntityChangeEvent;
  /**
  * Any run change event trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#any_run_change_event PortAction#any_run_change_event}
  */
  readonly anyRunChangeEvent?: PortActionAutomationTriggerAnyRunChangeEvent;
  /**
  * Entity created event trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#entity_created_event PortAction#entity_created_event}
  */
  readonly entityCreatedEvent?: PortActionAutomationTriggerEntityCreatedEvent;
  /**
  * Entity deleted event trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#entity_deleted_event PortAction#entity_deleted_event}
  */
  readonly entityDeletedEvent?: PortActionAutomationTriggerEntityDeletedEvent;
  /**
  * Entity updated event trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#entity_updated_event PortAction#entity_updated_event}
  */
  readonly entityUpdatedEvent?: PortActionAutomationTriggerEntityUpdatedEvent;
  /**
  * JQ condition for automation trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#jq_condition PortAction#jq_condition}
  */
  readonly jqCondition?: PortActionAutomationTriggerJqCondition;
  /**
  * Run created event trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#run_created_event PortAction#run_created_event}
  */
  readonly runCreatedEvent?: PortActionAutomationTriggerRunCreatedEvent;
  /**
  * Run updated event trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#run_updated_event PortAction#run_updated_event}
  */
  readonly runUpdatedEvent?: PortActionAutomationTriggerRunUpdatedEvent;
  /**
  * Timer property expired event trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#timer_property_expired_event PortAction#timer_property_expired_event}
  */
  readonly timerPropertyExpiredEvent?: PortActionAutomationTriggerTimerPropertyExpiredEvent;
}

export function portActionAutomationTriggerToTerraform(struct?: PortActionAutomationTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_entity_change_event: portActionAutomationTriggerAnyEntityChangeEventToTerraform(struct!.anyEntityChangeEvent),
    any_run_change_event: portActionAutomationTriggerAnyRunChangeEventToTerraform(struct!.anyRunChangeEvent),
    entity_created_event: portActionAutomationTriggerEntityCreatedEventToTerraform(struct!.entityCreatedEvent),
    entity_deleted_event: portActionAutomationTriggerEntityDeletedEventToTerraform(struct!.entityDeletedEvent),
    entity_updated_event: portActionAutomationTriggerEntityUpdatedEventToTerraform(struct!.entityUpdatedEvent),
    jq_condition: portActionAutomationTriggerJqConditionToTerraform(struct!.jqCondition),
    run_created_event: portActionAutomationTriggerRunCreatedEventToTerraform(struct!.runCreatedEvent),
    run_updated_event: portActionAutomationTriggerRunUpdatedEventToTerraform(struct!.runUpdatedEvent),
    timer_property_expired_event: portActionAutomationTriggerTimerPropertyExpiredEventToTerraform(struct!.timerPropertyExpiredEvent),
  }
}


export function portActionAutomationTriggerToHclTerraform(struct?: PortActionAutomationTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_entity_change_event: {
      value: portActionAutomationTriggerAnyEntityChangeEventToHclTerraform(struct!.anyEntityChangeEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionAutomationTriggerAnyEntityChangeEvent",
    },
    any_run_change_event: {
      value: portActionAutomationTriggerAnyRunChangeEventToHclTerraform(struct!.anyRunChangeEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionAutomationTriggerAnyRunChangeEvent",
    },
    entity_created_event: {
      value: portActionAutomationTriggerEntityCreatedEventToHclTerraform(struct!.entityCreatedEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionAutomationTriggerEntityCreatedEvent",
    },
    entity_deleted_event: {
      value: portActionAutomationTriggerEntityDeletedEventToHclTerraform(struct!.entityDeletedEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionAutomationTriggerEntityDeletedEvent",
    },
    entity_updated_event: {
      value: portActionAutomationTriggerEntityUpdatedEventToHclTerraform(struct!.entityUpdatedEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionAutomationTriggerEntityUpdatedEvent",
    },
    jq_condition: {
      value: portActionAutomationTriggerJqConditionToHclTerraform(struct!.jqCondition),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionAutomationTriggerJqCondition",
    },
    run_created_event: {
      value: portActionAutomationTriggerRunCreatedEventToHclTerraform(struct!.runCreatedEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionAutomationTriggerRunCreatedEvent",
    },
    run_updated_event: {
      value: portActionAutomationTriggerRunUpdatedEventToHclTerraform(struct!.runUpdatedEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionAutomationTriggerRunUpdatedEvent",
    },
    timer_property_expired_event: {
      value: portActionAutomationTriggerTimerPropertyExpiredEventToHclTerraform(struct!.timerPropertyExpiredEvent),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionAutomationTriggerTimerPropertyExpiredEvent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAutomationTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAutomationTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyEntityChangeEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyEntityChangeEvent = this._anyEntityChangeEvent?.internalValue;
    }
    if (this._anyRunChangeEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyRunChangeEvent = this._anyRunChangeEvent?.internalValue;
    }
    if (this._entityCreatedEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityCreatedEvent = this._entityCreatedEvent?.internalValue;
    }
    if (this._entityDeletedEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityDeletedEvent = this._entityDeletedEvent?.internalValue;
    }
    if (this._entityUpdatedEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityUpdatedEvent = this._entityUpdatedEvent?.internalValue;
    }
    if (this._jqCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqCondition = this._jqCondition?.internalValue;
    }
    if (this._runCreatedEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runCreatedEvent = this._runCreatedEvent?.internalValue;
    }
    if (this._runUpdatedEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runUpdatedEvent = this._runUpdatedEvent?.internalValue;
    }
    if (this._timerPropertyExpiredEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerPropertyExpiredEvent = this._timerPropertyExpiredEvent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAutomationTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyEntityChangeEvent.internalValue = undefined;
      this._anyRunChangeEvent.internalValue = undefined;
      this._entityCreatedEvent.internalValue = undefined;
      this._entityDeletedEvent.internalValue = undefined;
      this._entityUpdatedEvent.internalValue = undefined;
      this._jqCondition.internalValue = undefined;
      this._runCreatedEvent.internalValue = undefined;
      this._runUpdatedEvent.internalValue = undefined;
      this._timerPropertyExpiredEvent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyEntityChangeEvent.internalValue = value.anyEntityChangeEvent;
      this._anyRunChangeEvent.internalValue = value.anyRunChangeEvent;
      this._entityCreatedEvent.internalValue = value.entityCreatedEvent;
      this._entityDeletedEvent.internalValue = value.entityDeletedEvent;
      this._entityUpdatedEvent.internalValue = value.entityUpdatedEvent;
      this._jqCondition.internalValue = value.jqCondition;
      this._runCreatedEvent.internalValue = value.runCreatedEvent;
      this._runUpdatedEvent.internalValue = value.runUpdatedEvent;
      this._timerPropertyExpiredEvent.internalValue = value.timerPropertyExpiredEvent;
    }
  }

  // any_entity_change_event - computed: false, optional: true, required: false
  private _anyEntityChangeEvent = new PortActionAutomationTriggerAnyEntityChangeEventOutputReference(this, "any_entity_change_event");
  public get anyEntityChangeEvent() {
    return this._anyEntityChangeEvent;
  }
  public putAnyEntityChangeEvent(value: PortActionAutomationTriggerAnyEntityChangeEvent) {
    this._anyEntityChangeEvent.internalValue = value;
  }
  public resetAnyEntityChangeEvent() {
    this._anyEntityChangeEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyEntityChangeEventInput() {
    return this._anyEntityChangeEvent.internalValue;
  }

  // any_run_change_event - computed: false, optional: true, required: false
  private _anyRunChangeEvent = new PortActionAutomationTriggerAnyRunChangeEventOutputReference(this, "any_run_change_event");
  public get anyRunChangeEvent() {
    return this._anyRunChangeEvent;
  }
  public putAnyRunChangeEvent(value: PortActionAutomationTriggerAnyRunChangeEvent) {
    this._anyRunChangeEvent.internalValue = value;
  }
  public resetAnyRunChangeEvent() {
    this._anyRunChangeEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyRunChangeEventInput() {
    return this._anyRunChangeEvent.internalValue;
  }

  // entity_created_event - computed: false, optional: true, required: false
  private _entityCreatedEvent = new PortActionAutomationTriggerEntityCreatedEventOutputReference(this, "entity_created_event");
  public get entityCreatedEvent() {
    return this._entityCreatedEvent;
  }
  public putEntityCreatedEvent(value: PortActionAutomationTriggerEntityCreatedEvent) {
    this._entityCreatedEvent.internalValue = value;
  }
  public resetEntityCreatedEvent() {
    this._entityCreatedEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityCreatedEventInput() {
    return this._entityCreatedEvent.internalValue;
  }

  // entity_deleted_event - computed: false, optional: true, required: false
  private _entityDeletedEvent = new PortActionAutomationTriggerEntityDeletedEventOutputReference(this, "entity_deleted_event");
  public get entityDeletedEvent() {
    return this._entityDeletedEvent;
  }
  public putEntityDeletedEvent(value: PortActionAutomationTriggerEntityDeletedEvent) {
    this._entityDeletedEvent.internalValue = value;
  }
  public resetEntityDeletedEvent() {
    this._entityDeletedEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDeletedEventInput() {
    return this._entityDeletedEvent.internalValue;
  }

  // entity_updated_event - computed: false, optional: true, required: false
  private _entityUpdatedEvent = new PortActionAutomationTriggerEntityUpdatedEventOutputReference(this, "entity_updated_event");
  public get entityUpdatedEvent() {
    return this._entityUpdatedEvent;
  }
  public putEntityUpdatedEvent(value: PortActionAutomationTriggerEntityUpdatedEvent) {
    this._entityUpdatedEvent.internalValue = value;
  }
  public resetEntityUpdatedEvent() {
    this._entityUpdatedEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityUpdatedEventInput() {
    return this._entityUpdatedEvent.internalValue;
  }

  // jq_condition - computed: false, optional: true, required: false
  private _jqCondition = new PortActionAutomationTriggerJqConditionOutputReference(this, "jq_condition");
  public get jqCondition() {
    return this._jqCondition;
  }
  public putJqCondition(value: PortActionAutomationTriggerJqCondition) {
    this._jqCondition.internalValue = value;
  }
  public resetJqCondition() {
    this._jqCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqConditionInput() {
    return this._jqCondition.internalValue;
  }

  // run_created_event - computed: false, optional: true, required: false
  private _runCreatedEvent = new PortActionAutomationTriggerRunCreatedEventOutputReference(this, "run_created_event");
  public get runCreatedEvent() {
    return this._runCreatedEvent;
  }
  public putRunCreatedEvent(value: PortActionAutomationTriggerRunCreatedEvent) {
    this._runCreatedEvent.internalValue = value;
  }
  public resetRunCreatedEvent() {
    this._runCreatedEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCreatedEventInput() {
    return this._runCreatedEvent.internalValue;
  }

  // run_updated_event - computed: false, optional: true, required: false
  private _runUpdatedEvent = new PortActionAutomationTriggerRunUpdatedEventOutputReference(this, "run_updated_event");
  public get runUpdatedEvent() {
    return this._runUpdatedEvent;
  }
  public putRunUpdatedEvent(value: PortActionAutomationTriggerRunUpdatedEvent) {
    this._runUpdatedEvent.internalValue = value;
  }
  public resetRunUpdatedEvent() {
    this._runUpdatedEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runUpdatedEventInput() {
    return this._runUpdatedEvent.internalValue;
  }

  // timer_property_expired_event - computed: false, optional: true, required: false
  private _timerPropertyExpiredEvent = new PortActionAutomationTriggerTimerPropertyExpiredEventOutputReference(this, "timer_property_expired_event");
  public get timerPropertyExpiredEvent() {
    return this._timerPropertyExpiredEvent;
  }
  public putTimerPropertyExpiredEvent(value: PortActionAutomationTriggerTimerPropertyExpiredEvent) {
    this._timerPropertyExpiredEvent.internalValue = value;
  }
  public resetTimerPropertyExpiredEvent() {
    this._timerPropertyExpiredEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerPropertyExpiredEventInput() {
    return this._timerPropertyExpiredEvent.internalValue;
  }
}
export interface PortActionAzureMethod {
  /**
  * Required when selecting type AZURE. The Azure org that the workflow belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#org PortAction#org}
  */
  readonly org: string;
  /**
  * The Azure Devops workflow [payload](https://docs.getport.io/create-self-service-experiences/setup-backend/#define-the-actions-payload) should be in `JSON` format, encoded as a string. Use [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) to encode arrays or objects. Learn about how to [define the action payload](https://docs.getport.io/create-self-service-experiences/setup-backend/#define-the-actions-payload).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#payload PortAction#payload}
  */
  readonly payload?: string;
  /**
  * Required when selecting type AZURE. The Azure webhook that the workflow belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#webhook PortAction#webhook}
  */
  readonly webhook: string;
}

export function portActionAzureMethodToTerraform(struct?: PortActionAzureMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org: cdktf.stringToTerraform(struct!.org),
    payload: cdktf.stringToTerraform(struct!.payload),
    webhook: cdktf.stringToTerraform(struct!.webhook),
  }
}


export function portActionAzureMethodToHclTerraform(struct?: PortActionAzureMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org: {
      value: cdktf.stringToHclTerraform(struct!.org),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook: {
      value: cdktf.stringToHclTerraform(struct!.webhook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionAzureMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionAzureMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._org !== undefined) {
      hasAnyValues = true;
      internalValueResult.org = this._org;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._webhook !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionAzureMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._org = undefined;
      this._payload = undefined;
      this._webhook = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._org = value.org;
      this._payload = value.payload;
      this._webhook = value.webhook;
    }
  }

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // webhook - computed: false, optional: false, required: true
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }
}
export interface PortActionGithubMethod {
  /**
  * Required when selecting type GITHUB. The GitHub org that the workflow belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#org PortAction#org}
  */
  readonly org: string;
  /**
  * Required when selecting type GITHUB. The GitHub repo that the workflow belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#repo PortAction#repo}
  */
  readonly repo: string;
  /**
  * Report the workflow status when invoking the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#report_workflow_status PortAction#report_workflow_status}
  */
  readonly reportWorkflowStatus?: string;
  /**
  * The GitHub workflow that the action belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#workflow PortAction#workflow}
  */
  readonly workflow: string;
  /**
  * The GitHub [workflow inputs](https://docs.getport.io/create-self-service-experiences/setup-backend/#define-the-actions-payload) should be in `JSON` format, encoded as a string. Use [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) to encode arrays or objects. Learn about how to [define the action payload](https://docs.getport.io/create-self-service-experiences/setup-backend/#define-the-actions-payload).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#workflow_inputs PortAction#workflow_inputs}
  */
  readonly workflowInputs?: string;
}

export function portActionGithubMethodToTerraform(struct?: PortActionGithubMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org: cdktf.stringToTerraform(struct!.org),
    repo: cdktf.stringToTerraform(struct!.repo),
    report_workflow_status: cdktf.stringToTerraform(struct!.reportWorkflowStatus),
    workflow: cdktf.stringToTerraform(struct!.workflow),
    workflow_inputs: cdktf.stringToTerraform(struct!.workflowInputs),
  }
}


export function portActionGithubMethodToHclTerraform(struct?: PortActionGithubMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org: {
      value: cdktf.stringToHclTerraform(struct!.org),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_workflow_status: {
      value: cdktf.stringToHclTerraform(struct!.reportWorkflowStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow: {
      value: cdktf.stringToHclTerraform(struct!.workflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_inputs: {
      value: cdktf.stringToHclTerraform(struct!.workflowInputs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionGithubMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionGithubMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._org !== undefined) {
      hasAnyValues = true;
      internalValueResult.org = this._org;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._reportWorkflowStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportWorkflowStatus = this._reportWorkflowStatus;
    }
    if (this._workflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow;
    }
    if (this._workflowInputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowInputs = this._workflowInputs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionGithubMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._org = undefined;
      this._repo = undefined;
      this._reportWorkflowStatus = undefined;
      this._workflow = undefined;
      this._workflowInputs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._org = value.org;
      this._repo = value.repo;
      this._reportWorkflowStatus = value.reportWorkflowStatus;
      this._workflow = value.workflow;
      this._workflowInputs = value.workflowInputs;
    }
  }

  // org - computed: false, optional: false, required: true
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // report_workflow_status - computed: false, optional: true, required: false
  private _reportWorkflowStatus?: string; 
  public get reportWorkflowStatus() {
    return this.getStringAttribute('report_workflow_status');
  }
  public set reportWorkflowStatus(value: string) {
    this._reportWorkflowStatus = value;
  }
  public resetReportWorkflowStatus() {
    this._reportWorkflowStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportWorkflowStatusInput() {
    return this._reportWorkflowStatus;
  }

  // workflow - computed: false, optional: false, required: true
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // workflow_inputs - computed: false, optional: true, required: false
  private _workflowInputs?: string; 
  public get workflowInputs() {
    return this.getStringAttribute('workflow_inputs');
  }
  public set workflowInputs(value: string) {
    this._workflowInputs = value;
  }
  public resetWorkflowInputs() {
    this._workflowInputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInputsInput() {
    return this._workflowInputs;
  }
}
export interface PortActionGitlabMethod {
  /**
  * The default ref of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default_ref PortAction#default_ref}
  */
  readonly defaultRef?: string;
  /**
  * Required when selecting type GITLAB. The GitLab group name that the workflow belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#group_name PortAction#group_name}
  */
  readonly groupName: string;
  /**
  * The Gitlab pipeline variables should be in `JSON` format, encoded as a string. Use [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) to encode arrays or objects. Learn about how to [define the action payload](https://docs.getport.io/create-self-service-experiences/setup-backend/#define-the-actions-payload).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#pipeline_variables PortAction#pipeline_variables}
  */
  readonly pipelineVariables?: string;
  /**
  * Required when selecting type GITLAB. The GitLab project name that the workflow belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#project_name PortAction#project_name}
  */
  readonly projectName: string;
}

export function portActionGitlabMethodToTerraform(struct?: PortActionGitlabMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_ref: cdktf.stringToTerraform(struct!.defaultRef),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    pipeline_variables: cdktf.stringToTerraform(struct!.pipelineVariables),
    project_name: cdktf.stringToTerraform(struct!.projectName),
  }
}


export function portActionGitlabMethodToHclTerraform(struct?: PortActionGitlabMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_ref: {
      value: cdktf.stringToHclTerraform(struct!.defaultRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_variables: {
      value: cdktf.stringToHclTerraform(struct!.pipelineVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionGitlabMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionGitlabMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRef = this._defaultRef;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._pipelineVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineVariables = this._pipelineVariables;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionGitlabMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRef = undefined;
      this._groupName = undefined;
      this._pipelineVariables = undefined;
      this._projectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRef = value.defaultRef;
      this._groupName = value.groupName;
      this._pipelineVariables = value.pipelineVariables;
      this._projectName = value.projectName;
    }
  }

  // default_ref - computed: false, optional: true, required: false
  private _defaultRef?: string; 
  public get defaultRef() {
    return this.getStringAttribute('default_ref');
  }
  public set defaultRef(value: string) {
    this._defaultRef = value;
  }
  public resetDefaultRef() {
    this._defaultRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRefInput() {
    return this._defaultRef;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // pipeline_variables - computed: false, optional: true, required: false
  private _pipelineVariables?: string; 
  public get pipelineVariables() {
    return this.getStringAttribute('pipeline_variables');
  }
  public set pipelineVariables(value: string) {
    this._pipelineVariables = value;
  }
  public resetPipelineVariables() {
    this._pipelineVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineVariablesInput() {
    return this._pipelineVariables;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }
}
export interface PortActionKafkaMethod {
  /**
  * The Kafka message [payload](https://docs.getport.io/create-self-service-experiences/setup-backend/#define-the-actions-payload) should be in `JSON` format, encoded as a string. Use [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) to encode arrays or objects. Learn about how to [define the action payload](https://docs.getport.io/create-self-service-experiences/setup-backend/#define-the-actions-payload).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#payload PortAction#payload}
  */
  readonly payload?: string;
}

export function portActionKafkaMethodToTerraform(struct?: PortActionKafkaMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: cdktf.stringToTerraform(struct!.payload),
  }
}


export function portActionKafkaMethodToHclTerraform(struct?: PortActionKafkaMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionKafkaMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionKafkaMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionKafkaMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload = value.payload;
    }
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }
}
export interface PortActionSelfServiceTriggerSteps {
  /**
  * The order of the properties in this step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#order PortAction#order}
  */
  readonly order: string[];
  /**
  * The step's title (max 25 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#title PortAction#title}
  */
  readonly title: string;
  /**
  * The visibility of the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible PortAction#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * The visibility condition jq query of the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible_jq_query PortAction#visible_jq_query}
  */
  readonly visibleJqQuery?: string;
}

export function portActionSelfServiceTriggerStepsToTerraform(struct?: PortActionSelfServiceTriggerSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.order),
    title: cdktf.stringToTerraform(struct!.title),
    visible: cdktf.booleanToTerraform(struct!.visible),
    visible_jq_query: cdktf.stringToTerraform(struct!.visibleJqQuery),
  }
}


export function portActionSelfServiceTriggerStepsToHclTerraform(struct?: PortActionSelfServiceTriggerSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.order),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    visible_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.visibleJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortActionSelfServiceTriggerSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    if (this._visibleJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleJqQuery = this._visibleJqQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._title = undefined;
      this._visible = undefined;
      this._visibleJqQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._title = value.title;
      this._visible = value.visible;
      this._visibleJqQuery = value.visibleJqQuery;
    }
  }

  // order - computed: false, optional: false, required: true
  private _order?: string[]; 
  public get order() {
    return this.getListAttribute('order');
  }
  public set order(value: string[]) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // visible_jq_query - computed: false, optional: true, required: false
  private _visibleJqQuery?: string; 
  public get visibleJqQuery() {
    return this.getStringAttribute('visible_jq_query');
  }
  public set visibleJqQuery(value: string) {
    this._visibleJqQuery = value;
  }
  public resetVisibleJqQuery() {
    this._visibleJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleJqQueryInput() {
    return this._visibleJqQuery;
  }
}

export class PortActionSelfServiceTriggerStepsList extends cdktf.ComplexList {
  public internalValue? : PortActionSelfServiceTriggerSteps[] | cdktf.IResolvable

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
  public get(index: number): PortActionSelfServiceTriggerStepsOutputReference {
    return new PortActionSelfServiceTriggerStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortActionSelfServiceTriggerTitles {
  /**
  * The description of the action title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#description PortAction#description}
  */
  readonly description?: string;
  /**
  * The title of the action title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#title PortAction#title}
  */
  readonly title: string;
  /**
  * The visibility of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible PortAction#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * The visibility condition jq query of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible_jq_query PortAction#visible_jq_query}
  */
  readonly visibleJqQuery?: string;
}

export function portActionSelfServiceTriggerTitlesToTerraform(struct?: PortActionSelfServiceTriggerTitles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    title: cdktf.stringToTerraform(struct!.title),
    visible: cdktf.booleanToTerraform(struct!.visible),
    visible_jq_query: cdktf.stringToTerraform(struct!.visibleJqQuery),
  }
}


export function portActionSelfServiceTriggerTitlesToHclTerraform(struct?: PortActionSelfServiceTriggerTitles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    visible_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.visibleJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerTitlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortActionSelfServiceTriggerTitles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    if (this._visibleJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleJqQuery = this._visibleJqQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerTitles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._title = undefined;
      this._visible = undefined;
      this._visibleJqQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._title = value.title;
      this._visible = value.visible;
      this._visibleJqQuery = value.visibleJqQuery;
    }
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // visible_jq_query - computed: false, optional: true, required: false
  private _visibleJqQuery?: string; 
  public get visibleJqQuery() {
    return this.getStringAttribute('visible_jq_query');
  }
  public set visibleJqQuery(value: string) {
    this._visibleJqQuery = value;
  }
  public resetVisibleJqQuery() {
    this._visibleJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleJqQueryInput() {
    return this._visibleJqQuery;
  }
}

export class PortActionSelfServiceTriggerTitlesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortActionSelfServiceTriggerTitles } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortActionSelfServiceTriggerTitlesOutputReference {
    return new PortActionSelfServiceTriggerTitlesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItems {
  /**
  * The default values for the boolean items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default PortAction#default}
  */
  readonly default?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
}

export function portActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItemsToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.booleanToTerraform, false)(struct!.default),
  }
}


export function portActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItemsToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.listMapperHcl(cdktf.booleanToHclTerraform, false)(struct!.default),
      isBlock: false,
      type: "list",
      storageClassType: "booleanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable; 
  public get default() {
    return this.interpolationForAttribute('default');
  }
  public set default(value: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItems {
  /**
  * The default values for the number items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default PortAction#default}
  */
  readonly default?: number[];
  /**
  * The enum of possible values for the number items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum PortAction#enum}
  */
  readonly enum?: number[];
  /**
  * The jq query for the enum number items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum_jq_query PortAction#enum_jq_query}
  */
  readonly enumJqQuery?: string;
}

export function portActionSelfServiceTriggerUserPropertiesArrayPropsNumberItemsToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.default),
    enum: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.enum),
    enum_jq_query: cdktf.stringToTerraform(struct!.enumJqQuery),
  }
}


export function portActionSelfServiceTriggerUserPropertiesArrayPropsNumberItemsToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.default),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enum_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.enumJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._enumJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumJqQuery = this._enumJqQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._enum = undefined;
      this._enumJqQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._enum = value.enum;
      this._enumJqQuery = value.enumJqQuery;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: number[]; 
  public get default() {
    return this.getNumberListAttribute('default');
  }
  public set default(value: number[]) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: number[]; 
  public get enum() {
    return this.getNumberListAttribute('enum');
  }
  public set enum(value: number[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // enum_jq_query - computed: false, optional: true, required: false
  private _enumJqQuery?: string; 
  public get enumJqQuery() {
    return this.getStringAttribute('enum_jq_query');
  }
  public set enumJqQuery(value: string) {
    this._enumJqQuery = value;
  }
  public resetEnumJqQuery() {
    this._enumJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumJqQueryInput() {
    return this._enumJqQuery;
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItems {
  /**
  * The default values for the object items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default PortAction#default}
  */
  readonly default?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function portActionSelfServiceTriggerUserPropertiesArrayPropsObjectItemsToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.default),
  }
}


export function portActionSelfServiceTriggerUserPropertiesArrayPropsObjectItemsToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.default),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get default() {
    return this.interpolationForAttribute('default');
  }
  public set default(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesArrayPropsSort {
  /**
  * The order to sort the entities in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#order PortAction#order}
  */
  readonly order?: string;
  /**
  * The property to sort the entities by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#property PortAction#property}
  */
  readonly property: string;
}

export function portActionSelfServiceTriggerUserPropertiesArrayPropsSortToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.stringToTerraform(struct!.order),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function portActionSelfServiceTriggerUserPropertiesArrayPropsSortToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesArrayPropsSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesArrayPropsSort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsSort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._property = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._property = value.property;
    }
  }

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItems {
  /**
  * The blueprint identifier related to each string item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint PortAction#blueprint}
  */
  readonly blueprint?: string;
  /**
  * The dataset of the entity-format items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#dataset PortAction#dataset}
  */
  readonly dataset?: string;
  /**
  * The default value of the items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default PortAction#default}
  */
  readonly default?: string[];
  /**
  * The enum of possible values for the string items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum PortAction#enum}
  */
  readonly enum?: string[];
  /**
  * The jq query for the enum of string items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum_jq_query PortAction#enum_jq_query}
  */
  readonly enumJqQuery?: string;
  /**
  * The format of the string property, Accepted values include `date-time`, `url`, `email`, `ipv4`, `ipv6`, `yaml`, `entity`, `user`, `team`, `proto`, `markdown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#format PortAction#format}
  */
  readonly format?: string;
}

export function portActionSelfServiceTriggerUserPropertiesArrayPropsStringItemsToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint: cdktf.stringToTerraform(struct!.blueprint),
    dataset: cdktf.stringToTerraform(struct!.dataset),
    default: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.default),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    enum_jq_query: cdktf.stringToTerraform(struct!.enumJqQuery),
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function portActionSelfServiceTriggerUserPropertiesArrayPropsStringItemsToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint: {
      value: cdktf.stringToHclTerraform(struct!.blueprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: cdktf.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.default),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enum_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.enumJqQuery),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint;
    }
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._enumJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumJqQuery = this._enumJqQuery;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprint = undefined;
      this._dataset = undefined;
      this._default = undefined;
      this._enum = undefined;
      this._enumJqQuery = undefined;
      this._format = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprint = value.blueprint;
      this._dataset = value.dataset;
      this._default = value.default;
      this._enum = value.enum;
      this._enumJqQuery = value.enumJqQuery;
      this._format = value.format;
    }
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  public resetBlueprint() {
    this._blueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string[]; 
  public get default() {
    return this.getListAttribute('default');
  }
  public set default(value: string[]) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // enum_jq_query - computed: false, optional: true, required: false
  private _enumJqQuery?: string; 
  public get enumJqQuery() {
    return this.getStringAttribute('enum_jq_query');
  }
  public set enumJqQuery(value: string) {
    this._enumJqQuery = value;
  }
  public resetEnumJqQuery() {
    this._enumJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumJqQueryInput() {
    return this._enumJqQuery;
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
}
export interface PortActionSelfServiceTriggerUserPropertiesArrayProps {
  /**
  * An array of boolean items within the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#boolean_items PortAction#boolean_items}
  */
  readonly booleanItems?: PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItems;
  /**
  * The default jq query of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default_jq_query PortAction#default_jq_query}
  */
  readonly defaultJqQuery?: string;
  /**
  * The properties that this property depends on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#depends_on PortAction#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#description PortAction#description}
  */
  readonly description?: string;
  /**
  * The disabled state of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled PortAction#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The disabled state jq query of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled_jq_query PortAction#disabled_jq_query}
  */
  readonly disabledJqQuery?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#icon PortAction#icon}
  */
  readonly icon?: string;
  /**
  * The max items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#max_items PortAction#max_items}
  */
  readonly maxItems?: number;
  /**
  * The max items jq query of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#max_items_jq_query PortAction#max_items_jq_query}
  */
  readonly maxItemsJqQuery?: string;
  /**
  * The min items of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#min_items PortAction#min_items}
  */
  readonly minItems?: number;
  /**
  * The min items jq query of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#min_items_jq_query PortAction#min_items_jq_query}
  */
  readonly minItemsJqQuery?: string;
  /**
  * An array of number items within the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#number_items PortAction#number_items}
  */
  readonly numberItems?: PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItems;
  /**
  * An array of object items within the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#object_items PortAction#object_items}
  */
  readonly objectItems?: PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItems;
  /**
  * Whether the property is required, by default not required, this property can't be set at the same time if `required_jq_query` is set, and only supports true as value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#required PortAction#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * How to sort entities when in the self service action form in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#sort PortAction#sort}
  */
  readonly sort?: PortActionSelfServiceTriggerUserPropertiesArrayPropsSort;
  /**
  * An array of string items within the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#string_items PortAction#string_items}
  */
  readonly stringItems?: PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItems;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#title PortAction#title}
  */
  readonly title?: string;
  /**
  * The visibility of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible PortAction#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * The visibility condition jq query of the array property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible_jq_query PortAction#visible_jq_query}
  */
  readonly visibleJqQuery?: string;
}

export function portActionSelfServiceTriggerUserPropertiesArrayPropsToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_items: portActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItemsToTerraform(struct!.booleanItems),
    default_jq_query: cdktf.stringToTerraform(struct!.defaultJqQuery),
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    disabled_jq_query: cdktf.stringToTerraform(struct!.disabledJqQuery),
    icon: cdktf.stringToTerraform(struct!.icon),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    max_items_jq_query: cdktf.stringToTerraform(struct!.maxItemsJqQuery),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    min_items_jq_query: cdktf.stringToTerraform(struct!.minItemsJqQuery),
    number_items: portActionSelfServiceTriggerUserPropertiesArrayPropsNumberItemsToTerraform(struct!.numberItems),
    object_items: portActionSelfServiceTriggerUserPropertiesArrayPropsObjectItemsToTerraform(struct!.objectItems),
    required: cdktf.booleanToTerraform(struct!.required),
    sort: portActionSelfServiceTriggerUserPropertiesArrayPropsSortToTerraform(struct!.sort),
    string_items: portActionSelfServiceTriggerUserPropertiesArrayPropsStringItemsToTerraform(struct!.stringItems),
    title: cdktf.stringToTerraform(struct!.title),
    visible: cdktf.booleanToTerraform(struct!.visible),
    visible_jq_query: cdktf.stringToTerraform(struct!.visibleJqQuery),
  }
}


export function portActionSelfServiceTriggerUserPropertiesArrayPropsToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesArrayProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_items: {
      value: portActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItemsToHclTerraform(struct!.booleanItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItems",
    },
    default_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.defaultJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.disabledJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_items_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.maxItemsJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_items_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.minItemsJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_items: {
      value: portActionSelfServiceTriggerUserPropertiesArrayPropsNumberItemsToHclTerraform(struct!.numberItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItems",
    },
    object_items: {
      value: portActionSelfServiceTriggerUserPropertiesArrayPropsObjectItemsToHclTerraform(struct!.objectItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItems",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort: {
      value: portActionSelfServiceTriggerUserPropertiesArrayPropsSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesArrayPropsSort",
    },
    string_items: {
      value: portActionSelfServiceTriggerUserPropertiesArrayPropsStringItemsToHclTerraform(struct!.stringItems),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItems",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    visible_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.visibleJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesArrayPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesArrayProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanItems = this._booleanItems?.internalValue;
    }
    if (this._defaultJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultJqQuery = this._defaultJqQuery;
    }
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._disabledJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledJqQuery = this._disabledJqQuery;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maxItemsJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItemsJqQuery = this._maxItemsJqQuery;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minItemsJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItemsJqQuery = this._minItemsJqQuery;
    }
    if (this._numberItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberItems = this._numberItems?.internalValue;
    }
    if (this._objectItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectItems = this._objectItems?.internalValue;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    if (this._stringItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringItems = this._stringItems?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    if (this._visibleJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleJqQuery = this._visibleJqQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesArrayProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanItems.internalValue = undefined;
      this._defaultJqQuery = undefined;
      this._dependsOn = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._disabledJqQuery = undefined;
      this._icon = undefined;
      this._maxItems = undefined;
      this._maxItemsJqQuery = undefined;
      this._minItems = undefined;
      this._minItemsJqQuery = undefined;
      this._numberItems.internalValue = undefined;
      this._objectItems.internalValue = undefined;
      this._required = undefined;
      this._sort.internalValue = undefined;
      this._stringItems.internalValue = undefined;
      this._title = undefined;
      this._visible = undefined;
      this._visibleJqQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanItems.internalValue = value.booleanItems;
      this._defaultJqQuery = value.defaultJqQuery;
      this._dependsOn = value.dependsOn;
      this._description = value.description;
      this._disabled = value.disabled;
      this._disabledJqQuery = value.disabledJqQuery;
      this._icon = value.icon;
      this._maxItems = value.maxItems;
      this._maxItemsJqQuery = value.maxItemsJqQuery;
      this._minItems = value.minItems;
      this._minItemsJqQuery = value.minItemsJqQuery;
      this._numberItems.internalValue = value.numberItems;
      this._objectItems.internalValue = value.objectItems;
      this._required = value.required;
      this._sort.internalValue = value.sort;
      this._stringItems.internalValue = value.stringItems;
      this._title = value.title;
      this._visible = value.visible;
      this._visibleJqQuery = value.visibleJqQuery;
    }
  }

  // boolean_items - computed: false, optional: true, required: false
  private _booleanItems = new PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItemsOutputReference(this, "boolean_items");
  public get booleanItems() {
    return this._booleanItems;
  }
  public putBooleanItems(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsBooleanItems) {
    this._booleanItems.internalValue = value;
  }
  public resetBooleanItems() {
    this._booleanItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanItemsInput() {
    return this._booleanItems.internalValue;
  }

  // default_jq_query - computed: false, optional: true, required: false
  private _defaultJqQuery?: string; 
  public get defaultJqQuery() {
    return this.getStringAttribute('default_jq_query');
  }
  public set defaultJqQuery(value: string) {
    this._defaultJqQuery = value;
  }
  public resetDefaultJqQuery() {
    this._defaultJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJqQueryInput() {
    return this._defaultJqQuery;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
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

  // disabled - computed: false, optional: true, required: false
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

  // disabled_jq_query - computed: false, optional: true, required: false
  private _disabledJqQuery?: string; 
  public get disabledJqQuery() {
    return this.getStringAttribute('disabled_jq_query');
  }
  public set disabledJqQuery(value: string) {
    this._disabledJqQuery = value;
  }
  public resetDisabledJqQuery() {
    this._disabledJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledJqQueryInput() {
    return this._disabledJqQuery;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // max_items_jq_query - computed: false, optional: true, required: false
  private _maxItemsJqQuery?: string; 
  public get maxItemsJqQuery() {
    return this.getStringAttribute('max_items_jq_query');
  }
  public set maxItemsJqQuery(value: string) {
    this._maxItemsJqQuery = value;
  }
  public resetMaxItemsJqQuery() {
    this._maxItemsJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsJqQueryInput() {
    return this._maxItemsJqQuery;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // min_items_jq_query - computed: false, optional: true, required: false
  private _minItemsJqQuery?: string; 
  public get minItemsJqQuery() {
    return this.getStringAttribute('min_items_jq_query');
  }
  public set minItemsJqQuery(value: string) {
    this._minItemsJqQuery = value;
  }
  public resetMinItemsJqQuery() {
    this._minItemsJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsJqQueryInput() {
    return this._minItemsJqQuery;
  }

  // number_items - computed: false, optional: true, required: false
  private _numberItems = new PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItemsOutputReference(this, "number_items");
  public get numberItems() {
    return this._numberItems;
  }
  public putNumberItems(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsNumberItems) {
    this._numberItems.internalValue = value;
  }
  public resetNumberItems() {
    this._numberItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberItemsInput() {
    return this._numberItems.internalValue;
  }

  // object_items - computed: false, optional: true, required: false
  private _objectItems = new PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItemsOutputReference(this, "object_items");
  public get objectItems() {
    return this._objectItems;
  }
  public putObjectItems(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsObjectItems) {
    this._objectItems.internalValue = value;
  }
  public resetObjectItems() {
    this._objectItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectItemsInput() {
    return this._objectItems.internalValue;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new PortActionSelfServiceTriggerUserPropertiesArrayPropsSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsSort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // string_items - computed: false, optional: true, required: false
  private _stringItems = new PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItemsOutputReference(this, "string_items");
  public get stringItems() {
    return this._stringItems;
  }
  public putStringItems(value: PortActionSelfServiceTriggerUserPropertiesArrayPropsStringItems) {
    this._stringItems.internalValue = value;
  }
  public resetStringItems() {
    this._stringItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringItemsInput() {
    return this._stringItems.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // visible_jq_query - computed: false, optional: true, required: false
  private _visibleJqQuery?: string; 
  public get visibleJqQuery() {
    return this.getStringAttribute('visible_jq_query');
  }
  public set visibleJqQuery(value: string) {
    this._visibleJqQuery = value;
  }
  public resetVisibleJqQuery() {
    this._visibleJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleJqQueryInput() {
    return this._visibleJqQuery;
  }
}

export class PortActionSelfServiceTriggerUserPropertiesArrayPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortActionSelfServiceTriggerUserPropertiesArrayProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortActionSelfServiceTriggerUserPropertiesArrayPropsOutputReference {
    return new PortActionSelfServiceTriggerUserPropertiesArrayPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesBooleanProps {
  /**
  * The default of the boolean property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default PortAction#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The default jq query of the boolean property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default_jq_query PortAction#default_jq_query}
  */
  readonly defaultJqQuery?: string;
  /**
  * The properties that this property depends on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#depends_on PortAction#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#description PortAction#description}
  */
  readonly description?: string;
  /**
  * The disabled state of the boolean property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled PortAction#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The disabled state jq query of the boolean property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled_jq_query PortAction#disabled_jq_query}
  */
  readonly disabledJqQuery?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#icon PortAction#icon}
  */
  readonly icon?: string;
  /**
  * Whether the property is required, by default not required, this property can't be set at the same time if `required_jq_query` is set, and only supports true as value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#required PortAction#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#title PortAction#title}
  */
  readonly title?: string;
  /**
  * The visibility of the boolean property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible PortAction#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * The visibility condition jq query of the boolean property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible_jq_query PortAction#visible_jq_query}
  */
  readonly visibleJqQuery?: string;
}

export function portActionSelfServiceTriggerUserPropertiesBooleanPropsToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesBooleanProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    default_jq_query: cdktf.stringToTerraform(struct!.defaultJqQuery),
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    disabled_jq_query: cdktf.stringToTerraform(struct!.disabledJqQuery),
    icon: cdktf.stringToTerraform(struct!.icon),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    visible: cdktf.booleanToTerraform(struct!.visible),
    visible_jq_query: cdktf.stringToTerraform(struct!.visibleJqQuery),
  }
}


export function portActionSelfServiceTriggerUserPropertiesBooleanPropsToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesBooleanProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.defaultJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.disabledJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    visible_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.visibleJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesBooleanPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesBooleanProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defaultJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultJqQuery = this._defaultJqQuery;
    }
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._disabledJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledJqQuery = this._disabledJqQuery;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    if (this._visibleJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleJqQuery = this._visibleJqQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesBooleanProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._defaultJqQuery = undefined;
      this._dependsOn = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._disabledJqQuery = undefined;
      this._icon = undefined;
      this._required = undefined;
      this._title = undefined;
      this._visible = undefined;
      this._visibleJqQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._defaultJqQuery = value.defaultJqQuery;
      this._dependsOn = value.dependsOn;
      this._description = value.description;
      this._disabled = value.disabled;
      this._disabledJqQuery = value.disabledJqQuery;
      this._icon = value.icon;
      this._required = value.required;
      this._title = value.title;
      this._visible = value.visible;
      this._visibleJqQuery = value.visibleJqQuery;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_jq_query - computed: false, optional: true, required: false
  private _defaultJqQuery?: string; 
  public get defaultJqQuery() {
    return this.getStringAttribute('default_jq_query');
  }
  public set defaultJqQuery(value: string) {
    this._defaultJqQuery = value;
  }
  public resetDefaultJqQuery() {
    this._defaultJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJqQueryInput() {
    return this._defaultJqQuery;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
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

  // disabled - computed: false, optional: true, required: false
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

  // disabled_jq_query - computed: false, optional: true, required: false
  private _disabledJqQuery?: string; 
  public get disabledJqQuery() {
    return this.getStringAttribute('disabled_jq_query');
  }
  public set disabledJqQuery(value: string) {
    this._disabledJqQuery = value;
  }
  public resetDisabledJqQuery() {
    this._disabledJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledJqQueryInput() {
    return this._disabledJqQuery;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // visible_jq_query - computed: false, optional: true, required: false
  private _visibleJqQuery?: string; 
  public get visibleJqQuery() {
    return this.getStringAttribute('visible_jq_query');
  }
  public set visibleJqQuery(value: string) {
    this._visibleJqQuery = value;
  }
  public resetVisibleJqQuery() {
    this._visibleJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleJqQueryInput() {
    return this._visibleJqQuery;
  }
}

export class PortActionSelfServiceTriggerUserPropertiesBooleanPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortActionSelfServiceTriggerUserPropertiesBooleanProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortActionSelfServiceTriggerUserPropertiesBooleanPropsOutputReference {
    return new PortActionSelfServiceTriggerUserPropertiesBooleanPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesNumberProps {
  /**
  * The default of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default PortAction#default}
  */
  readonly default?: number;
  /**
  * The default jq query of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default_jq_query PortAction#default_jq_query}
  */
  readonly defaultJqQuery?: string;
  /**
  * The properties that this property depends on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#depends_on PortAction#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#description PortAction#description}
  */
  readonly description?: string;
  /**
  * The disabled state of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled PortAction#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The disabled state jq query of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled_jq_query PortAction#disabled_jq_query}
  */
  readonly disabledJqQuery?: string;
  /**
  * The enum of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum PortAction#enum}
  */
  readonly enum?: number[];
  /**
  * The enum colors of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum_colors PortAction#enum_colors}
  */
  readonly enumColors?: { [key: string]: string };
  /**
  * The enum jq query of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum_jq_query PortAction#enum_jq_query}
  */
  readonly enumJqQuery?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#icon PortAction#icon}
  */
  readonly icon?: string;
  /**
  * The min of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#maximum PortAction#maximum}
  */
  readonly maximum?: number;
  /**
  * The max of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#minimum PortAction#minimum}
  */
  readonly minimum?: number;
  /**
  * Whether the property is required, by default not required, this property can't be set at the same time if `required_jq_query` is set, and only supports true as value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#required PortAction#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#title PortAction#title}
  */
  readonly title?: string;
  /**
  * The visibility of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible PortAction#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * The visibility condition jq query of the number property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible_jq_query PortAction#visible_jq_query}
  */
  readonly visibleJqQuery?: string;
}

export function portActionSelfServiceTriggerUserPropertiesNumberPropsToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesNumberProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.numberToTerraform(struct!.default),
    default_jq_query: cdktf.stringToTerraform(struct!.defaultJqQuery),
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    disabled_jq_query: cdktf.stringToTerraform(struct!.disabledJqQuery),
    enum: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.enum),
    enum_colors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.enumColors),
    enum_jq_query: cdktf.stringToTerraform(struct!.enumJqQuery),
    icon: cdktf.stringToTerraform(struct!.icon),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    visible: cdktf.booleanToTerraform(struct!.visible),
    visible_jq_query: cdktf.stringToTerraform(struct!.visibleJqQuery),
  }
}


export function portActionSelfServiceTriggerUserPropertiesNumberPropsToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesNumberProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.numberToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.defaultJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.disabledJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    enum_colors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.enumColors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enum_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.enumJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    visible_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.visibleJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesNumberPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesNumberProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defaultJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultJqQuery = this._defaultJqQuery;
    }
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._disabledJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledJqQuery = this._disabledJqQuery;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._enumColors !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumColors = this._enumColors;
    }
    if (this._enumJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumJqQuery = this._enumJqQuery;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    if (this._visibleJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleJqQuery = this._visibleJqQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesNumberProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._defaultJqQuery = undefined;
      this._dependsOn = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._disabledJqQuery = undefined;
      this._enum = undefined;
      this._enumColors = undefined;
      this._enumJqQuery = undefined;
      this._icon = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._required = undefined;
      this._title = undefined;
      this._visible = undefined;
      this._visibleJqQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._defaultJqQuery = value.defaultJqQuery;
      this._dependsOn = value.dependsOn;
      this._description = value.description;
      this._disabled = value.disabled;
      this._disabledJqQuery = value.disabledJqQuery;
      this._enum = value.enum;
      this._enumColors = value.enumColors;
      this._enumJqQuery = value.enumJqQuery;
      this._icon = value.icon;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._required = value.required;
      this._title = value.title;
      this._visible = value.visible;
      this._visibleJqQuery = value.visibleJqQuery;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: number; 
  public get default() {
    return this.getNumberAttribute('default');
  }
  public set default(value: number) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_jq_query - computed: false, optional: true, required: false
  private _defaultJqQuery?: string; 
  public get defaultJqQuery() {
    return this.getStringAttribute('default_jq_query');
  }
  public set defaultJqQuery(value: string) {
    this._defaultJqQuery = value;
  }
  public resetDefaultJqQuery() {
    this._defaultJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJqQueryInput() {
    return this._defaultJqQuery;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
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

  // disabled - computed: false, optional: true, required: false
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

  // disabled_jq_query - computed: false, optional: true, required: false
  private _disabledJqQuery?: string; 
  public get disabledJqQuery() {
    return this.getStringAttribute('disabled_jq_query');
  }
  public set disabledJqQuery(value: string) {
    this._disabledJqQuery = value;
  }
  public resetDisabledJqQuery() {
    this._disabledJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledJqQueryInput() {
    return this._disabledJqQuery;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: number[]; 
  public get enum() {
    return this.getNumberListAttribute('enum');
  }
  public set enum(value: number[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // enum_colors - computed: false, optional: true, required: false
  private _enumColors?: { [key: string]: string }; 
  public get enumColors() {
    return this.getStringMapAttribute('enum_colors');
  }
  public set enumColors(value: { [key: string]: string }) {
    this._enumColors = value;
  }
  public resetEnumColors() {
    this._enumColors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumColorsInput() {
    return this._enumColors;
  }

  // enum_jq_query - computed: false, optional: true, required: false
  private _enumJqQuery?: string; 
  public get enumJqQuery() {
    return this.getStringAttribute('enum_jq_query');
  }
  public set enumJqQuery(value: string) {
    this._enumJqQuery = value;
  }
  public resetEnumJqQuery() {
    this._enumJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumJqQueryInput() {
    return this._enumJqQuery;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // visible_jq_query - computed: false, optional: true, required: false
  private _visibleJqQuery?: string; 
  public get visibleJqQuery() {
    return this.getStringAttribute('visible_jq_query');
  }
  public set visibleJqQuery(value: string) {
    this._visibleJqQuery = value;
  }
  public resetVisibleJqQuery() {
    this._visibleJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleJqQueryInput() {
    return this._visibleJqQuery;
  }
}

export class PortActionSelfServiceTriggerUserPropertiesNumberPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortActionSelfServiceTriggerUserPropertiesNumberProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortActionSelfServiceTriggerUserPropertiesNumberPropsOutputReference {
    return new PortActionSelfServiceTriggerUserPropertiesNumberPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesObjectProps {
  /**
  * The default of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default PortAction#default}
  */
  readonly default?: string;
  /**
  * The default jq query of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default_jq_query PortAction#default_jq_query}
  */
  readonly defaultJqQuery?: string;
  /**
  * The properties that this property depends on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#depends_on PortAction#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#description PortAction#description}
  */
  readonly description?: string;
  /**
  * The disabled state of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled PortAction#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The disabled state jq query of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled_jq_query PortAction#disabled_jq_query}
  */
  readonly disabledJqQuery?: string;
  /**
  * The algorithm to encrypt the property with. Accepted value: `aes256-gcm`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#encryption PortAction#encryption}
  */
  readonly encryption?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#icon PortAction#icon}
  */
  readonly icon?: string;
  /**
  * Whether the property is required, by default not required, this property can't be set at the same time if `required_jq_query` is set, and only supports true as value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#required PortAction#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#title PortAction#title}
  */
  readonly title?: string;
  /**
  * The visibility of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible PortAction#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * The visibility condition jq query of the object property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible_jq_query PortAction#visible_jq_query}
  */
  readonly visibleJqQuery?: string;
}

export function portActionSelfServiceTriggerUserPropertiesObjectPropsToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesObjectProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    default_jq_query: cdktf.stringToTerraform(struct!.defaultJqQuery),
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    disabled_jq_query: cdktf.stringToTerraform(struct!.disabledJqQuery),
    encryption: cdktf.stringToTerraform(struct!.encryption),
    icon: cdktf.stringToTerraform(struct!.icon),
    required: cdktf.booleanToTerraform(struct!.required),
    title: cdktf.stringToTerraform(struct!.title),
    visible: cdktf.booleanToTerraform(struct!.visible),
    visible_jq_query: cdktf.stringToTerraform(struct!.visibleJqQuery),
  }
}


export function portActionSelfServiceTriggerUserPropertiesObjectPropsToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesObjectProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.defaultJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.disabledJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    visible_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.visibleJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesObjectPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesObjectProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defaultJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultJqQuery = this._defaultJqQuery;
    }
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._disabledJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledJqQuery = this._disabledJqQuery;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    if (this._visibleJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleJqQuery = this._visibleJqQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesObjectProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._defaultJqQuery = undefined;
      this._dependsOn = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._disabledJqQuery = undefined;
      this._encryption = undefined;
      this._icon = undefined;
      this._required = undefined;
      this._title = undefined;
      this._visible = undefined;
      this._visibleJqQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._defaultJqQuery = value.defaultJqQuery;
      this._dependsOn = value.dependsOn;
      this._description = value.description;
      this._disabled = value.disabled;
      this._disabledJqQuery = value.disabledJqQuery;
      this._encryption = value.encryption;
      this._icon = value.icon;
      this._required = value.required;
      this._title = value.title;
      this._visible = value.visible;
      this._visibleJqQuery = value.visibleJqQuery;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_jq_query - computed: false, optional: true, required: false
  private _defaultJqQuery?: string; 
  public get defaultJqQuery() {
    return this.getStringAttribute('default_jq_query');
  }
  public set defaultJqQuery(value: string) {
    this._defaultJqQuery = value;
  }
  public resetDefaultJqQuery() {
    this._defaultJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJqQueryInput() {
    return this._defaultJqQuery;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
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

  // disabled - computed: false, optional: true, required: false
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

  // disabled_jq_query - computed: false, optional: true, required: false
  private _disabledJqQuery?: string; 
  public get disabledJqQuery() {
    return this.getStringAttribute('disabled_jq_query');
  }
  public set disabledJqQuery(value: string) {
    this._disabledJqQuery = value;
  }
  public resetDisabledJqQuery() {
    this._disabledJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledJqQueryInput() {
    return this._disabledJqQuery;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // visible_jq_query - computed: false, optional: true, required: false
  private _visibleJqQuery?: string; 
  public get visibleJqQuery() {
    return this.getStringAttribute('visible_jq_query');
  }
  public set visibleJqQuery(value: string) {
    this._visibleJqQuery = value;
  }
  public resetVisibleJqQuery() {
    this._visibleJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleJqQueryInput() {
    return this._visibleJqQuery;
  }
}

export class PortActionSelfServiceTriggerUserPropertiesObjectPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortActionSelfServiceTriggerUserPropertiesObjectProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortActionSelfServiceTriggerUserPropertiesObjectPropsOutputReference {
    return new PortActionSelfServiceTriggerUserPropertiesObjectPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValue {
}

export function portActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValueToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValueToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValue | cdktf.IResolvable | undefined) {
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

  // jq_query - computed: false, optional: false, required: false
  public get jqQuery() {
    return this.getStringAttribute('jq_query');
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRules {
  /**
  * The blueprint identifier of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint PortAction#blueprint}
  */
  readonly blueprint?: string;
  /**
  * The operator of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#operator PortAction#operator}
  */
  readonly operator: string;
  /**
  * The property identifier of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#property PortAction#property}
  */
  readonly property?: string;
  /**
  * The value of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#value PortAction#value}
  */
  readonly value?: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValue;
}

export function portActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint: cdktf.stringToTerraform(struct!.blueprint),
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    value: portActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValueToTerraform(struct!.value),
  }
}


export function portActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint: {
      value: cdktf.stringToHclTerraform(struct!.blueprint),
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
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: portActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprint = undefined;
      this._operator = undefined;
      this._property = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprint = value.blueprint;
      this._operator = value.operator;
      this._property = value.property;
      this._value.internalValue = value.value;
    }
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  public resetBlueprint() {
    this._blueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // value - computed: false, optional: true, required: false
  private _value = new PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesList extends cdktf.ComplexList {
  public internalValue? : PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRules[] | cdktf.IResolvable

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
  public get(index: number): PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesOutputReference {
    return new PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesStringPropsDataset {
  /**
  * The combinator of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#combinator PortAction#combinator}
  */
  readonly combinator: string;
  /**
  * The rules of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#rules PortAction#rules}
  */
  readonly rules: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRules[] | cdktf.IResolvable;
}

export function portActionSelfServiceTriggerUserPropertiesStringPropsDatasetToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringPropsDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combinator: cdktf.stringToTerraform(struct!.combinator),
    rules: cdktf.listMapper(portActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesToTerraform, false)(struct!.rules),
  }
}


export function portActionSelfServiceTriggerUserPropertiesStringPropsDatasetToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringPropsDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    combinator: {
      value: cdktf.stringToHclTerraform(struct!.combinator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(portActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesStringPropsDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combinator !== undefined) {
      hasAnyValues = true;
      internalValueResult.combinator = this._combinator;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesStringPropsDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._combinator = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._combinator = value.combinator;
      this._rules.internalValue = value.rules;
    }
  }

  // combinator - computed: false, optional: false, required: true
  private _combinator?: string; 
  public get combinator() {
    return this.getStringAttribute('combinator');
  }
  public set combinator(value: string) {
    this._combinator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get combinatorInput() {
    return this._combinator;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesStringPropsSort {
  /**
  * The order to sort the entities in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#order PortAction#order}
  */
  readonly order?: string;
  /**
  * The property to sort the entities by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#property PortAction#property}
  */
  readonly property: string;
}

export function portActionSelfServiceTriggerUserPropertiesStringPropsSortToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringPropsSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.stringToTerraform(struct!.order),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function portActionSelfServiceTriggerUserPropertiesStringPropsSortToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringPropsSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesStringPropsSortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesStringPropsSort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesStringPropsSort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._property = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._property = value.property;
    }
  }

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}
export interface PortActionSelfServiceTriggerUserPropertiesStringProps {
  /**
  * The blueprint identifier the string property relates to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint PortAction#blueprint}
  */
  readonly blueprint?: string;
  /**
  * The dataset of an the entity-format property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#dataset PortAction#dataset}
  */
  readonly dataset?: PortActionSelfServiceTriggerUserPropertiesStringPropsDataset;
  /**
  * The default of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default PortAction#default}
  */
  readonly default?: string;
  /**
  * The default jq query of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#default_jq_query PortAction#default_jq_query}
  */
  readonly defaultJqQuery?: string;
  /**
  * The properties that this property depends on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#depends_on PortAction#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * The description of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#description PortAction#description}
  */
  readonly description?: string;
  /**
  * The disabled state of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled PortAction#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The disabled state jq query of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#disabled_jq_query PortAction#disabled_jq_query}
  */
  readonly disabledJqQuery?: string;
  /**
  * The algorithm to encrypt the property with. Accepted value: `aes256-gcm`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#encryption PortAction#encryption}
  */
  readonly encryption?: string;
  /**
  * The enum of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum PortAction#enum}
  */
  readonly enum?: string[];
  /**
  * The enum colors of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum_colors PortAction#enum_colors}
  */
  readonly enumColors?: { [key: string]: string };
  /**
  * The enum jq query of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#enum_jq_query PortAction#enum_jq_query}
  */
  readonly enumJqQuery?: string;
  /**
  * The format of the string property, Accepted values include `date-time`, `url`, `email`, `ipv4`, `ipv6`, `yaml`, `entity`, `user`, `team`, `proto`, `markdown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#format PortAction#format}
  */
  readonly format?: string;
  /**
  * The icon of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#icon PortAction#icon}
  */
  readonly icon?: string;
  /**
  * The max length of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#max_length PortAction#max_length}
  */
  readonly maxLength?: number;
  /**
  * The min length of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#min_length PortAction#min_length}
  */
  readonly minLength?: number;
  /**
  * The pattern of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#pattern PortAction#pattern}
  */
  readonly pattern?: string;
  /**
  * The pattern jq query of the string property. This field accepts a JQ expression to dynamically generate either a regex pattern (as a string) or a list of allowed values (as an array). Cannot be used with `pattern`. Empty values are not allowed. Examples: `"if .env == \"prod\" then \"^[a-z]+$\" else \"^[a-zA-Z]+$\" end"` for dynamic regex patterns, or `"[\"value1\", \"value2\"]"` for a fixed list of allowed values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#pattern_jq_query PortAction#pattern_jq_query}
  */
  readonly patternJqQuery?: string;
  /**
  * Whether the property is required, by default not required, this property can't be set at the same time if `required_jq_query` is set, and only supports true as value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#required PortAction#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * How to sort entities when in the self service action form in the UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#sort PortAction#sort}
  */
  readonly sort?: PortActionSelfServiceTriggerUserPropertiesStringPropsSort;
  /**
  * The title of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#title PortAction#title}
  */
  readonly title?: string;
  /**
  * The visibility of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible PortAction#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * The visibility condition jq query of the string property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#visible_jq_query PortAction#visible_jq_query}
  */
  readonly visibleJqQuery?: string;
}

export function portActionSelfServiceTriggerUserPropertiesStringPropsToTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint: cdktf.stringToTerraform(struct!.blueprint),
    dataset: portActionSelfServiceTriggerUserPropertiesStringPropsDatasetToTerraform(struct!.dataset),
    default: cdktf.stringToTerraform(struct!.default),
    default_jq_query: cdktf.stringToTerraform(struct!.defaultJqQuery),
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    disabled_jq_query: cdktf.stringToTerraform(struct!.disabledJqQuery),
    encryption: cdktf.stringToTerraform(struct!.encryption),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    enum_colors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.enumColors),
    enum_jq_query: cdktf.stringToTerraform(struct!.enumJqQuery),
    format: cdktf.stringToTerraform(struct!.format),
    icon: cdktf.stringToTerraform(struct!.icon),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    pattern_jq_query: cdktf.stringToTerraform(struct!.patternJqQuery),
    required: cdktf.booleanToTerraform(struct!.required),
    sort: portActionSelfServiceTriggerUserPropertiesStringPropsSortToTerraform(struct!.sort),
    title: cdktf.stringToTerraform(struct!.title),
    visible: cdktf.booleanToTerraform(struct!.visible),
    visible_jq_query: cdktf.stringToTerraform(struct!.visibleJqQuery),
  }
}


export function portActionSelfServiceTriggerUserPropertiesStringPropsToHclTerraform(struct?: PortActionSelfServiceTriggerUserPropertiesStringProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint: {
      value: cdktf.stringToHclTerraform(struct!.blueprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset: {
      value: portActionSelfServiceTriggerUserPropertiesStringPropsDatasetToHclTerraform(struct!.dataset),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesStringPropsDataset",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.defaultJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.disabledJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enum_colors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.enumColors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    enum_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.enumJqQuery),
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
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.patternJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort: {
      value: portActionSelfServiceTriggerUserPropertiesStringPropsSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesStringPropsSort",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    visible_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.visibleJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesStringPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserPropertiesStringProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprint = this._blueprint;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defaultJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultJqQuery = this._defaultJqQuery;
    }
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._disabledJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledJqQuery = this._disabledJqQuery;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._enumColors !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumColors = this._enumColors;
    }
    if (this._enumJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumJqQuery = this._enumJqQuery;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._patternJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternJqQuery = this._patternJqQuery;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    if (this._visibleJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleJqQuery = this._visibleJqQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserPropertiesStringProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprint = undefined;
      this._dataset.internalValue = undefined;
      this._default = undefined;
      this._defaultJqQuery = undefined;
      this._dependsOn = undefined;
      this._description = undefined;
      this._disabled = undefined;
      this._disabledJqQuery = undefined;
      this._encryption = undefined;
      this._enum = undefined;
      this._enumColors = undefined;
      this._enumJqQuery = undefined;
      this._format = undefined;
      this._icon = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
      this._pattern = undefined;
      this._patternJqQuery = undefined;
      this._required = undefined;
      this._sort.internalValue = undefined;
      this._title = undefined;
      this._visible = undefined;
      this._visibleJqQuery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprint = value.blueprint;
      this._dataset.internalValue = value.dataset;
      this._default = value.default;
      this._defaultJqQuery = value.defaultJqQuery;
      this._dependsOn = value.dependsOn;
      this._description = value.description;
      this._disabled = value.disabled;
      this._disabledJqQuery = value.disabledJqQuery;
      this._encryption = value.encryption;
      this._enum = value.enum;
      this._enumColors = value.enumColors;
      this._enumJqQuery = value.enumJqQuery;
      this._format = value.format;
      this._icon = value.icon;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
      this._pattern = value.pattern;
      this._patternJqQuery = value.patternJqQuery;
      this._required = value.required;
      this._sort.internalValue = value.sort;
      this._title = value.title;
      this._visible = value.visible;
      this._visibleJqQuery = value.visibleJqQuery;
    }
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  public resetBlueprint() {
    this._blueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new PortActionSelfServiceTriggerUserPropertiesStringPropsDatasetOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: PortActionSelfServiceTriggerUserPropertiesStringPropsDataset) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_jq_query - computed: false, optional: true, required: false
  private _defaultJqQuery?: string; 
  public get defaultJqQuery() {
    return this.getStringAttribute('default_jq_query');
  }
  public set defaultJqQuery(value: string) {
    this._defaultJqQuery = value;
  }
  public resetDefaultJqQuery() {
    this._defaultJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJqQueryInput() {
    return this._defaultJqQuery;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
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

  // disabled - computed: false, optional: true, required: false
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

  // disabled_jq_query - computed: false, optional: true, required: false
  private _disabledJqQuery?: string; 
  public get disabledJqQuery() {
    return this.getStringAttribute('disabled_jq_query');
  }
  public set disabledJqQuery(value: string) {
    this._disabledJqQuery = value;
  }
  public resetDisabledJqQuery() {
    this._disabledJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledJqQueryInput() {
    return this._disabledJqQuery;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // enum_colors - computed: false, optional: true, required: false
  private _enumColors?: { [key: string]: string }; 
  public get enumColors() {
    return this.getStringMapAttribute('enum_colors');
  }
  public set enumColors(value: { [key: string]: string }) {
    this._enumColors = value;
  }
  public resetEnumColors() {
    this._enumColors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumColorsInput() {
    return this._enumColors;
  }

  // enum_jq_query - computed: false, optional: true, required: false
  private _enumJqQuery?: string; 
  public get enumJqQuery() {
    return this.getStringAttribute('enum_jq_query');
  }
  public set enumJqQuery(value: string) {
    this._enumJqQuery = value;
  }
  public resetEnumJqQuery() {
    this._enumJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumJqQueryInput() {
    return this._enumJqQuery;
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

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // pattern_jq_query - computed: false, optional: true, required: false
  private _patternJqQuery?: string; 
  public get patternJqQuery() {
    return this.getStringAttribute('pattern_jq_query');
  }
  public set patternJqQuery(value: string) {
    this._patternJqQuery = value;
  }
  public resetPatternJqQuery() {
    this._patternJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternJqQueryInput() {
    return this._patternJqQuery;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new PortActionSelfServiceTriggerUserPropertiesStringPropsSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PortActionSelfServiceTriggerUserPropertiesStringPropsSort) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visible - computed: false, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // visible_jq_query - computed: false, optional: true, required: false
  private _visibleJqQuery?: string; 
  public get visibleJqQuery() {
    return this.getStringAttribute('visible_jq_query');
  }
  public set visibleJqQuery(value: string) {
    this._visibleJqQuery = value;
  }
  public resetVisibleJqQuery() {
    this._visibleJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleJqQueryInput() {
    return this._visibleJqQuery;
  }
}

export class PortActionSelfServiceTriggerUserPropertiesStringPropsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: PortActionSelfServiceTriggerUserPropertiesStringProps } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): PortActionSelfServiceTriggerUserPropertiesStringPropsOutputReference {
    return new PortActionSelfServiceTriggerUserPropertiesStringPropsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface PortActionSelfServiceTriggerUserProperties {
  /**
  * The array property of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#array_props PortAction#array_props}
  */
  readonly arrayProps?: { [key: string]: PortActionSelfServiceTriggerUserPropertiesArrayProps } | cdktf.IResolvable;
  /**
  * The boolean property of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#boolean_props PortAction#boolean_props}
  */
  readonly booleanProps?: { [key: string]: PortActionSelfServiceTriggerUserPropertiesBooleanProps } | cdktf.IResolvable;
  /**
  * The number property of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#number_props PortAction#number_props}
  */
  readonly numberProps?: { [key: string]: PortActionSelfServiceTriggerUserPropertiesNumberProps } | cdktf.IResolvable;
  /**
  * The object property of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#object_props PortAction#object_props}
  */
  readonly objectProps?: { [key: string]: PortActionSelfServiceTriggerUserPropertiesObjectProps } | cdktf.IResolvable;
  /**
  * The string property of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#string_props PortAction#string_props}
  */
  readonly stringProps?: { [key: string]: PortActionSelfServiceTriggerUserPropertiesStringProps } | cdktf.IResolvable;
}

export function portActionSelfServiceTriggerUserPropertiesToTerraform(struct?: PortActionSelfServiceTriggerUserProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_props: cdktf.hashMapper(portActionSelfServiceTriggerUserPropertiesArrayPropsToTerraform)(struct!.arrayProps),
    boolean_props: cdktf.hashMapper(portActionSelfServiceTriggerUserPropertiesBooleanPropsToTerraform)(struct!.booleanProps),
    number_props: cdktf.hashMapper(portActionSelfServiceTriggerUserPropertiesNumberPropsToTerraform)(struct!.numberProps),
    object_props: cdktf.hashMapper(portActionSelfServiceTriggerUserPropertiesObjectPropsToTerraform)(struct!.objectProps),
    string_props: cdktf.hashMapper(portActionSelfServiceTriggerUserPropertiesStringPropsToTerraform)(struct!.stringProps),
  }
}


export function portActionSelfServiceTriggerUserPropertiesToHclTerraform(struct?: PortActionSelfServiceTriggerUserProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_props: {
      value: cdktf.hashMapperHcl(portActionSelfServiceTriggerUserPropertiesArrayPropsToHclTerraform)(struct!.arrayProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesArrayPropsMap",
    },
    boolean_props: {
      value: cdktf.hashMapperHcl(portActionSelfServiceTriggerUserPropertiesBooleanPropsToHclTerraform)(struct!.booleanProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesBooleanPropsMap",
    },
    number_props: {
      value: cdktf.hashMapperHcl(portActionSelfServiceTriggerUserPropertiesNumberPropsToHclTerraform)(struct!.numberProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesNumberPropsMap",
    },
    object_props: {
      value: cdktf.hashMapperHcl(portActionSelfServiceTriggerUserPropertiesObjectPropsToHclTerraform)(struct!.objectProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesObjectPropsMap",
    },
    string_props: {
      value: cdktf.hashMapperHcl(portActionSelfServiceTriggerUserPropertiesStringPropsToHclTerraform)(struct!.stringProps),
      isBlock: true,
      type: "map",
      storageClassType: "PortActionSelfServiceTriggerUserPropertiesStringPropsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerUserPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTriggerUserProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayProps = this._arrayProps?.internalValue;
    }
    if (this._booleanProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanProps = this._booleanProps?.internalValue;
    }
    if (this._numberProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberProps = this._numberProps?.internalValue;
    }
    if (this._objectProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectProps = this._objectProps?.internalValue;
    }
    if (this._stringProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringProps = this._stringProps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTriggerUserProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayProps.internalValue = undefined;
      this._booleanProps.internalValue = undefined;
      this._numberProps.internalValue = undefined;
      this._objectProps.internalValue = undefined;
      this._stringProps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayProps.internalValue = value.arrayProps;
      this._booleanProps.internalValue = value.booleanProps;
      this._numberProps.internalValue = value.numberProps;
      this._objectProps.internalValue = value.objectProps;
      this._stringProps.internalValue = value.stringProps;
    }
  }

  // array_props - computed: false, optional: true, required: false
  private _arrayProps = new PortActionSelfServiceTriggerUserPropertiesArrayPropsMap(this, "array_props");
  public get arrayProps() {
    return this._arrayProps;
  }
  public putArrayProps(value: { [key: string]: PortActionSelfServiceTriggerUserPropertiesArrayProps } | cdktf.IResolvable) {
    this._arrayProps.internalValue = value;
  }
  public resetArrayProps() {
    this._arrayProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayPropsInput() {
    return this._arrayProps.internalValue;
  }

  // boolean_props - computed: false, optional: true, required: false
  private _booleanProps = new PortActionSelfServiceTriggerUserPropertiesBooleanPropsMap(this, "boolean_props");
  public get booleanProps() {
    return this._booleanProps;
  }
  public putBooleanProps(value: { [key: string]: PortActionSelfServiceTriggerUserPropertiesBooleanProps } | cdktf.IResolvable) {
    this._booleanProps.internalValue = value;
  }
  public resetBooleanProps() {
    this._booleanProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanPropsInput() {
    return this._booleanProps.internalValue;
  }

  // number_props - computed: false, optional: true, required: false
  private _numberProps = new PortActionSelfServiceTriggerUserPropertiesNumberPropsMap(this, "number_props");
  public get numberProps() {
    return this._numberProps;
  }
  public putNumberProps(value: { [key: string]: PortActionSelfServiceTriggerUserPropertiesNumberProps } | cdktf.IResolvable) {
    this._numberProps.internalValue = value;
  }
  public resetNumberProps() {
    this._numberProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberPropsInput() {
    return this._numberProps.internalValue;
  }

  // object_props - computed: false, optional: true, required: false
  private _objectProps = new PortActionSelfServiceTriggerUserPropertiesObjectPropsMap(this, "object_props");
  public get objectProps() {
    return this._objectProps;
  }
  public putObjectProps(value: { [key: string]: PortActionSelfServiceTriggerUserPropertiesObjectProps } | cdktf.IResolvable) {
    this._objectProps.internalValue = value;
  }
  public resetObjectProps() {
    this._objectProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPropsInput() {
    return this._objectProps.internalValue;
  }

  // string_props - computed: false, optional: true, required: false
  private _stringProps = new PortActionSelfServiceTriggerUserPropertiesStringPropsMap(this, "string_props");
  public get stringProps() {
    return this._stringProps;
  }
  public putStringProps(value: { [key: string]: PortActionSelfServiceTriggerUserPropertiesStringProps } | cdktf.IResolvable) {
    this._stringProps.internalValue = value;
  }
  public resetStringProps() {
    this._stringProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringPropsInput() {
    return this._stringProps.internalValue;
  }
}
export interface PortActionSelfServiceTrigger {
  /**
  * The ID of the blueprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint_identifier PortAction#blueprint_identifier}
  */
  readonly blueprintIdentifier?: string;
  /**
  * The `condition` field allows you to define rules using Port's [search & query syntax](https://docs.getport.io/search-and-query/#rules) to determine which entities the action will be available for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#condition PortAction#condition}
  */
  readonly condition?: string;
  /**
  * The operation type of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#operation PortAction#operation}
  */
  readonly operation: string;
  /**
  * Order properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#order_properties PortAction#order_properties}
  */
  readonly orderProperties?: string[];
  /**
  * The required jq query of the property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#required_jq_query PortAction#required_jq_query}
  */
  readonly requiredJqQuery?: string;
  /**
  * The steps of the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#steps PortAction#steps}
  */
  readonly steps?: PortActionSelfServiceTriggerSteps[] | cdktf.IResolvable;
  /**
  * action titles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#titles PortAction#titles}
  */
  readonly titles?: { [key: string]: PortActionSelfServiceTriggerTitles } | cdktf.IResolvable;
  /**
  * User properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#user_properties PortAction#user_properties}
  */
  readonly userProperties?: PortActionSelfServiceTriggerUserProperties;
}

export function portActionSelfServiceTriggerToTerraform(struct?: PortActionSelfServiceTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint_identifier: cdktf.stringToTerraform(struct!.blueprintIdentifier),
    condition: cdktf.stringToTerraform(struct!.condition),
    operation: cdktf.stringToTerraform(struct!.operation),
    order_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.orderProperties),
    required_jq_query: cdktf.stringToTerraform(struct!.requiredJqQuery),
    steps: cdktf.listMapper(portActionSelfServiceTriggerStepsToTerraform, false)(struct!.steps),
    titles: cdktf.hashMapper(portActionSelfServiceTriggerTitlesToTerraform)(struct!.titles),
    user_properties: portActionSelfServiceTriggerUserPropertiesToTerraform(struct!.userProperties),
  }
}


export function portActionSelfServiceTriggerToHclTerraform(struct?: PortActionSelfServiceTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint_identifier: {
      value: cdktf.stringToHclTerraform(struct!.blueprintIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.orderProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    required_jq_query: {
      value: cdktf.stringToHclTerraform(struct!.requiredJqQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    steps: {
      value: cdktf.listMapperHcl(portActionSelfServiceTriggerStepsToHclTerraform, false)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "PortActionSelfServiceTriggerStepsList",
    },
    titles: {
      value: cdktf.hashMapperHcl(portActionSelfServiceTriggerTitlesToHclTerraform)(struct!.titles),
      isBlock: true,
      type: "map",
      storageClassType: "PortActionSelfServiceTriggerTitlesMap",
    },
    user_properties: {
      value: portActionSelfServiceTriggerUserPropertiesToHclTerraform(struct!.userProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionSelfServiceTriggerUserProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionSelfServiceTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionSelfServiceTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintIdentifier = this._blueprintIdentifier;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._orderProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderProperties = this._orderProperties;
    }
    if (this._requiredJqQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredJqQuery = this._requiredJqQuery;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    if (this._titles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titles = this._titles?.internalValue;
    }
    if (this._userProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userProperties = this._userProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionSelfServiceTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = undefined;
      this._condition = undefined;
      this._operation = undefined;
      this._orderProperties = undefined;
      this._requiredJqQuery = undefined;
      this._steps.internalValue = undefined;
      this._titles.internalValue = undefined;
      this._userProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = value.blueprintIdentifier;
      this._condition = value.condition;
      this._operation = value.operation;
      this._orderProperties = value.orderProperties;
      this._requiredJqQuery = value.requiredJqQuery;
      this._steps.internalValue = value.steps;
      this._titles.internalValue = value.titles;
      this._userProperties.internalValue = value.userProperties;
    }
  }

  // blueprint_identifier - computed: false, optional: true, required: false
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  public resetBlueprintIdentifier() {
    this._blueprintIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // order_properties - computed: false, optional: true, required: false
  private _orderProperties?: string[]; 
  public get orderProperties() {
    return this.getListAttribute('order_properties');
  }
  public set orderProperties(value: string[]) {
    this._orderProperties = value;
  }
  public resetOrderProperties() {
    this._orderProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderPropertiesInput() {
    return this._orderProperties;
  }

  // required_jq_query - computed: false, optional: true, required: false
  private _requiredJqQuery?: string; 
  public get requiredJqQuery() {
    return this.getStringAttribute('required_jq_query');
  }
  public set requiredJqQuery(value: string) {
    this._requiredJqQuery = value;
  }
  public resetRequiredJqQuery() {
    this._requiredJqQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredJqQueryInput() {
    return this._requiredJqQuery;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new PortActionSelfServiceTriggerStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: PortActionSelfServiceTriggerSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // titles - computed: false, optional: true, required: false
  private _titles = new PortActionSelfServiceTriggerTitlesMap(this, "titles");
  public get titles() {
    return this._titles;
  }
  public putTitles(value: { [key: string]: PortActionSelfServiceTriggerTitles } | cdktf.IResolvable) {
    this._titles.internalValue = value;
  }
  public resetTitles() {
    this._titles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titlesInput() {
    return this._titles.internalValue;
  }

  // user_properties - computed: false, optional: true, required: false
  private _userProperties = new PortActionSelfServiceTriggerUserPropertiesOutputReference(this, "user_properties");
  public get userProperties() {
    return this._userProperties;
  }
  public putUserProperties(value: PortActionSelfServiceTriggerUserProperties) {
    this._userProperties.internalValue = value;
  }
  public resetUserProperties() {
    this._userProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPropertiesInput() {
    return this._userProperties.internalValue;
  }
}
export interface PortActionUpsertEntityMethodMapping {
  /**
  * The icon of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#icon PortAction#icon}
  */
  readonly icon?: string;
  /**
  * Required when selecting type Upsert Entity. The entity identifier for the upsert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#identifier PortAction#identifier}
  */
  readonly identifier?: string;
  /**
  * The properties of the entity (key-value object encoded to a string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#properties PortAction#properties}
  */
  readonly properties?: string;
  /**
  * The relations of the entity (key-value object encoded to a string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#relations PortAction#relations}
  */
  readonly relations?: string;
  /**
  * The teams the entity belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#teams PortAction#teams}
  */
  readonly teams?: string[];
  /**
  * Jq that returns the teams the entity belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#teams_jq PortAction#teams_jq}
  */
  readonly teamsJq?: string;
}

export function portActionUpsertEntityMethodMappingToTerraform(struct?: PortActionUpsertEntityMethodMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: cdktf.stringToTerraform(struct!.icon),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    properties: cdktf.stringToTerraform(struct!.properties),
    relations: cdktf.stringToTerraform(struct!.relations),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    teams_jq: cdktf.stringToTerraform(struct!.teamsJq),
  }
}


export function portActionUpsertEntityMethodMappingToHclTerraform(struct?: PortActionUpsertEntityMethodMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relations: {
      value: cdktf.stringToHclTerraform(struct!.relations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    teams_jq: {
      value: cdktf.stringToHclTerraform(struct!.teamsJq),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionUpsertEntityMethodMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionUpsertEntityMethodMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._relations !== undefined) {
      hasAnyValues = true;
      internalValueResult.relations = this._relations;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._teamsJq !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamsJq = this._teamsJq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionUpsertEntityMethodMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icon = undefined;
      this._identifier = undefined;
      this._properties = undefined;
      this._relations = undefined;
      this._teams = undefined;
      this._teamsJq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icon = value.icon;
      this._identifier = value.identifier;
      this._properties = value.properties;
      this._relations = value.relations;
      this._teams = value.teams;
      this._teamsJq = value.teamsJq;
    }
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // relations - computed: false, optional: true, required: false
  private _relations?: string; 
  public get relations() {
    return this.getStringAttribute('relations');
  }
  public set relations(value: string) {
    this._relations = value;
  }
  public resetRelations() {
    this._relations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationsInput() {
    return this._relations;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // teams_jq - computed: false, optional: true, required: false
  private _teamsJq?: string; 
  public get teamsJq() {
    return this.getStringAttribute('teams_jq');
  }
  public set teamsJq(value: string) {
    this._teamsJq = value;
  }
  public resetTeamsJq() {
    this._teamsJq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsJqInput() {
    return this._teamsJq;
  }
}
export interface PortActionUpsertEntityMethod {
  /**
  * Required when selecting type Upsert Entity. The blueprint identifier of the entity for the upsert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#blueprint_identifier PortAction#blueprint_identifier}
  */
  readonly blueprintIdentifier: string;
  /**
  * Upsert Entity invocation method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#mapping PortAction#mapping}
  */
  readonly mapping?: PortActionUpsertEntityMethodMapping;
  /**
  * The title of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#title PortAction#title}
  */
  readonly title?: string;
}

export function portActionUpsertEntityMethodToTerraform(struct?: PortActionUpsertEntityMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blueprint_identifier: cdktf.stringToTerraform(struct!.blueprintIdentifier),
    mapping: portActionUpsertEntityMethodMappingToTerraform(struct!.mapping),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portActionUpsertEntityMethodToHclTerraform(struct?: PortActionUpsertEntityMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blueprint_identifier: {
      value: cdktf.stringToHclTerraform(struct!.blueprintIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: portActionUpsertEntityMethodMappingToHclTerraform(struct!.mapping),
      isBlock: true,
      type: "struct",
      storageClassType: "PortActionUpsertEntityMethodMapping",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortActionUpsertEntityMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionUpsertEntityMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blueprintIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueprintIdentifier = this._blueprintIdentifier;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionUpsertEntityMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = undefined;
      this._mapping.internalValue = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blueprintIdentifier = value.blueprintIdentifier;
      this._mapping.internalValue = value.mapping;
      this._title = value.title;
    }
  }

  // blueprint_identifier - computed: false, optional: false, required: true
  private _blueprintIdentifier?: string; 
  public get blueprintIdentifier() {
    return this.getStringAttribute('blueprint_identifier');
  }
  public set blueprintIdentifier(value: string) {
    this._blueprintIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdentifierInput() {
    return this._blueprintIdentifier;
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping = new PortActionUpsertEntityMethodMappingOutputReference(this, "mapping");
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: PortActionUpsertEntityMethodMapping) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface PortActionWebhookMethod {
  /**
  * Specifies whether to use an agent to invoke the action. This can be a boolean value (`'true''` or `'false'`) or a JQ if dynamic evaluation is needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#agent PortAction#agent}
  */
  readonly agent?: string;
  /**
  * The Webhook body should be in `JSON` format, encoded as a string. Use [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode) to encode arrays or objects. Learn about how to [define the action payload](https://docs.getport.io/create-self-service-experiences/setup-backend/#define-the-actions-payload).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#body PortAction#body}
  */
  readonly body?: string;
  /**
  * The HTTP headers for invoking the action. They should be encoded as a key-value object to a string using [jsonencode](https://developer.hashicorp.com/terraform/language/functions/jsonencode). Learn about how to [define the action payload](https://docs.getport.io/create-self-service-experiences/setup-backend/#define-the-actions-payload).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#headers PortAction#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * The HTTP method to invoke the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#method PortAction#method}
  */
  readonly method?: string;
  /**
  * Synchronize the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#synchronized PortAction#synchronized}
  */
  readonly synchronized?: string;
  /**
  * Required when selecting type WEBHOOK. The URL to invoke the action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#url PortAction#url}
  */
  readonly url: string;
}

export function portActionWebhookMethodToTerraform(struct?: PortActionWebhookMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.stringToTerraform(struct!.agent),
    body: cdktf.stringToTerraform(struct!.body),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    synchronized: cdktf.stringToTerraform(struct!.synchronized),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function portActionWebhookMethodToHclTerraform(struct?: PortActionWebhookMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.stringToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
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
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synchronized: {
      value: cdktf.stringToHclTerraform(struct!.synchronized),
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

export class PortActionWebhookMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortActionWebhookMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._synchronized !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronized = this._synchronized;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortActionWebhookMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._body = undefined;
      this._headers = undefined;
      this._method = undefined;
      this._synchronized = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._body = value.body;
      this._headers = value.headers;
      this._method = value.method;
      this._synchronized = value.synchronized;
      this._url = value.url;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // synchronized - computed: false, optional: true, required: false
  private _synchronized?: string; 
  public get synchronized() {
    return this.getStringAttribute('synchronized');
  }
  public set synchronized(value: string) {
    this._synchronized = value;
  }
  public resetSynchronized() {
    this._synchronized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizedInput() {
    return this._synchronized;
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

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action port_action}
*/
export class PortAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortAction to import
  * @param importFromId The id of the existing PortAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.15.1/docs/resources/port_action port_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortActionConfig
  */
  public constructor(scope: Construct, id: string, config: PortActionConfig) {
    super(scope, id, {
      terraformResourceType: 'port_action',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.15.1',
        providerVersionConstraint: '2.15.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvalEmailNotification.internalValue = config.approvalEmailNotification;
    this._approvalWebhookNotification.internalValue = config.approvalWebhookNotification;
    this._automationTrigger.internalValue = config.automationTrigger;
    this._azureMethod.internalValue = config.azureMethod;
    this._blueprint = config.blueprint;
    this._description = config.description;
    this._githubMethod.internalValue = config.githubMethod;
    this._gitlabMethod.internalValue = config.gitlabMethod;
    this._icon = config.icon;
    this._identifier = config.identifier;
    this._isViewRunAccess = config.isViewRunAccess;
    this._kafkaMethod.internalValue = config.kafkaMethod;
    this._publish = config.publish;
    this._requiredApproval = config.requiredApproval;
    this._selfServiceTrigger.internalValue = config.selfServiceTrigger;
    this._title = config.title;
    this._upsertEntityMethod.internalValue = config.upsertEntityMethod;
    this._webhookMethod.internalValue = config.webhookMethod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_email_notification - computed: false, optional: true, required: false
  private _approvalEmailNotification = new PortActionApprovalEmailNotificationOutputReference(this, "approval_email_notification");
  public get approvalEmailNotification() {
    return this._approvalEmailNotification;
  }
  public putApprovalEmailNotification(value: PortActionApprovalEmailNotification) {
    this._approvalEmailNotification.internalValue = value;
  }
  public resetApprovalEmailNotification() {
    this._approvalEmailNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalEmailNotificationInput() {
    return this._approvalEmailNotification.internalValue;
  }

  // approval_webhook_notification - computed: false, optional: true, required: false
  private _approvalWebhookNotification = new PortActionApprovalWebhookNotificationOutputReference(this, "approval_webhook_notification");
  public get approvalWebhookNotification() {
    return this._approvalWebhookNotification;
  }
  public putApprovalWebhookNotification(value: PortActionApprovalWebhookNotification) {
    this._approvalWebhookNotification.internalValue = value;
  }
  public resetApprovalWebhookNotification() {
    this._approvalWebhookNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalWebhookNotificationInput() {
    return this._approvalWebhookNotification.internalValue;
  }

  // automation_trigger - computed: false, optional: true, required: false
  private _automationTrigger = new PortActionAutomationTriggerOutputReference(this, "automation_trigger");
  public get automationTrigger() {
    return this._automationTrigger;
  }
  public putAutomationTrigger(value: PortActionAutomationTrigger) {
    this._automationTrigger.internalValue = value;
  }
  public resetAutomationTrigger() {
    this._automationTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationTriggerInput() {
    return this._automationTrigger.internalValue;
  }

  // azure_method - computed: false, optional: true, required: false
  private _azureMethod = new PortActionAzureMethodOutputReference(this, "azure_method");
  public get azureMethod() {
    return this._azureMethod;
  }
  public putAzureMethod(value: PortActionAzureMethod) {
    this._azureMethod.internalValue = value;
  }
  public resetAzureMethod() {
    this._azureMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMethodInput() {
    return this._azureMethod.internalValue;
  }

  // blueprint - computed: false, optional: true, required: false
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  public resetBlueprint() {
    this._blueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
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

  // github_method - computed: false, optional: true, required: false
  private _githubMethod = new PortActionGithubMethodOutputReference(this, "github_method");
  public get githubMethod() {
    return this._githubMethod;
  }
  public putGithubMethod(value: PortActionGithubMethod) {
    this._githubMethod.internalValue = value;
  }
  public resetGithubMethod() {
    this._githubMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubMethodInput() {
    return this._githubMethod.internalValue;
  }

  // gitlab_method - computed: false, optional: true, required: false
  private _gitlabMethod = new PortActionGitlabMethodOutputReference(this, "gitlab_method");
  public get gitlabMethod() {
    return this._gitlabMethod;
  }
  public putGitlabMethod(value: PortActionGitlabMethod) {
    this._gitlabMethod.internalValue = value;
  }
  public resetGitlabMethod() {
    this._gitlabMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabMethodInput() {
    return this._gitlabMethod.internalValue;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // is_view_run_access - computed: false, optional: true, required: false
  private _isViewRunAccess?: boolean | cdktf.IResolvable; 
  public get isViewRunAccess() {
    return this.getBooleanAttribute('is_view_run_access');
  }
  public set isViewRunAccess(value: boolean | cdktf.IResolvable) {
    this._isViewRunAccess = value;
  }
  public resetIsViewRunAccess() {
    this._isViewRunAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isViewRunAccessInput() {
    return this._isViewRunAccess;
  }

  // kafka_method - computed: false, optional: true, required: false
  private _kafkaMethod = new PortActionKafkaMethodOutputReference(this, "kafka_method");
  public get kafkaMethod() {
    return this._kafkaMethod;
  }
  public putKafkaMethod(value: PortActionKafkaMethod) {
    this._kafkaMethod.internalValue = value;
  }
  public resetKafkaMethod() {
    this._kafkaMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaMethodInput() {
    return this._kafkaMethod.internalValue;
  }

  // publish - computed: true, optional: true, required: false
  private _publish?: boolean | cdktf.IResolvable; 
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktf.IResolvable) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // required_approval - computed: false, optional: true, required: false
  private _requiredApproval?: string; 
  public get requiredApproval() {
    return this.getStringAttribute('required_approval');
  }
  public set requiredApproval(value: string) {
    this._requiredApproval = value;
  }
  public resetRequiredApproval() {
    this._requiredApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredApprovalInput() {
    return this._requiredApproval;
  }

  // self_service_trigger - computed: false, optional: true, required: false
  private _selfServiceTrigger = new PortActionSelfServiceTriggerOutputReference(this, "self_service_trigger");
  public get selfServiceTrigger() {
    return this._selfServiceTrigger;
  }
  public putSelfServiceTrigger(value: PortActionSelfServiceTrigger) {
    this._selfServiceTrigger.internalValue = value;
  }
  public resetSelfServiceTrigger() {
    this._selfServiceTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceTriggerInput() {
    return this._selfServiceTrigger.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // upsert_entity_method - computed: false, optional: true, required: false
  private _upsertEntityMethod = new PortActionUpsertEntityMethodOutputReference(this, "upsert_entity_method");
  public get upsertEntityMethod() {
    return this._upsertEntityMethod;
  }
  public putUpsertEntityMethod(value: PortActionUpsertEntityMethod) {
    this._upsertEntityMethod.internalValue = value;
  }
  public resetUpsertEntityMethod() {
    this._upsertEntityMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsertEntityMethodInput() {
    return this._upsertEntityMethod.internalValue;
  }

  // webhook_method - computed: false, optional: true, required: false
  private _webhookMethod = new PortActionWebhookMethodOutputReference(this, "webhook_method");
  public get webhookMethod() {
    return this._webhookMethod;
  }
  public putWebhookMethod(value: PortActionWebhookMethod) {
    this._webhookMethod.internalValue = value;
  }
  public resetWebhookMethod() {
    this._webhookMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookMethodInput() {
    return this._webhookMethod.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_email_notification: portActionApprovalEmailNotificationToTerraform(this._approvalEmailNotification.internalValue),
      approval_webhook_notification: portActionApprovalWebhookNotificationToTerraform(this._approvalWebhookNotification.internalValue),
      automation_trigger: portActionAutomationTriggerToTerraform(this._automationTrigger.internalValue),
      azure_method: portActionAzureMethodToTerraform(this._azureMethod.internalValue),
      blueprint: cdktf.stringToTerraform(this._blueprint),
      description: cdktf.stringToTerraform(this._description),
      github_method: portActionGithubMethodToTerraform(this._githubMethod.internalValue),
      gitlab_method: portActionGitlabMethodToTerraform(this._gitlabMethod.internalValue),
      icon: cdktf.stringToTerraform(this._icon),
      identifier: cdktf.stringToTerraform(this._identifier),
      is_view_run_access: cdktf.booleanToTerraform(this._isViewRunAccess),
      kafka_method: portActionKafkaMethodToTerraform(this._kafkaMethod.internalValue),
      publish: cdktf.booleanToTerraform(this._publish),
      required_approval: cdktf.stringToTerraform(this._requiredApproval),
      self_service_trigger: portActionSelfServiceTriggerToTerraform(this._selfServiceTrigger.internalValue),
      title: cdktf.stringToTerraform(this._title),
      upsert_entity_method: portActionUpsertEntityMethodToTerraform(this._upsertEntityMethod.internalValue),
      webhook_method: portActionWebhookMethodToTerraform(this._webhookMethod.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_email_notification: {
        value: portActionApprovalEmailNotificationToHclTerraform(this._approvalEmailNotification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionApprovalEmailNotification",
      },
      approval_webhook_notification: {
        value: portActionApprovalWebhookNotificationToHclTerraform(this._approvalWebhookNotification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionApprovalWebhookNotification",
      },
      automation_trigger: {
        value: portActionAutomationTriggerToHclTerraform(this._automationTrigger.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionAutomationTrigger",
      },
      azure_method: {
        value: portActionAzureMethodToHclTerraform(this._azureMethod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionAzureMethod",
      },
      blueprint: {
        value: cdktf.stringToHclTerraform(this._blueprint),
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
      github_method: {
        value: portActionGithubMethodToHclTerraform(this._githubMethod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionGithubMethod",
      },
      gitlab_method: {
        value: portActionGitlabMethodToHclTerraform(this._gitlabMethod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionGitlabMethod",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_view_run_access: {
        value: cdktf.booleanToHclTerraform(this._isViewRunAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kafka_method: {
        value: portActionKafkaMethodToHclTerraform(this._kafkaMethod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionKafkaMethod",
      },
      publish: {
        value: cdktf.booleanToHclTerraform(this._publish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required_approval: {
        value: cdktf.stringToHclTerraform(this._requiredApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_service_trigger: {
        value: portActionSelfServiceTriggerToHclTerraform(this._selfServiceTrigger.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionSelfServiceTrigger",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upsert_entity_method: {
        value: portActionUpsertEntityMethodToHclTerraform(this._upsertEntityMethod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionUpsertEntityMethod",
      },
      webhook_method: {
        value: portActionWebhookMethodToHclTerraform(this._webhookMethod.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortActionWebhookMethod",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
