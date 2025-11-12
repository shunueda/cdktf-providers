// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclMlbLoadBalancerV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#active_availability_zone DataEclMlbLoadBalancerV1#active_availability_zone}
  */
  readonly activeAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#configuration_status DataEclMlbLoadBalancerV1#configuration_status}
  */
  readonly configurationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#description DataEclMlbLoadBalancerV1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#id DataEclMlbLoadBalancerV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#monitoring_status DataEclMlbLoadBalancerV1#monitoring_status}
  */
  readonly monitoringStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#name DataEclMlbLoadBalancerV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#operation_status DataEclMlbLoadBalancerV1#operation_status}
  */
  readonly operationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#plan_id DataEclMlbLoadBalancerV1#plan_id}
  */
  readonly planId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#plan_name DataEclMlbLoadBalancerV1#plan_name}
  */
  readonly planName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#primary_availability_zone DataEclMlbLoadBalancerV1#primary_availability_zone}
  */
  readonly primaryAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#revision DataEclMlbLoadBalancerV1#revision}
  */
  readonly revision?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#secondary_availability_zone DataEclMlbLoadBalancerV1#secondary_availability_zone}
  */
  readonly secondaryAvailabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#tags DataEclMlbLoadBalancerV1#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#tenant_id DataEclMlbLoadBalancerV1#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#interfaces DataEclMlbLoadBalancerV1#interfaces}
  */
  readonly interfaces?: DataEclMlbLoadBalancerV1Interfaces[] | cdktf.IResolvable;
  /**
  * syslog_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#syslog_servers DataEclMlbLoadBalancerV1#syslog_servers}
  */
  readonly syslogServers?: DataEclMlbLoadBalancerV1SyslogServers[] | cdktf.IResolvable;
}
export interface DataEclMlbLoadBalancerV1InterfacesReservedFixedIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#ip_address DataEclMlbLoadBalancerV1#ip_address}
  */
  readonly ipAddress?: string;
}

export function dataEclMlbLoadBalancerV1InterfacesReservedFixedIpsToTerraform(struct?: DataEclMlbLoadBalancerV1InterfacesReservedFixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function dataEclMlbLoadBalancerV1InterfacesReservedFixedIpsToHclTerraform(struct?: DataEclMlbLoadBalancerV1InterfacesReservedFixedIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEclMlbLoadBalancerV1InterfacesReservedFixedIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclMlbLoadBalancerV1InterfacesReservedFixedIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclMlbLoadBalancerV1InterfacesReservedFixedIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: true, optional: true, required: false
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
}

export class DataEclMlbLoadBalancerV1InterfacesReservedFixedIpsList extends cdktf.ComplexList {
  public internalValue? : DataEclMlbLoadBalancerV1InterfacesReservedFixedIps[] | cdktf.IResolvable

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
  public get(index: number): DataEclMlbLoadBalancerV1InterfacesReservedFixedIpsOutputReference {
    return new DataEclMlbLoadBalancerV1InterfacesReservedFixedIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclMlbLoadBalancerV1Interfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#network_id DataEclMlbLoadBalancerV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#virtual_ip_address DataEclMlbLoadBalancerV1#virtual_ip_address}
  */
  readonly virtualIpAddress?: string;
  /**
  * reserved_fixed_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#reserved_fixed_ips DataEclMlbLoadBalancerV1#reserved_fixed_ips}
  */
  readonly reservedFixedIps?: DataEclMlbLoadBalancerV1InterfacesReservedFixedIps[] | cdktf.IResolvable;
}

export function dataEclMlbLoadBalancerV1InterfacesToTerraform(struct?: DataEclMlbLoadBalancerV1Interfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    virtual_ip_address: cdktf.stringToTerraform(struct!.virtualIpAddress),
    reserved_fixed_ips: cdktf.listMapper(dataEclMlbLoadBalancerV1InterfacesReservedFixedIpsToTerraform, true)(struct!.reservedFixedIps),
  }
}


export function dataEclMlbLoadBalancerV1InterfacesToHclTerraform(struct?: DataEclMlbLoadBalancerV1Interfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.virtualIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_fixed_ips: {
      value: cdktf.listMapperHcl(dataEclMlbLoadBalancerV1InterfacesReservedFixedIpsToHclTerraform, true)(struct!.reservedFixedIps),
      isBlock: true,
      type: "list",
      storageClassType: "DataEclMlbLoadBalancerV1InterfacesReservedFixedIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEclMlbLoadBalancerV1InterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclMlbLoadBalancerV1Interfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._virtualIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIpAddress = this._virtualIpAddress;
    }
    if (this._reservedFixedIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedFixedIps = this._reservedFixedIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclMlbLoadBalancerV1Interfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkId = undefined;
      this._virtualIpAddress = undefined;
      this._reservedFixedIps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkId = value.networkId;
      this._virtualIpAddress = value.virtualIpAddress;
      this._reservedFixedIps.internalValue = value.reservedFixedIps;
    }
  }

  // network_id - computed: true, optional: true, required: false
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

  // virtual_ip_address - computed: true, optional: true, required: false
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

  // reserved_fixed_ips - computed: false, optional: true, required: false
  private _reservedFixedIps = new DataEclMlbLoadBalancerV1InterfacesReservedFixedIpsList(this, "reserved_fixed_ips", false);
  public get reservedFixedIps() {
    return this._reservedFixedIps;
  }
  public putReservedFixedIps(value: DataEclMlbLoadBalancerV1InterfacesReservedFixedIps[] | cdktf.IResolvable) {
    this._reservedFixedIps.internalValue = value;
  }
  public resetReservedFixedIps() {
    this._reservedFixedIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedFixedIpsInput() {
    return this._reservedFixedIps.internalValue;
  }
}

export class DataEclMlbLoadBalancerV1InterfacesList extends cdktf.ComplexList {
  public internalValue? : DataEclMlbLoadBalancerV1Interfaces[] | cdktf.IResolvable

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
  public get(index: number): DataEclMlbLoadBalancerV1InterfacesOutputReference {
    return new DataEclMlbLoadBalancerV1InterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEclMlbLoadBalancerV1SyslogServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#ip_address DataEclMlbLoadBalancerV1#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#port DataEclMlbLoadBalancerV1#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#protocol DataEclMlbLoadBalancerV1#protocol}
  */
  readonly protocol?: string;
}

export function dataEclMlbLoadBalancerV1SyslogServersToTerraform(struct?: DataEclMlbLoadBalancerV1SyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataEclMlbLoadBalancerV1SyslogServersToHclTerraform(struct?: DataEclMlbLoadBalancerV1SyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEclMlbLoadBalancerV1SyslogServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEclMlbLoadBalancerV1SyslogServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEclMlbLoadBalancerV1SyslogServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // ip_address - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataEclMlbLoadBalancerV1SyslogServersList extends cdktf.ComplexList {
  public internalValue? : DataEclMlbLoadBalancerV1SyslogServers[] | cdktf.IResolvable

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
  public get(index: number): DataEclMlbLoadBalancerV1SyslogServersOutputReference {
    return new DataEclMlbLoadBalancerV1SyslogServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1 ecl_mlb_load_balancer_v1}
*/
export class DataEclMlbLoadBalancerV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_mlb_load_balancer_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclMlbLoadBalancerV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclMlbLoadBalancerV1 to import
  * @param importFromId The id of the existing DataEclMlbLoadBalancerV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclMlbLoadBalancerV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_mlb_load_balancer_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_load_balancer_v1 ecl_mlb_load_balancer_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclMlbLoadBalancerV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclMlbLoadBalancerV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_mlb_load_balancer_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1',
        providerVersionConstraint: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeAvailabilityZone = config.activeAvailabilityZone;
    this._configurationStatus = config.configurationStatus;
    this._description = config.description;
    this._id = config.id;
    this._monitoringStatus = config.monitoringStatus;
    this._name = config.name;
    this._operationStatus = config.operationStatus;
    this._planId = config.planId;
    this._planName = config.planName;
    this._primaryAvailabilityZone = config.primaryAvailabilityZone;
    this._revision = config.revision;
    this._secondaryAvailabilityZone = config.secondaryAvailabilityZone;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._interfaces.internalValue = config.interfaces;
    this._syslogServers.internalValue = config.syslogServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_availability_zone - computed: true, optional: true, required: false
  private _activeAvailabilityZone?: string; 
  public get activeAvailabilityZone() {
    return this.getStringAttribute('active_availability_zone');
  }
  public set activeAvailabilityZone(value: string) {
    this._activeAvailabilityZone = value;
  }
  public resetActiveAvailabilityZone() {
    this._activeAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAvailabilityZoneInput() {
    return this._activeAvailabilityZone;
  }

  // configuration_status - computed: true, optional: true, required: false
  private _configurationStatus?: string; 
  public get configurationStatus() {
    return this.getStringAttribute('configuration_status');
  }
  public set configurationStatus(value: string) {
    this._configurationStatus = value;
  }
  public resetConfigurationStatus() {
    this._configurationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationStatusInput() {
    return this._configurationStatus;
  }

  // description - computed: true, optional: true, required: false
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

  // monitoring_status - computed: true, optional: true, required: false
  private _monitoringStatus?: string; 
  public get monitoringStatus() {
    return this.getStringAttribute('monitoring_status');
  }
  public set monitoringStatus(value: string) {
    this._monitoringStatus = value;
  }
  public resetMonitoringStatus() {
    this._monitoringStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringStatusInput() {
    return this._monitoringStatus;
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

  // operation_status - computed: true, optional: true, required: false
  private _operationStatus?: string; 
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }
  public set operationStatus(value: string) {
    this._operationStatus = value;
  }
  public resetOperationStatus() {
    this._operationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationStatusInput() {
    return this._operationStatus;
  }

  // plan_id - computed: true, optional: true, required: false
  private _planId?: string; 
  public get planId() {
    return this.getStringAttribute('plan_id');
  }
  public set planId(value: string) {
    this._planId = value;
  }
  public resetPlanId() {
    this._planId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planIdInput() {
    return this._planId;
  }

  // plan_name - computed: true, optional: true, required: false
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  public resetPlanName() {
    this._planName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
  }

  // primary_availability_zone - computed: true, optional: true, required: false
  private _primaryAvailabilityZone?: string; 
  public get primaryAvailabilityZone() {
    return this.getStringAttribute('primary_availability_zone');
  }
  public set primaryAvailabilityZone(value: string) {
    this._primaryAvailabilityZone = value;
  }
  public resetPrimaryAvailabilityZone() {
    this._primaryAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryAvailabilityZoneInput() {
    return this._primaryAvailabilityZone;
  }

  // revision - computed: true, optional: true, required: false
  private _revision?: number; 
  public get revision() {
    return this.getNumberAttribute('revision');
  }
  public set revision(value: number) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // secondary_availability_zone - computed: true, optional: true, required: false
  private _secondaryAvailabilityZone?: string; 
  public get secondaryAvailabilityZone() {
    return this.getStringAttribute('secondary_availability_zone');
  }
  public set secondaryAvailabilityZone(value: string) {
    this._secondaryAvailabilityZone = value;
  }
  public resetSecondaryAvailabilityZone() {
    this._secondaryAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAvailabilityZoneInput() {
    return this._secondaryAvailabilityZone;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new DataEclMlbLoadBalancerV1InterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataEclMlbLoadBalancerV1Interfaces[] | cdktf.IResolvable) {
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
  private _syslogServers = new DataEclMlbLoadBalancerV1SyslogServersList(this, "syslog_servers", false);
  public get syslogServers() {
    return this._syslogServers;
  }
  public putSyslogServers(value: DataEclMlbLoadBalancerV1SyslogServers[] | cdktf.IResolvable) {
    this._syslogServers.internalValue = value;
  }
  public resetSyslogServers() {
    this._syslogServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServersInput() {
    return this._syslogServers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_availability_zone: cdktf.stringToTerraform(this._activeAvailabilityZone),
      configuration_status: cdktf.stringToTerraform(this._configurationStatus),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      monitoring_status: cdktf.stringToTerraform(this._monitoringStatus),
      name: cdktf.stringToTerraform(this._name),
      operation_status: cdktf.stringToTerraform(this._operationStatus),
      plan_id: cdktf.stringToTerraform(this._planId),
      plan_name: cdktf.stringToTerraform(this._planName),
      primary_availability_zone: cdktf.stringToTerraform(this._primaryAvailabilityZone),
      revision: cdktf.numberToTerraform(this._revision),
      secondary_availability_zone: cdktf.stringToTerraform(this._secondaryAvailabilityZone),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      interfaces: cdktf.listMapper(dataEclMlbLoadBalancerV1InterfacesToTerraform, true)(this._interfaces.internalValue),
      syslog_servers: cdktf.listMapper(dataEclMlbLoadBalancerV1SyslogServersToTerraform, true)(this._syslogServers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_availability_zone: {
        value: cdktf.stringToHclTerraform(this._activeAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_status: {
        value: cdktf.stringToHclTerraform(this._configurationStatus),
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
      monitoring_status: {
        value: cdktf.stringToHclTerraform(this._monitoringStatus),
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
      operation_status: {
        value: cdktf.stringToHclTerraform(this._operationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_id: {
        value: cdktf.stringToHclTerraform(this._planId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_name: {
        value: cdktf.stringToHclTerraform(this._planName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_availability_zone: {
        value: cdktf.stringToHclTerraform(this._primaryAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revision: {
        value: cdktf.numberToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_availability_zone: {
        value: cdktf.stringToHclTerraform(this._secondaryAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(dataEclMlbLoadBalancerV1InterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclMlbLoadBalancerV1InterfacesList",
      },
      syslog_servers: {
        value: cdktf.listMapperHcl(dataEclMlbLoadBalancerV1SyslogServersToHclTerraform, true)(this._syslogServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEclMlbLoadBalancerV1SyslogServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
