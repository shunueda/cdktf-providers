// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSegmentPraConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#bypass_on_reauth ApplicationSegmentPra#bypass_on_reauth}
  */
  readonly bypassOnReauth?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether users can bypass ZPA to access applications. Default: NEVER. Supported values: ALWAYS, NEVER, ON_NET. The value NEVER indicates the use of the client forwarding policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#bypass_type ApplicationSegmentPra#bypass_type}
  */
  readonly bypassType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#config_space ApplicationSegmentPra#config_space}
  */
  readonly configSpace?: string;
  /**
  * Description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#description ApplicationSegmentPra#description}
  */
  readonly description?: string;
  /**
  * List of domains and IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#domain_names ApplicationSegmentPra#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Whether Double Encryption is enabled or disabled for the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#double_encrypt ApplicationSegmentPra#double_encrypt}
  */
  readonly doubleEncrypt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#enabled ApplicationSegmentPra#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#fqdn_dns_check ApplicationSegmentPra#fqdn_dns_check}
  */
  readonly fqdnDnsCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#health_check_type ApplicationSegmentPra#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Whether health reporting for the app is Continuous or On Access. Supported values: NONE, ON_ACCESS, CONTINUOUS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#health_reporting ApplicationSegmentPra#health_reporting}
  */
  readonly healthReporting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#icmp_access_type ApplicationSegmentPra#icmp_access_type}
  */
  readonly icmpAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#ip_anchored ApplicationSegmentPra#ip_anchored}
  */
  readonly ipAnchored?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the Zscaler Client Connector (formerly Zscaler App or Z App) receives CNAME DNS records from the connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#is_cname_enabled ApplicationSegmentPra#is_cname_enabled}
  */
  readonly isCnameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#is_incomplete_dr_config ApplicationSegmentPra#is_incomplete_dr_config}
  */
  readonly isIncompleteDrConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#microtenant_id ApplicationSegmentPra#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#name ApplicationSegmentPra#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#passive_health_enabled ApplicationSegmentPra#passive_health_enabled}
  */
  readonly passiveHealthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#segment_group_id ApplicationSegmentPra#segment_group_id}
  */
  readonly segmentGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#select_connector_close_to_app ApplicationSegmentPra#select_connector_close_to_app}
  */
  readonly selectConnectorCloseToApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#tcp_keep_alive ApplicationSegmentPra#tcp_keep_alive}
  */
  readonly tcpKeepAlive?: string;
  /**
  * tcp port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#tcp_port_range ApplicationSegmentPra#tcp_port_range}
  */
  readonly tcpPortRange?: ApplicationSegmentPraTcpPortRange[] | cdktf.IResolvable;
  /**
  * TCP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#tcp_port_ranges ApplicationSegmentPra#tcp_port_ranges}
  */
  readonly tcpPortRanges?: string[];
  /**
  * udp port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#udp_port_range ApplicationSegmentPra#udp_port_range}
  */
  readonly udpPortRange?: ApplicationSegmentPraUdpPortRange[] | cdktf.IResolvable;
  /**
  * UDP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#udp_port_ranges ApplicationSegmentPra#udp_port_ranges}
  */
  readonly udpPortRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#use_in_dr_mode ApplicationSegmentPra#use_in_dr_mode}
  */
  readonly useInDrMode?: boolean | cdktf.IResolvable;
  /**
  * common_apps_dto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#common_apps_dto ApplicationSegmentPra#common_apps_dto}
  */
  readonly commonAppsDto?: ApplicationSegmentPraCommonAppsDto[] | cdktf.IResolvable;
  /**
  * server_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#server_groups ApplicationSegmentPra#server_groups}
  */
  readonly serverGroups?: ApplicationSegmentPraServerGroups[] | cdktf.IResolvable;
  /**
  * zpn_er_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#zpn_er_id ApplicationSegmentPra#zpn_er_id}
  */
  readonly zpnErId?: ApplicationSegmentPraZpnErId[] | cdktf.IResolvable;
}
export interface ApplicationSegmentPraTcpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#from ApplicationSegmentPra#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#to ApplicationSegmentPra#to}
  */
  readonly to?: string;
}

export function applicationSegmentPraTcpPortRangeToTerraform(struct?: ApplicationSegmentPraTcpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function applicationSegmentPraTcpPortRangeToHclTerraform(struct?: ApplicationSegmentPraTcpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ApplicationSegmentPraTcpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentPraTcpPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSegmentPraTcpPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: true, optional: true, required: false
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

  // to - computed: true, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ApplicationSegmentPraTcpPortRangeList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentPraTcpPortRange[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentPraTcpPortRangeOutputReference {
    return new ApplicationSegmentPraTcpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentPraUdpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#from ApplicationSegmentPra#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#to ApplicationSegmentPra#to}
  */
  readonly to?: string;
}

export function applicationSegmentPraUdpPortRangeToTerraform(struct?: ApplicationSegmentPraUdpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function applicationSegmentPraUdpPortRangeToHclTerraform(struct?: ApplicationSegmentPraUdpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ApplicationSegmentPraUdpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentPraUdpPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSegmentPraUdpPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: true, optional: true, required: false
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

  // to - computed: true, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ApplicationSegmentPraUdpPortRangeList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentPraUdpPortRange[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentPraUdpPortRangeOutputReference {
    return new ApplicationSegmentPraUdpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentPraCommonAppsDtoAppsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#app_types ApplicationSegmentPra#app_types}
  */
  readonly appTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#application_port ApplicationSegmentPra#application_port}
  */
  readonly applicationPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#application_protocol ApplicationSegmentPra#application_protocol}
  */
  readonly applicationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#connection_security ApplicationSegmentPra#connection_security}
  */
  readonly connectionSecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#domain ApplicationSegmentPra#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#name ApplicationSegmentPra#name}
  */
  readonly name?: string;
}

export function applicationSegmentPraCommonAppsDtoAppsConfigToTerraform(struct?: ApplicationSegmentPraCommonAppsDtoAppsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appTypes),
    application_port: cdktf.stringToTerraform(struct!.applicationPort),
    application_protocol: cdktf.stringToTerraform(struct!.applicationProtocol),
    connection_security: cdktf.stringToTerraform(struct!.connectionSecurity),
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applicationSegmentPraCommonAppsDtoAppsConfigToHclTerraform(struct?: ApplicationSegmentPraCommonAppsDtoAppsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    application_port: {
      value: cdktf.stringToHclTerraform(struct!.applicationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_protocol: {
      value: cdktf.stringToHclTerraform(struct!.applicationProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_security: {
      value: cdktf.stringToHclTerraform(struct!.connectionSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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

export class ApplicationSegmentPraCommonAppsDtoAppsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentPraCommonAppsDtoAppsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTypes = this._appTypes;
    }
    if (this._applicationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationPort = this._applicationPort;
    }
    if (this._applicationProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationProtocol = this._applicationProtocol;
    }
    if (this._connectionSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionSecurity = this._connectionSecurity;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSegmentPraCommonAppsDtoAppsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appTypes = undefined;
      this._applicationPort = undefined;
      this._applicationProtocol = undefined;
      this._connectionSecurity = undefined;
      this._domain = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appTypes = value.appTypes;
      this._applicationPort = value.applicationPort;
      this._applicationProtocol = value.applicationProtocol;
      this._connectionSecurity = value.connectionSecurity;
      this._domain = value.domain;
      this._name = value.name;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_types - computed: true, optional: true, required: false
  private _appTypes?: string[]; 
  public get appTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('app_types'));
  }
  public set appTypes(value: string[]) {
    this._appTypes = value;
  }
  public resetAppTypes() {
    this._appTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypesInput() {
    return this._appTypes;
  }

  // application_port - computed: true, optional: true, required: false
  private _applicationPort?: string; 
  public get applicationPort() {
    return this.getStringAttribute('application_port');
  }
  public set applicationPort(value: string) {
    this._applicationPort = value;
  }
  public resetApplicationPort() {
    this._applicationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPortInput() {
    return this._applicationPort;
  }

  // application_protocol - computed: false, optional: true, required: false
  private _applicationProtocol?: string; 
  public get applicationProtocol() {
    return this.getStringAttribute('application_protocol');
  }
  public set applicationProtocol(value: string) {
    this._applicationProtocol = value;
  }
  public resetApplicationProtocol() {
    this._applicationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProtocolInput() {
    return this._applicationProtocol;
  }

  // connection_security - computed: false, optional: true, required: false
  private _connectionSecurity?: string; 
  public get connectionSecurity() {
    return this.getStringAttribute('connection_security');
  }
  public set connectionSecurity(value: string) {
    this._connectionSecurity = value;
  }
  public resetConnectionSecurity() {
    this._connectionSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSecurityInput() {
    return this._connectionSecurity;
  }

  // domain - computed: false, optional: true, required: false
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

  // pra_app_id - computed: true, optional: false, required: false
  public get praAppId() {
    return this.getStringAttribute('pra_app_id');
  }
}

export class ApplicationSegmentPraCommonAppsDtoAppsConfigList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentPraCommonAppsDtoAppsConfig[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentPraCommonAppsDtoAppsConfigOutputReference {
    return new ApplicationSegmentPraCommonAppsDtoAppsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentPraCommonAppsDto {
  /**
  * apps_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#apps_config ApplicationSegmentPra#apps_config}
  */
  readonly appsConfig?: ApplicationSegmentPraCommonAppsDtoAppsConfig[] | cdktf.IResolvable;
}

export function applicationSegmentPraCommonAppsDtoToTerraform(struct?: ApplicationSegmentPraCommonAppsDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps_config: cdktf.listMapper(applicationSegmentPraCommonAppsDtoAppsConfigToTerraform, true)(struct!.appsConfig),
  }
}


export function applicationSegmentPraCommonAppsDtoToHclTerraform(struct?: ApplicationSegmentPraCommonAppsDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps_config: {
      value: cdktf.listMapperHcl(applicationSegmentPraCommonAppsDtoAppsConfigToHclTerraform, true)(struct!.appsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSegmentPraCommonAppsDtoAppsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSegmentPraCommonAppsDtoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentPraCommonAppsDto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appsConfig = this._appsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSegmentPraCommonAppsDto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appsConfig.internalValue = value.appsConfig;
    }
  }

  // apps_config - computed: false, optional: true, required: false
  private _appsConfig = new ApplicationSegmentPraCommonAppsDtoAppsConfigList(this, "apps_config", false);
  public get appsConfig() {
    return this._appsConfig;
  }
  public putAppsConfig(value: ApplicationSegmentPraCommonAppsDtoAppsConfig[] | cdktf.IResolvable) {
    this._appsConfig.internalValue = value;
  }
  public resetAppsConfig() {
    this._appsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsConfigInput() {
    return this._appsConfig.internalValue;
  }
}

export class ApplicationSegmentPraCommonAppsDtoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentPraCommonAppsDto[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentPraCommonAppsDtoOutputReference {
    return new ApplicationSegmentPraCommonAppsDtoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentPraServerGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#id ApplicationSegmentPra#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function applicationSegmentPraServerGroupsToTerraform(struct?: ApplicationSegmentPraServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function applicationSegmentPraServerGroupsToHclTerraform(struct?: ApplicationSegmentPraServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSegmentPraServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentPraServerGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentPraServerGroups | cdktf.IResolvable | undefined) {
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
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ApplicationSegmentPraServerGroupsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentPraServerGroups[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentPraServerGroupsOutputReference {
    return new ApplicationSegmentPraServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentPraZpnErId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#id ApplicationSegmentPra#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function applicationSegmentPraZpnErIdToTerraform(struct?: ApplicationSegmentPraZpnErId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function applicationSegmentPraZpnErIdToHclTerraform(struct?: ApplicationSegmentPraZpnErId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSegmentPraZpnErIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentPraZpnErId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentPraZpnErId | cdktf.IResolvable | undefined) {
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
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ApplicationSegmentPraZpnErIdList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentPraZpnErId[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentPraZpnErIdOutputReference {
    return new ApplicationSegmentPraZpnErIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra zpa_application_segment_pra}
*/
export class ApplicationSegmentPra extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_application_segment_pra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSegmentPra resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSegmentPra to import
  * @param importFromId The id of the existing ApplicationSegmentPra that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSegmentPra to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_application_segment_pra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_pra zpa_application_segment_pra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSegmentPraConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationSegmentPraConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_application_segment_pra',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2',
        providerVersionConstraint: '4.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bypassOnReauth = config.bypassOnReauth;
    this._bypassType = config.bypassType;
    this._configSpace = config.configSpace;
    this._description = config.description;
    this._domainNames = config.domainNames;
    this._doubleEncrypt = config.doubleEncrypt;
    this._enabled = config.enabled;
    this._fqdnDnsCheck = config.fqdnDnsCheck;
    this._healthCheckType = config.healthCheckType;
    this._healthReporting = config.healthReporting;
    this._icmpAccessType = config.icmpAccessType;
    this._ipAnchored = config.ipAnchored;
    this._isCnameEnabled = config.isCnameEnabled;
    this._isIncompleteDrConfig = config.isIncompleteDrConfig;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._passiveHealthEnabled = config.passiveHealthEnabled;
    this._segmentGroupId = config.segmentGroupId;
    this._selectConnectorCloseToApp = config.selectConnectorCloseToApp;
    this._tcpKeepAlive = config.tcpKeepAlive;
    this._tcpPortRange.internalValue = config.tcpPortRange;
    this._tcpPortRanges = config.tcpPortRanges;
    this._udpPortRange.internalValue = config.udpPortRange;
    this._udpPortRanges = config.udpPortRanges;
    this._useInDrMode = config.useInDrMode;
    this._commonAppsDto.internalValue = config.commonAppsDto;
    this._serverGroups.internalValue = config.serverGroups;
    this._zpnErId.internalValue = config.zpnErId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_on_reauth - computed: true, optional: true, required: false
  private _bypassOnReauth?: boolean | cdktf.IResolvable; 
  public get bypassOnReauth() {
    return this.getBooleanAttribute('bypass_on_reauth');
  }
  public set bypassOnReauth(value: boolean | cdktf.IResolvable) {
    this._bypassOnReauth = value;
  }
  public resetBypassOnReauth() {
    this._bypassOnReauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassOnReauthInput() {
    return this._bypassOnReauth;
  }

  // bypass_type - computed: true, optional: true, required: false
  private _bypassType?: string; 
  public get bypassType() {
    return this.getStringAttribute('bypass_type');
  }
  public set bypassType(value: string) {
    this._bypassType = value;
  }
  public resetBypassType() {
    this._bypassType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassTypeInput() {
    return this._bypassType;
  }

  // config_space - computed: false, optional: true, required: false
  private _configSpace?: string; 
  public get configSpace() {
    return this.getStringAttribute('config_space');
  }
  public set configSpace(value: string) {
    this._configSpace = value;
  }
  public resetConfigSpace() {
    this._configSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSpaceInput() {
    return this._configSpace;
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

  // domain_names - computed: false, optional: false, required: true
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // double_encrypt - computed: true, optional: true, required: false
  private _doubleEncrypt?: boolean | cdktf.IResolvable; 
  public get doubleEncrypt() {
    return this.getBooleanAttribute('double_encrypt');
  }
  public set doubleEncrypt(value: boolean | cdktf.IResolvable) {
    this._doubleEncrypt = value;
  }
  public resetDoubleEncrypt() {
    this._doubleEncrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleEncryptInput() {
    return this._doubleEncrypt;
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

  // fqdn_dns_check - computed: false, optional: true, required: false
  private _fqdnDnsCheck?: boolean | cdktf.IResolvable; 
  public get fqdnDnsCheck() {
    return this.getBooleanAttribute('fqdn_dns_check');
  }
  public set fqdnDnsCheck(value: boolean | cdktf.IResolvable) {
    this._fqdnDnsCheck = value;
  }
  public resetFqdnDnsCheck() {
    this._fqdnDnsCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnDnsCheckInput() {
    return this._fqdnDnsCheck;
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // health_reporting - computed: false, optional: true, required: false
  private _healthReporting?: string; 
  public get healthReporting() {
    return this.getStringAttribute('health_reporting');
  }
  public set healthReporting(value: string) {
    this._healthReporting = value;
  }
  public resetHealthReporting() {
    this._healthReporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthReportingInput() {
    return this._healthReporting;
  }

  // icmp_access_type - computed: true, optional: true, required: false
  private _icmpAccessType?: string; 
  public get icmpAccessType() {
    return this.getStringAttribute('icmp_access_type');
  }
  public set icmpAccessType(value: string) {
    this._icmpAccessType = value;
  }
  public resetIcmpAccessType() {
    this._icmpAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpAccessTypeInput() {
    return this._icmpAccessType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_anchored - computed: false, optional: true, required: false
  private _ipAnchored?: boolean | cdktf.IResolvable; 
  public get ipAnchored() {
    return this.getBooleanAttribute('ip_anchored');
  }
  public set ipAnchored(value: boolean | cdktf.IResolvable) {
    this._ipAnchored = value;
  }
  public resetIpAnchored() {
    this._ipAnchored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAnchoredInput() {
    return this._ipAnchored;
  }

  // is_cname_enabled - computed: true, optional: true, required: false
  private _isCnameEnabled?: boolean | cdktf.IResolvable; 
  public get isCnameEnabled() {
    return this.getBooleanAttribute('is_cname_enabled');
  }
  public set isCnameEnabled(value: boolean | cdktf.IResolvable) {
    this._isCnameEnabled = value;
  }
  public resetIsCnameEnabled() {
    this._isCnameEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCnameEnabledInput() {
    return this._isCnameEnabled;
  }

  // is_incomplete_dr_config - computed: true, optional: true, required: false
  private _isIncompleteDrConfig?: boolean | cdktf.IResolvable; 
  public get isIncompleteDrConfig() {
    return this.getBooleanAttribute('is_incomplete_dr_config');
  }
  public set isIncompleteDrConfig(value: boolean | cdktf.IResolvable) {
    this._isIncompleteDrConfig = value;
  }
  public resetIsIncompleteDrConfig() {
    this._isIncompleteDrConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncompleteDrConfigInput() {
    return this._isIncompleteDrConfig;
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // passive_health_enabled - computed: true, optional: true, required: false
  private _passiveHealthEnabled?: boolean | cdktf.IResolvable; 
  public get passiveHealthEnabled() {
    return this.getBooleanAttribute('passive_health_enabled');
  }
  public set passiveHealthEnabled(value: boolean | cdktf.IResolvable) {
    this._passiveHealthEnabled = value;
  }
  public resetPassiveHealthEnabled() {
    this._passiveHealthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveHealthEnabledInput() {
    return this._passiveHealthEnabled;
  }

  // segment_group_id - computed: false, optional: false, required: true
  private _segmentGroupId?: string; 
  public get segmentGroupId() {
    return this.getStringAttribute('segment_group_id');
  }
  public set segmentGroupId(value: string) {
    this._segmentGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentGroupIdInput() {
    return this._segmentGroupId;
  }

  // select_connector_close_to_app - computed: false, optional: true, required: false
  private _selectConnectorCloseToApp?: boolean | cdktf.IResolvable; 
  public get selectConnectorCloseToApp() {
    return this.getBooleanAttribute('select_connector_close_to_app');
  }
  public set selectConnectorCloseToApp(value: boolean | cdktf.IResolvable) {
    this._selectConnectorCloseToApp = value;
  }
  public resetSelectConnectorCloseToApp() {
    this._selectConnectorCloseToApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectConnectorCloseToAppInput() {
    return this._selectConnectorCloseToApp;
  }

  // tcp_keep_alive - computed: true, optional: true, required: false
  private _tcpKeepAlive?: string; 
  public get tcpKeepAlive() {
    return this.getStringAttribute('tcp_keep_alive');
  }
  public set tcpKeepAlive(value: string) {
    this._tcpKeepAlive = value;
  }
  public resetTcpKeepAlive() {
    this._tcpKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepAliveInput() {
    return this._tcpKeepAlive;
  }

  // tcp_port_range - computed: true, optional: true, required: false
  private _tcpPortRange = new ApplicationSegmentPraTcpPortRangeList(this, "tcp_port_range", false);
  public get tcpPortRange() {
    return this._tcpPortRange;
  }
  public putTcpPortRange(value: ApplicationSegmentPraTcpPortRange[] | cdktf.IResolvable) {
    this._tcpPortRange.internalValue = value;
  }
  public resetTcpPortRange() {
    this._tcpPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortRangeInput() {
    return this._tcpPortRange.internalValue;
  }

  // tcp_port_ranges - computed: true, optional: true, required: false
  private _tcpPortRanges?: string[]; 
  public get tcpPortRanges() {
    return this.getListAttribute('tcp_port_ranges');
  }
  public set tcpPortRanges(value: string[]) {
    this._tcpPortRanges = value;
  }
  public resetTcpPortRanges() {
    this._tcpPortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortRangesInput() {
    return this._tcpPortRanges;
  }

  // udp_port_range - computed: true, optional: true, required: false
  private _udpPortRange = new ApplicationSegmentPraUdpPortRangeList(this, "udp_port_range", false);
  public get udpPortRange() {
    return this._udpPortRange;
  }
  public putUdpPortRange(value: ApplicationSegmentPraUdpPortRange[] | cdktf.IResolvable) {
    this._udpPortRange.internalValue = value;
  }
  public resetUdpPortRange() {
    this._udpPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortRangeInput() {
    return this._udpPortRange.internalValue;
  }

  // udp_port_ranges - computed: true, optional: true, required: false
  private _udpPortRanges?: string[]; 
  public get udpPortRanges() {
    return this.getListAttribute('udp_port_ranges');
  }
  public set udpPortRanges(value: string[]) {
    this._udpPortRanges = value;
  }
  public resetUdpPortRanges() {
    this._udpPortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortRangesInput() {
    return this._udpPortRanges;
  }

  // use_in_dr_mode - computed: true, optional: true, required: false
  private _useInDrMode?: boolean | cdktf.IResolvable; 
  public get useInDrMode() {
    return this.getBooleanAttribute('use_in_dr_mode');
  }
  public set useInDrMode(value: boolean | cdktf.IResolvable) {
    this._useInDrMode = value;
  }
  public resetUseInDrMode() {
    this._useInDrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInDrModeInput() {
    return this._useInDrMode;
  }

  // common_apps_dto - computed: false, optional: true, required: false
  private _commonAppsDto = new ApplicationSegmentPraCommonAppsDtoList(this, "common_apps_dto", false);
  public get commonAppsDto() {
    return this._commonAppsDto;
  }
  public putCommonAppsDto(value: ApplicationSegmentPraCommonAppsDto[] | cdktf.IResolvable) {
    this._commonAppsDto.internalValue = value;
  }
  public resetCommonAppsDto() {
    this._commonAppsDto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAppsDtoInput() {
    return this._commonAppsDto.internalValue;
  }

  // server_groups - computed: false, optional: true, required: false
  private _serverGroups = new ApplicationSegmentPraServerGroupsList(this, "server_groups", false);
  public get serverGroups() {
    return this._serverGroups;
  }
  public putServerGroups(value: ApplicationSegmentPraServerGroups[] | cdktf.IResolvable) {
    this._serverGroups.internalValue = value;
  }
  public resetServerGroups() {
    this._serverGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupsInput() {
    return this._serverGroups.internalValue;
  }

  // zpn_er_id - computed: false, optional: true, required: false
  private _zpnErId = new ApplicationSegmentPraZpnErIdList(this, "zpn_er_id", false);
  public get zpnErId() {
    return this._zpnErId;
  }
  public putZpnErId(value: ApplicationSegmentPraZpnErId[] | cdktf.IResolvable) {
    this._zpnErId.internalValue = value;
  }
  public resetZpnErId() {
    this._zpnErId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpnErIdInput() {
    return this._zpnErId.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_on_reauth: cdktf.booleanToTerraform(this._bypassOnReauth),
      bypass_type: cdktf.stringToTerraform(this._bypassType),
      config_space: cdktf.stringToTerraform(this._configSpace),
      description: cdktf.stringToTerraform(this._description),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      double_encrypt: cdktf.booleanToTerraform(this._doubleEncrypt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fqdn_dns_check: cdktf.booleanToTerraform(this._fqdnDnsCheck),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      health_reporting: cdktf.stringToTerraform(this._healthReporting),
      icmp_access_type: cdktf.stringToTerraform(this._icmpAccessType),
      ip_anchored: cdktf.booleanToTerraform(this._ipAnchored),
      is_cname_enabled: cdktf.booleanToTerraform(this._isCnameEnabled),
      is_incomplete_dr_config: cdktf.booleanToTerraform(this._isIncompleteDrConfig),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      passive_health_enabled: cdktf.booleanToTerraform(this._passiveHealthEnabled),
      segment_group_id: cdktf.stringToTerraform(this._segmentGroupId),
      select_connector_close_to_app: cdktf.booleanToTerraform(this._selectConnectorCloseToApp),
      tcp_keep_alive: cdktf.stringToTerraform(this._tcpKeepAlive),
      tcp_port_range: cdktf.listMapper(applicationSegmentPraTcpPortRangeToTerraform, false)(this._tcpPortRange.internalValue),
      tcp_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tcpPortRanges),
      udp_port_range: cdktf.listMapper(applicationSegmentPraUdpPortRangeToTerraform, false)(this._udpPortRange.internalValue),
      udp_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._udpPortRanges),
      use_in_dr_mode: cdktf.booleanToTerraform(this._useInDrMode),
      common_apps_dto: cdktf.listMapper(applicationSegmentPraCommonAppsDtoToTerraform, true)(this._commonAppsDto.internalValue),
      server_groups: cdktf.listMapper(applicationSegmentPraServerGroupsToTerraform, true)(this._serverGroups.internalValue),
      zpn_er_id: cdktf.listMapper(applicationSegmentPraZpnErIdToTerraform, true)(this._zpnErId.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_on_reauth: {
        value: cdktf.booleanToHclTerraform(this._bypassOnReauth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_type: {
        value: cdktf.stringToHclTerraform(this._bypassType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_space: {
        value: cdktf.stringToHclTerraform(this._configSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      double_encrypt: {
        value: cdktf.booleanToHclTerraform(this._doubleEncrypt),
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
      fqdn_dns_check: {
        value: cdktf.booleanToHclTerraform(this._fqdnDnsCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_reporting: {
        value: cdktf.stringToHclTerraform(this._healthReporting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_access_type: {
        value: cdktf.stringToHclTerraform(this._icmpAccessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_anchored: {
        value: cdktf.booleanToHclTerraform(this._ipAnchored),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_cname_enabled: {
        value: cdktf.booleanToHclTerraform(this._isCnameEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_incomplete_dr_config: {
        value: cdktf.booleanToHclTerraform(this._isIncompleteDrConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive_health_enabled: {
        value: cdktf.booleanToHclTerraform(this._passiveHealthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      segment_group_id: {
        value: cdktf.stringToHclTerraform(this._segmentGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      select_connector_close_to_app: {
        value: cdktf.booleanToHclTerraform(this._selectConnectorCloseToApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_keep_alive: {
        value: cdktf.stringToHclTerraform(this._tcpKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_port_range: {
        value: cdktf.listMapperHcl(applicationSegmentPraTcpPortRangeToHclTerraform, false)(this._tcpPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentPraTcpPortRangeList",
      },
      tcp_port_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tcpPortRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      udp_port_range: {
        value: cdktf.listMapperHcl(applicationSegmentPraUdpPortRangeToHclTerraform, false)(this._udpPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentPraUdpPortRangeList",
      },
      udp_port_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._udpPortRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      use_in_dr_mode: {
        value: cdktf.booleanToHclTerraform(this._useInDrMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      common_apps_dto: {
        value: cdktf.listMapperHcl(applicationSegmentPraCommonAppsDtoToHclTerraform, true)(this._commonAppsDto.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentPraCommonAppsDtoList",
      },
      server_groups: {
        value: cdktf.listMapperHcl(applicationSegmentPraServerGroupsToHclTerraform, true)(this._serverGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentPraServerGroupsList",
      },
      zpn_er_id: {
        value: cdktf.listMapperHcl(applicationSegmentPraZpnErIdToHclTerraform, true)(this._zpnErId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentPraZpnErIdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
