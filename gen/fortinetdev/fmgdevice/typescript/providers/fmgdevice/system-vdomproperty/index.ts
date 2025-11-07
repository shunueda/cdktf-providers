// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVdompropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#custom_service SystemVdomproperty#custom_service}
  */
  readonly customService?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#description SystemVdomproperty#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#device_name SystemVdomproperty#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#dialup_tunnel SystemVdomproperty#dialup_tunnel}
  */
  readonly dialupTunnel?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#firewall_address SystemVdomproperty#firewall_address}
  */
  readonly firewallAddress?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#firewall_addrgrp SystemVdomproperty#firewall_addrgrp}
  */
  readonly firewallAddrgrp?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#firewall_policy SystemVdomproperty#firewall_policy}
  */
  readonly firewallPolicy?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#id SystemVdomproperty#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#ipsec_phase1 SystemVdomproperty#ipsec_phase1}
  */
  readonly ipsecPhase1?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#ipsec_phase1_interface SystemVdomproperty#ipsec_phase1_interface}
  */
  readonly ipsecPhase1Interface?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#ipsec_phase2 SystemVdomproperty#ipsec_phase2}
  */
  readonly ipsecPhase2?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#ipsec_phase2_interface SystemVdomproperty#ipsec_phase2_interface}
  */
  readonly ipsecPhase2Interface?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#log_disk_quota SystemVdomproperty#log_disk_quota}
  */
  readonly logDiskQuota?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#name SystemVdomproperty#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#onetime_schedule SystemVdomproperty#onetime_schedule}
  */
  readonly onetimeSchedule?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#proxy SystemVdomproperty#proxy}
  */
  readonly proxy?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#recurring_schedule SystemVdomproperty#recurring_schedule}
  */
  readonly recurringSchedule?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#service_group SystemVdomproperty#service_group}
  */
  readonly serviceGroup?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#session SystemVdomproperty#session}
  */
  readonly session?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#snmp_index SystemVdomproperty#snmp_index}
  */
  readonly snmpIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#sslvpn SystemVdomproperty#sslvpn}
  */
  readonly sslvpn?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#user SystemVdomproperty#user}
  */
  readonly user?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#user_group SystemVdomproperty#user_group}
  */
  readonly userGroup?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty fmgdevice_system_vdomproperty}
*/
export class SystemVdomproperty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_vdomproperty";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVdomproperty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVdomproperty to import
  * @param importFromId The id of the existing SystemVdomproperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVdomproperty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_vdomproperty", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_vdomproperty fmgdevice_system_vdomproperty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVdompropertyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemVdompropertyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_vdomproperty',
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
    this._customService = config.customService;
    this._description = config.description;
    this._deviceName = config.deviceName;
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_service - computed: true, optional: true, required: false
  private _customService?: number[]; 
  public get customService() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('custom_service')));
  }
  public set customService(value: number[]) {
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

  // dialup_tunnel - computed: true, optional: true, required: false
  private _dialupTunnel?: number[]; 
  public get dialupTunnel() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('dialup_tunnel')));
  }
  public set dialupTunnel(value: number[]) {
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
  private _firewallAddress?: number[]; 
  public get firewallAddress() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('firewall_address')));
  }
  public set firewallAddress(value: number[]) {
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
  private _firewallAddrgrp?: number[]; 
  public get firewallAddrgrp() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('firewall_addrgrp')));
  }
  public set firewallAddrgrp(value: number[]) {
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
  private _firewallPolicy?: number[]; 
  public get firewallPolicy() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('firewall_policy')));
  }
  public set firewallPolicy(value: number[]) {
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
  private _ipsecPhase1?: number[]; 
  public get ipsecPhase1() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ipsec_phase1')));
  }
  public set ipsecPhase1(value: number[]) {
    this._ipsecPhase1 = value;
  }
  public resetIpsecPhase1() {
    this._ipsecPhase1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase1Input() {
    return this._ipsecPhase1;
  }

  // ipsec_phase1_interface - computed: true, optional: true, required: false
  private _ipsecPhase1Interface?: number[]; 
  public get ipsecPhase1Interface() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ipsec_phase1_interface')));
  }
  public set ipsecPhase1Interface(value: number[]) {
    this._ipsecPhase1Interface = value;
  }
  public resetIpsecPhase1Interface() {
    this._ipsecPhase1Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase1InterfaceInput() {
    return this._ipsecPhase1Interface;
  }

  // ipsec_phase2 - computed: true, optional: true, required: false
  private _ipsecPhase2?: number[]; 
  public get ipsecPhase2() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ipsec_phase2')));
  }
  public set ipsecPhase2(value: number[]) {
    this._ipsecPhase2 = value;
  }
  public resetIpsecPhase2() {
    this._ipsecPhase2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase2Input() {
    return this._ipsecPhase2;
  }

  // ipsec_phase2_interface - computed: true, optional: true, required: false
  private _ipsecPhase2Interface?: number[]; 
  public get ipsecPhase2Interface() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ipsec_phase2_interface')));
  }
  public set ipsecPhase2Interface(value: number[]) {
    this._ipsecPhase2Interface = value;
  }
  public resetIpsecPhase2Interface() {
    this._ipsecPhase2Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase2InterfaceInput() {
    return this._ipsecPhase2Interface;
  }

  // log_disk_quota - computed: true, optional: true, required: false
  private _logDiskQuota?: number[]; 
  public get logDiskQuota() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('log_disk_quota')));
  }
  public set logDiskQuota(value: number[]) {
    this._logDiskQuota = value;
  }
  public resetLogDiskQuota() {
    this._logDiskQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskQuotaInput() {
    return this._logDiskQuota;
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

  // onetime_schedule - computed: true, optional: true, required: false
  private _onetimeSchedule?: number[]; 
  public get onetimeSchedule() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('onetime_schedule')));
  }
  public set onetimeSchedule(value: number[]) {
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
  private _proxy?: number[]; 
  public get proxy() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('proxy')));
  }
  public set proxy(value: number[]) {
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
  private _recurringSchedule?: number[]; 
  public get recurringSchedule() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('recurring_schedule')));
  }
  public set recurringSchedule(value: number[]) {
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
  private _serviceGroup?: number[]; 
  public get serviceGroup() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('service_group')));
  }
  public set serviceGroup(value: number[]) {
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
  private _session?: number[]; 
  public get session() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('session')));
  }
  public set session(value: number[]) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // snmp_index - computed: true, optional: true, required: false
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

  // sslvpn - computed: true, optional: true, required: false
  private _sslvpn?: number[]; 
  public get sslvpn() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sslvpn')));
  }
  public set sslvpn(value: number[]) {
    this._sslvpn = value;
  }
  public resetSslvpn() {
    this._sslvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnInput() {
    return this._sslvpn;
  }

  // user - computed: true, optional: true, required: false
  private _user?: number[]; 
  public get user() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user')));
  }
  public set user(value: number[]) {
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
  private _userGroup?: number[]; 
  public get userGroup() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_group')));
  }
  public set userGroup(value: number[]) {
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
      custom_service: cdktf.listMapper(cdktf.numberToTerraform, false)(this._customService),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dialup_tunnel: cdktf.listMapper(cdktf.numberToTerraform, false)(this._dialupTunnel),
      firewall_address: cdktf.listMapper(cdktf.numberToTerraform, false)(this._firewallAddress),
      firewall_addrgrp: cdktf.listMapper(cdktf.numberToTerraform, false)(this._firewallAddrgrp),
      firewall_policy: cdktf.listMapper(cdktf.numberToTerraform, false)(this._firewallPolicy),
      id: cdktf.stringToTerraform(this._id),
      ipsec_phase1: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ipsecPhase1),
      ipsec_phase1_interface: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ipsecPhase1Interface),
      ipsec_phase2: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ipsecPhase2),
      ipsec_phase2_interface: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ipsecPhase2Interface),
      log_disk_quota: cdktf.listMapper(cdktf.numberToTerraform, false)(this._logDiskQuota),
      name: cdktf.stringToTerraform(this._name),
      onetime_schedule: cdktf.listMapper(cdktf.numberToTerraform, false)(this._onetimeSchedule),
      proxy: cdktf.listMapper(cdktf.numberToTerraform, false)(this._proxy),
      recurring_schedule: cdktf.listMapper(cdktf.numberToTerraform, false)(this._recurringSchedule),
      service_group: cdktf.listMapper(cdktf.numberToTerraform, false)(this._serviceGroup),
      session: cdktf.listMapper(cdktf.numberToTerraform, false)(this._session),
      snmp_index: cdktf.numberToTerraform(this._snmpIndex),
      sslvpn: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sslvpn),
      user: cdktf.listMapper(cdktf.numberToTerraform, false)(this._user),
      user_group: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_service: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._customService),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dialup_tunnel: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._dialupTunnel),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      firewall_address: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._firewallAddress),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      firewall_addrgrp: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._firewallAddrgrp),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      firewall_policy: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._firewallPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_phase1: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ipsecPhase1),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      ipsec_phase1_interface: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ipsecPhase1Interface),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      ipsec_phase2: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ipsecPhase2),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      ipsec_phase2_interface: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ipsecPhase2Interface),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      log_disk_quota: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._logDiskQuota),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      onetime_schedule: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._onetimeSchedule),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      proxy: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._proxy),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      recurring_schedule: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._recurringSchedule),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      service_group: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._serviceGroup),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      session: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._session),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      snmp_index: {
        value: cdktf.numberToHclTerraform(this._snmpIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sslvpn: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sslvpn),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._user),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user_group: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userGroup),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
