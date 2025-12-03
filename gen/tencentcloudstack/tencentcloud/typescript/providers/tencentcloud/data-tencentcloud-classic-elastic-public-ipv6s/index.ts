// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudClassicElasticPublicIpv6SConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s#id DataTencentcloudClassicElasticPublicIpv6S#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of unique IDs that identify IPV6. The IPV6 unique ID is shaped like `eip-11112222`. Parameters do not support specifying both `Ip6AddressIds` and `Filters`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s#ip6_address_ids DataTencentcloudClassicElasticPublicIpv6S#ip6_address_ids}
  */
  readonly ip6AddressIds?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s#result_output_file DataTencentcloudClassicElasticPublicIpv6S#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s#filters DataTencentcloudClassicElasticPublicIpv6S#filters}
  */
  readonly filters?: DataTencentcloudClassicElasticPublicIpv6SFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgType {
}

export function dataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgTypeToTerraform(struct?: DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgTypeToHclTerraform(struct?: DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ftp - computed: true, optional: false, required: false
  public get ftp() {
    return this.getBooleanAttribute('ftp');
  }

  // sip - computed: true, optional: false, required: false
  public get sip() {
    return this.getBooleanAttribute('sip');
  }
}

export class DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgTypeOutputReference {
    return new DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSet {
}

export function dataTencentcloudClassicElasticPublicIpv6SAddressSetTagSetToTerraform(struct?: DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClassicElasticPublicIpv6SAddressSetTagSetToHclTerraform(struct?: DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSetOutputReference {
    return new DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClassicElasticPublicIpv6SAddressSet {
}

export function dataTencentcloudClassicElasticPublicIpv6SAddressSetToTerraform(struct?: DataTencentcloudClassicElasticPublicIpv6SAddressSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClassicElasticPublicIpv6SAddressSetToHclTerraform(struct?: DataTencentcloudClassicElasticPublicIpv6SAddressSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClassicElasticPublicIpv6SAddressSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClassicElasticPublicIpv6SAddressSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClassicElasticPublicIpv6SAddressSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_id - computed: true, optional: false, required: false
  public get addressId() {
    return this.getStringAttribute('address_id');
  }

  // address_ip - computed: true, optional: false, required: false
  public get addressIp() {
    return this.getStringAttribute('address_ip');
  }

  // address_name - computed: true, optional: false, required: false
  public get addressName() {
    return this.getStringAttribute('address_name');
  }

  // address_status - computed: true, optional: false, required: false
  public get addressStatus() {
    return this.getStringAttribute('address_status');
  }

  // address_type - computed: true, optional: false, required: false
  public get addressType() {
    return this.getStringAttribute('address_type');
  }

  // anti_ddos_package_id - computed: true, optional: false, required: false
  public get antiDdosPackageId() {
    return this.getStringAttribute('anti_ddos_package_id');
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // bandwidth_package_id - computed: true, optional: false, required: false
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }

  // cascade_release - computed: true, optional: false, required: false
  public get cascadeRelease() {
    return this.getBooleanAttribute('cascade_release');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // deadline_date - computed: true, optional: false, required: false
  public get deadlineDate() {
    return this.getStringAttribute('deadline_date');
  }

  // dedicated_cluster_id - computed: true, optional: false, required: false
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }

  // egress - computed: true, optional: false, required: false
  public get egress() {
    return this.getStringAttribute('egress');
  }

  // eip_alg_type - computed: true, optional: false, required: false
  private _eipAlgType = new DataTencentcloudClassicElasticPublicIpv6SAddressSetEipAlgTypeList(this, "eip_alg_type", false);
  public get eipAlgType() {
    return this._eipAlgType;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // internet_charge_type - computed: true, optional: false, required: false
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }

  // internet_service_provider - computed: true, optional: false, required: false
  public get internetServiceProvider() {
    return this.getStringAttribute('internet_service_provider');
  }

  // is_arrears - computed: true, optional: false, required: false
  public get isArrears() {
    return this.getBooleanAttribute('is_arrears');
  }

  // is_blocked - computed: true, optional: false, required: false
  public get isBlocked() {
    return this.getBooleanAttribute('is_blocked');
  }

  // is_eip_direct_connection - computed: true, optional: false, required: false
  public get isEipDirectConnection() {
    return this.getBooleanAttribute('is_eip_direct_connection');
  }

  // local_bgp - computed: true, optional: false, required: false
  public get localBgp() {
    return this.getBooleanAttribute('local_bgp');
  }

  // network_interface_id - computed: true, optional: false, required: false
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }

  // private_address_ip - computed: true, optional: false, required: false
  public get privateAddressIp() {
    return this.getStringAttribute('private_address_ip');
  }

  // renew_flag - computed: true, optional: false, required: false
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }

  // tag_set - computed: true, optional: false, required: false
  private _tagSet = new DataTencentcloudClassicElasticPublicIpv6SAddressSetTagSetList(this, "tag_set", false);
  public get tagSet() {
    return this._tagSet;
  }

  // un_vpc_id - computed: true, optional: false, required: false
  public get unVpcId() {
    return this.getStringAttribute('un_vpc_id');
  }
}

export class DataTencentcloudClassicElasticPublicIpv6SAddressSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClassicElasticPublicIpv6SAddressSetOutputReference {
    return new DataTencentcloudClassicElasticPublicIpv6SAddressSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClassicElasticPublicIpv6SFilters {
  /**
  * Property name. If there are multiple Filters, the relationship between Filters is a logical AND relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s#name DataTencentcloudClassicElasticPublicIpv6S#name}
  */
  readonly name: string;
  /**
  * Attribute value. If there are multiple Values in the same Filter, the relationship between Values under the same Filter is a logical OR relationship. When the value type is a Boolean type, the value can be directly taken to the string TRUE or FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s#values DataTencentcloudClassicElasticPublicIpv6S#values}
  */
  readonly values: string[];
}

export function dataTencentcloudClassicElasticPublicIpv6SFiltersToTerraform(struct?: DataTencentcloudClassicElasticPublicIpv6SFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudClassicElasticPublicIpv6SFiltersToHclTerraform(struct?: DataTencentcloudClassicElasticPublicIpv6SFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudClassicElasticPublicIpv6SFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudClassicElasticPublicIpv6SFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClassicElasticPublicIpv6SFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudClassicElasticPublicIpv6SFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudClassicElasticPublicIpv6SFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudClassicElasticPublicIpv6SFiltersOutputReference {
    return new DataTencentcloudClassicElasticPublicIpv6SFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s tencentcloud_classic_elastic_public_ipv6s}
*/
export class DataTencentcloudClassicElasticPublicIpv6S extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_classic_elastic_public_ipv6s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudClassicElasticPublicIpv6S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudClassicElasticPublicIpv6S to import
  * @param importFromId The id of the existing DataTencentcloudClassicElasticPublicIpv6S that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudClassicElasticPublicIpv6S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_classic_elastic_public_ipv6s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/classic_elastic_public_ipv6s tencentcloud_classic_elastic_public_ipv6s} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudClassicElasticPublicIpv6SConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudClassicElasticPublicIpv6SConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_classic_elastic_public_ipv6s',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._ip6AddressIds = config.ip6AddressIds;
    this._resultOutputFile = config.resultOutputFile;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_set - computed: true, optional: false, required: false
  private _addressSet = new DataTencentcloudClassicElasticPublicIpv6SAddressSetList(this, "address_set", false);
  public get addressSet() {
    return this._addressSet;
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

  // ip6_address_ids - computed: false, optional: true, required: false
  private _ip6AddressIds?: string[]; 
  public get ip6AddressIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ip6_address_ids'));
  }
  public set ip6AddressIds(value: string[]) {
    this._ip6AddressIds = value;
  }
  public resetIp6AddressIds() {
    this._ip6AddressIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressIdsInput() {
    return this._ip6AddressIds;
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

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudClassicElasticPublicIpv6SFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudClassicElasticPublicIpv6SFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip6_address_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ip6AddressIds),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      filters: cdktf.listMapper(dataTencentcloudClassicElasticPublicIpv6SFiltersToTerraform, true)(this._filters.internalValue),
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
      ip6_address_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ip6AddressIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudClassicElasticPublicIpv6SFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudClassicElasticPublicIpv6SFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
