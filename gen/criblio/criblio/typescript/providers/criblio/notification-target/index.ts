// https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of this notification target instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#id NotificationTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#pager_duty_target NotificationTarget#pager_duty_target}
  */
  readonly pagerDutyTarget?: NotificationTargetPagerDutyTarget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#slack_target NotificationTarget#slack_target}
  */
  readonly slackTarget?: NotificationTargetSlackTarget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#smtp_target NotificationTarget#smtp_target}
  */
  readonly smtpTarget?: NotificationTargetSmtpTarget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#sns_target NotificationTarget#sns_target}
  */
  readonly snsTarget?: NotificationTargetSnsTarget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#webhook_target NotificationTarget#webhook_target}
  */
  readonly webhookTarget?: NotificationTargetWebhookTarget;
}
export interface NotificationTargetPagerDutyTarget {
  /**
  * Optional, default class value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#class NotificationTarget#class}
  */
  readonly class?: string;
  /**
  * Optional, default component value. Default: "logstream"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#component NotificationTarget#component}
  */
  readonly component?: string;
  /**
  * Optional, default group value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#group NotificationTarget#group}
  */
  readonly group?: string;
  /**
  * Unique ID for this notification target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#id NotificationTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * 32-character integration key for an integration on a service or global ruleset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#routing_key NotificationTarget#routing_key}
  */
  readonly routingKey: string;
  /**
  * Default value for message severity. Defaults to info. The __severity value, if set, will overwrite this. Default: "info"; must be one of ["info", "warning", "error", "critical"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#severity NotificationTarget#severity}
  */
  readonly severity?: string;
  /**
  * Fields to automatically add to events, such as cribl_pipe. Supports wildcards. Default: ["cribl_host"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#system_fields NotificationTarget#system_fields}
  */
  readonly systemFields?: string[];
  /**
  * must be "pager_duty"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#type NotificationTarget#type}
  */
  readonly type: string;
}

export function notificationTargetPagerDutyTargetToTerraform(struct?: NotificationTargetPagerDutyTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    component: cdktf.stringToTerraform(struct!.component),
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.stringToTerraform(struct!.id),
    routing_key: cdktf.stringToTerraform(struct!.routingKey),
    severity: cdktf.stringToTerraform(struct!.severity),
    system_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemFields),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function notificationTargetPagerDutyTargetToHclTerraform(struct?: NotificationTargetPagerDutyTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    system_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class NotificationTargetPagerDutyTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTargetPagerDutyTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._routingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingKey = this._routingKey;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._systemFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemFields = this._systemFields;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTargetPagerDutyTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._component = undefined;
      this._group = undefined;
      this._id = undefined;
      this._routingKey = undefined;
      this._severity = undefined;
      this._systemFields = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._component = value.component;
      this._group = value.group;
      this._id = value.id;
      this._routingKey = value.routingKey;
      this._severity = value.severity;
      this._systemFields = value.systemFields;
      this._type = value.type;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // component - computed: true, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // severity - computed: true, optional: true, required: false
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

  // system_fields - computed: true, optional: true, required: false
  private _systemFields?: string[]; 
  public get systemFields() {
    return this.getListAttribute('system_fields');
  }
  public set systemFields(value: string[]) {
    this._systemFields = value;
  }
  public resetSystemFields() {
    this._systemFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemFieldsInput() {
    return this._systemFields;
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
export interface NotificationTargetSlackTarget {
  /**
  * Unique ID for this notification target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#id NotificationTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Fields to automatically add to events, such as cribl_pipe. Supports wildcards. Default: ["cribl_host"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#system_fields NotificationTarget#system_fields}
  */
  readonly systemFields?: string[];
  /**
  * must be "slack"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#type NotificationTarget#type}
  */
  readonly type: string;
  /**
  * Slack's Incoming Webhook URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#url NotificationTarget#url}
  */
  readonly url: string;
}

export function notificationTargetSlackTargetToTerraform(struct?: NotificationTargetSlackTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    system_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemFields),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function notificationTargetSlackTargetToHclTerraform(struct?: NotificationTargetSlackTarget | cdktf.IResolvable): any {
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
    system_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class NotificationTargetSlackTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTargetSlackTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._systemFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemFields = this._systemFields;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTargetSlackTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._systemFields = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._systemFields = value.systemFields;
      this._type = value.type;
      this._url = value.url;
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

  // system_fields - computed: true, optional: true, required: false
  private _systemFields?: string[]; 
  public get systemFields() {
    return this.getListAttribute('system_fields');
  }
  public set systemFields(value: string[]) {
    this._systemFields = value;
  }
  public resetSystemFields() {
    this._systemFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemFieldsInput() {
    return this._systemFields;
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
export interface NotificationTargetSmtpTargetTls {
  /**
  * Maximum TLS version to accept. Default: "TLSv1.3"; must be one of ["TLSv1", "TLSv1.1", "TLSv1.2", "TLSv1.3"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#max_version NotificationTarget#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Minimum TLS version to accept. Default: "TLSv1.2"; must be one of ["TLSv1", "TLSv1.1", "TLSv1.2", "TLSv1.3"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#min_version NotificationTarget#min_version}
  */
  readonly minVersion?: string;
  /**
  * Whether to reject unauthorized certificates. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#reject_unauthorized NotificationTarget#reject_unauthorized}
  */
  readonly rejectUnauthorized?: boolean | cdktf.IResolvable;
}

export function notificationTargetSmtpTargetTlsToTerraform(struct?: NotificationTargetSmtpTargetTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    reject_unauthorized: cdktf.booleanToTerraform(struct!.rejectUnauthorized),
  }
}


export function notificationTargetSmtpTargetTlsToHclTerraform(struct?: NotificationTargetSmtpTargetTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.rejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTargetSmtpTargetTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTargetSmtpTargetTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._rejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectUnauthorized = this._rejectUnauthorized;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTargetSmtpTargetTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._rejectUnauthorized = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._rejectUnauthorized = value.rejectUnauthorized;
    }
  }

  // max_version - computed: true, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: true, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // reject_unauthorized - computed: true, optional: true, required: false
  private _rejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }
  public set rejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._rejectUnauthorized = value;
  }
  public resetRejectUnauthorized() {
    this._rejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnauthorizedInput() {
    return this._rejectUnauthorized;
  }
}
export interface NotificationTargetSmtpTarget {
  /**
  * Encryption method for SMTP. Default: "NONE"; must be one of ["NONE", "STARTTLS", "SSL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#encryption_option NotificationTarget#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Email address to send from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#from NotificationTarget#from}
  */
  readonly from: string;
  /**
  * SMTP server hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#host NotificationTarget#host}
  */
  readonly host: string;
  /**
  * Unique ID for this notification target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#id NotificationTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * SMTP authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#password NotificationTarget#password}
  */
  readonly password?: string;
  /**
  * SMTP server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#port NotificationTarget#port}
  */
  readonly port: number;
  /**
  * Fields to automatically add to events, such as cribl_pipe. Supports wildcards. Default: ["cribl_host"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#system_fields NotificationTarget#system_fields}
  */
  readonly systemFields?: string[];
  /**
  * TLS configuration options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#tls NotificationTarget#tls}
  */
  readonly tls?: NotificationTargetSmtpTargetTls;
  /**
  * must be "smtp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#type NotificationTarget#type}
  */
  readonly type: string;
  /**
  * SMTP authentication username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#username NotificationTarget#username}
  */
  readonly username?: string;
}

export function notificationTargetSmtpTargetToTerraform(struct?: NotificationTargetSmtpTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    from: cdktf.stringToTerraform(struct!.from),
    host: cdktf.stringToTerraform(struct!.host),
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    system_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemFields),
    tls: notificationTargetSmtpTargetTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function notificationTargetSmtpTargetToHclTerraform(struct?: NotificationTargetSmtpTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_option: {
      value: cdktf.stringToHclTerraform(struct!.encryptionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    system_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls: {
      value: notificationTargetSmtpTargetTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "NotificationTargetSmtpTargetTls",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTargetSmtpTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTargetSmtpTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._systemFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemFields = this._systemFields;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTargetSmtpTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionOption = undefined;
      this._from = undefined;
      this._host = undefined;
      this._id = undefined;
      this._password = undefined;
      this._port = undefined;
      this._systemFields = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionOption = value.encryptionOption;
      this._from = value.from;
      this._host = value.host;
      this._id = value.id;
      this._password = value.password;
      this._port = value.port;
      this._systemFields = value.systemFields;
      this._tls.internalValue = value.tls;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // encryption_option - computed: true, optional: true, required: false
  private _encryptionOption?: string; 
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // system_fields - computed: true, optional: true, required: false
  private _systemFields?: string[]; 
  public get systemFields() {
    return this.getListAttribute('system_fields');
  }
  public set systemFields(value: string[]) {
    this._systemFields = value;
  }
  public resetSystemFields() {
    this._systemFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemFieldsInput() {
    return this._systemFields;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new NotificationTargetSmtpTargetTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: NotificationTargetSmtpTargetTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface NotificationTargetSnsTarget {
  /**
  * Wildcard list of allowed phone numbers. This is not enforced if the notification is sent to topic. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#allowlist NotificationTarget#allowlist}
  */
  readonly allowlist?: string[];
  /**
  * ARN of the role to assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#assume_role_arn NotificationTarget#assume_role_arn}
  */
  readonly assumeRoleArn?: string;
  /**
  * External ID for role assumption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#assume_role_external_id NotificationTarget#assume_role_external_id}
  */
  readonly assumeRoleExternalId?: string;
  /**
  * AWS access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#aws_api_key NotificationTarget#aws_api_key}
  */
  readonly awsApiKey?: string;
  /**
  * AWS authentication method. must be one of ["auto", "manual", "secret"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#aws_authentication_method NotificationTarget#aws_authentication_method}
  */
  readonly awsAuthenticationMethod?: string;
  /**
  * AWS secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#aws_secret_key NotificationTarget#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * The type of destination to send notifications to. Default: "topic"; must be one of ["phoneNumber", "topic"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#destination_type NotificationTarget#destination_type}
  */
  readonly destinationType?: string;
  /**
  * SNS endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#endpoint NotificationTarget#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Unique ID for this notification target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#id NotificationTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Message group ID for FIFO topics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#message_group_id NotificationTarget#message_group_id}
  */
  readonly messageGroupId?: string;
  /**
  * The default phone number to send the notification to. This value can be overridden by the notification event __phoneNumber field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#phone_number NotificationTarget#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#region NotificationTarget#region}
  */
  readonly region: string;
  /**
  * Fields to automatically add to events, such as cribl_pipe. Supports wildcards. Default: ["cribl_host"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#system_fields NotificationTarget#system_fields}
  */
  readonly systemFields?: string[];
  /**
  * The default ARN of the SNS topic to send notifications to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#topic_arn NotificationTarget#topic_arn}
  */
  readonly topicArn?: string;
  /**
  * Type of the topic selected in AWS SNS. Default: "fifo"; must be one of ["standard", "fifo"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#topic_type NotificationTarget#topic_type}
  */
  readonly topicType?: string;
  /**
  * must be "sns"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#type NotificationTarget#type}
  */
  readonly type: string;
}

export function notificationTargetSnsTargetToTerraform(struct?: NotificationTargetSnsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowlist),
    assume_role_arn: cdktf.stringToTerraform(struct!.assumeRoleArn),
    assume_role_external_id: cdktf.stringToTerraform(struct!.assumeRoleExternalId),
    aws_api_key: cdktf.stringToTerraform(struct!.awsApiKey),
    aws_authentication_method: cdktf.stringToTerraform(struct!.awsAuthenticationMethod),
    aws_secret_key: cdktf.stringToTerraform(struct!.awsSecretKey),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    message_group_id: cdktf.stringToTerraform(struct!.messageGroupId),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
    region: cdktf.stringToTerraform(struct!.region),
    system_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemFields),
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
    topic_type: cdktf.stringToTerraform(struct!.topicType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function notificationTargetSnsTargetToHclTerraform(struct?: NotificationTargetSnsTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowlist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    assume_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assume_role_external_id: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_api_key: {
      value: cdktf.stringToHclTerraform(struct!.awsApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.awsAuthenticationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_group_id: {
      value: cdktf.stringToHclTerraform(struct!.messageGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topic_arn: {
      value: cdktf.stringToHclTerraform(struct!.topicArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_type: {
      value: cdktf.stringToHclTerraform(struct!.topicType),
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

export class NotificationTargetSnsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTargetSnsTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlist = this._allowlist;
    }
    if (this._assumeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleArn = this._assumeRoleArn;
    }
    if (this._assumeRoleExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleExternalId = this._assumeRoleExternalId;
    }
    if (this._awsApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsApiKey = this._awsApiKey;
    }
    if (this._awsAuthenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAuthenticationMethod = this._awsAuthenticationMethod;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._messageGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupId = this._messageGroupId;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._systemFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemFields = this._systemFields;
    }
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    if (this._topicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicType = this._topicType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTargetSnsTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowlist = undefined;
      this._assumeRoleArn = undefined;
      this._assumeRoleExternalId = undefined;
      this._awsApiKey = undefined;
      this._awsAuthenticationMethod = undefined;
      this._awsSecretKey = undefined;
      this._destinationType = undefined;
      this._endpoint = undefined;
      this._id = undefined;
      this._messageGroupId = undefined;
      this._phoneNumber = undefined;
      this._region = undefined;
      this._systemFields = undefined;
      this._topicArn = undefined;
      this._topicType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowlist = value.allowlist;
      this._assumeRoleArn = value.assumeRoleArn;
      this._assumeRoleExternalId = value.assumeRoleExternalId;
      this._awsApiKey = value.awsApiKey;
      this._awsAuthenticationMethod = value.awsAuthenticationMethod;
      this._awsSecretKey = value.awsSecretKey;
      this._destinationType = value.destinationType;
      this._endpoint = value.endpoint;
      this._id = value.id;
      this._messageGroupId = value.messageGroupId;
      this._phoneNumber = value.phoneNumber;
      this._region = value.region;
      this._systemFields = value.systemFields;
      this._topicArn = value.topicArn;
      this._topicType = value.topicType;
      this._type = value.type;
    }
  }

  // allowlist - computed: true, optional: true, required: false
  private _allowlist?: string[]; 
  public get allowlist() {
    return this.getListAttribute('allowlist');
  }
  public set allowlist(value: string[]) {
    this._allowlist = value;
  }
  public resetAllowlist() {
    this._allowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist;
  }

  // assume_role_arn - computed: false, optional: true, required: false
  private _assumeRoleArn?: string; 
  public get assumeRoleArn() {
    return this.getStringAttribute('assume_role_arn');
  }
  public set assumeRoleArn(value: string) {
    this._assumeRoleArn = value;
  }
  public resetAssumeRoleArn() {
    this._assumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleArnInput() {
    return this._assumeRoleArn;
  }

  // assume_role_external_id - computed: false, optional: true, required: false
  private _assumeRoleExternalId?: string; 
  public get assumeRoleExternalId() {
    return this.getStringAttribute('assume_role_external_id');
  }
  public set assumeRoleExternalId(value: string) {
    this._assumeRoleExternalId = value;
  }
  public resetAssumeRoleExternalId() {
    this._assumeRoleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleExternalIdInput() {
    return this._assumeRoleExternalId;
  }

  // aws_api_key - computed: false, optional: true, required: false
  private _awsApiKey?: string; 
  public get awsApiKey() {
    return this.getStringAttribute('aws_api_key');
  }
  public set awsApiKey(value: string) {
    this._awsApiKey = value;
  }
  public resetAwsApiKey() {
    this._awsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsApiKeyInput() {
    return this._awsApiKey;
  }

  // aws_authentication_method - computed: false, optional: true, required: false
  private _awsAuthenticationMethod?: string; 
  public get awsAuthenticationMethod() {
    return this.getStringAttribute('aws_authentication_method');
  }
  public set awsAuthenticationMethod(value: string) {
    this._awsAuthenticationMethod = value;
  }
  public resetAwsAuthenticationMethod() {
    this._awsAuthenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAuthenticationMethodInput() {
    return this._awsAuthenticationMethod;
  }

  // aws_secret_key - computed: false, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // destination_type - computed: true, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // message_group_id - computed: false, optional: true, required: false
  private _messageGroupId?: string; 
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }
  public set messageGroupId(value: string) {
    this._messageGroupId = value;
  }
  public resetMessageGroupId() {
    this._messageGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupIdInput() {
    return this._messageGroupId;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // system_fields - computed: true, optional: true, required: false
  private _systemFields?: string[]; 
  public get systemFields() {
    return this.getListAttribute('system_fields');
  }
  public set systemFields(value: string[]) {
    this._systemFields = value;
  }
  public resetSystemFields() {
    this._systemFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemFieldsInput() {
    return this._systemFields;
  }

  // topic_arn - computed: false, optional: true, required: false
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  public resetTopicArn() {
    this._topicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }

  // topic_type - computed: true, optional: true, required: false
  private _topicType?: string; 
  public get topicType() {
    return this.getStringAttribute('topic_type');
  }
  public set topicType(value: string) {
    this._topicType = value;
  }
  public resetTopicType() {
    this._topicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicTypeInput() {
    return this._topicType;
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
export interface NotificationTargetWebhookTarget {
  /**
  * Authentication method for the webhook. Default: "none"; must be one of ["none", "token", "basic"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#auth_type NotificationTarget#auth_type}
  */
  readonly authType?: string;
  /**
  * Format of the webhook payload. must be one of ["ndjson", "json_array", "custom"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#format NotificationTarget#format}
  */
  readonly format: string;
  /**
  * Unique ID for this notification target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#id NotificationTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * HTTP method to use for the webhook. must be one of ["POST", "PATCH", "PUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#method NotificationTarget#method}
  */
  readonly method: string;
  /**
  * Basic authentication password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#password NotificationTarget#password}
  */
  readonly password?: string;
  /**
  * Fields to automatically add to events, such as cribl_pipe. Supports wildcards. Default: ["cribl_host"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#system_fields NotificationTarget#system_fields}
  */
  readonly systemFields?: string[];
  /**
  * Authentication token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#token NotificationTarget#token}
  */
  readonly token?: string;
  /**
  * must be "webhook"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#type NotificationTarget#type}
  */
  readonly type: string;
  /**
  * URL to send the webhook to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#url NotificationTarget#url}
  */
  readonly url: string;
  /**
  * Basic authentication username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#username NotificationTarget#username}
  */
  readonly username?: string;
}

export function notificationTargetWebhookTargetToTerraform(struct?: NotificationTargetWebhookTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    format: cdktf.stringToTerraform(struct!.format),
    id: cdktf.stringToTerraform(struct!.id),
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
    system_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemFields),
    token: cdktf.stringToTerraform(struct!.token),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function notificationTargetWebhookTargetToHclTerraform(struct?: NotificationTargetWebhookTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTargetWebhookTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationTargetWebhookTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._systemFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemFields = this._systemFields;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTargetWebhookTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._format = undefined;
      this._id = undefined;
      this._method = undefined;
      this._password = undefined;
      this._systemFields = undefined;
      this._token = undefined;
      this._type = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._format = value.format;
      this._id = value.id;
      this._method = value.method;
      this._password = value.password;
      this._systemFields = value.systemFields;
      this._token = value.token;
      this._type = value.type;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // system_fields - computed: true, optional: true, required: false
  private _systemFields?: string[]; 
  public get systemFields() {
    return this.getListAttribute('system_fields');
  }
  public set systemFields(value: string[]) {
    this._systemFields = value;
  }
  public resetSystemFields() {
    this._systemFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemFieldsInput() {
    return this._systemFields;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target criblio_notification_target}
*/
export class NotificationTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_notification_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationTarget to import
  * @param importFromId The id of the existing NotificationTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_notification_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/resources/notification_target criblio_notification_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationTargetConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_notification_target',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.59',
        providerVersionConstraint: '1.20.59'
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
    this._pagerDutyTarget.internalValue = config.pagerDutyTarget;
    this._slackTarget.internalValue = config.slackTarget;
    this._smtpTarget.internalValue = config.smtpTarget;
    this._snsTarget.internalValue = config.snsTarget;
    this._webhookTarget.internalValue = config.webhookTarget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // items - computed: true, optional: false, required: false
  private _items = new cdktf.StringMapList(this, "items", false);
  public get items() {
    return this._items;
  }

  // pager_duty_target - computed: false, optional: true, required: false
  private _pagerDutyTarget = new NotificationTargetPagerDutyTargetOutputReference(this, "pager_duty_target");
  public get pagerDutyTarget() {
    return this._pagerDutyTarget;
  }
  public putPagerDutyTarget(value: NotificationTargetPagerDutyTarget) {
    this._pagerDutyTarget.internalValue = value;
  }
  public resetPagerDutyTarget() {
    this._pagerDutyTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerDutyTargetInput() {
    return this._pagerDutyTarget.internalValue;
  }

  // slack_target - computed: false, optional: true, required: false
  private _slackTarget = new NotificationTargetSlackTargetOutputReference(this, "slack_target");
  public get slackTarget() {
    return this._slackTarget;
  }
  public putSlackTarget(value: NotificationTargetSlackTarget) {
    this._slackTarget.internalValue = value;
  }
  public resetSlackTarget() {
    this._slackTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackTargetInput() {
    return this._slackTarget.internalValue;
  }

  // smtp_target - computed: false, optional: true, required: false
  private _smtpTarget = new NotificationTargetSmtpTargetOutputReference(this, "smtp_target");
  public get smtpTarget() {
    return this._smtpTarget;
  }
  public putSmtpTarget(value: NotificationTargetSmtpTarget) {
    this._smtpTarget.internalValue = value;
  }
  public resetSmtpTarget() {
    this._smtpTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpTargetInput() {
    return this._smtpTarget.internalValue;
  }

  // sns_target - computed: false, optional: true, required: false
  private _snsTarget = new NotificationTargetSnsTargetOutputReference(this, "sns_target");
  public get snsTarget() {
    return this._snsTarget;
  }
  public putSnsTarget(value: NotificationTargetSnsTarget) {
    this._snsTarget.internalValue = value;
  }
  public resetSnsTarget() {
    this._snsTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTargetInput() {
    return this._snsTarget.internalValue;
  }

  // webhook_target - computed: false, optional: true, required: false
  private _webhookTarget = new NotificationTargetWebhookTargetOutputReference(this, "webhook_target");
  public get webhookTarget() {
    return this._webhookTarget;
  }
  public putWebhookTarget(value: NotificationTargetWebhookTarget) {
    this._webhookTarget.internalValue = value;
  }
  public resetWebhookTarget() {
    this._webhookTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookTargetInput() {
    return this._webhookTarget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pager_duty_target: notificationTargetPagerDutyTargetToTerraform(this._pagerDutyTarget.internalValue),
      slack_target: notificationTargetSlackTargetToTerraform(this._slackTarget.internalValue),
      smtp_target: notificationTargetSmtpTargetToTerraform(this._smtpTarget.internalValue),
      sns_target: notificationTargetSnsTargetToTerraform(this._snsTarget.internalValue),
      webhook_target: notificationTargetWebhookTargetToTerraform(this._webhookTarget.internalValue),
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
      pager_duty_target: {
        value: notificationTargetPagerDutyTargetToHclTerraform(this._pagerDutyTarget.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationTargetPagerDutyTarget",
      },
      slack_target: {
        value: notificationTargetSlackTargetToHclTerraform(this._slackTarget.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationTargetSlackTarget",
      },
      smtp_target: {
        value: notificationTargetSmtpTargetToHclTerraform(this._smtpTarget.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationTargetSmtpTarget",
      },
      sns_target: {
        value: notificationTargetSnsTargetToHclTerraform(this._snsTarget.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationTargetSnsTarget",
      },
      webhook_target: {
        value: notificationTargetWebhookTargetToHclTerraform(this._webhookTarget.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationTargetWebhookTarget",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
