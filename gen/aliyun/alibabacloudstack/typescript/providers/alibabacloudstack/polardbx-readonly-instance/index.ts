// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbxReadonlyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#cn_node_class PolardbxReadonlyInstance#cn_node_class}
  */
  readonly cnNodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#cn_node_count PolardbxReadonlyInstance#cn_node_count}
  */
  readonly cnNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#cpu_type PolardbxReadonlyInstance#cpu_type}
  */
  readonly cpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#description PolardbxReadonlyInstance#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#dn_node_class PolardbxReadonlyInstance#dn_node_class}
  */
  readonly dnNodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#dn_node_count PolardbxReadonlyInstance#dn_node_count}
  */
  readonly dnNodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#enable_public_connection PolardbxReadonlyInstance#enable_public_connection}
  */
  readonly enablePublicConnection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#enable_ssl PolardbxReadonlyInstance#enable_ssl}
  */
  readonly enableSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#enable_tde PolardbxReadonlyInstance#enable_tde}
  */
  readonly enableTde?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#engine_version PolardbxReadonlyInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#gms_node_class PolardbxReadonlyInstance#gms_node_class}
  */
  readonly gmsNodeClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#id PolardbxReadonlyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#polardbx_instance_id PolardbxReadonlyInstance#polardbx_instance_id}
  */
  readonly polardbxInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#primary_db_instance_id PolardbxReadonlyInstance#primary_db_instance_id}
  */
  readonly primaryDbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#primary_zone PolardbxReadonlyInstance#primary_zone}
  */
  readonly primaryZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#private_connection_port PolardbxReadonlyInstance#private_connection_port}
  */
  readonly privateConnectionPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#private_connection_string_prefix PolardbxReadonlyInstance#private_connection_string_prefix}
  */
  readonly privateConnectionStringPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#public_connection_port PolardbxReadonlyInstance#public_connection_port}
  */
  readonly publicConnectionPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#public_connection_string_prefix PolardbxReadonlyInstance#public_connection_string_prefix}
  */
  readonly publicConnectionStringPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#resource_type PolardbxReadonlyInstance#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#secondary_zone PolardbxReadonlyInstance#secondary_zone}
  */
  readonly secondaryZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#storage PolardbxReadonlyInstance#storage}
  */
  readonly storage: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#tertiary_zone PolardbxReadonlyInstance#tertiary_zone}
  */
  readonly tertiaryZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#topology_type PolardbxReadonlyInstance#topology_type}
  */
  readonly topologyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#vswitch_id PolardbxReadonlyInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#zone_id PolardbxReadonlyInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * compute_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#compute_parameters PolardbxReadonlyInstance#compute_parameters}
  */
  readonly computeParameters?: PolardbxReadonlyInstanceComputeParameters[] | cdktf.IResolvable;
  /**
  * security_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#security_groups PolardbxReadonlyInstance#security_groups}
  */
  readonly securityGroups?: PolardbxReadonlyInstanceSecurityGroups[] | cdktf.IResolvable;
  /**
  * storage_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#storage_parameters PolardbxReadonlyInstance#storage_parameters}
  */
  readonly storageParameters?: PolardbxReadonlyInstanceStorageParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#timeouts PolardbxReadonlyInstance#timeouts}
  */
  readonly timeouts?: PolardbxReadonlyInstanceTimeouts;
}
export interface PolardbxReadonlyInstanceComputeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#name PolardbxReadonlyInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#value PolardbxReadonlyInstance#value}
  */
  readonly value: string;
}

export function polardbxReadonlyInstanceComputeParametersToTerraform(struct?: PolardbxReadonlyInstanceComputeParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function polardbxReadonlyInstanceComputeParametersToHclTerraform(struct?: PolardbxReadonlyInstanceComputeParameters | cdktf.IResolvable): any {
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

export class PolardbxReadonlyInstanceComputeParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolardbxReadonlyInstanceComputeParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolardbxReadonlyInstanceComputeParameters | cdktf.IResolvable | undefined) {
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

export class PolardbxReadonlyInstanceComputeParametersList extends cdktf.ComplexList {
  public internalValue? : PolardbxReadonlyInstanceComputeParameters[] | cdktf.IResolvable

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
  public get(index: number): PolardbxReadonlyInstanceComputeParametersOutputReference {
    return new PolardbxReadonlyInstanceComputeParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolardbxReadonlyInstanceSecurityGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#group_name PolardbxReadonlyInstance#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#ips PolardbxReadonlyInstance#ips}
  */
  readonly ips: string;
}

export function polardbxReadonlyInstanceSecurityGroupsToTerraform(struct?: PolardbxReadonlyInstanceSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    ips: cdktf.stringToTerraform(struct!.ips),
  }
}


export function polardbxReadonlyInstanceSecurityGroupsToHclTerraform(struct?: PolardbxReadonlyInstanceSecurityGroups | cdktf.IResolvable): any {
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
    ips: {
      value: cdktf.stringToHclTerraform(struct!.ips),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolardbxReadonlyInstanceSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolardbxReadonlyInstanceSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolardbxReadonlyInstanceSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._ips = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._ips = value.ips;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // ips - computed: false, optional: false, required: true
  private _ips?: string; 
  public get ips() {
    return this.getStringAttribute('ips');
  }
  public set ips(value: string) {
    this._ips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }
}

export class PolardbxReadonlyInstanceSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : PolardbxReadonlyInstanceSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): PolardbxReadonlyInstanceSecurityGroupsOutputReference {
    return new PolardbxReadonlyInstanceSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolardbxReadonlyInstanceStorageParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#name PolardbxReadonlyInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#value PolardbxReadonlyInstance#value}
  */
  readonly value: string;
}

export function polardbxReadonlyInstanceStorageParametersToTerraform(struct?: PolardbxReadonlyInstanceStorageParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function polardbxReadonlyInstanceStorageParametersToHclTerraform(struct?: PolardbxReadonlyInstanceStorageParameters | cdktf.IResolvable): any {
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

export class PolardbxReadonlyInstanceStorageParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolardbxReadonlyInstanceStorageParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolardbxReadonlyInstanceStorageParameters | cdktf.IResolvable | undefined) {
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

export class PolardbxReadonlyInstanceStorageParametersList extends cdktf.ComplexList {
  public internalValue? : PolardbxReadonlyInstanceStorageParameters[] | cdktf.IResolvable

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
  public get(index: number): PolardbxReadonlyInstanceStorageParametersOutputReference {
    return new PolardbxReadonlyInstanceStorageParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolardbxReadonlyInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#create PolardbxReadonlyInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#delete PolardbxReadonlyInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#update PolardbxReadonlyInstance#update}
  */
  readonly update?: string;
}

export function polardbxReadonlyInstanceTimeoutsToTerraform(struct?: PolardbxReadonlyInstanceTimeouts | cdktf.IResolvable): any {
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


export function polardbxReadonlyInstanceTimeoutsToHclTerraform(struct?: PolardbxReadonlyInstanceTimeouts | cdktf.IResolvable): any {
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

export class PolardbxReadonlyInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolardbxReadonlyInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolardbxReadonlyInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance alibabacloudstack_polardbx_readonly_instance}
*/
export class PolardbxReadonlyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardbx_readonly_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbxReadonlyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbxReadonlyInstance to import
  * @param importFromId The id of the existing PolardbxReadonlyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbxReadonlyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardbx_readonly_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_readonly_instance alibabacloudstack_polardbx_readonly_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbxReadonlyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbxReadonlyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardbx_readonly_instance',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cnNodeClass = config.cnNodeClass;
    this._cnNodeCount = config.cnNodeCount;
    this._cpuType = config.cpuType;
    this._description = config.description;
    this._dnNodeClass = config.dnNodeClass;
    this._dnNodeCount = config.dnNodeCount;
    this._enablePublicConnection = config.enablePublicConnection;
    this._enableSsl = config.enableSsl;
    this._enableTde = config.enableTde;
    this._engineVersion = config.engineVersion;
    this._gmsNodeClass = config.gmsNodeClass;
    this._id = config.id;
    this._polardbxInstanceId = config.polardbxInstanceId;
    this._primaryDbInstanceId = config.primaryDbInstanceId;
    this._primaryZone = config.primaryZone;
    this._privateConnectionPort = config.privateConnectionPort;
    this._privateConnectionStringPrefix = config.privateConnectionStringPrefix;
    this._publicConnectionPort = config.publicConnectionPort;
    this._publicConnectionStringPrefix = config.publicConnectionStringPrefix;
    this._resourceType = config.resourceType;
    this._secondaryZone = config.secondaryZone;
    this._storage = config.storage;
    this._tertiaryZone = config.tertiaryZone;
    this._topologyType = config.topologyType;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._computeParameters.internalValue = config.computeParameters;
    this._securityGroups.internalValue = config.securityGroups;
    this._storageParameters.internalValue = config.storageParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cn_node_class - computed: false, optional: false, required: true
  private _cnNodeClass?: string; 
  public get cnNodeClass() {
    return this.getStringAttribute('cn_node_class');
  }
  public set cnNodeClass(value: string) {
    this._cnNodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnNodeClassInput() {
    return this._cnNodeClass;
  }

  // cn_node_count - computed: false, optional: false, required: true
  private _cnNodeCount?: number; 
  public get cnNodeCount() {
    return this.getNumberAttribute('cn_node_count');
  }
  public set cnNodeCount(value: number) {
    this._cnNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnNodeCountInput() {
    return this._cnNodeCount;
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // cpu_type - computed: true, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // dn_node_class - computed: false, optional: false, required: true
  private _dnNodeClass?: string; 
  public get dnNodeClass() {
    return this.getStringAttribute('dn_node_class');
  }
  public set dnNodeClass(value: string) {
    this._dnNodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnNodeClassInput() {
    return this._dnNodeClass;
  }

  // dn_node_count - computed: false, optional: false, required: true
  private _dnNodeCount?: number; 
  public get dnNodeCount() {
    return this.getNumberAttribute('dn_node_count');
  }
  public set dnNodeCount(value: number) {
    this._dnNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnNodeCountInput() {
    return this._dnNodeCount;
  }

  // enable_public_connection - computed: false, optional: true, required: false
  private _enablePublicConnection?: boolean | cdktf.IResolvable; 
  public get enablePublicConnection() {
    return this.getBooleanAttribute('enable_public_connection');
  }
  public set enablePublicConnection(value: boolean | cdktf.IResolvable) {
    this._enablePublicConnection = value;
  }
  public resetEnablePublicConnection() {
    this._enablePublicConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicConnectionInput() {
    return this._enablePublicConnection;
  }

  // enable_ssl - computed: false, optional: true, required: false
  private _enableSsl?: boolean | cdktf.IResolvable; 
  public get enableSsl() {
    return this.getBooleanAttribute('enable_ssl');
  }
  public set enableSsl(value: boolean | cdktf.IResolvable) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl;
  }

  // enable_tde - computed: false, optional: true, required: false
  private _enableTde?: boolean | cdktf.IResolvable; 
  public get enableTde() {
    return this.getBooleanAttribute('enable_tde');
  }
  public set enableTde(value: boolean | cdktf.IResolvable) {
    this._enableTde = value;
  }
  public resetEnableTde() {
    this._enableTde = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTdeInput() {
    return this._enableTde;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // gms_node_class - computed: true, optional: true, required: false
  private _gmsNodeClass?: string; 
  public get gmsNodeClass() {
    return this.getStringAttribute('gms_node_class');
  }
  public set gmsNodeClass(value: string) {
    this._gmsNodeClass = value;
  }
  public resetGmsNodeClass() {
    this._gmsNodeClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsNodeClassInput() {
    return this._gmsNodeClass;
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

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // polardbx_instance_id - computed: false, optional: true, required: false
  private _polardbxInstanceId?: string; 
  public get polardbxInstanceId() {
    return this.getStringAttribute('polardbx_instance_id');
  }
  public set polardbxInstanceId(value: string) {
    this._polardbxInstanceId = value;
  }
  public resetPolardbxInstanceId() {
    this._polardbxInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polardbxInstanceIdInput() {
    return this._polardbxInstanceId;
  }

  // primary_db_instance_id - computed: false, optional: false, required: true
  private _primaryDbInstanceId?: string; 
  public get primaryDbInstanceId() {
    return this.getStringAttribute('primary_db_instance_id');
  }
  public set primaryDbInstanceId(value: string) {
    this._primaryDbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDbInstanceIdInput() {
    return this._primaryDbInstanceId;
  }

  // primary_zone - computed: false, optional: true, required: false
  private _primaryZone?: string; 
  public get primaryZone() {
    return this.getStringAttribute('primary_zone');
  }
  public set primaryZone(value: string) {
    this._primaryZone = value;
  }
  public resetPrimaryZone() {
    this._primaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryZoneInput() {
    return this._primaryZone;
  }

  // private_connection_port - computed: false, optional: true, required: false
  private _privateConnectionPort?: number; 
  public get privateConnectionPort() {
    return this.getNumberAttribute('private_connection_port');
  }
  public set privateConnectionPort(value: number) {
    this._privateConnectionPort = value;
  }
  public resetPrivateConnectionPort() {
    this._privateConnectionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionPortInput() {
    return this._privateConnectionPort;
  }

  // private_connection_string - computed: true, optional: false, required: false
  public get privateConnectionString() {
    return this.getStringAttribute('private_connection_string');
  }

  // private_connection_string_prefix - computed: false, optional: true, required: false
  private _privateConnectionStringPrefix?: string; 
  public get privateConnectionStringPrefix() {
    return this.getStringAttribute('private_connection_string_prefix');
  }
  public set privateConnectionStringPrefix(value: string) {
    this._privateConnectionStringPrefix = value;
  }
  public resetPrivateConnectionStringPrefix() {
    this._privateConnectionStringPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionStringPrefixInput() {
    return this._privateConnectionStringPrefix;
  }

  // public_connection_port - computed: false, optional: true, required: false
  private _publicConnectionPort?: number; 
  public get publicConnectionPort() {
    return this.getNumberAttribute('public_connection_port');
  }
  public set publicConnectionPort(value: number) {
    this._publicConnectionPort = value;
  }
  public resetPublicConnectionPort() {
    this._publicConnectionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicConnectionPortInput() {
    return this._publicConnectionPort;
  }

  // public_connection_string - computed: true, optional: false, required: false
  public get publicConnectionString() {
    return this.getStringAttribute('public_connection_string');
  }

  // public_connection_string_prefix - computed: false, optional: true, required: false
  private _publicConnectionStringPrefix?: string; 
  public get publicConnectionStringPrefix() {
    return this.getStringAttribute('public_connection_string_prefix');
  }
  public set publicConnectionStringPrefix(value: string) {
    this._publicConnectionStringPrefix = value;
  }
  public resetPublicConnectionStringPrefix() {
    this._publicConnectionStringPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicConnectionStringPrefixInput() {
    return this._publicConnectionStringPrefix;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // secondary_zone - computed: false, optional: true, required: false
  private _secondaryZone?: string; 
  public get secondaryZone() {
    return this.getStringAttribute('secondary_zone');
  }
  public set secondaryZone(value: string) {
    this._secondaryZone = value;
  }
  public resetSecondaryZone() {
    this._secondaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneInput() {
    return this._secondaryZone;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tertiary_zone - computed: false, optional: true, required: false
  private _tertiaryZone?: string; 
  public get tertiaryZone() {
    return this.getStringAttribute('tertiary_zone');
  }
  public set tertiaryZone(value: string) {
    this._tertiaryZone = value;
  }
  public resetTertiaryZone() {
    this._tertiaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryZoneInput() {
    return this._tertiaryZone;
  }

  // topology_type - computed: false, optional: true, required: false
  private _topologyType?: string; 
  public get topologyType() {
    return this.getStringAttribute('topology_type');
  }
  public set topologyType(value: string) {
    this._topologyType = value;
  }
  public resetTopologyType() {
    this._topologyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyTypeInput() {
    return this._topologyType;
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

  // zone_id - computed: false, optional: true, required: false
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

  // compute_parameters - computed: false, optional: true, required: false
  private _computeParameters = new PolardbxReadonlyInstanceComputeParametersList(this, "compute_parameters", true);
  public get computeParameters() {
    return this._computeParameters;
  }
  public putComputeParameters(value: PolardbxReadonlyInstanceComputeParameters[] | cdktf.IResolvable) {
    this._computeParameters.internalValue = value;
  }
  public resetComputeParameters() {
    this._computeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeParametersInput() {
    return this._computeParameters.internalValue;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new PolardbxReadonlyInstanceSecurityGroupsList(this, "security_groups", true);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: PolardbxReadonlyInstanceSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // storage_parameters - computed: false, optional: true, required: false
  private _storageParameters = new PolardbxReadonlyInstanceStorageParametersList(this, "storage_parameters", true);
  public get storageParameters() {
    return this._storageParameters;
  }
  public putStorageParameters(value: PolardbxReadonlyInstanceStorageParameters[] | cdktf.IResolvable) {
    this._storageParameters.internalValue = value;
  }
  public resetStorageParameters() {
    this._storageParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageParametersInput() {
    return this._storageParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PolardbxReadonlyInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PolardbxReadonlyInstanceTimeouts) {
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
      cn_node_class: cdktf.stringToTerraform(this._cnNodeClass),
      cn_node_count: cdktf.numberToTerraform(this._cnNodeCount),
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      description: cdktf.stringToTerraform(this._description),
      dn_node_class: cdktf.stringToTerraform(this._dnNodeClass),
      dn_node_count: cdktf.numberToTerraform(this._dnNodeCount),
      enable_public_connection: cdktf.booleanToTerraform(this._enablePublicConnection),
      enable_ssl: cdktf.booleanToTerraform(this._enableSsl),
      enable_tde: cdktf.booleanToTerraform(this._enableTde),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      gms_node_class: cdktf.stringToTerraform(this._gmsNodeClass),
      id: cdktf.stringToTerraform(this._id),
      polardbx_instance_id: cdktf.stringToTerraform(this._polardbxInstanceId),
      primary_db_instance_id: cdktf.stringToTerraform(this._primaryDbInstanceId),
      primary_zone: cdktf.stringToTerraform(this._primaryZone),
      private_connection_port: cdktf.numberToTerraform(this._privateConnectionPort),
      private_connection_string_prefix: cdktf.stringToTerraform(this._privateConnectionStringPrefix),
      public_connection_port: cdktf.numberToTerraform(this._publicConnectionPort),
      public_connection_string_prefix: cdktf.stringToTerraform(this._publicConnectionStringPrefix),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      secondary_zone: cdktf.stringToTerraform(this._secondaryZone),
      storage: cdktf.numberToTerraform(this._storage),
      tertiary_zone: cdktf.stringToTerraform(this._tertiaryZone),
      topology_type: cdktf.stringToTerraform(this._topologyType),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      compute_parameters: cdktf.listMapper(polardbxReadonlyInstanceComputeParametersToTerraform, true)(this._computeParameters.internalValue),
      security_groups: cdktf.listMapper(polardbxReadonlyInstanceSecurityGroupsToTerraform, true)(this._securityGroups.internalValue),
      storage_parameters: cdktf.listMapper(polardbxReadonlyInstanceStorageParametersToTerraform, true)(this._storageParameters.internalValue),
      timeouts: polardbxReadonlyInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cn_node_class: {
        value: cdktf.stringToHclTerraform(this._cnNodeClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn_node_count: {
        value: cdktf.numberToHclTerraform(this._cnNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
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
      dn_node_class: {
        value: cdktf.stringToHclTerraform(this._dnNodeClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn_node_count: {
        value: cdktf.numberToHclTerraform(this._dnNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_public_connection: {
        value: cdktf.booleanToHclTerraform(this._enablePublicConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ssl: {
        value: cdktf.booleanToHclTerraform(this._enableSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tde: {
        value: cdktf.booleanToHclTerraform(this._enableTde),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gms_node_class: {
        value: cdktf.stringToHclTerraform(this._gmsNodeClass),
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
      polardbx_instance_id: {
        value: cdktf.stringToHclTerraform(this._polardbxInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_db_instance_id: {
        value: cdktf.stringToHclTerraform(this._primaryDbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_zone: {
        value: cdktf.stringToHclTerraform(this._primaryZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_connection_port: {
        value: cdktf.numberToHclTerraform(this._privateConnectionPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_connection_string_prefix: {
        value: cdktf.stringToHclTerraform(this._privateConnectionStringPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_connection_port: {
        value: cdktf.numberToHclTerraform(this._publicConnectionPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_connection_string_prefix: {
        value: cdktf.stringToHclTerraform(this._publicConnectionStringPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_zone: {
        value: cdktf.stringToHclTerraform(this._secondaryZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tertiary_zone: {
        value: cdktf.stringToHclTerraform(this._tertiaryZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_type: {
        value: cdktf.stringToHclTerraform(this._topologyType),
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
      compute_parameters: {
        value: cdktf.listMapperHcl(polardbxReadonlyInstanceComputeParametersToHclTerraform, true)(this._computeParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolardbxReadonlyInstanceComputeParametersList",
      },
      security_groups: {
        value: cdktf.listMapperHcl(polardbxReadonlyInstanceSecurityGroupsToHclTerraform, true)(this._securityGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolardbxReadonlyInstanceSecurityGroupsList",
      },
      storage_parameters: {
        value: cdktf.listMapperHcl(polardbxReadonlyInstanceStorageParametersToHclTerraform, true)(this._storageParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolardbxReadonlyInstanceStorageParametersList",
      },
      timeouts: {
        value: polardbxReadonlyInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PolardbxReadonlyInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
