// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubscribedCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, the subscribed catalog will attempt canceling failed tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#cancel_failed_tasks SubscribedCatalog#cancel_failed_tasks}
  */
  readonly cancelFailedTasks?: boolean | cdktf.IResolvable;
  /**
  * When destroying use delete_force=True with delete_recursive=True to remove a catalog and any objects it contains, regardless of their state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#delete_force SubscribedCatalog#delete_force}
  */
  readonly deleteForce?: boolean | cdktf.IResolvable;
  /**
  * When destroying use delete_recursive=True to remove the catalog and any objects it contains that are in a state that normally allows removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#delete_recursive SubscribedCatalog#delete_recursive}
  */
  readonly deleteRecursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#id SubscribedCatalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, subscription to a catalog creates a local copy of all items. Defaults to false, which does not create a local copy of catalog items unless a sync operation is performed. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#make_local_copy SubscribedCatalog#make_local_copy}
  */
  readonly makeLocalCopy?: boolean | cdktf.IResolvable;
  /**
  * The name of the catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#name SubscribedCatalog#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#org SubscribedCatalog#org}
  */
  readonly org?: string;
  /**
  * Optional storage profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#storage_profile_id SubscribedCatalog#storage_profile_id}
  */
  readonly storageProfileId?: string;
  /**
  * If true, saves list of tasks to file for later update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#store_tasks SubscribedCatalog#store_tasks}
  */
  readonly storeTasks?: boolean | cdktf.IResolvable;
  /**
  * An optional password to access the catalog. Only ASCII characters are allowed in a valid password. Passing in six asterisks '******' indicates to keep current password. Passing in null or empty string indicates to remove password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#subscription_password SubscribedCatalog#subscription_password}
  */
  readonly subscriptionPassword?: string;
  /**
  * The URL to subscribe to the external catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#subscription_url SubscribedCatalog#subscription_url}
  */
  readonly subscriptionUrl: string;
  /**
  * If true, synchronise this catalog and all items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#sync_all SubscribedCatalog#sync_all}
  */
  readonly syncAll?: boolean | cdktf.IResolvable;
  /**
  * If true, synchronises all media items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#sync_all_media_items SubscribedCatalog#sync_all_media_items}
  */
  readonly syncAllMediaItems?: boolean | cdktf.IResolvable;
  /**
  * If true, synchronises all vApp templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#sync_all_vapp_templates SubscribedCatalog#sync_all_vapp_templates}
  */
  readonly syncAllVappTemplates?: boolean | cdktf.IResolvable;
  /**
  * If true, synchronise this catalog. This operation fetches the list of items. If `make_local_copy` is set, it also fetches the items data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#sync_catalog SubscribedCatalog#sync_catalog}
  */
  readonly syncCatalog?: boolean | cdktf.IResolvable;
  /**
  * Synchronises media items from this list of names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#sync_media_items SubscribedCatalog#sync_media_items}
  */
  readonly syncMediaItems?: string[];
  /**
  * Boolean value that shows if sync should be performed on every refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#sync_on_refresh SubscribedCatalog#sync_on_refresh}
  */
  readonly syncOnRefresh?: boolean | cdktf.IResolvable;
  /**
  * Synchronises vApp templates from this list of names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#sync_vapp_templates SubscribedCatalog#sync_vapp_templates}
  */
  readonly syncVappTemplates?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog vcd_subscribed_catalog}
*/
export class SubscribedCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_subscribed_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SubscribedCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SubscribedCatalog to import
  * @param importFromId The id of the existing SubscribedCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SubscribedCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_subscribed_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/subscribed_catalog vcd_subscribed_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubscribedCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: SubscribedCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_subscribed_catalog',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cancelFailedTasks = config.cancelFailedTasks;
    this._deleteForce = config.deleteForce;
    this._deleteRecursive = config.deleteRecursive;
    this._id = config.id;
    this._makeLocalCopy = config.makeLocalCopy;
    this._name = config.name;
    this._org = config.org;
    this._storageProfileId = config.storageProfileId;
    this._storeTasks = config.storeTasks;
    this._subscriptionPassword = config.subscriptionPassword;
    this._subscriptionUrl = config.subscriptionUrl;
    this._syncAll = config.syncAll;
    this._syncAllMediaItems = config.syncAllMediaItems;
    this._syncAllVappTemplates = config.syncAllVappTemplates;
    this._syncCatalog = config.syncCatalog;
    this._syncMediaItems = config.syncMediaItems;
    this._syncOnRefresh = config.syncOnRefresh;
    this._syncVappTemplates = config.syncVappTemplates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cancel_failed_tasks - computed: false, optional: true, required: false
  private _cancelFailedTasks?: boolean | cdktf.IResolvable; 
  public get cancelFailedTasks() {
    return this.getBooleanAttribute('cancel_failed_tasks');
  }
  public set cancelFailedTasks(value: boolean | cdktf.IResolvable) {
    this._cancelFailedTasks = value;
  }
  public resetCancelFailedTasks() {
    this._cancelFailedTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelFailedTasksInput() {
    return this._cancelFailedTasks;
  }

  // catalog_version - computed: true, optional: false, required: false
  public get catalogVersion() {
    return this.getNumberAttribute('catalog_version');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // failed_tasks - computed: true, optional: false, required: false
  public get failedTasks() {
    return this.getListAttribute('failed_tasks');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // is_local - computed: true, optional: false, required: false
  public get isLocal() {
    return this.getBooleanAttribute('is_local');
  }

  // is_published - computed: true, optional: false, required: false
  public get isPublished() {
    return this.getBooleanAttribute('is_published');
  }

  // is_shared - computed: true, optional: false, required: false
  public get isShared() {
    return this.getBooleanAttribute('is_shared');
  }

  // make_local_copy - computed: false, optional: true, required: false
  private _makeLocalCopy?: boolean | cdktf.IResolvable; 
  public get makeLocalCopy() {
    return this.getBooleanAttribute('make_local_copy');
  }
  public set makeLocalCopy(value: boolean | cdktf.IResolvable) {
    this._makeLocalCopy = value;
  }
  public resetMakeLocalCopy() {
    this._makeLocalCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get makeLocalCopyInput() {
    return this._makeLocalCopy;
  }

  // media_item_list - computed: true, optional: false, required: false
  public get mediaItemList() {
    return this.getListAttribute('media_item_list');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // number_of_media - computed: true, optional: false, required: false
  public get numberOfMedia() {
    return this.getNumberAttribute('number_of_media');
  }

  // number_of_vapp_templates - computed: true, optional: false, required: false
  public get numberOfVappTemplates() {
    return this.getNumberAttribute('number_of_vapp_templates');
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // owner_name - computed: true, optional: false, required: false
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }

  // publish_subscription_type - computed: true, optional: false, required: false
  public get publishSubscriptionType() {
    return this.getStringAttribute('publish_subscription_type');
  }

  // running_tasks - computed: true, optional: false, required: false
  public get runningTasks() {
    return this.getListAttribute('running_tasks');
  }

  // storage_profile_id - computed: false, optional: true, required: false
  private _storageProfileId?: string; 
  public get storageProfileId() {
    return this.getStringAttribute('storage_profile_id');
  }
  public set storageProfileId(value: string) {
    this._storageProfileId = value;
  }
  public resetStorageProfileId() {
    this._storageProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileIdInput() {
    return this._storageProfileId;
  }

  // store_tasks - computed: false, optional: true, required: false
  private _storeTasks?: boolean | cdktf.IResolvable; 
  public get storeTasks() {
    return this.getBooleanAttribute('store_tasks');
  }
  public set storeTasks(value: boolean | cdktf.IResolvable) {
    this._storeTasks = value;
  }
  public resetStoreTasks() {
    this._storeTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeTasksInput() {
    return this._storeTasks;
  }

  // subscription_password - computed: true, optional: true, required: false
  private _subscriptionPassword?: string; 
  public get subscriptionPassword() {
    return this.getStringAttribute('subscription_password');
  }
  public set subscriptionPassword(value: string) {
    this._subscriptionPassword = value;
  }
  public resetSubscriptionPassword() {
    this._subscriptionPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionPasswordInput() {
    return this._subscriptionPassword;
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

  // sync_all - computed: false, optional: true, required: false
  private _syncAll?: boolean | cdktf.IResolvable; 
  public get syncAll() {
    return this.getBooleanAttribute('sync_all');
  }
  public set syncAll(value: boolean | cdktf.IResolvable) {
    this._syncAll = value;
  }
  public resetSyncAll() {
    this._syncAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncAllInput() {
    return this._syncAll;
  }

  // sync_all_media_items - computed: false, optional: true, required: false
  private _syncAllMediaItems?: boolean | cdktf.IResolvable; 
  public get syncAllMediaItems() {
    return this.getBooleanAttribute('sync_all_media_items');
  }
  public set syncAllMediaItems(value: boolean | cdktf.IResolvable) {
    this._syncAllMediaItems = value;
  }
  public resetSyncAllMediaItems() {
    this._syncAllMediaItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncAllMediaItemsInput() {
    return this._syncAllMediaItems;
  }

  // sync_all_vapp_templates - computed: false, optional: true, required: false
  private _syncAllVappTemplates?: boolean | cdktf.IResolvable; 
  public get syncAllVappTemplates() {
    return this.getBooleanAttribute('sync_all_vapp_templates');
  }
  public set syncAllVappTemplates(value: boolean | cdktf.IResolvable) {
    this._syncAllVappTemplates = value;
  }
  public resetSyncAllVappTemplates() {
    this._syncAllVappTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncAllVappTemplatesInput() {
    return this._syncAllVappTemplates;
  }

  // sync_catalog - computed: false, optional: true, required: false
  private _syncCatalog?: boolean | cdktf.IResolvable; 
  public get syncCatalog() {
    return this.getBooleanAttribute('sync_catalog');
  }
  public set syncCatalog(value: boolean | cdktf.IResolvable) {
    this._syncCatalog = value;
  }
  public resetSyncCatalog() {
    this._syncCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncCatalogInput() {
    return this._syncCatalog;
  }

  // sync_media_items - computed: false, optional: true, required: false
  private _syncMediaItems?: string[]; 
  public get syncMediaItems() {
    return this.getListAttribute('sync_media_items');
  }
  public set syncMediaItems(value: string[]) {
    this._syncMediaItems = value;
  }
  public resetSyncMediaItems() {
    this._syncMediaItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMediaItemsInput() {
    return this._syncMediaItems;
  }

  // sync_on_refresh - computed: false, optional: true, required: false
  private _syncOnRefresh?: boolean | cdktf.IResolvable; 
  public get syncOnRefresh() {
    return this.getBooleanAttribute('sync_on_refresh');
  }
  public set syncOnRefresh(value: boolean | cdktf.IResolvable) {
    this._syncOnRefresh = value;
  }
  public resetSyncOnRefresh() {
    this._syncOnRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOnRefreshInput() {
    return this._syncOnRefresh;
  }

  // sync_vapp_templates - computed: false, optional: true, required: false
  private _syncVappTemplates?: string[]; 
  public get syncVappTemplates() {
    return this.getListAttribute('sync_vapp_templates');
  }
  public set syncVappTemplates(value: string[]) {
    this._syncVappTemplates = value;
  }
  public resetSyncVappTemplates() {
    this._syncVappTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncVappTemplatesInput() {
    return this._syncVappTemplates;
  }

  // tasks_file_name - computed: true, optional: false, required: false
  public get tasksFileName() {
    return this.getStringAttribute('tasks_file_name');
  }

  // vapp_template_list - computed: true, optional: false, required: false
  public get vappTemplateList() {
    return this.getListAttribute('vapp_template_list');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cancel_failed_tasks: cdktf.booleanToTerraform(this._cancelFailedTasks),
      delete_force: cdktf.booleanToTerraform(this._deleteForce),
      delete_recursive: cdktf.booleanToTerraform(this._deleteRecursive),
      id: cdktf.stringToTerraform(this._id),
      make_local_copy: cdktf.booleanToTerraform(this._makeLocalCopy),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      storage_profile_id: cdktf.stringToTerraform(this._storageProfileId),
      store_tasks: cdktf.booleanToTerraform(this._storeTasks),
      subscription_password: cdktf.stringToTerraform(this._subscriptionPassword),
      subscription_url: cdktf.stringToTerraform(this._subscriptionUrl),
      sync_all: cdktf.booleanToTerraform(this._syncAll),
      sync_all_media_items: cdktf.booleanToTerraform(this._syncAllMediaItems),
      sync_all_vapp_templates: cdktf.booleanToTerraform(this._syncAllVappTemplates),
      sync_catalog: cdktf.booleanToTerraform(this._syncCatalog),
      sync_media_items: cdktf.listMapper(cdktf.stringToTerraform, false)(this._syncMediaItems),
      sync_on_refresh: cdktf.booleanToTerraform(this._syncOnRefresh),
      sync_vapp_templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._syncVappTemplates),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cancel_failed_tasks: {
        value: cdktf.booleanToHclTerraform(this._cancelFailedTasks),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      make_local_copy: {
        value: cdktf.booleanToHclTerraform(this._makeLocalCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_profile_id: {
        value: cdktf.stringToHclTerraform(this._storageProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_tasks: {
        value: cdktf.booleanToHclTerraform(this._storeTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscription_password: {
        value: cdktf.stringToHclTerraform(this._subscriptionPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_url: {
        value: cdktf.stringToHclTerraform(this._subscriptionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_all: {
        value: cdktf.booleanToHclTerraform(this._syncAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_all_media_items: {
        value: cdktf.booleanToHclTerraform(this._syncAllMediaItems),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_all_vapp_templates: {
        value: cdktf.booleanToHclTerraform(this._syncAllVappTemplates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_catalog: {
        value: cdktf.booleanToHclTerraform(this._syncCatalog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_media_items: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._syncMediaItems),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sync_on_refresh: {
        value: cdktf.booleanToHclTerraform(this._syncOnRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_vapp_templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._syncVappTemplates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
