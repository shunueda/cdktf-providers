// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/extranet_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalystcenterExtranetPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the extranet policy to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/extranet_policy#extranet_policy_name DataCatalystcenterExtranetPolicy#extranet_policy_name}
  */
  readonly extranetPolicyName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/extranet_policy catalystcenter_extranet_policy}
*/
export class DataCatalystcenterExtranetPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_extranet_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCatalystcenterExtranetPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalystcenterExtranetPolicy to import
  * @param importFromId The id of the existing DataCatalystcenterExtranetPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/extranet_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalystcenterExtranetPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_extranet_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.6/docs/data-sources/extranet_policy catalystcenter_extranet_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalystcenterExtranetPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalystcenterExtranetPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_extranet_policy',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extranetPolicyName = config.extranetPolicyName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extranet_policy_name - computed: false, optional: false, required: true
  private _extranetPolicyName?: string; 
  public get extranetPolicyName() {
    return this.getStringAttribute('extranet_policy_name');
  }
  public set extranetPolicyName(value: string) {
    this._extranetPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extranetPolicyNameInput() {
    return this._extranetPolicyName;
  }

  // fabric_ids - computed: true, optional: false, required: false
  public get fabricIds() {
    return cdktf.Fn.tolist(this.getListAttribute('fabric_ids'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provider_virtual_network_name - computed: true, optional: false, required: false
  public get providerVirtualNetworkName() {
    return this.getStringAttribute('provider_virtual_network_name');
  }

  // subscriber_virtual_network_names - computed: true, optional: false, required: false
  public get subscriberVirtualNetworkNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subscriber_virtual_network_names'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extranet_policy_name: cdktf.stringToTerraform(this._extranetPolicyName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extranet_policy_name: {
        value: cdktf.stringToHclTerraform(this._extranetPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
