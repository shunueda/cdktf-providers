// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of ThousandEyes agent IDs to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#agents Api#agents}
  */
  readonly agents: string[];
  /**
  * List of alert rules IDs to apply to the test (get `ruleId` from `/alerts/rules` endpoint. If `alertsEnabled` is set to `true` and `alertRules` is not included on test creation or update, applicable user default alert rules will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#alert_rules Api#alert_rules}
  */
  readonly alertRules?: string[];
  /**
  * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#alerts_enabled Api#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP measurements. Set to true for enabled, false for disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#bgp_measurements Api#bgp_measurements}
  */
  readonly bgpMeasurements?: boolean | cdktf.IResolvable;
  /**
  * String representation (containing newline characters) of client certificate, the private key must be placed first, then the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#client_certificate Api#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Indicates whether network data to the proxy should be collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#collect_proxy_network_data Api#collect_proxy_network_data}
  */
  readonly collectProxyNetworkData?: boolean | cdktf.IResolvable;
  /**
  * The array of credentialID integers. You can get the credentialId from the /credentials endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#credentials Api#credentials}
  */
  readonly credentials?: string[];
  /**
  * A description of the alert rule. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#description Api#description}
  */
  readonly description?: string;
  /**
  * Adds distributed tracing headers to API requests using B3 and W3C standards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#distributed_tracing Api#distributed_tracing}
  */
  readonly distributedTracing?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#enabled Api#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Follow HTTP/301 or HTTP/302 redirect directives. Defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#follow_redirects Api#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#id Api#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The interval to run the test on, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#interval Api#interval}
  */
  readonly interval: number;
  /**
  * Contains list of BGP monitor IDs (get `monitorId` from `/monitors` endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#monitors Api#monitors}
  */
  readonly monitors?: string[];
  /**
  * Measure MTU sizes on the network from agents to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#mtu_measurements Api#mtu_measurements}
  */
  readonly mtuMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to enable network measurements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#network_measurements Api#network_measurements}
  */
  readonly networkMeasurements?: boolean | cdktf.IResolvable;
  /**
  * The number of path traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#num_path_traces Api#num_path_traces}
  */
  readonly numPathTraces?: number;
  /**
  * Flag indicating if a proxy other than the default should be used. To override the default proxy for agents, set to `true` and specify a value for `overrideProxyId`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#override_agent_proxy Api#override_agent_proxy}
  */
  readonly overrideAgentProxy?: boolean | cdktf.IResolvable;
  /**
  * ID of the proxy to be used if the default proxy is overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#override_proxy_id Api#override_proxy_id}
  */
  readonly overrideProxyId?: string;
  /**
  * [classic or in-session] Choose 'inSession' to perform the path trace within a TCP session. Default value is 'classic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#path_trace_mode Api#path_trace_mode}
  */
  readonly pathTraceMode?: string;
  /**
  * [auto, sack, or syn] The probe mode used by end-to-end network tests. This is only valid if the protocol is set to TCP. The default value is AUTO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#probe_mode Api#probe_mode}
  */
  readonly probeMode?: string;
  /**
  * The protocol used by dependent network tests (end-to-end, path trace, PMTUD). Default value is tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#protocol Api#protocol}
  */
  readonly protocol?: string;
  /**
  * Indicates whether agents should randomize the start time in each test round.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#randomized_start_time Api#randomized_start_time}
  */
  readonly randomizedStartTime?: boolean | cdktf.IResolvable;
  /**
  * List of accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#shared_with_accounts Api#shared_with_accounts}
  */
  readonly sharedWithAccounts?: string[];
  /**
  * Defines the SSL version. 0 for auto, 3 for SSLv3, 4 for TLS v1.0, 5 for TLS v1.1, 6 for TLS v1.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#ssl_version_id Api#ssl_version_id}
  */
  readonly sslVersionId?: string;
  /**
  * The target time for completion. The default value is 10, specified in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#target_time Api#target_time}
  */
  readonly targetTime?: number;
  /**
  * The name of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#test_name Api#test_name}
  */
  readonly testName?: string;
  /**
  * The time limit for the transaction. The default value is 30s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#time_limit Api#time_limit}
  */
  readonly timeLimit?: number;
  /**
  * The target URL for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#url Api#url}
  */
  readonly url: string;
  /**
  * Enable to automatically add all available Public BGP Monitors to the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#use_public_bgp Api#use_public_bgp}
  */
  readonly usePublicBgp?: boolean | cdktf.IResolvable;
  /**
  * predefined_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#predefined_variables Api#predefined_variables}
  */
  readonly predefinedVariables?: ApiPredefinedVariables[] | cdktf.IResolvable;
  /**
  * requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#requests Api#requests}
  */
  readonly requests: ApiRequests[] | cdktf.IResolvable;
}
export interface ApiPredefinedVariables {
  /**
  * Variable name. Must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#name Api#name}
  */
  readonly name?: string;
  /**
  * Variable value, will be treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#value Api#value}
  */
  readonly value?: string;
}

export function apiPredefinedVariablesToTerraform(struct?: ApiPredefinedVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiPredefinedVariablesToHclTerraform(struct?: ApiPredefinedVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ApiPredefinedVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiPredefinedVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiPredefinedVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class ApiPredefinedVariablesList extends cdktf.ComplexList {
  public internalValue? : ApiPredefinedVariables[] | cdktf.IResolvable

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
  public get(index: number): ApiPredefinedVariablesOutputReference {
    return new ApiPredefinedVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiRequestsAssertions {
  /**
  * [status-code, response-body] Name of assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#name Api#name}
  */
  readonly name?: string;
  /**
  * [is, is-not, includes, not-includes] Assertion operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#operator Api#operator}
  */
  readonly operator?: string;
  /**
  * The value of the assertion. If name = `status-code`, the status code to assert. If name = `response-body`, the lookup value to assert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#value Api#value}
  */
  readonly value?: string;
}

export function apiRequestsAssertionsToTerraform(struct?: ApiRequestsAssertions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiRequestsAssertionsToHclTerraform(struct?: ApiRequestsAssertions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ApiRequestsAssertionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiRequestsAssertions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiRequestsAssertions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class ApiRequestsAssertionsList extends cdktf.ComplexList {
  public internalValue? : ApiRequestsAssertions[] | cdktf.IResolvable

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
  public get(index: number): ApiRequestsAssertionsOutputReference {
    return new ApiRequestsAssertionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiRequestsHeaders {
  /**
  * Request header key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#key Api#key}
  */
  readonly key?: string;
  /**
  * Request header value. Supports variables `{{variableName}}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#value Api#value}
  */
  readonly value?: string;
}

export function apiRequestsHeadersToTerraform(struct?: ApiRequestsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiRequestsHeadersToHclTerraform(struct?: ApiRequestsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class ApiRequestsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiRequestsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiRequestsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class ApiRequestsHeadersList extends cdktf.ComplexList {
  public internalValue? : ApiRequestsHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApiRequestsHeadersOutputReference {
    return new ApiRequestsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiRequestsVariables {
  /**
  * Variable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#name Api#name}
  */
  readonly name?: string;
  /**
  * The JSON path of data within the Response Body to assign to this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#value Api#value}
  */
  readonly value?: string;
}

export function apiRequestsVariablesToTerraform(struct?: ApiRequestsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiRequestsVariablesToHclTerraform(struct?: ApiRequestsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ApiRequestsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiRequestsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiRequestsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class ApiRequestsVariablesList extends cdktf.ComplexList {
  public internalValue? : ApiRequestsVariables[] | cdktf.IResolvable

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
  public get(index: number): ApiRequestsVariablesOutputReference {
    return new ApiRequestsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiRequests {
  /**
  * [none, basic, bearer-token, oauth2] Auth type will override the Authorization request header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#auth_type Api#auth_type}
  */
  readonly authType?: string;
  /**
  * Enter the OAuth body for the HTTP POST request in this field when using OAuth as the authentication mechanism. No special escaping is required. If content is provided in the post body, the `requestMethod` is automatically set to POST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#bearer_token Api#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * POST/PUT request body. Must be in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#body Api#body}
  */
  readonly body?: string;
  /**
  * [basic-auth-header, in-body] The OAuth2 client authentication location type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#client_authentication Api#client_authentication}
  */
  readonly clientAuthentication?: string;
  /**
  * The application ID used when `authType` is set to "oauth2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#client_id Api#client_id}
  */
  readonly clientId?: string;
  /**
  * The private client secret used when `authType` is set to "oauth2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#client_secret Api#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Set to `true` if API response body should be collected and saved. Set to `false` if API response body should not be saved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#collect_api_response Api#collect_api_response}
  */
  readonly collectApiResponse?: boolean | cdktf.IResolvable;
  /**
  * [get, post, put, delete, patch] Request method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#method Api#method}
  */
  readonly method?: string;
  /**
  * API step name, must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#name Api#name}
  */
  readonly name: string;
  /**
  * The password if `authType = basic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#password Api#password}
  */
  readonly password?: string;
  /**
  * Application-specific scope values for the access token when `authType` is "oauth2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#scope Api#scope}
  */
  readonly scope?: string;
  /**
  * The endpoint used to request the access token when `authType` is "oauth2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#token_url Api#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * Request url. Supports variables in the format `{{variableName}}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#url Api#url}
  */
  readonly url: string;
  /**
  * The username if `authType = basic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#username Api#username}
  */
  readonly username?: string;
  /**
  * Ignore or acknowledge certificate errors. Set to `false` to ignore certificate errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#verify_certificate Api#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * Post request delay before executing the next API requests, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#wait_time_ms Api#wait_time_ms}
  */
  readonly waitTimeMs?: number;
  /**
  * assertions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#assertions Api#assertions}
  */
  readonly assertions?: ApiRequestsAssertions[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#headers Api#headers}
  */
  readonly headers?: ApiRequestsHeaders[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#variables Api#variables}
  */
  readonly variables?: ApiRequestsVariables[] | cdktf.IResolvable;
}

export function apiRequestsToTerraform(struct?: ApiRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    body: cdktf.stringToTerraform(struct!.body),
    client_authentication: cdktf.stringToTerraform(struct!.clientAuthentication),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    collect_api_response: cdktf.booleanToTerraform(struct!.collectApiResponse),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    scope: cdktf.stringToTerraform(struct!.scope),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
    verify_certificate: cdktf.booleanToTerraform(struct!.verifyCertificate),
    wait_time_ms: cdktf.numberToTerraform(struct!.waitTimeMs),
    assertions: cdktf.listMapper(apiRequestsAssertionsToTerraform, true)(struct!.assertions),
    headers: cdktf.listMapper(apiRequestsHeadersToTerraform, true)(struct!.headers),
    variables: cdktf.listMapper(apiRequestsVariablesToTerraform, true)(struct!.variables),
  }
}


export function apiRequestsToHclTerraform(struct?: ApiRequests | cdktf.IResolvable): any {
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
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
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
    client_authentication: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collect_api_response: {
      value: cdktf.booleanToHclTerraform(struct!.collectApiResponse),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
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
    verify_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_time_ms: {
      value: cdktf.numberToHclTerraform(struct!.waitTimeMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assertions: {
      value: cdktf.listMapperHcl(apiRequestsAssertionsToHclTerraform, true)(struct!.assertions),
      isBlock: true,
      type: "set",
      storageClassType: "ApiRequestsAssertionsList",
    },
    headers: {
      value: cdktf.listMapperHcl(apiRequestsHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "set",
      storageClassType: "ApiRequestsHeadersList",
    },
    variables: {
      value: cdktf.listMapperHcl(apiRequestsVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "set",
      storageClassType: "ApiRequestsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._clientAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthentication = this._clientAuthentication;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._collectApiResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectApiResponse = this._collectApiResponse;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    if (this._waitTimeMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeMs = this._waitTimeMs;
    }
    if (this._assertions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertions = this._assertions?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._bearerToken = undefined;
      this._body = undefined;
      this._clientAuthentication = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._collectApiResponse = undefined;
      this._method = undefined;
      this._name = undefined;
      this._password = undefined;
      this._scope = undefined;
      this._tokenUrl = undefined;
      this._url = undefined;
      this._username = undefined;
      this._verifyCertificate = undefined;
      this._waitTimeMs = undefined;
      this._assertions.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._bearerToken = value.bearerToken;
      this._body = value.body;
      this._clientAuthentication = value.clientAuthentication;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._collectApiResponse = value.collectApiResponse;
      this._method = value.method;
      this._name = value.name;
      this._password = value.password;
      this._scope = value.scope;
      this._tokenUrl = value.tokenUrl;
      this._url = value.url;
      this._username = value.username;
      this._verifyCertificate = value.verifyCertificate;
      this._waitTimeMs = value.waitTimeMs;
      this._assertions.internalValue = value.assertions;
      this._headers.internalValue = value.headers;
      this._variables.internalValue = value.variables;
    }
  }

  // auth_type - computed: false, optional: true, required: false
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

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
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

  // client_authentication - computed: false, optional: true, required: false
  private _clientAuthentication?: string; 
  public get clientAuthentication() {
    return this.getStringAttribute('client_authentication');
  }
  public set clientAuthentication(value: string) {
    this._clientAuthentication = value;
  }
  public resetClientAuthentication() {
    this._clientAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationInput() {
    return this._clientAuthentication;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // collect_api_response - computed: false, optional: true, required: false
  private _collectApiResponse?: boolean | cdktf.IResolvable; 
  public get collectApiResponse() {
    return this.getBooleanAttribute('collect_api_response');
  }
  public set collectApiResponse(value: boolean | cdktf.IResolvable) {
    this._collectApiResponse = value;
  }
  public resetCollectApiResponse() {
    this._collectApiResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectApiResponseInput() {
    return this._collectApiResponse;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
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

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktf.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }

  // wait_time_ms - computed: false, optional: true, required: false
  private _waitTimeMs?: number; 
  public get waitTimeMs() {
    return this.getNumberAttribute('wait_time_ms');
  }
  public set waitTimeMs(value: number) {
    this._waitTimeMs = value;
  }
  public resetWaitTimeMs() {
    this._waitTimeMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeMsInput() {
    return this._waitTimeMs;
  }

  // assertions - computed: false, optional: true, required: false
  private _assertions = new ApiRequestsAssertionsList(this, "assertions", true);
  public get assertions() {
    return this._assertions;
  }
  public putAssertions(value: ApiRequestsAssertions[] | cdktf.IResolvable) {
    this._assertions.internalValue = value;
  }
  public resetAssertions() {
    this._assertions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionsInput() {
    return this._assertions.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ApiRequestsHeadersList(this, "headers", true);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApiRequestsHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new ApiRequestsVariablesList(this, "variables", true);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ApiRequestsVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class ApiRequestsList extends cdktf.ComplexList {
  public internalValue? : ApiRequests[] | cdktf.IResolvable

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
  public get(index: number): ApiRequestsOutputReference {
    return new ApiRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api thousandeyes_api}
*/
export class Api extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Api resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Api to import
  * @param importFromId The id of the existing Api that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Api to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.4/docs/resources/api thousandeyes_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_api',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.4',
        providerVersionConstraint: '3.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agents = config.agents;
    this._alertRules = config.alertRules;
    this._alertsEnabled = config.alertsEnabled;
    this._bgpMeasurements = config.bgpMeasurements;
    this._clientCertificate = config.clientCertificate;
    this._collectProxyNetworkData = config.collectProxyNetworkData;
    this._credentials = config.credentials;
    this._description = config.description;
    this._distributedTracing = config.distributedTracing;
    this._enabled = config.enabled;
    this._followRedirects = config.followRedirects;
    this._id = config.id;
    this._interval = config.interval;
    this._monitors = config.monitors;
    this._mtuMeasurements = config.mtuMeasurements;
    this._networkMeasurements = config.networkMeasurements;
    this._numPathTraces = config.numPathTraces;
    this._overrideAgentProxy = config.overrideAgentProxy;
    this._overrideProxyId = config.overrideProxyId;
    this._pathTraceMode = config.pathTraceMode;
    this._probeMode = config.probeMode;
    this._protocol = config.protocol;
    this._randomizedStartTime = config.randomizedStartTime;
    this._sharedWithAccounts = config.sharedWithAccounts;
    this._sslVersionId = config.sslVersionId;
    this._targetTime = config.targetTime;
    this._testName = config.testName;
    this._timeLimit = config.timeLimit;
    this._url = config.url;
    this._usePublicBgp = config.usePublicBgp;
    this._predefinedVariables.internalValue = config.predefinedVariables;
    this._requests.internalValue = config.requests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agents - computed: false, optional: false, required: true
  private _agents?: string[]; 
  public get agents() {
    return cdktf.Fn.tolist(this.getListAttribute('agents'));
  }
  public set agents(value: string[]) {
    this._agents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents;
  }

  // alert_rules - computed: false, optional: true, required: false
  private _alertRules?: string[]; 
  public get alertRules() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_rules'));
  }
  public set alertRules(value: string[]) {
    this._alertRules = value;
  }
  public resetAlertRules() {
    this._alertRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRulesInput() {
    return this._alertRules;
  }

  // alerts_enabled - computed: false, optional: true, required: false
  private _alertsEnabled?: boolean | cdktf.IResolvable; 
  public get alertsEnabled() {
    return this.getBooleanAttribute('alerts_enabled');
  }
  public set alertsEnabled(value: boolean | cdktf.IResolvable) {
    this._alertsEnabled = value;
  }
  public resetAlertsEnabled() {
    this._alertsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEnabledInput() {
    return this._alertsEnabled;
  }

  // bgp_measurements - computed: false, optional: true, required: false
  private _bgpMeasurements?: boolean | cdktf.IResolvable; 
  public get bgpMeasurements() {
    return this.getBooleanAttribute('bgp_measurements');
  }
  public set bgpMeasurements(value: boolean | cdktf.IResolvable) {
    this._bgpMeasurements = value;
  }
  public resetBgpMeasurements() {
    this._bgpMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpMeasurementsInput() {
    return this._bgpMeasurements;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // collect_proxy_network_data - computed: false, optional: true, required: false
  private _collectProxyNetworkData?: boolean | cdktf.IResolvable; 
  public get collectProxyNetworkData() {
    return this.getBooleanAttribute('collect_proxy_network_data');
  }
  public set collectProxyNetworkData(value: boolean | cdktf.IResolvable) {
    this._collectProxyNetworkData = value;
  }
  public resetCollectProxyNetworkData() {
    this._collectProxyNetworkData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectProxyNetworkDataInput() {
    return this._collectProxyNetworkData;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string[]; 
  public get credentials() {
    return cdktf.Fn.tolist(this.getListAttribute('credentials'));
  }
  public set credentials(value: string[]) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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

  // distributed_tracing - computed: false, optional: true, required: false
  private _distributedTracing?: boolean | cdktf.IResolvable; 
  public get distributedTracing() {
    return this.getBooleanAttribute('distributed_tracing');
  }
  public set distributedTracing(value: boolean | cdktf.IResolvable) {
    this._distributedTracing = value;
  }
  public resetDistributedTracing() {
    this._distributedTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedTracingInput() {
    return this._distributedTracing;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // live_share - computed: true, optional: false, required: false
  public get liveShare() {
    return this.getBooleanAttribute('live_share');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_date - computed: true, optional: false, required: false
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
  }

  // monitors - computed: false, optional: true, required: false
  private _monitors?: string[]; 
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // mtu_measurements - computed: false, optional: true, required: false
  private _mtuMeasurements?: boolean | cdktf.IResolvable; 
  public get mtuMeasurements() {
    return this.getBooleanAttribute('mtu_measurements');
  }
  public set mtuMeasurements(value: boolean | cdktf.IResolvable) {
    this._mtuMeasurements = value;
  }
  public resetMtuMeasurements() {
    this._mtuMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuMeasurementsInput() {
    return this._mtuMeasurements;
  }

  // network_measurements - computed: false, optional: true, required: false
  private _networkMeasurements?: boolean | cdktf.IResolvable; 
  public get networkMeasurements() {
    return this.getBooleanAttribute('network_measurements');
  }
  public set networkMeasurements(value: boolean | cdktf.IResolvable) {
    this._networkMeasurements = value;
  }
  public resetNetworkMeasurements() {
    this._networkMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMeasurementsInput() {
    return this._networkMeasurements;
  }

  // num_path_traces - computed: false, optional: true, required: false
  private _numPathTraces?: number; 
  public get numPathTraces() {
    return this.getNumberAttribute('num_path_traces');
  }
  public set numPathTraces(value: number) {
    this._numPathTraces = value;
  }
  public resetNumPathTraces() {
    this._numPathTraces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPathTracesInput() {
    return this._numPathTraces;
  }

  // override_agent_proxy - computed: false, optional: true, required: false
  private _overrideAgentProxy?: boolean | cdktf.IResolvable; 
  public get overrideAgentProxy() {
    return this.getBooleanAttribute('override_agent_proxy');
  }
  public set overrideAgentProxy(value: boolean | cdktf.IResolvable) {
    this._overrideAgentProxy = value;
  }
  public resetOverrideAgentProxy() {
    this._overrideAgentProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAgentProxyInput() {
    return this._overrideAgentProxy;
  }

  // override_proxy_id - computed: false, optional: true, required: false
  private _overrideProxyId?: string; 
  public get overrideProxyId() {
    return this.getStringAttribute('override_proxy_id');
  }
  public set overrideProxyId(value: string) {
    this._overrideProxyId = value;
  }
  public resetOverrideProxyId() {
    this._overrideProxyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProxyIdInput() {
    return this._overrideProxyId;
  }

  // path_trace_mode - computed: false, optional: true, required: false
  private _pathTraceMode?: string; 
  public get pathTraceMode() {
    return this.getStringAttribute('path_trace_mode');
  }
  public set pathTraceMode(value: string) {
    this._pathTraceMode = value;
  }
  public resetPathTraceMode() {
    this._pathTraceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTraceModeInput() {
    return this._pathTraceMode;
  }

  // probe_mode - computed: false, optional: true, required: false
  private _probeMode?: string; 
  public get probeMode() {
    return this.getStringAttribute('probe_mode');
  }
  public set probeMode(value: string) {
    this._probeMode = value;
  }
  public resetProbeMode() {
    this._probeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeModeInput() {
    return this._probeMode;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // randomized_start_time - computed: false, optional: true, required: false
  private _randomizedStartTime?: boolean | cdktf.IResolvable; 
  public get randomizedStartTime() {
    return this.getBooleanAttribute('randomized_start_time');
  }
  public set randomizedStartTime(value: boolean | cdktf.IResolvable) {
    this._randomizedStartTime = value;
  }
  public resetRandomizedStartTime() {
    this._randomizedStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizedStartTimeInput() {
    return this._randomizedStartTime;
  }

  // saved_event - computed: true, optional: false, required: false
  public get savedEvent() {
    return this.getBooleanAttribute('saved_event');
  }

  // shared_with_accounts - computed: false, optional: true, required: false
  private _sharedWithAccounts?: string[]; 
  public get sharedWithAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('shared_with_accounts'));
  }
  public set sharedWithAccounts(value: string[]) {
    this._sharedWithAccounts = value;
  }
  public resetSharedWithAccounts() {
    this._sharedWithAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedWithAccountsInput() {
    return this._sharedWithAccounts;
  }

  // ssl_version_id - computed: false, optional: true, required: false
  private _sslVersionId?: string; 
  public get sslVersionId() {
    return this.getStringAttribute('ssl_version_id');
  }
  public set sslVersionId(value: string) {
    this._sslVersionId = value;
  }
  public resetSslVersionId() {
    this._sslVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVersionIdInput() {
    return this._sslVersionId;
  }

  // target_time - computed: false, optional: true, required: false
  private _targetTime?: number; 
  public get targetTime() {
    return this.getNumberAttribute('target_time');
  }
  public set targetTime(value: number) {
    this._targetTime = value;
  }
  public resetTargetTime() {
    this._targetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTimeInput() {
    return this._targetTime;
  }

  // test_id - computed: true, optional: false, required: false
  public get testId() {
    return this.getStringAttribute('test_id');
  }

  // test_name - computed: false, optional: true, required: false
  private _testName?: string; 
  public get testName() {
    return this.getStringAttribute('test_name');
  }
  public set testName(value: string) {
    this._testName = value;
  }
  public resetTestName() {
    this._testName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testNameInput() {
    return this._testName;
  }

  // time_limit - computed: false, optional: true, required: false
  private _timeLimit?: number; 
  public get timeLimit() {
    return this.getNumberAttribute('time_limit');
  }
  public set timeLimit(value: number) {
    this._timeLimit = value;
  }
  public resetTimeLimit() {
    this._timeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLimitInput() {
    return this._timeLimit;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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

  // use_public_bgp - computed: false, optional: true, required: false
  private _usePublicBgp?: boolean | cdktf.IResolvable; 
  public get usePublicBgp() {
    return this.getBooleanAttribute('use_public_bgp');
  }
  public set usePublicBgp(value: boolean | cdktf.IResolvable) {
    this._usePublicBgp = value;
  }
  public resetUsePublicBgp() {
    this._usePublicBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicBgpInput() {
    return this._usePublicBgp;
  }

  // predefined_variables - computed: false, optional: true, required: false
  private _predefinedVariables = new ApiPredefinedVariablesList(this, "predefined_variables", true);
  public get predefinedVariables() {
    return this._predefinedVariables;
  }
  public putPredefinedVariables(value: ApiPredefinedVariables[] | cdktf.IResolvable) {
    this._predefinedVariables.internalValue = value;
  }
  public resetPredefinedVariables() {
    this._predefinedVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedVariablesInput() {
    return this._predefinedVariables.internalValue;
  }

  // requests - computed: false, optional: false, required: true
  private _requests = new ApiRequestsList(this, "requests", false);
  public get requests() {
    return this._requests;
  }
  public putRequests(value: ApiRequests[] | cdktf.IResolvable) {
    this._requests.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agents),
      alert_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertRules),
      alerts_enabled: cdktf.booleanToTerraform(this._alertsEnabled),
      bgp_measurements: cdktf.booleanToTerraform(this._bgpMeasurements),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      collect_proxy_network_data: cdktf.booleanToTerraform(this._collectProxyNetworkData),
      credentials: cdktf.listMapper(cdktf.stringToTerraform, false)(this._credentials),
      description: cdktf.stringToTerraform(this._description),
      distributed_tracing: cdktf.booleanToTerraform(this._distributedTracing),
      enabled: cdktf.booleanToTerraform(this._enabled),
      follow_redirects: cdktf.booleanToTerraform(this._followRedirects),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      mtu_measurements: cdktf.booleanToTerraform(this._mtuMeasurements),
      network_measurements: cdktf.booleanToTerraform(this._networkMeasurements),
      num_path_traces: cdktf.numberToTerraform(this._numPathTraces),
      override_agent_proxy: cdktf.booleanToTerraform(this._overrideAgentProxy),
      override_proxy_id: cdktf.stringToTerraform(this._overrideProxyId),
      path_trace_mode: cdktf.stringToTerraform(this._pathTraceMode),
      probe_mode: cdktf.stringToTerraform(this._probeMode),
      protocol: cdktf.stringToTerraform(this._protocol),
      randomized_start_time: cdktf.booleanToTerraform(this._randomizedStartTime),
      shared_with_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedWithAccounts),
      ssl_version_id: cdktf.stringToTerraform(this._sslVersionId),
      target_time: cdktf.numberToTerraform(this._targetTime),
      test_name: cdktf.stringToTerraform(this._testName),
      time_limit: cdktf.numberToTerraform(this._timeLimit),
      url: cdktf.stringToTerraform(this._url),
      use_public_bgp: cdktf.booleanToTerraform(this._usePublicBgp),
      predefined_variables: cdktf.listMapper(apiPredefinedVariablesToTerraform, true)(this._predefinedVariables.internalValue),
      requests: cdktf.listMapper(apiRequestsToTerraform, true)(this._requests.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertRules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alerts_enabled: {
        value: cdktf.booleanToHclTerraform(this._alertsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_measurements: {
        value: cdktf.booleanToHclTerraform(this._bgpMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collect_proxy_network_data: {
        value: cdktf.booleanToHclTerraform(this._collectProxyNetworkData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credentials: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._credentials),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distributed_tracing: {
        value: cdktf.booleanToHclTerraform(this._distributedTracing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      follow_redirects: {
        value: cdktf.booleanToHclTerraform(this._followRedirects),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mtu_measurements: {
        value: cdktf.booleanToHclTerraform(this._mtuMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_measurements: {
        value: cdktf.booleanToHclTerraform(this._networkMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      num_path_traces: {
        value: cdktf.numberToHclTerraform(this._numPathTraces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      override_agent_proxy: {
        value: cdktf.booleanToHclTerraform(this._overrideAgentProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      override_proxy_id: {
        value: cdktf.stringToHclTerraform(this._overrideProxyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_trace_mode: {
        value: cdktf.stringToHclTerraform(this._pathTraceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_mode: {
        value: cdktf.stringToHclTerraform(this._probeMode),
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
      randomized_start_time: {
        value: cdktf.booleanToHclTerraform(this._randomizedStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_with_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedWithAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_version_id: {
        value: cdktf.stringToHclTerraform(this._sslVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_time: {
        value: cdktf.numberToHclTerraform(this._targetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      test_name: {
        value: cdktf.stringToHclTerraform(this._testName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_limit: {
        value: cdktf.numberToHclTerraform(this._timeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_public_bgp: {
        value: cdktf.booleanToHclTerraform(this._usePublicBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      predefined_variables: {
        value: cdktf.listMapperHcl(apiPredefinedVariablesToHclTerraform, true)(this._predefinedVariables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiPredefinedVariablesList",
      },
      requests: {
        value: cdktf.listMapperHcl(apiRequestsToHclTerraform, true)(this._requests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiRequestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
