// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworkers_resource_tier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiEdgeworkersResourceTierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of a contract
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworkers_resource_tier#contract_id DataAkamaiEdgeworkersResourceTier#contract_id}
  */
  readonly contractId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworkers_resource_tier#id DataAkamaiEdgeworkersResourceTier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the resource tier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworkers_resource_tier#resource_tier_name DataAkamaiEdgeworkersResourceTier#resource_tier_name}
  */
  readonly resourceTierName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworkers_resource_tier akamai_edgeworkers_resource_tier}
*/
export class DataAkamaiEdgeworkersResourceTier extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_edgeworkers_resource_tier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiEdgeworkersResourceTier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiEdgeworkersResourceTier to import
  * @param importFromId The id of the existing DataAkamaiEdgeworkersResourceTier that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworkers_resource_tier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiEdgeworkersResourceTier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_edgeworkers_resource_tier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/edgeworkers_resource_tier akamai_edgeworkers_resource_tier} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiEdgeworkersResourceTierConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiEdgeworkersResourceTierConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_edgeworkers_resource_tier',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractId = config.contractId;
    this._id = config.id;
    this._resourceTierName = config.resourceTierName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
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

  // resource_tier_id - computed: true, optional: false, required: false
  public get resourceTierId() {
    return this.getNumberAttribute('resource_tier_id');
  }

  // resource_tier_name - computed: false, optional: false, required: true
  private _resourceTierName?: string; 
  public get resourceTierName() {
    return this.getStringAttribute('resource_tier_name');
  }
  public set resourceTierName(value: string) {
    this._resourceTierName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTierNameInput() {
    return this._resourceTierName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      id: cdktf.stringToTerraform(this._id),
      resource_tier_name: cdktf.stringToTerraform(this._resourceTierName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
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
      resource_tier_name: {
        value: cdktf.stringToHclTerraform(this._resourceTierName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
