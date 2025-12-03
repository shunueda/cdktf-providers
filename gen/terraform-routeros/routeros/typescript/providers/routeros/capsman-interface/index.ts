// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapsmanInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#___path___ CapsmanInterface#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#___skip___ CapsmanInterface#___skip___}
  */
  readonly skip?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#___ts___ CapsmanInterface#___ts___}
  */
  readonly ts?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#arp_timeout CapsmanInterface#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Channel inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#channel CapsmanInterface#channel}
  */
  readonly channel?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#comment CapsmanInterface#comment}
  */
  readonly comment?: string;
  /**
  * Configuration inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#configuration CapsmanInterface#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Datapath inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#datapath CapsmanInterface#datapath}
  */
  readonly datapath?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#disabled CapsmanInterface#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#id CapsmanInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MAC address (BSSID) to use for the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#mac_address CapsmanInterface#mac_address}
  */
  readonly macAddress?: string;
  /**
  * The corresponding master interface of the virtual one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#master_interface CapsmanInterface#master_interface}
  */
  readonly masterInterface?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#name CapsmanInterface#name}
  */
  readonly name: string;
  /**
  * The MAC address of the associated radio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#radio_mac CapsmanInterface#radio_mac}
  */
  readonly radioMac?: string;
  /**
  * Name of the associated radio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#radio_name CapsmanInterface#radio_name}
  */
  readonly radioName?: string;
  /**
  * Rates inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#rates CapsmanInterface#rates}
  */
  readonly rates?: { [key: string]: string };
  /**
  * Security inline settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#security CapsmanInterface#security}
  */
  readonly security?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface routeros_capsman_interface}
*/
export class CapsmanInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_capsman_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapsmanInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapsmanInterface to import
  * @param importFromId The id of the existing CapsmanInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapsmanInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_capsman_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/capsman_interface routeros_capsman_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapsmanInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: CapsmanInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_capsman_interface',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
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
    this._skip = config.skip;
    this._ts = config.ts;
    this._arpTimeout = config.arpTimeout;
    this._channel = config.channel;
    this._comment = config.comment;
    this._configuration = config.configuration;
    this._datapath = config.datapath;
    this._disabled = config.disabled;
    this._id = config.id;
    this._macAddress = config.macAddress;
    this._masterInterface = config.masterInterface;
    this._name = config.name;
    this._radioMac = config.radioMac;
    this._radioName = config.radioName;
    this._rates = config.rates;
    this._security = config.security;
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

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
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

  // l2mtu - computed: true, optional: false, required: false
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
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

  // radio_mac - computed: false, optional: true, required: false
  private _radioMac?: string; 
  public get radioMac() {
    return this.getStringAttribute('radio_mac');
  }
  public set radioMac(value: string) {
    this._radioMac = value;
  }
  public resetRadioMac() {
    this._radioMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioMacInput() {
    return this._radioMac;
  }

  // radio_name - computed: false, optional: true, required: false
  private _radioName?: string; 
  public get radioName() {
    return this.getStringAttribute('radio_name');
  }
  public set radioName(value: string) {
    this._radioName = value;
  }
  public resetRadioName() {
    this._radioName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioNameInput() {
    return this._radioName;
  }

  // rates - computed: false, optional: true, required: false
  private _rates?: { [key: string]: string }; 
  public get rates() {
    return this.getStringMapAttribute('rates');
  }
  public set rates(value: { [key: string]: string }) {
    this._rates = value;
  }
  public resetRates() {
    this._rates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratesInput() {
    return this._rates;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      ___ts___: cdktf.stringToTerraform(this._ts),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      channel: cdktf.hashMapper(cdktf.stringToTerraform)(this._channel),
      comment: cdktf.stringToTerraform(this._comment),
      configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._configuration),
      datapath: cdktf.hashMapper(cdktf.stringToTerraform)(this._datapath),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      master_interface: cdktf.stringToTerraform(this._masterInterface),
      name: cdktf.stringToTerraform(this._name),
      radio_mac: cdktf.stringToTerraform(this._radioMac),
      radio_name: cdktf.stringToTerraform(this._radioName),
      rates: cdktf.hashMapper(cdktf.stringToTerraform)(this._rates),
      security: cdktf.hashMapper(cdktf.stringToTerraform)(this._security),
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
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_mac: {
        value: cdktf.stringToHclTerraform(this._radioMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_name: {
        value: cdktf.stringToHclTerraform(this._radioName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rates: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rates),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      security: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._security),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
