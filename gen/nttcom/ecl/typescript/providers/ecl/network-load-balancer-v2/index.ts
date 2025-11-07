// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkLoadBalancerV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#availability_zone NetworkLoadBalancerV2#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#default_gateway NetworkLoadBalancerV2#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#description NetworkLoadBalancerV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#id NetworkLoadBalancerV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#load_balancer_plan_id NetworkLoadBalancerV2#load_balancer_plan_id}
  */
  readonly loadBalancerPlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#name NetworkLoadBalancerV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#tenant_id NetworkLoadBalancerV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#interfaces NetworkLoadBalancerV2#interfaces}
  */
  readonly interfaces?: NetworkLoadBalancerV2Interfaces[] | cdktf.IResolvable;
  /**
  * syslog_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#syslog_servers NetworkLoadBalancerV2#syslog_servers}
  */
  readonly syslogServers?: NetworkLoadBalancerV2SyslogServers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#timeouts NetworkLoadBalancerV2#timeouts}
  */
  readonly timeouts?: NetworkLoadBalancerV2Timeouts;
}
export interface NetworkLoadBalancerV2InterfacesVirtualIpProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#protocol NetworkLoadBalancerV2#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#vrid NetworkLoadBalancerV2#vrid}
  */
  readonly vrid: number;
}

export function networkLoadBalancerV2InterfacesVirtualIpPropertiesToTerraform(struct?: NetworkLoadBalancerV2InterfacesVirtualIpPropertiesOutputReference | NetworkLoadBalancerV2InterfacesVirtualIpProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    vrid: cdktf.numberToTerraform(struct!.vrid),
  }
}


export function networkLoadBalancerV2InterfacesVirtualIpPropertiesToHclTerraform(struct?: NetworkLoadBalancerV2InterfacesVirtualIpPropertiesOutputReference | NetworkLoadBalancerV2InterfacesVirtualIpProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLoadBalancerV2InterfacesVirtualIpPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLoadBalancerV2InterfacesVirtualIpProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLoadBalancerV2InterfacesVirtualIpProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._protocol = undefined;
      this._vrid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._protocol = value.protocol;
      this._vrid = value.vrid;
    }
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

  // vrid - computed: false, optional: false, required: true
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }
}
export interface NetworkLoadBalancerV2Interfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#description NetworkLoadBalancerV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#ip_address NetworkLoadBalancerV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#name NetworkLoadBalancerV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#network_id NetworkLoadBalancerV2#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#slot_number NetworkLoadBalancerV2#slot_number}
  */
  readonly slotNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#virtual_ip_address NetworkLoadBalancerV2#virtual_ip_address}
  */
  readonly virtualIpAddress?: string;
  /**
  * virtual_ip_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#virtual_ip_properties NetworkLoadBalancerV2#virtual_ip_properties}
  */
  readonly virtualIpProperties?: NetworkLoadBalancerV2InterfacesVirtualIpProperties;
}

export function networkLoadBalancerV2InterfacesToTerraform(struct?: NetworkLoadBalancerV2Interfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    name: cdktf.stringToTerraform(struct!.name),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    slot_number: cdktf.numberToTerraform(struct!.slotNumber),
    virtual_ip_address: cdktf.stringToTerraform(struct!.virtualIpAddress),
    virtual_ip_properties: networkLoadBalancerV2InterfacesVirtualIpPropertiesToTerraform(struct!.virtualIpProperties),
  }
}


export function networkLoadBalancerV2InterfacesToHclTerraform(struct?: NetworkLoadBalancerV2Interfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_number: {
      value: cdktf.numberToHclTerraform(struct!.slotNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.virtualIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_ip_properties: {
      value: networkLoadBalancerV2InterfacesVirtualIpPropertiesToHclTerraform(struct!.virtualIpProperties),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkLoadBalancerV2InterfacesVirtualIpPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLoadBalancerV2InterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkLoadBalancerV2Interfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._slotNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotNumber = this._slotNumber;
    }
    if (this._virtualIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIpAddress = this._virtualIpAddress;
    }
    if (this._virtualIpProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIpProperties = this._virtualIpProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLoadBalancerV2Interfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._ipAddress = undefined;
      this._name = undefined;
      this._networkId = undefined;
      this._slotNumber = undefined;
      this._virtualIpAddress = undefined;
      this._virtualIpProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._ipAddress = value.ipAddress;
      this._name = value.name;
      this._networkId = value.networkId;
      this._slotNumber = value.slotNumber;
      this._virtualIpAddress = value.virtualIpAddress;
      this._virtualIpProperties.internalValue = value.virtualIpProperties;
    }
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // slot_number - computed: false, optional: false, required: true
  private _slotNumber?: number; 
  public get slotNumber() {
    return this.getNumberAttribute('slot_number');
  }
  public set slotNumber(value: number) {
    this._slotNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotNumberInput() {
    return this._slotNumber;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // virtual_ip_address - computed: false, optional: true, required: false
  private _virtualIpAddress?: string; 
  public get virtualIpAddress() {
    return this.getStringAttribute('virtual_ip_address');
  }
  public set virtualIpAddress(value: string) {
    this._virtualIpAddress = value;
  }
  public resetVirtualIpAddress() {
    this._virtualIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpAddressInput() {
    return this._virtualIpAddress;
  }

  // virtual_ip_properties - computed: false, optional: true, required: false
  private _virtualIpProperties = new NetworkLoadBalancerV2InterfacesVirtualIpPropertiesOutputReference(this, "virtual_ip_properties");
  public get virtualIpProperties() {
    return this._virtualIpProperties;
  }
  public putVirtualIpProperties(value: NetworkLoadBalancerV2InterfacesVirtualIpProperties) {
    this._virtualIpProperties.internalValue = value;
  }
  public resetVirtualIpProperties() {
    this._virtualIpProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpPropertiesInput() {
    return this._virtualIpProperties.internalValue;
  }
}

export class NetworkLoadBalancerV2InterfacesList extends cdktf.ComplexList {
  public internalValue? : NetworkLoadBalancerV2Interfaces[] | cdktf.IResolvable

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
  public get(index: number): NetworkLoadBalancerV2InterfacesOutputReference {
    return new NetworkLoadBalancerV2InterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkLoadBalancerV2SyslogServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#acl_logging NetworkLoadBalancerV2#acl_logging}
  */
  readonly aclLogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#appflow_logging NetworkLoadBalancerV2#appflow_logging}
  */
  readonly appflowLogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#date_format NetworkLoadBalancerV2#date_format}
  */
  readonly dateFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#description NetworkLoadBalancerV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#ip_address NetworkLoadBalancerV2#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#log_facility NetworkLoadBalancerV2#log_facility}
  */
  readonly logFacility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#log_level NetworkLoadBalancerV2#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#name NetworkLoadBalancerV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#port_number NetworkLoadBalancerV2#port_number}
  */
  readonly portNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#priority NetworkLoadBalancerV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#tcp_logging NetworkLoadBalancerV2#tcp_logging}
  */
  readonly tcpLogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#tenant_id NetworkLoadBalancerV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#time_zone NetworkLoadBalancerV2#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#transport_type NetworkLoadBalancerV2#transport_type}
  */
  readonly transportType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#user_configurable_log_messages NetworkLoadBalancerV2#user_configurable_log_messages}
  */
  readonly userConfigurableLogMessages?: string;
}

export function networkLoadBalancerV2SyslogServersToTerraform(struct?: NetworkLoadBalancerV2SyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_logging: cdktf.stringToTerraform(struct!.aclLogging),
    appflow_logging: cdktf.stringToTerraform(struct!.appflowLogging),
    date_format: cdktf.stringToTerraform(struct!.dateFormat),
    description: cdktf.stringToTerraform(struct!.description),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    log_facility: cdktf.stringToTerraform(struct!.logFacility),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    name: cdktf.stringToTerraform(struct!.name),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    priority: cdktf.numberToTerraform(struct!.priority),
    tcp_logging: cdktf.stringToTerraform(struct!.tcpLogging),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    transport_type: cdktf.stringToTerraform(struct!.transportType),
    user_configurable_log_messages: cdktf.stringToTerraform(struct!.userConfigurableLogMessages),
  }
}


export function networkLoadBalancerV2SyslogServersToHclTerraform(struct?: NetworkLoadBalancerV2SyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_logging: {
      value: cdktf.stringToHclTerraform(struct!.aclLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appflow_logging: {
      value: cdktf.stringToHclTerraform(struct!.appflowLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_format: {
      value: cdktf.stringToHclTerraform(struct!.dateFormat),
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
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_facility: {
      value: cdktf.stringToHclTerraform(struct!.logFacility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
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
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_logging: {
      value: cdktf.stringToHclTerraform(struct!.tcpLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_type: {
      value: cdktf.stringToHclTerraform(struct!.transportType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_configurable_log_messages: {
      value: cdktf.stringToHclTerraform(struct!.userConfigurableLogMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLoadBalancerV2SyslogServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkLoadBalancerV2SyslogServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclLogging = this._aclLogging;
    }
    if (this._appflowLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.appflowLogging = this._appflowLogging;
    }
    if (this._dateFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateFormat = this._dateFormat;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._logFacility !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFacility = this._logFacility;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tcpLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpLogging = this._tcpLogging;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._transportType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportType = this._transportType;
    }
    if (this._userConfigurableLogMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.userConfigurableLogMessages = this._userConfigurableLogMessages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLoadBalancerV2SyslogServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclLogging = undefined;
      this._appflowLogging = undefined;
      this._dateFormat = undefined;
      this._description = undefined;
      this._ipAddress = undefined;
      this._logFacility = undefined;
      this._logLevel = undefined;
      this._name = undefined;
      this._portNumber = undefined;
      this._priority = undefined;
      this._tcpLogging = undefined;
      this._tenantId = undefined;
      this._timeZone = undefined;
      this._transportType = undefined;
      this._userConfigurableLogMessages = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclLogging = value.aclLogging;
      this._appflowLogging = value.appflowLogging;
      this._dateFormat = value.dateFormat;
      this._description = value.description;
      this._ipAddress = value.ipAddress;
      this._logFacility = value.logFacility;
      this._logLevel = value.logLevel;
      this._name = value.name;
      this._portNumber = value.portNumber;
      this._priority = value.priority;
      this._tcpLogging = value.tcpLogging;
      this._tenantId = value.tenantId;
      this._timeZone = value.timeZone;
      this._transportType = value.transportType;
      this._userConfigurableLogMessages = value.userConfigurableLogMessages;
    }
  }

  // acl_logging - computed: true, optional: true, required: false
  private _aclLogging?: string; 
  public get aclLogging() {
    return this.getStringAttribute('acl_logging');
  }
  public set aclLogging(value: string) {
    this._aclLogging = value;
  }
  public resetAclLogging() {
    this._aclLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclLoggingInput() {
    return this._aclLogging;
  }

  // appflow_logging - computed: true, optional: true, required: false
  private _appflowLogging?: string; 
  public get appflowLogging() {
    return this.getStringAttribute('appflow_logging');
  }
  public set appflowLogging(value: string) {
    this._appflowLogging = value;
  }
  public resetAppflowLogging() {
    this._appflowLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appflowLoggingInput() {
    return this._appflowLogging;
  }

  // date_format - computed: true, optional: true, required: false
  private _dateFormat?: string; 
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  public resetDateFormat() {
    this._dateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // log_facility - computed: true, optional: true, required: false
  private _logFacility?: string; 
  public get logFacility() {
    return this.getStringAttribute('log_facility');
  }
  public set logFacility(value: string) {
    this._logFacility = value;
  }
  public resetLogFacility() {
    this._logFacility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFacilityInput() {
    return this._logFacility;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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

  // port_number - computed: true, optional: true, required: false
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  public resetPortNumber() {
    this._portNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tcp_logging - computed: true, optional: true, required: false
  private _tcpLogging?: string; 
  public get tcpLogging() {
    return this.getStringAttribute('tcp_logging');
  }
  public set tcpLogging(value: string) {
    this._tcpLogging = value;
  }
  public resetTcpLogging() {
    this._tcpLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpLoggingInput() {
    return this._tcpLogging;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // transport_type - computed: true, optional: true, required: false
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  public resetTransportType() {
    this._transportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }

  // user_configurable_log_messages - computed: true, optional: true, required: false
  private _userConfigurableLogMessages?: string; 
  public get userConfigurableLogMessages() {
    return this.getStringAttribute('user_configurable_log_messages');
  }
  public set userConfigurableLogMessages(value: string) {
    this._userConfigurableLogMessages = value;
  }
  public resetUserConfigurableLogMessages() {
    this._userConfigurableLogMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userConfigurableLogMessagesInput() {
    return this._userConfigurableLogMessages;
  }
}

export class NetworkLoadBalancerV2SyslogServersList extends cdktf.ComplexList {
  public internalValue? : NetworkLoadBalancerV2SyslogServers[] | cdktf.IResolvable

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
  public get(index: number): NetworkLoadBalancerV2SyslogServersOutputReference {
    return new NetworkLoadBalancerV2SyslogServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkLoadBalancerV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#create NetworkLoadBalancerV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#delete NetworkLoadBalancerV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#update NetworkLoadBalancerV2#update}
  */
  readonly update?: string;
}

export function networkLoadBalancerV2TimeoutsToTerraform(struct?: NetworkLoadBalancerV2Timeouts | cdktf.IResolvable): any {
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


export function networkLoadBalancerV2TimeoutsToHclTerraform(struct?: NetworkLoadBalancerV2Timeouts | cdktf.IResolvable): any {
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

export class NetworkLoadBalancerV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkLoadBalancerV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkLoadBalancerV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2 ecl_network_load_balancer_v2}
*/
export class NetworkLoadBalancerV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_network_load_balancer_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkLoadBalancerV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkLoadBalancerV2 to import
  * @param importFromId The id of the existing NetworkLoadBalancerV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkLoadBalancerV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_network_load_balancer_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/resources/network_load_balancer_v2 ecl_network_load_balancer_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkLoadBalancerV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkLoadBalancerV2Config) {
    super(scope, id, {
      terraformResourceType: 'ecl_network_load_balancer_v2',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._defaultGateway = config.defaultGateway;
    this._description = config.description;
    this._id = config.id;
    this._loadBalancerPlanId = config.loadBalancerPlanId;
    this._name = config.name;
    this._tenantId = config.tenantId;
    this._interfaces.internalValue = config.interfaces;
    this._syslogServers.internalValue = config.syslogServers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
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

  // load_balancer_plan_id - computed: false, optional: false, required: true
  private _loadBalancerPlanId?: string; 
  public get loadBalancerPlanId() {
    return this.getStringAttribute('load_balancer_plan_id');
  }
  public set loadBalancerPlanId(value: string) {
    this._loadBalancerPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPlanIdInput() {
    return this._loadBalancerPlanId;
  }

  // name - computed: false, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // user_password - computed: true, optional: false, required: false
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }

  // user_username - computed: true, optional: false, required: false
  public get userUsername() {
    return this.getStringAttribute('user_username');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new NetworkLoadBalancerV2InterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: NetworkLoadBalancerV2Interfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // syslog_servers - computed: false, optional: true, required: false
  private _syslogServers = new NetworkLoadBalancerV2SyslogServersList(this, "syslog_servers", true);
  public get syslogServers() {
    return this._syslogServers;
  }
  public putSyslogServers(value: NetworkLoadBalancerV2SyslogServers[] | cdktf.IResolvable) {
    this._syslogServers.internalValue = value;
  }
  public resetSyslogServers() {
    this._syslogServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServersInput() {
    return this._syslogServers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkLoadBalancerV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkLoadBalancerV2Timeouts) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      load_balancer_plan_id: cdktf.stringToTerraform(this._loadBalancerPlanId),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      interfaces: cdktf.listMapper(networkLoadBalancerV2InterfacesToTerraform, true)(this._interfaces.internalValue),
      syslog_servers: cdktf.listMapper(networkLoadBalancerV2SyslogServersToTerraform, true)(this._syslogServers.internalValue),
      timeouts: networkLoadBalancerV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_plan_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerPlanId),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(networkLoadBalancerV2InterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLoadBalancerV2InterfacesList",
      },
      syslog_servers: {
        value: cdktf.listMapperHcl(networkLoadBalancerV2SyslogServersToHclTerraform, true)(this._syslogServers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkLoadBalancerV2SyslogServersList",
      },
      timeouts: {
        value: networkLoadBalancerV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkLoadBalancerV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
