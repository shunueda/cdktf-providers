// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserKeyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#assigned_to UserKeyV2#assigned_to}
  */
  readonly assignedTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#created_by UserKeyV2#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#created_time UserKeyV2#created_time}
  */
  readonly createdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#creation_type UserKeyV2#creation_type}
  */
  readonly creationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#description UserKeyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#expiry_time UserKeyV2#expiry_time}
  */
  readonly expiryTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#id UserKeyV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#key_type UserKeyV2#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#last_updated_by UserKeyV2#last_updated_by}
  */
  readonly lastUpdatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#last_updated_time UserKeyV2#last_updated_time}
  */
  readonly lastUpdatedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#last_used_time UserKeyV2#last_used_time}
  */
  readonly lastUsedTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#name UserKeyV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#status UserKeyV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#user_ext_id UserKeyV2#user_ext_id}
  */
  readonly userExtId: string;
}
export interface UserKeyV2KeyDetailsApiKeyDetails {
}

export function userKeyV2KeyDetailsApiKeyDetailsToTerraform(struct?: UserKeyV2KeyDetailsApiKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userKeyV2KeyDetailsApiKeyDetailsToHclTerraform(struct?: UserKeyV2KeyDetailsApiKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserKeyV2KeyDetailsApiKeyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserKeyV2KeyDetailsApiKeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserKeyV2KeyDetailsApiKeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
}

export class UserKeyV2KeyDetailsApiKeyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): UserKeyV2KeyDetailsApiKeyDetailsOutputReference {
    return new UserKeyV2KeyDetailsApiKeyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserKeyV2KeyDetailsObjectKeyDetails {
}

export function userKeyV2KeyDetailsObjectKeyDetailsToTerraform(struct?: UserKeyV2KeyDetailsObjectKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userKeyV2KeyDetailsObjectKeyDetailsToHclTerraform(struct?: UserKeyV2KeyDetailsObjectKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserKeyV2KeyDetailsObjectKeyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserKeyV2KeyDetailsObjectKeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserKeyV2KeyDetailsObjectKeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class UserKeyV2KeyDetailsObjectKeyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): UserKeyV2KeyDetailsObjectKeyDetailsOutputReference {
    return new UserKeyV2KeyDetailsObjectKeyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserKeyV2KeyDetails {
}

export function userKeyV2KeyDetailsToTerraform(struct?: UserKeyV2KeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userKeyV2KeyDetailsToHclTerraform(struct?: UserKeyV2KeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserKeyV2KeyDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserKeyV2KeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserKeyV2KeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_details - computed: true, optional: false, required: false
  private _apiKeyDetails = new UserKeyV2KeyDetailsApiKeyDetailsList(this, "api_key_details", false);
  public get apiKeyDetails() {
    return this._apiKeyDetails;
  }

  // object_key_details - computed: true, optional: false, required: false
  private _objectKeyDetails = new UserKeyV2KeyDetailsObjectKeyDetailsList(this, "object_key_details", false);
  public get objectKeyDetails() {
    return this._objectKeyDetails;
  }
}

export class UserKeyV2KeyDetailsList extends cdktf.ComplexList {

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
  public get(index: number): UserKeyV2KeyDetailsOutputReference {
    return new UserKeyV2KeyDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserKeyV2Links {
}

export function userKeyV2LinksToTerraform(struct?: UserKeyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userKeyV2LinksToHclTerraform(struct?: UserKeyV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserKeyV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserKeyV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserKeyV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class UserKeyV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): UserKeyV2LinksOutputReference {
    return new UserKeyV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2 nutanix_user_key_v2}
*/
export class UserKeyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_user_key_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserKeyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserKeyV2 to import
  * @param importFromId The id of the existing UserKeyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserKeyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_user_key_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/user_key_v2 nutanix_user_key_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserKeyV2Config
  */
  public constructor(scope: Construct, id: string, config: UserKeyV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_user_key_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedTo = config.assignedTo;
    this._createdBy = config.createdBy;
    this._createdTime = config.createdTime;
    this._creationType = config.creationType;
    this._description = config.description;
    this._expiryTime = config.expiryTime;
    this._id = config.id;
    this._keyType = config.keyType;
    this._lastUpdatedBy = config.lastUpdatedBy;
    this._lastUpdatedTime = config.lastUpdatedTime;
    this._lastUsedTime = config.lastUsedTime;
    this._name = config.name;
    this._status = config.status;
    this._userExtId = config.userExtId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_to - computed: true, optional: true, required: false
  private _assignedTo?: string; 
  public get assignedTo() {
    return this.getStringAttribute('assigned_to');
  }
  public set assignedTo(value: string) {
    this._assignedTo = value;
  }
  public resetAssignedTo() {
    this._assignedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedToInput() {
    return this._assignedTo;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // created_time - computed: true, optional: true, required: false
  private _createdTime?: string; 
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }
  public set createdTime(value: string) {
    this._createdTime = value;
  }
  public resetCreatedTime() {
    this._createdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimeInput() {
    return this._createdTime;
  }

  // creation_type - computed: true, optional: true, required: false
  private _creationType?: string; 
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }
  public set creationType(value: string) {
    this._creationType = value;
  }
  public resetCreationType() {
    this._creationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTypeInput() {
    return this._creationType;
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

  // expiry_time - computed: true, optional: true, required: false
  private _expiryTime?: string; 
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  public resetExpiryTime() {
    this._expiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
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

  // key_details - computed: true, optional: false, required: false
  private _keyDetails = new UserKeyV2KeyDetailsList(this, "key_details", false);
  public get keyDetails() {
    return this._keyDetails;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // last_updated_by - computed: true, optional: true, required: false
  private _lastUpdatedBy?: string; 
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }
  public set lastUpdatedBy(value: string) {
    this._lastUpdatedBy = value;
  }
  public resetLastUpdatedBy() {
    this._lastUpdatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedByInput() {
    return this._lastUpdatedBy;
  }

  // last_updated_time - computed: true, optional: true, required: false
  private _lastUpdatedTime?: string; 
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }
  public set lastUpdatedTime(value: string) {
    this._lastUpdatedTime = value;
  }
  public resetLastUpdatedTime() {
    this._lastUpdatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedTimeInput() {
    return this._lastUpdatedTime;
  }

  // last_used_time - computed: true, optional: true, required: false
  private _lastUsedTime?: string; 
  public get lastUsedTime() {
    return this.getStringAttribute('last_used_time');
  }
  public set lastUsedTime(value: string) {
    this._lastUsedTime = value;
  }
  public resetLastUsedTime() {
    this._lastUsedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUsedTimeInput() {
    return this._lastUsedTime;
  }

  // links - computed: true, optional: false, required: false
  private _links = new UserKeyV2LinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // user_ext_id - computed: false, optional: false, required: true
  private _userExtId?: string; 
  public get userExtId() {
    return this.getStringAttribute('user_ext_id');
  }
  public set userExtId(value: string) {
    this._userExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userExtIdInput() {
    return this._userExtId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_to: cdktf.stringToTerraform(this._assignedTo),
      created_by: cdktf.stringToTerraform(this._createdBy),
      created_time: cdktf.stringToTerraform(this._createdTime),
      creation_type: cdktf.stringToTerraform(this._creationType),
      description: cdktf.stringToTerraform(this._description),
      expiry_time: cdktf.stringToTerraform(this._expiryTime),
      id: cdktf.stringToTerraform(this._id),
      key_type: cdktf.stringToTerraform(this._keyType),
      last_updated_by: cdktf.stringToTerraform(this._lastUpdatedBy),
      last_updated_time: cdktf.stringToTerraform(this._lastUpdatedTime),
      last_used_time: cdktf.stringToTerraform(this._lastUsedTime),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      user_ext_id: cdktf.stringToTerraform(this._userExtId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_to: {
        value: cdktf.stringToHclTerraform(this._assignedTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_time: {
        value: cdktf.stringToHclTerraform(this._createdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_type: {
        value: cdktf.stringToHclTerraform(this._creationType),
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
      expiry_time: {
        value: cdktf.stringToHclTerraform(this._expiryTime),
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
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated_by: {
        value: cdktf.stringToHclTerraform(this._lastUpdatedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated_time: {
        value: cdktf.stringToHclTerraform(this._lastUpdatedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_used_time: {
        value: cdktf.stringToHclTerraform(this._lastUsedTime),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ext_id: {
        value: cdktf.stringToHclTerraform(this._userExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
