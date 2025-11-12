// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVdompropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#custom_service SystemVdomproperty#custom_service}
  */
  readonly customService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#description SystemVdomproperty#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#dialup_tunnel SystemVdomproperty#dialup_tunnel}
  */
  readonly dialupTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#firewall_address SystemVdomproperty#firewall_address}
  */
  readonly firewallAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#firewall_addrgrp SystemVdomproperty#firewall_addrgrp}
  */
  readonly firewallAddrgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#firewall_policy SystemVdomproperty#firewall_policy}
  */
  readonly firewallPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#id SystemVdomproperty#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#ipsec_phase1 SystemVdomproperty#ipsec_phase1}
  */
  readonly ipsecPhase1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#ipsec_phase1_interface SystemVdomproperty#ipsec_phase1_interface}
  */
  readonly ipsecPhase1Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#ipsec_phase2 SystemVdomproperty#ipsec_phase2}
  */
  readonly ipsecPhase2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#ipsec_phase2_interface SystemVdomproperty#ipsec_phase2_interface}
  */
  readonly ipsecPhase2Interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#log_disk_quota SystemVdomproperty#log_disk_quota}
  */
  readonly logDiskQuota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#name SystemVdomproperty#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#onetime_schedule SystemVdomproperty#onetime_schedule}
  */
  readonly onetimeSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#proxy SystemVdomproperty#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#recurring_schedule SystemVdomproperty#recurring_schedule}
  */
  readonly recurringSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#service_group SystemVdomproperty#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#session SystemVdomproperty#session}
  */
  readonly session?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#snmp_index SystemVdomproperty#snmp_index}
  */
  readonly snmpIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#sslvpn SystemVdomproperty#sslvpn}
  */
  readonly sslvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#user SystemVdomproperty#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#user_group SystemVdomproperty#user_group}
  */
  readonly userGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#vdomparam SystemVdomproperty#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty fortios_system_vdomproperty}
*/
export class SystemVdomproperty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_vdomproperty";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVdomproperty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVdomproperty to import
  * @param importFromId The id of the existing SystemVdomproperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVdomproperty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_vdomproperty", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_vdomproperty fortios_system_vdomproperty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVdompropertyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemVdompropertyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_vdomproperty',
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
    this._customService = config.customService;
    this._description = config.description;
    this._dialupTunnel = config.dialupTunnel;
    this._firewallAddress = config.firewallAddress;
    this._firewallAddrgrp = config.firewallAddrgrp;
    this._firewallPolicy = config.firewallPolicy;
    this._id = config.id;
    this._ipsecPhase1 = config.ipsecPhase1;
    this._ipsecPhase1Interface = config.ipsecPhase1Interface;
    this._ipsecPhase2 = config.ipsecPhase2;
    this._ipsecPhase2Interface = config.ipsecPhase2Interface;
    this._logDiskQuota = config.logDiskQuota;
    this._name = config.name;
    this._onetimeSchedule = config.onetimeSchedule;
    this._proxy = config.proxy;
    this._recurringSchedule = config.recurringSchedule;
    this._serviceGroup = config.serviceGroup;
    this._session = config.session;
    this._snmpIndex = config.snmpIndex;
    this._sslvpn = config.sslvpn;
    this._user = config.user;
    this._userGroup = config.userGroup;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_service - computed: false, optional: true, required: false
  private _customService?: string; 
  public get customService() {
    return this.getStringAttribute('custom_service');
  }
  public set customService(value: string) {
    this._customService = value;
  }
  public resetCustomService() {
    this._customService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServiceInput() {
    return this._customService;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dialup_tunnel - computed: false, optional: true, required: false
  private _dialupTunnel?: string; 
  public get dialupTunnel() {
    return this.getStringAttribute('dialup_tunnel');
  }
  public set dialupTunnel(value: string) {
    this._dialupTunnel = value;
  }
  public resetDialupTunnel() {
    this._dialupTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialupTunnelInput() {
    return this._dialupTunnel;
  }

  // firewall_address - computed: false, optional: true, required: false
  private _firewallAddress?: string; 
  public get firewallAddress() {
    return this.getStringAttribute('firewall_address');
  }
  public set firewallAddress(value: string) {
    this._firewallAddress = value;
  }
  public resetFirewallAddress() {
    this._firewallAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAddressInput() {
    return this._firewallAddress;
  }

  // firewall_addrgrp - computed: false, optional: true, required: false
  private _firewallAddrgrp?: string; 
  public get firewallAddrgrp() {
    return this.getStringAttribute('firewall_addrgrp');
  }
  public set firewallAddrgrp(value: string) {
    this._firewallAddrgrp = value;
  }
  public resetFirewallAddrgrp() {
    this._firewallAddrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAddrgrpInput() {
    return this._firewallAddrgrp;
  }

  // firewall_policy - computed: false, optional: true, required: false
  private _firewallPolicy?: string; 
  public get firewallPolicy() {
    return this.getStringAttribute('firewall_policy');
  }
  public set firewallPolicy(value: string) {
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

  // ipsec_phase1 - computed: false, optional: true, required: false
  private _ipsecPhase1?: string; 
  public get ipsecPhase1() {
    return this.getStringAttribute('ipsec_phase1');
  }
  public set ipsecPhase1(value: string) {
    this._ipsecPhase1 = value;
  }
  public resetIpsecPhase1() {
    this._ipsecPhase1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase1Input() {
    return this._ipsecPhase1;
  }

  // ipsec_phase1_interface - computed: false, optional: true, required: false
  private _ipsecPhase1Interface?: string; 
  public get ipsecPhase1Interface() {
    return this.getStringAttribute('ipsec_phase1_interface');
  }
  public set ipsecPhase1Interface(value: string) {
    this._ipsecPhase1Interface = value;
  }
  public resetIpsecPhase1Interface() {
    this._ipsecPhase1Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase1InterfaceInput() {
    return this._ipsecPhase1Interface;
  }

  // ipsec_phase2 - computed: false, optional: true, required: false
  private _ipsecPhase2?: string; 
  public get ipsecPhase2() {
    return this.getStringAttribute('ipsec_phase2');
  }
  public set ipsecPhase2(value: string) {
    this._ipsecPhase2 = value;
  }
  public resetIpsecPhase2() {
    this._ipsecPhase2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase2Input() {
    return this._ipsecPhase2;
  }

  // ipsec_phase2_interface - computed: false, optional: true, required: false
  private _ipsecPhase2Interface?: string; 
  public get ipsecPhase2Interface() {
    return this.getStringAttribute('ipsec_phase2_interface');
  }
  public set ipsecPhase2Interface(value: string) {
    this._ipsecPhase2Interface = value;
  }
  public resetIpsecPhase2Interface() {
    this._ipsecPhase2Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase2InterfaceInput() {
    return this._ipsecPhase2Interface;
  }

  // log_disk_quota - computed: false, optional: true, required: false
  private _logDiskQuota?: string; 
  public get logDiskQuota() {
    return this.getStringAttribute('log_disk_quota');
  }
  public set logDiskQuota(value: string) {
    this._logDiskQuota = value;
  }
  public resetLogDiskQuota() {
    this._logDiskQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskQuotaInput() {
    return this._logDiskQuota;
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

  // onetime_schedule - computed: false, optional: true, required: false
  private _onetimeSchedule?: string; 
  public get onetimeSchedule() {
    return this.getStringAttribute('onetime_schedule');
  }
  public set onetimeSchedule(value: string) {
    this._onetimeSchedule = value;
  }
  public resetOnetimeSchedule() {
    this._onetimeSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onetimeScheduleInput() {
    return this._onetimeSchedule;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // recurring_schedule - computed: false, optional: true, required: false
  private _recurringSchedule?: string; 
  public get recurringSchedule() {
    return this.getStringAttribute('recurring_schedule');
  }
  public set recurringSchedule(value: string) {
    this._recurringSchedule = value;
  }
  public resetRecurringSchedule() {
    this._recurringSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringScheduleInput() {
    return this._recurringSchedule;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // session - computed: false, optional: true, required: false
  private _session?: string; 
  public get session() {
    return this.getStringAttribute('session');
  }
  public set session(value: string) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // snmp_index - computed: false, optional: true, required: false
  private _snmpIndex?: number; 
  public get snmpIndex() {
    return this.getNumberAttribute('snmp_index');
  }
  public set snmpIndex(value: number) {
    this._snmpIndex = value;
  }
  public resetSnmpIndex() {
    this._snmpIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpIndexInput() {
    return this._snmpIndex;
  }

  // sslvpn - computed: false, optional: true, required: false
  private _sslvpn?: string; 
  public get sslvpn() {
    return this.getStringAttribute('sslvpn');
  }
  public set sslvpn(value: string) {
    this._sslvpn = value;
  }
  public resetSslvpn() {
    this._sslvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnInput() {
    return this._sslvpn;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_service: cdktf.stringToTerraform(this._customService),
      description: cdktf.stringToTerraform(this._description),
      dialup_tunnel: cdktf.stringToTerraform(this._dialupTunnel),
      firewall_address: cdktf.stringToTerraform(this._firewallAddress),
      firewall_addrgrp: cdktf.stringToTerraform(this._firewallAddrgrp),
      firewall_policy: cdktf.stringToTerraform(this._firewallPolicy),
      id: cdktf.stringToTerraform(this._id),
      ipsec_phase1: cdktf.stringToTerraform(this._ipsecPhase1),
      ipsec_phase1_interface: cdktf.stringToTerraform(this._ipsecPhase1Interface),
      ipsec_phase2: cdktf.stringToTerraform(this._ipsecPhase2),
      ipsec_phase2_interface: cdktf.stringToTerraform(this._ipsecPhase2Interface),
      log_disk_quota: cdktf.stringToTerraform(this._logDiskQuota),
      name: cdktf.stringToTerraform(this._name),
      onetime_schedule: cdktf.stringToTerraform(this._onetimeSchedule),
      proxy: cdktf.stringToTerraform(this._proxy),
      recurring_schedule: cdktf.stringToTerraform(this._recurringSchedule),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      session: cdktf.stringToTerraform(this._session),
      snmp_index: cdktf.numberToTerraform(this._snmpIndex),
      sslvpn: cdktf.stringToTerraform(this._sslvpn),
      user: cdktf.stringToTerraform(this._user),
      user_group: cdktf.stringToTerraform(this._userGroup),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_service: {
        value: cdktf.stringToHclTerraform(this._customService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dialup_tunnel: {
        value: cdktf.stringToHclTerraform(this._dialupTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_address: {
        value: cdktf.stringToHclTerraform(this._firewallAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_addrgrp: {
        value: cdktf.stringToHclTerraform(this._firewallAddrgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_policy: {
        value: cdktf.stringToHclTerraform(this._firewallPolicy),
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
      ipsec_phase1: {
        value: cdktf.stringToHclTerraform(this._ipsecPhase1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_phase1_interface: {
        value: cdktf.stringToHclTerraform(this._ipsecPhase1Interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_phase2: {
        value: cdktf.stringToHclTerraform(this._ipsecPhase2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_phase2_interface: {
        value: cdktf.stringToHclTerraform(this._ipsecPhase2Interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_disk_quota: {
        value: cdktf.stringToHclTerraform(this._logDiskQuota),
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
      onetime_schedule: {
        value: cdktf.stringToHclTerraform(this._onetimeSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurring_schedule: {
        value: cdktf.stringToHclTerraform(this._recurringSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session: {
        value: cdktf.stringToHclTerraform(this._session),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_index: {
        value: cdktf.numberToHclTerraform(this._snmpIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslvpn: {
        value: cdktf.stringToHclTerraform(this._sslvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group: {
        value: cdktf.stringToHclTerraform(this._userGroup),
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
