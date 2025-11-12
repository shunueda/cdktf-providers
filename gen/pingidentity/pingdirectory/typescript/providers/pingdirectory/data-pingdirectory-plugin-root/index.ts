// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/plugin_root
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryPluginRootConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/plugin_root pingdirectory_plugin_root}
*/
export class DataPingdirectoryPluginRoot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_plugin_root";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryPluginRoot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryPluginRoot to import
  * @param importFromId The id of the existing DataPingdirectoryPluginRoot that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/plugin_root#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryPluginRoot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_plugin_root", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/plugin_root pingdirectory_plugin_root} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryPluginRootConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryPluginRootConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_plugin_root',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // plugin_order_intermediate_response - computed: true, optional: false, required: false
  public get pluginOrderIntermediateResponse() {
    return this.getStringAttribute('plugin_order_intermediate_response');
  }

  // plugin_order_ldif_export - computed: true, optional: false, required: false
  public get pluginOrderLdifExport() {
    return this.getStringAttribute('plugin_order_ldif_export');
  }

  // plugin_order_ldif_import - computed: true, optional: false, required: false
  public get pluginOrderLdifImport() {
    return this.getStringAttribute('plugin_order_ldif_import');
  }

  // plugin_order_post_connect - computed: true, optional: false, required: false
  public get pluginOrderPostConnect() {
    return this.getStringAttribute('plugin_order_post_connect');
  }

  // plugin_order_post_disconnect - computed: true, optional: false, required: false
  public get pluginOrderPostDisconnect() {
    return this.getStringAttribute('plugin_order_post_disconnect');
  }

  // plugin_order_post_operation_abandon - computed: true, optional: false, required: false
  public get pluginOrderPostOperationAbandon() {
    return this.getStringAttribute('plugin_order_post_operation_abandon');
  }

  // plugin_order_post_operation_add - computed: true, optional: false, required: false
  public get pluginOrderPostOperationAdd() {
    return this.getStringAttribute('plugin_order_post_operation_add');
  }

  // plugin_order_post_operation_bind - computed: true, optional: false, required: false
  public get pluginOrderPostOperationBind() {
    return this.getStringAttribute('plugin_order_post_operation_bind');
  }

  // plugin_order_post_operation_compare - computed: true, optional: false, required: false
  public get pluginOrderPostOperationCompare() {
    return this.getStringAttribute('plugin_order_post_operation_compare');
  }

  // plugin_order_post_operation_delete - computed: true, optional: false, required: false
  public get pluginOrderPostOperationDelete() {
    return this.getStringAttribute('plugin_order_post_operation_delete');
  }

  // plugin_order_post_operation_extended - computed: true, optional: false, required: false
  public get pluginOrderPostOperationExtended() {
    return this.getStringAttribute('plugin_order_post_operation_extended');
  }

  // plugin_order_post_operation_modify - computed: true, optional: false, required: false
  public get pluginOrderPostOperationModify() {
    return this.getStringAttribute('plugin_order_post_operation_modify');
  }

  // plugin_order_post_operation_modify_dn - computed: true, optional: false, required: false
  public get pluginOrderPostOperationModifyDn() {
    return this.getStringAttribute('plugin_order_post_operation_modify_dn');
  }

  // plugin_order_post_operation_search - computed: true, optional: false, required: false
  public get pluginOrderPostOperationSearch() {
    return this.getStringAttribute('plugin_order_post_operation_search');
  }

  // plugin_order_post_operation_unbind - computed: true, optional: false, required: false
  public get pluginOrderPostOperationUnbind() {
    return this.getStringAttribute('plugin_order_post_operation_unbind');
  }

  // plugin_order_post_response_add - computed: true, optional: false, required: false
  public get pluginOrderPostResponseAdd() {
    return this.getStringAttribute('plugin_order_post_response_add');
  }

  // plugin_order_post_response_bind - computed: true, optional: false, required: false
  public get pluginOrderPostResponseBind() {
    return this.getStringAttribute('plugin_order_post_response_bind');
  }

  // plugin_order_post_response_compare - computed: true, optional: false, required: false
  public get pluginOrderPostResponseCompare() {
    return this.getStringAttribute('plugin_order_post_response_compare');
  }

  // plugin_order_post_response_delete - computed: true, optional: false, required: false
  public get pluginOrderPostResponseDelete() {
    return this.getStringAttribute('plugin_order_post_response_delete');
  }

  // plugin_order_post_response_extended - computed: true, optional: false, required: false
  public get pluginOrderPostResponseExtended() {
    return this.getStringAttribute('plugin_order_post_response_extended');
  }

  // plugin_order_post_response_modify - computed: true, optional: false, required: false
  public get pluginOrderPostResponseModify() {
    return this.getStringAttribute('plugin_order_post_response_modify');
  }

  // plugin_order_post_response_modify_dn - computed: true, optional: false, required: false
  public get pluginOrderPostResponseModifyDn() {
    return this.getStringAttribute('plugin_order_post_response_modify_dn');
  }

  // plugin_order_post_response_search - computed: true, optional: false, required: false
  public get pluginOrderPostResponseSearch() {
    return this.getStringAttribute('plugin_order_post_response_search');
  }

  // plugin_order_post_synchronization_add - computed: true, optional: false, required: false
  public get pluginOrderPostSynchronizationAdd() {
    return this.getStringAttribute('plugin_order_post_synchronization_add');
  }

  // plugin_order_post_synchronization_delete - computed: true, optional: false, required: false
  public get pluginOrderPostSynchronizationDelete() {
    return this.getStringAttribute('plugin_order_post_synchronization_delete');
  }

  // plugin_order_post_synchronization_modify - computed: true, optional: false, required: false
  public get pluginOrderPostSynchronizationModify() {
    return this.getStringAttribute('plugin_order_post_synchronization_modify');
  }

  // plugin_order_post_synchronization_modify_dn - computed: true, optional: false, required: false
  public get pluginOrderPostSynchronizationModifyDn() {
    return this.getStringAttribute('plugin_order_post_synchronization_modify_dn');
  }

  // plugin_order_pre_operation_add - computed: true, optional: false, required: false
  public get pluginOrderPreOperationAdd() {
    return this.getStringAttribute('plugin_order_pre_operation_add');
  }

  // plugin_order_pre_operation_bind - computed: true, optional: false, required: false
  public get pluginOrderPreOperationBind() {
    return this.getStringAttribute('plugin_order_pre_operation_bind');
  }

  // plugin_order_pre_operation_compare - computed: true, optional: false, required: false
  public get pluginOrderPreOperationCompare() {
    return this.getStringAttribute('plugin_order_pre_operation_compare');
  }

  // plugin_order_pre_operation_delete - computed: true, optional: false, required: false
  public get pluginOrderPreOperationDelete() {
    return this.getStringAttribute('plugin_order_pre_operation_delete');
  }

  // plugin_order_pre_operation_extended - computed: true, optional: false, required: false
  public get pluginOrderPreOperationExtended() {
    return this.getStringAttribute('plugin_order_pre_operation_extended');
  }

  // plugin_order_pre_operation_modify - computed: true, optional: false, required: false
  public get pluginOrderPreOperationModify() {
    return this.getStringAttribute('plugin_order_pre_operation_modify');
  }

  // plugin_order_pre_operation_modify_dn - computed: true, optional: false, required: false
  public get pluginOrderPreOperationModifyDn() {
    return this.getStringAttribute('plugin_order_pre_operation_modify_dn');
  }

  // plugin_order_pre_operation_search - computed: true, optional: false, required: false
  public get pluginOrderPreOperationSearch() {
    return this.getStringAttribute('plugin_order_pre_operation_search');
  }

  // plugin_order_pre_parse_abandon - computed: true, optional: false, required: false
  public get pluginOrderPreParseAbandon() {
    return this.getStringAttribute('plugin_order_pre_parse_abandon');
  }

  // plugin_order_pre_parse_add - computed: true, optional: false, required: false
  public get pluginOrderPreParseAdd() {
    return this.getStringAttribute('plugin_order_pre_parse_add');
  }

  // plugin_order_pre_parse_bind - computed: true, optional: false, required: false
  public get pluginOrderPreParseBind() {
    return this.getStringAttribute('plugin_order_pre_parse_bind');
  }

  // plugin_order_pre_parse_compare - computed: true, optional: false, required: false
  public get pluginOrderPreParseCompare() {
    return this.getStringAttribute('plugin_order_pre_parse_compare');
  }

  // plugin_order_pre_parse_delete - computed: true, optional: false, required: false
  public get pluginOrderPreParseDelete() {
    return this.getStringAttribute('plugin_order_pre_parse_delete');
  }

  // plugin_order_pre_parse_extended - computed: true, optional: false, required: false
  public get pluginOrderPreParseExtended() {
    return this.getStringAttribute('plugin_order_pre_parse_extended');
  }

  // plugin_order_pre_parse_modify - computed: true, optional: false, required: false
  public get pluginOrderPreParseModify() {
    return this.getStringAttribute('plugin_order_pre_parse_modify');
  }

  // plugin_order_pre_parse_modify_dn - computed: true, optional: false, required: false
  public get pluginOrderPreParseModifyDn() {
    return this.getStringAttribute('plugin_order_pre_parse_modify_dn');
  }

  // plugin_order_pre_parse_search - computed: true, optional: false, required: false
  public get pluginOrderPreParseSearch() {
    return this.getStringAttribute('plugin_order_pre_parse_search');
  }

  // plugin_order_pre_parse_unbind - computed: true, optional: false, required: false
  public get pluginOrderPreParseUnbind() {
    return this.getStringAttribute('plugin_order_pre_parse_unbind');
  }

  // plugin_order_search_result_entry - computed: true, optional: false, required: false
  public get pluginOrderSearchResultEntry() {
    return this.getStringAttribute('plugin_order_search_result_entry');
  }

  // plugin_order_search_result_reference - computed: true, optional: false, required: false
  public get pluginOrderSearchResultReference() {
    return this.getStringAttribute('plugin_order_search_result_reference');
  }

  // plugin_order_shutdown - computed: true, optional: false, required: false
  public get pluginOrderShutdown() {
    return this.getStringAttribute('plugin_order_shutdown');
  }

  // plugin_order_startup - computed: true, optional: false, required: false
  public get pluginOrderStartup() {
    return this.getStringAttribute('plugin_order_startup');
  }

  // plugin_order_subordinate_modify_dn - computed: true, optional: false, required: false
  public get pluginOrderSubordinateModifyDn() {
    return this.getStringAttribute('plugin_order_subordinate_modify_dn');
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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
