// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateExternalServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'continue': Continue; 'drop': Drop; 'reset': Reset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#action SlbTemplateExternalService#action}
  */
  readonly action?: string;
  /**
  * 'continue': Continue; 'drop': Drop; 'reset': Reset;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#failure_action SlbTemplateExternalService#failure_action}
  */
  readonly failureAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#id SlbTemplateExternalService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * External Service Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#name SlbTemplateExternalService#name}
  */
  readonly name: string;
  /**
  * Bind a Service Group to the template (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#service_group SlbTemplateExternalService#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Reference a persist source ip template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#shared_partition_persist_source_ip_template SlbTemplateExternalService#shared_partition_persist_source_ip_template}
  */
  readonly sharedPartitionPersistSourceIpTemplate?: number;
  /**
  * Reference a TCP Proxy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#shared_partition_tcp_proxy_template SlbTemplateExternalService#shared_partition_tcp_proxy_template}
  */
  readonly sharedPartitionTcpProxyTemplate?: number;
  /**
  * Source IP persistence template (Source IP persistence template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#source_ip SlbTemplateExternalService#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * TCP Proxy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#tcp_proxy SlbTemplateExternalService#tcp_proxy}
  */
  readonly tcpProxy?: string;
  /**
  * Source IP Persistence Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#template_persist_source_ip_shared SlbTemplateExternalService#template_persist_source_ip_shared}
  */
  readonly templatePersistSourceIpShared?: string;
  /**
  * TCP Proxy Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#template_tcp_proxy_shared SlbTemplateExternalService#template_tcp_proxy_shared}
  */
  readonly templateTcpProxyShared?: string;
  /**
  * Timeout value 1 - 200 in units of 200ms, default is 5 (default is 1000ms) (1 - 200 in units of 200ms, default is 5 (1000ms))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#timeout SlbTemplateExternalService#timeout}
  */
  readonly timeout?: number;
  /**
  * 'skyfire-icap': Skyfire ICAP service; 'url-filter': URL filtering service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#type SlbTemplateExternalService#type}
  */
  readonly type?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#user_tag SlbTemplateExternalService#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#uuid SlbTemplateExternalService#uuid}
  */
  readonly uuid?: string;
  /**
  * bypass_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#bypass_ip_cfg SlbTemplateExternalService#bypass_ip_cfg}
  */
  readonly bypassIpCfg?: SlbTemplateExternalServiceBypassIpCfg[] | cdktf.IResolvable;
  /**
  * request_header_forward_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#request_header_forward_list SlbTemplateExternalService#request_header_forward_list}
  */
  readonly requestHeaderForwardList?: SlbTemplateExternalServiceRequestHeaderForwardListStruct[] | cdktf.IResolvable;
}
export interface SlbTemplateExternalServiceBypassIpCfg {
  /**
  * ip address to bypass external service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#bypass_ip SlbTemplateExternalService#bypass_ip}
  */
  readonly bypassIp?: string;
  /**
  * IP prefix mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#mask SlbTemplateExternalService#mask}
  */
  readonly mask?: string;
}

export function slbTemplateExternalServiceBypassIpCfgToTerraform(struct?: SlbTemplateExternalServiceBypassIpCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_ip: cdktf.stringToTerraform(struct!.bypassIp),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function slbTemplateExternalServiceBypassIpCfgToHclTerraform(struct?: SlbTemplateExternalServiceBypassIpCfg | cdktf.IResolvable): any {
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

export class SlbTemplateExternalServiceBypassIpCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateExternalServiceBypassIpCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplateExternalServiceBypassIpCfg | cdktf.IResolvable | undefined) {
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

export class SlbTemplateExternalServiceBypassIpCfgList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateExternalServiceBypassIpCfg[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateExternalServiceBypassIpCfgOutputReference {
    return new SlbTemplateExternalServiceBypassIpCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateExternalServiceRequestHeaderForwardListStruct {
  /**
  * Request header to be forwarded to external service (Header Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#request_header_forward SlbTemplateExternalService#request_header_forward}
  */
  readonly requestHeaderForward?: string;
}

export function slbTemplateExternalServiceRequestHeaderForwardListStructToTerraform(struct?: SlbTemplateExternalServiceRequestHeaderForwardListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header_forward: cdktf.stringToTerraform(struct!.requestHeaderForward),
  }
}


export function slbTemplateExternalServiceRequestHeaderForwardListStructToHclTerraform(struct?: SlbTemplateExternalServiceRequestHeaderForwardListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_header_forward: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaderForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateExternalServiceRequestHeaderForwardListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateExternalServiceRequestHeaderForwardListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaderForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderForward = this._requestHeaderForward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateExternalServiceRequestHeaderForwardListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaderForward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaderForward = value.requestHeaderForward;
    }
  }

  // request_header_forward - computed: false, optional: true, required: false
  private _requestHeaderForward?: string; 
  public get requestHeaderForward() {
    return this.getStringAttribute('request_header_forward');
  }
  public set requestHeaderForward(value: string) {
    this._requestHeaderForward = value;
  }
  public resetRequestHeaderForward() {
    this._requestHeaderForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderForwardInput() {
    return this._requestHeaderForward;
  }
}

export class SlbTemplateExternalServiceRequestHeaderForwardListStructList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateExternalServiceRequestHeaderForwardListStruct[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateExternalServiceRequestHeaderForwardListStructOutputReference {
    return new SlbTemplateExternalServiceRequestHeaderForwardListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service thunder_slb_template_external_service}
*/
export class SlbTemplateExternalService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_external_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateExternalService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateExternalService to import
  * @param importFromId The id of the existing SlbTemplateExternalService that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateExternalService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_external_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_external_service thunder_slb_template_external_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateExternalServiceConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateExternalServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_external_service',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._failureAction = config.failureAction;
    this._id = config.id;
    this._name = config.name;
    this._serviceGroup = config.serviceGroup;
    this._sharedPartitionPersistSourceIpTemplate = config.sharedPartitionPersistSourceIpTemplate;
    this._sharedPartitionTcpProxyTemplate = config.sharedPartitionTcpProxyTemplate;
    this._sourceIp = config.sourceIp;
    this._tcpProxy = config.tcpProxy;
    this._templatePersistSourceIpShared = config.templatePersistSourceIpShared;
    this._templateTcpProxyShared = config.templateTcpProxyShared;
    this._timeout = config.timeout;
    this._type = config.type;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._bypassIpCfg.internalValue = config.bypassIpCfg;
    this._requestHeaderForwardList.internalValue = config.requestHeaderForwardList;
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

  // bypass_ip_cfg - computed: false, optional: true, required: false
  private _bypassIpCfg = new SlbTemplateExternalServiceBypassIpCfgList(this, "bypass_ip_cfg", false);
  public get bypassIpCfg() {
    return this._bypassIpCfg;
  }
  public putBypassIpCfg(value: SlbTemplateExternalServiceBypassIpCfg[] | cdktf.IResolvable) {
    this._bypassIpCfg.internalValue = value;
  }
  public resetBypassIpCfg() {
    this._bypassIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassIpCfgInput() {
    return this._bypassIpCfg.internalValue;
  }

  // request_header_forward_list - computed: false, optional: true, required: false
  private _requestHeaderForwardList = new SlbTemplateExternalServiceRequestHeaderForwardListStructList(this, "request_header_forward_list", false);
  public get requestHeaderForwardList() {
    return this._requestHeaderForwardList;
  }
  public putRequestHeaderForwardList(value: SlbTemplateExternalServiceRequestHeaderForwardListStruct[] | cdktf.IResolvable) {
    this._requestHeaderForwardList.internalValue = value;
  }
  public resetRequestHeaderForwardList() {
    this._requestHeaderForwardList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderForwardListInput() {
    return this._requestHeaderForwardList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      failure_action: cdktf.stringToTerraform(this._failureAction),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      shared_partition_persist_source_ip_template: cdktf.numberToTerraform(this._sharedPartitionPersistSourceIpTemplate),
      shared_partition_tcp_proxy_template: cdktf.numberToTerraform(this._sharedPartitionTcpProxyTemplate),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      tcp_proxy: cdktf.stringToTerraform(this._tcpProxy),
      template_persist_source_ip_shared: cdktf.stringToTerraform(this._templatePersistSourceIpShared),
      template_tcp_proxy_shared: cdktf.stringToTerraform(this._templateTcpProxyShared),
      timeout: cdktf.numberToTerraform(this._timeout),
      type: cdktf.stringToTerraform(this._type),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      bypass_ip_cfg: cdktf.listMapper(slbTemplateExternalServiceBypassIpCfgToTerraform, true)(this._bypassIpCfg.internalValue),
      request_header_forward_list: cdktf.listMapper(slbTemplateExternalServiceRequestHeaderForwardListStructToTerraform, true)(this._requestHeaderForwardList.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      bypass_ip_cfg: {
        value: cdktf.listMapperHcl(slbTemplateExternalServiceBypassIpCfgToHclTerraform, true)(this._bypassIpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateExternalServiceBypassIpCfgList",
      },
      request_header_forward_list: {
        value: cdktf.listMapperHcl(slbTemplateExternalServiceRequestHeaderForwardListStructToHclTerraform, true)(this._requestHeaderForwardList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateExternalServiceRequestHeaderForwardListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
