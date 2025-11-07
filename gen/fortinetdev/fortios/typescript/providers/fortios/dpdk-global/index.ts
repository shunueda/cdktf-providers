// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DpdkGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#dynamic_sort_subtable DpdkGlobal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#elasticbuffer DpdkGlobal#elasticbuffer}
  */
  readonly elasticbuffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#get_all_tables DpdkGlobal#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#hugepage_percentage DpdkGlobal#hugepage_percentage}
  */
  readonly hugepagePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#id DpdkGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#ipsec_offload DpdkGlobal#ipsec_offload}
  */
  readonly ipsecOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#mbufpool_percentage DpdkGlobal#mbufpool_percentage}
  */
  readonly mbufpoolPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#multiqueue DpdkGlobal#multiqueue}
  */
  readonly multiqueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#per_session_accounting DpdkGlobal#per_session_accounting}
  */
  readonly perSessionAccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#protects DpdkGlobal#protects}
  */
  readonly protects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#session_table_percentage DpdkGlobal#session_table_percentage}
  */
  readonly sessionTablePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#sleep_on_idle DpdkGlobal#sleep_on_idle}
  */
  readonly sleepOnIdle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#status DpdkGlobal#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#vdomparam DpdkGlobal#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#interface DpdkGlobal#interface}
  */
  readonly interface?: DpdkGlobalInterface[] | cdktf.IResolvable;
}
export interface DpdkGlobalInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#interface_name DpdkGlobal#interface_name}
  */
  readonly interfaceName?: string;
}

export function dpdkGlobalInterfaceToTerraform(struct?: DpdkGlobalInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function dpdkGlobalInterfaceToHclTerraform(struct?: DpdkGlobalInterface | cdktf.IResolvable): any {
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

export class DpdkGlobalInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DpdkGlobalInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DpdkGlobalInterface | cdktf.IResolvable | undefined) {
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

export class DpdkGlobalInterfaceList extends cdktf.ComplexList {
  public internalValue? : DpdkGlobalInterface[] | cdktf.IResolvable

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
  public get(index: number): DpdkGlobalInterfaceOutputReference {
    return new DpdkGlobalInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global fortios_dpdk_global}
*/
export class DpdkGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_dpdk_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DpdkGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DpdkGlobal to import
  * @param importFromId The id of the existing DpdkGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DpdkGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_dpdk_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_global fortios_dpdk_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DpdkGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DpdkGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_dpdk_global',
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
    this._elasticbuffer = config.elasticbuffer;
    this._getAllTables = config.fetchAllTables;
    this._hugepagePercentage = config.hugepagePercentage;
    this._id = config.id;
    this._ipsecOffload = config.ipsecOffload;
    this._mbufpoolPercentage = config.mbufpoolPercentage;
    this._multiqueue = config.multiqueue;
    this._perSessionAccounting = config.perSessionAccounting;
    this._protects = config.protects;
    this._sessionTablePercentage = config.sessionTablePercentage;
    this._sleepOnIdle = config.sleepOnIdle;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
    this._interface.internalValue = config.interface;
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

  // elasticbuffer - computed: true, optional: true, required: false
  private _elasticbuffer?: string; 
  public get elasticbuffer() {
    return this.getStringAttribute('elasticbuffer');
  }
  public set elasticbuffer(value: string) {
    this._elasticbuffer = value;
  }
  public resetElasticbuffer() {
    this._elasticbuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticbufferInput() {
    return this._elasticbuffer;
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

  // hugepage_percentage - computed: true, optional: true, required: false
  private _hugepagePercentage?: number; 
  public get hugepagePercentage() {
    return this.getNumberAttribute('hugepage_percentage');
  }
  public set hugepagePercentage(value: number) {
    this._hugepagePercentage = value;
  }
  public resetHugepagePercentage() {
    this._hugepagePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepagePercentageInput() {
    return this._hugepagePercentage;
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

  // ipsec_offload - computed: true, optional: true, required: false
  private _ipsecOffload?: string; 
  public get ipsecOffload() {
    return this.getStringAttribute('ipsec_offload');
  }
  public set ipsecOffload(value: string) {
    this._ipsecOffload = value;
  }
  public resetIpsecOffload() {
    this._ipsecOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecOffloadInput() {
    return this._ipsecOffload;
  }

  // mbufpool_percentage - computed: true, optional: true, required: false
  private _mbufpoolPercentage?: number; 
  public get mbufpoolPercentage() {
    return this.getNumberAttribute('mbufpool_percentage');
  }
  public set mbufpoolPercentage(value: number) {
    this._mbufpoolPercentage = value;
  }
  public resetMbufpoolPercentage() {
    this._mbufpoolPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbufpoolPercentageInput() {
    return this._mbufpoolPercentage;
  }

  // multiqueue - computed: true, optional: true, required: false
  private _multiqueue?: string; 
  public get multiqueue() {
    return this.getStringAttribute('multiqueue');
  }
  public set multiqueue(value: string) {
    this._multiqueue = value;
  }
  public resetMultiqueue() {
    this._multiqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiqueueInput() {
    return this._multiqueue;
  }

  // per_session_accounting - computed: true, optional: true, required: false
  private _perSessionAccounting?: string; 
  public get perSessionAccounting() {
    return this.getStringAttribute('per_session_accounting');
  }
  public set perSessionAccounting(value: string) {
    this._perSessionAccounting = value;
  }
  public resetPerSessionAccounting() {
    this._perSessionAccounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSessionAccountingInput() {
    return this._perSessionAccounting;
  }

  // protects - computed: false, optional: true, required: false
  private _protects?: string; 
  public get protects() {
    return this.getStringAttribute('protects');
  }
  public set protects(value: string) {
    this._protects = value;
  }
  public resetProtects() {
    this._protects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectsInput() {
    return this._protects;
  }

  // session_table_percentage - computed: true, optional: true, required: false
  private _sessionTablePercentage?: number; 
  public get sessionTablePercentage() {
    return this.getNumberAttribute('session_table_percentage');
  }
  public set sessionTablePercentage(value: number) {
    this._sessionTablePercentage = value;
  }
  public resetSessionTablePercentage() {
    this._sessionTablePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTablePercentageInput() {
    return this._sessionTablePercentage;
  }

  // sleep_on_idle - computed: true, optional: true, required: false
  private _sleepOnIdle?: string; 
  public get sleepOnIdle() {
    return this.getStringAttribute('sleep_on_idle');
  }
  public set sleepOnIdle(value: string) {
    this._sleepOnIdle = value;
  }
  public resetSleepOnIdle() {
    this._sleepOnIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepOnIdleInput() {
    return this._sleepOnIdle;
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

  // interface - computed: false, optional: true, required: false
  private _interface = new DpdkGlobalInterfaceList(this, "interface", true);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DpdkGlobalInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      elasticbuffer: cdktf.stringToTerraform(this._elasticbuffer),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      hugepage_percentage: cdktf.numberToTerraform(this._hugepagePercentage),
      id: cdktf.stringToTerraform(this._id),
      ipsec_offload: cdktf.stringToTerraform(this._ipsecOffload),
      mbufpool_percentage: cdktf.numberToTerraform(this._mbufpoolPercentage),
      multiqueue: cdktf.stringToTerraform(this._multiqueue),
      per_session_accounting: cdktf.stringToTerraform(this._perSessionAccounting),
      protects: cdktf.stringToTerraform(this._protects),
      session_table_percentage: cdktf.numberToTerraform(this._sessionTablePercentage),
      sleep_on_idle: cdktf.stringToTerraform(this._sleepOnIdle),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      interface: cdktf.listMapper(dpdkGlobalInterfaceToTerraform, true)(this._interface.internalValue),
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
      elasticbuffer: {
        value: cdktf.stringToHclTerraform(this._elasticbuffer),
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
      hugepage_percentage: {
        value: cdktf.numberToHclTerraform(this._hugepagePercentage),
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
      ipsec_offload: {
        value: cdktf.stringToHclTerraform(this._ipsecOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mbufpool_percentage: {
        value: cdktf.numberToHclTerraform(this._mbufpoolPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiqueue: {
        value: cdktf.stringToHclTerraform(this._multiqueue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_session_accounting: {
        value: cdktf.stringToHclTerraform(this._perSessionAccounting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protects: {
        value: cdktf.stringToHclTerraform(this._protects),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_table_percentage: {
        value: cdktf.numberToHclTerraform(this._sessionTablePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sleep_on_idle: {
        value: cdktf.stringToHclTerraform(this._sleepOnIdle),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(dpdkGlobalInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DpdkGlobalInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
