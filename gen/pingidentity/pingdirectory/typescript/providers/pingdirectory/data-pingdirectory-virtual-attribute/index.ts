// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/virtual_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryVirtualAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/virtual_attribute#name DataPingdirectoryVirtualAttribute#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/virtual_attribute pingdirectory_virtual_attribute}
*/
export class DataPingdirectoryVirtualAttribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_virtual_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryVirtualAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryVirtualAttribute to import
  * @param importFromId The id of the existing DataPingdirectoryVirtualAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/virtual_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryVirtualAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_virtual_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/virtual_attribute pingdirectory_virtual_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryVirtualAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryVirtualAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_virtual_attribute',
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

  // allow_index_conflicts - computed: true, optional: false, required: false
  public get allowIndexConflicts() {
    return this.getBooleanAttribute('allow_index_conflicts');
  }

  // allow_retrieving_membership - computed: true, optional: false, required: false
  public get allowRetrievingMembership() {
    return this.getBooleanAttribute('allow_retrieving_membership');
  }

  // attribute_type - computed: true, optional: false, required: false
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('base_dn'));
  }

  // bypass_access_control_for_searches - computed: true, optional: false, required: false
  public get bypassAccessControlForSearches() {
    return this.getBooleanAttribute('bypass_access_control_for_searches');
  }

  // client_connection_policy - computed: true, optional: false, required: false
  public get clientConnectionPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('client_connection_policy'));
  }

  // conflict_behavior - computed: true, optional: false, required: false
  public get conflictBehavior() {
    return this.getStringAttribute('conflict_behavior');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direct_memberships_only - computed: true, optional: false, required: false
  public get directMembershipsOnly() {
    return this.getBooleanAttribute('direct_memberships_only');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude_operational_attributes - computed: true, optional: false, required: false
  public get excludeOperationalAttributes() {
    return this.getBooleanAttribute('exclude_operational_attributes');
  }

  // excluded_attribute - computed: true, optional: false, required: false
  public get excludedAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_attribute'));
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return cdktf.Fn.tolist(this.getListAttribute('filter'));
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('group_dn'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_milliseconds - computed: true, optional: false, required: false
  public get includeMilliseconds() {
    return this.getBooleanAttribute('include_milliseconds');
  }

  // included_group_filter - computed: true, optional: false, required: false
  public get includedGroupFilter() {
    return this.getStringAttribute('included_group_filter');
  }

  // join_attribute - computed: true, optional: false, required: false
  public get joinAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('join_attribute'));
  }

  // join_base_dn_type - computed: true, optional: false, required: false
  public get joinBaseDnType() {
    return this.getStringAttribute('join_base_dn_type');
  }

  // join_custom_base_dn - computed: true, optional: false, required: false
  public get joinCustomBaseDn() {
    return this.getStringAttribute('join_custom_base_dn');
  }

  // join_dn_attribute - computed: true, optional: false, required: false
  public get joinDnAttribute() {
    return this.getStringAttribute('join_dn_attribute');
  }

  // join_filter - computed: true, optional: false, required: false
  public get joinFilter() {
    return this.getStringAttribute('join_filter');
  }

  // join_match_all - computed: true, optional: false, required: false
  public get joinMatchAll() {
    return this.getBooleanAttribute('join_match_all');
  }

  // join_scope - computed: true, optional: false, required: false
  public get joinScope() {
    return this.getStringAttribute('join_scope');
  }

  // join_size_limit - computed: true, optional: false, required: false
  public get joinSizeLimit() {
    return this.getNumberAttribute('join_size_limit');
  }

  // join_source_attribute - computed: true, optional: false, required: false
  public get joinSourceAttribute() {
    return this.getStringAttribute('join_source_attribute');
  }

  // join_target_attribute - computed: true, optional: false, required: false
  public get joinTargetAttribute() {
    return this.getStringAttribute('join_target_attribute');
  }

  // multiple_virtual_attribute_evaluation_order_index - computed: true, optional: false, required: false
  public get multipleVirtualAttributeEvaluationOrderIndex() {
    return this.getNumberAttribute('multiple_virtual_attribute_evaluation_order_index');
  }

  // multiple_virtual_attribute_merge_behavior - computed: true, optional: false, required: false
  public get multipleVirtualAttributeMergeBehavior() {
    return this.getStringAttribute('multiple_virtual_attribute_merge_behavior');
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

  // reference_search_base_dn - computed: true, optional: false, required: false
  public get referenceSearchBaseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('reference_search_base_dn'));
  }

  // referenced_by_attribute - computed: true, optional: false, required: false
  public get referencedByAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('referenced_by_attribute'));
  }

  // require_explicit_request_by_name - computed: true, optional: false, required: false
  public get requireExplicitRequestByName() {
    return this.getBooleanAttribute('require_explicit_request_by_name');
  }

  // return_utc_time - computed: true, optional: false, required: false
  public get returnUtcTime() {
    return this.getBooleanAttribute('return_utc_time');
  }

  // rewrite_search_filters - computed: true, optional: false, required: false
  public get rewriteSearchFilters() {
    return this.getStringAttribute('rewrite_search_filters');
  }

  // script_argument - computed: true, optional: false, required: false
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }

  // script_class - computed: true, optional: false, required: false
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }

  // sequence_number_attribute - computed: true, optional: false, required: false
  public get sequenceNumberAttribute() {
    return this.getStringAttribute('sequence_number_attribute');
  }

  // source_attribute - computed: true, optional: false, required: false
  public get sourceAttribute() {
    return this.getStringAttribute('source_attribute');
  }

  // source_entry_dn_attribute - computed: true, optional: false, required: false
  public get sourceEntryDnAttribute() {
    return this.getStringAttribute('source_entry_dn_attribute');
  }

  // source_entry_dn_map - computed: true, optional: false, required: false
  public get sourceEntryDnMap() {
    return this.getStringAttribute('source_entry_dn_map');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }

  // value_pattern - computed: true, optional: false, required: false
  public get valuePattern() {
    return cdktf.Fn.tolist(this.getListAttribute('value_pattern'));
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
