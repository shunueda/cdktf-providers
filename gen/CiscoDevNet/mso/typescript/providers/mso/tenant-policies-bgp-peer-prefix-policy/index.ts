// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantPoliciesBgpPeerPrefixPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action of the BGP Peer Prefix Policy. Valid values are 'log', 'reject', 'restart', 'shutdown'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy#action TenantPoliciesBgpPeerPrefixPolicy#action}
  */
  readonly action?: string;
  /**
  * The description of the BGP Peer Prefix Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy#description TenantPoliciesBgpPeerPrefixPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy#id TenantPoliciesBgpPeerPrefixPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of prefixes for the BGP Peer Prefix Policy. Value must be between 1 and 300000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy#max_number_of_prefixes TenantPoliciesBgpPeerPrefixPolicy#max_number_of_prefixes}
  */
  readonly maxNumberOfPrefixes?: number;
  /**
  * The name of the BGP Peer Prefix Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy#name TenantPoliciesBgpPeerPrefixPolicy#name}
  */
  readonly name: string;
  /**
  * The restart time of the BGP Peer Prefix Policy in seconds. Value must be between 1 and 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy#restart_time TenantPoliciesBgpPeerPrefixPolicy#restart_time}
  */
  readonly restartTime?: number;
  /**
  * The ID of the tenant policy template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy#template_id TenantPoliciesBgpPeerPrefixPolicy#template_id}
  */
  readonly templateId: string;
  /**
  * The threshold percentage of the BGP Peer Prefix Policy. Value must be between 1 and 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy#threshold_percentage TenantPoliciesBgpPeerPrefixPolicy#threshold_percentage}
  */
  readonly thresholdPercentage?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy mso_tenant_policies_bgp_peer_prefix_policy}
*/
export class TenantPoliciesBgpPeerPrefixPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_tenant_policies_bgp_peer_prefix_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantPoliciesBgpPeerPrefixPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantPoliciesBgpPeerPrefixPolicy to import
  * @param importFromId The id of the existing TenantPoliciesBgpPeerPrefixPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantPoliciesBgpPeerPrefixPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_tenant_policies_bgp_peer_prefix_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant_policies_bgp_peer_prefix_policy mso_tenant_policies_bgp_peer_prefix_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantPoliciesBgpPeerPrefixPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TenantPoliciesBgpPeerPrefixPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_tenant_policies_bgp_peer_prefix_policy',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._id = config.id;
    this._maxNumberOfPrefixes = config.maxNumberOfPrefixes;
    this._name = config.name;
    this._restartTime = config.restartTime;
    this._templateId = config.templateId;
    this._thresholdPercentage = config.thresholdPercentage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // max_number_of_prefixes - computed: true, optional: true, required: false
  private _maxNumberOfPrefixes?: number; 
  public get maxNumberOfPrefixes() {
    return this.getNumberAttribute('max_number_of_prefixes');
  }
  public set maxNumberOfPrefixes(value: number) {
    this._maxNumberOfPrefixes = value;
  }
  public resetMaxNumberOfPrefixes() {
    this._maxNumberOfPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfPrefixesInput() {
    return this._maxNumberOfPrefixes;
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

  // restart_time - computed: true, optional: true, required: false
  private _restartTime?: number; 
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
  }
  public set restartTime(value: number) {
    this._restartTime = value;
  }
  public resetRestartTime() {
    this._restartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartTimeInput() {
    return this._restartTime;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // threshold_percentage - computed: true, optional: true, required: false
  private _thresholdPercentage?: number; 
  public get thresholdPercentage() {
    return this.getNumberAttribute('threshold_percentage');
  }
  public set thresholdPercentage(value: number) {
    this._thresholdPercentage = value;
  }
  public resetThresholdPercentage() {
    this._thresholdPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentageInput() {
    return this._thresholdPercentage;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      max_number_of_prefixes: cdktf.numberToTerraform(this._maxNumberOfPrefixes),
      name: cdktf.stringToTerraform(this._name),
      restart_time: cdktf.numberToTerraform(this._restartTime),
      template_id: cdktf.stringToTerraform(this._templateId),
      threshold_percentage: cdktf.numberToTerraform(this._thresholdPercentage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      max_number_of_prefixes: {
        value: cdktf.numberToHclTerraform(this._maxNumberOfPrefixes),
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
      restart_time: {
        value: cdktf.numberToHclTerraform(this._restartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_percentage: {
        value: cdktf.numberToHclTerraform(this._thresholdPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
