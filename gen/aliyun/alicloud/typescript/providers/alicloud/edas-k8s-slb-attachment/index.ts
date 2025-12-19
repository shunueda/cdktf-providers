// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdasK8SSlbAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#app_id EdasK8SSlbAttachment#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#id EdasK8SSlbAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * slb_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#slb_configs EdasK8SSlbAttachment#slb_configs}
  */
  readonly slbConfigs?: EdasK8SSlbAttachmentSlbConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#timeouts EdasK8SSlbAttachment#timeouts}
  */
  readonly timeouts?: EdasK8SSlbAttachmentTimeouts;
}
export interface EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#port EdasK8SSlbAttachment#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#protocol EdasK8SSlbAttachment#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#target_port EdasK8SSlbAttachment#target_port}
  */
  readonly targetPort: number;
}

export function edasK8SSlbAttachmentSlbConfigsPortMappingsServicePortToTerraform(struct?: EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePortOutputReference | EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function edasK8SSlbAttachmentSlbConfigsPortMappingsServicePortToHclTerraform(struct?: EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePortOutputReference | EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._protocol = undefined;
      this._targetPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._protocol = value.protocol;
      this._targetPort = value.targetPort;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
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

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}
export interface EdasK8SSlbAttachmentSlbConfigsPortMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#cert_id EdasK8SSlbAttachment#cert_id}
  */
  readonly certId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#loadbalancer_protocol EdasK8SSlbAttachment#loadbalancer_protocol}
  */
  readonly loadbalancerProtocol: string;
  /**
  * service_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#service_port EdasK8SSlbAttachment#service_port}
  */
  readonly servicePort: EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePort;
}

export function edasK8SSlbAttachmentSlbConfigsPortMappingsToTerraform(struct?: EdasK8SSlbAttachmentSlbConfigsPortMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_id: cdktf.stringToTerraform(struct!.certId),
    loadbalancer_protocol: cdktf.stringToTerraform(struct!.loadbalancerProtocol),
    service_port: edasK8SSlbAttachmentSlbConfigsPortMappingsServicePortToTerraform(struct!.servicePort),
  }
}


export function edasK8SSlbAttachmentSlbConfigsPortMappingsToHclTerraform(struct?: EdasK8SSlbAttachmentSlbConfigsPortMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_id: {
      value: cdktf.stringToHclTerraform(struct!.certId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loadbalancer_protocol: {
      value: cdktf.stringToHclTerraform(struct!.loadbalancerProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port: {
      value: edasK8SSlbAttachmentSlbConfigsPortMappingsServicePortToHclTerraform(struct!.servicePort),
      isBlock: true,
      type: "set",
      storageClassType: "EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdasK8SSlbAttachmentSlbConfigsPortMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdasK8SSlbAttachmentSlbConfigsPortMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certId = this._certId;
    }
    if (this._loadbalancerProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancerProtocol = this._loadbalancerProtocol;
    }
    if (this._servicePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdasK8SSlbAttachmentSlbConfigsPortMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certId = undefined;
      this._loadbalancerProtocol = undefined;
      this._servicePort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certId = value.certId;
      this._loadbalancerProtocol = value.loadbalancerProtocol;
      this._servicePort.internalValue = value.servicePort;
    }
  }

  // cert_id - computed: false, optional: true, required: false
  private _certId?: string; 
  public get certId() {
    return this.getStringAttribute('cert_id');
  }
  public set certId(value: string) {
    this._certId = value;
  }
  public resetCertId() {
    this._certId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certIdInput() {
    return this._certId;
  }

  // loadbalancer_protocol - computed: false, optional: false, required: true
  private _loadbalancerProtocol?: string; 
  public get loadbalancerProtocol() {
    return this.getStringAttribute('loadbalancer_protocol');
  }
  public set loadbalancerProtocol(value: string) {
    this._loadbalancerProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerProtocolInput() {
    return this._loadbalancerProtocol;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort = new EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePortOutputReference(this, "service_port");
  public get servicePort() {
    return this._servicePort;
  }
  public putServicePort(value: EdasK8SSlbAttachmentSlbConfigsPortMappingsServicePort) {
    this._servicePort.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort.internalValue;
  }
}

export class EdasK8SSlbAttachmentSlbConfigsPortMappingsList extends cdktf.ComplexList {
  public internalValue? : EdasK8SSlbAttachmentSlbConfigsPortMappings[] | cdktf.IResolvable

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
  public get(index: number): EdasK8SSlbAttachmentSlbConfigsPortMappingsOutputReference {
    return new EdasK8SSlbAttachmentSlbConfigsPortMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdasK8SSlbAttachmentSlbConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#scheduler EdasK8SSlbAttachment#scheduler}
  */
  readonly scheduler: string;
  /**
  * if field 'slb_id' is empty, EDAS will purchase a new slb for this config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#slb_id EdasK8SSlbAttachment#slb_id}
  */
  readonly slbId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#specification EdasK8SSlbAttachment#specification}
  */
  readonly specification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#type EdasK8SSlbAttachment#type}
  */
  readonly type: string;
  /**
  * port_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#port_mappings EdasK8SSlbAttachment#port_mappings}
  */
  readonly portMappings: EdasK8SSlbAttachmentSlbConfigsPortMappings[] | cdktf.IResolvable;
}

export function edasK8SSlbAttachmentSlbConfigsToTerraform(struct?: EdasK8SSlbAttachmentSlbConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scheduler: cdktf.stringToTerraform(struct!.scheduler),
    slb_id: cdktf.stringToTerraform(struct!.slbId),
    specification: cdktf.stringToTerraform(struct!.specification),
    type: cdktf.stringToTerraform(struct!.type),
    port_mappings: cdktf.listMapper(edasK8SSlbAttachmentSlbConfigsPortMappingsToTerraform, true)(struct!.portMappings),
  }
}


export function edasK8SSlbAttachmentSlbConfigsToHclTerraform(struct?: EdasK8SSlbAttachmentSlbConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scheduler: {
      value: cdktf.stringToHclTerraform(struct!.scheduler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slb_id: {
      value: cdktf.stringToHclTerraform(struct!.slbId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specification: {
      value: cdktf.stringToHclTerraform(struct!.specification),
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
    port_mappings: {
      value: cdktf.listMapperHcl(edasK8SSlbAttachmentSlbConfigsPortMappingsToHclTerraform, true)(struct!.portMappings),
      isBlock: true,
      type: "set",
      storageClassType: "EdasK8SSlbAttachmentSlbConfigsPortMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdasK8SSlbAttachmentSlbConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdasK8SSlbAttachmentSlbConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduler !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler;
    }
    if (this._slbId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbId = this._slbId;
    }
    if (this._specification !== undefined) {
      hasAnyValues = true;
      internalValueResult.specification = this._specification;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._portMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappings = this._portMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdasK8SSlbAttachmentSlbConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scheduler = undefined;
      this._slbId = undefined;
      this._specification = undefined;
      this._type = undefined;
      this._portMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scheduler = value.scheduler;
      this._slbId = value.slbId;
      this._specification = value.specification;
      this._type = value.type;
      this._portMappings.internalValue = value.portMappings;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scheduler - computed: false, optional: false, required: true
  private _scheduler?: string; 
  public get scheduler() {
    return this.getStringAttribute('scheduler');
  }
  public set scheduler(value: string) {
    this._scheduler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler;
  }

  // slb_id - computed: true, optional: true, required: false
  private _slbId?: string; 
  public get slbId() {
    return this.getStringAttribute('slb_id');
  }
  public set slbId(value: string) {
    this._slbId = value;
  }
  public resetSlbId() {
    this._slbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbIdInput() {
    return this._slbId;
  }

  // specification - computed: false, optional: true, required: false
  private _specification?: string; 
  public get specification() {
    return this.getStringAttribute('specification');
  }
  public set specification(value: string) {
    this._specification = value;
  }
  public resetSpecification() {
    this._specification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification;
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

  // port_mappings - computed: false, optional: false, required: true
  private _portMappings = new EdasK8SSlbAttachmentSlbConfigsPortMappingsList(this, "port_mappings", true);
  public get portMappings() {
    return this._portMappings;
  }
  public putPortMappings(value: EdasK8SSlbAttachmentSlbConfigsPortMappings[] | cdktf.IResolvable) {
    this._portMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingsInput() {
    return this._portMappings.internalValue;
  }
}

export class EdasK8SSlbAttachmentSlbConfigsList extends cdktf.ComplexList {
  public internalValue? : EdasK8SSlbAttachmentSlbConfigs[] | cdktf.IResolvable

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
  public get(index: number): EdasK8SSlbAttachmentSlbConfigsOutputReference {
    return new EdasK8SSlbAttachmentSlbConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdasK8SSlbAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#create EdasK8SSlbAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#delete EdasK8SSlbAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#update EdasK8SSlbAttachment#update}
  */
  readonly update?: string;
}

export function edasK8SSlbAttachmentTimeoutsToTerraform(struct?: EdasK8SSlbAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function edasK8SSlbAttachmentTimeoutsToHclTerraform(struct?: EdasK8SSlbAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdasK8SSlbAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EdasK8SSlbAttachmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdasK8SSlbAttachmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment alicloud_edas_k8s_slb_attachment}
*/
export class EdasK8SSlbAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_edas_k8s_slb_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdasK8SSlbAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdasK8SSlbAttachment to import
  * @param importFromId The id of the existing EdasK8SSlbAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdasK8SSlbAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_edas_k8s_slb_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/edas_k8s_slb_attachment alicloud_edas_k8s_slb_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdasK8SSlbAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: EdasK8SSlbAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_edas_k8s_slb_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._id = config.id;
    this._slbConfigs.internalValue = config.slbConfigs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // slb_configs - computed: false, optional: true, required: false
  private _slbConfigs = new EdasK8SSlbAttachmentSlbConfigsList(this, "slb_configs", true);
  public get slbConfigs() {
    return this._slbConfigs;
  }
  public putSlbConfigs(value: EdasK8SSlbAttachmentSlbConfigs[] | cdktf.IResolvable) {
    this._slbConfigs.internalValue = value;
  }
  public resetSlbConfigs() {
    this._slbConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbConfigsInput() {
    return this._slbConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EdasK8SSlbAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EdasK8SSlbAttachmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      slb_configs: cdktf.listMapper(edasK8SSlbAttachmentSlbConfigsToTerraform, true)(this._slbConfigs.internalValue),
      timeouts: edasK8SSlbAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
      slb_configs: {
        value: cdktf.listMapperHcl(edasK8SSlbAttachmentSlbConfigsToHclTerraform, true)(this._slbConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdasK8SSlbAttachmentSlbConfigsList",
      },
      timeouts: {
        value: edasK8SSlbAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EdasK8SSlbAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
