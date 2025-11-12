// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageDiskBackupLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access type for the access path can be either read (writing to path not allowed) or read and write (writing to path allowed). [READ_AND_WRITE, READ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#access StorageDiskBackupLocation#access}
  */
  readonly access?: string;
  /**
  * The mount path on the media agent where the data is to be backed up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#backuplocation StorageDiskBackupLocation#backuplocation}
  */
  readonly backuplocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#enabled StorageDiskBackupLocation#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#id StorageDiskBackupLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id of the disk storage to update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#storagepoolid StorageDiskBackupLocation#storagepoolid}
  */
  readonly storagepoolid: number;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#configuration StorageDiskBackupLocation#configuration}
  */
  readonly configuration?: StorageDiskBackupLocationConfiguration[] | cdktf.IResolvable;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#credentials StorageDiskBackupLocation#credentials}
  */
  readonly credentials?: StorageDiskBackupLocationCredentials[] | cdktf.IResolvable;
  /**
  * mediaagent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#mediaagent StorageDiskBackupLocation#mediaagent}
  */
  readonly mediaagent: StorageDiskBackupLocationMediaagent[] | cdktf.IResolvable;
  /**
  * savedcredentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#savedcredentials StorageDiskBackupLocation#savedcredentials}
  */
  readonly savedcredentials?: StorageDiskBackupLocationSavedcredentials[] | cdktf.IResolvable;
}
export interface StorageDiskBackupLocationConfiguration {
  /**
  * Used to determine if backup location has to be disabled or enabled for future backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#disablebackuplocationforfuturebackups StorageDiskBackupLocation#disablebackuplocationforfuturebackups}
  */
  readonly disablebackuplocationforfuturebackups?: string;
  /**
  * Used to enable or disable backup location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#enablebackuplocation StorageDiskBackupLocation#enablebackuplocation}
  */
  readonly enablebackuplocation?: string;
  /**
  * Used to determine if the backup location has to be prepared for retirement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#prepareforretirement StorageDiskBackupLocation#prepareforretirement}
  */
  readonly prepareforretirement?: string;
}

export function storageDiskBackupLocationConfigurationToTerraform(struct?: StorageDiskBackupLocationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disablebackuplocationforfuturebackups: cdktf.stringToTerraform(struct!.disablebackuplocationforfuturebackups),
    enablebackuplocation: cdktf.stringToTerraform(struct!.enablebackuplocation),
    prepareforretirement: cdktf.stringToTerraform(struct!.prepareforretirement),
  }
}


export function storageDiskBackupLocationConfigurationToHclTerraform(struct?: StorageDiskBackupLocationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disablebackuplocationforfuturebackups: {
      value: cdktf.stringToHclTerraform(struct!.disablebackuplocationforfuturebackups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enablebackuplocation: {
      value: cdktf.stringToHclTerraform(struct!.enablebackuplocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prepareforretirement: {
      value: cdktf.stringToHclTerraform(struct!.prepareforretirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageDiskBackupLocationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageDiskBackupLocationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablebackuplocationforfuturebackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablebackuplocationforfuturebackups = this._disablebackuplocationforfuturebackups;
    }
    if (this._enablebackuplocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablebackuplocation = this._enablebackuplocation;
    }
    if (this._prepareforretirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepareforretirement = this._prepareforretirement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageDiskBackupLocationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disablebackuplocationforfuturebackups = undefined;
      this._enablebackuplocation = undefined;
      this._prepareforretirement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disablebackuplocationforfuturebackups = value.disablebackuplocationforfuturebackups;
      this._enablebackuplocation = value.enablebackuplocation;
      this._prepareforretirement = value.prepareforretirement;
    }
  }

  // disablebackuplocationforfuturebackups - computed: true, optional: true, required: false
  private _disablebackuplocationforfuturebackups?: string; 
  public get disablebackuplocationforfuturebackups() {
    return this.getStringAttribute('disablebackuplocationforfuturebackups');
  }
  public set disablebackuplocationforfuturebackups(value: string) {
    this._disablebackuplocationforfuturebackups = value;
  }
  public resetDisablebackuplocationforfuturebackups() {
    this._disablebackuplocationforfuturebackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablebackuplocationforfuturebackupsInput() {
    return this._disablebackuplocationforfuturebackups;
  }

  // enablebackuplocation - computed: true, optional: true, required: false
  private _enablebackuplocation?: string; 
  public get enablebackuplocation() {
    return this.getStringAttribute('enablebackuplocation');
  }
  public set enablebackuplocation(value: string) {
    this._enablebackuplocation = value;
  }
  public resetEnablebackuplocation() {
    this._enablebackuplocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablebackuplocationInput() {
    return this._enablebackuplocation;
  }

  // prepareforretirement - computed: true, optional: true, required: false
  private _prepareforretirement?: string; 
  public get prepareforretirement() {
    return this.getStringAttribute('prepareforretirement');
  }
  public set prepareforretirement(value: string) {
    this._prepareforretirement = value;
  }
  public resetPrepareforretirement() {
    this._prepareforretirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareforretirementInput() {
    return this._prepareforretirement;
  }
}

export class StorageDiskBackupLocationConfigurationList extends cdktf.ComplexList {
  public internalValue? : StorageDiskBackupLocationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): StorageDiskBackupLocationConfigurationOutputReference {
    return new StorageDiskBackupLocationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageDiskBackupLocationCredentials {
  /**
  * username to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#name StorageDiskBackupLocation#name}
  */
  readonly name?: string;
  /**
  * password to access the network path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#password StorageDiskBackupLocation#password}
  */
  readonly password?: string;
}

export function storageDiskBackupLocationCredentialsToTerraform(struct?: StorageDiskBackupLocationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function storageDiskBackupLocationCredentialsToHclTerraform(struct?: StorageDiskBackupLocationCredentials | cdktf.IResolvable): any {
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageDiskBackupLocationCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageDiskBackupLocationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageDiskBackupLocationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._password = value.password;
    }
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
}

export class StorageDiskBackupLocationCredentialsList extends cdktf.ComplexList {
  public internalValue? : StorageDiskBackupLocationCredentials[] | cdktf.IResolvable

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
  public get(index: number): StorageDiskBackupLocationCredentialsOutputReference {
    return new StorageDiskBackupLocationCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageDiskBackupLocationMediaagent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#id StorageDiskBackupLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#name StorageDiskBackupLocation#name}
  */
  readonly name?: string;
}

export function storageDiskBackupLocationMediaagentToTerraform(struct?: StorageDiskBackupLocationMediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageDiskBackupLocationMediaagentToHclTerraform(struct?: StorageDiskBackupLocationMediaagent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class StorageDiskBackupLocationMediaagentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageDiskBackupLocationMediaagent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageDiskBackupLocationMediaagent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class StorageDiskBackupLocationMediaagentList extends cdktf.ComplexList {
  public internalValue? : StorageDiskBackupLocationMediaagent[] | cdktf.IResolvable

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
  public get(index: number): StorageDiskBackupLocationMediaagentOutputReference {
    return new StorageDiskBackupLocationMediaagentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageDiskBackupLocationSavedcredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#id StorageDiskBackupLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#name StorageDiskBackupLocation#name}
  */
  readonly name?: string;
}

export function storageDiskBackupLocationSavedcredentialsToTerraform(struct?: StorageDiskBackupLocationSavedcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageDiskBackupLocationSavedcredentialsToHclTerraform(struct?: StorageDiskBackupLocationSavedcredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class StorageDiskBackupLocationSavedcredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageDiskBackupLocationSavedcredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageDiskBackupLocationSavedcredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class StorageDiskBackupLocationSavedcredentialsList extends cdktf.ComplexList {
  public internalValue? : StorageDiskBackupLocationSavedcredentials[] | cdktf.IResolvable

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
  public get(index: number): StorageDiskBackupLocationSavedcredentialsOutputReference {
    return new StorageDiskBackupLocationSavedcredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location commvault_storage_disk_backup_location}
*/
export class StorageDiskBackupLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_storage_disk_backup_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageDiskBackupLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageDiskBackupLocation to import
  * @param importFromId The id of the existing StorageDiskBackupLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageDiskBackupLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_storage_disk_backup_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/storage_disk_backup_location commvault_storage_disk_backup_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageDiskBackupLocationConfig
  */
  public constructor(scope: Construct, id: string, config: StorageDiskBackupLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_storage_disk_backup_location',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._backuplocation = config.backuplocation;
    this._enabled = config.enabled;
    this._id = config.id;
    this._storagepoolid = config.storagepoolid;
    this._configuration.internalValue = config.configuration;
    this._credentials.internalValue = config.credentials;
    this._mediaagent.internalValue = config.mediaagent;
    this._savedcredentials.internalValue = config.savedcredentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // backuplocation - computed: false, optional: false, required: true
  private _backuplocation?: string; 
  public get backuplocation() {
    return this.getStringAttribute('backuplocation');
  }
  public set backuplocation(value: string) {
    this._backuplocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backuplocationInput() {
    return this._backuplocation;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // storagepoolid - computed: false, optional: false, required: true
  private _storagepoolid?: number; 
  public get storagepoolid() {
    return this.getNumberAttribute('storagepoolid');
  }
  public set storagepoolid(value: number) {
    this._storagepoolid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagepoolidInput() {
    return this._storagepoolid;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new StorageDiskBackupLocationConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: StorageDiskBackupLocationConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new StorageDiskBackupLocationCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: StorageDiskBackupLocationCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // mediaagent - computed: false, optional: false, required: true
  private _mediaagent = new StorageDiskBackupLocationMediaagentList(this, "mediaagent", false);
  public get mediaagent() {
    return this._mediaagent;
  }
  public putMediaagent(value: StorageDiskBackupLocationMediaagent[] | cdktf.IResolvable) {
    this._mediaagent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaagentInput() {
    return this._mediaagent.internalValue;
  }

  // savedcredentials - computed: false, optional: true, required: false
  private _savedcredentials = new StorageDiskBackupLocationSavedcredentialsList(this, "savedcredentials", false);
  public get savedcredentials() {
    return this._savedcredentials;
  }
  public putSavedcredentials(value: StorageDiskBackupLocationSavedcredentials[] | cdktf.IResolvable) {
    this._savedcredentials.internalValue = value;
  }
  public resetSavedcredentials() {
    this._savedcredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedcredentialsInput() {
    return this._savedcredentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      backuplocation: cdktf.stringToTerraform(this._backuplocation),
      enabled: cdktf.stringToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      storagepoolid: cdktf.numberToTerraform(this._storagepoolid),
      configuration: cdktf.listMapper(storageDiskBackupLocationConfigurationToTerraform, true)(this._configuration.internalValue),
      credentials: cdktf.listMapper(storageDiskBackupLocationCredentialsToTerraform, true)(this._credentials.internalValue),
      mediaagent: cdktf.listMapper(storageDiskBackupLocationMediaagentToTerraform, true)(this._mediaagent.internalValue),
      savedcredentials: cdktf.listMapper(storageDiskBackupLocationSavedcredentialsToTerraform, true)(this._savedcredentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backuplocation: {
        value: cdktf.stringToHclTerraform(this._backuplocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
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
      storagepoolid: {
        value: cdktf.numberToHclTerraform(this._storagepoolid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      configuration: {
        value: cdktf.listMapperHcl(storageDiskBackupLocationConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageDiskBackupLocationConfigurationList",
      },
      credentials: {
        value: cdktf.listMapperHcl(storageDiskBackupLocationCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageDiskBackupLocationCredentialsList",
      },
      mediaagent: {
        value: cdktf.listMapperHcl(storageDiskBackupLocationMediaagentToHclTerraform, true)(this._mediaagent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageDiskBackupLocationMediaagentList",
      },
      savedcredentials: {
        value: cdktf.listMapperHcl(storageDiskBackupLocationSavedcredentialsToHclTerraform, true)(this._savedcredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageDiskBackupLocationSavedcredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
