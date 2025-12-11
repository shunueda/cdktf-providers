// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseCloudExadataInfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#availability_domain DatabaseCloudExadataInfrastructure#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#cluster_placement_group_id DatabaseCloudExadataInfrastructure#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#compartment_id DatabaseCloudExadataInfrastructure#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#compute_count DatabaseCloudExadataInfrastructure#compute_count}
  */
  readonly computeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#database_server_type DatabaseCloudExadataInfrastructure#database_server_type}
  */
  readonly databaseServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#defined_tags DatabaseCloudExadataInfrastructure#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#display_name DatabaseCloudExadataInfrastructure#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#freeform_tags DatabaseCloudExadataInfrastructure#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#id DatabaseCloudExadataInfrastructure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#shape DatabaseCloudExadataInfrastructure#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#storage_count DatabaseCloudExadataInfrastructure#storage_count}
  */
  readonly storageCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#storage_server_type DatabaseCloudExadataInfrastructure#storage_server_type}
  */
  readonly storageServerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#subscription_id DatabaseCloudExadataInfrastructure#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * customer_contacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#customer_contacts DatabaseCloudExadataInfrastructure#customer_contacts}
  */
  readonly customerContacts?: DatabaseCloudExadataInfrastructureCustomerContacts[] | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#maintenance_window DatabaseCloudExadataInfrastructure#maintenance_window}
  */
  readonly maintenanceWindow?: DatabaseCloudExadataInfrastructureMaintenanceWindow;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#timeouts DatabaseCloudExadataInfrastructure#timeouts}
  */
  readonly timeouts?: DatabaseCloudExadataInfrastructureTimeouts;
}
export interface DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations {
}

export function databaseCloudExadataInfrastructureDefinedFileSystemConfigurationsToTerraform(struct?: DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseCloudExadataInfrastructureDefinedFileSystemConfigurationsToHclTerraform(struct?: DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_backup_partition - computed: true, optional: false, required: false
  public get isBackupPartition() {
    return this.getBooleanAttribute('is_backup_partition');
  }

  // is_resizable - computed: true, optional: false, required: false
  public get isResizable() {
    return this.getBooleanAttribute('is_resizable');
  }

  // min_size_gb - computed: true, optional: false, required: false
  public get minSizeGb() {
    return this.getNumberAttribute('min_size_gb');
  }

  // mount_point - computed: true, optional: false, required: false
  public get mountPoint() {
    return this.getStringAttribute('mount_point');
  }
}

export class DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference {
    return new DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudExadataInfrastructureExascaleConfig {
}

export function databaseCloudExadataInfrastructureExascaleConfigToTerraform(struct?: DatabaseCloudExadataInfrastructureExascaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function databaseCloudExadataInfrastructureExascaleConfigToHclTerraform(struct?: DatabaseCloudExadataInfrastructureExascaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatabaseCloudExadataInfrastructureExascaleConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseCloudExadataInfrastructureExascaleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudExadataInfrastructureExascaleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_storage_in_gbs - computed: true, optional: false, required: false
  public get availableStorageInGbs() {
    return this.getNumberAttribute('available_storage_in_gbs');
  }

  // total_storage_in_gbs - computed: true, optional: false, required: false
  public get totalStorageInGbs() {
    return this.getNumberAttribute('total_storage_in_gbs');
  }
}

export class DatabaseCloudExadataInfrastructureExascaleConfigList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseCloudExadataInfrastructureExascaleConfigOutputReference {
    return new DatabaseCloudExadataInfrastructureExascaleConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudExadataInfrastructureCustomerContacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#email DatabaseCloudExadataInfrastructure#email}
  */
  readonly email?: string;
}

export function databaseCloudExadataInfrastructureCustomerContactsToTerraform(struct?: DatabaseCloudExadataInfrastructureCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function databaseCloudExadataInfrastructureCustomerContactsToHclTerraform(struct?: DatabaseCloudExadataInfrastructureCustomerContacts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseCloudExadataInfrastructureCustomerContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseCloudExadataInfrastructureCustomerContacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseCloudExadataInfrastructureCustomerContacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class DatabaseCloudExadataInfrastructureCustomerContactsList extends cdktf.ComplexList {
  public internalValue? : DatabaseCloudExadataInfrastructureCustomerContacts[] | cdktf.IResolvable

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
  public get(index: number): DatabaseCloudExadataInfrastructureCustomerContactsOutputReference {
    return new DatabaseCloudExadataInfrastructureCustomerContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#name DatabaseCloudExadataInfrastructure#name}
  */
  readonly name: string;
}

export function databaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekToTerraform(struct?: DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekToHclTerraform(struct?: DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek | cdktf.IResolvable): any {
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

export class DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek | cdktf.IResolvable | undefined) {
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

export class DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList extends cdktf.ComplexList {
  public internalValue? : DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek[] | cdktf.IResolvable

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
  public get(index: number): DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference {
    return new DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudExadataInfrastructureMaintenanceWindowMonths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#name DatabaseCloudExadataInfrastructure#name}
  */
  readonly name: string;
}

export function databaseCloudExadataInfrastructureMaintenanceWindowMonthsToTerraform(struct?: DatabaseCloudExadataInfrastructureMaintenanceWindowMonths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function databaseCloudExadataInfrastructureMaintenanceWindowMonthsToHclTerraform(struct?: DatabaseCloudExadataInfrastructureMaintenanceWindowMonths | cdktf.IResolvable): any {
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

export class DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseCloudExadataInfrastructureMaintenanceWindowMonths | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseCloudExadataInfrastructureMaintenanceWindowMonths | cdktf.IResolvable | undefined) {
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

export class DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList extends cdktf.ComplexList {
  public internalValue? : DatabaseCloudExadataInfrastructureMaintenanceWindowMonths[] | cdktf.IResolvable

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
  public get(index: number): DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference {
    return new DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseCloudExadataInfrastructureMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#custom_action_timeout_in_mins DatabaseCloudExadataInfrastructure#custom_action_timeout_in_mins}
  */
  readonly customActionTimeoutInMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#hours_of_day DatabaseCloudExadataInfrastructure#hours_of_day}
  */
  readonly hoursOfDay?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled DatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}
  */
  readonly isCustomActionTimeoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#is_monthly_patching_enabled DatabaseCloudExadataInfrastructure#is_monthly_patching_enabled}
  */
  readonly isMonthlyPatchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#lead_time_in_weeks DatabaseCloudExadataInfrastructure#lead_time_in_weeks}
  */
  readonly leadTimeInWeeks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#patching_mode DatabaseCloudExadataInfrastructure#patching_mode}
  */
  readonly patchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#preference DatabaseCloudExadataInfrastructure#preference}
  */
  readonly preference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#skip_ru DatabaseCloudExadataInfrastructure#skip_ru}
  */
  readonly skipRu?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#weeks_of_month DatabaseCloudExadataInfrastructure#weeks_of_month}
  */
  readonly weeksOfMonth?: number[];
  /**
  * days_of_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#days_of_week DatabaseCloudExadataInfrastructure#days_of_week}
  */
  readonly daysOfWeek?: DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek[] | cdktf.IResolvable;
  /**
  * months block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#months DatabaseCloudExadataInfrastructure#months}
  */
  readonly months?: DatabaseCloudExadataInfrastructureMaintenanceWindowMonths[] | cdktf.IResolvable;
}

export function databaseCloudExadataInfrastructureMaintenanceWindowToTerraform(struct?: DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference | DatabaseCloudExadataInfrastructureMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_action_timeout_in_mins: cdktf.numberToTerraform(struct!.customActionTimeoutInMins),
    hours_of_day: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.hoursOfDay),
    is_custom_action_timeout_enabled: cdktf.booleanToTerraform(struct!.isCustomActionTimeoutEnabled),
    is_monthly_patching_enabled: cdktf.booleanToTerraform(struct!.isMonthlyPatchingEnabled),
    lead_time_in_weeks: cdktf.numberToTerraform(struct!.leadTimeInWeeks),
    patching_mode: cdktf.stringToTerraform(struct!.patchingMode),
    preference: cdktf.stringToTerraform(struct!.preference),
    skip_ru: cdktf.listMapper(cdktf.booleanToTerraform, false)(struct!.skipRu),
    weeks_of_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.weeksOfMonth),
    days_of_week: cdktf.listMapper(databaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekToTerraform, true)(struct!.daysOfWeek),
    months: cdktf.listMapper(databaseCloudExadataInfrastructureMaintenanceWindowMonthsToTerraform, true)(struct!.months),
  }
}


export function databaseCloudExadataInfrastructureMaintenanceWindowToHclTerraform(struct?: DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference | DatabaseCloudExadataInfrastructureMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_action_timeout_in_mins: {
      value: cdktf.numberToHclTerraform(struct!.customActionTimeoutInMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours_of_day: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.hoursOfDay),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    is_custom_action_timeout_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isCustomActionTimeoutEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_monthly_patching_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isMonthlyPatchingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lead_time_in_weeks: {
      value: cdktf.numberToHclTerraform(struct!.leadTimeInWeeks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    patching_mode: {
      value: cdktf.stringToHclTerraform(struct!.patchingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_ru: {
      value: cdktf.listMapperHcl(cdktf.booleanToHclTerraform, false)(struct!.skipRu),
      isBlock: false,
      type: "list",
      storageClassType: "booleanList",
    },
    weeks_of_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.weeksOfMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    days_of_week: {
      value: cdktf.listMapperHcl(databaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekToHclTerraform, true)(struct!.daysOfWeek),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList",
    },
    months: {
      value: cdktf.listMapperHcl(databaseCloudExadataInfrastructureMaintenanceWindowMonthsToHclTerraform, true)(struct!.months),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseCloudExadataInfrastructureMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customActionTimeoutInMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.customActionTimeoutInMins = this._customActionTimeoutInMins;
    }
    if (this._hoursOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hoursOfDay = this._hoursOfDay;
    }
    if (this._isCustomActionTimeoutEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCustomActionTimeoutEnabled = this._isCustomActionTimeoutEnabled;
    }
    if (this._isMonthlyPatchingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMonthlyPatchingEnabled = this._isMonthlyPatchingEnabled;
    }
    if (this._leadTimeInWeeks !== undefined) {
      hasAnyValues = true;
      internalValueResult.leadTimeInWeeks = this._leadTimeInWeeks;
    }
    if (this._patchingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchingMode = this._patchingMode;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._skipRu !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipRu = this._skipRu;
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

  public set internalValue(value: DatabaseCloudExadataInfrastructureMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customActionTimeoutInMins = undefined;
      this._hoursOfDay = undefined;
      this._isCustomActionTimeoutEnabled = undefined;
      this._isMonthlyPatchingEnabled = undefined;
      this._leadTimeInWeeks = undefined;
      this._patchingMode = undefined;
      this._preference = undefined;
      this._skipRu = undefined;
      this._weeksOfMonth = undefined;
      this._daysOfWeek.internalValue = undefined;
      this._months.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customActionTimeoutInMins = value.customActionTimeoutInMins;
      this._hoursOfDay = value.hoursOfDay;
      this._isCustomActionTimeoutEnabled = value.isCustomActionTimeoutEnabled;
      this._isMonthlyPatchingEnabled = value.isMonthlyPatchingEnabled;
      this._leadTimeInWeeks = value.leadTimeInWeeks;
      this._patchingMode = value.patchingMode;
      this._preference = value.preference;
      this._skipRu = value.skipRu;
      this._weeksOfMonth = value.weeksOfMonth;
      this._daysOfWeek.internalValue = value.daysOfWeek;
      this._months.internalValue = value.months;
    }
  }

  // custom_action_timeout_in_mins - computed: true, optional: true, required: false
  private _customActionTimeoutInMins?: number; 
  public get customActionTimeoutInMins() {
    return this.getNumberAttribute('custom_action_timeout_in_mins');
  }
  public set customActionTimeoutInMins(value: number) {
    this._customActionTimeoutInMins = value;
  }
  public resetCustomActionTimeoutInMins() {
    this._customActionTimeoutInMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customActionTimeoutInMinsInput() {
    return this._customActionTimeoutInMins;
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

  // is_custom_action_timeout_enabled - computed: true, optional: true, required: false
  private _isCustomActionTimeoutEnabled?: boolean | cdktf.IResolvable; 
  public get isCustomActionTimeoutEnabled() {
    return this.getBooleanAttribute('is_custom_action_timeout_enabled');
  }
  public set isCustomActionTimeoutEnabled(value: boolean | cdktf.IResolvable) {
    this._isCustomActionTimeoutEnabled = value;
  }
  public resetIsCustomActionTimeoutEnabled() {
    this._isCustomActionTimeoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCustomActionTimeoutEnabledInput() {
    return this._isCustomActionTimeoutEnabled;
  }

  // is_monthly_patching_enabled - computed: true, optional: true, required: false
  private _isMonthlyPatchingEnabled?: boolean | cdktf.IResolvable; 
  public get isMonthlyPatchingEnabled() {
    return this.getBooleanAttribute('is_monthly_patching_enabled');
  }
  public set isMonthlyPatchingEnabled(value: boolean | cdktf.IResolvable) {
    this._isMonthlyPatchingEnabled = value;
  }
  public resetIsMonthlyPatchingEnabled() {
    this._isMonthlyPatchingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMonthlyPatchingEnabledInput() {
    return this._isMonthlyPatchingEnabled;
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

  // patching_mode - computed: true, optional: true, required: false
  private _patchingMode?: string; 
  public get patchingMode() {
    return this.getStringAttribute('patching_mode');
  }
  public set patchingMode(value: string) {
    this._patchingMode = value;
  }
  public resetPatchingMode() {
    this._patchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchingModeInput() {
    return this._patchingMode;
  }

  // preference - computed: true, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // skip_ru - computed: true, optional: true, required: false
  private _skipRu?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable; 
  public get skipRu() {
    return this.interpolationForAttribute('skip_ru');
  }
  public set skipRu(value: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable) {
    this._skipRu = value;
  }
  public resetSkipRu() {
    this._skipRu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRuInput() {
    return this._skipRu;
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
  private _daysOfWeek = new DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }
  public putDaysOfWeek(value: DatabaseCloudExadataInfrastructureMaintenanceWindowDaysOfWeek[] | cdktf.IResolvable) {
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
  private _months = new DatabaseCloudExadataInfrastructureMaintenanceWindowMonthsList(this, "months", false);
  public get months() {
    return this._months;
  }
  public putMonths(value: DatabaseCloudExadataInfrastructureMaintenanceWindowMonths[] | cdktf.IResolvable) {
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
export interface DatabaseCloudExadataInfrastructureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#create DatabaseCloudExadataInfrastructure#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#delete DatabaseCloudExadataInfrastructure#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#update DatabaseCloudExadataInfrastructure#update}
  */
  readonly update?: string;
}

export function databaseCloudExadataInfrastructureTimeoutsToTerraform(struct?: DatabaseCloudExadataInfrastructureTimeouts | cdktf.IResolvable): any {
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


export function databaseCloudExadataInfrastructureTimeoutsToHclTerraform(struct?: DatabaseCloudExadataInfrastructureTimeouts | cdktf.IResolvable): any {
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

export class DatabaseCloudExadataInfrastructureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseCloudExadataInfrastructureTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseCloudExadataInfrastructureTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure oci_database_cloud_exadata_infrastructure}
*/
export class DatabaseCloudExadataInfrastructure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_cloud_exadata_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseCloudExadataInfrastructure to import
  * @param importFromId The id of the existing DatabaseCloudExadataInfrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseCloudExadataInfrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_cloud_exadata_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/database_cloud_exadata_infrastructure oci_database_cloud_exadata_infrastructure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseCloudExadataInfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseCloudExadataInfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_cloud_exadata_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._computeCount = config.computeCount;
    this._databaseServerType = config.databaseServerType;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._shape = config.shape;
    this._storageCount = config.storageCount;
    this._storageServerType = config.storageServerType;
    this._subscriptionId = config.subscriptionId;
    this._customerContacts.internalValue = config.customerContacts;
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

  // additional_storage_count - computed: true, optional: false, required: false
  public get additionalStorageCount() {
    return this.getNumberAttribute('additional_storage_count');
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // available_storage_size_in_gbs - computed: true, optional: false, required: false
  public get availableStorageSizeInGbs() {
    return this.getNumberAttribute('available_storage_size_in_gbs');
  }

  // cluster_placement_group_id - computed: false, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
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

  // compute_model - computed: true, optional: false, required: false
  public get computeModel() {
    return this.getStringAttribute('compute_model');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: false
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // database_server_type - computed: true, optional: true, required: false
  private _databaseServerType?: string; 
  public get databaseServerType() {
    return this.getStringAttribute('database_server_type');
  }
  public set databaseServerType(value: string) {
    this._databaseServerType = value;
  }
  public resetDatabaseServerType() {
    this._databaseServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseServerTypeInput() {
    return this._databaseServerType;
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
  }

  // db_server_version - computed: true, optional: false, required: false
  public get dbServerVersion() {
    return this.getStringAttribute('db_server_version');
  }

  // defined_file_system_configurations - computed: true, optional: false, required: false
  private _definedFileSystemConfigurations = new DatabaseCloudExadataInfrastructureDefinedFileSystemConfigurationsList(this, "defined_file_system_configurations", false);
  public get definedFileSystemConfigurations() {
    return this._definedFileSystemConfigurations;
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

  // exascale_config - computed: true, optional: false, required: false
  private _exascaleConfig = new DatabaseCloudExadataInfrastructureExascaleConfigList(this, "exascale_config", false);
  public get exascaleConfig() {
    return this._exascaleConfig;
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

  // is_scheduling_policy_associated - computed: true, optional: false, required: false
  public get isSchedulingPolicyAssociated() {
    return this.getBooleanAttribute('is_scheduling_policy_associated');
  }

  // last_maintenance_run_id - computed: true, optional: false, required: false
  public get lastMaintenanceRunId() {
    return this.getStringAttribute('last_maintenance_run_id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // monthly_db_server_version - computed: true, optional: false, required: false
  public get monthlyDbServerVersion() {
    return this.getStringAttribute('monthly_db_server_version');
  }

  // monthly_storage_server_version - computed: true, optional: false, required: false
  public get monthlyStorageServerVersion() {
    return this.getStringAttribute('monthly_storage_server_version');
  }

  // next_maintenance_run_id - computed: true, optional: false, required: false
  public get nextMaintenanceRunId() {
    return this.getStringAttribute('next_maintenance_run_id');
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

  // storage_server_type - computed: true, optional: true, required: false
  private _storageServerType?: string; 
  public get storageServerType() {
    return this.getStringAttribute('storage_server_type');
  }
  public set storageServerType(value: string) {
    this._storageServerType = value;
  }
  public resetStorageServerType() {
    this._storageServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageServerTypeInput() {
    return this._storageServerType;
  }

  // storage_server_version - computed: true, optional: false, required: false
  public get storageServerVersion() {
    return this.getStringAttribute('storage_server_version');
  }

  // subscription_id - computed: true, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // total_storage_size_in_gbs - computed: true, optional: false, required: false
  public get totalStorageSizeInGbs() {
    return this.getNumberAttribute('total_storage_size_in_gbs');
  }

  // customer_contacts - computed: false, optional: true, required: false
  private _customerContacts = new DatabaseCloudExadataInfrastructureCustomerContactsList(this, "customer_contacts", false);
  public get customerContacts() {
    return this._customerContacts;
  }
  public putCustomerContacts(value: DatabaseCloudExadataInfrastructureCustomerContacts[] | cdktf.IResolvable) {
    this._customerContacts.internalValue = value;
  }
  public resetCustomerContacts() {
    this._customerContacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactsInput() {
    return this._customerContacts.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new DatabaseCloudExadataInfrastructureMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: DatabaseCloudExadataInfrastructureMaintenanceWindow) {
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
  private _timeouts = new DatabaseCloudExadataInfrastructureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseCloudExadataInfrastructureTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_count: cdktf.numberToTerraform(this._computeCount),
      database_server_type: cdktf.stringToTerraform(this._databaseServerType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      shape: cdktf.stringToTerraform(this._shape),
      storage_count: cdktf.numberToTerraform(this._storageCount),
      storage_server_type: cdktf.stringToTerraform(this._storageServerType),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      customer_contacts: cdktf.listMapper(databaseCloudExadataInfrastructureCustomerContactsToTerraform, true)(this._customerContacts.internalValue),
      maintenance_window: databaseCloudExadataInfrastructureMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      timeouts: databaseCloudExadataInfrastructureTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterPlacementGroupId),
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
      database_server_type: {
        value: cdktf.stringToHclTerraform(this._databaseServerType),
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
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      storage_server_type: {
        value: cdktf.stringToHclTerraform(this._storageServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_contacts: {
        value: cdktf.listMapperHcl(databaseCloudExadataInfrastructureCustomerContactsToHclTerraform, true)(this._customerContacts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseCloudExadataInfrastructureCustomerContactsList",
      },
      maintenance_window: {
        value: databaseCloudExadataInfrastructureMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseCloudExadataInfrastructureMaintenanceWindowList",
      },
      timeouts: {
        value: databaseCloudExadataInfrastructureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseCloudExadataInfrastructureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
