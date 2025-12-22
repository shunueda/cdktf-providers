// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationLoadbalancerForwardingruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#application_loadbalancer_id ApplicationLoadbalancerForwardingrule#application_loadbalancer_id}
  */
  readonly applicationLoadbalancerId: string;
  /**
  * The maximum time in milliseconds to wait for the client to acknowledge or send data; default is 50,000 (50 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#client_timeout ApplicationLoadbalancerForwardingrule#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#datacenter_id ApplicationLoadbalancerForwardingrule#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#id ApplicationLoadbalancerForwardingrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Listening (inbound) IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#listener_ip ApplicationLoadbalancerForwardingrule#listener_ip}
  */
  readonly listenerIp: string;
  /**
  * Listening (inbound) port number; valid range is 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#listener_port ApplicationLoadbalancerForwardingrule#listener_port}
  */
  readonly listenerPort: number;
  /**
  * The name of the Application Load Balancer forwarding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#name ApplicationLoadbalancerForwardingrule#name}
  */
  readonly name: string;
  /**
  * Balancing protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#protocol ApplicationLoadbalancerForwardingrule#protocol}
  */
  readonly protocol: string;
  /**
  * Array of items in the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#server_certificates ApplicationLoadbalancerForwardingrule#server_certificates}
  */
  readonly serverCertificates?: string[];
  /**
  * http_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#http_rules ApplicationLoadbalancerForwardingrule#http_rules}
  */
  readonly httpRules?: ApplicationLoadbalancerForwardingruleHttpRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#timeouts ApplicationLoadbalancerForwardingrule#timeouts}
  */
  readonly timeouts?: ApplicationLoadbalancerForwardingruleTimeouts;
}
export interface ApplicationLoadbalancerForwardingruleHttpRulesConditions {
  /**
  * Matching rule for the HTTP rule condition attribute; mandatory for HEADER, PATH, QUERY, METHOD, HOST, and COOKIE types; must be null when type is SOURCE_IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#condition ApplicationLoadbalancerForwardingrule#condition}
  */
  readonly condition?: string;
  /**
  * Must be null when type is PATH, METHOD, HOST, or SOURCE_IP. Key can only be set when type is COOKIES, HEADER, or QUERY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#key ApplicationLoadbalancerForwardingrule#key}
  */
  readonly key?: string;
  /**
  * Specifies whether the condition is negated or not; the default is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#negate ApplicationLoadbalancerForwardingrule#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Type of the HTTP rule condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#type ApplicationLoadbalancerForwardingrule#type}
  */
  readonly type: string;
  /**
  * Mandatory for conditions CONTAINS, EQUALS, MATCHES, STARTS_WITH, ENDS_WITH; must be null when condition is EXISTS; should be a valid CIDR if provided and if type is SOURCE_IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#value ApplicationLoadbalancerForwardingrule#value}
  */
  readonly value?: string;
}

export function applicationLoadbalancerForwardingruleHttpRulesConditionsToTerraform(struct?: ApplicationLoadbalancerForwardingruleHttpRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    key: cdktf.stringToTerraform(struct!.key),
    negate: cdktf.booleanToTerraform(struct!.negate),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationLoadbalancerForwardingruleHttpRulesConditionsToHclTerraform(struct?: ApplicationLoadbalancerForwardingruleHttpRulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationLoadbalancerForwardingruleHttpRulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationLoadbalancerForwardingruleHttpRulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._key = undefined;
      this._negate = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._key = value.key;
      this._negate = value.negate;
      this._type = value.type;
      this._value = value.value;
    }
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

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
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

export class ApplicationLoadbalancerForwardingruleHttpRulesConditionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationLoadbalancerForwardingruleHttpRulesConditions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference {
    return new ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationLoadbalancerForwardingruleHttpRules {
  /**
  * Valid only for STATIC actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#content_type ApplicationLoadbalancerForwardingrule#content_type}
  */
  readonly contentType?: string;
  /**
  * Default is false; valid only for REDIRECT actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#drop_query ApplicationLoadbalancerForwardingrule#drop_query}
  */
  readonly dropQuery?: boolean | cdktf.IResolvable;
  /**
  * The location for redirecting; mandatory and valid only for REDIRECT actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#location ApplicationLoadbalancerForwardingrule#location}
  */
  readonly location?: string;
  /**
  * The unique name of the Application Load Balancer HTTP rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#name ApplicationLoadbalancerForwardingrule#name}
  */
  readonly name: string;
  /**
  * The response message of the request; mandatory for STATIC actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#response_message ApplicationLoadbalancerForwardingrule#response_message}
  */
  readonly responseMessage?: string;
  /**
  * Valid only for REDIRECT and STATIC actions. For REDIRECT actions, default is 301 and possible values are 301, 302, 303, 307, and 308. For STATIC actions, default is 503 and valid range is 200 to 599.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#status_code ApplicationLoadbalancerForwardingrule#status_code}
  */
  readonly statusCode?: number;
  /**
  * The ID of the target group; mandatory and only valid for FORWARD actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#target_group ApplicationLoadbalancerForwardingrule#target_group}
  */
  readonly targetGroup?: string;
  /**
  * Type of the HTTP rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#type ApplicationLoadbalancerForwardingrule#type}
  */
  readonly type: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#conditions ApplicationLoadbalancerForwardingrule#conditions}
  */
  readonly conditions?: ApplicationLoadbalancerForwardingruleHttpRulesConditions[] | cdktf.IResolvable;
}

export function applicationLoadbalancerForwardingruleHttpRulesToTerraform(struct?: ApplicationLoadbalancerForwardingruleHttpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    drop_query: cdktf.booleanToTerraform(struct!.dropQuery),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    response_message: cdktf.stringToTerraform(struct!.responseMessage),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    target_group: cdktf.stringToTerraform(struct!.targetGroup),
    type: cdktf.stringToTerraform(struct!.type),
    conditions: cdktf.listMapper(applicationLoadbalancerForwardingruleHttpRulesConditionsToTerraform, true)(struct!.conditions),
  }
}


export function applicationLoadbalancerForwardingruleHttpRulesToHclTerraform(struct?: ApplicationLoadbalancerForwardingruleHttpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_query: {
      value: cdktf.booleanToHclTerraform(struct!.dropQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    response_message: {
      value: cdktf.stringToHclTerraform(struct!.responseMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_group: {
      value: cdktf.stringToHclTerraform(struct!.targetGroup),
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
    conditions: {
      value: cdktf.listMapperHcl(applicationLoadbalancerForwardingruleHttpRulesConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationLoadbalancerForwardingruleHttpRulesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationLoadbalancerForwardingruleHttpRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationLoadbalancerForwardingruleHttpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._dropQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropQuery = this._dropQuery;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._responseMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMessage = this._responseMessage;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._targetGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationLoadbalancerForwardingruleHttpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._dropQuery = undefined;
      this._location = undefined;
      this._name = undefined;
      this._responseMessage = undefined;
      this._statusCode = undefined;
      this._targetGroup = undefined;
      this._type = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._dropQuery = value.dropQuery;
      this._location = value.location;
      this._name = value.name;
      this._responseMessage = value.responseMessage;
      this._statusCode = value.statusCode;
      this._targetGroup = value.targetGroup;
      this._type = value.type;
      this._conditions.internalValue = value.conditions;
    }
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // drop_query - computed: false, optional: true, required: false
  private _dropQuery?: boolean | cdktf.IResolvable; 
  public get dropQuery() {
    return this.getBooleanAttribute('drop_query');
  }
  public set dropQuery(value: boolean | cdktf.IResolvable) {
    this._dropQuery = value;
  }
  public resetDropQuery() {
    this._dropQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropQueryInput() {
    return this._dropQuery;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // response_message - computed: false, optional: true, required: false
  private _responseMessage?: string; 
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }
  public set responseMessage(value: string) {
    this._responseMessage = value;
  }
  public resetResponseMessage() {
    this._responseMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMessageInput() {
    return this._responseMessage;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // target_group - computed: false, optional: true, required: false
  private _targetGroup?: string; 
  public get targetGroup() {
    return this.getStringAttribute('target_group');
  }
  public set targetGroup(value: string) {
    this._targetGroup = value;
  }
  public resetTargetGroup() {
    this._targetGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup;
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

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ApplicationLoadbalancerForwardingruleHttpRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ApplicationLoadbalancerForwardingruleHttpRulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ApplicationLoadbalancerForwardingruleHttpRulesList extends cdktf.ComplexList {
  public internalValue? : ApplicationLoadbalancerForwardingruleHttpRules[] | cdktf.IResolvable

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
  public get(index: number): ApplicationLoadbalancerForwardingruleHttpRulesOutputReference {
    return new ApplicationLoadbalancerForwardingruleHttpRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationLoadbalancerForwardingruleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#create ApplicationLoadbalancerForwardingrule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#default ApplicationLoadbalancerForwardingrule#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#delete ApplicationLoadbalancerForwardingrule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#update ApplicationLoadbalancerForwardingrule#update}
  */
  readonly update?: string;
}

export function applicationLoadbalancerForwardingruleTimeoutsToTerraform(struct?: ApplicationLoadbalancerForwardingruleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function applicationLoadbalancerForwardingruleTimeoutsToHclTerraform(struct?: ApplicationLoadbalancerForwardingruleTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class ApplicationLoadbalancerForwardingruleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationLoadbalancerForwardingruleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationLoadbalancerForwardingruleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
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

/**
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule}
*/
export class ApplicationLoadbalancerForwardingrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_application_loadbalancer_forwardingrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationLoadbalancerForwardingrule to import
  * @param importFromId The id of the existing ApplicationLoadbalancerForwardingrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationLoadbalancerForwardingrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_application_loadbalancer_forwardingrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/resources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationLoadbalancerForwardingruleConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationLoadbalancerForwardingruleConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_application_loadbalancer_forwardingrule',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationLoadbalancerId = config.applicationLoadbalancerId;
    this._clientTimeout = config.clientTimeout;
    this._datacenterId = config.datacenterId;
    this._id = config.id;
    this._listenerIp = config.listenerIp;
    this._listenerPort = config.listenerPort;
    this._name = config.name;
    this._protocol = config.protocol;
    this._serverCertificates = config.serverCertificates;
    this._httpRules.internalValue = config.httpRules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_loadbalancer_id - computed: false, optional: false, required: true
  private _applicationLoadbalancerId?: string; 
  public get applicationLoadbalancerId() {
    return this.getStringAttribute('application_loadbalancer_id');
  }
  public set applicationLoadbalancerId(value: string) {
    this._applicationLoadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLoadbalancerIdInput() {
    return this._applicationLoadbalancerId;
  }

  // client_timeout - computed: true, optional: true, required: false
  private _clientTimeout?: number; 
  public get clientTimeout() {
    return this.getNumberAttribute('client_timeout');
  }
  public set clientTimeout(value: number) {
    this._clientTimeout = value;
  }
  public resetClientTimeout() {
    this._clientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimeoutInput() {
    return this._clientTimeout;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
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

  // listener_ip - computed: false, optional: false, required: true
  private _listenerIp?: string; 
  public get listenerIp() {
    return this.getStringAttribute('listener_ip');
  }
  public set listenerIp(value: string) {
    this._listenerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIpInput() {
    return this._listenerIp;
  }

  // listener_port - computed: false, optional: false, required: true
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // server_certificates - computed: false, optional: true, required: false
  private _serverCertificates?: string[]; 
  public get serverCertificates() {
    return cdktf.Fn.tolist(this.getListAttribute('server_certificates'));
  }
  public set serverCertificates(value: string[]) {
    this._serverCertificates = value;
  }
  public resetServerCertificates() {
    this._serverCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificatesInput() {
    return this._serverCertificates;
  }

  // http_rules - computed: false, optional: true, required: false
  private _httpRules = new ApplicationLoadbalancerForwardingruleHttpRulesList(this, "http_rules", false);
  public get httpRules() {
    return this._httpRules;
  }
  public putHttpRules(value: ApplicationLoadbalancerForwardingruleHttpRules[] | cdktf.IResolvable) {
    this._httpRules.internalValue = value;
  }
  public resetHttpRules() {
    this._httpRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRulesInput() {
    return this._httpRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApplicationLoadbalancerForwardingruleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApplicationLoadbalancerForwardingruleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_loadbalancer_id: cdktf.stringToTerraform(this._applicationLoadbalancerId),
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      id: cdktf.stringToTerraform(this._id),
      listener_ip: cdktf.stringToTerraform(this._listenerIp),
      listener_port: cdktf.numberToTerraform(this._listenerPort),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      server_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverCertificates),
      http_rules: cdktf.listMapper(applicationLoadbalancerForwardingruleHttpRulesToTerraform, true)(this._httpRules.internalValue),
      timeouts: applicationLoadbalancerForwardingruleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._applicationLoadbalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_timeout: {
        value: cdktf.numberToHclTerraform(this._clientTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
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
      listener_ip: {
        value: cdktf.stringToHclTerraform(this._listenerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_port: {
        value: cdktf.numberToHclTerraform(this._listenerPort),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverCertificates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_rules: {
        value: cdktf.listMapperHcl(applicationLoadbalancerForwardingruleHttpRulesToHclTerraform, true)(this._httpRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationLoadbalancerForwardingruleHttpRulesList",
      },
      timeouts: {
        value: applicationLoadbalancerForwardingruleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationLoadbalancerForwardingruleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
