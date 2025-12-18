// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseExadataInfrastructureStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#activation_file DatabaseExadataInfrastructureStorage#activation_file}
  */
  readonly activationFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#admin_network_cidr DatabaseExadataInfrastructureStorage#admin_network_cidr}
  */
  readonly adminNetworkCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server1 DatabaseExadataInfrastructureStorage#cloud_control_plane_server1}
  */
  readonly cloudControlPlaneServer1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#cloud_control_plane_server2 DatabaseExadataInfrastructureStorage#cloud_control_plane_server2}
  */
  readonly cloudControlPlaneServer2: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#compartment_id DatabaseExadataInfrastructureStorage#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#compute_count DatabaseExadataInfrastructureStorage#compute_count}
  */
  readonly computeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#corporate_proxy DatabaseExadataInfrastructureStorage#corporate_proxy}
  */
  readonly corporateProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#defined_tags DatabaseExadataInfrastructureStorage#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#display_name DatabaseExadataInfrastructureStorage#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#dns_server DatabaseExadataInfrastructureStorage#dns_server}
  */
  readonly dnsServer: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#exadata_infrastructure_id DatabaseExadataInfrastructureStorage#exadata_infrastructure_id}
  */
  readonly exadataInfrastructureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#freeform_tags DatabaseExadataInfrastructureStorage#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#gateway DatabaseExadataInfrastructureStorage#gateway}
  */
  readonly gateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#id DatabaseExadataInfrastructureStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#infini_band_network_cidr DatabaseExadataInfrastructureStorage#infini_band_network_cidr}
  */
  readonly infiniBandNetworkCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#netmask DatabaseExadataInfrastructureStorage#netmask}
  */
  readonly netmask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#ntp_server DatabaseExadataInfrastructureStorage#ntp_server}
  */
  readonly ntpServer: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#shape DatabaseExadataInfrastructureStorage#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#storage_count DatabaseExadataInfrastructureStorage#storage_count}
  */
  readonly storageCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#time_zone DatabaseExadataInfrastructureStorage#time_zone}
  */
  readonly timeZone: string;
  /**
  * contacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#contacts DatabaseExadataInfrastructureStorage#contacts}
  */
  readonly contacts?: DatabaseExadataInfrastructureStorageContacts[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#maintenance_window DatabaseExadataInfrastructureStorage#maintenance_window}
  */
  readonly maintenanceWindow?: DatabaseExadataInfrastructureStorageMaintenanceWindow;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#timeouts DatabaseExadataInfrastructureStorage#timeouts}
  */
  readonly timeouts?: DatabaseExadataInfrastructureStorageTimeouts;
}
export interface DatabaseExadataInfrastructureStorageContacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#email DatabaseExadataInfrastructureStorage#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#is_contact_mos_validated DatabaseExadataInfrastructureStorage#is_contact_mos_validated}
  */
  readonly isContactMosValidated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#is_primary DatabaseExadataInfrastructureStorage#is_primary}
  */
  readonly isPrimary: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#phone_number DatabaseExadataInfrastructureStorage#phone_number}
  */
  readonly phoneNumber?: string;
}

export function databaseExadataInfrastructureStorageContactsToTerraform(struct?: DatabaseExadataInfrastructureStorageContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    is_contact_mos_validated: cdktf.booleanToTerraform(struct!.isContactMosValidated),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    name: cdktf.stringToTerraform(struct!.name),
    phone_number: cdktf.stringToTerraform(struct!.phoneNumber),
  }
}


export function databaseExadataInfrastructureStorageContactsToHclTerraform(struct?: DatabaseExadataInfrastructureStorageContacts | cdktf.IResolvable): any {
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
    is_contact_mos_validated: {
      value: cdktf.booleanToHclTerraform(struct!.isContactMosValidated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_number: {
      value: cdktf.stringToHclTerraform(struct!.phoneNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExadataInfrastructureStorageContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureStorageContacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._isContactMosValidated !== undefined) {
      hasAnyValues = true;
      internalValueResult.isContactMosValidated = this._isContactMosValidated;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phoneNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureStorageContacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._isContactMosValidated = undefined;
      this._isPrimary = undefined;
      this._name = undefined;
      this._phoneNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._isContactMosValidated = value.isContactMosValidated;
      this._isPrimary = value.isPrimary;
      this._name = value.name;
      this._phoneNumber = value.phoneNumber;
    }
  }

  // email - computed: false, optional: false, required: true
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

  // is_contact_mos_validated - computed: true, optional: true, required: false
  private _isContactMosValidated?: boolean | cdktf.IResolvable; 
  public get isContactMosValidated() {
    return this.getBooleanAttribute('is_contact_mos_validated');
  }
  public set isContactMosValidated(value: boolean | cdktf.IResolvable) {
    this._isContactMosValidated = value;
  }
  public resetIsContactMosValidated() {
    this._isContactMosValidated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContactMosValidatedInput() {
    return this._isContactMosValidated;
  }

  // is_primary - computed: false, optional: false, required: true
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
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

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }
}

export class DatabaseExadataInfrastructureStorageContactsList extends cdktf.ComplexList {
  public internalValue? : DatabaseExadataInfrastructureStorageContacts[] | cdktf.IResolvable

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
  public get(index: number): DatabaseExadataInfrastructureStorageContactsOutputReference {
    return new DatabaseExadataInfrastructureStorageContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}
  */
  readonly name: string;
}

export function databaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekToTerraform(struct?: DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {
  public internalValue? : DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek[] | cdktf.IResolvable

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
  public get(index: number): DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference {
    return new DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureStorageMaintenanceWindowMonths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#name DatabaseExadataInfrastructureStorage#name}
  */
  readonly name: string;
}

export function databaseExadataInfrastructureStorageMaintenanceWindowMonthsToTerraform(struct?: DatabaseExadataInfrastructureStorageMaintenanceWindowMonths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseExadataInfrastructureStorageMaintenanceWindowMonthsToHclTerraform(struct?: DatabaseExadataInfrastructureStorageMaintenanceWindowMonths | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseExadataInfrastructureStorageMaintenanceWindowMonths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureStorageMaintenanceWindowMonths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList extends cdktf.ComplexList {
  public internalValue? : DatabaseExadataInfrastructureStorageMaintenanceWindowMonths[] | cdktf.IResolvable

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
  public get(index: number): DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference {
    return new DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseExadataInfrastructureStorageMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#hours_of_day DatabaseExadataInfrastructureStorage#hours_of_day}
  */
  readonly hoursOfDay?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#lead_time_in_weeks DatabaseExadataInfrastructureStorage#lead_time_in_weeks}
  */
  readonly leadTimeInWeeks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#preference DatabaseExadataInfrastructureStorage#preference}
  */
  readonly preference: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#weeks_of_month DatabaseExadataInfrastructureStorage#weeks_of_month}
  */
  readonly weeksOfMonth?: number[];
  /**
  * days_of_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#days_of_week DatabaseExadataInfrastructureStorage#days_of_week}
  */
  readonly daysOfWeek?: DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek[] | cdktf.IResolvable;
  /**
  * months block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#months DatabaseExadataInfrastructureStorage#months}
  */
  readonly months?: DatabaseExadataInfrastructureStorageMaintenanceWindowMonths[] | cdktf.IResolvable;
}

export function databaseExadataInfrastructureStorageMaintenanceWindowToTerraform(struct?: DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference | DatabaseExadataInfrastructureStorageMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours_of_day: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hoursOfDay),
    lead_time_in_weeks: cdktf.numberToTerraform(struct!.leadTimeInWeeks),
    preference: cdktf.stringToTerraform(struct!.preference),
    weeks_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weeksOfMonth),
    days_of_week: cdktf.listMapper(databaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekToTerraform, true)(struct!.daysOfWeek),
    months: cdktf.listMapper(databaseExadataInfrastructureStorageMaintenanceWindowMonthsToTerraform, true)(struct!.months),
  }
}


export function databaseExadataInfrastructureStorageMaintenanceWindowToHclTerraform(struct?: DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference | DatabaseExadataInfrastructureStorageMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours_of_day: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hoursOfDay),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    lead_time_in_weeks: {
      value: cdktf.numberToHclTerraform(struct!.leadTimeInWeeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weeks_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weeksOfMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    days_of_week: {
      value: cdktf.listMapperHcl(databaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekToHclTerraform, true)(struct!.daysOfWeek),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList",
    },
    months: {
      value: cdktf.listMapperHcl(databaseExadataInfrastructureStorageMaintenanceWindowMonthsToHclTerraform, true)(struct!.months),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseExadataInfrastructureStorageMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hoursOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hoursOfDay = this._hoursOfDay;
    }
    if (this._leadTimeInWeeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadTimeInWeeks = this._leadTimeInWeeks;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._weeksOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeksOfMonth = this._weeksOfMonth;
    }
    if (this._daysOfWeek?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek?.internalValue;
    }
    if (this._months?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.months = this._months?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExadataInfrastructureStorageMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hoursOfDay = undefined;
      this._leadTimeInWeeks = undefined;
      this._preference = undefined;
      this._weeksOfMonth = undefined;
      this._daysOfWeek.internalValue = undefined;
      this._months.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hoursOfDay = value.hoursOfDay;
      this._leadTimeInWeeks = value.leadTimeInWeeks;
      this._preference = value.preference;
      this._weeksOfMonth = value.weeksOfMonth;
      this._daysOfWeek.internalValue = value.daysOfWeek;
      this._months.internalValue = value.months;
    }
  }

  // hours_of_day - computed: true, optional: true, required: false
  private _hoursOfDay?: number[]; 
  public get hoursOfDay() {
    return this.getNumberListAttribute('hours_of_day');
  }
  public set hoursOfDay(value: number[]) {
    this._hoursOfDay = value;
  }
  public resetHoursOfDay() {
    this._hoursOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursOfDayInput() {
    return this._hoursOfDay;
  }

  // lead_time_in_weeks - computed: true, optional: true, required: false
  private _leadTimeInWeeks?: number; 
  public get leadTimeInWeeks() {
    return this.getNumberAttribute('lead_time_in_weeks');
  }
  public set leadTimeInWeeks(value: number) {
    this._leadTimeInWeeks = value;
  }
  public resetLeadTimeInWeeks() {
    this._leadTimeInWeeks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadTimeInWeeksInput() {
    return this._leadTimeInWeeks;
  }

  // preference - computed: false, optional: false, required: true
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // weeks_of_month - computed: true, optional: true, required: false
  private _weeksOfMonth?: number[]; 
  public get weeksOfMonth() {
    return this.getNumberListAttribute('weeks_of_month');
  }
  public set weeksOfMonth(value: number[]) {
    this._weeksOfMonth = value;
  }
  public resetWeeksOfMonth() {
    this._weeksOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeksOfMonthInput() {
    return this._weeksOfMonth;
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek = new DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }
  public putDaysOfWeek(value: DatabaseExadataInfrastructureStorageMaintenanceWindowDaysOfWeek[] | cdktf.IResolvable) {
    this._daysOfWeek.internalValue = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek.internalValue;
  }

  // months - computed: false, optional: true, required: false
  private _months = new DatabaseExadataInfrastructureStorageMaintenanceWindowMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }
  public putMonths(value: DatabaseExadataInfrastructureStorageMaintenanceWindowMonths[] | cdktf.IResolvable) {
    this._months.internalValue = value;
  }
  public resetMonths() {
    this._months.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthsInput() {
    return this._months.internalValue;
  }
}
export interface DatabaseExadataInfrastructureStorageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#create DatabaseExadataInfrastructureStorage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#delete DatabaseExadataInfrastructureStorage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#update DatabaseExadataInfrastructureStorage#update}
  */
  readonly update?: string;
}

export function databaseExadataInfrastructureStorageTimeoutsToTerraform(struct?: DatabaseExadataInfrastructureStorageTimeouts | cdktf.IResolvable): any {
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


export function databaseExadataInfrastructureStorageTimeoutsToHclTerraform(struct?: DatabaseExadataInfrastructureStorageTimeouts | cdktf.IResolvable): any {
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

export class DatabaseExadataInfrastructureStorageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseExadataInfrastructureStorageTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseExadataInfrastructureStorageTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage oci_database_exadata_infrastructure_storage}
*/
export class DatabaseExadataInfrastructureStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_exadata_infrastructure_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseExadataInfrastructureStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseExadataInfrastructureStorage to import
  * @param importFromId The id of the existing DatabaseExadataInfrastructureStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseExadataInfrastructureStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_exadata_infrastructure_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_exadata_infrastructure_storage oci_database_exadata_infrastructure_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseExadataInfrastructureStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseExadataInfrastructureStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exadata_infrastructure_storage',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationFile = config.activationFile;
    this._adminNetworkCidr = config.adminNetworkCidr;
    this._cloudControlPlaneServer1 = config.cloudControlPlaneServer1;
    this._cloudControlPlaneServer2 = config.cloudControlPlaneServer2;
    this._compartmentId = config.compartmentId;
    this._computeCount = config.computeCount;
    this._corporateProxy = config.corporateProxy;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._dnsServer = config.dnsServer;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._freeformTags = config.freeformTags;
    this._gateway = config.gateway;
    this._id = config.id;
    this._infiniBandNetworkCidr = config.infiniBandNetworkCidr;
    this._netmask = config.netmask;
    this._ntpServer = config.ntpServer;
    this._shape = config.shape;
    this._storageCount = config.storageCount;
    this._timeZone = config.timeZone;
    this._contacts.internalValue = config.contacts;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activated_storage_count - computed: true, optional: false, required: false
  public get activatedStorageCount() {
    return this.getNumberAttribute('activated_storage_count');
  }

  // activation_file - computed: false, optional: true, required: false
  private _activationFile?: string; 
  public get activationFile() {
    return this.getStringAttribute('activation_file');
  }
  public set activationFile(value: string) {
    this._activationFile = value;
  }
  public resetActivationFile() {
    this._activationFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationFileInput() {
    return this._activationFile;
  }

  // additional_storage_count - computed: true, optional: false, required: false
  public get additionalStorageCount() {
    return this.getNumberAttribute('additional_storage_count');
  }

  // admin_network_cidr - computed: false, optional: false, required: true
  private _adminNetworkCidr?: string; 
  public get adminNetworkCidr() {
    return this.getStringAttribute('admin_network_cidr');
  }
  public set adminNetworkCidr(value: string) {
    this._adminNetworkCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNetworkCidrInput() {
    return this._adminNetworkCidr;
  }

  // cloud_control_plane_server1 - computed: false, optional: false, required: true
  private _cloudControlPlaneServer1?: string; 
  public get cloudControlPlaneServer1() {
    return this.getStringAttribute('cloud_control_plane_server1');
  }
  public set cloudControlPlaneServer1(value: string) {
    this._cloudControlPlaneServer1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudControlPlaneServer1Input() {
    return this._cloudControlPlaneServer1;
  }

  // cloud_control_plane_server2 - computed: false, optional: false, required: true
  private _cloudControlPlaneServer2?: string; 
  public get cloudControlPlaneServer2() {
    return this.getStringAttribute('cloud_control_plane_server2');
  }
  public set cloudControlPlaneServer2(value: string) {
    this._cloudControlPlaneServer2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudControlPlaneServer2Input() {
    return this._cloudControlPlaneServer2;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_count - computed: true, optional: true, required: false
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  public resetComputeCount() {
    this._computeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // corporate_proxy - computed: true, optional: true, required: false
  private _corporateProxy?: string; 
  public get corporateProxy() {
    return this.getStringAttribute('corporate_proxy');
  }
  public set corporateProxy(value: string) {
    this._corporateProxy = value;
  }
  public resetCorporateProxy() {
    this._corporateProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corporateProxyInput() {
    return this._corporateProxy;
  }

  // cpus_enabled - computed: true, optional: false, required: false
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // csi_number - computed: true, optional: false, required: false
  public get csiNumber() {
    return this.getStringAttribute('csi_number');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dns_server - computed: false, optional: false, required: true
  private _dnsServer?: string[]; 
  public get dnsServer() {
    return this.getListAttribute('dns_server');
  }
  public set dnsServer(value: string[]) {
    this._dnsServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // exadata_infrastructure_id - computed: false, optional: true, required: false
  private _exadataInfrastructureId?: string; 
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }
  public resetExadataInfrastructureId() {
    this._exadataInfrastructureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfrastructureIdInput() {
    return this._exadataInfrastructureId;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // infini_band_network_cidr - computed: false, optional: false, required: true
  private _infiniBandNetworkCidr?: string; 
  public get infiniBandNetworkCidr() {
    return this.getStringAttribute('infini_band_network_cidr');
  }
  public set infiniBandNetworkCidr(value: string) {
    this._infiniBandNetworkCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infiniBandNetworkCidrInput() {
    return this._infiniBandNetworkCidr;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // maintenance_slo_status - computed: true, optional: false, required: false
  public get maintenanceSloStatus() {
    return this.getStringAttribute('maintenance_slo_status');
  }

  // max_cpu_count - computed: true, optional: false, required: false
  public get maxCpuCount() {
    return this.getNumberAttribute('max_cpu_count');
  }

  // max_data_storage_in_tbs - computed: true, optional: false, required: false
  public get maxDataStorageInTbs() {
    return this.getNumberAttribute('max_data_storage_in_tbs');
  }

  // max_db_node_storage_in_gbs - computed: true, optional: false, required: false
  public get maxDbNodeStorageInGbs() {
    return this.getNumberAttribute('max_db_node_storage_in_gbs');
  }

  // max_memory_in_gbs - computed: true, optional: false, required: false
  public get maxMemoryInGbs() {
    return this.getNumberAttribute('max_memory_in_gbs');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ntp_server - computed: false, optional: false, required: true
  private _ntpServer?: string[]; 
  public get ntpServer() {
    return this.getListAttribute('ntp_server');
  }
  public set ntpServer(value: string[]) {
    this._ntpServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerInput() {
    return this._ntpServer;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_count - computed: true, optional: true, required: false
  private _storageCount?: number; 
  public get storageCount() {
    return this.getNumberAttribute('storage_count');
  }
  public set storageCount(value: number) {
    this._storageCount = value;
  }
  public resetStorageCount() {
    this._storageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCountInput() {
    return this._storageCount;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // contacts - computed: false, optional: true, required: false
  private _contacts = new DatabaseExadataInfrastructureStorageContactsList(this, "contacts", false);
  public get contacts() {
    return this._contacts;
  }
  public putContacts(value: DatabaseExadataInfrastructureStorageContacts[] | cdktf.IResolvable) {
    this._contacts.internalValue = value;
  }
  public resetContacts() {
    this._contacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactsInput() {
    return this._contacts.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new DatabaseExadataInfrastructureStorageMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DatabaseExadataInfrastructureStorageMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseExadataInfrastructureStorageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseExadataInfrastructureStorageTimeouts) {
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
      activation_file: cdktf.stringToTerraform(this._activationFile),
      admin_network_cidr: cdktf.stringToTerraform(this._adminNetworkCidr),
      cloud_control_plane_server1: cdktf.stringToTerraform(this._cloudControlPlaneServer1),
      cloud_control_plane_server2: cdktf.stringToTerraform(this._cloudControlPlaneServer2),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_count: cdktf.numberToTerraform(this._computeCount),
      corporate_proxy: cdktf.stringToTerraform(this._corporateProxy),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      dns_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServer),
      exadata_infrastructure_id: cdktf.stringToTerraform(this._exadataInfrastructureId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      infini_band_network_cidr: cdktf.stringToTerraform(this._infiniBandNetworkCidr),
      netmask: cdktf.stringToTerraform(this._netmask),
      ntp_server: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServer),
      shape: cdktf.stringToTerraform(this._shape),
      storage_count: cdktf.numberToTerraform(this._storageCount),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      contacts: cdktf.listMapper(databaseExadataInfrastructureStorageContactsToTerraform, true)(this._contacts.internalValue),
      maintenance_window: databaseExadataInfrastructureStorageMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: databaseExadataInfrastructureStorageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_file: {
        value: cdktf.stringToHclTerraform(this._activationFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_network_cidr: {
        value: cdktf.stringToHclTerraform(this._adminNetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_control_plane_server1: {
        value: cdktf.stringToHclTerraform(this._cloudControlPlaneServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_control_plane_server2: {
        value: cdktf.stringToHclTerraform(this._cloudControlPlaneServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_count: {
        value: cdktf.numberToHclTerraform(this._computeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      corporate_proxy: {
        value: cdktf.stringToHclTerraform(this._corporateProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._exadataInfrastructureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      infini_band_network_cidr: {
        value: cdktf.stringToHclTerraform(this._infiniBandNetworkCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServer),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_count: {
        value: cdktf.numberToHclTerraform(this._storageCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contacts: {
        value: cdktf.listMapperHcl(databaseExadataInfrastructureStorageContactsToHclTerraform, true)(this._contacts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseExadataInfrastructureStorageContactsList",
      },
      maintenance_window: {
        value: databaseExadataInfrastructureStorageMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseExadataInfrastructureStorageMaintenanceWindowList",
      },
      timeouts: {
        value: databaseExadataInfrastructureStorageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseExadataInfrastructureStorageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
