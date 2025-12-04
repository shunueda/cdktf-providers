// https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationSegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to true, designates the application segment for API traffic inspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#api_protection_enabled ApplicationSegment#api_protection_enabled}
  */
  readonly apiProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#bypass_on_reauth ApplicationSegment#bypass_on_reauth}
  */
  readonly bypassOnReauth?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether users can bypass ZPA to access applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#bypass_type ApplicationSegment#bypass_type}
  */
  readonly bypassType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#config_space ApplicationSegment#config_space}
  */
  readonly configSpace?: string;
  /**
  * Description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#description ApplicationSegment#description}
  */
  readonly description?: string;
  /**
  * List of domains and IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#domain_names ApplicationSegment#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Whether Double Encryption is enabled or disabled for the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#double_encrypt ApplicationSegment#double_encrypt}
  */
  readonly doubleEncrypt?: boolean | cdktf.IResolvable;
  /**
  * Whether this application is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#enabled ApplicationSegment#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#fqdn_dns_check ApplicationSegment#fqdn_dns_check}
  */
  readonly fqdnDnsCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#health_check_type ApplicationSegment#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Whether health reporting for the app is Continuous or On Access. Supported values: NONE, ON_ACCESS, CONTINUOUS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#health_reporting ApplicationSegment#health_reporting}
  */
  readonly healthReporting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#icmp_access_type ApplicationSegment#icmp_access_type}
  */
  readonly icmpAccessType?: string;
  /**
  * Indicates if Inspect Traffic with ZIA is enabled for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#inspect_traffic_with_zia ApplicationSegment#inspect_traffic_with_zia}
  */
  readonly inspectTrafficWithZia?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#ip_anchored ApplicationSegment#ip_anchored}
  */
  readonly ipAnchored?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the Zscaler Client Connector (formerly Zscaler App or Z App) receives CNAME DNS records from the connectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#is_cname_enabled ApplicationSegment#is_cname_enabled}
  */
  readonly isCnameEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#is_incomplete_dr_config ApplicationSegment#is_incomplete_dr_config}
  */
  readonly isIncompleteDrConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#match_style ApplicationSegment#match_style}
  */
  readonly matchStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#microtenant_id ApplicationSegment#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#name ApplicationSegment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#passive_health_enabled ApplicationSegment#passive_health_enabled}
  */
  readonly passiveHealthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#segment_group_id ApplicationSegment#segment_group_id}
  */
  readonly segmentGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#segment_group_name ApplicationSegment#segment_group_name}
  */
  readonly segmentGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#select_connector_close_to_app ApplicationSegment#select_connector_close_to_app}
  */
  readonly selectConnectorCloseToApp?: boolean | cdktf.IResolvable;
  /**
  * Share the Application Segment to microtenants
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#share_to_microtenants ApplicationSegment#share_to_microtenants}
  */
  readonly shareToMicrotenants?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#tcp_keep_alive ApplicationSegment#tcp_keep_alive}
  */
  readonly tcpKeepAlive?: string;
  /**
  * tcp port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#tcp_port_range ApplicationSegment#tcp_port_range}
  */
  readonly tcpPortRange?: ApplicationSegmentTcpPortRange[] | cdktf.IResolvable;
  /**
  * TCP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#tcp_port_ranges ApplicationSegment#tcp_port_ranges}
  */
  readonly tcpPortRanges?: string[];
  /**
  * udp port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#udp_port_range ApplicationSegment#udp_port_range}
  */
  readonly udpPortRange?: ApplicationSegmentUdpPortRange[] | cdktf.IResolvable;
  /**
  * UDP port ranges used to access the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#udp_port_ranges ApplicationSegment#udp_port_ranges}
  */
  readonly udpPortRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#use_in_dr_mode ApplicationSegment#use_in_dr_mode}
  */
  readonly useInDrMode?: boolean | cdktf.IResolvable;
  /**
  * If set to true, designates the application segment for weighted load balancing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#weighted_load_balancing ApplicationSegment#weighted_load_balancing}
  */
  readonly weightedLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * server_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#server_groups ApplicationSegment#server_groups}
  */
  readonly serverGroups?: ApplicationSegmentServerGroups[] | cdktf.IResolvable;
  /**
  * zpn_er_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#zpn_er_id ApplicationSegment#zpn_er_id}
  */
  readonly zpnErId?: ApplicationSegmentZpnErId[] | cdktf.IResolvable;
}
export interface ApplicationSegmentTcpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#from ApplicationSegment#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#to ApplicationSegment#to}
  */
  readonly to?: string;
}

export function applicationSegmentTcpPortRangeToTerraform(struct?: ApplicationSegmentTcpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function applicationSegmentTcpPortRangeToHclTerraform(struct?: ApplicationSegmentTcpPortRange | cdktf.IResolvable): any {
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

export class ApplicationSegmentTcpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentTcpPortRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentTcpPortRange | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentTcpPortRangeList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentTcpPortRange[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentTcpPortRangeOutputReference {
    return new ApplicationSegmentTcpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentUdpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#from ApplicationSegment#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#to ApplicationSegment#to}
  */
  readonly to?: string;
}

export function applicationSegmentUdpPortRangeToTerraform(struct?: ApplicationSegmentUdpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function applicationSegmentUdpPortRangeToHclTerraform(struct?: ApplicationSegmentUdpPortRange | cdktf.IResolvable): any {
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

export class ApplicationSegmentUdpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentUdpPortRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentUdpPortRange | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentUdpPortRangeList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentUdpPortRange[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentUdpPortRangeOutputReference {
    return new ApplicationSegmentUdpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentServerGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#id ApplicationSegment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function applicationSegmentServerGroupsToTerraform(struct?: ApplicationSegmentServerGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function applicationSegmentServerGroupsToHclTerraform(struct?: ApplicationSegmentServerGroups | cdktf.IResolvable): any {
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

export class ApplicationSegmentServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentServerGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentServerGroups | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentServerGroupsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentServerGroups[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentServerGroupsOutputReference {
    return new ApplicationSegmentServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSegmentZpnErId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#id ApplicationSegment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string[];
}

export function applicationSegmentZpnErIdToTerraform(struct?: ApplicationSegmentZpnErId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
  }
}


export function applicationSegmentZpnErIdToHclTerraform(struct?: ApplicationSegmentZpnErId | cdktf.IResolvable): any {
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

export class ApplicationSegmentZpnErIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSegmentZpnErId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSegmentZpnErId | cdktf.IResolvable | undefined) {
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

export class ApplicationSegmentZpnErIdList extends cdktf.ComplexList {
  public internalValue? : ApplicationSegmentZpnErId[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSegmentZpnErIdOutputReference {
    return new ApplicationSegmentZpnErIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment zpa_application_segment}
*/
export class ApplicationSegment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_application_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationSegment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationSegment to import
  * @param importFromId The id of the existing ApplicationSegment that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationSegment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_application_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/application_segment zpa_application_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationSegmentConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationSegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_application_segment',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.4',
        providerVersionConstraint: '4.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiProtectionEnabled = config.apiProtectionEnabled;
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
    this._inspectTrafficWithZia = config.inspectTrafficWithZia;
    this._ipAnchored = config.ipAnchored;
    this._isCnameEnabled = config.isCnameEnabled;
    this._isIncompleteDrConfig = config.isIncompleteDrConfig;
    this._matchStyle = config.matchStyle;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._passiveHealthEnabled = config.passiveHealthEnabled;
    this._segmentGroupId = config.segmentGroupId;
    this._segmentGroupName = config.segmentGroupName;
    this._selectConnectorCloseToApp = config.selectConnectorCloseToApp;
    this._shareToMicrotenants = config.shareToMicrotenants;
    this._tcpKeepAlive = config.tcpKeepAlive;
    this._tcpPortRange.internalValue = config.tcpPortRange;
    this._tcpPortRanges = config.tcpPortRanges;
    this._udpPortRange.internalValue = config.udpPortRange;
    this._udpPortRanges = config.udpPortRanges;
    this._useInDrMode = config.useInDrMode;
    this._weightedLoadBalancing = config.weightedLoadBalancing;
    this._serverGroups.internalValue = config.serverGroups;
    this._zpnErId.internalValue = config.zpnErId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_protection_enabled - computed: false, optional: true, required: false
  private _apiProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get apiProtectionEnabled() {
    return this.getBooleanAttribute('api_protection_enabled');
  }
  public set apiProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._apiProtectionEnabled = value;
  }
  public resetApiProtectionEnabled() {
    this._apiProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProtectionEnabledInput() {
    return this._apiProtectionEnabled;
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

  // inspect_traffic_with_zia - computed: false, optional: true, required: false
  private _inspectTrafficWithZia?: boolean | cdktf.IResolvable; 
  public get inspectTrafficWithZia() {
    return this.getBooleanAttribute('inspect_traffic_with_zia');
  }
  public set inspectTrafficWithZia(value: boolean | cdktf.IResolvable) {
    this._inspectTrafficWithZia = value;
  }
  public resetInspectTrafficWithZia() {
    this._inspectTrafficWithZia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTrafficWithZiaInput() {
    return this._inspectTrafficWithZia;
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

  // match_style - computed: true, optional: true, required: false
  private _matchStyle?: string; 
  public get matchStyle() {
    return this.getStringAttribute('match_style');
  }
  public set matchStyle(value: string) {
    this._matchStyle = value;
  }
  public resetMatchStyle() {
    this._matchStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStyleInput() {
    return this._matchStyle;
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

  // segment_group_id - computed: true, optional: true, required: false
  private _segmentGroupId?: string; 
  public get segmentGroupId() {
    return this.getStringAttribute('segment_group_id');
  }
  public set segmentGroupId(value: string) {
    this._segmentGroupId = value;
  }
  public resetSegmentGroupId() {
    this._segmentGroupId = undefined;
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

  // share_to_microtenants - computed: false, optional: true, required: false
  private _shareToMicrotenants?: string[]; 
  public get shareToMicrotenants() {
    return cdktf.Fn.tolist(this.getListAttribute('share_to_microtenants'));
  }
  public set shareToMicrotenants(value: string[]) {
    this._shareToMicrotenants = value;
  }
  public resetShareToMicrotenants() {
    this._shareToMicrotenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareToMicrotenantsInput() {
    return this._shareToMicrotenants;
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
  private _tcpPortRange = new ApplicationSegmentTcpPortRangeList(this, "tcp_port_range", false);
  public get tcpPortRange() {
    return this._tcpPortRange;
  }
  public putTcpPortRange(value: ApplicationSegmentTcpPortRange[] | cdktf.IResolvable) {
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
  private _udpPortRange = new ApplicationSegmentUdpPortRangeList(this, "udp_port_range", false);
  public get udpPortRange() {
    return this._udpPortRange;
  }
  public putUdpPortRange(value: ApplicationSegmentUdpPortRange[] | cdktf.IResolvable) {
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

  // weighted_load_balancing - computed: false, optional: true, required: false
  private _weightedLoadBalancing?: boolean | cdktf.IResolvable; 
  public get weightedLoadBalancing() {
    return this.getBooleanAttribute('weighted_load_balancing');
  }
  public set weightedLoadBalancing(value: boolean | cdktf.IResolvable) {
    this._weightedLoadBalancing = value;
  }
  public resetWeightedLoadBalancing() {
    this._weightedLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedLoadBalancingInput() {
    return this._weightedLoadBalancing;
  }

  // server_groups - computed: false, optional: true, required: false
  private _serverGroups = new ApplicationSegmentServerGroupsList(this, "server_groups", false);
  public get serverGroups() {
    return this._serverGroups;
  }
  public putServerGroups(value: ApplicationSegmentServerGroups[] | cdktf.IResolvable) {
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
  private _zpnErId = new ApplicationSegmentZpnErIdList(this, "zpn_er_id", false);
  public get zpnErId() {
    return this._zpnErId;
  }
  public putZpnErId(value: ApplicationSegmentZpnErId[] | cdktf.IResolvable) {
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
      api_protection_enabled: cdktf.booleanToTerraform(this._apiProtectionEnabled),
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
      inspect_traffic_with_zia: cdktf.booleanToTerraform(this._inspectTrafficWithZia),
      ip_anchored: cdktf.booleanToTerraform(this._ipAnchored),
      is_cname_enabled: cdktf.booleanToTerraform(this._isCnameEnabled),
      is_incomplete_dr_config: cdktf.booleanToTerraform(this._isIncompleteDrConfig),
      match_style: cdktf.stringToTerraform(this._matchStyle),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      passive_health_enabled: cdktf.booleanToTerraform(this._passiveHealthEnabled),
      segment_group_id: cdktf.stringToTerraform(this._segmentGroupId),
      segment_group_name: cdktf.stringToTerraform(this._segmentGroupName),
      select_connector_close_to_app: cdktf.booleanToTerraform(this._selectConnectorCloseToApp),
      share_to_microtenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shareToMicrotenants),
      tcp_keep_alive: cdktf.stringToTerraform(this._tcpKeepAlive),
      tcp_port_range: cdktf.listMapper(applicationSegmentTcpPortRangeToTerraform, false)(this._tcpPortRange.internalValue),
      tcp_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tcpPortRanges),
      udp_port_range: cdktf.listMapper(applicationSegmentUdpPortRangeToTerraform, false)(this._udpPortRange.internalValue),
      udp_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._udpPortRanges),
      use_in_dr_mode: cdktf.booleanToTerraform(this._useInDrMode),
      weighted_load_balancing: cdktf.booleanToTerraform(this._weightedLoadBalancing),
      server_groups: cdktf.listMapper(applicationSegmentServerGroupsToTerraform, true)(this._serverGroups.internalValue),
      zpn_er_id: cdktf.listMapper(applicationSegmentZpnErIdToTerraform, true)(this._zpnErId.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_protection_enabled: {
        value: cdktf.booleanToHclTerraform(this._apiProtectionEnabled),
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
      inspect_traffic_with_zia: {
        value: cdktf.booleanToHclTerraform(this._inspectTrafficWithZia),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      match_style: {
        value: cdktf.stringToHclTerraform(this._matchStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      share_to_microtenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shareToMicrotenants),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tcp_keep_alive: {
        value: cdktf.stringToHclTerraform(this._tcpKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_port_range: {
        value: cdktf.listMapperHcl(applicationSegmentTcpPortRangeToHclTerraform, false)(this._tcpPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentTcpPortRangeList",
      },
      tcp_port_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tcpPortRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      udp_port_range: {
        value: cdktf.listMapperHcl(applicationSegmentUdpPortRangeToHclTerraform, false)(this._udpPortRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentUdpPortRangeList",
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
      weighted_load_balancing: {
        value: cdktf.booleanToHclTerraform(this._weightedLoadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_groups: {
        value: cdktf.listMapperHcl(applicationSegmentServerGroupsToHclTerraform, true)(this._serverGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentServerGroupsList",
      },
      zpn_er_id: {
        value: cdktf.listMapperHcl(applicationSegmentZpnErIdToHclTerraform, true)(this._zpnErId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSegmentZpnErIdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
