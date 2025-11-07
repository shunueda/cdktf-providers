// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSegmentInspectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if Active Directory Inspection is enabled or not for the application. This allows the application segment's traffic to be inspected by Active Directory (AD) Protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#adp_enabled ApplicationSegmentInspection#adp_enabled}
  */
  readonly adpEnabled?: boolean | cdktf.IResolvable;
  /**
  * If autoAppProtectEnabled is set to true, this field indicates if the application segment’s traffic is inspected by AppProtection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#auto_app_protect_enabled ApplicationSegmentInspection#auto_app_protect_enabled}
  */
  readonly autoAppProtectEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#bypass_on_reauth ApplicationSegmentInspection#bypass_on_reauth}
  */
  readonly bypassOnReauth?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether users can bypass ZPA to access applications. Default: NEVER. Supported values: ALWAYS, NEVER, ON_NET. The value NEVER indicates the use of the client forwarding policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#bypass_type ApplicationSegmentInspection#bypass_type}
  */
  readonly bypassType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#config_space ApplicationSegmentInspection#config_space}
  */
  readonly configSpace?: string;
  /**
  * Description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#description ApplicationSegmentInspection#description}
  */
  readonly description?: string;
  /**
  * List of domains and IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#domain_names ApplicationSegmentInspection#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Whether Double Encryption is enabled or disabled for the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#double_encrypt ApplicationSegmentInspection#double_encrypt}
  */
  readonly doubleEncrypt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#enabled ApplicationSegmentInspection#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#fqdn_dns_check ApplicationSegmentInspection#fqdn_dns_check}
  */
  readonly fqdnDnsCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#health_check_type ApplicationSegmentInspection#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Whether health reporting for the app is Continuous or On Access. Supported values: NONE, ON_ACCESS, CONTINUOUS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#health_reporting ApplicationSegmentInspection#health_reporting}
  */
  readonly healthReporting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#icmp_access_type ApplicationSegmentInspection#icmp_access_type}
  */
  readonly icmpAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#ip_anchored ApplicationSegmentInspection#ip_anchored}
  */
  readonly ipAnchored?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the Zscaler Client Connector (formerly Zscaler App or Z App) receives CNAME DNS records from the connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#is_cname_enabled ApplicationSegmentInspection#is_cname_enabled}
  */
  readonly isCnameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#is_incomplete_dr_config ApplicationSegmentInspection#is_incomplete_dr_config}
  */
  readonly isIncompleteDrConfig?: boolean | cdktf.IResolvable;
  /**
  * Name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#name ApplicationSegmentInspection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#passive_health_enabled ApplicationSegmentInspection#passive_health_enabled}
  */
  readonly passiveHealthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#segment_group_id ApplicationSegmentInspection#segment_group_id}
  */
  readonly segmentGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#select_connector_close_to_app ApplicationSegmentInspection#select_connector_close_to_app}
  */
  readonly selectConnectorCloseToApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#tcp_keep_alive ApplicationSegmentInspection#tcp_keep_alive}
  */
  readonly tcpKeepAlive?: string;
  /**
  * tcp port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#tcp_port_range ApplicationSegmentInspection#tcp_port_range}
  */
  readonly tcpPortRange?: ApplicationSegmentInspectionTcpPortRange[] | cdktf.IResolvable;
  /**
  * TCP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#tcp_port_ranges ApplicationSegmentInspection#tcp_port_ranges}
  */
  readonly tcpPortRanges?: string[];
  /**
  * TCP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#tcp_protocols ApplicationSegmentInspection#tcp_protocols}
  */
  readonly tcpProtocols?: string[];
  /**
  * udp port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#udp_port_range ApplicationSegmentInspection#udp_port_range}
  */
  readonly udpPortRange?: ApplicationSegmentInspectionUdpPortRange[] | cdktf.IResolvable;
  /**
  * UDP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#udp_port_ranges ApplicationSegmentInspection#udp_port_ranges}
  */
  readonly udpPortRanges?: string[];
  /**
  * TCP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#udp_protocols ApplicationSegmentInspection#udp_protocols}
  */
  readonly udpProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#use_in_dr_mode ApplicationSegmentInspection#use_in_dr_mode}
  */
  readonly useInDrMode?: boolean | cdktf.IResolvable;
  /**
  * common_apps_dto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#common_apps_dto ApplicationSegmentInspection#common_apps_dto}
  */
  readonly commonAppsDto?: ApplicationSegmentInspectionCommonAppsDto[] | cdktf.IResolvable;
  /**
  * server_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#server_groups ApplicationSegmentInspection#server_groups}
  */
  readonly serverGroups?: ApplicationSegmentInspectionServerGroups[] | cdktf.IResolvable;
}
export interface ApplicationSegmentInspectionTcpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#from ApplicationSegmentInspection#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#to ApplicationSegmentInspection#to}
  */
  readonly to?: string;
}

export function applicationSegmentInspectionTcpPortRangeToTerraform(struct?: ApplicationSegmentInspectionTcpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function applicationSegmentInspectionTcpPortRangeToHclTerraform(struct?: ApplicationSegmentInspectionTcpPortRange | cdktf.IResolvable): any {
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

export class ApplicationSegmentInspectionTcpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentInspectionTcpPortRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentInspectionTcpPortRange | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentInspectionTcpPortRangeList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentInspectionTcpPortRange[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentInspectionTcpPortRangeOutputReference {
    return new ApplicationSegmentInspectionTcpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentInspectionUdpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#from ApplicationSegmentInspection#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#to ApplicationSegmentInspection#to}
  */
  readonly to?: string;
}

export function applicationSegmentInspectionUdpPortRangeToTerraform(struct?: ApplicationSegmentInspectionUdpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function applicationSegmentInspectionUdpPortRangeToHclTerraform(struct?: ApplicationSegmentInspectionUdpPortRange | cdktf.IResolvable): any {
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

export class ApplicationSegmentInspectionUdpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentInspectionUdpPortRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentInspectionUdpPortRange | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentInspectionUdpPortRangeList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentInspectionUdpPortRange[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentInspectionUdpPortRangeOutputReference {
    return new ApplicationSegmentInspectionUdpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentInspectionCommonAppsDtoAppsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#app_types ApplicationSegmentInspection#app_types}
  */
  readonly appTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#application_port ApplicationSegmentInspection#application_port}
  */
  readonly applicationPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#application_protocol ApplicationSegmentInspection#application_protocol}
  */
  readonly applicationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#certificate_id ApplicationSegmentInspection#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#domain ApplicationSegmentInspection#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#trust_untrusted_cert ApplicationSegmentInspection#trust_untrusted_cert}
  */
  readonly trustUntrustedCert?: boolean | cdktf.IResolvable;
}

export function applicationSegmentInspectionCommonAppsDtoAppsConfigToTerraform(struct?: ApplicationSegmentInspectionCommonAppsDtoAppsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appTypes),
    application_port: cdktf.stringToTerraform(struct!.applicationPort),
    application_protocol: cdktf.stringToTerraform(struct!.applicationProtocol),
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    domain: cdktf.stringToTerraform(struct!.domain),
    trust_untrusted_cert: cdktf.booleanToTerraform(struct!.trustUntrustedCert),
  }
}


export function applicationSegmentInspectionCommonAppsDtoAppsConfigToHclTerraform(struct?: ApplicationSegmentInspectionCommonAppsDtoAppsConfig | cdktf.IResolvable): any {
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
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
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
    trust_untrusted_cert: {
      value: cdktf.booleanToHclTerraform(struct!.trustUntrustedCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSegmentInspectionCommonAppsDtoAppsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentInspectionCommonAppsDtoAppsConfig | cdktf.IResolvable | undefined {
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
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._trustUntrustedCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustUntrustedCert = this._trustUntrustedCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSegmentInspectionCommonAppsDtoAppsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appTypes = undefined;
      this._applicationPort = undefined;
      this._applicationProtocol = undefined;
      this._certificateId = undefined;
      this._domain = undefined;
      this._trustUntrustedCert = undefined;
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
      this._certificateId = value.certificateId;
      this._domain = value.domain;
      this._trustUntrustedCert = value.trustUntrustedCert;
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

  // application_protocol - computed: true, optional: true, required: false
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

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // inspect_app_id - computed: true, optional: false, required: false
  public get inspectAppId() {
    return this.getStringAttribute('inspect_app_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // trust_untrusted_cert - computed: true, optional: true, required: false
  private _trustUntrustedCert?: boolean | cdktf.IResolvable; 
  public get trustUntrustedCert() {
    return this.getBooleanAttribute('trust_untrusted_cert');
  }
  public set trustUntrustedCert(value: boolean | cdktf.IResolvable) {
    this._trustUntrustedCert = value;
  }
  public resetTrustUntrustedCert() {
    this._trustUntrustedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustUntrustedCertInput() {
    return this._trustUntrustedCert;
  }
}

export class ApplicationSegmentInspectionCommonAppsDtoAppsConfigList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentInspectionCommonAppsDtoAppsConfig[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentInspectionCommonAppsDtoAppsConfigOutputReference {
    return new ApplicationSegmentInspectionCommonAppsDtoAppsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentInspectionCommonAppsDto {
  /**
  * apps_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#apps_config ApplicationSegmentInspection#apps_config}
  */
  readonly appsConfig?: ApplicationSegmentInspectionCommonAppsDtoAppsConfig[] | cdktf.IResolvable;
}

export function applicationSegmentInspectionCommonAppsDtoToTerraform(struct?: ApplicationSegmentInspectionCommonAppsDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apps_config: cdktf.listMapper(applicationSegmentInspectionCommonAppsDtoAppsConfigToTerraform, true)(struct!.appsConfig),
  }
}


export function applicationSegmentInspectionCommonAppsDtoToHclTerraform(struct?: ApplicationSegmentInspectionCommonAppsDto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apps_config: {
      value: cdktf.listMapperHcl(applicationSegmentInspectionCommonAppsDtoAppsConfigToHclTerraform, true)(struct!.appsConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSegmentInspectionCommonAppsDtoAppsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSegmentInspectionCommonAppsDtoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentInspectionCommonAppsDto | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentInspectionCommonAppsDto | cdktf.IResolvable | undefined) {
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
  private _appsConfig = new ApplicationSegmentInspectionCommonAppsDtoAppsConfigList(this, "apps_config", true);
  public get appsConfig() {
    return this._appsConfig;
  }
  public putAppsConfig(value: ApplicationSegmentInspectionCommonAppsDtoAppsConfig[] | cdktf.IResolvable) {
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

export class ApplicationSegmentInspectionCommonAppsDtoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentInspectionCommonAppsDto[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentInspectionCommonAppsDtoOutputReference {
    return new ApplicationSegmentInspectionCommonAppsDtoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentInspectionServerGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#id ApplicationSegmentInspection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function applicationSegmentInspectionServerGroupsToTerraform(struct?: ApplicationSegmentInspectionServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function applicationSegmentInspectionServerGroupsToHclTerraform(struct?: ApplicationSegmentInspectionServerGroups | cdktf.IResolvable): any {
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

export class ApplicationSegmentInspectionServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentInspectionServerGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentInspectionServerGroups | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentInspectionServerGroupsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentInspectionServerGroups[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentInspectionServerGroupsOutputReference {
    return new ApplicationSegmentInspectionServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection zpa_application_segment_inspection}
*/
export class ApplicationSegmentInspection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_application_segment_inspection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSegmentInspection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSegmentInspection to import
  * @param importFromId The id of the existing ApplicationSegmentInspection that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSegmentInspection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_application_segment_inspection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_inspection zpa_application_segment_inspection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSegmentInspectionConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationSegmentInspectionConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_application_segment_inspection',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adpEnabled = config.adpEnabled;
    this._autoAppProtectEnabled = config.autoAppProtectEnabled;
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
    this._name = config.name;
    this._passiveHealthEnabled = config.passiveHealthEnabled;
    this._segmentGroupId = config.segmentGroupId;
    this._selectConnectorCloseToApp = config.selectConnectorCloseToApp;
    this._tcpKeepAlive = config.tcpKeepAlive;
    this._tcpPortRange.internalValue = config.tcpPortRange;
    this._tcpPortRanges = config.tcpPortRanges;
    this._tcpProtocols = config.tcpProtocols;
    this._udpPortRange.internalValue = config.udpPortRange;
    this._udpPortRanges = config.udpPortRanges;
    this._udpProtocols = config.udpProtocols;
    this._useInDrMode = config.useInDrMode;
    this._commonAppsDto.internalValue = config.commonAppsDto;
    this._serverGroups.internalValue = config.serverGroups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adp_enabled - computed: true, optional: true, required: false
  private _adpEnabled?: boolean | cdktf.IResolvable; 
  public get adpEnabled() {
    return this.getBooleanAttribute('adp_enabled');
  }
  public set adpEnabled(value: boolean | cdktf.IResolvable) {
    this._adpEnabled = value;
  }
  public resetAdpEnabled() {
    this._adpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adpEnabledInput() {
    return this._adpEnabled;
  }

  // auto_app_protect_enabled - computed: true, optional: true, required: false
  private _autoAppProtectEnabled?: boolean | cdktf.IResolvable; 
  public get autoAppProtectEnabled() {
    return this.getBooleanAttribute('auto_app_protect_enabled');
  }
  public set autoAppProtectEnabled(value: boolean | cdktf.IResolvable) {
    this._autoAppProtectEnabled = value;
  }
  public resetAutoAppProtectEnabled() {
    this._autoAppProtectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAppProtectEnabledInput() {
    return this._autoAppProtectEnabled;
  }

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

  // enabled - computed: true, optional: true, required: false
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

  // is_incomplete_dr_config - computed: false, optional: true, required: false
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
  private _tcpPortRange = new ApplicationSegmentInspectionTcpPortRangeList(this, "tcp_port_range", false);
  public get tcpPortRange() {
    return this._tcpPortRange;
  }
  public putTcpPortRange(value: ApplicationSegmentInspectionTcpPortRange[] | cdktf.IResolvable) {
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

  // tcp_protocols - computed: true, optional: true, required: false
  private _tcpProtocols?: string[]; 
  public get tcpProtocols() {
    return this.getListAttribute('tcp_protocols');
  }
  public set tcpProtocols(value: string[]) {
    this._tcpProtocols = value;
  }
  public resetTcpProtocols() {
    this._tcpProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProtocolsInput() {
    return this._tcpProtocols;
  }

  // udp_port_range - computed: true, optional: true, required: false
  private _udpPortRange = new ApplicationSegmentInspectionUdpPortRangeList(this, "udp_port_range", false);
  public get udpPortRange() {
    return this._udpPortRange;
  }
  public putUdpPortRange(value: ApplicationSegmentInspectionUdpPortRange[] | cdktf.IResolvable) {
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

  // udp_protocols - computed: true, optional: true, required: false
  private _udpProtocols?: string[]; 
  public get udpProtocols() {
    return this.getListAttribute('udp_protocols');
  }
  public set udpProtocols(value: string[]) {
    this._udpProtocols = value;
  }
  public resetUdpProtocols() {
    this._udpProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpProtocolsInput() {
    return this._udpProtocols;
  }

  // use_in_dr_mode - computed: false, optional: true, required: false
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
  private _commonAppsDto = new ApplicationSegmentInspectionCommonAppsDtoList(this, "common_apps_dto", true);
  public get commonAppsDto() {
    return this._commonAppsDto;
  }
  public putCommonAppsDto(value: ApplicationSegmentInspectionCommonAppsDto[] | cdktf.IResolvable) {
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
  private _serverGroups = new ApplicationSegmentInspectionServerGroupsList(this, "server_groups", false);
  public get serverGroups() {
    return this._serverGroups;
  }
  public putServerGroups(value: ApplicationSegmentInspectionServerGroups[] | cdktf.IResolvable) {
    this._serverGroups.internalValue = value;
  }
  public resetServerGroups() {
    this._serverGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupsInput() {
    return this._serverGroups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adp_enabled: cdktf.booleanToTerraform(this._adpEnabled),
      auto_app_protect_enabled: cdktf.booleanToTerraform(this._autoAppProtectEnabled),
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
      name: cdktf.stringToTerraform(this._name),
      passive_health_enabled: cdktf.booleanToTerraform(this._passiveHealthEnabled),
      segment_group_id: cdktf.stringToTerraform(this._segmentGroupId),
      select_connector_close_to_app: cdktf.booleanToTerraform(this._selectConnectorCloseToApp),
      tcp_keep_alive: cdktf.stringToTerraform(this._tcpKeepAlive),
      tcp_port_range: cdktf.listMapper(applicationSegmentInspectionTcpPortRangeToTerraform, false)(this._tcpPortRange.internalValue),
      tcp_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tcpPortRanges),
      tcp_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tcpProtocols),
      udp_port_range: cdktf.listMapper(applicationSegmentInspectionUdpPortRangeToTerraform, false)(this._udpPortRange.internalValue),
      udp_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._udpPortRanges),
      udp_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._udpProtocols),
      use_in_dr_mode: cdktf.booleanToTerraform(this._useInDrMode),
      common_apps_dto: cdktf.listMapper(applicationSegmentInspectionCommonAppsDtoToTerraform, true)(this._commonAppsDto.internalValue),
      server_groups: cdktf.listMapper(applicationSegmentInspectionServerGroupsToTerraform, true)(this._serverGroups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adp_enabled: {
        value: cdktf.booleanToHclTerraform(this._adpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_app_protect_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoAppProtectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
        value: cdktf.listMapperHcl(applicationSegmentInspectionTcpPortRangeToHclTerraform, false)(this._tcpPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentInspectionTcpPortRangeList",
      },
      tcp_port_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tcpPortRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tcp_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tcpProtocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      udp_port_range: {
        value: cdktf.listMapperHcl(applicationSegmentInspectionUdpPortRangeToHclTerraform, false)(this._udpPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentInspectionUdpPortRangeList",
      },
      udp_port_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._udpPortRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      udp_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._udpProtocols),
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
        value: cdktf.listMapperHcl(applicationSegmentInspectionCommonAppsDtoToHclTerraform, true)(this._commonAppsDto.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationSegmentInspectionCommonAppsDtoList",
      },
      server_groups: {
        value: cdktf.listMapperHcl(applicationSegmentInspectionServerGroupsToHclTerraform, true)(this._serverGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentInspectionServerGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
