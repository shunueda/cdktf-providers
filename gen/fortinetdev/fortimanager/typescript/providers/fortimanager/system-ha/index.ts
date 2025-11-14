// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#clusterid SystemHa#clusterid}
  */
  readonly clusterid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#dynamic_sort_subtable SystemHa#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#failover_mode SystemHa#failover_mode}
  */
  readonly failoverMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#file_quota SystemHa#file_quota}
  */
  readonly fileQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#hb_interval SystemHa#hb_interval}
  */
  readonly hbInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#hb_lost_threshold SystemHa#hb_lost_threshold}
  */
  readonly hbLostThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#local_cert SystemHa#local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#mode SystemHa#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#password SystemHa#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#priority SystemHa#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#unicast SystemHa#unicast}
  */
  readonly unicast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#vip SystemHa#vip}
  */
  readonly vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#vip_interface SystemHa#vip_interface}
  */
  readonly vipInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#vrrp_adv_interval SystemHa#vrrp_adv_interval}
  */
  readonly vrrpAdvInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#vrrp_interface SystemHa#vrrp_interface}
  */
  readonly vrrpInterface?: string;
  /**
  * monitored_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#monitored_interfaces SystemHa#monitored_interfaces}
  */
  readonly monitoredInterfaces?: SystemHaMonitoredInterfaces[] | cdktf.IResolvable;
  /**
  * monitored_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#monitored_ips SystemHa#monitored_ips}
  */
  readonly monitoredIps?: SystemHaMonitoredIps[] | cdktf.IResolvable;
  /**
  * peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#peer SystemHa#peer}
  */
  readonly peer?: SystemHaPeer[] | cdktf.IResolvable;
}
export interface SystemHaMonitoredInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#interface_name SystemHa#interface_name}
  */
  readonly interfaceName?: string;
}

export function systemHaMonitoredInterfacesToTerraform(struct?: SystemHaMonitoredInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function systemHaMonitoredInterfacesToHclTerraform(struct?: SystemHaMonitoredInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaMonitoredInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaMonitoredInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaMonitoredInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class SystemHaMonitoredInterfacesList extends cdktf.ComplexList {
  public internalValue? : SystemHaMonitoredInterfaces[] | cdktf.IResolvable

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
  public get(index: number): SystemHaMonitoredInterfacesOutputReference {
    return new SystemHaMonitoredInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHaMonitoredIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#interface SystemHa#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#ip SystemHa#ip}
  */
  readonly ip?: string;
}

export function systemHaMonitoredIpsToTerraform(struct?: SystemHaMonitoredIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function systemHaMonitoredIpsToHclTerraform(struct?: SystemHaMonitoredIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaMonitoredIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaMonitoredIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaMonitoredIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class SystemHaMonitoredIpsList extends cdktf.ComplexList {
  public internalValue? : SystemHaMonitoredIps[] | cdktf.IResolvable

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
  public get(index: number): SystemHaMonitoredIpsOutputReference {
    return new SystemHaMonitoredIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemHaPeer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#ip SystemHa#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#ip6 SystemHa#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#serial_number SystemHa#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#status SystemHa#status}
  */
  readonly status?: string;
}

export function systemHaPeerToTerraform(struct?: SystemHaPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function systemHaPeerToHclTerraform(struct?: SystemHaPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemHaPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemHaPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemHaPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._ip6 = undefined;
      this._serialNumber = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
      this._ip6 = value.ip6;
      this._serialNumber = value.serialNumber;
      this._status = value.status;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class SystemHaPeerList extends cdktf.ComplexList {
  public internalValue? : SystemHaPeer[] | cdktf.IResolvable

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
  public get(index: number): SystemHaPeerOutputReference {
    return new SystemHaPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha fortimanager_system_ha}
*/
export class SystemHa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_ha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHa to import
  * @param importFromId The id of the existing SystemHa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_ha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_ha fortimanager_system_ha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemHaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_ha',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterid = config.clusterid;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._failoverMode = config.failoverMode;
    this._fileQuota = config.fileQuota;
    this._hbInterval = config.hbInterval;
    this._hbLostThreshold = config.hbLostThreshold;
    this._id = config.id;
    this._localCert = config.localCert;
    this._mode = config.mode;
    this._password = config.password;
    this._priority = config.priority;
    this._unicast = config.unicast;
    this._vip = config.vip;
    this._vipInterface = config.vipInterface;
    this._vrrpAdvInterval = config.vrrpAdvInterval;
    this._vrrpInterface = config.vrrpInterface;
    this._monitoredInterfaces.internalValue = config.monitoredInterfaces;
    this._monitoredIps.internalValue = config.monitoredIps;
    this._peer.internalValue = config.peer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusterid - computed: true, optional: true, required: false
  private _clusterid?: number; 
  public get clusterid() {
    return this.getNumberAttribute('clusterid');
  }
  public set clusterid(value: number) {
    this._clusterid = value;
  }
  public resetClusterid() {
    this._clusterid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteridInput() {
    return this._clusterid;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // failover_mode - computed: true, optional: true, required: false
  private _failoverMode?: string; 
  public get failoverMode() {
    return this.getStringAttribute('failover_mode');
  }
  public set failoverMode(value: string) {
    this._failoverMode = value;
  }
  public resetFailoverMode() {
    this._failoverMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverModeInput() {
    return this._failoverMode;
  }

  // file_quota - computed: true, optional: true, required: false
  private _fileQuota?: number; 
  public get fileQuota() {
    return this.getNumberAttribute('file_quota');
  }
  public set fileQuota(value: number) {
    this._fileQuota = value;
  }
  public resetFileQuota() {
    this._fileQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileQuotaInput() {
    return this._fileQuota;
  }

  // hb_interval - computed: true, optional: true, required: false
  private _hbInterval?: number; 
  public get hbInterval() {
    return this.getNumberAttribute('hb_interval');
  }
  public set hbInterval(value: number) {
    this._hbInterval = value;
  }
  public resetHbInterval() {
    this._hbInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbIntervalInput() {
    return this._hbInterval;
  }

  // hb_lost_threshold - computed: true, optional: true, required: false
  private _hbLostThreshold?: number; 
  public get hbLostThreshold() {
    return this.getNumberAttribute('hb_lost_threshold');
  }
  public set hbLostThreshold(value: number) {
    this._hbLostThreshold = value;
  }
  public resetHbLostThreshold() {
    this._hbLostThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbLostThresholdInput() {
    return this._hbLostThreshold;
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

  // local_cert - computed: false, optional: true, required: false
  private _localCert?: string; 
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }
  public set localCert(value: string) {
    this._localCert = value;
  }
  public resetLocalCert() {
    this._localCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // priority - computed: true, optional: true, required: false
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

  // unicast - computed: true, optional: true, required: false
  private _unicast?: string; 
  public get unicast() {
    return this.getStringAttribute('unicast');
  }
  public set unicast(value: string) {
    this._unicast = value;
  }
  public resetUnicast() {
    this._unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast;
  }

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // vip_interface - computed: false, optional: true, required: false
  private _vipInterface?: string; 
  public get vipInterface() {
    return this.getStringAttribute('vip_interface');
  }
  public set vipInterface(value: string) {
    this._vipInterface = value;
  }
  public resetVipInterface() {
    this._vipInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInterfaceInput() {
    return this._vipInterface;
  }

  // vrrp_adv_interval - computed: true, optional: true, required: false
  private _vrrpAdvInterval?: number; 
  public get vrrpAdvInterval() {
    return this.getNumberAttribute('vrrp_adv_interval');
  }
  public set vrrpAdvInterval(value: number) {
    this._vrrpAdvInterval = value;
  }
  public resetVrrpAdvInterval() {
    this._vrrpAdvInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpAdvIntervalInput() {
    return this._vrrpAdvInterval;
  }

  // vrrp_interface - computed: false, optional: true, required: false
  private _vrrpInterface?: string; 
  public get vrrpInterface() {
    return this.getStringAttribute('vrrp_interface');
  }
  public set vrrpInterface(value: string) {
    this._vrrpInterface = value;
  }
  public resetVrrpInterface() {
    this._vrrpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpInterfaceInput() {
    return this._vrrpInterface;
  }

  // monitored_interfaces - computed: false, optional: true, required: false
  private _monitoredInterfaces = new SystemHaMonitoredInterfacesList(this, "monitored_interfaces", false);
  public get monitoredInterfaces() {
    return this._monitoredInterfaces;
  }
  public putMonitoredInterfaces(value: SystemHaMonitoredInterfaces[] | cdktf.IResolvable) {
    this._monitoredInterfaces.internalValue = value;
  }
  public resetMonitoredInterfaces() {
    this._monitoredInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredInterfacesInput() {
    return this._monitoredInterfaces.internalValue;
  }

  // monitored_ips - computed: false, optional: true, required: false
  private _monitoredIps = new SystemHaMonitoredIpsList(this, "monitored_ips", false);
  public get monitoredIps() {
    return this._monitoredIps;
  }
  public putMonitoredIps(value: SystemHaMonitoredIps[] | cdktf.IResolvable) {
    this._monitoredIps.internalValue = value;
  }
  public resetMonitoredIps() {
    this._monitoredIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredIpsInput() {
    return this._monitoredIps.internalValue;
  }

  // peer - computed: false, optional: true, required: false
  private _peer = new SystemHaPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }
  public putPeer(value: SystemHaPeer[] | cdktf.IResolvable) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clusterid: cdktf.numberToTerraform(this._clusterid),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      failover_mode: cdktf.stringToTerraform(this._failoverMode),
      file_quota: cdktf.numberToTerraform(this._fileQuota),
      hb_interval: cdktf.numberToTerraform(this._hbInterval),
      hb_lost_threshold: cdktf.numberToTerraform(this._hbLostThreshold),
      id: cdktf.stringToTerraform(this._id),
      local_cert: cdktf.stringToTerraform(this._localCert),
      mode: cdktf.stringToTerraform(this._mode),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      priority: cdktf.numberToTerraform(this._priority),
      unicast: cdktf.stringToTerraform(this._unicast),
      vip: cdktf.stringToTerraform(this._vip),
      vip_interface: cdktf.stringToTerraform(this._vipInterface),
      vrrp_adv_interval: cdktf.numberToTerraform(this._vrrpAdvInterval),
      vrrp_interface: cdktf.stringToTerraform(this._vrrpInterface),
      monitored_interfaces: cdktf.listMapper(systemHaMonitoredInterfacesToTerraform, true)(this._monitoredInterfaces.internalValue),
      monitored_ips: cdktf.listMapper(systemHaMonitoredIpsToTerraform, true)(this._monitoredIps.internalValue),
      peer: cdktf.listMapper(systemHaPeerToTerraform, true)(this._peer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clusterid: {
        value: cdktf.numberToHclTerraform(this._clusterid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_mode: {
        value: cdktf.stringToHclTerraform(this._failoverMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_quota: {
        value: cdktf.numberToHclTerraform(this._fileQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_interval: {
        value: cdktf.numberToHclTerraform(this._hbInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hb_lost_threshold: {
        value: cdktf.numberToHclTerraform(this._hbLostThreshold),
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
      local_cert: {
        value: cdktf.stringToHclTerraform(this._localCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unicast: {
        value: cdktf.stringToHclTerraform(this._unicast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_interface: {
        value: cdktf.stringToHclTerraform(this._vipInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrrp_adv_interval: {
        value: cdktf.numberToHclTerraform(this._vrrpAdvInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrrp_interface: {
        value: cdktf.stringToHclTerraform(this._vrrpInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitored_interfaces: {
        value: cdktf.listMapperHcl(systemHaMonitoredInterfacesToHclTerraform, true)(this._monitoredInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaMonitoredInterfacesList",
      },
      monitored_ips: {
        value: cdktf.listMapperHcl(systemHaMonitoredIpsToHclTerraform, true)(this._monitoredIps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaMonitoredIpsList",
      },
      peer: {
        value: cdktf.listMapperHcl(systemHaPeerToHclTerraform, true)(this._peer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemHaPeerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
