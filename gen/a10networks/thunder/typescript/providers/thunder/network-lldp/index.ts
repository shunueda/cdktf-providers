// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkLldpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#id NetworkLldp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure lldp system description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#system_description NetworkLldp#system_description}
  */
  readonly systemDescription?: string;
  /**
  * Configure lldp system name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#system_name NetworkLldp#system_name}
  */
  readonly systemName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#uuid NetworkLldp#uuid}
  */
  readonly uuid?: string;
  /**
  * enable_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#enable_cfg NetworkLldp#enable_cfg}
  */
  readonly enableCfg?: NetworkLldpEnableCfg;
  /**
  * management_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#management_address NetworkLldp#management_address}
  */
  readonly managementAddress?: NetworkLldpManagementAddress;
  /**
  * notification_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#notification_cfg NetworkLldp#notification_cfg}
  */
  readonly notificationCfg?: NetworkLldpNotificationCfg;
  /**
  * tx_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#tx_set NetworkLldp#tx_set}
  */
  readonly txSet?: NetworkLldpTxSet;
}
export interface NetworkLldpEnableCfg {
  /**
  * Enable lldp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#enable NetworkLldp#enable}
  */
  readonly enable?: number;
  /**
  * Enable lldp rx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#rx NetworkLldp#rx}
  */
  readonly rx?: number;
  /**
  * Enable lldp tx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#tx NetworkLldp#tx}
  */
  readonly tx?: number;
}

export function networkLldpEnableCfgToTerraform(struct?: NetworkLldpEnableCfgOutputReference | NetworkLldpEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    rx: cdktf.numberToTerraform(struct!.rx),
    tx: cdktf.numberToTerraform(struct!.tx),
  }
}


export function networkLldpEnableCfgToHclTerraform(struct?: NetworkLldpEnableCfgOutputReference | NetworkLldpEnableCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx: {
      value: cdktf.numberToHclTerraform(struct!.rx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx: {
      value: cdktf.numberToHclTerraform(struct!.tx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpEnableCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLldpEnableCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._rx !== undefined) {
      hasAnyValues = true;
      internalValueResult.rx = this._rx;
    }
    if (this._tx !== undefined) {
      hasAnyValues = true;
      internalValueResult.tx = this._tx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpEnableCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._rx = undefined;
      this._tx = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._rx = value.rx;
      this._tx = value.tx;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rx - computed: false, optional: true, required: false
  private _rx?: number; 
  public get rx() {
    return this.getNumberAttribute('rx');
  }
  public set rx(value: number) {
    this._rx = value;
  }
  public resetRx() {
    this._rx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxInput() {
    return this._rx;
  }

  // tx - computed: false, optional: true, required: false
  private _tx?: number; 
  public get tx() {
    return this.getNumberAttribute('tx');
  }
  public set tx(value: number) {
    this._tx = value;
  }
  public resetTx() {
    this._tx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txInput() {
    return this._tx;
  }
}
export interface NetworkLldpManagementAddressDnsListInterface {
  /**
  * configure lldp management-address interface ethernet (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ethernet NetworkLldp#ethernet}
  */
  readonly ethernet?: number;
  /**
  * configure lldp management-address interface management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#management NetworkLldp#management}
  */
  readonly management?: number;
  /**
  * configure lldp management-address interface management (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ve NetworkLldp#ve}
  */
  readonly ve?: number;
}

export function networkLldpManagementAddressDnsListInterfaceToTerraform(struct?: NetworkLldpManagementAddressDnsListInterfaceOutputReference | NetworkLldpManagementAddressDnsListInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    management: cdktf.numberToTerraform(struct!.management),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function networkLldpManagementAddressDnsListInterfaceToHclTerraform(struct?: NetworkLldpManagementAddressDnsListInterfaceOutputReference | NetworkLldpManagementAddressDnsListInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    management: {
      value: cdktf.numberToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpManagementAddressDnsListInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLldpManagementAddressDnsListInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpManagementAddressDnsListInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethernet = undefined;
      this._management = undefined;
      this._ve = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethernet = value.ethernet;
      this._management = value.management;
      this._ve = value.ve;
    }
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

  // management - computed: false, optional: true, required: false
  private _management?: number; 
  public get management() {
    return this.getNumberAttribute('management');
  }
  public set management(value: number) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}
export interface NetworkLldpManagementAddressDnsListStruct {
  /**
  * Configure lldp management-address, subtype is dns (lldp management-address dns address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#dns NetworkLldp#dns}
  */
  readonly dns: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#uuid NetworkLldp#uuid}
  */
  readonly uuid?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#interface NetworkLldp#interface}
  */
  readonly interface?: NetworkLldpManagementAddressDnsListInterface;
}

export function networkLldpManagementAddressDnsListStructToTerraform(struct?: NetworkLldpManagementAddressDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    interface: networkLldpManagementAddressDnsListInterfaceToTerraform(struct!.interface),
  }
}


export function networkLldpManagementAddressDnsListStructToHclTerraform(struct?: NetworkLldpManagementAddressDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
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
    interface: {
      value: networkLldpManagementAddressDnsListInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkLldpManagementAddressDnsListInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpManagementAddressDnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkLldpManagementAddressDnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpManagementAddressDnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._uuid = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._uuid = value.uuid;
      this._interface.internalValue = value.interface;
    }
  }

  // dns - computed: false, optional: false, required: true
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
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

  // interface - computed: false, optional: true, required: false
  private _interface = new NetworkLldpManagementAddressDnsListInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: NetworkLldpManagementAddressDnsListInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class NetworkLldpManagementAddressDnsListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkLldpManagementAddressDnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkLldpManagementAddressDnsListStructOutputReference {
    return new NetworkLldpManagementAddressDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4 {
  /**
  * configure lldp management-address interface ethernet (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv4_eth NetworkLldp#ipv4_eth}
  */
  readonly ipv4Eth?: number;
  /**
  * configure lldp management-address interface management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv4_mgmt NetworkLldp#ipv4_mgmt}
  */
  readonly ipv4Mgmt?: number;
  /**
  * configure lldp management-address interface ve (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv4_ve NetworkLldp#ipv4_ve}
  */
  readonly ipv4Ve?: number;
}

export function networkLldpManagementAddressIpv4AddrListInterfaceIpv4ToTerraform(struct?: NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4OutputReference | NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_eth: cdktf.numberToTerraform(struct!.ipv4Eth),
    ipv4_mgmt: cdktf.numberToTerraform(struct!.ipv4Mgmt),
    ipv4_ve: cdktf.numberToTerraform(struct!.ipv4Ve),
  }
}


export function networkLldpManagementAddressIpv4AddrListInterfaceIpv4ToHclTerraform(struct?: NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4OutputReference | NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_eth: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Eth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_mgmt: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Mgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_ve: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Eth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Eth = this._ipv4Eth;
    }
    if (this._ipv4Mgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mgmt = this._ipv4Mgmt;
    }
    if (this._ipv4Ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Ve = this._ipv4Ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Eth = undefined;
      this._ipv4Mgmt = undefined;
      this._ipv4Ve = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Eth = value.ipv4Eth;
      this._ipv4Mgmt = value.ipv4Mgmt;
      this._ipv4Ve = value.ipv4Ve;
    }
  }

  // ipv4_eth - computed: false, optional: true, required: false
  private _ipv4Eth?: number; 
  public get ipv4Eth() {
    return this.getNumberAttribute('ipv4_eth');
  }
  public set ipv4Eth(value: number) {
    this._ipv4Eth = value;
  }
  public resetIpv4Eth() {
    this._ipv4Eth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EthInput() {
    return this._ipv4Eth;
  }

  // ipv4_mgmt - computed: false, optional: true, required: false
  private _ipv4Mgmt?: number; 
  public get ipv4Mgmt() {
    return this.getNumberAttribute('ipv4_mgmt');
  }
  public set ipv4Mgmt(value: number) {
    this._ipv4Mgmt = value;
  }
  public resetIpv4Mgmt() {
    this._ipv4Mgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MgmtInput() {
    return this._ipv4Mgmt;
  }

  // ipv4_ve - computed: false, optional: true, required: false
  private _ipv4Ve?: number; 
  public get ipv4Ve() {
    return this.getNumberAttribute('ipv4_ve');
  }
  public set ipv4Ve(value: number) {
    this._ipv4Ve = value;
  }
  public resetIpv4Ve() {
    this._ipv4Ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VeInput() {
    return this._ipv4Ve;
  }
}
export interface NetworkLldpManagementAddressIpv4AddrListStruct {
  /**
  * Configure lldp management-address, subtype is ipv4 (lldp management-address ipv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv4 NetworkLldp#ipv4}
  */
  readonly ipv4: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#uuid NetworkLldp#uuid}
  */
  readonly uuid?: string;
  /**
  * interface_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#interface_ipv4 NetworkLldp#interface_ipv4}
  */
  readonly interfaceIpv4?: NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4;
}

export function networkLldpManagementAddressIpv4AddrListStructToTerraform(struct?: NetworkLldpManagementAddressIpv4AddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    interface_ipv4: networkLldpManagementAddressIpv4AddrListInterfaceIpv4ToTerraform(struct!.interfaceIpv4),
  }
}


export function networkLldpManagementAddressIpv4AddrListStructToHclTerraform(struct?: NetworkLldpManagementAddressIpv4AddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
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
    interface_ipv4: {
      value: networkLldpManagementAddressIpv4AddrListInterfaceIpv4ToHclTerraform(struct!.interfaceIpv4),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpManagementAddressIpv4AddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkLldpManagementAddressIpv4AddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._interfaceIpv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpv4 = this._interfaceIpv4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpManagementAddressIpv4AddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._uuid = undefined;
      this._interfaceIpv4.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._uuid = value.uuid;
      this._interfaceIpv4.internalValue = value.interfaceIpv4;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
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

  // interface_ipv4 - computed: false, optional: true, required: false
  private _interfaceIpv4 = new NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4OutputReference(this, "interface_ipv4");
  public get interfaceIpv4() {
    return this._interfaceIpv4;
  }
  public putInterfaceIpv4(value: NetworkLldpManagementAddressIpv4AddrListInterfaceIpv4) {
    this._interfaceIpv4.internalValue = value;
  }
  public resetInterfaceIpv4() {
    this._interfaceIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpv4Input() {
    return this._interfaceIpv4.internalValue;
  }
}

export class NetworkLldpManagementAddressIpv4AddrListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkLldpManagementAddressIpv4AddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkLldpManagementAddressIpv4AddrListStructOutputReference {
    return new NetworkLldpManagementAddressIpv4AddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6 {
  /**
  * configure lldp management-address interface ethernet (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv6_eth NetworkLldp#ipv6_eth}
  */
  readonly ipv6Eth?: number;
  /**
  * configure lldp management-address interface management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv6_mgmt NetworkLldp#ipv6_mgmt}
  */
  readonly ipv6Mgmt?: number;
  /**
  * configure lldp management-address interface ve (lldp management-address interface port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv6_ve NetworkLldp#ipv6_ve}
  */
  readonly ipv6Ve?: number;
}

export function networkLldpManagementAddressIpv6AddrListInterfaceIpv6ToTerraform(struct?: NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6OutputReference | NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_eth: cdktf.numberToTerraform(struct!.ipv6Eth),
    ipv6_mgmt: cdktf.numberToTerraform(struct!.ipv6Mgmt),
    ipv6_ve: cdktf.numberToTerraform(struct!.ipv6Ve),
  }
}


export function networkLldpManagementAddressIpv6AddrListInterfaceIpv6ToHclTerraform(struct?: NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6OutputReference | NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_eth: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Eth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_mgmt: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Mgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_ve: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Eth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Eth = this._ipv6Eth;
    }
    if (this._ipv6Mgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mgmt = this._ipv6Mgmt;
    }
    if (this._ipv6Ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Ve = this._ipv6Ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Eth = undefined;
      this._ipv6Mgmt = undefined;
      this._ipv6Ve = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Eth = value.ipv6Eth;
      this._ipv6Mgmt = value.ipv6Mgmt;
      this._ipv6Ve = value.ipv6Ve;
    }
  }

  // ipv6_eth - computed: false, optional: true, required: false
  private _ipv6Eth?: number; 
  public get ipv6Eth() {
    return this.getNumberAttribute('ipv6_eth');
  }
  public set ipv6Eth(value: number) {
    this._ipv6Eth = value;
  }
  public resetIpv6Eth() {
    this._ipv6Eth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EthInput() {
    return this._ipv6Eth;
  }

  // ipv6_mgmt - computed: false, optional: true, required: false
  private _ipv6Mgmt?: number; 
  public get ipv6Mgmt() {
    return this.getNumberAttribute('ipv6_mgmt');
  }
  public set ipv6Mgmt(value: number) {
    this._ipv6Mgmt = value;
  }
  public resetIpv6Mgmt() {
    this._ipv6Mgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MgmtInput() {
    return this._ipv6Mgmt;
  }

  // ipv6_ve - computed: false, optional: true, required: false
  private _ipv6Ve?: number; 
  public get ipv6Ve() {
    return this.getNumberAttribute('ipv6_ve');
  }
  public set ipv6Ve(value: number) {
    this._ipv6Ve = value;
  }
  public resetIpv6Ve() {
    this._ipv6Ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VeInput() {
    return this._ipv6Ve;
  }
}
export interface NetworkLldpManagementAddressIpv6AddrListStruct {
  /**
  * Configure lldp management-address, subtype is ipv6 (lldp management-address ipv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv6 NetworkLldp#ipv6}
  */
  readonly ipv6: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#uuid NetworkLldp#uuid}
  */
  readonly uuid?: string;
  /**
  * interface_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#interface_ipv6 NetworkLldp#interface_ipv6}
  */
  readonly interfaceIpv6?: NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6;
}

export function networkLldpManagementAddressIpv6AddrListStructToTerraform(struct?: NetworkLldpManagementAddressIpv6AddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    interface_ipv6: networkLldpManagementAddressIpv6AddrListInterfaceIpv6ToTerraform(struct!.interfaceIpv6),
  }
}


export function networkLldpManagementAddressIpv6AddrListStructToHclTerraform(struct?: NetworkLldpManagementAddressIpv6AddrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
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
    interface_ipv6: {
      value: networkLldpManagementAddressIpv6AddrListInterfaceIpv6ToHclTerraform(struct!.interfaceIpv6),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpManagementAddressIpv6AddrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkLldpManagementAddressIpv6AddrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._interfaceIpv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpv6 = this._interfaceIpv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpManagementAddressIpv6AddrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6 = undefined;
      this._uuid = undefined;
      this._interfaceIpv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6 = value.ipv6;
      this._uuid = value.uuid;
      this._interfaceIpv6.internalValue = value.interfaceIpv6;
    }
  }

  // ipv6 - computed: false, optional: false, required: true
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

  // interface_ipv6 - computed: false, optional: true, required: false
  private _interfaceIpv6 = new NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6OutputReference(this, "interface_ipv6");
  public get interfaceIpv6() {
    return this._interfaceIpv6;
  }
  public putInterfaceIpv6(value: NetworkLldpManagementAddressIpv6AddrListInterfaceIpv6) {
    this._interfaceIpv6.internalValue = value;
  }
  public resetInterfaceIpv6() {
    this._interfaceIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpv6Input() {
    return this._interfaceIpv6.internalValue;
  }
}

export class NetworkLldpManagementAddressIpv6AddrListStructList extends cdktf.ComplexList {
  public internalValue? : NetworkLldpManagementAddressIpv6AddrListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetworkLldpManagementAddressIpv6AddrListStructOutputReference {
    return new NetworkLldpManagementAddressIpv6AddrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkLldpManagementAddress {
  /**
  * dns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#dns_list NetworkLldp#dns_list}
  */
  readonly dnsList?: NetworkLldpManagementAddressDnsListStruct[] | cdktf.IResolvable;
  /**
  * ipv4_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv4_addr_list NetworkLldp#ipv4_addr_list}
  */
  readonly ipv4AddrList?: NetworkLldpManagementAddressIpv4AddrListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_addr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#ipv6_addr_list NetworkLldp#ipv6_addr_list}
  */
  readonly ipv6AddrList?: NetworkLldpManagementAddressIpv6AddrListStruct[] | cdktf.IResolvable;
}

export function networkLldpManagementAddressToTerraform(struct?: NetworkLldpManagementAddressOutputReference | NetworkLldpManagementAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(networkLldpManagementAddressDnsListStructToTerraform, true)(struct!.dnsList),
    ipv4_addr_list: cdktf.listMapper(networkLldpManagementAddressIpv4AddrListStructToTerraform, true)(struct!.ipv4AddrList),
    ipv6_addr_list: cdktf.listMapper(networkLldpManagementAddressIpv6AddrListStructToTerraform, true)(struct!.ipv6AddrList),
  }
}


export function networkLldpManagementAddressToHclTerraform(struct?: NetworkLldpManagementAddressOutputReference | NetworkLldpManagementAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_list: {
      value: cdktf.listMapperHcl(networkLldpManagementAddressDnsListStructToHclTerraform, true)(struct!.dnsList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkLldpManagementAddressDnsListStructList",
    },
    ipv4_addr_list: {
      value: cdktf.listMapperHcl(networkLldpManagementAddressIpv4AddrListStructToHclTerraform, true)(struct!.ipv4AddrList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkLldpManagementAddressIpv4AddrListStructList",
    },
    ipv6_addr_list: {
      value: cdktf.listMapperHcl(networkLldpManagementAddressIpv6AddrListStructToHclTerraform, true)(struct!.ipv6AddrList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkLldpManagementAddressIpv6AddrListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpManagementAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLldpManagementAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList?.internalValue;
    }
    if (this._ipv4AddrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddrList = this._ipv4AddrList?.internalValue;
    }
    if (this._ipv6AddrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddrList = this._ipv6AddrList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpManagementAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsList.internalValue = undefined;
      this._ipv4AddrList.internalValue = undefined;
      this._ipv6AddrList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsList.internalValue = value.dnsList;
      this._ipv4AddrList.internalValue = value.ipv4AddrList;
      this._ipv6AddrList.internalValue = value.ipv6AddrList;
    }
  }

  // dns_list - computed: false, optional: true, required: false
  private _dnsList = new NetworkLldpManagementAddressDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }
  public putDnsList(value: NetworkLldpManagementAddressDnsListStruct[] | cdktf.IResolvable) {
    this._dnsList.internalValue = value;
  }
  public resetDnsList() {
    this._dnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList.internalValue;
  }

  // ipv4_addr_list - computed: false, optional: true, required: false
  private _ipv4AddrList = new NetworkLldpManagementAddressIpv4AddrListStructList(this, "ipv4_addr_list", false);
  public get ipv4AddrList() {
    return this._ipv4AddrList;
  }
  public putIpv4AddrList(value: NetworkLldpManagementAddressIpv4AddrListStruct[] | cdktf.IResolvable) {
    this._ipv4AddrList.internalValue = value;
  }
  public resetIpv4AddrList() {
    this._ipv4AddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrListInput() {
    return this._ipv4AddrList.internalValue;
  }

  // ipv6_addr_list - computed: false, optional: true, required: false
  private _ipv6AddrList = new NetworkLldpManagementAddressIpv6AddrListStructList(this, "ipv6_addr_list", false);
  public get ipv6AddrList() {
    return this._ipv6AddrList;
  }
  public putIpv6AddrList(value: NetworkLldpManagementAddressIpv6AddrListStruct[] | cdktf.IResolvable) {
    this._ipv6AddrList.internalValue = value;
  }
  public resetIpv6AddrList() {
    this._ipv6AddrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrListInput() {
    return this._ipv6AddrList.internalValue;
  }
}
export interface NetworkLldpNotificationCfg {
  /**
  * Configure lldp notification interval, default is 30 (The lldp notification interval value, default is 30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#interval NetworkLldp#interval}
  */
  readonly interval?: number;
  /**
  * Enable lldp notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#notification NetworkLldp#notification}
  */
  readonly notification?: number;
}

export function networkLldpNotificationCfgToTerraform(struct?: NetworkLldpNotificationCfgOutputReference | NetworkLldpNotificationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    notification: cdktf.numberToTerraform(struct!.notification),
  }
}


export function networkLldpNotificationCfgToHclTerraform(struct?: NetworkLldpNotificationCfgOutputReference | NetworkLldpNotificationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification: {
      value: cdktf.numberToHclTerraform(struct!.notification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpNotificationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLldpNotificationCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._notification !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpNotificationCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._notification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._notification = value.notification;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // notification - computed: false, optional: true, required: false
  private _notification?: number; 
  public get notification() {
    return this.getNumberAttribute('notification');
  }
  public set notification(value: number) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }
}
export interface NetworkLldpTxSet {
  /**
  * Configure lldp tx fast count value (The lldp tx fast count value, default is 4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#fast_count NetworkLldp#fast_count}
  */
  readonly fastCount?: number;
  /**
  * Configure lldp tx fast interval value (The lldp tx fast interval value, default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#fast_interval NetworkLldp#fast_interval}
  */
  readonly fastInterval?: number;
  /**
  * Configure lldp tx hold multiplier (The lldp tx hold value, default is 4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#hold NetworkLldp#hold}
  */
  readonly hold?: number;
  /**
  * Configure lldp tx reinit delay (The lldp tx reinit_delay value, default is 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#reinit_delay NetworkLldp#reinit_delay}
  */
  readonly reinitDelay?: number;
  /**
  * Configure lldp tx interval (The lldp tx interval value, default is 30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#tx_interval NetworkLldp#tx_interval}
  */
  readonly txInterval?: number;
}

export function networkLldpTxSetToTerraform(struct?: NetworkLldpTxSetOutputReference | NetworkLldpTxSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_count: cdktf.numberToTerraform(struct!.fastCount),
    fast_interval: cdktf.numberToTerraform(struct!.fastInterval),
    hold: cdktf.numberToTerraform(struct!.hold),
    reinit_delay: cdktf.numberToTerraform(struct!.reinitDelay),
    tx_interval: cdktf.numberToTerraform(struct!.txInterval),
  }
}


export function networkLldpTxSetToHclTerraform(struct?: NetworkLldpTxSetOutputReference | NetworkLldpTxSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_count: {
      value: cdktf.numberToHclTerraform(struct!.fastCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_interval: {
      value: cdktf.numberToHclTerraform(struct!.fastInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hold: {
      value: cdktf.numberToHclTerraform(struct!.hold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reinit_delay: {
      value: cdktf.numberToHclTerraform(struct!.reinitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_interval: {
      value: cdktf.numberToHclTerraform(struct!.txInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLldpTxSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLldpTxSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastCount = this._fastCount;
    }
    if (this._fastInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastInterval = this._fastInterval;
    }
    if (this._hold !== undefined) {
      hasAnyValues = true;
      internalValueResult.hold = this._hold;
    }
    if (this._reinitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.reinitDelay = this._reinitDelay;
    }
    if (this._txInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.txInterval = this._txInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLldpTxSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fastCount = undefined;
      this._fastInterval = undefined;
      this._hold = undefined;
      this._reinitDelay = undefined;
      this._txInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fastCount = value.fastCount;
      this._fastInterval = value.fastInterval;
      this._hold = value.hold;
      this._reinitDelay = value.reinitDelay;
      this._txInterval = value.txInterval;
    }
  }

  // fast_count - computed: false, optional: true, required: false
  private _fastCount?: number; 
  public get fastCount() {
    return this.getNumberAttribute('fast_count');
  }
  public set fastCount(value: number) {
    this._fastCount = value;
  }
  public resetFastCount() {
    this._fastCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastCountInput() {
    return this._fastCount;
  }

  // fast_interval - computed: false, optional: true, required: false
  private _fastInterval?: number; 
  public get fastInterval() {
    return this.getNumberAttribute('fast_interval');
  }
  public set fastInterval(value: number) {
    this._fastInterval = value;
  }
  public resetFastInterval() {
    this._fastInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastIntervalInput() {
    return this._fastInterval;
  }

  // hold - computed: false, optional: true, required: false
  private _hold?: number; 
  public get hold() {
    return this.getNumberAttribute('hold');
  }
  public set hold(value: number) {
    this._hold = value;
  }
  public resetHold() {
    this._hold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdInput() {
    return this._hold;
  }

  // reinit_delay - computed: false, optional: true, required: false
  private _reinitDelay?: number; 
  public get reinitDelay() {
    return this.getNumberAttribute('reinit_delay');
  }
  public set reinitDelay(value: number) {
    this._reinitDelay = value;
  }
  public resetReinitDelay() {
    this._reinitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reinitDelayInput() {
    return this._reinitDelay;
  }

  // tx_interval - computed: false, optional: true, required: false
  private _txInterval?: number; 
  public get txInterval() {
    return this.getNumberAttribute('tx_interval');
  }
  public set txInterval(value: number) {
    this._txInterval = value;
  }
  public resetTxInterval() {
    this._txInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txIntervalInput() {
    return this._txInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp thunder_network_lldp}
*/
export class NetworkLldp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_lldp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkLldp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkLldp to import
  * @param importFromId The id of the existing NetworkLldp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkLldp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_lldp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/network_lldp thunder_network_lldp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkLldpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkLldpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_lldp',
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
    this._id = config.id;
    this._systemDescription = config.systemDescription;
    this._systemName = config.systemName;
    this._uuid = config.uuid;
    this._enableCfg.internalValue = config.enableCfg;
    this._managementAddress.internalValue = config.managementAddress;
    this._notificationCfg.internalValue = config.notificationCfg;
    this._txSet.internalValue = config.txSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // system_description - computed: false, optional: true, required: false
  private _systemDescription?: string; 
  public get systemDescription() {
    return this.getStringAttribute('system_description');
  }
  public set systemDescription(value: string) {
    this._systemDescription = value;
  }
  public resetSystemDescription() {
    this._systemDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDescriptionInput() {
    return this._systemDescription;
  }

  // system_name - computed: false, optional: true, required: false
  private _systemName?: string; 
  public get systemName() {
    return this.getStringAttribute('system_name');
  }
  public set systemName(value: string) {
    this._systemName = value;
  }
  public resetSystemName() {
    this._systemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemNameInput() {
    return this._systemName;
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

  // enable_cfg - computed: false, optional: true, required: false
  private _enableCfg = new NetworkLldpEnableCfgOutputReference(this, "enable_cfg");
  public get enableCfg() {
    return this._enableCfg;
  }
  public putEnableCfg(value: NetworkLldpEnableCfg) {
    this._enableCfg.internalValue = value;
  }
  public resetEnableCfg() {
    this._enableCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCfgInput() {
    return this._enableCfg.internalValue;
  }

  // management_address - computed: false, optional: true, required: false
  private _managementAddress = new NetworkLldpManagementAddressOutputReference(this, "management_address");
  public get managementAddress() {
    return this._managementAddress;
  }
  public putManagementAddress(value: NetworkLldpManagementAddress) {
    this._managementAddress.internalValue = value;
  }
  public resetManagementAddress() {
    this._managementAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAddressInput() {
    return this._managementAddress.internalValue;
  }

  // notification_cfg - computed: false, optional: true, required: false
  private _notificationCfg = new NetworkLldpNotificationCfgOutputReference(this, "notification_cfg");
  public get notificationCfg() {
    return this._notificationCfg;
  }
  public putNotificationCfg(value: NetworkLldpNotificationCfg) {
    this._notificationCfg.internalValue = value;
  }
  public resetNotificationCfg() {
    this._notificationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationCfgInput() {
    return this._notificationCfg.internalValue;
  }

  // tx_set - computed: false, optional: true, required: false
  private _txSet = new NetworkLldpTxSetOutputReference(this, "tx_set");
  public get txSet() {
    return this._txSet;
  }
  public putTxSet(value: NetworkLldpTxSet) {
    this._txSet.internalValue = value;
  }
  public resetTxSet() {
    this._txSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txSetInput() {
    return this._txSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      system_description: cdktf.stringToTerraform(this._systemDescription),
      system_name: cdktf.stringToTerraform(this._systemName),
      uuid: cdktf.stringToTerraform(this._uuid),
      enable_cfg: networkLldpEnableCfgToTerraform(this._enableCfg.internalValue),
      management_address: networkLldpManagementAddressToTerraform(this._managementAddress.internalValue),
      notification_cfg: networkLldpNotificationCfgToTerraform(this._notificationCfg.internalValue),
      tx_set: networkLldpTxSetToTerraform(this._txSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_description: {
        value: cdktf.stringToHclTerraform(this._systemDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_name: {
        value: cdktf.stringToHclTerraform(this._systemName),
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
      enable_cfg: {
        value: networkLldpEnableCfgToHclTerraform(this._enableCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLldpEnableCfgList",
      },
      management_address: {
        value: networkLldpManagementAddressToHclTerraform(this._managementAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLldpManagementAddressList",
      },
      notification_cfg: {
        value: networkLldpNotificationCfgToHclTerraform(this._notificationCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLldpNotificationCfgList",
      },
      tx_set: {
        value: networkLldpTxSetToHclTerraform(this._txSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLldpTxSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
