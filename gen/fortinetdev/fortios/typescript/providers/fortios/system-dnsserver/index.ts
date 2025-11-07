// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDnsserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver#dnsfilter_profile SystemDnsserver#dnsfilter_profile}
  */
  readonly dnsfilterProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver#doh SystemDnsserver#doh}
  */
  readonly doh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver#doh3 SystemDnsserver#doh3}
  */
  readonly doh3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver#doq SystemDnsserver#doq}
  */
  readonly doq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver#id SystemDnsserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver#mode SystemDnsserver#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver#name SystemDnsserver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver#vdomparam SystemDnsserver#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver fortios_system_dnsserver}
*/
export class SystemDnsserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_dnsserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDnsserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDnsserver to import
  * @param importFromId The id of the existing SystemDnsserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDnsserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_dnsserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dnsserver fortios_system_dnsserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDnsserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDnsserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_dnsserver',
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
    this._dnsfilterProfile = config.dnsfilterProfile;
    this._doh = config.doh;
    this._doh3 = config.doh3;
    this._doq = config.doq;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dnsfilter_profile - computed: false, optional: true, required: false
  private _dnsfilterProfile?: string; 
  public get dnsfilterProfile() {
    return this.getStringAttribute('dnsfilter_profile');
  }
  public set dnsfilterProfile(value: string) {
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
      dnsfilter_profile: cdktf.stringToTerraform(this._dnsfilterProfile),
      doh: cdktf.stringToTerraform(this._doh),
      doh3: cdktf.stringToTerraform(this._doh3),
      doq: cdktf.stringToTerraform(this._doq),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dnsfilter_profile: {
        value: cdktf.stringToHclTerraform(this._dnsfilterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
