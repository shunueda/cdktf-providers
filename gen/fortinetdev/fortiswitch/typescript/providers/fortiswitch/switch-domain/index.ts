// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain#ha_block SwitchDomain#ha_block}
  */
  readonly haBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain#ha_l2_clear_on_role_change SwitchDomain#ha_l2_clear_on_role_change}
  */
  readonly haL2ClearOnRoleChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain#id SwitchDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain#inter_front_panel_traffic SwitchDomain#inter_front_panel_traffic}
  */
  readonly interFrontPanelTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain#name SwitchDomain#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain#priority SwitchDomain#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain#vcluster_id SwitchDomain#vcluster_id}
  */
  readonly vclusterId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain fortiswitch_switch_domain}
*/
export class SwitchDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchDomain to import
  * @param importFromId The id of the existing SwitchDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_domain fortiswitch_switch_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchDomainConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchDomainConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_domain',
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
    this._haBlock = config.haBlock;
    this._haL2ClearOnRoleChange = config.haL2ClearOnRoleChange;
    this._id = config.id;
    this._interFrontPanelTraffic = config.interFrontPanelTraffic;
    this._name = config.name;
    this._priority = config.priority;
    this._vclusterId = config.vclusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ha_block - computed: true, optional: true, required: false
  private _haBlock?: string; 
  public get haBlock() {
    return this.getStringAttribute('ha_block');
  }
  public set haBlock(value: string) {
    this._haBlock = value;
  }
  public resetHaBlock() {
    this._haBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haBlockInput() {
    return this._haBlock;
  }

  // ha_l2_clear_on_role_change - computed: true, optional: true, required: false
  private _haL2ClearOnRoleChange?: string; 
  public get haL2ClearOnRoleChange() {
    return this.getStringAttribute('ha_l2_clear_on_role_change');
  }
  public set haL2ClearOnRoleChange(value: string) {
    this._haL2ClearOnRoleChange = value;
  }
  public resetHaL2ClearOnRoleChange() {
    this._haL2ClearOnRoleChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haL2ClearOnRoleChangeInput() {
    return this._haL2ClearOnRoleChange;
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

  // inter_front_panel_traffic - computed: true, optional: true, required: false
  private _interFrontPanelTraffic?: string; 
  public get interFrontPanelTraffic() {
    return this.getStringAttribute('inter_front_panel_traffic');
  }
  public set interFrontPanelTraffic(value: string) {
    this._interFrontPanelTraffic = value;
  }
  public resetInterFrontPanelTraffic() {
    this._interFrontPanelTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interFrontPanelTrafficInput() {
    return this._interFrontPanelTraffic;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // vcluster_id - computed: true, optional: true, required: false
  private _vclusterId?: number; 
  public get vclusterId() {
    return this.getNumberAttribute('vcluster_id');
  }
  public set vclusterId(value: number) {
    this._vclusterId = value;
  }
  public resetVclusterId() {
    this._vclusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterIdInput() {
    return this._vclusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ha_block: cdktf.stringToTerraform(this._haBlock),
      ha_l2_clear_on_role_change: cdktf.stringToTerraform(this._haL2ClearOnRoleChange),
      id: cdktf.stringToTerraform(this._id),
      inter_front_panel_traffic: cdktf.stringToTerraform(this._interFrontPanelTraffic),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      vcluster_id: cdktf.numberToTerraform(this._vclusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ha_block: {
        value: cdktf.stringToHclTerraform(this._haBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_l2_clear_on_role_change: {
        value: cdktf.stringToHclTerraform(this._haL2ClearOnRoleChange),
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
      inter_front_panel_traffic: {
        value: cdktf.stringToHclTerraform(this._interFrontPanelTraffic),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcluster_id: {
        value: cdktf.numberToHclTerraform(this._vclusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
