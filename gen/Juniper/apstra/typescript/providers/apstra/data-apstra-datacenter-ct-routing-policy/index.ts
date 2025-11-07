// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterCtRoutingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Primitive name displayed in the web UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_policy#name DataApstraDatacenterCtRoutingPolicy#name}
  */
  readonly name?: string;
  /**
  * Apstra Object ID of Routing Policy to be attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_policy#routing_policy_id DataApstraDatacenterCtRoutingPolicy#routing_policy_id}
  */
  readonly routingPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_policy apstra_datacenter_ct_routing_policy}
*/
export class DataApstraDatacenterCtRoutingPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_ct_routing_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterCtRoutingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterCtRoutingPolicy to import
  * @param importFromId The id of the existing DataApstraDatacenterCtRoutingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterCtRoutingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_ct_routing_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/datacenter_ct_routing_policy apstra_datacenter_ct_routing_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterCtRoutingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterCtRoutingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_ct_routing_policy',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._routingPolicyId = config.routingPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: true, required: false
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

  // primitive - computed: true, optional: false, required: false
  public get primitive() {
    return this.getStringAttribute('primitive');
  }

  // routing_policy_id - computed: false, optional: false, required: true
  private _routingPolicyId?: string; 
  public get routingPolicyId() {
    return this.getStringAttribute('routing_policy_id');
  }
  public set routingPolicyId(value: string) {
    this._routingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyIdInput() {
    return this._routingPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      routing_policy_id: cdktf.stringToTerraform(this._routingPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_policy_id: {
        value: cdktf.stringToHclTerraform(this._routingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
