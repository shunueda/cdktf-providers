// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudVpnConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customer gateway ID of the VPN connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections#customer_gateway_id DataTencentcloudVpnConnections#customer_gateway_id}
  */
  readonly customerGatewayId?: string;
  /**
  * ID of the VPN connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections#id DataTencentcloudVpnConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the VPN connection. The length of character is limited to 1-60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections#name DataTencentcloudVpnConnections#name}
  */
  readonly name?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections#result_output_file DataTencentcloudVpnConnections#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Tags of the VPN connection to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections#tags DataTencentcloudVpnConnections#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections#vpc_id DataTencentcloudVpnConnections#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * VPN gateway ID of the VPN connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections#vpn_gateway_id DataTencentcloudVpnConnections#vpn_gateway_id}
  */
  readonly vpnGatewayId?: string;
}
export interface DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicy {
}

export function dataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicyToTerraform(struct?: DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicyToHclTerraform(struct?: DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_cidr_block - computed: true, optional: false, required: false
  public get localCidrBlock() {
    return this.getStringAttribute('local_cidr_block');
  }

  // remote_cidr_block - computed: true, optional: false, required: false
  public get remoteCidrBlock() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_cidr_block'));
  }
}

export class DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicyOutputReference {
    return new DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudVpnConnectionsConnectionListStruct {
}

export function dataTencentcloudVpnConnectionsConnectionListStructToTerraform(struct?: DataTencentcloudVpnConnectionsConnectionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVpnConnectionsConnectionListStructToHclTerraform(struct?: DataTencentcloudVpnConnectionsConnectionListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVpnConnectionsConnectionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudVpnConnectionsConnectionListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVpnConnectionsConnectionListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_gateway_id - computed: true, optional: false, required: false
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }

  // encrypt_proto - computed: true, optional: false, required: false
  public get encryptProto() {
    return this.getStringAttribute('encrypt_proto');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_dh_group_name - computed: true, optional: false, required: false
  public get ikeDhGroupName() {
    return this.getStringAttribute('ike_dh_group_name');
  }

  // ike_exchange_mode - computed: true, optional: false, required: false
  public get ikeExchangeMode() {
    return this.getStringAttribute('ike_exchange_mode');
  }

  // ike_local_address - computed: true, optional: false, required: false
  public get ikeLocalAddress() {
    return this.getStringAttribute('ike_local_address');
  }

  // ike_local_fqdn_name - computed: true, optional: false, required: false
  public get ikeLocalFqdnName() {
    return this.getStringAttribute('ike_local_fqdn_name');
  }

  // ike_local_identity - computed: true, optional: false, required: false
  public get ikeLocalIdentity() {
    return this.getStringAttribute('ike_local_identity');
  }

  // ike_proto_authen_algorithm - computed: true, optional: false, required: false
  public get ikeProtoAuthenAlgorithm() {
    return this.getStringAttribute('ike_proto_authen_algorithm');
  }

  // ike_proto_encry_algorithm - computed: true, optional: false, required: false
  public get ikeProtoEncryAlgorithm() {
    return this.getStringAttribute('ike_proto_encry_algorithm');
  }

  // ike_remote_address - computed: true, optional: false, required: false
  public get ikeRemoteAddress() {
    return this.getStringAttribute('ike_remote_address');
  }

  // ike_remote_fqdn_name - computed: true, optional: false, required: false
  public get ikeRemoteFqdnName() {
    return this.getStringAttribute('ike_remote_fqdn_name');
  }

  // ike_remote_identity - computed: true, optional: false, required: false
  public get ikeRemoteIdentity() {
    return this.getStringAttribute('ike_remote_identity');
  }

  // ike_sa_lifetime_seconds - computed: true, optional: false, required: false
  public get ikeSaLifetimeSeconds() {
    return this.getNumberAttribute('ike_sa_lifetime_seconds');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }

  // ipsec_encrypt_algorithm - computed: true, optional: false, required: false
  public get ipsecEncryptAlgorithm() {
    return this.getStringAttribute('ipsec_encrypt_algorithm');
  }

  // ipsec_integrity_algorithm - computed: true, optional: false, required: false
  public get ipsecIntegrityAlgorithm() {
    return this.getStringAttribute('ipsec_integrity_algorithm');
  }

  // ipsec_pfs_dh_group - computed: true, optional: false, required: false
  public get ipsecPfsDhGroup() {
    return this.getStringAttribute('ipsec_pfs_dh_group');
  }

  // ipsec_sa_lifetime_seconds - computed: true, optional: false, required: false
  public get ipsecSaLifetimeSeconds() {
    return this.getNumberAttribute('ipsec_sa_lifetime_seconds');
  }

  // ipsec_sa_lifetime_traffic - computed: true, optional: false, required: false
  public get ipsecSaLifetimeTraffic() {
    return this.getNumberAttribute('ipsec_sa_lifetime_traffic');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // net_status - computed: true, optional: false, required: false
  public get netStatus() {
    return this.getStringAttribute('net_status');
  }

  // pre_share_key - computed: true, optional: false, required: false
  public get preShareKey() {
    return this.getStringAttribute('pre_share_key');
  }

  // route_type - computed: true, optional: false, required: false
  public get routeType() {
    return this.getStringAttribute('route_type');
  }

  // security_group_policy - computed: true, optional: false, required: false
  private _securityGroupPolicy = new DataTencentcloudVpnConnectionsConnectionListSecurityGroupPolicyList(this, "security_group_policy", false);
  public get securityGroupPolicy() {
    return this._securityGroupPolicy;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpn_gateway_id - computed: true, optional: false, required: false
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }

  // vpn_proto - computed: true, optional: false, required: false
  public get vpnProto() {
    return this.getStringAttribute('vpn_proto');
  }
}

export class DataTencentcloudVpnConnectionsConnectionListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudVpnConnectionsConnectionListStructOutputReference {
    return new DataTencentcloudVpnConnectionsConnectionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections tencentcloud_vpn_connections}
*/
export class DataTencentcloudVpnConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpn_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudVpnConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudVpnConnections to import
  * @param importFromId The id of the existing DataTencentcloudVpnConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudVpnConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpn_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/vpn_connections tencentcloud_vpn_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudVpnConnectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudVpnConnectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpn_connections',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerGatewayId = config.customerGatewayId;
    this._id = config.id;
    this._name = config.name;
    this._resultOutputFile = config.resultOutputFile;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vpnGatewayId = config.vpnGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_list - computed: true, optional: false, required: false
  private _connectionList = new DataTencentcloudVpnConnectionsConnectionListStructList(this, "connection_list", false);
  public get connectionList() {
    return this._connectionList;
  }

  // customer_gateway_id - computed: false, optional: true, required: false
  private _customerGatewayId?: string; 
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }
  public resetCustomerGatewayId() {
    this._customerGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIdInput() {
    return this._customerGatewayId;
  }

  // id - computed: false, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  public resetVpnGatewayId() {
    this._vpnGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_gateway_id: {
        value: cdktf.stringToHclTerraform(this._customerGatewayId),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_id: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
