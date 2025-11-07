// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateRespmodIcapConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'continue': Continue; 'drop': Drop; 'reset': Reset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#action SlbTemplateRespmodIcap#action}
  */
  readonly action?: string;
  /**
  * Don't reset http server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#disable_http_server_reset SlbTemplateRespmodIcap#disable_http_server_reset}
  */
  readonly disableHttpServerReset?: number;
  /**
  * When template sg is down mark vport down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#fail_close SlbTemplateRespmodIcap#fail_close}
  */
  readonly failClose?: number;
  /**
  * 'continue': Continue; 'drop': Drop; 'reset': Reset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#failure_action SlbTemplateRespmodIcap#failure_action}
  */
  readonly failureAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#id SlbTemplateRespmodIcap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include protocol and port in HTTP URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#include_protocol_in_uri SlbTemplateRespmodIcap#include_protocol_in_uri}
  */
  readonly includeProtocolInUri?: number;
  /**
  * Only log allowed HTTP method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#log_only_allowed_method SlbTemplateRespmodIcap#log_only_allowed_method}
  */
  readonly logOnlyAllowedMethod?: number;
  /**
  * logging template (Logging template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#logging SlbTemplateRespmodIcap#logging}
  */
  readonly logging?: string;
  /**
  * min-payload-size value 0 - 65535, default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#min_payload_size SlbTemplateRespmodIcap#min_payload_size}
  */
  readonly minPayloadSize?: number;
  /**
  * Reqmod ICAP Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#name SlbTemplateRespmodIcap#name}
  */
  readonly name: string;
  /**
  * Preview value 1 - 32768, default is 32768
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#preview SlbTemplateRespmodIcap#preview}
  */
  readonly preview?: number;
  /**
  * Server SSL template (Server SSL template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#server_ssl SlbTemplateRespmodIcap#server_ssl}
  */
  readonly serverSsl?: string;
  /**
  * Bind a Service Group to the template (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#service_group SlbTemplateRespmodIcap#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * URL to send to ICAP server (Service URL Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#service_url SlbTemplateRespmodIcap#service_url}
  */
  readonly serviceUrl?: string;
  /**
  * Reference a persist source ip template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#shared_partition_persist_source_ip_template SlbTemplateRespmodIcap#shared_partition_persist_source_ip_template}
  */
  readonly sharedPartitionPersistSourceIpTemplate?: number;
  /**
  * Reference a TCP Proxy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#shared_partition_tcp_proxy_template SlbTemplateRespmodIcap#shared_partition_tcp_proxy_template}
  */
  readonly sharedPartitionTcpProxyTemplate?: number;
  /**
  * Source IP persistence template (Source IP persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#source_ip SlbTemplateRespmodIcap#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * TCP Proxy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#tcp_proxy SlbTemplateRespmodIcap#tcp_proxy}
  */
  readonly tcpProxy?: string;
  /**
  * Source IP Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#template_persist_source_ip_shared SlbTemplateRespmodIcap#template_persist_source_ip_shared}
  */
  readonly templatePersistSourceIpShared?: string;
  /**
  * TCP Proxy Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#template_tcp_proxy_shared SlbTemplateRespmodIcap#template_tcp_proxy_shared}
  */
  readonly templateTcpProxyShared?: string;
  /**
  * Timeout value 1 - 200 in units of 200ms, default is 5 (default is 1000ms) (1 - 200 in units of 200ms, default is 5 (1000ms))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#timeout SlbTemplateRespmodIcap#timeout}
  */
  readonly timeout?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#user_tag SlbTemplateRespmodIcap#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#uuid SlbTemplateRespmodIcap#uuid}
  */
  readonly uuid?: string;
  /**
  * Use URL format for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#x_auth_url SlbTemplateRespmodIcap#x_auth_url}
  */
  readonly xAuthUrl?: number;
  /**
  * bypass_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#bypass_ip_cfg SlbTemplateRespmodIcap#bypass_ip_cfg}
  */
  readonly bypassIpCfg?: SlbTemplateRespmodIcapBypassIpCfg[] | cdktf.IResolvable;
}
export interface SlbTemplateRespmodIcapBypassIpCfg {
  /**
  * ip address to bypass respmod-icap service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#bypass_ip SlbTemplateRespmodIcap#bypass_ip}
  */
  readonly bypassIp?: string;
  /**
  * IP prefix mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#mask SlbTemplateRespmodIcap#mask}
  */
  readonly mask?: string;
}

export function slbTemplateRespmodIcapBypassIpCfgToTerraform(struct?: SlbTemplateRespmodIcapBypassIpCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_ip: cdktf.stringToTerraform(struct!.bypassIp),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function slbTemplateRespmodIcapBypassIpCfgToHclTerraform(struct?: SlbTemplateRespmodIcapBypassIpCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_ip: {
      value: cdktf.stringToHclTerraform(struct!.bypassIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateRespmodIcapBypassIpCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateRespmodIcapBypassIpCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassIp = this._bypassIp;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateRespmodIcapBypassIpCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassIp = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassIp = value.bypassIp;
      this._mask = value.mask;
    }
  }

  // bypass_ip - computed: false, optional: true, required: false
  private _bypassIp?: string; 
  public get bypassIp() {
    return this.getStringAttribute('bypass_ip');
  }
  public set bypassIp(value: string) {
    this._bypassIp = value;
  }
  public resetBypassIp() {
    this._bypassIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassIpInput() {
    return this._bypassIp;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class SlbTemplateRespmodIcapBypassIpCfgList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateRespmodIcapBypassIpCfg[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateRespmodIcapBypassIpCfgOutputReference {
    return new SlbTemplateRespmodIcapBypassIpCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap thunder_slb_template_respmod_icap}
*/
export class SlbTemplateRespmodIcap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_respmod_icap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateRespmodIcap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateRespmodIcap to import
  * @param importFromId The id of the existing SlbTemplateRespmodIcap that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateRespmodIcap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_respmod_icap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_respmod_icap thunder_slb_template_respmod_icap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateRespmodIcapConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateRespmodIcapConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_respmod_icap',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._disableHttpServerReset = config.disableHttpServerReset;
    this._failClose = config.failClose;
    this._failureAction = config.failureAction;
    this._id = config.id;
    this._includeProtocolInUri = config.includeProtocolInUri;
    this._logOnlyAllowedMethod = config.logOnlyAllowedMethod;
    this._logging = config.logging;
    this._minPayloadSize = config.minPayloadSize;
    this._name = config.name;
    this._preview = config.preview;
    this._serverSsl = config.serverSsl;
    this._serviceGroup = config.serviceGroup;
    this._serviceUrl = config.serviceUrl;
    this._sharedPartitionPersistSourceIpTemplate = config.sharedPartitionPersistSourceIpTemplate;
    this._sharedPartitionTcpProxyTemplate = config.sharedPartitionTcpProxyTemplate;
    this._sourceIp = config.sourceIp;
    this._tcpProxy = config.tcpProxy;
    this._templatePersistSourceIpShared = config.templatePersistSourceIpShared;
    this._templateTcpProxyShared = config.templateTcpProxyShared;
    this._timeout = config.timeout;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._xAuthUrl = config.xAuthUrl;
    this._bypassIpCfg.internalValue = config.bypassIpCfg;
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

  // disable_http_server_reset - computed: false, optional: true, required: false
  private _disableHttpServerReset?: number; 
  public get disableHttpServerReset() {
    return this.getNumberAttribute('disable_http_server_reset');
  }
  public set disableHttpServerReset(value: number) {
    this._disableHttpServerReset = value;
  }
  public resetDisableHttpServerReset() {
    this._disableHttpServerReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHttpServerResetInput() {
    return this._disableHttpServerReset;
  }

  // fail_close - computed: false, optional: true, required: false
  private _failClose?: number; 
  public get failClose() {
    return this.getNumberAttribute('fail_close');
  }
  public set failClose(value: number) {
    this._failClose = value;
  }
  public resetFailClose() {
    this._failClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failCloseInput() {
    return this._failClose;
  }

  // failure_action - computed: false, optional: true, required: false
  private _failureAction?: string; 
  public get failureAction() {
    return this.getStringAttribute('failure_action');
  }
  public set failureAction(value: string) {
    this._failureAction = value;
  }
  public resetFailureAction() {
    this._failureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureActionInput() {
    return this._failureAction;
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

  // include_protocol_in_uri - computed: false, optional: true, required: false
  private _includeProtocolInUri?: number; 
  public get includeProtocolInUri() {
    return this.getNumberAttribute('include_protocol_in_uri');
  }
  public set includeProtocolInUri(value: number) {
    this._includeProtocolInUri = value;
  }
  public resetIncludeProtocolInUri() {
    this._includeProtocolInUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeProtocolInUriInput() {
    return this._includeProtocolInUri;
  }

  // log_only_allowed_method - computed: false, optional: true, required: false
  private _logOnlyAllowedMethod?: number; 
  public get logOnlyAllowedMethod() {
    return this.getNumberAttribute('log_only_allowed_method');
  }
  public set logOnlyAllowedMethod(value: number) {
    this._logOnlyAllowedMethod = value;
  }
  public resetLogOnlyAllowedMethod() {
    this._logOnlyAllowedMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOnlyAllowedMethodInput() {
    return this._logOnlyAllowedMethod;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // min_payload_size - computed: false, optional: true, required: false
  private _minPayloadSize?: number; 
  public get minPayloadSize() {
    return this.getNumberAttribute('min_payload_size');
  }
  public set minPayloadSize(value: number) {
    this._minPayloadSize = value;
  }
  public resetMinPayloadSize() {
    this._minPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPayloadSizeInput() {
    return this._minPayloadSize;
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

  // preview - computed: false, optional: true, required: false
  private _preview?: number; 
  public get preview() {
    return this.getNumberAttribute('preview');
  }
  public set preview(value: number) {
    this._preview = value;
  }
  public resetPreview() {
    this._preview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewInput() {
    return this._preview;
  }

  // server_ssl - computed: false, optional: true, required: false
  private _serverSsl?: string; 
  public get serverSsl() {
    return this.getStringAttribute('server_ssl');
  }
  public set serverSsl(value: string) {
    this._serverSsl = value;
  }
  public resetServerSsl() {
    this._serverSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslInput() {
    return this._serverSsl;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // service_url - computed: false, optional: true, required: false
  private _serviceUrl?: string; 
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string) {
    this._serviceUrl = value;
  }
  public resetServiceUrl() {
    this._serviceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUrlInput() {
    return this._serviceUrl;
  }

  // shared_partition_persist_source_ip_template - computed: false, optional: true, required: false
  private _sharedPartitionPersistSourceIpTemplate?: number; 
  public get sharedPartitionPersistSourceIpTemplate() {
    return this.getNumberAttribute('shared_partition_persist_source_ip_template');
  }
  public set sharedPartitionPersistSourceIpTemplate(value: number) {
    this._sharedPartitionPersistSourceIpTemplate = value;
  }
  public resetSharedPartitionPersistSourceIpTemplate() {
    this._sharedPartitionPersistSourceIpTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionPersistSourceIpTemplateInput() {
    return this._sharedPartitionPersistSourceIpTemplate;
  }

  // shared_partition_tcp_proxy_template - computed: false, optional: true, required: false
  private _sharedPartitionTcpProxyTemplate?: number; 
  public get sharedPartitionTcpProxyTemplate() {
    return this.getNumberAttribute('shared_partition_tcp_proxy_template');
  }
  public set sharedPartitionTcpProxyTemplate(value: number) {
    this._sharedPartitionTcpProxyTemplate = value;
  }
  public resetSharedPartitionTcpProxyTemplate() {
    this._sharedPartitionTcpProxyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionTcpProxyTemplateInput() {
    return this._sharedPartitionTcpProxyTemplate;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // tcp_proxy - computed: false, optional: true, required: false
  private _tcpProxy?: string; 
  public get tcpProxy() {
    return this.getStringAttribute('tcp_proxy');
  }
  public set tcpProxy(value: string) {
    this._tcpProxy = value;
  }
  public resetTcpProxy() {
    this._tcpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProxyInput() {
    return this._tcpProxy;
  }

  // template_persist_source_ip_shared - computed: false, optional: true, required: false
  private _templatePersistSourceIpShared?: string; 
  public get templatePersistSourceIpShared() {
    return this.getStringAttribute('template_persist_source_ip_shared');
  }
  public set templatePersistSourceIpShared(value: string) {
    this._templatePersistSourceIpShared = value;
  }
  public resetTemplatePersistSourceIpShared() {
    this._templatePersistSourceIpShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePersistSourceIpSharedInput() {
    return this._templatePersistSourceIpShared;
  }

  // template_tcp_proxy_shared - computed: false, optional: true, required: false
  private _templateTcpProxyShared?: string; 
  public get templateTcpProxyShared() {
    return this.getStringAttribute('template_tcp_proxy_shared');
  }
  public set templateTcpProxyShared(value: string) {
    this._templateTcpProxyShared = value;
  }
  public resetTemplateTcpProxyShared() {
    this._templateTcpProxyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxySharedInput() {
    return this._templateTcpProxyShared;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // x_auth_url - computed: false, optional: true, required: false
  private _xAuthUrl?: number; 
  public get xAuthUrl() {
    return this.getNumberAttribute('x_auth_url');
  }
  public set xAuthUrl(value: number) {
    this._xAuthUrl = value;
  }
  public resetXAuthUrl() {
    this._xAuthUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xAuthUrlInput() {
    return this._xAuthUrl;
  }

  // bypass_ip_cfg - computed: false, optional: true, required: false
  private _bypassIpCfg = new SlbTemplateRespmodIcapBypassIpCfgList(this, "bypass_ip_cfg", false);
  public get bypassIpCfg() {
    return this._bypassIpCfg;
  }
  public putBypassIpCfg(value: SlbTemplateRespmodIcapBypassIpCfg[] | cdktf.IResolvable) {
    this._bypassIpCfg.internalValue = value;
  }
  public resetBypassIpCfg() {
    this._bypassIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassIpCfgInput() {
    return this._bypassIpCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      disable_http_server_reset: cdktf.numberToTerraform(this._disableHttpServerReset),
      fail_close: cdktf.numberToTerraform(this._failClose),
      failure_action: cdktf.stringToTerraform(this._failureAction),
      id: cdktf.stringToTerraform(this._id),
      include_protocol_in_uri: cdktf.numberToTerraform(this._includeProtocolInUri),
      log_only_allowed_method: cdktf.numberToTerraform(this._logOnlyAllowedMethod),
      logging: cdktf.stringToTerraform(this._logging),
      min_payload_size: cdktf.numberToTerraform(this._minPayloadSize),
      name: cdktf.stringToTerraform(this._name),
      preview: cdktf.numberToTerraform(this._preview),
      server_ssl: cdktf.stringToTerraform(this._serverSsl),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      service_url: cdktf.stringToTerraform(this._serviceUrl),
      shared_partition_persist_source_ip_template: cdktf.numberToTerraform(this._sharedPartitionPersistSourceIpTemplate),
      shared_partition_tcp_proxy_template: cdktf.numberToTerraform(this._sharedPartitionTcpProxyTemplate),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      tcp_proxy: cdktf.stringToTerraform(this._tcpProxy),
      template_persist_source_ip_shared: cdktf.stringToTerraform(this._templatePersistSourceIpShared),
      template_tcp_proxy_shared: cdktf.stringToTerraform(this._templateTcpProxyShared),
      timeout: cdktf.numberToTerraform(this._timeout),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      x_auth_url: cdktf.numberToTerraform(this._xAuthUrl),
      bypass_ip_cfg: cdktf.listMapper(slbTemplateRespmodIcapBypassIpCfgToTerraform, true)(this._bypassIpCfg.internalValue),
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
      disable_http_server_reset: {
        value: cdktf.numberToHclTerraform(this._disableHttpServerReset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fail_close: {
        value: cdktf.numberToHclTerraform(this._failClose),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failure_action: {
        value: cdktf.stringToHclTerraform(this._failureAction),
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
      include_protocol_in_uri: {
        value: cdktf.numberToHclTerraform(this._includeProtocolInUri),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_only_allowed_method: {
        value: cdktf.numberToHclTerraform(this._logOnlyAllowedMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_payload_size: {
        value: cdktf.numberToHclTerraform(this._minPayloadSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview: {
        value: cdktf.numberToHclTerraform(this._preview),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_ssl: {
        value: cdktf.stringToHclTerraform(this._serverSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_url: {
        value: cdktf.stringToHclTerraform(this._serviceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_partition_persist_source_ip_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionPersistSourceIpTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_tcp_proxy_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionTcpProxyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_proxy: {
        value: cdktf.stringToHclTerraform(this._tcpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_persist_source_ip_shared: {
        value: cdktf.stringToHclTerraform(this._templatePersistSourceIpShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_tcp_proxy_shared: {
        value: cdktf.stringToHclTerraform(this._templateTcpProxyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
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
      x_auth_url: {
        value: cdktf.numberToHclTerraform(this._xAuthUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bypass_ip_cfg: {
        value: cdktf.listMapperHcl(slbTemplateRespmodIcapBypassIpCfgToHclTerraform, true)(this._bypassIpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateRespmodIcapBypassIpCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
