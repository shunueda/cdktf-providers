// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NdbRegisterDbserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#database_type NdbRegisterDbserver#database_type}
  */
  readonly databaseType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#delete NdbRegisterDbserver#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#delete_vgs NdbRegisterDbserver#delete_vgs}
  */
  readonly deleteVgs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#delete_vm_snapshots NdbRegisterDbserver#delete_vm_snapshots}
  */
  readonly deleteVmSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#description NdbRegisterDbserver#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#forced_install NdbRegisterDbserver#forced_install}
  */
  readonly forcedInstall?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#id NdbRegisterDbserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#name NdbRegisterDbserver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#nxcluster_id NdbRegisterDbserver#nxcluster_id}
  */
  readonly nxclusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#password NdbRegisterDbserver#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#remove NdbRegisterDbserver#remove}
  */
  readonly remove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#soft_remove NdbRegisterDbserver#soft_remove}
  */
  readonly softRemove?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#ssh_key NdbRegisterDbserver#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#update_name_description_in_cluster NdbRegisterDbserver#update_name_description_in_cluster}
  */
  readonly updateNameDescriptionInCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#username NdbRegisterDbserver#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#vm_ip NdbRegisterDbserver#vm_ip}
  */
  readonly vmIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#working_directory NdbRegisterDbserver#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#credentials NdbRegisterDbserver#credentials}
  */
  readonly credentials?: NdbRegisterDbserverCredentials[] | cdktf.IResolvable;
  /**
  * postgres_database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#postgres_database NdbRegisterDbserver#postgres_database}
  */
  readonly postgresDatabase?: NdbRegisterDbserverPostgresDatabase[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#tags NdbRegisterDbserver#tags}
  */
  readonly tags?: NdbRegisterDbserverTags[] | cdktf.IResolvable;
}
export interface NdbRegisterDbserverProperties {
}

export function ndbRegisterDbserverPropertiesToTerraform(struct?: NdbRegisterDbserverProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ndbRegisterDbserverPropertiesToHclTerraform(struct?: NdbRegisterDbserverProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NdbRegisterDbserverPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDbserverProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDbserverProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class NdbRegisterDbserverPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): NdbRegisterDbserverPropertiesOutputReference {
    return new NdbRegisterDbserverPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDbserverCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#label NdbRegisterDbserver#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#password NdbRegisterDbserver#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#username NdbRegisterDbserver#username}
  */
  readonly username: string;
}

export function ndbRegisterDbserverCredentialsToTerraform(struct?: NdbRegisterDbserverCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function ndbRegisterDbserverCredentialsToHclTerraform(struct?: NdbRegisterDbserverCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbRegisterDbserverCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDbserverCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDbserverCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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
}

export class NdbRegisterDbserverCredentialsList extends cdktf.ComplexList {
  public internalValue? : NdbRegisterDbserverCredentials[] | cdktf.IResolvable

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
  public get(index: number): NdbRegisterDbserverCredentialsOutputReference {
    return new NdbRegisterDbserverCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDbserverPostgresDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#listener_port NdbRegisterDbserver#listener_port}
  */
  readonly listenerPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#postgres_software_home NdbRegisterDbserver#postgres_software_home}
  */
  readonly postgresSoftwareHome?: string;
}

export function ndbRegisterDbserverPostgresDatabaseToTerraform(struct?: NdbRegisterDbserverPostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_port: cdktf.stringToTerraform(struct!.listenerPort),
    postgres_software_home: cdktf.stringToTerraform(struct!.postgresSoftwareHome),
  }
}


export function ndbRegisterDbserverPostgresDatabaseToHclTerraform(struct?: NdbRegisterDbserverPostgresDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_port: {
      value: cdktf.stringToHclTerraform(struct!.listenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgres_software_home: {
      value: cdktf.stringToHclTerraform(struct!.postgresSoftwareHome),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NdbRegisterDbserverPostgresDatabaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDbserverPostgresDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    if (this._postgresSoftwareHome !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresSoftwareHome = this._postgresSoftwareHome;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDbserverPostgresDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerPort = undefined;
      this._postgresSoftwareHome = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerPort = value.listenerPort;
      this._postgresSoftwareHome = value.postgresSoftwareHome;
    }
  }

  // listener_port - computed: false, optional: true, required: false
  private _listenerPort?: string; 
  public get listenerPort() {
    return this.getStringAttribute('listener_port');
  }
  public set listenerPort(value: string) {
    this._listenerPort = value;
  }
  public resetListenerPort() {
    this._listenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // postgres_software_home - computed: false, optional: true, required: false
  private _postgresSoftwareHome?: string; 
  public get postgresSoftwareHome() {
    return this.getStringAttribute('postgres_software_home');
  }
  public set postgresSoftwareHome(value: string) {
    this._postgresSoftwareHome = value;
  }
  public resetPostgresSoftwareHome() {
    this._postgresSoftwareHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresSoftwareHomeInput() {
    return this._postgresSoftwareHome;
  }
}

export class NdbRegisterDbserverPostgresDatabaseList extends cdktf.ComplexList {
  public internalValue? : NdbRegisterDbserverPostgresDatabase[] | cdktf.IResolvable

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
  public get(index: number): NdbRegisterDbserverPostgresDatabaseOutputReference {
    return new NdbRegisterDbserverPostgresDatabaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NdbRegisterDbserverTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#tag_id NdbRegisterDbserver#tag_id}
  */
  readonly tagId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#tag_name NdbRegisterDbserver#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#value NdbRegisterDbserver#value}
  */
  readonly value?: string;
}

export function ndbRegisterDbserverTagsToTerraform(struct?: NdbRegisterDbserverTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_id: cdktf.stringToTerraform(struct!.tagId),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ndbRegisterDbserverTagsToHclTerraform(struct?: NdbRegisterDbserverTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_id: {
      value: cdktf.stringToHclTerraform(struct!.tagId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
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

export class NdbRegisterDbserverTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NdbRegisterDbserverTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagId = this._tagId;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NdbRegisterDbserverTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagId = undefined;
      this._tagName = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagId = value.tagId;
      this._tagName = value.tagName;
      this._value = value.value;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // tag_id - computed: true, optional: true, required: false
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  public resetTagId() {
    this._tagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class NdbRegisterDbserverTagsList extends cdktf.ComplexList {
  public internalValue? : NdbRegisterDbserverTags[] | cdktf.IResolvable

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
  public get(index: number): NdbRegisterDbserverTagsOutputReference {
    return new NdbRegisterDbserverTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver nutanix_ndb_register_dbserver}
*/
export class NdbRegisterDbserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_ndb_register_dbserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NdbRegisterDbserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NdbRegisterDbserver to import
  * @param importFromId The id of the existing NdbRegisterDbserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NdbRegisterDbserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_ndb_register_dbserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/ndb_register_dbserver nutanix_ndb_register_dbserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NdbRegisterDbserverConfig
  */
  public constructor(scope: Construct, id: string, config: NdbRegisterDbserverConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_ndb_register_dbserver',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseType = config.databaseType;
    this._delete = config.delete;
    this._deleteVgs = config.deleteVgs;
    this._deleteVmSnapshots = config.deleteVmSnapshots;
    this._description = config.description;
    this._forcedInstall = config.forcedInstall;
    this._id = config.id;
    this._name = config.name;
    this._nxclusterId = config.nxclusterId;
    this._password = config.password;
    this._remove = config.remove;
    this._softRemove = config.softRemove;
    this._sshKey = config.sshKey;
    this._updateNameDescriptionInCluster = config.updateNameDescriptionInCluster;
    this._username = config.username;
    this._vmIp = config.vmIp;
    this._workingDirectory = config.workingDirectory;
    this._credentials.internalValue = config.credentials;
    this._postgresDatabase.internalValue = config.postgresDatabase;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // dbserver_cluster_id - computed: true, optional: false, required: false
  public get dbserverClusterId() {
    return this.getStringAttribute('dbserver_cluster_id');
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // delete_vgs - computed: false, optional: true, required: false
  private _deleteVgs?: boolean | cdktf.IResolvable; 
  public get deleteVgs() {
    return this.getBooleanAttribute('delete_vgs');
  }
  public set deleteVgs(value: boolean | cdktf.IResolvable) {
    this._deleteVgs = value;
  }
  public resetDeleteVgs() {
    this._deleteVgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVgsInput() {
    return this._deleteVgs;
  }

  // delete_vm_snapshots - computed: false, optional: true, required: false
  private _deleteVmSnapshots?: boolean | cdktf.IResolvable; 
  public get deleteVmSnapshots() {
    return this.getBooleanAttribute('delete_vm_snapshots');
  }
  public set deleteVmSnapshots(value: boolean | cdktf.IResolvable) {
    this._deleteVmSnapshots = value;
  }
  public resetDeleteVmSnapshots() {
    this._deleteVmSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVmSnapshotsInput() {
    return this._deleteVmSnapshots;
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

  // era_created - computed: true, optional: false, required: false
  public get eraCreated() {
    return this.getBooleanAttribute('era_created');
  }

  // era_drive_id - computed: true, optional: false, required: false
  public get eraDriveId() {
    return this.getStringAttribute('era_drive_id');
  }

  // era_version - computed: true, optional: false, required: false
  public get eraVersion() {
    return this.getStringAttribute('era_version');
  }

  // forced_install - computed: false, optional: true, required: false
  private _forcedInstall?: boolean | cdktf.IResolvable; 
  public get forcedInstall() {
    return this.getBooleanAttribute('forced_install');
  }
  public set forcedInstall(value: boolean | cdktf.IResolvable) {
    this._forcedInstall = value;
  }
  public resetForcedInstall() {
    this._forcedInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedInstallInput() {
    return this._forcedInstall;
  }

  // fqdns - computed: true, optional: false, required: false
  public get fqdns() {
    return this.getStringAttribute('fqdns');
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

  // internal - computed: true, optional: false, required: false
  public get internal() {
    return this.getBooleanAttribute('internal');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // mac_addresses - computed: true, optional: false, required: false
  public get macAddresses() {
    return this.getListAttribute('mac_addresses');
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

  // nxcluster_id - computed: false, optional: true, required: false
  private _nxclusterId?: string; 
  public get nxclusterId() {
    return this.getStringAttribute('nxcluster_id');
  }
  public set nxclusterId(value: string) {
    this._nxclusterId = value;
  }
  public resetNxclusterId() {
    this._nxclusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxclusterIdInput() {
    return this._nxclusterId;
  }

  // password - computed: false, optional: true, required: false
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

  // properties - computed: true, optional: false, required: false
  private _properties = new NdbRegisterDbserverPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // remove - computed: false, optional: true, required: false
  private _remove?: boolean | cdktf.IResolvable; 
  public get remove() {
    return this.getBooleanAttribute('remove');
  }
  public set remove(value: boolean | cdktf.IResolvable) {
    this._remove = value;
  }
  public resetRemove() {
    this._remove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeInput() {
    return this._remove;
  }

  // soft_remove - computed: false, optional: true, required: false
  private _softRemove?: boolean | cdktf.IResolvable; 
  public get softRemove() {
    return this.getBooleanAttribute('soft_remove');
  }
  public set softRemove(value: boolean | cdktf.IResolvable) {
    this._softRemove = value;
  }
  public resetSoftRemove() {
    this._softRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softRemoveInput() {
    return this._softRemove;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_name_description_in_cluster - computed: false, optional: true, required: false
  private _updateNameDescriptionInCluster?: boolean | cdktf.IResolvable; 
  public get updateNameDescriptionInCluster() {
    return this.getBooleanAttribute('update_name_description_in_cluster');
  }
  public set updateNameDescriptionInCluster(value: boolean | cdktf.IResolvable) {
    this._updateNameDescriptionInCluster = value;
  }
  public resetUpdateNameDescriptionInCluster() {
    this._updateNameDescriptionInCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateNameDescriptionInClusterInput() {
    return this._updateNameDescriptionInCluster;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vm_cluster_name - computed: true, optional: false, required: false
  public get vmClusterName() {
    return this.getStringAttribute('vm_cluster_name');
  }

  // vm_cluster_uuid - computed: true, optional: false, required: false
  public get vmClusterUuid() {
    return this.getStringAttribute('vm_cluster_uuid');
  }

  // vm_ip - computed: false, optional: false, required: true
  private _vmIp?: string; 
  public get vmIp() {
    return this.getStringAttribute('vm_ip');
  }
  public set vmIp(value: string) {
    this._vmIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIpInput() {
    return this._vmIp;
  }

  // vm_timezone - computed: true, optional: false, required: false
  public get vmTimezone() {
    return this.getStringAttribute('vm_timezone');
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new NdbRegisterDbserverCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: NdbRegisterDbserverCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // postgres_database - computed: false, optional: true, required: false
  private _postgresDatabase = new NdbRegisterDbserverPostgresDatabaseList(this, "postgres_database", false);
  public get postgresDatabase() {
    return this._postgresDatabase;
  }
  public putPostgresDatabase(value: NdbRegisterDbserverPostgresDatabase[] | cdktf.IResolvable) {
    this._postgresDatabase.internalValue = value;
  }
  public resetPostgresDatabase() {
    this._postgresDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresDatabaseInput() {
    return this._postgresDatabase.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NdbRegisterDbserverTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NdbRegisterDbserverTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_type: cdktf.stringToTerraform(this._databaseType),
      delete: cdktf.booleanToTerraform(this._delete),
      delete_vgs: cdktf.booleanToTerraform(this._deleteVgs),
      delete_vm_snapshots: cdktf.booleanToTerraform(this._deleteVmSnapshots),
      description: cdktf.stringToTerraform(this._description),
      forced_install: cdktf.booleanToTerraform(this._forcedInstall),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nxcluster_id: cdktf.stringToTerraform(this._nxclusterId),
      password: cdktf.stringToTerraform(this._password),
      remove: cdktf.booleanToTerraform(this._remove),
      soft_remove: cdktf.booleanToTerraform(this._softRemove),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      update_name_description_in_cluster: cdktf.booleanToTerraform(this._updateNameDescriptionInCluster),
      username: cdktf.stringToTerraform(this._username),
      vm_ip: cdktf.stringToTerraform(this._vmIp),
      working_directory: cdktf.stringToTerraform(this._workingDirectory),
      credentials: cdktf.listMapper(ndbRegisterDbserverCredentialsToTerraform, true)(this._credentials.internalValue),
      postgres_database: cdktf.listMapper(ndbRegisterDbserverPostgresDatabaseToTerraform, true)(this._postgresDatabase.internalValue),
      tags: cdktf.listMapper(ndbRegisterDbserverTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete: {
        value: cdktf.booleanToHclTerraform(this._delete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_vgs: {
        value: cdktf.booleanToHclTerraform(this._deleteVgs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_vm_snapshots: {
        value: cdktf.booleanToHclTerraform(this._deleteVmSnapshots),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forced_install: {
        value: cdktf.booleanToHclTerraform(this._forcedInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxcluster_id: {
        value: cdktf.stringToHclTerraform(this._nxclusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove: {
        value: cdktf.booleanToHclTerraform(this._remove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soft_remove: {
        value: cdktf.booleanToHclTerraform(this._softRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_name_description_in_cluster: {
        value: cdktf.booleanToHclTerraform(this._updateNameDescriptionInCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_ip: {
        value: cdktf.stringToHclTerraform(this._vmIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_directory: {
        value: cdktf.stringToHclTerraform(this._workingDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.listMapperHcl(ndbRegisterDbserverCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbRegisterDbserverCredentialsList",
      },
      postgres_database: {
        value: cdktf.listMapperHcl(ndbRegisterDbserverPostgresDatabaseToHclTerraform, true)(this._postgresDatabase.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbRegisterDbserverPostgresDatabaseList",
      },
      tags: {
        value: cdktf.listMapperHcl(ndbRegisterDbserverTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NdbRegisterDbserverTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
