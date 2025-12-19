// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_ipsrc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpmiIpsrcAConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP addr obtained by BMC running DHCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_ipsrc#dhcp SystemIpmiIpsrcA#dhcp}
  */
  readonly dhcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_ipsrc#id SystemIpmiIpsrcA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Manually configured static IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_ipsrc#static SystemIpmiIpsrcA#static}
  */
  readonly static?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_ipsrc thunder_system_ipmi_ipsrc}
*/
export class SystemIpmiIpsrcA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ipmi_ipsrc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpmiIpsrcA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpmiIpsrcA to import
  * @param importFromId The id of the existing SystemIpmiIpsrcA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_ipsrc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpmiIpsrcA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ipmi_ipsrc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ipmi_ipsrc thunder_system_ipmi_ipsrc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpmiIpsrcAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpmiIpsrcAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ipmi_ipsrc',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhcp = config.dhcp;
    this._id = config.id;
    this._static = config.static;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: number; 
  public get dhcp() {
    return this.getNumberAttribute('dhcp');
  }
  public set dhcp(value: number) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
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

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp: cdktf.numberToTerraform(this._dhcp),
      id: cdktf.stringToTerraform(this._id),
      static: cdktf.numberToTerraform(this._static),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp: {
        value: cdktf.numberToHclTerraform(this._dhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static: {
        value: cdktf.numberToHclTerraform(this._static),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
