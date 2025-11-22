// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixFabricPrecisionTimeServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of filters to apply to the stream attachment get request. Maximum of 8. All will be AND'd together with 1 of the 8 being a possible OR group of 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#filters DataEquinixFabricPrecisionTimeServices#filters}
  */
  readonly filters?: DataEquinixFabricPrecisionTimeServicesFilters[] | cdktf.IResolvable;
  /**
  * Pagination details for the returned route aggregations list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#pagination DataEquinixFabricPrecisionTimeServices#pagination}
  */
  readonly pagination?: DataEquinixFabricPrecisionTimeServicesPagination;
  /**
  * Filters for the Data Source Search Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#sort DataEquinixFabricPrecisionTimeServices#sort}
  */
  readonly sort?: DataEquinixFabricPrecisionTimeServicesSort[] | cdktf.IResolvable;
}
export interface DataEquinixFabricPrecisionTimeServicesDataAccount {
}

export function dataEquinixFabricPrecisionTimeServicesDataAccountToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataAccountToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServicesDataAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataAccount | undefined) {
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
export interface DataEquinixFabricPrecisionTimeServicesDataChangeLog {
}

export function dataEquinixFabricPrecisionTimeServicesDataChangeLogToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataChangeLogToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServicesDataChangeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataChangeLog | undefined) {
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
export interface DataEquinixFabricPrecisionTimeServicesDataConnections {
  /**
  * Equinix Fabric Connection UUID; Precision Time Service will be connected with it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#uuid DataEquinixFabricPrecisionTimeServices#uuid}
  */
  readonly uuid: string;
}

export function dataEquinixFabricPrecisionTimeServicesDataConnectionsToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataConnectionsToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataConnections): any {
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

export class DataEquinixFabricPrecisionTimeServicesDataConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataConnections | undefined) {
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

export class DataEquinixFabricPrecisionTimeServicesDataConnectionsList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricPrecisionTimeServicesDataConnections[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricPrecisionTimeServicesDataConnectionsOutputReference {
    return new DataEquinixFabricPrecisionTimeServicesDataConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricPrecisionTimeServicesDataIpv4 {
  /**
  * IPv4 address that establishes the Routing Interface where traffic is directed. It serves as the next hop in the Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#default_gateway DataEquinixFabricPrecisionTimeServices#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * IPv4 address that defines the range of consecutive subnets in the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#network_mask DataEquinixFabricPrecisionTimeServices#network_mask}
  */
  readonly networkMask: string;
  /**
  * IPv4 address for the Primary Timing Master Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#primary DataEquinixFabricPrecisionTimeServices#primary}
  */
  readonly primary: string;
  /**
  * IPv4 address for the Secondary Timing Master Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#secondary DataEquinixFabricPrecisionTimeServices#secondary}
  */
  readonly secondary: string;
}

export function dataEquinixFabricPrecisionTimeServicesDataIpv4ToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataIpv4): any {
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


export function dataEquinixFabricPrecisionTimeServicesDataIpv4ToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataIpv4): any {
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

export class DataEquinixFabricPrecisionTimeServicesDataIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataIpv4 | undefined {
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

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataIpv4 | undefined) {
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
export interface DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfiguration {
  /**
  * The plaintext authentication key. For ASCII type, the key\
  * \ must contain printable ASCII characters, range 10-20 characters. For\
  * \ HEX type, range should be 10-40 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#key DataEquinixFabricPrecisionTimeServices#key}
  */
  readonly key?: string;
  /**
  * The authentication Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#key_number DataEquinixFabricPrecisionTimeServices#key_number}
  */
  readonly keyNumber?: number;
  /**
  * md5 Authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#type DataEquinixFabricPrecisionTimeServices#type}
  */
  readonly type?: string;
}

export function dataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfiguration | cdktf.IResolvable): any {
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


export function dataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfiguration | cdktf.IResolvable): any {
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

export class DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfiguration | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: true, required: false
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

  // key_number - computed: true, optional: true, required: false
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

export class DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationOutputReference {
    return new DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricPrecisionTimeServicesDataOperation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#operational_status DataEquinixFabricPrecisionTimeServices#operational_status}
  */
  readonly operationalStatus?: string;
}

export function dataEquinixFabricPrecisionTimeServicesDataOperationToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operational_status: cdktf.stringToTerraform(struct!.operationalStatus),
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataOperationToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataOperation): any {
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

export class DataEquinixFabricPrecisionTimeServicesDataOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operationalStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationalStatus = this._operationalStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataOperation | undefined) {
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
export interface DataEquinixFabricPrecisionTimeServicesDataOrder {
}

export function dataEquinixFabricPrecisionTimeServicesDataOrderToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataOrderToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServicesDataOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataOrder | undefined) {
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
export interface DataEquinixFabricPrecisionTimeServicesDataPackage {
  /**
  * Time Precision Package Code for the desired billing package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#code DataEquinixFabricPrecisionTimeServices#code}
  */
  readonly code: string;
  /**
  * Time Precision Package HREF link to corresponding resource in Equinix Portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#href DataEquinixFabricPrecisionTimeServices#href}
  */
  readonly href?: string;
}

export function dataEquinixFabricPrecisionTimeServicesDataPackageToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataPackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataPackageToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataPackage): any {
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

export class DataEquinixFabricPrecisionTimeServicesDataPackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataPackage | undefined {
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

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataPackage | undefined) {
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
export interface DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceCharges {
}

export function dataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceChargesToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceCharges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceChargesToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceCharges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceChargesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceCharges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceCharges | undefined) {
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

export class DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceChargesList extends cdktf.ComplexList {

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
  public get(index: number): DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceChargesOutputReference {
    return new DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceChargesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePrice {
}

export function dataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePrice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // charges - computed: true, optional: false, required: false
  private _charges = new DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceChargesList(this, "charges", false);
  public get charges() {
    return this._charges;
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }
}
export interface DataEquinixFabricPrecisionTimeServicesDataProject {
  /**
  * Equinix Subscriber-assigned project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#project_id DataEquinixFabricPrecisionTimeServices#project_id}
  */
  readonly projectId: string;
}

export function dataEquinixFabricPrecisionTimeServicesDataProjectToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataProjectToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataProject | cdktf.IResolvable): any {
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

export class DataEquinixFabricPrecisionTimeServicesDataProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataProject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataProject | cdktf.IResolvable | undefined) {
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

  // project_id - computed: true, optional: false, required: true
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
export interface DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfiguration {
  /**
  * The PTP domain value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#domain DataEquinixFabricPrecisionTimeServices#domain}
  */
  readonly domain?: number;
  /**
  * Unicast Grant Time in seconds. For Multicast and Hybrid transport modes, grant time defaults to 300 seconds. For Unicast mode, grant time can be between 30 to 7200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#grant_time DataEquinixFabricPrecisionTimeServices#grant_time}
  */
  readonly grantTime?: number;
  /**
  * Logarithmic value that controls the rate of PTP Announce packets from the PTP time server. Default is 1 (1 packet every 2 seconds), Unit packets/second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#log_announce_interval DataEquinixFabricPrecisionTimeServices#log_announce_interval}
  */
  readonly logAnnounceInterval?: number;
  /**
  * Logarithmic value that controls the rate of PTP DelayReq packets. Default is -4 (16 packets per second), Unit packets/second..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#log_delay_req_interval DataEquinixFabricPrecisionTimeServices#log_delay_req_interval}
  */
  readonly logDelayReqInterval?: number;
  /**
  * Logarithmic value that controls the rate of PTP Sync packets. Default is -4 (16 packets per second), Unit packets/second..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#log_sync_interval DataEquinixFabricPrecisionTimeServices#log_sync_interval}
  */
  readonly logSyncInterval?: number;
  /**
  * The priority1 value determines the best primary clock, Lower value indicates higher priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#priority1 DataEquinixFabricPrecisionTimeServices#priority1}
  */
  readonly priority1?: number;
  /**
  * The priority2 value differentiates and prioritizes the primary clock to avoid confusion when priority1-value is the same for different primary clocks in a network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#priority2 DataEquinixFabricPrecisionTimeServices#priority2}
  */
  readonly priority2?: number;
  /**
  * Time Scale value, ARB denotes Arbitrary and PTP denotes Precision Time Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#time_scale DataEquinixFabricPrecisionTimeServices#time_scale}
  */
  readonly timeScale?: string;
  /**
  * ptp transport mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#transport_mode DataEquinixFabricPrecisionTimeServices#transport_mode}
  */
  readonly transportMode?: string;
}

export function dataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfigurationToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfiguration | cdktf.IResolvable): any {
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


export function dataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfigurationToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfiguration | cdktf.IResolvable): any {
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

export class DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfiguration | cdktf.IResolvable | undefined) {
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

  // domain - computed: true, optional: true, required: false
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

  // grant_time - computed: true, optional: true, required: false
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

  // log_announce_interval - computed: true, optional: true, required: false
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

  // log_delay_req_interval - computed: true, optional: true, required: false
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

  // log_sync_interval - computed: true, optional: true, required: false
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

  // priority1 - computed: true, optional: true, required: false
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

  // priority2 - computed: true, optional: true, required: false
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

  // time_scale - computed: true, optional: true, required: false
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

  // transport_mode - computed: true, optional: true, required: false
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
export interface DataEquinixFabricPrecisionTimeServicesData {
  /**
  * NTP Advanced configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#ntp_advanced_configuration DataEquinixFabricPrecisionTimeServices#ntp_advanced_configuration}
  */
  readonly ntpAdvancedConfiguration?: DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfiguration[] | cdktf.IResolvable;
  /**
  * Equinix Project attribute object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#project DataEquinixFabricPrecisionTimeServices#project}
  */
  readonly project?: DataEquinixFabricPrecisionTimeServicesDataProject;
  /**
  * PTP Advanced Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#ptp_advanced_configuration DataEquinixFabricPrecisionTimeServices#ptp_advanced_configuration}
  */
  readonly ptpAdvancedConfiguration?: DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfiguration;
}

export function dataEquinixFabricPrecisionTimeServicesDataToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntp_advanced_configuration: cdktf.listMapper(dataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationToTerraform, false)(struct!.ntpAdvancedConfiguration),
    project: dataEquinixFabricPrecisionTimeServicesDataProjectToTerraform(struct!.project),
    ptp_advanced_configuration: dataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfigurationToTerraform(struct!.ptpAdvancedConfiguration),
  }
}


export function dataEquinixFabricPrecisionTimeServicesDataToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntp_advanced_configuration: {
      value: cdktf.listMapperHcl(dataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationToHclTerraform, false)(struct!.ntpAdvancedConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationList",
    },
    project: {
      value: dataEquinixFabricPrecisionTimeServicesDataProjectToHclTerraform(struct!.project),
      isBlock: true,
      type: "struct",
      storageClassType: "DataEquinixFabricPrecisionTimeServicesDataProject",
    },
    ptp_advanced_configuration: {
      value: dataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfigurationToHclTerraform(struct!.ptpAdvancedConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfiguration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricPrecisionTimeServicesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntpAdvancedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpAdvancedConfiguration = this._ntpAdvancedConfiguration?.internalValue;
    }
    if (this._project?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project?.internalValue;
    }
    if (this._ptpAdvancedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptpAdvancedConfiguration = this._ptpAdvancedConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ntpAdvancedConfiguration.internalValue = undefined;
      this._project.internalValue = undefined;
      this._ptpAdvancedConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ntpAdvancedConfiguration.internalValue = value.ntpAdvancedConfiguration;
      this._project.internalValue = value.project;
      this._ptpAdvancedConfiguration.internalValue = value.ptpAdvancedConfiguration;
    }
  }

  // account - computed: true, optional: false, required: false
  private _account = new DataEquinixFabricPrecisionTimeServicesDataAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new DataEquinixFabricPrecisionTimeServicesDataChangeLogOutputReference(this, "change_log");
  public get changeLog() {
    return this._changeLog;
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new DataEquinixFabricPrecisionTimeServicesDataConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataEquinixFabricPrecisionTimeServicesDataIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ntp_advanced_configuration - computed: true, optional: true, required: false
  private _ntpAdvancedConfiguration = new DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfigurationList(this, "ntp_advanced_configuration", false);
  public get ntpAdvancedConfiguration() {
    return this._ntpAdvancedConfiguration;
  }
  public putNtpAdvancedConfiguration(value: DataEquinixFabricPrecisionTimeServicesDataNtpAdvancedConfiguration[] | cdktf.IResolvable) {
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
  private _operation = new DataEquinixFabricPrecisionTimeServicesDataOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }

  // order - computed: true, optional: false, required: false
  private _order = new DataEquinixFabricPrecisionTimeServicesDataOrderOutputReference(this, "order");
  public get order() {
    return this._order;
  }

  // package - computed: true, optional: false, required: false
  private _package = new DataEquinixFabricPrecisionTimeServicesDataPackageOutputReference(this, "package");
  public get package() {
    return this._package;
  }

  // precision_time_price - computed: true, optional: false, required: false
  private _precisionTimePrice = new DataEquinixFabricPrecisionTimeServicesDataPrecisionTimePriceOutputReference(this, "precision_time_price");
  public get precisionTimePrice() {
    return this._precisionTimePrice;
  }

  // project - computed: true, optional: true, required: false
  private _project = new DataEquinixFabricPrecisionTimeServicesDataProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: DataEquinixFabricPrecisionTimeServicesDataProject) {
    this._project.internalValue = value;
  }
  public resetProject() {
    this._project.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // ptp_advanced_configuration - computed: true, optional: true, required: false
  private _ptpAdvancedConfiguration = new DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfigurationOutputReference(this, "ptp_advanced_configuration");
  public get ptpAdvancedConfiguration() {
    return this._ptpAdvancedConfiguration;
  }
  public putPtpAdvancedConfiguration(value: DataEquinixFabricPrecisionTimeServicesDataPtpAdvancedConfiguration) {
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
}

export class DataEquinixFabricPrecisionTimeServicesDataList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricPrecisionTimeServicesData[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricPrecisionTimeServicesDataOutputReference {
    return new DataEquinixFabricPrecisionTimeServicesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricPrecisionTimeServicesFilters {
  /**
  * Operation applied to the values of the filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#operator DataEquinixFabricPrecisionTimeServices#operator}
  */
  readonly operator: string;
  /**
  * Boolean value to specify if this filter is a part of the OR group. Has a maximum of 3 and only counts for 1 of the 8 possible filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#or DataEquinixFabricPrecisionTimeServices#or}
  */
  readonly or?: boolean | cdktf.IResolvable;
  /**
  * Property to apply the filter to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#property DataEquinixFabricPrecisionTimeServices#property}
  */
  readonly property: string;
  /**
  * List of values to apply the operation to for the specified property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#values DataEquinixFabricPrecisionTimeServices#values}
  */
  readonly values: string[];
}

export function dataEquinixFabricPrecisionTimeServicesFiltersToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    or: cdktf.booleanToTerraform(struct!.or),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataEquinixFabricPrecisionTimeServicesFiltersToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    or: {
      value: cdktf.booleanToHclTerraform(struct!.or),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricPrecisionTimeServicesFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._or !== undefined) {
      hasAnyValues = true;
      internalValueResult.or = this._or;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._or = undefined;
      this._property = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._or = value.or;
      this._property = value.property;
      this._values = value.values;
    }
  }

  // operator - computed: true, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // or - computed: true, optional: true, required: false
  private _or?: boolean | cdktf.IResolvable; 
  public get or() {
    return this.getBooleanAttribute('or');
  }
  public set or(value: boolean | cdktf.IResolvable) {
    this._or = value;
  }
  public resetOr() {
    this._or = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orInput() {
    return this._or;
  }

  // property - computed: true, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // values - computed: true, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataEquinixFabricPrecisionTimeServicesFiltersList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricPrecisionTimeServicesFilters[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricPrecisionTimeServicesFiltersOutputReference {
    return new DataEquinixFabricPrecisionTimeServicesFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataEquinixFabricPrecisionTimeServicesPagination {
  /**
  * Maximum number of search results returned per page. Number must be between 1 and 100, and the default is 20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#limit DataEquinixFabricPrecisionTimeServices#limit}
  */
  readonly limit?: number;
  /**
  * Index of the first item returned in the response. The default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#offset DataEquinixFabricPrecisionTimeServices#offset}
  */
  readonly offset?: number;
}

export function dataEquinixFabricPrecisionTimeServicesPaginationToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
  }
}


export function dataEquinixFabricPrecisionTimeServicesPaginationToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesPagination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricPrecisionTimeServicesPaginationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesPagination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesPagination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._offset = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._offset = value.offset;
    }
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // offset - computed: true, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }
}
export interface DataEquinixFabricPrecisionTimeServicesSort {
  /**
  * The sorting direction. Can be one of: [DESC, ASC], Defaults to DESC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#direction DataEquinixFabricPrecisionTimeServices#direction}
  */
  readonly direction?: string;
  /**
  * The property name to use in sorting. One of [/name /uuid /state /type /package/code /changeLog/createdDateTime /changeLog/updatedDateTime] Defaults to /name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#property DataEquinixFabricPrecisionTimeServices#property}
  */
  readonly property?: string;
}

export function dataEquinixFabricPrecisionTimeServicesSortToTerraform(struct?: DataEquinixFabricPrecisionTimeServicesSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    property: cdktf.stringToTerraform(struct!.property),
  }
}


export function dataEquinixFabricPrecisionTimeServicesSortToHclTerraform(struct?: DataEquinixFabricPrecisionTimeServicesSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataEquinixFabricPrecisionTimeServicesSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEquinixFabricPrecisionTimeServicesSort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEquinixFabricPrecisionTimeServicesSort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._property = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._property = value.property;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }
}

export class DataEquinixFabricPrecisionTimeServicesSortList extends cdktf.ComplexList {
  public internalValue? : DataEquinixFabricPrecisionTimeServicesSort[] | cdktf.IResolvable

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
  public get(index: number): DataEquinixFabricPrecisionTimeServicesSortOutputReference {
    return new DataEquinixFabricPrecisionTimeServicesSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services equinix_fabric_precision_time_services}
*/
export class DataEquinixFabricPrecisionTimeServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_precision_time_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixFabricPrecisionTimeServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixFabricPrecisionTimeServices to import
  * @param importFromId The id of the existing DataEquinixFabricPrecisionTimeServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixFabricPrecisionTimeServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_precision_time_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/data-sources/fabric_precision_time_services equinix_fabric_precision_time_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixFabricPrecisionTimeServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEquinixFabricPrecisionTimeServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_precision_time_services',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters.internalValue = config.filters;
    this._pagination.internalValue = config.pagination;
    this._sort.internalValue = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataEquinixFabricPrecisionTimeServicesDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new DataEquinixFabricPrecisionTimeServicesFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataEquinixFabricPrecisionTimeServicesFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pagination - computed: false, optional: true, required: false
  private _pagination = new DataEquinixFabricPrecisionTimeServicesPaginationOutputReference(this, "pagination");
  public get pagination() {
    return this._pagination;
  }
  public putPagination(value: DataEquinixFabricPrecisionTimeServicesPagination) {
    this._pagination.internalValue = value;
  }
  public resetPagination() {
    this._pagination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationInput() {
    return this._pagination.internalValue;
  }

  // sort - computed: false, optional: true, required: false
  private _sort = new DataEquinixFabricPrecisionTimeServicesSortList(this, "sort", false);
  public get sort() {
    return this._sort;
  }
  public putSort(value: DataEquinixFabricPrecisionTimeServicesSort[] | cdktf.IResolvable) {
    this._sort.internalValue = value;
  }
  public resetSort() {
    this._sort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.listMapper(dataEquinixFabricPrecisionTimeServicesFiltersToTerraform, false)(this._filters.internalValue),
      pagination: dataEquinixFabricPrecisionTimeServicesPaginationToTerraform(this._pagination.internalValue),
      sort: cdktf.listMapper(dataEquinixFabricPrecisionTimeServicesSortToTerraform, false)(this._sort.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.listMapperHcl(dataEquinixFabricPrecisionTimeServicesFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEquinixFabricPrecisionTimeServicesFiltersList",
      },
      pagination: {
        value: dataEquinixFabricPrecisionTimeServicesPaginationToHclTerraform(this._pagination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataEquinixFabricPrecisionTimeServicesPagination",
      },
      sort: {
        value: cdktf.listMapperHcl(dataEquinixFabricPrecisionTimeServicesSortToHclTerraform, false)(this._sort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataEquinixFabricPrecisionTimeServicesSortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
