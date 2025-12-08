// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudExpressConnectVirtualPhysicalConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#business_status DataAlicloudExpressConnectVirtualPhysicalConnections#business_status}
  */
  readonly businessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#id DataAlicloudExpressConnectVirtualPhysicalConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#ids DataAlicloudExpressConnectVirtualPhysicalConnections#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#is_confirmed DataAlicloudExpressConnectVirtualPhysicalConnections#is_confirmed}
  */
  readonly isConfirmed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#name_regex DataAlicloudExpressConnectVirtualPhysicalConnections#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#output_file DataAlicloudExpressConnectVirtualPhysicalConnections#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#parent_physical_connection_id DataAlicloudExpressConnectVirtualPhysicalConnections#parent_physical_connection_id}
  */
  readonly parentPhysicalConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#virtual_physical_connection_ids DataAlicloudExpressConnectVirtualPhysicalConnections#virtual_physical_connection_ids}
  */
  readonly virtualPhysicalConnectionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#virtual_physical_connection_status DataAlicloudExpressConnectVirtualPhysicalConnections#virtual_physical_connection_status}
  */
  readonly virtualPhysicalConnectionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#vlan_ids DataAlicloudExpressConnectVirtualPhysicalConnections#vlan_ids}
  */
  readonly vlanIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#vpconn_ali_uid DataAlicloudExpressConnectVirtualPhysicalConnections#vpconn_ali_uid}
  */
  readonly vpconnAliUid?: string;
}
export interface DataAlicloudExpressConnectVirtualPhysicalConnectionsConnections {
}

export function dataAlicloudExpressConnectVirtualPhysicalConnectionsConnectionsToTerraform(struct?: DataAlicloudExpressConnectVirtualPhysicalConnectionsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudExpressConnectVirtualPhysicalConnectionsConnectionsToHclTerraform(struct?: DataAlicloudExpressConnectVirtualPhysicalConnectionsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudExpressConnectVirtualPhysicalConnectionsConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudExpressConnectVirtualPhysicalConnectionsConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudExpressConnectVirtualPhysicalConnectionsConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_point_id - computed: true, optional: false, required: false
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }

  // ad_location - computed: true, optional: false, required: false
  public get adLocation() {
    return this.getStringAttribute('ad_location');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }

  // business_status - computed: true, optional: false, required: false
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }

  // circuit_code - computed: true, optional: false, required: false
  public get circuitCode() {
    return this.getStringAttribute('circuit_code');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled_time - computed: true, optional: false, required: false
  public get enabledTime() {
    return this.getStringAttribute('enabled_time');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // expect_spec - computed: true, optional: false, required: false
  public get expectSpec() {
    return this.getStringAttribute('expect_spec');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // line_operator - computed: true, optional: false, required: false
  public get lineOperator() {
    return this.getStringAttribute('line_operator');
  }

  // loa_status - computed: true, optional: false, required: false
  public get loaStatus() {
    return this.getStringAttribute('loa_status');
  }

  // order_mode - computed: true, optional: false, required: false
  public get orderMode() {
    return this.getStringAttribute('order_mode');
  }

  // parent_physical_connection_ali_uid - computed: true, optional: false, required: false
  public get parentPhysicalConnectionAliUid() {
    return this.getStringAttribute('parent_physical_connection_ali_uid');
  }

  // parent_physical_connection_id - computed: true, optional: false, required: false
  public get parentPhysicalConnectionId() {
    return this.getStringAttribute('parent_physical_connection_id');
  }

  // peer_location - computed: true, optional: false, required: false
  public get peerLocation() {
    return this.getStringAttribute('peer_location');
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getStringAttribute('port_number');
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }

  // redundant_physical_connection_id - computed: true, optional: false, required: false
  public get redundantPhysicalConnectionId() {
    return this.getStringAttribute('redundant_physical_connection_id');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // virtual_physical_connection_id - computed: true, optional: false, required: false
  public get virtualPhysicalConnectionId() {
    return this.getStringAttribute('virtual_physical_connection_id');
  }

  // virtual_physical_connection_name - computed: true, optional: false, required: false
  public get virtualPhysicalConnectionName() {
    return this.getStringAttribute('virtual_physical_connection_name');
  }

  // virtual_physical_connection_status - computed: true, optional: false, required: false
  public get virtualPhysicalConnectionStatus() {
    return this.getStringAttribute('virtual_physical_connection_status');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vpconn_ali_uid - computed: true, optional: false, required: false
  public get vpconnAliUid() {
    return this.getStringAttribute('vpconn_ali_uid');
  }
}

export class DataAlicloudExpressConnectVirtualPhysicalConnectionsConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudExpressConnectVirtualPhysicalConnectionsConnectionsOutputReference {
    return new DataAlicloudExpressConnectVirtualPhysicalConnectionsConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections alicloud_express_connect_virtual_physical_connections}
*/
export class DataAlicloudExpressConnectVirtualPhysicalConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_express_connect_virtual_physical_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudExpressConnectVirtualPhysicalConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudExpressConnectVirtualPhysicalConnections to import
  * @param importFromId The id of the existing DataAlicloudExpressConnectVirtualPhysicalConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudExpressConnectVirtualPhysicalConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_express_connect_virtual_physical_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/express_connect_virtual_physical_connections alicloud_express_connect_virtual_physical_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudExpressConnectVirtualPhysicalConnectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudExpressConnectVirtualPhysicalConnectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_express_connect_virtual_physical_connections',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._businessStatus = config.businessStatus;
    this._id = config.id;
    this._ids = config.ids;
    this._isConfirmed = config.isConfirmed;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._parentPhysicalConnectionId = config.parentPhysicalConnectionId;
    this._virtualPhysicalConnectionIds = config.virtualPhysicalConnectionIds;
    this._virtualPhysicalConnectionStatus = config.virtualPhysicalConnectionStatus;
    this._vlanIds = config.vlanIds;
    this._vpconnAliUid = config.vpconnAliUid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_status - computed: false, optional: true, required: false
  private _businessStatus?: string; 
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }
  public set businessStatus(value: string) {
    this._businessStatus = value;
  }
  public resetBusinessStatus() {
    this._businessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessStatusInput() {
    return this._businessStatus;
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataAlicloudExpressConnectVirtualPhysicalConnectionsConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // is_confirmed - computed: false, optional: true, required: false
  private _isConfirmed?: boolean | cdktf.IResolvable; 
  public get isConfirmed() {
    return this.getBooleanAttribute('is_confirmed');
  }
  public set isConfirmed(value: boolean | cdktf.IResolvable) {
    this._isConfirmed = value;
  }
  public resetIsConfirmed() {
    this._isConfirmed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConfirmedInput() {
    return this._isConfirmed;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // parent_physical_connection_id - computed: false, optional: true, required: false
  private _parentPhysicalConnectionId?: string; 
  public get parentPhysicalConnectionId() {
    return this.getStringAttribute('parent_physical_connection_id');
  }
  public set parentPhysicalConnectionId(value: string) {
    this._parentPhysicalConnectionId = value;
  }
  public resetParentPhysicalConnectionId() {
    this._parentPhysicalConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPhysicalConnectionIdInput() {
    return this._parentPhysicalConnectionId;
  }

  // virtual_physical_connection_ids - computed: false, optional: true, required: false
  private _virtualPhysicalConnectionIds?: string[]; 
  public get virtualPhysicalConnectionIds() {
    return this.getListAttribute('virtual_physical_connection_ids');
  }
  public set virtualPhysicalConnectionIds(value: string[]) {
    this._virtualPhysicalConnectionIds = value;
  }
  public resetVirtualPhysicalConnectionIds() {
    this._virtualPhysicalConnectionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPhysicalConnectionIdsInput() {
    return this._virtualPhysicalConnectionIds;
  }

  // virtual_physical_connection_status - computed: false, optional: true, required: false
  private _virtualPhysicalConnectionStatus?: string; 
  public get virtualPhysicalConnectionStatus() {
    return this.getStringAttribute('virtual_physical_connection_status');
  }
  public set virtualPhysicalConnectionStatus(value: string) {
    this._virtualPhysicalConnectionStatus = value;
  }
  public resetVirtualPhysicalConnectionStatus() {
    this._virtualPhysicalConnectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPhysicalConnectionStatusInput() {
    return this._virtualPhysicalConnectionStatus;
  }

  // vlan_ids - computed: false, optional: true, required: false
  private _vlanIds?: number[]; 
  public get vlanIds() {
    return this.getNumberListAttribute('vlan_ids');
  }
  public set vlanIds(value: number[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }

  // vpconn_ali_uid - computed: false, optional: true, required: false
  private _vpconnAliUid?: string; 
  public get vpconnAliUid() {
    return this.getStringAttribute('vpconn_ali_uid');
  }
  public set vpconnAliUid(value: string) {
    this._vpconnAliUid = value;
  }
  public resetVpconnAliUid() {
    this._vpconnAliUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpconnAliUidInput() {
    return this._vpconnAliUid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_status: cdktf.stringToTerraform(this._businessStatus),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      is_confirmed: cdktf.booleanToTerraform(this._isConfirmed),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      parent_physical_connection_id: cdktf.stringToTerraform(this._parentPhysicalConnectionId),
      virtual_physical_connection_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualPhysicalConnectionIds),
      virtual_physical_connection_status: cdktf.stringToTerraform(this._virtualPhysicalConnectionStatus),
      vlan_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._vlanIds),
      vpconn_ali_uid: cdktf.stringToTerraform(this._vpconnAliUid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_status: {
        value: cdktf.stringToHclTerraform(this._businessStatus),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_confirmed: {
        value: cdktf.booleanToHclTerraform(this._isConfirmed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_physical_connection_id: {
        value: cdktf.stringToHclTerraform(this._parentPhysicalConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_physical_connection_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualPhysicalConnectionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virtual_physical_connection_status: {
        value: cdktf.stringToHclTerraform(this._virtualPhysicalConnectionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._vlanIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      vpconn_ali_uid: {
        value: cdktf.stringToHclTerraform(this._vpconnAliUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
