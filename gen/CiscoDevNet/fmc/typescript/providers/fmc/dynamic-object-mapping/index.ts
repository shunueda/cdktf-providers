// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/dynamic_object_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicObjectMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of dynamic object to be used for mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/dynamic_object_mapping#dynamic_object_id DynamicObjectMapping#dynamic_object_id}
  */
  readonly dynamicObjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/dynamic_object_mapping#id DynamicObjectMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of IPs to be mapped to dynamic object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/dynamic_object_mapping#mappings DynamicObjectMapping#mappings}
  */
  readonly mappings: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/dynamic_object_mapping fmc_dynamic_object_mapping}
*/
export class DynamicObjectMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_dynamic_object_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicObjectMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicObjectMapping to import
  * @param importFromId The id of the existing DynamicObjectMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/dynamic_object_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicObjectMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_dynamic_object_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/dynamic_object_mapping fmc_dynamic_object_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicObjectMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicObjectMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_dynamic_object_mapping',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicObjectId = config.dynamicObjectId;
    this._id = config.id;
    this._mappings = config.mappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_object_id - computed: false, optional: false, required: true
  private _dynamicObjectId?: string; 
  public get dynamicObjectId() {
    return this.getStringAttribute('dynamic_object_id');
  }
  public set dynamicObjectId(value: string) {
    this._dynamicObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicObjectIdInput() {
    return this._dynamicObjectId;
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

  // mappings - computed: false, optional: false, required: true
  private _mappings?: string[]; 
  public get mappings() {
    return this.getListAttribute('mappings');
  }
  public set mappings(value: string[]) {
    this._mappings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_object_id: cdktf.stringToTerraform(this._dynamicObjectId),
      id: cdktf.stringToTerraform(this._id),
      mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mappings),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_object_id: {
        value: cdktf.stringToHclTerraform(this._dynamicObjectId),
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
      mappings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mappings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
