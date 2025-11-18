// https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/data-sources/functionality
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFirehydrantFunctionalityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/data-sources/functionality#functionality_id DataFirehydrantFunctionality#functionality_id}
  */
  readonly functionalityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/data-sources/functionality#id DataFirehydrantFunctionality#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/data-sources/functionality firehydrant_functionality}
*/
export class DataFirehydrantFunctionality extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_functionality";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFirehydrantFunctionality resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFirehydrantFunctionality to import
  * @param importFromId The id of the existing DataFirehydrantFunctionality that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/data-sources/functionality#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFirehydrantFunctionality to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_functionality", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/data-sources/functionality firehydrant_functionality} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFirehydrantFunctionalityConfig
  */
  public constructor(scope: Construct, id: string, config: DataFirehydrantFunctionalityConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_functionality',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.14.11',
        providerVersionConstraint: '0.14.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionalityId = config.functionalityId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_add_responding_team - computed: true, optional: false, required: false
  public get autoAddRespondingTeam() {
    return this.getBooleanAttribute('auto_add_responding_team');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // functionality_id - computed: false, optional: false, required: true
  private _functionalityId?: string; 
  public get functionalityId() {
    return this.getStringAttribute('functionality_id');
  }
  public set functionalityId(value: string) {
    this._functionalityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalityIdInput() {
    return this._functionalityId;
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // service_ids - computed: true, optional: false, required: false
  public get serviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('service_ids'));
  }

  // team_ids - computed: true, optional: false, required: false
  public get teamIds() {
    return cdktf.Fn.tolist(this.getListAttribute('team_ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      functionality_id: cdktf.stringToTerraform(this._functionalityId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      functionality_id: {
        value: cdktf.stringToHclTerraform(this._functionalityId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
