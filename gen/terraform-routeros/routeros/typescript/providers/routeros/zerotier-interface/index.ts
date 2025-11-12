// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZerotierInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#___path___ ZerotierInterface#___path___}
  */
  readonly path?: string;
  /**
  * An option to override the default route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#allow_default ZerotierInterface#allow_default}
  */
  readonly allowDefault?: boolean | cdktf.IResolvable;
  /**
  * An option to allow overlapping public IP space by the ZeroTier routes. .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#allow_global ZerotierInterface#allow_global}
  */
  readonly allowGlobal?: boolean | cdktf.IResolvable;
  /**
  * An option to allow assignment of managed IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#allow_managed ZerotierInterface#allow_managed}
  */
  readonly allowManaged?: boolean | cdktf.IResolvable;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#arp_timeout ZerotierInterface#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#comment ZerotierInterface#comment}
  */
  readonly comment?: string;
  /**
  * An option to force the `running` property to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#disable_running_check ZerotierInterface#disable_running_check}
  */
  readonly disableRunningCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#disabled ZerotierInterface#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#id ZerotierInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ZeroTier instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#instance ZerotierInterface#instance}
  */
  readonly instance: string;
  /**
  * Name of the ZeroTier interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#name ZerotierInterface#name}
  */
  readonly name: string;
  /**
  * The ZeroTier network identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#network ZerotierInterface#network}
  */
  readonly network: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface routeros_zerotier_interface}
*/
export class ZerotierInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_zerotier_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZerotierInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZerotierInterface to import
  * @param importFromId The id of the existing ZerotierInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZerotierInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_zerotier_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/zerotier_interface routeros_zerotier_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZerotierInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: ZerotierInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_zerotier_interface',
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
    this._allowDefault = config.allowDefault;
    this._allowGlobal = config.allowGlobal;
    this._allowManaged = config.allowManaged;
    this._arpTimeout = config.arpTimeout;
    this._comment = config.comment;
    this._disableRunningCheck = config.disableRunningCheck;
    this._disabled = config.disabled;
    this._id = config.id;
    this._instance = config.instance;
    this._name = config.name;
    this._network = config.network;
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

  // allow_default - computed: false, optional: true, required: false
  private _allowDefault?: boolean | cdktf.IResolvable; 
  public get allowDefault() {
    return this.getBooleanAttribute('allow_default');
  }
  public set allowDefault(value: boolean | cdktf.IResolvable) {
    this._allowDefault = value;
  }
  public resetAllowDefault() {
    this._allowDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDefaultInput() {
    return this._allowDefault;
  }

  // allow_global - computed: false, optional: true, required: false
  private _allowGlobal?: boolean | cdktf.IResolvable; 
  public get allowGlobal() {
    return this.getBooleanAttribute('allow_global');
  }
  public set allowGlobal(value: boolean | cdktf.IResolvable) {
    this._allowGlobal = value;
  }
  public resetAllowGlobal() {
    this._allowGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGlobalInput() {
    return this._allowGlobal;
  }

  // allow_managed - computed: false, optional: true, required: false
  private _allowManaged?: boolean | cdktf.IResolvable; 
  public get allowManaged() {
    return this.getBooleanAttribute('allow_managed');
  }
  public set allowManaged(value: boolean | cdktf.IResolvable) {
    this._allowManaged = value;
  }
  public resetAllowManaged() {
    this._allowManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowManagedInput() {
    return this._allowManaged;
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

  // bridge - computed: true, optional: false, required: false
  public get bridge() {
    return this.getBooleanAttribute('bridge');
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

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allow_default: cdktf.booleanToTerraform(this._allowDefault),
      allow_global: cdktf.booleanToTerraform(this._allowGlobal),
      allow_managed: cdktf.booleanToTerraform(this._allowManaged),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      comment: cdktf.stringToTerraform(this._comment),
      disable_running_check: cdktf.booleanToTerraform(this._disableRunningCheck),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
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
      allow_default: {
        value: cdktf.booleanToHclTerraform(this._allowDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_global: {
        value: cdktf.booleanToHclTerraform(this._allowGlobal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_managed: {
        value: cdktf.booleanToHclTerraform(this._allowManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      arp_timeout: {
        value: cdktf.stringToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
