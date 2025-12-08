// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelectdbDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#admin_pass SelectdbDbInstance#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#cache_size SelectdbDbInstance#cache_size}
  */
  readonly cacheSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#db_instance_class SelectdbDbInstance#db_instance_class}
  */
  readonly dbInstanceClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#db_instance_description SelectdbDbInstance#db_instance_description}
  */
  readonly dbInstanceDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#enable_public_network SelectdbDbInstance#enable_public_network}
  */
  readonly enablePublicNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#engine_minor_version SelectdbDbInstance#engine_minor_version}
  */
  readonly engineMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#id SelectdbDbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#payment_type SelectdbDbInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#period SelectdbDbInstance#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#period_time SelectdbDbInstance#period_time}
  */
  readonly periodTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#tags SelectdbDbInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#upgraded_engine_minor_version SelectdbDbInstance#upgraded_engine_minor_version}
  */
  readonly upgradedEngineMinorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#vpc_id SelectdbDbInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#vswitch_id SelectdbDbInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#zone_id SelectdbDbInstance#zone_id}
  */
  readonly zoneId: string;
  /**
  * desired_security_ip_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#desired_security_ip_lists SelectdbDbInstance#desired_security_ip_lists}
  */
  readonly desiredSecurityIpLists?: SelectdbDbInstanceDesiredSecurityIpLists[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#timeouts SelectdbDbInstance#timeouts}
  */
  readonly timeouts?: SelectdbDbInstanceTimeouts;
}
export interface SelectdbDbInstanceInstanceNetInfosPortListStruct {
}

export function selectdbDbInstanceInstanceNetInfosPortListStructToTerraform(struct?: SelectdbDbInstanceInstanceNetInfosPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function selectdbDbInstanceInstanceNetInfosPortListStructToHclTerraform(struct?: SelectdbDbInstanceInstanceNetInfosPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SelectdbDbInstanceInstanceNetInfosPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelectdbDbInstanceInstanceNetInfosPortListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelectdbDbInstanceInstanceNetInfosPortListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class SelectdbDbInstanceInstanceNetInfosPortListStructList extends cdktf.ComplexList {

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
  public get(index: number): SelectdbDbInstanceInstanceNetInfosPortListStructOutputReference {
    return new SelectdbDbInstanceInstanceNetInfosPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelectdbDbInstanceInstanceNetInfos {
}

export function selectdbDbInstanceInstanceNetInfosToTerraform(struct?: SelectdbDbInstanceInstanceNetInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function selectdbDbInstanceInstanceNetInfosToHclTerraform(struct?: SelectdbDbInstanceInstanceNetInfos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SelectdbDbInstanceInstanceNetInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelectdbDbInstanceInstanceNetInfos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelectdbDbInstanceInstanceNetInfos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // db_ip - computed: true, optional: false, required: false
  public get dbIp() {
    return this.getStringAttribute('db_ip');
  }

  // net_type - computed: true, optional: false, required: false
  public get netType() {
    return this.getStringAttribute('net_type');
  }

  // port_list - computed: true, optional: false, required: false
  private _portList = new SelectdbDbInstanceInstanceNetInfosPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }

  // vpc_instance_id - computed: true, optional: false, required: false
  public get vpcInstanceId() {
    return this.getStringAttribute('vpc_instance_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
}

export class SelectdbDbInstanceInstanceNetInfosList extends cdktf.ComplexList {

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
  public get(index: number): SelectdbDbInstanceInstanceNetInfosOutputReference {
    return new SelectdbDbInstanceInstanceNetInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelectdbDbInstanceSecurityIpLists {
}

export function selectdbDbInstanceSecurityIpListsToTerraform(struct?: SelectdbDbInstanceSecurityIpLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function selectdbDbInstanceSecurityIpListsToHclTerraform(struct?: SelectdbDbInstanceSecurityIpLists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SelectdbDbInstanceSecurityIpListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelectdbDbInstanceSecurityIpLists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelectdbDbInstanceSecurityIpLists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // group_tag - computed: true, optional: false, required: false
  public get groupTag() {
    return this.getStringAttribute('group_tag');
  }

  // list_net_type - computed: true, optional: false, required: false
  public get listNetType() {
    return this.getStringAttribute('list_net_type');
  }

  // security_ip_list - computed: true, optional: false, required: false
  public get securityIpList() {
    return this.getStringAttribute('security_ip_list');
  }

  // security_ip_type - computed: true, optional: false, required: false
  public get securityIpType() {
    return this.getStringAttribute('security_ip_type');
  }
}

export class SelectdbDbInstanceSecurityIpListsList extends cdktf.ComplexList {

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
  public get(index: number): SelectdbDbInstanceSecurityIpListsOutputReference {
    return new SelectdbDbInstanceSecurityIpListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelectdbDbInstanceDesiredSecurityIpLists {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#group_name SelectdbDbInstance#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#security_ip_list SelectdbDbInstance#security_ip_list}
  */
  readonly securityIpList?: string;
}

export function selectdbDbInstanceDesiredSecurityIpListsToTerraform(struct?: SelectdbDbInstanceDesiredSecurityIpLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    security_ip_list: cdktf.stringToTerraform(struct!.securityIpList),
  }
}


export function selectdbDbInstanceDesiredSecurityIpListsToHclTerraform(struct?: SelectdbDbInstanceDesiredSecurityIpLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
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

export class SelectdbDbInstanceDesiredSecurityIpListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SelectdbDbInstanceDesiredSecurityIpLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._securityIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIpList = this._securityIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelectdbDbInstanceDesiredSecurityIpLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._securityIpList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._securityIpList = value.securityIpList;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

export class SelectdbDbInstanceDesiredSecurityIpListsList extends cdktf.ComplexList {
  public internalValue? : SelectdbDbInstanceDesiredSecurityIpLists[] | cdktf.IResolvable

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
  public get(index: number): SelectdbDbInstanceDesiredSecurityIpListsOutputReference {
    return new SelectdbDbInstanceDesiredSecurityIpListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SelectdbDbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#create SelectdbDbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#delete SelectdbDbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#update SelectdbDbInstance#update}
  */
  readonly update?: string;
}

export function selectdbDbInstanceTimeoutsToTerraform(struct?: SelectdbDbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function selectdbDbInstanceTimeoutsToHclTerraform(struct?: SelectdbDbInstanceTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class SelectdbDbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SelectdbDbInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SelectdbDbInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance alicloud_selectdb_db_instance}
*/
export class SelectdbDbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_selectdb_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SelectdbDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SelectdbDbInstance to import
  * @param importFromId The id of the existing SelectdbDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SelectdbDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_selectdb_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/selectdb_db_instance alicloud_selectdb_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SelectdbDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SelectdbDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_selectdb_db_instance',
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
    this._adminPass = config.adminPass;
    this._cacheSize = config.cacheSize;
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceDescription = config.dbInstanceDescription;
    this._enablePublicNetwork = config.enablePublicNetwork;
    this._engineMinorVersion = config.engineMinorVersion;
    this._id = config.id;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._periodTime = config.periodTime;
    this._tags = config.tags;
    this._upgradedEngineMinorVersion = config.upgradedEngineMinorVersion;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._desiredSecurityIpLists.internalValue = config.desiredSecurityIpLists;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_pass - computed: false, optional: true, required: false
  private _adminPass?: string; 
  public get adminPass() {
    return this.getStringAttribute('admin_pass');
  }
  public set adminPass(value: string) {
    this._adminPass = value;
  }
  public resetAdminPass() {
    this._adminPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPassInput() {
    return this._adminPass;
  }

  // cache_size - computed: false, optional: false, required: true
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // cache_size_postpaid - computed: true, optional: false, required: false
  public get cacheSizePostpaid() {
    return this.getNumberAttribute('cache_size_postpaid');
  }

  // cache_size_prepaid - computed: true, optional: false, required: false
  public get cacheSizePrepaid() {
    return this.getNumberAttribute('cache_size_prepaid');
  }

  // cluster_count_postpaid - computed: true, optional: false, required: false
  public get clusterCountPostpaid() {
    return this.getNumberAttribute('cluster_count_postpaid');
  }

  // cluster_count_prepaid - computed: true, optional: false, required: false
  public get clusterCountPrepaid() {
    return this.getNumberAttribute('cluster_count_prepaid');
  }

  // cpu_postpaid - computed: true, optional: false, required: false
  public get cpuPostpaid() {
    return this.getNumberAttribute('cpu_postpaid');
  }

  // cpu_prepaid - computed: true, optional: false, required: false
  public get cpuPrepaid() {
    return this.getNumberAttribute('cpu_prepaid');
  }

  // db_instance_class - computed: false, optional: false, required: true
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_description - computed: false, optional: false, required: true
  private _dbInstanceDescription?: string; 
  public get dbInstanceDescription() {
    return this.getStringAttribute('db_instance_description');
  }
  public set dbInstanceDescription(value: string) {
    this._dbInstanceDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceDescriptionInput() {
    return this._dbInstanceDescription;
  }

  // enable_public_network - computed: false, optional: true, required: false
  private _enablePublicNetwork?: boolean | cdktf.IResolvable; 
  public get enablePublicNetwork() {
    return this.getBooleanAttribute('enable_public_network');
  }
  public set enablePublicNetwork(value: boolean | cdktf.IResolvable) {
    this._enablePublicNetwork = value;
  }
  public resetEnablePublicNetwork() {
    this._enablePublicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicNetworkInput() {
    return this._enablePublicNetwork;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_minor_version - computed: true, optional: true, required: false
  private _engineMinorVersion?: string; 
  public get engineMinorVersion() {
    return this.getStringAttribute('engine_minor_version');
  }
  public set engineMinorVersion(value: string) {
    this._engineMinorVersion = value;
  }
  public resetEngineMinorVersion() {
    this._engineMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineMinorVersionInput() {
    return this._engineMinorVersion;
  }

  // gmt_created - computed: true, optional: false, required: false
  public get gmtCreated() {
    return this.getStringAttribute('gmt_created');
  }

  // gmt_expired - computed: true, optional: false, required: false
  public get gmtExpired() {
    return this.getStringAttribute('gmt_expired');
  }

  // gmt_modified - computed: true, optional: false, required: false
  public get gmtModified() {
    return this.getStringAttribute('gmt_modified');
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

  // instance_net_infos - computed: true, optional: false, required: false
  private _instanceNetInfos = new SelectdbDbInstanceInstanceNetInfosList(this, "instance_net_infos", false);
  public get instanceNetInfos() {
    return this._instanceNetInfos;
  }

  // lock_mode - computed: true, optional: false, required: false
  public get lockMode() {
    return this.getStringAttribute('lock_mode');
  }

  // lock_reason - computed: true, optional: false, required: false
  public get lockReason() {
    return this.getStringAttribute('lock_reason');
  }

  // memory_postpaid - computed: true, optional: false, required: false
  public get memoryPostpaid() {
    return this.getNumberAttribute('memory_postpaid');
  }

  // memory_prepaid - computed: true, optional: false, required: false
  public get memoryPrepaid() {
    return this.getNumberAttribute('memory_prepaid');
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

  // period_time - computed: false, optional: true, required: false
  private _periodTime?: number; 
  public get periodTime() {
    return this.getNumberAttribute('period_time');
  }
  public set periodTime(value: number) {
    this._periodTime = value;
  }
  public resetPeriodTime() {
    this._periodTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodTimeInput() {
    return this._periodTime;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // security_ip_lists - computed: true, optional: false, required: false
  private _securityIpLists = new SelectdbDbInstanceSecurityIpListsList(this, "security_ip_lists", false);
  public get securityIpLists() {
    return this._securityIpLists;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sub_domain - computed: true, optional: false, required: false
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
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

  // upgraded_engine_minor_version - computed: true, optional: true, required: false
  private _upgradedEngineMinorVersion?: string; 
  public get upgradedEngineMinorVersion() {
    return this.getStringAttribute('upgraded_engine_minor_version');
  }
  public set upgradedEngineMinorVersion(value: string) {
    this._upgradedEngineMinorVersion = value;
  }
  public resetUpgradedEngineMinorVersion() {
    this._upgradedEngineMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradedEngineMinorVersionInput() {
    return this._upgradedEngineMinorVersion;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
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

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // desired_security_ip_lists - computed: false, optional: true, required: false
  private _desiredSecurityIpLists = new SelectdbDbInstanceDesiredSecurityIpListsList(this, "desired_security_ip_lists", false);
  public get desiredSecurityIpLists() {
    return this._desiredSecurityIpLists;
  }
  public putDesiredSecurityIpLists(value: SelectdbDbInstanceDesiredSecurityIpLists[] | cdktf.IResolvable) {
    this._desiredSecurityIpLists.internalValue = value;
  }
  public resetDesiredSecurityIpLists() {
    this._desiredSecurityIpLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredSecurityIpListsInput() {
    return this._desiredSecurityIpLists.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SelectdbDbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SelectdbDbInstanceTimeouts) {
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
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      cache_size: cdktf.numberToTerraform(this._cacheSize),
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      db_instance_description: cdktf.stringToTerraform(this._dbInstanceDescription),
      enable_public_network: cdktf.booleanToTerraform(this._enablePublicNetwork),
      engine_minor_version: cdktf.stringToTerraform(this._engineMinorVersion),
      id: cdktf.stringToTerraform(this._id),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.stringToTerraform(this._period),
      period_time: cdktf.numberToTerraform(this._periodTime),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upgraded_engine_minor_version: cdktf.stringToTerraform(this._upgradedEngineMinorVersion),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      desired_security_ip_lists: cdktf.listMapper(selectdbDbInstanceDesiredSecurityIpListsToTerraform, true)(this._desiredSecurityIpLists.internalValue),
      timeouts: selectdbDbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_pass: {
        value: cdktf.stringToHclTerraform(this._adminPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_size: {
        value: cdktf.numberToHclTerraform(this._cacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_instance_class: {
        value: cdktf.stringToHclTerraform(this._dbInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_description: {
        value: cdktf.stringToHclTerraform(this._dbInstanceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_public_network: {
        value: cdktf.booleanToHclTerraform(this._enablePublicNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_minor_version: {
        value: cdktf.stringToHclTerraform(this._engineMinorVersion),
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
      period_time: {
        value: cdktf.numberToHclTerraform(this._periodTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      upgraded_engine_minor_version: {
        value: cdktf.stringToHclTerraform(this._upgradedEngineMinorVersion),
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
      desired_security_ip_lists: {
        value: cdktf.listMapperHcl(selectdbDbInstanceDesiredSecurityIpListsToHclTerraform, true)(this._desiredSecurityIpLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SelectdbDbInstanceDesiredSecurityIpListsList",
      },
      timeouts: {
        value: selectdbDbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SelectdbDbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
