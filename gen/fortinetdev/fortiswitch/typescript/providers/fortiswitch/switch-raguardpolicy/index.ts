// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchRaguardpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#device_role SwitchRaguardpolicy#device_role}
  */
  readonly deviceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#id SwitchRaguardpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#managed_flag SwitchRaguardpolicy#managed_flag}
  */
  readonly managedFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#match_prefix SwitchRaguardpolicy#match_prefix}
  */
  readonly matchPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#match_src_addr SwitchRaguardpolicy#match_src_addr}
  */
  readonly matchSrcAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#max_hop_limit SwitchRaguardpolicy#max_hop_limit}
  */
  readonly maxHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#max_router_preference SwitchRaguardpolicy#max_router_preference}
  */
  readonly maxRouterPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#min_hop_limit SwitchRaguardpolicy#min_hop_limit}
  */
  readonly minHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#name SwitchRaguardpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#other_flag SwitchRaguardpolicy#other_flag}
  */
  readonly otherFlag?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy fortiswitch_switch_raguardpolicy}
*/
export class SwitchRaguardpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_raguardpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchRaguardpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchRaguardpolicy to import
  * @param importFromId The id of the existing SwitchRaguardpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchRaguardpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_raguardpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_raguardpolicy fortiswitch_switch_raguardpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchRaguardpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchRaguardpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_raguardpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceRole = config.deviceRole;
    this._id = config.id;
    this._managedFlag = config.managedFlag;
    this._matchPrefix = config.matchPrefix;
    this._matchSrcAddr = config.matchSrcAddr;
    this._maxHopLimit = config.maxHopLimit;
    this._maxRouterPreference = config.maxRouterPreference;
    this._minHopLimit = config.minHopLimit;
    this._name = config.name;
    this._otherFlag = config.otherFlag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_role - computed: true, optional: true, required: false
  private _deviceRole?: string; 
  public get deviceRole() {
    return this.getStringAttribute('device_role');
  }
  public set deviceRole(value: string) {
    this._deviceRole = value;
  }
  public resetDeviceRole() {
    this._deviceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRoleInput() {
    return this._deviceRole;
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

  // managed_flag - computed: true, optional: true, required: false
  private _managedFlag?: string; 
  public get managedFlag() {
    return this.getStringAttribute('managed_flag');
  }
  public set managedFlag(value: string) {
    this._managedFlag = value;
  }
  public resetManagedFlag() {
    this._managedFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFlagInput() {
    return this._managedFlag;
  }

  // match_prefix - computed: true, optional: true, required: false
  private _matchPrefix?: string; 
  public get matchPrefix() {
    return this.getStringAttribute('match_prefix');
  }
  public set matchPrefix(value: string) {
    this._matchPrefix = value;
  }
  public resetMatchPrefix() {
    this._matchPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPrefixInput() {
    return this._matchPrefix;
  }

  // match_src_addr - computed: true, optional: true, required: false
  private _matchSrcAddr?: string; 
  public get matchSrcAddr() {
    return this.getStringAttribute('match_src_addr');
  }
  public set matchSrcAddr(value: string) {
    this._matchSrcAddr = value;
  }
  public resetMatchSrcAddr() {
    this._matchSrcAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchSrcAddrInput() {
    return this._matchSrcAddr;
  }

  // max_hop_limit - computed: true, optional: true, required: false
  private _maxHopLimit?: number; 
  public get maxHopLimit() {
    return this.getNumberAttribute('max_hop_limit');
  }
  public set maxHopLimit(value: number) {
    this._maxHopLimit = value;
  }
  public resetMaxHopLimit() {
    this._maxHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHopLimitInput() {
    return this._maxHopLimit;
  }

  // max_router_preference - computed: true, optional: true, required: false
  private _maxRouterPreference?: string; 
  public get maxRouterPreference() {
    return this.getStringAttribute('max_router_preference');
  }
  public set maxRouterPreference(value: string) {
    this._maxRouterPreference = value;
  }
  public resetMaxRouterPreference() {
    this._maxRouterPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRouterPreferenceInput() {
    return this._maxRouterPreference;
  }

  // min_hop_limit - computed: true, optional: true, required: false
  private _minHopLimit?: number; 
  public get minHopLimit() {
    return this.getNumberAttribute('min_hop_limit');
  }
  public set minHopLimit(value: number) {
    this._minHopLimit = value;
  }
  public resetMinHopLimit() {
    this._minHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHopLimitInput() {
    return this._minHopLimit;
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

  // other_flag - computed: true, optional: true, required: false
  private _otherFlag?: string; 
  public get otherFlag() {
    return this.getStringAttribute('other_flag');
  }
  public set otherFlag(value: string) {
    this._otherFlag = value;
  }
  public resetOtherFlag() {
    this._otherFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFlagInput() {
    return this._otherFlag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_role: cdktf.stringToTerraform(this._deviceRole),
      id: cdktf.stringToTerraform(this._id),
      managed_flag: cdktf.stringToTerraform(this._managedFlag),
      match_prefix: cdktf.stringToTerraform(this._matchPrefix),
      match_src_addr: cdktf.stringToTerraform(this._matchSrcAddr),
      max_hop_limit: cdktf.numberToTerraform(this._maxHopLimit),
      max_router_preference: cdktf.stringToTerraform(this._maxRouterPreference),
      min_hop_limit: cdktf.numberToTerraform(this._minHopLimit),
      name: cdktf.stringToTerraform(this._name),
      other_flag: cdktf.stringToTerraform(this._otherFlag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_role: {
        value: cdktf.stringToHclTerraform(this._deviceRole),
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
      managed_flag: {
        value: cdktf.stringToHclTerraform(this._managedFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_prefix: {
        value: cdktf.stringToHclTerraform(this._matchPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_src_addr: {
        value: cdktf.stringToHclTerraform(this._matchSrcAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_hop_limit: {
        value: cdktf.numberToHclTerraform(this._maxHopLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_router_preference: {
        value: cdktf.stringToHclTerraform(this._maxRouterPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_hop_limit: {
        value: cdktf.numberToHclTerraform(this._minHopLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_flag: {
        value: cdktf.stringToHclTerraform(this._otherFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
