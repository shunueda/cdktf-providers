// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PimInterfacePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#annotation PimInterfacePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#auth_key PimInterfacePolicy#auth_key}
  */
  readonly authKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#auth_type PimInterfacePolicy#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#control_state PimInterfacePolicy#control_state}
  */
  readonly controlState?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#description PimInterfacePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#designated_router_delay PimInterfacePolicy#designated_router_delay}
  */
  readonly designatedRouterDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#designated_router_priority PimInterfacePolicy#designated_router_priority}
  */
  readonly designatedRouterPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#hello_interval PimInterfacePolicy#hello_interval}
  */
  readonly helloInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#id PimInterfacePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#inbound_join_prune_filter_policy PimInterfacePolicy#inbound_join_prune_filter_policy}
  */
  readonly inboundJoinPruneFilterPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#join_prune_interval PimInterfacePolicy#join_prune_interval}
  */
  readonly joinPruneInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#name PimInterfacePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#name_alias PimInterfacePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#neighbor_filter_policy PimInterfacePolicy#neighbor_filter_policy}
  */
  readonly neighborFilterPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#outbound_join_prune_filter_policy PimInterfacePolicy#outbound_join_prune_filter_policy}
  */
  readonly outboundJoinPruneFilterPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#tenant_dn PimInterfacePolicy#tenant_dn}
  */
  readonly tenantDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy aci_pim_interface_policy}
*/
export class PimInterfacePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_pim_interface_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PimInterfacePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PimInterfacePolicy to import
  * @param importFromId The id of the existing PimInterfacePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PimInterfacePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_pim_interface_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/pim_interface_policy aci_pim_interface_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PimInterfacePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PimInterfacePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_pim_interface_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._authKey = config.authKey;
    this._authType = config.authType;
    this._controlState = config.controlState;
    this._description = config.description;
    this._designatedRouterDelay = config.designatedRouterDelay;
    this._designatedRouterPriority = config.designatedRouterPriority;
    this._helloInterval = config.helloInterval;
    this._id = config.id;
    this._inboundJoinPruneFilterPolicy = config.inboundJoinPruneFilterPolicy;
    this._joinPruneInterval = config.joinPruneInterval;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._neighborFilterPolicy = config.neighborFilterPolicy;
    this._outboundJoinPruneFilterPolicy = config.outboundJoinPruneFilterPolicy;
    this._tenantDn = config.tenantDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // control_state - computed: true, optional: true, required: false
  private _controlState?: string[]; 
  public get controlState() {
    return this.getListAttribute('control_state');
  }
  public set controlState(value: string[]) {
    this._controlState = value;
  }
  public resetControlState() {
    this._controlState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlStateInput() {
    return this._controlState;
  }

  // description - computed: true, optional: true, required: false
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

  // designated_router_delay - computed: true, optional: true, required: false
  private _designatedRouterDelay?: string; 
  public get designatedRouterDelay() {
    return this.getStringAttribute('designated_router_delay');
  }
  public set designatedRouterDelay(value: string) {
    this._designatedRouterDelay = value;
  }
  public resetDesignatedRouterDelay() {
    this._designatedRouterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designatedRouterDelayInput() {
    return this._designatedRouterDelay;
  }

  // designated_router_priority - computed: true, optional: true, required: false
  private _designatedRouterPriority?: string; 
  public get designatedRouterPriority() {
    return this.getStringAttribute('designated_router_priority');
  }
  public set designatedRouterPriority(value: string) {
    this._designatedRouterPriority = value;
  }
  public resetDesignatedRouterPriority() {
    this._designatedRouterPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designatedRouterPriorityInput() {
    return this._designatedRouterPriority;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: string; 
  public get helloInterval() {
    return this.getStringAttribute('hello_interval');
  }
  public set helloInterval(value: string) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
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

  // inbound_join_prune_filter_policy - computed: true, optional: true, required: false
  private _inboundJoinPruneFilterPolicy?: string; 
  public get inboundJoinPruneFilterPolicy() {
    return this.getStringAttribute('inbound_join_prune_filter_policy');
  }
  public set inboundJoinPruneFilterPolicy(value: string) {
    this._inboundJoinPruneFilterPolicy = value;
  }
  public resetInboundJoinPruneFilterPolicy() {
    this._inboundJoinPruneFilterPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundJoinPruneFilterPolicyInput() {
    return this._inboundJoinPruneFilterPolicy;
  }

  // join_prune_interval - computed: true, optional: true, required: false
  private _joinPruneInterval?: string; 
  public get joinPruneInterval() {
    return this.getStringAttribute('join_prune_interval');
  }
  public set joinPruneInterval(value: string) {
    this._joinPruneInterval = value;
  }
  public resetJoinPruneInterval() {
    this._joinPruneInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinPruneIntervalInput() {
    return this._joinPruneInterval;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // neighbor_filter_policy - computed: true, optional: true, required: false
  private _neighborFilterPolicy?: string; 
  public get neighborFilterPolicy() {
    return this.getStringAttribute('neighbor_filter_policy');
  }
  public set neighborFilterPolicy(value: string) {
    this._neighborFilterPolicy = value;
  }
  public resetNeighborFilterPolicy() {
    this._neighborFilterPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborFilterPolicyInput() {
    return this._neighborFilterPolicy;
  }

  // outbound_join_prune_filter_policy - computed: true, optional: true, required: false
  private _outboundJoinPruneFilterPolicy?: string; 
  public get outboundJoinPruneFilterPolicy() {
    return this.getStringAttribute('outbound_join_prune_filter_policy');
  }
  public set outboundJoinPruneFilterPolicy(value: string) {
    this._outboundJoinPruneFilterPolicy = value;
  }
  public resetOutboundJoinPruneFilterPolicy() {
    this._outboundJoinPruneFilterPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundJoinPruneFilterPolicyInput() {
    return this._outboundJoinPruneFilterPolicy;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      auth_key: cdktf.stringToTerraform(this._authKey),
      auth_type: cdktf.stringToTerraform(this._authType),
      control_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controlState),
      description: cdktf.stringToTerraform(this._description),
      designated_router_delay: cdktf.stringToTerraform(this._designatedRouterDelay),
      designated_router_priority: cdktf.stringToTerraform(this._designatedRouterPriority),
      hello_interval: cdktf.stringToTerraform(this._helloInterval),
      id: cdktf.stringToTerraform(this._id),
      inbound_join_prune_filter_policy: cdktf.stringToTerraform(this._inboundJoinPruneFilterPolicy),
      join_prune_interval: cdktf.stringToTerraform(this._joinPruneInterval),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      neighbor_filter_policy: cdktf.stringToTerraform(this._neighborFilterPolicy),
      outbound_join_prune_filter_policy: cdktf.stringToTerraform(this._outboundJoinPruneFilterPolicy),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controlState),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      designated_router_delay: {
        value: cdktf.stringToHclTerraform(this._designatedRouterDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      designated_router_priority: {
        value: cdktf.stringToHclTerraform(this._designatedRouterPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_interval: {
        value: cdktf.stringToHclTerraform(this._helloInterval),
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
      inbound_join_prune_filter_policy: {
        value: cdktf.stringToHclTerraform(this._inboundJoinPruneFilterPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      join_prune_interval: {
        value: cdktf.stringToHclTerraform(this._joinPruneInterval),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_filter_policy: {
        value: cdktf.stringToHclTerraform(this._neighborFilterPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_join_prune_filter_policy: {
        value: cdktf.stringToHclTerraform(this._outboundJoinPruneFilterPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
