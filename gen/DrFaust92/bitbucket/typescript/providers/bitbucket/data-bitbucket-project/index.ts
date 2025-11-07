// https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBitbucketProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Project description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#description DataBitbucketProject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#id DataBitbucketProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project is private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#is_private DataBitbucketProject#is_private}
  */
  readonly isPrivate?: boolean | cdktf.IResolvable;
  /**
  * Project key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#key DataBitbucketProject#key}
  */
  readonly key: string;
  /**
  * Project workspace slug or {UUID}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#workspace DataBitbucketProject#workspace}
  */
  readonly workspace: string;
  /**
  * link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#link DataBitbucketProject#link}
  */
  readonly link?: DataBitbucketProjectLink;
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#owner DataBitbucketProject#owner}
  */
  readonly owner?: DataBitbucketProjectOwner[] | cdktf.IResolvable;
}
export interface DataBitbucketProjectLinkAvatar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#href DataBitbucketProject#href}
  */
  readonly href?: string;
}

export function dataBitbucketProjectLinkAvatarToTerraform(struct?: DataBitbucketProjectLinkAvatarOutputReference | DataBitbucketProjectLinkAvatar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function dataBitbucketProjectLinkAvatarToHclTerraform(struct?: DataBitbucketProjectLinkAvatarOutputReference | DataBitbucketProjectLinkAvatar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataBitbucketProjectLinkAvatarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataBitbucketProjectLinkAvatar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBitbucketProjectLinkAvatar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: true, required: false
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
export interface DataBitbucketProjectLink {
  /**
  * avatar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#avatar DataBitbucketProject#avatar}
  */
  readonly avatar?: DataBitbucketProjectLinkAvatar;
}

export function dataBitbucketProjectLinkToTerraform(struct?: DataBitbucketProjectLinkOutputReference | DataBitbucketProjectLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avatar: dataBitbucketProjectLinkAvatarToTerraform(struct!.avatar),
  }
}


export function dataBitbucketProjectLinkToHclTerraform(struct?: DataBitbucketProjectLinkOutputReference | DataBitbucketProjectLink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avatar: {
      value: dataBitbucketProjectLinkAvatarToHclTerraform(struct!.avatar),
      isBlock: true,
      type: "list",
      storageClassType: "DataBitbucketProjectLinkAvatarList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBitbucketProjectLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataBitbucketProjectLink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avatar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avatar = this._avatar?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBitbucketProjectLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avatar.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avatar.internalValue = value.avatar;
    }
  }

  // avatar - computed: false, optional: true, required: false
  private _avatar = new DataBitbucketProjectLinkAvatarOutputReference(this, "avatar");
  public get avatar() {
    return this._avatar;
  }
  public putAvatar(value: DataBitbucketProjectLinkAvatar) {
    this._avatar.internalValue = value;
  }
  public resetAvatar() {
    this._avatar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarInput() {
    return this._avatar.internalValue;
  }
}
export interface DataBitbucketProjectOwner {
}

export function dataBitbucketProjectOwnerToTerraform(struct?: DataBitbucketProjectOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBitbucketProjectOwnerToHclTerraform(struct?: DataBitbucketProjectOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBitbucketProjectOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBitbucketProjectOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBitbucketProjectOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataBitbucketProjectOwnerList extends cdktf.ComplexList {
  public internalValue? : DataBitbucketProjectOwner[] | cdktf.IResolvable

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
  public get(index: number): DataBitbucketProjectOwnerOutputReference {
    return new DataBitbucketProjectOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project bitbucket_project}
*/
export class DataBitbucketProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitbucket_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBitbucketProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBitbucketProject to import
  * @param importFromId The id of the existing DataBitbucketProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBitbucketProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitbucket_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/bitbucket/2.50.0/docs/data-sources/project bitbucket_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBitbucketProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataBitbucketProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'bitbucket_project',
      terraformGeneratorMetadata: {
        providerName: 'bitbucket',
        providerVersion: '2.50.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._isPrivate = config.isPrivate;
    this._key = config.key;
    this._workspace = config.workspace;
    this._link.internalValue = config.link;
    this._owner.internalValue = config.owner;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // has_publicly_visible_repos - computed: true, optional: false, required: false
  public get hasPubliclyVisibleRepos() {
    return this.getBooleanAttribute('has_publicly_visible_repos');
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

  // is_private - computed: true, optional: true, required: false
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  public resetIsPrivate() {
    this._isPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // link - computed: false, optional: true, required: false
  private _link = new DataBitbucketProjectLinkOutputReference(this, "link");
  public get link() {
    return this._link;
  }
  public putLink(value: DataBitbucketProjectLink) {
    this._link.internalValue = value;
  }
  public resetLink() {
    this._link.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new DataBitbucketProjectOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DataBitbucketProjectOwner[] | cdktf.IResolvable) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      key: cdktf.stringToTerraform(this._key),
      workspace: cdktf.stringToTerraform(this._workspace),
      link: dataBitbucketProjectLinkToTerraform(this._link.internalValue),
      owner: cdktf.listMapper(dataBitbucketProjectOwnerToTerraform, true)(this._owner.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link: {
        value: dataBitbucketProjectLinkToHclTerraform(this._link.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataBitbucketProjectLinkList",
      },
      owner: {
        value: cdktf.listMapperHcl(dataBitbucketProjectOwnerToHclTerraform, true)(this._owner.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataBitbucketProjectOwnerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
