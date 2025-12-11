// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudVpcGatewayFlowMonitorDetailConfig extends cdktf.TerraformMetaArguments {
  /**
  * The instance ID of the Direct Connect gateway, such as `dcg-ltjahce6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#direct_connect_gateway_id DataTencentcloudVpcGatewayFlowMonitorDetail#direct_connect_gateway_id}
  */
  readonly directConnectGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#id DataTencentcloudVpcGatewayFlowMonitorDetail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance ID of the NAT gateway, such as `nat-ltjahce6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#nat_id DataTencentcloudVpcGatewayFlowMonitorDetail#nat_id}
  */
  readonly natId?: string;
  /**
  * Order methods. Ascending: `ASC`, Descending: `DESC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#order_direction DataTencentcloudVpcGatewayFlowMonitorDetail#order_direction}
  */
  readonly orderDirection?: string;
  /**
  * The order field supports `InPkg`, `OutPkg`, `InTraffic`, and `OutTraffic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#order_field DataTencentcloudVpcGatewayFlowMonitorDetail#order_field}
  */
  readonly orderField?: string;
  /**
  * The instance ID of the peering connection, such as `pcx-ltjahce6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#peering_connection_id DataTencentcloudVpcGatewayFlowMonitorDetail#peering_connection_id}
  */
  readonly peeringConnectionId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#result_output_file DataTencentcloudVpcGatewayFlowMonitorDetail#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The point in time. This indicates details of this minute will be queried. For example, in `2019-02-28 18:15:20`, details at `18:15` will be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#time_point DataTencentcloudVpcGatewayFlowMonitorDetail#time_point}
  */
  readonly timePoint: string;
  /**
  * The instance ID of the VPN gateway, such as `vpn-ltjahce6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#vpn_id DataTencentcloudVpcGatewayFlowMonitorDetail#vpn_id}
  */
  readonly vpnId?: string;
}
export interface DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSet {
}

export function dataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSetToTerraform(struct?: DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSetToHclTerraform(struct?: DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in_pkg - computed: true, optional: false, required: false
  public get inPkg() {
    return this.getNumberAttribute('in_pkg');
  }

  // in_traffic - computed: true, optional: false, required: false
  public get inTraffic() {
    return this.getNumberAttribute('in_traffic');
  }

  // out_pkg - computed: true, optional: false, required: false
  public get outPkg() {
    return this.getNumberAttribute('out_pkg');
  }

  // out_traffic - computed: true, optional: false, required: false
  public get outTraffic() {
    return this.getNumberAttribute('out_traffic');
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
}

export class DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSetOutputReference {
    return new DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail tencentcloud_vpc_gateway_flow_monitor_detail}
*/
export class DataTencentcloudVpcGatewayFlowMonitorDetail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_gateway_flow_monitor_detail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudVpcGatewayFlowMonitorDetail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudVpcGatewayFlowMonitorDetail to import
  * @param importFromId The id of the existing DataTencentcloudVpcGatewayFlowMonitorDetail that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudVpcGatewayFlowMonitorDetail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_gateway_flow_monitor_detail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/data-sources/vpc_gateway_flow_monitor_detail tencentcloud_vpc_gateway_flow_monitor_detail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudVpcGatewayFlowMonitorDetailConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudVpcGatewayFlowMonitorDetailConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_gateway_flow_monitor_detail',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directConnectGatewayId = config.directConnectGatewayId;
    this._id = config.id;
    this._natId = config.natId;
    this._orderDirection = config.orderDirection;
    this._orderField = config.orderField;
    this._peeringConnectionId = config.peeringConnectionId;
    this._resultOutputFile = config.resultOutputFile;
    this._timePoint = config.timePoint;
    this._vpnId = config.vpnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direct_connect_gateway_id - computed: false, optional: true, required: false
  private _directConnectGatewayId?: string; 
  public get directConnectGatewayId() {
    return this.getStringAttribute('direct_connect_gateway_id');
  }
  public set directConnectGatewayId(value: string) {
    this._directConnectGatewayId = value;
  }
  public resetDirectConnectGatewayId() {
    this._directConnectGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectGatewayIdInput() {
    return this._directConnectGatewayId;
  }

  // gateway_flow_monitor_detail_set - computed: true, optional: false, required: false
  private _gatewayFlowMonitorDetailSet = new DataTencentcloudVpcGatewayFlowMonitorDetailGatewayFlowMonitorDetailSetList(this, "gateway_flow_monitor_detail_set", false);
  public get gatewayFlowMonitorDetailSet() {
    return this._gatewayFlowMonitorDetailSet;
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

  // nat_id - computed: false, optional: true, required: false
  private _natId?: string; 
  public get natId() {
    return this.getStringAttribute('nat_id');
  }
  public set natId(value: string) {
    this._natId = value;
  }
  public resetNatId() {
    this._natId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIdInput() {
    return this._natId;
  }

  // order_direction - computed: false, optional: true, required: false
  private _orderDirection?: string; 
  public get orderDirection() {
    return this.getStringAttribute('order_direction');
  }
  public set orderDirection(value: string) {
    this._orderDirection = value;
  }
  public resetOrderDirection() {
    this._orderDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderDirectionInput() {
    return this._orderDirection;
  }

  // order_field - computed: false, optional: true, required: false
  private _orderField?: string; 
  public get orderField() {
    return this.getStringAttribute('order_field');
  }
  public set orderField(value: string) {
    this._orderField = value;
  }
  public resetOrderField() {
    this._orderField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderFieldInput() {
    return this._orderField;
  }

  // peering_connection_id - computed: false, optional: true, required: false
  private _peeringConnectionId?: string; 
  public get peeringConnectionId() {
    return this.getStringAttribute('peering_connection_id');
  }
  public set peeringConnectionId(value: string) {
    this._peeringConnectionId = value;
  }
  public resetPeeringConnectionId() {
    this._peeringConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringConnectionIdInput() {
    return this._peeringConnectionId;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // time_point - computed: false, optional: false, required: true
  private _timePoint?: string; 
  public get timePoint() {
    return this.getStringAttribute('time_point');
  }
  public set timePoint(value: string) {
    this._timePoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePointInput() {
    return this._timePoint;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: string; 
  public get vpnId() {
    return this.getStringAttribute('vpn_id');
  }
  public set vpnId(value: string) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direct_connect_gateway_id: cdktf.stringToTerraform(this._directConnectGatewayId),
      id: cdktf.stringToTerraform(this._id),
      nat_id: cdktf.stringToTerraform(this._natId),
      order_direction: cdktf.stringToTerraform(this._orderDirection),
      order_field: cdktf.stringToTerraform(this._orderField),
      peering_connection_id: cdktf.stringToTerraform(this._peeringConnectionId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      time_point: cdktf.stringToTerraform(this._timePoint),
      vpn_id: cdktf.stringToTerraform(this._vpnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direct_connect_gateway_id: {
        value: cdktf.stringToHclTerraform(this._directConnectGatewayId),
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
      nat_id: {
        value: cdktf.stringToHclTerraform(this._natId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_direction: {
        value: cdktf.stringToHclTerraform(this._orderDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_field: {
        value: cdktf.stringToHclTerraform(this._orderField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_connection_id: {
        value: cdktf.stringToHclTerraform(this._peeringConnectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_point: {
        value: cdktf.stringToHclTerraform(this._timePoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_id: {
        value: cdktf.stringToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
