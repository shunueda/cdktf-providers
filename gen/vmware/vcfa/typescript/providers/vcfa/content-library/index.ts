// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContentLibraryConfig extends cdktf.TerraformMetaArguments {
  /**
  * For Tenant Content Libraries this field represents whether this Content Library should be automatically attached to all current and future namespaces in the Organization. If no value is supplied during creation then this field will default to true. If a value of false is supplied, then this Tenant Content Library will only be attached to namespaces that explicitly request it. For Provider Content Libraries this field is not needed for creation and will always be returned as true. This field cannot be updated after creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#auto_attach ContentLibrary#auto_attach}
  */
  readonly autoAttach?: boolean | cdktf.IResolvable;
  /**
  * On deletion, forcefully deletes the Content Library and its Content Library Items. Only for PROVIDER Content Libraries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#delete_force ContentLibrary#delete_force}
  */
  readonly deleteForce?: boolean | cdktf.IResolvable;
  /**
  * On deletion, deletes the Content Library, including its Content Library Items, in a single operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#delete_recursive ContentLibrary#delete_recursive}
  */
  readonly deleteRecursive?: boolean | cdktf.IResolvable;
  /**
  * The description of the Content Library
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#description ContentLibrary#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#id ContentLibrary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Content Library
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#name ContentLibrary#name}
  */
  readonly name: string;
  /**
  * The reference to the Organization that the Content Library belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#org_id ContentLibrary#org_id}
  */
  readonly orgId: string;
  /**
  * A set of Storage Class IDs used by this Content Library
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#storage_class_ids ContentLibrary#storage_class_ids}
  */
  readonly storageClassIds: string[];
  /**
  * subscription_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#subscription_config ContentLibrary#subscription_config}
  */
  readonly subscriptionConfig?: ContentLibrarySubscriptionConfig;
}
export interface ContentLibrarySubscriptionConfig {
  /**
  * Password to use to authenticate with the publisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#password ContentLibrary#password}
  */
  readonly password?: string;
  /**
  * Subscription url of this Content Library
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#subscription_url ContentLibrary#subscription_url}
  */
  readonly subscriptionUrl: string;
}

export function contentLibrarySubscriptionConfigToTerraform(struct?: ContentLibrarySubscriptionConfigOutputReference | ContentLibrarySubscriptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    subscription_url: cdktf.stringToTerraform(struct!.subscriptionUrl),
  }
}


export function contentLibrarySubscriptionConfigToHclTerraform(struct?: ContentLibrarySubscriptionConfigOutputReference | ContentLibrarySubscriptionConfig): any {
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
    subscription_url: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContentLibrarySubscriptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContentLibrarySubscriptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._subscriptionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionUrl = this._subscriptionUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContentLibrarySubscriptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._subscriptionUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._subscriptionUrl = value.subscriptionUrl;
    }
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

  // subscription_url - computed: false, optional: false, required: true
  private _subscriptionUrl?: string; 
  public get subscriptionUrl() {
    return this.getStringAttribute('subscription_url');
  }
  public set subscriptionUrl(value: string) {
    this._subscriptionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionUrlInput() {
    return this._subscriptionUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library vcfa_content_library}
*/
export class ContentLibrary extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_content_library";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContentLibrary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContentLibrary to import
  * @param importFromId The id of the existing ContentLibrary that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContentLibrary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_content_library", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/content_library vcfa_content_library} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContentLibraryConfig
  */
  public constructor(scope: Construct, id: string, config: ContentLibraryConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_content_library',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoAttach = config.autoAttach;
    this._deleteForce = config.deleteForce;
    this._deleteRecursive = config.deleteRecursive;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._storageClassIds = config.storageClassIds;
    this._subscriptionConfig.internalValue = config.subscriptionConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_attach - computed: false, optional: true, required: false
  private _autoAttach?: boolean | cdktf.IResolvable; 
  public get autoAttach() {
    return this.getBooleanAttribute('auto_attach');
  }
  public set autoAttach(value: boolean | cdktf.IResolvable) {
    this._autoAttach = value;
  }
  public resetAutoAttach() {
    this._autoAttach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAttachInput() {
    return this._autoAttach;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // delete_force - computed: false, optional: true, required: false
  private _deleteForce?: boolean | cdktf.IResolvable; 
  public get deleteForce() {
    return this.getBooleanAttribute('delete_force');
  }
  public set deleteForce(value: boolean | cdktf.IResolvable) {
    this._deleteForce = value;
  }
  public resetDeleteForce() {
    this._deleteForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteForceInput() {
    return this._deleteForce;
  }

  // delete_recursive - computed: false, optional: true, required: false
  private _deleteRecursive?: boolean | cdktf.IResolvable; 
  public get deleteRecursive() {
    return this.getBooleanAttribute('delete_recursive');
  }
  public set deleteRecursive(value: boolean | cdktf.IResolvable) {
    this._deleteRecursive = value;
  }
  public resetDeleteRecursive() {
    this._deleteRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecursiveInput() {
    return this._deleteRecursive;
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

  // is_shared - computed: true, optional: false, required: false
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }

  // is_subscribed - computed: true, optional: false, required: false
  public get isSubscribed() {
    return this.getBooleanAttribute('is_subscribed');
  }

  // library_type - computed: true, optional: false, required: false
  public get libraryType() {
    return this.getStringAttribute('library_type');
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // storage_class_ids - computed: false, optional: false, required: true
  private _storageClassIds?: string[]; 
  public get storageClassIds() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_class_ids'));
  }
  public set storageClassIds(value: string[]) {
    this._storageClassIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassIdsInput() {
    return this._storageClassIds;
  }

  // version_number - computed: true, optional: false, required: false
  public get versionNumber() {
    return this.getNumberAttribute('version_number');
  }

  // subscription_config - computed: false, optional: true, required: false
  private _subscriptionConfig = new ContentLibrarySubscriptionConfigOutputReference(this, "subscription_config");
  public get subscriptionConfig() {
    return this._subscriptionConfig;
  }
  public putSubscriptionConfig(value: ContentLibrarySubscriptionConfig) {
    this._subscriptionConfig.internalValue = value;
  }
  public resetSubscriptionConfig() {
    this._subscriptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionConfigInput() {
    return this._subscriptionConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_attach: cdktf.booleanToTerraform(this._autoAttach),
      delete_force: cdktf.booleanToTerraform(this._deleteForce),
      delete_recursive: cdktf.booleanToTerraform(this._deleteRecursive),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      storage_class_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._storageClassIds),
      subscription_config: contentLibrarySubscriptionConfigToTerraform(this._subscriptionConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_attach: {
        value: cdktf.booleanToHclTerraform(this._autoAttach),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_force: {
        value: cdktf.booleanToHclTerraform(this._deleteForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_recursive: {
        value: cdktf.booleanToHclTerraform(this._deleteRecursive),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._storageClassIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subscription_config: {
        value: contentLibrarySubscriptionConfigToHclTerraform(this._subscriptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContentLibrarySubscriptionConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
