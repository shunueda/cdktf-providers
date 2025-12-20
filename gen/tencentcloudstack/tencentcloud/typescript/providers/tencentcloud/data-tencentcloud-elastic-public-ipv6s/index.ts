// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudElasticPublicIpv6SConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s#id DataTencentcloudElasticPublicIpv6S#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique ID column that identifies IPv6.
  * 	- Traditional Elastic IPv6 unique ID is like: `eip-11112222`
  * 	- Elastic IPv6 unique ID is like: `eipv6 -11112222`
  * Note: Parameters do not support specifying both IPv6AddressIds and Filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s#ipv6_address_ids DataTencentcloudElasticPublicIpv6S#ipv6_address_ids}
  */
  readonly ipv6AddressIds?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s#result_output_file DataTencentcloudElasticPublicIpv6S#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Whether to query traditional IPv6 address information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s#traditional DataTencentcloudElasticPublicIpv6S#traditional}
  */
  readonly traditional?: boolean | cdktf.IResolvable;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s#filters DataTencentcloudElasticPublicIpv6S#filters}
  */
  readonly filters?: DataTencentcloudElasticPublicIpv6SFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudElasticPublicIpv6SAddressSetEipAlgType {
}

export function dataTencentcloudElasticPublicIpv6SAddressSetEipAlgTypeToTerraform(struct?: DataTencentcloudElasticPublicIpv6SAddressSetEipAlgType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticPublicIpv6SAddressSetEipAlgTypeToHclTerraform(struct?: DataTencentcloudElasticPublicIpv6SAddressSetEipAlgType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticPublicIpv6SAddressSetEipAlgTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticPublicIpv6SAddressSetEipAlgType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticPublicIpv6SAddressSetEipAlgType | undefined) {
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

export class DataTencentcloudElasticPublicIpv6SAddressSetEipAlgTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticPublicIpv6SAddressSetEipAlgTypeOutputReference {
    return new DataTencentcloudElasticPublicIpv6SAddressSetEipAlgTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticPublicIpv6SAddressSetTagSet {
}

export function dataTencentcloudElasticPublicIpv6SAddressSetTagSetToTerraform(struct?: DataTencentcloudElasticPublicIpv6SAddressSetTagSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticPublicIpv6SAddressSetTagSetToHclTerraform(struct?: DataTencentcloudElasticPublicIpv6SAddressSetTagSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticPublicIpv6SAddressSetTagSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticPublicIpv6SAddressSetTagSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticPublicIpv6SAddressSetTagSet | undefined) {
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

export class DataTencentcloudElasticPublicIpv6SAddressSetTagSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticPublicIpv6SAddressSetTagSetOutputReference {
    return new DataTencentcloudElasticPublicIpv6SAddressSetTagSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticPublicIpv6SAddressSet {
}

export function dataTencentcloudElasticPublicIpv6SAddressSetToTerraform(struct?: DataTencentcloudElasticPublicIpv6SAddressSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudElasticPublicIpv6SAddressSetToHclTerraform(struct?: DataTencentcloudElasticPublicIpv6SAddressSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudElasticPublicIpv6SAddressSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticPublicIpv6SAddressSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudElasticPublicIpv6SAddressSet | undefined) {
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
  private _eipAlgType = new DataTencentcloudElasticPublicIpv6SAddressSetEipAlgTypeList(this, "eip_alg_type", false);
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
  private _tagSet = new DataTencentcloudElasticPublicIpv6SAddressSetTagSetList(this, "tag_set", false);
  public get tagSet() {
    return this._tagSet;
  }

  // un_vpc_id - computed: true, optional: false, required: false
  public get unVpcId() {
    return this.getStringAttribute('un_vpc_id');
  }
}

export class DataTencentcloudElasticPublicIpv6SAddressSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudElasticPublicIpv6SAddressSetOutputReference {
    return new DataTencentcloudElasticPublicIpv6SAddressSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudElasticPublicIpv6SFilters {
  /**
  * Property name. If there are multiple Filters, the relationship between Filters is a logical AND (AND) relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s#name DataTencentcloudElasticPublicIpv6S#name}
  */
  readonly name: string;
  /**
  * Attribute value. If there are multiple Values in the same Filter, the relationship between Values under the same Filter is a logical OR relationship. When the value type is a Boolean type, the value can be directly taken to the string TRUE or FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s#values DataTencentcloudElasticPublicIpv6S#values}
  */
  readonly values: string[];
}

export function dataTencentcloudElasticPublicIpv6SFiltersToTerraform(struct?: DataTencentcloudElasticPublicIpv6SFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudElasticPublicIpv6SFiltersToHclTerraform(struct?: DataTencentcloudElasticPublicIpv6SFilters | cdktf.IResolvable): any {
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

export class DataTencentcloudElasticPublicIpv6SFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudElasticPublicIpv6SFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataTencentcloudElasticPublicIpv6SFilters | cdktf.IResolvable | undefined) {
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

export class DataTencentcloudElasticPublicIpv6SFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudElasticPublicIpv6SFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudElasticPublicIpv6SFiltersOutputReference {
    return new DataTencentcloudElasticPublicIpv6SFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s tencentcloud_elastic_public_ipv6s}
*/
export class DataTencentcloudElasticPublicIpv6S extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elastic_public_ipv6s";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudElasticPublicIpv6S resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudElasticPublicIpv6S to import
  * @param importFromId The id of the existing DataTencentcloudElasticPublicIpv6S that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudElasticPublicIpv6S to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elastic_public_ipv6s", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/elastic_public_ipv6s tencentcloud_elastic_public_ipv6s} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudElasticPublicIpv6SConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudElasticPublicIpv6SConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elastic_public_ipv6s',
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
    this._id = config.id;
    this._ipv6AddressIds = config.ipv6AddressIds;
    this._resultOutputFile = config.resultOutputFile;
    this._traditional = config.traditional;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_set - computed: true, optional: false, required: false
  private _addressSet = new DataTencentcloudElasticPublicIpv6SAddressSetList(this, "address_set", false);
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

  // ipv6_address_ids - computed: false, optional: true, required: false
  private _ipv6AddressIds?: string[]; 
  public get ipv6AddressIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_address_ids'));
  }
  public set ipv6AddressIds(value: string[]) {
    this._ipv6AddressIds = value;
  }
  public resetIpv6AddressIds() {
    this._ipv6AddressIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIdsInput() {
    return this._ipv6AddressIds;
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

  // traditional - computed: false, optional: true, required: false
  private _traditional?: boolean | cdktf.IResolvable; 
  public get traditional() {
    return this.getBooleanAttribute('traditional');
  }
  public set traditional(value: boolean | cdktf.IResolvable) {
    this._traditional = value;
  }
  public resetTraditional() {
    this._traditional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traditionalInput() {
    return this._traditional;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudElasticPublicIpv6SFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudElasticPublicIpv6SFilters[] | cdktf.IResolvable) {
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
      ipv6_address_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6AddressIds),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      traditional: cdktf.booleanToTerraform(this._traditional),
      filters: cdktf.listMapper(dataTencentcloudElasticPublicIpv6SFiltersToTerraform, true)(this._filters.internalValue),
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
      ipv6_address_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6AddressIds),
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
      traditional: {
        value: cdktf.booleanToHclTerraform(this._traditional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudElasticPublicIpv6SFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudElasticPublicIpv6SFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
