// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfOspfinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#authentication RouterOspfOspfinterface#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#authentication_key RouterOspfOspfinterface#authentication_key}
  */
  readonly authenticationKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#bfd RouterOspfOspfinterface#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#comments RouterOspfOspfinterface#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#cost RouterOspfOspfinterface#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#database_filter_out RouterOspfOspfinterface#database_filter_out}
  */
  readonly databaseFilterOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#dead_interval RouterOspfOspfinterface#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#device_name RouterOspfOspfinterface#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#device_vdom RouterOspfOspfinterface#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#dynamic_sort_subtable RouterOspfOspfinterface#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#hello_interval RouterOspfOspfinterface#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#hello_multiplier RouterOspfOspfinterface#hello_multiplier}
  */
  readonly helloMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#id RouterOspfOspfinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#interface RouterOspfOspfinterface#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#ip RouterOspfOspfinterface#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#keychain RouterOspfOspfinterface#keychain}
  */
  readonly keychain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#linkdown_fast_failover RouterOspfOspfinterface#linkdown_fast_failover}
  */
  readonly linkdownFastFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#md5_keychain RouterOspfOspfinterface#md5_keychain}
  */
  readonly md5Keychain?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#mtu RouterOspfOspfinterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#mtu_ignore RouterOspfOspfinterface#mtu_ignore}
  */
  readonly mtuIgnore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#name RouterOspfOspfinterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#network_type RouterOspfOspfinterface#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#prefix_length RouterOspfOspfinterface#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#priority RouterOspfOspfinterface#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#resync_timeout RouterOspfOspfinterface#resync_timeout}
  */
  readonly resyncTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#retransmit_interval RouterOspfOspfinterface#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#status RouterOspfOspfinterface#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#transmit_delay RouterOspfOspfinterface#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * md5_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#md5_keys RouterOspfOspfinterface#md5_keys}
  */
  readonly md5Keys?: RouterOspfOspfinterfaceMd5Keys[] | cdktf.IResolvable;
}
export interface RouterOspfOspfinterfaceMd5Keys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#id RouterOspfOspfinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#key_string RouterOspfOspfinterface#key_string}
  */
  readonly keyString?: string[];
}

export function routerOspfOspfinterfaceMd5KeysToTerraform(struct?: RouterOspfOspfinterfaceMd5Keys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    key_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyString),
  }
}


export function routerOspfOspfinterfaceMd5KeysToHclTerraform(struct?: RouterOspfOspfinterfaceMd5Keys | cdktf.IResolvable): any {
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
    key_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfOspfinterfaceMd5KeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfOspfinterfaceMd5Keys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._keyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyString = this._keyString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfOspfinterfaceMd5Keys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._keyString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._keyString = value.keyString;
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

  // key_string - computed: true, optional: true, required: false
  private _keyString?: string[]; 
  public get keyString() {
    return cdktf.Fn.tolist(this.getListAttribute('key_string'));
  }
  public set keyString(value: string[]) {
    this._keyString = value;
  }
  public resetKeyString() {
    this._keyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStringInput() {
    return this._keyString;
  }
}

export class RouterOspfOspfinterfaceMd5KeysList extends cdktf.ComplexList {
  public internalValue? : RouterOspfOspfinterfaceMd5Keys[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfOspfinterfaceMd5KeysOutputReference {
    return new RouterOspfOspfinterfaceMd5KeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface fmgdevice_router_ospf_ospfinterface}
*/
export class RouterOspfOspfinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_ospf_ospfinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspfOspfinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspfOspfinterface to import
  * @param importFromId The id of the existing RouterOspfOspfinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspfOspfinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_ospf_ospfinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_ospf_ospfinterface fmgdevice_router_ospf_ospfinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfOspfinterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterOspfOspfinterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_ospf_ospfinterface',
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
    this._authentication = config.authentication;
    this._authenticationKey = config.authenticationKey;
    this._bfd = config.bfd;
    this._comments = config.comments;
    this._cost = config.cost;
    this._databaseFilterOut = config.databaseFilterOut;
    this._deadInterval = config.deadInterval;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._helloInterval = config.helloInterval;
    this._helloMultiplier = config.helloMultiplier;
    this._id = config.id;
    this._interface = config.interface;
    this._ip = config.ip;
    this._keychain = config.keychain;
    this._linkdownFastFailover = config.linkdownFastFailover;
    this._md5Keychain = config.md5Keychain;
    this._mtu = config.mtu;
    this._mtuIgnore = config.mtuIgnore;
    this._name = config.name;
    this._networkType = config.networkType;
    this._prefixLength = config.prefixLength;
    this._priority = config.priority;
    this._resyncTimeout = config.resyncTimeout;
    this._retransmitInterval = config.retransmitInterval;
    this._status = config.status;
    this._transmitDelay = config.transmitDelay;
    this._md5Keys.internalValue = config.md5Keys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // authentication_key - computed: true, optional: true, required: false
  private _authenticationKey?: string[]; 
  public get authenticationKey() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_key'));
  }
  public set authenticationKey(value: string[]) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
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

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // database_filter_out - computed: true, optional: true, required: false
  private _databaseFilterOut?: string; 
  public get databaseFilterOut() {
    return this.getStringAttribute('database_filter_out');
  }
  public set databaseFilterOut(value: string) {
    this._databaseFilterOut = value;
  }
  public resetDatabaseFilterOut() {
    this._databaseFilterOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterOutInput() {
    return this._databaseFilterOut;
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

  // hello_multiplier - computed: false, optional: true, required: false
  private _helloMultiplier?: number; 
  public get helloMultiplier() {
    return this.getNumberAttribute('hello_multiplier');
  }
  public set helloMultiplier(value: number) {
    this._helloMultiplier = value;
  }
  public resetHelloMultiplier() {
    this._helloMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloMultiplierInput() {
    return this._helloMultiplier;
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

  // keychain - computed: true, optional: true, required: false
  private _keychain?: string[]; 
  public get keychain() {
    return cdktf.Fn.tolist(this.getListAttribute('keychain'));
  }
  public set keychain(value: string[]) {
    this._keychain = value;
  }
  public resetKeychain() {
    this._keychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keychainInput() {
    return this._keychain;
  }

  // linkdown_fast_failover - computed: true, optional: true, required: false
  private _linkdownFastFailover?: string; 
  public get linkdownFastFailover() {
    return this.getStringAttribute('linkdown_fast_failover');
  }
  public set linkdownFastFailover(value: string) {
    this._linkdownFastFailover = value;
  }
  public resetLinkdownFastFailover() {
    this._linkdownFastFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkdownFastFailoverInput() {
    return this._linkdownFastFailover;
  }

  // md5_keychain - computed: true, optional: true, required: false
  private _md5Keychain?: string[]; 
  public get md5Keychain() {
    return cdktf.Fn.tolist(this.getListAttribute('md5_keychain'));
  }
  public set md5Keychain(value: string[]) {
    this._md5Keychain = value;
  }
  public resetMd5Keychain() {
    this._md5Keychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeychainInput() {
    return this._md5Keychain;
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

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

  // resync_timeout - computed: true, optional: true, required: false
  private _resyncTimeout?: number; 
  public get resyncTimeout() {
    return this.getNumberAttribute('resync_timeout');
  }
  public set resyncTimeout(value: number) {
    this._resyncTimeout = value;
  }
  public resetResyncTimeout() {
    this._resyncTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resyncTimeoutInput() {
    return this._resyncTimeout;
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

  // md5_keys - computed: false, optional: true, required: false
  private _md5Keys = new RouterOspfOspfinterfaceMd5KeysList(this, "md5_keys", false);
  public get md5Keys() {
    return this._md5Keys;
  }
  public putMd5Keys(value: RouterOspfOspfinterfaceMd5Keys[] | cdktf.IResolvable) {
    this._md5Keys.internalValue = value;
  }
  public resetMd5Keys() {
    this._md5Keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeysInput() {
    return this._md5Keys.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      authentication_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationKey),
      bfd: cdktf.stringToTerraform(this._bfd),
      comments: cdktf.stringToTerraform(this._comments),
      cost: cdktf.numberToTerraform(this._cost),
      database_filter_out: cdktf.stringToTerraform(this._databaseFilterOut),
      dead_interval: cdktf.numberToTerraform(this._deadInterval),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      hello_multiplier: cdktf.numberToTerraform(this._helloMultiplier),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      ip: cdktf.stringToTerraform(this._ip),
      keychain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keychain),
      linkdown_fast_failover: cdktf.stringToTerraform(this._linkdownFastFailover),
      md5_keychain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._md5Keychain),
      mtu: cdktf.numberToTerraform(this._mtu),
      mtu_ignore: cdktf.stringToTerraform(this._mtuIgnore),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      priority: cdktf.numberToTerraform(this._priority),
      resync_timeout: cdktf.numberToTerraform(this._resyncTimeout),
      retransmit_interval: cdktf.numberToTerraform(this._retransmitInterval),
      status: cdktf.stringToTerraform(this._status),
      transmit_delay: cdktf.numberToTerraform(this._transmitDelay),
      md5_keys: cdktf.listMapper(routerOspfOspfinterfaceMd5KeysToTerraform, true)(this._md5Keys.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      database_filter_out: {
        value: cdktf.stringToHclTerraform(this._databaseFilterOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      hello_multiplier: {
        value: cdktf.numberToHclTerraform(this._helloMultiplier),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keychain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keychain),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      linkdown_fast_failover: {
        value: cdktf.stringToHclTerraform(this._linkdownFastFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      md5_keychain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._md5Keychain),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      prefix_length: {
        value: cdktf.numberToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resync_timeout: {
        value: cdktf.numberToHclTerraform(this._resyncTimeout),
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
      md5_keys: {
        value: cdktf.listMapperHcl(routerOspfOspfinterfaceMd5KeysToHclTerraform, true)(this._md5Keys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfOspfinterfaceMd5KeysList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
