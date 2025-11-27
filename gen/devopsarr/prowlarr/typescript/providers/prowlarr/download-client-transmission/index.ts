// https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DownloadClientTransmissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add paused flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#add_paused DownloadClientTransmission#add_paused}
  */
  readonly addPaused?: boolean | cdktf.IResolvable;
  /**
  * List of mapped categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#categories DownloadClientTransmission#categories}
  */
  readonly categories?: DownloadClientTransmissionCategories[] | cdktf.IResolvable;
  /**
  * Category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#category DownloadClientTransmission#category}
  */
  readonly category?: string;
  /**
  * Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#directory DownloadClientTransmission#directory}
  */
  readonly directory?: string;
  /**
  * Enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#enable DownloadClientTransmission#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#host DownloadClientTransmission#host}
  */
  readonly host?: string;
  /**
  * Priority. `0` Last, `1` First.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#item_priority DownloadClientTransmission#item_priority}
  */
  readonly itemPriority?: number;
  /**
  * Download Client name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#name DownloadClientTransmission#name}
  */
  readonly name: string;
  /**
  * password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#password DownloadClientTransmission#password}
  */
  readonly password?: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#port DownloadClientTransmission#port}
  */
  readonly port?: number;
  /**
  * Priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#priority DownloadClientTransmission#priority}
  */
  readonly priority?: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#tags DownloadClientTransmission#tags}
  */
  readonly tags?: number[];
  /**
  * Base URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#url_base DownloadClientTransmission#url_base}
  */
  readonly urlBase?: string;
  /**
  * Use SSL flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#use_ssl DownloadClientTransmission#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#username DownloadClientTransmission#username}
  */
  readonly username?: string;
}
export interface DownloadClientTransmissionCategories {
  /**
  * List of categories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#categories DownloadClientTransmission#categories}
  */
  readonly categories?: number[];
  /**
  * Name of client category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#name DownloadClientTransmission#name}
  */
  readonly name?: string;
}

export function downloadClientTransmissionCategoriesToTerraform(struct?: DownloadClientTransmissionCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.categories),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function downloadClientTransmissionCategoriesToHclTerraform(struct?: DownloadClientTransmissionCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.categories),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
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

export class DownloadClientTransmissionCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DownloadClientTransmissionCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DownloadClientTransmissionCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categories = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categories = value.categories;
      this._name = value.name;
    }
  }

  // categories - computed: true, optional: true, required: false
  private _categories?: number[]; 
  public get categories() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('categories')));
  }
  public set categories(value: number[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
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

export class DownloadClientTransmissionCategoriesList extends cdktf.ComplexList {
  public internalValue? : DownloadClientTransmissionCategories[] | cdktf.IResolvable

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
  public get(index: number): DownloadClientTransmissionCategoriesOutputReference {
    return new DownloadClientTransmissionCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission prowlarr_download_client_transmission}
*/
export class DownloadClientTransmission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_download_client_transmission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DownloadClientTransmission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DownloadClientTransmission to import
  * @param importFromId The id of the existing DownloadClientTransmission that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DownloadClientTransmission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_download_client_transmission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/download_client_transmission prowlarr_download_client_transmission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DownloadClientTransmissionConfig
  */
  public constructor(scope: Construct, id: string, config: DownloadClientTransmissionConfig) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_download_client_transmission',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addPaused = config.addPaused;
    this._categories.internalValue = config.categories;
    this._category = config.category;
    this._directory = config.directory;
    this._enable = config.enable;
    this._host = config.host;
    this._itemPriority = config.itemPriority;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._priority = config.priority;
    this._tags = config.tags;
    this._urlBase = config.urlBase;
    this._useSsl = config.useSsl;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_paused - computed: true, optional: true, required: false
  private _addPaused?: boolean | cdktf.IResolvable; 
  public get addPaused() {
    return this.getBooleanAttribute('add_paused');
  }
  public set addPaused(value: boolean | cdktf.IResolvable) {
    this._addPaused = value;
  }
  public resetAddPaused() {
    this._addPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPausedInput() {
    return this._addPaused;
  }

  // categories - computed: true, optional: true, required: false
  private _categories = new DownloadClientTransmissionCategoriesList(this, "categories", true);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: DownloadClientTransmissionCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // directory - computed: true, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // item_priority - computed: true, optional: true, required: false
  private _itemPriority?: number; 
  public get itemPriority() {
    return this.getNumberAttribute('item_priority');
  }
  public set itemPriority(value: number) {
    this._itemPriority = value;
  }
  public resetItemPriority() {
    this._itemPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemPriorityInput() {
    return this._itemPriority;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url_base - computed: true, optional: true, required: false
  private _urlBase?: string; 
  public get urlBase() {
    return this.getStringAttribute('url_base');
  }
  public set urlBase(value: string) {
    this._urlBase = value;
  }
  public resetUrlBase() {
    this._urlBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBaseInput() {
    return this._urlBase;
  }

  // use_ssl - computed: true, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // username - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_paused: cdktf.booleanToTerraform(this._addPaused),
      categories: cdktf.listMapper(downloadClientTransmissionCategoriesToTerraform, false)(this._categories.internalValue),
      category: cdktf.stringToTerraform(this._category),
      directory: cdktf.stringToTerraform(this._directory),
      enable: cdktf.booleanToTerraform(this._enable),
      host: cdktf.stringToTerraform(this._host),
      item_priority: cdktf.numberToTerraform(this._itemPriority),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      priority: cdktf.numberToTerraform(this._priority),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      url_base: cdktf.stringToTerraform(this._urlBase),
      use_ssl: cdktf.booleanToTerraform(this._useSsl),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_paused: {
        value: cdktf.booleanToHclTerraform(this._addPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      categories: {
        value: cdktf.listMapperHcl(downloadClientTransmissionCategoriesToHclTerraform, false)(this._categories.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DownloadClientTransmissionCategoriesList",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item_priority: {
        value: cdktf.numberToHclTerraform(this._itemPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      url_base: {
        value: cdktf.stringToHclTerraform(this._urlBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ssl: {
        value: cdktf.booleanToHclTerraform(this._useSsl),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
