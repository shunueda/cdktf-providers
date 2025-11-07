// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_resourcelimits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemResourcelimitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_resourcelimits#id DataFortiosSystemResourcelimits#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_resourcelimits#vdomparam DataFortiosSystemResourcelimits#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_resourcelimits fortios_system_resourcelimits}
*/
export class DataFortiosSystemResourcelimits extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_resourcelimits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemResourcelimits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemResourcelimits to import
  * @param importFromId The id of the existing DataFortiosSystemResourcelimits that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_resourcelimits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemResourcelimits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_resourcelimits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_resourcelimits fortios_system_resourcelimits} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemResourcelimitsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemResourcelimitsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_resourcelimits',
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_service - computed: true, optional: false, required: false
  public get customService() {
    return this.getNumberAttribute('custom_service');
  }

  // dialup_tunnel - computed: true, optional: false, required: false
  public get dialupTunnel() {
    return this.getNumberAttribute('dialup_tunnel');
  }

  // firewall_address - computed: true, optional: false, required: false
  public get firewallAddress() {
    return this.getNumberAttribute('firewall_address');
  }

  // firewall_addrgrp - computed: true, optional: false, required: false
  public get firewallAddrgrp() {
    return this.getNumberAttribute('firewall_addrgrp');
  }

  // firewall_policy - computed: true, optional: false, required: false
  public get firewallPolicy() {
    return this.getNumberAttribute('firewall_policy');
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

  // ipsec_phase1 - computed: true, optional: false, required: false
  public get ipsecPhase1() {
    return this.getNumberAttribute('ipsec_phase1');
  }

  // ipsec_phase1_interface - computed: true, optional: false, required: false
  public get ipsecPhase1Interface() {
    return this.getNumberAttribute('ipsec_phase1_interface');
  }

  // ipsec_phase2 - computed: true, optional: false, required: false
  public get ipsecPhase2() {
    return this.getNumberAttribute('ipsec_phase2');
  }

  // ipsec_phase2_interface - computed: true, optional: false, required: false
  public get ipsecPhase2Interface() {
    return this.getNumberAttribute('ipsec_phase2_interface');
  }

  // log_disk_quota - computed: true, optional: false, required: false
  public get logDiskQuota() {
    return this.getNumberAttribute('log_disk_quota');
  }

  // onetime_schedule - computed: true, optional: false, required: false
  public get onetimeSchedule() {
    return this.getNumberAttribute('onetime_schedule');
  }

  // proxy - computed: true, optional: false, required: false
  public get proxy() {
    return this.getNumberAttribute('proxy');
  }

  // recurring_schedule - computed: true, optional: false, required: false
  public get recurringSchedule() {
    return this.getNumberAttribute('recurring_schedule');
  }

  // service_group - computed: true, optional: false, required: false
  public get serviceGroup() {
    return this.getNumberAttribute('service_group');
  }

  // session - computed: true, optional: false, required: false
  public get session() {
    return this.getNumberAttribute('session');
  }

  // sslvpn - computed: true, optional: false, required: false
  public get sslvpn() {
    return this.getNumberAttribute('sslvpn');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getNumberAttribute('user');
  }

  // user_group - computed: true, optional: false, required: false
  public get userGroup() {
    return this.getNumberAttribute('user_group');
  }

  // vdomparam - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
