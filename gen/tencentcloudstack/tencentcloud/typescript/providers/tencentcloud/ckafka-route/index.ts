// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CkafkaRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access type. Valid values:
  * - 0: PLAINTEXT (in clear text, supported by both the old version and the community version without user information)
  * - 1: SASL_PLAINTEXT (in clear text, but at the beginning of the data, authentication will be logged in through SASL, which is only supported by the community version)
  * - 2: SSL (SSL encrypted communication without user information, supported by both older and community versions)
  * - 3: SASL_SSL (SSL encrypted communication. When the data starts, authentication will be logged in through SASL. Only the community version supports it).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#access_type CkafkaRoute#access_type}
  */
  readonly accessType?: number;
  /**
  * Auth flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#auth_flag CkafkaRoute#auth_flag}
  */
  readonly authFlag?: number;
  /**
  * Caller appid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#caller_appid CkafkaRoute#caller_appid}
  */
  readonly callerAppid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#id CkafkaRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#instance_id CkafkaRoute#instance_id}
  */
  readonly instanceId: string;
  /**
  * Ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#ip CkafkaRoute#ip}
  */
  readonly ip?: string;
  /**
  * Public network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#public_network CkafkaRoute#public_network}
  */
  readonly publicNetwork?: number;
  /**
  * Subnet id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#subnet_id CkafkaRoute#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Routing network type (3:vpc routing; 4: standard support routing; 7: professional support routing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#vip_type CkafkaRoute#vip_type}
  */
  readonly vipType: number;
  /**
  * Vpc id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#vpc_id CkafkaRoute#vpc_id}
  */
  readonly vpcId?: string;
}
export interface CkafkaRouteBrokerVipListStruct {
}

export function ckafkaRouteBrokerVipListStructToTerraform(struct?: CkafkaRouteBrokerVipListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ckafkaRouteBrokerVipListStructToHclTerraform(struct?: CkafkaRouteBrokerVipListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CkafkaRouteBrokerVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CkafkaRouteBrokerVipListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaRouteBrokerVipListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getStringAttribute('vport');
  }
}

export class CkafkaRouteBrokerVipListStructList extends cdktf.ComplexList {

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
  public get(index: number): CkafkaRouteBrokerVipListStructOutputReference {
    return new CkafkaRouteBrokerVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CkafkaRouteVipListStruct {
}

export function ckafkaRouteVipListStructToTerraform(struct?: CkafkaRouteVipListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ckafkaRouteVipListStructToHclTerraform(struct?: CkafkaRouteVipListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CkafkaRouteVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CkafkaRouteVipListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CkafkaRouteVipListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getStringAttribute('vport');
  }
}

export class CkafkaRouteVipListStructList extends cdktf.ComplexList {

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
  public get(index: number): CkafkaRouteVipListStructOutputReference {
    return new CkafkaRouteVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route tencentcloud_ckafka_route}
*/
export class CkafkaRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ckafka_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CkafkaRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CkafkaRoute to import
  * @param importFromId The id of the existing CkafkaRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CkafkaRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ckafka_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/ckafka_route tencentcloud_ckafka_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CkafkaRouteConfig
  */
  public constructor(scope: Construct, id: string, config: CkafkaRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ckafka_route',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessType = config.accessType;
    this._authFlag = config.authFlag;
    this._callerAppid = config.callerAppid;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ip = config.ip;
    this._publicNetwork = config.publicNetwork;
    this._subnetId = config.subnetId;
    this._vipType = config.vipType;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: true, required: false
  private _accessType?: number; 
  public get accessType() {
    return this.getNumberAttribute('access_type');
  }
  public set accessType(value: number) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // auth_flag - computed: false, optional: true, required: false
  private _authFlag?: number; 
  public get authFlag() {
    return this.getNumberAttribute('auth_flag');
  }
  public set authFlag(value: number) {
    this._authFlag = value;
  }
  public resetAuthFlag() {
    this._authFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFlagInput() {
    return this._authFlag;
  }

  // broker_vip_list - computed: true, optional: false, required: false
  private _brokerVipList = new CkafkaRouteBrokerVipListStructList(this, "broker_vip_list", false);
  public get brokerVipList() {
    return this._brokerVipList;
  }

  // caller_appid - computed: false, optional: true, required: false
  private _callerAppid?: number; 
  public get callerAppid() {
    return this.getNumberAttribute('caller_appid');
  }
  public set callerAppid(value: number) {
    this._callerAppid = value;
  }
  public resetCallerAppid() {
    this._callerAppid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callerAppidInput() {
    return this._callerAppid;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // public_network - computed: false, optional: true, required: false
  private _publicNetwork?: number; 
  public get publicNetwork() {
    return this.getNumberAttribute('public_network');
  }
  public set publicNetwork(value: number) {
    this._publicNetwork = value;
  }
  public resetPublicNetwork() {
    this._publicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInput() {
    return this._publicNetwork;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vip_list - computed: true, optional: false, required: false
  private _vipList = new CkafkaRouteVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }

  // vip_type - computed: false, optional: false, required: true
  private _vipType?: number; 
  public get vipType() {
    return this.getNumberAttribute('vip_type');
  }
  public set vipType(value: number) {
    this._vipType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipTypeInput() {
    return this._vipType;
  }

  // vpc_id - computed: true, optional: true, required: false
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
      access_type: cdktf.numberToTerraform(this._accessType),
      auth_flag: cdktf.numberToTerraform(this._authFlag),
      caller_appid: cdktf.numberToTerraform(this._callerAppid),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip: cdktf.stringToTerraform(this._ip),
      public_network: cdktf.numberToTerraform(this._publicNetwork),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vip_type: cdktf.numberToTerraform(this._vipType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.numberToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auth_flag: {
        value: cdktf.numberToHclTerraform(this._authFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      caller_appid: {
        value: cdktf.numberToHclTerraform(this._callerAppid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network: {
        value: cdktf.numberToHclTerraform(this._publicNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_type: {
        value: cdktf.numberToHclTerraform(this._vipType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
