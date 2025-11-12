// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalDnsServerZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#allow_transfer GlobalDnsServerZone#allow_transfer}
  */
  readonly allowTransfer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#also_notify_list GlobalDnsServerZone#also_notify_list}
  */
  readonly alsoNotifyList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#dns_policy GlobalDnsServerZone#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#dnssec_algorithm GlobalDnsServerZone#dnssec_algorithm}
  */
  readonly dnssecAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#dnssec_keysize GlobalDnsServerZone#dnssec_keysize}
  */
  readonly dnssecKeysize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#dnssec_status GlobalDnsServerZone#dnssec_status}
  */
  readonly dnssecStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#domain_name GlobalDnsServerZone#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#dsset_info_list GlobalDnsServerZone#dsset_info_list}
  */
  readonly dssetInfoList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#forward GlobalDnsServerZone#forward}
  */
  readonly forward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#forward_host_enable GlobalDnsServerZone#forward_host_enable}
  */
  readonly forwardHostEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#forwarders GlobalDnsServerZone#forwarders}
  */
  readonly forwarders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#id GlobalDnsServerZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#mkey GlobalDnsServerZone#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#negative_ttl GlobalDnsServerZone#negative_ttl}
  */
  readonly negativeTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#notify_status GlobalDnsServerZone#notify_status}
  */
  readonly notifyStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#primary_server_ip GlobalDnsServerZone#primary_server_ip}
  */
  readonly primaryServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#primary_server_ip6 GlobalDnsServerZone#primary_server_ip6}
  */
  readonly primaryServerIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#primary_server_name GlobalDnsServerZone#primary_server_name}
  */
  readonly primaryServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#responsible_mail GlobalDnsServerZone#responsible_mail}
  */
  readonly responsibleMail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#serial GlobalDnsServerZone#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#ttl GlobalDnsServerZone#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#type GlobalDnsServerZone#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#vdom GlobalDnsServerZone#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone fortiadc_global_dns_server_zone}
*/
export class GlobalDnsServerZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_global_dns_server_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalDnsServerZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalDnsServerZone to import
  * @param importFromId The id of the existing GlobalDnsServerZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalDnsServerZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_global_dns_server_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_zone fortiadc_global_dns_server_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalDnsServerZoneConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalDnsServerZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_global_dns_server_zone',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowTransfer = config.allowTransfer;
    this._alsoNotifyList = config.alsoNotifyList;
    this._dnsPolicy = config.dnsPolicy;
    this._dnssecAlgorithm = config.dnssecAlgorithm;
    this._dnssecKeysize = config.dnssecKeysize;
    this._dnssecStatus = config.dnssecStatus;
    this._domainName = config.domainName;
    this._dssetInfoList = config.dssetInfoList;
    this._forward = config.forward;
    this._forwardHostEnable = config.forwardHostEnable;
    this._forwarders = config.forwarders;
    this._id = config.id;
    this._mkey = config.mkey;
    this._negativeTtl = config.negativeTtl;
    this._notifyStatus = config.notifyStatus;
    this._primaryServerIp = config.primaryServerIp;
    this._primaryServerIp6 = config.primaryServerIp6;
    this._primaryServerName = config.primaryServerName;
    this._responsibleMail = config.responsibleMail;
    this._serial = config.serial;
    this._ttl = config.ttl;
    this._type = config.type;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_transfer - computed: true, optional: true, required: false
  private _allowTransfer?: string; 
  public get allowTransfer() {
    return this.getStringAttribute('allow_transfer');
  }
  public set allowTransfer(value: string) {
    this._allowTransfer = value;
  }
  public resetAllowTransfer() {
    this._allowTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTransferInput() {
    return this._allowTransfer;
  }

  // also_notify_list - computed: true, optional: true, required: false
  private _alsoNotifyList?: string; 
  public get alsoNotifyList() {
    return this.getStringAttribute('also_notify_list');
  }
  public set alsoNotifyList(value: string) {
    this._alsoNotifyList = value;
  }
  public resetAlsoNotifyList() {
    this._alsoNotifyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alsoNotifyListInput() {
    return this._alsoNotifyList;
  }

  // dns_policy - computed: true, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // dnssec_algorithm - computed: true, optional: true, required: false
  private _dnssecAlgorithm?: string; 
  public get dnssecAlgorithm() {
    return this.getStringAttribute('dnssec_algorithm');
  }
  public set dnssecAlgorithm(value: string) {
    this._dnssecAlgorithm = value;
  }
  public resetDnssecAlgorithm() {
    this._dnssecAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecAlgorithmInput() {
    return this._dnssecAlgorithm;
  }

  // dnssec_keysize - computed: true, optional: true, required: false
  private _dnssecKeysize?: string; 
  public get dnssecKeysize() {
    return this.getStringAttribute('dnssec_keysize');
  }
  public set dnssecKeysize(value: string) {
    this._dnssecKeysize = value;
  }
  public resetDnssecKeysize() {
    this._dnssecKeysize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecKeysizeInput() {
    return this._dnssecKeysize;
  }

  // dnssec_status - computed: true, optional: true, required: false
  private _dnssecStatus?: string; 
  public get dnssecStatus() {
    return this.getStringAttribute('dnssec_status');
  }
  public set dnssecStatus(value: string) {
    this._dnssecStatus = value;
  }
  public resetDnssecStatus() {
    this._dnssecStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecStatusInput() {
    return this._dnssecStatus;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // dsset_info_list - computed: true, optional: true, required: false
  private _dssetInfoList?: string; 
  public get dssetInfoList() {
    return this.getStringAttribute('dsset_info_list');
  }
  public set dssetInfoList(value: string) {
    this._dssetInfoList = value;
  }
  public resetDssetInfoList() {
    this._dssetInfoList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dssetInfoListInput() {
    return this._dssetInfoList;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // forward_host_enable - computed: true, optional: true, required: false
  private _forwardHostEnable?: string; 
  public get forwardHostEnable() {
    return this.getStringAttribute('forward_host_enable');
  }
  public set forwardHostEnable(value: string) {
    this._forwardHostEnable = value;
  }
  public resetForwardHostEnable() {
    this._forwardHostEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHostEnableInput() {
    return this._forwardHostEnable;
  }

  // forwarders - computed: true, optional: true, required: false
  private _forwarders?: string; 
  public get forwarders() {
    return this.getStringAttribute('forwarders');
  }
  public set forwarders(value: string) {
    this._forwarders = value;
  }
  public resetForwarders() {
    this._forwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // negative_ttl - computed: true, optional: true, required: false
  private _negativeTtl?: string; 
  public get negativeTtl() {
    return this.getStringAttribute('negative_ttl');
  }
  public set negativeTtl(value: string) {
    this._negativeTtl = value;
  }
  public resetNegativeTtl() {
    this._negativeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeTtlInput() {
    return this._negativeTtl;
  }

  // notify_status - computed: true, optional: true, required: false
  private _notifyStatus?: string; 
  public get notifyStatus() {
    return this.getStringAttribute('notify_status');
  }
  public set notifyStatus(value: string) {
    this._notifyStatus = value;
  }
  public resetNotifyStatus() {
    this._notifyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyStatusInput() {
    return this._notifyStatus;
  }

  // primary_server_ip - computed: true, optional: true, required: false
  private _primaryServerIp?: string; 
  public get primaryServerIp() {
    return this.getStringAttribute('primary_server_ip');
  }
  public set primaryServerIp(value: string) {
    this._primaryServerIp = value;
  }
  public resetPrimaryServerIp() {
    this._primaryServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryServerIpInput() {
    return this._primaryServerIp;
  }

  // primary_server_ip6 - computed: true, optional: true, required: false
  private _primaryServerIp6?: string; 
  public get primaryServerIp6() {
    return this.getStringAttribute('primary_server_ip6');
  }
  public set primaryServerIp6(value: string) {
    this._primaryServerIp6 = value;
  }
  public resetPrimaryServerIp6() {
    this._primaryServerIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryServerIp6Input() {
    return this._primaryServerIp6;
  }

  // primary_server_name - computed: true, optional: true, required: false
  private _primaryServerName?: string; 
  public get primaryServerName() {
    return this.getStringAttribute('primary_server_name');
  }
  public set primaryServerName(value: string) {
    this._primaryServerName = value;
  }
  public resetPrimaryServerName() {
    this._primaryServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryServerNameInput() {
    return this._primaryServerName;
  }

  // responsible_mail - computed: true, optional: true, required: false
  private _responsibleMail?: string; 
  public get responsibleMail() {
    return this.getStringAttribute('responsible_mail');
  }
  public set responsibleMail(value: string) {
    this._responsibleMail = value;
  }
  public resetResponsibleMail() {
    this._responsibleMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsibleMailInput() {
    return this._responsibleMail;
  }

  // serial - computed: true, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_transfer: cdktf.stringToTerraform(this._allowTransfer),
      also_notify_list: cdktf.stringToTerraform(this._alsoNotifyList),
      dns_policy: cdktf.stringToTerraform(this._dnsPolicy),
      dnssec_algorithm: cdktf.stringToTerraform(this._dnssecAlgorithm),
      dnssec_keysize: cdktf.stringToTerraform(this._dnssecKeysize),
      dnssec_status: cdktf.stringToTerraform(this._dnssecStatus),
      domain_name: cdktf.stringToTerraform(this._domainName),
      dsset_info_list: cdktf.stringToTerraform(this._dssetInfoList),
      forward: cdktf.stringToTerraform(this._forward),
      forward_host_enable: cdktf.stringToTerraform(this._forwardHostEnable),
      forwarders: cdktf.stringToTerraform(this._forwarders),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      negative_ttl: cdktf.stringToTerraform(this._negativeTtl),
      notify_status: cdktf.stringToTerraform(this._notifyStatus),
      primary_server_ip: cdktf.stringToTerraform(this._primaryServerIp),
      primary_server_ip6: cdktf.stringToTerraform(this._primaryServerIp6),
      primary_server_name: cdktf.stringToTerraform(this._primaryServerName),
      responsible_mail: cdktf.stringToTerraform(this._responsibleMail),
      serial: cdktf.stringToTerraform(this._serial),
      ttl: cdktf.stringToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_transfer: {
        value: cdktf.stringToHclTerraform(this._allowTransfer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      also_notify_list: {
        value: cdktf.stringToHclTerraform(this._alsoNotifyList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_policy: {
        value: cdktf.stringToHclTerraform(this._dnsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec_algorithm: {
        value: cdktf.stringToHclTerraform(this._dnssecAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec_keysize: {
        value: cdktf.stringToHclTerraform(this._dnssecKeysize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec_status: {
        value: cdktf.stringToHclTerraform(this._dnssecStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsset_info_list: {
        value: cdktf.stringToHclTerraform(this._dssetInfoList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_host_enable: {
        value: cdktf.stringToHclTerraform(this._forwardHostEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarders: {
        value: cdktf.stringToHclTerraform(this._forwarders),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negative_ttl: {
        value: cdktf.stringToHclTerraform(this._negativeTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_status: {
        value: cdktf.stringToHclTerraform(this._notifyStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_server_ip: {
        value: cdktf.stringToHclTerraform(this._primaryServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_server_ip6: {
        value: cdktf.stringToHclTerraform(this._primaryServerIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_server_name: {
        value: cdktf.stringToHclTerraform(this._primaryServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      responsible_mail: {
        value: cdktf.stringToHclTerraform(this._responsibleMail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
