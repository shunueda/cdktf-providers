// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDnsserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#device_name SystemDnsserver#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#device_vdom SystemDnsserver#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#dnsfilter_profile SystemDnsserver#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#doh SystemDnsserver#doh}
  */
  readonly doh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#doh3 SystemDnsserver#doh3}
  */
  readonly doh3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#doq SystemDnsserver#doq}
  */
  readonly doq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#id SystemDnsserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#mode SystemDnsserver#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#name SystemDnsserver#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver fmgdevice_system_dnsserver}
*/
export class SystemDnsserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_dnsserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDnsserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDnsserver to import
  * @param importFromId The id of the existing SystemDnsserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDnsserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_dnsserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_dnsserver fmgdevice_system_dnsserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDnsserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDnsserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_dnsserver',
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
    this._deviceVdom = config.deviceVdom;
    this._dnsfilterProfile = config.dnsfilterProfile;
    this._doh = config.doh;
    this._doh3 = config.doh3;
    this._doq = config.doq;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dnsfilter_profile - computed: true, optional: true, required: false
  private _dnsfilterProfile?: string[]; 
  public get dnsfilterProfile() {
    return cdktf.Fn.tolist(this.getListAttribute('dnsfilter_profile'));
  }
  public set dnsfilterProfile(value: string[]) {
    this._dnsfilterProfile = value;
  }
  public resetDnsfilterProfile() {
    this._dnsfilterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsfilterProfileInput() {
    return this._dnsfilterProfile;
  }

  // doh - computed: true, optional: true, required: false
  private _doh?: string; 
  public get doh() {
    return this.getStringAttribute('doh');
  }
  public set doh(value: string) {
    this._doh = value;
  }
  public resetDoh() {
    this._doh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohInput() {
    return this._doh;
  }

  // doh3 - computed: true, optional: true, required: false
  private _doh3?: string; 
  public get doh3() {
    return this.getStringAttribute('doh3');
  }
  public set doh3(value: string) {
    this._doh3 = value;
  }
  public resetDoh3() {
    this._doh3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doh3Input() {
    return this._doh3;
  }

  // doq - computed: true, optional: true, required: false
  private _doq?: string; 
  public get doq() {
    return this.getStringAttribute('doq');
  }
  public set doq(value: string) {
    this._doq = value;
  }
  public resetDoq() {
    this._doq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doqInput() {
    return this._doq;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dnsfilter_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsfilterProfile),
      doh: cdktf.stringToTerraform(this._doh),
      doh3: cdktf.stringToTerraform(this._doh3),
      doq: cdktf.stringToTerraform(this._doq),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
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
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsfilter_profile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsfilterProfile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      doh: {
        value: cdktf.stringToHclTerraform(this._doh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      doh3: {
        value: cdktf.stringToHclTerraform(this._doh3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      doq: {
        value: cdktf.stringToHclTerraform(this._doq),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
