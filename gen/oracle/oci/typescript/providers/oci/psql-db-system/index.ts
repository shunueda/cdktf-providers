// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PsqlDbSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#apply_config PsqlDbSystem#apply_config}
  */
  readonly applyConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#config_id PsqlDbSystem#config_id}
  */
  readonly configId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#db_version PsqlDbSystem#db_version}
  */
  readonly dbVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#defined_tags PsqlDbSystem#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#description PsqlDbSystem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#freeform_tags PsqlDbSystem#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#id PsqlDbSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#instance_count PsqlDbSystem#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#instance_memory_size_in_gbs PsqlDbSystem#instance_memory_size_in_gbs}
  */
  readonly instanceMemorySizeInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#instance_ocpu_count PsqlDbSystem#instance_ocpu_count}
  */
  readonly instanceOcpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#shape PsqlDbSystem#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}
  */
  readonly systemType?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#credentials PsqlDbSystem#credentials}
  */
  readonly credentials?: PsqlDbSystemCredentials;
  /**
  * instances_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#instances_details PsqlDbSystem#instances_details}
  */
  readonly instancesDetails?: PsqlDbSystemInstancesDetails[] | cdktf.IResolvable;
  /**
  * management_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#management_policy PsqlDbSystem#management_policy}
  */
  readonly managementPolicy?: PsqlDbSystemManagementPolicy;
  /**
  * network_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#network_details PsqlDbSystem#network_details}
  */
  readonly networkDetails: PsqlDbSystemNetworkDetails;
  /**
  * patch_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#patch_operations PsqlDbSystem#patch_operations}
  */
  readonly patchOperations?: PsqlDbSystemPatchOperations[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#source PsqlDbSystem#source}
  */
  readonly source?: PsqlDbSystemSource;
  /**
  * storage_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#storage_details PsqlDbSystem#storage_details}
  */
  readonly storageDetails: PsqlDbSystemStorageDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#timeouts PsqlDbSystem#timeouts}
  */
  readonly timeouts?: PsqlDbSystemTimeouts;
}
export interface PsqlDbSystemInstances {
}

export function psqlDbSystemInstancesToTerraform(struct?: PsqlDbSystemInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function psqlDbSystemInstancesToHclTerraform(struct?: PsqlDbSystemInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PsqlDbSystemInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PsqlDbSystemInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class PsqlDbSystemInstancesList extends cdktf.ComplexList {

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
  public get(index: number): PsqlDbSystemInstancesOutputReference {
    return new PsqlDbSystemInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PsqlDbSystemCredentialsPasswordDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#password PsqlDbSystem#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#password_type PsqlDbSystem#password_type}
  */
  readonly passwordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#secret_id PsqlDbSystem#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#secret_version PsqlDbSystem#secret_version}
  */
  readonly secretVersion?: string;
}

export function psqlDbSystemCredentialsPasswordDetailsToTerraform(struct?: PsqlDbSystemCredentialsPasswordDetailsOutputReference | PsqlDbSystemCredentialsPasswordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    password_type: cdktf.stringToTerraform(struct!.passwordType),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function psqlDbSystemCredentialsPasswordDetailsToHclTerraform(struct?: PsqlDbSystemCredentialsPasswordDetailsOutputReference | PsqlDbSystemCredentialsPasswordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_type: {
      value: cdktf.stringToHclTerraform(struct!.passwordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemCredentialsPasswordDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PsqlDbSystemCredentialsPasswordDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordType = this._passwordType;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemCredentialsPasswordDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._passwordType = undefined;
      this._secretId = undefined;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._passwordType = value.passwordType;
      this._secretId = value.secretId;
      this._secretVersion = value.secretVersion;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_type - computed: false, optional: false, required: true
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // secret_version - computed: true, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface PsqlDbSystemCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#username PsqlDbSystem#username}
  */
  readonly username: string;
  /**
  * password_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#password_details PsqlDbSystem#password_details}
  */
  readonly passwordDetails: PsqlDbSystemCredentialsPasswordDetails;
}

export function psqlDbSystemCredentialsToTerraform(struct?: PsqlDbSystemCredentialsOutputReference | PsqlDbSystemCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password_details: psqlDbSystemCredentialsPasswordDetailsToTerraform(struct!.passwordDetails),
  }
}


export function psqlDbSystemCredentialsToHclTerraform(struct?: PsqlDbSystemCredentialsOutputReference | PsqlDbSystemCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_details: {
      value: psqlDbSystemCredentialsPasswordDetailsToHclTerraform(struct!.passwordDetails),
      isBlock: true,
      type: "list",
      storageClassType: "PsqlDbSystemCredentialsPasswordDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PsqlDbSystemCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._passwordDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordDetails = this._passwordDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._passwordDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._passwordDetails.internalValue = value.passwordDetails;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password_details - computed: false, optional: false, required: true
  private _passwordDetails = new PsqlDbSystemCredentialsPasswordDetailsOutputReference(this, "password_details");
  public get passwordDetails() {
    return this._passwordDetails;
  }
  public putPasswordDetails(value: PsqlDbSystemCredentialsPasswordDetails) {
    this._passwordDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordDetailsInput() {
    return this._passwordDetails.internalValue;
  }
}
export interface PsqlDbSystemInstancesDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#description PsqlDbSystem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#display_name PsqlDbSystem#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#private_ip PsqlDbSystem#private_ip}
  */
  readonly privateIp?: string;
}

export function psqlDbSystemInstancesDetailsToTerraform(struct?: PsqlDbSystemInstancesDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
  }
}


export function psqlDbSystemInstancesDetailsToHclTerraform(struct?: PsqlDbSystemInstancesDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemInstancesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PsqlDbSystemInstancesDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemInstancesDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._privateIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._privateIp = value.privateIp;
    }
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // private_ip - computed: true, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }
}

export class PsqlDbSystemInstancesDetailsList extends cdktf.ComplexList {
  public internalValue? : PsqlDbSystemInstancesDetails[] | cdktf.IResolvable

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
  public get(index: number): PsqlDbSystemInstancesDetailsOutputReference {
    return new PsqlDbSystemInstancesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PsqlDbSystemManagementPolicyBackupPolicyCopyPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#compartment_id PsqlDbSystem#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#regions PsqlDbSystem#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#retention_period PsqlDbSystem#retention_period}
  */
  readonly retentionPeriod?: number;
}

export function psqlDbSystemManagementPolicyBackupPolicyCopyPolicyToTerraform(struct?: PsqlDbSystemManagementPolicyBackupPolicyCopyPolicyOutputReference | PsqlDbSystemManagementPolicyBackupPolicyCopyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    retention_period: cdktf.numberToTerraform(struct!.retentionPeriod),
  }
}


export function psqlDbSystemManagementPolicyBackupPolicyCopyPolicyToHclTerraform(struct?: PsqlDbSystemManagementPolicyBackupPolicyCopyPolicyOutputReference | PsqlDbSystemManagementPolicyBackupPolicyCopyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retention_period: {
      value: cdktf.numberToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemManagementPolicyBackupPolicyCopyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PsqlDbSystemManagementPolicyBackupPolicyCopyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemManagementPolicyBackupPolicyCopyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._regions = undefined;
      this._retentionPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._regions = value.regions;
      this._retentionPeriod = value.retentionPeriod;
    }
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

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}
export interface PsqlDbSystemManagementPolicyBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#backup_start PsqlDbSystem#backup_start}
  */
  readonly backupStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#days_of_the_month PsqlDbSystem#days_of_the_month}
  */
  readonly daysOfTheMonth?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#days_of_the_week PsqlDbSystem#days_of_the_week}
  */
  readonly daysOfTheWeek?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#kind PsqlDbSystem#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#retention_days PsqlDbSystem#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * copy_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#copy_policy PsqlDbSystem#copy_policy}
  */
  readonly copyPolicy?: PsqlDbSystemManagementPolicyBackupPolicyCopyPolicy;
}

export function psqlDbSystemManagementPolicyBackupPolicyToTerraform(struct?: PsqlDbSystemManagementPolicyBackupPolicyOutputReference | PsqlDbSystemManagementPolicyBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_start: cdktf.stringToTerraform(struct!.backupStart),
    days_of_the_month: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.daysOfTheMonth),
    days_of_the_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfTheWeek),
    kind: cdktf.stringToTerraform(struct!.kind),
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    copy_policy: psqlDbSystemManagementPolicyBackupPolicyCopyPolicyToTerraform(struct!.copyPolicy),
  }
}


export function psqlDbSystemManagementPolicyBackupPolicyToHclTerraform(struct?: PsqlDbSystemManagementPolicyBackupPolicyOutputReference | PsqlDbSystemManagementPolicyBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_start: {
      value: cdktf.stringToHclTerraform(struct!.backupStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_of_the_month: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.daysOfTheMonth),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    days_of_the_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfTheWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    copy_policy: {
      value: psqlDbSystemManagementPolicyBackupPolicyCopyPolicyToHclTerraform(struct!.copyPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "PsqlDbSystemManagementPolicyBackupPolicyCopyPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemManagementPolicyBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PsqlDbSystemManagementPolicyBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStart = this._backupStart;
    }
    if (this._daysOfTheMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfTheMonth = this._daysOfTheMonth;
    }
    if (this._daysOfTheWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfTheWeek = this._daysOfTheWeek;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._copyPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyPolicy = this._copyPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemManagementPolicyBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupStart = undefined;
      this._daysOfTheMonth = undefined;
      this._daysOfTheWeek = undefined;
      this._kind = undefined;
      this._retentionDays = undefined;
      this._copyPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupStart = value.backupStart;
      this._daysOfTheMonth = value.daysOfTheMonth;
      this._daysOfTheWeek = value.daysOfTheWeek;
      this._kind = value.kind;
      this._retentionDays = value.retentionDays;
      this._copyPolicy.internalValue = value.copyPolicy;
    }
  }

  // backup_start - computed: true, optional: true, required: false
  private _backupStart?: string; 
  public get backupStart() {
    return this.getStringAttribute('backup_start');
  }
  public set backupStart(value: string) {
    this._backupStart = value;
  }
  public resetBackupStart() {
    this._backupStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStartInput() {
    return this._backupStart;
  }

  // days_of_the_month - computed: true, optional: true, required: false
  private _daysOfTheMonth?: number[]; 
  public get daysOfTheMonth() {
    return this.getNumberListAttribute('days_of_the_month');
  }
  public set daysOfTheMonth(value: number[]) {
    this._daysOfTheMonth = value;
  }
  public resetDaysOfTheMonth() {
    this._daysOfTheMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfTheMonthInput() {
    return this._daysOfTheMonth;
  }

  // days_of_the_week - computed: true, optional: true, required: false
  private _daysOfTheWeek?: string[]; 
  public get daysOfTheWeek() {
    return this.getListAttribute('days_of_the_week');
  }
  public set daysOfTheWeek(value: string[]) {
    this._daysOfTheWeek = value;
  }
  public resetDaysOfTheWeek() {
    this._daysOfTheWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfTheWeekInput() {
    return this._daysOfTheWeek;
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // retention_days - computed: true, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // copy_policy - computed: false, optional: true, required: false
  private _copyPolicy = new PsqlDbSystemManagementPolicyBackupPolicyCopyPolicyOutputReference(this, "copy_policy");
  public get copyPolicy() {
    return this._copyPolicy;
  }
  public putCopyPolicy(value: PsqlDbSystemManagementPolicyBackupPolicyCopyPolicy) {
    this._copyPolicy.internalValue = value;
  }
  public resetCopyPolicy() {
    this._copyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyPolicyInput() {
    return this._copyPolicy.internalValue;
  }
}
export interface PsqlDbSystemManagementPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#maintenance_window_start PsqlDbSystem#maintenance_window_start}
  */
  readonly maintenanceWindowStart?: string;
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#backup_policy PsqlDbSystem#backup_policy}
  */
  readonly backupPolicy?: PsqlDbSystemManagementPolicyBackupPolicy;
}

export function psqlDbSystemManagementPolicyToTerraform(struct?: PsqlDbSystemManagementPolicyOutputReference | PsqlDbSystemManagementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window_start: cdktf.stringToTerraform(struct!.maintenanceWindowStart),
    backup_policy: psqlDbSystemManagementPolicyBackupPolicyToTerraform(struct!.backupPolicy),
  }
}


export function psqlDbSystemManagementPolicyToHclTerraform(struct?: PsqlDbSystemManagementPolicyOutputReference | PsqlDbSystemManagementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window_start: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindowStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_policy: {
      value: psqlDbSystemManagementPolicyBackupPolicyToHclTerraform(struct!.backupPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "PsqlDbSystemManagementPolicyBackupPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemManagementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PsqlDbSystemManagementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindowStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindowStart = this._maintenanceWindowStart;
    }
    if (this._backupPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicy = this._backupPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemManagementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindowStart = undefined;
      this._backupPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindowStart = value.maintenanceWindowStart;
      this._backupPolicy.internalValue = value.backupPolicy;
    }
  }

  // maintenance_window_start - computed: true, optional: true, required: false
  private _maintenanceWindowStart?: string; 
  public get maintenanceWindowStart() {
    return this.getStringAttribute('maintenance_window_start');
  }
  public set maintenanceWindowStart(value: string) {
    this._maintenanceWindowStart = value;
  }
  public resetMaintenanceWindowStart() {
    this._maintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartInput() {
    return this._maintenanceWindowStart;
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new PsqlDbSystemManagementPolicyBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: PsqlDbSystemManagementPolicyBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }
}
export interface PsqlDbSystemNetworkDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#is_reader_endpoint_enabled PsqlDbSystem#is_reader_endpoint_enabled}
  */
  readonly isReaderEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#nsg_ids PsqlDbSystem#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#primary_db_endpoint_private_ip PsqlDbSystem#primary_db_endpoint_private_ip}
  */
  readonly primaryDbEndpointPrivateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#subnet_id PsqlDbSystem#subnet_id}
  */
  readonly subnetId: string;
}

export function psqlDbSystemNetworkDetailsToTerraform(struct?: PsqlDbSystemNetworkDetailsOutputReference | PsqlDbSystemNetworkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_reader_endpoint_enabled: cdktf.booleanToTerraform(struct!.isReaderEndpointEnabled),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    primary_db_endpoint_private_ip: cdktf.stringToTerraform(struct!.primaryDbEndpointPrivateIp),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function psqlDbSystemNetworkDetailsToHclTerraform(struct?: PsqlDbSystemNetworkDetailsOutputReference | PsqlDbSystemNetworkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_reader_endpoint_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isReaderEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    primary_db_endpoint_private_ip: {
      value: cdktf.stringToHclTerraform(struct!.primaryDbEndpointPrivateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemNetworkDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PsqlDbSystemNetworkDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isReaderEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReaderEndpointEnabled = this._isReaderEndpointEnabled;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._primaryDbEndpointPrivateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryDbEndpointPrivateIp = this._primaryDbEndpointPrivateIp;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemNetworkDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isReaderEndpointEnabled = undefined;
      this._nsgIds = undefined;
      this._primaryDbEndpointPrivateIp = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isReaderEndpointEnabled = value.isReaderEndpointEnabled;
      this._nsgIds = value.nsgIds;
      this._primaryDbEndpointPrivateIp = value.primaryDbEndpointPrivateIp;
      this._subnetId = value.subnetId;
    }
  }

  // is_reader_endpoint_enabled - computed: false, optional: true, required: false
  private _isReaderEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get isReaderEndpointEnabled() {
    return this.getBooleanAttribute('is_reader_endpoint_enabled');
  }
  public set isReaderEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._isReaderEndpointEnabled = value;
  }
  public resetIsReaderEndpointEnabled() {
    this._isReaderEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReaderEndpointEnabledInput() {
    return this._isReaderEndpointEnabled;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // primary_db_endpoint_private_ip - computed: true, optional: true, required: false
  private _primaryDbEndpointPrivateIp?: string; 
  public get primaryDbEndpointPrivateIp() {
    return this.getStringAttribute('primary_db_endpoint_private_ip');
  }
  public set primaryDbEndpointPrivateIp(value: string) {
    this._primaryDbEndpointPrivateIp = value;
  }
  public resetPrimaryDbEndpointPrivateIp() {
    this._primaryDbEndpointPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDbEndpointPrivateIpInput() {
    return this._primaryDbEndpointPrivateIp;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface PsqlDbSystemPatchOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#from PsqlDbSystem#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#operation PsqlDbSystem#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#position PsqlDbSystem#position}
  */
  readonly position?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#selected_item PsqlDbSystem#selected_item}
  */
  readonly selectedItem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#selection PsqlDbSystem#selection}
  */
  readonly selection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#value PsqlDbSystem#value}
  */
  readonly value?: { [key: string]: string };
}

export function psqlDbSystemPatchOperationsToTerraform(struct?: PsqlDbSystemPatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    operation: cdktf.stringToTerraform(struct!.operation),
    position: cdktf.stringToTerraform(struct!.position),
    selected_item: cdktf.stringToTerraform(struct!.selectedItem),
    selection: cdktf.stringToTerraform(struct!.selection),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function psqlDbSystemPatchOperationsToHclTerraform(struct?: PsqlDbSystemPatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_item: {
      value: cdktf.stringToHclTerraform(struct!.selectedItem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection: {
      value: cdktf.stringToHclTerraform(struct!.selection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemPatchOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PsqlDbSystemPatchOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._selectedItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedItem = this._selectedItem;
    }
    if (this._selection !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemPatchOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._operation = undefined;
      this._position = undefined;
      this._selectedItem = undefined;
      this._selection = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._operation = value.operation;
      this._position = value.position;
      this._selectedItem = value.selectedItem;
      this._selection = value.selection;
      this._value = value.value;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // selected_item - computed: false, optional: true, required: false
  private _selectedItem?: string; 
  public get selectedItem() {
    return this.getStringAttribute('selected_item');
  }
  public set selectedItem(value: string) {
    this._selectedItem = value;
  }
  public resetSelectedItem() {
    this._selectedItem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedItemInput() {
    return this._selectedItem;
  }

  // selection - computed: false, optional: false, required: true
  private _selection?: string; 
  public get selection() {
    return this.getStringAttribute('selection');
  }
  public set selection(value: string) {
    this._selection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PsqlDbSystemPatchOperationsList extends cdktf.ComplexList {
  public internalValue? : PsqlDbSystemPatchOperations[] | cdktf.IResolvable

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
  public get(index: number): PsqlDbSystemPatchOperationsOutputReference {
    return new PsqlDbSystemPatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PsqlDbSystemSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#backup_id PsqlDbSystem#backup_id}
  */
  readonly backupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#is_having_restore_config_overrides PsqlDbSystem#is_having_restore_config_overrides}
  */
  readonly isHavingRestoreConfigOverrides?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#source_type PsqlDbSystem#source_type}
  */
  readonly sourceType: string;
}

export function psqlDbSystemSourceToTerraform(struct?: PsqlDbSystemSourceOutputReference | PsqlDbSystemSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_id: cdktf.stringToTerraform(struct!.backupId),
    is_having_restore_config_overrides: cdktf.booleanToTerraform(struct!.isHavingRestoreConfigOverrides),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function psqlDbSystemSourceToHclTerraform(struct?: PsqlDbSystemSourceOutputReference | PsqlDbSystemSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_id: {
      value: cdktf.stringToHclTerraform(struct!.backupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_having_restore_config_overrides: {
      value: cdktf.booleanToHclTerraform(struct!.isHavingRestoreConfigOverrides),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PsqlDbSystemSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupId = this._backupId;
    }
    if (this._isHavingRestoreConfigOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHavingRestoreConfigOverrides = this._isHavingRestoreConfigOverrides;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupId = undefined;
      this._isHavingRestoreConfigOverrides = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupId = value.backupId;
      this._isHavingRestoreConfigOverrides = value.isHavingRestoreConfigOverrides;
      this._sourceType = value.sourceType;
    }
  }

  // backup_id - computed: true, optional: true, required: false
  private _backupId?: string; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // is_having_restore_config_overrides - computed: true, optional: true, required: false
  private _isHavingRestoreConfigOverrides?: boolean | cdktf.IResolvable; 
  public get isHavingRestoreConfigOverrides() {
    return this.getBooleanAttribute('is_having_restore_config_overrides');
  }
  public set isHavingRestoreConfigOverrides(value: boolean | cdktf.IResolvable) {
    this._isHavingRestoreConfigOverrides = value;
  }
  public resetIsHavingRestoreConfigOverrides() {
    this._isHavingRestoreConfigOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHavingRestoreConfigOverridesInput() {
    return this._isHavingRestoreConfigOverrides;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface PsqlDbSystemStorageDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#availability_domain PsqlDbSystem#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#iops PsqlDbSystem#iops}
  */
  readonly iops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#is_regionally_durable PsqlDbSystem#is_regionally_durable}
  */
  readonly isRegionallyDurable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#system_type PsqlDbSystem#system_type}
  */
  readonly systemType: string;
}

export function psqlDbSystemStorageDetailsToTerraform(struct?: PsqlDbSystemStorageDetailsOutputReference | PsqlDbSystemStorageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    iops: cdktf.stringToTerraform(struct!.iops),
    is_regionally_durable: cdktf.booleanToTerraform(struct!.isRegionallyDurable),
    system_type: cdktf.stringToTerraform(struct!.systemType),
  }
}


export function psqlDbSystemStorageDetailsToHclTerraform(struct?: PsqlDbSystemStorageDetailsOutputReference | PsqlDbSystemStorageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iops: {
      value: cdktf.stringToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_regionally_durable: {
      value: cdktf.booleanToHclTerraform(struct!.isRegionallyDurable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_type: {
      value: cdktf.stringToHclTerraform(struct!.systemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PsqlDbSystemStorageDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PsqlDbSystemStorageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._isRegionallyDurable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRegionallyDurable = this._isRegionallyDurable;
    }
    if (this._systemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemType = this._systemType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PsqlDbSystemStorageDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._availabilityDomain = undefined;
      this._iops = undefined;
      this._isRegionallyDurable = undefined;
      this._systemType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._availabilityDomain = value.availabilityDomain;
      this._iops = value.iops;
      this._isRegionallyDurable = value.isRegionallyDurable;
      this._systemType = value.systemType;
    }
  }

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: string; 
  public get iops() {
    return this.getStringAttribute('iops');
  }
  public set iops(value: string) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // is_regionally_durable - computed: false, optional: false, required: true
  private _isRegionallyDurable?: boolean | cdktf.IResolvable; 
  public get isRegionallyDurable() {
    return this.getBooleanAttribute('is_regionally_durable');
  }
  public set isRegionallyDurable(value: boolean | cdktf.IResolvable) {
    this._isRegionallyDurable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isRegionallyDurableInput() {
    return this._isRegionallyDurable;
  }

  // system_type - computed: false, optional: false, required: true
  private _systemType?: string; 
  public get systemType() {
    return this.getStringAttribute('system_type');
  }
  public set systemType(value: string) {
    this._systemType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTypeInput() {
    return this._systemType;
  }
}
export interface PsqlDbSystemTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#create PsqlDbSystem#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#delete PsqlDbSystem#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#update PsqlDbSystem#update}
  */
  readonly update?: string;
}

export function psqlDbSystemTimeoutsToTerraform(struct?: PsqlDbSystemTimeouts | cdktf.IResolvable): any {
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


export function psqlDbSystemTimeoutsToHclTerraform(struct?: PsqlDbSystemTimeouts | cdktf.IResolvable): any {
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

export class PsqlDbSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PsqlDbSystemTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PsqlDbSystemTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system oci_psql_db_system}
*/
export class PsqlDbSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_psql_db_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PsqlDbSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PsqlDbSystem to import
  * @param importFromId The id of the existing PsqlDbSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PsqlDbSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_psql_db_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/psql_db_system oci_psql_db_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PsqlDbSystemConfig
  */
  public constructor(scope: Construct, id: string, config: PsqlDbSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_psql_db_system',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyConfig = config.applyConfig;
    this._compartmentId = config.compartmentId;
    this._configId = config.configId;
    this._dbVersion = config.dbVersion;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._instanceMemorySizeInGbs = config.instanceMemorySizeInGbs;
    this._instanceOcpuCount = config.instanceOcpuCount;
    this._shape = config.shape;
    this._systemType = config.systemType;
    this._credentials.internalValue = config.credentials;
    this._instancesDetails.internalValue = config.instancesDetails;
    this._managementPolicy.internalValue = config.managementPolicy;
    this._networkDetails.internalValue = config.networkDetails;
    this._patchOperations.internalValue = config.patchOperations;
    this._source.internalValue = config.source;
    this._storageDetails.internalValue = config.storageDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // apply_config - computed: false, optional: true, required: false
  private _applyConfig?: string; 
  public get applyConfig() {
    return this.getStringAttribute('apply_config');
  }
  public set applyConfig(value: string) {
    this._applyConfig = value;
  }
  public resetApplyConfig() {
    this._applyConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyConfigInput() {
    return this._applyConfig;
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

  // config_id - computed: true, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
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

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_memory_size_in_gbs - computed: true, optional: true, required: false
  private _instanceMemorySizeInGbs?: number; 
  public get instanceMemorySizeInGbs() {
    return this.getNumberAttribute('instance_memory_size_in_gbs');
  }
  public set instanceMemorySizeInGbs(value: number) {
    this._instanceMemorySizeInGbs = value;
  }
  public resetInstanceMemorySizeInGbs() {
    this._instanceMemorySizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMemorySizeInGbsInput() {
    return this._instanceMemorySizeInGbs;
  }

  // instance_ocpu_count - computed: true, optional: true, required: false
  private _instanceOcpuCount?: number; 
  public get instanceOcpuCount() {
    return this.getNumberAttribute('instance_ocpu_count');
  }
  public set instanceOcpuCount(value: number) {
    this._instanceOcpuCount = value;
  }
  public resetInstanceOcpuCount() {
    this._instanceOcpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceOcpuCountInput() {
    return this._instanceOcpuCount;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new PsqlDbSystemInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // system_type - computed: true, optional: true, required: false
  private _systemType?: string; 
  public get systemType() {
    return this.getStringAttribute('system_type');
  }
  public set systemType(value: string) {
    this._systemType = value;
  }
  public resetSystemType() {
    this._systemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemTypeInput() {
    return this._systemType;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new PsqlDbSystemCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PsqlDbSystemCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // instances_details - computed: false, optional: true, required: false
  private _instancesDetails = new PsqlDbSystemInstancesDetailsList(this, "instances_details", false);
  public get instancesDetails() {
    return this._instancesDetails;
  }
  public putInstancesDetails(value: PsqlDbSystemInstancesDetails[] | cdktf.IResolvable) {
    this._instancesDetails.internalValue = value;
  }
  public resetInstancesDetails() {
    this._instancesDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesDetailsInput() {
    return this._instancesDetails.internalValue;
  }

  // management_policy - computed: false, optional: true, required: false
  private _managementPolicy = new PsqlDbSystemManagementPolicyOutputReference(this, "management_policy");
  public get managementPolicy() {
    return this._managementPolicy;
  }
  public putManagementPolicy(value: PsqlDbSystemManagementPolicy) {
    this._managementPolicy.internalValue = value;
  }
  public resetManagementPolicy() {
    this._managementPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPolicyInput() {
    return this._managementPolicy.internalValue;
  }

  // network_details - computed: false, optional: false, required: true
  private _networkDetails = new PsqlDbSystemNetworkDetailsOutputReference(this, "network_details");
  public get networkDetails() {
    return this._networkDetails;
  }
  public putNetworkDetails(value: PsqlDbSystemNetworkDetails) {
    this._networkDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDetailsInput() {
    return this._networkDetails.internalValue;
  }

  // patch_operations - computed: false, optional: true, required: false
  private _patchOperations = new PsqlDbSystemPatchOperationsList(this, "patch_operations", false);
  public get patchOperations() {
    return this._patchOperations;
  }
  public putPatchOperations(value: PsqlDbSystemPatchOperations[] | cdktf.IResolvable) {
    this._patchOperations.internalValue = value;
  }
  public resetPatchOperations() {
    this._patchOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchOperationsInput() {
    return this._patchOperations.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new PsqlDbSystemSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: PsqlDbSystemSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // storage_details - computed: false, optional: false, required: true
  private _storageDetails = new PsqlDbSystemStorageDetailsOutputReference(this, "storage_details");
  public get storageDetails() {
    return this._storageDetails;
  }
  public putStorageDetails(value: PsqlDbSystemStorageDetails) {
    this._storageDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDetailsInput() {
    return this._storageDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PsqlDbSystemTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PsqlDbSystemTimeouts) {
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
      apply_config: cdktf.stringToTerraform(this._applyConfig),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      config_id: cdktf.stringToTerraform(this._configId),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      instance_memory_size_in_gbs: cdktf.numberToTerraform(this._instanceMemorySizeInGbs),
      instance_ocpu_count: cdktf.numberToTerraform(this._instanceOcpuCount),
      shape: cdktf.stringToTerraform(this._shape),
      system_type: cdktf.stringToTerraform(this._systemType),
      credentials: psqlDbSystemCredentialsToTerraform(this._credentials.internalValue),
      instances_details: cdktf.listMapper(psqlDbSystemInstancesDetailsToTerraform, true)(this._instancesDetails.internalValue),
      management_policy: psqlDbSystemManagementPolicyToTerraform(this._managementPolicy.internalValue),
      network_details: psqlDbSystemNetworkDetailsToTerraform(this._networkDetails.internalValue),
      patch_operations: cdktf.listMapper(psqlDbSystemPatchOperationsToTerraform, true)(this._patchOperations.internalValue),
      source: psqlDbSystemSourceToTerraform(this._source.internalValue),
      storage_details: psqlDbSystemStorageDetailsToTerraform(this._storageDetails.internalValue),
      timeouts: psqlDbSystemTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_config: {
        value: cdktf.stringToHclTerraform(this._applyConfig),
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
      config_id: {
        value: cdktf.stringToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_memory_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._instanceMemorySizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_ocpu_count: {
        value: cdktf.numberToHclTerraform(this._instanceOcpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shape: {
        value: cdktf.stringToHclTerraform(this._shape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_type: {
        value: cdktf.stringToHclTerraform(this._systemType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: psqlDbSystemCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PsqlDbSystemCredentialsList",
      },
      instances_details: {
        value: cdktf.listMapperHcl(psqlDbSystemInstancesDetailsToHclTerraform, true)(this._instancesDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PsqlDbSystemInstancesDetailsList",
      },
      management_policy: {
        value: psqlDbSystemManagementPolicyToHclTerraform(this._managementPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PsqlDbSystemManagementPolicyList",
      },
      network_details: {
        value: psqlDbSystemNetworkDetailsToHclTerraform(this._networkDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PsqlDbSystemNetworkDetailsList",
      },
      patch_operations: {
        value: cdktf.listMapperHcl(psqlDbSystemPatchOperationsToHclTerraform, true)(this._patchOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PsqlDbSystemPatchOperationsList",
      },
      source: {
        value: psqlDbSystemSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PsqlDbSystemSourceList",
      },
      storage_details: {
        value: psqlDbSystemStorageDetailsToHclTerraform(this._storageDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PsqlDbSystemStorageDetailsList",
      },
      timeouts: {
        value: psqlDbSystemTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PsqlDbSystemTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
