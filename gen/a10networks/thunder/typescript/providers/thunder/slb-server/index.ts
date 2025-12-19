// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable this Real Server; 'disable': Disable this Real Server; 'disable-with-health-check': disable real server, but health check work;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#action SlbServer#action}
  */
  readonly action?: string;
  /**
  * Connection Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#conn_limit SlbServer#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Connection Resume (Connection Resume (min active conn before resume taking new conn))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#conn_resume SlbServer#conn_resume}
  */
  readonly connResume?: number;
  /**
  * ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#ethernet SlbServer#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Enable extended statistics on real server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#extended_stats SlbServer#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * External IP address for NAT of GSLB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#external_ip SlbServer#external_ip}
  */
  readonly externalIp?: string;
  /**
  * Server hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#fqdn_name SlbServer#fqdn_name}
  */
  readonly fqdnName?: string;
  /**
  * Health Check Monitor (Health monitor name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#health_check SlbServer#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Disable configured health check configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#health_check_disable SlbServer#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Health Check Monitor (Health monitor name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#health_check_shared SlbServer#health_check_shared}
  */
  readonly healthCheckShared?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#host SlbServer#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#id SlbServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv6 address Mapping of GSLB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#ipv6 SlbServer#ipv6}
  */
  readonly ipv6?: string;
  /**
  * L2 health check path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#l2_health_check_path SlbServer#l2_health_check_path}
  */
  readonly l2HealthCheckPath?: string;
  /**
  * Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#name SlbServer#name}
  */
  readonly name: string;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#no_logging SlbServer#no_logging}
  */
  readonly noLogging?: number;
  /**
  * 'resolve-to-ipv4': Use A Query only to resolve FQDN; 'resolve-to-ipv6': Use AAAA Query only to resolve FQDN; 'resolve-to-ipv4-and-ipv6': Use A as well as AAAA Query to resolve FQDN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#resolve_as SlbServer#resolve_as}
  */
  readonly resolveAs?: string;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#server_ipv6_addr SlbServer#server_ipv6_addr}
  */
  readonly serverIpv6Addr?: string;
  /**
  * Reference a health-check from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#shared_partition_health_check SlbServer#shared_partition_health_check}
  */
  readonly sharedPartitionHealthCheck?: number;
  /**
  * Reference a server template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#shared_partition_server_template SlbServer#shared_partition_server_template}
  */
  readonly sharedPartitionServerTemplate?: number;
  /**
  * Slowly ramp up the connection number after server is up (start from 128, then double every 10 sec till 4096)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#slow_start SlbServer#slow_start}
  */
  readonly slowStart?: number;
  /**
  * This server is a spoofing cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#spoofing_cache SlbServer#spoofing_cache}
  */
  readonly spoofingCache?: number;
  /**
  * 'stats-data-enable': Enable statistical data collection for real server; 'stats-data-disable': Disable statistical data collection for real server;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#stats_data_action SlbServer#stats_data_action}
  */
  readonly statsDataAction?: string;
  /**
  * Link-Cost template (Link-Cost template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#template_link_cost SlbServer#template_link_cost}
  */
  readonly templateLinkCost?: string;
  /**
  * Server template (Server template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#template_server SlbServer#template_server}
  */
  readonly templateServer?: string;
  /**
  * Server Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#template_server_shared SlbServer#template_server_shared}
  */
  readonly templateServerShared?: string;
  /**
  * trunk interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#trunk SlbServer#trunk}
  */
  readonly trunk?: number;
  /**
  * Using aam server. For health check, please configure it in aam server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#use_aam_server SlbServer#use_aam_server}
  */
  readonly useAamServer?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#user_tag SlbServer#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#uuid SlbServer#uuid}
  */
  readonly uuid?: string;
  /**
  * Weight for this Real Server (Connection Weight)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#weight SlbServer#weight}
  */
  readonly weight?: number;
  /**
  * alternate_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#alternate_server SlbServer#alternate_server}
  */
  readonly alternateServer?: SlbServerAlternateServer[] | cdktf.IResolvable;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#port_list SlbServer#port_list}
  */
  readonly portList?: SlbServerPortListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#sampling_enable SlbServer#sampling_enable}
  */
  readonly samplingEnable?: SlbServerSamplingEnable[] | cdktf.IResolvable;
  /**
  * service_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#service_list SlbServer#service_list}
  */
  readonly serviceList?: SlbServerServiceListStruct[] | cdktf.IResolvable;
}
export interface SlbServerAlternateServer {
  /**
  * Alternate Server (Alternate Server Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#alternate SlbServer#alternate}
  */
  readonly alternate?: number;
  /**
  * Alternate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#alternate_name SlbServer#alternate_name}
  */
  readonly alternateName?: string;
}

export function slbServerAlternateServerToTerraform(struct?: SlbServerAlternateServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate: cdktf.numberToTerraform(struct!.alternate),
    alternate_name: cdktf.stringToTerraform(struct!.alternateName),
  }
}


export function slbServerAlternateServerToHclTerraform(struct?: SlbServerAlternateServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate: {
      value: cdktf.numberToHclTerraform(struct!.alternate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alternate_name: {
      value: cdktf.stringToHclTerraform(struct!.alternateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerAlternateServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServerAlternateServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternate = this._alternate;
    }
    if (this._alternateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateName = this._alternateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerAlternateServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternate = undefined;
      this._alternateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternate = value.alternate;
      this._alternateName = value.alternateName;
    }
  }

  // alternate - computed: false, optional: true, required: false
  private _alternate?: number; 
  public get alternate() {
    return this.getNumberAttribute('alternate');
  }
  public set alternate(value: number) {
    this._alternate = value;
  }
  public resetAlternate() {
    this._alternate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateInput() {
    return this._alternate;
  }

  // alternate_name - computed: false, optional: true, required: false
  private _alternateName?: string; 
  public get alternateName() {
    return this.getStringAttribute('alternate_name');
  }
  public set alternateName(value: string) {
    this._alternateName = value;
  }
  public resetAlternateName() {
    this._alternateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNameInput() {
    return this._alternateName;
  }
}

export class SlbServerAlternateServerList extends cdktf.ComplexList {
  public internalValue? : SlbServerAlternateServer[] | cdktf.IResolvable

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
  public get(index: number): SlbServerAlternateServerOutputReference {
    return new SlbServerAlternateServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServerPortListAlternatePort {
  /**
  * Alternate Server Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#alternate SlbServer#alternate}
  */
  readonly alternate?: number;
  /**
  * Alternate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#alternate_name SlbServer#alternate_name}
  */
  readonly alternateName?: string;
  /**
  * Port (Alternate Server Port Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#alternate_server_port SlbServer#alternate_server_port}
  */
  readonly alternateServerPort?: number;
}

export function slbServerPortListAlternatePortToTerraform(struct?: SlbServerPortListAlternatePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate: cdktf.numberToTerraform(struct!.alternate),
    alternate_name: cdktf.stringToTerraform(struct!.alternateName),
    alternate_server_port: cdktf.numberToTerraform(struct!.alternateServerPort),
  }
}


export function slbServerPortListAlternatePortToHclTerraform(struct?: SlbServerPortListAlternatePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate: {
      value: cdktf.numberToHclTerraform(struct!.alternate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alternate_name: {
      value: cdktf.stringToHclTerraform(struct!.alternateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alternate_server_port: {
      value: cdktf.numberToHclTerraform(struct!.alternateServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerPortListAlternatePortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServerPortListAlternatePort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternate !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternate = this._alternate;
    }
    if (this._alternateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateName = this._alternateName;
    }
    if (this._alternateServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateServerPort = this._alternateServerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerPortListAlternatePort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternate = undefined;
      this._alternateName = undefined;
      this._alternateServerPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternate = value.alternate;
      this._alternateName = value.alternateName;
      this._alternateServerPort = value.alternateServerPort;
    }
  }

  // alternate - computed: false, optional: true, required: false
  private _alternate?: number; 
  public get alternate() {
    return this.getNumberAttribute('alternate');
  }
  public set alternate(value: number) {
    this._alternate = value;
  }
  public resetAlternate() {
    this._alternate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateInput() {
    return this._alternate;
  }

  // alternate_name - computed: false, optional: true, required: false
  private _alternateName?: string; 
  public get alternateName() {
    return this.getStringAttribute('alternate_name');
  }
  public set alternateName(value: string) {
    this._alternateName = value;
  }
  public resetAlternateName() {
    this._alternateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNameInput() {
    return this._alternateName;
  }

  // alternate_server_port - computed: false, optional: true, required: false
  private _alternateServerPort?: number; 
  public get alternateServerPort() {
    return this.getNumberAttribute('alternate_server_port');
  }
  public set alternateServerPort(value: number) {
    this._alternateServerPort = value;
  }
  public resetAlternateServerPort() {
    this._alternateServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateServerPortInput() {
    return this._alternateServerPort;
  }
}

export class SlbServerPortListAlternatePortList extends cdktf.ComplexList {
  public internalValue? : SlbServerPortListAlternatePort[] | cdktf.IResolvable

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
  public get(index: number): SlbServerPortListAlternatePortOutputReference {
    return new SlbServerPortListAlternatePortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServerPortListAuthCfg {
  /**
  * Service Principal Name (Kerberos principal name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#service_principal_name SlbServer#service_principal_name}
  */
  readonly servicePrincipalName?: string;
}

export function slbServerPortListAuthCfgToTerraform(struct?: SlbServerPortListAuthCfgOutputReference | SlbServerPortListAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_principal_name: cdktf.stringToTerraform(struct!.servicePrincipalName),
  }
}


export function slbServerPortListAuthCfgToHclTerraform(struct?: SlbServerPortListAuthCfgOutputReference | SlbServerPortListAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_principal_name: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerPortListAuthCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbServerPortListAuthCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servicePrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalName = this._servicePrincipalName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerPortListAuthCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servicePrincipalName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servicePrincipalName = value.servicePrincipalName;
    }
  }

  // service_principal_name - computed: false, optional: true, required: false
  private _servicePrincipalName?: string; 
  public get servicePrincipalName() {
    return this.getStringAttribute('service_principal_name');
  }
  public set servicePrincipalName(value: string) {
    this._servicePrincipalName = value;
  }
  public resetServicePrincipalName() {
    this._servicePrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalNameInput() {
    return this._servicePrincipalName;
  }
}
export interface SlbServerPortListSamplingEnable {
  /**
  * 'all': all; 'curr_req': Current requests; 'total_req': Total Requests; 'total_req_succ': Total requests succ; 'total_fwd_bytes': Bytes processed in forward direction; 'total_fwd_pkts': Packets processed in forward direction; 'total_rev_bytes': Bytes processed in reverse direction; 'total_rev_pkts': Packets processed in reverse direction; 'total_conn': Total connections; 'last_total_conn': Last total connections; 'peak_conn': Peak connections; 'es_resp_200': Response status 200; 'es_resp_300': Response status 300; 'es_resp_400': Response status 400; 'es_resp_500': Response status 500; 'es_resp_other': Response status other; 'es_req_count': Total proxy requests; 'es_resp_count': Total proxy response; 'es_resp_invalid_http': Total non-http response; 'total_rev_pkts_inspected': Total reverse packets inspected; 'total_rev_pkts_inspected_good_status_code': Total reverse packets with good status code inspected; 'response_time': Response time; 'fastest_rsp_time': Fastest response time; 'slowest_rsp_time': Slowest response time; 'curr_ssl_conn': Current SSL connections; 'total_ssl_conn': Total SSL connections; 'resp-count': Total Response Count; 'resp-1xx': Response status 1xx; 'resp-2xx': Response status 2xx; 'resp-3xx': Response status 3xx; 'resp-4xx': Response status 4xx; 'resp-5xx': Response status 5xx; 'resp-other': Response status Other; 'resp-latency': Time to First Response Byte; 'curr_pconn': Current persistent connections;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#counters1 SlbServer#counters1}
  */
  readonly counters1?: string;
}

export function slbServerPortListSamplingEnableToTerraform(struct?: SlbServerPortListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbServerPortListSamplingEnableToHclTerraform(struct?: SlbServerPortListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerPortListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServerPortListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerPortListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbServerPortListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbServerPortListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbServerPortListSamplingEnableOutputReference {
    return new SlbServerPortListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServerPortListStruct {
  /**
  * 'enable': enable; 'disable': disable; 'disable-with-health-check': disable port, but health check work;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#action SlbServer#action}
  */
  readonly action?: string;
  /**
  * Connection Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#conn_limit SlbServer#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Connection Resume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#conn_resume SlbServer#conn_resume}
  */
  readonly connResume?: number;
  /**
  * Enable extended statistics on real server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#extended_stats SlbServer#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#follow_port_protocol SlbServer#follow_port_protocol}
  */
  readonly followPortProtocol?: string;
  /**
  * Health Check (Monitor Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#health_check SlbServer#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Disable health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#health_check_disable SlbServer#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Specify which port to follow for health status (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#health_check_follow_port SlbServer#health_check_follow_port}
  */
  readonly healthCheckFollowPort?: number;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#no_logging SlbServer#no_logging}
  */
  readonly noLogging?: number;
  /**
  * No SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#no_ssl SlbServer#no_ssl}
  */
  readonly noSsl?: number;
  /**
  * Force using HTTP/2 with Prior Knowledge all the time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#only SlbServer#only}
  */
  readonly only?: number;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#packet_capture_template SlbServer#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#port_number SlbServer#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#protocol SlbServer#protocol}
  */
  readonly protocol: string;
  /**
  * Port range (Port range value - used for vip-to-rport-mapping and vport-rport range mapping)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#range SlbServer#range}
  */
  readonly range?: number;
  /**
  * Health Check (Monitor Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#rport_health_check_shared SlbServer#rport_health_check_shared}
  */
  readonly rportHealthCheckShared?: string;
  /**
  * Reference a port template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#shared_partition_port_template SlbServer#shared_partition_port_template}
  */
  readonly sharedPartitionPortTemplate?: number;
  /**
  * Reference a health-check from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#shared_rport_health_check SlbServer#shared_rport_health_check}
  */
  readonly sharedRportHealthCheck?: number;
  /**
  * 'stats-data-enable': Enable statistical data collection for real server port; 'stats-data-disable': Disable statistical data collection for real server port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#stats_data_action SlbServer#stats_data_action}
  */
  readonly statsDataAction?: string;
  /**
  * Starting HTTP/2 with Prior Knowledge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#support_http2 SlbServer#support_http2}
  */
  readonly supportHttp2?: number;
  /**
  * Port template (Port template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#template_port SlbServer#template_port}
  */
  readonly templatePort?: string;
  /**
  * Port Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#template_port_shared SlbServer#template_port_shared}
  */
  readonly templatePortShared?: string;
  /**
  * Server side SSL template (Server side SSL Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#template_server_ssl SlbServer#template_server_ssl}
  */
  readonly templateServerSsl?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#user_tag SlbServer#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#uuid SlbServer#uuid}
  */
  readonly uuid?: string;
  /**
  * Port Weight (Connection Weight)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#weight SlbServer#weight}
  */
  readonly weight?: number;
  /**
  * alternate_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#alternate_port SlbServer#alternate_port}
  */
  readonly alternatePort?: SlbServerPortListAlternatePort[] | cdktf.IResolvable;
  /**
  * auth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#auth_cfg SlbServer#auth_cfg}
  */
  readonly authCfg?: SlbServerPortListAuthCfg;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#sampling_enable SlbServer#sampling_enable}
  */
  readonly samplingEnable?: SlbServerPortListSamplingEnable[] | cdktf.IResolvable;
}

export function slbServerPortListStructToTerraform(struct?: SlbServerPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    conn_limit: cdktf.numberToTerraform(struct!.connLimit),
    conn_resume: cdktf.numberToTerraform(struct!.connResume),
    extended_stats: cdktf.numberToTerraform(struct!.extendedStats),
    follow_port_protocol: cdktf.stringToTerraform(struct!.followPortProtocol),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    health_check_disable: cdktf.numberToTerraform(struct!.healthCheckDisable),
    health_check_follow_port: cdktf.numberToTerraform(struct!.healthCheckFollowPort),
    no_logging: cdktf.numberToTerraform(struct!.noLogging),
    no_ssl: cdktf.numberToTerraform(struct!.noSsl),
    only: cdktf.numberToTerraform(struct!.only),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    range: cdktf.numberToTerraform(struct!.range),
    rport_health_check_shared: cdktf.stringToTerraform(struct!.rportHealthCheckShared),
    shared_partition_port_template: cdktf.numberToTerraform(struct!.sharedPartitionPortTemplate),
    shared_rport_health_check: cdktf.numberToTerraform(struct!.sharedRportHealthCheck),
    stats_data_action: cdktf.stringToTerraform(struct!.statsDataAction),
    support_http2: cdktf.numberToTerraform(struct!.supportHttp2),
    template_port: cdktf.stringToTerraform(struct!.templatePort),
    template_port_shared: cdktf.stringToTerraform(struct!.templatePortShared),
    template_server_ssl: cdktf.stringToTerraform(struct!.templateServerSsl),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    alternate_port: cdktf.listMapper(slbServerPortListAlternatePortToTerraform, true)(struct!.alternatePort),
    auth_cfg: slbServerPortListAuthCfgToTerraform(struct!.authCfg),
    sampling_enable: cdktf.listMapper(slbServerPortListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbServerPortListStructToHclTerraform(struct?: SlbServerPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.connLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_resume: {
      value: cdktf.numberToHclTerraform(struct!.connResume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extended_stats: {
      value: cdktf.numberToHclTerraform(struct!.extendedStats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    follow_port_protocol: {
      value: cdktf.stringToHclTerraform(struct!.followPortProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_follow_port: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckFollowPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_logging: {
      value: cdktf.numberToHclTerraform(struct!.noLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ssl: {
      value: cdktf.numberToHclTerraform(struct!.noSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    only: {
      value: cdktf.numberToHclTerraform(struct!.only),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_capture_template: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
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
    range: {
      value: cdktf.numberToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rport_health_check_shared: {
      value: cdktf.stringToHclTerraform(struct!.rportHealthCheckShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_partition_port_template: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionPortTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_rport_health_check: {
      value: cdktf.numberToHclTerraform(struct!.sharedRportHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats_data_action: {
      value: cdktf.stringToHclTerraform(struct!.statsDataAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_http2: {
      value: cdktf.numberToHclTerraform(struct!.supportHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_port: {
      value: cdktf.stringToHclTerraform(struct!.templatePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_port_shared: {
      value: cdktf.stringToHclTerraform(struct!.templatePortShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_server_ssl: {
      value: cdktf.stringToHclTerraform(struct!.templateServerSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
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
    alternate_port: {
      value: cdktf.listMapperHcl(slbServerPortListAlternatePortToHclTerraform, true)(struct!.alternatePort),
      isBlock: true,
      type: "list",
      storageClassType: "SlbServerPortListAlternatePortList",
    },
    auth_cfg: {
      value: slbServerPortListAuthCfgToHclTerraform(struct!.authCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SlbServerPortListAuthCfgList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(slbServerPortListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbServerPortListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServerPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._connLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connLimit = this._connLimit;
    }
    if (this._connResume !== undefined) {
      hasAnyValues = true;
      internalValueResult.connResume = this._connResume;
    }
    if (this._extendedStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedStats = this._extendedStats;
    }
    if (this._followPortProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.followPortProtocol = this._followPortProtocol;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._healthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckDisable = this._healthCheckDisable;
    }
    if (this._healthCheckFollowPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckFollowPort = this._healthCheckFollowPort;
    }
    if (this._noLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLogging = this._noLogging;
    }
    if (this._noSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSsl = this._noSsl;
    }
    if (this._only !== undefined) {
      hasAnyValues = true;
      internalValueResult.only = this._only;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._rportHealthCheckShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.rportHealthCheckShared = this._rportHealthCheckShared;
    }
    if (this._sharedPartitionPortTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionPortTemplate = this._sharedPartitionPortTemplate;
    }
    if (this._sharedRportHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedRportHealthCheck = this._sharedRportHealthCheck;
    }
    if (this._statsDataAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsDataAction = this._statsDataAction;
    }
    if (this._supportHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportHttp2 = this._supportHttp2;
    }
    if (this._templatePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePort = this._templatePort;
    }
    if (this._templatePortShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePortShared = this._templatePortShared;
    }
    if (this._templateServerSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateServerSsl = this._templateServerSsl;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._alternatePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternatePort = this._alternatePort?.internalValue;
    }
    if (this._authCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCfg = this._authCfg?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._connLimit = undefined;
      this._connResume = undefined;
      this._extendedStats = undefined;
      this._followPortProtocol = undefined;
      this._healthCheck = undefined;
      this._healthCheckDisable = undefined;
      this._healthCheckFollowPort = undefined;
      this._noLogging = undefined;
      this._noSsl = undefined;
      this._only = undefined;
      this._packetCaptureTemplate = undefined;
      this._portNumber = undefined;
      this._protocol = undefined;
      this._range = undefined;
      this._rportHealthCheckShared = undefined;
      this._sharedPartitionPortTemplate = undefined;
      this._sharedRportHealthCheck = undefined;
      this._statsDataAction = undefined;
      this._supportHttp2 = undefined;
      this._templatePort = undefined;
      this._templatePortShared = undefined;
      this._templateServerSsl = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._alternatePort.internalValue = undefined;
      this._authCfg.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._connLimit = value.connLimit;
      this._connResume = value.connResume;
      this._extendedStats = value.extendedStats;
      this._followPortProtocol = value.followPortProtocol;
      this._healthCheck = value.healthCheck;
      this._healthCheckDisable = value.healthCheckDisable;
      this._healthCheckFollowPort = value.healthCheckFollowPort;
      this._noLogging = value.noLogging;
      this._noSsl = value.noSsl;
      this._only = value.only;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._portNumber = value.portNumber;
      this._protocol = value.protocol;
      this._range = value.range;
      this._rportHealthCheckShared = value.rportHealthCheckShared;
      this._sharedPartitionPortTemplate = value.sharedPartitionPortTemplate;
      this._sharedRportHealthCheck = value.sharedRportHealthCheck;
      this._statsDataAction = value.statsDataAction;
      this._supportHttp2 = value.supportHttp2;
      this._templatePort = value.templatePort;
      this._templatePortShared = value.templatePortShared;
      this._templateServerSsl = value.templateServerSsl;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._alternatePort.internalValue = value.alternatePort;
      this._authCfg.internalValue = value.authCfg;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // conn_resume - computed: false, optional: true, required: false
  private _connResume?: number; 
  public get connResume() {
    return this.getNumberAttribute('conn_resume');
  }
  public set connResume(value: number) {
    this._connResume = value;
  }
  public resetConnResume() {
    this._connResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connResumeInput() {
    return this._connResume;
  }

  // extended_stats - computed: false, optional: true, required: false
  private _extendedStats?: number; 
  public get extendedStats() {
    return this.getNumberAttribute('extended_stats');
  }
  public set extendedStats(value: number) {
    this._extendedStats = value;
  }
  public resetExtendedStats() {
    this._extendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatsInput() {
    return this._extendedStats;
  }

  // follow_port_protocol - computed: false, optional: true, required: false
  private _followPortProtocol?: string; 
  public get followPortProtocol() {
    return this.getStringAttribute('follow_port_protocol');
  }
  public set followPortProtocol(value: string) {
    this._followPortProtocol = value;
  }
  public resetFollowPortProtocol() {
    this._followPortProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followPortProtocolInput() {
    return this._followPortProtocol;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
  }

  // health_check_follow_port - computed: false, optional: true, required: false
  private _healthCheckFollowPort?: number; 
  public get healthCheckFollowPort() {
    return this.getNumberAttribute('health_check_follow_port');
  }
  public set healthCheckFollowPort(value: number) {
    this._healthCheckFollowPort = value;
  }
  public resetHealthCheckFollowPort() {
    this._healthCheckFollowPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckFollowPortInput() {
    return this._healthCheckFollowPort;
  }

  // no_logging - computed: false, optional: true, required: false
  private _noLogging?: number; 
  public get noLogging() {
    return this.getNumberAttribute('no_logging');
  }
  public set noLogging(value: number) {
    this._noLogging = value;
  }
  public resetNoLogging() {
    this._noLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLoggingInput() {
    return this._noLogging;
  }

  // no_ssl - computed: false, optional: true, required: false
  private _noSsl?: number; 
  public get noSsl() {
    return this.getNumberAttribute('no_ssl');
  }
  public set noSsl(value: number) {
    this._noSsl = value;
  }
  public resetNoSsl() {
    this._noSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSslInput() {
    return this._noSsl;
  }

  // only - computed: false, optional: true, required: false
  private _only?: number; 
  public get only() {
    return this.getNumberAttribute('only');
  }
  public set only(value: number) {
    this._only = value;
  }
  public resetOnly() {
    this._only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyInput() {
    return this._only;
  }

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
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

  // range - computed: false, optional: true, required: false
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // rport_health_check_shared - computed: false, optional: true, required: false
  private _rportHealthCheckShared?: string; 
  public get rportHealthCheckShared() {
    return this.getStringAttribute('rport_health_check_shared');
  }
  public set rportHealthCheckShared(value: string) {
    this._rportHealthCheckShared = value;
  }
  public resetRportHealthCheckShared() {
    this._rportHealthCheckShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rportHealthCheckSharedInput() {
    return this._rportHealthCheckShared;
  }

  // shared_partition_port_template - computed: false, optional: true, required: false
  private _sharedPartitionPortTemplate?: number; 
  public get sharedPartitionPortTemplate() {
    return this.getNumberAttribute('shared_partition_port_template');
  }
  public set sharedPartitionPortTemplate(value: number) {
    this._sharedPartitionPortTemplate = value;
  }
  public resetSharedPartitionPortTemplate() {
    this._sharedPartitionPortTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPortTemplateInput() {
    return this._sharedPartitionPortTemplate;
  }

  // shared_rport_health_check - computed: false, optional: true, required: false
  private _sharedRportHealthCheck?: number; 
  public get sharedRportHealthCheck() {
    return this.getNumberAttribute('shared_rport_health_check');
  }
  public set sharedRportHealthCheck(value: number) {
    this._sharedRportHealthCheck = value;
  }
  public resetSharedRportHealthCheck() {
    this._sharedRportHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedRportHealthCheckInput() {
    return this._sharedRportHealthCheck;
  }

  // stats_data_action - computed: false, optional: true, required: false
  private _statsDataAction?: string; 
  public get statsDataAction() {
    return this.getStringAttribute('stats_data_action');
  }
  public set statsDataAction(value: string) {
    this._statsDataAction = value;
  }
  public resetStatsDataAction() {
    this._statsDataAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsDataActionInput() {
    return this._statsDataAction;
  }

  // support_http2 - computed: false, optional: true, required: false
  private _supportHttp2?: number; 
  public get supportHttp2() {
    return this.getNumberAttribute('support_http2');
  }
  public set supportHttp2(value: number) {
    this._supportHttp2 = value;
  }
  public resetSupportHttp2() {
    this._supportHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportHttp2Input() {
    return this._supportHttp2;
  }

  // template_port - computed: false, optional: true, required: false
  private _templatePort?: string; 
  public get templatePort() {
    return this.getStringAttribute('template_port');
  }
  public set templatePort(value: string) {
    this._templatePort = value;
  }
  public resetTemplatePort() {
    this._templatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePortInput() {
    return this._templatePort;
  }

  // template_port_shared - computed: false, optional: true, required: false
  private _templatePortShared?: string; 
  public get templatePortShared() {
    return this.getStringAttribute('template_port_shared');
  }
  public set templatePortShared(value: string) {
    this._templatePortShared = value;
  }
  public resetTemplatePortShared() {
    this._templatePortShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePortSharedInput() {
    return this._templatePortShared;
  }

  // template_server_ssl - computed: false, optional: true, required: false
  private _templateServerSsl?: string; 
  public get templateServerSsl() {
    return this.getStringAttribute('template_server_ssl');
  }
  public set templateServerSsl(value: string) {
    this._templateServerSsl = value;
  }
  public resetTemplateServerSsl() {
    this._templateServerSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerSslInput() {
    return this._templateServerSsl;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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

  // alternate_port - computed: false, optional: true, required: false
  private _alternatePort = new SlbServerPortListAlternatePortList(this, "alternate_port", false);
  public get alternatePort() {
    return this._alternatePort;
  }
  public putAlternatePort(value: SlbServerPortListAlternatePort[] | cdktf.IResolvable) {
    this._alternatePort.internalValue = value;
  }
  public resetAlternatePort() {
    this._alternatePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternatePortInput() {
    return this._alternatePort.internalValue;
  }

  // auth_cfg - computed: false, optional: true, required: false
  private _authCfg = new SlbServerPortListAuthCfgOutputReference(this, "auth_cfg");
  public get authCfg() {
    return this._authCfg;
  }
  public putAuthCfg(value: SlbServerPortListAuthCfg) {
    this._authCfg.internalValue = value;
  }
  public resetAuthCfg() {
    this._authCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCfgInput() {
    return this._authCfg.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbServerPortListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbServerPortListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbServerPortListStructList extends cdktf.ComplexList {
  public internalValue? : SlbServerPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbServerPortListStructOutputReference {
    return new SlbServerPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServerSamplingEnable {
  /**
  * 'all': all; 'total-conn': Total established connections; 'fwd-pkt': Forward Packets Processed; 'rev-pkt': Reverse Packets Processed; 'peak-conn': Peak number of established connections; 'total_req': Total Requests processed; 'total_req_succ': Total Requests succeeded; 'curr_ssl_conn': Current SSL connections established; 'total_ssl_conn': Total SSL connections established; 'total_fwd_bytes': Bytes processed in forward direction; 'total_rev_bytes': Bytes processed in reverse direction; 'total_fwd_pkts': Packets processed in forward direction; 'total_rev_pkts': Packets processed in reverse direction; 'ip_only_lb_fwd_bytes': IP-Only-LB Bytes processed in forward direction; 'ip_only_lb_rev_bytes': IP-Only-LB Bytes processed in reverse direction; 'ip_only_lb_fwd_pkts': IP-Only-LB Packets processed in forward direction; 'ip_only_lb_rev_pkts': IP-Only-LB Packets processed in reverse direction;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#counters1 SlbServer#counters1}
  */
  readonly counters1?: string;
}

export function slbServerSamplingEnableToTerraform(struct?: SlbServerSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbServerSamplingEnableToHclTerraform(struct?: SlbServerSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServerSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbServerSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbServerSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbServerSamplingEnableOutputReference {
    return new SlbServerSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServerServiceListSamplingEnable {
  /**
  * 'all': all; 'curr_req': Current requests; 'total_req': Total Requests; 'total_req_succ': Total requests succ; 'total_fwd_bytes': Bytes processed in forward direction; 'total_fwd_pkts': Packets processed in forward direction; 'total_rev_bytes': Bytes processed in reverse direction; 'total_rev_pkts': Packets processed in reverse direction; 'total_conn': Total connections; 'last_total_conn': Last total connections; 'peak_conn': Peak connections; 'es_resp_200': Response status 200; 'es_resp_300': Response status 300; 'es_resp_400': Response status 400; 'es_resp_500': Response status 500; 'es_resp_other': Response status other; 'es_req_count': Total proxy requests; 'es_resp_count': Total proxy response; 'es_resp_invalid_http': Total non-http response; 'total_rev_pkts_inspected': Total reverse packets inspected; 'total_rev_pkts_inspected_good_status_code': Total reverse packets with good status code inspected; 'response_time': Response time; 'fastest_rsp_time': Fastest response time; 'slowest_rsp_time': Slowest response time; 'curr_ssl_conn': Current SSL connections; 'total_ssl_conn': Total SSL connections; 'resp-count': Total Response Count; 'resp-1xx': Response status 1xx; 'resp-2xx': Response status 2xx; 'resp-3xx': Response status 3xx; 'resp-4xx': Response status 4xx; 'resp-5xx': Response status 5xx; 'resp-other': Response status Other; 'resp-latency': Time to First Response Byte; 'curr_pconn': Current persistent connections;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#counters1 SlbServer#counters1}
  */
  readonly counters1?: string;
}

export function slbServerServiceListSamplingEnableToTerraform(struct?: SlbServerServiceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbServerServiceListSamplingEnableToHclTerraform(struct?: SlbServerServiceListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerServiceListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServerServiceListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerServiceListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbServerServiceListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbServerServiceListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbServerServiceListSamplingEnableOutputReference {
    return new SlbServerServiceListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServerServiceListStruct {
  /**
  * 'enable': enable; 'disable': disable; 'disable-with-health-check': disable port, but health check work;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#action SlbServer#action}
  */
  readonly action?: string;
  /**
  * Health Check (Monitor Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#health_check SlbServer#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Disable health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#health_check_disable SlbServer#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Service Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#label SlbServer#label}
  */
  readonly label: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#packet_capture_template SlbServer#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#port_number SlbServer#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#protocol SlbServer#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#user_tag SlbServer#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#uuid SlbServer#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#sampling_enable SlbServer#sampling_enable}
  */
  readonly samplingEnable?: SlbServerServiceListSamplingEnable[] | cdktf.IResolvable;
}

export function slbServerServiceListStructToTerraform(struct?: SlbServerServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    health_check_disable: cdktf.numberToTerraform(struct!.healthCheckDisable),
    label: cdktf.stringToTerraform(struct!.label),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(slbServerServiceListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function slbServerServiceListStructToHclTerraform(struct?: SlbServerServiceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_disable: {
      value: cdktf.numberToHclTerraform(struct!.healthCheckDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_capture_template: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
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
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(slbServerServiceListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SlbServerServiceListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbServerServiceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServerServiceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._healthCheckDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckDisable = this._healthCheckDisable;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerServiceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._healthCheck = undefined;
      this._healthCheckDisable = undefined;
      this._label = undefined;
      this._packetCaptureTemplate = undefined;
      this._portNumber = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._healthCheck = value.healthCheck;
      this._healthCheckDisable = value.healthCheckDisable;
      this._label = value.label;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._portNumber = value.portNumber;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbServerServiceListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbServerServiceListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class SlbServerServiceListStructList extends cdktf.ComplexList {
  public internalValue? : SlbServerServiceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbServerServiceListStructOutputReference {
    return new SlbServerServiceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server thunder_slb_server}
*/
export class SlbServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbServer to import
  * @param importFromId The id of the existing SlbServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server thunder_slb_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbServerConfig
  */
  public constructor(scope: Construct, id: string, config: SlbServerConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_server',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._connLimit = config.connLimit;
    this._connResume = config.connResume;
    this._ethernet = config.ethernet;
    this._extendedStats = config.extendedStats;
    this._externalIp = config.externalIp;
    this._fqdnName = config.fqdnName;
    this._healthCheck = config.healthCheck;
    this._healthCheckDisable = config.healthCheckDisable;
    this._healthCheckShared = config.healthCheckShared;
    this._host = config.host;
    this._id = config.id;
    this._ipv6 = config.ipv6;
    this._l2HealthCheckPath = config.l2HealthCheckPath;
    this._name = config.name;
    this._noLogging = config.noLogging;
    this._resolveAs = config.resolveAs;
    this._serverIpv6Addr = config.serverIpv6Addr;
    this._sharedPartitionHealthCheck = config.sharedPartitionHealthCheck;
    this._sharedPartitionServerTemplate = config.sharedPartitionServerTemplate;
    this._slowStart = config.slowStart;
    this._spoofingCache = config.spoofingCache;
    this._statsDataAction = config.statsDataAction;
    this._templateLinkCost = config.templateLinkCost;
    this._templateServer = config.templateServer;
    this._templateServerShared = config.templateServerShared;
    this._trunk = config.trunk;
    this._useAamServer = config.useAamServer;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._weight = config.weight;
    this._alternateServer.internalValue = config.alternateServer;
    this._portList.internalValue = config.portList;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._serviceList.internalValue = config.serviceList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // conn_resume - computed: false, optional: true, required: false
  private _connResume?: number; 
  public get connResume() {
    return this.getNumberAttribute('conn_resume');
  }
  public set connResume(value: number) {
    this._connResume = value;
  }
  public resetConnResume() {
    this._connResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connResumeInput() {
    return this._connResume;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // extended_stats - computed: false, optional: true, required: false
  private _extendedStats?: number; 
  public get extendedStats() {
    return this.getNumberAttribute('extended_stats');
  }
  public set extendedStats(value: number) {
    this._extendedStats = value;
  }
  public resetExtendedStats() {
    this._extendedStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatsInput() {
    return this._extendedStats;
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // fqdn_name - computed: false, optional: true, required: false
  private _fqdnName?: string; 
  public get fqdnName() {
    return this.getStringAttribute('fqdn_name');
  }
  public set fqdnName(value: string) {
    this._fqdnName = value;
  }
  public resetFqdnName() {
    this._fqdnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNameInput() {
    return this._fqdnName;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_disable - computed: false, optional: true, required: false
  private _healthCheckDisable?: number; 
  public get healthCheckDisable() {
    return this.getNumberAttribute('health_check_disable');
  }
  public set healthCheckDisable(value: number) {
    this._healthCheckDisable = value;
  }
  public resetHealthCheckDisable() {
    this._healthCheckDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckDisableInput() {
    return this._healthCheckDisable;
  }

  // health_check_shared - computed: false, optional: true, required: false
  private _healthCheckShared?: string; 
  public get healthCheckShared() {
    return this.getStringAttribute('health_check_shared');
  }
  public set healthCheckShared(value: string) {
    this._healthCheckShared = value;
  }
  public resetHealthCheckShared() {
    this._healthCheckShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckSharedInput() {
    return this._healthCheckShared;
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

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // l2_health_check_path - computed: false, optional: true, required: false
  private _l2HealthCheckPath?: string; 
  public get l2HealthCheckPath() {
    return this.getStringAttribute('l2_health_check_path');
  }
  public set l2HealthCheckPath(value: string) {
    this._l2HealthCheckPath = value;
  }
  public resetL2HealthCheckPath() {
    this._l2HealthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HealthCheckPathInput() {
    return this._l2HealthCheckPath;
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

  // no_logging - computed: false, optional: true, required: false
  private _noLogging?: number; 
  public get noLogging() {
    return this.getNumberAttribute('no_logging');
  }
  public set noLogging(value: number) {
    this._noLogging = value;
  }
  public resetNoLogging() {
    this._noLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLoggingInput() {
    return this._noLogging;
  }

  // resolve_as - computed: false, optional: true, required: false
  private _resolveAs?: string; 
  public get resolveAs() {
    return this.getStringAttribute('resolve_as');
  }
  public set resolveAs(value: string) {
    this._resolveAs = value;
  }
  public resetResolveAs() {
    this._resolveAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveAsInput() {
    return this._resolveAs;
  }

  // server_ipv6_addr - computed: false, optional: true, required: false
  private _serverIpv6Addr?: string; 
  public get serverIpv6Addr() {
    return this.getStringAttribute('server_ipv6_addr');
  }
  public set serverIpv6Addr(value: string) {
    this._serverIpv6Addr = value;
  }
  public resetServerIpv6Addr() {
    this._serverIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpv6AddrInput() {
    return this._serverIpv6Addr;
  }

  // shared_partition_health_check - computed: false, optional: true, required: false
  private _sharedPartitionHealthCheck?: number; 
  public get sharedPartitionHealthCheck() {
    return this.getNumberAttribute('shared_partition_health_check');
  }
  public set sharedPartitionHealthCheck(value: number) {
    this._sharedPartitionHealthCheck = value;
  }
  public resetSharedPartitionHealthCheck() {
    this._sharedPartitionHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionHealthCheckInput() {
    return this._sharedPartitionHealthCheck;
  }

  // shared_partition_server_template - computed: false, optional: true, required: false
  private _sharedPartitionServerTemplate?: number; 
  public get sharedPartitionServerTemplate() {
    return this.getNumberAttribute('shared_partition_server_template');
  }
  public set sharedPartitionServerTemplate(value: number) {
    this._sharedPartitionServerTemplate = value;
  }
  public resetSharedPartitionServerTemplate() {
    this._sharedPartitionServerTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionServerTemplateInput() {
    return this._sharedPartitionServerTemplate;
  }

  // slow_start - computed: false, optional: true, required: false
  private _slowStart?: number; 
  public get slowStart() {
    return this.getNumberAttribute('slow_start');
  }
  public set slowStart(value: number) {
    this._slowStart = value;
  }
  public resetSlowStart() {
    this._slowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartInput() {
    return this._slowStart;
  }

  // spoofing_cache - computed: false, optional: true, required: false
  private _spoofingCache?: number; 
  public get spoofingCache() {
    return this.getNumberAttribute('spoofing_cache');
  }
  public set spoofingCache(value: number) {
    this._spoofingCache = value;
  }
  public resetSpoofingCache() {
    this._spoofingCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofingCacheInput() {
    return this._spoofingCache;
  }

  // stats_data_action - computed: false, optional: true, required: false
  private _statsDataAction?: string; 
  public get statsDataAction() {
    return this.getStringAttribute('stats_data_action');
  }
  public set statsDataAction(value: string) {
    this._statsDataAction = value;
  }
  public resetStatsDataAction() {
    this._statsDataAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsDataActionInput() {
    return this._statsDataAction;
  }

  // template_link_cost - computed: false, optional: true, required: false
  private _templateLinkCost?: string; 
  public get templateLinkCost() {
    return this.getStringAttribute('template_link_cost');
  }
  public set templateLinkCost(value: string) {
    this._templateLinkCost = value;
  }
  public resetTemplateLinkCost() {
    this._templateLinkCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLinkCostInput() {
    return this._templateLinkCost;
  }

  // template_server - computed: false, optional: true, required: false
  private _templateServer?: string; 
  public get templateServer() {
    return this.getStringAttribute('template_server');
  }
  public set templateServer(value: string) {
    this._templateServer = value;
  }
  public resetTemplateServer() {
    this._templateServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerInput() {
    return this._templateServer;
  }

  // template_server_shared - computed: false, optional: true, required: false
  private _templateServerShared?: string; 
  public get templateServerShared() {
    return this.getStringAttribute('template_server_shared');
  }
  public set templateServerShared(value: string) {
    this._templateServerShared = value;
  }
  public resetTemplateServerShared() {
    this._templateServerShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerSharedInput() {
    return this._templateServerShared;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // use_aam_server - computed: false, optional: true, required: false
  private _useAamServer?: number; 
  public get useAamServer() {
    return this.getNumberAttribute('use_aam_server');
  }
  public set useAamServer(value: number) {
    this._useAamServer = value;
  }
  public resetUseAamServer() {
    this._useAamServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAamServerInput() {
    return this._useAamServer;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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

  // alternate_server - computed: false, optional: true, required: false
  private _alternateServer = new SlbServerAlternateServerList(this, "alternate_server", false);
  public get alternateServer() {
    return this._alternateServer;
  }
  public putAlternateServer(value: SlbServerAlternateServer[] | cdktf.IResolvable) {
    this._alternateServer.internalValue = value;
  }
  public resetAlternateServer() {
    this._alternateServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateServerInput() {
    return this._alternateServer.internalValue;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new SlbServerPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: SlbServerPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbServerSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbServerSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // service_list - computed: false, optional: true, required: false
  private _serviceList = new SlbServerServiceListStructList(this, "service_list", false);
  public get serviceList() {
    return this._serviceList;
  }
  public putServiceList(value: SlbServerServiceListStruct[] | cdktf.IResolvable) {
    this._serviceList.internalValue = value;
  }
  public resetServiceList() {
    this._serviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceListInput() {
    return this._serviceList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      conn_resume: cdktf.numberToTerraform(this._connResume),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      extended_stats: cdktf.numberToTerraform(this._extendedStats),
      external_ip: cdktf.stringToTerraform(this._externalIp),
      fqdn_name: cdktf.stringToTerraform(this._fqdnName),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      health_check_disable: cdktf.numberToTerraform(this._healthCheckDisable),
      health_check_shared: cdktf.stringToTerraform(this._healthCheckShared),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      l2_health_check_path: cdktf.stringToTerraform(this._l2HealthCheckPath),
      name: cdktf.stringToTerraform(this._name),
      no_logging: cdktf.numberToTerraform(this._noLogging),
      resolve_as: cdktf.stringToTerraform(this._resolveAs),
      server_ipv6_addr: cdktf.stringToTerraform(this._serverIpv6Addr),
      shared_partition_health_check: cdktf.numberToTerraform(this._sharedPartitionHealthCheck),
      shared_partition_server_template: cdktf.numberToTerraform(this._sharedPartitionServerTemplate),
      slow_start: cdktf.numberToTerraform(this._slowStart),
      spoofing_cache: cdktf.numberToTerraform(this._spoofingCache),
      stats_data_action: cdktf.stringToTerraform(this._statsDataAction),
      template_link_cost: cdktf.stringToTerraform(this._templateLinkCost),
      template_server: cdktf.stringToTerraform(this._templateServer),
      template_server_shared: cdktf.stringToTerraform(this._templateServerShared),
      trunk: cdktf.numberToTerraform(this._trunk),
      use_aam_server: cdktf.numberToTerraform(this._useAamServer),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      weight: cdktf.numberToTerraform(this._weight),
      alternate_server: cdktf.listMapper(slbServerAlternateServerToTerraform, true)(this._alternateServer.internalValue),
      port_list: cdktf.listMapper(slbServerPortListStructToTerraform, true)(this._portList.internalValue),
      sampling_enable: cdktf.listMapper(slbServerSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      service_list: cdktf.listMapper(slbServerServiceListStructToTerraform, true)(this._serviceList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_limit: {
        value: cdktf.numberToHclTerraform(this._connLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conn_resume: {
        value: cdktf.numberToHclTerraform(this._connResume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_stats: {
        value: cdktf.numberToHclTerraform(this._extendedStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_ip: {
        value: cdktf.stringToHclTerraform(this._externalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_name: {
        value: cdktf.stringToHclTerraform(this._fqdnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_disable: {
        value: cdktf.numberToHclTerraform(this._healthCheckDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_shared: {
        value: cdktf.stringToHclTerraform(this._healthCheckShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2_health_check_path: {
        value: cdktf.stringToHclTerraform(this._l2HealthCheckPath),
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
      no_logging: {
        value: cdktf.numberToHclTerraform(this._noLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolve_as: {
        value: cdktf.stringToHclTerraform(this._resolveAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._serverIpv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_partition_health_check: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_server_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionServerTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slow_start: {
        value: cdktf.numberToHclTerraform(this._slowStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spoofing_cache: {
        value: cdktf.numberToHclTerraform(this._spoofingCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats_data_action: {
        value: cdktf.stringToHclTerraform(this._statsDataAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_link_cost: {
        value: cdktf.stringToHclTerraform(this._templateLinkCost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_server: {
        value: cdktf.stringToHclTerraform(this._templateServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_server_shared: {
        value: cdktf.stringToHclTerraform(this._templateServerShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk: {
        value: cdktf.numberToHclTerraform(this._trunk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_aam_server: {
        value: cdktf.numberToHclTerraform(this._useAamServer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alternate_server: {
        value: cdktf.listMapperHcl(slbServerAlternateServerToHclTerraform, true)(this._alternateServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServerAlternateServerList",
      },
      port_list: {
        value: cdktf.listMapperHcl(slbServerPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServerPortListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbServerSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServerSamplingEnableList",
      },
      service_list: {
        value: cdktf.listMapperHcl(slbServerServiceListStructToHclTerraform, true)(this._serviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServerServiceListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
