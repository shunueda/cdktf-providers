// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether NATs are automatically enabled or disabled for any connections using this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#allow_nat LtmPool#allow_nat}
  */
  readonly allowNat?: string;
  /**
  * Specifies whether SNATs are automatically enabled or disabled for any connections using this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#allow_snat LtmPool#allow_snat}
  */
  readonly allowSnat?: string;
  /**
  * Specifies descriptive text that identifies the pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#description LtmPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#id LtmPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the load balancing method. The default is Round Robin.Possible values: round-robin, ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#load_balancing_mode LtmPool#load_balancing_mode}
  */
  readonly loadBalancingMode?: string;
  /**
  * Specifies whether the system load balances traffic according to the priority number assigned to the pool member,Default Value is 0(disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#minimum_active_members LtmPool#minimum_active_members}
  */
  readonly minimumActiveMembers?: number;
  /**
  * Specifies an association between a health or performance monitor and an entire pool, rather than with individual pool members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#monitors LtmPool#monitors}
  */
  readonly monitors?: string[];
  /**
  * Name of the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#name LtmPool#name}
  */
  readonly name: string;
  /**
  * Specifies the number of times the system tries to contact a new pool member after a passive failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#reselect_tries LtmPool#reselect_tries}
  */
  readonly reselectTries?: number;
  /**
  * Specifies how the system should respond when the target pool member becomes unavailable. The default is None, Possible values: [none, reset, reselect, drop]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#service_down_action LtmPool#service_down_action}
  */
  readonly serviceDownAction?: string;
  /**
  * Specifies the duration during which the system sends less traffic to a newly-enabled pool member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#slow_ramp_time LtmPool#slow_ramp_time}
  */
  readonly slowRampTime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool bigip_ltm_pool}
*/
export class LtmPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmPool to import
  * @param importFromId The id of the existing LtmPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_pool bigip_ltm_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmPoolConfig
  */
  public constructor(scope: Construct, id: string, config: LtmPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_pool',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowNat = config.allowNat;
    this._allowSnat = config.allowSnat;
    this._description = config.description;
    this._id = config.id;
    this._loadBalancingMode = config.loadBalancingMode;
    this._minimumActiveMembers = config.minimumActiveMembers;
    this._monitors = config.monitors;
    this._name = config.name;
    this._reselectTries = config.reselectTries;
    this._serviceDownAction = config.serviceDownAction;
    this._slowRampTime = config.slowRampTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_nat - computed: true, optional: true, required: false
  private _allowNat?: string; 
  public get allowNat() {
    return this.getStringAttribute('allow_nat');
  }
  public set allowNat(value: string) {
    this._allowNat = value;
  }
  public resetAllowNat() {
    this._allowNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNatInput() {
    return this._allowNat;
  }

  // allow_snat - computed: true, optional: true, required: false
  private _allowSnat?: string; 
  public get allowSnat() {
    return this.getStringAttribute('allow_snat');
  }
  public set allowSnat(value: string) {
    this._allowSnat = value;
  }
  public resetAllowSnat() {
    this._allowSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSnatInput() {
    return this._allowSnat;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // load_balancing_mode - computed: true, optional: true, required: false
  private _loadBalancingMode?: string; 
  public get loadBalancingMode() {
    return this.getStringAttribute('load_balancing_mode');
  }
  public set loadBalancingMode(value: string) {
    this._loadBalancingMode = value;
  }
  public resetLoadBalancingMode() {
    this._loadBalancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingModeInput() {
    return this._loadBalancingMode;
  }

  // minimum_active_members - computed: true, optional: true, required: false
  private _minimumActiveMembers?: number; 
  public get minimumActiveMembers() {
    return this.getNumberAttribute('minimum_active_members');
  }
  public set minimumActiveMembers(value: number) {
    this._minimumActiveMembers = value;
  }
  public resetMinimumActiveMembers() {
    this._minimumActiveMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumActiveMembersInput() {
    return this._minimumActiveMembers;
  }

  // monitors - computed: true, optional: true, required: false
  private _monitors?: string[]; 
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
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

  // reselect_tries - computed: true, optional: true, required: false
  private _reselectTries?: number; 
  public get reselectTries() {
    return this.getNumberAttribute('reselect_tries');
  }
  public set reselectTries(value: number) {
    this._reselectTries = value;
  }
  public resetReselectTries() {
    this._reselectTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselectTriesInput() {
    return this._reselectTries;
  }

  // service_down_action - computed: true, optional: true, required: false
  private _serviceDownAction?: string; 
  public get serviceDownAction() {
    return this.getStringAttribute('service_down_action');
  }
  public set serviceDownAction(value: string) {
    this._serviceDownAction = value;
  }
  public resetServiceDownAction() {
    this._serviceDownAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDownActionInput() {
    return this._serviceDownAction;
  }

  // slow_ramp_time - computed: true, optional: true, required: false
  private _slowRampTime?: number; 
  public get slowRampTime() {
    return this.getNumberAttribute('slow_ramp_time');
  }
  public set slowRampTime(value: number) {
    this._slowRampTime = value;
  }
  public resetSlowRampTime() {
    this._slowRampTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRampTimeInput() {
    return this._slowRampTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_nat: cdktf.stringToTerraform(this._allowNat),
      allow_snat: cdktf.stringToTerraform(this._allowSnat),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      load_balancing_mode: cdktf.stringToTerraform(this._loadBalancingMode),
      minimum_active_members: cdktf.numberToTerraform(this._minimumActiveMembers),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      name: cdktf.stringToTerraform(this._name),
      reselect_tries: cdktf.numberToTerraform(this._reselectTries),
      service_down_action: cdktf.stringToTerraform(this._serviceDownAction),
      slow_ramp_time: cdktf.numberToTerraform(this._slowRampTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_nat: {
        value: cdktf.stringToHclTerraform(this._allowNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_snat: {
        value: cdktf.stringToHclTerraform(this._allowSnat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      load_balancing_mode: {
        value: cdktf.stringToHclTerraform(this._loadBalancingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_active_members: {
        value: cdktf.numberToHclTerraform(this._minimumActiveMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reselect_tries: {
        value: cdktf.numberToHclTerraform(this._reselectTries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_down_action: {
        value: cdktf.stringToHclTerraform(this._serviceDownAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slow_ramp_time: {
        value: cdktf.numberToHclTerraform(this._slowRampTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
