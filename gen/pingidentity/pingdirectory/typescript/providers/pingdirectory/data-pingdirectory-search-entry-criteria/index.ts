// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_entry_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectorySearchEntryCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_entry_criteria#name DataPingdirectorySearchEntryCriteria#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_entry_criteria pingdirectory_search_entry_criteria}
*/
export class DataPingdirectorySearchEntryCriteria extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_search_entry_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectorySearchEntryCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectorySearchEntryCriteria to import
  * @param importFromId The id of the existing DataPingdirectorySearchEntryCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_entry_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectorySearchEntryCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_search_entry_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/search_entry_criteria pingdirectory_search_entry_criteria} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectorySearchEntryCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectorySearchEntryCriteriaConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_search_entry_criteria',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
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

  // all_included_entry_control - computed: true, optional: false, required: false
  public get allIncludedEntryControl() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_entry_control'));
  }

  // all_included_entry_filter - computed: true, optional: false, required: false
  public get allIncludedEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_entry_filter'));
  }

  // all_included_entry_group_dn - computed: true, optional: false, required: false
  public get allIncludedEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_entry_group_dn'));
  }

  // all_included_search_entry_criteria - computed: true, optional: false, required: false
  public get allIncludedSearchEntryCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_search_entry_criteria'));
  }

  // any_included_entry_control - computed: true, optional: false, required: false
  public get anyIncludedEntryControl() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_entry_control'));
  }

  // any_included_entry_filter - computed: true, optional: false, required: false
  public get anyIncludedEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_entry_filter'));
  }

  // any_included_entry_group_dn - computed: true, optional: false, required: false
  public get anyIncludedEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_entry_group_dn'));
  }

  // any_included_search_entry_criteria - computed: true, optional: false, required: false
  public get anyIncludedSearchEntryCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_search_entry_criteria'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // excluded_entry_base_dn - computed: true, optional: false, required: false
  public get excludedEntryBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_entry_base_dn'));
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

  // included_entry_base_dn - computed: true, optional: false, required: false
  public get includedEntryBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_entry_base_dn'));
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

  // none_included_entry_control - computed: true, optional: false, required: false
  public get noneIncludedEntryControl() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_entry_control'));
  }

  // none_included_entry_filter - computed: true, optional: false, required: false
  public get noneIncludedEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_entry_filter'));
  }

  // none_included_entry_group_dn - computed: true, optional: false, required: false
  public get noneIncludedEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_entry_group_dn'));
  }

  // none_included_search_entry_criteria - computed: true, optional: false, required: false
  public get noneIncludedSearchEntryCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_search_entry_criteria'));
  }

  // not_all_included_entry_control - computed: true, optional: false, required: false
  public get notAllIncludedEntryControl() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_entry_control'));
  }

  // not_all_included_entry_filter - computed: true, optional: false, required: false
  public get notAllIncludedEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_entry_filter'));
  }

  // not_all_included_entry_group_dn - computed: true, optional: false, required: false
  public get notAllIncludedEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_entry_group_dn'));
  }

  // not_all_included_search_entry_criteria - computed: true, optional: false, required: false
  public get notAllIncludedSearchEntryCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_search_entry_criteria'));
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
