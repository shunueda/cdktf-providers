// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_bgp_peer_prefix_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoTenantPoliciesBgpPeerPrefixPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_bgp_peer_prefix_policy#id DataMsoTenantPoliciesBgpPeerPrefixPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the BGP Peer Prefix Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_bgp_peer_prefix_policy#name DataMsoTenantPoliciesBgpPeerPrefixPolicy#name}
  */
  readonly name: string;
  /**
  * The ID of the tenant policy template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_bgp_peer_prefix_policy#template_id DataMsoTenantPoliciesBgpPeerPrefixPolicy#template_id}
  */
  readonly templateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_bgp_peer_prefix_policy mso_tenant_policies_bgp_peer_prefix_policy}
*/
export class DataMsoTenantPoliciesBgpPeerPrefixPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_tenant_policies_bgp_peer_prefix_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoTenantPoliciesBgpPeerPrefixPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoTenantPoliciesBgpPeerPrefixPolicy to import
  * @param importFromId The id of the existing DataMsoTenantPoliciesBgpPeerPrefixPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_bgp_peer_prefix_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoTenantPoliciesBgpPeerPrefixPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_tenant_policies_bgp_peer_prefix_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/tenant_policies_bgp_peer_prefix_policy mso_tenant_policies_bgp_peer_prefix_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoTenantPoliciesBgpPeerPrefixPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoTenantPoliciesBgpPeerPrefixPolicyConfig) {
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
    this._id = config.id;
    this._name = config.name;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // max_number_of_prefixes - computed: true, optional: false, required: false
  public get maxNumberOfPrefixes() {
    return this.getNumberAttribute('max_number_of_prefixes');
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

  // restart_time - computed: true, optional: false, required: false
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
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

  // threshold_percentage - computed: true, optional: false, required: false
  public get thresholdPercentage() {
    return this.getNumberAttribute('threshold_percentage');
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_id: cdktf.stringToTerraform(this._templateId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
