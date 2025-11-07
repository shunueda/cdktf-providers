// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The self link of the domain to add the route to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#domain_link DomainRoute#domain_link}
  */
  readonly domainLink: string;
  /**
  * The port the route corresponds to. Default: 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#domain_port DomainRoute#domain_port}
  */
  readonly domainPort?: number;
  /**
  * This option allows forwarding traffic for different host headers to different workloads. This will only be used when the target GVC has dedicated load balancing enabled and the Domain is configured for wildcard support. Please contact us on Slack or at support@controlplane.com for additional details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#host_prefix DomainRoute#host_prefix}
  */
  readonly hostPrefix?: string;
  /**
  * A regex to match the host header. This will only be used when the target GVC has dedicated load balancing enabled and the Domain is configure for wildcard support. Contact your account manager for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#host_regex DomainRoute#host_regex}
  */
  readonly hostRegex?: string;
  /**
  * For the linked workload, the port to route traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#port DomainRoute#port}
  */
  readonly port?: number;
  /**
  * The path will match any unmatched path prefixes for the subdomain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#prefix DomainRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Used to match URI paths. Uses the google re2 regex syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#regex DomainRoute#regex}
  */
  readonly regex?: string;
  /**
  * A path prefix can be configured to be replaced when forwarding the request to the Workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#replace_prefix DomainRoute#replace_prefix}
  */
  readonly replacePrefix?: string;
  /**
  * The replica number of a stateful workload to route to. If not provided, traffic will be routed to all replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#replica DomainRoute#replica}
  */
  readonly replica?: number;
  /**
  * The link of the workload to map the prefix to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#workload_link DomainRoute#workload_link}
  */
  readonly workloadLink: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#headers DomainRoute#headers}
  */
  readonly headers?: DomainRouteHeaders[] | cdktf.IResolvable;
}
export interface DomainRouteHeadersRequest {
  /**
  * Sets or overrides headers to all http requests for this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#set DomainRoute#set}
  */
  readonly set?: { [key: string]: string };
}

export function domainRouteHeadersRequestToTerraform(struct?: DomainRouteHeadersRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.set),
  }
}


export function domainRouteHeadersRequestToHclTerraform(struct?: DomainRouteHeadersRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.set),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainRouteHeadersRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainRouteHeadersRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._set !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainRouteHeadersRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._set = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._set = value.set;
    }
  }

  // set - computed: false, optional: true, required: false
  private _set?: { [key: string]: string }; 
  public get set() {
    return this.getStringMapAttribute('set');
  }
  public set set(value: { [key: string]: string }) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set;
  }
}

export class DomainRouteHeadersRequestList extends cdktf.ComplexList {
  public internalValue? : DomainRouteHeadersRequest[] | cdktf.IResolvable

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
  public get(index: number): DomainRouteHeadersRequestOutputReference {
    return new DomainRouteHeadersRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainRouteHeaders {
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#request DomainRoute#request}
  */
  readonly request?: DomainRouteHeadersRequest[] | cdktf.IResolvable;
}

export function domainRouteHeadersToTerraform(struct?: DomainRouteHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: cdktf.listMapper(domainRouteHeadersRequestToTerraform, true)(struct!.request),
  }
}


export function domainRouteHeadersToHclTerraform(struct?: DomainRouteHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: cdktf.listMapperHcl(domainRouteHeadersRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "DomainRouteHeadersRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainRouteHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DomainRouteHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainRouteHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._request.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._request.internalValue = value.request;
    }
  }

  // request - computed: false, optional: true, required: false
  private _request = new DomainRouteHeadersRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: DomainRouteHeadersRequest[] | cdktf.IResolvable) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}

export class DomainRouteHeadersList extends cdktf.ComplexList {
  public internalValue? : DomainRouteHeaders[] | cdktf.IResolvable

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
  public get(index: number): DomainRouteHeadersOutputReference {
    return new DomainRouteHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route cpln_domain_route}
*/
export class DomainRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_domain_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainRoute to import
  * @param importFromId The id of the existing DomainRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_domain_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/domain_route cpln_domain_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainRouteConfig
  */
  public constructor(scope: Construct, id: string, config: DomainRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_domain_route',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainLink = config.domainLink;
    this._domainPort = config.domainPort;
    this._hostPrefix = config.hostPrefix;
    this._hostRegex = config.hostRegex;
    this._port = config.port;
    this._prefix = config.prefix;
    this._regex = config.regex;
    this._replacePrefix = config.replacePrefix;
    this._replica = config.replica;
    this._workloadLink = config.workloadLink;
    this._headers.internalValue = config.headers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_link - computed: false, optional: false, required: true
  private _domainLink?: string; 
  public get domainLink() {
    return this.getStringAttribute('domain_link');
  }
  public set domainLink(value: string) {
    this._domainLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainLinkInput() {
    return this._domainLink;
  }

  // domain_port - computed: true, optional: true, required: false
  private _domainPort?: number; 
  public get domainPort() {
    return this.getNumberAttribute('domain_port');
  }
  public set domainPort(value: number) {
    this._domainPort = value;
  }
  public resetDomainPort() {
    this._domainPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainPortInput() {
    return this._domainPort;
  }

  // host_prefix - computed: false, optional: true, required: false
  private _hostPrefix?: string; 
  public get hostPrefix() {
    return this.getStringAttribute('host_prefix');
  }
  public set hostPrefix(value: string) {
    this._hostPrefix = value;
  }
  public resetHostPrefix() {
    this._hostPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPrefixInput() {
    return this._hostPrefix;
  }

  // host_regex - computed: false, optional: true, required: false
  private _hostRegex?: string; 
  public get hostRegex() {
    return this.getStringAttribute('host_regex');
  }
  public set hostRegex(value: string) {
    this._hostRegex = value;
  }
  public resetHostRegex() {
    this._hostRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRegexInput() {
    return this._hostRegex;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replace_prefix - computed: false, optional: true, required: false
  private _replacePrefix?: string; 
  public get replacePrefix() {
    return this.getStringAttribute('replace_prefix');
  }
  public set replacePrefix(value: string) {
    this._replacePrefix = value;
  }
  public resetReplacePrefix() {
    this._replacePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacePrefixInput() {
    return this._replacePrefix;
  }

  // replica - computed: false, optional: true, required: false
  private _replica?: number; 
  public get replica() {
    return this.getNumberAttribute('replica');
  }
  public set replica(value: number) {
    this._replica = value;
  }
  public resetReplica() {
    this._replica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica;
  }

  // workload_link - computed: false, optional: false, required: true
  private _workloadLink?: string; 
  public get workloadLink() {
    return this.getStringAttribute('workload_link');
  }
  public set workloadLink(value: string) {
    this._workloadLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadLinkInput() {
    return this._workloadLink;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DomainRouteHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DomainRouteHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_link: cdktf.stringToTerraform(this._domainLink),
      domain_port: cdktf.numberToTerraform(this._domainPort),
      host_prefix: cdktf.stringToTerraform(this._hostPrefix),
      host_regex: cdktf.stringToTerraform(this._hostRegex),
      port: cdktf.numberToTerraform(this._port),
      prefix: cdktf.stringToTerraform(this._prefix),
      regex: cdktf.stringToTerraform(this._regex),
      replace_prefix: cdktf.stringToTerraform(this._replacePrefix),
      replica: cdktf.numberToTerraform(this._replica),
      workload_link: cdktf.stringToTerraform(this._workloadLink),
      headers: cdktf.listMapper(domainRouteHeadersToTerraform, true)(this._headers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_link: {
        value: cdktf.stringToHclTerraform(this._domainLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_port: {
        value: cdktf.numberToHclTerraform(this._domainPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_prefix: {
        value: cdktf.stringToHclTerraform(this._hostPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_regex: {
        value: cdktf.stringToHclTerraform(this._hostRegex),
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
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regex: {
        value: cdktf.stringToHclTerraform(this._regex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replace_prefix: {
        value: cdktf.stringToHclTerraform(this._replacePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica: {
        value: cdktf.numberToHclTerraform(this._replica),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workload_link: {
        value: cdktf.stringToHclTerraform(this._workloadLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(domainRouteHeadersToHclTerraform, true)(this._headers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainRouteHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
