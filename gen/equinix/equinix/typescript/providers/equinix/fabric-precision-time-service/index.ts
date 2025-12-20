// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricPrecisionTimeServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of objects with unique identifiers of connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#connections FabricPrecisionTimeService#connections}
  */
  readonly connections: FabricPrecisionTimeServiceConnections[] | cdktf.IResolvable;
  /**
  * An object that has Network IP Configurations for Timing Master Servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#ipv4 FabricPrecisionTimeService#ipv4}
  */
  readonly ipv4: FabricPrecisionTimeServiceIpv4;
  /**
  * Name of Precision Time Service. Applicable values: Maximum: 24 characters; Allowed characters: alpha-numeric, hyphens ('-') and underscores ('_')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#name FabricPrecisionTimeService#name}
  */
  readonly name: string;
  /**
  * NTP Advanced configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#ntp_advanced_configuration FabricPrecisionTimeService#ntp_advanced_configuration}
  */
  readonly ntpAdvancedConfiguration?: FabricPrecisionTimeServiceNtpAdvancedConfiguration[] | cdktf.IResolvable;
  /**
  * Precision Time Service Package Details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#package FabricPrecisionTimeService#package}
  */
  readonly package: FabricPrecisionTimeServicePackage;
  /**
  * PTP Advanced Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#ptp_advanced_configuration FabricPrecisionTimeService#ptp_advanced_configuration}
  */
  readonly ptpAdvancedConfiguration?: FabricPrecisionTimeServicePtpAdvancedConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#timeouts FabricPrecisionTimeService#timeouts}
  */
  readonly timeouts?: FabricPrecisionTimeServiceTimeouts;
  /**
  * Choose type of Precision Time Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#type FabricPrecisionTimeService#type}
  */
  readonly type: string;
}
export interface FabricPrecisionTimeServiceAccount {
}

export function fabricPrecisionTimeServiceAccountToTerraform(struct?: FabricPrecisionTimeServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricPrecisionTimeServiceAccountToHclTerraform(struct?: FabricPrecisionTimeServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricPrecisionTimeServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPrecisionTimeServiceAccount | undefined) {
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
export interface FabricPrecisionTimeServiceChangeLog {
}

export function fabricPrecisionTimeServiceChangeLogToTerraform(struct?: FabricPrecisionTimeServiceChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricPrecisionTimeServiceChangeLogToHclTerraform(struct?: FabricPrecisionTimeServiceChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricPrecisionTimeServiceChangeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServiceChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPrecisionTimeServiceChangeLog | undefined) {
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
export interface FabricPrecisionTimeServiceConnections {
  /**
  * Equinix Fabric Connection UUID; Precision Time Service will be connected with it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#uuid FabricPrecisionTimeService#uuid}
  */
  readonly uuid: string;
}

export function fabricPrecisionTimeServiceConnectionsToTerraform(struct?: FabricPrecisionTimeServiceConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function fabricPrecisionTimeServiceConnectionsToHclTerraform(struct?: FabricPrecisionTimeServiceConnections | cdktf.IResolvable): any {
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

export class FabricPrecisionTimeServiceConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricPrecisionTimeServiceConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPrecisionTimeServiceConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // uuid - computed: false, optional: false, required: true
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

export class FabricPrecisionTimeServiceConnectionsList extends cdktf.ComplexList {
  public internalValue? : FabricPrecisionTimeServiceConnections[] | cdktf.IResolvable

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
  public get(index: number): FabricPrecisionTimeServiceConnectionsOutputReference {
    return new FabricPrecisionTimeServiceConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricPrecisionTimeServiceIpv4 {
  /**
  * IPv4 address that establishes the Routing Interface where traffic is directed. It serves as the next hop in the Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#default_gateway FabricPrecisionTimeService#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * IPv4 address that defines the range of consecutive subnets in the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#network_mask FabricPrecisionTimeService#network_mask}
  */
  readonly networkMask: string;
  /**
  * IPv4 address for the Primary Timing Master Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#primary FabricPrecisionTimeService#primary}
  */
  readonly primary: string;
  /**
  * IPv4 address for the Secondary Timing Master Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#secondary FabricPrecisionTimeService#secondary}
  */
  readonly secondary: string;
}

export function fabricPrecisionTimeServiceIpv4ToTerraform(struct?: FabricPrecisionTimeServiceIpv4 | cdktf.IResolvable): any {
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


export function fabricPrecisionTimeServiceIpv4ToHclTerraform(struct?: FabricPrecisionTimeServiceIpv4 | cdktf.IResolvable): any {
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

export class FabricPrecisionTimeServiceIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServiceIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: FabricPrecisionTimeServiceIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultGateway = undefined;
      this._networkMask = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultGateway = value.defaultGateway;
      this._networkMask = value.networkMask;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
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

  // network_mask - computed: false, optional: false, required: true
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

  // primary - computed: false, optional: false, required: true
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

  // secondary - computed: false, optional: false, required: true
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
export interface FabricPrecisionTimeServiceNtpAdvancedConfiguration {
  /**
  * The plaintext authentication key. For ASCII type, the key\
  * \ must contain printable ASCII characters, range 10-20 characters. For\
  * \ HEX type, range should be 10-40 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#key FabricPrecisionTimeService#key}
  */
  readonly key?: string;
  /**
  * The authentication Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#key_number FabricPrecisionTimeService#key_number}
  */
  readonly keyNumber?: number;
  /**
  * md5 Authentication type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#type FabricPrecisionTimeService#type}
  */
  readonly type?: string;
}

export function fabricPrecisionTimeServiceNtpAdvancedConfigurationToTerraform(struct?: FabricPrecisionTimeServiceNtpAdvancedConfiguration | cdktf.IResolvable): any {
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


export function fabricPrecisionTimeServiceNtpAdvancedConfigurationToHclTerraform(struct?: FabricPrecisionTimeServiceNtpAdvancedConfiguration | cdktf.IResolvable): any {
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

export class FabricPrecisionTimeServiceNtpAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricPrecisionTimeServiceNtpAdvancedConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricPrecisionTimeServiceNtpAdvancedConfiguration | cdktf.IResolvable | undefined) {
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

export class FabricPrecisionTimeServiceNtpAdvancedConfigurationList extends cdktf.ComplexList {
  public internalValue? : FabricPrecisionTimeServiceNtpAdvancedConfiguration[] | cdktf.IResolvable

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
  public get(index: number): FabricPrecisionTimeServiceNtpAdvancedConfigurationOutputReference {
    return new FabricPrecisionTimeServiceNtpAdvancedConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricPrecisionTimeServiceOperation {
}

export function fabricPrecisionTimeServiceOperationToTerraform(struct?: FabricPrecisionTimeServiceOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricPrecisionTimeServiceOperationToHclTerraform(struct?: FabricPrecisionTimeServiceOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricPrecisionTimeServiceOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServiceOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPrecisionTimeServiceOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }
}
export interface FabricPrecisionTimeServiceOrder {
}

export function fabricPrecisionTimeServiceOrderToTerraform(struct?: FabricPrecisionTimeServiceOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricPrecisionTimeServiceOrderToHclTerraform(struct?: FabricPrecisionTimeServiceOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricPrecisionTimeServiceOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServiceOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPrecisionTimeServiceOrder | undefined) {
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
export interface FabricPrecisionTimeServicePackage {
  /**
  * Time Precision Package Code for the desired billing package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#code FabricPrecisionTimeService#code}
  */
  readonly code: string;
}

export function fabricPrecisionTimeServicePackageToTerraform(struct?: FabricPrecisionTimeServicePackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
  }
}


export function fabricPrecisionTimeServicePackageToHclTerraform(struct?: FabricPrecisionTimeServicePackage | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricPrecisionTimeServicePackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServicePackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPrecisionTimeServicePackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
    }
  }

  // code - computed: false, optional: false, required: true
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

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }
}
export interface FabricPrecisionTimeServicePrecisionTimePriceCharges {
}

export function fabricPrecisionTimeServicePrecisionTimePriceChargesToTerraform(struct?: FabricPrecisionTimeServicePrecisionTimePriceCharges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricPrecisionTimeServicePrecisionTimePriceChargesToHclTerraform(struct?: FabricPrecisionTimeServicePrecisionTimePriceCharges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricPrecisionTimeServicePrecisionTimePriceChargesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricPrecisionTimeServicePrecisionTimePriceCharges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPrecisionTimeServicePrecisionTimePriceCharges | undefined) {
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

export class FabricPrecisionTimeServicePrecisionTimePriceChargesList extends cdktf.ComplexList {

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
  public get(index: number): FabricPrecisionTimeServicePrecisionTimePriceChargesOutputReference {
    return new FabricPrecisionTimeServicePrecisionTimePriceChargesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricPrecisionTimeServicePrecisionTimePrice {
}

export function fabricPrecisionTimeServicePrecisionTimePriceToTerraform(struct?: FabricPrecisionTimeServicePrecisionTimePrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricPrecisionTimeServicePrecisionTimePriceToHclTerraform(struct?: FabricPrecisionTimeServicePrecisionTimePrice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricPrecisionTimeServicePrecisionTimePriceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServicePrecisionTimePrice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPrecisionTimeServicePrecisionTimePrice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // charges - computed: true, optional: false, required: false
  private _charges = new FabricPrecisionTimeServicePrecisionTimePriceChargesList(this, "charges", false);
  public get charges() {
    return this._charges;
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }
}
export interface FabricPrecisionTimeServiceProject {
}

export function fabricPrecisionTimeServiceProjectToTerraform(struct?: FabricPrecisionTimeServiceProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricPrecisionTimeServiceProjectToHclTerraform(struct?: FabricPrecisionTimeServiceProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricPrecisionTimeServiceProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServiceProject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricPrecisionTimeServiceProject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}
export interface FabricPrecisionTimeServicePtpAdvancedConfiguration {
  /**
  * The PTP domain value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#domain FabricPrecisionTimeService#domain}
  */
  readonly domain?: number;
  /**
  * Unicast Grant Time in seconds. For Multicast and Hybrid transport modes, grant time defaults to 300 seconds. For Unicast mode, grant time can be between 30 to 7200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#grant_time FabricPrecisionTimeService#grant_time}
  */
  readonly grantTime?: number;
  /**
  * Logarithmic value that controls the rate of PTP Announce packets from the PTP time server. Default is 1 (1 packet every 2 seconds), Unit packets/second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#log_announce_interval FabricPrecisionTimeService#log_announce_interval}
  */
  readonly logAnnounceInterval?: number;
  /**
  * Logarithmic value that controls the rate of PTP DelayReq packets. Default is -4 (16 packets per second), Unit packets/second..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#log_delay_req_interval FabricPrecisionTimeService#log_delay_req_interval}
  */
  readonly logDelayReqInterval?: number;
  /**
  * Logarithmic value that controls the rate of PTP Sync packets. Default is -4 (16 packets per second), Unit packets/second..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#log_sync_interval FabricPrecisionTimeService#log_sync_interval}
  */
  readonly logSyncInterval?: number;
  /**
  * The priority1 value determines the best primary clock, Lower value indicates higher priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#priority1 FabricPrecisionTimeService#priority1}
  */
  readonly priority1?: number;
  /**
  * The priority2 value differentiates and prioritizes the primary clock to avoid confusion when priority1-value is the same for different primary clocks in a network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#priority2 FabricPrecisionTimeService#priority2}
  */
  readonly priority2?: number;
  /**
  * Time Scale value, ARB denotes Arbitrary and PTP denotes Precision Time Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#time_scale FabricPrecisionTimeService#time_scale}
  */
  readonly timeScale?: string;
  /**
  * ptp transport mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#transport_mode FabricPrecisionTimeService#transport_mode}
  */
  readonly transportMode?: string;
}

export function fabricPrecisionTimeServicePtpAdvancedConfigurationToTerraform(struct?: FabricPrecisionTimeServicePtpAdvancedConfiguration | cdktf.IResolvable): any {
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


export function fabricPrecisionTimeServicePtpAdvancedConfigurationToHclTerraform(struct?: FabricPrecisionTimeServicePtpAdvancedConfiguration | cdktf.IResolvable): any {
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

export class FabricPrecisionTimeServicePtpAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServicePtpAdvancedConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricPrecisionTimeServicePtpAdvancedConfiguration | cdktf.IResolvable | undefined) {
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
export interface FabricPrecisionTimeServiceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#create FabricPrecisionTimeService#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#delete FabricPrecisionTimeService#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#read FabricPrecisionTimeService#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#update FabricPrecisionTimeService#update}
  */
  readonly update?: string;
}

export function fabricPrecisionTimeServiceTimeoutsToTerraform(struct?: FabricPrecisionTimeServiceTimeouts | cdktf.IResolvable): any {
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


export function fabricPrecisionTimeServiceTimeoutsToHclTerraform(struct?: FabricPrecisionTimeServiceTimeouts | cdktf.IResolvable): any {
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

export class FabricPrecisionTimeServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricPrecisionTimeServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricPrecisionTimeServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service equinix_fabric_precision_time_service}
*/
export class FabricPrecisionTimeService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_precision_time_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricPrecisionTimeService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricPrecisionTimeService to import
  * @param importFromId The id of the existing FabricPrecisionTimeService that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricPrecisionTimeService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_precision_time_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_precision_time_service equinix_fabric_precision_time_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricPrecisionTimeServiceConfig
  */
  public constructor(scope: Construct, id: string, config: FabricPrecisionTimeServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_precision_time_service',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connections.internalValue = config.connections;
    this._ipv4.internalValue = config.ipv4;
    this._name = config.name;
    this._ntpAdvancedConfiguration.internalValue = config.ntpAdvancedConfiguration;
    this._package.internalValue = config.package;
    this._ptpAdvancedConfiguration.internalValue = config.ptpAdvancedConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  private _account = new FabricPrecisionTimeServiceAccountOutputReference(this, "account");
  public get account() {
    return this._account;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new FabricPrecisionTimeServiceChangeLogOutputReference(this, "change_log");
  public get changeLog() {
    return this._changeLog;
  }

  // connections - computed: false, optional: false, required: true
  private _connections = new FabricPrecisionTimeServiceConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: FabricPrecisionTimeServiceConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4 = new FabricPrecisionTimeServiceIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: FabricPrecisionTimeServiceIpv4) {
    this._ipv4.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
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

  // ntp_advanced_configuration - computed: true, optional: true, required: false
  private _ntpAdvancedConfiguration = new FabricPrecisionTimeServiceNtpAdvancedConfigurationList(this, "ntp_advanced_configuration", false);
  public get ntpAdvancedConfiguration() {
    return this._ntpAdvancedConfiguration;
  }
  public putNtpAdvancedConfiguration(value: FabricPrecisionTimeServiceNtpAdvancedConfiguration[] | cdktf.IResolvable) {
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
  private _operation = new FabricPrecisionTimeServiceOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }

  // order - computed: true, optional: false, required: false
  private _order = new FabricPrecisionTimeServiceOrderOutputReference(this, "order");
  public get order() {
    return this._order;
  }

  // package - computed: false, optional: false, required: true
  private _package = new FabricPrecisionTimeServicePackageOutputReference(this, "package");
  public get package() {
    return this._package;
  }
  public putPackage(value: FabricPrecisionTimeServicePackage) {
    this._package.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // precision_time_price - computed: true, optional: false, required: false
  private _precisionTimePrice = new FabricPrecisionTimeServicePrecisionTimePriceOutputReference(this, "precision_time_price");
  public get precisionTimePrice() {
    return this._precisionTimePrice;
  }

  // project - computed: true, optional: false, required: false
  private _project = new FabricPrecisionTimeServiceProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }

  // ptp_advanced_configuration - computed: true, optional: true, required: false
  private _ptpAdvancedConfiguration = new FabricPrecisionTimeServicePtpAdvancedConfigurationOutputReference(this, "ptp_advanced_configuration");
  public get ptpAdvancedConfiguration() {
    return this._ptpAdvancedConfiguration;
  }
  public putPtpAdvancedConfiguration(value: FabricPrecisionTimeServicePtpAdvancedConfiguration) {
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FabricPrecisionTimeServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FabricPrecisionTimeServiceTimeouts) {
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
      connections: cdktf.listMapper(fabricPrecisionTimeServiceConnectionsToTerraform, false)(this._connections.internalValue),
      ipv4: fabricPrecisionTimeServiceIpv4ToTerraform(this._ipv4.internalValue),
      name: cdktf.stringToTerraform(this._name),
      ntp_advanced_configuration: cdktf.listMapper(fabricPrecisionTimeServiceNtpAdvancedConfigurationToTerraform, false)(this._ntpAdvancedConfiguration.internalValue),
      package: fabricPrecisionTimeServicePackageToTerraform(this._package.internalValue),
      ptp_advanced_configuration: fabricPrecisionTimeServicePtpAdvancedConfigurationToTerraform(this._ptpAdvancedConfiguration.internalValue),
      timeouts: fabricPrecisionTimeServiceTimeoutsToTerraform(this._timeouts.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connections: {
        value: cdktf.listMapperHcl(fabricPrecisionTimeServiceConnectionsToHclTerraform, false)(this._connections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricPrecisionTimeServiceConnectionsList",
      },
      ipv4: {
        value: fabricPrecisionTimeServiceIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPrecisionTimeServiceIpv4",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_advanced_configuration: {
        value: cdktf.listMapperHcl(fabricPrecisionTimeServiceNtpAdvancedConfigurationToHclTerraform, false)(this._ntpAdvancedConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricPrecisionTimeServiceNtpAdvancedConfigurationList",
      },
      package: {
        value: fabricPrecisionTimeServicePackageToHclTerraform(this._package.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPrecisionTimeServicePackage",
      },
      ptp_advanced_configuration: {
        value: fabricPrecisionTimeServicePtpAdvancedConfigurationToHclTerraform(this._ptpAdvancedConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPrecisionTimeServicePtpAdvancedConfiguration",
      },
      timeouts: {
        value: fabricPrecisionTimeServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricPrecisionTimeServiceTimeouts",
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
