// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of Provider Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway#description ProviderGateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway#id ProviderGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of supervisor IDs used in this Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway#ip_space_ids ProviderGateway#ip_space_ids}
  */
  readonly ipSpaceIds: string[];
  /**
  * Name of Provider Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway#name ProviderGateway#name}
  */
  readonly name: string;
  /**
  * Parent Region of Provider Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway#region_id ProviderGateway#region_id}
  */
  readonly regionId: string;
  /**
  * Parent Tier-0 Gateway of Provider Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway#tier0_gateway_id ProviderGateway#tier0_gateway_id}
  */
  readonly tier0GatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway vcfa_provider_gateway}
*/
export class ProviderGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_provider_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderGateway to import
  * @param importFromId The id of the existing ProviderGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_provider_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/provider_gateway vcfa_provider_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_provider_gateway',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._ipSpaceIds = config.ipSpaceIds;
    this._name = config.name;
    this._regionId = config.regionId;
    this._tier0GatewayId = config.tier0GatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_space_ids - computed: false, optional: false, required: true
  private _ipSpaceIds?: string[]; 
  public get ipSpaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_space_ids'));
  }
  public set ipSpaceIds(value: string[]) {
    this._ipSpaceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceIdsInput() {
    return this._ipSpaceIds;
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

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tier0_gateway_id - computed: false, optional: false, required: true
  private _tier0GatewayId?: string; 
  public get tier0GatewayId() {
    return this.getStringAttribute('tier0_gateway_id');
  }
  public set tier0GatewayId(value: string) {
    this._tier0GatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tier0GatewayIdInput() {
    return this._tier0GatewayId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_space_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSpaceIds),
      name: cdktf.stringToTerraform(this._name),
      region_id: cdktf.stringToTerraform(this._regionId),
      tier0_gateway_id: cdktf.stringToTerraform(this._tier0GatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ip_space_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipSpaceIds),
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
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier0_gateway_id: {
        value: cdktf.stringToHclTerraform(this._tier0GatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
