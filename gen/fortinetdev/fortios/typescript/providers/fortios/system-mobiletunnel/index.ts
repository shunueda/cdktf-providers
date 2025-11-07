// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemMobiletunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#dynamic_sort_subtable SystemMobiletunnel#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#get_all_tables SystemMobiletunnel#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#hash_algorithm SystemMobiletunnel#hash_algorithm}
  */
  readonly hashAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#home_address SystemMobiletunnel#home_address}
  */
  readonly homeAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#home_agent SystemMobiletunnel#home_agent}
  */
  readonly homeAgent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#id SystemMobiletunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#lifetime SystemMobiletunnel#lifetime}
  */
  readonly lifetime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#n_mhae_key SystemMobiletunnel#n_mhae_key}
  */
  readonly nMhaeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#n_mhae_key_type SystemMobiletunnel#n_mhae_key_type}
  */
  readonly nMhaeKeyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#n_mhae_spi SystemMobiletunnel#n_mhae_spi}
  */
  readonly nMhaeSpi: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#name SystemMobiletunnel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#reg_interval SystemMobiletunnel#reg_interval}
  */
  readonly regInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#reg_retry SystemMobiletunnel#reg_retry}
  */
  readonly regRetry: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#renew_interval SystemMobiletunnel#renew_interval}
  */
  readonly renewInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#roaming_interface SystemMobiletunnel#roaming_interface}
  */
  readonly roamingInterface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#status SystemMobiletunnel#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#tunnel_mode SystemMobiletunnel#tunnel_mode}
  */
  readonly tunnelMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#vdomparam SystemMobiletunnel#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#network SystemMobiletunnel#network}
  */
  readonly network?: SystemMobiletunnelNetwork[] | cdktf.IResolvable;
}
export interface SystemMobiletunnelNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#id SystemMobiletunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#interface SystemMobiletunnel#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#prefix SystemMobiletunnel#prefix}
  */
  readonly prefix?: string;
}

export function systemMobiletunnelNetworkToTerraform(struct?: SystemMobiletunnelNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function systemMobiletunnelNetworkToHclTerraform(struct?: SystemMobiletunnelNetwork | cdktf.IResolvable): any {
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMobiletunnelNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMobiletunnelNetwork | cdktf.IResolvable | undefined {
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
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMobiletunnelNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._prefix = undefined;
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
      this._prefix = value.prefix;
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class SystemMobiletunnelNetworkList extends cdktf.ComplexList {
  public internalValue? : SystemMobiletunnelNetwork[] | cdktf.IResolvable

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
  public get(index: number): SystemMobiletunnelNetworkOutputReference {
    return new SystemMobiletunnelNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel fortios_system_mobiletunnel}
*/
export class SystemMobiletunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_mobiletunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemMobiletunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemMobiletunnel to import
  * @param importFromId The id of the existing SystemMobiletunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemMobiletunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_mobiletunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_mobiletunnel fortios_system_mobiletunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemMobiletunnelConfig
  */
  public constructor(scope: Construct, id: string, config: SystemMobiletunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_mobiletunnel',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._hashAlgorithm = config.hashAlgorithm;
    this._homeAddress = config.homeAddress;
    this._homeAgent = config.homeAgent;
    this._id = config.id;
    this._lifetime = config.lifetime;
    this._nMhaeKey = config.nMhaeKey;
    this._nMhaeKeyType = config.nMhaeKeyType;
    this._nMhaeSpi = config.nMhaeSpi;
    this._name = config.name;
    this._regInterval = config.regInterval;
    this._regRetry = config.regRetry;
    this._renewInterval = config.renewInterval;
    this._roamingInterface = config.roamingInterface;
    this._status = config.status;
    this._tunnelMode = config.tunnelMode;
    this._vdomparam = config.vdomparam;
    this._network.internalValue = config.network;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // hash_algorithm - computed: false, optional: false, required: true
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
  }

  // home_address - computed: true, optional: true, required: false
  private _homeAddress?: string; 
  public get homeAddress() {
    return this.getStringAttribute('home_address');
  }
  public set homeAddress(value: string) {
    this._homeAddress = value;
  }
  public resetHomeAddress() {
    this._homeAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeAddressInput() {
    return this._homeAddress;
  }

  // home_agent - computed: false, optional: false, required: true
  private _homeAgent?: string; 
  public get homeAgent() {
    return this.getStringAttribute('home_agent');
  }
  public set homeAgent(value: string) {
    this._homeAgent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homeAgentInput() {
    return this._homeAgent;
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

  // lifetime - computed: false, optional: false, required: true
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // n_mhae_key - computed: false, optional: true, required: false
  private _nMhaeKey?: string; 
  public get nMhaeKey() {
    return this.getStringAttribute('n_mhae_key');
  }
  public set nMhaeKey(value: string) {
    this._nMhaeKey = value;
  }
  public resetNMhaeKey() {
    this._nMhaeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nMhaeKeyInput() {
    return this._nMhaeKey;
  }

  // n_mhae_key_type - computed: false, optional: false, required: true
  private _nMhaeKeyType?: string; 
  public get nMhaeKeyType() {
    return this.getStringAttribute('n_mhae_key_type');
  }
  public set nMhaeKeyType(value: string) {
    this._nMhaeKeyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nMhaeKeyTypeInput() {
    return this._nMhaeKeyType;
  }

  // n_mhae_spi - computed: false, optional: false, required: true
  private _nMhaeSpi?: number; 
  public get nMhaeSpi() {
    return this.getNumberAttribute('n_mhae_spi');
  }
  public set nMhaeSpi(value: number) {
    this._nMhaeSpi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nMhaeSpiInput() {
    return this._nMhaeSpi;
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

  // reg_interval - computed: false, optional: false, required: true
  private _regInterval?: number; 
  public get regInterval() {
    return this.getNumberAttribute('reg_interval');
  }
  public set regInterval(value: number) {
    this._regInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regIntervalInput() {
    return this._regInterval;
  }

  // reg_retry - computed: false, optional: false, required: true
  private _regRetry?: number; 
  public get regRetry() {
    return this.getNumberAttribute('reg_retry');
  }
  public set regRetry(value: number) {
    this._regRetry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regRetryInput() {
    return this._regRetry;
  }

  // renew_interval - computed: false, optional: false, required: true
  private _renewInterval?: number; 
  public get renewInterval() {
    return this.getNumberAttribute('renew_interval');
  }
  public set renewInterval(value: number) {
    this._renewInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewIntervalInput() {
    return this._renewInterval;
  }

  // roaming_interface - computed: false, optional: false, required: true
  private _roamingInterface?: string; 
  public get roamingInterface() {
    return this.getStringAttribute('roaming_interface');
  }
  public set roamingInterface(value: string) {
    this._roamingInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roamingInterfaceInput() {
    return this._roamingInterface;
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

  // tunnel_mode - computed: false, optional: false, required: true
  private _tunnelMode?: string; 
  public get tunnelMode() {
    return this.getStringAttribute('tunnel_mode');
  }
  public set tunnelMode(value: string) {
    this._tunnelMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelModeInput() {
    return this._tunnelMode;
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

  // network - computed: false, optional: true, required: false
  private _network = new SystemMobiletunnelNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: SystemMobiletunnelNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      hash_algorithm: cdktf.stringToTerraform(this._hashAlgorithm),
      home_address: cdktf.stringToTerraform(this._homeAddress),
      home_agent: cdktf.stringToTerraform(this._homeAgent),
      id: cdktf.stringToTerraform(this._id),
      lifetime: cdktf.numberToTerraform(this._lifetime),
      n_mhae_key: cdktf.stringToTerraform(this._nMhaeKey),
      n_mhae_key_type: cdktf.stringToTerraform(this._nMhaeKeyType),
      n_mhae_spi: cdktf.numberToTerraform(this._nMhaeSpi),
      name: cdktf.stringToTerraform(this._name),
      reg_interval: cdktf.numberToTerraform(this._regInterval),
      reg_retry: cdktf.numberToTerraform(this._regRetry),
      renew_interval: cdktf.numberToTerraform(this._renewInterval),
      roaming_interface: cdktf.stringToTerraform(this._roamingInterface),
      status: cdktf.stringToTerraform(this._status),
      tunnel_mode: cdktf.stringToTerraform(this._tunnelMode),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      network: cdktf.listMapper(systemMobiletunnelNetworkToTerraform, true)(this._network.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_algorithm: {
        value: cdktf.stringToHclTerraform(this._hashAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_address: {
        value: cdktf.stringToHclTerraform(this._homeAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_agent: {
        value: cdktf.stringToHclTerraform(this._homeAgent),
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
      lifetime: {
        value: cdktf.numberToHclTerraform(this._lifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      n_mhae_key: {
        value: cdktf.stringToHclTerraform(this._nMhaeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n_mhae_key_type: {
        value: cdktf.stringToHclTerraform(this._nMhaeKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n_mhae_spi: {
        value: cdktf.numberToHclTerraform(this._nMhaeSpi),
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
      reg_interval: {
        value: cdktf.numberToHclTerraform(this._regInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reg_retry: {
        value: cdktf.numberToHclTerraform(this._regRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      renew_interval: {
        value: cdktf.numberToHclTerraform(this._renewInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      roaming_interface: {
        value: cdktf.stringToHclTerraform(this._roamingInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.listMapperHcl(systemMobiletunnelNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemMobiletunnelNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
