// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/enterprise_vpn_gateway_v5
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudEnterpriseVpnGatewayV5Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/enterprise_vpn_gateway_v5#id DataOpentelekomcloudEnterpriseVpnGatewayV5#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1 {
}

export function dataOpentelekomcloudEnterpriseVpnGatewayV5Eip1ToTerraform(struct?: DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudEnterpriseVpnGatewayV5Eip1ToHclTerraform(struct?: DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_id - computed: true, optional: false, required: false
  public get bandwidthId() {
    return this.getStringAttribute('bandwidth_id');
  }

  // bandwidth_name - computed: true, optional: false, required: false
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
  }

  // bandwidth_size - computed: true, optional: false, required: false
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }

  // charge_mode - computed: true, optional: false, required: false
  public get chargeMode() {
    return this.getStringAttribute('charge_mode');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1List extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1OutputReference {
    return new DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2 {
}

export function dataOpentelekomcloudEnterpriseVpnGatewayV5Eip2ToTerraform(struct?: DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudEnterpriseVpnGatewayV5Eip2ToHclTerraform(struct?: DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_id - computed: true, optional: false, required: false
  public get bandwidthId() {
    return this.getStringAttribute('bandwidth_id');
  }

  // bandwidth_name - computed: true, optional: false, required: false
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
  }

  // bandwidth_size - computed: true, optional: false, required: false
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }

  // charge_mode - computed: true, optional: false, required: false
  public get chargeMode() {
    return this.getStringAttribute('charge_mode');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2List extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2OutputReference {
    return new DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/enterprise_vpn_gateway_v5 opentelekomcloud_enterprise_vpn_gateway_v5}
*/
export class DataOpentelekomcloudEnterpriseVpnGatewayV5 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_enterprise_vpn_gateway_v5";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudEnterpriseVpnGatewayV5 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudEnterpriseVpnGatewayV5 to import
  * @param importFromId The id of the existing DataOpentelekomcloudEnterpriseVpnGatewayV5 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/enterprise_vpn_gateway_v5#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudEnterpriseVpnGatewayV5 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_enterprise_vpn_gateway_v5", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/enterprise_vpn_gateway_v5 opentelekomcloud_enterprise_vpn_gateway_v5} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudEnterpriseVpnGatewayV5Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudEnterpriseVpnGatewayV5Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_enterprise_vpn_gateway_v5',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_private_ip_1 - computed: true, optional: false, required: false
  public get accessPrivateIp1() {
    return this.getStringAttribute('access_private_ip_1');
  }

  // access_private_ip_2 - computed: true, optional: false, required: false
  public get accessPrivateIp2() {
    return this.getStringAttribute('access_private_ip_2');
  }

  // access_subnet_id - computed: true, optional: false, required: false
  public get accessSubnetId() {
    return this.getStringAttribute('access_subnet_id');
  }

  // access_vpc_id - computed: true, optional: false, required: false
  public get accessVpcId() {
    return this.getStringAttribute('access_vpc_id');
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // attachment_type - computed: true, optional: false, required: false
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // connect_subnet - computed: true, optional: false, required: false
  public get connectSubnet() {
    return this.getStringAttribute('connect_subnet');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // eip1 - computed: true, optional: false, required: false
  private _eip1 = new DataOpentelekomcloudEnterpriseVpnGatewayV5Eip1List(this, "eip1", false);
  public get eip1() {
    return this._eip1;
  }

  // eip2 - computed: true, optional: false, required: false
  private _eip2 = new DataOpentelekomcloudEnterpriseVpnGatewayV5Eip2List(this, "eip2", false);
  public get eip2() {
    return this._eip2;
  }

  // er_id - computed: true, optional: false, required: false
  public get erId() {
    return this.getStringAttribute('er_id');
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // ha_mode - computed: true, optional: false, required: false
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // local_subnets - computed: true, optional: false, required: false
  public get localSubnets() {
    return this.getListAttribute('local_subnets');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // used_connection_group - computed: true, optional: false, required: false
  public get usedConnectionGroup() {
    return this.getNumberAttribute('used_connection_group');
  }

  // used_connection_number - computed: true, optional: false, required: false
  public get usedConnectionNumber() {
    return this.getNumberAttribute('used_connection_number');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
