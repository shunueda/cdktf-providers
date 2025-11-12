// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_reference_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectorySearchReferenceCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_reference_criteria#name DataPingdirectorySearchReferenceCriteria#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_reference_criteria pingdirectory_search_reference_criteria}
*/
export class DataPingdirectorySearchReferenceCriteria extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_search_reference_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectorySearchReferenceCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectorySearchReferenceCriteria to import
  * @param importFromId The id of the existing DataPingdirectorySearchReferenceCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_reference_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectorySearchReferenceCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_search_reference_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_reference_criteria pingdirectory_search_reference_criteria} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectorySearchReferenceCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectorySearchReferenceCriteriaConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_search_reference_criteria',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_included_reference_control - computed: true, optional: false, required: false
  public get allIncludedReferenceControl() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_reference_control'));
  }

  // all_included_search_reference_criteria - computed: true, optional: false, required: false
  public get allIncludedSearchReferenceCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_search_reference_criteria'));
  }

  // any_included_reference_control - computed: true, optional: false, required: false
  public get anyIncludedReferenceControl() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_reference_control'));
  }

  // any_included_search_reference_criteria - computed: true, optional: false, required: false
  public get anyIncludedSearchReferenceCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_search_reference_criteria'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // none_included_reference_control - computed: true, optional: false, required: false
  public get noneIncludedReferenceControl() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_reference_control'));
  }

  // none_included_search_reference_criteria - computed: true, optional: false, required: false
  public get noneIncludedSearchReferenceCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_search_reference_criteria'));
  }

  // not_all_included_reference_control - computed: true, optional: false, required: false
  public get notAllIncludedReferenceControl() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_reference_control'));
  }

  // not_all_included_search_reference_criteria - computed: true, optional: false, required: false
  public get notAllIncludedSearchReferenceCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_search_reference_criteria'));
  }

  // request_criteria - computed: true, optional: false, required: false
  public get requestCriteria() {
    return this.getStringAttribute('request_criteria');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
