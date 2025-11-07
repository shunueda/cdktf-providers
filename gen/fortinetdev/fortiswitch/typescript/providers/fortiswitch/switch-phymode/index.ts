// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_phymode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchPhymodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_phymode#id SwitchPhymode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_phymode#port53_phy_mode SwitchPhymode#port53_phy_mode}
  */
  readonly port53PhyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_phymode#port54_phy_mode SwitchPhymode#port54_phy_mode}
  */
  readonly port54PhyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_phymode#port_configuration SwitchPhymode#port_configuration}
  */
  readonly portConfiguration?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_phymode fortiswitch_switch_phymode}
*/
export class SwitchPhymode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_phymode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchPhymode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchPhymode to import
  * @param importFromId The id of the existing SwitchPhymode that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_phymode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchPhymode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_phymode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_phymode fortiswitch_switch_phymode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchPhymodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchPhymodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_phymode',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
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
    this._port53PhyMode = config.port53PhyMode;
    this._port54PhyMode = config.port54PhyMode;
    this._portConfiguration = config.portConfiguration;
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

  // port53_phy_mode - computed: true, optional: true, required: false
  private _port53PhyMode?: string; 
  public get port53PhyMode() {
    return this.getStringAttribute('port53_phy_mode');
  }
  public set port53PhyMode(value: string) {
    this._port53PhyMode = value;
  }
  public resetPort53PhyMode() {
    this._port53PhyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port53PhyModeInput() {
    return this._port53PhyMode;
  }

  // port54_phy_mode - computed: true, optional: true, required: false
  private _port54PhyMode?: string; 
  public get port54PhyMode() {
    return this.getStringAttribute('port54_phy_mode');
  }
  public set port54PhyMode(value: string) {
    this._port54PhyMode = value;
  }
  public resetPort54PhyMode() {
    this._port54PhyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port54PhyModeInput() {
    return this._port54PhyMode;
  }

  // port_configuration - computed: true, optional: true, required: false
  private _portConfiguration?: string; 
  public get portConfiguration() {
    return this.getStringAttribute('port_configuration');
  }
  public set portConfiguration(value: string) {
    this._portConfiguration = value;
  }
  public resetPortConfiguration() {
    this._portConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigurationInput() {
    return this._portConfiguration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port53_phy_mode: cdktf.stringToTerraform(this._port53PhyMode),
      port54_phy_mode: cdktf.stringToTerraform(this._port54PhyMode),
      port_configuration: cdktf.stringToTerraform(this._portConfiguration),
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
      port53_phy_mode: {
        value: cdktf.stringToHclTerraform(this._port53PhyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port54_phy_mode: {
        value: cdktf.stringToHclTerraform(this._port54PhyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_configuration: {
        value: cdktf.stringToHclTerraform(this._portConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
