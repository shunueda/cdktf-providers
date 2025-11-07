// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Long description of the Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#description Service#description}
  */
  readonly description?: string;
  /**
  * External data reference identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#external_data_reference Service#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * External data set identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#external_data_set Service#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Service (does not need to be unique). The name should be between 1 to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * The process name. The name should be between 1 to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#process_name Service#process_name}
  */
  readonly processName?: string;
  /**
  * service_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#service_ports Service#service_ports}
  */
  readonly servicePorts?: ServiceServicePorts[] | cdktf.IResolvable;
  /**
  * windows_egress_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#windows_egress_services Service#windows_egress_services}
  */
  readonly windowsEgressServices?: ServiceWindowsEgressServices[] | cdktf.IResolvable;
  /**
  * windows_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#windows_services Service#windows_services}
  */
  readonly windowsServices?: ServiceWindowsServices[] | cdktf.IResolvable;
}
export interface ServiceServicePorts {
  /**
  * ICMP Code. Allowed when proto is 1 (ICMP) or 58 (ICMPv6). Allowed range is 0 - 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#icmp_code Service#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * ICMP Type. Allowed when proto is 1 (ICMP) or 58 (ICMPv6). Allowed range is 0 - 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#icmp_type Service#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Port Number. Also, the starting port when specifying a range. Allowed when value of proto is 6 or 17. Allowed range is 0 - 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#port Service#port}
  */
  readonly port?: string;
  /**
  * Transport protocol. IANA protocol numbers between 0-255 are permitted, and -1 represents all services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#proto Service#proto}
  */
  readonly proto: string;
  /**
  * High end of port range if specifying a range. Allowed range is 0 - 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#to_port Service#to_port}
  */
  readonly toPort?: string;
}

export function serviceServicePortsToTerraform(struct?: ServiceServicePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.stringToTerraform(struct!.icmpCode),
    icmp_type: cdktf.stringToTerraform(struct!.icmpType),
    port: cdktf.stringToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function serviceServicePortsToHclTerraform(struct?: ServiceServicePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.stringToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type: {
      value: cdktf.stringToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktf.stringToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceServicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceServicePorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceServicePorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._port = value.port;
      this._proto = value.proto;
      this._toPort = value.toPort;
    }
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string; 
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }
  public set icmpCode(value: string) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string; 
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: string; 
  public get toPort() {
    return this.getStringAttribute('to_port');
  }
  public set toPort(value: string) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class ServiceServicePortsList extends cdktf.ComplexList {
  public internalValue? : ServiceServicePorts[] | cdktf.IResolvable

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
  public get(index: number): ServiceServicePortsOutputReference {
    return new ServiceServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceWindowsEgressServices {
  /**
  * Name of running process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#process_name Service#process_name}
  */
  readonly processName?: string;
  /**
  * Name of Windows Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#service_name Service#service_name}
  */
  readonly serviceName?: string;
}

export function serviceWindowsEgressServicesToTerraform(struct?: ServiceWindowsEgressServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    process_name: cdktf.stringToTerraform(struct!.processName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function serviceWindowsEgressServicesToHclTerraform(struct?: ServiceWindowsEgressServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    process_name: {
      value: cdktf.stringToHclTerraform(struct!.processName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceWindowsEgressServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceWindowsEgressServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceWindowsEgressServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._processName = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._processName = value.processName;
      this._serviceName = value.serviceName;
    }
  }

  // process_name - computed: false, optional: true, required: false
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class ServiceWindowsEgressServicesList extends cdktf.ComplexList {
  public internalValue? : ServiceWindowsEgressServices[] | cdktf.IResolvable

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
  public get(index: number): ServiceWindowsEgressServicesOutputReference {
    return new ServiceWindowsEgressServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceWindowsServices {
  /**
  * ICMP Code. Allowed when proto is 1 (ICMP) or 58 (ICMPv6). Allowed range 0 - 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#icmp_code Service#icmp_code}
  */
  readonly icmpCode?: string;
  /**
  * ICMP Type. Allowed when proto is 1 (ICMP) or 58 (ICMPv6). Allowed range is 0 - 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#icmp_type Service#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Port Number. Also, the starting port when specifying a range. Allowed when value of proto is 6 or 17. Allowed range is 0 - 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#port Service#port}
  */
  readonly port?: string;
  /**
  * Name of running process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#process_name Service#process_name}
  */
  readonly processName?: string;
  /**
  * Transport protocol. IANA protocol numbers between 0-255 are permitted, and -1 represents all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#proto Service#proto}
  */
  readonly proto?: string;
  /**
  * Name of Windows Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#service_name Service#service_name}
  */
  readonly serviceName?: string;
  /**
  * High end of port range if specifying a range. Allowed range is 0 - 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#to_port Service#to_port}
  */
  readonly toPort?: string;
}

export function serviceWindowsServicesToTerraform(struct?: ServiceWindowsServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_code: cdktf.stringToTerraform(struct!.icmpCode),
    icmp_type: cdktf.stringToTerraform(struct!.icmpType),
    port: cdktf.stringToTerraform(struct!.port),
    process_name: cdktf.stringToTerraform(struct!.processName),
    proto: cdktf.stringToTerraform(struct!.proto),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function serviceWindowsServicesToHclTerraform(struct?: ServiceWindowsServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_code: {
      value: cdktf.stringToHclTerraform(struct!.icmpCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_type: {
      value: cdktf.stringToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_name: {
      value: cdktf.stringToHclTerraform(struct!.processName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktf.stringToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceWindowsServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceWindowsServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpCode = this._icmpCode;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._processName !== undefined) {
      hasAnyValues = true;
      internalValueResult.processName = this._processName;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceWindowsServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpCode = undefined;
      this._icmpType = undefined;
      this._port = undefined;
      this._processName = undefined;
      this._proto = undefined;
      this._serviceName = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpCode = value.icmpCode;
      this._icmpType = value.icmpType;
      this._port = value.port;
      this._processName = value.processName;
      this._proto = value.proto;
      this._serviceName = value.serviceName;
      this._toPort = value.toPort;
    }
  }

  // icmp_code - computed: false, optional: true, required: false
  private _icmpCode?: string; 
  public get icmpCode() {
    return this.getStringAttribute('icmp_code');
  }
  public set icmpCode(value: string) {
    this._icmpCode = value;
  }
  public resetIcmpCode() {
    this._icmpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpCodeInput() {
    return this._icmpCode;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string; 
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // process_name - computed: false, optional: true, required: false
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: string; 
  public get toPort() {
    return this.getStringAttribute('to_port');
  }
  public set toPort(value: string) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class ServiceWindowsServicesList extends cdktf.ComplexList {
  public internalValue? : ServiceWindowsServices[] | cdktf.IResolvable

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
  public get(index: number): ServiceWindowsServicesOutputReference {
    return new ServiceWindowsServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service illumio-core_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/service illumio-core_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_service',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._name = config.name;
    this._processName = config.processName;
    this._servicePorts.internalValue = config.servicePorts;
    this._windowsEgressServices.internalValue = config.windowsEgressServices;
    this._windowsServices.internalValue = config.windowsServices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
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

  // description_url - computed: true, optional: false, required: false
  public get descriptionUrl() {
    return this.getStringAttribute('description_url');
  }

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // process_name - computed: false, optional: true, required: false
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  public resetProcessName() {
    this._processName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // service_ports - computed: false, optional: true, required: false
  private _servicePorts = new ServiceServicePortsList(this, "service_ports", true);
  public get servicePorts() {
    return this._servicePorts;
  }
  public putServicePorts(value: ServiceServicePorts[] | cdktf.IResolvable) {
    this._servicePorts.internalValue = value;
  }
  public resetServicePorts() {
    this._servicePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortsInput() {
    return this._servicePorts.internalValue;
  }

  // windows_egress_services - computed: false, optional: true, required: false
  private _windowsEgressServices = new ServiceWindowsEgressServicesList(this, "windows_egress_services", true);
  public get windowsEgressServices() {
    return this._windowsEgressServices;
  }
  public putWindowsEgressServices(value: ServiceWindowsEgressServices[] | cdktf.IResolvable) {
    this._windowsEgressServices.internalValue = value;
  }
  public resetWindowsEgressServices() {
    this._windowsEgressServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsEgressServicesInput() {
    return this._windowsEgressServices.internalValue;
  }

  // windows_services - computed: false, optional: true, required: false
  private _windowsServices = new ServiceWindowsServicesList(this, "windows_services", true);
  public get windowsServices() {
    return this._windowsServices;
  }
  public putWindowsServices(value: ServiceWindowsServices[] | cdktf.IResolvable) {
    this._windowsServices.internalValue = value;
  }
  public resetWindowsServices() {
    this._windowsServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsServicesInput() {
    return this._windowsServices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      process_name: cdktf.stringToTerraform(this._processName),
      service_ports: cdktf.listMapper(serviceServicePortsToTerraform, true)(this._servicePorts.internalValue),
      windows_egress_services: cdktf.listMapper(serviceWindowsEgressServicesToTerraform, true)(this._windowsEgressServices.internalValue),
      windows_services: cdktf.listMapper(serviceWindowsServicesToTerraform, true)(this._windowsServices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      process_name: {
        value: cdktf.stringToHclTerraform(this._processName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ports: {
        value: cdktf.listMapperHcl(serviceServicePortsToHclTerraform, true)(this._servicePorts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceServicePortsList",
      },
      windows_egress_services: {
        value: cdktf.listMapperHcl(serviceWindowsEgressServicesToHclTerraform, true)(this._windowsEgressServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceWindowsEgressServicesList",
      },
      windows_services: {
        value: cdktf.listMapperHcl(serviceWindowsServicesToHclTerraform, true)(this._windowsServices.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceWindowsServicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
