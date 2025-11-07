// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnalwaysonprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnalwaysonprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnalwaysonprofile#clientcontrol Vpnalwaysonprofile#clientcontrol}
  */
  readonly clientcontrol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnalwaysonprofile#id Vpnalwaysonprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnalwaysonprofile#locationbasedvpn Vpnalwaysonprofile#locationbasedvpn}
  */
  readonly locationbasedvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnalwaysonprofile#name Vpnalwaysonprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnalwaysonprofile#networkaccessonvpnfailure Vpnalwaysonprofile#networkaccessonvpnfailure}
  */
  readonly networkaccessonvpnfailure?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnalwaysonprofile citrixadc_vpnalwaysonprofile}
*/
export class Vpnalwaysonprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnalwaysonprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnalwaysonprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnalwaysonprofile to import
  * @param importFromId The id of the existing Vpnalwaysonprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnalwaysonprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnalwaysonprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnalwaysonprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnalwaysonprofile citrixadc_vpnalwaysonprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnalwaysonprofileConfig
  */
  public constructor(scope: Construct, id: string, config: VpnalwaysonprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnalwaysonprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientcontrol = config.clientcontrol;
    this._id = config.id;
    this._locationbasedvpn = config.locationbasedvpn;
    this._name = config.name;
    this._networkaccessonvpnfailure = config.networkaccessonvpnfailure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clientcontrol - computed: true, optional: true, required: false
  private _clientcontrol?: string; 
  public get clientcontrol() {
    return this.getStringAttribute('clientcontrol');
  }
  public set clientcontrol(value: string) {
    this._clientcontrol = value;
  }
  public resetClientcontrol() {
    this._clientcontrol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientcontrolInput() {
    return this._clientcontrol;
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

  // locationbasedvpn - computed: true, optional: true, required: false
  private _locationbasedvpn?: string; 
  public get locationbasedvpn() {
    return this.getStringAttribute('locationbasedvpn');
  }
  public set locationbasedvpn(value: string) {
    this._locationbasedvpn = value;
  }
  public resetLocationbasedvpn() {
    this._locationbasedvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationbasedvpnInput() {
    return this._locationbasedvpn;
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

  // networkaccessonvpnfailure - computed: true, optional: true, required: false
  private _networkaccessonvpnfailure?: string; 
  public get networkaccessonvpnfailure() {
    return this.getStringAttribute('networkaccessonvpnfailure');
  }
  public set networkaccessonvpnfailure(value: string) {
    this._networkaccessonvpnfailure = value;
  }
  public resetNetworkaccessonvpnfailure() {
    this._networkaccessonvpnfailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkaccessonvpnfailureInput() {
    return this._networkaccessonvpnfailure;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clientcontrol: cdktf.stringToTerraform(this._clientcontrol),
      id: cdktf.stringToTerraform(this._id),
      locationbasedvpn: cdktf.stringToTerraform(this._locationbasedvpn),
      name: cdktf.stringToTerraform(this._name),
      networkaccessonvpnfailure: cdktf.stringToTerraform(this._networkaccessonvpnfailure),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clientcontrol: {
        value: cdktf.stringToHclTerraform(this._clientcontrol),
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
      locationbasedvpn: {
        value: cdktf.stringToHclTerraform(this._locationbasedvpn),
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
      networkaccessonvpnfailure: {
        value: cdktf.stringToHclTerraform(this._networkaccessonvpnfailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
