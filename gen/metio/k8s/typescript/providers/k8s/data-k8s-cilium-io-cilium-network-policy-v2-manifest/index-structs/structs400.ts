import * as cdktf from 'cdktf';
import { DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatches,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesList,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDns,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsList,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListener,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerOutputReference,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTls,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsOutputReference,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPorts,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsList,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthentication,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthenticationToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthenticationToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthenticationOutputReference,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmps,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsList,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSet,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetList,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpoints,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsList,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNs,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsList,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroups,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsList,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodes,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesToTerraform,
dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesToHclTerraform,
DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesList } from './structs0'
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttp {
  /**
  * HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#header_matches DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#header_matches}
  */
  readonly headerMatches?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable;
  /**
  * Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#headers DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Host is an extended POSIX regex matched against the host header of a request. Examples: - foo.bar.com will match the host fooXbar.com or foo-bar.com - foo.bar.com will only match the host foo.bar.com If omitted or empty, the value of the host header is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#host DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Method is an extended POSIX regex matched against the method of a request, e.g. 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', ... If omitted or empty, all methods are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#method DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#method}
  */
  readonly method?: string;
  /**
  * Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional 'path' part of a URL as defined by RFC 3986. If omitted or empty, all paths are all allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#path DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_matches: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesToTerraform, false)(struct!.headerMatches),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_matches: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesToHclTerraform, false)(struct!.headerMatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerMatches = this._headerMatches?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerMatches.internalValue = undefined;
      this._headers = undefined;
      this._host = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerMatches.internalValue = value.headerMatches;
      this._headers = value.headers;
      this._host = value.host;
      this._method = value.method;
      this._path = value.path;
    }
  }

  // header_matches - computed: false, optional: true, required: false
  private _headerMatches = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatchesList(this, "header_matches", false);
  public get headerMatches() {
    return this._headerMatches;
  }
  public putHeaderMatches(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable) {
    this._headerMatches.internalValue = value;
  }
  public resetHeaderMatches() {
    this._headerMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerMatchesInput() {
    return this._headerMatches.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafka {
  /**
  * APIKey is a case-insensitive string matched against the key of a request, e.g. 'produce', 'fetch', 'createtopic', 'deletetopic', et al Reference: https://kafka.apache.org/protocol#protocol_api_keys If omitted or empty, and if Role is not specified, then all keys are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#api_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#api_key}
  */
  readonly apiKey?: string;
  /**
  * APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. If omitted or empty, all versions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#api_version DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * ClientID is the client identifier as provided in the request. From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. If omitted or empty, all client identifiers are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#client_id DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as 'produce' or 'consume'. A Role automatically expands into all APIKeys required to perform the specified higher-level operation. The following values are supported: - 'produce': Allow producing to the topics specified in the rule - 'consume': Allow consuming from the topics specified in the rule This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule. If omitted or empty, and if APIKey is not specified, then all keys are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#role DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#role}
  */
  readonly role?: string;
  /**
  * Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. If omitted or empty, all topics are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#topic DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#topic}
  */
  readonly topic?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    role: cdktf.stringToTerraform(struct!.role),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafka | cdktf.IResolvable): any {
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
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiVersion = undefined;
      this._clientId = undefined;
      this._role = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiVersion = value.apiVersion;
      this._clientId = value.clientId;
      this._role = value.role;
      this._topic = value.topic;
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

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafka[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRules {
  /**
  * DNS-specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#dns DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#dns}
  */
  readonly dns?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDns[] | cdktf.IResolvable;
  /**
  * HTTP specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#http DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#http}
  */
  readonly http?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttp[] | cdktf.IResolvable;
  /**
  * Kafka-specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#kafka DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#kafka}
  */
  readonly kafka?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafka[] | cdktf.IResolvable;
  /**
  * Key-value pair rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#l7 DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#l7}
  */
  readonly l7?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Name of the L7 protocol for which the Key-value pair rules apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#l7proto DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#l7proto}
  */
  readonly l7Proto?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsToTerraform, false)(struct!.dns),
    http: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpToTerraform, false)(struct!.http),
    kafka: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaToTerraform, false)(struct!.kafka),
    l7: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.l7),
    l7proto: cdktf.stringToTerraform(struct!.l7Proto),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsToHclTerraform, false)(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsList",
    },
    http: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpToHclTerraform, false)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpList",
    },
    kafka: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaToHclTerraform, false)(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaList",
    },
    l7: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.l7),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    l7proto: {
      value: cdktf.stringToHclTerraform(struct!.l7Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._l7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7 = this._l7;
    }
    if (this._l7Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7Proto = this._l7Proto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._http.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._l7 = undefined;
      this._l7Proto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._http.internalValue = value.http;
      this._kafka.internalValue = value.kafka;
      this._l7 = value.l7;
      this._l7Proto = value.l7Proto;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }
  public putDns(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesDns[] | cdktf.IResolvable) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesKafka[] | cdktf.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // l7 - computed: false, optional: true, required: false
  private _l7?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get l7() {
    return this.interpolationForAttribute('l7');
  }
  public set l7(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._l7 = value;
  }
  public resetL7() {
    this._l7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7Input() {
    return this._l7;
  }

  // l7proto - computed: false, optional: true, required: false
  private _l7Proto?: string; 
  public get l7Proto() {
    return this.getStringAttribute('l7proto');
  }
  public set l7Proto(value: string) {
    this._l7Proto = value;
  }
  public resetL7Proto() {
    this._l7Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ProtoInput() {
    return this._l7Proto;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecret | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTls {
  /**
  * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#certificate DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#private_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt' - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecret;
  /**
  * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#trusted_ca DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecretToTerraform(struct!.secret),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecret",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._secret.internalValue = undefined;
      this._trustedCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._secret.internalValue = value.secret;
      this._trustedCa = value.trustedCa;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPorts {
  /**
  * listener specifies the name of a custom Envoy listener to which this traffic should be redirected to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#listener DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#listener}
  */
  readonly listener?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListener;
  /**
  * OriginatingTLS is the TLS context for the connections originated by the L7 proxy. For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#originating_tls DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#originating_tls}
  */
  readonly originatingTls?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTls;
  /**
  * Ports is a list of L4 port/protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ports}
  */
  readonly ports?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPorts[] | cdktf.IResolvable;
  /**
  * Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#rules DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#rules}
  */
  readonly rules?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRules;
  /**
  * ServerNames is a list of allowed TLS SNI values. If not empty, then TLS must be present and one of the provided SNIs must be indicated in the TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#server_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#server_names}
  */
  readonly serverNames?: string[];
  /**
  * TerminatingTLS is the TLS context for the connection terminated by the L7 proxy. For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#terminating_tls DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#terminating_tls}
  */
  readonly terminatingTls?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTls;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerToTerraform(struct!.listener),
    originating_tls: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsToTerraform(struct!.originatingTls),
    ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsToTerraform, false)(struct!.ports),
    rules: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesToTerraform(struct!.rules),
    server_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverNames),
    terminating_tls: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsToTerraform(struct!.terminatingTls),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListener",
    },
    originating_tls: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsToHclTerraform(struct!.originatingTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTls",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsList",
    },
    rules: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRules",
    },
    server_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    terminating_tls: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsToHclTerraform(struct!.terminatingTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._originatingTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatingTls = this._originatingTls?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._serverNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNames = this._serverNames;
    }
    if (this._terminatingTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminatingTls = this._terminatingTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listener.internalValue = undefined;
      this._originatingTls.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._serverNames = undefined;
      this._terminatingTls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listener.internalValue = value.listener;
      this._originatingTls.internalValue = value.originatingTls;
      this._ports.internalValue = value.ports;
      this._rules.internalValue = value.rules;
      this._serverNames = value.serverNames;
      this._terminatingTls.internalValue = value.terminatingTls;
    }
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsListener) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // originating_tls - computed: false, optional: true, required: false
  private _originatingTls = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTlsOutputReference(this, "originating_tls");
  public get originatingTls() {
    return this._originatingTls;
  }
  public putOriginatingTls(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOriginatingTls) {
    this._originatingTls.internalValue = value;
  }
  public resetOriginatingTls() {
    this._originatingTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatingTlsInput() {
    return this._originatingTls.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // server_names - computed: false, optional: true, required: false
  private _serverNames?: string[]; 
  public get serverNames() {
    return this.getListAttribute('server_names');
  }
  public set serverNames(value: string[]) {
    this._serverNames = value;
  }
  public resetServerNames() {
    this._serverNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamesInput() {
    return this._serverNames;
  }

  // terminating_tls - computed: false, optional: true, required: false
  private _terminatingTls = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTlsOutputReference(this, "terminating_tls");
  public get terminatingTls() {
    return this._terminatingTls;
  }
  public putTerminatingTls(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsTerminatingTls) {
    this._terminatingTls.internalValue = value;
  }
  public resetTerminatingTls() {
    this._terminatingTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatingTlsInput() {
    return this._terminatingTls.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequires {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequires | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequires | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequires[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#service_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._serviceName = value.serviceName;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ServiceSelector is a label selector for k8s services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#selector}
  */
  readonly selector: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._selector.internalValue = value.selector;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServices {
  /**
  * K8sService selects service by name and namespace pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#k8s_service DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#k8s_service}
  */
  readonly k8SService?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SService;
  /**
  * K8sServiceSelector selects services by k8s labels and namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#k8s_service_selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#k8s_service_selector}
  */
  readonly k8SServiceSelector?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_service: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceToTerraform(struct!.k8SService),
    k8s_service_selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorToTerraform(struct!.k8SServiceSelector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_service: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceToHclTerraform(struct!.k8SService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SService",
    },
    k8s_service_selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorToHclTerraform(struct!.k8SServiceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SService = this._k8SService?.internalValue;
    }
    if (this._k8SServiceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SServiceSelector = this._k8SServiceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SService.internalValue = undefined;
      this._k8SServiceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SService.internalValue = value.k8SService;
      this._k8SServiceSelector.internalValue = value.k8SServiceSelector;
    }
  }

  // k8s_service - computed: false, optional: true, required: false
  private _k8SService = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceOutputReference(this, "k8s_service");
  public get k8SService() {
    return this._k8SService;
  }
  public putK8SService(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SService) {
    this._k8SService.internalValue = value;
  }
  public resetK8SService() {
    this._k8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceInput() {
    return this._k8SService.internalValue;
  }

  // k8s_service_selector - computed: false, optional: true, required: false
  private _k8SServiceSelector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelectorOutputReference(this, "k8s_service_selector");
  public get k8SServiceSelector() {
    return this._k8SServiceSelector;
  }
  public putK8SServiceSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesK8SServiceSelector) {
    this._k8SServiceSelector.internalValue = value;
  }
  public resetK8SServiceSelector() {
    this._k8SServiceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceSelectorInput() {
    return this._k8SServiceSelector.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgress {
  /**
  * Authentication is the required authentication type for the allowed traffic, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#authentication DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#authentication}
  */
  readonly authentication?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthentication;
  /**
  * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to connect to. Example: Any endpoint with the label 'app=httpd' is allowed to initiate type 8 ICMP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#icmps DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#icmps}
  */
  readonly icmps?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmps[] | cdktf.IResolvable;
  /**
  * ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. Example: Any endpoint with the label 'app=database-proxy' is allowed to initiate connections to 10.2.3.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_cidr}
  */
  readonly toCidr?: string[];
  /**
  * ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. Example: Any endpoint with the label 'app=database-proxy' is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_cidr_set DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_cidr_set}
  */
  readonly toCidrSet?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSet[] | cdktf.IResolvable;
  /**
  * ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate. Example: Any endpoint with the label 'role=frontend' can communicate with any endpoint carrying the label 'role=backend'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_endpoints DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_endpoints}
  */
  readonly toEndpoints?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpoints[] | cdktf.IResolvable;
  /**
  * ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are 'world', 'cluster','host','remote-node','kube-apiserver', 'init', 'health','unmanaged' and 'all'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_entities DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_entities}
  */
  readonly toEntities?: string[];
  /**
  * ToFQDN allows whitelisting DNS names in place of IPs. The IPs that result from DNS resolution of 'ToFQDN.MatchName's are added to the same EgressRule object as ToCIDRSet entries, and behave accordingly. Any L4 and L7 rules within this EgressRule will also apply to these IPs. The DNS -> IP mapping is re-resolved periodically from within the cilium-agent, and the IPs in the DNS response are effected in the policy for selected pods as-is (i.e. the list of IPs is not modified in any way). Note: An explicit rule to allow for DNS traffic is needed for the pods, as ToFQDN counts as an egress rule and will enforce egress policy when PolicyEnforcment=default. Note: If the resolved IPs are IPs within the kubernetes cluster, the ToFQDN rule will not apply to that IP. Note: ToFQDN cannot occur in the same policy as other To* rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_fqd_ns DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_fqd_ns}
  */
  readonly toFqdNs?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNs[] | cdktf.IResolvable;
  /**
  * ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: Example: toGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_groups DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_groups}
  */
  readonly toGroups?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroups[] | cdktf.IResolvable;
  /**
  * ToNodes is a list of nodes identified by an EndpointSelector to which endpoints subject to the rule is allowed to communicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_nodes DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_nodes}
  */
  readonly toNodes?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodes[] | cdktf.IResolvable;
  /**
  * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to connect to. Example: Any endpoint with the label 'role=frontend' is allowed to initiate connections to destination port 8080/tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_ports}
  */
  readonly toPorts?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPorts[] | cdktf.IResolvable;
  /**
  * ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints. Example: Any Endpoint with the label 'team=A' requires any endpoint to which it communicates to also carry the label 'team=A'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_requires DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_requires}
  */
  readonly toRequires?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequires[] | cdktf.IResolvable;
  /**
  * ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors. Example: Any endpoint with the label 'app=backend-app' is allowed to initiate connections to all cidrs backing the 'external-service' service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_services DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_services}
  */
  readonly toServices?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServices[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthenticationToTerraform(struct!.authentication),
    icmps: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsToTerraform, false)(struct!.icmps),
    to_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toCidr),
    to_cidr_set: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetToTerraform, false)(struct!.toCidrSet),
    to_endpoints: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsToTerraform, false)(struct!.toEndpoints),
    to_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toEntities),
    to_fqd_ns: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsToTerraform, false)(struct!.toFqdNs),
    to_groups: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsToTerraform, false)(struct!.toGroups),
    to_nodes: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesToTerraform, false)(struct!.toNodes),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsToTerraform, false)(struct!.toPorts),
    to_requires: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresToTerraform, false)(struct!.toRequires),
    to_services: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesToTerraform, false)(struct!.toServices),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthentication",
    },
    icmps: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsToHclTerraform, false)(struct!.icmps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsList",
    },
    to_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to_cidr_set: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetToHclTerraform, false)(struct!.toCidrSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetList",
    },
    to_endpoints: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsToHclTerraform, false)(struct!.toEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsList",
    },
    to_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to_fqd_ns: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsToHclTerraform, false)(struct!.toFqdNs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsList",
    },
    to_groups: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsToHclTerraform, false)(struct!.toGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsList",
    },
    to_nodes: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesToHclTerraform, false)(struct!.toNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesList",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsList",
    },
    to_requires: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresToHclTerraform, false)(struct!.toRequires),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresList",
    },
    to_services: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesToHclTerraform, false)(struct!.toServices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._icmps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmps = this._icmps?.internalValue;
    }
    if (this._toCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.toCidr = this._toCidr;
    }
    if (this._toCidrSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toCidrSet = this._toCidrSet?.internalValue;
    }
    if (this._toEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toEndpoints = this._toEndpoints?.internalValue;
    }
    if (this._toEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.toEntities = this._toEntities;
    }
    if (this._toFqdNs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toFqdNs = this._toFqdNs?.internalValue;
    }
    if (this._toGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toGroups = this._toGroups?.internalValue;
    }
    if (this._toNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNodes = this._toNodes?.internalValue;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    if (this._toRequires?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toRequires = this._toRequires?.internalValue;
    }
    if (this._toServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toServices = this._toServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._icmps.internalValue = undefined;
      this._toCidr = undefined;
      this._toCidrSet.internalValue = undefined;
      this._toEndpoints.internalValue = undefined;
      this._toEntities = undefined;
      this._toFqdNs.internalValue = undefined;
      this._toGroups.internalValue = undefined;
      this._toNodes.internalValue = undefined;
      this._toPorts.internalValue = undefined;
      this._toRequires.internalValue = undefined;
      this._toServices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._icmps.internalValue = value.icmps;
      this._toCidr = value.toCidr;
      this._toCidrSet.internalValue = value.toCidrSet;
      this._toEndpoints.internalValue = value.toEndpoints;
      this._toEntities = value.toEntities;
      this._toFqdNs.internalValue = value.toFqdNs;
      this._toGroups.internalValue = value.toGroups;
      this._toNodes.internalValue = value.toNodes;
      this._toPorts.internalValue = value.toPorts;
      this._toRequires.internalValue = value.toRequires;
      this._toServices.internalValue = value.toServices;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // icmps - computed: false, optional: true, required: false
  private _icmps = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmpsList(this, "icmps", false);
  public get icmps() {
    return this._icmps;
  }
  public putIcmps(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressIcmps[] | cdktf.IResolvable) {
    this._icmps.internalValue = value;
  }
  public resetIcmps() {
    this._icmps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpsInput() {
    return this._icmps.internalValue;
  }

  // to_cidr - computed: false, optional: true, required: false
  private _toCidr?: string[]; 
  public get toCidr() {
    return this.getListAttribute('to_cidr');
  }
  public set toCidr(value: string[]) {
    this._toCidr = value;
  }
  public resetToCidr() {
    this._toCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toCidrInput() {
    return this._toCidr;
  }

  // to_cidr_set - computed: false, optional: true, required: false
  private _toCidrSet = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSetList(this, "to_cidr_set", false);
  public get toCidrSet() {
    return this._toCidrSet;
  }
  public putToCidrSet(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToCidrSet[] | cdktf.IResolvable) {
    this._toCidrSet.internalValue = value;
  }
  public resetToCidrSet() {
    this._toCidrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toCidrSetInput() {
    return this._toCidrSet.internalValue;
  }

  // to_endpoints - computed: false, optional: true, required: false
  private _toEndpoints = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpointsList(this, "to_endpoints", false);
  public get toEndpoints() {
    return this._toEndpoints;
  }
  public putToEndpoints(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToEndpoints[] | cdktf.IResolvable) {
    this._toEndpoints.internalValue = value;
  }
  public resetToEndpoints() {
    this._toEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEndpointsInput() {
    return this._toEndpoints.internalValue;
  }

  // to_entities - computed: false, optional: true, required: false
  private _toEntities?: string[]; 
  public get toEntities() {
    return this.getListAttribute('to_entities');
  }
  public set toEntities(value: string[]) {
    this._toEntities = value;
  }
  public resetToEntities() {
    this._toEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEntitiesInput() {
    return this._toEntities;
  }

  // to_fqd_ns - computed: false, optional: true, required: false
  private _toFqdNs = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNsList(this, "to_fqd_ns", false);
  public get toFqdNs() {
    return this._toFqdNs;
  }
  public putToFqdNs(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToFqdNs[] | cdktf.IResolvable) {
    this._toFqdNs.internalValue = value;
  }
  public resetToFqdNs() {
    this._toFqdNs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toFqdNsInput() {
    return this._toFqdNs.internalValue;
  }

  // to_groups - computed: false, optional: true, required: false
  private _toGroups = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroupsList(this, "to_groups", false);
  public get toGroups() {
    return this._toGroups;
  }
  public putToGroups(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToGroups[] | cdktf.IResolvable) {
    this._toGroups.internalValue = value;
  }
  public resetToGroups() {
    this._toGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toGroupsInput() {
    return this._toGroups.internalValue;
  }

  // to_nodes - computed: false, optional: true, required: false
  private _toNodes = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodesList(this, "to_nodes", false);
  public get toNodes() {
    return this._toNodes;
  }
  public putToNodes(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToNodes[] | cdktf.IResolvable) {
    this._toNodes.internalValue = value;
  }
  public resetToNodes() {
    this._toNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toNodesInput() {
    return this._toNodes.internalValue;
  }

  // to_ports - computed: false, optional: true, required: false
  private _toPorts = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  public resetToPorts() {
    this._toPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }

  // to_requires - computed: false, optional: true, required: false
  private _toRequires = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequiresList(this, "to_requires", false);
  public get toRequires() {
    return this._toRequires;
  }
  public putToRequires(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToRequires[] | cdktf.IResolvable) {
    this._toRequires.internalValue = value;
  }
  public resetToRequires() {
    this._toRequires.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toRequiresInput() {
    return this._toRequires.internalValue;
  }

  // to_services - computed: false, optional: true, required: false
  private _toServices = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServicesList(this, "to_services", false);
  public get toServices() {
    return this._toServices;
  }
  public putToServices(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToServices[] | cdktf.IResolvable) {
    this._toServices.internalValue = value;
  }
  public resetToServices() {
    this._toServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toServicesInput() {
    return this._toServices.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFields {
  /**
  * Family is a IP address version. Currently, we support 'IPv4' and 'IPv6'. 'IPv4' is set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#family DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#family}
  */
  readonly family?: string;
  /**
  * Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, 'EchoReply'). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#type DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._type = value.type;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmps {
  /**
  * Fields is a list of ICMP fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#fields DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#fields}
  */
  readonly fields?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFields[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSet {
  /**
  * CIDR is a CIDR prefix / IP Block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr_group_ref DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr_group_ref}
  */
  readonly cidrGroupRef?: string;
  /**
  * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#except DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    cidr_group_ref: cdktf.stringToTerraform(struct!.cidrGroupRef),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.cidrGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._cidrGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrGroupRef = this._cidrGroupRef;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._cidrGroupRef = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._cidrGroupRef = value.cidrGroupRef;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_group_ref - computed: false, optional: true, required: false
  private _cidrGroupRef?: string; 
  public get cidrGroupRef() {
    return this.getStringAttribute('cidr_group_ref');
  }
  public set cidrGroupRef(value: string) {
    this._cidrGroupRef = value;
  }
  public resetCidrGroupRef() {
    this._cidrGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrGroupRefInput() {
    return this._cidrGroupRef;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpoints {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#region DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_ids DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_names}
  */
  readonly securityGroupsNames?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAwsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    region: cdktf.stringToTerraform(struct!.region),
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    security_groups_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsNames),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAwsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._securityGroupsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsNames = this._securityGroupsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._region = undefined;
      this._securityGroupsIds = undefined;
      this._securityGroupsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._region = value.region;
      this._securityGroupsIds = value.securityGroupsIds;
      this._securityGroupsNames = value.securityGroupsNames;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return this.getListAttribute('security_groups_ids');
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // security_groups_names - computed: false, optional: true, required: false
  private _securityGroupsNames?: string[]; 
  public get securityGroupsNames() {
    return this.getListAttribute('security_groups_names');
  }
  public set securityGroupsNames(value: string[]) {
    this._securityGroupsNames = value;
  }
  public resetSecurityGroupsNames() {
    this._securityGroupsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsNamesInput() {
    return this._securityGroupsNames;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroups {
  /**
  * AWSGroup is an structure that can be used to whitelisting information from AWS integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#aws DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#aws}
  */
  readonly aws?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAws;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAwsToTerraform(struct!.aws),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodes {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPorts {
  /**
  * EndPort can only be an L4 port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#end_port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port can be an L4 port number, or a name in the form of 'http' or 'http-8080'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: 'TCP', 'UDP', 'SCTP', 'ANY' Matching on ICMP is not supported. Named port specified for a container may narrow this down, but may not contradict this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#protocol DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
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
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPorts {
  /**
  * Ports is a list of L4 port/protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ports}
  */
  readonly ports?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports.internalValue = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequires {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequires | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequires | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequires[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#service_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._serviceName = value.serviceName;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ServiceSelector is a label selector for k8s services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#selector}
  */
  readonly selector: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._selector.internalValue = value.selector;
    }
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServices {
  /**
  * K8sService selects service by name and namespace pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#k8s_service DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#k8s_service}
  */
  readonly k8SService?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SService;
  /**
  * K8sServiceSelector selects services by k8s labels and namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#k8s_service_selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#k8s_service_selector}
  */
  readonly k8SServiceSelector?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_service: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceToTerraform(struct!.k8SService),
    k8s_service_selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorToTerraform(struct!.k8SServiceSelector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_service: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceToHclTerraform(struct!.k8SService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SService",
    },
    k8s_service_selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorToHclTerraform(struct!.k8SServiceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SService = this._k8SService?.internalValue;
    }
    if (this._k8SServiceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SServiceSelector = this._k8SServiceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SService.internalValue = undefined;
      this._k8SServiceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SService.internalValue = value.k8SService;
      this._k8SServiceSelector.internalValue = value.k8SServiceSelector;
    }
  }

  // k8s_service - computed: false, optional: true, required: false
  private _k8SService = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceOutputReference(this, "k8s_service");
  public get k8SService() {
    return this._k8SService;
  }
  public putK8SService(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SService) {
    this._k8SService.internalValue = value;
  }
  public resetK8SService() {
    this._k8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceInput() {
    return this._k8SService.internalValue;
  }

  // k8s_service_selector - computed: false, optional: true, required: false
  private _k8SServiceSelector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelectorOutputReference(this, "k8s_service_selector");
  public get k8SServiceSelector() {
    return this._k8SServiceSelector;
  }
  public putK8SServiceSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesK8SServiceSelector) {
    this._k8SServiceSelector.internalValue = value;
  }
  public resetK8SServiceSelector() {
    this._k8SServiceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceSelectorInput() {
    return this._k8SServiceSelector.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDeny {
  /**
  * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to connect to. Example: Any endpoint with the label 'app=httpd' is not allowed to initiate type 8 ICMP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#icmps DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#icmps}
  */
  readonly icmps?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmps[] | cdktf.IResolvable;
  /**
  * ToCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections. Only connections destined for outside of the cluster and not targeting the host will be subject to CIDR rules. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. Example: Any endpoint with the label 'app=database-proxy' is allowed to initiate connections to 10.2.3.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_cidr}
  */
  readonly toCidr?: string[];
  /**
  * ToCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to initiate connections to in addition to connections which are allowed via ToEndpoints, along with a list of subnets contained within their corresponding IP block to which traffic should not be allowed. This will match on the destination IP address of outgoing connections. Adding a prefix into ToCIDR or into ToCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between ToCIDR and ToCIDRSet. Example: Any endpoint with the label 'app=database-proxy' is allowed to initiate connections to 10.2.3.0/24 except from IPs in subnet 10.2.3.0/28.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_cidr_set DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_cidr_set}
  */
  readonly toCidrSet?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSet[] | cdktf.IResolvable;
  /**
  * ToEndpoints is a list of endpoints identified by an EndpointSelector to which the endpoints subject to the rule are allowed to communicate. Example: Any endpoint with the label 'role=frontend' can communicate with any endpoint carrying the label 'role=backend'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_endpoints DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_endpoints}
  */
  readonly toEndpoints?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpoints[] | cdktf.IResolvable;
  /**
  * ToEntities is a list of special entities to which the endpoint subject to the rule is allowed to initiate connections. Supported entities are 'world', 'cluster','host','remote-node','kube-apiserver', 'init', 'health','unmanaged' and 'all'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_entities DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_entities}
  */
  readonly toEntities?: string[];
  /**
  * ToGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: Example: toGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_groups DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_groups}
  */
  readonly toGroups?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroups[] | cdktf.IResolvable;
  /**
  * ToNodes is a list of nodes identified by an EndpointSelector to which endpoints subject to the rule is allowed to communicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_nodes DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_nodes}
  */
  readonly toNodes?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodes[] | cdktf.IResolvable;
  /**
  * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to connect to. Example: Any endpoint with the label 'role=frontend' is not allowed to initiate connections to destination port 8080/tcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_ports}
  */
  readonly toPorts?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPorts[] | cdktf.IResolvable;
  /**
  * ToRequires is a list of additional constraints which must be met in order for the selected endpoints to be able to connect to other endpoints. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching ToEndpoints. Example: Any Endpoint with the label 'team=A' requires any endpoint to which it communicates to also carry the label 'team=A'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_requires DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_requires}
  */
  readonly toRequires?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequires[] | cdktf.IResolvable;
  /**
  * ToServices is a list of services to which the endpoint subject to the rule is allowed to initiate connections. Currently Cilium only supports toServices for K8s services without selectors. Example: Any endpoint with the label 'app=backend-app' is allowed to initiate connections to all cidrs backing the 'external-service' service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_services DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_services}
  */
  readonly toServices?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServices[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmps: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsToTerraform, false)(struct!.icmps),
    to_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toCidr),
    to_cidr_set: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetToTerraform, false)(struct!.toCidrSet),
    to_endpoints: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsToTerraform, false)(struct!.toEndpoints),
    to_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toEntities),
    to_groups: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsToTerraform, false)(struct!.toGroups),
    to_nodes: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesToTerraform, false)(struct!.toNodes),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsToTerraform, false)(struct!.toPorts),
    to_requires: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresToTerraform, false)(struct!.toRequires),
    to_services: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesToTerraform, false)(struct!.toServices),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmps: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsToHclTerraform, false)(struct!.icmps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsList",
    },
    to_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to_cidr_set: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetToHclTerraform, false)(struct!.toCidrSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetList",
    },
    to_endpoints: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsToHclTerraform, false)(struct!.toEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsList",
    },
    to_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    to_groups: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsToHclTerraform, false)(struct!.toGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsList",
    },
    to_nodes: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesToHclTerraform, false)(struct!.toNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesList",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsList",
    },
    to_requires: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresToHclTerraform, false)(struct!.toRequires),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresList",
    },
    to_services: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesToHclTerraform, false)(struct!.toServices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmps = this._icmps?.internalValue;
    }
    if (this._toCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.toCidr = this._toCidr;
    }
    if (this._toCidrSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toCidrSet = this._toCidrSet?.internalValue;
    }
    if (this._toEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toEndpoints = this._toEndpoints?.internalValue;
    }
    if (this._toEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.toEntities = this._toEntities;
    }
    if (this._toGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toGroups = this._toGroups?.internalValue;
    }
    if (this._toNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toNodes = this._toNodes?.internalValue;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    if (this._toRequires?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toRequires = this._toRequires?.internalValue;
    }
    if (this._toServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toServices = this._toServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmps.internalValue = undefined;
      this._toCidr = undefined;
      this._toCidrSet.internalValue = undefined;
      this._toEndpoints.internalValue = undefined;
      this._toEntities = undefined;
      this._toGroups.internalValue = undefined;
      this._toNodes.internalValue = undefined;
      this._toPorts.internalValue = undefined;
      this._toRequires.internalValue = undefined;
      this._toServices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmps.internalValue = value.icmps;
      this._toCidr = value.toCidr;
      this._toCidrSet.internalValue = value.toCidrSet;
      this._toEndpoints.internalValue = value.toEndpoints;
      this._toEntities = value.toEntities;
      this._toGroups.internalValue = value.toGroups;
      this._toNodes.internalValue = value.toNodes;
      this._toPorts.internalValue = value.toPorts;
      this._toRequires.internalValue = value.toRequires;
      this._toServices.internalValue = value.toServices;
    }
  }

  // icmps - computed: false, optional: true, required: false
  private _icmps = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmpsList(this, "icmps", false);
  public get icmps() {
    return this._icmps;
  }
  public putIcmps(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyIcmps[] | cdktf.IResolvable) {
    this._icmps.internalValue = value;
  }
  public resetIcmps() {
    this._icmps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpsInput() {
    return this._icmps.internalValue;
  }

  // to_cidr - computed: false, optional: true, required: false
  private _toCidr?: string[]; 
  public get toCidr() {
    return this.getListAttribute('to_cidr');
  }
  public set toCidr(value: string[]) {
    this._toCidr = value;
  }
  public resetToCidr() {
    this._toCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toCidrInput() {
    return this._toCidr;
  }

  // to_cidr_set - computed: false, optional: true, required: false
  private _toCidrSet = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSetList(this, "to_cidr_set", false);
  public get toCidrSet() {
    return this._toCidrSet;
  }
  public putToCidrSet(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToCidrSet[] | cdktf.IResolvable) {
    this._toCidrSet.internalValue = value;
  }
  public resetToCidrSet() {
    this._toCidrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toCidrSetInput() {
    return this._toCidrSet.internalValue;
  }

  // to_endpoints - computed: false, optional: true, required: false
  private _toEndpoints = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpointsList(this, "to_endpoints", false);
  public get toEndpoints() {
    return this._toEndpoints;
  }
  public putToEndpoints(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToEndpoints[] | cdktf.IResolvable) {
    this._toEndpoints.internalValue = value;
  }
  public resetToEndpoints() {
    this._toEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEndpointsInput() {
    return this._toEndpoints.internalValue;
  }

  // to_entities - computed: false, optional: true, required: false
  private _toEntities?: string[]; 
  public get toEntities() {
    return this.getListAttribute('to_entities');
  }
  public set toEntities(value: string[]) {
    this._toEntities = value;
  }
  public resetToEntities() {
    this._toEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toEntitiesInput() {
    return this._toEntities;
  }

  // to_groups - computed: false, optional: true, required: false
  private _toGroups = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroupsList(this, "to_groups", false);
  public get toGroups() {
    return this._toGroups;
  }
  public putToGroups(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToGroups[] | cdktf.IResolvable) {
    this._toGroups.internalValue = value;
  }
  public resetToGroups() {
    this._toGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toGroupsInput() {
    return this._toGroups.internalValue;
  }

  // to_nodes - computed: false, optional: true, required: false
  private _toNodes = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodesList(this, "to_nodes", false);
  public get toNodes() {
    return this._toNodes;
  }
  public putToNodes(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToNodes[] | cdktf.IResolvable) {
    this._toNodes.internalValue = value;
  }
  public resetToNodes() {
    this._toNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toNodesInput() {
    return this._toNodes.internalValue;
  }

  // to_ports - computed: false, optional: true, required: false
  private _toPorts = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  public resetToPorts() {
    this._toPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }

  // to_requires - computed: false, optional: true, required: false
  private _toRequires = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequiresList(this, "to_requires", false);
  public get toRequires() {
    return this._toRequires;
  }
  public putToRequires(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToRequires[] | cdktf.IResolvable) {
    this._toRequires.internalValue = value;
  }
  public resetToRequires() {
    this._toRequires.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toRequiresInput() {
    return this._toRequires.internalValue;
  }

  // to_services - computed: false, optional: true, required: false
  private _toServices = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServicesList(this, "to_services", false);
  public get toServices() {
    return this._toServices;
  }
  public putToServices(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToServices[] | cdktf.IResolvable) {
    this._toServices.internalValue = value;
  }
  public resetToServices() {
    this._toServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toServicesInput() {
    return this._toServices.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDeny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDeny {
  /**
  * Whether or not the endpoint should have a default-deny rule applied to egress traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#egress DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#egress}
  */
  readonly egress?: boolean | cdktf.IResolvable;
  /**
  * Whether or not the endpoint should have a default-deny rule applied to ingress traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ingress DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ingress}
  */
  readonly ingress?: boolean | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDenyToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress: cdktf.booleanToTerraform(struct!.egress),
    ingress: cdktf.booleanToTerraform(struct!.ingress),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDenyToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress: {
      value: cdktf.booleanToHclTerraform(struct!.egress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress: {
      value: cdktf.booleanToHclTerraform(struct!.ingress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egress !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress;
    }
    if (this._ingress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egress = undefined;
      this._ingress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egress = value.egress;
      this._ingress = value.ingress;
    }
  }

  // egress - computed: false, optional: true, required: false
  private _egress?: boolean | cdktf.IResolvable; 
  public get egress() {
    return this.getBooleanAttribute('egress');
  }
  public set egress(value: boolean | cdktf.IResolvable) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress?: boolean | cdktf.IResolvable; 
  public get ingress() {
    return this.getBooleanAttribute('ingress');
  }
  public set ingress(value: boolean | cdktf.IResolvable) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthentication {
  /**
  * Mode is the required authentication mode for the allowed traffic, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#mode DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#mode}
  */
  readonly mode: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthenticationToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthenticationToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSet {
  /**
  * CIDR is a CIDR prefix / IP Block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr_group_ref DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr_group_ref}
  */
  readonly cidrGroupRef?: string;
  /**
  * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#except DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    cidr_group_ref: cdktf.stringToTerraform(struct!.cidrGroupRef),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.cidrGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._cidrGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrGroupRef = this._cidrGroupRef;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._cidrGroupRef = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._cidrGroupRef = value.cidrGroupRef;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_group_ref - computed: false, optional: true, required: false
  private _cidrGroupRef?: string; 
  public get cidrGroupRef() {
    return this.getStringAttribute('cidr_group_ref');
  }
  public set cidrGroupRef(value: string) {
    this._cidrGroupRef = value;
  }
  public resetCidrGroupRef() {
    this._cidrGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrGroupRefInput() {
    return this._cidrGroupRef;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpoints {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#region DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_ids DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_names}
  */
  readonly securityGroupsNames?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAwsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    region: cdktf.stringToTerraform(struct!.region),
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    security_groups_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsNames),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAwsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._securityGroupsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsNames = this._securityGroupsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._region = undefined;
      this._securityGroupsIds = undefined;
      this._securityGroupsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._region = value.region;
      this._securityGroupsIds = value.securityGroupsIds;
      this._securityGroupsNames = value.securityGroupsNames;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return this.getListAttribute('security_groups_ids');
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // security_groups_names - computed: false, optional: true, required: false
  private _securityGroupsNames?: string[]; 
  public get securityGroupsNames() {
    return this.getListAttribute('security_groups_names');
  }
  public set securityGroupsNames(value: string[]) {
    this._securityGroupsNames = value;
  }
  public resetSecurityGroupsNames() {
    this._securityGroupsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsNamesInput() {
    return this._securityGroupsNames;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroups {
  /**
  * AWSGroup is an structure that can be used to whitelisting information from AWS integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#aws DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#aws}
  */
  readonly aws?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAws;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAwsToTerraform(struct!.aws),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodes {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequires {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequires | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequires | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequires[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFields {
  /**
  * Family is a IP address version. Currently, we support 'IPv4' and 'IPv6'. 'IPv4' is set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#family DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#family}
  */
  readonly family?: string;
  /**
  * Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, 'EchoReply'). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#type DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._type = value.type;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmps {
  /**
  * Fields is a list of ICMP fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#fields DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#fields}
  */
  readonly fields?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFields[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfig {
  /**
  * Kind is the resource type being referred to. Defaults to CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig for CiliumNetworkPolicy and CiliumClusterwideNetworkPolicy, respectively. The only case this is currently explicitly needed is when referring to a CiliumClusterwideEnvoyConfig from CiliumNetworkPolicy, as using a namespaced listener from a cluster scoped policy is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#kind DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfigToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfigToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListener {
  /**
  * EnvoyConfig is a reference to the CEC or CCEC resource in which the listener is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#envoy_config DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#envoy_config}
  */
  readonly envoyConfig: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfig;
  /**
  * Name is the name of the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Priority for this Listener that is used when multiple rules would apply different listeners to a policy map entry. Behavior of this is implementation dependent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#priority DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#priority}
  */
  readonly priority?: number;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envoy_config: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfigToTerraform(struct!.envoyConfig),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListener | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envoy_config: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfigToHclTerraform(struct!.envoyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfig",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListener | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envoyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoyConfig = this._envoyConfig?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListener | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envoyConfig.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envoyConfig.internalValue = value.envoyConfig;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // envoy_config - computed: false, optional: false, required: true
  private _envoyConfig = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfigOutputReference(this, "envoy_config");
  public get envoyConfig() {
    return this._envoyConfig;
  }
  public putEnvoyConfig(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerEnvoyConfig) {
    this._envoyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyConfigInput() {
    return this._envoyConfig.internalValue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
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
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecret | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTls {
  /**
  * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#certificate DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#private_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt' - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecret;
  /**
  * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#trusted_ca DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecretToTerraform(struct!.secret),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecret",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._secret.internalValue = undefined;
      this._trustedCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._secret.internalValue = value.secret;
      this._trustedCa = value.trustedCa;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPorts {
  /**
  * EndPort can only be an L4 port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#end_port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port can be an L4 port number, or a name in the form of 'http' or 'http-8080'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: 'TCP', 'UDP', 'SCTP', 'ANY' Matching on ICMP is not supported. Named port specified for a container may narrow this down, but may not contradict this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#protocol DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
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
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDns {
  /**
  * MatchName matches literal DNS names. A trailing '.' is automatically added when missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_name}
  */
  readonly matchName?: string;
  /**
  * MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - '*' matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a '*' as the leftmost character, without a following '.' matches all subdomains as well as the name to the right. A trailing '.' is automatically added when missing. Examples: '*.cilium.io' matches subomains of cilium at that level www.cilium.io and blog.cilium.io match, cilium.io and google.com do not '*cilium.io' matches cilium.io and all subdomains ends with 'cilium.io' except those containing '.' separator, subcilium.io and sub-cilium.io match, www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with 'sub' sub.cilium.io and subdomain.cilium.io match, www.cilium.io, blog.cilium.io, cilium.io and google.com do not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_pattern DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_pattern}
  */
  readonly matchPattern?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_name: cdktf.stringToTerraform(struct!.matchName),
    match_pattern: cdktf.stringToTerraform(struct!.matchPattern),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_name: {
      value: cdktf.stringToHclTerraform(struct!.matchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_pattern: {
      value: cdktf.stringToHclTerraform(struct!.matchPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchName = this._matchName;
    }
    if (this._matchPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchName = undefined;
      this._matchPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchName = value.matchName;
      this._matchPattern = value.matchPattern;
    }
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // match_pattern - computed: false, optional: true, required: false
  private _matchPattern?: string; 
  public get matchPattern() {
    return this.getStringAttribute('match_pattern');
  }
  public set matchPattern(value: string) {
    this._matchPattern = value;
  }
  public resetMatchPattern() {
    this._matchPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDns[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatches {
  /**
  * Mismatch identifies what to do in case there is no match. The default is to drop the request. Otherwise the overall rule is still considered as matching, but the mismatches are logged in the access log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#mismatch DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#mismatch}
  */
  readonly mismatch?: string;
  /**
  * Name identifies the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no 'Value' specified, the match will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecret;
  /**
  * Value matches the exact value of the header. Can be specified either alone or together with 'Secret'; will be used as the header value if the secret can not be found in the latter case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#value DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mismatch: cdktf.stringToTerraform(struct!.mismatch),
    name: cdktf.stringToTerraform(struct!.name),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecretToTerraform(struct!.secret),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mismatch: {
      value: cdktf.stringToHclTerraform(struct!.mismatch),
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
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecret",
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatch = this._mismatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mismatch = undefined;
      this._name = undefined;
      this._secret.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mismatch = value.mismatch;
      this._name = value.name;
      this._secret.internalValue = value.secret;
      this._value = value.value;
    }
  }

  // mismatch - computed: false, optional: true, required: false
  private _mismatch?: string; 
  public get mismatch() {
    return this.getStringAttribute('mismatch');
  }
  public set mismatch(value: string) {
    this._mismatch = value;
  }
  public resetMismatch() {
    this._mismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchInput() {
    return this._mismatch;
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

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttp {
  /**
  * HeaderMatches is a list of HTTP headers which must be present and match against the given values. Mismatch field can be used to specify what to do when there is no match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#header_matches DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#header_matches}
  */
  readonly headerMatches?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable;
  /**
  * Headers is a list of HTTP headers which must be present in the request. If omitted or empty, requests are allowed regardless of headers present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#headers DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Host is an extended POSIX regex matched against the host header of a request. Examples: - foo.bar.com will match the host fooXbar.com or foo-bar.com - foo.bar.com will only match the host foo.bar.com If omitted or empty, the value of the host header is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#host DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Method is an extended POSIX regex matched against the method of a request, e.g. 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', ... If omitted or empty, all methods are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#method DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#method}
  */
  readonly method?: string;
  /**
  * Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional 'path' part of a URL as defined by RFC 3986. If omitted or empty, all paths are all allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#path DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_matches: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesToTerraform, false)(struct!.headerMatches),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_matches: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesToHclTerraform, false)(struct!.headerMatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerMatches = this._headerMatches?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerMatches.internalValue = undefined;
      this._headers = undefined;
      this._host = undefined;
      this._method = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerMatches.internalValue = value.headerMatches;
      this._headers = value.headers;
      this._host = value.host;
      this._method = value.method;
      this._path = value.path;
    }
  }

  // header_matches - computed: false, optional: true, required: false
  private _headerMatches = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatchesList(this, "header_matches", false);
  public get headerMatches() {
    return this._headerMatches;
  }
  public putHeaderMatches(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpHeaderMatches[] | cdktf.IResolvable) {
    this._headerMatches.internalValue = value;
  }
  public resetHeaderMatches() {
    this._headerMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerMatchesInput() {
    return this._headerMatches.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttp[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafka {
  /**
  * APIKey is a case-insensitive string matched against the key of a request, e.g. 'produce', 'fetch', 'createtopic', 'deletetopic', et al Reference: https://kafka.apache.org/protocol#protocol_api_keys If omitted or empty, and if Role is not specified, then all keys are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#api_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#api_key}
  */
  readonly apiKey?: string;
  /**
  * APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. If omitted or empty, all versions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#api_version DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * ClientID is the client identifier as provided in the request. From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. If omitted or empty, all client identifiers are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#client_id DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * Role is a case-insensitive string and describes a group of API keys necessary to perform certain higher-level Kafka operations such as 'produce' or 'consume'. A Role automatically expands into all APIKeys required to perform the specified higher-level operation. The following values are supported: - 'produce': Allow producing to the topics specified in the rule - 'consume': Allow consuming from the topics specified in the rule This field is incompatible with the APIKey field, i.e APIKey and Role cannot both be specified in the same rule. If omitted or empty, and if APIKey is not specified, then all keys are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#role DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#role}
  */
  readonly role?: string;
  /**
  * Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. If omitted or empty, all topics are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#topic DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#topic}
  */
  readonly topic?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    role: cdktf.stringToTerraform(struct!.role),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafka | cdktf.IResolvable): any {
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
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
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
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiVersion = undefined;
      this._clientId = undefined;
      this._role = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiVersion = value.apiVersion;
      this._clientId = value.clientId;
      this._role = value.role;
      this._topic = value.topic;
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

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafka[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRules {
  /**
  * DNS-specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#dns DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#dns}
  */
  readonly dns?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDns[] | cdktf.IResolvable;
  /**
  * HTTP specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#http DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#http}
  */
  readonly http?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttp[] | cdktf.IResolvable;
  /**
  * Kafka-specific rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#kafka DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#kafka}
  */
  readonly kafka?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafka[] | cdktf.IResolvable;
  /**
  * Key-value pair rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#l7 DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#l7}
  */
  readonly l7?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Name of the L7 protocol for which the Key-value pair rules apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#l7proto DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#l7proto}
  */
  readonly l7Proto?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsToTerraform, false)(struct!.dns),
    http: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpToTerraform, false)(struct!.http),
    kafka: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaToTerraform, false)(struct!.kafka),
    l7: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.l7),
    l7proto: cdktf.stringToTerraform(struct!.l7Proto),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsToHclTerraform, false)(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsList",
    },
    http: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpToHclTerraform, false)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpList",
    },
    kafka: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaToHclTerraform, false)(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaList",
    },
    l7: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.l7),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    l7proto: {
      value: cdktf.stringToHclTerraform(struct!.l7Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._l7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7 = this._l7;
    }
    if (this._l7Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7Proto = this._l7Proto;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
      this._http.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._l7 = undefined;
      this._l7Proto = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
      this._http.internalValue = value.http;
      this._kafka.internalValue = value.kafka;
      this._l7 = value.l7;
      this._l7Proto = value.l7Proto;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }
  public putDns(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesDns[] | cdktf.IResolvable) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesKafka[] | cdktf.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // l7 - computed: false, optional: true, required: false
  private _l7?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get l7() {
    return this.interpolationForAttribute('l7');
  }
  public set l7(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._l7 = value;
  }
  public resetL7() {
    this._l7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7Input() {
    return this._l7;
  }

  // l7proto - computed: false, optional: true, required: false
  private _l7Proto?: string; 
  public get l7Proto() {
    return this.getStringAttribute('l7proto');
  }
  public set l7Proto(value: string) {
    this._l7Proto = value;
  }
  public resetL7Proto() {
    this._l7Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7ProtoInput() {
    return this._l7Proto;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecret {
  /**
  * Name is the name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#name DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#namespace DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecretToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecretToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecret | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTls {
  /**
  * Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#certificate DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#certificate}
  */
  readonly certificate?: string;
  /**
  * PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#private_key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#private_key}
  */
  readonly privateKey?: string;
  /**
  * Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items: - 'ca.crt' - Which represents the trusted CA to verify remote source. - 'tls.crt' - Which represents the public key certificate. - 'tls.key' - Which represents the private key matching the public key certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#secret DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#secret}
  */
  readonly secret: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecret;
  /**
  * TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#trusted_ca DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#trusted_ca}
  */
  readonly trustedCa?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    secret: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecretToTerraform(struct!.secret),
    trusted_ca: cdktf.stringToTerraform(struct!.trustedCa),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecret",
    },
    trusted_ca: {
      value: cdktf.stringToHclTerraform(struct!.trustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._trustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._secret.internalValue = undefined;
      this._trustedCa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._secret.internalValue = value.secret;
      this._trustedCa = value.trustedCa;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // secret - computed: false, optional: false, required: true
  private _secret = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsSecret) {
    this._secret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa?: string; 
  public get trustedCa() {
    return this.getStringAttribute('trusted_ca');
  }
  public set trustedCa(value: string) {
    this._trustedCa = value;
  }
  public resetTrustedCa() {
    this._trustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPorts {
  /**
  * listener specifies the name of a custom Envoy listener to which this traffic should be redirected to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#listener DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#listener}
  */
  readonly listener?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListener;
  /**
  * OriginatingTLS is the TLS context for the connections originated by the L7 proxy. For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#originating_tls DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#originating_tls}
  */
  readonly originatingTls?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTls;
  /**
  * Ports is a list of L4 port/protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ports}
  */
  readonly ports?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPorts[] | cdktf.IResolvable;
  /**
  * Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#rules DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#rules}
  */
  readonly rules?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRules;
  /**
  * ServerNames is a list of allowed TLS SNI values. If not empty, then TLS must be present and one of the provided SNIs must be indicated in the TLS handshake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#server_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#server_names}
  */
  readonly serverNames?: string[];
  /**
  * TerminatingTLS is the TLS context for the connection terminated by the L7 proxy. For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#terminating_tls DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#terminating_tls}
  */
  readonly terminatingTls?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTls;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerToTerraform(struct!.listener),
    originating_tls: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsToTerraform(struct!.originatingTls),
    ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsToTerraform, false)(struct!.ports),
    rules: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesToTerraform(struct!.rules),
    server_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serverNames),
    terminating_tls: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsToTerraform(struct!.terminatingTls),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerToHclTerraform(struct!.listener),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListener",
    },
    originating_tls: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsToHclTerraform(struct!.originatingTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTls",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsList",
    },
    rules: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRules",
    },
    server_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serverNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    terminating_tls: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsToHclTerraform(struct!.terminatingTls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listener?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener?.internalValue;
    }
    if (this._originatingTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatingTls = this._originatingTls?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._serverNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNames = this._serverNames;
    }
    if (this._terminatingTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminatingTls = this._terminatingTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listener.internalValue = undefined;
      this._originatingTls.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._serverNames = undefined;
      this._terminatingTls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listener.internalValue = value.listener;
      this._originatingTls.internalValue = value.originatingTls;
      this._ports.internalValue = value.ports;
      this._rules.internalValue = value.rules;
      this._serverNames = value.serverNames;
      this._terminatingTls.internalValue = value.terminatingTls;
    }
  }

  // listener - computed: false, optional: true, required: false
  private _listener = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListenerOutputReference(this, "listener");
  public get listener() {
    return this._listener;
  }
  public putListener(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsListener) {
    this._listener.internalValue = value;
  }
  public resetListener() {
    this._listener.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener.internalValue;
  }

  // originating_tls - computed: false, optional: true, required: false
  private _originatingTls = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTlsOutputReference(this, "originating_tls");
  public get originatingTls() {
    return this._originatingTls;
  }
  public putOriginatingTls(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOriginatingTls) {
    this._originatingTls.internalValue = value;
  }
  public resetOriginatingTls() {
    this._originatingTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatingTlsInput() {
    return this._originatingTls.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // server_names - computed: false, optional: true, required: false
  private _serverNames?: string[]; 
  public get serverNames() {
    return this.getListAttribute('server_names');
  }
  public set serverNames(value: string[]) {
    this._serverNames = value;
  }
  public resetServerNames() {
    this._serverNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNamesInput() {
    return this._serverNames;
  }

  // terminating_tls - computed: false, optional: true, required: false
  private _terminatingTls = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTlsOutputReference(this, "terminating_tls");
  public get terminatingTls() {
    return this._terminatingTls;
  }
  public putTerminatingTls(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsTerminatingTls) {
    this._terminatingTls.internalValue = value;
  }
  public resetTerminatingTls() {
    this._terminatingTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatingTlsInput() {
    return this._terminatingTls.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngress {
  /**
  * Authentication is the required authentication type for the allowed traffic, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#authentication DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#authentication}
  */
  readonly authentication?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthentication;
  /**
  * FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do *not* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. Example: Any endpoint with the label 'app=my-legacy-pet' is allowed to receive connections from 10.3.9.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_cidr}
  */
  readonly fromCidr?: string[];
  /**
  * FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. Example: Any endpoint with the label 'app=my-legacy-pet' is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_cidr_set DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_cidr_set}
  */
  readonly fromCidrSet?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSet[] | cdktf.IResolvable;
  /**
  * FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. Example: Any endpoint with the label 'role=backend' can be consumed by any endpoint carrying the label 'role=frontend'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_endpoints DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_endpoints}
  */
  readonly fromEndpoints?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpoints[] | cdktf.IResolvable;
  /**
  * FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are 'world', 'cluster' and 'host'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_entities DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_entities}
  */
  readonly fromEntities?: string[];
  /**
  * FromGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: Example: FromGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_groups DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_groups}
  */
  readonly fromGroups?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroups[] | cdktf.IResolvable;
  /**
  * FromNodes is a list of nodes identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_nodes DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_nodes}
  */
  readonly fromNodes?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodes[] | cdktf.IResolvable;
  /**
  * FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints. Example: Any Endpoint with the label 'team=A' requires consuming endpoint to also carry the label 'team=A'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_requires DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_requires}
  */
  readonly fromRequires?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequires[] | cdktf.IResolvable;
  /**
  * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is allowed to receive connections on. Example: Any endpoint with the label 'app=httpd' can only accept incoming type 8 ICMP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#icmps DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#icmps}
  */
  readonly icmps?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmps[] | cdktf.IResolvable;
  /**
  * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is allowed to receive connections on. Example: Any endpoint with the label 'app=httpd' can only accept incoming connections on port 80/tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_ports}
  */
  readonly toPorts?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthenticationToTerraform(struct!.authentication),
    from_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromCidr),
    from_cidr_set: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetToTerraform, false)(struct!.fromCidrSet),
    from_endpoints: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsToTerraform, false)(struct!.fromEndpoints),
    from_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromEntities),
    from_groups: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsToTerraform, false)(struct!.fromGroups),
    from_nodes: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesToTerraform, false)(struct!.fromNodes),
    from_requires: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresToTerraform, false)(struct!.fromRequires),
    icmps: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsToTerraform, false)(struct!.icmps),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsToTerraform, false)(struct!.toPorts),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthentication",
    },
    from_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_cidr_set: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetToHclTerraform, false)(struct!.fromCidrSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetList",
    },
    from_endpoints: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsToHclTerraform, false)(struct!.fromEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsList",
    },
    from_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_groups: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsToHclTerraform, false)(struct!.fromGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsList",
    },
    from_nodes: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesToHclTerraform, false)(struct!.fromNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesList",
    },
    from_requires: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresToHclTerraform, false)(struct!.fromRequires),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresList",
    },
    icmps: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsToHclTerraform, false)(struct!.icmps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsList",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._fromCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCidr = this._fromCidr;
    }
    if (this._fromCidrSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCidrSet = this._fromCidrSet?.internalValue;
    }
    if (this._fromEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEndpoints = this._fromEndpoints?.internalValue;
    }
    if (this._fromEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEntities = this._fromEntities;
    }
    if (this._fromGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromGroups = this._fromGroups?.internalValue;
    }
    if (this._fromNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromNodes = this._fromNodes?.internalValue;
    }
    if (this._fromRequires?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromRequires = this._fromRequires?.internalValue;
    }
    if (this._icmps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmps = this._icmps?.internalValue;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._fromCidr = undefined;
      this._fromCidrSet.internalValue = undefined;
      this._fromEndpoints.internalValue = undefined;
      this._fromEntities = undefined;
      this._fromGroups.internalValue = undefined;
      this._fromNodes.internalValue = undefined;
      this._fromRequires.internalValue = undefined;
      this._icmps.internalValue = undefined;
      this._toPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._fromCidr = value.fromCidr;
      this._fromCidrSet.internalValue = value.fromCidrSet;
      this._fromEndpoints.internalValue = value.fromEndpoints;
      this._fromEntities = value.fromEntities;
      this._fromGroups.internalValue = value.fromGroups;
      this._fromNodes.internalValue = value.fromNodes;
      this._fromRequires.internalValue = value.fromRequires;
      this._icmps.internalValue = value.icmps;
      this._toPorts.internalValue = value.toPorts;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // from_cidr - computed: false, optional: true, required: false
  private _fromCidr?: string[]; 
  public get fromCidr() {
    return this.getListAttribute('from_cidr');
  }
  public set fromCidr(value: string[]) {
    this._fromCidr = value;
  }
  public resetFromCidr() {
    this._fromCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCidrInput() {
    return this._fromCidr;
  }

  // from_cidr_set - computed: false, optional: true, required: false
  private _fromCidrSet = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSetList(this, "from_cidr_set", false);
  public get fromCidrSet() {
    return this._fromCidrSet;
  }
  public putFromCidrSet(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromCidrSet[] | cdktf.IResolvable) {
    this._fromCidrSet.internalValue = value;
  }
  public resetFromCidrSet() {
    this._fromCidrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCidrSetInput() {
    return this._fromCidrSet.internalValue;
  }

  // from_endpoints - computed: false, optional: true, required: false
  private _fromEndpoints = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpointsList(this, "from_endpoints", false);
  public get fromEndpoints() {
    return this._fromEndpoints;
  }
  public putFromEndpoints(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromEndpoints[] | cdktf.IResolvable) {
    this._fromEndpoints.internalValue = value;
  }
  public resetFromEndpoints() {
    this._fromEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEndpointsInput() {
    return this._fromEndpoints.internalValue;
  }

  // from_entities - computed: false, optional: true, required: false
  private _fromEntities?: string[]; 
  public get fromEntities() {
    return this.getListAttribute('from_entities');
  }
  public set fromEntities(value: string[]) {
    this._fromEntities = value;
  }
  public resetFromEntities() {
    this._fromEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEntitiesInput() {
    return this._fromEntities;
  }

  // from_groups - computed: false, optional: true, required: false
  private _fromGroups = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroupsList(this, "from_groups", false);
  public get fromGroups() {
    return this._fromGroups;
  }
  public putFromGroups(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromGroups[] | cdktf.IResolvable) {
    this._fromGroups.internalValue = value;
  }
  public resetFromGroups() {
    this._fromGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromGroupsInput() {
    return this._fromGroups.internalValue;
  }

  // from_nodes - computed: false, optional: true, required: false
  private _fromNodes = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodesList(this, "from_nodes", false);
  public get fromNodes() {
    return this._fromNodes;
  }
  public putFromNodes(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromNodes[] | cdktf.IResolvable) {
    this._fromNodes.internalValue = value;
  }
  public resetFromNodes() {
    this._fromNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNodesInput() {
    return this._fromNodes.internalValue;
  }

  // from_requires - computed: false, optional: true, required: false
  private _fromRequires = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequiresList(this, "from_requires", false);
  public get fromRequires() {
    return this._fromRequires;
  }
  public putFromRequires(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressFromRequires[] | cdktf.IResolvable) {
    this._fromRequires.internalValue = value;
  }
  public resetFromRequires() {
    this._fromRequires.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromRequiresInput() {
    return this._fromRequires.internalValue;
  }

  // icmps - computed: false, optional: true, required: false
  private _icmps = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmpsList(this, "icmps", false);
  public get icmps() {
    return this._icmps;
  }
  public putIcmps(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressIcmps[] | cdktf.IResolvable) {
    this._icmps.internalValue = value;
  }
  public resetIcmps() {
    this._icmps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpsInput() {
    return this._icmps.internalValue;
  }

  // to_ports - computed: false, optional: true, required: false
  private _toPorts = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  public resetToPorts() {
    this._toPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngress[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSet {
  /**
  * CIDR is a CIDR prefix / IP Block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr}
  */
  readonly cidr?: string;
  /**
  * CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress/Egress) or cannot (IngressDeny/EgressDeny) receive connections from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#cidr_group_ref DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#cidr_group_ref}
  */
  readonly cidrGroupRef?: string;
  /**
  * ExceptCIDRs is a list of IP blocks which the endpoint subject to the rule is not allowed to initiate connections to. These CIDR prefixes should be contained within Cidr, using ExceptCIDRs together with CIDRGroupRef is not supported yet. These exceptions are only applied to the Cidr in this CIDRRule, and do not apply to any other CIDR prefixes in any other CIDRRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#except DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#except}
  */
  readonly except?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    cidr_group_ref: cdktf.stringToTerraform(struct!.cidrGroupRef),
    except: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.except),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cidr_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.cidrGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    except: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.except),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._cidrGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrGroupRef = this._cidrGroupRef;
    }
    if (this._except !== undefined) {
      hasAnyValues = true;
      internalValueResult.except = this._except;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._cidrGroupRef = undefined;
      this._except = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._cidrGroupRef = value.cidrGroupRef;
      this._except = value.except;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cidr_group_ref - computed: false, optional: true, required: false
  private _cidrGroupRef?: string; 
  public get cidrGroupRef() {
    return this.getStringAttribute('cidr_group_ref');
  }
  public set cidrGroupRef(value: string) {
    this._cidrGroupRef = value;
  }
  public resetCidrGroupRef() {
    this._cidrGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrGroupRefInput() {
    return this._cidrGroupRef;
  }

  // except - computed: false, optional: true, required: false
  private _except?: string[]; 
  public get except() {
    return this.getListAttribute('except');
  }
  public set except(value: string[]) {
    this._except = value;
  }
  public resetExcept() {
    this._except = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptInput() {
    return this._except;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpoints {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#region DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_ids DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_ids}
  */
  readonly securityGroupsIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#security_groups_names DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#security_groups_names}
  */
  readonly securityGroupsNames?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAwsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    region: cdktf.stringToTerraform(struct!.region),
    security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsIds),
    security_groups_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupsNames),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAwsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupsIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsIds = this._securityGroupsIds;
    }
    if (this._securityGroupsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupsNames = this._securityGroupsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._region = undefined;
      this._securityGroupsIds = undefined;
      this._securityGroupsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._region = value.region;
      this._securityGroupsIds = value.securityGroupsIds;
      this._securityGroupsNames = value.securityGroupsNames;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_groups_ids - computed: false, optional: true, required: false
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return this.getListAttribute('security_groups_ids');
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  public resetSecurityGroupsIds() {
    this._securityGroupsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
  }

  // security_groups_names - computed: false, optional: true, required: false
  private _securityGroupsNames?: string[]; 
  public get securityGroupsNames() {
    return this.getListAttribute('security_groups_names');
  }
  public set securityGroupsNames(value: string[]) {
    this._securityGroupsNames = value;
  }
  public resetSecurityGroupsNames() {
    this._securityGroupsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsNamesInput() {
    return this._securityGroupsNames;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroups {
  /**
  * AWSGroup is an structure that can be used to whitelisting information from AWS integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#aws DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#aws}
  */
  readonly aws?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAws;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAwsToTerraform(struct!.aws),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAws",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodes {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequires {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequires | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequires | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequires | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequires[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFields {
  /**
  * Family is a IP address version. Currently, we support 'IPv4' and 'IPv6'. 'IPv4' is set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#family DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#family}
  */
  readonly family?: string;
  /**
  * Type is a ICMP-type. It should be an 8bit code (0-255), or it's CamelCase name (for example, 'EchoReply'). Allowed ICMP types are: Ipv4: EchoReply | DestinationUnreachable | Redirect | Echo | EchoRequest | RouterAdvertisement | RouterSelection | TimeExceeded | ParameterProblem | Timestamp | TimestampReply | Photuris | ExtendedEcho Request | ExtendedEcho Reply Ipv6: DestinationUnreachable | PacketTooBig | TimeExceeded | ParameterProblem | EchoRequest | EchoReply | MulticastListenerQuery| MulticastListenerReport | MulticastListenerDone | RouterSolicitation | RouterAdvertisement | NeighborSolicitation | NeighborAdvertisement | RedirectMessage | RouterRenumbering | ICMPNodeInformationQuery | ICMPNodeInformationResponse | InverseNeighborDiscoverySolicitation | InverseNeighborDiscoveryAdvertisement | HomeAgentAddressDiscoveryRequest | HomeAgentAddressDiscoveryReply | MobilePrefixSolicitation | MobilePrefixAdvertisement | DuplicateAddressRequestCodeSuffix | DuplicateAddressConfirmationCodeSuffix | ExtendedEchoRequest | ExtendedEchoReply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#type DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._type = value.type;
    }
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmps {
  /**
  * Fields is a list of ICMP fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#fields DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#fields}
  */
  readonly fields?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFields[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPorts {
  /**
  * EndPort can only be an L4 port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#end_port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#end_port}
  */
  readonly endPort?: number;
  /**
  * Port can be an L4 port number, or a name in the form of 'http' or 'http-8080'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#port DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#port}
  */
  readonly port: string;
  /**
  * Protocol is the L4 protocol. If omitted or empty, any protocol matches. Accepted values: 'TCP', 'UDP', 'SCTP', 'ANY' Matching on ICMP is not supported. Named port specified for a container may narrow this down, but may not contradict this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#protocol DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
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
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPorts {
  /**
  * Ports is a list of L4 port/protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ports}
  */
  readonly ports?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ports.internalValue = value.ports;
    }
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDeny {
  /**
  * FromCIDR is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from. Only connections which do *not* originate from the cluster or from the local host are subject to CIDR rules. In order to allow in-cluster connectivity, use the FromEndpoints field. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. Example: Any endpoint with the label 'app=my-legacy-pet' is allowed to receive connections from 10.3.9.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_cidr DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_cidr}
  */
  readonly fromCidr?: string[];
  /**
  * FromCIDRSet is a list of IP blocks which the endpoint subject to the rule is allowed to receive connections from in addition to FromEndpoints, along with a list of subnets contained within their corresponding IP block from which traffic should not be allowed. This will match on the source IP address of incoming connections. Adding a prefix into FromCIDR or into FromCIDRSet with no ExcludeCIDRs is equivalent. Overlaps are allowed between FromCIDR and FromCIDRSet. Example: Any endpoint with the label 'app=my-legacy-pet' is allowed to receive connections from 10.0.0.0/8 except from IPs in subnet 10.96.0.0/12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_cidr_set DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_cidr_set}
  */
  readonly fromCidrSet?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSet[] | cdktf.IResolvable;
  /**
  * FromEndpoints is a list of endpoints identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule. Example: Any endpoint with the label 'role=backend' can be consumed by any endpoint carrying the label 'role=frontend'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_endpoints DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_endpoints}
  */
  readonly fromEndpoints?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpoints[] | cdktf.IResolvable;
  /**
  * FromEntities is a list of special entities which the endpoint subject to the rule is allowed to receive connections from. Supported entities are 'world', 'cluster' and 'host'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_entities DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_entities}
  */
  readonly fromEntities?: string[];
  /**
  * FromGroups is a directive that allows the integration with multiple outside providers. Currently, only AWS is supported, and the rule can select by multiple sub directives: Example: FromGroups: - aws: securityGroupsIds: - 'sg-XXXXXXXXXXXXX'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_groups DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_groups}
  */
  readonly fromGroups?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroups[] | cdktf.IResolvable;
  /**
  * FromNodes is a list of nodes identified by an EndpointSelector which are allowed to communicate with the endpoint subject to the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_nodes DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_nodes}
  */
  readonly fromNodes?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodes[] | cdktf.IResolvable;
  /**
  * FromRequires is a list of additional constraints which must be met in order for the selected endpoints to be reachable. These additional constraints do no by itself grant access privileges and must always be accompanied with at least one matching FromEndpoints. Example: Any Endpoint with the label 'team=A' requires consuming endpoint to also carry the label 'team=A'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#from_requires DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#from_requires}
  */
  readonly fromRequires?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequires[] | cdktf.IResolvable;
  /**
  * ICMPs is a list of ICMP rule identified by type number which the endpoint subject to the rule is not allowed to receive connections on. Example: Any endpoint with the label 'app=httpd' can not accept incoming type 8 ICMP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#icmps DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#icmps}
  */
  readonly icmps?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmps[] | cdktf.IResolvable;
  /**
  * ToPorts is a list of destination ports identified by port number and protocol which the endpoint subject to the rule is not allowed to receive connections on. Example: Any endpoint with the label 'app=httpd' can not accept incoming connections on port 80/tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#to_ports DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#to_ports}
  */
  readonly toPorts?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPorts[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromCidr),
    from_cidr_set: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetToTerraform, false)(struct!.fromCidrSet),
    from_endpoints: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsToTerraform, false)(struct!.fromEndpoints),
    from_entities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fromEntities),
    from_groups: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsToTerraform, false)(struct!.fromGroups),
    from_nodes: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesToTerraform, false)(struct!.fromNodes),
    from_requires: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresToTerraform, false)(struct!.fromRequires),
    icmps: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsToTerraform, false)(struct!.icmps),
    to_ports: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsToTerraform, false)(struct!.toPorts),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_cidr_set: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetToHclTerraform, false)(struct!.fromCidrSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetList",
    },
    from_endpoints: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsToHclTerraform, false)(struct!.fromEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsList",
    },
    from_entities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fromEntities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    from_groups: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsToHclTerraform, false)(struct!.fromGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsList",
    },
    from_nodes: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesToHclTerraform, false)(struct!.fromNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesList",
    },
    from_requires: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresToHclTerraform, false)(struct!.fromRequires),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresList",
    },
    icmps: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsToHclTerraform, false)(struct!.icmps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsList",
    },
    to_ports: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsToHclTerraform, false)(struct!.toPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCidr = this._fromCidr;
    }
    if (this._fromCidrSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromCidrSet = this._fromCidrSet?.internalValue;
    }
    if (this._fromEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEndpoints = this._fromEndpoints?.internalValue;
    }
    if (this._fromEntities !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEntities = this._fromEntities;
    }
    if (this._fromGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromGroups = this._fromGroups?.internalValue;
    }
    if (this._fromNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromNodes = this._fromNodes?.internalValue;
    }
    if (this._fromRequires?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromRequires = this._fromRequires?.internalValue;
    }
    if (this._icmps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmps = this._icmps?.internalValue;
    }
    if (this._toPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPorts = this._toPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromCidr = undefined;
      this._fromCidrSet.internalValue = undefined;
      this._fromEndpoints.internalValue = undefined;
      this._fromEntities = undefined;
      this._fromGroups.internalValue = undefined;
      this._fromNodes.internalValue = undefined;
      this._fromRequires.internalValue = undefined;
      this._icmps.internalValue = undefined;
      this._toPorts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromCidr = value.fromCidr;
      this._fromCidrSet.internalValue = value.fromCidrSet;
      this._fromEndpoints.internalValue = value.fromEndpoints;
      this._fromEntities = value.fromEntities;
      this._fromGroups.internalValue = value.fromGroups;
      this._fromNodes.internalValue = value.fromNodes;
      this._fromRequires.internalValue = value.fromRequires;
      this._icmps.internalValue = value.icmps;
      this._toPorts.internalValue = value.toPorts;
    }
  }

  // from_cidr - computed: false, optional: true, required: false
  private _fromCidr?: string[]; 
  public get fromCidr() {
    return this.getListAttribute('from_cidr');
  }
  public set fromCidr(value: string[]) {
    this._fromCidr = value;
  }
  public resetFromCidr() {
    this._fromCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCidrInput() {
    return this._fromCidr;
  }

  // from_cidr_set - computed: false, optional: true, required: false
  private _fromCidrSet = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSetList(this, "from_cidr_set", false);
  public get fromCidrSet() {
    return this._fromCidrSet;
  }
  public putFromCidrSet(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromCidrSet[] | cdktf.IResolvable) {
    this._fromCidrSet.internalValue = value;
  }
  public resetFromCidrSet() {
    this._fromCidrSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromCidrSetInput() {
    return this._fromCidrSet.internalValue;
  }

  // from_endpoints - computed: false, optional: true, required: false
  private _fromEndpoints = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpointsList(this, "from_endpoints", false);
  public get fromEndpoints() {
    return this._fromEndpoints;
  }
  public putFromEndpoints(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromEndpoints[] | cdktf.IResolvable) {
    this._fromEndpoints.internalValue = value;
  }
  public resetFromEndpoints() {
    this._fromEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEndpointsInput() {
    return this._fromEndpoints.internalValue;
  }

  // from_entities - computed: false, optional: true, required: false
  private _fromEntities?: string[]; 
  public get fromEntities() {
    return this.getListAttribute('from_entities');
  }
  public set fromEntities(value: string[]) {
    this._fromEntities = value;
  }
  public resetFromEntities() {
    this._fromEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEntitiesInput() {
    return this._fromEntities;
  }

  // from_groups - computed: false, optional: true, required: false
  private _fromGroups = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroupsList(this, "from_groups", false);
  public get fromGroups() {
    return this._fromGroups;
  }
  public putFromGroups(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromGroups[] | cdktf.IResolvable) {
    this._fromGroups.internalValue = value;
  }
  public resetFromGroups() {
    this._fromGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromGroupsInput() {
    return this._fromGroups.internalValue;
  }

  // from_nodes - computed: false, optional: true, required: false
  private _fromNodes = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodesList(this, "from_nodes", false);
  public get fromNodes() {
    return this._fromNodes;
  }
  public putFromNodes(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromNodes[] | cdktf.IResolvable) {
    this._fromNodes.internalValue = value;
  }
  public resetFromNodes() {
    this._fromNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNodesInput() {
    return this._fromNodes.internalValue;
  }

  // from_requires - computed: false, optional: true, required: false
  private _fromRequires = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequiresList(this, "from_requires", false);
  public get fromRequires() {
    return this._fromRequires;
  }
  public putFromRequires(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyFromRequires[] | cdktf.IResolvable) {
    this._fromRequires.internalValue = value;
  }
  public resetFromRequires() {
    this._fromRequires.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromRequiresInput() {
    return this._fromRequires.internalValue;
  }

  // icmps - computed: false, optional: true, required: false
  private _icmps = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmpsList(this, "icmps", false);
  public get icmps() {
    return this._icmps;
  }
  public putIcmps(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyIcmps[] | cdktf.IResolvable) {
    this._icmps.internalValue = value;
  }
  public resetIcmps() {
    this._icmps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpsInput() {
    return this._icmps.internalValue;
  }

  // to_ports - computed: false, optional: true, required: false
  private _toPorts = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPortsList(this, "to_ports", false);
  public get toPorts() {
    return this._toPorts;
  }
  public putToPorts(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToPorts[] | cdktf.IResolvable) {
    this._toPorts.internalValue = value;
  }
  public resetToPorts() {
    this._toPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortsInput() {
    return this._toPorts.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDeny[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * Source can be one of the above values (e.g.: LabelSourceContainer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#source DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#value DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabels | cdktf.IResolvable): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._source = undefined;
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
      this._source = value.source;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabels[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#key DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#operator DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#values DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_expressions DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#match_labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecs {
  /**
  * Description is a free form string, it can be used by the creator of the rule to store human readable explanation of the purpose of this rule. Rules cannot be identified by comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#description DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#description}
  */
  readonly description?: string;
  /**
  * Egress is a list of EgressRule which are enforced at egress. If omitted or empty, this rule does not apply at egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#egress DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#egress}
  */
  readonly egress?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgress[] | cdktf.IResolvable;
  /**
  * EgressDeny is a list of EgressDenyRule which are enforced at egress. Any rule inserted here will be denied regardless of the allowed egress rules in the 'egress' field. If omitted or empty, this rule does not apply at egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#egress_deny DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#egress_deny}
  */
  readonly egressDeny?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDeny[] | cdktf.IResolvable;
  /**
  * EnableDefaultDeny determines whether this policy configures the subject endpoint(s) to have a default deny mode. If enabled, this causes all traffic not explicitly allowed by a network policy to be dropped. If not specified, the default is true for each traffic direction that has rules, and false otherwise. For example, if a policy only has Ingress or IngressDeny rules, then the default for ingress is true and egress is false. If multiple policies apply to an endpoint, that endpoint's default deny will be enabled if any policy requests it. This is useful for creating broad-based network policies that will not cause endpoints to enter default-deny mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#enable_default_deny DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#enable_default_deny}
  */
  readonly enableDefaultDeny?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDeny;
  /**
  * EndpointSelector selects all endpoints which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#endpoint_selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#endpoint_selector}
  */
  readonly endpointSelector?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelector;
  /**
  * Ingress is a list of IngressRule which are enforced at ingress. If omitted or empty, this rule does not apply at ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ingress DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ingress}
  */
  readonly ingress?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngress[] | cdktf.IResolvable;
  /**
  * IngressDeny is a list of IngressDenyRule which are enforced at ingress. Any rule inserted here will be denied regardless of the allowed ingress rules in the 'ingress' field. If omitted or empty, this rule does not apply at ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#ingress_deny DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#ingress_deny}
  */
  readonly ingressDeny?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDeny[] | cdktf.IResolvable;
  /**
  * Labels is a list of optional strings which can be used to re-identify the rule or to store metadata. It is possible to lookup or delete strings based on labels. Labels are not required to be unique, multiple rules can have overlapping or identical labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#labels DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#labels}
  */
  readonly labels?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabels[] | cdktf.IResolvable;
  /**
  * NodeSelector selects all nodes which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. Can only be used in CiliumClusterwideNetworkPolicies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/cilium_io_cilium_network_policy_v2_manifest#node_selector DataK8SCiliumIoCiliumNetworkPolicyV2Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelector;
}

export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsToTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    egress: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToTerraform, false)(struct!.egress),
    egress_deny: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToTerraform, false)(struct!.egressDeny),
    enable_default_deny: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDenyToTerraform(struct!.enableDefaultDeny),
    endpoint_selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorToTerraform(struct!.endpointSelector),
    ingress: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToTerraform, false)(struct!.ingress),
    ingress_deny: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToTerraform, false)(struct!.ingressDeny),
    labels: cdktf.listMapper(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsToTerraform, false)(struct!.labels),
    node_selector: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorToTerraform(struct!.nodeSelector),
  }
}


export function dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsToHclTerraform(struct?: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecs | cdktf.IResolvable): any {
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
    egress: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressToHclTerraform, false)(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressList",
    },
    egress_deny: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyToHclTerraform, false)(struct!.egressDeny),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyList",
    },
    enable_default_deny: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDenyToHclTerraform(struct!.enableDefaultDeny),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDeny",
    },
    endpoint_selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorToHclTerraform(struct!.endpointSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelector",
    },
    ingress: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressToHclTerraform, false)(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressList",
    },
    ingress_deny: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyToHclTerraform, false)(struct!.ingressDeny),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyList",
    },
    labels: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsToHclTerraform, false)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsList",
    },
    node_selector: {
      value: dataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._egressDeny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressDeny = this._egressDeny?.internalValue;
    }
    if (this._enableDefaultDeny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDefaultDeny = this._enableDefaultDeny?.internalValue;
    }
    if (this._endpointSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSelector = this._endpointSelector?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._ingressDeny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressDeny = this._ingressDeny?.internalValue;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._egress.internalValue = undefined;
      this._egressDeny.internalValue = undefined;
      this._enableDefaultDeny.internalValue = undefined;
      this._endpointSelector.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._ingressDeny.internalValue = undefined;
      this._labels.internalValue = undefined;
      this._nodeSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._egress.internalValue = value.egress;
      this._egressDeny.internalValue = value.egressDeny;
      this._enableDefaultDeny.internalValue = value.enableDefaultDeny;
      this._endpointSelector.internalValue = value.endpointSelector;
      this._ingress.internalValue = value.ingress;
      this._ingressDeny.internalValue = value.ingressDeny;
      this._labels.internalValue = value.labels;
      this._nodeSelector.internalValue = value.nodeSelector;
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

  // egress - computed: false, optional: true, required: false
  private _egress = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressList(this, "egress", false);
  public get egress() {
    return this._egress;
  }
  public putEgress(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgress[] | cdktf.IResolvable) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // egress_deny - computed: false, optional: true, required: false
  private _egressDeny = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDenyList(this, "egress_deny", false);
  public get egressDeny() {
    return this._egressDeny;
  }
  public putEgressDeny(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEgressDeny[] | cdktf.IResolvable) {
    this._egressDeny.internalValue = value;
  }
  public resetEgressDeny() {
    this._egressDeny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressDenyInput() {
    return this._egressDeny.internalValue;
  }

  // enable_default_deny - computed: false, optional: true, required: false
  private _enableDefaultDeny = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDenyOutputReference(this, "enable_default_deny");
  public get enableDefaultDeny() {
    return this._enableDefaultDeny;
  }
  public putEnableDefaultDeny(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEnableDefaultDeny) {
    this._enableDefaultDeny.internalValue = value;
  }
  public resetEnableDefaultDeny() {
    this._enableDefaultDeny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultDenyInput() {
    return this._enableDefaultDeny.internalValue;
  }

  // endpoint_selector - computed: false, optional: true, required: false
  private _endpointSelector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelectorOutputReference(this, "endpoint_selector");
  public get endpointSelector() {
    return this._endpointSelector;
  }
  public putEndpointSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsEndpointSelector) {
    this._endpointSelector.internalValue = value;
  }
  public resetEndpointSelector() {
    this._endpointSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSelectorInput() {
    return this._endpointSelector.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressList(this, "ingress", false);
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngress[] | cdktf.IResolvable) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // ingress_deny - computed: false, optional: true, required: false
  private _ingressDeny = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDenyList(this, "ingress_deny", false);
  public get ingressDeny() {
    return this._ingressDeny;
  }
  public putIngressDeny(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsIngressDeny[] | cdktf.IResolvable) {
    this._ingressDeny.internalValue = value;
  }
  public resetIngressDeny() {
    this._ingressDeny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressDenyInput() {
    return this._ingressDeny.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }
}

export class DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsOutputReference {
    return new DataK8SCiliumIoCiliumNetworkPolicyV2ManifestSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
