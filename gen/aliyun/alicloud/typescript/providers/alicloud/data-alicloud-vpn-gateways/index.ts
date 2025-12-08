// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudVpnGatewaysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#business_status DataAlicloudVpnGateways#business_status}
  */
  readonly businessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#enable_ipsec DataAlicloudVpnGateways#enable_ipsec}
  */
  readonly enableIpsec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#id DataAlicloudVpnGateways#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#ids DataAlicloudVpnGateways#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#include_reservation_data DataAlicloudVpnGateways#include_reservation_data}
  */
  readonly includeReservationData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#name_regex DataAlicloudVpnGateways#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#output_file DataAlicloudVpnGateways#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#ssl_vpn DataAlicloudVpnGateways#ssl_vpn}
  */
  readonly sslVpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#status DataAlicloudVpnGateways#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#vpc_id DataAlicloudVpnGateways#vpc_id}
  */
  readonly vpcId?: string;
}
export interface DataAlicloudVpnGatewaysGateways {
}

export function dataAlicloudVpnGatewaysGatewaysToTerraform(struct?: DataAlicloudVpnGatewaysGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewaysGatewaysToHclTerraform(struct?: DataAlicloudVpnGatewaysGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewaysGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewaysGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewaysGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_propagate - computed: true, optional: false, required: false
  public get autoPropagate() {
    return this.getStringAttribute('auto_propagate');
  }

  // business_status - computed: true, optional: false, required: false
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disaster_recovery_internet_ip - computed: true, optional: false, required: false
  public get disasterRecoveryInternetIp() {
    return this.getStringAttribute('disaster_recovery_internet_ip');
  }

  // disaster_recovery_vswitch_id - computed: true, optional: false, required: false
  public get disasterRecoveryVswitchId() {
    return this.getStringAttribute('disaster_recovery_vswitch_id');
  }

  // enable_ipsec - computed: true, optional: false, required: false
  public get enableIpsec() {
    return this.getStringAttribute('enable_ipsec');
  }

  // enable_ssl - computed: true, optional: false, required: false
  public get enableSsl() {
    return this.getStringAttribute('enable_ssl');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_charge_type - computed: true, optional: false, required: false
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }

  // internet_ip - computed: true, optional: false, required: false
  public get internetIp() {
    return this.getStringAttribute('internet_ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // specification - computed: true, optional: false, required: false
  public get specification() {
    return this.getStringAttribute('specification');
  }

  // ssl_connections - computed: true, optional: false, required: false
  public get sslConnections() {
    return this.getNumberAttribute('ssl_connections');
  }

  // ssl_vpn - computed: true, optional: false, required: false
  public get sslVpn() {
    return this.getStringAttribute('ssl_vpn');
  }

  // ssl_vpn_internet_ip - computed: true, optional: false, required: false
  public get sslVpnInternetIp() {
    return this.getStringAttribute('ssl_vpn_internet_ip');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // vpn_type - computed: true, optional: false, required: false
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
}

export class DataAlicloudVpnGatewaysGatewaysList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewaysGatewaysOutputReference {
    return new DataAlicloudVpnGatewaysGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways alicloud_vpn_gateways}
*/
export class DataAlicloudVpnGateways extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpn_gateways";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudVpnGateways resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudVpnGateways to import
  * @param importFromId The id of the existing DataAlicloudVpnGateways that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudVpnGateways to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpn_gateways", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/vpn_gateways alicloud_vpn_gateways} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudVpnGatewaysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudVpnGatewaysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpn_gateways',
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
    this._enableIpsec = config.enableIpsec;
    this._id = config.id;
    this._ids = config.ids;
    this._includeReservationData = config.includeReservationData;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._sslVpn = config.sslVpn;
    this._status = config.status;
    this._vpcId = config.vpcId;
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

  // enable_ipsec - computed: false, optional: true, required: false
  private _enableIpsec?: boolean | cdktf.IResolvable; 
  public get enableIpsec() {
    return this.getBooleanAttribute('enable_ipsec');
  }
  public set enableIpsec(value: boolean | cdktf.IResolvable) {
    this._enableIpsec = value;
  }
  public resetEnableIpsec() {
    this._enableIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpsecInput() {
    return this._enableIpsec;
  }

  // gateways - computed: true, optional: false, required: false
  private _gateways = new DataAlicloudVpnGatewaysGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
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

  // include_reservation_data - computed: false, optional: true, required: false
  private _includeReservationData?: boolean | cdktf.IResolvable; 
  public get includeReservationData() {
    return this.getBooleanAttribute('include_reservation_data');
  }
  public set includeReservationData(value: boolean | cdktf.IResolvable) {
    this._includeReservationData = value;
  }
  public resetIncludeReservationData() {
    this._includeReservationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeReservationDataInput() {
    return this._includeReservationData;
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

  // ssl_vpn - computed: false, optional: true, required: false
  private _sslVpn?: string; 
  public get sslVpn() {
    return this.getStringAttribute('ssl_vpn');
  }
  public set sslVpn(value: string) {
    this._sslVpn = value;
  }
  public resetSslVpn() {
    this._sslVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnInput() {
    return this._sslVpn;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_status: cdktf.stringToTerraform(this._businessStatus),
      enable_ipsec: cdktf.booleanToTerraform(this._enableIpsec),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      include_reservation_data: cdktf.booleanToTerraform(this._includeReservationData),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      ssl_vpn: cdktf.stringToTerraform(this._sslVpn),
      status: cdktf.stringToTerraform(this._status),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      enable_ipsec: {
        value: cdktf.booleanToHclTerraform(this._enableIpsec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      include_reservation_data: {
        value: cdktf.booleanToHclTerraform(this._includeReservationData),
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
      ssl_vpn: {
        value: cdktf.stringToHclTerraform(this._sslVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
