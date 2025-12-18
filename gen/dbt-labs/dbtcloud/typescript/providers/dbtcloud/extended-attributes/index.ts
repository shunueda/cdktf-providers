// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/extended_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtendedAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * A JSON string listing the extended attributes mapping. The keys are the connections attributes available in the `profiles.yml` for a given adapter. Any fields entered will override connection details or credentials set on the environment or project. To avoid incorrect Terraform diffs, it is recommended to create this string using `jsonencode` in your Terraform code. (see example)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/extended_attributes#extended_attributes ExtendedAttributes#extended_attributes}
  */
  readonly extendedAttributes: string;
  /**
  * Project ID to create the extended attributes in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/extended_attributes#project_id ExtendedAttributes#project_id}
  */
  readonly projectId: number;
  /**
  * The state of the extended attributes (1 = active, 2 = inactive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/extended_attributes#state ExtendedAttributes#state}
  */
  readonly state?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/extended_attributes dbtcloud_extended_attributes}
*/
export class ExtendedAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_extended_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtendedAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtendedAttributes to import
  * @param importFromId The id of the existing ExtendedAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/extended_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtendedAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_extended_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/extended_attributes dbtcloud_extended_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtendedAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: ExtendedAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_extended_attributes',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extendedAttributes = config.extendedAttributes;
    this._projectId = config.projectId;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extended_attributes - computed: false, optional: false, required: true
  private _extendedAttributes?: string; 
  public get extendedAttributes() {
    return this.getStringAttribute('extended_attributes');
  }
  public set extendedAttributes(value: string) {
    this._extendedAttributes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes;
  }

  // extended_attributes_id - computed: true, optional: false, required: false
  public get extendedAttributesId() {
    return this.getNumberAttribute('extended_attributes_id');
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

  // state - computed: true, optional: true, required: false
  private _state?: number; 
  public get state() {
    return this.getNumberAttribute('state');
  }
  public set state(value: number) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extended_attributes: cdktf.stringToTerraform(this._extendedAttributes),
      project_id: cdktf.numberToTerraform(this._projectId),
      state: cdktf.numberToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extended_attributes: {
        value: cdktf.stringToHclTerraform(this._extendedAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.numberToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
