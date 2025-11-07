// https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixFabricPrecisionTimeServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The uuid of the EPT Service this data source should retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#ept_service_id DataEquinixFabricPrecisionTimeService#ept_service_id}
  */
  readonly eptServiceId: string;
  /**
  * NTP Advanced configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#ntp_advanced_configuration DataEquinixFabricPrecisionTimeService#ntp_advanced_configuration}
  */
  readonly ntpAdvancedConfiguration?: DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfiguration[] | cdktf.IResolvable;
  /**
  * Equinix Project attribute object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#project DataEquinixFabricPrecisionTimeService#project}
  */
  readonly project?: DataEquinixFabricPrecisionTimeServiceProject;
  /**
  * PTP Advanced Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#ptp_advanced_configuration DataEquinixFabricPrecisionTimeService#ptp_advanced_configuration}
  */
  readonly ptpAdvancedConfiguration?: DataEquinixFabricPrecisionTimeServicePtpAdvancedConfiguration;
}
export interface DataEquinixFabricPrecisionTimeServiceAccount {
}

export function dataEquinixFabricPrecisionTimeServiceAccountToTerraform(struct?: DataEquinixFabricPrecisionTimeServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServiceAccountToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getNumberAttribute('account_number');
  }

  // global_cust_id - computed: true, optional: false, required: false
  public get globalCustId() {
    return this.getStringAttribute('global_cust_id');
  }

  // global_org_id - computed: true, optional: false, required: false
  public get globalOrgId() {
    return this.getStringAttribute('global_org_id');
  }

  // global_organization_name - computed: true, optional: false, required: false
  public get globalOrganizationName() {
    return this.getStringAttribute('global_organization_name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // reseller_account_name - computed: true, optional: false, required: false
  public get resellerAccountName() {
    return this.getStringAttribute('reseller_account_name');
  }

  // reseller_account_number - computed: true, optional: false, required: false
  public get resellerAccountNumber() {
    return this.getNumberAttribute('reseller_account_number');
  }

  // reseller_org_id - computed: true, optional: false, required: false
  public get resellerOrgId() {
    return this.getNumberAttribute('reseller_org_id');
  }

  // reseller_ucm_id - computed: true, optional: false, required: false
  public get resellerUcmId() {
    return this.getStringAttribute('reseller_ucm_id');
  }

  // ucm_id - computed: true, optional: false, required: false
  public get ucmId() {
    return this.getStringAttribute('ucm_id');
  }
}
export interface DataEquinixFabricPrecisionTimeServiceChangeLog {
}

export function dataEquinixFabricPrecisionTimeServiceChangeLogToTerraform(struct?: DataEquinixFabricPrecisionTimeServiceChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServiceChangeLogToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServiceChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServiceChangeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServiceChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServiceChangeLog | undefined) {
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
export interface DataEquinixFabricPrecisionTimeServiceConnections {
  /**
  * Equinix Fabric Connection UUID; Precision Time Service will be connected with it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#uuid DataEquinixFabricPrecisionTimeService#uuid}
  */
  readonly uuid: string;
}

export function dataEquinixFabricPrecisionTimeServiceConnectionsToTerraform(struct?: DataEquinixFabricPrecisionTimeServiceConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataEquinixFabricPrecisionTimeServiceConnectionsToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServiceConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricPrecisionTimeServiceConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricPrecisionTimeServiceConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServiceConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: true
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class DataEquinixFabricPrecisionTimeServiceConnectionsList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricPrecisionTimeServiceConnections[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricPrecisionTimeServiceConnectionsOutputReference {
    return new DataEquinixFabricPrecisionTimeServiceConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricPrecisionTimeServiceIpv4 {
  /**
  * IPv4 address that establishes the Routing Interface where traffic is directed. It serves as the next hop in the Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#default_gateway DataEquinixFabricPrecisionTimeService#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * IPv4 address that defines the range of consecutive subnets in the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#network_mask DataEquinixFabricPrecisionTimeService#network_mask}
  */
  readonly networkMask: string;
  /**
  * IPv4 address for the Primary Timing Master Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#primary DataEquinixFabricPrecisionTimeService#primary}
  */
  readonly primary: string;
  /**
  * IPv4 address for the Secondary Timing Master Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#secondary DataEquinixFabricPrecisionTimeService#secondary}
  */
  readonly secondary: string;
}

export function dataEquinixFabricPrecisionTimeServiceIpv4ToTerraform(struct?: DataEquinixFabricPrecisionTimeServiceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    network_mask: cdktf.stringToTerraform(struct!.networkMask),
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function dataEquinixFabricPrecisionTimeServiceIpv4ToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServiceIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mask: {
      value: cdktf.stringToHclTerraform(struct!.networkMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricPrecisionTimeServiceIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServiceIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._networkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMask = this._networkMask;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServiceIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._networkMask = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._networkMask = value.networkMask;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // default_gateway - computed: true, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // network_mask - computed: true, optional: false, required: true
  private _networkMask?: string; 
  public get networkMask() {
    return this.getStringAttribute('network_mask');
  }
  public set networkMask(value: string) {
    this._networkMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMaskInput() {
    return this._networkMask;
  }

  // primary - computed: true, optional: false, required: true
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: true, optional: false, required: true
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfiguration {
  /**
  * The plaintext authentication key. For ASCII type, the key\
  * \ must contain printable ASCII characters, range 10-20 characters. For\
  * \ HEX type, range should be 10-40 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#key DataEquinixFabricPrecisionTimeService#key}
  */
  readonly key?: string;
  /**
  * The authentication Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#key_number DataEquinixFabricPrecisionTimeService#key_number}
  */
  readonly keyNumber?: number;
  /**
  * md5 Authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#type DataEquinixFabricPrecisionTimeService#type}
  */
  readonly type?: string;
}

export function dataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationToTerraform(struct?: DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    key_number: cdktf.numberToTerraform(struct!.keyNumber),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfiguration | cdktf.IResolvable): any {
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
    key_number: {
      value: cdktf.numberToHclTerraform(struct!.keyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyNumber = this._keyNumber;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._keyNumber = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._keyNumber = value.keyNumber;
      this._type = value.type;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_number - computed: false, optional: true, required: false
  private _keyNumber?: number; 
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
  public set keyNumber(value: number) {
    this._keyNumber = value;
  }
  public resetKeyNumber() {
    this._keyNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNumberInput() {
    return this._keyNumber;
  }

  // type - computed: false, optional: true, required: false
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

export class DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationOutputReference {
    return new DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricPrecisionTimeServiceOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#operational_status DataEquinixFabricPrecisionTimeService#operational_status}
  */
  readonly operationalStatus?: string;
}

export function dataEquinixFabricPrecisionTimeServiceOperationToTerraform(struct?: DataEquinixFabricPrecisionTimeServiceOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operational_status: cdktf.stringToTerraform(struct!.operationalStatus),
  }
}


export function dataEquinixFabricPrecisionTimeServiceOperationToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServiceOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operational_status: {
      value: cdktf.stringToHclTerraform(struct!.operationalStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricPrecisionTimeServiceOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServiceOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationalStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationalStatus = this._operationalStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServiceOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operationalStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operationalStatus = value.operationalStatus;
    }
  }

  // operational_status - computed: true, optional: true, required: false
  private _operationalStatus?: string; 
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }
  public set operationalStatus(value: string) {
    this._operationalStatus = value;
  }
  public resetOperationalStatus() {
    this._operationalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalStatusInput() {
    return this._operationalStatus;
  }
}
export interface DataEquinixFabricPrecisionTimeServiceOrder {
}

export function dataEquinixFabricPrecisionTimeServiceOrderToTerraform(struct?: DataEquinixFabricPrecisionTimeServiceOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServiceOrderToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServiceOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServiceOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServiceOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServiceOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_reference_number - computed: true, optional: false, required: false
  public get customerReferenceNumber() {
    return this.getStringAttribute('customer_reference_number');
  }

  // order_number - computed: true, optional: false, required: false
  public get orderNumber() {
    return this.getStringAttribute('order_number');
  }

  // purchase_order_number - computed: true, optional: false, required: false
  public get purchaseOrderNumber() {
    return this.getStringAttribute('purchase_order_number');
  }
}
export interface DataEquinixFabricPrecisionTimeServicePackage {
  /**
  * Time Precision Package Code for the desired billing package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#code DataEquinixFabricPrecisionTimeService#code}
  */
  readonly code: string;
  /**
  * Time Precision Package HREF link to corresponding resource in Equinix Portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#href DataEquinixFabricPrecisionTimeService#href}
  */
  readonly href?: string;
}

export function dataEquinixFabricPrecisionTimeServicePackageToTerraform(struct?: DataEquinixFabricPrecisionTimeServicePackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function dataEquinixFabricPrecisionTimeServicePackageToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicePackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricPrecisionTimeServicePackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicePackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicePackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._href = value.href;
    }
  }

  // code - computed: true, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // href - computed: true, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface DataEquinixFabricPrecisionTimeServicePrecisionTimePriceCharges {
}

export function dataEquinixFabricPrecisionTimeServicePrecisionTimePriceChargesToTerraform(struct?: DataEquinixFabricPrecisionTimeServicePrecisionTimePriceCharges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServicePrecisionTimePriceChargesToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicePrecisionTimePriceCharges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServicePrecisionTimePriceChargesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricPrecisionTimeServicePrecisionTimePriceCharges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicePrecisionTimePriceCharges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getNumberAttribute('price');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataEquinixFabricPrecisionTimeServicePrecisionTimePriceChargesList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricPrecisionTimeServicePrecisionTimePriceChargesOutputReference {
    return new DataEquinixFabricPrecisionTimeServicePrecisionTimePriceChargesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricPrecisionTimeServicePrecisionTimePrice {
}

export function dataEquinixFabricPrecisionTimeServicePrecisionTimePriceToTerraform(struct?: DataEquinixFabricPrecisionTimeServicePrecisionTimePrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServicePrecisionTimePriceToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicePrecisionTimePrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServicePrecisionTimePriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicePrecisionTimePrice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicePrecisionTimePrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // charges - computed: true, optional: false, required: false
  private _charges = new DataEquinixFabricPrecisionTimeServicePrecisionTimePriceChargesList(this, "charges", false);
  public get charges() {
    return this._charges;
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }
}
export interface DataEquinixFabricPrecisionTimeServiceProject {
  /**
  * Equinix Subscriber-assigned project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#project_id DataEquinixFabricPrecisionTimeService#project_id}
  */
  readonly projectId: string;
}

export function dataEquinixFabricPrecisionTimeServiceProjectToTerraform(struct?: DataEquinixFabricPrecisionTimeServiceProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataEquinixFabricPrecisionTimeServiceProjectToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServiceProject | cdktf.IResolvable): any {
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

export class DataEquinixFabricPrecisionTimeServiceProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServiceProject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataEquinixFabricPrecisionTimeServiceProject | cdktf.IResolvable | undefined) {
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
export interface DataEquinixFabricPrecisionTimeServicePtpAdvancedConfiguration {
  /**
  * The PTP domain value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#domain DataEquinixFabricPrecisionTimeService#domain}
  */
  readonly domain?: number;
  /**
  * Unicast Grant Time in seconds. For Multicast and Hybrid transport modes, grant time defaults to 300 seconds. For Unicast mode, grant time can be between 30 to 7200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#grant_time DataEquinixFabricPrecisionTimeService#grant_time}
  */
  readonly grantTime?: number;
  /**
  * Logarithmic value that controls the rate of PTP Announce packets from the PTP time server. Default is 1 (1 packet every 2 seconds), Unit packets/second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#log_announce_interval DataEquinixFabricPrecisionTimeService#log_announce_interval}
  */
  readonly logAnnounceInterval?: number;
  /**
  * Logarithmic value that controls the rate of PTP DelayReq packets. Default is -4 (16 packets per second), Unit packets/second..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#log_delay_req_interval DataEquinixFabricPrecisionTimeService#log_delay_req_interval}
  */
  readonly logDelayReqInterval?: number;
  /**
  * Logarithmic value that controls the rate of PTP Sync packets. Default is -4 (16 packets per second), Unit packets/second..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#log_sync_interval DataEquinixFabricPrecisionTimeService#log_sync_interval}
  */
  readonly logSyncInterval?: number;
  /**
  * The priority1 value determines the best primary clock, Lower value indicates higher priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#priority1 DataEquinixFabricPrecisionTimeService#priority1}
  */
  readonly priority1?: number;
  /**
  * The priority2 value differentiates and prioritizes the primary clock to avoid confusion when priority1-value is the same for different primary clocks in a network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#priority2 DataEquinixFabricPrecisionTimeService#priority2}
  */
  readonly priority2?: number;
  /**
  * Time Scale value, ARB denotes Arbitrary and PTP denotes Precision Time Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#time_scale DataEquinixFabricPrecisionTimeService#time_scale}
  */
  readonly timeScale?: string;
  /**
  * ptp transport mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#transport_mode DataEquinixFabricPrecisionTimeService#transport_mode}
  */
  readonly transportMode?: string;
}

export function dataEquinixFabricPrecisionTimeServicePtpAdvancedConfigurationToTerraform(struct?: DataEquinixFabricPrecisionTimeServicePtpAdvancedConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.numberToTerraform(struct!.domain),
    grant_time: cdktf.numberToTerraform(struct!.grantTime),
    log_announce_interval: cdktf.numberToTerraform(struct!.logAnnounceInterval),
    log_delay_req_interval: cdktf.numberToTerraform(struct!.logDelayReqInterval),
    log_sync_interval: cdktf.numberToTerraform(struct!.logSyncInterval),
    priority1: cdktf.numberToTerraform(struct!.priority1),
    priority2: cdktf.numberToTerraform(struct!.priority2),
    time_scale: cdktf.stringToTerraform(struct!.timeScale),
    transport_mode: cdktf.stringToTerraform(struct!.transportMode),
  }
}


export function dataEquinixFabricPrecisionTimeServicePtpAdvancedConfigurationToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicePtpAdvancedConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.numberToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grant_time: {
      value: cdktf.numberToHclTerraform(struct!.grantTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_announce_interval: {
      value: cdktf.numberToHclTerraform(struct!.logAnnounceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_delay_req_interval: {
      value: cdktf.numberToHclTerraform(struct!.logDelayReqInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_sync_interval: {
      value: cdktf.numberToHclTerraform(struct!.logSyncInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority1: {
      value: cdktf.numberToHclTerraform(struct!.priority1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority2: {
      value: cdktf.numberToHclTerraform(struct!.priority2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_scale: {
      value: cdktf.stringToHclTerraform(struct!.timeScale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_mode: {
      value: cdktf.stringToHclTerraform(struct!.transportMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricPrecisionTimeServicePtpAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicePtpAdvancedConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._grantTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantTime = this._grantTime;
    }
    if (this._logAnnounceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnnounceInterval = this._logAnnounceInterval;
    }
    if (this._logDelayReqInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDelayReqInterval = this._logDelayReqInterval;
    }
    if (this._logSyncInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSyncInterval = this._logSyncInterval;
    }
    if (this._priority1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority1 = this._priority1;
    }
    if (this._priority2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority2 = this._priority2;
    }
    if (this._timeScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeScale = this._timeScale;
    }
    if (this._transportMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportMode = this._transportMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicePtpAdvancedConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._grantTime = undefined;
      this._logAnnounceInterval = undefined;
      this._logDelayReqInterval = undefined;
      this._logSyncInterval = undefined;
      this._priority1 = undefined;
      this._priority2 = undefined;
      this._timeScale = undefined;
      this._transportMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._grantTime = value.grantTime;
      this._logAnnounceInterval = value.logAnnounceInterval;
      this._logDelayReqInterval = value.logDelayReqInterval;
      this._logSyncInterval = value.logSyncInterval;
      this._priority1 = value.priority1;
      this._priority2 = value.priority2;
      this._timeScale = value.timeScale;
      this._transportMode = value.transportMode;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: number; 
  public get domain() {
    return this.getNumberAttribute('domain');
  }
  public set domain(value: number) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // grant_time - computed: false, optional: true, required: false
  private _grantTime?: number; 
  public get grantTime() {
    return this.getNumberAttribute('grant_time');
  }
  public set grantTime(value: number) {
    this._grantTime = value;
  }
  public resetGrantTime() {
    this._grantTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTimeInput() {
    return this._grantTime;
  }

  // log_announce_interval - computed: false, optional: true, required: false
  private _logAnnounceInterval?: number; 
  public get logAnnounceInterval() {
    return this.getNumberAttribute('log_announce_interval');
  }
  public set logAnnounceInterval(value: number) {
    this._logAnnounceInterval = value;
  }
  public resetLogAnnounceInterval() {
    this._logAnnounceInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnnounceIntervalInput() {
    return this._logAnnounceInterval;
  }

  // log_delay_req_interval - computed: false, optional: true, required: false
  private _logDelayReqInterval?: number; 
  public get logDelayReqInterval() {
    return this.getNumberAttribute('log_delay_req_interval');
  }
  public set logDelayReqInterval(value: number) {
    this._logDelayReqInterval = value;
  }
  public resetLogDelayReqInterval() {
    this._logDelayReqInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDelayReqIntervalInput() {
    return this._logDelayReqInterval;
  }

  // log_sync_interval - computed: false, optional: true, required: false
  private _logSyncInterval?: number; 
  public get logSyncInterval() {
    return this.getNumberAttribute('log_sync_interval');
  }
  public set logSyncInterval(value: number) {
    this._logSyncInterval = value;
  }
  public resetLogSyncInterval() {
    this._logSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSyncIntervalInput() {
    return this._logSyncInterval;
  }

  // priority1 - computed: false, optional: true, required: false
  private _priority1?: number; 
  public get priority1() {
    return this.getNumberAttribute('priority1');
  }
  public set priority1(value: number) {
    this._priority1 = value;
  }
  public resetPriority1() {
    this._priority1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority1Input() {
    return this._priority1;
  }

  // priority2 - computed: false, optional: true, required: false
  private _priority2?: number; 
  public get priority2() {
    return this.getNumberAttribute('priority2');
  }
  public set priority2(value: number) {
    this._priority2 = value;
  }
  public resetPriority2() {
    this._priority2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priority2Input() {
    return this._priority2;
  }

  // time_scale - computed: false, optional: true, required: false
  private _timeScale?: string; 
  public get timeScale() {
    return this.getStringAttribute('time_scale');
  }
  public set timeScale(value: string) {
    this._timeScale = value;
  }
  public resetTimeScale() {
    this._timeScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScaleInput() {
    return this._timeScale;
  }

  // transport_mode - computed: false, optional: true, required: false
  private _transportMode?: string; 
  public get transportMode() {
    return this.getStringAttribute('transport_mode');
  }
  public set transportMode(value: string) {
    this._transportMode = value;
  }
  public resetTransportMode() {
    this._transportMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportModeInput() {
    return this._transportMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service equinix_fabric_precision_time_service}
*/
export class DataEquinixFabricPrecisionTimeService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_precision_time_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixFabricPrecisionTimeService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixFabricPrecisionTimeService to import
  * @param importFromId The id of the existing DataEquinixFabricPrecisionTimeService that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixFabricPrecisionTimeService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_precision_time_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_precision_time_service equinix_fabric_precision_time_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixFabricPrecisionTimeServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixFabricPrecisionTimeServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_precision_time_service',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eptServiceId = config.eptServiceId;
    this._ntpAdvancedConfiguration.internalValue = config.ntpAdvancedConfiguration;
    this._project.internalValue = config.project;
    this._ptpAdvancedConfiguration.internalValue = config.ptpAdvancedConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  private _account = new DataEquinixFabricPrecisionTimeServiceAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new DataEquinixFabricPrecisionTimeServiceChangeLogOutputReference(this, "change_log");
  public get changeLog() {
    return this._changeLog;
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataEquinixFabricPrecisionTimeServiceConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }

  // ept_service_id - computed: false, optional: false, required: true
  private _eptServiceId?: string; 
  public get eptServiceId() {
    return this.getStringAttribute('ept_service_id');
  }
  public set eptServiceId(value: string) {
    this._eptServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eptServiceIdInput() {
    return this._eptServiceId;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataEquinixFabricPrecisionTimeServiceIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ntp_advanced_configuration - computed: false, optional: true, required: false
  private _ntpAdvancedConfiguration = new DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationList(this, "ntp_advanced_configuration", false);
  public get ntpAdvancedConfiguration() {
    return this._ntpAdvancedConfiguration;
  }
  public putNtpAdvancedConfiguration(value: DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfiguration[] | cdktf.IResolvable) {
    this._ntpAdvancedConfiguration.internalValue = value;
  }
  public resetNtpAdvancedConfiguration() {
    this._ntpAdvancedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpAdvancedConfigurationInput() {
    return this._ntpAdvancedConfiguration.internalValue;
  }

  // operation - computed: true, optional: false, required: false
  private _operation = new DataEquinixFabricPrecisionTimeServiceOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }

  // order - computed: true, optional: false, required: false
  private _order = new DataEquinixFabricPrecisionTimeServiceOrderOutputReference(this, "order");
  public get order() {
    return this._order;
  }

  // package - computed: true, optional: false, required: false
  private _package = new DataEquinixFabricPrecisionTimeServicePackageOutputReference(this, "package");
  public get package() {
    return this._package;
  }

  // precision_time_price - computed: true, optional: false, required: false
  private _precisionTimePrice = new DataEquinixFabricPrecisionTimeServicePrecisionTimePriceOutputReference(this, "precision_time_price");
  public get precisionTimePrice() {
    return this._precisionTimePrice;
  }

  // project - computed: false, optional: true, required: false
  private _project = new DataEquinixFabricPrecisionTimeServiceProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: DataEquinixFabricPrecisionTimeServiceProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // ptp_advanced_configuration - computed: false, optional: true, required: false
  private _ptpAdvancedConfiguration = new DataEquinixFabricPrecisionTimeServicePtpAdvancedConfigurationOutputReference(this, "ptp_advanced_configuration");
  public get ptpAdvancedConfiguration() {
    return this._ptpAdvancedConfiguration;
  }
  public putPtpAdvancedConfiguration(value: DataEquinixFabricPrecisionTimeServicePtpAdvancedConfiguration) {
    this._ptpAdvancedConfiguration.internalValue = value;
  }
  public resetPtpAdvancedConfiguration() {
    this._ptpAdvancedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpAdvancedConfigurationInput() {
    return this._ptpAdvancedConfiguration.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      ept_service_id: cdktf.stringToTerraform(this._eptServiceId),
      ntp_advanced_configuration: cdktf.listMapper(dataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationToTerraform, false)(this._ntpAdvancedConfiguration.internalValue),
      project: dataEquinixFabricPrecisionTimeServiceProjectToTerraform(this._project.internalValue),
      ptp_advanced_configuration: dataEquinixFabricPrecisionTimeServicePtpAdvancedConfigurationToTerraform(this._ptpAdvancedConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ept_service_id: {
        value: cdktf.stringToHclTerraform(this._eptServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_advanced_configuration: {
        value: cdktf.listMapperHcl(dataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationToHclTerraform, false)(this._ntpAdvancedConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEquinixFabricPrecisionTimeServiceNtpAdvancedConfigurationList",
      },
      project: {
        value: dataEquinixFabricPrecisionTimeServiceProjectToHclTerraform(this._project.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataEquinixFabricPrecisionTimeServiceProject",
      },
      ptp_advanced_configuration: {
        value: dataEquinixFabricPrecisionTimeServicePtpAdvancedConfigurationToHclTerraform(this._ptpAdvancedConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataEquinixFabricPrecisionTimeServicePtpAdvancedConfiguration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
