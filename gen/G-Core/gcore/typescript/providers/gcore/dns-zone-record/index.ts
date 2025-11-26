// https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * A domain of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#domain DnsZoneRecord#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#id DnsZoneRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A ttl of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#ttl DnsZoneRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * A type of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#type DnsZoneRecord#type}
  */
  readonly type: string;
  /**
  * A zone of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#zone DnsZoneRecord#zone}
  */
  readonly zone: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#filter DnsZoneRecord#filter}
  */
  readonly filter?: DnsZoneRecordFilter[] | cdktf.IResolvable;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#meta DnsZoneRecord#meta}
  */
  readonly meta?: DnsZoneRecordMeta[] | cdktf.IResolvable;
  /**
  * resource_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#resource_record DnsZoneRecord#resource_record}
  */
  readonly resourceRecord: DnsZoneRecordResourceRecord[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#timeouts DnsZoneRecord#timeouts}
  */
  readonly timeouts?: DnsZoneRecordTimeouts;
}
export interface DnsZoneRecordFilter {
  /**
  * A DNS Zone Record filter option that describe how many records will be percolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#limit DnsZoneRecord#limit}
  */
  readonly limit?: number;
  /**
  * A DNS Zone Record filter option that describe possibility to return answers if no records were percolated through filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#strict DnsZoneRecord#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
  /**
  * A DNS Zone Record filter option that describe a name of filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#type DnsZoneRecord#type}
  */
  readonly type: string;
}

export function dnsZoneRecordFilterToTerraform(struct?: DnsZoneRecordFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    strict: cdktf.booleanToTerraform(struct!.strict),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dnsZoneRecordFilterToHclTerraform(struct?: DnsZoneRecordFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict: {
      value: cdktf.booleanToHclTerraform(struct!.strict),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._strict = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._strict = value.strict;
      this._type = value.type;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
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

export class DnsZoneRecordFilterList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordFilter[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordFilterOutputReference {
    return new DnsZoneRecordFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordMetaHealthchecks {
  /**
  * Command to send if protocol=TCP/UDP, maximum length: 255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#command DnsZoneRecord#command}
  */
  readonly command?: string;
  /**
  * Frequency in seconds (10-3600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#frequency DnsZoneRecord#frequency}
  */
  readonly frequency: number;
  /**
  * Request host/virtualhost to send if protocol=HTTP, must be empty for non-HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#host DnsZoneRecord#host}
  */
  readonly host?: string;
  /**
  * Expected status code if protocol=HTTP, must be empty for non-HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#http_status_code DnsZoneRecord#http_status_code}
  */
  readonly httpStatusCode?: number;
  /**
  * HTTP Method required if protocol=HTTP, must be empty for non-HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#method DnsZoneRecord#method}
  */
  readonly method?: string;
  /**
  * Port to check (1-65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#port DnsZoneRecord#port}
  */
  readonly port?: number;
  /**
  * Protocol, possible value: HTTP, TCP, UDP, ICMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#protocol DnsZoneRecord#protocol}
  */
  readonly protocol: string;
  /**
  * HTTP body or response payload to check if protocol<>ICMP, must be empty for ICMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#regexp DnsZoneRecord#regexp}
  */
  readonly regexp?: string;
  /**
  * Timeout in seconds (1-10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#timeout DnsZoneRecord#timeout}
  */
  readonly timeout: number;
  /**
  * TLS/HTTPS enabled if protocol=HTTP, must be empty for non-HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#tls DnsZoneRecord#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * URL path to check required if protocol=HTTP, must be empty for non-HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#url DnsZoneRecord#url}
  */
  readonly url?: string;
}

export function dnsZoneRecordMetaHealthchecksToTerraform(struct?: DnsZoneRecordMetaHealthchecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    host: cdktf.stringToTerraform(struct!.host),
    http_status_code: cdktf.numberToTerraform(struct!.httpStatusCode),
    method: cdktf.stringToTerraform(struct!.method),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tls: cdktf.booleanToTerraform(struct!.tls),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dnsZoneRecordMetaHealthchecksToHclTerraform(struct?: DnsZoneRecordMetaHealthchecks | cdktf.IResolvable): any {
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
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_status_code: {
      value: cdktf.numberToHclTerraform(struct!.httpStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
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
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DnsZoneRecordMetaHealthchecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordMetaHealthchecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatusCode = this._httpStatusCode;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordMetaHealthchecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._frequency = undefined;
      this._host = undefined;
      this._httpStatusCode = undefined;
      this._method = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._regexp = undefined;
      this._timeout = undefined;
      this._tls = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._frequency = value.frequency;
      this._host = value.host;
      this._httpStatusCode = value.httpStatusCode;
      this._method = value.method;
      this._port = value.port;
      this._protocol = value.protocol;
      this._regexp = value.regexp;
      this._timeout = value.timeout;
      this._tls = value.tls;
      this._url = value.url;
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

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // http_status_code - computed: false, optional: true, required: false
  private _httpStatusCode?: number; 
  public get httpStatusCode() {
    return this.getNumberAttribute('http_status_code');
  }
  public set httpStatusCode(value: number) {
    this._httpStatusCode = value;
  }
  public resetHttpStatusCode() {
    this._httpStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusCodeInput() {
    return this._httpStatusCode;
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

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DnsZoneRecordMetaHealthchecksList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordMetaHealthchecks[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordMetaHealthchecksOutputReference {
    return new DnsZoneRecordMetaHealthchecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordMeta {
  /**
  * Cidr mapping rule name of DNS Zone RRSet resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#cidr_mapping DnsZoneRecord#cidr_mapping}
  */
  readonly cidrMapping?: string;
  /**
  * Geodns link (domain, or cl-) of DNS Zone RRSet resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#geodns_link DnsZoneRecord#geodns_link}
  */
  readonly geodnsLink?: string;
  /**
  * healthchecks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#healthchecks DnsZoneRecord#healthchecks}
  */
  readonly healthchecks?: DnsZoneRecordMetaHealthchecks[] | cdktf.IResolvable;
}

export function dnsZoneRecordMetaToTerraform(struct?: DnsZoneRecordMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_mapping: cdktf.stringToTerraform(struct!.cidrMapping),
    geodns_link: cdktf.stringToTerraform(struct!.geodnsLink),
    healthchecks: cdktf.listMapper(dnsZoneRecordMetaHealthchecksToTerraform, true)(struct!.healthchecks),
  }
}


export function dnsZoneRecordMetaToHclTerraform(struct?: DnsZoneRecordMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_mapping: {
      value: cdktf.stringToHclTerraform(struct!.cidrMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geodns_link: {
      value: cdktf.stringToHclTerraform(struct!.geodnsLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthchecks: {
      value: cdktf.listMapperHcl(dnsZoneRecordMetaHealthchecksToHclTerraform, true)(struct!.healthchecks),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordMetaHealthchecksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordMeta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrMapping = this._cidrMapping;
    }
    if (this._geodnsLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.geodnsLink = this._geodnsLink;
    }
    if (this._healthchecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthchecks = this._healthchecks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordMeta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrMapping = undefined;
      this._geodnsLink = undefined;
      this._healthchecks.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrMapping = value.cidrMapping;
      this._geodnsLink = value.geodnsLink;
      this._healthchecks.internalValue = value.healthchecks;
    }
  }

  // cidr_mapping - computed: false, optional: true, required: false
  private _cidrMapping?: string; 
  public get cidrMapping() {
    return this.getStringAttribute('cidr_mapping');
  }
  public set cidrMapping(value: string) {
    this._cidrMapping = value;
  }
  public resetCidrMapping() {
    this._cidrMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrMappingInput() {
    return this._cidrMapping;
  }

  // geodns_link - computed: true, optional: true, required: false
  private _geodnsLink?: string; 
  public get geodnsLink() {
    return this.getStringAttribute('geodns_link');
  }
  public set geodnsLink(value: string) {
    this._geodnsLink = value;
  }
  public resetGeodnsLink() {
    this._geodnsLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geodnsLinkInput() {
    return this._geodnsLink;
  }

  // healthchecks - computed: false, optional: true, required: false
  private _healthchecks = new DnsZoneRecordMetaHealthchecksList(this, "healthchecks", true);
  public get healthchecks() {
    return this._healthchecks;
  }
  public putHealthchecks(value: DnsZoneRecordMetaHealthchecks[] | cdktf.IResolvable) {
    this._healthchecks.internalValue = value;
  }
  public resetHealthchecks() {
    this._healthchecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthchecksInput() {
    return this._healthchecks.internalValue;
  }
}

export class DnsZoneRecordMetaList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordMeta[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordMetaOutputReference {
    return new DnsZoneRecordMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordResourceRecordMeta {
  /**
  * An asn meta (eg. 12345) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#asn DnsZoneRecord#asn}
  */
  readonly asn?: number[];
  /**
  * Set as backup record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#backup DnsZoneRecord#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * A map of CIDR tags for this record, where key is tag name and value is tag value. Example: {"tag_name_1": 10, "tag_name_2": 50}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#cidr_labels DnsZoneRecord#cidr_labels}
  */
  readonly cidrLabels?: { [key: string]: string };
  /**
  * Continents meta (eg. Asia) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#continents DnsZoneRecord#continents}
  */
  readonly continents?: string[];
  /**
  * Countries ISO codes meta (eg. us) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#countries DnsZoneRecord#countries}
  */
  readonly countries?: string[];
  /**
  * Fallback meta equals true marks records which are used as a default answer (when nothing was selected by specified meta fields).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#default DnsZoneRecord#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Computed UUID of failover healtcheck property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#failover DnsZoneRecord#failover}
  */
  readonly failover?: { [key: string]: string };
  /**
  * Set as fallback record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#fallback DnsZoneRecord#fallback}
  */
  readonly fallback?: boolean | cdktf.IResolvable;
  /**
  * An ip meta (eg. 127.0.0.0) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#ip DnsZoneRecord#ip}
  */
  readonly ip?: string[];
  /**
  * A latlong meta (eg. 27.988056, 86.925278) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#latlong DnsZoneRecord#latlong}
  */
  readonly latlong?: number[];
  /**
  * A notes meta (eg. Miami DC) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#notes DnsZoneRecord#notes}
  */
  readonly notes?: string;
  /**
  * A weight for this record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#weight DnsZoneRecord#weight}
  */
  readonly weight?: number;
}

export function dnsZoneRecordResourceRecordMetaToTerraform(struct?: DnsZoneRecordResourceRecordMetaOutputReference | DnsZoneRecordResourceRecordMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asn),
    backup: cdktf.booleanToTerraform(struct!.backup),
    cidr_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cidrLabels),
    continents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.continents),
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    default: cdktf.booleanToTerraform(struct!.default),
    failover: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.failover),
    fallback: cdktf.booleanToTerraform(struct!.fallback),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    latlong: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.latlong),
    notes: cdktf.stringToTerraform(struct!.notes),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dnsZoneRecordResourceRecordMetaToHclTerraform(struct?: DnsZoneRecordResourceRecordMetaOutputReference | DnsZoneRecordResourceRecordMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asn),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cidr_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cidrLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    continents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.continents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failover: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.failover),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    fallback: {
      value: cdktf.booleanToHclTerraform(struct!.fallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    latlong: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.latlong),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordResourceRecordMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsZoneRecordResourceRecordMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._cidrLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrLabels = this._cidrLabels;
    }
    if (this._continents !== undefined) {
      hasAnyValues = true;
      internalValueResult.continents = this._continents;
    }
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._failover !== undefined) {
      hasAnyValues = true;
      internalValueResult.failover = this._failover;
    }
    if (this._fallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._latlong !== undefined) {
      hasAnyValues = true;
      internalValueResult.latlong = this._latlong;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordResourceRecordMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._backup = undefined;
      this._cidrLabels = undefined;
      this._continents = undefined;
      this._countries = undefined;
      this._default = undefined;
      this._failover = undefined;
      this._fallback = undefined;
      this._ip = undefined;
      this._latlong = undefined;
      this._notes = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._backup = value.backup;
      this._cidrLabels = value.cidrLabels;
      this._continents = value.continents;
      this._countries = value.countries;
      this._default = value.default;
      this._failover = value.failover;
      this._fallback = value.fallback;
      this._ip = value.ip;
      this._latlong = value.latlong;
      this._notes = value.notes;
      this._weight = value.weight;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number[]; 
  public get asn() {
    return this.getNumberListAttribute('asn');
  }
  public set asn(value: number[]) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // cidr_labels - computed: false, optional: true, required: false
  private _cidrLabels?: { [key: string]: string }; 
  public get cidrLabels() {
    return this.getStringMapAttribute('cidr_labels');
  }
  public set cidrLabels(value: { [key: string]: string }) {
    this._cidrLabels = value;
  }
  public resetCidrLabels() {
    this._cidrLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrLabelsInput() {
    return this._cidrLabels;
  }

  // continents - computed: false, optional: true, required: false
  private _continents?: string[]; 
  public get continents() {
    return this.getListAttribute('continents');
  }
  public set continents(value: string[]) {
    this._continents = value;
  }
  public resetContinents() {
    this._continents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentsInput() {
    return this._continents;
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
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

  // failover - computed: true, optional: true, required: false
  private _failover?: { [key: string]: string }; 
  public get failover() {
    return this.getStringMapAttribute('failover');
  }
  public set failover(value: { [key: string]: string }) {
    this._failover = value;
  }
  public resetFailover() {
    this._failover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverInput() {
    return this._failover;
  }

  // fallback - computed: false, optional: true, required: false
  private _fallback?: boolean | cdktf.IResolvable; 
  public get fallback() {
    return this.getBooleanAttribute('fallback');
  }
  public set fallback(value: boolean | cdktf.IResolvable) {
    this._fallback = value;
  }
  public resetFallback() {
    this._fallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // latlong - computed: false, optional: true, required: false
  private _latlong?: number[]; 
  public get latlong() {
    return this.getNumberListAttribute('latlong');
  }
  public set latlong(value: number[]) {
    this._latlong = value;
  }
  public resetLatlong() {
    this._latlong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latlongInput() {
    return this._latlong;
  }

  // notes - computed: false, optional: true, required: false
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DnsZoneRecordResourceRecord {
  /**
  * A content of DNS Zone Record resource. (TXT: 'anyString', MX: '50 mail.company.io.', CAA: '0 issue "company.org; account=12345"')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#content DnsZoneRecord#content}
  */
  readonly content: string;
  /**
  * Manage of public appearing of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#enabled DnsZoneRecord#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#meta DnsZoneRecord#meta}
  */
  readonly meta?: DnsZoneRecordResourceRecordMeta;
}

export function dnsZoneRecordResourceRecordToTerraform(struct?: DnsZoneRecordResourceRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    meta: dnsZoneRecordResourceRecordMetaToTerraform(struct!.meta),
  }
}


export function dnsZoneRecordResourceRecordToHclTerraform(struct?: DnsZoneRecordResourceRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    meta: {
      value: dnsZoneRecordResourceRecordMetaToHclTerraform(struct!.meta),
      isBlock: true,
      type: "set",
      storageClassType: "DnsZoneRecordResourceRecordMetaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneRecordResourceRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneRecordResourceRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneRecordResourceRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._enabled = undefined;
      this._meta.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._enabled = value.enabled;
      this._meta.internalValue = value.meta;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // meta - computed: false, optional: true, required: false
  private _meta = new DnsZoneRecordResourceRecordMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DnsZoneRecordResourceRecordMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }
}

export class DnsZoneRecordResourceRecordList extends cdktf.ComplexList {
  public internalValue? : DnsZoneRecordResourceRecord[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneRecordResourceRecordOutputReference {
    return new DnsZoneRecordResourceRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneRecordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#create DnsZoneRecord#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#delete DnsZoneRecord#delete}
  */
  readonly delete?: string;
}

export function dnsZoneRecordTimeoutsToTerraform(struct?: DnsZoneRecordTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function dnsZoneRecordTimeoutsToHclTerraform(struct?: DnsZoneRecordTimeouts | cdktf.IResolvable): any {
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

export class DnsZoneRecordTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsZoneRecordTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsZoneRecordTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record gcore_dns_zone_record}
*/
export class DnsZoneRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_dns_zone_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZoneRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZoneRecord to import
  * @param importFromId The id of the existing DnsZoneRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZoneRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_dns_zone_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.1/docs/resources/dns_zone_record gcore_dns_zone_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_dns_zone_record',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.1',
        providerVersionConstraint: '0.32.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._ttl = config.ttl;
    this._type = config.type;
    this._zone = config.zone;
    this._filter.internalValue = config.filter;
    this._meta.internalValue = config.meta;
    this._resourceRecord.internalValue = config.resourceRecord;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DnsZoneRecordFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DnsZoneRecordFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DnsZoneRecordMetaList(this, "meta", true);
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DnsZoneRecordMeta[] | cdktf.IResolvable) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // resource_record - computed: false, optional: false, required: true
  private _resourceRecord = new DnsZoneRecordResourceRecordList(this, "resource_record", true);
  public get resourceRecord() {
    return this._resourceRecord;
  }
  public putResourceRecord(value: DnsZoneRecordResourceRecord[] | cdktf.IResolvable) {
    this._resourceRecord.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordInput() {
    return this._resourceRecord.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DnsZoneRecordTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DnsZoneRecordTimeouts) {
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
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
      filter: cdktf.listMapper(dnsZoneRecordFilterToTerraform, true)(this._filter.internalValue),
      meta: cdktf.listMapper(dnsZoneRecordMetaToTerraform, true)(this._meta.internalValue),
      resource_record: cdktf.listMapper(dnsZoneRecordResourceRecordToTerraform, true)(this._resourceRecord.internalValue),
      timeouts: dnsZoneRecordTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dnsZoneRecordFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneRecordFilterList",
      },
      meta: {
        value: cdktf.listMapperHcl(dnsZoneRecordMetaToHclTerraform, true)(this._meta.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsZoneRecordMetaList",
      },
      resource_record: {
        value: cdktf.listMapperHcl(dnsZoneRecordResourceRecordToHclTerraform, true)(this._resourceRecord.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsZoneRecordResourceRecordList",
      },
      timeouts: {
        value: dnsZoneRecordTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsZoneRecordTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
