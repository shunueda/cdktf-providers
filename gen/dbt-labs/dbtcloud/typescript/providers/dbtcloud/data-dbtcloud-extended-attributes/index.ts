// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/extended_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudExtendedAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Extended attributes ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/extended_attributes#extended_attributes_id DataDbtcloudExtendedAttributes#extended_attributes_id}
  */
  readonly extendedAttributesId: number;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/extended_attributes#project_id DataDbtcloudExtendedAttributes#project_id}
  */
  readonly projectId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/extended_attributes dbtcloud_extended_attributes}
*/
export class DataDbtcloudExtendedAttributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_extended_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudExtendedAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudExtendedAttributes to import
  * @param importFromId The id of the existing DataDbtcloudExtendedAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/extended_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudExtendedAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_extended_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/data-sources/extended_attributes dbtcloud_extended_attributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudExtendedAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudExtendedAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_extended_attributes',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extendedAttributesId = config.extendedAttributesId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extended_attributes - computed: true, optional: false, required: false
  public get extendedAttributes() {
    return this.getStringAttribute('extended_attributes');
  }

  // extended_attributes_id - computed: false, optional: false, required: true
  private _extendedAttributesId?: number; 
  public get extendedAttributesId() {
    return this.getNumberAttribute('extended_attributes_id');
  }
  public set extendedAttributesId(value: number) {
    this._extendedAttributesId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesIdInput() {
    return this._extendedAttributesId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getNumberAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extended_attributes_id: cdktf.numberToTerraform(this._extendedAttributesId),
      project_id: cdktf.numberToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extended_attributes_id: {
        value: cdktf.numberToHclTerraform(this._extendedAttributesId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
