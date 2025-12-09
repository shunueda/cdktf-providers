// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/extranet_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtranetPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the extranet policy to be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/extranet_policy#extranet_policy_name ExtranetPolicy#extranet_policy_name}
  */
  readonly extranetPolicyName: string;
  /**
  * IDs of the fabric sites to be associated with this extranet policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/extranet_policy#fabric_ids ExtranetPolicy#fabric_ids}
  */
  readonly fabricIds?: string[];
  /**
  * Name of the existing provider virtual network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/extranet_policy#provider_virtual_network_name ExtranetPolicy#provider_virtual_network_name}
  */
  readonly providerVirtualNetworkName: string;
  /**
  * Name of the subscriber virtual networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/extranet_policy#subscriber_virtual_network_names ExtranetPolicy#subscriber_virtual_network_names}
  */
  readonly subscriberVirtualNetworkNames: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/extranet_policy catalystcenter_extranet_policy}
*/
export class ExtranetPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_extranet_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtranetPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtranetPolicy to import
  * @param importFromId The id of the existing ExtranetPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/extranet_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtranetPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_extranet_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/extranet_policy catalystcenter_extranet_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtranetPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ExtranetPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_extranet_policy',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
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
    this._fabricIds = config.fabricIds;
    this._providerVirtualNetworkName = config.providerVirtualNetworkName;
    this._subscriberVirtualNetworkNames = config.subscriberVirtualNetworkNames;
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

  // fabric_ids - computed: false, optional: true, required: false
  private _fabricIds?: string[]; 
  public get fabricIds() {
    return cdktf.Fn.tolist(this.getListAttribute('fabric_ids'));
  }
  public set fabricIds(value: string[]) {
    this._fabricIds = value;
  }
  public resetFabricIds() {
    this._fabricIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdsInput() {
    return this._fabricIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provider_virtual_network_name - computed: false, optional: false, required: true
  private _providerVirtualNetworkName?: string; 
  public get providerVirtualNetworkName() {
    return this.getStringAttribute('provider_virtual_network_name');
  }
  public set providerVirtualNetworkName(value: string) {
    this._providerVirtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVirtualNetworkNameInput() {
    return this._providerVirtualNetworkName;
  }

  // subscriber_virtual_network_names - computed: false, optional: false, required: true
  private _subscriberVirtualNetworkNames?: string[]; 
  public get subscriberVirtualNetworkNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subscriber_virtual_network_names'));
  }
  public set subscriberVirtualNetworkNames(value: string[]) {
    this._subscriberVirtualNetworkNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberVirtualNetworkNamesInput() {
    return this._subscriberVirtualNetworkNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extranet_policy_name: cdktf.stringToTerraform(this._extranetPolicyName),
      fabric_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fabricIds),
      provider_virtual_network_name: cdktf.stringToTerraform(this._providerVirtualNetworkName),
      subscriber_virtual_network_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subscriberVirtualNetworkNames),
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
      fabric_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fabricIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      provider_virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._providerVirtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_virtual_network_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subscriberVirtualNetworkNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
