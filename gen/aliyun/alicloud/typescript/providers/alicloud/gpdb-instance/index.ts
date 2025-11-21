// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpdbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#availability_zone GpdbInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#create_sample_data GpdbInstance#create_sample_data}
  */
  readonly createSampleData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#data_share_status GpdbInstance#data_share_status}
  */
  readonly dataShareStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#db_instance_category GpdbInstance#db_instance_category}
  */
  readonly dbInstanceCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#db_instance_class GpdbInstance#db_instance_class}
  */
  readonly dbInstanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#db_instance_mode GpdbInstance#db_instance_mode}
  */
  readonly dbInstanceMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#description GpdbInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#encryption_key GpdbInstance#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#encryption_type GpdbInstance#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#engine GpdbInstance#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#engine_version GpdbInstance#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#id GpdbInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#instance_charge_type GpdbInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#instance_group_count GpdbInstance#instance_group_count}
  */
  readonly instanceGroupCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#instance_network_type GpdbInstance#instance_network_type}
  */
  readonly instanceNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#instance_spec GpdbInstance#instance_spec}
  */
  readonly instanceSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#maintain_end_time GpdbInstance#maintain_end_time}
  */
  readonly maintainEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#maintain_start_time GpdbInstance#maintain_start_time}
  */
  readonly maintainStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#master_cu GpdbInstance#master_cu}
  */
  readonly masterCu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#master_node_num GpdbInstance#master_node_num}
  */
  readonly masterNodeNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#payment_type GpdbInstance#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#period GpdbInstance#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#private_ip_address GpdbInstance#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#prod_type GpdbInstance#prod_type}
  */
  readonly prodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#resource_group_id GpdbInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#resource_management_mode GpdbInstance#resource_management_mode}
  */
  readonly resourceManagementMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#security_ip_list GpdbInstance#security_ip_list}
  */
  readonly securityIpList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#seg_disk_performance_level GpdbInstance#seg_disk_performance_level}
  */
  readonly segDiskPerformanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#seg_node_num GpdbInstance#seg_node_num}
  */
  readonly segNodeNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#seg_storage_type GpdbInstance#seg_storage_type}
  */
  readonly segStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#serverless_mode GpdbInstance#serverless_mode}
  */
  readonly serverlessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#ssl_enabled GpdbInstance#ssl_enabled}
  */
  readonly sslEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#storage_size GpdbInstance#storage_size}
  */
  readonly storageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#tags GpdbInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#used_time GpdbInstance#used_time}
  */
  readonly usedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#vector_configuration_status GpdbInstance#vector_configuration_status}
  */
  readonly vectorConfigurationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#vpc_id GpdbInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#vswitch_id GpdbInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#zone_id GpdbInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * ip_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#ip_whitelist GpdbInstance#ip_whitelist}
  */
  readonly ipWhitelist?: GpdbInstanceIpWhitelistStruct[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#parameters GpdbInstance#parameters}
  */
  readonly parameters?: GpdbInstanceParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#timeouts GpdbInstance#timeouts}
  */
  readonly timeouts?: GpdbInstanceTimeouts;
}
export interface GpdbInstanceIpWhitelistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#ip_group_attribute GpdbInstance#ip_group_attribute}
  */
  readonly ipGroupAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#ip_group_name GpdbInstance#ip_group_name}
  */
  readonly ipGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#security_ip_list GpdbInstance#security_ip_list}
  */
  readonly securityIpList?: string;
}

export function gpdbInstanceIpWhitelistStructToTerraform(struct?: GpdbInstanceIpWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_group_attribute: cdktf.stringToTerraform(struct!.ipGroupAttribute),
    ip_group_name: cdktf.stringToTerraform(struct!.ipGroupName),
    security_ip_list: cdktf.stringToTerraform(struct!.securityIpList),
  }
}


export function gpdbInstanceIpWhitelistStructToHclTerraform(struct?: GpdbInstanceIpWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_group_attribute: {
      value: cdktf.stringToHclTerraform(struct!.ipGroupAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_group_name: {
      value: cdktf.stringToHclTerraform(struct!.ipGroupName),
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

export class GpdbInstanceIpWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GpdbInstanceIpWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipGroupAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGroupAttribute = this._ipGroupAttribute;
    }
    if (this._ipGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGroupName = this._ipGroupName;
    }
    if (this._securityIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIpList = this._securityIpList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbInstanceIpWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipGroupAttribute = undefined;
      this._ipGroupName = undefined;
      this._securityIpList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipGroupAttribute = value.ipGroupAttribute;
      this._ipGroupName = value.ipGroupName;
      this._securityIpList = value.securityIpList;
    }
  }

  // ip_group_attribute - computed: true, optional: true, required: false
  private _ipGroupAttribute?: string; 
  public get ipGroupAttribute() {
    return this.getStringAttribute('ip_group_attribute');
  }
  public set ipGroupAttribute(value: string) {
    this._ipGroupAttribute = value;
  }
  public resetIpGroupAttribute() {
    this._ipGroupAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupAttributeInput() {
    return this._ipGroupAttribute;
  }

  // ip_group_name - computed: true, optional: true, required: false
  private _ipGroupName?: string; 
  public get ipGroupName() {
    return this.getStringAttribute('ip_group_name');
  }
  public set ipGroupName(value: string) {
    this._ipGroupName = value;
  }
  public resetIpGroupName() {
    this._ipGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupNameInput() {
    return this._ipGroupName;
  }

  // security_ip_list - computed: true, optional: true, required: false
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

export class GpdbInstanceIpWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : GpdbInstanceIpWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): GpdbInstanceIpWhitelistStructOutputReference {
    return new GpdbInstanceIpWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GpdbInstanceParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#name GpdbInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#value GpdbInstance#value}
  */
  readonly value: string;
}

export function gpdbInstanceParametersToTerraform(struct?: GpdbInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gpdbInstanceParametersToHclTerraform(struct?: GpdbInstanceParameters | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GpdbInstanceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GpdbInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GpdbInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // force_restart_instance - computed: true, optional: false, required: false
  public get forceRestartInstance() {
    return this.getStringAttribute('force_restart_instance');
  }

  // is_changeable_config - computed: true, optional: false, required: false
  public get isChangeableConfig() {
    return this.getStringAttribute('is_changeable_config');
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

  // optional_range - computed: true, optional: false, required: false
  public get optionalRange() {
    return this.getStringAttribute('optional_range');
  }

  // parameter_description - computed: true, optional: false, required: false
  public get parameterDescription() {
    return this.getStringAttribute('parameter_description');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GpdbInstanceParametersList extends cdktf.ComplexList {
  public internalValue? : GpdbInstanceParameters[] | cdktf.IResolvable

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
  public get(index: number): GpdbInstanceParametersOutputReference {
    return new GpdbInstanceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GpdbInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#create GpdbInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#delete GpdbInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#update GpdbInstance#update}
  */
  readonly update?: string;
}

export function gpdbInstanceTimeoutsToTerraform(struct?: GpdbInstanceTimeouts | cdktf.IResolvable): any {
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


export function gpdbInstanceTimeoutsToHclTerraform(struct?: GpdbInstanceTimeouts | cdktf.IResolvable): any {
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

export class GpdbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GpdbInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GpdbInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance alicloud_gpdb_instance}
*/
export class GpdbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_gpdb_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpdbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpdbInstance to import
  * @param importFromId The id of the existing GpdbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpdbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_gpdb_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/gpdb_instance alicloud_gpdb_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpdbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GpdbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_gpdb_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._createSampleData = config.createSampleData;
    this._dataShareStatus = config.dataShareStatus;
    this._dbInstanceCategory = config.dbInstanceCategory;
    this._dbInstanceClass = config.dbInstanceClass;
    this._dbInstanceMode = config.dbInstanceMode;
    this._description = config.description;
    this._encryptionKey = config.encryptionKey;
    this._encryptionType = config.encryptionType;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceGroupCount = config.instanceGroupCount;
    this._instanceNetworkType = config.instanceNetworkType;
    this._instanceSpec = config.instanceSpec;
    this._maintainEndTime = config.maintainEndTime;
    this._maintainStartTime = config.maintainStartTime;
    this._masterCu = config.masterCu;
    this._masterNodeNum = config.masterNodeNum;
    this._paymentType = config.paymentType;
    this._period = config.period;
    this._privateIpAddress = config.privateIpAddress;
    this._prodType = config.prodType;
    this._resourceGroupId = config.resourceGroupId;
    this._resourceManagementMode = config.resourceManagementMode;
    this._securityIpList = config.securityIpList;
    this._segDiskPerformanceLevel = config.segDiskPerformanceLevel;
    this._segNodeNum = config.segNodeNum;
    this._segStorageType = config.segStorageType;
    this._serverlessMode = config.serverlessMode;
    this._sslEnabled = config.sslEnabled;
    this._storageSize = config.storageSize;
    this._tags = config.tags;
    this._usedTime = config.usedTime;
    this._vectorConfigurationStatus = config.vectorConfigurationStatus;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._ipWhitelist.internalValue = config.ipWhitelist;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // create_sample_data - computed: true, optional: true, required: false
  private _createSampleData?: boolean | cdktf.IResolvable; 
  public get createSampleData() {
    return this.getBooleanAttribute('create_sample_data');
  }
  public set createSampleData(value: boolean | cdktf.IResolvable) {
    this._createSampleData = value;
  }
  public resetCreateSampleData() {
    this._createSampleData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSampleDataInput() {
    return this._createSampleData;
  }

  // data_share_status - computed: true, optional: true, required: false
  private _dataShareStatus?: string; 
  public get dataShareStatus() {
    return this.getStringAttribute('data_share_status');
  }
  public set dataShareStatus(value: string) {
    this._dataShareStatus = value;
  }
  public resetDataShareStatus() {
    this._dataShareStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataShareStatusInput() {
    return this._dataShareStatus;
  }

  // db_instance_category - computed: true, optional: true, required: false
  private _dbInstanceCategory?: string; 
  public get dbInstanceCategory() {
    return this.getStringAttribute('db_instance_category');
  }
  public set dbInstanceCategory(value: string) {
    this._dbInstanceCategory = value;
  }
  public resetDbInstanceCategory() {
    this._dbInstanceCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceCategoryInput() {
    return this._dbInstanceCategory;
  }

  // db_instance_class - computed: false, optional: true, required: false
  private _dbInstanceClass?: string; 
  public get dbInstanceClass() {
    return this.getStringAttribute('db_instance_class');
  }
  public set dbInstanceClass(value: string) {
    this._dbInstanceClass = value;
  }
  public resetDbInstanceClass() {
    this._dbInstanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceClassInput() {
    return this._dbInstanceClass;
  }

  // db_instance_mode - computed: false, optional: false, required: true
  private _dbInstanceMode?: string; 
  public get dbInstanceMode() {
    return this.getStringAttribute('db_instance_mode');
  }
  public set dbInstanceMode(value: string) {
    this._dbInstanceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceModeInput() {
    return this._dbInstanceMode;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // instance_charge_type - computed: true, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_group_count - computed: false, optional: true, required: false
  private _instanceGroupCount?: number; 
  public get instanceGroupCount() {
    return this.getNumberAttribute('instance_group_count');
  }
  public set instanceGroupCount(value: number) {
    this._instanceGroupCount = value;
  }
  public resetInstanceGroupCount() {
    this._instanceGroupCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceGroupCountInput() {
    return this._instanceGroupCount;
  }

  // instance_network_type - computed: true, optional: true, required: false
  private _instanceNetworkType?: string; 
  public get instanceNetworkType() {
    return this.getStringAttribute('instance_network_type');
  }
  public set instanceNetworkType(value: string) {
    this._instanceNetworkType = value;
  }
  public resetInstanceNetworkType() {
    this._instanceNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNetworkTypeInput() {
    return this._instanceNetworkType;
  }

  // instance_spec - computed: false, optional: true, required: false
  private _instanceSpec?: string; 
  public get instanceSpec() {
    return this.getStringAttribute('instance_spec');
  }
  public set instanceSpec(value: string) {
    this._instanceSpec = value;
  }
  public resetInstanceSpec() {
    this._instanceSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSpecInput() {
    return this._instanceSpec;
  }

  // maintain_end_time - computed: true, optional: true, required: false
  private _maintainEndTime?: string; 
  public get maintainEndTime() {
    return this.getStringAttribute('maintain_end_time');
  }
  public set maintainEndTime(value: string) {
    this._maintainEndTime = value;
  }
  public resetMaintainEndTime() {
    this._maintainEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndTimeInput() {
    return this._maintainEndTime;
  }

  // maintain_start_time - computed: true, optional: true, required: false
  private _maintainStartTime?: string; 
  public get maintainStartTime() {
    return this.getStringAttribute('maintain_start_time');
  }
  public set maintainStartTime(value: string) {
    this._maintainStartTime = value;
  }
  public resetMaintainStartTime() {
    this._maintainStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainStartTimeInput() {
    return this._maintainStartTime;
  }

  // master_cu - computed: true, optional: true, required: false
  private _masterCu?: number; 
  public get masterCu() {
    return this.getNumberAttribute('master_cu');
  }
  public set masterCu(value: number) {
    this._masterCu = value;
  }
  public resetMasterCu() {
    this._masterCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCuInput() {
    return this._masterCu;
  }

  // master_node_num - computed: false, optional: true, required: false
  private _masterNodeNum?: number; 
  public get masterNodeNum() {
    return this.getNumberAttribute('master_node_num');
  }
  public set masterNodeNum(value: number) {
    this._masterNodeNum = value;
  }
  public resetMasterNodeNum() {
    this._masterNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeNumInput() {
    return this._masterNodeNum;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
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

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // prod_type - computed: true, optional: true, required: false
  private _prodType?: string; 
  public get prodType() {
    return this.getStringAttribute('prod_type');
  }
  public set prodType(value: string) {
    this._prodType = value;
  }
  public resetProdType() {
    this._prodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prodTypeInput() {
    return this._prodType;
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

  // resource_management_mode - computed: true, optional: true, required: false
  private _resourceManagementMode?: string; 
  public get resourceManagementMode() {
    return this.getStringAttribute('resource_management_mode');
  }
  public set resourceManagementMode(value: string) {
    this._resourceManagementMode = value;
  }
  public resetResourceManagementMode() {
    this._resourceManagementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagementModeInput() {
    return this._resourceManagementMode;
  }

  // security_ip_list - computed: false, optional: true, required: false
  private _securityIpList?: string[]; 
  public get securityIpList() {
    return cdktf.Fn.tolist(this.getListAttribute('security_ip_list'));
  }
  public set securityIpList(value: string[]) {
    this._securityIpList = value;
  }
  public resetSecurityIpList() {
    this._securityIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIpListInput() {
    return this._securityIpList;
  }

  // seg_disk_performance_level - computed: true, optional: true, required: false
  private _segDiskPerformanceLevel?: string; 
  public get segDiskPerformanceLevel() {
    return this.getStringAttribute('seg_disk_performance_level');
  }
  public set segDiskPerformanceLevel(value: string) {
    this._segDiskPerformanceLevel = value;
  }
  public resetSegDiskPerformanceLevel() {
    this._segDiskPerformanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segDiskPerformanceLevelInput() {
    return this._segDiskPerformanceLevel;
  }

  // seg_node_num - computed: true, optional: true, required: false
  private _segNodeNum?: number; 
  public get segNodeNum() {
    return this.getNumberAttribute('seg_node_num');
  }
  public set segNodeNum(value: number) {
    this._segNodeNum = value;
  }
  public resetSegNodeNum() {
    this._segNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segNodeNumInput() {
    return this._segNodeNum;
  }

  // seg_storage_type - computed: true, optional: true, required: false
  private _segStorageType?: string; 
  public get segStorageType() {
    return this.getStringAttribute('seg_storage_type');
  }
  public set segStorageType(value: string) {
    this._segStorageType = value;
  }
  public resetSegStorageType() {
    this._segStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segStorageTypeInput() {
    return this._segStorageType;
  }

  // serverless_mode - computed: true, optional: true, required: false
  private _serverlessMode?: string; 
  public get serverlessMode() {
    return this.getStringAttribute('serverless_mode');
  }
  public set serverlessMode(value: string) {
    this._serverlessMode = value;
  }
  public resetServerlessMode() {
    this._serverlessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessModeInput() {
    return this._serverlessMode;
  }

  // ssl_enabled - computed: true, optional: true, required: false
  private _sslEnabled?: number; 
  public get sslEnabled() {
    return this.getNumberAttribute('ssl_enabled');
  }
  public set sslEnabled(value: number) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_size - computed: true, optional: true, required: false
  private _storageSize?: number; 
  public get storageSize() {
    return this.getNumberAttribute('storage_size');
  }
  public set storageSize(value: number) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
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

  // vector_configuration_status - computed: true, optional: true, required: false
  private _vectorConfigurationStatus?: string; 
  public get vectorConfigurationStatus() {
    return this.getStringAttribute('vector_configuration_status');
  }
  public set vectorConfigurationStatus(value: string) {
    this._vectorConfigurationStatus = value;
  }
  public resetVectorConfigurationStatus() {
    this._vectorConfigurationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorConfigurationStatusInput() {
    return this._vectorConfigurationStatus;
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

  // ip_whitelist - computed: false, optional: true, required: false
  private _ipWhitelist = new GpdbInstanceIpWhitelistStructList(this, "ip_whitelist", false);
  public get ipWhitelist() {
    return this._ipWhitelist;
  }
  public putIpWhitelist(value: GpdbInstanceIpWhitelistStruct[] | cdktf.IResolvable) {
    this._ipWhitelist.internalValue = value;
  }
  public resetIpWhitelist() {
    this._ipWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhitelistInput() {
    return this._ipWhitelist.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new GpdbInstanceParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GpdbInstanceParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GpdbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GpdbInstanceTimeouts) {
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
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      create_sample_data: cdktf.booleanToTerraform(this._createSampleData),
      data_share_status: cdktf.stringToTerraform(this._dataShareStatus),
      db_instance_category: cdktf.stringToTerraform(this._dbInstanceCategory),
      db_instance_class: cdktf.stringToTerraform(this._dbInstanceClass),
      db_instance_mode: cdktf.stringToTerraform(this._dbInstanceMode),
      description: cdktf.stringToTerraform(this._description),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      encryption_type: cdktf.stringToTerraform(this._encryptionType),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_group_count: cdktf.numberToTerraform(this._instanceGroupCount),
      instance_network_type: cdktf.stringToTerraform(this._instanceNetworkType),
      instance_spec: cdktf.stringToTerraform(this._instanceSpec),
      maintain_end_time: cdktf.stringToTerraform(this._maintainEndTime),
      maintain_start_time: cdktf.stringToTerraform(this._maintainStartTime),
      master_cu: cdktf.numberToTerraform(this._masterCu),
      master_node_num: cdktf.numberToTerraform(this._masterNodeNum),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      period: cdktf.stringToTerraform(this._period),
      private_ip_address: cdktf.stringToTerraform(this._privateIpAddress),
      prod_type: cdktf.stringToTerraform(this._prodType),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      resource_management_mode: cdktf.stringToTerraform(this._resourceManagementMode),
      security_ip_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIpList),
      seg_disk_performance_level: cdktf.stringToTerraform(this._segDiskPerformanceLevel),
      seg_node_num: cdktf.numberToTerraform(this._segNodeNum),
      seg_storage_type: cdktf.stringToTerraform(this._segStorageType),
      serverless_mode: cdktf.stringToTerraform(this._serverlessMode),
      ssl_enabled: cdktf.numberToTerraform(this._sslEnabled),
      storage_size: cdktf.numberToTerraform(this._storageSize),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      used_time: cdktf.stringToTerraform(this._usedTime),
      vector_configuration_status: cdktf.stringToTerraform(this._vectorConfigurationStatus),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      ip_whitelist: cdktf.listMapper(gpdbInstanceIpWhitelistStructToTerraform, true)(this._ipWhitelist.internalValue),
      parameters: cdktf.listMapper(gpdbInstanceParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: gpdbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_sample_data: {
        value: cdktf.booleanToHclTerraform(this._createSampleData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_share_status: {
        value: cdktf.stringToHclTerraform(this._dataShareStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_category: {
        value: cdktf.stringToHclTerraform(this._dbInstanceCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_class: {
        value: cdktf.stringToHclTerraform(this._dbInstanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_mode: {
        value: cdktf.stringToHclTerraform(this._dbInstanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_group_count: {
        value: cdktf.numberToHclTerraform(this._instanceGroupCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_network_type: {
        value: cdktf.stringToHclTerraform(this._instanceNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_spec: {
        value: cdktf.stringToHclTerraform(this._instanceSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_end_time: {
        value: cdktf.stringToHclTerraform(this._maintainEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_start_time: {
        value: cdktf.stringToHclTerraform(this._maintainStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_cu: {
        value: cdktf.numberToHclTerraform(this._masterCu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_node_num: {
        value: cdktf.numberToHclTerraform(this._masterNodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      private_ip_address: {
        value: cdktf.stringToHclTerraform(this._privateIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prod_type: {
        value: cdktf.stringToHclTerraform(this._prodType),
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
      resource_management_mode: {
        value: cdktf.stringToHclTerraform(this._resourceManagementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_ip_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIpList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      seg_disk_performance_level: {
        value: cdktf.stringToHclTerraform(this._segDiskPerformanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seg_node_num: {
        value: cdktf.numberToHclTerraform(this._segNodeNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seg_storage_type: {
        value: cdktf.stringToHclTerraform(this._segStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_mode: {
        value: cdktf.stringToHclTerraform(this._serverlessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enabled: {
        value: cdktf.numberToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_size: {
        value: cdktf.numberToHclTerraform(this._storageSize),
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
      used_time: {
        value: cdktf.stringToHclTerraform(this._usedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vector_configuration_status: {
        value: cdktf.stringToHclTerraform(this._vectorConfigurationStatus),
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
      ip_whitelist: {
        value: cdktf.listMapperHcl(gpdbInstanceIpWhitelistStructToHclTerraform, true)(this._ipWhitelist.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GpdbInstanceIpWhitelistStructList",
      },
      parameters: {
        value: cdktf.listMapperHcl(gpdbInstanceParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GpdbInstanceParametersList",
      },
      timeouts: {
        value: gpdbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GpdbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
