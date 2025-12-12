// https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/data-sources/form_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyFormSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/data-sources/form_set#created_at DataRootlyFormSet#created_at}
  */
  readonly createdAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/data-sources/form_set#is_default DataRootlyFormSet#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/data-sources/form_set#slug DataRootlyFormSet#slug}
  */
  readonly slug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/data-sources/form_set rootly_form_set}
*/
export class DataRootlyFormSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyFormSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyFormSet to import
  * @param importFromId The id of the existing DataRootlyFormSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/data-sources/form_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyFormSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/data-sources/form_set rootly_form_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyFormSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyFormSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_form_set',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._isDefault = config.isDefault;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: { [key: string]: string }; 
  public get createdAt() {
    return this.getStringMapAttribute('created_at');
  }
  public set createdAt(value: { [key: string]: string }) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdAt),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createdAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
