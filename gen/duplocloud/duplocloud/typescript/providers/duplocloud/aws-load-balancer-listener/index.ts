// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsLoadBalancerListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ARN of the certificate to attach to the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#certificate_arn AwsLoadBalancerListener#certificate_arn}
  */
  readonly certificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#id AwsLoadBalancerListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The short name of the load balancer.  Duplo will add a prefix to the name.  You can retrieve the full name from the `fullname` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#load_balancer_name AwsLoadBalancerListener#load_balancer_name}
  */
  readonly loadBalancerName: string;
  /**
  * Port on which the load balancer is listening.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#port AwsLoadBalancerListener#port}
  */
  readonly port: number;
  /**
  * Protocol for connections from clients to the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#protocol AwsLoadBalancerListener#protocol}
  */
  readonly protocol: string;
  /**
  * ARN of the Target Group to which to route traffic. target_group_arn has moved to default_actions.forward.target_group_arn. This field is available for backward compatibility. We recommend to use default_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#target_group_arn AwsLoadBalancerListener#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * The GUID of the tenant that the load balancer will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#tenant_id AwsLoadBalancerListener#tenant_id}
  */
  readonly tenantId: string;
  /**
  * default_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#default_actions AwsLoadBalancerListener#default_actions}
  */
  readonly defaultActions?: AwsLoadBalancerListenerDefaultActions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#timeouts AwsLoadBalancerListener#timeouts}
  */
  readonly timeouts?: AwsLoadBalancerListenerTimeouts;
}
export interface AwsLoadBalancerListenerCertificates {
}

export function awsLoadBalancerListenerCertificatesToTerraform(struct?: AwsLoadBalancerListenerCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function awsLoadBalancerListenerCertificatesToHclTerraform(struct?: AwsLoadBalancerListenerCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AwsLoadBalancerListenerCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AwsLoadBalancerListenerCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLoadBalancerListenerCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
}

export class AwsLoadBalancerListenerCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): AwsLoadBalancerListenerCertificatesOutputReference {
    return new AwsLoadBalancerListenerCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsLoadBalancerListenerDefaultActionsFixedResponse {
  /**
  * Defaults to `text/plain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#content_type AwsLoadBalancerListener#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#message_body AwsLoadBalancerListener#message_body}
  */
  readonly messageBody?: string;
  /**
  * Defaults to `200`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#status_code AwsLoadBalancerListener#status_code}
  */
  readonly statusCode?: string;
}

export function awsLoadBalancerListenerDefaultActionsFixedResponseToTerraform(struct?: AwsLoadBalancerListenerDefaultActionsFixedResponseOutputReference | AwsLoadBalancerListenerDefaultActionsFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function awsLoadBalancerListenerDefaultActionsFixedResponseToHclTerraform(struct?: AwsLoadBalancerListenerDefaultActionsFixedResponseOutputReference | AwsLoadBalancerListenerDefaultActionsFixedResponse): any {
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
    message_body: {
      value: cdktf.stringToHclTerraform(struct!.messageBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLoadBalancerListenerDefaultActionsFixedResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLoadBalancerListenerDefaultActionsFixedResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLoadBalancerListenerDefaultActionsFixedResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: false, optional: true, required: false
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

  // message_body - computed: false, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface AwsLoadBalancerListenerDefaultActionsForward {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#target_group_arn AwsLoadBalancerListener#target_group_arn}
  */
  readonly targetGroupArn: string;
}

export function awsLoadBalancerListenerDefaultActionsForwardToTerraform(struct?: AwsLoadBalancerListenerDefaultActionsForwardOutputReference | AwsLoadBalancerListenerDefaultActionsForward): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}


export function awsLoadBalancerListenerDefaultActionsForwardToHclTerraform(struct?: AwsLoadBalancerListenerDefaultActionsForwardOutputReference | AwsLoadBalancerListenerDefaultActionsForward): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLoadBalancerListenerDefaultActionsForwardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLoadBalancerListenerDefaultActionsForward | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLoadBalancerListenerDefaultActionsForward | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetGroupArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetGroupArn = value.targetGroupArn;
    }
  }

  // target_group_arn - computed: false, optional: false, required: true
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }
}
export interface AwsLoadBalancerListenerDefaultActionsRedirect {
  /**
  * Defaults to `#{host}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#host AwsLoadBalancerListener#host}
  */
  readonly host?: string;
  /**
  * Defaults to `/#{path}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#path AwsLoadBalancerListener#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#port AwsLoadBalancerListener#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#protocol AwsLoadBalancerListener#protocol}
  */
  readonly protocol: string;
  /**
  * Defaults to `#{query}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#query AwsLoadBalancerListener#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#status_code AwsLoadBalancerListener#status_code}
  */
  readonly statusCode: string;
}

export function awsLoadBalancerListenerDefaultActionsRedirectToTerraform(struct?: AwsLoadBalancerListenerDefaultActionsRedirectOutputReference | AwsLoadBalancerListenerDefaultActionsRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query: cdktf.stringToTerraform(struct!.query),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function awsLoadBalancerListenerDefaultActionsRedirectToHclTerraform(struct?: AwsLoadBalancerListenerDefaultActionsRedirectOutputReference | AwsLoadBalancerListenerDefaultActionsRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLoadBalancerListenerDefaultActionsRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLoadBalancerListenerDefaultActionsRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLoadBalancerListenerDefaultActionsRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._query = value.query;
      this._statusCode = value.statusCode;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface AwsLoadBalancerListenerDefaultActions {
  /**
  * fixed_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#fixed_response AwsLoadBalancerListener#fixed_response}
  */
  readonly fixedResponse?: AwsLoadBalancerListenerDefaultActionsFixedResponse;
  /**
  * forward block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#forward AwsLoadBalancerListener#forward}
  */
  readonly forward?: AwsLoadBalancerListenerDefaultActionsForward;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#redirect AwsLoadBalancerListener#redirect}
  */
  readonly redirect?: AwsLoadBalancerListenerDefaultActionsRedirect;
}

export function awsLoadBalancerListenerDefaultActionsToTerraform(struct?: AwsLoadBalancerListenerDefaultActionsOutputReference | AwsLoadBalancerListenerDefaultActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_response: awsLoadBalancerListenerDefaultActionsFixedResponseToTerraform(struct!.fixedResponse),
    forward: awsLoadBalancerListenerDefaultActionsForwardToTerraform(struct!.forward),
    redirect: awsLoadBalancerListenerDefaultActionsRedirectToTerraform(struct!.redirect),
  }
}


export function awsLoadBalancerListenerDefaultActionsToHclTerraform(struct?: AwsLoadBalancerListenerDefaultActionsOutputReference | AwsLoadBalancerListenerDefaultActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_response: {
      value: awsLoadBalancerListenerDefaultActionsFixedResponseToHclTerraform(struct!.fixedResponse),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLoadBalancerListenerDefaultActionsFixedResponseList",
    },
    forward: {
      value: awsLoadBalancerListenerDefaultActionsForwardToHclTerraform(struct!.forward),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLoadBalancerListenerDefaultActionsForwardList",
    },
    redirect: {
      value: awsLoadBalancerListenerDefaultActionsRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLoadBalancerListenerDefaultActionsRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLoadBalancerListenerDefaultActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLoadBalancerListenerDefaultActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLoadBalancerListenerDefaultActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedResponse.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._forward.internalValue = value.forward;
      this._redirect.internalValue = value.redirect;
    }
  }

  // fixed_response - computed: false, optional: true, required: false
  private _fixedResponse = new AwsLoadBalancerListenerDefaultActionsFixedResponseOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: AwsLoadBalancerListenerDefaultActionsFixedResponse) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new AwsLoadBalancerListenerDefaultActionsForwardOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: AwsLoadBalancerListenerDefaultActionsForward) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new AwsLoadBalancerListenerDefaultActionsRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: AwsLoadBalancerListenerDefaultActionsRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}
export interface AwsLoadBalancerListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#create AwsLoadBalancerListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#delete AwsLoadBalancerListener#delete}
  */
  readonly delete?: string;
}

export function awsLoadBalancerListenerTimeoutsToTerraform(struct?: AwsLoadBalancerListenerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsLoadBalancerListenerTimeoutsToHclTerraform(struct?: AwsLoadBalancerListenerTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLoadBalancerListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsLoadBalancerListenerTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLoadBalancerListenerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener duplocloud_aws_load_balancer_listener}
*/
export class AwsLoadBalancerListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_load_balancer_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsLoadBalancerListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsLoadBalancerListener to import
  * @param importFromId The id of the existing AwsLoadBalancerListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsLoadBalancerListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_load_balancer_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.31/docs/resources/aws_load_balancer_listener duplocloud_aws_load_balancer_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsLoadBalancerListenerConfig
  */
  public constructor(scope: Construct, id: string, config: AwsLoadBalancerListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_load_balancer_listener',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.31',
        providerVersionConstraint: '0.11.31'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateArn = config.certificateArn;
    this._id = config.id;
    this._loadBalancerName = config.loadBalancerName;
    this._port = config.port;
    this._protocol = config.protocol;
    this._targetGroupArn = config.targetGroupArn;
    this._tenantId = config.tenantId;
    this._defaultActions.internalValue = config.defaultActions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_arn - computed: true, optional: true, required: false
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  public resetCertificateArn() {
    this._certificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn;
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new AwsLoadBalancerListenerCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
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

  // load_balancer_arn - computed: true, optional: false, required: false
  public get loadBalancerArn() {
    return this.getStringAttribute('load_balancer_arn');
  }

  // load_balancer_fullname - computed: true, optional: false, required: false
  public get loadBalancerFullname() {
    return this.getStringAttribute('load_balancer_fullname');
  }

  // load_balancer_name - computed: false, optional: false, required: true
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
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

  // ssl_policy - computed: true, optional: false, required: false
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }

  // target_group_arn - computed: false, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // default_actions - computed: false, optional: true, required: false
  private _defaultActions = new AwsLoadBalancerListenerDefaultActionsOutputReference(this, "default_actions");
  public get defaultActions() {
    return this._defaultActions;
  }
  public putDefaultActions(value: AwsLoadBalancerListenerDefaultActions) {
    this._defaultActions.internalValue = value;
  }
  public resetDefaultActions() {
    this._defaultActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionsInput() {
    return this._defaultActions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsLoadBalancerListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsLoadBalancerListenerTimeouts) {
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
      certificate_arn: cdktf.stringToTerraform(this._certificateArn),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      target_group_arn: cdktf.stringToTerraform(this._targetGroupArn),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      default_actions: awsLoadBalancerListenerDefaultActionsToTerraform(this._defaultActions.internalValue),
      timeouts: awsLoadBalancerListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_arn: {
        value: cdktf.stringToHclTerraform(this._certificateArn),
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
      load_balancer_name: {
        value: cdktf.stringToHclTerraform(this._loadBalancerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_group_arn: {
        value: cdktf.stringToHclTerraform(this._targetGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_actions: {
        value: awsLoadBalancerListenerDefaultActionsToHclTerraform(this._defaultActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLoadBalancerListenerDefaultActionsList",
      },
      timeouts: {
        value: awsLoadBalancerListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsLoadBalancerListenerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
