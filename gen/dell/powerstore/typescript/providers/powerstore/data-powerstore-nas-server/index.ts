// https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/nas_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerstoreNasServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * PowerStore filter expression to filter NAS Servers by. Conflicts with `id` and `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/nas_server#filter_expression DataPowerstoreNasServer#filter_expression}
  */
  readonly filterExpression?: string;
  /**
  * Unique identifier of the NAS Server. Conflicts with `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/nas_server#id DataPowerstoreNasServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NAS Server name. Conflicts with `id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/nas_server#name DataPowerstoreNasServer#name}
  */
  readonly name?: string;
}
export interface DataPowerstoreNasServerNasServers {
}

export function dataPowerstoreNasServerNasServersToTerraform(struct?: DataPowerstoreNasServerNasServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerstoreNasServerNasServersToHclTerraform(struct?: DataPowerstoreNasServerNasServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerstoreNasServerNasServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerstoreNasServerNasServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerstoreNasServerNasServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_ipv4_interface_id - computed: true, optional: false, required: false
  public get backupIpv4InterfaceId() {
    return this.getStringAttribute('backup_ipv4_interface_id');
  }

  // backup_ipv6_interface_id - computed: true, optional: false, required: false
  public get backupIpv6InterfaceId() {
    return this.getStringAttribute('backup_ipv6_interface_id');
  }

  // current_node_id - computed: true, optional: false, required: false
  public get currentNodeId() {
    return this.getStringAttribute('current_node_id');
  }

  // current_preferred_ipv4_interface_id - computed: true, optional: false, required: false
  public get currentPreferredIpv4InterfaceId() {
    return this.getStringAttribute('current_preferred_ipv4_interface_id');
  }

  // current_preferred_ipv6_interface_id - computed: true, optional: false, required: false
  public get currentPreferredIpv6InterfaceId() {
    return this.getStringAttribute('current_preferred_ipv6_interface_id');
  }

  // current_unix_directory_service - computed: true, optional: false, required: false
  public get currentUnixDirectoryService() {
    return this.getStringAttribute('current_unix_directory_service');
  }

  // current_unix_directory_service_l10n - computed: true, optional: false, required: false
  public get currentUnixDirectoryServiceL10N() {
    return this.getStringAttribute('current_unix_directory_service_l10n');
  }

  // default_unix_user - computed: true, optional: false, required: false
  public get defaultUnixUser() {
    return this.getStringAttribute('default_unix_user');
  }

  // default_windows_user - computed: true, optional: false, required: false
  public get defaultWindowsUser() {
    return this.getStringAttribute('default_windows_user');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // file_events_publishing_mode - computed: true, optional: false, required: false
  public get fileEventsPublishingMode() {
    return this.getStringAttribute('file_events_publishing_mode');
  }

  // file_events_publishing_mode_l10n - computed: true, optional: false, required: false
  public get fileEventsPublishingModeL10N() {
    return this.getStringAttribute('file_events_publishing_mode_l10n');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_user_mapping_enabled - computed: true, optional: false, required: false
  public get isAutoUserMappingEnabled() {
    return this.getBooleanAttribute('is_auto_user_mapping_enabled');
  }

  // is_dr_test - computed: true, optional: false, required: false
  public get isDrTest() {
    return this.getBooleanAttribute('is_dr_test');
  }

  // is_production_mode_enabled - computed: true, optional: false, required: false
  public get isProductionModeEnabled() {
    return this.getBooleanAttribute('is_production_mode_enabled');
  }

  // is_replication_destination - computed: true, optional: false, required: false
  public get isReplicationDestination() {
    return this.getBooleanAttribute('is_replication_destination');
  }

  // is_username_translation_enabled - computed: true, optional: false, required: false
  public get isUsernameTranslationEnabled() {
    return this.getBooleanAttribute('is_username_translation_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // operational_status_l10n - computed: true, optional: false, required: false
  public get operationalStatusL10N() {
    return this.getStringAttribute('operational_status_l10n');
  }

  // preferred_node_id - computed: true, optional: false, required: false
  public get preferredNodeId() {
    return this.getStringAttribute('preferred_node_id');
  }

  // production_ipv4_interface_id - computed: true, optional: false, required: false
  public get productionIpv4InterfaceId() {
    return this.getStringAttribute('production_ipv4_interface_id');
  }

  // production_ipv6_interface_id - computed: true, optional: false, required: false
  public get productionIpv6InterfaceId() {
    return this.getStringAttribute('production_ipv6_interface_id');
  }

  // protection_policy_id - computed: true, optional: false, required: false
  public get protectionPolicyId() {
    return this.getStringAttribute('protection_policy_id');
  }
}

export class DataPowerstoreNasServerNasServersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerstoreNasServerNasServersOutputReference {
    return new DataPowerstoreNasServerNasServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/nas_server powerstore_nas_server}
*/
export class DataPowerstoreNasServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerstore_nas_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerstoreNasServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerstoreNasServer to import
  * @param importFromId The id of the existing DataPowerstoreNasServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/nas_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerstoreNasServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerstore_nas_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerstore/1.2.1/docs/data-sources/nas_server powerstore_nas_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerstoreNasServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerstoreNasServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerstore_nas_server',
      terraformGeneratorMetadata: {
        providerName: 'powerstore',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterExpression = config.filterExpression;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_expression - computed: false, optional: true, required: false
  private _filterExpression?: string; 
  public get filterExpression() {
    return this.getStringAttribute('filter_expression');
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }
  public resetFilterExpression() {
    this._filterExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExpressionInput() {
    return this._filterExpression;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nas_servers - computed: true, optional: false, required: false
  private _nasServers = new DataPowerstoreNasServerNasServersList(this, "nas_servers", false);
  public get nasServers() {
    return this._nasServers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_expression: cdktf.stringToTerraform(this._filterExpression),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_expression: {
        value: cdktf.stringToHclTerraform(this._filterExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
