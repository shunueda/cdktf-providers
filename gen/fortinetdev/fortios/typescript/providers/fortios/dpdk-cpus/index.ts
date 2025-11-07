// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DpdkCpusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus#id DpdkCpus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus#ips_cpus DpdkCpus#ips_cpus}
  */
  readonly ipsCpus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus#isolated_cpus DpdkCpus#isolated_cpus}
  */
  readonly isolatedCpus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus#rx_cpus DpdkCpus#rx_cpus}
  */
  readonly rxCpus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus#tx_cpus DpdkCpus#tx_cpus}
  */
  readonly txCpus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus#vdomparam DpdkCpus#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus#vnp_cpus DpdkCpus#vnp_cpus}
  */
  readonly vnpCpus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus#vnpsp_cpus DpdkCpus#vnpsp_cpus}
  */
  readonly vnpspCpus?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus fortios_dpdk_cpus}
*/
export class DpdkCpus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_dpdk_cpus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DpdkCpus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DpdkCpus to import
  * @param importFromId The id of the existing DpdkCpus that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DpdkCpus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_dpdk_cpus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dpdk_cpus fortios_dpdk_cpus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DpdkCpusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DpdkCpusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_dpdk_cpus',
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
    this._id = config.id;
    this._ipsCpus = config.ipsCpus;
    this._isolatedCpus = config.isolatedCpus;
    this._rxCpus = config.rxCpus;
    this._txCpus = config.txCpus;
    this._vdomparam = config.vdomparam;
    this._vnpCpus = config.vnpCpus;
    this._vnpspCpus = config.vnpspCpus;
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

  // ips_cpus - computed: true, optional: true, required: false
  private _ipsCpus?: string; 
  public get ipsCpus() {
    return this.getStringAttribute('ips_cpus');
  }
  public set ipsCpus(value: string) {
    this._ipsCpus = value;
  }
  public resetIpsCpus() {
    this._ipsCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsCpusInput() {
    return this._ipsCpus;
  }

  // isolated_cpus - computed: true, optional: true, required: false
  private _isolatedCpus?: string; 
  public get isolatedCpus() {
    return this.getStringAttribute('isolated_cpus');
  }
  public set isolatedCpus(value: string) {
    this._isolatedCpus = value;
  }
  public resetIsolatedCpus() {
    this._isolatedCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedCpusInput() {
    return this._isolatedCpus;
  }

  // rx_cpus - computed: true, optional: true, required: false
  private _rxCpus?: string; 
  public get rxCpus() {
    return this.getStringAttribute('rx_cpus');
  }
  public set rxCpus(value: string) {
    this._rxCpus = value;
  }
  public resetRxCpus() {
    this._rxCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxCpusInput() {
    return this._rxCpus;
  }

  // tx_cpus - computed: true, optional: true, required: false
  private _txCpus?: string; 
  public get txCpus() {
    return this.getStringAttribute('tx_cpus');
  }
  public set txCpus(value: string) {
    this._txCpus = value;
  }
  public resetTxCpus() {
    this._txCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txCpusInput() {
    return this._txCpus;
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

  // vnp_cpus - computed: true, optional: true, required: false
  private _vnpCpus?: string; 
  public get vnpCpus() {
    return this.getStringAttribute('vnp_cpus');
  }
  public set vnpCpus(value: string) {
    this._vnpCpus = value;
  }
  public resetVnpCpus() {
    this._vnpCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnpCpusInput() {
    return this._vnpCpus;
  }

  // vnpsp_cpus - computed: true, optional: true, required: false
  private _vnpspCpus?: string; 
  public get vnpspCpus() {
    return this.getStringAttribute('vnpsp_cpus');
  }
  public set vnpspCpus(value: string) {
    this._vnpspCpus = value;
  }
  public resetVnpspCpus() {
    this._vnpspCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnpspCpusInput() {
    return this._vnpspCpus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ips_cpus: cdktf.stringToTerraform(this._ipsCpus),
      isolated_cpus: cdktf.stringToTerraform(this._isolatedCpus),
      rx_cpus: cdktf.stringToTerraform(this._rxCpus),
      tx_cpus: cdktf.stringToTerraform(this._txCpus),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vnp_cpus: cdktf.stringToTerraform(this._vnpCpus),
      vnpsp_cpus: cdktf.stringToTerraform(this._vnpspCpus),
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
      ips_cpus: {
        value: cdktf.stringToHclTerraform(this._ipsCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolated_cpus: {
        value: cdktf.stringToHclTerraform(this._isolatedCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rx_cpus: {
        value: cdktf.stringToHclTerraform(this._rxCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tx_cpus: {
        value: cdktf.stringToHclTerraform(this._txCpus),
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
      vnp_cpus: {
        value: cdktf.stringToHclTerraform(this._vnpCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnpsp_cpus: {
        value: cdktf.stringToHclTerraform(this._vnpspCpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
