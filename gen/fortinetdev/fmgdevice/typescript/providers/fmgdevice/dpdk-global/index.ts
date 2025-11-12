// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DpdkGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#device_name DpdkGlobal#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#elasticbuffer DpdkGlobal#elasticbuffer}
  */
  readonly elasticbuffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#hugepage_percentage DpdkGlobal#hugepage_percentage}
  */
  readonly hugepagePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#id DpdkGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#interface DpdkGlobal#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#ipsec_offload DpdkGlobal#ipsec_offload}
  */
  readonly ipsecOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#mbufpool_percentage DpdkGlobal#mbufpool_percentage}
  */
  readonly mbufpoolPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#multiqueue DpdkGlobal#multiqueue}
  */
  readonly multiqueue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#per_session_accounting DpdkGlobal#per_session_accounting}
  */
  readonly perSessionAccounting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#protects DpdkGlobal#protects}
  */
  readonly protects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#session_table_percentage DpdkGlobal#session_table_percentage}
  */
  readonly sessionTablePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#sleep_on_idle DpdkGlobal#sleep_on_idle}
  */
  readonly sleepOnIdle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#status DpdkGlobal#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global fmgdevice_dpdk_global}
*/
export class DpdkGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_dpdk_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DpdkGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DpdkGlobal to import
  * @param importFromId The id of the existing DpdkGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DpdkGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_dpdk_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dpdk_global fmgdevice_dpdk_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DpdkGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DpdkGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_dpdk_global',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._elasticbuffer = config.elasticbuffer;
    this._hugepagePercentage = config.hugepagePercentage;
    this._id = config.id;
    this._interface = config.interface;
    this._ipsecOffload = config.ipsecOffload;
    this._mbufpoolPercentage = config.mbufpoolPercentage;
    this._multiqueue = config.multiqueue;
    this._perSessionAccounting = config.perSessionAccounting;
    this._protects = config.protects;
    this._sessionTablePercentage = config.sessionTablePercentage;
    this._sleepOnIdle = config.sleepOnIdle;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // elasticbuffer - computed: false, optional: true, required: false
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

  // session_table_percentage - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      elasticbuffer: cdktf.stringToTerraform(this._elasticbuffer),
      hugepage_percentage: cdktf.numberToTerraform(this._hugepagePercentage),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      ipsec_offload: cdktf.stringToTerraform(this._ipsecOffload),
      mbufpool_percentage: cdktf.numberToTerraform(this._mbufpoolPercentage),
      multiqueue: cdktf.stringToTerraform(this._multiqueue),
      per_session_accounting: cdktf.stringToTerraform(this._perSessionAccounting),
      protects: cdktf.stringToTerraform(this._protects),
      session_table_percentage: cdktf.numberToTerraform(this._sessionTablePercentage),
      sleep_on_idle: cdktf.stringToTerraform(this._sleepOnIdle),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
