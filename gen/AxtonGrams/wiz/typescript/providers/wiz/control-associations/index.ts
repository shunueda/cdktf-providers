// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControlAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of control IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control_associations#control_ids ControlAssociations#control_ids}
  */
  readonly controlIds: string[];
  /**
  * Details of the association. This information is not used to manage resources but can serve as notes or documentation for the associations.
  *     - Defaults to `undefined`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control_associations#details ControlAssociations#details}
  */
  readonly details?: string;
  /**
  * List of security sub-category IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control_associations#security_sub_category_ids ControlAssociations#security_sub_category_ids}
  */
  readonly securitySubCategoryIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control_associations wiz_control_associations}
*/
export class ControlAssociations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_control_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControlAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControlAssociations to import
  * @param importFromId The id of the existing ControlAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControlAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_control_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/control_associations wiz_control_associations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControlAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: ControlAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_control_associations',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlIds = config.controlIds;
    this._details = config.details;
    this._securitySubCategoryIds = config.securitySubCategoryIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_ids - computed: false, optional: false, required: true
  private _controlIds?: string[]; 
  public get controlIds() {
    return this.getListAttribute('control_ids');
  }
  public set controlIds(value: string[]) {
    this._controlIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlIdsInput() {
    return this._controlIds;
  }

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_sub_category_ids - computed: false, optional: false, required: true
  private _securitySubCategoryIds?: string[]; 
  public get securitySubCategoryIds() {
    return this.getListAttribute('security_sub_category_ids');
  }
  public set securitySubCategoryIds(value: string[]) {
    this._securitySubCategoryIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySubCategoryIdsInput() {
    return this._securitySubCategoryIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._controlIds),
      details: cdktf.stringToTerraform(this._details),
      security_sub_category_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securitySubCategoryIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._controlIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      details: {
        value: cdktf.stringToHclTerraform(this._details),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_sub_category_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securitySubCategoryIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
