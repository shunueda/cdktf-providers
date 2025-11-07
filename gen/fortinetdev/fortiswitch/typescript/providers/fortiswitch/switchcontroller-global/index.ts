// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#ac_data_port SwitchcontrollerGlobal#ac_data_port}
  */
  readonly acDataPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#ac_dhcp_option_code SwitchcontrollerGlobal#ac_dhcp_option_code}
  */
  readonly acDhcpOptionCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#ac_discovery_mc_addr SwitchcontrollerGlobal#ac_discovery_mc_addr}
  */
  readonly acDiscoveryMcAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#ac_discovery_type SwitchcontrollerGlobal#ac_discovery_type}
  */
  readonly acDiscoveryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#ac_port SwitchcontrollerGlobal#ac_port}
  */
  readonly acPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#dynamic_sort_subtable SwitchcontrollerGlobal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#echo_interval SwitchcontrollerGlobal#echo_interval}
  */
  readonly echoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#id SwitchcontrollerGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#location SwitchcontrollerGlobal#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#max_discoveries SwitchcontrollerGlobal#max_discoveries}
  */
  readonly maxDiscoveries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#max_retransmit SwitchcontrollerGlobal#max_retransmit}
  */
  readonly maxRetransmit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#mgmt_mode SwitchcontrollerGlobal#mgmt_mode}
  */
  readonly mgmtMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#name SwitchcontrollerGlobal#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#source_ip SwitchcontrollerGlobal#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#source_ip6 SwitchcontrollerGlobal#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#tunnel_mode SwitchcontrollerGlobal#tunnel_mode}
  */
  readonly tunnelMode?: string;
  /**
  * ac_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#ac_list SwitchcontrollerGlobal#ac_list}
  */
  readonly acList?: SwitchcontrollerGlobalAcListStruct[] | cdktf.IResolvable;
}
export interface SwitchcontrollerGlobalAcListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#id SwitchcontrollerGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#ipv4_address SwitchcontrollerGlobal#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#ipv6_address SwitchcontrollerGlobal#ipv6_address}
  */
  readonly ipv6Address?: string;
}

export function switchcontrollerGlobalAcListStructToTerraform(struct?: SwitchcontrollerGlobalAcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
  }
}


export function switchcontrollerGlobalAcListStructToHclTerraform(struct?: SwitchcontrollerGlobalAcListStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerGlobalAcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerGlobalAcListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerGlobalAcListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ipv4Address = undefined;
      this._ipv6Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ipv4Address = value.ipv4Address;
      this._ipv6Address = value.ipv6Address;
    }
  }

  // id - computed: true, optional: true, required: false
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

  // ipv4_address - computed: true, optional: true, required: false
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

  // ipv6_address - computed: true, optional: true, required: false
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
}

export class SwitchcontrollerGlobalAcListStructList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerGlobalAcListStruct[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerGlobalAcListStructOutputReference {
    return new SwitchcontrollerGlobalAcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global fortiswitch_switchcontroller_global}
*/
export class SwitchcontrollerGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchcontroller_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerGlobal to import
  * @param importFromId The id of the existing SwitchcontrollerGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchcontroller_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchcontroller_global fortiswitch_switchcontroller_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchcontroller_global',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
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
    this._acDataPort = config.acDataPort;
    this._acDhcpOptionCode = config.acDhcpOptionCode;
    this._acDiscoveryMcAddr = config.acDiscoveryMcAddr;
    this._acDiscoveryType = config.acDiscoveryType;
    this._acPort = config.acPort;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._echoInterval = config.echoInterval;
    this._id = config.id;
    this._location = config.location;
    this._maxDiscoveries = config.maxDiscoveries;
    this._maxRetransmit = config.maxRetransmit;
    this._mgmtMode = config.mgmtMode;
    this._name = config.name;
    this._sourceIp = config.sourceIp;
    this._sourceIp6 = config.sourceIp6;
    this._tunnelMode = config.tunnelMode;
    this._acList.internalValue = config.acList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ac_data_port - computed: true, optional: true, required: false
  private _acDataPort?: number; 
  public get acDataPort() {
    return this.getNumberAttribute('ac_data_port');
  }
  public set acDataPort(value: number) {
    this._acDataPort = value;
  }
  public resetAcDataPort() {
    this._acDataPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acDataPortInput() {
    return this._acDataPort;
  }

  // ac_dhcp_option_code - computed: true, optional: true, required: false
  private _acDhcpOptionCode?: number; 
  public get acDhcpOptionCode() {
    return this.getNumberAttribute('ac_dhcp_option_code');
  }
  public set acDhcpOptionCode(value: number) {
    this._acDhcpOptionCode = value;
  }
  public resetAcDhcpOptionCode() {
    this._acDhcpOptionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acDhcpOptionCodeInput() {
    return this._acDhcpOptionCode;
  }

  // ac_discovery_mc_addr - computed: true, optional: true, required: false
  private _acDiscoveryMcAddr?: string; 
  public get acDiscoveryMcAddr() {
    return this.getStringAttribute('ac_discovery_mc_addr');
  }
  public set acDiscoveryMcAddr(value: string) {
    this._acDiscoveryMcAddr = value;
  }
  public resetAcDiscoveryMcAddr() {
    this._acDiscoveryMcAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acDiscoveryMcAddrInput() {
    return this._acDiscoveryMcAddr;
  }

  // ac_discovery_type - computed: true, optional: true, required: false
  private _acDiscoveryType?: string; 
  public get acDiscoveryType() {
    return this.getStringAttribute('ac_discovery_type');
  }
  public set acDiscoveryType(value: string) {
    this._acDiscoveryType = value;
  }
  public resetAcDiscoveryType() {
    this._acDiscoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acDiscoveryTypeInput() {
    return this._acDiscoveryType;
  }

  // ac_port - computed: true, optional: true, required: false
  private _acPort?: number; 
  public get acPort() {
    return this.getNumberAttribute('ac_port');
  }
  public set acPort(value: number) {
    this._acPort = value;
  }
  public resetAcPort() {
    this._acPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acPortInput() {
    return this._acPort;
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

  // echo_interval - computed: true, optional: true, required: false
  private _echoInterval?: number; 
  public get echoInterval() {
    return this.getNumberAttribute('echo_interval');
  }
  public set echoInterval(value: number) {
    this._echoInterval = value;
  }
  public resetEchoInterval() {
    this._echoInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoIntervalInput() {
    return this._echoInterval;
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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max_discoveries - computed: true, optional: true, required: false
  private _maxDiscoveries?: number; 
  public get maxDiscoveries() {
    return this.getNumberAttribute('max_discoveries');
  }
  public set maxDiscoveries(value: number) {
    this._maxDiscoveries = value;
  }
  public resetMaxDiscoveries() {
    this._maxDiscoveries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiscoveriesInput() {
    return this._maxDiscoveries;
  }

  // max_retransmit - computed: true, optional: true, required: false
  private _maxRetransmit?: number; 
  public get maxRetransmit() {
    return this.getNumberAttribute('max_retransmit');
  }
  public set maxRetransmit(value: number) {
    this._maxRetransmit = value;
  }
  public resetMaxRetransmit() {
    this._maxRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetransmitInput() {
    return this._maxRetransmit;
  }

  // mgmt_mode - computed: true, optional: true, required: false
  private _mgmtMode?: string; 
  public get mgmtMode() {
    return this.getStringAttribute('mgmt_mode');
  }
  public set mgmtMode(value: string) {
    this._mgmtMode = value;
  }
  public resetMgmtMode() {
    this._mgmtMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtModeInput() {
    return this._mgmtMode;
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

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip6 - computed: true, optional: true, required: false
  private _sourceIp6?: string; 
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }
  public set sourceIp6(value: string) {
    this._sourceIp6 = value;
  }
  public resetSourceIp6() {
    this._sourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIp6Input() {
    return this._sourceIp6;
  }

  // tunnel_mode - computed: true, optional: true, required: false
  private _tunnelMode?: string; 
  public get tunnelMode() {
    return this.getStringAttribute('tunnel_mode');
  }
  public set tunnelMode(value: string) {
    this._tunnelMode = value;
  }
  public resetTunnelMode() {
    this._tunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelModeInput() {
    return this._tunnelMode;
  }

  // ac_list - computed: false, optional: true, required: false
  private _acList = new SwitchcontrollerGlobalAcListStructList(this, "ac_list", false);
  public get acList() {
    return this._acList;
  }
  public putAcList(value: SwitchcontrollerGlobalAcListStruct[] | cdktf.IResolvable) {
    this._acList.internalValue = value;
  }
  public resetAcList() {
    this._acList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acListInput() {
    return this._acList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ac_data_port: cdktf.numberToTerraform(this._acDataPort),
      ac_dhcp_option_code: cdktf.numberToTerraform(this._acDhcpOptionCode),
      ac_discovery_mc_addr: cdktf.stringToTerraform(this._acDiscoveryMcAddr),
      ac_discovery_type: cdktf.stringToTerraform(this._acDiscoveryType),
      ac_port: cdktf.numberToTerraform(this._acPort),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      echo_interval: cdktf.numberToTerraform(this._echoInterval),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      max_discoveries: cdktf.numberToTerraform(this._maxDiscoveries),
      max_retransmit: cdktf.numberToTerraform(this._maxRetransmit),
      mgmt_mode: cdktf.stringToTerraform(this._mgmtMode),
      name: cdktf.stringToTerraform(this._name),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      tunnel_mode: cdktf.stringToTerraform(this._tunnelMode),
      ac_list: cdktf.listMapper(switchcontrollerGlobalAcListStructToTerraform, true)(this._acList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ac_data_port: {
        value: cdktf.numberToHclTerraform(this._acDataPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ac_dhcp_option_code: {
        value: cdktf.numberToHclTerraform(this._acDhcpOptionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ac_discovery_mc_addr: {
        value: cdktf.stringToHclTerraform(this._acDiscoveryMcAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ac_discovery_type: {
        value: cdktf.stringToHclTerraform(this._acDiscoveryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ac_port: {
        value: cdktf.numberToHclTerraform(this._acPort),
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
      echo_interval: {
        value: cdktf.numberToHclTerraform(this._echoInterval),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_discoveries: {
        value: cdktf.numberToHclTerraform(this._maxDiscoveries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retransmit: {
        value: cdktf.numberToHclTerraform(this._maxRetransmit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmt_mode: {
        value: cdktf.stringToHclTerraform(this._mgmtMode),
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
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip6: {
        value: cdktf.stringToHclTerraform(this._sourceIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_mode: {
        value: cdktf.stringToHclTerraform(this._tunnelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ac_list: {
        value: cdktf.listMapperHcl(switchcontrollerGlobalAcListStructToHclTerraform, true)(this._acList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerGlobalAcListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
