// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVxlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#dstport SystemVxlan#dstport}
  */
  readonly dstport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#dynamic_sort_subtable SystemVxlan#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#evpn_id SystemVxlan#evpn_id}
  */
  readonly evpnId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#get_all_tables SystemVxlan#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#id SystemVxlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#interface SystemVxlan#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#ip_version SystemVxlan#ip_version}
  */
  readonly ipVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#learn_from_traffic SystemVxlan#learn_from_traffic}
  */
  readonly learnFromTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#local_ip SystemVxlan#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#local_ip6 SystemVxlan#local_ip6}
  */
  readonly localIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#multicast_ttl SystemVxlan#multicast_ttl}
  */
  readonly multicastTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#name SystemVxlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#vdomparam SystemVxlan#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#vni SystemVxlan#vni}
  */
  readonly vni: number;
  /**
  * remote_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#remote_ip SystemVxlan#remote_ip}
  */
  readonly remoteIp?: SystemVxlanRemoteIp[] | cdktf.IResolvable;
  /**
  * remote_ip6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#remote_ip6 SystemVxlan#remote_ip6}
  */
  readonly remoteIp6?: SystemVxlanRemoteIp6[] | cdktf.IResolvable;
}
export interface SystemVxlanRemoteIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#ip SystemVxlan#ip}
  */
  readonly ip?: string;
}

export function systemVxlanRemoteIpToTerraform(struct?: SystemVxlanRemoteIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function systemVxlanRemoteIpToHclTerraform(struct?: SystemVxlanRemoteIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemVxlanRemoteIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemVxlanRemoteIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemVxlanRemoteIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
    }
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

export class SystemVxlanRemoteIpList extends cdktf.ComplexList {
  public internalValue? : SystemVxlanRemoteIp[] | cdktf.IResolvable

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
  public get(index: number): SystemVxlanRemoteIpOutputReference {
    return new SystemVxlanRemoteIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemVxlanRemoteIp6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#ip6 SystemVxlan#ip6}
  */
  readonly ip6?: string;
}

export function systemVxlanRemoteIp6ToTerraform(struct?: SystemVxlanRemoteIp6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip6: cdktf.stringToTerraform(struct!.ip6),
  }
}


export function systemVxlanRemoteIp6ToHclTerraform(struct?: SystemVxlanRemoteIp6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemVxlanRemoteIp6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemVxlanRemoteIp6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemVxlanRemoteIp6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip6 = value.ip6;
    }
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
}

export class SystemVxlanRemoteIp6List extends cdktf.ComplexList {
  public internalValue? : SystemVxlanRemoteIp6[] | cdktf.IResolvable

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
  public get(index: number): SystemVxlanRemoteIp6OutputReference {
    return new SystemVxlanRemoteIp6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan fortios_system_vxlan}
*/
export class SystemVxlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_vxlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVxlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVxlan to import
  * @param importFromId The id of the existing SystemVxlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVxlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_vxlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vxlan fortios_system_vxlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVxlanConfig
  */
  public constructor(scope: Construct, id: string, config: SystemVxlanConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_vxlan',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dstport = config.dstport;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._evpnId = config.evpnId;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._interface = config.interface;
    this._ipVersion = config.ipVersion;
    this._learnFromTraffic = config.learnFromTraffic;
    this._localIp = config.localIp;
    this._localIp6 = config.localIp6;
    this._multicastTtl = config.multicastTtl;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._vni = config.vni;
    this._remoteIp.internalValue = config.remoteIp;
    this._remoteIp6.internalValue = config.remoteIp6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dstport - computed: true, optional: true, required: false
  private _dstport?: number; 
  public get dstport() {
    return this.getNumberAttribute('dstport');
  }
  public set dstport(value: number) {
    this._dstport = value;
  }
  public resetDstport() {
    this._dstport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
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

  // evpn_id - computed: false, optional: true, required: false
  private _evpnId?: number; 
  public get evpnId() {
    return this.getNumberAttribute('evpn_id');
  }
  public set evpnId(value: number) {
    this._evpnId = value;
  }
  public resetEvpnId() {
    this._evpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnIdInput() {
    return this._evpnId;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_version - computed: false, optional: false, required: true
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // learn_from_traffic - computed: true, optional: true, required: false
  private _learnFromTraffic?: string; 
  public get learnFromTraffic() {
    return this.getStringAttribute('learn_from_traffic');
  }
  public set learnFromTraffic(value: string) {
    this._learnFromTraffic = value;
  }
  public resetLearnFromTraffic() {
    this._learnFromTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnFromTrafficInput() {
    return this._learnFromTraffic;
  }

  // local_ip - computed: true, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // local_ip6 - computed: true, optional: true, required: false
  private _localIp6?: string; 
  public get localIp6() {
    return this.getStringAttribute('local_ip6');
  }
  public set localIp6(value: string) {
    this._localIp6 = value;
  }
  public resetLocalIp6() {
    this._localIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIp6Input() {
    return this._localIp6;
  }

  // multicast_ttl - computed: false, optional: true, required: false
  private _multicastTtl?: number; 
  public get multicastTtl() {
    return this.getNumberAttribute('multicast_ttl');
  }
  public set multicastTtl(value: number) {
    this._multicastTtl = value;
  }
  public resetMulticastTtl() {
    this._multicastTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastTtlInput() {
    return this._multicastTtl;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vni - computed: false, optional: false, required: true
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp = new SystemVxlanRemoteIpList(this, "remote_ip", true);
  public get remoteIp() {
    return this._remoteIp;
  }
  public putRemoteIp(value: SystemVxlanRemoteIp[] | cdktf.IResolvable) {
    this._remoteIp.internalValue = value;
  }
  public resetRemoteIp() {
    this._remoteIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp.internalValue;
  }

  // remote_ip6 - computed: false, optional: true, required: false
  private _remoteIp6 = new SystemVxlanRemoteIp6List(this, "remote_ip6", true);
  public get remoteIp6() {
    return this._remoteIp6;
  }
  public putRemoteIp6(value: SystemVxlanRemoteIp6[] | cdktf.IResolvable) {
    this._remoteIp6.internalValue = value;
  }
  public resetRemoteIp6() {
    this._remoteIp6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIp6Input() {
    return this._remoteIp6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dstport: cdktf.numberToTerraform(this._dstport),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      evpn_id: cdktf.numberToTerraform(this._evpnId),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      learn_from_traffic: cdktf.stringToTerraform(this._learnFromTraffic),
      local_ip: cdktf.stringToTerraform(this._localIp),
      local_ip6: cdktf.stringToTerraform(this._localIp6),
      multicast_ttl: cdktf.numberToTerraform(this._multicastTtl),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vni: cdktf.numberToTerraform(this._vni),
      remote_ip: cdktf.listMapper(systemVxlanRemoteIpToTerraform, true)(this._remoteIp.internalValue),
      remote_ip6: cdktf.listMapper(systemVxlanRemoteIp6ToTerraform, true)(this._remoteIp6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dstport: {
        value: cdktf.numberToHclTerraform(this._dstport),
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
      evpn_id: {
        value: cdktf.numberToHclTerraform(this._evpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learn_from_traffic: {
        value: cdktf.stringToHclTerraform(this._learnFromTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ip: {
        value: cdktf.stringToHclTerraform(this._localIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ip6: {
        value: cdktf.stringToHclTerraform(this._localIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_ttl: {
        value: cdktf.numberToHclTerraform(this._multicastTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_ip: {
        value: cdktf.listMapperHcl(systemVxlanRemoteIpToHclTerraform, true)(this._remoteIp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemVxlanRemoteIpList",
      },
      remote_ip6: {
        value: cdktf.listMapperHcl(systemVxlanRemoteIp6ToHclTerraform, true)(this._remoteIp6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemVxlanRemoteIp6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
