// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbServerPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': enable; 'disable': disable; 'disable-with-health-check': disable port, but health check work;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#action SlbServerPort#action}
  */
  readonly action?: string;
  /**
  * Connection Limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#conn_limit SlbServerPort#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Connection Resume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#conn_resume SlbServerPort#conn_resume}
  */
  readonly connResume?: number;
  /**
  * Enable extended statistics on real server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#extended_stats SlbServerPort#extended_stats}
  */
  readonly extendedStats?: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#follow_port_protocol SlbServerPort#follow_port_protocol}
  */
  readonly followPortProtocol?: string;
  /**
  * Health Check (Monitor Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#health_check SlbServerPort#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Disable health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#health_check_disable SlbServerPort#health_check_disable}
  */
  readonly healthCheckDisable?: number;
  /**
  * Specify which port to follow for health status (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#health_check_follow_port SlbServerPort#health_check_follow_port}
  */
  readonly healthCheckFollowPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#id SlbServerPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Do not log connection over limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#no_logging SlbServerPort#no_logging}
  */
  readonly noLogging?: number;
  /**
  * No SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#no_ssl SlbServerPort#no_ssl}
  */
  readonly noSsl?: number;
  /**
  * Force using HTTP/2 with Prior Knowledge all the time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#only SlbServerPort#only}
  */
  readonly only?: number;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#packet_capture_template SlbServerPort#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#port_number SlbServerPort#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#protocol SlbServerPort#protocol}
  */
  readonly protocol: string;
  /**
  * Port range (Port range value - used for vip-to-rport-mapping and vport-rport range mapping)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#range SlbServerPort#range}
  */
  readonly range?: number;
  /**
  * Health Check (Monitor Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#rport_health_check_shared SlbServerPort#rport_health_check_shared}
  */
  readonly rportHealthCheckShared?: string;
  /**
  * Server_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#server_name SlbServerPort#server_name}
  */
  readonly serverName: string;
  /**
  * Reference a port template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#shared_partition_port_template SlbServerPort#shared_partition_port_template}
  */
  readonly sharedPartitionPortTemplate?: number;
  /**
  * Reference a health-check from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#shared_rport_health_check SlbServerPort#shared_rport_health_check}
  */
  readonly sharedRportHealthCheck?: number;
  /**
  * 'stats-data-enable': Enable statistical data collection for real server port; 'stats-data-disable': Disable statistical data collection for real server port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#stats_data_action SlbServerPort#stats_data_action}
  */
  readonly statsDataAction?: string;
  /**
  * Starting HTTP/2 with Prior Knowledge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#support_http2 SlbServerPort#support_http2}
  */
  readonly supportHttp2?: number;
  /**
  * Port template (Port template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#template_port SlbServerPort#template_port}
  */
  readonly templatePort?: string;
  /**
  * Port Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#template_port_shared SlbServerPort#template_port_shared}
  */
  readonly templatePortShared?: string;
  /**
  * Server side SSL template (Server side SSL Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#template_server_ssl SlbServerPort#template_server_ssl}
  */
  readonly templateServerSsl?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#user_tag SlbServerPort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#uuid SlbServerPort#uuid}
  */
  readonly uuid?: string;
  /**
  * Port Weight (Connection Weight)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#weight SlbServerPort#weight}
  */
  readonly weight?: number;
  /**
  * alternate_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#alternate_port SlbServerPort#alternate_port}
  */
  readonly alternatePort?: SlbServerPortAlternatePort[] | cdktf.IResolvable;
  /**
  * auth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#auth_cfg SlbServerPort#auth_cfg}
  */
  readonly authCfg?: SlbServerPortAuthCfg;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#sampling_enable SlbServerPort#sampling_enable}
  */
  readonly samplingEnable?: SlbServerPortSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbServerPortAlternatePort {
  /**
  * Alternate Server Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#alternate SlbServerPort#alternate}
  */
  readonly alternate?: number;
  /**
  * Alternate Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#alternate_name SlbServerPort#alternate_name}
  */
  readonly alternateName?: string;
  /**
  * Port (Alternate Server Port Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#alternate_server_port SlbServerPort#alternate_server_port}
  */
  readonly alternateServerPort?: number;
}

export function slbServerPortAlternatePortToTerraform(struct?: SlbServerPortAlternatePort | cdktf.IResolvable): any {
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


export function slbServerPortAlternatePortToHclTerraform(struct?: SlbServerPortAlternatePort | cdktf.IResolvable): any {
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

export class SlbServerPortAlternatePortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServerPortAlternatePort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbServerPortAlternatePort | cdktf.IResolvable | undefined) {
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

export class SlbServerPortAlternatePortList extends cdktf.ComplexList {
  public internalValue? : SlbServerPortAlternatePort[] | cdktf.IResolvable

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
  public get(index: number): SlbServerPortAlternatePortOutputReference {
    return new SlbServerPortAlternatePortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbServerPortAuthCfg {
  /**
  * Service Principal Name (Kerberos principal name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#service_principal_name SlbServerPort#service_principal_name}
  */
  readonly servicePrincipalName?: string;
}

export function slbServerPortAuthCfgToTerraform(struct?: SlbServerPortAuthCfgOutputReference | SlbServerPortAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_principal_name: cdktf.stringToTerraform(struct!.servicePrincipalName),
  }
}


export function slbServerPortAuthCfgToHclTerraform(struct?: SlbServerPortAuthCfgOutputReference | SlbServerPortAuthCfg): any {
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

export class SlbServerPortAuthCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbServerPortAuthCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servicePrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalName = this._servicePrincipalName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbServerPortAuthCfg | undefined) {
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
export interface SlbServerPortSamplingEnable {
  /**
  * 'all': all; 'curr_req': Current requests; 'total_req': Total Requests; 'total_req_succ': Total requests succ; 'total_fwd_bytes': Bytes processed in forward direction; 'total_fwd_pkts': Packets processed in forward direction; 'total_rev_bytes': Bytes processed in reverse direction; 'total_rev_pkts': Packets processed in reverse direction; 'total_conn': Total connections; 'last_total_conn': Last total connections; 'peak_conn': Peak connections; 'es_resp_200': Response status 200; 'es_resp_300': Response status 300; 'es_resp_400': Response status 400; 'es_resp_500': Response status 500; 'es_resp_other': Response status other; 'es_req_count': Total proxy requests; 'es_resp_count': Total proxy response; 'es_resp_invalid_http': Total non-http response; 'total_rev_pkts_inspected': Total reverse packets inspected; 'total_rev_pkts_inspected_good_status_code': Total reverse packets with good status code inspected; 'response_time': Response time; 'fastest_rsp_time': Fastest response time; 'slowest_rsp_time': Slowest response time; 'curr_ssl_conn': Current SSL connections; 'total_ssl_conn': Total SSL connections; 'resp-count': Total Response Count; 'resp-1xx': Response status 1xx; 'resp-2xx': Response status 2xx; 'resp-3xx': Response status 3xx; 'resp-4xx': Response status 4xx; 'resp-5xx': Response status 5xx; 'resp-other': Response status Other; 'resp-latency': Time to First Response Byte; 'curr_pconn': Current persistent connections;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#counters1 SlbServerPort#counters1}
  */
  readonly counters1?: string;
}

export function slbServerPortSamplingEnableToTerraform(struct?: SlbServerPortSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbServerPortSamplingEnableToHclTerraform(struct?: SlbServerPortSamplingEnable | cdktf.IResolvable): any {
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

export class SlbServerPortSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbServerPortSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbServerPortSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbServerPortSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbServerPortSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbServerPortSamplingEnableOutputReference {
    return new SlbServerPortSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port thunder_slb_server_port}
*/
export class SlbServerPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_server_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbServerPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbServerPort to import
  * @param importFromId The id of the existing SlbServerPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbServerPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_server_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_server_port thunder_slb_server_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbServerPortConfig
  */
  public constructor(scope: Construct, id: string, config: SlbServerPortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_server_port',
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
    this._extendedStats = config.extendedStats;
    this._followPortProtocol = config.followPortProtocol;
    this._healthCheck = config.healthCheck;
    this._healthCheckDisable = config.healthCheckDisable;
    this._healthCheckFollowPort = config.healthCheckFollowPort;
    this._id = config.id;
    this._noLogging = config.noLogging;
    this._noSsl = config.noSsl;
    this._only = config.only;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
    this._range = config.range;
    this._rportHealthCheckShared = config.rportHealthCheckShared;
    this._serverName = config.serverName;
    this._sharedPartitionPortTemplate = config.sharedPartitionPortTemplate;
    this._sharedRportHealthCheck = config.sharedRportHealthCheck;
    this._statsDataAction = config.statsDataAction;
    this._supportHttp2 = config.supportHttp2;
    this._templatePort = config.templatePort;
    this._templatePortShared = config.templatePortShared;
    this._templateServerSsl = config.templateServerSsl;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._weight = config.weight;
    this._alternatePort.internalValue = config.alternatePort;
    this._authCfg.internalValue = config.authCfg;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
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
  private _alternatePort = new SlbServerPortAlternatePortList(this, "alternate_port", false);
  public get alternatePort() {
    return this._alternatePort;
  }
  public putAlternatePort(value: SlbServerPortAlternatePort[] | cdktf.IResolvable) {
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
  private _authCfg = new SlbServerPortAuthCfgOutputReference(this, "auth_cfg");
  public get authCfg() {
    return this._authCfg;
  }
  public putAuthCfg(value: SlbServerPortAuthCfg) {
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
  private _samplingEnable = new SlbServerPortSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbServerPortSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      conn_resume: cdktf.numberToTerraform(this._connResume),
      extended_stats: cdktf.numberToTerraform(this._extendedStats),
      follow_port_protocol: cdktf.stringToTerraform(this._followPortProtocol),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      health_check_disable: cdktf.numberToTerraform(this._healthCheckDisable),
      health_check_follow_port: cdktf.numberToTerraform(this._healthCheckFollowPort),
      id: cdktf.stringToTerraform(this._id),
      no_logging: cdktf.numberToTerraform(this._noLogging),
      no_ssl: cdktf.numberToTerraform(this._noSsl),
      only: cdktf.numberToTerraform(this._only),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      range: cdktf.numberToTerraform(this._range),
      rport_health_check_shared: cdktf.stringToTerraform(this._rportHealthCheckShared),
      server_name: cdktf.stringToTerraform(this._serverName),
      shared_partition_port_template: cdktf.numberToTerraform(this._sharedPartitionPortTemplate),
      shared_rport_health_check: cdktf.numberToTerraform(this._sharedRportHealthCheck),
      stats_data_action: cdktf.stringToTerraform(this._statsDataAction),
      support_http2: cdktf.numberToTerraform(this._supportHttp2),
      template_port: cdktf.stringToTerraform(this._templatePort),
      template_port_shared: cdktf.stringToTerraform(this._templatePortShared),
      template_server_ssl: cdktf.stringToTerraform(this._templateServerSsl),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      weight: cdktf.numberToTerraform(this._weight),
      alternate_port: cdktf.listMapper(slbServerPortAlternatePortToTerraform, true)(this._alternatePort.internalValue),
      auth_cfg: slbServerPortAuthCfgToTerraform(this._authCfg.internalValue),
      sampling_enable: cdktf.listMapper(slbServerPortSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      extended_stats: {
        value: cdktf.numberToHclTerraform(this._extendedStats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      follow_port_protocol: {
        value: cdktf.stringToHclTerraform(this._followPortProtocol),
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
      health_check_follow_port: {
        value: cdktf.numberToHclTerraform(this._healthCheckFollowPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      no_ssl: {
        value: cdktf.numberToHclTerraform(this._noSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      only: {
        value: cdktf.numberToHclTerraform(this._only),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.numberToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rport_health_check_shared: {
        value: cdktf.stringToHclTerraform(this._rportHealthCheckShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_partition_port_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPortTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_rport_health_check: {
        value: cdktf.numberToHclTerraform(this._sharedRportHealthCheck),
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
      support_http2: {
        value: cdktf.numberToHclTerraform(this._supportHttp2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_port: {
        value: cdktf.stringToHclTerraform(this._templatePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_port_shared: {
        value: cdktf.stringToHclTerraform(this._templatePortShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_server_ssl: {
        value: cdktf.stringToHclTerraform(this._templateServerSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      alternate_port: {
        value: cdktf.listMapperHcl(slbServerPortAlternatePortToHclTerraform, true)(this._alternatePort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServerPortAlternatePortList",
      },
      auth_cfg: {
        value: slbServerPortAuthCfgToHclTerraform(this._authCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServerPortAuthCfgList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbServerPortSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbServerPortSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
