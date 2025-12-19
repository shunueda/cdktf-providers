// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosEventsMessageIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#id AcosEventsMessageId#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify log message-id lineage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#log_msg AcosEventsMessageId#log_msg}
  */
  readonly logMsg: string;
  /**
  * 'all': Log messages at this level and all sub-trees; 'node-only': Log messages at this node only; 'children-only': Log messages at all sub-trees only; 'log-field-only': This is a log-field (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#message_id_scope_route AcosEventsMessageId#message_id_scope_route}
  */
  readonly messageIdScopeRoute: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#user_tag AcosEventsMessageId#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#uuid AcosEventsMessageId#uuid}
  */
  readonly uuid?: string;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#property AcosEventsMessageId#property}
  */
  readonly property?: AcosEventsMessageIdProperty;
}
export interface AcosEventsMessageIdPropertyLogRoute {
  /**
  * 'local-only': send logs to local-only; 'remote-only': send logs to remote-only; 'local-and-remote': send logs to both local and remote;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#log_route_val AcosEventsMessageId#log_route_val}
  */
  readonly logRouteVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#uuid AcosEventsMessageId#uuid}
  */
  readonly uuid?: string;
}

export function acosEventsMessageIdPropertyLogRouteToTerraform(struct?: AcosEventsMessageIdPropertyLogRouteOutputReference | AcosEventsMessageIdPropertyLogRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_route_val: cdktf.stringToTerraform(struct!.logRouteVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function acosEventsMessageIdPropertyLogRouteToHclTerraform(struct?: AcosEventsMessageIdPropertyLogRouteOutputReference | AcosEventsMessageIdPropertyLogRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_route_val: {
      value: cdktf.stringToHclTerraform(struct!.logRouteVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosEventsMessageIdPropertyLogRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcosEventsMessageIdPropertyLogRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logRouteVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRouteVal = this._logRouteVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosEventsMessageIdPropertyLogRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logRouteVal = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logRouteVal = value.logRouteVal;
      this._uuid = value.uuid;
    }
  }

  // log_route_val - computed: false, optional: true, required: false
  private _logRouteVal?: string; 
  public get logRouteVal() {
    return this.getStringAttribute('log_route_val');
  }
  public set logRouteVal(value: string) {
    this._logRouteVal = value;
  }
  public resetLogRouteVal() {
    this._logRouteVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRouteValInput() {
    return this._logRouteVal;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface AcosEventsMessageIdPropertyRateLimit {
  /**
  * 'enable': enable rate-limiting of logs; 'disable': disable rate-limiting of logs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#rate_limit_val AcosEventsMessageId#rate_limit_val}
  */
  readonly rateLimitVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#uuid AcosEventsMessageId#uuid}
  */
  readonly uuid?: string;
}

export function acosEventsMessageIdPropertyRateLimitToTerraform(struct?: AcosEventsMessageIdPropertyRateLimitOutputReference | AcosEventsMessageIdPropertyRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limit_val: cdktf.stringToTerraform(struct!.rateLimitVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function acosEventsMessageIdPropertyRateLimitToHclTerraform(struct?: AcosEventsMessageIdPropertyRateLimitOutputReference | AcosEventsMessageIdPropertyRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limit_val: {
      value: cdktf.stringToHclTerraform(struct!.rateLimitVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosEventsMessageIdPropertyRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcosEventsMessageIdPropertyRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimitVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitVal = this._rateLimitVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosEventsMessageIdPropertyRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimitVal = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimitVal = value.rateLimitVal;
      this._uuid = value.uuid;
    }
  }

  // rate_limit_val - computed: false, optional: true, required: false
  private _rateLimitVal?: string; 
  public get rateLimitVal() {
    return this.getStringAttribute('rate_limit_val');
  }
  public set rateLimitVal(value: string) {
    this._rateLimitVal = value;
  }
  public resetRateLimitVal() {
    this._rateLimitVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitValInput() {
    return this._rateLimitVal;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface AcosEventsMessageIdPropertySeverity {
  /**
  * 'emergency': System unusable log messages (Most Important); 'alert': Action must be taken immediately; 'critical': Critical conditions; 'error': Error conditions; 'warning': Warning conditions; 'notification': Normal but significant conditions; 'information': Informational messages; 'debugging': Debug level messages (Least Important);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#severity_val AcosEventsMessageId#severity_val}
  */
  readonly severityVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#uuid AcosEventsMessageId#uuid}
  */
  readonly uuid?: string;
}

export function acosEventsMessageIdPropertySeverityToTerraform(struct?: AcosEventsMessageIdPropertySeverityOutputReference | AcosEventsMessageIdPropertySeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity_val: cdktf.stringToTerraform(struct!.severityVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function acosEventsMessageIdPropertySeverityToHclTerraform(struct?: AcosEventsMessageIdPropertySeverityOutputReference | AcosEventsMessageIdPropertySeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity_val: {
      value: cdktf.stringToHclTerraform(struct!.severityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosEventsMessageIdPropertySeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcosEventsMessageIdPropertySeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityVal = this._severityVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosEventsMessageIdPropertySeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._severityVal = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._severityVal = value.severityVal;
      this._uuid = value.uuid;
    }
  }

  // severity_val - computed: false, optional: true, required: false
  private _severityVal?: string; 
  public get severityVal() {
    return this.getStringAttribute('severity_val');
  }
  public set severityVal(value: string) {
    this._severityVal = value;
  }
  public resetSeverityVal() {
    this._severityVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityValInput() {
    return this._severityVal;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface AcosEventsMessageIdProperty {
  /**
  * log_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#log_route AcosEventsMessageId#log_route}
  */
  readonly logRoute?: AcosEventsMessageIdPropertyLogRoute;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#rate_limit AcosEventsMessageId#rate_limit}
  */
  readonly rateLimit?: AcosEventsMessageIdPropertyRateLimit;
  /**
  * severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#severity AcosEventsMessageId#severity}
  */
  readonly severity?: AcosEventsMessageIdPropertySeverity;
}

export function acosEventsMessageIdPropertyToTerraform(struct?: AcosEventsMessageIdPropertyOutputReference | AcosEventsMessageIdProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_route: acosEventsMessageIdPropertyLogRouteToTerraform(struct!.logRoute),
    rate_limit: acosEventsMessageIdPropertyRateLimitToTerraform(struct!.rateLimit),
    severity: acosEventsMessageIdPropertySeverityToTerraform(struct!.severity),
  }
}


export function acosEventsMessageIdPropertyToHclTerraform(struct?: AcosEventsMessageIdPropertyOutputReference | AcosEventsMessageIdProperty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_route: {
      value: acosEventsMessageIdPropertyLogRouteToHclTerraform(struct!.logRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AcosEventsMessageIdPropertyLogRouteList",
    },
    rate_limit: {
      value: acosEventsMessageIdPropertyRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "list",
      storageClassType: "AcosEventsMessageIdPropertyRateLimitList",
    },
    severity: {
      value: acosEventsMessageIdPropertySeverityToHclTerraform(struct!.severity),
      isBlock: true,
      type: "list",
      storageClassType: "AcosEventsMessageIdPropertySeverityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosEventsMessageIdPropertyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcosEventsMessageIdProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRoute = this._logRoute?.internalValue;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosEventsMessageIdProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logRoute.internalValue = undefined;
      this._rateLimit.internalValue = undefined;
      this._severity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logRoute.internalValue = value.logRoute;
      this._rateLimit.internalValue = value.rateLimit;
      this._severity.internalValue = value.severity;
    }
  }

  // log_route - computed: false, optional: true, required: false
  private _logRoute = new AcosEventsMessageIdPropertyLogRouteOutputReference(this, "log_route");
  public get logRoute() {
    return this._logRoute;
  }
  public putLogRoute(value: AcosEventsMessageIdPropertyLogRoute) {
    this._logRoute.internalValue = value;
  }
  public resetLogRoute() {
    this._logRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRouteInput() {
    return this._logRoute.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new AcosEventsMessageIdPropertyRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: AcosEventsMessageIdPropertyRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // severity - computed: false, optional: true, required: false
  private _severity = new AcosEventsMessageIdPropertySeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: AcosEventsMessageIdPropertySeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id thunder_acos_events_message_id}
*/
export class AcosEventsMessageId extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_message_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosEventsMessageId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosEventsMessageId to import
  * @param importFromId The id of the existing AcosEventsMessageId that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosEventsMessageId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_message_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_message_id thunder_acos_events_message_id} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosEventsMessageIdConfig
  */
  public constructor(scope: Construct, id: string, config: AcosEventsMessageIdConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_message_id',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._logMsg = config.logMsg;
    this._messageIdScopeRoute = config.messageIdScopeRoute;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._property.internalValue = config.property;
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

  // log_msg - computed: false, optional: false, required: true
  private _logMsg?: string; 
  public get logMsg() {
    return this.getStringAttribute('log_msg');
  }
  public set logMsg(value: string) {
    this._logMsg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logMsgInput() {
    return this._logMsg;
  }

  // message_id_scope_route - computed: false, optional: false, required: true
  private _messageIdScopeRoute?: string; 
  public get messageIdScopeRoute() {
    return this.getStringAttribute('message_id_scope_route');
  }
  public set messageIdScopeRoute(value: string) {
    this._messageIdScopeRoute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdScopeRouteInput() {
    return this._messageIdScopeRoute;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // property - computed: false, optional: true, required: false
  private _property = new AcosEventsMessageIdPropertyOutputReference(this, "property");
  public get property() {
    return this._property;
  }
  public putProperty(value: AcosEventsMessageIdProperty) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      log_msg: cdktf.stringToTerraform(this._logMsg),
      message_id_scope_route: cdktf.stringToTerraform(this._messageIdScopeRoute),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      property: acosEventsMessageIdPropertyToTerraform(this._property.internalValue),
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
      log_msg: {
        value: cdktf.stringToHclTerraform(this._logMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_id_scope_route: {
        value: cdktf.stringToHclTerraform(this._messageIdScopeRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property: {
        value: acosEventsMessageIdPropertyToHclTerraform(this._property.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcosEventsMessageIdPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
