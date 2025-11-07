// https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the check is activate or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#active Check#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#id Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Setting a metric_limit will enable all (-1), disable (0), or allow up to the specified limit of metrics for this check ("N+", where N is a positive integer)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#metric_limit Check#metric_limit}
  */
  readonly metricLimit?: number;
  /**
  * The name of the check bundle that will be displayed in the web interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#name Check#name}
  */
  readonly name?: string;
  /**
  * Notes about this check bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#notes Check#notes}
  */
  readonly notes?: string;
  /**
  * The period between each time the check is made
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#period Check#period}
  */
  readonly period?: string;
  /**
  * A list of tags assigned to the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#tags Check#tags}
  */
  readonly tags?: string[];
  /**
  * The target of the check (e.g. hostname, URL, IP, etc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#target Check#target}
  */
  readonly target?: string;
  /**
  * The length of time in seconds (and fractions of a second) before the check will timeout if no response is returned to the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#timeout Check#timeout}
  */
  readonly timeout?: string;
  /**
  * The check type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#type Check#type}
  */
  readonly type?: string;
  /**
  * caql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#caql Check#caql}
  */
  readonly caql?: CheckCaql;
  /**
  * cloudwatch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#cloudwatch Check#cloudwatch}
  */
  readonly cloudwatch?: CheckCloudwatch;
  /**
  * collector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#collector Check#collector}
  */
  readonly collector?: CheckCollector[] | cdktf.IResolvable;
  /**
  * consul block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#consul Check#consul}
  */
  readonly consul?: CheckConsul;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#dns Check#dns}
  */
  readonly dns?: CheckDns;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#external Check#external}
  */
  readonly external?: CheckExternal;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#http Check#http}
  */
  readonly http?: CheckHttp;
  /**
  * httptrap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#httptrap Check#httptrap}
  */
  readonly httptrap?: CheckHttptrap;
  /**
  * icmp_ping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#icmp_ping Check#icmp_ping}
  */
  readonly icmpPing?: CheckIcmpPing;
  /**
  * jmx block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#jmx Check#jmx}
  */
  readonly jmx?: CheckJmx;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#json Check#json}
  */
  readonly json?: CheckJson;
  /**
  * memcached block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#memcached Check#memcached}
  */
  readonly memcached?: CheckMemcached;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#metric Check#metric}
  */
  readonly metric?: CheckMetric[] | cdktf.IResolvable;
  /**
  * metric_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#metric_filter Check#metric_filter}
  */
  readonly metricFilter?: CheckMetricFilter[] | cdktf.IResolvable;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#mysql Check#mysql}
  */
  readonly mysql?: CheckMysql;
  /**
  * ntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ntp Check#ntp}
  */
  readonly ntp?: CheckNtp;
  /**
  * postgresql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#postgresql Check#postgresql}
  */
  readonly postgresql?: CheckPostgresql;
  /**
  * promtext block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#promtext Check#promtext}
  */
  readonly promtext?: CheckPromtext;
  /**
  * redis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#redis Check#redis}
  */
  readonly redis?: CheckRedis;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#smtp Check#smtp}
  */
  readonly smtp?: CheckSmtp;
  /**
  * snmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#snmp Check#snmp}
  */
  readonly snmp?: CheckSnmp;
  /**
  * ssh2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ssh2 Check#ssh2}
  */
  readonly ssh2?: CheckSsh2;
  /**
  * statsd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#statsd Check#statsd}
  */
  readonly statsd?: CheckStatsd;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#tcp Check#tcp}
  */
  readonly tcp?: CheckTcp;
}
export interface CheckCaql {
  /**
  * The query definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#query Check#query}
  */
  readonly query: string;
}

export function checkCaqlToTerraform(struct?: CheckCaqlOutputReference | CheckCaql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function checkCaqlToHclTerraform(struct?: CheckCaqlOutputReference | CheckCaql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckCaqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckCaql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckCaql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface CheckCloudwatch {
  /**
  * The AWS API Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#api_key Check#api_key}
  */
  readonly apiKey?: string;
  /**
  * The AWS API Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#api_secret Check#api_secret}
  */
  readonly apiSecret?: string;
  /**
  * The dimensions to query for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#dimmensions Check#dimmensions}
  */
  readonly dimmensions: { [key: string]: string };
  /**
  * One or more CloudWatch Metric attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#metric Check#metric}
  */
  readonly metric: string[];
  /**
  * The namespace to pull telemetry from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#namespace Check#namespace}
  */
  readonly namespace: string;
  /**
  * The URL including schema and hostname for the Cloudwatch monitoring server. This value will be used to specify the region - for example, to pull from us-east-1, the URL would be https://monitoring.us-east-1.amazonaws.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#url Check#url}
  */
  readonly url: string;
  /**
  * The version of the Cloudwatch API to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#version Check#version}
  */
  readonly version?: string;
}

export function checkCloudwatchToTerraform(struct?: CheckCloudwatchOutputReference | CheckCloudwatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_secret: cdktf.stringToTerraform(struct!.apiSecret),
    dimmensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimmensions),
    metric: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metric),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    url: cdktf.stringToTerraform(struct!.url),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function checkCloudwatchToHclTerraform(struct?: CheckCloudwatchOutputReference | CheckCloudwatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_secret: {
      value: cdktf.stringToHclTerraform(struct!.apiSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimmensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dimmensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metric),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckCloudwatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckCloudwatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSecret = this._apiSecret;
    }
    if (this._dimmensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimmensions = this._dimmensions;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckCloudwatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._apiSecret = undefined;
      this._dimmensions = undefined;
      this._metric = undefined;
      this._namespace = undefined;
      this._url = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._apiSecret = value.apiSecret;
      this._dimmensions = value.dimmensions;
      this._metric = value.metric;
      this._namespace = value.namespace;
      this._url = value.url;
      this._version = value.version;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_secret - computed: false, optional: true, required: false
  private _apiSecret?: string; 
  public get apiSecret() {
    return this.getStringAttribute('api_secret');
  }
  public set apiSecret(value: string) {
    this._apiSecret = value;
  }
  public resetApiSecret() {
    this._apiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
  }

  // dimmensions - computed: false, optional: false, required: true
  private _dimmensions?: { [key: string]: string }; 
  public get dimmensions() {
    return this.getStringMapAttribute('dimmensions');
  }
  public set dimmensions(value: { [key: string]: string }) {
    this._dimmensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimmensionsInput() {
    return this._dimmensions;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string[]; 
  public get metric() {
    return cdktf.Fn.tolist(this.getListAttribute('metric'));
  }
  public set metric(value: string[]) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CheckCollector {
  /**
  * The ID of the collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#id Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function checkCollectorToTerraform(struct?: CheckCollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function checkCollectorToHclTerraform(struct?: CheckCollector | cdktf.IResolvable): any {
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

export class CheckCollectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckCollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckCollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CheckCollectorList extends cdktf.ComplexList {
  public internalValue? : CheckCollector[] | cdktf.IResolvable

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
  public get(index: number): CheckCollectorOutputReference {
    return new CheckCollectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckConsul {
  /**
  * A Consul ACL token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#acl_token Check#acl_token}
  */
  readonly aclToken?: string;
  /**
  * Allow Consul to read from a non-leader system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#allow_stale Check#allow_stale}
  */
  readonly allowStale?: boolean | cdktf.IResolvable;
  /**
  * A path to a file containing all the certificate authorities that should be loaded to validate the remote certificate (for TLS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ca_chain Check#ca_chain}
  */
  readonly caChain?: string;
  /**
  * A path to a file containing the client certificate that will be presented to the remote server (for TLS-enabled checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#certificate_file Check#certificate_file}
  */
  readonly certificateFile?: string;
  /**
  * A blacklist of check names to exclude from metric results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#check_blacklist Check#check_blacklist}
  */
  readonly checkBlacklist?: string[];
  /**
  * A list of ciphers to be used in the TLS protocol (for HTTPS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ciphers Check#ciphers}
  */
  readonly ciphers?: string;
  /**
  * The Consul datacenter to extract health information from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#dc Check#dc}
  */
  readonly dc?: string;
  /**
  * Map of HTTP Headers to send along with HTTP Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#headers Check#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * The HTTP Address of a Consul agent to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#http_addr Check#http_addr}
  */
  readonly httpAddr?: string;
  /**
  * A path to a file containing key to be used in conjunction with the cilent certificate (for TLS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#key_file Check#key_file}
  */
  readonly keyFile?: string;
  /**
  * Node Name or NodeID of a Consul agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#node Check#node}
  */
  readonly nodeAttribute?: string;
  /**
  * A blacklist of node names or IDs to exclude from metric results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#node_blacklist Check#node_blacklist}
  */
  readonly nodeBlacklist?: string[];
  /**
  * Name of the Consul service to check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#service Check#service}
  */
  readonly service?: string;
  /**
  * A blacklist of service names to exclude from metric results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#service_blacklist Check#service_blacklist}
  */
  readonly serviceBlacklist?: string[];
  /**
  * Check for Consul services in this particular state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#state Check#state}
  */
  readonly state?: string;
}

export function checkConsulToTerraform(struct?: CheckConsulOutputReference | CheckConsul): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_token: cdktf.stringToTerraform(struct!.aclToken),
    allow_stale: cdktf.booleanToTerraform(struct!.allowStale),
    ca_chain: cdktf.stringToTerraform(struct!.caChain),
    certificate_file: cdktf.stringToTerraform(struct!.certificateFile),
    check_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.checkBlacklist),
    ciphers: cdktf.stringToTerraform(struct!.ciphers),
    dc: cdktf.stringToTerraform(struct!.dc),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    http_addr: cdktf.stringToTerraform(struct!.httpAddr),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    node_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeBlacklist),
    service: cdktf.stringToTerraform(struct!.service),
    service_blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceBlacklist),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function checkConsulToHclTerraform(struct?: CheckConsulOutputReference | CheckConsul): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_token: {
      value: cdktf.stringToHclTerraform(struct!.aclToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_stale: {
      value: cdktf.booleanToHclTerraform(struct!.allowStale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ca_chain: {
      value: cdktf.stringToHclTerraform(struct!.caChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_file: {
      value: cdktf.stringToHclTerraform(struct!.certificateFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.checkBlacklist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ciphers: {
      value: cdktf.stringToHclTerraform(struct!.ciphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dc: {
      value: cdktf.stringToHclTerraform(struct!.dc),
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
    http_addr: {
      value: cdktf.stringToHclTerraform(struct!.httpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeBlacklist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceBlacklist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckConsulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckConsul | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclToken = this._aclToken;
    }
    if (this._allowStale !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStale = this._allowStale;
    }
    if (this._caChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.caChain = this._caChain;
    }
    if (this._certificateFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateFile = this._certificateFile;
    }
    if (this._checkBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkBlacklist = this._checkBlacklist;
    }
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._dc !== undefined) {
      hasAnyValues = true;
      internalValueResult.dc = this._dc;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._httpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAddr = this._httpAddr;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._nodeBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeBlacklist = this._nodeBlacklist;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._serviceBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceBlacklist = this._serviceBlacklist;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckConsul | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclToken = undefined;
      this._allowStale = undefined;
      this._caChain = undefined;
      this._certificateFile = undefined;
      this._checkBlacklist = undefined;
      this._ciphers = undefined;
      this._dc = undefined;
      this._headers = undefined;
      this._httpAddr = undefined;
      this._keyFile = undefined;
      this._node = undefined;
      this._nodeBlacklist = undefined;
      this._service = undefined;
      this._serviceBlacklist = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclToken = value.aclToken;
      this._allowStale = value.allowStale;
      this._caChain = value.caChain;
      this._certificateFile = value.certificateFile;
      this._checkBlacklist = value.checkBlacklist;
      this._ciphers = value.ciphers;
      this._dc = value.dc;
      this._headers = value.headers;
      this._httpAddr = value.httpAddr;
      this._keyFile = value.keyFile;
      this._node = value.nodeAttribute;
      this._nodeBlacklist = value.nodeBlacklist;
      this._service = value.service;
      this._serviceBlacklist = value.serviceBlacklist;
      this._state = value.state;
    }
  }

  // acl_token - computed: false, optional: true, required: false
  private _aclToken?: string; 
  public get aclToken() {
    return this.getStringAttribute('acl_token');
  }
  public set aclToken(value: string) {
    this._aclToken = value;
  }
  public resetAclToken() {
    this._aclToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTokenInput() {
    return this._aclToken;
  }

  // allow_stale - computed: false, optional: true, required: false
  private _allowStale?: boolean | cdktf.IResolvable; 
  public get allowStale() {
    return this.getBooleanAttribute('allow_stale');
  }
  public set allowStale(value: boolean | cdktf.IResolvable) {
    this._allowStale = value;
  }
  public resetAllowStale() {
    this._allowStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStaleInput() {
    return this._allowStale;
  }

  // ca_chain - computed: false, optional: true, required: false
  private _caChain?: string; 
  public get caChain() {
    return this.getStringAttribute('ca_chain');
  }
  public set caChain(value: string) {
    this._caChain = value;
  }
  public resetCaChain() {
    this._caChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caChainInput() {
    return this._caChain;
  }

  // certificate_file - computed: false, optional: true, required: false
  private _certificateFile?: string; 
  public get certificateFile() {
    return this.getStringAttribute('certificate_file');
  }
  public set certificateFile(value: string) {
    this._certificateFile = value;
  }
  public resetCertificateFile() {
    this._certificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFileInput() {
    return this._certificateFile;
  }

  // check_blacklist - computed: false, optional: true, required: false
  private _checkBlacklist?: string[]; 
  public get checkBlacklist() {
    return this.getListAttribute('check_blacklist');
  }
  public set checkBlacklist(value: string[]) {
    this._checkBlacklist = value;
  }
  public resetCheckBlacklist() {
    this._checkBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkBlacklistInput() {
    return this._checkBlacklist;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // dc - computed: false, optional: true, required: false
  private _dc?: string; 
  public get dc() {
    return this.getStringAttribute('dc');
  }
  public set dc(value: string) {
    this._dc = value;
  }
  public resetDc() {
    this._dc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcInput() {
    return this._dc;
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

  // http_addr - computed: false, optional: true, required: false
  private _httpAddr?: string; 
  public get httpAddr() {
    return this.getStringAttribute('http_addr');
  }
  public set httpAddr(value: string) {
    this._httpAddr = value;
  }
  public resetHttpAddr() {
    this._httpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAddrInput() {
    return this._httpAddr;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // node_blacklist - computed: false, optional: true, required: false
  private _nodeBlacklist?: string[]; 
  public get nodeBlacklist() {
    return this.getListAttribute('node_blacklist');
  }
  public set nodeBlacklist(value: string[]) {
    this._nodeBlacklist = value;
  }
  public resetNodeBlacklist() {
    this._nodeBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeBlacklistInput() {
    return this._nodeBlacklist;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_blacklist - computed: false, optional: true, required: false
  private _serviceBlacklist?: string[]; 
  public get serviceBlacklist() {
    return this.getListAttribute('service_blacklist');
  }
  public set serviceBlacklist(value: string[]) {
    this._serviceBlacklist = value;
  }
  public resetServiceBlacklist() {
    this._serviceBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBlacklistInput() {
    return this._serviceBlacklist;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface CheckDns {
  /**
  * The DNS class of the query. IN: Internet, CH: Chaos, HS: Hesoid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ctype Check#ctype}
  */
  readonly ctype?: string;
  /**
  * The domain name server to query. If the name of the check is in-addr.arpa, the system default nameserver is used. Otherwise, the nameserver is the %[target] of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#nameserver Check#nameserver}
  */
  readonly nameserver?: string;
  /**
  * The query to send. If the name of the check is in-addr.arpa, the reverse IP octet notation of in-addr.arpa syntax is synthesized by default. Otherwise the default query is the name of the check itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#query Check#query}
  */
  readonly query: string;
  /**
  * The DNS resource record type of the query. If the name of the check is in-addr.arpa, the default is PTR, otherwise it is A.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#rtype Check#rtype}
  */
  readonly rtype?: string;
}

export function checkDnsToTerraform(struct?: CheckDnsOutputReference | CheckDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ctype: cdktf.stringToTerraform(struct!.ctype),
    nameserver: cdktf.stringToTerraform(struct!.nameserver),
    query: cdktf.stringToTerraform(struct!.query),
    rtype: cdktf.stringToTerraform(struct!.rtype),
  }
}


export function checkDnsToHclTerraform(struct?: CheckDnsOutputReference | CheckDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ctype: {
      value: cdktf.stringToHclTerraform(struct!.ctype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameserver: {
      value: cdktf.stringToHclTerraform(struct!.nameserver),
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
    rtype: {
      value: cdktf.stringToHclTerraform(struct!.rtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ctype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctype = this._ctype;
    }
    if (this._nameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameserver = this._nameserver;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtype = this._rtype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ctype = undefined;
      this._nameserver = undefined;
      this._query = undefined;
      this._rtype = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ctype = value.ctype;
      this._nameserver = value.nameserver;
      this._query = value.query;
      this._rtype = value.rtype;
    }
  }

  // ctype - computed: false, optional: true, required: false
  private _ctype?: string; 
  public get ctype() {
    return this.getStringAttribute('ctype');
  }
  public set ctype(value: string) {
    this._ctype = value;
  }
  public resetCtype() {
    this._ctype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctypeInput() {
    return this._ctype;
  }

  // nameserver - computed: false, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rtype - computed: false, optional: true, required: false
  private _rtype?: string; 
  public get rtype() {
    return this.getStringAttribute('rtype');
  }
  public set rtype(value: string) {
    this._rtype = value;
  }
  public resetRtype() {
    this._rtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtypeInput() {
    return this._rtype;
  }
}
export interface CheckExternal {
  /**
  * The 1st argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg1 Check#arg1}
  */
  readonly arg1?: string;
  /**
  * The 10th argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg10 Check#arg10}
  */
  readonly arg10?: string;
  /**
  * The 2nd argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg2 Check#arg2}
  */
  readonly arg2?: string;
  /**
  * The 3rd argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg3 Check#arg3}
  */
  readonly arg3?: string;
  /**
  * The 4th argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg4 Check#arg4}
  */
  readonly arg4?: string;
  /**
  * The 5th argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg5 Check#arg5}
  */
  readonly arg5?: string;
  /**
  * The 6th argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg6 Check#arg6}
  */
  readonly arg6?: string;
  /**
  * The 7th argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg7 Check#arg7}
  */
  readonly arg7?: string;
  /**
  * The 8th argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg8 Check#arg8}
  */
  readonly arg8?: string;
  /**
  * The 9th argument to the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#arg9 Check#arg9}
  */
  readonly arg9?: string;
  /**
  * The full path to the command to run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#command Check#command}
  */
  readonly command: string;
  /**
  * The map of environment vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#env Check#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * The output extraction method: JSON or NAGIOS, otherwise treated as regexp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#output_extract Check#output_extract}
  */
  readonly outputExtract: string;
}

export function checkExternalToTerraform(struct?: CheckExternalOutputReference | CheckExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arg1: cdktf.stringToTerraform(struct!.arg1),
    arg10: cdktf.stringToTerraform(struct!.arg10),
    arg2: cdktf.stringToTerraform(struct!.arg2),
    arg3: cdktf.stringToTerraform(struct!.arg3),
    arg4: cdktf.stringToTerraform(struct!.arg4),
    arg5: cdktf.stringToTerraform(struct!.arg5),
    arg6: cdktf.stringToTerraform(struct!.arg6),
    arg7: cdktf.stringToTerraform(struct!.arg7),
    arg8: cdktf.stringToTerraform(struct!.arg8),
    arg9: cdktf.stringToTerraform(struct!.arg9),
    command: cdktf.stringToTerraform(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    output_extract: cdktf.stringToTerraform(struct!.outputExtract),
  }
}


export function checkExternalToHclTerraform(struct?: CheckExternalOutputReference | CheckExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arg1: {
      value: cdktf.stringToHclTerraform(struct!.arg1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg10: {
      value: cdktf.stringToHclTerraform(struct!.arg10),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg2: {
      value: cdktf.stringToHclTerraform(struct!.arg2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg3: {
      value: cdktf.stringToHclTerraform(struct!.arg3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg4: {
      value: cdktf.stringToHclTerraform(struct!.arg4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg5: {
      value: cdktf.stringToHclTerraform(struct!.arg5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg6: {
      value: cdktf.stringToHclTerraform(struct!.arg6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg7: {
      value: cdktf.stringToHclTerraform(struct!.arg7),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg8: {
      value: cdktf.stringToHclTerraform(struct!.arg8),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg9: {
      value: cdktf.stringToHclTerraform(struct!.arg9),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    output_extract: {
      value: cdktf.stringToHclTerraform(struct!.outputExtract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arg1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg1 = this._arg1;
    }
    if (this._arg10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg10 = this._arg10;
    }
    if (this._arg2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg2 = this._arg2;
    }
    if (this._arg3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg3 = this._arg3;
    }
    if (this._arg4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg4 = this._arg4;
    }
    if (this._arg5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg5 = this._arg5;
    }
    if (this._arg6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg6 = this._arg6;
    }
    if (this._arg7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg7 = this._arg7;
    }
    if (this._arg8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg8 = this._arg8;
    }
    if (this._arg9 !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg9 = this._arg9;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._outputExtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputExtract = this._outputExtract;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arg1 = undefined;
      this._arg10 = undefined;
      this._arg2 = undefined;
      this._arg3 = undefined;
      this._arg4 = undefined;
      this._arg5 = undefined;
      this._arg6 = undefined;
      this._arg7 = undefined;
      this._arg8 = undefined;
      this._arg9 = undefined;
      this._command = undefined;
      this._env = undefined;
      this._outputExtract = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arg1 = value.arg1;
      this._arg10 = value.arg10;
      this._arg2 = value.arg2;
      this._arg3 = value.arg3;
      this._arg4 = value.arg4;
      this._arg5 = value.arg5;
      this._arg6 = value.arg6;
      this._arg7 = value.arg7;
      this._arg8 = value.arg8;
      this._arg9 = value.arg9;
      this._command = value.command;
      this._env = value.env;
      this._outputExtract = value.outputExtract;
    }
  }

  // arg1 - computed: false, optional: true, required: false
  private _arg1?: string; 
  public get arg1() {
    return this.getStringAttribute('arg1');
  }
  public set arg1(value: string) {
    this._arg1 = value;
  }
  public resetArg1() {
    this._arg1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg1Input() {
    return this._arg1;
  }

  // arg10 - computed: false, optional: true, required: false
  private _arg10?: string; 
  public get arg10() {
    return this.getStringAttribute('arg10');
  }
  public set arg10(value: string) {
    this._arg10 = value;
  }
  public resetArg10() {
    this._arg10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg10Input() {
    return this._arg10;
  }

  // arg2 - computed: false, optional: true, required: false
  private _arg2?: string; 
  public get arg2() {
    return this.getStringAttribute('arg2');
  }
  public set arg2(value: string) {
    this._arg2 = value;
  }
  public resetArg2() {
    this._arg2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg2Input() {
    return this._arg2;
  }

  // arg3 - computed: false, optional: true, required: false
  private _arg3?: string; 
  public get arg3() {
    return this.getStringAttribute('arg3');
  }
  public set arg3(value: string) {
    this._arg3 = value;
  }
  public resetArg3() {
    this._arg3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg3Input() {
    return this._arg3;
  }

  // arg4 - computed: false, optional: true, required: false
  private _arg4?: string; 
  public get arg4() {
    return this.getStringAttribute('arg4');
  }
  public set arg4(value: string) {
    this._arg4 = value;
  }
  public resetArg4() {
    this._arg4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg4Input() {
    return this._arg4;
  }

  // arg5 - computed: false, optional: true, required: false
  private _arg5?: string; 
  public get arg5() {
    return this.getStringAttribute('arg5');
  }
  public set arg5(value: string) {
    this._arg5 = value;
  }
  public resetArg5() {
    this._arg5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg5Input() {
    return this._arg5;
  }

  // arg6 - computed: false, optional: true, required: false
  private _arg6?: string; 
  public get arg6() {
    return this.getStringAttribute('arg6');
  }
  public set arg6(value: string) {
    this._arg6 = value;
  }
  public resetArg6() {
    this._arg6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg6Input() {
    return this._arg6;
  }

  // arg7 - computed: false, optional: true, required: false
  private _arg7?: string; 
  public get arg7() {
    return this.getStringAttribute('arg7');
  }
  public set arg7(value: string) {
    this._arg7 = value;
  }
  public resetArg7() {
    this._arg7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg7Input() {
    return this._arg7;
  }

  // arg8 - computed: false, optional: true, required: false
  private _arg8?: string; 
  public get arg8() {
    return this.getStringAttribute('arg8');
  }
  public set arg8(value: string) {
    this._arg8 = value;
  }
  public resetArg8() {
    this._arg8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg8Input() {
    return this._arg8;
  }

  // arg9 - computed: false, optional: true, required: false
  private _arg9?: string; 
  public get arg9() {
    return this.getStringAttribute('arg9');
  }
  public set arg9(value: string) {
    this._arg9 = value;
  }
  public resetArg9() {
    this._arg9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arg9Input() {
    return this._arg9;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // output_extract - computed: false, optional: false, required: true
  private _outputExtract?: string; 
  public get outputExtract() {
    return this.getStringAttribute('output_extract');
  }
  public set outputExtract(value: string) {
    this._outputExtract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputExtractInput() {
    return this._outputExtract;
  }
}
export interface CheckHttp {
  /**
  * The HTTP Authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#auth_method Check#auth_method}
  */
  readonly authMethod?: string;
  /**
  * The HTTP Authentication user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#auth_password Check#auth_password}
  */
  readonly authPassword?: string;
  /**
  * The HTTP Authentication user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#auth_user Check#auth_user}
  */
  readonly authUser?: string;
  /**
  * This regular expression is matched against the body of the response. If a match is not found, the check will be marked as "bad.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#body_regexp Check#body_regexp}
  */
  readonly bodyRegexp?: string;
  /**
  * A path to a file containing all the certificate authorities that should be loaded to validate the remote certificate (for TLS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ca_chain Check#ca_chain}
  */
  readonly caChain?: string;
  /**
  * A path to a file containing the client certificate that will be presented to the remote server (for TLS-enabled checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#certificate_file Check#certificate_file}
  */
  readonly certificateFile?: string;
  /**
  * A list of ciphers to be used in the TLS protocol (for HTTPS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ciphers Check#ciphers}
  */
  readonly ciphers?: string;
  /**
  * The HTTP code that is expected. If the code received does not match this regular expression, the check is marked as "bad."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#code Check#code}
  */
  readonly code?: string;
  /**
  * This regular expression is matched against the body of the response globally. The first capturing match is the key and the second capturing match is the value. Each key/value extracted is registered as a metric for the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#extract Check#extract}
  */
  readonly extract?: string;
  /**
  * Map of HTTP Headers to send along with HTTP Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#headers Check#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * A path to a file containing key to be used in conjunction with the cilent certificate (for TLS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#key_file Check#key_file}
  */
  readonly keyFile?: string;
  /**
  * The HTTP method to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method Check#method}
  */
  readonly method?: string;
  /**
  * The information transferred as the payload of an HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#payload Check#payload}
  */
  readonly payload?: string;
  /**
  * Sets an approximate limit on the data read (0 means no limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#read_limit Check#read_limit}
  */
  readonly readLimit?: number;
  /**
  * The maximum number of Location header redirects to follow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#redirects Check#redirects}
  */
  readonly redirects?: string;
  /**
  * The URL to use as the target of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#url Check#url}
  */
  readonly url: string;
  /**
  * Sets the HTTP version for the check to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#version Check#version}
  */
  readonly version?: string;
}

export function checkHttpToTerraform(struct?: CheckHttpOutputReference | CheckHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_user: cdktf.stringToTerraform(struct!.authUser),
    body_regexp: cdktf.stringToTerraform(struct!.bodyRegexp),
    ca_chain: cdktf.stringToTerraform(struct!.caChain),
    certificate_file: cdktf.stringToTerraform(struct!.certificateFile),
    ciphers: cdktf.stringToTerraform(struct!.ciphers),
    code: cdktf.stringToTerraform(struct!.code),
    extract: cdktf.stringToTerraform(struct!.extract),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    method: cdktf.stringToTerraform(struct!.method),
    payload: cdktf.stringToTerraform(struct!.payload),
    read_limit: cdktf.numberToTerraform(struct!.readLimit),
    redirects: cdktf.stringToTerraform(struct!.redirects),
    url: cdktf.stringToTerraform(struct!.url),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function checkHttpToHclTerraform(struct?: CheckHttpOutputReference | CheckHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_user: {
      value: cdktf.stringToHclTerraform(struct!.authUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_regexp: {
      value: cdktf.stringToHclTerraform(struct!.bodyRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_chain: {
      value: cdktf.stringToHclTerraform(struct!.caChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_file: {
      value: cdktf.stringToHclTerraform(struct!.certificateFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ciphers: {
      value: cdktf.stringToHclTerraform(struct!.ciphers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extract: {
      value: cdktf.stringToHclTerraform(struct!.extract),
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
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
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
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_limit: {
      value: cdktf.numberToHclTerraform(struct!.readLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirects: {
      value: cdktf.stringToHclTerraform(struct!.redirects),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUser = this._authUser;
    }
    if (this._bodyRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyRegexp = this._bodyRegexp;
    }
    if (this._caChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.caChain = this._caChain;
    }
    if (this._certificateFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateFile = this._certificateFile;
    }
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._extract !== undefined) {
      hasAnyValues = true;
      internalValueResult.extract = this._extract;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._readLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLimit = this._readLimit;
    }
    if (this._redirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirects = this._redirects;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authMethod = undefined;
      this._authPassword = undefined;
      this._authUser = undefined;
      this._bodyRegexp = undefined;
      this._caChain = undefined;
      this._certificateFile = undefined;
      this._ciphers = undefined;
      this._code = undefined;
      this._extract = undefined;
      this._headers = undefined;
      this._keyFile = undefined;
      this._method = undefined;
      this._payload = undefined;
      this._readLimit = undefined;
      this._redirects = undefined;
      this._url = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authMethod = value.authMethod;
      this._authPassword = value.authPassword;
      this._authUser = value.authUser;
      this._bodyRegexp = value.bodyRegexp;
      this._caChain = value.caChain;
      this._certificateFile = value.certificateFile;
      this._ciphers = value.ciphers;
      this._code = value.code;
      this._extract = value.extract;
      this._headers = value.headers;
      this._keyFile = value.keyFile;
      this._method = value.method;
      this._payload = value.payload;
      this._readLimit = value.readLimit;
      this._redirects = value.redirects;
      this._url = value.url;
      this._version = value.version;
    }
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_user - computed: false, optional: true, required: false
  private _authUser?: string; 
  public get authUser() {
    return this.getStringAttribute('auth_user');
  }
  public set authUser(value: string) {
    this._authUser = value;
  }
  public resetAuthUser() {
    this._authUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserInput() {
    return this._authUser;
  }

  // body_regexp - computed: false, optional: true, required: false
  private _bodyRegexp?: string; 
  public get bodyRegexp() {
    return this.getStringAttribute('body_regexp');
  }
  public set bodyRegexp(value: string) {
    this._bodyRegexp = value;
  }
  public resetBodyRegexp() {
    this._bodyRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyRegexpInput() {
    return this._bodyRegexp;
  }

  // ca_chain - computed: false, optional: true, required: false
  private _caChain?: string; 
  public get caChain() {
    return this.getStringAttribute('ca_chain');
  }
  public set caChain(value: string) {
    this._caChain = value;
  }
  public resetCaChain() {
    this._caChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caChainInput() {
    return this._caChain;
  }

  // certificate_file - computed: false, optional: true, required: false
  private _certificateFile?: string; 
  public get certificateFile() {
    return this.getStringAttribute('certificate_file');
  }
  public set certificateFile(value: string) {
    this._certificateFile = value;
  }
  public resetCertificateFile() {
    this._certificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFileInput() {
    return this._certificateFile;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // extract - computed: false, optional: true, required: false
  private _extract?: string; 
  public get extract() {
    return this.getStringAttribute('extract');
  }
  public set extract(value: string) {
    this._extract = value;
  }
  public resetExtract() {
    this._extract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractInput() {
    return this._extract;
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

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
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

  // read_limit - computed: false, optional: true, required: false
  private _readLimit?: number; 
  public get readLimit() {
    return this.getNumberAttribute('read_limit');
  }
  public set readLimit(value: number) {
    this._readLimit = value;
  }
  public resetReadLimit() {
    this._readLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLimitInput() {
    return this._readLimit;
  }

  // redirects - computed: false, optional: true, required: false
  private _redirects?: string; 
  public get redirects() {
    return this.getStringAttribute('redirects');
  }
  public set redirects(value: string) {
    this._redirects = value;
  }
  public resetRedirects() {
    this._redirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectsInput() {
    return this._redirects;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CheckHttptrap {
  /**
  * Specify whether httptrap metrics are logged immediately or held until the status message is emitted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#async_metrics Check#async_metrics}
  */
  readonly asyncMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#secret Check#secret}
  */
  readonly secret?: string;
}

export function checkHttptrapToTerraform(struct?: CheckHttptrapOutputReference | CheckHttptrap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    async_metrics: cdktf.booleanToTerraform(struct!.asyncMetrics),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function checkHttptrapToHclTerraform(struct?: CheckHttptrapOutputReference | CheckHttptrap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    async_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.asyncMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckHttptrapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckHttptrap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asyncMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.asyncMetrics = this._asyncMetrics;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckHttptrap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asyncMetrics = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asyncMetrics = value.asyncMetrics;
      this._secret = value.secret;
    }
  }

  // async_metrics - computed: false, optional: true, required: false
  private _asyncMetrics?: boolean | cdktf.IResolvable; 
  public get asyncMetrics() {
    return this.getBooleanAttribute('async_metrics');
  }
  public set asyncMetrics(value: boolean | cdktf.IResolvable) {
    this._asyncMetrics = value;
  }
  public resetAsyncMetrics() {
    this._asyncMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncMetricsInput() {
    return this._asyncMetrics;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface CheckIcmpPing {
  /**
  * The percentage of ICMP available required for the check to be considered "good."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#availability Check#availability}
  */
  readonly availability?: number;
  /**
  * The number of ICMP requests to send during a single check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#count Check#count}
  */
  readonly count?: number;
  /**
  * The number of milliseconds between ICMP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#interval Check#interval}
  */
  readonly interval?: string;
}

export function checkIcmpPingToTerraform(struct?: CheckIcmpPingOutputReference | CheckIcmpPing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.numberToTerraform(struct!.availability),
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function checkIcmpPingToHclTerraform(struct?: CheckIcmpPingOutputReference | CheckIcmpPing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.numberToHclTerraform(struct!.availability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckIcmpPingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckIcmpPing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckIcmpPing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availability = undefined;
      this._count = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availability = value.availability;
      this._count = value.count;
      this._interval = value.interval;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: number; 
  public get availability() {
    return this.getNumberAttribute('availability');
  }
  public set availability(value: number) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface CheckJmxMbeanProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#index Check#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#name Check#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#type Check#type}
  */
  readonly type: string;
}

export function checkJmxMbeanPropertiesToTerraform(struct?: CheckJmxMbeanProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function checkJmxMbeanPropertiesToHclTerraform(struct?: CheckJmxMbeanProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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

export class CheckJmxMbeanPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckJmxMbeanProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckJmxMbeanProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

export class CheckJmxMbeanPropertiesList extends cdktf.ComplexList {
  public internalValue? : CheckJmxMbeanProperties[] | cdktf.IResolvable

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
  public get(index: number): CheckJmxMbeanPropertiesOutputReference {
    return new CheckJmxMbeanPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckJmx {
  /**
  * JMX host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#host Check#host}
  */
  readonly host: string;
  /**
  * The space separated list of domains to filter to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#mbean_domains Check#mbean_domains}
  */
  readonly mbeanDomains?: string[];
  /**
  * JMX password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#password Check#password}
  */
  readonly password?: string;
  /**
  * JMX port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port: number;
  /**
  * JMX uri, defaults to '/jmxrmi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#uri Check#uri}
  */
  readonly uri?: string;
  /**
  * JMX username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#username Check#username}
  */
  readonly username?: string;
  /**
  * mbean_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#mbean_properties Check#mbean_properties}
  */
  readonly mbeanProperties?: CheckJmxMbeanProperties[] | cdktf.IResolvable;
}

export function checkJmxToTerraform(struct?: CheckJmxOutputReference | CheckJmx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    mbean_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mbeanDomains),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    uri: cdktf.stringToTerraform(struct!.uri),
    username: cdktf.stringToTerraform(struct!.username),
    mbean_properties: cdktf.listMapper(checkJmxMbeanPropertiesToTerraform, true)(struct!.mbeanProperties),
  }
}


export function checkJmxToHclTerraform(struct?: CheckJmxOutputReference | CheckJmx): any {
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
    mbean_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mbeanDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
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
    mbean_properties: {
      value: cdktf.listMapperHcl(checkJmxMbeanPropertiesToHclTerraform, true)(struct!.mbeanProperties),
      isBlock: true,
      type: "list",
      storageClassType: "CheckJmxMbeanPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckJmxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckJmx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._mbeanDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbeanDomains = this._mbeanDomains;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._mbeanProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mbeanProperties = this._mbeanProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckJmx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._mbeanDomains = undefined;
      this._password = undefined;
      this._port = undefined;
      this._uri = undefined;
      this._username = undefined;
      this._mbeanProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._mbeanDomains = value.mbeanDomains;
      this._password = value.password;
      this._port = value.port;
      this._uri = value.uri;
      this._username = value.username;
      this._mbeanProperties.internalValue = value.mbeanProperties;
    }
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

  // mbean_domains - computed: false, optional: true, required: false
  private _mbeanDomains?: string[]; 
  public get mbeanDomains() {
    return this.getListAttribute('mbean_domains');
  }
  public set mbeanDomains(value: string[]) {
    this._mbeanDomains = value;
  }
  public resetMbeanDomains() {
    this._mbeanDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbeanDomainsInput() {
    return this._mbeanDomains;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
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

  // mbean_properties - computed: false, optional: true, required: false
  private _mbeanProperties = new CheckJmxMbeanPropertiesList(this, "mbean_properties", false);
  public get mbeanProperties() {
    return this._mbeanProperties;
  }
  public putMbeanProperties(value: CheckJmxMbeanProperties[] | cdktf.IResolvable) {
    this._mbeanProperties.internalValue = value;
  }
  public resetMbeanProperties() {
    this._mbeanProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbeanPropertiesInput() {
    return this._mbeanProperties.internalValue;
  }
}
export interface CheckJson {
  /**
  * The HTTP Authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#auth_method Check#auth_method}
  */
  readonly authMethod?: string;
  /**
  * The HTTP Authentication user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#auth_password Check#auth_password}
  */
  readonly authPassword?: string;
  /**
  * The HTTP Authentication user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#auth_user Check#auth_user}
  */
  readonly authUser?: string;
  /**
  * A path to a file containing all the certificate authorities that should be loaded to validate the remote certificate (for TLS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ca_chain Check#ca_chain}
  */
  readonly caChain?: string;
  /**
  * A path to a file containing the client certificate that will be presented to the remote server (for TLS-enabled checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#certificate_file Check#certificate_file}
  */
  readonly certificateFile?: string;
  /**
  * A list of ciphers to be used in the TLS protocol (for HTTPS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ciphers Check#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Map of HTTP Headers to send along with HTTP Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#headers Check#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * A path to a file containing key to be used in conjunction with the cilent certificate (for TLS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#key_file Check#key_file}
  */
  readonly keyFile?: string;
  /**
  * The HTTP method to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method Check#method}
  */
  readonly method?: string;
  /**
  * The information transferred as the payload of an HTTP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#payload Check#payload}
  */
  readonly payload?: string;
  /**
  * Specifies the port on which the management interface can be reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port?: number;
  /**
  * Sets an approximate limit on the data read (0 means no limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#read_limit Check#read_limit}
  */
  readonly readLimit?: number;
  /**
  * The URL to use as the target of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#url Check#url}
  */
  readonly url: string;
  /**
  * Sets the HTTP version for the check to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#version Check#version}
  */
  readonly version?: string;
}

export function checkJsonToTerraform(struct?: CheckJsonOutputReference | CheckJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_user: cdktf.stringToTerraform(struct!.authUser),
    ca_chain: cdktf.stringToTerraform(struct!.caChain),
    certificate_file: cdktf.stringToTerraform(struct!.certificateFile),
    ciphers: cdktf.stringToTerraform(struct!.ciphers),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    method: cdktf.stringToTerraform(struct!.method),
    payload: cdktf.stringToTerraform(struct!.payload),
    port: cdktf.numberToTerraform(struct!.port),
    read_limit: cdktf.numberToTerraform(struct!.readLimit),
    url: cdktf.stringToTerraform(struct!.url),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function checkJsonToHclTerraform(struct?: CheckJsonOutputReference | CheckJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_user: {
      value: cdktf.stringToHclTerraform(struct!.authUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_chain: {
      value: cdktf.stringToHclTerraform(struct!.caChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_file: {
      value: cdktf.stringToHclTerraform(struct!.certificateFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ciphers: {
      value: cdktf.stringToHclTerraform(struct!.ciphers),
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
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
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
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
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
    read_limit: {
      value: cdktf.numberToHclTerraform(struct!.readLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUser = this._authUser;
    }
    if (this._caChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.caChain = this._caChain;
    }
    if (this._certificateFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateFile = this._certificateFile;
    }
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._readLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.readLimit = this._readLimit;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authMethod = undefined;
      this._authPassword = undefined;
      this._authUser = undefined;
      this._caChain = undefined;
      this._certificateFile = undefined;
      this._ciphers = undefined;
      this._headers = undefined;
      this._keyFile = undefined;
      this._method = undefined;
      this._payload = undefined;
      this._port = undefined;
      this._readLimit = undefined;
      this._url = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authMethod = value.authMethod;
      this._authPassword = value.authPassword;
      this._authUser = value.authUser;
      this._caChain = value.caChain;
      this._certificateFile = value.certificateFile;
      this._ciphers = value.ciphers;
      this._headers = value.headers;
      this._keyFile = value.keyFile;
      this._method = value.method;
      this._payload = value.payload;
      this._port = value.port;
      this._readLimit = value.readLimit;
      this._url = value.url;
      this._version = value.version;
    }
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_user - computed: false, optional: true, required: false
  private _authUser?: string; 
  public get authUser() {
    return this.getStringAttribute('auth_user');
  }
  public set authUser(value: string) {
    this._authUser = value;
  }
  public resetAuthUser() {
    this._authUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserInput() {
    return this._authUser;
  }

  // ca_chain - computed: false, optional: true, required: false
  private _caChain?: string; 
  public get caChain() {
    return this.getStringAttribute('ca_chain');
  }
  public set caChain(value: string) {
    this._caChain = value;
  }
  public resetCaChain() {
    this._caChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caChainInput() {
    return this._caChain;
  }

  // certificate_file - computed: false, optional: true, required: false
  private _certificateFile?: string; 
  public get certificateFile() {
    return this.getStringAttribute('certificate_file');
  }
  public set certificateFile(value: string) {
    this._certificateFile = value;
  }
  public resetCertificateFile() {
    this._certificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFileInput() {
    return this._certificateFile;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
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

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // read_limit - computed: false, optional: true, required: false
  private _readLimit?: number; 
  public get readLimit() {
    return this.getNumberAttribute('read_limit');
  }
  public set readLimit(value: number) {
    this._readLimit = value;
  }
  public resetReadLimit() {
    this._readLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readLimitInput() {
    return this._readLimit;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CheckMemcached {
  /**
  * The port the memcached instance is listenening on, default 11211
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port?: number;
}

export function checkMemcachedToTerraform(struct?: CheckMemcachedOutputReference | CheckMemcached): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function checkMemcachedToHclTerraform(struct?: CheckMemcachedOutputReference | CheckMemcached): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckMemcachedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckMemcached | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckMemcached | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface CheckMetric {
  /**
  * Enables or disables the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#active Check#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Name of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#name Check#name}
  */
  readonly name: string;
  /**
  * Type of metric (e.g. numeric, histogram, text)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#type Check#type}
  */
  readonly type: string;
}

export function checkMetricToTerraform(struct?: CheckMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function checkMetricToHclTerraform(struct?: CheckMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class CheckMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

export class CheckMetricList extends cdktf.ComplexList {
  public internalValue? : CheckMetric[] | cdktf.IResolvable

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
  public get(index: number): CheckMetricOutputReference {
    return new CheckMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckMetricFilter {
  /**
  * Comment on this filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#comment Check#comment}
  */
  readonly comment?: string;
  /**
  * Regex of the filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#regex Check#regex}
  */
  readonly regex: string;
  /**
  * The tag query to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#tag_query Check#tag_query}
  */
  readonly tagQuery?: string;
  /**
  * 'allow' or 'deny'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#type Check#type}
  */
  readonly type: string;
}

export function checkMetricFilterToTerraform(struct?: CheckMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    regex: cdktf.stringToTerraform(struct!.regex),
    tag_query: cdktf.stringToTerraform(struct!.tagQuery),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function checkMetricFilterToHclTerraform(struct?: CheckMetricFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_query: {
      value: cdktf.stringToHclTerraform(struct!.tagQuery),
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

export class CheckMetricFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckMetricFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._tagQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagQuery = this._tagQuery;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckMetricFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._regex = undefined;
      this._tagQuery = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._regex = value.regex;
      this._tagQuery = value.tagQuery;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // regex - computed: false, optional: false, required: true
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // tag_query - computed: false, optional: true, required: false
  private _tagQuery?: string; 
  public get tagQuery() {
    return this.getStringAttribute('tag_query');
  }
  public set tagQuery(value: string) {
    this._tagQuery = value;
  }
  public resetTagQuery() {
    this._tagQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagQueryInput() {
    return this._tagQuery;
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

export class CheckMetricFilterList extends cdktf.ComplexList {
  public internalValue? : CheckMetricFilter[] | cdktf.IResolvable

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
  public get(index: number): CheckMetricFilterOutputReference {
    return new CheckMetricFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckMysql {
  /**
  * The connect DSN for the MySQL instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#dsn Check#dsn}
  */
  readonly dsn: string;
  /**
  * The SQL to use as the query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#query Check#query}
  */
  readonly query: string;
}

export function checkMysqlToTerraform(struct?: CheckMysqlOutputReference | CheckMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dsn: cdktf.stringToTerraform(struct!.dsn),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function checkMysqlToHclTerraform(struct?: CheckMysqlOutputReference | CheckMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dsn: {
      value: cdktf.stringToHclTerraform(struct!.dsn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsn = this._dsn;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dsn = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dsn = value.dsn;
      this._query = value.query;
    }
  }

  // dsn - computed: false, optional: false, required: true
  private _dsn?: string; 
  public get dsn() {
    return this.getStringAttribute('dsn');
  }
  public set dsn(value: string) {
    this._dsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsnInput() {
    return this._dsn;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface CheckNtp {
  /**
  * The port to talk to NTP over (default: 123)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port?: number;
  /**
  * Control protocol means that the agent will request the NTP telemetry of the target regarding its preferred peer, (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#use_control Check#use_control}
  */
  readonly useControl?: boolean | cdktf.IResolvable;
}

export function checkNtpToTerraform(struct?: CheckNtpOutputReference | CheckNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    use_control: cdktf.booleanToTerraform(struct!.useControl),
  }
}


export function checkNtpToHclTerraform(struct?: CheckNtpOutputReference | CheckNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_control: {
      value: cdktf.booleanToHclTerraform(struct!.useControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckNtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckNtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._useControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useControl = this._useControl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckNtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._useControl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._useControl = value.useControl;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // use_control - computed: false, optional: true, required: false
  private _useControl?: boolean | cdktf.IResolvable; 
  public get useControl() {
    return this.getBooleanAttribute('use_control');
  }
  public set useControl(value: boolean | cdktf.IResolvable) {
    this._useControl = value;
  }
  public resetUseControl() {
    this._useControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useControlInput() {
    return this._useControl;
  }
}
export interface CheckPostgresql {
  /**
  * The connect DSN for the PostgreSQL instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#dsn Check#dsn}
  */
  readonly dsn: string;
  /**
  * The SQL to use as the query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#query Check#query}
  */
  readonly query: string;
}

export function checkPostgresqlToTerraform(struct?: CheckPostgresqlOutputReference | CheckPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dsn: cdktf.stringToTerraform(struct!.dsn),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function checkPostgresqlToHclTerraform(struct?: CheckPostgresqlOutputReference | CheckPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dsn: {
      value: cdktf.stringToHclTerraform(struct!.dsn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsn = this._dsn;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dsn = undefined;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dsn = value.dsn;
      this._query = value.query;
    }
  }

  // dsn - computed: false, optional: false, required: true
  private _dsn?: string; 
  public get dsn() {
    return this.getStringAttribute('dsn');
  }
  public set dsn(value: string) {
    this._dsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsnInput() {
    return this._dsn;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface CheckPromtext {
  /**
  * Specifies the port on which the prometheus metrics can be scraped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port?: number;
  /**
  * The URL to use as the target of the check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#url Check#url}
  */
  readonly url: string;
}

export function checkPromtextToTerraform(struct?: CheckPromtextOutputReference | CheckPromtext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function checkPromtextToHclTerraform(struct?: CheckPromtextOutputReference | CheckPromtext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CheckPromtextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckPromtext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckPromtext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._url = value.url;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
export interface CheckRedis {
  /**
  * The redis command to run to gather stats, default: INFO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#command Check#command}
  */
  readonly command?: string;
  /**
  * The database index to query, defaults to zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#db_index Check#db_index}
  */
  readonly dbIndex?: number;
  /**
  * The pass required to run the command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#password Check#password}
  */
  readonly password?: string;
  /**
  * Specifies the port on which the Redis instance can be reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port?: number;
}

export function checkRedisToTerraform(struct?: CheckRedisOutputReference | CheckRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    db_index: cdktf.numberToTerraform(struct!.dbIndex),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function checkRedisToHclTerraform(struct?: CheckRedisOutputReference | CheckRedis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_index: {
      value: cdktf.numberToHclTerraform(struct!.dbIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckRedis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._dbIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbIndex = this._dbIndex;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckRedis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._dbIndex = undefined;
      this._password = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._dbIndex = value.dbIndex;
      this._password = value.password;
      this._port = value.port;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // db_index - computed: false, optional: true, required: false
  private _dbIndex?: number; 
  public get dbIndex() {
    return this.getNumberAttribute('db_index');
  }
  public set dbIndex(value: number) {
    this._dbIndex = value;
  }
  public resetDbIndex() {
    this._dbIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbIndexInput() {
    return this._dbIndex;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface CheckSmtp {
  /**
  * Specifies the EHLO parameter. (default: noit.local)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ehlo Check#ehlo}
  */
  readonly ehlo?: string;
  /**
  * Specifies the envelope sender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#from Check#from}
  */
  readonly from?: string;
  /**
  * Specifies the payload sent (on the wire). CR LF DOT CR LF is appended automatically. (default: Subject: Testing)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#payload Check#payload}
  */
  readonly payload?: string;
  /**
  * Specifies the TCP port to connect to. (default: 25)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port?: number;
  /**
  * The IP (or string) to use as the destination address portion of the PROXY protocol. More on the proxy protocol here: http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#proxy_dest_address Check#proxy_dest_address}
  */
  readonly proxyDestAddress?: string;
  /**
  * The port to use as the dest port portion of the PROXY protocol. Defaults to the port setting or 25
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#proxy_dest_port Check#proxy_dest_port}
  */
  readonly proxyDestPort?: number;
  /**
  * The protocol family to send in the PROXY header. (default: TCP4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#proxy_family Check#proxy_family}
  */
  readonly proxyFamily?: string;
  /**
  * Test MTA responses to a PROXY protocol header by setting this to true. (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#proxy_protocol Check#proxy_protocol}
  */
  readonly proxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * The IP (or string) to use as the source address portion of the PROXY protocol. More on the proxy protocol here: http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#proxy_source_address Check#proxy_source_address}
  */
  readonly proxySourceAddress?: string;
  /**
  * The port to use as the source port portion of the PROXY protocol. Defaults to the actual source port of the connection to the target_ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#proxy_source_port Check#proxy_source_port}
  */
  readonly proxySourcePort?: number;
  /**
  * The SASL Authorization Identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#sasl_auth_id Check#sasl_auth_id}
  */
  readonly saslAuthId?: string;
  /**
  * Specifies the type of SASL Authentication to use. (default: off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#sasl_authentication Check#sasl_authentication}
  */
  readonly saslAuthentication?: string;
  /**
  * The SASL Authentication password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#sasl_password Check#sasl_password}
  */
  readonly saslPassword?: string;
  /**
  * The SASL Authentication username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#sasl_user Check#sasl_user}
  */
  readonly saslUser?: string;
  /**
  * Specified if the client should attempt a STARTTLS upgrade. (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#starttls Check#starttls}
  */
  readonly starttls?: boolean | cdktf.IResolvable;
  /**
  * Specifies the envelope recipient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#to Check#to}
  */
  readonly to: string;
}

export function checkSmtpToTerraform(struct?: CheckSmtpOutputReference | CheckSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ehlo: cdktf.stringToTerraform(struct!.ehlo),
    from: cdktf.stringToTerraform(struct!.from),
    payload: cdktf.stringToTerraform(struct!.payload),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_dest_address: cdktf.stringToTerraform(struct!.proxyDestAddress),
    proxy_dest_port: cdktf.numberToTerraform(struct!.proxyDestPort),
    proxy_family: cdktf.stringToTerraform(struct!.proxyFamily),
    proxy_protocol: cdktf.booleanToTerraform(struct!.proxyProtocol),
    proxy_source_address: cdktf.stringToTerraform(struct!.proxySourceAddress),
    proxy_source_port: cdktf.numberToTerraform(struct!.proxySourcePort),
    sasl_auth_id: cdktf.stringToTerraform(struct!.saslAuthId),
    sasl_authentication: cdktf.stringToTerraform(struct!.saslAuthentication),
    sasl_password: cdktf.stringToTerraform(struct!.saslPassword),
    sasl_user: cdktf.stringToTerraform(struct!.saslUser),
    starttls: cdktf.booleanToTerraform(struct!.starttls),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function checkSmtpToHclTerraform(struct?: CheckSmtpOutputReference | CheckSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ehlo: {
      value: cdktf.stringToHclTerraform(struct!.ehlo),
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
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
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
    proxy_dest_address: {
      value: cdktf.stringToHclTerraform(struct!.proxyDestAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_dest_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyDestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_family: {
      value: cdktf.stringToHclTerraform(struct!.proxyFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.proxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_source_address: {
      value: cdktf.stringToHclTerraform(struct!.proxySourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_source_port: {
      value: cdktf.numberToHclTerraform(struct!.proxySourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sasl_auth_id: {
      value: cdktf.stringToHclTerraform(struct!.saslAuthId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_authentication: {
      value: cdktf.stringToHclTerraform(struct!.saslAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_password: {
      value: cdktf.stringToHclTerraform(struct!.saslPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sasl_user: {
      value: cdktf.stringToHclTerraform(struct!.saslUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    starttls: {
      value: cdktf.booleanToHclTerraform(struct!.starttls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckSmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ehlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ehlo = this._ehlo;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyDestAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyDestAddress = this._proxyDestAddress;
    }
    if (this._proxyDestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyDestPort = this._proxyDestPort;
    }
    if (this._proxyFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyFamily = this._proxyFamily;
    }
    if (this._proxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol;
    }
    if (this._proxySourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxySourceAddress = this._proxySourceAddress;
    }
    if (this._proxySourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxySourcePort = this._proxySourcePort;
    }
    if (this._saslAuthId !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslAuthId = this._saslAuthId;
    }
    if (this._saslAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslAuthentication = this._saslAuthentication;
    }
    if (this._saslPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslPassword = this._saslPassword;
    }
    if (this._saslUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslUser = this._saslUser;
    }
    if (this._starttls !== undefined) {
      hasAnyValues = true;
      internalValueResult.starttls = this._starttls;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckSmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ehlo = undefined;
      this._from = undefined;
      this._payload = undefined;
      this._port = undefined;
      this._proxyDestAddress = undefined;
      this._proxyDestPort = undefined;
      this._proxyFamily = undefined;
      this._proxyProtocol = undefined;
      this._proxySourceAddress = undefined;
      this._proxySourcePort = undefined;
      this._saslAuthId = undefined;
      this._saslAuthentication = undefined;
      this._saslPassword = undefined;
      this._saslUser = undefined;
      this._starttls = undefined;
      this._to = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ehlo = value.ehlo;
      this._from = value.from;
      this._payload = value.payload;
      this._port = value.port;
      this._proxyDestAddress = value.proxyDestAddress;
      this._proxyDestPort = value.proxyDestPort;
      this._proxyFamily = value.proxyFamily;
      this._proxyProtocol = value.proxyProtocol;
      this._proxySourceAddress = value.proxySourceAddress;
      this._proxySourcePort = value.proxySourcePort;
      this._saslAuthId = value.saslAuthId;
      this._saslAuthentication = value.saslAuthentication;
      this._saslPassword = value.saslPassword;
      this._saslUser = value.saslUser;
      this._starttls = value.starttls;
      this._to = value.to;
    }
  }

  // ehlo - computed: false, optional: true, required: false
  private _ehlo?: string; 
  public get ehlo() {
    return this.getStringAttribute('ehlo');
  }
  public set ehlo(value: string) {
    this._ehlo = value;
  }
  public resetEhlo() {
    this._ehlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ehloInput() {
    return this._ehlo;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_dest_address - computed: false, optional: true, required: false
  private _proxyDestAddress?: string; 
  public get proxyDestAddress() {
    return this.getStringAttribute('proxy_dest_address');
  }
  public set proxyDestAddress(value: string) {
    this._proxyDestAddress = value;
  }
  public resetProxyDestAddress() {
    this._proxyDestAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyDestAddressInput() {
    return this._proxyDestAddress;
  }

  // proxy_dest_port - computed: false, optional: true, required: false
  private _proxyDestPort?: number; 
  public get proxyDestPort() {
    return this.getNumberAttribute('proxy_dest_port');
  }
  public set proxyDestPort(value: number) {
    this._proxyDestPort = value;
  }
  public resetProxyDestPort() {
    this._proxyDestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyDestPortInput() {
    return this._proxyDestPort;
  }

  // proxy_family - computed: false, optional: true, required: false
  private _proxyFamily?: string; 
  public get proxyFamily() {
    return this.getStringAttribute('proxy_family');
  }
  public set proxyFamily(value: string) {
    this._proxyFamily = value;
  }
  public resetProxyFamily() {
    this._proxyFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyFamilyInput() {
    return this._proxyFamily;
  }

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol?: boolean | cdktf.IResolvable; 
  public get proxyProtocol() {
    return this.getBooleanAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: boolean | cdktf.IResolvable) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
  }

  // proxy_source_address - computed: false, optional: true, required: false
  private _proxySourceAddress?: string; 
  public get proxySourceAddress() {
    return this.getStringAttribute('proxy_source_address');
  }
  public set proxySourceAddress(value: string) {
    this._proxySourceAddress = value;
  }
  public resetProxySourceAddress() {
    this._proxySourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySourceAddressInput() {
    return this._proxySourceAddress;
  }

  // proxy_source_port - computed: false, optional: true, required: false
  private _proxySourcePort?: number; 
  public get proxySourcePort() {
    return this.getNumberAttribute('proxy_source_port');
  }
  public set proxySourcePort(value: number) {
    this._proxySourcePort = value;
  }
  public resetProxySourcePort() {
    this._proxySourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySourcePortInput() {
    return this._proxySourcePort;
  }

  // sasl_auth_id - computed: false, optional: true, required: false
  private _saslAuthId?: string; 
  public get saslAuthId() {
    return this.getStringAttribute('sasl_auth_id');
  }
  public set saslAuthId(value: string) {
    this._saslAuthId = value;
  }
  public resetSaslAuthId() {
    this._saslAuthId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAuthIdInput() {
    return this._saslAuthId;
  }

  // sasl_authentication - computed: false, optional: true, required: false
  private _saslAuthentication?: string; 
  public get saslAuthentication() {
    return this.getStringAttribute('sasl_authentication');
  }
  public set saslAuthentication(value: string) {
    this._saslAuthentication = value;
  }
  public resetSaslAuthentication() {
    this._saslAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslAuthenticationInput() {
    return this._saslAuthentication;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword?: string; 
  public get saslPassword() {
    return this.getStringAttribute('sasl_password');
  }
  public set saslPassword(value: string) {
    this._saslPassword = value;
  }
  public resetSaslPassword() {
    this._saslPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword;
  }

  // sasl_user - computed: false, optional: true, required: false
  private _saslUser?: string; 
  public get saslUser() {
    return this.getStringAttribute('sasl_user');
  }
  public set saslUser(value: string) {
    this._saslUser = value;
  }
  public resetSaslUser() {
    this._saslUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUserInput() {
    return this._saslUser;
  }

  // starttls - computed: false, optional: true, required: false
  private _starttls?: boolean | cdktf.IResolvable; 
  public get starttls() {
    return this.getBooleanAttribute('starttls');
  }
  public set starttls(value: boolean | cdktf.IResolvable) {
    this._starttls = value;
  }
  public resetStarttls() {
    this._starttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttlsInput() {
    return this._starttls;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}
export interface CheckSnmpOid {
  /**
  * Name of the metric produced by this MIB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#name Check#name}
  */
  readonly name: string;
  /**
  * The decimal notation or MIB name of this OID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#path Check#path}
  */
  readonly path: string;
  /**
  * The metric type of this OID. The value can be either one of the single letter codes in the metric_type_t enum or the following string variants: guess, int32, uint32, int64, uint64, double, string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#type Check#type}
  */
  readonly type?: string;
}

export function checkSnmpOidToTerraform(struct?: CheckSnmpOid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function checkSnmpOidToHclTerraform(struct?: CheckSnmpOid | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class CheckSnmpOidOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckSnmpOid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckSnmpOid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._type = value.type;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CheckSnmpOidList extends cdktf.ComplexList {
  public internalValue? : CheckSnmpOid[] | cdktf.IResolvable

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
  public get(index: number): CheckSnmpOidOutputReference {
    return new CheckSnmpOidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CheckSnmp {
  /**
  * The authentication passphrase to use. Only applicaable to SNMP Version 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#auth_passphrase Check#auth_passphrase}
  */
  readonly authPassphrase?: string;
  /**
  * The authentication protocol to use. Only applicaable to SNMP Version 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#auth_protocol Check#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * The SNMP community string providing read access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#community Check#community}
  */
  readonly community: string;
  /**
  * The context engine hex value to use. Only applicaable to SNMP Version 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#context_engine Check#context_engine}
  */
  readonly contextEngine?: string;
  /**
  * The context name to use. Only applicaable to SNMP Version 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#context_name Check#context_name}
  */
  readonly contextName?: string;
  /**
  * The UDP port to which SNMP queries will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port?: number;
  /**
  * The privacy passphrase to use. Only applicaable to SNMP Version 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#privacy_passphrase Check#privacy_passphrase}
  */
  readonly privacyPassphrase?: string;
  /**
  * The privacy protocol to use. Only applicaable to SNMP Version 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#privacy_protocol Check#privacy_protocol}
  */
  readonly privacyProtocol?: string;
  /**
  * The security engine hex value to use. Only applicaable to SNMP Version 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#security_engine Check#security_engine}
  */
  readonly securityEngine?: string;
  /**
  * The security level to use for the SNMP session. Choices are "authPriv" (authenticated and encrypted), "authNoPriv" (authenticated and unencrypted) and "noAuthNoPriv" (unauthenticated and unencrypted). Only applicaable to SNMP Version 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#security_level Check#security_level}
  */
  readonly securityLevel?: string;
  /**
  * The security name (or user name) to use. Only applicaable to SNMP Version 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#security_name Check#security_name}
  */
  readonly securityName?: string;
  /**
  * Whether or not to query each OID separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#separate_queries Check#separate_queries}
  */
  readonly separateQueries?: boolean | cdktf.IResolvable;
  /**
  * The SNMP version used for queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#version Check#version}
  */
  readonly version: string;
  /**
  * oid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#oid Check#oid}
  */
  readonly oid: CheckSnmpOid[] | cdktf.IResolvable;
}

export function checkSnmpToTerraform(struct?: CheckSnmpOutputReference | CheckSnmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_passphrase: cdktf.stringToTerraform(struct!.authPassphrase),
    auth_protocol: cdktf.stringToTerraform(struct!.authProtocol),
    community: cdktf.stringToTerraform(struct!.community),
    context_engine: cdktf.stringToTerraform(struct!.contextEngine),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    port: cdktf.numberToTerraform(struct!.port),
    privacy_passphrase: cdktf.stringToTerraform(struct!.privacyPassphrase),
    privacy_protocol: cdktf.stringToTerraform(struct!.privacyProtocol),
    security_engine: cdktf.stringToTerraform(struct!.securityEngine),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    security_name: cdktf.stringToTerraform(struct!.securityName),
    separate_queries: cdktf.booleanToTerraform(struct!.separateQueries),
    version: cdktf.stringToTerraform(struct!.version),
    oid: cdktf.listMapper(checkSnmpOidToTerraform, true)(struct!.oid),
  }
}


export function checkSnmpToHclTerraform(struct?: CheckSnmpOutputReference | CheckSnmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.authPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_protocol: {
      value: cdktf.stringToHclTerraform(struct!.authProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_engine: {
      value: cdktf.stringToHclTerraform(struct!.contextEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
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
    privacy_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.privacyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_protocol: {
      value: cdktf.stringToHclTerraform(struct!.privacyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_engine: {
      value: cdktf.stringToHclTerraform(struct!.securityEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_level: {
      value: cdktf.stringToHclTerraform(struct!.securityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_name: {
      value: cdktf.stringToHclTerraform(struct!.securityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separate_queries: {
      value: cdktf.booleanToHclTerraform(struct!.separateQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oid: {
      value: cdktf.listMapperHcl(checkSnmpOidToHclTerraform, true)(struct!.oid),
      isBlock: true,
      type: "set",
      storageClassType: "CheckSnmpOidList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckSnmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckSnmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassphrase = this._authPassphrase;
    }
    if (this._authProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProtocol = this._authProtocol;
    }
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._contextEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextEngine = this._contextEngine;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privacyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPassphrase = this._privacyPassphrase;
    }
    if (this._privacyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyProtocol = this._privacyProtocol;
    }
    if (this._securityEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityEngine = this._securityEngine;
    }
    if (this._securityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityLevel = this._securityLevel;
    }
    if (this._securityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityName = this._securityName;
    }
    if (this._separateQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.separateQueries = this._separateQueries;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._oid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oid = this._oid?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckSnmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authPassphrase = undefined;
      this._authProtocol = undefined;
      this._community = undefined;
      this._contextEngine = undefined;
      this._contextName = undefined;
      this._port = undefined;
      this._privacyPassphrase = undefined;
      this._privacyProtocol = undefined;
      this._securityEngine = undefined;
      this._securityLevel = undefined;
      this._securityName = undefined;
      this._separateQueries = undefined;
      this._version = undefined;
      this._oid.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authPassphrase = value.authPassphrase;
      this._authProtocol = value.authProtocol;
      this._community = value.community;
      this._contextEngine = value.contextEngine;
      this._contextName = value.contextName;
      this._port = value.port;
      this._privacyPassphrase = value.privacyPassphrase;
      this._privacyProtocol = value.privacyProtocol;
      this._securityEngine = value.securityEngine;
      this._securityLevel = value.securityLevel;
      this._securityName = value.securityName;
      this._separateQueries = value.separateQueries;
      this._version = value.version;
      this._oid.internalValue = value.oid;
    }
  }

  // auth_passphrase - computed: false, optional: true, required: false
  private _authPassphrase?: string; 
  public get authPassphrase() {
    return this.getStringAttribute('auth_passphrase');
  }
  public set authPassphrase(value: string) {
    this._authPassphrase = value;
  }
  public resetAuthPassphrase() {
    this._authPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPassphraseInput() {
    return this._authPassphrase;
  }

  // auth_protocol - computed: false, optional: true, required: false
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // community - computed: false, optional: false, required: true
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // context_engine - computed: false, optional: true, required: false
  private _contextEngine?: string; 
  public get contextEngine() {
    return this.getStringAttribute('context_engine');
  }
  public set contextEngine(value: string) {
    this._contextEngine = value;
  }
  public resetContextEngine() {
    this._contextEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextEngineInput() {
    return this._contextEngine;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // privacy_passphrase - computed: false, optional: true, required: false
  private _privacyPassphrase?: string; 
  public get privacyPassphrase() {
    return this.getStringAttribute('privacy_passphrase');
  }
  public set privacyPassphrase(value: string) {
    this._privacyPassphrase = value;
  }
  public resetPrivacyPassphrase() {
    this._privacyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPassphraseInput() {
    return this._privacyPassphrase;
  }

  // privacy_protocol - computed: false, optional: true, required: false
  private _privacyProtocol?: string; 
  public get privacyProtocol() {
    return this.getStringAttribute('privacy_protocol');
  }
  public set privacyProtocol(value: string) {
    this._privacyProtocol = value;
  }
  public resetPrivacyProtocol() {
    this._privacyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyProtocolInput() {
    return this._privacyProtocol;
  }

  // security_engine - computed: false, optional: true, required: false
  private _securityEngine?: string; 
  public get securityEngine() {
    return this.getStringAttribute('security_engine');
  }
  public set securityEngine(value: string) {
    this._securityEngine = value;
  }
  public resetSecurityEngine() {
    this._securityEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEngineInput() {
    return this._securityEngine;
  }

  // security_level - computed: false, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // security_name - computed: false, optional: true, required: false
  private _securityName?: string; 
  public get securityName() {
    return this.getStringAttribute('security_name');
  }
  public set securityName(value: string) {
    this._securityName = value;
  }
  public resetSecurityName() {
    this._securityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityNameInput() {
    return this._securityName;
  }

  // separate_queries - computed: false, optional: true, required: false
  private _separateQueries?: boolean | cdktf.IResolvable; 
  public get separateQueries() {
    return this.getBooleanAttribute('separate_queries');
  }
  public set separateQueries(value: boolean | cdktf.IResolvable) {
    this._separateQueries = value;
  }
  public resetSeparateQueries() {
    this._separateQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separateQueriesInput() {
    return this._separateQueries;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // oid - computed: false, optional: false, required: true
  private _oid = new CheckSnmpOidList(this, "oid", true);
  public get oid() {
    return this._oid;
  }
  public putOid(value: CheckSnmpOid[] | cdktf.IResolvable) {
    this._oid.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid.internalValue;
  }
}
export interface CheckSsh2 {
  /**
  * The compress algorithm used from client to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_comp_cs Check#method_comp_cs}
  */
  readonly methodCompCs?: string;
  /**
  * The compress algorithm used from server to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_comp_sc Check#method_comp_sc}
  */
  readonly methodCompSc?: string;
  /**
  * The encryption algorithm used from client to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_crypt_cs Check#method_crypt_cs}
  */
  readonly methodCryptCs?: string;
  /**
  * The encryption algorithm used from server to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_crypt_sc Check#method_crypt_sc}
  */
  readonly methodCryptSc?: string;
  /**
  * The host key algorithm supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_hostkey Check#method_hostkey}
  */
  readonly methodHostkey?: string;
  /**
  * The key exchange method to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_kex Check#method_kex}
  */
  readonly methodKex?: string;
  /**
  * The language used from server to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_land_sc Check#method_land_sc}
  */
  readonly methodLandSc?: string;
  /**
  * The language used from client to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_lang_cs Check#method_lang_cs}
  */
  readonly methodLangCs?: string;
  /**
  * The message authentication code algorithm used from client to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_mac_cs Check#method_mac_cs}
  */
  readonly methodMacCs?: string;
  /**
  * The message authentication code algorithm used from server to client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#method_mac_sc Check#method_mac_sc}
  */
  readonly methodMacSc?: string;
  /**
  * The TCP port on which the remote server's ssh service is running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port?: number;
}

export function checkSsh2ToTerraform(struct?: CheckSsh2OutputReference | CheckSsh2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method_comp_cs: cdktf.stringToTerraform(struct!.methodCompCs),
    method_comp_sc: cdktf.stringToTerraform(struct!.methodCompSc),
    method_crypt_cs: cdktf.stringToTerraform(struct!.methodCryptCs),
    method_crypt_sc: cdktf.stringToTerraform(struct!.methodCryptSc),
    method_hostkey: cdktf.stringToTerraform(struct!.methodHostkey),
    method_kex: cdktf.stringToTerraform(struct!.methodKex),
    method_land_sc: cdktf.stringToTerraform(struct!.methodLandSc),
    method_lang_cs: cdktf.stringToTerraform(struct!.methodLangCs),
    method_mac_cs: cdktf.stringToTerraform(struct!.methodMacCs),
    method_mac_sc: cdktf.stringToTerraform(struct!.methodMacSc),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function checkSsh2ToHclTerraform(struct?: CheckSsh2OutputReference | CheckSsh2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method_comp_cs: {
      value: cdktf.stringToHclTerraform(struct!.methodCompCs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_comp_sc: {
      value: cdktf.stringToHclTerraform(struct!.methodCompSc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_crypt_cs: {
      value: cdktf.stringToHclTerraform(struct!.methodCryptCs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_crypt_sc: {
      value: cdktf.stringToHclTerraform(struct!.methodCryptSc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_hostkey: {
      value: cdktf.stringToHclTerraform(struct!.methodHostkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_kex: {
      value: cdktf.stringToHclTerraform(struct!.methodKex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_land_sc: {
      value: cdktf.stringToHclTerraform(struct!.methodLandSc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_lang_cs: {
      value: cdktf.stringToHclTerraform(struct!.methodLangCs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_mac_cs: {
      value: cdktf.stringToHclTerraform(struct!.methodMacCs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_mac_sc: {
      value: cdktf.stringToHclTerraform(struct!.methodMacSc),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckSsh2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckSsh2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methodCompCs !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodCompCs = this._methodCompCs;
    }
    if (this._methodCompSc !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodCompSc = this._methodCompSc;
    }
    if (this._methodCryptCs !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodCryptCs = this._methodCryptCs;
    }
    if (this._methodCryptSc !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodCryptSc = this._methodCryptSc;
    }
    if (this._methodHostkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodHostkey = this._methodHostkey;
    }
    if (this._methodKex !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodKex = this._methodKex;
    }
    if (this._methodLandSc !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodLandSc = this._methodLandSc;
    }
    if (this._methodLangCs !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodLangCs = this._methodLangCs;
    }
    if (this._methodMacCs !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodMacCs = this._methodMacCs;
    }
    if (this._methodMacSc !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodMacSc = this._methodMacSc;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckSsh2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methodCompCs = undefined;
      this._methodCompSc = undefined;
      this._methodCryptCs = undefined;
      this._methodCryptSc = undefined;
      this._methodHostkey = undefined;
      this._methodKex = undefined;
      this._methodLandSc = undefined;
      this._methodLangCs = undefined;
      this._methodMacCs = undefined;
      this._methodMacSc = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methodCompCs = value.methodCompCs;
      this._methodCompSc = value.methodCompSc;
      this._methodCryptCs = value.methodCryptCs;
      this._methodCryptSc = value.methodCryptSc;
      this._methodHostkey = value.methodHostkey;
      this._methodKex = value.methodKex;
      this._methodLandSc = value.methodLandSc;
      this._methodLangCs = value.methodLangCs;
      this._methodMacCs = value.methodMacCs;
      this._methodMacSc = value.methodMacSc;
      this._port = value.port;
    }
  }

  // method_comp_cs - computed: false, optional: true, required: false
  private _methodCompCs?: string; 
  public get methodCompCs() {
    return this.getStringAttribute('method_comp_cs');
  }
  public set methodCompCs(value: string) {
    this._methodCompCs = value;
  }
  public resetMethodCompCs() {
    this._methodCompCs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodCompCsInput() {
    return this._methodCompCs;
  }

  // method_comp_sc - computed: false, optional: true, required: false
  private _methodCompSc?: string; 
  public get methodCompSc() {
    return this.getStringAttribute('method_comp_sc');
  }
  public set methodCompSc(value: string) {
    this._methodCompSc = value;
  }
  public resetMethodCompSc() {
    this._methodCompSc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodCompScInput() {
    return this._methodCompSc;
  }

  // method_crypt_cs - computed: false, optional: true, required: false
  private _methodCryptCs?: string; 
  public get methodCryptCs() {
    return this.getStringAttribute('method_crypt_cs');
  }
  public set methodCryptCs(value: string) {
    this._methodCryptCs = value;
  }
  public resetMethodCryptCs() {
    this._methodCryptCs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodCryptCsInput() {
    return this._methodCryptCs;
  }

  // method_crypt_sc - computed: false, optional: true, required: false
  private _methodCryptSc?: string; 
  public get methodCryptSc() {
    return this.getStringAttribute('method_crypt_sc');
  }
  public set methodCryptSc(value: string) {
    this._methodCryptSc = value;
  }
  public resetMethodCryptSc() {
    this._methodCryptSc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodCryptScInput() {
    return this._methodCryptSc;
  }

  // method_hostkey - computed: false, optional: true, required: false
  private _methodHostkey?: string; 
  public get methodHostkey() {
    return this.getStringAttribute('method_hostkey');
  }
  public set methodHostkey(value: string) {
    this._methodHostkey = value;
  }
  public resetMethodHostkey() {
    this._methodHostkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodHostkeyInput() {
    return this._methodHostkey;
  }

  // method_kex - computed: false, optional: true, required: false
  private _methodKex?: string; 
  public get methodKex() {
    return this.getStringAttribute('method_kex');
  }
  public set methodKex(value: string) {
    this._methodKex = value;
  }
  public resetMethodKex() {
    this._methodKex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodKexInput() {
    return this._methodKex;
  }

  // method_land_sc - computed: false, optional: true, required: false
  private _methodLandSc?: string; 
  public get methodLandSc() {
    return this.getStringAttribute('method_land_sc');
  }
  public set methodLandSc(value: string) {
    this._methodLandSc = value;
  }
  public resetMethodLandSc() {
    this._methodLandSc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodLandScInput() {
    return this._methodLandSc;
  }

  // method_lang_cs - computed: false, optional: true, required: false
  private _methodLangCs?: string; 
  public get methodLangCs() {
    return this.getStringAttribute('method_lang_cs');
  }
  public set methodLangCs(value: string) {
    this._methodLangCs = value;
  }
  public resetMethodLangCs() {
    this._methodLangCs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodLangCsInput() {
    return this._methodLangCs;
  }

  // method_mac_cs - computed: false, optional: true, required: false
  private _methodMacCs?: string; 
  public get methodMacCs() {
    return this.getStringAttribute('method_mac_cs');
  }
  public set methodMacCs(value: string) {
    this._methodMacCs = value;
  }
  public resetMethodMacCs() {
    this._methodMacCs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodMacCsInput() {
    return this._methodMacCs;
  }

  // method_mac_sc - computed: false, optional: true, required: false
  private _methodMacSc?: string; 
  public get methodMacSc() {
    return this.getStringAttribute('method_mac_sc');
  }
  public set methodMacSc(value: string) {
    this._methodMacSc = value;
  }
  public resetMethodMacSc() {
    this._methodMacSc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodMacScInput() {
    return this._methodMacSc;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface CheckStatsd {
  /**
  * The source IP of the statsd metrics stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#source_ip Check#source_ip}
  */
  readonly sourceIp: string;
}

export function checkStatsdToTerraform(struct?: CheckStatsdOutputReference | CheckStatsd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
  }
}


export function checkStatsdToHclTerraform(struct?: CheckStatsdOutputReference | CheckStatsd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckStatsdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckStatsd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckStatsd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceIp = value.sourceIp;
    }
  }

  // source_ip - computed: false, optional: false, required: true
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface CheckTcp {
  /**
  * This regular expression is matched against the response banner. If a match is not found, the check will be marked as bad.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#banner_regexp Check#banner_regexp}
  */
  readonly bannerRegexp?: string;
  /**
  * A path to a file containing all the certificate authorities that should be loaded to validate the remote certificate (for TLS checks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ca_chain Check#ca_chain}
  */
  readonly caChain?: string;
  /**
  * A path to a file containing the client certificate that will be presented to the remote server (for TLS checks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#certificate_file Check#certificate_file}
  */
  readonly certificateFile?: string;
  /**
  * A list of ciphers to be used when establishing a TLS connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#ciphers Check#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Specifies the host name or IP address to connect to for this TCP check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#host Check#host}
  */
  readonly host: string;
  /**
  * A path to a file containing key to be used in conjunction with the cilent certificate (for TLS checks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#key_file Check#key_file}
  */
  readonly keyFile?: string;
  /**
  * Specifies the port on which the management interface can be reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#port Check#port}
  */
  readonly port: number;
  /**
  * Upgrade TCP connection to use TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#tls Check#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
}

export function checkTcpToTerraform(struct?: CheckTcpOutputReference | CheckTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    banner_regexp: cdktf.stringToTerraform(struct!.bannerRegexp),
    ca_chain: cdktf.stringToTerraform(struct!.caChain),
    certificate_file: cdktf.stringToTerraform(struct!.certificateFile),
    ciphers: cdktf.stringToTerraform(struct!.ciphers),
    host: cdktf.stringToTerraform(struct!.host),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    port: cdktf.numberToTerraform(struct!.port),
    tls: cdktf.booleanToTerraform(struct!.tls),
  }
}


export function checkTcpToHclTerraform(struct?: CheckTcpOutputReference | CheckTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    banner_regexp: {
      value: cdktf.stringToHclTerraform(struct!.bannerRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_chain: {
      value: cdktf.stringToHclTerraform(struct!.caChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_file: {
      value: cdktf.stringToHclTerraform(struct!.certificateFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ciphers: {
      value: cdktf.stringToHclTerraform(struct!.ciphers),
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
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
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
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CheckTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bannerRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerRegexp = this._bannerRegexp;
    }
    if (this._caChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.caChain = this._caChain;
    }
    if (this._certificateFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateFile = this._certificateFile;
    }
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bannerRegexp = undefined;
      this._caChain = undefined;
      this._certificateFile = undefined;
      this._ciphers = undefined;
      this._host = undefined;
      this._keyFile = undefined;
      this._port = undefined;
      this._tls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bannerRegexp = value.bannerRegexp;
      this._caChain = value.caChain;
      this._certificateFile = value.certificateFile;
      this._ciphers = value.ciphers;
      this._host = value.host;
      this._keyFile = value.keyFile;
      this._port = value.port;
      this._tls = value.tls;
    }
  }

  // banner_regexp - computed: false, optional: true, required: false
  private _bannerRegexp?: string; 
  public get bannerRegexp() {
    return this.getStringAttribute('banner_regexp');
  }
  public set bannerRegexp(value: string) {
    this._bannerRegexp = value;
  }
  public resetBannerRegexp() {
    this._bannerRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerRegexpInput() {
    return this._bannerRegexp;
  }

  // ca_chain - computed: false, optional: true, required: false
  private _caChain?: string; 
  public get caChain() {
    return this.getStringAttribute('ca_chain');
  }
  public set caChain(value: string) {
    this._caChain = value;
  }
  public resetCaChain() {
    this._caChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caChainInput() {
    return this._caChain;
  }

  // certificate_file - computed: false, optional: true, required: false
  private _certificateFile?: string; 
  public get certificateFile() {
    return this.getStringAttribute('certificate_file');
  }
  public set certificateFile(value: string) {
    this._certificateFile = value;
  }
  public resetCertificateFile() {
    this._certificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFileInput() {
    return this._certificateFile;
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
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

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
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

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check circonus_check}
*/
export class Check extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circonus_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Check resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Check to import
  * @param importFromId The id of the existing Check that should be imported. Refer to the {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Check to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circonus_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/check circonus_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CheckConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'circonus_check',
      terraformGeneratorMetadata: {
        providerName: 'circonus',
        providerVersion: '0.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._id = config.id;
    this._metricLimit = config.metricLimit;
    this._name = config.name;
    this._notes = config.notes;
    this._period = config.period;
    this._tags = config.tags;
    this._target = config.target;
    this._timeout = config.timeout;
    this._type = config.type;
    this._caql.internalValue = config.caql;
    this._cloudwatch.internalValue = config.cloudwatch;
    this._collector.internalValue = config.collector;
    this._consul.internalValue = config.consul;
    this._dns.internalValue = config.dns;
    this._external.internalValue = config.external;
    this._http.internalValue = config.http;
    this._httptrap.internalValue = config.httptrap;
    this._icmpPing.internalValue = config.icmpPing;
    this._jmx.internalValue = config.jmx;
    this._json.internalValue = config.json;
    this._memcached.internalValue = config.memcached;
    this._metric.internalValue = config.metric;
    this._metricFilter.internalValue = config.metricFilter;
    this._mysql.internalValue = config.mysql;
    this._ntp.internalValue = config.ntp;
    this._postgresql.internalValue = config.postgresql;
    this._promtext.internalValue = config.promtext;
    this._redis.internalValue = config.redis;
    this._smtp.internalValue = config.smtp;
    this._snmp.internalValue = config.snmp;
    this._ssh2.internalValue = config.ssh2;
    this._statsd.internalValue = config.statsd;
    this._tcp.internalValue = config.tcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // check_by_collector - computed: true, optional: false, required: false
  private _checkByCollector = new cdktf.StringMap(this, "check_by_collector");
  public get checkByCollector() {
    return this._checkByCollector;
  }

  // check_id - computed: true, optional: false, required: false
  public get checkId() {
    return this.getStringAttribute('check_id');
  }

  // checks - computed: true, optional: false, required: false
  public get checks() {
    return this.getListAttribute('checks');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
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

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // metric_limit - computed: true, optional: true, required: false
  private _metricLimit?: number; 
  public get metricLimit() {
    return this.getNumberAttribute('metric_limit');
  }
  public set metricLimit(value: number) {
    this._metricLimit = value;
  }
  public resetMetricLimit() {
    this._metricLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLimitInput() {
    return this._metricLimit;
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

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // reverse_connect_urls - computed: true, optional: false, required: false
  public get reverseConnectUrls() {
    return this.getListAttribute('reverse_connect_urls');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuids - computed: true, optional: false, required: false
  public get uuids() {
    return this.getListAttribute('uuids');
  }

  // caql - computed: false, optional: true, required: false
  private _caql = new CheckCaqlOutputReference(this, "caql");
  public get caql() {
    return this._caql;
  }
  public putCaql(value: CheckCaql) {
    this._caql.internalValue = value;
  }
  public resetCaql() {
    this._caql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caqlInput() {
    return this._caql.internalValue;
  }

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new CheckCloudwatchOutputReference(this, "cloudwatch");
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: CheckCloudwatch) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // collector - computed: false, optional: true, required: false
  private _collector = new CheckCollectorList(this, "collector", true);
  public get collector() {
    return this._collector;
  }
  public putCollector(value: CheckCollector[] | cdktf.IResolvable) {
    this._collector.internalValue = value;
  }
  public resetCollector() {
    this._collector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorInput() {
    return this._collector.internalValue;
  }

  // consul - computed: false, optional: true, required: false
  private _consul = new CheckConsulOutputReference(this, "consul");
  public get consul() {
    return this._consul;
  }
  public putConsul(value: CheckConsul) {
    this._consul.internalValue = value;
  }
  public resetConsul() {
    this._consul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulInput() {
    return this._consul.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new CheckDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: CheckDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new CheckExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: CheckExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new CheckHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: CheckHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // httptrap - computed: false, optional: true, required: false
  private _httptrap = new CheckHttptrapOutputReference(this, "httptrap");
  public get httptrap() {
    return this._httptrap;
  }
  public putHttptrap(value: CheckHttptrap) {
    this._httptrap.internalValue = value;
  }
  public resetHttptrap() {
    this._httptrap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httptrapInput() {
    return this._httptrap.internalValue;
  }

  // icmp_ping - computed: false, optional: true, required: false
  private _icmpPing = new CheckIcmpPingOutputReference(this, "icmp_ping");
  public get icmpPing() {
    return this._icmpPing;
  }
  public putIcmpPing(value: CheckIcmpPing) {
    this._icmpPing.internalValue = value;
  }
  public resetIcmpPing() {
    this._icmpPing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPingInput() {
    return this._icmpPing.internalValue;
  }

  // jmx - computed: false, optional: true, required: false
  private _jmx = new CheckJmxOutputReference(this, "jmx");
  public get jmx() {
    return this._jmx;
  }
  public putJmx(value: CheckJmx) {
    this._jmx.internalValue = value;
  }
  public resetJmx() {
    this._jmx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxInput() {
    return this._jmx.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new CheckJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: CheckJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // memcached - computed: false, optional: true, required: false
  private _memcached = new CheckMemcachedOutputReference(this, "memcached");
  public get memcached() {
    return this._memcached;
  }
  public putMemcached(value: CheckMemcached) {
    this._memcached.internalValue = value;
  }
  public resetMemcached() {
    this._memcached.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcachedInput() {
    return this._memcached.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new CheckMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: CheckMetric[] | cdktf.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // metric_filter - computed: false, optional: true, required: false
  private _metricFilter = new CheckMetricFilterList(this, "metric_filter", false);
  public get metricFilter() {
    return this._metricFilter;
  }
  public putMetricFilter(value: CheckMetricFilter[] | cdktf.IResolvable) {
    this._metricFilter.internalValue = value;
  }
  public resetMetricFilter() {
    this._metricFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFilterInput() {
    return this._metricFilter.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new CheckMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: CheckMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp = new CheckNtpOutputReference(this, "ntp");
  public get ntp() {
    return this._ntp;
  }
  public putNtp(value: CheckNtp) {
    this._ntp.internalValue = value;
  }
  public resetNtp() {
    this._ntp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp.internalValue;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new CheckPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: CheckPostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // promtext - computed: false, optional: true, required: false
  private _promtext = new CheckPromtextOutputReference(this, "promtext");
  public get promtext() {
    return this._promtext;
  }
  public putPromtext(value: CheckPromtext) {
    this._promtext.internalValue = value;
  }
  public resetPromtext() {
    this._promtext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promtextInput() {
    return this._promtext.internalValue;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new CheckRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: CheckRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // smtp - computed: false, optional: true, required: false
  private _smtp = new CheckSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: CheckSmtp) {
    this._smtp.internalValue = value;
  }
  public resetSmtp() {
    this._smtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp.internalValue;
  }

  // snmp - computed: false, optional: true, required: false
  private _snmp = new CheckSnmpOutputReference(this, "snmp");
  public get snmp() {
    return this._snmp;
  }
  public putSnmp(value: CheckSnmp) {
    this._snmp.internalValue = value;
  }
  public resetSnmp() {
    this._snmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp.internalValue;
  }

  // ssh2 - computed: false, optional: true, required: false
  private _ssh2 = new CheckSsh2OutputReference(this, "ssh2");
  public get ssh2() {
    return this._ssh2;
  }
  public putSsh2(value: CheckSsh2) {
    this._ssh2.internalValue = value;
  }
  public resetSsh2() {
    this._ssh2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssh2Input() {
    return this._ssh2.internalValue;
  }

  // statsd - computed: false, optional: true, required: false
  private _statsd = new CheckStatsdOutputReference(this, "statsd");
  public get statsd() {
    return this._statsd;
  }
  public putStatsd(value: CheckStatsd) {
    this._statsd.internalValue = value;
  }
  public resetStatsd() {
    this._statsd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdInput() {
    return this._statsd.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new CheckTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: CheckTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      id: cdktf.stringToTerraform(this._id),
      metric_limit: cdktf.numberToTerraform(this._metricLimit),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      period: cdktf.stringToTerraform(this._period),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target: cdktf.stringToTerraform(this._target),
      timeout: cdktf.stringToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      caql: checkCaqlToTerraform(this._caql.internalValue),
      cloudwatch: checkCloudwatchToTerraform(this._cloudwatch.internalValue),
      collector: cdktf.listMapper(checkCollectorToTerraform, true)(this._collector.internalValue),
      consul: checkConsulToTerraform(this._consul.internalValue),
      dns: checkDnsToTerraform(this._dns.internalValue),
      external: checkExternalToTerraform(this._external.internalValue),
      http: checkHttpToTerraform(this._http.internalValue),
      httptrap: checkHttptrapToTerraform(this._httptrap.internalValue),
      icmp_ping: checkIcmpPingToTerraform(this._icmpPing.internalValue),
      jmx: checkJmxToTerraform(this._jmx.internalValue),
      json: checkJsonToTerraform(this._json.internalValue),
      memcached: checkMemcachedToTerraform(this._memcached.internalValue),
      metric: cdktf.listMapper(checkMetricToTerraform, true)(this._metric.internalValue),
      metric_filter: cdktf.listMapper(checkMetricFilterToTerraform, true)(this._metricFilter.internalValue),
      mysql: checkMysqlToTerraform(this._mysql.internalValue),
      ntp: checkNtpToTerraform(this._ntp.internalValue),
      postgresql: checkPostgresqlToTerraform(this._postgresql.internalValue),
      promtext: checkPromtextToTerraform(this._promtext.internalValue),
      redis: checkRedisToTerraform(this._redis.internalValue),
      smtp: checkSmtpToTerraform(this._smtp.internalValue),
      snmp: checkSnmpToTerraform(this._snmp.internalValue),
      ssh2: checkSsh2ToTerraform(this._ssh2.internalValue),
      statsd: checkStatsdToTerraform(this._statsd.internalValue),
      tcp: checkTcpToTerraform(this._tcp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
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
      metric_limit: {
        value: cdktf.numberToHclTerraform(this._metricLimit),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caql: {
        value: checkCaqlToHclTerraform(this._caql.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckCaqlList",
      },
      cloudwatch: {
        value: checkCloudwatchToHclTerraform(this._cloudwatch.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckCloudwatchList",
      },
      collector: {
        value: cdktf.listMapperHcl(checkCollectorToHclTerraform, true)(this._collector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckCollectorList",
      },
      consul: {
        value: checkConsulToHclTerraform(this._consul.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckConsulList",
      },
      dns: {
        value: checkDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckDnsList",
      },
      external: {
        value: checkExternalToHclTerraform(this._external.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckExternalList",
      },
      http: {
        value: checkHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckHttpList",
      },
      httptrap: {
        value: checkHttptrapToHclTerraform(this._httptrap.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckHttptrapList",
      },
      icmp_ping: {
        value: checkIcmpPingToHclTerraform(this._icmpPing.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckIcmpPingList",
      },
      jmx: {
        value: checkJmxToHclTerraform(this._jmx.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckJmxList",
      },
      json: {
        value: checkJsonToHclTerraform(this._json.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckJsonList",
      },
      memcached: {
        value: checkMemcachedToHclTerraform(this._memcached.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckMemcachedList",
      },
      metric: {
        value: cdktf.listMapperHcl(checkMetricToHclTerraform, true)(this._metric.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckMetricList",
      },
      metric_filter: {
        value: cdktf.listMapperHcl(checkMetricFilterToHclTerraform, true)(this._metricFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckMetricFilterList",
      },
      mysql: {
        value: checkMysqlToHclTerraform(this._mysql.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckMysqlList",
      },
      ntp: {
        value: checkNtpToHclTerraform(this._ntp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckNtpList",
      },
      postgresql: {
        value: checkPostgresqlToHclTerraform(this._postgresql.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckPostgresqlList",
      },
      promtext: {
        value: checkPromtextToHclTerraform(this._promtext.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckPromtextList",
      },
      redis: {
        value: checkRedisToHclTerraform(this._redis.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckRedisList",
      },
      smtp: {
        value: checkSmtpToHclTerraform(this._smtp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckSmtpList",
      },
      snmp: {
        value: checkSnmpToHclTerraform(this._snmp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckSnmpList",
      },
      ssh2: {
        value: checkSsh2ToHclTerraform(this._ssh2.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckSsh2List",
      },
      statsd: {
        value: checkStatsdToHclTerraform(this._statsd.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckStatsdList",
      },
      tcp: {
        value: checkTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CheckTcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
