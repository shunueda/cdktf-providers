// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemResourcelimitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#custom_service SystemResourcelimits#custom_service}
  */
  readonly customService?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#dialup_tunnel SystemResourcelimits#dialup_tunnel}
  */
  readonly dialupTunnel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#firewall_address SystemResourcelimits#firewall_address}
  */
  readonly firewallAddress?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#firewall_addrgrp SystemResourcelimits#firewall_addrgrp}
  */
  readonly firewallAddrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#firewall_policy SystemResourcelimits#firewall_policy}
  */
  readonly firewallPolicy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#id SystemResourcelimits#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#ipsec_phase1 SystemResourcelimits#ipsec_phase1}
  */
  readonly ipsecPhase1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#ipsec_phase2 SystemResourcelimits#ipsec_phase2}
  */
  readonly ipsecPhase2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#log_disk_quota SystemResourcelimits#log_disk_quota}
  */
  readonly logDiskQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#onetime_schedule SystemResourcelimits#onetime_schedule}
  */
  readonly onetimeSchedule?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#proxy SystemResourcelimits#proxy}
  */
  readonly proxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#recurring_schedule SystemResourcelimits#recurring_schedule}
  */
  readonly recurringSchedule?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#service_group SystemResourcelimits#service_group}
  */
  readonly serviceGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#session SystemResourcelimits#session}
  */
  readonly session?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#user SystemResourcelimits#user}
  */
  readonly user?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#user_group SystemResourcelimits#user_group}
  */
  readonly userGroup?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits fortiswitch_system_resourcelimits}
*/
export class SystemResourcelimits extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_resourcelimits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemResourcelimits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemResourcelimits to import
  * @param importFromId The id of the existing SystemResourcelimits that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemResourcelimits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_resourcelimits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_resourcelimits fortiswitch_system_resourcelimits} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemResourcelimitsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemResourcelimitsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_resourcelimits',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customService = config.customService;
    this._dialupTunnel = config.dialupTunnel;
    this._firewallAddress = config.firewallAddress;
    this._firewallAddrgrp = config.firewallAddrgrp;
    this._firewallPolicy = config.firewallPolicy;
    this._id = config.id;
    this._ipsecPhase1 = config.ipsecPhase1;
    this._ipsecPhase2 = config.ipsecPhase2;
    this._logDiskQuota = config.logDiskQuota;
    this._onetimeSchedule = config.onetimeSchedule;
    this._proxy = config.proxy;
    this._recurringSchedule = config.recurringSchedule;
    this._serviceGroup = config.serviceGroup;
    this._session = config.session;
    this._user = config.user;
    this._userGroup = config.userGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_service - computed: true, optional: true, required: false
  private _customService?: number; 
  public get customService() {
    return this.getNumberAttribute('custom_service');
  }
  public set customService(value: number) {
    this._customService = value;
  }
  public resetCustomService() {
    this._customService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServiceInput() {
    return this._customService;
  }

  // dialup_tunnel - computed: true, optional: true, required: false
  private _dialupTunnel?: number; 
  public get dialupTunnel() {
    return this.getNumberAttribute('dialup_tunnel');
  }
  public set dialupTunnel(value: number) {
    this._dialupTunnel = value;
  }
  public resetDialupTunnel() {
    this._dialupTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialupTunnelInput() {
    return this._dialupTunnel;
  }

  // firewall_address - computed: true, optional: true, required: false
  private _firewallAddress?: number; 
  public get firewallAddress() {
    return this.getNumberAttribute('firewall_address');
  }
  public set firewallAddress(value: number) {
    this._firewallAddress = value;
  }
  public resetFirewallAddress() {
    this._firewallAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAddressInput() {
    return this._firewallAddress;
  }

  // firewall_addrgrp - computed: true, optional: true, required: false
  private _firewallAddrgrp?: number; 
  public get firewallAddrgrp() {
    return this.getNumberAttribute('firewall_addrgrp');
  }
  public set firewallAddrgrp(value: number) {
    this._firewallAddrgrp = value;
  }
  public resetFirewallAddrgrp() {
    this._firewallAddrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAddrgrpInput() {
    return this._firewallAddrgrp;
  }

  // firewall_policy - computed: true, optional: true, required: false
  private _firewallPolicy?: number; 
  public get firewallPolicy() {
    return this.getNumberAttribute('firewall_policy');
  }
  public set firewallPolicy(value: number) {
    this._firewallPolicy = value;
  }
  public resetFirewallPolicy() {
    this._firewallPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallPolicyInput() {
    return this._firewallPolicy;
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

  // ipsec_phase1 - computed: true, optional: true, required: false
  private _ipsecPhase1?: number; 
  public get ipsecPhase1() {
    return this.getNumberAttribute('ipsec_phase1');
  }
  public set ipsecPhase1(value: number) {
    this._ipsecPhase1 = value;
  }
  public resetIpsecPhase1() {
    this._ipsecPhase1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase1Input() {
    return this._ipsecPhase1;
  }

  // ipsec_phase2 - computed: true, optional: true, required: false
  private _ipsecPhase2?: number; 
  public get ipsecPhase2() {
    return this.getNumberAttribute('ipsec_phase2');
  }
  public set ipsecPhase2(value: number) {
    this._ipsecPhase2 = value;
  }
  public resetIpsecPhase2() {
    this._ipsecPhase2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase2Input() {
    return this._ipsecPhase2;
  }

  // log_disk_quota - computed: true, optional: true, required: false
  private _logDiskQuota?: number; 
  public get logDiskQuota() {
    return this.getNumberAttribute('log_disk_quota');
  }
  public set logDiskQuota(value: number) {
    this._logDiskQuota = value;
  }
  public resetLogDiskQuota() {
    this._logDiskQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskQuotaInput() {
    return this._logDiskQuota;
  }

  // onetime_schedule - computed: true, optional: true, required: false
  private _onetimeSchedule?: number; 
  public get onetimeSchedule() {
    return this.getNumberAttribute('onetime_schedule');
  }
  public set onetimeSchedule(value: number) {
    this._onetimeSchedule = value;
  }
  public resetOnetimeSchedule() {
    this._onetimeSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onetimeScheduleInput() {
    return this._onetimeSchedule;
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy?: number; 
  public get proxy() {
    return this.getNumberAttribute('proxy');
  }
  public set proxy(value: number) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // recurring_schedule - computed: true, optional: true, required: false
  private _recurringSchedule?: number; 
  public get recurringSchedule() {
    return this.getNumberAttribute('recurring_schedule');
  }
  public set recurringSchedule(value: number) {
    this._recurringSchedule = value;
  }
  public resetRecurringSchedule() {
    this._recurringSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringScheduleInput() {
    return this._recurringSchedule;
  }

  // service_group - computed: true, optional: true, required: false
  private _serviceGroup?: number; 
  public get serviceGroup() {
    return this.getNumberAttribute('service_group');
  }
  public set serviceGroup(value: number) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // session - computed: true, optional: true, required: false
  private _session?: number; 
  public get session() {
    return this.getNumberAttribute('session');
  }
  public set session(value: number) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // user - computed: true, optional: true, required: false
  private _user?: number; 
  public get user() {
    return this.getNumberAttribute('user');
  }
  public set user(value: number) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_group - computed: true, optional: true, required: false
  private _userGroup?: number; 
  public get userGroup() {
    return this.getNumberAttribute('user_group');
  }
  public set userGroup(value: number) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_service: cdktf.numberToTerraform(this._customService),
      dialup_tunnel: cdktf.numberToTerraform(this._dialupTunnel),
      firewall_address: cdktf.numberToTerraform(this._firewallAddress),
      firewall_addrgrp: cdktf.numberToTerraform(this._firewallAddrgrp),
      firewall_policy: cdktf.numberToTerraform(this._firewallPolicy),
      id: cdktf.stringToTerraform(this._id),
      ipsec_phase1: cdktf.numberToTerraform(this._ipsecPhase1),
      ipsec_phase2: cdktf.numberToTerraform(this._ipsecPhase2),
      log_disk_quota: cdktf.numberToTerraform(this._logDiskQuota),
      onetime_schedule: cdktf.numberToTerraform(this._onetimeSchedule),
      proxy: cdktf.numberToTerraform(this._proxy),
      recurring_schedule: cdktf.numberToTerraform(this._recurringSchedule),
      service_group: cdktf.numberToTerraform(this._serviceGroup),
      session: cdktf.numberToTerraform(this._session),
      user: cdktf.numberToTerraform(this._user),
      user_group: cdktf.numberToTerraform(this._userGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_service: {
        value: cdktf.numberToHclTerraform(this._customService),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dialup_tunnel: {
        value: cdktf.numberToHclTerraform(this._dialupTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firewall_address: {
        value: cdktf.numberToHclTerraform(this._firewallAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firewall_addrgrp: {
        value: cdktf.numberToHclTerraform(this._firewallAddrgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firewall_policy: {
        value: cdktf.numberToHclTerraform(this._firewallPolicy),
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
      ipsec_phase1: {
        value: cdktf.numberToHclTerraform(this._ipsecPhase1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_phase2: {
        value: cdktf.numberToHclTerraform(this._ipsecPhase2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_disk_quota: {
        value: cdktf.numberToHclTerraform(this._logDiskQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      onetime_schedule: {
        value: cdktf.numberToHclTerraform(this._onetimeSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy: {
        value: cdktf.numberToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recurring_schedule: {
        value: cdktf.numberToHclTerraform(this._recurringSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_group: {
        value: cdktf.numberToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session: {
        value: cdktf.numberToHclTerraform(this._session),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.numberToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_group: {
        value: cdktf.numberToHclTerraform(this._userGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
