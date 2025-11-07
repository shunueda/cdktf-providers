// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVkcsKeymanagerSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Select the Secret with an ACL that contains the user. Project scope is ignored. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#acl_only DataVkcsKeymanagerSecret#acl_only}
  */
  readonly aclOnly?: boolean | cdktf.IResolvable;
  /**
  * The Secret algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#algorithm DataVkcsKeymanagerSecret#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The Secret bit length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#bit_length DataVkcsKeymanagerSecret#bit_length}
  */
  readonly bitLength?: number;
  /**
  * Date filter to select the Secret with created matching the specified criteria. See Date Filters below for more detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#created_at_filter DataVkcsKeymanagerSecret#created_at_filter}
  */
  readonly createdAtFilter?: string;
  /**
  * Date filter to select the Secret with expiration matching the specified criteria. See Date Filters below for more detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#expiration_filter DataVkcsKeymanagerSecret#expiration_filter}
  */
  readonly expirationFilter?: string;
  /**
  * The Secret mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#mode DataVkcsKeymanagerSecret#mode}
  */
  readonly mode?: string;
  /**
  * The Secret name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#name DataVkcsKeymanagerSecret#name}
  */
  readonly name?: string;
  /**
  * The region in which to obtain the service client. If omitted, the `region` argument of the provider is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#region DataVkcsKeymanagerSecret#region}
  */
  readonly region?: string;
  /**
  * The Secret type. For more information see [Secret types](https://docs.openstack.org/barbican/latest/api/reference/secret_types.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#secret_type DataVkcsKeymanagerSecret#secret_type}
  */
  readonly secretType?: string;
  /**
  * Date filter to select the Secret with updated matching the specified criteria. See Date Filters below for more detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#updated_at_filter DataVkcsKeymanagerSecret#updated_at_filter}
  */
  readonly updatedAtFilter?: string;
}
export interface DataVkcsKeymanagerSecretAclRead {
  /**
  * Whether the container is accessible project wide. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#project_access DataVkcsKeymanagerSecret#project_access}
  */
  readonly projectAccess?: boolean | cdktf.IResolvable;
  /**
  * The list of user IDs, which are allowed to access the container, when `project_access` is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#users DataVkcsKeymanagerSecret#users}
  */
  readonly users?: string[];
}

export function dataVkcsKeymanagerSecretAclReadToTerraform(struct?: DataVkcsKeymanagerSecretAclRead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_access: cdktf.booleanToTerraform(struct!.projectAccess),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function dataVkcsKeymanagerSecretAclReadToHclTerraform(struct?: DataVkcsKeymanagerSecretAclRead): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_access: {
      value: cdktf.booleanToHclTerraform(struct!.projectAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVkcsKeymanagerSecretAclReadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVkcsKeymanagerSecretAclRead | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectAccess = this._projectAccess;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVkcsKeymanagerSecretAclRead | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectAccess = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectAccess = value.projectAccess;
      this._users = value.users;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // project_access - computed: true, optional: true, required: false
  private _projectAccess?: boolean | cdktf.IResolvable; 
  public get projectAccess() {
    return this.getBooleanAttribute('project_access');
  }
  public set projectAccess(value: boolean | cdktf.IResolvable) {
    this._projectAccess = value;
  }
  public resetProjectAccess() {
    this._projectAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAccessInput() {
    return this._projectAccess;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // users - computed: true, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

export class DataVkcsKeymanagerSecretAclReadList extends cdktf.ComplexList {
  public internalValue? : DataVkcsKeymanagerSecretAclRead[] | cdktf.IResolvable

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
  public get(index: number): DataVkcsKeymanagerSecretAclReadOutputReference {
    return new DataVkcsKeymanagerSecretAclReadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVkcsKeymanagerSecretAcl {
}

export function dataVkcsKeymanagerSecretAclToTerraform(struct?: DataVkcsKeymanagerSecretAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVkcsKeymanagerSecretAclToHclTerraform(struct?: DataVkcsKeymanagerSecretAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVkcsKeymanagerSecretAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVkcsKeymanagerSecretAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVkcsKeymanagerSecretAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // read - computed: true, optional: false, required: false
  private _read = new DataVkcsKeymanagerSecretAclReadList(this, "read", false);
  public get read() {
    return this._read;
  }
}

export class DataVkcsKeymanagerSecretAclList extends cdktf.ComplexList {

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
  public get(index: number): DataVkcsKeymanagerSecretAclOutputReference {
    return new DataVkcsKeymanagerSecretAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret vkcs_keymanager_secret}
*/
export class DataVkcsKeymanagerSecret extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_keymanager_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVkcsKeymanagerSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVkcsKeymanagerSecret to import
  * @param importFromId The id of the existing DataVkcsKeymanagerSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVkcsKeymanagerSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_keymanager_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/data-sources/keymanager_secret vkcs_keymanager_secret} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVkcsKeymanagerSecretConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVkcsKeymanagerSecretConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vkcs_keymanager_secret',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclOnly = config.aclOnly;
    this._algorithm = config.algorithm;
    this._bitLength = config.bitLength;
    this._createdAtFilter = config.createdAtFilter;
    this._expirationFilter = config.expirationFilter;
    this._mode = config.mode;
    this._name = config.name;
    this._region = config.region;
    this._secretType = config.secretType;
    this._updatedAtFilter = config.updatedAtFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: true, optional: false, required: false
  private _acl = new DataVkcsKeymanagerSecretAclList(this, "acl", false);
  public get acl() {
    return this._acl;
  }

  // acl_only - computed: false, optional: true, required: false
  private _aclOnly?: boolean | cdktf.IResolvable; 
  public get aclOnly() {
    return this.getBooleanAttribute('acl_only');
  }
  public set aclOnly(value: boolean | cdktf.IResolvable) {
    this._aclOnly = value;
  }
  public resetAclOnly() {
    this._aclOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclOnlyInput() {
    return this._aclOnly;
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // bit_length - computed: true, optional: true, required: false
  private _bitLength?: number; 
  public get bitLength() {
    return this.getNumberAttribute('bit_length');
  }
  public set bitLength(value: number) {
    this._bitLength = value;
  }
  public resetBitLength() {
    this._bitLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitLengthInput() {
    return this._bitLength;
  }

  // content_types - computed: true, optional: false, required: false
  private _contentTypes = new cdktf.StringMap(this, "content_types");
  public get contentTypes() {
    return this._contentTypes;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_at_filter - computed: false, optional: true, required: false
  private _createdAtFilter?: string; 
  public get createdAtFilter() {
    return this.getStringAttribute('created_at_filter');
  }
  public set createdAtFilter(value: string) {
    this._createdAtFilter = value;
  }
  public resetCreatedAtFilter() {
    this._createdAtFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtFilterInput() {
    return this._createdAtFilter;
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getStringAttribute('creator_id');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // expiration_filter - computed: false, optional: true, required: false
  private _expirationFilter?: string; 
  public get expirationFilter() {
    return this.getStringAttribute('expiration_filter');
  }
  public set expirationFilter(value: string) {
    this._expirationFilter = value;
  }
  public resetExpirationFilter() {
    this._expirationFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationFilterInput() {
    return this._expirationFilter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // payload_content_encoding - computed: true, optional: false, required: false
  public get payloadContentEncoding() {
    return this.getStringAttribute('payload_content_encoding');
  }

  // payload_content_type - computed: true, optional: false, required: false
  public get payloadContentType() {
    return this.getStringAttribute('payload_content_type');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }

  // secret_type - computed: true, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_at_filter - computed: false, optional: true, required: false
  private _updatedAtFilter?: string; 
  public get updatedAtFilter() {
    return this.getStringAttribute('updated_at_filter');
  }
  public set updatedAtFilter(value: string) {
    this._updatedAtFilter = value;
  }
  public resetUpdatedAtFilter() {
    this._updatedAtFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtFilterInput() {
    return this._updatedAtFilter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_only: cdktf.booleanToTerraform(this._aclOnly),
      algorithm: cdktf.stringToTerraform(this._algorithm),
      bit_length: cdktf.numberToTerraform(this._bitLength),
      created_at_filter: cdktf.stringToTerraform(this._createdAtFilter),
      expiration_filter: cdktf.stringToTerraform(this._expirationFilter),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      secret_type: cdktf.stringToTerraform(this._secretType),
      updated_at_filter: cdktf.stringToTerraform(this._updatedAtFilter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_only: {
        value: cdktf.booleanToHclTerraform(this._aclOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bit_length: {
        value: cdktf.numberToHclTerraform(this._bitLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_at_filter: {
        value: cdktf.stringToHclTerraform(this._createdAtFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_filter: {
        value: cdktf.stringToHclTerraform(this._expirationFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_type: {
        value: cdktf.stringToHclTerraform(this._secretType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at_filter: {
        value: cdktf.stringToHclTerraform(this._updatedAtFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
