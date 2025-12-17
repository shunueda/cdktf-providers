import * as cdktf from 'cdktf';
export interface ApplicationprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#version Applicationprofile#version}
  */
  readonly version?: string;
}

export function applicationprofileConfigpbAttributesToTerraform(struct?: ApplicationprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function applicationprofileConfigpbAttributesToHclTerraform(struct?: ApplicationprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ApplicationprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
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

export class ApplicationprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileConfigpbAttributesOutputReference {
    return new ApplicationprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDnsServiceProfileDnsZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#admin_email Applicationprofile#admin_email}
  */
  readonly adminEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#domain_name Applicationprofile#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name_server Applicationprofile#name_server}
  */
  readonly nameServer?: string;
}

export function applicationprofileDnsServiceProfileDnsZonesToTerraform(struct?: ApplicationprofileDnsServiceProfileDnsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    name_server: cdktf.stringToTerraform(struct!.nameServer),
  }
}


export function applicationprofileDnsServiceProfileDnsZonesToHclTerraform(struct?: ApplicationprofileDnsServiceProfileDnsZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_server: {
      value: cdktf.stringToHclTerraform(struct!.nameServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDnsServiceProfileDnsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDnsServiceProfileDnsZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._nameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServer = this._nameServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDnsServiceProfileDnsZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminEmail = undefined;
      this._domainName = undefined;
      this._nameServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminEmail = value.adminEmail;
      this._domainName = value.domainName;
      this._nameServer = value.nameServer;
    }
  }

  // admin_email - computed: true, optional: true, required: false
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  public resetAdminEmail() {
    this._adminEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // name_server - computed: true, optional: true, required: false
  private _nameServer?: string; 
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }
  public set nameServer(value: string) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }
}

export class ApplicationprofileDnsServiceProfileDnsZonesList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDnsServiceProfileDnsZones[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDnsServiceProfileDnsZonesOutputReference {
    return new ApplicationprofileDnsServiceProfileDnsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDnsServiceProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#aaaa_empty_response Applicationprofile#aaaa_empty_response}
  */
  readonly aaaaEmptyResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#admin_email Applicationprofile#admin_email}
  */
  readonly adminEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#client_dns_tcp_request_timeout Applicationprofile#client_dns_tcp_request_timeout}
  */
  readonly clientDnsTcpRequestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#close_tcp_connection_post_response Applicationprofile#close_tcp_connection_post_response}
  */
  readonly closeTcpConnectionPostResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#dns_over_tcp_enabled Applicationprofile#dns_over_tcp_enabled}
  */
  readonly dnsOverTcpEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#domain_names Applicationprofile#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#ecs_stripping_enabled Applicationprofile#ecs_stripping_enabled}
  */
  readonly ecsStrippingEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#edns Applicationprofile#edns}
  */
  readonly edns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#edns_client_subnet_prefix_len Applicationprofile#edns_client_subnet_prefix_len}
  */
  readonly ednsClientSubnetPrefixLen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#error_response Applicationprofile#error_response}
  */
  readonly errorResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name_server Applicationprofile#name_server}
  */
  readonly nameServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#negative_caching_ttl Applicationprofile#negative_caching_ttl}
  */
  readonly negativeCachingTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#num_dns_ip Applicationprofile#num_dns_ip}
  */
  readonly numDnsIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#ttl Applicationprofile#ttl}
  */
  readonly ttl?: string;
  /**
  * dns_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#dns_zones Applicationprofile#dns_zones}
  */
  readonly dnsZones?: ApplicationprofileDnsServiceProfileDnsZones[] | cdktf.IResolvable;
}

export function applicationprofileDnsServiceProfileToTerraform(struct?: ApplicationprofileDnsServiceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aaaa_empty_response: cdktf.stringToTerraform(struct!.aaaaEmptyResponse),
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    client_dns_tcp_request_timeout: cdktf.stringToTerraform(struct!.clientDnsTcpRequestTimeout),
    close_tcp_connection_post_response: cdktf.stringToTerraform(struct!.closeTcpConnectionPostResponse),
    dns_over_tcp_enabled: cdktf.stringToTerraform(struct!.dnsOverTcpEnabled),
    domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNames),
    ecs_stripping_enabled: cdktf.stringToTerraform(struct!.ecsStrippingEnabled),
    edns: cdktf.stringToTerraform(struct!.edns),
    edns_client_subnet_prefix_len: cdktf.stringToTerraform(struct!.ednsClientSubnetPrefixLen),
    error_response: cdktf.stringToTerraform(struct!.errorResponse),
    name_server: cdktf.stringToTerraform(struct!.nameServer),
    negative_caching_ttl: cdktf.stringToTerraform(struct!.negativeCachingTtl),
    num_dns_ip: cdktf.stringToTerraform(struct!.numDnsIp),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    dns_zones: cdktf.listMapper(applicationprofileDnsServiceProfileDnsZonesToTerraform, true)(struct!.dnsZones),
  }
}


export function applicationprofileDnsServiceProfileToHclTerraform(struct?: ApplicationprofileDnsServiceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aaaa_empty_response: {
      value: cdktf.stringToHclTerraform(struct!.aaaaEmptyResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_dns_tcp_request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.clientDnsTcpRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    close_tcp_connection_post_response: {
      value: cdktf.stringToHclTerraform(struct!.closeTcpConnectionPostResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_over_tcp_enabled: {
      value: cdktf.stringToHclTerraform(struct!.dnsOverTcpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ecs_stripping_enabled: {
      value: cdktf.stringToHclTerraform(struct!.ecsStrippingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edns: {
      value: cdktf.stringToHclTerraform(struct!.edns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edns_client_subnet_prefix_len: {
      value: cdktf.stringToHclTerraform(struct!.ednsClientSubnetPrefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_response: {
      value: cdktf.stringToHclTerraform(struct!.errorResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_server: {
      value: cdktf.stringToHclTerraform(struct!.nameServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negative_caching_ttl: {
      value: cdktf.stringToHclTerraform(struct!.negativeCachingTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_dns_ip: {
      value: cdktf.stringToHclTerraform(struct!.numDnsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_zones: {
      value: cdktf.listMapperHcl(applicationprofileDnsServiceProfileDnsZonesToHclTerraform, true)(struct!.dnsZones),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDnsServiceProfileDnsZonesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDnsServiceProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDnsServiceProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aaaaEmptyResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaaEmptyResponse = this._aaaaEmptyResponse;
    }
    if (this._adminEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmail = this._adminEmail;
    }
    if (this._clientDnsTcpRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDnsTcpRequestTimeout = this._clientDnsTcpRequestTimeout;
    }
    if (this._closeTcpConnectionPostResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeTcpConnectionPostResponse = this._closeTcpConnectionPostResponse;
    }
    if (this._dnsOverTcpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOverTcpEnabled = this._dnsOverTcpEnabled;
    }
    if (this._domainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNames = this._domainNames;
    }
    if (this._ecsStrippingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsStrippingEnabled = this._ecsStrippingEnabled;
    }
    if (this._edns !== undefined) {
      hasAnyValues = true;
      internalValueResult.edns = this._edns;
    }
    if (this._ednsClientSubnetPrefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsClientSubnetPrefixLen = this._ednsClientSubnetPrefixLen;
    }
    if (this._errorResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponse = this._errorResponse;
    }
    if (this._nameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServer = this._nameServer;
    }
    if (this._negativeCachingTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeCachingTtl = this._negativeCachingTtl;
    }
    if (this._numDnsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDnsIp = this._numDnsIp;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._dnsZones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZones = this._dnsZones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDnsServiceProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aaaaEmptyResponse = undefined;
      this._adminEmail = undefined;
      this._clientDnsTcpRequestTimeout = undefined;
      this._closeTcpConnectionPostResponse = undefined;
      this._dnsOverTcpEnabled = undefined;
      this._domainNames = undefined;
      this._ecsStrippingEnabled = undefined;
      this._edns = undefined;
      this._ednsClientSubnetPrefixLen = undefined;
      this._errorResponse = undefined;
      this._nameServer = undefined;
      this._negativeCachingTtl = undefined;
      this._numDnsIp = undefined;
      this._ttl = undefined;
      this._dnsZones.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aaaaEmptyResponse = value.aaaaEmptyResponse;
      this._adminEmail = value.adminEmail;
      this._clientDnsTcpRequestTimeout = value.clientDnsTcpRequestTimeout;
      this._closeTcpConnectionPostResponse = value.closeTcpConnectionPostResponse;
      this._dnsOverTcpEnabled = value.dnsOverTcpEnabled;
      this._domainNames = value.domainNames;
      this._ecsStrippingEnabled = value.ecsStrippingEnabled;
      this._edns = value.edns;
      this._ednsClientSubnetPrefixLen = value.ednsClientSubnetPrefixLen;
      this._errorResponse = value.errorResponse;
      this._nameServer = value.nameServer;
      this._negativeCachingTtl = value.negativeCachingTtl;
      this._numDnsIp = value.numDnsIp;
      this._ttl = value.ttl;
      this._dnsZones.internalValue = value.dnsZones;
    }
  }

  // aaaa_empty_response - computed: false, optional: true, required: false
  private _aaaaEmptyResponse?: string; 
  public get aaaaEmptyResponse() {
    return this.getStringAttribute('aaaa_empty_response');
  }
  public set aaaaEmptyResponse(value: string) {
    this._aaaaEmptyResponse = value;
  }
  public resetAaaaEmptyResponse() {
    this._aaaaEmptyResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaEmptyResponseInput() {
    return this._aaaaEmptyResponse;
  }

  // admin_email - computed: false, optional: true, required: false
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  public resetAdminEmail() {
    this._adminEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // client_dns_tcp_request_timeout - computed: false, optional: true, required: false
  private _clientDnsTcpRequestTimeout?: string; 
  public get clientDnsTcpRequestTimeout() {
    return this.getStringAttribute('client_dns_tcp_request_timeout');
  }
  public set clientDnsTcpRequestTimeout(value: string) {
    this._clientDnsTcpRequestTimeout = value;
  }
  public resetClientDnsTcpRequestTimeout() {
    this._clientDnsTcpRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDnsTcpRequestTimeoutInput() {
    return this._clientDnsTcpRequestTimeout;
  }

  // close_tcp_connection_post_response - computed: false, optional: true, required: false
  private _closeTcpConnectionPostResponse?: string; 
  public get closeTcpConnectionPostResponse() {
    return this.getStringAttribute('close_tcp_connection_post_response');
  }
  public set closeTcpConnectionPostResponse(value: string) {
    this._closeTcpConnectionPostResponse = value;
  }
  public resetCloseTcpConnectionPostResponse() {
    this._closeTcpConnectionPostResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeTcpConnectionPostResponseInput() {
    return this._closeTcpConnectionPostResponse;
  }

  // dns_over_tcp_enabled - computed: false, optional: true, required: false
  private _dnsOverTcpEnabled?: string; 
  public get dnsOverTcpEnabled() {
    return this.getStringAttribute('dns_over_tcp_enabled');
  }
  public set dnsOverTcpEnabled(value: string) {
    this._dnsOverTcpEnabled = value;
  }
  public resetDnsOverTcpEnabled() {
    this._dnsOverTcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOverTcpEnabledInput() {
    return this._dnsOverTcpEnabled;
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // ecs_stripping_enabled - computed: false, optional: true, required: false
  private _ecsStrippingEnabled?: string; 
  public get ecsStrippingEnabled() {
    return this.getStringAttribute('ecs_stripping_enabled');
  }
  public set ecsStrippingEnabled(value: string) {
    this._ecsStrippingEnabled = value;
  }
  public resetEcsStrippingEnabled() {
    this._ecsStrippingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsStrippingEnabledInput() {
    return this._ecsStrippingEnabled;
  }

  // edns - computed: false, optional: true, required: false
  private _edns?: string; 
  public get edns() {
    return this.getStringAttribute('edns');
  }
  public set edns(value: string) {
    this._edns = value;
  }
  public resetEdns() {
    this._edns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsInput() {
    return this._edns;
  }

  // edns_client_subnet_prefix_len - computed: true, optional: true, required: false
  private _ednsClientSubnetPrefixLen?: string; 
  public get ednsClientSubnetPrefixLen() {
    return this.getStringAttribute('edns_client_subnet_prefix_len');
  }
  public set ednsClientSubnetPrefixLen(value: string) {
    this._ednsClientSubnetPrefixLen = value;
  }
  public resetEdnsClientSubnetPrefixLen() {
    this._ednsClientSubnetPrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsClientSubnetPrefixLenInput() {
    return this._ednsClientSubnetPrefixLen;
  }

  // error_response - computed: false, optional: true, required: false
  private _errorResponse?: string; 
  public get errorResponse() {
    return this.getStringAttribute('error_response');
  }
  public set errorResponse(value: string) {
    this._errorResponse = value;
  }
  public resetErrorResponse() {
    this._errorResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseInput() {
    return this._errorResponse;
  }

  // name_server - computed: true, optional: true, required: false
  private _nameServer?: string; 
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }
  public set nameServer(value: string) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }

  // negative_caching_ttl - computed: false, optional: true, required: false
  private _negativeCachingTtl?: string; 
  public get negativeCachingTtl() {
    return this.getStringAttribute('negative_caching_ttl');
  }
  public set negativeCachingTtl(value: string) {
    this._negativeCachingTtl = value;
  }
  public resetNegativeCachingTtl() {
    this._negativeCachingTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCachingTtlInput() {
    return this._negativeCachingTtl;
  }

  // num_dns_ip - computed: false, optional: true, required: false
  private _numDnsIp?: string; 
  public get numDnsIp() {
    return this.getStringAttribute('num_dns_ip');
  }
  public set numDnsIp(value: string) {
    this._numDnsIp = value;
  }
  public resetNumDnsIp() {
    this._numDnsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDnsIpInput() {
    return this._numDnsIp;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // dns_zones - computed: false, optional: true, required: false
  private _dnsZones = new ApplicationprofileDnsServiceProfileDnsZonesList(this, "dns_zones", false);
  public get dnsZones() {
    return this._dnsZones;
  }
  public putDnsZones(value: ApplicationprofileDnsServiceProfileDnsZones[] | cdktf.IResolvable) {
    this._dnsZones.internalValue = value;
  }
  public resetDnsZones() {
    this._dnsZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZonesInput() {
    return this._dnsZones.internalValue;
  }
}

export class ApplicationprofileDnsServiceProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDnsServiceProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDnsServiceProfileOutputReference {
    return new ApplicationprofileDnsServiceProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileDosProfileThreshInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#attack Applicationprofile#attack}
  */
  readonly attack: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#max_value Applicationprofile#max_value}
  */
  readonly maxValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#min_value Applicationprofile#min_value}
  */
  readonly minValue: string;
}

export function applicationprofileDosRlProfileDosProfileThreshInfoToTerraform(struct?: ApplicationprofileDosRlProfileDosProfileThreshInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack: cdktf.stringToTerraform(struct!.attack),
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
  }
}


export function applicationprofileDosRlProfileDosProfileThreshInfoToHclTerraform(struct?: ApplicationprofileDosRlProfileDosProfileThreshInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack: {
      value: cdktf.stringToHclTerraform(struct!.attack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_value: {
      value: cdktf.stringToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_value: {
      value: cdktf.stringToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileDosProfileThreshInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileDosProfileThreshInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attack !== undefined) {
      hasAnyValues = true;
      internalValueResult.attack = this._attack;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileDosProfileThreshInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attack = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attack = value.attack;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // attack - computed: false, optional: false, required: true
  private _attack?: string; 
  public get attack() {
    return this.getStringAttribute('attack');
  }
  public set attack(value: string) {
    this._attack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackInput() {
    return this._attack;
  }

  // max_value - computed: false, optional: false, required: true
  private _maxValue?: string; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string) {
    this._maxValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: false, required: true
  private _minValue?: string; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string) {
    this._minValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}

export class ApplicationprofileDosRlProfileDosProfileThreshInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileDosProfileThreshInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileDosProfileThreshInfoOutputReference {
    return new ApplicationprofileDosRlProfileDosProfileThreshInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileDosProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#thresh_period Applicationprofile#thresh_period}
  */
  readonly threshPeriod: string;
  /**
  * thresh_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#thresh_info Applicationprofile#thresh_info}
  */
  readonly threshInfo?: ApplicationprofileDosRlProfileDosProfileThreshInfo[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileDosProfileToTerraform(struct?: ApplicationprofileDosRlProfileDosProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    thresh_period: cdktf.stringToTerraform(struct!.threshPeriod),
    thresh_info: cdktf.listMapper(applicationprofileDosRlProfileDosProfileThreshInfoToTerraform, true)(struct!.threshInfo),
  }
}


export function applicationprofileDosRlProfileDosProfileToHclTerraform(struct?: ApplicationprofileDosRlProfileDosProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    thresh_period: {
      value: cdktf.stringToHclTerraform(struct!.threshPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thresh_info: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileDosProfileThreshInfoToHclTerraform, true)(struct!.threshInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileDosProfileThreshInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileDosProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileDosProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshPeriod = this._threshPeriod;
    }
    if (this._threshInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshInfo = this._threshInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileDosProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshPeriod = undefined;
      this._threshInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshPeriod = value.threshPeriod;
      this._threshInfo.internalValue = value.threshInfo;
    }
  }

  // thresh_period - computed: false, optional: false, required: true
  private _threshPeriod?: string; 
  public get threshPeriod() {
    return this.getStringAttribute('thresh_period');
  }
  public set threshPeriod(value: string) {
    this._threshPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threshPeriodInput() {
    return this._threshPeriod;
  }

  // thresh_info - computed: false, optional: true, required: false
  private _threshInfo = new ApplicationprofileDosRlProfileDosProfileThreshInfoList(this, "thresh_info", false);
  public get threshInfo() {
    return this._threshInfo;
  }
  public putThreshInfo(value: ApplicationprofileDosRlProfileDosProfileThreshInfo[] | cdktf.IResolvable) {
    this._threshInfo.internalValue = value;
  }
  public resetThreshInfo() {
    this._threshInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threshInfoInput() {
    return this._threshInfo.internalValue;
  }
}

export class ApplicationprofileDosRlProfileDosProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileDosProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileDosProfileOutputReference {
    return new ApplicationprofileDosRlProfileDosProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
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
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileUriRequestsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#content_type Applicationprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_content Applicationprofile#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#file_length Applicationprofile#file_length}
  */
  readonly fileLength?: string;
}

export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile | cdktf.IResolvable): any {
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
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#end_index Applicationprofile#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#start_index Applicationprofile#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#str_value Applicationprofile#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/applicationprofile#tokens Applicationprofile#tokens}
  */
  readonly tokens: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokens: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
