// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspf6Ospf6InterfaceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#area_id RouterOspf6Ospf6InterfaceA#area_id}
  */
  readonly areaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#authentication RouterOspf6Ospf6InterfaceA#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#bfd RouterOspf6Ospf6InterfaceA#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#cost RouterOspf6Ospf6InterfaceA#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#dead_interval RouterOspf6Ospf6InterfaceA#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#device_name RouterOspf6Ospf6InterfaceA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#device_vdom RouterOspf6Ospf6InterfaceA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#dynamic_sort_subtable RouterOspf6Ospf6InterfaceA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#hello_interval RouterOspf6Ospf6InterfaceA#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#id RouterOspf6Ospf6InterfaceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#interface RouterOspf6Ospf6InterfaceA#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#ipsec_auth_alg RouterOspf6Ospf6InterfaceA#ipsec_auth_alg}
  */
  readonly ipsecAuthAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#ipsec_enc_alg RouterOspf6Ospf6InterfaceA#ipsec_enc_alg}
  */
  readonly ipsecEncAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#key_rollover_interval RouterOspf6Ospf6InterfaceA#key_rollover_interval}
  */
  readonly keyRolloverInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#mtu RouterOspf6Ospf6InterfaceA#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#mtu_ignore RouterOspf6Ospf6InterfaceA#mtu_ignore}
  */
  readonly mtuIgnore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#name RouterOspf6Ospf6InterfaceA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#network_type RouterOspf6Ospf6InterfaceA#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#priority RouterOspf6Ospf6InterfaceA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#retransmit_interval RouterOspf6Ospf6InterfaceA#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#status RouterOspf6Ospf6InterfaceA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#transmit_delay RouterOspf6Ospf6InterfaceA#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * ipsec_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#ipsec_keys RouterOspf6Ospf6InterfaceA#ipsec_keys}
  */
  readonly ipsecKeys?: RouterOspf6Ospf6InterfaceIpsecKeysA[] | cdktf.IResolvable;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#neighbor RouterOspf6Ospf6InterfaceA#neighbor}
  */
  readonly neighbor?: RouterOspf6Ospf6InterfaceNeighborA[] | cdktf.IResolvable;
}
export interface RouterOspf6Ospf6InterfaceIpsecKeysA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#auth_key RouterOspf6Ospf6InterfaceA#auth_key}
  */
  readonly authKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#enc_key RouterOspf6Ospf6InterfaceA#enc_key}
  */
  readonly encKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#spi RouterOspf6Ospf6InterfaceA#spi}
  */
  readonly spi?: number;
}

export function routerOspf6Ospf6InterfaceIpsecKeysAToTerraform(struct?: RouterOspf6Ospf6InterfaceIpsecKeysA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authKey),
    enc_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.encKey),
    spi: cdktf.numberToTerraform(struct!.spi),
  }
}


export function routerOspf6Ospf6InterfaceIpsecKeysAToHclTerraform(struct?: RouterOspf6Ospf6InterfaceIpsecKeysA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enc_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.encKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    spi: {
      value: cdktf.numberToHclTerraform(struct!.spi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6Ospf6InterfaceIpsecKeysAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6Ospf6InterfaceIpsecKeysA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._encKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encKey = this._encKey;
    }
    if (this._spi !== undefined) {
      hasAnyValues = true;
      internalValueResult.spi = this._spi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6Ospf6InterfaceIpsecKeysA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authKey = undefined;
      this._encKey = undefined;
      this._spi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authKey = value.authKey;
      this._encKey = value.encKey;
      this._spi = value.spi;
    }
  }

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string[]; 
  public get authKey() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_key'));
  }
  public set authKey(value: string[]) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // enc_key - computed: true, optional: true, required: false
  private _encKey?: string[]; 
  public get encKey() {
    return cdktf.Fn.tolist(this.getListAttribute('enc_key'));
  }
  public set encKey(value: string[]) {
    this._encKey = value;
  }
  public resetEncKey() {
    this._encKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encKeyInput() {
    return this._encKey;
  }

  // spi - computed: false, optional: true, required: false
  private _spi?: number; 
  public get spi() {
    return this.getNumberAttribute('spi');
  }
  public set spi(value: number) {
    this._spi = value;
  }
  public resetSpi() {
    this._spi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiInput() {
    return this._spi;
  }
}

export class RouterOspf6Ospf6InterfaceIpsecKeysAList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6Ospf6InterfaceIpsecKeysA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6Ospf6InterfaceIpsecKeysAOutputReference {
    return new RouterOspf6Ospf6InterfaceIpsecKeysAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspf6Ospf6InterfaceNeighborA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#cost RouterOspf6Ospf6InterfaceA#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#ip6 RouterOspf6Ospf6InterfaceA#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#poll_interval RouterOspf6Ospf6InterfaceA#poll_interval}
  */
  readonly pollInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#priority RouterOspf6Ospf6InterfaceA#priority}
  */
  readonly priority?: number;
}

export function routerOspf6Ospf6InterfaceNeighborAToTerraform(struct?: RouterOspf6Ospf6InterfaceNeighborA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    poll_interval: cdktf.numberToTerraform(struct!.pollInterval),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function routerOspf6Ospf6InterfaceNeighborAToHclTerraform(struct?: RouterOspf6Ospf6InterfaceNeighborA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollInterval),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspf6Ospf6InterfaceNeighborAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspf6Ospf6InterfaceNeighborA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._pollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollInterval = this._pollInterval;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspf6Ospf6InterfaceNeighborA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._ip6 = undefined;
      this._pollInterval = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._ip6 = value.ip6;
      this._pollInterval = value.pollInterval;
      this._priority = value.priority;
    }
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // ip6 - computed: false, optional: true, required: false
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

  // poll_interval - computed: true, optional: true, required: false
  private _pollInterval?: number; 
  public get pollInterval() {
    return this.getNumberAttribute('poll_interval');
  }
  public set pollInterval(value: number) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
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
}

export class RouterOspf6Ospf6InterfaceNeighborAList extends cdktf.ComplexList {
  public internalValue? : RouterOspf6Ospf6InterfaceNeighborA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspf6Ospf6InterfaceNeighborAOutputReference {
    return new RouterOspf6Ospf6InterfaceNeighborAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface fmgdevice_router_ospf6_ospf6interface}
*/
export class RouterOspf6Ospf6InterfaceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_ospf6_ospf6interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspf6Ospf6InterfaceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspf6Ospf6InterfaceA to import
  * @param importFromId The id of the existing RouterOspf6Ospf6InterfaceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspf6Ospf6InterfaceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_ospf6_ospf6interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf6_ospf6interface fmgdevice_router_ospf6_ospf6interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspf6Ospf6InterfaceAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterOspf6Ospf6InterfaceAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_ospf6_ospf6interface',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaId = config.areaId;
    this._authentication = config.authentication;
    this._bfd = config.bfd;
    this._cost = config.cost;
    this._deadInterval = config.deadInterval;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._helloInterval = config.helloInterval;
    this._id = config.id;
    this._interface = config.interface;
    this._ipsecAuthAlg = config.ipsecAuthAlg;
    this._ipsecEncAlg = config.ipsecEncAlg;
    this._keyRolloverInterval = config.keyRolloverInterval;
    this._mtu = config.mtu;
    this._mtuIgnore = config.mtuIgnore;
    this._name = config.name;
    this._networkType = config.networkType;
    this._priority = config.priority;
    this._retransmitInterval = config.retransmitInterval;
    this._status = config.status;
    this._transmitDelay = config.transmitDelay;
    this._ipsecKeys.internalValue = config.ipsecKeys;
    this._neighbor.internalValue = config.neighbor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_id - computed: true, optional: true, required: false
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  public resetAreaId() {
    this._areaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipsec_auth_alg - computed: false, optional: true, required: false
  private _ipsecAuthAlg?: string; 
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }
  public set ipsecAuthAlg(value: string) {
    this._ipsecAuthAlg = value;
  }
  public resetIpsecAuthAlg() {
    this._ipsecAuthAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecAuthAlgInput() {
    return this._ipsecAuthAlg;
  }

  // ipsec_enc_alg - computed: false, optional: true, required: false
  private _ipsecEncAlg?: string; 
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }
  public set ipsecEncAlg(value: string) {
    this._ipsecEncAlg = value;
  }
  public resetIpsecEncAlg() {
    this._ipsecEncAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecEncAlgInput() {
    return this._ipsecEncAlg;
  }

  // key_rollover_interval - computed: true, optional: true, required: false
  private _keyRolloverInterval?: number; 
  public get keyRolloverInterval() {
    return this.getNumberAttribute('key_rollover_interval');
  }
  public set keyRolloverInterval(value: number) {
    this._keyRolloverInterval = value;
  }
  public resetKeyRolloverInterval() {
    this._keyRolloverInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRolloverIntervalInput() {
    return this._keyRolloverInterval;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_ignore - computed: true, optional: true, required: false
  private _mtuIgnore?: string; 
  public get mtuIgnore() {
    return this.getStringAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: string) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
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

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
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

  // retransmit_interval - computed: true, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
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

  // transmit_delay - computed: true, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }

  // ipsec_keys - computed: false, optional: true, required: false
  private _ipsecKeys = new RouterOspf6Ospf6InterfaceIpsecKeysAList(this, "ipsec_keys", false);
  public get ipsecKeys() {
    return this._ipsecKeys;
  }
  public putIpsecKeys(value: RouterOspf6Ospf6InterfaceIpsecKeysA[] | cdktf.IResolvable) {
    this._ipsecKeys.internalValue = value;
  }
  public resetIpsecKeys() {
    this._ipsecKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecKeysInput() {
    return this._ipsecKeys.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterOspf6Ospf6InterfaceNeighborAList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterOspf6Ospf6InterfaceNeighborA[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_id: cdktf.stringToTerraform(this._areaId),
      authentication: cdktf.stringToTerraform(this._authentication),
      bfd: cdktf.stringToTerraform(this._bfd),
      cost: cdktf.numberToTerraform(this._cost),
      dead_interval: cdktf.numberToTerraform(this._deadInterval),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      ipsec_auth_alg: cdktf.stringToTerraform(this._ipsecAuthAlg),
      ipsec_enc_alg: cdktf.stringToTerraform(this._ipsecEncAlg),
      key_rollover_interval: cdktf.numberToTerraform(this._keyRolloverInterval),
      mtu: cdktf.numberToTerraform(this._mtu),
      mtu_ignore: cdktf.stringToTerraform(this._mtuIgnore),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
      priority: cdktf.numberToTerraform(this._priority),
      retransmit_interval: cdktf.numberToTerraform(this._retransmitInterval),
      status: cdktf.stringToTerraform(this._status),
      transmit_delay: cdktf.numberToTerraform(this._transmitDelay),
      ipsec_keys: cdktf.listMapper(routerOspf6Ospf6InterfaceIpsecKeysAToTerraform, true)(this._ipsecKeys.internalValue),
      neighbor: cdktf.listMapper(routerOspf6Ospf6InterfaceNeighborAToTerraform, true)(this._neighbor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_id: {
        value: cdktf.stringToHclTerraform(this._areaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_interval: {
        value: cdktf.numberToHclTerraform(this._deadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_interval: {
        value: cdktf.numberToHclTerraform(this._helloInterval),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipsec_auth_alg: {
        value: cdktf.stringToHclTerraform(this._ipsecAuthAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_enc_alg: {
        value: cdktf.stringToHclTerraform(this._ipsecEncAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_rollover_interval: {
        value: cdktf.numberToHclTerraform(this._keyRolloverInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu_ignore: {
        value: cdktf.stringToHclTerraform(this._mtuIgnore),
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
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retransmit_interval: {
        value: cdktf.numberToHclTerraform(this._retransmitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transmit_delay: {
        value: cdktf.numberToHclTerraform(this._transmitDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_keys: {
        value: cdktf.listMapperHcl(routerOspf6Ospf6InterfaceIpsecKeysAToHclTerraform, true)(this._ipsecKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspf6Ospf6InterfaceIpsecKeysAList",
      },
      neighbor: {
        value: cdktf.listMapperHcl(routerOspf6Ospf6InterfaceNeighborAToHclTerraform, true)(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspf6Ospf6InterfaceNeighborAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
