// https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Buffer size in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#buffer_size LoadBalancer#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * A X509 SSL certificate in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#certificate_pem LoadBalancer#certificate_pem}
  */
  readonly certificatePem?: string;
  /**
  * RSA private key used to sign the certificate in PEM format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#certificate_private_key LoadBalancer#certificate_private_key}
  */
  readonly certificatePrivateKey?: string;
  /**
  * Array of domain names to attempt to register with ACME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#domains LoadBalancer#domains}
  */
  readonly domains?: string[];
  /**
  * Redirect any requests on port 80 automatically to port 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#https_redirect LoadBalancer#https_redirect}
  */
  readonly httpsRedirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#id LoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is true if resource has been set as locked and can not be deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#locked LoadBalancer#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Editable user label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#name LoadBalancer#name}
  */
  readonly name?: string;
  /**
  * IDs of servers connected to this load balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#nodes LoadBalancer#nodes}
  */
  readonly nodes?: string[];
  /**
  * Method of load balancing. Supports `least-connections`, `round-robin` or `source-address`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#policy LoadBalancer#policy}
  */
  readonly policy?: string;
  /**
  * The minimum TLS/SSL version for the load balancer to accept. Supports `TLSv1.0`, `TLSv1.1`, `TLSv1.2`, `TLSv1.3` and `SSLv3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#ssl_minimum_version LoadBalancer#ssl_minimum_version}
  */
  readonly sslMinimumVersion?: string;
  /**
  * Allow SSLv3 to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#sslv3 LoadBalancer#sslv3}
  */
  readonly sslv3?: boolean | cdktf.IResolvable;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#healthcheck LoadBalancer#healthcheck}
  */
  readonly healthcheck: LoadBalancerHealthcheck;
  /**
  * listener block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#listener LoadBalancer#listener}
  */
  readonly listener: LoadBalancerListener[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#timeouts LoadBalancer#timeouts}
  */
  readonly timeouts?: LoadBalancerTimeouts;
}
export interface LoadBalancerHealthcheck {
  /**
  * How often to check in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#interval LoadBalancer#interval}
  */
  readonly interval?: number;
  /**
  * Port on server to connect to for healthcheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#port LoadBalancer#port}
  */
  readonly port: number;
  /**
  * HTTP path to check if http type healthcheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#request LoadBalancer#request}
  */
  readonly request?: string;
  /**
  * How many checks have to fail before the load balancers considers a server inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#threshold_down LoadBalancer#threshold_down}
  */
  readonly thresholdDown?: number;
  /**
  * How many checks have to pass before the load balancer considers the server active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#threshold_up LoadBalancer#threshold_up}
  */
  readonly thresholdUp?: number;
  /**
  * How long to wait for a response before marking the check as a fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#timeout LoadBalancer#timeout}
  */
  readonly timeout?: number;
  /**
  * Protocol type to check (tcp/http)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#type LoadBalancer#type}
  */
  readonly type: string;
}

export function loadBalancerHealthcheckToTerraform(struct?: LoadBalancerHealthcheckOutputReference | LoadBalancerHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    port: cdktf.numberToTerraform(struct!.port),
    request: cdktf.stringToTerraform(struct!.request),
    threshold_down: cdktf.numberToTerraform(struct!.thresholdDown),
    threshold_up: cdktf.numberToTerraform(struct!.thresholdUp),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function loadBalancerHealthcheckToHclTerraform(struct?: LoadBalancerHealthcheckOutputReference | LoadBalancerHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_down: {
      value: cdktf.numberToHclTerraform(struct!.thresholdDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_up: {
      value: cdktf.numberToHclTerraform(struct!.thresholdUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class LoadBalancerHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoadBalancerHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._thresholdDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdDown = this._thresholdDown;
    }
    if (this._thresholdUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdUp = this._thresholdUp;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._port = undefined;
      this._request = undefined;
      this._thresholdDown = undefined;
      this._thresholdUp = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._port = value.port;
      this._request = value.request;
      this._thresholdDown = value.thresholdDown;
      this._thresholdUp = value.thresholdUp;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // request - computed: true, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // threshold_down - computed: true, optional: true, required: false
  private _thresholdDown?: number; 
  public get thresholdDown() {
    return this.getNumberAttribute('threshold_down');
  }
  public set thresholdDown(value: number) {
    this._thresholdDown = value;
  }
  public resetThresholdDown() {
    this._thresholdDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdDownInput() {
    return this._thresholdDown;
  }

  // threshold_up - computed: true, optional: true, required: false
  private _thresholdUp?: number; 
  public get thresholdUp() {
    return this.getNumberAttribute('threshold_up');
  }
  public set thresholdUp(value: number) {
    this._thresholdUp = value;
  }
  public resetThresholdUp() {
    this._thresholdUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdUpInput() {
    return this._thresholdUp;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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
export interface LoadBalancerListener {
  /**
  * The port this listener listens on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#in LoadBalancer#in}
  */
  readonly in: number;
  /**
  * The port on this server the listener should talk to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#out LoadBalancer#out}
  */
  readonly out: number;
  /**
  * The protocol to load balance (http/tcp)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#protocol LoadBalancer#protocol}
  */
  readonly protocol: string;
  /**
  * The version of the Proxy Protocol supported by the backend servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#proxy_protocol LoadBalancer#proxy_protocol}
  */
  readonly proxyProtocol?: string;
  /**
  * Connection timeout in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#timeout LoadBalancer#timeout}
  */
  readonly timeout?: number;
}

export function loadBalancerListenerToTerraform(struct?: LoadBalancerListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in: cdktf.numberToTerraform(struct!.in),
    out: cdktf.numberToTerraform(struct!.out),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    proxy_protocol: cdktf.stringToTerraform(struct!.proxyProtocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function loadBalancerListenerToHclTerraform(struct?: LoadBalancerListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in: {
      value: cdktf.numberToHclTerraform(struct!.in),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out: {
      value: cdktf.numberToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_protocol: {
      value: cdktf.stringToHclTerraform(struct!.proxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadBalancerListenerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadBalancerListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._proxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadBalancerListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._in = undefined;
      this._out = undefined;
      this._protocol = undefined;
      this._proxyProtocol = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._in = value.in;
      this._out = value.out;
      this._protocol = value.protocol;
      this._proxyProtocol = value.proxyProtocol;
      this._timeout = value.timeout;
    }
  }

  // in - computed: false, optional: false, required: true
  private _in?: number; 
  public get in() {
    return this.getNumberAttribute('in');
  }
  public set in(value: number) {
    this._in = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
  }

  // out - computed: false, optional: false, required: true
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
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

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol?: string; 
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: string) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class LoadBalancerListenerList extends cdktf.ComplexList {
  public internalValue? : LoadBalancerListener[] | cdktf.IResolvable

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
  public get(index: number): LoadBalancerListenerOutputReference {
    return new LoadBalancerListenerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadBalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#create LoadBalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#delete LoadBalancer#delete}
  */
  readonly delete?: string;
}

export function loadBalancerTimeoutsToTerraform(struct?: LoadBalancerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function loadBalancerTimeoutsToHclTerraform(struct?: LoadBalancerTimeouts | cdktf.IResolvable): any {
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

export class LoadBalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadBalancerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LoadBalancerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer brightbox_load_balancer}
*/
export class LoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "brightbox_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancer to import
  * @param importFromId The id of the existing LoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "brightbox_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/resources/load_balancer brightbox_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'brightbox_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'brightbox',
        providerVersion: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bufferSize = config.bufferSize;
    this._certificatePem = config.certificatePem;
    this._certificatePrivateKey = config.certificatePrivateKey;
    this._domains = config.domains;
    this._httpsRedirect = config.httpsRedirect;
    this._id = config.id;
    this._locked = config.locked;
    this._name = config.name;
    this._nodes = config.nodes;
    this._policy = config.policy;
    this._sslMinimumVersion = config.sslMinimumVersion;
    this._sslv3 = config.sslv3;
    this._healthcheck.internalValue = config.healthcheck;
    this._listener.internalValue = config.listener;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffer_size - computed: true, optional: true, required: false
  private _bufferSize?: number; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // certificate_pem - computed: false, optional: true, required: false
  private _certificatePem?: string; 
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }
  public set certificatePem(value: string) {
    this._certificatePem = value;
  }
  public resetCertificatePem() {
    this._certificatePem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePemInput() {
    return this._certificatePem;
  }

  // certificate_private_key - computed: false, optional: true, required: false
  private _certificatePrivateKey?: string; 
  public get certificatePrivateKey() {
    return this.getStringAttribute('certificate_private_key');
  }
  public set certificatePrivateKey(value: string) {
    this._certificatePrivateKey = value;
  }
  public resetCertificatePrivateKey() {
    this._certificatePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePrivateKeyInput() {
    return this._certificatePrivateKey;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: boolean | cdktf.IResolvable; 
  public get httpsRedirect() {
    return this.getBooleanAttribute('https_redirect');
  }
  public set httpsRedirect(value: boolean | cdktf.IResolvable) {
    this._httpsRedirect = value;
  }
  public resetHttpsRedirect() {
    this._httpsRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectInput() {
    return this._httpsRedirect;
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

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nodes - computed: true, optional: true, required: false
  private _nodes?: string[]; 
  public get nodes() {
    return cdktf.Fn.tolist(this.getListAttribute('nodes'));
  }
  public set nodes(value: string[]) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // ssl_minimum_version - computed: true, optional: true, required: false
  private _sslMinimumVersion?: string; 
  public get sslMinimumVersion() {
    return this.getStringAttribute('ssl_minimum_version');
  }
  public set sslMinimumVersion(value: string) {
    this._sslMinimumVersion = value;
  }
  public resetSslMinimumVersion() {
    this._sslMinimumVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinimumVersionInput() {
    return this._sslMinimumVersion;
  }

  // sslv3 - computed: false, optional: true, required: false
  private _sslv3?: boolean | cdktf.IResolvable; 
  public get sslv3() {
    return this.getBooleanAttribute('sslv3');
  }
  public set sslv3(value: boolean | cdktf.IResolvable) {
    this._sslv3 = value;
  }
  public resetSslv3() {
    this._sslv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslv3Input() {
    return this._sslv3;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // healthcheck - computed: false, optional: false, required: true
  private _healthcheck = new LoadBalancerHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: LoadBalancerHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // listener - computed: false, optional: false, required: true
  private _listener = new LoadBalancerListenerList(this, "listener", true);
  public get listener() {
    return this._listener;
  }
  public putListener(value: LoadBalancerListener[] | cdktf.IResolvable) {
    this._listener.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoadBalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoadBalancerTimeouts) {
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
      buffer_size: cdktf.numberToTerraform(this._bufferSize),
      certificate_pem: cdktf.stringToTerraform(this._certificatePem),
      certificate_private_key: cdktf.stringToTerraform(this._certificatePrivateKey),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      https_redirect: cdktf.booleanToTerraform(this._httpsRedirect),
      id: cdktf.stringToTerraform(this._id),
      locked: cdktf.booleanToTerraform(this._locked),
      name: cdktf.stringToTerraform(this._name),
      nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodes),
      policy: cdktf.stringToTerraform(this._policy),
      ssl_minimum_version: cdktf.stringToTerraform(this._sslMinimumVersion),
      sslv3: cdktf.booleanToTerraform(this._sslv3),
      healthcheck: loadBalancerHealthcheckToTerraform(this._healthcheck.internalValue),
      listener: cdktf.listMapper(loadBalancerListenerToTerraform, true)(this._listener.internalValue),
      timeouts: loadBalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buffer_size: {
        value: cdktf.numberToHclTerraform(this._bufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate_pem: {
        value: cdktf.stringToHclTerraform(this._certificatePem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_private_key: {
        value: cdktf.stringToHclTerraform(this._certificatePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      https_redirect: {
        value: cdktf.booleanToHclTerraform(this._httpsRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_minimum_version: {
        value: cdktf.stringToHclTerraform(this._sslMinimumVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslv3: {
        value: cdktf.booleanToHclTerraform(this._sslv3),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      healthcheck: {
        value: loadBalancerHealthcheckToHclTerraform(this._healthcheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoadBalancerHealthcheckList",
      },
      listener: {
        value: cdktf.listMapperHcl(loadBalancerListenerToHclTerraform, true)(this._listener.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadBalancerListenerList",
      },
      timeouts: {
        value: loadBalancerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadBalancerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
