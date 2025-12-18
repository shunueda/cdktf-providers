// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_intranetip6_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnvserverIntranetip6BindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_intranetip6_binding#id VpnvserverIntranetip6Binding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_intranetip6_binding#intranetip6 VpnvserverIntranetip6Binding#intranetip6}
  */
  readonly intranetip6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_intranetip6_binding#name VpnvserverIntranetip6Binding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_intranetip6_binding#numaddr VpnvserverIntranetip6Binding#numaddr}
  */
  readonly numaddr?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_intranetip6_binding citrixadc_vpnvserver_intranetip6_binding}
*/
export class VpnvserverIntranetip6Binding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnvserver_intranetip6_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnvserverIntranetip6Binding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnvserverIntranetip6Binding to import
  * @param importFromId The id of the existing VpnvserverIntranetip6Binding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_intranetip6_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnvserverIntranetip6Binding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnvserver_intranetip6_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_intranetip6_binding citrixadc_vpnvserver_intranetip6_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnvserverIntranetip6BindingConfig
  */
  public constructor(scope: Construct, id: string, config: VpnvserverIntranetip6BindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnvserver_intranetip6_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._intranetip6 = config.intranetip6;
    this._name = config.name;
    this._numaddr = config.numaddr;
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

  // intranetip6 - computed: false, optional: false, required: true
  private _intranetip6?: string; 
  public get intranetip6() {
    return this.getStringAttribute('intranetip6');
  }
  public set intranetip6(value: string) {
    this._intranetip6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetip6Input() {
    return this._intranetip6;
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

  // numaddr - computed: true, optional: true, required: false
  private _numaddr?: number; 
  public get numaddr() {
    return this.getNumberAttribute('numaddr');
  }
  public set numaddr(value: number) {
    this._numaddr = value;
  }
  public resetNumaddr() {
    this._numaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaddrInput() {
    return this._numaddr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      intranetip6: cdktf.stringToTerraform(this._intranetip6),
      name: cdktf.stringToTerraform(this._name),
      numaddr: cdktf.numberToTerraform(this._numaddr),
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
      intranetip6: {
        value: cdktf.stringToHclTerraform(this._intranetip6),
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
      numaddr: {
        value: cdktf.numberToHclTerraform(this._numaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
