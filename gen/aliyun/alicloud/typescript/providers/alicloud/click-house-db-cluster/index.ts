// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickHouseDbClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#allocate_public_connection ClickHouseDbCluster#allocate_public_connection}
  */
  readonly allocatePublicConnection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#category ClickHouseDbCluster#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#cold_storage ClickHouseDbCluster#cold_storage}
  */
  readonly coldStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#db_cluster_class ClickHouseDbCluster#db_cluster_class}
  */
  readonly dbClusterClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#db_cluster_description ClickHouseDbCluster#db_cluster_description}
  */
  readonly dbClusterDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#db_cluster_network_type ClickHouseDbCluster#db_cluster_network_type}
  */
  readonly dbClusterNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#db_cluster_version ClickHouseDbCluster#db_cluster_version}
  */
  readonly dbClusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#db_node_group_count ClickHouseDbCluster#db_node_group_count}
  */
  readonly dbNodeGroupCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#db_node_storage ClickHouseDbCluster#db_node_storage}
  */
  readonly dbNodeStorage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#encryption_key ClickHouseDbCluster#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#encryption_type ClickHouseDbCluster#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#id ClickHouseDbCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#maintain_time ClickHouseDbCluster#maintain_time}
  */
  readonly maintainTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#payment_type ClickHouseDbCluster#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#period ClickHouseDbCluster#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#renewal_status ClickHouseDbCluster#renewal_status}
  */
  readonly renewalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#resource_group_id ClickHouseDbCluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#status ClickHouseDbCluster#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#storage_type ClickHouseDbCluster#storage_type}
  */
  readonly storageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#used_time ClickHouseDbCluster#used_time}
  */
  readonly usedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#vpc_id ClickHouseDbCluster#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#vswitch_id ClickHouseDbCluster#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#zone_id ClickHouseDbCluster#zone_id}
  */
  readonly zoneId?: string;
  /**
  * db_cluster_access_white_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#db_cluster_access_white_list ClickHouseDbCluster#db_cluster_access_white_list}
  */
  readonly dbClusterAccessWhiteList?: ClickHouseDbClusterDbClusterAccessWhiteListStruct[] | cdktf.IResolvable;
  /**
  * multi_zone_vswitch_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#multi_zone_vswitch_list ClickHouseDbCluster#multi_zone_vswitch_list}
  */
  readonly multiZoneVswitchList?: ClickHouseDbClusterMultiZoneVswitchListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#timeouts ClickHouseDbCluster#timeouts}
  */
  readonly timeouts?: ClickHouseDbClusterTimeouts;
}
export interface ClickHouseDbClusterDbClusterAccessWhiteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#db_cluster_ip_array_attribute ClickHouseDbCluster#db_cluster_ip_array_attribute}
  */
  readonly dbClusterIpArrayAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#db_cluster_ip_array_name ClickHouseDbCluster#db_cluster_ip_array_name}
  */
  readonly dbClusterIpArrayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#security_ip_list ClickHouseDbCluster#security_ip_list}
  */
  readonly securityIpList?: string;
}

export function clickHouseDbClusterDbClusterAccessWhiteListStructToTerraform(struct?: ClickHouseDbClusterDbClusterAccessWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_cluster_ip_array_attribute: cdktf.stringToTerraform(struct!.dbClusterIpArrayAttribute),
    db_cluster_ip_array_name: cdktf.stringToTerraform(struct!.dbClusterIpArrayName),
    security_ip_list: cdktf.stringToTerraform(struct!.securityIpList),
  }
}


export function clickHouseDbClusterDbClusterAccessWhiteListStructToHclTerraform(struct?: ClickHouseDbClusterDbClusterAccessWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_cluster_ip_array_attribute: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterIpArrayAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_cluster_ip_array_name: {
      value: cdktf.stringToHclTerraform(struct!.dbClusterIpArrayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_ip_list: {
      value: cdktf.stringToHclTerraform(struct!.securityIpList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickHouseDbClusterDbClusterAccessWhiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickHouseDbClusterDbClusterAccessWhiteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbClusterIpArrayAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterIpArrayAttribute = this._dbClusterIpArrayAttribute;
    }
    if (this._dbClusterIpArrayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterIpArrayName = this._dbClusterIpArrayName;
    }
    if (this._securityIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIpList = this._securityIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickHouseDbClusterDbClusterAccessWhiteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbClusterIpArrayAttribute = undefined;
      this._dbClusterIpArrayName = undefined;
      this._securityIpList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbClusterIpArrayAttribute = value.dbClusterIpArrayAttribute;
      this._dbClusterIpArrayName = value.dbClusterIpArrayName;
      this._securityIpList = value.securityIpList;
    }
  }

  // db_cluster_ip_array_attribute - computed: false, optional: true, required: false
  private _dbClusterIpArrayAttribute?: string; 
  public get dbClusterIpArrayAttribute() {
    return this.getStringAttribute('db_cluster_ip_array_attribute');
  }
  public set dbClusterIpArrayAttribute(value: string) {
    this._dbClusterIpArrayAttribute = value;
  }
  public resetDbClusterIpArrayAttribute() {
    this._dbClusterIpArrayAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIpArrayAttributeInput() {
    return this._dbClusterIpArrayAttribute;
  }

  // db_cluster_ip_array_name - computed: false, optional: true, required: false
  private _dbClusterIpArrayName?: string; 
  public get dbClusterIpArrayName() {
    return this.getStringAttribute('db_cluster_ip_array_name');
  }
  public set dbClusterIpArrayName(value: string) {
    this._dbClusterIpArrayName = value;
  }
  public resetDbClusterIpArrayName() {
    this._dbClusterIpArrayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIpArrayNameInput() {
    return this._dbClusterIpArrayName;
  }

  // security_ip_list - computed: false, optional: true, required: false
  private _securityIpList?: string; 
  public get securityIpList() {
    return this.getStringAttribute('security_ip_list');
  }
  public set securityIpList(value: string) {
    this._securityIpList = value;
  }
  public resetSecurityIpList() {
    this._securityIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpListInput() {
    return this._securityIpList;
  }
}

export class ClickHouseDbClusterDbClusterAccessWhiteListStructList extends cdktf.ComplexList {
  public internalValue? : ClickHouseDbClusterDbClusterAccessWhiteListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClickHouseDbClusterDbClusterAccessWhiteListStructOutputReference {
    return new ClickHouseDbClusterDbClusterAccessWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickHouseDbClusterMultiZoneVswitchListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#vswitch_id ClickHouseDbCluster#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#zone_id ClickHouseDbCluster#zone_id}
  */
  readonly zoneId?: string;
}

export function clickHouseDbClusterMultiZoneVswitchListStructToTerraform(struct?: ClickHouseDbClusterMultiZoneVswitchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function clickHouseDbClusterMultiZoneVswitchListStructToHclTerraform(struct?: ClickHouseDbClusterMultiZoneVswitchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickHouseDbClusterMultiZoneVswitchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickHouseDbClusterMultiZoneVswitchListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickHouseDbClusterMultiZoneVswitchListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vswitchId = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vswitchId = value.vswitchId;
      this._zoneId = value.zoneId;
    }
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class ClickHouseDbClusterMultiZoneVswitchListStructList extends cdktf.ComplexList {
  public internalValue? : ClickHouseDbClusterMultiZoneVswitchListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClickHouseDbClusterMultiZoneVswitchListStructOutputReference {
    return new ClickHouseDbClusterMultiZoneVswitchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickHouseDbClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#create ClickHouseDbCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#update ClickHouseDbCluster#update}
  */
  readonly update?: string;
}

export function clickHouseDbClusterTimeoutsToTerraform(struct?: ClickHouseDbClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function clickHouseDbClusterTimeoutsToHclTerraform(struct?: ClickHouseDbClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickHouseDbClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickHouseDbClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickHouseDbClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster alicloud_click_house_db_cluster}
*/
export class ClickHouseDbCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_click_house_db_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickHouseDbCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickHouseDbCluster to import
  * @param importFromId The id of the existing ClickHouseDbCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickHouseDbCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_click_house_db_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/click_house_db_cluster alicloud_click_house_db_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickHouseDbClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClickHouseDbClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_click_house_db_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatePublicConnection = config.allocatePublicConnection;
    this._category = config.category;
    this._coldStorage = config.coldStorage;
    this._dbClusterClass = config.dbClusterClass;
    this._dbClusterDescription = config.dbClusterDescription;
    this._dbClusterNetworkType = config.dbClusterNetworkType;
    this._dbClusterVersion = config.dbClusterVersion;
    this._dbNodeGroupCount = config.dbNodeGroupCount;
    this._dbNodeStorage = config.dbNodeStorage;
    this._encryptionKey = config.encryptionKey;
    this._encryptionType = config.encryptionType;
    this._id = config.id;
    this._maintainTime = config.maintainTime;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._renewalStatus = config.renewalStatus;
    this._resourceGroupId = config.resourceGroupId;
    this._status = config.status;
    this._storageType = config.storageType;
    this._usedTime = config.usedTime;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._dbClusterAccessWhiteList.internalValue = config.dbClusterAccessWhiteList;
    this._multiZoneVswitchList.internalValue = config.multiZoneVswitchList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_public_connection - computed: false, optional: true, required: false
  private _allocatePublicConnection?: boolean | cdktf.IResolvable; 
  public get allocatePublicConnection() {
    return this.getBooleanAttribute('allocate_public_connection');
  }
  public set allocatePublicConnection(value: boolean | cdktf.IResolvable) {
    this._allocatePublicConnection = value;
  }
  public resetAllocatePublicConnection() {
    this._allocatePublicConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatePublicConnectionInput() {
    return this._allocatePublicConnection;
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // cold_storage - computed: true, optional: true, required: false
  private _coldStorage?: string; 
  public get coldStorage() {
    return this.getStringAttribute('cold_storage');
  }
  public set coldStorage(value: string) {
    this._coldStorage = value;
  }
  public resetColdStorage() {
    this._coldStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageInput() {
    return this._coldStorage;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // db_cluster_class - computed: false, optional: false, required: true
  private _dbClusterClass?: string; 
  public get dbClusterClass() {
    return this.getStringAttribute('db_cluster_class');
  }
  public set dbClusterClass(value: string) {
    this._dbClusterClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterClassInput() {
    return this._dbClusterClass;
  }

  // db_cluster_description - computed: true, optional: true, required: false
  private _dbClusterDescription?: string; 
  public get dbClusterDescription() {
    return this.getStringAttribute('db_cluster_description');
  }
  public set dbClusterDescription(value: string) {
    this._dbClusterDescription = value;
  }
  public resetDbClusterDescription() {
    this._dbClusterDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterDescriptionInput() {
    return this._dbClusterDescription;
  }

  // db_cluster_network_type - computed: false, optional: false, required: true
  private _dbClusterNetworkType?: string; 
  public get dbClusterNetworkType() {
    return this.getStringAttribute('db_cluster_network_type');
  }
  public set dbClusterNetworkType(value: string) {
    this._dbClusterNetworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterNetworkTypeInput() {
    return this._dbClusterNetworkType;
  }

  // db_cluster_version - computed: false, optional: false, required: true
  private _dbClusterVersion?: string; 
  public get dbClusterVersion() {
    return this.getStringAttribute('db_cluster_version');
  }
  public set dbClusterVersion(value: string) {
    this._dbClusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterVersionInput() {
    return this._dbClusterVersion;
  }

  // db_node_group_count - computed: false, optional: false, required: true
  private _dbNodeGroupCount?: number; 
  public get dbNodeGroupCount() {
    return this.getNumberAttribute('db_node_group_count');
  }
  public set dbNodeGroupCount(value: number) {
    this._dbNodeGroupCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeGroupCountInput() {
    return this._dbNodeGroupCount;
  }

  // db_node_storage - computed: false, optional: false, required: true
  private _dbNodeStorage?: string; 
  public get dbNodeStorage() {
    return this.getStringAttribute('db_node_storage');
  }
  public set dbNodeStorage(value: string) {
    this._dbNodeStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeStorageInput() {
    return this._dbNodeStorage;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
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

  // maintain_time - computed: true, optional: true, required: false
  private _maintainTime?: string; 
  public get maintainTime() {
    return this.getStringAttribute('maintain_time');
  }
  public set maintainTime(value: string) {
    this._maintainTime = value;
  }
  public resetMaintainTime() {
    this._maintainTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainTimeInput() {
    return this._maintainTime;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // public_connection_string - computed: true, optional: false, required: false
  public get publicConnectionString() {
    return this.getStringAttribute('public_connection_string');
  }

  // renewal_status - computed: true, optional: true, required: false
  private _renewalStatus?: string; 
  public get renewalStatus() {
    return this.getStringAttribute('renewal_status');
  }
  public set renewalStatus(value: string) {
    this._renewalStatus = value;
  }
  public resetRenewalStatus() {
    this._renewalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewalStatusInput() {
    return this._renewalStatus;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // status - computed: true, optional: true, required: false
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

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // used_time - computed: false, optional: true, required: false
  private _usedTime?: string; 
  public get usedTime() {
    return this.getStringAttribute('used_time');
  }
  public set usedTime(value: string) {
    this._usedTime = value;
  }
  public resetUsedTime() {
    this._usedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedTimeInput() {
    return this._usedTime;
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

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // db_cluster_access_white_list - computed: false, optional: true, required: false
  private _dbClusterAccessWhiteList = new ClickHouseDbClusterDbClusterAccessWhiteListStructList(this, "db_cluster_access_white_list", true);
  public get dbClusterAccessWhiteList() {
    return this._dbClusterAccessWhiteList;
  }
  public putDbClusterAccessWhiteList(value: ClickHouseDbClusterDbClusterAccessWhiteListStruct[] | cdktf.IResolvable) {
    this._dbClusterAccessWhiteList.internalValue = value;
  }
  public resetDbClusterAccessWhiteList() {
    this._dbClusterAccessWhiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterAccessWhiteListInput() {
    return this._dbClusterAccessWhiteList.internalValue;
  }

  // multi_zone_vswitch_list - computed: false, optional: true, required: false
  private _multiZoneVswitchList = new ClickHouseDbClusterMultiZoneVswitchListStructList(this, "multi_zone_vswitch_list", true);
  public get multiZoneVswitchList() {
    return this._multiZoneVswitchList;
  }
  public putMultiZoneVswitchList(value: ClickHouseDbClusterMultiZoneVswitchListStruct[] | cdktf.IResolvable) {
    this._multiZoneVswitchList.internalValue = value;
  }
  public resetMultiZoneVswitchList() {
    this._multiZoneVswitchList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneVswitchListInput() {
    return this._multiZoneVswitchList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClickHouseDbClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClickHouseDbClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_public_connection: cdktf.booleanToTerraform(this._allocatePublicConnection),
      category: cdktf.stringToTerraform(this._category),
      cold_storage: cdktf.stringToTerraform(this._coldStorage),
      db_cluster_class: cdktf.stringToTerraform(this._dbClusterClass),
      db_cluster_description: cdktf.stringToTerraform(this._dbClusterDescription),
      db_cluster_network_type: cdktf.stringToTerraform(this._dbClusterNetworkType),
      db_cluster_version: cdktf.stringToTerraform(this._dbClusterVersion),
      db_node_group_count: cdktf.numberToTerraform(this._dbNodeGroupCount),
      db_node_storage: cdktf.stringToTerraform(this._dbNodeStorage),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      encryption_type: cdktf.stringToTerraform(this._encryptionType),
      id: cdktf.stringToTerraform(this._id),
      maintain_time: cdktf.stringToTerraform(this._maintainTime),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.stringToTerraform(this._period),
      renewal_status: cdktf.stringToTerraform(this._renewalStatus),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      status: cdktf.stringToTerraform(this._status),
      storage_type: cdktf.stringToTerraform(this._storageType),
      used_time: cdktf.stringToTerraform(this._usedTime),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      db_cluster_access_white_list: cdktf.listMapper(clickHouseDbClusterDbClusterAccessWhiteListStructToTerraform, true)(this._dbClusterAccessWhiteList.internalValue),
      multi_zone_vswitch_list: cdktf.listMapper(clickHouseDbClusterMultiZoneVswitchListStructToTerraform, true)(this._multiZoneVswitchList.internalValue),
      timeouts: clickHouseDbClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_public_connection: {
        value: cdktf.booleanToHclTerraform(this._allocatePublicConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cold_storage: {
        value: cdktf.stringToHclTerraform(this._coldStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_class: {
        value: cdktf.stringToHclTerraform(this._dbClusterClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_description: {
        value: cdktf.stringToHclTerraform(this._dbClusterDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_network_type: {
        value: cdktf.stringToHclTerraform(this._dbClusterNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_version: {
        value: cdktf.stringToHclTerraform(this._dbClusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_node_group_count: {
        value: cdktf.numberToHclTerraform(this._dbNodeGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_node_storage: {
        value: cdktf.stringToHclTerraform(this._dbNodeStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_type: {
        value: cdktf.stringToHclTerraform(this._encryptionType),
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
      maintain_time: {
        value: cdktf.stringToHclTerraform(this._maintainTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renewal_status: {
        value: cdktf.stringToHclTerraform(this._renewalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      used_time: {
        value: cdktf.stringToHclTerraform(this._usedTime),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_cluster_access_white_list: {
        value: cdktf.listMapperHcl(clickHouseDbClusterDbClusterAccessWhiteListStructToHclTerraform, true)(this._dbClusterAccessWhiteList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClickHouseDbClusterDbClusterAccessWhiteListStructList",
      },
      multi_zone_vswitch_list: {
        value: cdktf.listMapperHcl(clickHouseDbClusterMultiZoneVswitchListStructToHclTerraform, true)(this._multiZoneVswitchList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClickHouseDbClusterMultiZoneVswitchListStructList",
      },
      timeouts: {
        value: clickHouseDbClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickHouseDbClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
