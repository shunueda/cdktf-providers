// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnpcoipprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipprofile#conserverurl Vpnpcoipprofile#conserverurl}
  */
  readonly conserverurl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipprofile#icvverification Vpnpcoipprofile#icvverification}
  */
  readonly icvverification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipprofile#id Vpnpcoipprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipprofile#name Vpnpcoipprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipprofile#sessionidletimeout Vpnpcoipprofile#sessionidletimeout}
  */
  readonly sessionidletimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipprofile citrixadc_vpnpcoipprofile}
*/
export class Vpnpcoipprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnpcoipprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnpcoipprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnpcoipprofile to import
  * @param importFromId The id of the existing Vpnpcoipprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnpcoipprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnpcoipprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipprofile citrixadc_vpnpcoipprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnpcoipprofileConfig
  */
  public constructor(scope: Construct, id: string, config: VpnpcoipprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnpcoipprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conserverurl = config.conserverurl;
    this._icvverification = config.icvverification;
    this._id = config.id;
    this._name = config.name;
    this._sessionidletimeout = config.sessionidletimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conserverurl - computed: false, optional: false, required: true
  private _conserverurl?: string; 
  public get conserverurl() {
    return this.getStringAttribute('conserverurl');
  }
  public set conserverurl(value: string) {
    this._conserverurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conserverurlInput() {
    return this._conserverurl;
  }

  // icvverification - computed: true, optional: true, required: false
  private _icvverification?: string; 
  public get icvverification() {
    return this.getStringAttribute('icvverification');
  }
  public set icvverification(value: string) {
    this._icvverification = value;
  }
  public resetIcvverification() {
    this._icvverification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icvverificationInput() {
    return this._icvverification;
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

  // sessionidletimeout - computed: true, optional: true, required: false
  private _sessionidletimeout?: number; 
  public get sessionidletimeout() {
    return this.getNumberAttribute('sessionidletimeout');
  }
  public set sessionidletimeout(value: number) {
    this._sessionidletimeout = value;
  }
  public resetSessionidletimeout() {
    this._sessionidletimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionidletimeoutInput() {
    return this._sessionidletimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conserverurl: cdktf.stringToTerraform(this._conserverurl),
      icvverification: cdktf.stringToTerraform(this._icvverification),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sessionidletimeout: cdktf.numberToTerraform(this._sessionidletimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conserverurl: {
        value: cdktf.stringToHclTerraform(this._conserverurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icvverification: {
        value: cdktf.stringToHclTerraform(this._icvverification),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionidletimeout: {
        value: cdktf.numberToHclTerraform(this._sessionidletimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
