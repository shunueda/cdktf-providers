// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosCloudIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * dummy to make intermediate obj to single
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#dummy AcosCloudIntegration#dummy}
  */
  readonly dummy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#id AcosCloudIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#uuid AcosCloudIntegration#uuid}
  */
  readonly uuid?: string;
  /**
  * ecosystem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#ecosystem AcosCloudIntegration#ecosystem}
  */
  readonly ecosystem?: AcosCloudIntegrationEcosystem;
}
export interface AcosCloudIntegrationEcosystemConsulServiceLabel {
  /**
  * Name service group to be monitored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#service_label_name AcosCloudIntegration#service_label_name}
  */
  readonly serviceLabelName?: string;
}

export function acosCloudIntegrationEcosystemConsulServiceLabelToTerraform(struct?: AcosCloudIntegrationEcosystemConsulServiceLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_label_name: cdktf.stringToTerraform(struct!.serviceLabelName),
  }
}


export function acosCloudIntegrationEcosystemConsulServiceLabelToHclTerraform(struct?: AcosCloudIntegrationEcosystemConsulServiceLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_label_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceLabelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosCloudIntegrationEcosystemConsulServiceLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcosCloudIntegrationEcosystemConsulServiceLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLabelName = this._serviceLabelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosCloudIntegrationEcosystemConsulServiceLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceLabelName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceLabelName = value.serviceLabelName;
    }
  }

  // service_label_name - computed: false, optional: true, required: false
  private _serviceLabelName?: string; 
  public get serviceLabelName() {
    return this.getStringAttribute('service_label_name');
  }
  public set serviceLabelName(value: string) {
    this._serviceLabelName = value;
  }
  public resetServiceLabelName() {
    this._serviceLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelNameInput() {
    return this._serviceLabelName;
  }
}

export class AcosCloudIntegrationEcosystemConsulServiceLabelList extends cdktf.ComplexList {
  public internalValue? : AcosCloudIntegrationEcosystemConsulServiceLabel[] | cdktf.IResolvable

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
  public get(index: number): AcosCloudIntegrationEcosystemConsulServiceLabelOutputReference {
    return new AcosCloudIntegrationEcosystemConsulServiceLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcosCloudIntegrationEcosystemConsul {
  /**
  * 'enable': Enable Configuration; 'disable': Disable Configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#action AcosCloudIntegration#action}
  */
  readonly action?: string;
  /**
  * '5': 5 seconds; '10': 10 seconds; '15': 15 seconds; '20': 20 seconds;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#health_check_interval AcosCloudIntegration#health_check_interval}
  */
  readonly healthCheckInterval?: string;
  /**
  * Configure the host name for bootstrap server(e.g www.a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#host_name AcosCloudIntegration#host_name}
  */
  readonly hostName?: string;
  /**
  * Configure the bootstrap server's IPv4 address (the host IPv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#ipv4_address AcosCloudIntegration#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Configure the bootstrap server's IPv6 address (the host IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#ipv6_address AcosCloudIntegration#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Configure the http port to use (port 8500)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#port AcosCloudIntegration#port}
  */
  readonly port?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#uuid AcosCloudIntegration#uuid}
  */
  readonly uuid?: string;
  /**
  * service_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#service_label AcosCloudIntegration#service_label}
  */
  readonly serviceLabel?: AcosCloudIntegrationEcosystemConsulServiceLabel[] | cdktf.IResolvable;
}

export function acosCloudIntegrationEcosystemConsulToTerraform(struct?: AcosCloudIntegrationEcosystemConsulOutputReference | AcosCloudIntegrationEcosystemConsul): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    health_check_interval: cdktf.stringToTerraform(struct!.healthCheckInterval),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    port: cdktf.numberToTerraform(struct!.port),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    service_label: cdktf.listMapper(acosCloudIntegrationEcosystemConsulServiceLabelToTerraform, true)(struct!.serviceLabel),
  }
}


export function acosCloudIntegrationEcosystemConsulToHclTerraform(struct?: AcosCloudIntegrationEcosystemConsulOutputReference | AcosCloudIntegrationEcosystemConsul): any {
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
    health_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_label: {
      value: cdktf.listMapperHcl(acosCloudIntegrationEcosystemConsulServiceLabelToHclTerraform, true)(struct!.serviceLabel),
      isBlock: true,
      type: "list",
      storageClassType: "AcosCloudIntegrationEcosystemConsulServiceLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosCloudIntegrationEcosystemConsulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcosCloudIntegrationEcosystemConsul | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._healthCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInterval = this._healthCheckInterval;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._serviceLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLabel = this._serviceLabel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosCloudIntegrationEcosystemConsul | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._healthCheckInterval = undefined;
      this._hostName = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._port = undefined;
      this._uuid = undefined;
      this._serviceLabel.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._healthCheckInterval = value.healthCheckInterval;
      this._hostName = value.hostName;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._port = value.port;
      this._uuid = value.uuid;
      this._serviceLabel.internalValue = value.serviceLabel;
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

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: string; 
  public get healthCheckInterval() {
    return this.getStringAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: string) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // service_label - computed: false, optional: true, required: false
  private _serviceLabel = new AcosCloudIntegrationEcosystemConsulServiceLabelList(this, "service_label", false);
  public get serviceLabel() {
    return this._serviceLabel;
  }
  public putServiceLabel(value: AcosCloudIntegrationEcosystemConsulServiceLabel[] | cdktf.IResolvable) {
    this._serviceLabel.internalValue = value;
  }
  public resetServiceLabel() {
    this._serviceLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelInput() {
    return this._serviceLabel.internalValue;
  }
}
export interface AcosCloudIntegrationEcosystemK8SServiceLabel {
  /**
  * Name service group to be monitored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#service_label_name AcosCloudIntegration#service_label_name}
  */
  readonly serviceLabelName?: string;
}

export function acosCloudIntegrationEcosystemK8SServiceLabelToTerraform(struct?: AcosCloudIntegrationEcosystemK8SServiceLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_label_name: cdktf.stringToTerraform(struct!.serviceLabelName),
  }
}


export function acosCloudIntegrationEcosystemK8SServiceLabelToHclTerraform(struct?: AcosCloudIntegrationEcosystemK8SServiceLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_label_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceLabelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosCloudIntegrationEcosystemK8SServiceLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcosCloudIntegrationEcosystemK8SServiceLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLabelName = this._serviceLabelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosCloudIntegrationEcosystemK8SServiceLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceLabelName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceLabelName = value.serviceLabelName;
    }
  }

  // service_label_name - computed: false, optional: true, required: false
  private _serviceLabelName?: string; 
  public get serviceLabelName() {
    return this.getStringAttribute('service_label_name');
  }
  public set serviceLabelName(value: string) {
    this._serviceLabelName = value;
  }
  public resetServiceLabelName() {
    this._serviceLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelNameInput() {
    return this._serviceLabelName;
  }
}

export class AcosCloudIntegrationEcosystemK8SServiceLabelList extends cdktf.ComplexList {
  public internalValue? : AcosCloudIntegrationEcosystemK8SServiceLabel[] | cdktf.IResolvable

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
  public get(index: number): AcosCloudIntegrationEcosystemK8SServiceLabelOutputReference {
    return new AcosCloudIntegrationEcosystemK8SServiceLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcosCloudIntegrationEcosystemK8S {
  /**
  * 'enable': Enable Configuration; 'disable': Disable Configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#action AcosCloudIntegration#action}
  */
  readonly action?: string;
  /**
  * Enter cluster config file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#cluster_config_file AcosCloudIntegration#cluster_config_file}
  */
  readonly clusterConfigFile?: string;
  /**
  * '5': 5 seconds; '10': 10 seconds; '15': 15 seconds; '20': 20 seconds;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#health_check_interval AcosCloudIntegration#health_check_interval}
  */
  readonly healthCheckInterval?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#uuid AcosCloudIntegration#uuid}
  */
  readonly uuid?: string;
  /**
  * service_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#service_label AcosCloudIntegration#service_label}
  */
  readonly serviceLabel?: AcosCloudIntegrationEcosystemK8SServiceLabel[] | cdktf.IResolvable;
}

export function acosCloudIntegrationEcosystemK8SToTerraform(struct?: AcosCloudIntegrationEcosystemK8SOutputReference | AcosCloudIntegrationEcosystemK8S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cluster_config_file: cdktf.stringToTerraform(struct!.clusterConfigFile),
    health_check_interval: cdktf.stringToTerraform(struct!.healthCheckInterval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    service_label: cdktf.listMapper(acosCloudIntegrationEcosystemK8SServiceLabelToTerraform, true)(struct!.serviceLabel),
  }
}


export function acosCloudIntegrationEcosystemK8SToHclTerraform(struct?: AcosCloudIntegrationEcosystemK8SOutputReference | AcosCloudIntegrationEcosystemK8S): any {
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
    cluster_config_file: {
      value: cdktf.stringToHclTerraform(struct!.clusterConfigFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckInterval),
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
    service_label: {
      value: cdktf.listMapperHcl(acosCloudIntegrationEcosystemK8SServiceLabelToHclTerraform, true)(struct!.serviceLabel),
      isBlock: true,
      type: "list",
      storageClassType: "AcosCloudIntegrationEcosystemK8SServiceLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosCloudIntegrationEcosystemK8SOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcosCloudIntegrationEcosystemK8S | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._clusterConfigFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfigFile = this._clusterConfigFile;
    }
    if (this._healthCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInterval = this._healthCheckInterval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._serviceLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLabel = this._serviceLabel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosCloudIntegrationEcosystemK8S | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._clusterConfigFile = undefined;
      this._healthCheckInterval = undefined;
      this._uuid = undefined;
      this._serviceLabel.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._clusterConfigFile = value.clusterConfigFile;
      this._healthCheckInterval = value.healthCheckInterval;
      this._uuid = value.uuid;
      this._serviceLabel.internalValue = value.serviceLabel;
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

  // cluster_config_file - computed: false, optional: true, required: false
  private _clusterConfigFile?: string; 
  public get clusterConfigFile() {
    return this.getStringAttribute('cluster_config_file');
  }
  public set clusterConfigFile(value: string) {
    this._clusterConfigFile = value;
  }
  public resetClusterConfigFile() {
    this._clusterConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigFileInput() {
    return this._clusterConfigFile;
  }

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: string; 
  public get healthCheckInterval() {
    return this.getStringAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: string) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
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

  // service_label - computed: false, optional: true, required: false
  private _serviceLabel = new AcosCloudIntegrationEcosystemK8SServiceLabelList(this, "service_label", false);
  public get serviceLabel() {
    return this._serviceLabel;
  }
  public putServiceLabel(value: AcosCloudIntegrationEcosystemK8SServiceLabel[] | cdktf.IResolvable) {
    this._serviceLabel.internalValue = value;
  }
  public resetServiceLabel() {
    this._serviceLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelInput() {
    return this._serviceLabel.internalValue;
  }
}
export interface AcosCloudIntegrationEcosystemOracleServiceLabel {
  /**
  * Name service group to be monitored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#service_label_name AcosCloudIntegration#service_label_name}
  */
  readonly serviceLabelName?: string;
}

export function acosCloudIntegrationEcosystemOracleServiceLabelToTerraform(struct?: AcosCloudIntegrationEcosystemOracleServiceLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_label_name: cdktf.stringToTerraform(struct!.serviceLabelName),
  }
}


export function acosCloudIntegrationEcosystemOracleServiceLabelToHclTerraform(struct?: AcosCloudIntegrationEcosystemOracleServiceLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_label_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceLabelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosCloudIntegrationEcosystemOracleServiceLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcosCloudIntegrationEcosystemOracleServiceLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceLabelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLabelName = this._serviceLabelName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosCloudIntegrationEcosystemOracleServiceLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceLabelName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceLabelName = value.serviceLabelName;
    }
  }

  // service_label_name - computed: false, optional: true, required: false
  private _serviceLabelName?: string; 
  public get serviceLabelName() {
    return this.getStringAttribute('service_label_name');
  }
  public set serviceLabelName(value: string) {
    this._serviceLabelName = value;
  }
  public resetServiceLabelName() {
    this._serviceLabelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelNameInput() {
    return this._serviceLabelName;
  }
}

export class AcosCloudIntegrationEcosystemOracleServiceLabelList extends cdktf.ComplexList {
  public internalValue? : AcosCloudIntegrationEcosystemOracleServiceLabel[] | cdktf.IResolvable

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
  public get(index: number): AcosCloudIntegrationEcosystemOracleServiceLabelOutputReference {
    return new AcosCloudIntegrationEcosystemOracleServiceLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AcosCloudIntegrationEcosystemOracle {
  /**
  * 'enable': Enable Configuration; 'disable': Disable Configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#action AcosCloudIntegration#action}
  */
  readonly action?: string;
  /**
  * OCI compartment  id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#compartment_id AcosCloudIntegration#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#fingerprint AcosCloudIntegration#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * '5': 5 seconds; '10': 10 seconds; '15': 15 seconds; '20': 20 seconds;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#health_check_interval AcosCloudIntegration#health_check_interval}
  */
  readonly healthCheckInterval?: string;
  /**
  * Configure the host name for bootstrap server(e.g www.a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#host_name AcosCloudIntegration#host_name}
  */
  readonly hostName?: string;
  /**
  * Configure the bootstrap server's IPv4 address (the host IPv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#ipv4_address AcosCloudIntegration#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Configure the bootstrap server's IPv6 address (the host IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#ipv6_address AcosCloudIntegration#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Configure the http port to use (port 8500)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#port AcosCloudIntegration#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#private_key_path AcosCloudIntegration#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * OCI tenancy  id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#tenancy_id AcosCloudIntegration#tenancy_id}
  */
  readonly tenancyId?: string;
  /**
  * OCI user id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#user_id AcosCloudIntegration#user_id}
  */
  readonly userId?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#uuid AcosCloudIntegration#uuid}
  */
  readonly uuid?: string;
  /**
  * service_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#service_label AcosCloudIntegration#service_label}
  */
  readonly serviceLabel?: AcosCloudIntegrationEcosystemOracleServiceLabel[] | cdktf.IResolvable;
}

export function acosCloudIntegrationEcosystemOracleToTerraform(struct?: AcosCloudIntegrationEcosystemOracleOutputReference | AcosCloudIntegrationEcosystemOracle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    health_check_interval: cdktf.stringToTerraform(struct!.healthCheckInterval),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    port: cdktf.numberToTerraform(struct!.port),
    private_key_path: cdktf.stringToTerraform(struct!.privateKeyPath),
    tenancy_id: cdktf.stringToTerraform(struct!.tenancyId),
    user_id: cdktf.stringToTerraform(struct!.userId),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    service_label: cdktf.listMapper(acosCloudIntegrationEcosystemOracleServiceLabelToTerraform, true)(struct!.serviceLabel),
  }
}


export function acosCloudIntegrationEcosystemOracleToHclTerraform(struct?: AcosCloudIntegrationEcosystemOracleOutputReference | AcosCloudIntegrationEcosystemOracle): any {
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
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenancy_id: {
      value: cdktf.stringToHclTerraform(struct!.tenancyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
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
    service_label: {
      value: cdktf.listMapperHcl(acosCloudIntegrationEcosystemOracleServiceLabelToHclTerraform, true)(struct!.serviceLabel),
      isBlock: true,
      type: "list",
      storageClassType: "AcosCloudIntegrationEcosystemOracleServiceLabelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosCloudIntegrationEcosystemOracleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcosCloudIntegrationEcosystemOracle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._healthCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckInterval = this._healthCheckInterval;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPath = this._privateKeyPath;
    }
    if (this._tenancyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenancyId = this._tenancyId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._serviceLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLabel = this._serviceLabel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosCloudIntegrationEcosystemOracle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._compartmentId = undefined;
      this._fingerprint = undefined;
      this._healthCheckInterval = undefined;
      this._hostName = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
      this._port = undefined;
      this._privateKeyPath = undefined;
      this._tenancyId = undefined;
      this._userId = undefined;
      this._uuid = undefined;
      this._serviceLabel.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._compartmentId = value.compartmentId;
      this._fingerprint = value.fingerprint;
      this._healthCheckInterval = value.healthCheckInterval;
      this._hostName = value.hostName;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
      this._port = value.port;
      this._privateKeyPath = value.privateKeyPath;
      this._tenancyId = value.tenancyId;
      this._userId = value.userId;
      this._uuid = value.uuid;
      this._serviceLabel.internalValue = value.serviceLabel;
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

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // health_check_interval - computed: false, optional: true, required: false
  private _healthCheckInterval?: string; 
  public get healthCheckInterval() {
    return this.getStringAttribute('health_check_interval');
  }
  public set healthCheckInterval(value: string) {
    this._healthCheckInterval = value;
  }
  public resetHealthCheckInterval() {
    this._healthCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalInput() {
    return this._healthCheckInterval;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this.getStringAttribute('private_key_path');
  }
  public set privateKeyPath(value: string) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // tenancy_id - computed: false, optional: true, required: false
  private _tenancyId?: string; 
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }
  public set tenancyId(value: string) {
    this._tenancyId = value;
  }
  public resetTenancyId() {
    this._tenancyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyIdInput() {
    return this._tenancyId;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
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

  // service_label - computed: false, optional: true, required: false
  private _serviceLabel = new AcosCloudIntegrationEcosystemOracleServiceLabelList(this, "service_label", false);
  public get serviceLabel() {
    return this._serviceLabel;
  }
  public putServiceLabel(value: AcosCloudIntegrationEcosystemOracleServiceLabel[] | cdktf.IResolvable) {
    this._serviceLabel.internalValue = value;
  }
  public resetServiceLabel() {
    this._serviceLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLabelInput() {
    return this._serviceLabel.internalValue;
  }
}
export interface AcosCloudIntegrationEcosystem {
  /**
  * dummy to make intermediate obj to single
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#dummy AcosCloudIntegration#dummy}
  */
  readonly dummy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#uuid AcosCloudIntegration#uuid}
  */
  readonly uuid?: string;
  /**
  * consul block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#consul AcosCloudIntegration#consul}
  */
  readonly consul?: AcosCloudIntegrationEcosystemConsul;
  /**
  * k8s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#k8s AcosCloudIntegration#k8s}
  */
  readonly k8S?: AcosCloudIntegrationEcosystemK8S;
  /**
  * oracle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#oracle AcosCloudIntegration#oracle}
  */
  readonly oracle?: AcosCloudIntegrationEcosystemOracle;
}

export function acosCloudIntegrationEcosystemToTerraform(struct?: AcosCloudIntegrationEcosystemOutputReference | AcosCloudIntegrationEcosystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dummy: cdktf.numberToTerraform(struct!.dummy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    consul: acosCloudIntegrationEcosystemConsulToTerraform(struct!.consul),
    k8s: acosCloudIntegrationEcosystemK8SToTerraform(struct!.k8S),
    oracle: acosCloudIntegrationEcosystemOracleToTerraform(struct!.oracle),
  }
}


export function acosCloudIntegrationEcosystemToHclTerraform(struct?: AcosCloudIntegrationEcosystemOutputReference | AcosCloudIntegrationEcosystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dummy: {
      value: cdktf.numberToHclTerraform(struct!.dummy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consul: {
      value: acosCloudIntegrationEcosystemConsulToHclTerraform(struct!.consul),
      isBlock: true,
      type: "list",
      storageClassType: "AcosCloudIntegrationEcosystemConsulList",
    },
    k8s: {
      value: acosCloudIntegrationEcosystemK8SToHclTerraform(struct!.k8S),
      isBlock: true,
      type: "list",
      storageClassType: "AcosCloudIntegrationEcosystemK8SList",
    },
    oracle: {
      value: acosCloudIntegrationEcosystemOracleToHclTerraform(struct!.oracle),
      isBlock: true,
      type: "list",
      storageClassType: "AcosCloudIntegrationEcosystemOracleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AcosCloudIntegrationEcosystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AcosCloudIntegrationEcosystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dummy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dummy = this._dummy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._consul?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consul = this._consul?.internalValue;
    }
    if (this._k8S?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8S = this._k8S?.internalValue;
    }
    if (this._oracle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracle = this._oracle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AcosCloudIntegrationEcosystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dummy = undefined;
      this._uuid = undefined;
      this._consul.internalValue = undefined;
      this._k8S.internalValue = undefined;
      this._oracle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dummy = value.dummy;
      this._uuid = value.uuid;
      this._consul.internalValue = value.consul;
      this._k8S.internalValue = value.k8S;
      this._oracle.internalValue = value.oracle;
    }
  }

  // dummy - computed: false, optional: true, required: false
  private _dummy?: number; 
  public get dummy() {
    return this.getNumberAttribute('dummy');
  }
  public set dummy(value: number) {
    this._dummy = value;
  }
  public resetDummy() {
    this._dummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyInput() {
    return this._dummy;
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

  // consul - computed: false, optional: true, required: false
  private _consul = new AcosCloudIntegrationEcosystemConsulOutputReference(this, "consul");
  public get consul() {
    return this._consul;
  }
  public putConsul(value: AcosCloudIntegrationEcosystemConsul) {
    this._consul.internalValue = value;
  }
  public resetConsul() {
    this._consul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulInput() {
    return this._consul.internalValue;
  }

  // k8s - computed: false, optional: true, required: false
  private _k8S = new AcosCloudIntegrationEcosystemK8SOutputReference(this, "k8s");
  public get k8S() {
    return this._k8S;
  }
  public putK8S(value: AcosCloudIntegrationEcosystemK8S) {
    this._k8S.internalValue = value;
  }
  public resetK8S() {
    this._k8S.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SInput() {
    return this._k8S.internalValue;
  }

  // oracle - computed: false, optional: true, required: false
  private _oracle = new AcosCloudIntegrationEcosystemOracleOutputReference(this, "oracle");
  public get oracle() {
    return this._oracle;
  }
  public putOracle(value: AcosCloudIntegrationEcosystemOracle) {
    this._oracle.internalValue = value;
  }
  public resetOracle() {
    this._oracle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInput() {
    return this._oracle.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration thunder_acos_cloud_integration}
*/
export class AcosCloudIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_cloud_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosCloudIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosCloudIntegration to import
  * @param importFromId The id of the existing AcosCloudIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosCloudIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_cloud_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_cloud_integration thunder_acos_cloud_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosCloudIntegrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AcosCloudIntegrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_cloud_integration',
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
    this._dummy = config.dummy;
    this._id = config.id;
    this._uuid = config.uuid;
    this._ecosystem.internalValue = config.ecosystem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dummy - computed: false, optional: true, required: false
  private _dummy?: number; 
  public get dummy() {
    return this.getNumberAttribute('dummy');
  }
  public set dummy(value: number) {
    this._dummy = value;
  }
  public resetDummy() {
    this._dummy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dummyInput() {
    return this._dummy;
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

  // ecosystem - computed: false, optional: true, required: false
  private _ecosystem = new AcosCloudIntegrationEcosystemOutputReference(this, "ecosystem");
  public get ecosystem() {
    return this._ecosystem;
  }
  public putEcosystem(value: AcosCloudIntegrationEcosystem) {
    this._ecosystem.internalValue = value;
  }
  public resetEcosystem() {
    this._ecosystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecosystemInput() {
    return this._ecosystem.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dummy: cdktf.numberToTerraform(this._dummy),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      ecosystem: acosCloudIntegrationEcosystemToTerraform(this._ecosystem.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dummy: {
        value: cdktf.numberToHclTerraform(this._dummy),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecosystem: {
        value: acosCloudIntegrationEcosystemToHclTerraform(this._ecosystem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcosCloudIntegrationEcosystemList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
