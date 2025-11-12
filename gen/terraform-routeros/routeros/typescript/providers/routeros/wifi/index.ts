// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#___path___ Wifi#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#___ts___ Wifi#___ts___}
  */
  readonly ts?: string;
  /**
  * AAA inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#aaa Wifi#aaa}
  */
  readonly aaa?: { [key: string]: string };
  /**
  * Address Resolution Protocol mode:
  *   * disabled - the interface will not use ARP
  *   * enabled - the interface will use ARP
  *   * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface
  *   * proxy-arp - the router performs proxy ARP on the interface and sends replies to other interfaces
  *   * reply-only - the interface will only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be successful, a valid static entry must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#arp Wifi#arp}
  */
  readonly arp?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#arp_timeout Wifi#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Channel inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#channel Wifi#channel}
  */
  readonly channel?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#comment Wifi#comment}
  */
  readonly comment?: string;
  /**
  * Configuration inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#configuration Wifi#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Datapath inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#datapath Wifi#datapath}
  */
  readonly datapath?: { [key: string]: string };
  /**
  * Whether to assign lower priority to channels with a control frequency of 5720 or 5825-5885 MHz. These channels are unsupported by some client devices, making their automatic selection undesirable. Defaults to `yes` in ETSI regulatory domains, elsewhere to `no`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#deprioritize_unii_3_4 Wifi#deprioritize_unii_3_4}
  */
  readonly deprioritizeUnii34?: boolean | cdktf.IResolvable;
  /**
  * An option to set the running property to true if it is not disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#disable_running_check Wifi#disable_running_check}
  */
  readonly disableRunningCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#disabled Wifi#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#id Wifi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interworking inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#interworking Wifi#interworking}
  */
  readonly interworking?: { [key: string]: string };
  /**
  * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#l2mtu Wifi#l2mtu}
  */
  readonly l2Mtu?: number;
  /**
  * MAC address (BSSID) to use for the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#mac_address Wifi#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The corresponding master interface of the virtual one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#master_interface Wifi#master_interface}
  */
  readonly masterInterface?: string;
  /**
  * Layer3 maximum transmission unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#mtu Wifi#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#name Wifi#name}
  */
  readonly name: string;
  /**
  * Security inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#security Wifi#security}
  */
  readonly security?: { [key: string]: string };
  /**
  * Steering inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#steering Wifi#steering}
  */
  readonly steering?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi routeros_wifi}
*/
export class Wifi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wifi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wifi to import
  * @param importFromId The id of the existing Wifi that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wifi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/wifi routeros_wifi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiConfig
  */
  public constructor(scope: Construct, id: string, config: WifiConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._ts = config.ts;
    this._aaa = config.aaa;
    this._arp = config.arp;
    this._arpTimeout = config.arpTimeout;
    this._channel = config.channel;
    this._comment = config.comment;
    this._configuration = config.configuration;
    this._datapath = config.datapath;
    this._deprioritizeUnii34 = config.deprioritizeUnii34;
    this._disableRunningCheck = config.disableRunningCheck;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interworking = config.interworking;
    this._l2Mtu = config.l2Mtu;
    this._macAddress = config.macAddress;
    this._masterInterface = config.masterInterface;
    this._mtu = config.mtu;
    this._name = config.name;
    this._security = config.security;
    this._steering = config.steering;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___ts___ - computed: false, optional: true, required: false
  private _ts?: string; 
  public get ts() {
    return this.getStringAttribute('___ts___');
  }
  public set ts(value: string) {
    this._ts = value;
  }
  public resetTs() {
    this._ts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsInput() {
    return this._ts;
  }

  // aaa - computed: false, optional: true, required: false
  private _aaa?: { [key: string]: string }; 
  public get aaa() {
    return this.getStringMapAttribute('aaa');
  }
  public set aaa(value: { [key: string]: string }) {
    this._aaa = value;
  }
  public resetAaa() {
    this._aaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaInput() {
    return this._aaa;
  }

  // arp - computed: false, optional: true, required: false
  private _arp?: string; 
  public get arp() {
    return this.getStringAttribute('arp');
  }
  public set arp(value: string) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: string; 
  public get arpTimeout() {
    return this.getStringAttribute('arp_timeout');
  }
  public set arpTimeout(value: string) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // bound - computed: true, optional: false, required: false
  public get bound() {
    return this.getBooleanAttribute('bound');
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: { [key: string]: string }; 
  public get channel() {
    return this.getStringMapAttribute('channel');
  }
  public set channel(value: { [key: string]: string }) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // datapath - computed: false, optional: true, required: false
  private _datapath?: { [key: string]: string }; 
  public get datapath() {
    return this.getStringMapAttribute('datapath');
  }
  public set datapath(value: { [key: string]: string }) {
    this._datapath = value;
  }
  public resetDatapath() {
    this._datapath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathInput() {
    return this._datapath;
  }

  // default_name - computed: true, optional: false, required: false
  public get defaultName() {
    return this.getStringAttribute('default_name');
  }

  // deprioritize_unii_3_4 - computed: false, optional: true, required: false
  private _deprioritizeUnii34?: boolean | cdktf.IResolvable; 
  public get deprioritizeUnii34() {
    return this.getBooleanAttribute('deprioritize_unii_3_4');
  }
  public set deprioritizeUnii34(value: boolean | cdktf.IResolvable) {
    this._deprioritizeUnii34 = value;
  }
  public resetDeprioritizeUnii34() {
    this._deprioritizeUnii34 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprioritizeUnii34Input() {
    return this._deprioritizeUnii34;
  }

  // disable_running_check - computed: false, optional: true, required: false
  private _disableRunningCheck?: boolean | cdktf.IResolvable; 
  public get disableRunningCheck() {
    return this.getBooleanAttribute('disable_running_check');
  }
  public set disableRunningCheck(value: boolean | cdktf.IResolvable) {
    this._disableRunningCheck = value;
  }
  public resetDisableRunningCheck() {
    this._disableRunningCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRunningCheckInput() {
    return this._disableRunningCheck;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // interworking - computed: false, optional: true, required: false
  private _interworking?: { [key: string]: string }; 
  public get interworking() {
    return this.getStringMapAttribute('interworking');
  }
  public set interworking(value: { [key: string]: string }) {
    this._interworking = value;
  }
  public resetInterworking() {
    this._interworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interworkingInput() {
    return this._interworking;
  }

  // l2mtu - computed: false, optional: true, required: false
  private _l2Mtu?: number; 
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
  }
  public set l2Mtu(value: number) {
    this._l2Mtu = value;
  }
  public resetL2Mtu() {
    this._l2Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2MtuInput() {
    return this._l2Mtu;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // master - computed: true, optional: false, required: false
  public get master() {
    return this.getBooleanAttribute('master');
  }

  // master_interface - computed: false, optional: true, required: false
  private _masterInterface?: string; 
  public get masterInterface() {
    return this.getStringAttribute('master_interface');
  }
  public set masterInterface(value: string) {
    this._masterInterface = value;
  }
  public resetMasterInterface() {
    this._masterInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInterfaceInput() {
    return this._masterInterface;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // radio_mac - computed: true, optional: false, required: false
  public get radioMac() {
    return this.getStringAttribute('radio_mac');
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // security - computed: false, optional: true, required: false
  private _security?: { [key: string]: string }; 
  public get security() {
    return this.getStringMapAttribute('security');
  }
  public set security(value: { [key: string]: string }) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // steering - computed: false, optional: true, required: false
  private _steering?: { [key: string]: string }; 
  public get steering() {
    return this.getStringMapAttribute('steering');
  }
  public set steering(value: { [key: string]: string }) {
    this._steering = value;
  }
  public resetSteering() {
    this._steering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get steeringInput() {
    return this._steering;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___ts___: cdktf.stringToTerraform(this._ts),
      aaa: cdktf.hashMapper(cdktf.stringToTerraform)(this._aaa),
      arp: cdktf.stringToTerraform(this._arp),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      channel: cdktf.hashMapper(cdktf.stringToTerraform)(this._channel),
      comment: cdktf.stringToTerraform(this._comment),
      configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._configuration),
      datapath: cdktf.hashMapper(cdktf.stringToTerraform)(this._datapath),
      deprioritize_unii_3_4: cdktf.booleanToTerraform(this._deprioritizeUnii34),
      disable_running_check: cdktf.booleanToTerraform(this._disableRunningCheck),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interworking: cdktf.hashMapper(cdktf.stringToTerraform)(this._interworking),
      l2mtu: cdktf.numberToTerraform(this._l2Mtu),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      master_interface: cdktf.stringToTerraform(this._masterInterface),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      security: cdktf.hashMapper(cdktf.stringToTerraform)(this._security),
      steering: cdktf.hashMapper(cdktf.stringToTerraform)(this._steering),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___ts___: {
        value: cdktf.stringToHclTerraform(this._ts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._aaa),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_timeout: {
        value: cdktf.stringToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._channel),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configuration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      datapath: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._datapath),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deprioritize_unii_3_4: {
        value: cdktf.booleanToHclTerraform(this._deprioritizeUnii34),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_running_check: {
        value: cdktf.booleanToHclTerraform(this._disableRunningCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interworking: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._interworking),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      l2mtu: {
        value: cdktf.numberToHclTerraform(this._l2Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_interface: {
        value: cdktf.stringToHclTerraform(this._masterInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      security: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._security),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      steering: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._steering),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
