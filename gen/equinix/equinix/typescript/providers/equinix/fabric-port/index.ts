// https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Port order account details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#account FabricPort#account}
  */
  readonly account: FabricPortAccount;
  /**
  * List of key/value objects to provide additional context to the Port order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#additional_info FabricPort#additional_info}
  */
  readonly additionalInfo?: FabricPortAdditionalInfo[] | cdktf.IResolvable;
  /**
  * Connection type that is used from the port after creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#connectivity_source_type FabricPort#connectivity_source_type}
  */
  readonly connectivitySourceType: string;
  /**
  * IBX code where the port will be located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#demarcation_point_ibx FabricPort#demarcation_point_ibx}
  */
  readonly demarcationPointIbx: string;
  /**
  * Port device configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#device FabricPort#device}
  */
  readonly device?: FabricPortDevice;
  /**
  * Port encapsulation settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#encapsulation FabricPort#encapsulation}
  */
  readonly encapsulation: FabricPortEncapsulation;
  /**
  * Boolean value to enable the created port with Link Aggregation Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#lag_enabled FabricPort#lag_enabled}
  */
  readonly lagEnabled: boolean | cdktf.IResolvable;
  /**
  * Location details for the port order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#location FabricPort#location}
  */
  readonly location: FabricPortLocation;
  /**
  * Designated name of the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#name FabricPort#name}
  */
  readonly name?: string;
  /**
  * List of notification types and the registered users to receive those notification types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#notifications FabricPort#notifications}
  */
  readonly notifications: FabricPortNotifications[] | cdktf.IResolvable;
  /**
  * Details of the Port Order such as purchaseOrder details and signature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#order FabricPort#order}
  */
  readonly order?: FabricPortOrder;
  /**
  * Physical ports that will implement this port order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#physical_ports FabricPort#physical_ports}
  */
  readonly physicalPorts: FabricPortPhysicalPorts[] | cdktf.IResolvable;
  /**
  * Number of physical ports in the Port Order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#physical_ports_count FabricPort#physical_ports_count}
  */
  readonly physicalPortsCount: number;
  /**
  * Physical Ports Speed in Mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#physical_ports_speed FabricPort#physical_ports_speed}
  */
  readonly physicalPortsSpeed: number;
  /**
  * Physical Ports Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#physical_ports_type FabricPort#physical_ports_type}
  */
  readonly physicalPortsType: string;
  /**
  * Port order project details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#project FabricPort#project}
  */
  readonly project: FabricPortProject;
  /**
  * Port redundancy settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#redundancy FabricPort#redundancy}
  */
  readonly redundancy: FabricPortRedundancy;
  /**
  * Port order configuration settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#settings FabricPort#settings}
  */
  readonly settings: FabricPortSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#timeouts FabricPort#timeouts}
  */
  readonly timeouts?: FabricPortTimeouts;
  /**
  * Type of the port order request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#type FabricPort#type}
  */
  readonly type: string;
}
export interface FabricPortAccount {
  /**
  * Account number the port will be created for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#account_number FabricPort#account_number}
  */
  readonly accountNumber: number;
}

export function fabricPortAccountToTerraform(struct?: FabricPortAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_number: cdktf.numberToTerraform(struct!.accountNumber),
  }
}


export function fabricPortAccountToHclTerraform(struct?: FabricPortAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_number: {
      value: cdktf.numberToHclTerraform(struct!.accountNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountNumber = value.accountNumber;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: number; 
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }
  public set accountNumber(value: number) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // ucm_id - computed: true, optional: false, required: false
  public get ucmId() {
    return this.getStringAttribute('ucm_id');
  }
}
export interface FabricPortAdditionalInfo {
  /**
  * The key name of the key/value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#key FabricPort#key}
  */
  readonly key: string;
  /**
  * The value of the key/value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#value FabricPort#value}
  */
  readonly value: string;
}

export function fabricPortAdditionalInfoToTerraform(struct?: FabricPortAdditionalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fabricPortAdditionalInfoToHclTerraform(struct?: FabricPortAdditionalInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class FabricPortAdditionalInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricPortAdditionalInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortAdditionalInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class FabricPortAdditionalInfoList extends cdktf.ComplexList {
  public internalValue? : FabricPortAdditionalInfo[] | cdktf.IResolvable

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
  public get(index: number): FabricPortAdditionalInfoOutputReference {
    return new FabricPortAdditionalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricPortChangeLog {
}

export function fabricPortChangeLogToTerraform(struct?: FabricPortChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricPortChangeLogToHclTerraform(struct?: FabricPortChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricPortChangeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortChangeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_full_name - computed: true, optional: false, required: false
  public get createdByFullName() {
    return this.getStringAttribute('created_by_full_name');
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // deleted_by - computed: true, optional: false, required: false
  public get deletedBy() {
    return this.getStringAttribute('deleted_by');
  }

  // deleted_by_email - computed: true, optional: false, required: false
  public get deletedByEmail() {
    return this.getStringAttribute('deleted_by_email');
  }

  // deleted_by_full_name - computed: true, optional: false, required: false
  public get deletedByFullName() {
    return this.getStringAttribute('deleted_by_full_name');
  }

  // deleted_date_time - computed: true, optional: false, required: false
  public get deletedDateTime() {
    return this.getStringAttribute('deleted_date_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_email - computed: true, optional: false, required: false
  public get updatedByEmail() {
    return this.getStringAttribute('updated_by_email');
  }

  // updated_by_full_name - computed: true, optional: false, required: false
  public get updatedByFullName() {
    return this.getStringAttribute('updated_by_full_name');
  }

  // updated_date_time - computed: true, optional: false, required: false
  public get updatedDateTime() {
    return this.getStringAttribute('updated_date_time');
  }
}
export interface FabricPortDeviceRedundancy {
  /**
  * Redundancy group identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#group FabricPort#group}
  */
  readonly group?: string;
  /**
  * Redundancy priority (PRIMARY or SECONDARY)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#priority FabricPort#priority}
  */
  readonly priority?: string;
}

export function fabricPortDeviceRedundancyToTerraform(struct?: FabricPortDeviceRedundancy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function fabricPortDeviceRedundancyToHclTerraform(struct?: FabricPortDeviceRedundancy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortDeviceRedundancyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortDeviceRedundancy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortDeviceRedundancy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._priority = value.priority;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface FabricPortDevice {
  /**
  * Device name for the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#name FabricPort#name}
  */
  readonly name?: string;
  /**
  * Device redundancy configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#redundancy FabricPort#redundancy}
  */
  readonly redundancy?: FabricPortDeviceRedundancy;
}

export function fabricPortDeviceToTerraform(struct?: FabricPortDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    redundancy: fabricPortDeviceRedundancyToTerraform(struct!.redundancy),
  }
}


export function fabricPortDeviceToHclTerraform(struct?: FabricPortDevice | cdktf.IResolvable): any {
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
    redundancy: {
      value: fabricPortDeviceRedundancyToHclTerraform(struct!.redundancy),
      isBlock: true,
      type: "struct",
      storageClassType: "FabricPortDeviceRedundancy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._redundancy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundancy = this._redundancy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._redundancy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._redundancy.internalValue = value.redundancy;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // redundancy - computed: false, optional: true, required: false
  private _redundancy = new FabricPortDeviceRedundancyOutputReference(this, "redundancy");
  public get redundancy() {
    return this._redundancy;
  }
  public putRedundancy(value: FabricPortDeviceRedundancy) {
    this._redundancy.internalValue = value;
  }
  public resetRedundancy() {
    this._redundancy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyInput() {
    return this._redundancy.internalValue;
  }
}
export interface FabricPortEncapsulation {
  /**
  * Port encapsulation tag protocol identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#tag_protocol_id FabricPort#tag_protocol_id}
  */
  readonly tagProtocolId: string;
  /**
  * Port encapsulation protocol type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#type FabricPort#type}
  */
  readonly type: string;
}

export function fabricPortEncapsulationToTerraform(struct?: FabricPortEncapsulation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_protocol_id: cdktf.stringToTerraform(struct!.tagProtocolId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fabricPortEncapsulationToHclTerraform(struct?: FabricPortEncapsulation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_protocol_id: {
      value: cdktf.stringToHclTerraform(struct!.tagProtocolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortEncapsulationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortEncapsulation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagProtocolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagProtocolId = this._tagProtocolId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortEncapsulation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagProtocolId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagProtocolId = value.tagProtocolId;
      this._type = value.type;
    }
  }

  // tag_protocol_id - computed: false, optional: false, required: true
  private _tagProtocolId?: string; 
  public get tagProtocolId() {
    return this.getStringAttribute('tag_protocol_id');
  }
  public set tagProtocolId(value: string) {
    this._tagProtocolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagProtocolIdInput() {
    return this._tagProtocolId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface FabricPortLocation {
  /**
  * Metro code the port will be created in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#metro_code FabricPort#metro_code}
  */
  readonly metroCode: string;
}

export function fabricPortLocationToTerraform(struct?: FabricPortLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metro_code: cdktf.stringToTerraform(struct!.metroCode),
  }
}


export function fabricPortLocationToHclTerraform(struct?: FabricPortLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metro_code: {
      value: cdktf.stringToHclTerraform(struct!.metroCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroCode = this._metroCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metroCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metroCode = value.metroCode;
    }
  }

  // metro_code - computed: false, optional: false, required: true
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }
}
export interface FabricPortNotifications {
  /**
  * Array of registered users that will receive this notification type on the port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#registered_users FabricPort#registered_users}
  */
  readonly registeredUsers: string[];
  /**
  * Notification Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#type FabricPort#type}
  */
  readonly type: string;
}

export function fabricPortNotificationsToTerraform(struct?: FabricPortNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registered_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.registeredUsers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fabricPortNotificationsToHclTerraform(struct?: FabricPortNotifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    registered_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.registeredUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortNotificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricPortNotifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registeredUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.registeredUsers = this._registeredUsers;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortNotifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registeredUsers = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registeredUsers = value.registeredUsers;
      this._type = value.type;
    }
  }

  // registered_users - computed: false, optional: false, required: true
  private _registeredUsers?: string[]; 
  public get registeredUsers() {
    return this.getListAttribute('registered_users');
  }
  public set registeredUsers(value: string[]) {
    this._registeredUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredUsersInput() {
    return this._registeredUsers;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FabricPortNotificationsList extends cdktf.ComplexList {
  public internalValue? : FabricPortNotifications[] | cdktf.IResolvable

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
  public get(index: number): FabricPortNotificationsOutputReference {
    return new FabricPortNotificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricPortOrderPurchaseOrder {
}

export function fabricPortOrderPurchaseOrderToTerraform(struct?: FabricPortOrderPurchaseOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricPortOrderPurchaseOrderToHclTerraform(struct?: FabricPortOrderPurchaseOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricPortOrderPurchaseOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortOrderPurchaseOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortOrderPurchaseOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getStringAttribute('amount');
  }

  // attachment_id - computed: true, optional: false, required: false
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface FabricPortOrderSignatureDelegate {
  /**
  * Email of the signatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#email FabricPort#email}
  */
  readonly email: string;
  /**
  * First name of the signatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#first_name FabricPort#first_name}
  */
  readonly firstName?: string;
  /**
  * Last name of the signatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#last_name FabricPort#last_name}
  */
  readonly lastName?: string;
}

export function fabricPortOrderSignatureDelegateToTerraform(struct?: FabricPortOrderSignatureDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
  }
}


export function fabricPortOrderSignatureDelegateToHclTerraform(struct?: FabricPortOrderSignatureDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortOrderSignatureDelegateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortOrderSignatureDelegate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortOrderSignatureDelegate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._firstName = undefined;
      this._lastName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._firstName = value.firstName;
      this._lastName = value.lastName;
    }
  }

  // email - computed: true, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }
}
export interface FabricPortOrderSignature {
  /**
  * delegate order details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#delegate FabricPort#delegate}
  */
  readonly delegate: FabricPortOrderSignatureDelegate;
  /**
  * Port signature Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#signatory FabricPort#signatory}
  */
  readonly signatory: string;
}

export function fabricPortOrderSignatureToTerraform(struct?: FabricPortOrderSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegate: fabricPortOrderSignatureDelegateToTerraform(struct!.delegate),
    signatory: cdktf.stringToTerraform(struct!.signatory),
  }
}


export function fabricPortOrderSignatureToHclTerraform(struct?: FabricPortOrderSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegate: {
      value: fabricPortOrderSignatureDelegateToHclTerraform(struct!.delegate),
      isBlock: true,
      type: "struct",
      storageClassType: "FabricPortOrderSignatureDelegate",
    },
    signatory: {
      value: cdktf.stringToHclTerraform(struct!.signatory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortOrderSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortOrderSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegate = this._delegate?.internalValue;
    }
    if (this._signatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatory = this._signatory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortOrderSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegate.internalValue = undefined;
      this._signatory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegate.internalValue = value.delegate;
      this._signatory = value.signatory;
    }
  }

  // delegate - computed: true, optional: false, required: true
  private _delegate = new FabricPortOrderSignatureDelegateOutputReference(this, "delegate");
  public get delegate() {
    return this._delegate;
  }
  public putDelegate(value: FabricPortOrderSignatureDelegate) {
    this._delegate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateInput() {
    return this._delegate.internalValue;
  }

  // signatory - computed: true, optional: false, required: true
  private _signatory?: string; 
  public get signatory() {
    return this.getStringAttribute('signatory');
  }
  public set signatory(value: string) {
    this._signatory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatoryInput() {
    return this._signatory;
  }
}
export interface FabricPortOrder {
  /**
  * Customer order reference Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#customer_reference_id FabricPort#customer_reference_id}
  */
  readonly customerReferenceId?: string;
  /**
  * Purchase order details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#purchase_order FabricPort#purchase_order}
  */
  readonly purchaseOrder?: FabricPortOrderPurchaseOrder;
  /**
  * Port order confirmation signature details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#signature FabricPort#signature}
  */
  readonly signature?: FabricPortOrderSignature;
}

export function fabricPortOrderToTerraform(struct?: FabricPortOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_reference_id: cdktf.stringToTerraform(struct!.customerReferenceId),
    purchase_order: fabricPortOrderPurchaseOrderToTerraform(struct!.purchaseOrder),
    signature: fabricPortOrderSignatureToTerraform(struct!.signature),
  }
}


export function fabricPortOrderToHclTerraform(struct?: FabricPortOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_reference_id: {
      value: cdktf.stringToHclTerraform(struct!.customerReferenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purchase_order: {
      value: fabricPortOrderPurchaseOrderToHclTerraform(struct!.purchaseOrder),
      isBlock: true,
      type: "struct",
      storageClassType: "FabricPortOrderPurchaseOrder",
    },
    signature: {
      value: fabricPortOrderSignatureToHclTerraform(struct!.signature),
      isBlock: true,
      type: "struct",
      storageClassType: "FabricPortOrderSignature",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerReferenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerReferenceId = this._customerReferenceId;
    }
    if (this._purchaseOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.purchaseOrder = this._purchaseOrder?.internalValue;
    }
    if (this._signature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerReferenceId = undefined;
      this._purchaseOrder.internalValue = undefined;
      this._signature.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerReferenceId = value.customerReferenceId;
      this._purchaseOrder.internalValue = value.purchaseOrder;
      this._signature.internalValue = value.signature;
    }
  }

  // customer_reference_id - computed: true, optional: true, required: false
  private _customerReferenceId?: string; 
  public get customerReferenceId() {
    return this.getStringAttribute('customer_reference_id');
  }
  public set customerReferenceId(value: string) {
    this._customerReferenceId = value;
  }
  public resetCustomerReferenceId() {
    this._customerReferenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerReferenceIdInput() {
    return this._customerReferenceId;
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // order_number - computed: true, optional: false, required: false
  public get orderNumber() {
    return this.getStringAttribute('order_number');
  }

  // purchase_order - computed: true, optional: true, required: false
  private _purchaseOrder = new FabricPortOrderPurchaseOrderOutputReference(this, "purchase_order");
  public get purchaseOrder() {
    return this._purchaseOrder;
  }
  public putPurchaseOrder(value: FabricPortOrderPurchaseOrder) {
    this._purchaseOrder.internalValue = value;
  }
  public resetPurchaseOrder() {
    this._purchaseOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchaseOrderInput() {
    return this._purchaseOrder.internalValue;
  }

  // signature - computed: true, optional: true, required: false
  private _signature = new FabricPortOrderSignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }
  public putSignature(value: FabricPortOrderSignature) {
    this._signature.internalValue = value;
  }
  public resetSignature() {
    this._signature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}
export interface FabricPortPhysicalPortsDemarcationPoint {
  /**
  * Port cabinet unique space id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#cabinet_unique_space_id FabricPort#cabinet_unique_space_id}
  */
  readonly cabinetUniqueSpaceId: string;
  /**
  * Port cage unique space id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#cage_unique_space_id FabricPort#cage_unique_space_id}
  */
  readonly cageUniqueSpaceId: string;
  /**
  * Port connector type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#connector_type FabricPort#connector_type}
  */
  readonly connectorType: string;
  /**
  * IBX Metro code for the physical port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#ibx FabricPort#ibx}
  */
  readonly ibx: string;
  /**
  * Port patch panel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#patch_panel FabricPort#patch_panel}
  */
  readonly patchPanel: string;
}

export function fabricPortPhysicalPortsDemarcationPointToTerraform(struct?: FabricPortPhysicalPortsDemarcationPoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cabinet_unique_space_id: cdktf.stringToTerraform(struct!.cabinetUniqueSpaceId),
    cage_unique_space_id: cdktf.stringToTerraform(struct!.cageUniqueSpaceId),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    ibx: cdktf.stringToTerraform(struct!.ibx),
    patch_panel: cdktf.stringToTerraform(struct!.patchPanel),
  }
}


export function fabricPortPhysicalPortsDemarcationPointToHclTerraform(struct?: FabricPortPhysicalPortsDemarcationPoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cabinet_unique_space_id: {
      value: cdktf.stringToHclTerraform(struct!.cabinetUniqueSpaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cage_unique_space_id: {
      value: cdktf.stringToHclTerraform(struct!.cageUniqueSpaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ibx: {
      value: cdktf.stringToHclTerraform(struct!.ibx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_panel: {
      value: cdktf.stringToHclTerraform(struct!.patchPanel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortPhysicalPortsDemarcationPointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortPhysicalPortsDemarcationPoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cabinetUniqueSpaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cabinetUniqueSpaceId = this._cabinetUniqueSpaceId;
    }
    if (this._cageUniqueSpaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cageUniqueSpaceId = this._cageUniqueSpaceId;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._ibx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibx = this._ibx;
    }
    if (this._patchPanel !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchPanel = this._patchPanel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortPhysicalPortsDemarcationPoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cabinetUniqueSpaceId = undefined;
      this._cageUniqueSpaceId = undefined;
      this._connectorType = undefined;
      this._ibx = undefined;
      this._patchPanel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cabinetUniqueSpaceId = value.cabinetUniqueSpaceId;
      this._cageUniqueSpaceId = value.cageUniqueSpaceId;
      this._connectorType = value.connectorType;
      this._ibx = value.ibx;
      this._patchPanel = value.patchPanel;
    }
  }

  // cabinet_unique_space_id - computed: false, optional: false, required: true
  private _cabinetUniqueSpaceId?: string; 
  public get cabinetUniqueSpaceId() {
    return this.getStringAttribute('cabinet_unique_space_id');
  }
  public set cabinetUniqueSpaceId(value: string) {
    this._cabinetUniqueSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cabinetUniqueSpaceIdInput() {
    return this._cabinetUniqueSpaceId;
  }

  // cage_unique_space_id - computed: false, optional: false, required: true
  private _cageUniqueSpaceId?: string; 
  public get cageUniqueSpaceId() {
    return this.getStringAttribute('cage_unique_space_id');
  }
  public set cageUniqueSpaceId(value: string) {
    this._cageUniqueSpaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cageUniqueSpaceIdInput() {
    return this._cageUniqueSpaceId;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // ibx - computed: false, optional: false, required: true
  private _ibx?: string; 
  public get ibx() {
    return this.getStringAttribute('ibx');
  }
  public set ibx(value: string) {
    this._ibx = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ibxInput() {
    return this._ibx;
  }

  // patch_panel - computed: false, optional: false, required: true
  private _patchPanel?: string; 
  public get patchPanel() {
    return this.getStringAttribute('patch_panel');
  }
  public set patchPanel(value: string) {
    this._patchPanel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchPanelInput() {
    return this._patchPanel;
  }
}
export interface FabricPortPhysicalPortsInterface {
  /**
  * Interface type for the physical port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#type FabricPort#type}
  */
  readonly type?: string;
}

export function fabricPortPhysicalPortsInterfaceToTerraform(struct?: FabricPortPhysicalPortsInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fabricPortPhysicalPortsInterfaceToHclTerraform(struct?: FabricPortPhysicalPortsInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortPhysicalPortsInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortPhysicalPortsInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortPhysicalPortsInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface FabricPortPhysicalPorts {
  /**
  * Customer physical port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#demarcation_point FabricPort#demarcation_point}
  */
  readonly demarcationPoint: FabricPortPhysicalPortsDemarcationPoint;
  /**
  * Physical port interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#interface FabricPort#interface}
  */
  readonly interface?: FabricPortPhysicalPortsInterface;
  /**
  * Physical Port type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#type FabricPort#type}
  */
  readonly type: string;
}

export function fabricPortPhysicalPortsToTerraform(struct?: FabricPortPhysicalPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    demarcation_point: fabricPortPhysicalPortsDemarcationPointToTerraform(struct!.demarcationPoint),
    interface: fabricPortPhysicalPortsInterfaceToTerraform(struct!.interface),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function fabricPortPhysicalPortsToHclTerraform(struct?: FabricPortPhysicalPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    demarcation_point: {
      value: fabricPortPhysicalPortsDemarcationPointToHclTerraform(struct!.demarcationPoint),
      isBlock: true,
      type: "struct",
      storageClassType: "FabricPortPhysicalPortsDemarcationPoint",
    },
    interface: {
      value: fabricPortPhysicalPortsInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "struct",
      storageClassType: "FabricPortPhysicalPortsInterface",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortPhysicalPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricPortPhysicalPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._demarcationPoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.demarcationPoint = this._demarcationPoint?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortPhysicalPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._demarcationPoint.internalValue = undefined;
      this._interface.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._demarcationPoint.internalValue = value.demarcationPoint;
      this._interface.internalValue = value.interface;
      this._type = value.type;
    }
  }

  // demarcation_point - computed: false, optional: false, required: true
  private _demarcationPoint = new FabricPortPhysicalPortsDemarcationPointOutputReference(this, "demarcation_point");
  public get demarcationPoint() {
    return this._demarcationPoint;
  }
  public putDemarcationPoint(value: FabricPortPhysicalPortsDemarcationPoint) {
    this._demarcationPoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get demarcationPointInput() {
    return this._demarcationPoint.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new FabricPortPhysicalPortsInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: FabricPortPhysicalPortsInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FabricPortPhysicalPortsList extends cdktf.ComplexList {
  public internalValue? : FabricPortPhysicalPorts[] | cdktf.IResolvable

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
  public get(index: number): FabricPortPhysicalPortsOutputReference {
    return new FabricPortPhysicalPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricPortProject {
  /**
  * Project id the port will be created in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#project_id FabricPort#project_id}
  */
  readonly projectId: string;
}

export function fabricPortProjectToTerraform(struct?: FabricPortProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function fabricPortProjectToHclTerraform(struct?: FabricPortProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortProject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortProject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface FabricPortRedundancy {
  /**
  * Port redundancy priority value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#priority FabricPort#priority}
  */
  readonly priority: string;
}

export function fabricPortRedundancyToTerraform(struct?: FabricPortRedundancy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function fabricPortRedundancyToHclTerraform(struct?: FabricPortRedundancy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortRedundancyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortRedundancy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortRedundancy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface FabricPortSettings {
  /**
  * Billing package for the port being ordered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#package_type FabricPort#package_type}
  */
  readonly packageType: string;
  /**
  * Indicates whether this is a dedicated customer cage or a shared neutral cage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#shared_port_type FabricPort#shared_port_type}
  */
  readonly sharedPortType: boolean | cdktf.IResolvable;
}

export function fabricPortSettingsToTerraform(struct?: FabricPortSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package_type: cdktf.stringToTerraform(struct!.packageType),
    shared_port_type: cdktf.booleanToTerraform(struct!.sharedPortType),
  }
}


export function fabricPortSettingsToHclTerraform(struct?: FabricPortSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package_type: {
      value: cdktf.stringToHclTerraform(struct!.packageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_port_type: {
      value: cdktf.booleanToHclTerraform(struct!.sharedPortType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPortSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageType = this._packageType;
    }
    if (this._sharedPortType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPortType = this._sharedPortType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packageType = undefined;
      this._sharedPortType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packageType = value.packageType;
      this._sharedPortType = value.sharedPortType;
    }
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // shared_port_type - computed: false, optional: false, required: true
  private _sharedPortType?: boolean | cdktf.IResolvable; 
  public get sharedPortType() {
    return this.getBooleanAttribute('shared_port_type');
  }
  public set sharedPortType(value: boolean | cdktf.IResolvable) {
    this._sharedPortType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPortTypeInput() {
    return this._sharedPortType;
  }
}
export interface FabricPortTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#create FabricPort#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#delete FabricPort#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#read FabricPort#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#update FabricPort#update}
  */
  readonly update?: string;
}

export function fabricPortTimeoutsToTerraform(struct?: FabricPortTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fabricPortTimeoutsToHclTerraform(struct?: FabricPortTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class FabricPortTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPortTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPortTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port equinix_fabric_port}
*/
export class FabricPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricPort to import
  * @param importFromId The id of the existing FabricPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.0/docs/resources/fabric_port equinix_fabric_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricPortConfig
  */
  public constructor(scope: Construct, id: string, config: FabricPortConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_port',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.0',
        providerVersionConstraint: '4.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account.internalValue = config.account;
    this._additionalInfo.internalValue = config.additionalInfo;
    this._connectivitySourceType = config.connectivitySourceType;
    this._demarcationPointIbx = config.demarcationPointIbx;
    this._device.internalValue = config.device;
    this._encapsulation.internalValue = config.encapsulation;
    this._lagEnabled = config.lagEnabled;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._notifications.internalValue = config.notifications;
    this._order.internalValue = config.order;
    this._physicalPorts.internalValue = config.physicalPorts;
    this._physicalPortsCount = config.physicalPortsCount;
    this._physicalPortsSpeed = config.physicalPortsSpeed;
    this._physicalPortsType = config.physicalPortsType;
    this._project.internalValue = config.project;
    this._redundancy.internalValue = config.redundancy;
    this._settings.internalValue = config.settings;
    this._timeouts.internalValue = config.timeouts;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account = new FabricPortAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }
  public putAccount(value: FabricPortAccount) {
    this._account.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo = new FabricPortAdditionalInfoList(this, "additional_info", false);
  public get additionalInfo() {
    return this._additionalInfo;
  }
  public putAdditionalInfo(value: FabricPortAdditionalInfo[] | cdktf.IResolvable) {
    this._additionalInfo.internalValue = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo.internalValue;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new FabricPortChangeLogOutputReference(this, "change_log");
  public get changeLog() {
    return this._changeLog;
  }

  // connectivity_source_type - computed: false, optional: false, required: true
  private _connectivitySourceType?: string; 
  public get connectivitySourceType() {
    return this.getStringAttribute('connectivity_source_type');
  }
  public set connectivitySourceType(value: string) {
    this._connectivitySourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivitySourceTypeInput() {
    return this._connectivitySourceType;
  }

  // demarcation_point_ibx - computed: false, optional: false, required: true
  private _demarcationPointIbx?: string; 
  public get demarcationPointIbx() {
    return this.getStringAttribute('demarcation_point_ibx');
  }
  public set demarcationPointIbx(value: string) {
    this._demarcationPointIbx = value;
  }
  // Temporarily expose input value. Use with caution.
  public get demarcationPointIbxInput() {
    return this._demarcationPointIbx;
  }

  // device - computed: false, optional: true, required: false
  private _device = new FabricPortDeviceOutputReference(this, "device");
  public get device() {
    return this._device;
  }
  public putDevice(value: FabricPortDevice) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // encapsulation - computed: false, optional: false, required: true
  private _encapsulation = new FabricPortEncapsulationOutputReference(this, "encapsulation");
  public get encapsulation() {
    return this._encapsulation;
  }
  public putEncapsulation(value: FabricPortEncapsulation) {
    this._encapsulation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation.internalValue;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lag_enabled - computed: false, optional: false, required: true
  private _lagEnabled?: boolean | cdktf.IResolvable; 
  public get lagEnabled() {
    return this.getBooleanAttribute('lag_enabled');
  }
  public set lagEnabled(value: boolean | cdktf.IResolvable) {
    this._lagEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lagEnabledInput() {
    return this._lagEnabled;
  }

  // location - computed: false, optional: false, required: true
  private _location = new FabricPortLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: FabricPortLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications - computed: false, optional: false, required: true
  private _notifications = new FabricPortNotificationsList(this, "notifications", false);
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: FabricPortNotifications[] | cdktf.IResolvable) {
    this._notifications.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // order - computed: true, optional: true, required: false
  private _order = new FabricPortOrderOutputReference(this, "order");
  public get order() {
    return this._order;
  }
  public putOrder(value: FabricPortOrder) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // physical_ports - computed: false, optional: false, required: true
  private _physicalPorts = new FabricPortPhysicalPortsList(this, "physical_ports", false);
  public get physicalPorts() {
    return this._physicalPorts;
  }
  public putPhysicalPorts(value: FabricPortPhysicalPorts[] | cdktf.IResolvable) {
    this._physicalPorts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalPortsInput() {
    return this._physicalPorts.internalValue;
  }

  // physical_ports_count - computed: false, optional: false, required: true
  private _physicalPortsCount?: number; 
  public get physicalPortsCount() {
    return this.getNumberAttribute('physical_ports_count');
  }
  public set physicalPortsCount(value: number) {
    this._physicalPortsCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalPortsCountInput() {
    return this._physicalPortsCount;
  }

  // physical_ports_speed - computed: false, optional: false, required: true
  private _physicalPortsSpeed?: number; 
  public get physicalPortsSpeed() {
    return this.getNumberAttribute('physical_ports_speed');
  }
  public set physicalPortsSpeed(value: number) {
    this._physicalPortsSpeed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalPortsSpeedInput() {
    return this._physicalPortsSpeed;
  }

  // physical_ports_type - computed: false, optional: false, required: true
  private _physicalPortsType?: string; 
  public get physicalPortsType() {
    return this.getStringAttribute('physical_ports_type');
  }
  public set physicalPortsType(value: string) {
    this._physicalPortsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalPortsTypeInput() {
    return this._physicalPortsType;
  }

  // project - computed: false, optional: false, required: true
  private _project = new FabricPortProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: FabricPortProject) {
    this._project.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // redundancy - computed: false, optional: false, required: true
  private _redundancy = new FabricPortRedundancyOutputReference(this, "redundancy");
  public get redundancy() {
    return this._redundancy;
  }
  public putRedundancy(value: FabricPortRedundancy) {
    this._redundancy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyInput() {
    return this._redundancy.internalValue;
  }

  // settings - computed: false, optional: false, required: true
  private _settings = new FabricPortSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: FabricPortSettings) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FabricPortTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FabricPortTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: fabricPortAccountToTerraform(this._account.internalValue),
      additional_info: cdktf.listMapper(fabricPortAdditionalInfoToTerraform, false)(this._additionalInfo.internalValue),
      connectivity_source_type: cdktf.stringToTerraform(this._connectivitySourceType),
      demarcation_point_ibx: cdktf.stringToTerraform(this._demarcationPointIbx),
      device: fabricPortDeviceToTerraform(this._device.internalValue),
      encapsulation: fabricPortEncapsulationToTerraform(this._encapsulation.internalValue),
      lag_enabled: cdktf.booleanToTerraform(this._lagEnabled),
      location: fabricPortLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      notifications: cdktf.listMapper(fabricPortNotificationsToTerraform, false)(this._notifications.internalValue),
      order: fabricPortOrderToTerraform(this._order.internalValue),
      physical_ports: cdktf.listMapper(fabricPortPhysicalPortsToTerraform, false)(this._physicalPorts.internalValue),
      physical_ports_count: cdktf.numberToTerraform(this._physicalPortsCount),
      physical_ports_speed: cdktf.numberToTerraform(this._physicalPortsSpeed),
      physical_ports_type: cdktf.stringToTerraform(this._physicalPortsType),
      project: fabricPortProjectToTerraform(this._project.internalValue),
      redundancy: fabricPortRedundancyToTerraform(this._redundancy.internalValue),
      settings: fabricPortSettingsToTerraform(this._settings.internalValue),
      timeouts: fabricPortTimeoutsToTerraform(this._timeouts.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: fabricPortAccountToHclTerraform(this._account.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPortAccount",
      },
      additional_info: {
        value: cdktf.listMapperHcl(fabricPortAdditionalInfoToHclTerraform, false)(this._additionalInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricPortAdditionalInfoList",
      },
      connectivity_source_type: {
        value: cdktf.stringToHclTerraform(this._connectivitySourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      demarcation_point_ibx: {
        value: cdktf.stringToHclTerraform(this._demarcationPointIbx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: fabricPortDeviceToHclTerraform(this._device.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPortDevice",
      },
      encapsulation: {
        value: fabricPortEncapsulationToHclTerraform(this._encapsulation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPortEncapsulation",
      },
      lag_enabled: {
        value: cdktf.booleanToHclTerraform(this._lagEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: fabricPortLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPortLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifications: {
        value: cdktf.listMapperHcl(fabricPortNotificationsToHclTerraform, false)(this._notifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricPortNotificationsList",
      },
      order: {
        value: fabricPortOrderToHclTerraform(this._order.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPortOrder",
      },
      physical_ports: {
        value: cdktf.listMapperHcl(fabricPortPhysicalPortsToHclTerraform, false)(this._physicalPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricPortPhysicalPortsList",
      },
      physical_ports_count: {
        value: cdktf.numberToHclTerraform(this._physicalPortsCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      physical_ports_speed: {
        value: cdktf.numberToHclTerraform(this._physicalPortsSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      physical_ports_type: {
        value: cdktf.stringToHclTerraform(this._physicalPortsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: fabricPortProjectToHclTerraform(this._project.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPortProject",
      },
      redundancy: {
        value: fabricPortRedundancyToHclTerraform(this._redundancy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPortRedundancy",
      },
      settings: {
        value: fabricPortSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPortSettings",
      },
      timeouts: {
        value: fabricPortTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPortTimeouts",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
