// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#cluster_type WafDomain#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#connection_time WafDomain#connection_time}
  */
  readonly connectionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#domain WafDomain#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#domain_name WafDomain#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#http2_port WafDomain#http2_port}
  */
  readonly http2Port?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#http_port WafDomain#http_port}
  */
  readonly httpPort?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#http_to_user_ip WafDomain#http_to_user_ip}
  */
  readonly httpToUserIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#https_port WafDomain#https_port}
  */
  readonly httpsPort?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#https_redirect WafDomain#https_redirect}
  */
  readonly httpsRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#id WafDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#instance_id WafDomain#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#is_access_product WafDomain#is_access_product}
  */
  readonly isAccessProduct: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#load_balancing WafDomain#load_balancing}
  */
  readonly loadBalancing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#read_time WafDomain#read_time}
  */
  readonly readTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#resource_group_id WafDomain#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#source_ips WafDomain#source_ips}
  */
  readonly sourceIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#write_time WafDomain#write_time}
  */
  readonly writeTime?: number;
  /**
  * log_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#log_headers WafDomain#log_headers}
  */
  readonly logHeaders?: WafDomainLogHeaders[] | cdktf.IResolvable;
}
export interface WafDomainLogHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#key WafDomain#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#value WafDomain#value}
  */
  readonly value?: string;
}

export function wafDomainLogHeadersToTerraform(struct?: WafDomainLogHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wafDomainLogHeadersToHclTerraform(struct?: WafDomainLogHeaders | cdktf.IResolvable): any {
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

export class WafDomainLogHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafDomainLogHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WafDomainLogHeaders | cdktf.IResolvable | undefined) {
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

export class WafDomainLogHeadersList extends cdktf.ComplexList {
  public internalValue? : WafDomainLogHeaders[] | cdktf.IResolvable

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
  public get(index: number): WafDomainLogHeadersOutputReference {
    return new WafDomainLogHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain alicloud_waf_domain}
*/
export class WafDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_waf_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafDomain to import
  * @param importFromId The id of the existing WafDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_waf_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/waf_domain alicloud_waf_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafDomainConfig
  */
  public constructor(scope: Construct, id: string, config: WafDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_waf_domain',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterType = config.clusterType;
    this._connectionTime = config.connectionTime;
    this._domain = config.domain;
    this._domainName = config.domainName;
    this._http2Port = config.http2Port;
    this._httpPort = config.httpPort;
    this._httpToUserIp = config.httpToUserIp;
    this._httpsPort = config.httpsPort;
    this._httpsRedirect = config.httpsRedirect;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isAccessProduct = config.isAccessProduct;
    this._loadBalancing = config.loadBalancing;
    this._readTime = config.readTime;
    this._resourceGroupId = config.resourceGroupId;
    this._sourceIps = config.sourceIps;
    this._writeTime = config.writeTime;
    this._logHeaders.internalValue = config.logHeaders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // connection_time - computed: false, optional: true, required: false
  private _connectionTime?: number; 
  public get connectionTime() {
    return this.getNumberAttribute('connection_time');
  }
  public set connectionTime(value: number) {
    this._connectionTime = value;
  }
  public resetConnectionTime() {
    this._connectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeInput() {
    return this._connectionTime;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // http2_port - computed: false, optional: true, required: false
  private _http2Port?: string[]; 
  public get http2Port() {
    return cdktf.Fn.tolist(this.getListAttribute('http2_port'));
  }
  public set http2Port(value: string[]) {
    this._http2Port = value;
  }
  public resetHttp2Port() {
    this._http2Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2PortInput() {
    return this._http2Port;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: string[]; 
  public get httpPort() {
    return cdktf.Fn.tolist(this.getListAttribute('http_port'));
  }
  public set httpPort(value: string[]) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // http_to_user_ip - computed: false, optional: true, required: false
  private _httpToUserIp?: string; 
  public get httpToUserIp() {
    return this.getStringAttribute('http_to_user_ip');
  }
  public set httpToUserIp(value: string) {
    this._httpToUserIp = value;
  }
  public resetHttpToUserIp() {
    this._httpToUserIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpToUserIpInput() {
    return this._httpToUserIp;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: string[]; 
  public get httpsPort() {
    return cdktf.Fn.tolist(this.getListAttribute('https_port'));
  }
  public set httpsPort(value: string[]) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // https_redirect - computed: false, optional: true, required: false
  private _httpsRedirect?: string; 
  public get httpsRedirect() {
    return this.getStringAttribute('https_redirect');
  }
  public set httpsRedirect(value: string) {
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_access_product - computed: false, optional: false, required: true
  private _isAccessProduct?: string; 
  public get isAccessProduct() {
    return this.getStringAttribute('is_access_product');
  }
  public set isAccessProduct(value: string) {
    this._isAccessProduct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAccessProductInput() {
    return this._isAccessProduct;
  }

  // load_balancing - computed: false, optional: true, required: false
  private _loadBalancing?: string; 
  public get loadBalancing() {
    return this.getStringAttribute('load_balancing');
  }
  public set loadBalancing(value: string) {
    this._loadBalancing = value;
  }
  public resetLoadBalancing() {
    this._loadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingInput() {
    return this._loadBalancing;
  }

  // read_time - computed: false, optional: true, required: false
  private _readTime?: number; 
  public get readTime() {
    return this.getNumberAttribute('read_time');
  }
  public set readTime(value: number) {
    this._readTime = value;
  }
  public resetReadTime() {
    this._readTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeInput() {
    return this._readTime;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // source_ips - computed: false, optional: true, required: false
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ips'));
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  public resetSourceIps() {
    this._sourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }

  // write_time - computed: false, optional: true, required: false
  private _writeTime?: number; 
  public get writeTime() {
    return this.getNumberAttribute('write_time');
  }
  public set writeTime(value: number) {
    this._writeTime = value;
  }
  public resetWriteTime() {
    this._writeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeTimeInput() {
    return this._writeTime;
  }

  // log_headers - computed: false, optional: true, required: false
  private _logHeaders = new WafDomainLogHeadersList(this, "log_headers", true);
  public get logHeaders() {
    return this._logHeaders;
  }
  public putLogHeaders(value: WafDomainLogHeaders[] | cdktf.IResolvable) {
    this._logHeaders.internalValue = value;
  }
  public resetLogHeaders() {
    this._logHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHeadersInput() {
    return this._logHeaders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      connection_time: cdktf.numberToTerraform(this._connectionTime),
      domain: cdktf.stringToTerraform(this._domain),
      domain_name: cdktf.stringToTerraform(this._domainName),
      http2_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._http2Port),
      http_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpPort),
      http_to_user_ip: cdktf.stringToTerraform(this._httpToUserIp),
      https_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpsPort),
      https_redirect: cdktf.stringToTerraform(this._httpsRedirect),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_access_product: cdktf.stringToTerraform(this._isAccessProduct),
      load_balancing: cdktf.stringToTerraform(this._loadBalancing),
      read_time: cdktf.numberToTerraform(this._readTime),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIps),
      write_time: cdktf.numberToTerraform(this._writeTime),
      log_headers: cdktf.listMapper(wafDomainLogHeadersToTerraform, true)(this._logHeaders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_time: {
        value: cdktf.numberToHclTerraform(this._connectionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._http2Port),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpPort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_to_user_ip: {
        value: cdktf.stringToHclTerraform(this._httpToUserIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpsPort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      https_redirect: {
        value: cdktf.stringToHclTerraform(this._httpsRedirect),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_access_product: {
        value: cdktf.stringToHclTerraform(this._isAccessProduct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancing: {
        value: cdktf.stringToHclTerraform(this._loadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_time: {
        value: cdktf.numberToHclTerraform(this._readTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      write_time: {
        value: cdktf.numberToHclTerraform(this._writeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_headers: {
        value: cdktf.listMapperHcl(wafDomainLogHeadersToHclTerraform, true)(this._logHeaders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafDomainLogHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
