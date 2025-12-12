// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackVpnConnectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections#customer_gateway_id DataAlibabacloudstackVpnConnections#customer_gateway_id}
  */
  readonly customerGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections#id DataAlibabacloudstackVpnConnections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections#ids DataAlibabacloudstackVpnConnections#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections#name_regex DataAlibabacloudstackVpnConnections#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections#output_file DataAlibabacloudstackVpnConnections#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections#vpn_gateway_id DataAlibabacloudstackVpnConnections#vpn_gateway_id}
  */
  readonly vpnGatewayId?: string;
}
export interface DataAlibabacloudstackVpnConnectionsConnectionsIkeConfig {
}

export function dataAlibabacloudstackVpnConnectionsConnectionsIkeConfigToTerraform(struct?: DataAlibabacloudstackVpnConnectionsConnectionsIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackVpnConnectionsConnectionsIkeConfigToHclTerraform(struct?: DataAlibabacloudstackVpnConnectionsConnectionsIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackVpnConnectionsConnectionsIkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackVpnConnectionsConnectionsIkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackVpnConnectionsConnectionsIkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ike_auth_alg - computed: true, optional: false, required: false
  public get ikeAuthAlg() {
    return this.getStringAttribute('ike_auth_alg');
  }

  // ike_enc_alg - computed: true, optional: false, required: false
  public get ikeEncAlg() {
    return this.getStringAttribute('ike_enc_alg');
  }

  // ike_lifetime - computed: true, optional: false, required: false
  public get ikeLifetime() {
    return this.getNumberAttribute('ike_lifetime');
  }

  // ike_local_id - computed: true, optional: false, required: false
  public get ikeLocalId() {
    return this.getStringAttribute('ike_local_id');
  }

  // ike_mode - computed: true, optional: false, required: false
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }

  // ike_pfs - computed: true, optional: false, required: false
  public get ikePfs() {
    return this.getStringAttribute('ike_pfs');
  }

  // ike_remote_id - computed: true, optional: false, required: false
  public get ikeRemoteId() {
    return this.getStringAttribute('ike_remote_id');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }

  // psk - computed: true, optional: false, required: false
  public get psk() {
    return this.getStringAttribute('psk');
  }
}

export class DataAlibabacloudstackVpnConnectionsConnectionsIkeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackVpnConnectionsConnectionsIkeConfigOutputReference {
    return new DataAlibabacloudstackVpnConnectionsConnectionsIkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfig {
}

export function dataAlibabacloudstackVpnConnectionsConnectionsIpsecConfigToTerraform(struct?: DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackVpnConnectionsConnectionsIpsecConfigToHclTerraform(struct?: DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipsec_auth_alg - computed: true, optional: false, required: false
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }

  // ipsec_enc_alg - computed: true, optional: false, required: false
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }

  // ipsec_lifetime - computed: true, optional: false, required: false
  public get ipsecLifetime() {
    return this.getNumberAttribute('ipsec_lifetime');
  }

  // ipsec_pfs - computed: true, optional: false, required: false
  public get ipsecPfs() {
    return this.getStringAttribute('ipsec_pfs');
  }
}

export class DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfigOutputReference {
    return new DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlibabacloudstackVpnConnectionsConnections {
}

export function dataAlibabacloudstackVpnConnectionsConnectionsToTerraform(struct?: DataAlibabacloudstackVpnConnectionsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackVpnConnectionsConnectionsToHclTerraform(struct?: DataAlibabacloudstackVpnConnectionsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackVpnConnectionsConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlibabacloudstackVpnConnectionsConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackVpnConnectionsConnections | undefined) {
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

  // effect_immediately - computed: true, optional: false, required: false
  public get effectImmediately() {
    return this.getBooleanAttribute('effect_immediately');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_config - computed: true, optional: false, required: false
  private _ikeConfig = new DataAlibabacloudstackVpnConnectionsConnectionsIkeConfigList(this, "ike_config", false);
  public get ikeConfig() {
    return this._ikeConfig;
  }

  // ipsec_config - computed: true, optional: false, required: false
  private _ipsecConfig = new DataAlibabacloudstackVpnConnectionsConnectionsIpsecConfigList(this, "ipsec_config", false);
  public get ipsecConfig() {
    return this._ipsecConfig;
  }

  // local_subnet - computed: true, optional: false, required: false
  public get localSubnet() {
    return this.getStringAttribute('local_subnet');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remote_subnet - computed: true, optional: false, required: false
  public get remoteSubnet() {
    return this.getStringAttribute('remote_subnet');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpn_gateway_id - computed: true, optional: false, required: false
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
}

export class DataAlibabacloudstackVpnConnectionsConnectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlibabacloudstackVpnConnectionsConnectionsOutputReference {
    return new DataAlibabacloudstackVpnConnectionsConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections alibabacloudstack_vpn_connections}
*/
export class DataAlibabacloudstackVpnConnections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpn_connections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackVpnConnections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackVpnConnections to import
  * @param importFromId The id of the existing DataAlibabacloudstackVpnConnections that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackVpnConnections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpn_connections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/vpn_connections alibabacloudstack_vpn_connections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackVpnConnectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackVpnConnectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpn_connections',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._vpnGatewayId = config.vpnGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connections - computed: true, optional: false, required: false
  private _connections = new DataAlibabacloudstackVpnConnectionsConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
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
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
