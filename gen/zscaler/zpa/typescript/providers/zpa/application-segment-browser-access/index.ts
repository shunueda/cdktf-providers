// https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSegmentBrowserAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether users can bypass ZPA to access applications. Default: NEVER. Supported values: ALWAYS, NEVER, ON_NET. The value NEVER indicates the use of the client forwarding policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#bypass_type ApplicationSegmentBrowserAccess#bypass_type}
  */
  readonly bypassType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#config_space ApplicationSegmentBrowserAccess#config_space}
  */
  readonly configSpace?: string;
  /**
  * Description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#description ApplicationSegmentBrowserAccess#description}
  */
  readonly description?: string;
  /**
  * List of domains and IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#domain_names ApplicationSegmentBrowserAccess#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Whether Double Encryption is enabled or disabled for the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#double_encrypt ApplicationSegmentBrowserAccess#double_encrypt}
  */
  readonly doubleEncrypt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#enabled ApplicationSegmentBrowserAccess#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#fqdn_dns_check ApplicationSegmentBrowserAccess#fqdn_dns_check}
  */
  readonly fqdnDnsCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#health_check_type ApplicationSegmentBrowserAccess#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Whether health reporting for the app is Continuous or On Access. Supported values: NONE, ON_ACCESS, CONTINUOUS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#health_reporting ApplicationSegmentBrowserAccess#health_reporting}
  */
  readonly healthReporting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#icmp_access_type ApplicationSegmentBrowserAccess#icmp_access_type}
  */
  readonly icmpAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#ip_anchored ApplicationSegmentBrowserAccess#ip_anchored}
  */
  readonly ipAnchored?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the Zscaler Client Connector (formerly Zscaler App or Z App) receives CNAME DNS records from the connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#is_cname_enabled ApplicationSegmentBrowserAccess#is_cname_enabled}
  */
  readonly isCnameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#is_incomplete_dr_config ApplicationSegmentBrowserAccess#is_incomplete_dr_config}
  */
  readonly isIncompleteDrConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#microtenant_id ApplicationSegmentBrowserAccess#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#name ApplicationSegmentBrowserAccess#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#passive_health_enabled ApplicationSegmentBrowserAccess#passive_health_enabled}
  */
  readonly passiveHealthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#segment_group_id ApplicationSegmentBrowserAccess#segment_group_id}
  */
  readonly segmentGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#segment_group_name ApplicationSegmentBrowserAccess#segment_group_name}
  */
  readonly segmentGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#select_connector_close_to_app ApplicationSegmentBrowserAccess#select_connector_close_to_app}
  */
  readonly selectConnectorCloseToApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#tcp_keep_alive ApplicationSegmentBrowserAccess#tcp_keep_alive}
  */
  readonly tcpKeepAlive?: string;
  /**
  * tcp port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#tcp_port_range ApplicationSegmentBrowserAccess#tcp_port_range}
  */
  readonly tcpPortRange?: ApplicationSegmentBrowserAccessTcpPortRange[] | cdktf.IResolvable;
  /**
  * TCP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#tcp_port_ranges ApplicationSegmentBrowserAccess#tcp_port_ranges}
  */
  readonly tcpPortRanges?: string[];
  /**
  * udp port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#udp_port_range ApplicationSegmentBrowserAccess#udp_port_range}
  */
  readonly udpPortRange?: ApplicationSegmentBrowserAccessUdpPortRange[] | cdktf.IResolvable;
  /**
  * UDP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#udp_port_ranges ApplicationSegmentBrowserAccess#udp_port_ranges}
  */
  readonly udpPortRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#use_in_dr_mode ApplicationSegmentBrowserAccess#use_in_dr_mode}
  */
  readonly useInDrMode?: boolean | cdktf.IResolvable;
  /**
  * clientless_apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#clientless_apps ApplicationSegmentBrowserAccess#clientless_apps}
  */
  readonly clientlessApps: ApplicationSegmentBrowserAccessClientlessApps[] | cdktf.IResolvable;
  /**
  * server_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#server_groups ApplicationSegmentBrowserAccess#server_groups}
  */
  readonly serverGroups?: ApplicationSegmentBrowserAccessServerGroups[] | cdktf.IResolvable;
  /**
  * zpn_er_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#zpn_er_id ApplicationSegmentBrowserAccess#zpn_er_id}
  */
  readonly zpnErId?: ApplicationSegmentBrowserAccessZpnErId[] | cdktf.IResolvable;
}
export interface ApplicationSegmentBrowserAccessTcpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#from ApplicationSegmentBrowserAccess#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#to ApplicationSegmentBrowserAccess#to}
  */
  readonly to?: string;
}

export function applicationSegmentBrowserAccessTcpPortRangeToTerraform(struct?: ApplicationSegmentBrowserAccessTcpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function applicationSegmentBrowserAccessTcpPortRangeToHclTerraform(struct?: ApplicationSegmentBrowserAccessTcpPortRange | cdktf.IResolvable): any {
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

export class ApplicationSegmentBrowserAccessTcpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentBrowserAccessTcpPortRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentBrowserAccessTcpPortRange | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentBrowserAccessTcpPortRangeList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentBrowserAccessTcpPortRange[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentBrowserAccessTcpPortRangeOutputReference {
    return new ApplicationSegmentBrowserAccessTcpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentBrowserAccessUdpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#from ApplicationSegmentBrowserAccess#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#to ApplicationSegmentBrowserAccess#to}
  */
  readonly to?: string;
}

export function applicationSegmentBrowserAccessUdpPortRangeToTerraform(struct?: ApplicationSegmentBrowserAccessUdpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function applicationSegmentBrowserAccessUdpPortRangeToHclTerraform(struct?: ApplicationSegmentBrowserAccessUdpPortRange | cdktf.IResolvable): any {
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

export class ApplicationSegmentBrowserAccessUdpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentBrowserAccessUdpPortRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentBrowserAccessUdpPortRange | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentBrowserAccessUdpPortRangeList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentBrowserAccessUdpPortRange[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentBrowserAccessUdpPortRangeOutputReference {
    return new ApplicationSegmentBrowserAccessUdpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentBrowserAccessClientlessApps {
  /**
  * If you want ZPA to forward unauthenticated HTTP preflight OPTIONS requests from the browser to the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#allow_options ApplicationSegmentBrowserAccess#allow_options}
  */
  readonly allowOptions?: boolean | cdktf.IResolvable;
  /**
  * Port for the BA app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#application_port ApplicationSegmentBrowserAccess#application_port}
  */
  readonly applicationPort: string;
  /**
  * Protocol for the BA app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#application_protocol ApplicationSegmentBrowserAccess#application_protocol}
  */
  readonly applicationProtocol: string;
  /**
  * ID of the BA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#certificate_id ApplicationSegmentBrowserAccess#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#description ApplicationSegmentBrowserAccess#description}
  */
  readonly description?: string;
  /**
  * Domain name or IP address of the BA app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#domain ApplicationSegmentBrowserAccess#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#enabled ApplicationSegmentBrowserAccess#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The external domain name prefix of the Browser Access application that is used for Zscaler-managed certificates when creating a privileged portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#ext_domain ApplicationSegmentBrowserAccess#ext_domain}
  */
  readonly extDomain?: string;
  /**
  * The domain prefix for the privileged portal URL. The supported string can include numbers, lower case characters, and only supports a hyphen (-).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#ext_label ApplicationSegmentBrowserAccess#ext_label}
  */
  readonly extLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#microtenant_id ApplicationSegmentBrowserAccess#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#name ApplicationSegmentBrowserAccess#name}
  */
  readonly name: string;
  /**
  * Indicates whether Use Untrusted Certificates is enabled or disabled for a BA app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#trust_untrusted_cert ApplicationSegmentBrowserAccess#trust_untrusted_cert}
  */
  readonly trustUntrustedCert?: boolean | cdktf.IResolvable;
}

export function applicationSegmentBrowserAccessClientlessAppsToTerraform(struct?: ApplicationSegmentBrowserAccessClientlessApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_options: cdktf.booleanToTerraform(struct!.allowOptions),
    application_port: cdktf.stringToTerraform(struct!.applicationPort),
    application_protocol: cdktf.stringToTerraform(struct!.applicationProtocol),
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    description: cdktf.stringToTerraform(struct!.description),
    domain: cdktf.stringToTerraform(struct!.domain),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ext_domain: cdktf.stringToTerraform(struct!.extDomain),
    ext_label: cdktf.stringToTerraform(struct!.extLabel),
    microtenant_id: cdktf.stringToTerraform(struct!.microtenantId),
    name: cdktf.stringToTerraform(struct!.name),
    trust_untrusted_cert: cdktf.booleanToTerraform(struct!.trustUntrustedCert),
  }
}


export function applicationSegmentBrowserAccessClientlessAppsToHclTerraform(struct?: ApplicationSegmentBrowserAccessClientlessApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_options: {
      value: cdktf.booleanToHclTerraform(struct!.allowOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ext_domain: {
      value: cdktf.stringToHclTerraform(struct!.extDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_label: {
      value: cdktf.stringToHclTerraform(struct!.extLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microtenant_id: {
      value: cdktf.stringToHclTerraform(struct!.microtenantId),
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

export class ApplicationSegmentBrowserAccessClientlessAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentBrowserAccessClientlessApps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOptions = this._allowOptions;
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
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._extDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.extDomain = this._extDomain;
    }
    if (this._extLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.extLabel = this._extLabel;
    }
    if (this._microtenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.microtenantId = this._microtenantId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._trustUntrustedCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustUntrustedCert = this._trustUntrustedCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSegmentBrowserAccessClientlessApps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowOptions = undefined;
      this._applicationPort = undefined;
      this._applicationProtocol = undefined;
      this._certificateId = undefined;
      this._description = undefined;
      this._domain = undefined;
      this._enabled = undefined;
      this._extDomain = undefined;
      this._extLabel = undefined;
      this._microtenantId = undefined;
      this._name = undefined;
      this._trustUntrustedCert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowOptions = value.allowOptions;
      this._applicationPort = value.applicationPort;
      this._applicationProtocol = value.applicationProtocol;
      this._certificateId = value.certificateId;
      this._description = value.description;
      this._domain = value.domain;
      this._enabled = value.enabled;
      this._extDomain = value.extDomain;
      this._extLabel = value.extLabel;
      this._microtenantId = value.microtenantId;
      this._name = value.name;
      this._trustUntrustedCert = value.trustUntrustedCert;
    }
  }

  // allow_options - computed: false, optional: true, required: false
  private _allowOptions?: boolean | cdktf.IResolvable; 
  public get allowOptions() {
    return this.getBooleanAttribute('allow_options');
  }
  public set allowOptions(value: boolean | cdktf.IResolvable) {
    this._allowOptions = value;
  }
  public resetAllowOptions() {
    this._allowOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOptionsInput() {
    return this._allowOptions;
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // application_port - computed: false, optional: false, required: true
  private _applicationPort?: string; 
  public get applicationPort() {
    return this.getStringAttribute('application_port');
  }
  public set applicationPort(value: string) {
    this._applicationPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPortInput() {
    return this._applicationPort;
  }

  // application_protocol - computed: false, optional: false, required: true
  private _applicationProtocol?: string; 
  public get applicationProtocol() {
    return this.getStringAttribute('application_protocol');
  }
  public set applicationProtocol(value: string) {
    this._applicationProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProtocolInput() {
    return this._applicationProtocol;
  }

  // certificate_id - computed: false, optional: true, required: false
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

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
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

  // ext_domain - computed: false, optional: true, required: false
  private _extDomain?: string; 
  public get extDomain() {
    return this.getStringAttribute('ext_domain');
  }
  public set extDomain(value: string) {
    this._extDomain = value;
  }
  public resetExtDomain() {
    this._extDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extDomainInput() {
    return this._extDomain;
  }

  // ext_label - computed: false, optional: true, required: false
  private _extLabel?: string; 
  public get extLabel() {
    return this.getStringAttribute('ext_label');
  }
  public set extLabel(value: string) {
    this._extLabel = value;
  }
  public resetExtLabel() {
    this._extLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extLabelInput() {
    return this._extLabel;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // microtenant_id - computed: false, optional: true, required: false
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

export class ApplicationSegmentBrowserAccessClientlessAppsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentBrowserAccessClientlessApps[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentBrowserAccessClientlessAppsOutputReference {
    return new ApplicationSegmentBrowserAccessClientlessAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentBrowserAccessServerGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#id ApplicationSegmentBrowserAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function applicationSegmentBrowserAccessServerGroupsToTerraform(struct?: ApplicationSegmentBrowserAccessServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function applicationSegmentBrowserAccessServerGroupsToHclTerraform(struct?: ApplicationSegmentBrowserAccessServerGroups | cdktf.IResolvable): any {
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

export class ApplicationSegmentBrowserAccessServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentBrowserAccessServerGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentBrowserAccessServerGroups | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentBrowserAccessServerGroupsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentBrowserAccessServerGroups[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentBrowserAccessServerGroupsOutputReference {
    return new ApplicationSegmentBrowserAccessServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentBrowserAccessZpnErId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#id ApplicationSegmentBrowserAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function applicationSegmentBrowserAccessZpnErIdToTerraform(struct?: ApplicationSegmentBrowserAccessZpnErId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function applicationSegmentBrowserAccessZpnErIdToHclTerraform(struct?: ApplicationSegmentBrowserAccessZpnErId | cdktf.IResolvable): any {
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

export class ApplicationSegmentBrowserAccessZpnErIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentBrowserAccessZpnErId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentBrowserAccessZpnErId | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentBrowserAccessZpnErIdList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentBrowserAccessZpnErId[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentBrowserAccessZpnErIdOutputReference {
    return new ApplicationSegmentBrowserAccessZpnErIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access zpa_application_segment_browser_access}
*/
export class ApplicationSegmentBrowserAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_application_segment_browser_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSegmentBrowserAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSegmentBrowserAccess to import
  * @param importFromId The id of the existing ApplicationSegmentBrowserAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSegmentBrowserAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_application_segment_browser_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.2/docs/resources/application_segment_browser_access zpa_application_segment_browser_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSegmentBrowserAccessConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationSegmentBrowserAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_application_segment_browser_access',
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
    this._segmentGroupName = config.segmentGroupName;
    this._selectConnectorCloseToApp = config.selectConnectorCloseToApp;
    this._tcpKeepAlive = config.tcpKeepAlive;
    this._tcpPortRange.internalValue = config.tcpPortRange;
    this._tcpPortRanges = config.tcpPortRanges;
    this._udpPortRange.internalValue = config.udpPortRange;
    this._udpPortRanges = config.udpPortRanges;
    this._useInDrMode = config.useInDrMode;
    this._clientlessApps.internalValue = config.clientlessApps;
    this._serverGroups.internalValue = config.serverGroups;
    this._zpnErId.internalValue = config.zpnErId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_type - computed: false, optional: true, required: false
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

  // double_encrypt - computed: false, optional: true, required: false
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

  // icmp_access_type - computed: false, optional: true, required: false
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

  // is_cname_enabled - computed: false, optional: true, required: false
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

  // segment_group_name - computed: true, optional: true, required: false
  private _segmentGroupName?: string; 
  public get segmentGroupName() {
    return this.getStringAttribute('segment_group_name');
  }
  public set segmentGroupName(value: string) {
    this._segmentGroupName = value;
  }
  public resetSegmentGroupName() {
    this._segmentGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentGroupNameInput() {
    return this._segmentGroupName;
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
  private _tcpPortRange = new ApplicationSegmentBrowserAccessTcpPortRangeList(this, "tcp_port_range", false);
  public get tcpPortRange() {
    return this._tcpPortRange;
  }
  public putTcpPortRange(value: ApplicationSegmentBrowserAccessTcpPortRange[] | cdktf.IResolvable) {
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
  private _udpPortRange = new ApplicationSegmentBrowserAccessUdpPortRangeList(this, "udp_port_range", false);
  public get udpPortRange() {
    return this._udpPortRange;
  }
  public putUdpPortRange(value: ApplicationSegmentBrowserAccessUdpPortRange[] | cdktf.IResolvable) {
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

  // clientless_apps - computed: false, optional: false, required: true
  private _clientlessApps = new ApplicationSegmentBrowserAccessClientlessAppsList(this, "clientless_apps", false);
  public get clientlessApps() {
    return this._clientlessApps;
  }
  public putClientlessApps(value: ApplicationSegmentBrowserAccessClientlessApps[] | cdktf.IResolvable) {
    this._clientlessApps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessAppsInput() {
    return this._clientlessApps.internalValue;
  }

  // server_groups - computed: false, optional: true, required: false
  private _serverGroups = new ApplicationSegmentBrowserAccessServerGroupsList(this, "server_groups", false);
  public get serverGroups() {
    return this._serverGroups;
  }
  public putServerGroups(value: ApplicationSegmentBrowserAccessServerGroups[] | cdktf.IResolvable) {
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
  private _zpnErId = new ApplicationSegmentBrowserAccessZpnErIdList(this, "zpn_er_id", false);
  public get zpnErId() {
    return this._zpnErId;
  }
  public putZpnErId(value: ApplicationSegmentBrowserAccessZpnErId[] | cdktf.IResolvable) {
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
      segment_group_name: cdktf.stringToTerraform(this._segmentGroupName),
      select_connector_close_to_app: cdktf.booleanToTerraform(this._selectConnectorCloseToApp),
      tcp_keep_alive: cdktf.stringToTerraform(this._tcpKeepAlive),
      tcp_port_range: cdktf.listMapper(applicationSegmentBrowserAccessTcpPortRangeToTerraform, false)(this._tcpPortRange.internalValue),
      tcp_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tcpPortRanges),
      udp_port_range: cdktf.listMapper(applicationSegmentBrowserAccessUdpPortRangeToTerraform, false)(this._udpPortRange.internalValue),
      udp_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._udpPortRanges),
      use_in_dr_mode: cdktf.booleanToTerraform(this._useInDrMode),
      clientless_apps: cdktf.listMapper(applicationSegmentBrowserAccessClientlessAppsToTerraform, true)(this._clientlessApps.internalValue),
      server_groups: cdktf.listMapper(applicationSegmentBrowserAccessServerGroupsToTerraform, true)(this._serverGroups.internalValue),
      zpn_er_id: cdktf.listMapper(applicationSegmentBrowserAccessZpnErIdToTerraform, true)(this._zpnErId.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      segment_group_name: {
        value: cdktf.stringToHclTerraform(this._segmentGroupName),
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
        value: cdktf.listMapperHcl(applicationSegmentBrowserAccessTcpPortRangeToHclTerraform, false)(this._tcpPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentBrowserAccessTcpPortRangeList",
      },
      tcp_port_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tcpPortRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      udp_port_range: {
        value: cdktf.listMapperHcl(applicationSegmentBrowserAccessUdpPortRangeToHclTerraform, false)(this._udpPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentBrowserAccessUdpPortRangeList",
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
      clientless_apps: {
        value: cdktf.listMapperHcl(applicationSegmentBrowserAccessClientlessAppsToHclTerraform, true)(this._clientlessApps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentBrowserAccessClientlessAppsList",
      },
      server_groups: {
        value: cdktf.listMapperHcl(applicationSegmentBrowserAccessServerGroupsToHclTerraform, true)(this._serverGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentBrowserAccessServerGroupsList",
      },
      zpn_er_id: {
        value: cdktf.listMapperHcl(applicationSegmentBrowserAccessZpnErIdToHclTerraform, true)(this._zpnErId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentBrowserAccessZpnErIdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
