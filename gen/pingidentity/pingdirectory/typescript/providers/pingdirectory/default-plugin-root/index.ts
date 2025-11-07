// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultPluginRootConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the order in which intermediate response plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_intermediate_response DefaultPluginRoot#plugin_order_intermediate_response}
  */
  readonly pluginOrderIntermediateResponse?: string;
  /**
  * Specifies the order in which LDIF export plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_ldif_export DefaultPluginRoot#plugin_order_ldif_export}
  */
  readonly pluginOrderLdifExport?: string;
  /**
  * Specifies the order in which LDIF import plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_ldif_import DefaultPluginRoot#plugin_order_ldif_import}
  */
  readonly pluginOrderLdifImport?: string;
  /**
  * Specifies the order in which post-connect plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_connect DefaultPluginRoot#plugin_order_post_connect}
  */
  readonly pluginOrderPostConnect?: string;
  /**
  * Specifies the order in which post-disconnect plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_disconnect DefaultPluginRoot#plugin_order_post_disconnect}
  */
  readonly pluginOrderPostDisconnect?: string;
  /**
  * Specifies the order in which post-operation abandon plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_abandon DefaultPluginRoot#plugin_order_post_operation_abandon}
  */
  readonly pluginOrderPostOperationAbandon?: string;
  /**
  * Specifies the order in which post-operation add plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_add DefaultPluginRoot#plugin_order_post_operation_add}
  */
  readonly pluginOrderPostOperationAdd?: string;
  /**
  * Specifies the order in which post-operation bind plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_bind DefaultPluginRoot#plugin_order_post_operation_bind}
  */
  readonly pluginOrderPostOperationBind?: string;
  /**
  * Specifies the order in which post-operation compare plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_compare DefaultPluginRoot#plugin_order_post_operation_compare}
  */
  readonly pluginOrderPostOperationCompare?: string;
  /**
  * Specifies the order in which post-operation delete plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_delete DefaultPluginRoot#plugin_order_post_operation_delete}
  */
  readonly pluginOrderPostOperationDelete?: string;
  /**
  * Specifies the order in which post-operation extended operation plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_extended DefaultPluginRoot#plugin_order_post_operation_extended}
  */
  readonly pluginOrderPostOperationExtended?: string;
  /**
  * Specifies the order in which post-operation modify plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_modify DefaultPluginRoot#plugin_order_post_operation_modify}
  */
  readonly pluginOrderPostOperationModify?: string;
  /**
  * Specifies the order in which post-operation modify DN plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_modify_dn DefaultPluginRoot#plugin_order_post_operation_modify_dn}
  */
  readonly pluginOrderPostOperationModifyDn?: string;
  /**
  * Specifies the order in which post-operation search plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_search DefaultPluginRoot#plugin_order_post_operation_search}
  */
  readonly pluginOrderPostOperationSearch?: string;
  /**
  * Specifies the order in which post-operation unbind plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_operation_unbind DefaultPluginRoot#plugin_order_post_operation_unbind}
  */
  readonly pluginOrderPostOperationUnbind?: string;
  /**
  * Specifies the order in which post-response add plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_response_add DefaultPluginRoot#plugin_order_post_response_add}
  */
  readonly pluginOrderPostResponseAdd?: string;
  /**
  * Specifies the order in which post-response bind plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_response_bind DefaultPluginRoot#plugin_order_post_response_bind}
  */
  readonly pluginOrderPostResponseBind?: string;
  /**
  * Specifies the order in which post-response compare plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_response_compare DefaultPluginRoot#plugin_order_post_response_compare}
  */
  readonly pluginOrderPostResponseCompare?: string;
  /**
  * Specifies the order in which post-response delete plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_response_delete DefaultPluginRoot#plugin_order_post_response_delete}
  */
  readonly pluginOrderPostResponseDelete?: string;
  /**
  * Specifies the order in which post-response extended operation plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_response_extended DefaultPluginRoot#plugin_order_post_response_extended}
  */
  readonly pluginOrderPostResponseExtended?: string;
  /**
  * Specifies the order in which post-response modify plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_response_modify DefaultPluginRoot#plugin_order_post_response_modify}
  */
  readonly pluginOrderPostResponseModify?: string;
  /**
  * Specifies the order in which post-response modify DN plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_response_modify_dn DefaultPluginRoot#plugin_order_post_response_modify_dn}
  */
  readonly pluginOrderPostResponseModifyDn?: string;
  /**
  * Specifies the order in which post-response search plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_response_search DefaultPluginRoot#plugin_order_post_response_search}
  */
  readonly pluginOrderPostResponseSearch?: string;
  /**
  * Specifies the order in which post-synchronization add plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_synchronization_add DefaultPluginRoot#plugin_order_post_synchronization_add}
  */
  readonly pluginOrderPostSynchronizationAdd?: string;
  /**
  * Specifies the order in which post-synchronization delete plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_synchronization_delete DefaultPluginRoot#plugin_order_post_synchronization_delete}
  */
  readonly pluginOrderPostSynchronizationDelete?: string;
  /**
  * Specifies the order in which post-synchronization modify plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_synchronization_modify DefaultPluginRoot#plugin_order_post_synchronization_modify}
  */
  readonly pluginOrderPostSynchronizationModify?: string;
  /**
  * Specifies the order in which post-synchronization modify DN plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_post_synchronization_modify_dn DefaultPluginRoot#plugin_order_post_synchronization_modify_dn}
  */
  readonly pluginOrderPostSynchronizationModifyDn?: string;
  /**
  * Specifies the order in which pre-operation add plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_operation_add DefaultPluginRoot#plugin_order_pre_operation_add}
  */
  readonly pluginOrderPreOperationAdd?: string;
  /**
  * Specifies the order in which pre-operation bind plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_operation_bind DefaultPluginRoot#plugin_order_pre_operation_bind}
  */
  readonly pluginOrderPreOperationBind?: string;
  /**
  * Specifies the order in which pre-operation compare plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_operation_compare DefaultPluginRoot#plugin_order_pre_operation_compare}
  */
  readonly pluginOrderPreOperationCompare?: string;
  /**
  * Specifies the order in which pre-operation delete plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_operation_delete DefaultPluginRoot#plugin_order_pre_operation_delete}
  */
  readonly pluginOrderPreOperationDelete?: string;
  /**
  * Specifies the order in which pre-operation extended operation plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_operation_extended DefaultPluginRoot#plugin_order_pre_operation_extended}
  */
  readonly pluginOrderPreOperationExtended?: string;
  /**
  * Specifies the order in which pre-operation modify plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_operation_modify DefaultPluginRoot#plugin_order_pre_operation_modify}
  */
  readonly pluginOrderPreOperationModify?: string;
  /**
  * Specifies the order in which pre-operation modify DN plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_operation_modify_dn DefaultPluginRoot#plugin_order_pre_operation_modify_dn}
  */
  readonly pluginOrderPreOperationModifyDn?: string;
  /**
  * Specifies the order in which pre-operation search plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_operation_search DefaultPluginRoot#plugin_order_pre_operation_search}
  */
  readonly pluginOrderPreOperationSearch?: string;
  /**
  * Specifies the order in which pre-parse abandon plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_abandon DefaultPluginRoot#plugin_order_pre_parse_abandon}
  */
  readonly pluginOrderPreParseAbandon?: string;
  /**
  * Specifies the order in which pre-parse add plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_add DefaultPluginRoot#plugin_order_pre_parse_add}
  */
  readonly pluginOrderPreParseAdd?: string;
  /**
  * Specifies the order in which pre-parse bind plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_bind DefaultPluginRoot#plugin_order_pre_parse_bind}
  */
  readonly pluginOrderPreParseBind?: string;
  /**
  * Specifies the order in which pre-parse compare plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_compare DefaultPluginRoot#plugin_order_pre_parse_compare}
  */
  readonly pluginOrderPreParseCompare?: string;
  /**
  * Specifies the order in which pre-parse delete plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_delete DefaultPluginRoot#plugin_order_pre_parse_delete}
  */
  readonly pluginOrderPreParseDelete?: string;
  /**
  * Specifies the order in which pre-parse extended operation plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_extended DefaultPluginRoot#plugin_order_pre_parse_extended}
  */
  readonly pluginOrderPreParseExtended?: string;
  /**
  * Specifies the order in which pre-parse modify plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_modify DefaultPluginRoot#plugin_order_pre_parse_modify}
  */
  readonly pluginOrderPreParseModify?: string;
  /**
  * Specifies the order in which pre-parse modify DN plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_modify_dn DefaultPluginRoot#plugin_order_pre_parse_modify_dn}
  */
  readonly pluginOrderPreParseModifyDn?: string;
  /**
  * Specifies the order in which pre-parse search plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_search DefaultPluginRoot#plugin_order_pre_parse_search}
  */
  readonly pluginOrderPreParseSearch?: string;
  /**
  * Specifies the order in which pre-parse unbind plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_pre_parse_unbind DefaultPluginRoot#plugin_order_pre_parse_unbind}
  */
  readonly pluginOrderPreParseUnbind?: string;
  /**
  * Specifies the order in which search result entry plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_search_result_entry DefaultPluginRoot#plugin_order_search_result_entry}
  */
  readonly pluginOrderSearchResultEntry?: string;
  /**
  * Specifies the order in which search result reference plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_search_result_reference DefaultPluginRoot#plugin_order_search_result_reference}
  */
  readonly pluginOrderSearchResultReference?: string;
  /**
  * Specifies the order in which shutdown plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_shutdown DefaultPluginRoot#plugin_order_shutdown}
  */
  readonly pluginOrderShutdown?: string;
  /**
  * Specifies the order in which startup plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_startup DefaultPluginRoot#plugin_order_startup}
  */
  readonly pluginOrderStartup?: string;
  /**
  * Specifies the order in which subordinate modify DN plug-ins are to be loaded and invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#plugin_order_subordinate_modify_dn DefaultPluginRoot#plugin_order_subordinate_modify_dn}
  */
  readonly pluginOrderSubordinateModifyDn?: string;
}
export interface DefaultPluginRootRequiredActions {
}

export function defaultPluginRootRequiredActionsToTerraform(struct?: DefaultPluginRootRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultPluginRootRequiredActionsToHclTerraform(struct?: DefaultPluginRootRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultPluginRootRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultPluginRootRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultPluginRootRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultPluginRootRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultPluginRootRequiredActionsOutputReference {
    return new DefaultPluginRootRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root pingdirectory_default_plugin_root}
*/
export class DefaultPluginRoot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_plugin_root";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultPluginRoot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultPluginRoot to import
  * @param importFromId The id of the existing DefaultPluginRoot that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultPluginRoot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_plugin_root", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_plugin_root pingdirectory_default_plugin_root} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultPluginRootConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultPluginRootConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_plugin_root',
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
    this._pluginOrderIntermediateResponse = config.pluginOrderIntermediateResponse;
    this._pluginOrderLdifExport = config.pluginOrderLdifExport;
    this._pluginOrderLdifImport = config.pluginOrderLdifImport;
    this._pluginOrderPostConnect = config.pluginOrderPostConnect;
    this._pluginOrderPostDisconnect = config.pluginOrderPostDisconnect;
    this._pluginOrderPostOperationAbandon = config.pluginOrderPostOperationAbandon;
    this._pluginOrderPostOperationAdd = config.pluginOrderPostOperationAdd;
    this._pluginOrderPostOperationBind = config.pluginOrderPostOperationBind;
    this._pluginOrderPostOperationCompare = config.pluginOrderPostOperationCompare;
    this._pluginOrderPostOperationDelete = config.pluginOrderPostOperationDelete;
    this._pluginOrderPostOperationExtended = config.pluginOrderPostOperationExtended;
    this._pluginOrderPostOperationModify = config.pluginOrderPostOperationModify;
    this._pluginOrderPostOperationModifyDn = config.pluginOrderPostOperationModifyDn;
    this._pluginOrderPostOperationSearch = config.pluginOrderPostOperationSearch;
    this._pluginOrderPostOperationUnbind = config.pluginOrderPostOperationUnbind;
    this._pluginOrderPostResponseAdd = config.pluginOrderPostResponseAdd;
    this._pluginOrderPostResponseBind = config.pluginOrderPostResponseBind;
    this._pluginOrderPostResponseCompare = config.pluginOrderPostResponseCompare;
    this._pluginOrderPostResponseDelete = config.pluginOrderPostResponseDelete;
    this._pluginOrderPostResponseExtended = config.pluginOrderPostResponseExtended;
    this._pluginOrderPostResponseModify = config.pluginOrderPostResponseModify;
    this._pluginOrderPostResponseModifyDn = config.pluginOrderPostResponseModifyDn;
    this._pluginOrderPostResponseSearch = config.pluginOrderPostResponseSearch;
    this._pluginOrderPostSynchronizationAdd = config.pluginOrderPostSynchronizationAdd;
    this._pluginOrderPostSynchronizationDelete = config.pluginOrderPostSynchronizationDelete;
    this._pluginOrderPostSynchronizationModify = config.pluginOrderPostSynchronizationModify;
    this._pluginOrderPostSynchronizationModifyDn = config.pluginOrderPostSynchronizationModifyDn;
    this._pluginOrderPreOperationAdd = config.pluginOrderPreOperationAdd;
    this._pluginOrderPreOperationBind = config.pluginOrderPreOperationBind;
    this._pluginOrderPreOperationCompare = config.pluginOrderPreOperationCompare;
    this._pluginOrderPreOperationDelete = config.pluginOrderPreOperationDelete;
    this._pluginOrderPreOperationExtended = config.pluginOrderPreOperationExtended;
    this._pluginOrderPreOperationModify = config.pluginOrderPreOperationModify;
    this._pluginOrderPreOperationModifyDn = config.pluginOrderPreOperationModifyDn;
    this._pluginOrderPreOperationSearch = config.pluginOrderPreOperationSearch;
    this._pluginOrderPreParseAbandon = config.pluginOrderPreParseAbandon;
    this._pluginOrderPreParseAdd = config.pluginOrderPreParseAdd;
    this._pluginOrderPreParseBind = config.pluginOrderPreParseBind;
    this._pluginOrderPreParseCompare = config.pluginOrderPreParseCompare;
    this._pluginOrderPreParseDelete = config.pluginOrderPreParseDelete;
    this._pluginOrderPreParseExtended = config.pluginOrderPreParseExtended;
    this._pluginOrderPreParseModify = config.pluginOrderPreParseModify;
    this._pluginOrderPreParseModifyDn = config.pluginOrderPreParseModifyDn;
    this._pluginOrderPreParseSearch = config.pluginOrderPreParseSearch;
    this._pluginOrderPreParseUnbind = config.pluginOrderPreParseUnbind;
    this._pluginOrderSearchResultEntry = config.pluginOrderSearchResultEntry;
    this._pluginOrderSearchResultReference = config.pluginOrderSearchResultReference;
    this._pluginOrderShutdown = config.pluginOrderShutdown;
    this._pluginOrderStartup = config.pluginOrderStartup;
    this._pluginOrderSubordinateModifyDn = config.pluginOrderSubordinateModifyDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // plugin_order_intermediate_response - computed: true, optional: true, required: false
  private _pluginOrderIntermediateResponse?: string; 
  public get pluginOrderIntermediateResponse() {
    return this.getStringAttribute('plugin_order_intermediate_response');
  }
  public set pluginOrderIntermediateResponse(value: string) {
    this._pluginOrderIntermediateResponse = value;
  }
  public resetPluginOrderIntermediateResponse() {
    this._pluginOrderIntermediateResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderIntermediateResponseInput() {
    return this._pluginOrderIntermediateResponse;
  }

  // plugin_order_ldif_export - computed: true, optional: true, required: false
  private _pluginOrderLdifExport?: string; 
  public get pluginOrderLdifExport() {
    return this.getStringAttribute('plugin_order_ldif_export');
  }
  public set pluginOrderLdifExport(value: string) {
    this._pluginOrderLdifExport = value;
  }
  public resetPluginOrderLdifExport() {
    this._pluginOrderLdifExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderLdifExportInput() {
    return this._pluginOrderLdifExport;
  }

  // plugin_order_ldif_import - computed: true, optional: true, required: false
  private _pluginOrderLdifImport?: string; 
  public get pluginOrderLdifImport() {
    return this.getStringAttribute('plugin_order_ldif_import');
  }
  public set pluginOrderLdifImport(value: string) {
    this._pluginOrderLdifImport = value;
  }
  public resetPluginOrderLdifImport() {
    this._pluginOrderLdifImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderLdifImportInput() {
    return this._pluginOrderLdifImport;
  }

  // plugin_order_post_connect - computed: true, optional: true, required: false
  private _pluginOrderPostConnect?: string; 
  public get pluginOrderPostConnect() {
    return this.getStringAttribute('plugin_order_post_connect');
  }
  public set pluginOrderPostConnect(value: string) {
    this._pluginOrderPostConnect = value;
  }
  public resetPluginOrderPostConnect() {
    this._pluginOrderPostConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostConnectInput() {
    return this._pluginOrderPostConnect;
  }

  // plugin_order_post_disconnect - computed: true, optional: true, required: false
  private _pluginOrderPostDisconnect?: string; 
  public get pluginOrderPostDisconnect() {
    return this.getStringAttribute('plugin_order_post_disconnect');
  }
  public set pluginOrderPostDisconnect(value: string) {
    this._pluginOrderPostDisconnect = value;
  }
  public resetPluginOrderPostDisconnect() {
    this._pluginOrderPostDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostDisconnectInput() {
    return this._pluginOrderPostDisconnect;
  }

  // plugin_order_post_operation_abandon - computed: true, optional: true, required: false
  private _pluginOrderPostOperationAbandon?: string; 
  public get pluginOrderPostOperationAbandon() {
    return this.getStringAttribute('plugin_order_post_operation_abandon');
  }
  public set pluginOrderPostOperationAbandon(value: string) {
    this._pluginOrderPostOperationAbandon = value;
  }
  public resetPluginOrderPostOperationAbandon() {
    this._pluginOrderPostOperationAbandon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationAbandonInput() {
    return this._pluginOrderPostOperationAbandon;
  }

  // plugin_order_post_operation_add - computed: true, optional: true, required: false
  private _pluginOrderPostOperationAdd?: string; 
  public get pluginOrderPostOperationAdd() {
    return this.getStringAttribute('plugin_order_post_operation_add');
  }
  public set pluginOrderPostOperationAdd(value: string) {
    this._pluginOrderPostOperationAdd = value;
  }
  public resetPluginOrderPostOperationAdd() {
    this._pluginOrderPostOperationAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationAddInput() {
    return this._pluginOrderPostOperationAdd;
  }

  // plugin_order_post_operation_bind - computed: true, optional: true, required: false
  private _pluginOrderPostOperationBind?: string; 
  public get pluginOrderPostOperationBind() {
    return this.getStringAttribute('plugin_order_post_operation_bind');
  }
  public set pluginOrderPostOperationBind(value: string) {
    this._pluginOrderPostOperationBind = value;
  }
  public resetPluginOrderPostOperationBind() {
    this._pluginOrderPostOperationBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationBindInput() {
    return this._pluginOrderPostOperationBind;
  }

  // plugin_order_post_operation_compare - computed: true, optional: true, required: false
  private _pluginOrderPostOperationCompare?: string; 
  public get pluginOrderPostOperationCompare() {
    return this.getStringAttribute('plugin_order_post_operation_compare');
  }
  public set pluginOrderPostOperationCompare(value: string) {
    this._pluginOrderPostOperationCompare = value;
  }
  public resetPluginOrderPostOperationCompare() {
    this._pluginOrderPostOperationCompare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationCompareInput() {
    return this._pluginOrderPostOperationCompare;
  }

  // plugin_order_post_operation_delete - computed: true, optional: true, required: false
  private _pluginOrderPostOperationDelete?: string; 
  public get pluginOrderPostOperationDelete() {
    return this.getStringAttribute('plugin_order_post_operation_delete');
  }
  public set pluginOrderPostOperationDelete(value: string) {
    this._pluginOrderPostOperationDelete = value;
  }
  public resetPluginOrderPostOperationDelete() {
    this._pluginOrderPostOperationDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationDeleteInput() {
    return this._pluginOrderPostOperationDelete;
  }

  // plugin_order_post_operation_extended - computed: true, optional: true, required: false
  private _pluginOrderPostOperationExtended?: string; 
  public get pluginOrderPostOperationExtended() {
    return this.getStringAttribute('plugin_order_post_operation_extended');
  }
  public set pluginOrderPostOperationExtended(value: string) {
    this._pluginOrderPostOperationExtended = value;
  }
  public resetPluginOrderPostOperationExtended() {
    this._pluginOrderPostOperationExtended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationExtendedInput() {
    return this._pluginOrderPostOperationExtended;
  }

  // plugin_order_post_operation_modify - computed: true, optional: true, required: false
  private _pluginOrderPostOperationModify?: string; 
  public get pluginOrderPostOperationModify() {
    return this.getStringAttribute('plugin_order_post_operation_modify');
  }
  public set pluginOrderPostOperationModify(value: string) {
    this._pluginOrderPostOperationModify = value;
  }
  public resetPluginOrderPostOperationModify() {
    this._pluginOrderPostOperationModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationModifyInput() {
    return this._pluginOrderPostOperationModify;
  }

  // plugin_order_post_operation_modify_dn - computed: true, optional: true, required: false
  private _pluginOrderPostOperationModifyDn?: string; 
  public get pluginOrderPostOperationModifyDn() {
    return this.getStringAttribute('plugin_order_post_operation_modify_dn');
  }
  public set pluginOrderPostOperationModifyDn(value: string) {
    this._pluginOrderPostOperationModifyDn = value;
  }
  public resetPluginOrderPostOperationModifyDn() {
    this._pluginOrderPostOperationModifyDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationModifyDnInput() {
    return this._pluginOrderPostOperationModifyDn;
  }

  // plugin_order_post_operation_search - computed: true, optional: true, required: false
  private _pluginOrderPostOperationSearch?: string; 
  public get pluginOrderPostOperationSearch() {
    return this.getStringAttribute('plugin_order_post_operation_search');
  }
  public set pluginOrderPostOperationSearch(value: string) {
    this._pluginOrderPostOperationSearch = value;
  }
  public resetPluginOrderPostOperationSearch() {
    this._pluginOrderPostOperationSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationSearchInput() {
    return this._pluginOrderPostOperationSearch;
  }

  // plugin_order_post_operation_unbind - computed: true, optional: true, required: false
  private _pluginOrderPostOperationUnbind?: string; 
  public get pluginOrderPostOperationUnbind() {
    return this.getStringAttribute('plugin_order_post_operation_unbind');
  }
  public set pluginOrderPostOperationUnbind(value: string) {
    this._pluginOrderPostOperationUnbind = value;
  }
  public resetPluginOrderPostOperationUnbind() {
    this._pluginOrderPostOperationUnbind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostOperationUnbindInput() {
    return this._pluginOrderPostOperationUnbind;
  }

  // plugin_order_post_response_add - computed: true, optional: true, required: false
  private _pluginOrderPostResponseAdd?: string; 
  public get pluginOrderPostResponseAdd() {
    return this.getStringAttribute('plugin_order_post_response_add');
  }
  public set pluginOrderPostResponseAdd(value: string) {
    this._pluginOrderPostResponseAdd = value;
  }
  public resetPluginOrderPostResponseAdd() {
    this._pluginOrderPostResponseAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostResponseAddInput() {
    return this._pluginOrderPostResponseAdd;
  }

  // plugin_order_post_response_bind - computed: true, optional: true, required: false
  private _pluginOrderPostResponseBind?: string; 
  public get pluginOrderPostResponseBind() {
    return this.getStringAttribute('plugin_order_post_response_bind');
  }
  public set pluginOrderPostResponseBind(value: string) {
    this._pluginOrderPostResponseBind = value;
  }
  public resetPluginOrderPostResponseBind() {
    this._pluginOrderPostResponseBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostResponseBindInput() {
    return this._pluginOrderPostResponseBind;
  }

  // plugin_order_post_response_compare - computed: true, optional: true, required: false
  private _pluginOrderPostResponseCompare?: string; 
  public get pluginOrderPostResponseCompare() {
    return this.getStringAttribute('plugin_order_post_response_compare');
  }
  public set pluginOrderPostResponseCompare(value: string) {
    this._pluginOrderPostResponseCompare = value;
  }
  public resetPluginOrderPostResponseCompare() {
    this._pluginOrderPostResponseCompare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostResponseCompareInput() {
    return this._pluginOrderPostResponseCompare;
  }

  // plugin_order_post_response_delete - computed: true, optional: true, required: false
  private _pluginOrderPostResponseDelete?: string; 
  public get pluginOrderPostResponseDelete() {
    return this.getStringAttribute('plugin_order_post_response_delete');
  }
  public set pluginOrderPostResponseDelete(value: string) {
    this._pluginOrderPostResponseDelete = value;
  }
  public resetPluginOrderPostResponseDelete() {
    this._pluginOrderPostResponseDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostResponseDeleteInput() {
    return this._pluginOrderPostResponseDelete;
  }

  // plugin_order_post_response_extended - computed: true, optional: true, required: false
  private _pluginOrderPostResponseExtended?: string; 
  public get pluginOrderPostResponseExtended() {
    return this.getStringAttribute('plugin_order_post_response_extended');
  }
  public set pluginOrderPostResponseExtended(value: string) {
    this._pluginOrderPostResponseExtended = value;
  }
  public resetPluginOrderPostResponseExtended() {
    this._pluginOrderPostResponseExtended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostResponseExtendedInput() {
    return this._pluginOrderPostResponseExtended;
  }

  // plugin_order_post_response_modify - computed: true, optional: true, required: false
  private _pluginOrderPostResponseModify?: string; 
  public get pluginOrderPostResponseModify() {
    return this.getStringAttribute('plugin_order_post_response_modify');
  }
  public set pluginOrderPostResponseModify(value: string) {
    this._pluginOrderPostResponseModify = value;
  }
  public resetPluginOrderPostResponseModify() {
    this._pluginOrderPostResponseModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostResponseModifyInput() {
    return this._pluginOrderPostResponseModify;
  }

  // plugin_order_post_response_modify_dn - computed: true, optional: true, required: false
  private _pluginOrderPostResponseModifyDn?: string; 
  public get pluginOrderPostResponseModifyDn() {
    return this.getStringAttribute('plugin_order_post_response_modify_dn');
  }
  public set pluginOrderPostResponseModifyDn(value: string) {
    this._pluginOrderPostResponseModifyDn = value;
  }
  public resetPluginOrderPostResponseModifyDn() {
    this._pluginOrderPostResponseModifyDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostResponseModifyDnInput() {
    return this._pluginOrderPostResponseModifyDn;
  }

  // plugin_order_post_response_search - computed: true, optional: true, required: false
  private _pluginOrderPostResponseSearch?: string; 
  public get pluginOrderPostResponseSearch() {
    return this.getStringAttribute('plugin_order_post_response_search');
  }
  public set pluginOrderPostResponseSearch(value: string) {
    this._pluginOrderPostResponseSearch = value;
  }
  public resetPluginOrderPostResponseSearch() {
    this._pluginOrderPostResponseSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostResponseSearchInput() {
    return this._pluginOrderPostResponseSearch;
  }

  // plugin_order_post_synchronization_add - computed: true, optional: true, required: false
  private _pluginOrderPostSynchronizationAdd?: string; 
  public get pluginOrderPostSynchronizationAdd() {
    return this.getStringAttribute('plugin_order_post_synchronization_add');
  }
  public set pluginOrderPostSynchronizationAdd(value: string) {
    this._pluginOrderPostSynchronizationAdd = value;
  }
  public resetPluginOrderPostSynchronizationAdd() {
    this._pluginOrderPostSynchronizationAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostSynchronizationAddInput() {
    return this._pluginOrderPostSynchronizationAdd;
  }

  // plugin_order_post_synchronization_delete - computed: true, optional: true, required: false
  private _pluginOrderPostSynchronizationDelete?: string; 
  public get pluginOrderPostSynchronizationDelete() {
    return this.getStringAttribute('plugin_order_post_synchronization_delete');
  }
  public set pluginOrderPostSynchronizationDelete(value: string) {
    this._pluginOrderPostSynchronizationDelete = value;
  }
  public resetPluginOrderPostSynchronizationDelete() {
    this._pluginOrderPostSynchronizationDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostSynchronizationDeleteInput() {
    return this._pluginOrderPostSynchronizationDelete;
  }

  // plugin_order_post_synchronization_modify - computed: true, optional: true, required: false
  private _pluginOrderPostSynchronizationModify?: string; 
  public get pluginOrderPostSynchronizationModify() {
    return this.getStringAttribute('plugin_order_post_synchronization_modify');
  }
  public set pluginOrderPostSynchronizationModify(value: string) {
    this._pluginOrderPostSynchronizationModify = value;
  }
  public resetPluginOrderPostSynchronizationModify() {
    this._pluginOrderPostSynchronizationModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostSynchronizationModifyInput() {
    return this._pluginOrderPostSynchronizationModify;
  }

  // plugin_order_post_synchronization_modify_dn - computed: true, optional: true, required: false
  private _pluginOrderPostSynchronizationModifyDn?: string; 
  public get pluginOrderPostSynchronizationModifyDn() {
    return this.getStringAttribute('plugin_order_post_synchronization_modify_dn');
  }
  public set pluginOrderPostSynchronizationModifyDn(value: string) {
    this._pluginOrderPostSynchronizationModifyDn = value;
  }
  public resetPluginOrderPostSynchronizationModifyDn() {
    this._pluginOrderPostSynchronizationModifyDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPostSynchronizationModifyDnInput() {
    return this._pluginOrderPostSynchronizationModifyDn;
  }

  // plugin_order_pre_operation_add - computed: true, optional: true, required: false
  private _pluginOrderPreOperationAdd?: string; 
  public get pluginOrderPreOperationAdd() {
    return this.getStringAttribute('plugin_order_pre_operation_add');
  }
  public set pluginOrderPreOperationAdd(value: string) {
    this._pluginOrderPreOperationAdd = value;
  }
  public resetPluginOrderPreOperationAdd() {
    this._pluginOrderPreOperationAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreOperationAddInput() {
    return this._pluginOrderPreOperationAdd;
  }

  // plugin_order_pre_operation_bind - computed: true, optional: true, required: false
  private _pluginOrderPreOperationBind?: string; 
  public get pluginOrderPreOperationBind() {
    return this.getStringAttribute('plugin_order_pre_operation_bind');
  }
  public set pluginOrderPreOperationBind(value: string) {
    this._pluginOrderPreOperationBind = value;
  }
  public resetPluginOrderPreOperationBind() {
    this._pluginOrderPreOperationBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreOperationBindInput() {
    return this._pluginOrderPreOperationBind;
  }

  // plugin_order_pre_operation_compare - computed: true, optional: true, required: false
  private _pluginOrderPreOperationCompare?: string; 
  public get pluginOrderPreOperationCompare() {
    return this.getStringAttribute('plugin_order_pre_operation_compare');
  }
  public set pluginOrderPreOperationCompare(value: string) {
    this._pluginOrderPreOperationCompare = value;
  }
  public resetPluginOrderPreOperationCompare() {
    this._pluginOrderPreOperationCompare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreOperationCompareInput() {
    return this._pluginOrderPreOperationCompare;
  }

  // plugin_order_pre_operation_delete - computed: true, optional: true, required: false
  private _pluginOrderPreOperationDelete?: string; 
  public get pluginOrderPreOperationDelete() {
    return this.getStringAttribute('plugin_order_pre_operation_delete');
  }
  public set pluginOrderPreOperationDelete(value: string) {
    this._pluginOrderPreOperationDelete = value;
  }
  public resetPluginOrderPreOperationDelete() {
    this._pluginOrderPreOperationDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreOperationDeleteInput() {
    return this._pluginOrderPreOperationDelete;
  }

  // plugin_order_pre_operation_extended - computed: true, optional: true, required: false
  private _pluginOrderPreOperationExtended?: string; 
  public get pluginOrderPreOperationExtended() {
    return this.getStringAttribute('plugin_order_pre_operation_extended');
  }
  public set pluginOrderPreOperationExtended(value: string) {
    this._pluginOrderPreOperationExtended = value;
  }
  public resetPluginOrderPreOperationExtended() {
    this._pluginOrderPreOperationExtended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreOperationExtendedInput() {
    return this._pluginOrderPreOperationExtended;
  }

  // plugin_order_pre_operation_modify - computed: true, optional: true, required: false
  private _pluginOrderPreOperationModify?: string; 
  public get pluginOrderPreOperationModify() {
    return this.getStringAttribute('plugin_order_pre_operation_modify');
  }
  public set pluginOrderPreOperationModify(value: string) {
    this._pluginOrderPreOperationModify = value;
  }
  public resetPluginOrderPreOperationModify() {
    this._pluginOrderPreOperationModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreOperationModifyInput() {
    return this._pluginOrderPreOperationModify;
  }

  // plugin_order_pre_operation_modify_dn - computed: true, optional: true, required: false
  private _pluginOrderPreOperationModifyDn?: string; 
  public get pluginOrderPreOperationModifyDn() {
    return this.getStringAttribute('plugin_order_pre_operation_modify_dn');
  }
  public set pluginOrderPreOperationModifyDn(value: string) {
    this._pluginOrderPreOperationModifyDn = value;
  }
  public resetPluginOrderPreOperationModifyDn() {
    this._pluginOrderPreOperationModifyDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreOperationModifyDnInput() {
    return this._pluginOrderPreOperationModifyDn;
  }

  // plugin_order_pre_operation_search - computed: true, optional: true, required: false
  private _pluginOrderPreOperationSearch?: string; 
  public get pluginOrderPreOperationSearch() {
    return this.getStringAttribute('plugin_order_pre_operation_search');
  }
  public set pluginOrderPreOperationSearch(value: string) {
    this._pluginOrderPreOperationSearch = value;
  }
  public resetPluginOrderPreOperationSearch() {
    this._pluginOrderPreOperationSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreOperationSearchInput() {
    return this._pluginOrderPreOperationSearch;
  }

  // plugin_order_pre_parse_abandon - computed: true, optional: true, required: false
  private _pluginOrderPreParseAbandon?: string; 
  public get pluginOrderPreParseAbandon() {
    return this.getStringAttribute('plugin_order_pre_parse_abandon');
  }
  public set pluginOrderPreParseAbandon(value: string) {
    this._pluginOrderPreParseAbandon = value;
  }
  public resetPluginOrderPreParseAbandon() {
    this._pluginOrderPreParseAbandon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseAbandonInput() {
    return this._pluginOrderPreParseAbandon;
  }

  // plugin_order_pre_parse_add - computed: true, optional: true, required: false
  private _pluginOrderPreParseAdd?: string; 
  public get pluginOrderPreParseAdd() {
    return this.getStringAttribute('plugin_order_pre_parse_add');
  }
  public set pluginOrderPreParseAdd(value: string) {
    this._pluginOrderPreParseAdd = value;
  }
  public resetPluginOrderPreParseAdd() {
    this._pluginOrderPreParseAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseAddInput() {
    return this._pluginOrderPreParseAdd;
  }

  // plugin_order_pre_parse_bind - computed: true, optional: true, required: false
  private _pluginOrderPreParseBind?: string; 
  public get pluginOrderPreParseBind() {
    return this.getStringAttribute('plugin_order_pre_parse_bind');
  }
  public set pluginOrderPreParseBind(value: string) {
    this._pluginOrderPreParseBind = value;
  }
  public resetPluginOrderPreParseBind() {
    this._pluginOrderPreParseBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseBindInput() {
    return this._pluginOrderPreParseBind;
  }

  // plugin_order_pre_parse_compare - computed: true, optional: true, required: false
  private _pluginOrderPreParseCompare?: string; 
  public get pluginOrderPreParseCompare() {
    return this.getStringAttribute('plugin_order_pre_parse_compare');
  }
  public set pluginOrderPreParseCompare(value: string) {
    this._pluginOrderPreParseCompare = value;
  }
  public resetPluginOrderPreParseCompare() {
    this._pluginOrderPreParseCompare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseCompareInput() {
    return this._pluginOrderPreParseCompare;
  }

  // plugin_order_pre_parse_delete - computed: true, optional: true, required: false
  private _pluginOrderPreParseDelete?: string; 
  public get pluginOrderPreParseDelete() {
    return this.getStringAttribute('plugin_order_pre_parse_delete');
  }
  public set pluginOrderPreParseDelete(value: string) {
    this._pluginOrderPreParseDelete = value;
  }
  public resetPluginOrderPreParseDelete() {
    this._pluginOrderPreParseDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseDeleteInput() {
    return this._pluginOrderPreParseDelete;
  }

  // plugin_order_pre_parse_extended - computed: true, optional: true, required: false
  private _pluginOrderPreParseExtended?: string; 
  public get pluginOrderPreParseExtended() {
    return this.getStringAttribute('plugin_order_pre_parse_extended');
  }
  public set pluginOrderPreParseExtended(value: string) {
    this._pluginOrderPreParseExtended = value;
  }
  public resetPluginOrderPreParseExtended() {
    this._pluginOrderPreParseExtended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseExtendedInput() {
    return this._pluginOrderPreParseExtended;
  }

  // plugin_order_pre_parse_modify - computed: true, optional: true, required: false
  private _pluginOrderPreParseModify?: string; 
  public get pluginOrderPreParseModify() {
    return this.getStringAttribute('plugin_order_pre_parse_modify');
  }
  public set pluginOrderPreParseModify(value: string) {
    this._pluginOrderPreParseModify = value;
  }
  public resetPluginOrderPreParseModify() {
    this._pluginOrderPreParseModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseModifyInput() {
    return this._pluginOrderPreParseModify;
  }

  // plugin_order_pre_parse_modify_dn - computed: true, optional: true, required: false
  private _pluginOrderPreParseModifyDn?: string; 
  public get pluginOrderPreParseModifyDn() {
    return this.getStringAttribute('plugin_order_pre_parse_modify_dn');
  }
  public set pluginOrderPreParseModifyDn(value: string) {
    this._pluginOrderPreParseModifyDn = value;
  }
  public resetPluginOrderPreParseModifyDn() {
    this._pluginOrderPreParseModifyDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseModifyDnInput() {
    return this._pluginOrderPreParseModifyDn;
  }

  // plugin_order_pre_parse_search - computed: true, optional: true, required: false
  private _pluginOrderPreParseSearch?: string; 
  public get pluginOrderPreParseSearch() {
    return this.getStringAttribute('plugin_order_pre_parse_search');
  }
  public set pluginOrderPreParseSearch(value: string) {
    this._pluginOrderPreParseSearch = value;
  }
  public resetPluginOrderPreParseSearch() {
    this._pluginOrderPreParseSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseSearchInput() {
    return this._pluginOrderPreParseSearch;
  }

  // plugin_order_pre_parse_unbind - computed: true, optional: true, required: false
  private _pluginOrderPreParseUnbind?: string; 
  public get pluginOrderPreParseUnbind() {
    return this.getStringAttribute('plugin_order_pre_parse_unbind');
  }
  public set pluginOrderPreParseUnbind(value: string) {
    this._pluginOrderPreParseUnbind = value;
  }
  public resetPluginOrderPreParseUnbind() {
    this._pluginOrderPreParseUnbind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderPreParseUnbindInput() {
    return this._pluginOrderPreParseUnbind;
  }

  // plugin_order_search_result_entry - computed: true, optional: true, required: false
  private _pluginOrderSearchResultEntry?: string; 
  public get pluginOrderSearchResultEntry() {
    return this.getStringAttribute('plugin_order_search_result_entry');
  }
  public set pluginOrderSearchResultEntry(value: string) {
    this._pluginOrderSearchResultEntry = value;
  }
  public resetPluginOrderSearchResultEntry() {
    this._pluginOrderSearchResultEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderSearchResultEntryInput() {
    return this._pluginOrderSearchResultEntry;
  }

  // plugin_order_search_result_reference - computed: true, optional: true, required: false
  private _pluginOrderSearchResultReference?: string; 
  public get pluginOrderSearchResultReference() {
    return this.getStringAttribute('plugin_order_search_result_reference');
  }
  public set pluginOrderSearchResultReference(value: string) {
    this._pluginOrderSearchResultReference = value;
  }
  public resetPluginOrderSearchResultReference() {
    this._pluginOrderSearchResultReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderSearchResultReferenceInput() {
    return this._pluginOrderSearchResultReference;
  }

  // plugin_order_shutdown - computed: true, optional: true, required: false
  private _pluginOrderShutdown?: string; 
  public get pluginOrderShutdown() {
    return this.getStringAttribute('plugin_order_shutdown');
  }
  public set pluginOrderShutdown(value: string) {
    this._pluginOrderShutdown = value;
  }
  public resetPluginOrderShutdown() {
    this._pluginOrderShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderShutdownInput() {
    return this._pluginOrderShutdown;
  }

  // plugin_order_startup - computed: true, optional: true, required: false
  private _pluginOrderStartup?: string; 
  public get pluginOrderStartup() {
    return this.getStringAttribute('plugin_order_startup');
  }
  public set pluginOrderStartup(value: string) {
    this._pluginOrderStartup = value;
  }
  public resetPluginOrderStartup() {
    this._pluginOrderStartup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderStartupInput() {
    return this._pluginOrderStartup;
  }

  // plugin_order_subordinate_modify_dn - computed: true, optional: true, required: false
  private _pluginOrderSubordinateModifyDn?: string; 
  public get pluginOrderSubordinateModifyDn() {
    return this.getStringAttribute('plugin_order_subordinate_modify_dn');
  }
  public set pluginOrderSubordinateModifyDn(value: string) {
    this._pluginOrderSubordinateModifyDn = value;
  }
  public resetPluginOrderSubordinateModifyDn() {
    this._pluginOrderSubordinateModifyDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginOrderSubordinateModifyDnInput() {
    return this._pluginOrderSubordinateModifyDn;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultPluginRootRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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
      plugin_order_intermediate_response: cdktf.stringToTerraform(this._pluginOrderIntermediateResponse),
      plugin_order_ldif_export: cdktf.stringToTerraform(this._pluginOrderLdifExport),
      plugin_order_ldif_import: cdktf.stringToTerraform(this._pluginOrderLdifImport),
      plugin_order_post_connect: cdktf.stringToTerraform(this._pluginOrderPostConnect),
      plugin_order_post_disconnect: cdktf.stringToTerraform(this._pluginOrderPostDisconnect),
      plugin_order_post_operation_abandon: cdktf.stringToTerraform(this._pluginOrderPostOperationAbandon),
      plugin_order_post_operation_add: cdktf.stringToTerraform(this._pluginOrderPostOperationAdd),
      plugin_order_post_operation_bind: cdktf.stringToTerraform(this._pluginOrderPostOperationBind),
      plugin_order_post_operation_compare: cdktf.stringToTerraform(this._pluginOrderPostOperationCompare),
      plugin_order_post_operation_delete: cdktf.stringToTerraform(this._pluginOrderPostOperationDelete),
      plugin_order_post_operation_extended: cdktf.stringToTerraform(this._pluginOrderPostOperationExtended),
      plugin_order_post_operation_modify: cdktf.stringToTerraform(this._pluginOrderPostOperationModify),
      plugin_order_post_operation_modify_dn: cdktf.stringToTerraform(this._pluginOrderPostOperationModifyDn),
      plugin_order_post_operation_search: cdktf.stringToTerraform(this._pluginOrderPostOperationSearch),
      plugin_order_post_operation_unbind: cdktf.stringToTerraform(this._pluginOrderPostOperationUnbind),
      plugin_order_post_response_add: cdktf.stringToTerraform(this._pluginOrderPostResponseAdd),
      plugin_order_post_response_bind: cdktf.stringToTerraform(this._pluginOrderPostResponseBind),
      plugin_order_post_response_compare: cdktf.stringToTerraform(this._pluginOrderPostResponseCompare),
      plugin_order_post_response_delete: cdktf.stringToTerraform(this._pluginOrderPostResponseDelete),
      plugin_order_post_response_extended: cdktf.stringToTerraform(this._pluginOrderPostResponseExtended),
      plugin_order_post_response_modify: cdktf.stringToTerraform(this._pluginOrderPostResponseModify),
      plugin_order_post_response_modify_dn: cdktf.stringToTerraform(this._pluginOrderPostResponseModifyDn),
      plugin_order_post_response_search: cdktf.stringToTerraform(this._pluginOrderPostResponseSearch),
      plugin_order_post_synchronization_add: cdktf.stringToTerraform(this._pluginOrderPostSynchronizationAdd),
      plugin_order_post_synchronization_delete: cdktf.stringToTerraform(this._pluginOrderPostSynchronizationDelete),
      plugin_order_post_synchronization_modify: cdktf.stringToTerraform(this._pluginOrderPostSynchronizationModify),
      plugin_order_post_synchronization_modify_dn: cdktf.stringToTerraform(this._pluginOrderPostSynchronizationModifyDn),
      plugin_order_pre_operation_add: cdktf.stringToTerraform(this._pluginOrderPreOperationAdd),
      plugin_order_pre_operation_bind: cdktf.stringToTerraform(this._pluginOrderPreOperationBind),
      plugin_order_pre_operation_compare: cdktf.stringToTerraform(this._pluginOrderPreOperationCompare),
      plugin_order_pre_operation_delete: cdktf.stringToTerraform(this._pluginOrderPreOperationDelete),
      plugin_order_pre_operation_extended: cdktf.stringToTerraform(this._pluginOrderPreOperationExtended),
      plugin_order_pre_operation_modify: cdktf.stringToTerraform(this._pluginOrderPreOperationModify),
      plugin_order_pre_operation_modify_dn: cdktf.stringToTerraform(this._pluginOrderPreOperationModifyDn),
      plugin_order_pre_operation_search: cdktf.stringToTerraform(this._pluginOrderPreOperationSearch),
      plugin_order_pre_parse_abandon: cdktf.stringToTerraform(this._pluginOrderPreParseAbandon),
      plugin_order_pre_parse_add: cdktf.stringToTerraform(this._pluginOrderPreParseAdd),
      plugin_order_pre_parse_bind: cdktf.stringToTerraform(this._pluginOrderPreParseBind),
      plugin_order_pre_parse_compare: cdktf.stringToTerraform(this._pluginOrderPreParseCompare),
      plugin_order_pre_parse_delete: cdktf.stringToTerraform(this._pluginOrderPreParseDelete),
      plugin_order_pre_parse_extended: cdktf.stringToTerraform(this._pluginOrderPreParseExtended),
      plugin_order_pre_parse_modify: cdktf.stringToTerraform(this._pluginOrderPreParseModify),
      plugin_order_pre_parse_modify_dn: cdktf.stringToTerraform(this._pluginOrderPreParseModifyDn),
      plugin_order_pre_parse_search: cdktf.stringToTerraform(this._pluginOrderPreParseSearch),
      plugin_order_pre_parse_unbind: cdktf.stringToTerraform(this._pluginOrderPreParseUnbind),
      plugin_order_search_result_entry: cdktf.stringToTerraform(this._pluginOrderSearchResultEntry),
      plugin_order_search_result_reference: cdktf.stringToTerraform(this._pluginOrderSearchResultReference),
      plugin_order_shutdown: cdktf.stringToTerraform(this._pluginOrderShutdown),
      plugin_order_startup: cdktf.stringToTerraform(this._pluginOrderStartup),
      plugin_order_subordinate_modify_dn: cdktf.stringToTerraform(this._pluginOrderSubordinateModifyDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      plugin_order_intermediate_response: {
        value: cdktf.stringToHclTerraform(this._pluginOrderIntermediateResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_ldif_export: {
        value: cdktf.stringToHclTerraform(this._pluginOrderLdifExport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_ldif_import: {
        value: cdktf.stringToHclTerraform(this._pluginOrderLdifImport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_connect: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_disconnect: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostDisconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_abandon: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationAbandon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_add: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_bind: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationBind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_compare: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationCompare),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_delete: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_extended: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationExtended),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_modify: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationModify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_modify_dn: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationModifyDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_search: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_operation_unbind: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostOperationUnbind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_response_add: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostResponseAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_response_bind: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostResponseBind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_response_compare: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostResponseCompare),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_response_delete: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostResponseDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_response_extended: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostResponseExtended),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_response_modify: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostResponseModify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_response_modify_dn: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostResponseModifyDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_response_search: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostResponseSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_synchronization_add: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostSynchronizationAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_synchronization_delete: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostSynchronizationDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_synchronization_modify: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostSynchronizationModify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_post_synchronization_modify_dn: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPostSynchronizationModifyDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_operation_add: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreOperationAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_operation_bind: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreOperationBind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_operation_compare: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreOperationCompare),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_operation_delete: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreOperationDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_operation_extended: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreOperationExtended),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_operation_modify: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreOperationModify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_operation_modify_dn: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreOperationModifyDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_operation_search: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreOperationSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_abandon: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseAbandon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_add: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseAdd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_bind: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseBind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_compare: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseCompare),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_delete: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_extended: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseExtended),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_modify: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseModify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_modify_dn: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseModifyDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_search: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_pre_parse_unbind: {
        value: cdktf.stringToHclTerraform(this._pluginOrderPreParseUnbind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_search_result_entry: {
        value: cdktf.stringToHclTerraform(this._pluginOrderSearchResultEntry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_search_result_reference: {
        value: cdktf.stringToHclTerraform(this._pluginOrderSearchResultReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_shutdown: {
        value: cdktf.stringToHclTerraform(this._pluginOrderShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_startup: {
        value: cdktf.stringToHclTerraform(this._pluginOrderStartup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_order_subordinate_modify_dn: {
        value: cdktf.stringToHclTerraform(this._pluginOrderSubordinateModifyDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
