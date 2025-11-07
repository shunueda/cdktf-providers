// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryBowerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier for this repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group#name RepositoryBowerGroup#name}
  */
  readonly name: string;
  /**
  * Whether this repository accepts incoming requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group#online RepositoryBowerGroup#online}
  */
  readonly online?: boolean | cdktf.IResolvable;
  /**
  * group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group#group RepositoryBowerGroup#group}
  */
  readonly group: RepositoryBowerGroupGroup;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group#storage RepositoryBowerGroup#storage}
  */
  readonly storage: RepositoryBowerGroupStorage;
}
export interface RepositoryBowerGroupGroup {
  /**
  * Member repositories names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group#member_names RepositoryBowerGroup#member_names}
  */
  readonly memberNames: string[];
}

export function repositoryBowerGroupGroupToTerraform(struct?: RepositoryBowerGroupGroupOutputReference | RepositoryBowerGroupGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.memberNames),
  }
}


export function repositoryBowerGroupGroupToHclTerraform(struct?: RepositoryBowerGroupGroupOutputReference | RepositoryBowerGroupGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.memberNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryBowerGroupGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryBowerGroupGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberNames = this._memberNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryBowerGroupGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memberNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memberNames = value.memberNames;
    }
  }

  // member_names - computed: false, optional: false, required: true
  private _memberNames?: string[]; 
  public get memberNames() {
    return this.getListAttribute('member_names');
  }
  public set memberNames(value: string[]) {
    this._memberNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNamesInput() {
    return this._memberNames;
  }
}
export interface RepositoryBowerGroupStorage {
  /**
  * Blob store used to store repository contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group#blob_store_name RepositoryBowerGroup#blob_store_name}
  */
  readonly blobStoreName: string;
  /**
  * Whether to validate uploaded content's MIME type appropriate for the repository format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group#strict_content_type_validation RepositoryBowerGroup#strict_content_type_validation}
  */
  readonly strictContentTypeValidation?: boolean | cdktf.IResolvable;
}

export function repositoryBowerGroupStorageToTerraform(struct?: RepositoryBowerGroupStorageOutputReference | RepositoryBowerGroupStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_store_name: cdktf.stringToTerraform(struct!.blobStoreName),
    strict_content_type_validation: cdktf.booleanToTerraform(struct!.strictContentTypeValidation),
  }
}


export function repositoryBowerGroupStorageToHclTerraform(struct?: RepositoryBowerGroupStorageOutputReference | RepositoryBowerGroupStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_store_name: {
      value: cdktf.stringToHclTerraform(struct!.blobStoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_content_type_validation: {
      value: cdktf.booleanToHclTerraform(struct!.strictContentTypeValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryBowerGroupStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryBowerGroupStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobStoreName = this._blobStoreName;
    }
    if (this._strictContentTypeValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictContentTypeValidation = this._strictContentTypeValidation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryBowerGroupStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobStoreName = undefined;
      this._strictContentTypeValidation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobStoreName = value.blobStoreName;
      this._strictContentTypeValidation = value.strictContentTypeValidation;
    }
  }

  // blob_store_name - computed: false, optional: false, required: true
  private _blobStoreName?: string; 
  public get blobStoreName() {
    return this.getStringAttribute('blob_store_name');
  }
  public set blobStoreName(value: string) {
    this._blobStoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobStoreNameInput() {
    return this._blobStoreName;
  }

  // strict_content_type_validation - computed: false, optional: true, required: false
  private _strictContentTypeValidation?: boolean | cdktf.IResolvable; 
  public get strictContentTypeValidation() {
    return this.getBooleanAttribute('strict_content_type_validation');
  }
  public set strictContentTypeValidation(value: boolean | cdktf.IResolvable) {
    this._strictContentTypeValidation = value;
  }
  public resetStrictContentTypeValidation() {
    this._strictContentTypeValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictContentTypeValidationInput() {
    return this._strictContentTypeValidation;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group nexus_repository_bower_group}
*/
export class RepositoryBowerGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_repository_bower_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryBowerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryBowerGroup to import
  * @param importFromId The id of the existing RepositoryBowerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryBowerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_repository_bower_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/repository_bower_group nexus_repository_bower_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryBowerGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryBowerGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_repository_bower_group',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._online = config.online;
    this._group.internalValue = config.group;
    this._storage.internalValue = config.storage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // online - computed: false, optional: true, required: false
  private _online?: boolean | cdktf.IResolvable; 
  public get online() {
    return this.getBooleanAttribute('online');
  }
  public set online(value: boolean | cdktf.IResolvable) {
    this._online = value;
  }
  public resetOnline() {
    this._online = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineInput() {
    return this._online;
  }

  // group - computed: false, optional: false, required: true
  private _group = new RepositoryBowerGroupGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: RepositoryBowerGroupGroup) {
    this._group.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new RepositoryBowerGroupStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: RepositoryBowerGroupStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      online: cdktf.booleanToTerraform(this._online),
      group: repositoryBowerGroupGroupToTerraform(this._group.internalValue),
      storage: repositoryBowerGroupStorageToTerraform(this._storage.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      online: {
        value: cdktf.booleanToHclTerraform(this._online),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: repositoryBowerGroupGroupToHclTerraform(this._group.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryBowerGroupGroupList",
      },
      storage: {
        value: repositoryBowerGroupStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryBowerGroupStorageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
