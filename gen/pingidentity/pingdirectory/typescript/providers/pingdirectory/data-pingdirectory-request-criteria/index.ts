// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/request_criteria
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryRequestCriteriaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/request_criteria#name DataPingdirectoryRequestCriteria#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/request_criteria pingdirectory_request_criteria}
*/
export class DataPingdirectoryRequestCriteria extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_request_criteria";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryRequestCriteria resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryRequestCriteria to import
  * @param importFromId The id of the existing DataPingdirectoryRequestCriteria that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/request_criteria#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryRequestCriteria to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_request_criteria", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/request_criteria pingdirectory_request_criteria} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryRequestCriteriaConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryRequestCriteriaConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_request_criteria',
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

  // all_included_request_control - computed: true, optional: false, required: false
  public get allIncludedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_request_control'));
  }

  // all_included_request_criteria - computed: true, optional: false, required: false
  public get allIncludedRequestCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_request_criteria'));
  }

  // all_included_target_entry_filter - computed: true, optional: false, required: false
  public get allIncludedTargetEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_target_entry_filter'));
  }

  // all_included_target_entry_group_dn - computed: true, optional: false, required: false
  public get allIncludedTargetEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('all_included_target_entry_group_dn'));
  }

  // any_included_request_control - computed: true, optional: false, required: false
  public get anyIncludedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_request_control'));
  }

  // any_included_request_criteria - computed: true, optional: false, required: false
  public get anyIncludedRequestCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_request_criteria'));
  }

  // any_included_target_entry_filter - computed: true, optional: false, required: false
  public get anyIncludedTargetEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_target_entry_filter'));
  }

  // any_included_target_entry_group_dn - computed: true, optional: false, required: false
  public get anyIncludedTargetEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('any_included_target_entry_group_dn'));
  }

  // connection_criteria - computed: true, optional: false, required: false
  public get connectionCriteria() {
    return this.getStringAttribute('connection_criteria');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // excluded_application_name - computed: true, optional: false, required: false
  public get excludedApplicationName() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_application_name'));
  }

  // excluded_extended_operation_oid - computed: true, optional: false, required: false
  public get excludedExtendedOperationOid() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_extended_operation_oid'));
  }

  // excluded_target_attribute - computed: true, optional: false, required: false
  public get excludedTargetAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_target_attribute'));
  }

  // excluded_target_entry_dn - computed: true, optional: false, required: false
  public get excludedTargetEntryDn() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_target_entry_dn'));
  }

  // excluded_target_sasl_mechanism - computed: true, optional: false, required: false
  public get excludedTargetSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_target_sasl_mechanism'));
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

  // included_application_name - computed: true, optional: false, required: false
  public get includedApplicationName() {
    return cdktf.Fn.tolist(this.getListAttribute('included_application_name'));
  }

  // included_extended_operation_oid - computed: true, optional: false, required: false
  public get includedExtendedOperationOid() {
    return cdktf.Fn.tolist(this.getListAttribute('included_extended_operation_oid'));
  }

  // included_search_scope - computed: true, optional: false, required: false
  public get includedSearchScope() {
    return cdktf.Fn.tolist(this.getListAttribute('included_search_scope'));
  }

  // included_target_attribute - computed: true, optional: false, required: false
  public get includedTargetAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('included_target_attribute'));
  }

  // included_target_entry_dn - computed: true, optional: false, required: false
  public get includedTargetEntryDn() {
    return cdktf.Fn.tolist(this.getListAttribute('included_target_entry_dn'));
  }

  // included_target_sasl_mechanism - computed: true, optional: false, required: false
  public get includedTargetSaslMechanism() {
    return cdktf.Fn.tolist(this.getListAttribute('included_target_sasl_mechanism'));
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

  // none_included_request_control - computed: true, optional: false, required: false
  public get noneIncludedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_request_control'));
  }

  // none_included_request_criteria - computed: true, optional: false, required: false
  public get noneIncludedRequestCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_request_criteria'));
  }

  // none_included_target_entry_filter - computed: true, optional: false, required: false
  public get noneIncludedTargetEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_target_entry_filter'));
  }

  // none_included_target_entry_group_dn - computed: true, optional: false, required: false
  public get noneIncludedTargetEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('none_included_target_entry_group_dn'));
  }

  // not_all_included_request_control - computed: true, optional: false, required: false
  public get notAllIncludedRequestControl() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_request_control'));
  }

  // not_all_included_request_criteria - computed: true, optional: false, required: false
  public get notAllIncludedRequestCriteria() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_request_criteria'));
  }

  // not_all_included_target_entry_filter - computed: true, optional: false, required: false
  public get notAllIncludedTargetEntryFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_target_entry_filter'));
  }

  // not_all_included_target_entry_group_dn - computed: true, optional: false, required: false
  public get notAllIncludedTargetEntryGroupDn() {
    return cdktf.Fn.tolist(this.getListAttribute('not_all_included_target_entry_group_dn'));
  }

  // operation_origin - computed: true, optional: false, required: false
  public get operationOrigin() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_origin'));
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_type'));
  }

  // target_bind_type - computed: true, optional: false, required: false
  public get targetBindType() {
    return cdktf.Fn.tolist(this.getListAttribute('target_bind_type'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // using_administrative_session_worker_thread - computed: true, optional: false, required: false
  public get usingAdministrativeSessionWorkerThread() {
    return this.getStringAttribute('using_administrative_session_worker_thread');
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
