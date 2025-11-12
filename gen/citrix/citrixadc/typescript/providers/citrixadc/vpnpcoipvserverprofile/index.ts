// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipvserverprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnpcoipvserverprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipvserverprofile#id Vpnpcoipvserverprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipvserverprofile#logindomain Vpnpcoipvserverprofile#logindomain}
  */
  readonly logindomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipvserverprofile#name Vpnpcoipvserverprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipvserverprofile#udpport Vpnpcoipvserverprofile#udpport}
  */
  readonly udpport?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipvserverprofile citrixadc_vpnpcoipvserverprofile}
*/
export class Vpnpcoipvserverprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnpcoipvserverprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpnpcoipvserverprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpnpcoipvserverprofile to import
  * @param importFromId The id of the existing Vpnpcoipvserverprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipvserverprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpnpcoipvserverprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnpcoipvserverprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnpcoipvserverprofile citrixadc_vpnpcoipvserverprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnpcoipvserverprofileConfig
  */
  public constructor(scope: Construct, id: string, config: VpnpcoipvserverprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnpcoipvserverprofile',
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
    this._id = config.id;
    this._logindomain = config.logindomain;
    this._name = config.name;
    this._udpport = config.udpport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // logindomain - computed: false, optional: false, required: true
  private _logindomain?: string; 
  public get logindomain() {
    return this.getStringAttribute('logindomain');
  }
  public set logindomain(value: string) {
    this._logindomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logindomainInput() {
    return this._logindomain;
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

  // udpport - computed: true, optional: true, required: false
  private _udpport?: number; 
  public get udpport() {
    return this.getNumberAttribute('udpport');
  }
  public set udpport(value: number) {
    this._udpport = value;
  }
  public resetUdpport() {
    this._udpport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpportInput() {
    return this._udpport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      logindomain: cdktf.stringToTerraform(this._logindomain),
      name: cdktf.stringToTerraform(this._name),
      udpport: cdktf.numberToTerraform(this._udpport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logindomain: {
        value: cdktf.stringToHclTerraform(this._logindomain),
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
      udpport: {
        value: cdktf.numberToHclTerraform(this._udpport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
