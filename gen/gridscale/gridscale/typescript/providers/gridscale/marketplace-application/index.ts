// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MarketplaceApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Category of marketplace application. Accepted values: "CMS", "project management", "Adminpanel", "Collaboration", "Cloud Storage", "Archiving"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#category MarketplaceApplication#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#id MarketplaceApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_advices MarketplaceApplication#meta_advices}
  */
  readonly metaAdvices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_author MarketplaceApplication#meta_author}
  */
  readonly metaAuthor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_components MarketplaceApplication#meta_components}
  */
  readonly metaComponents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_features MarketplaceApplication#meta_features}
  */
  readonly metaFeatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_hints MarketplaceApplication#meta_hints}
  */
  readonly metaHints?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_icon MarketplaceApplication#meta_icon}
  */
  readonly metaIcon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_license MarketplaceApplication#meta_license}
  */
  readonly metaLicense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_os MarketplaceApplication#meta_os}
  */
  readonly metaOs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_overview MarketplaceApplication#meta_overview}
  */
  readonly metaOverview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#meta_terms_of_use MarketplaceApplication#meta_terms_of_use}
  */
  readonly metaTermsOfUse?: string;
  /**
  * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#name MarketplaceApplication#name}
  */
  readonly name: string;
  /**
  * Path to the images for the application, must be in .gz format and started with s3//
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#object_storage_path MarketplaceApplication#object_storage_path}
  */
  readonly objectStoragePath: string;
  /**
  * Whether you want to publish your application or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#publish MarketplaceApplication#publish}
  */
  readonly publish?: boolean | cdktf.IResolvable;
  /**
  * Number of server's cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#setup_cores MarketplaceApplication#setup_cores}
  */
  readonly setupCores: number;
  /**
  * The capacity of server's memory in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#setup_memory MarketplaceApplication#setup_memory}
  */
  readonly setupMemory: number;
  /**
  * The capacity of server's storage in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#setup_storage_capacity MarketplaceApplication#setup_storage_capacity}
  */
  readonly setupStorageCapacity: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#timeouts MarketplaceApplication#timeouts}
  */
  readonly timeouts?: MarketplaceApplicationTimeouts;
}
export interface MarketplaceApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#create MarketplaceApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#delete MarketplaceApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#update MarketplaceApplication#update}
  */
  readonly update?: string;
}

export function marketplaceApplicationTimeoutsToTerraform(struct?: MarketplaceApplicationTimeouts | cdktf.IResolvable): any {
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


export function marketplaceApplicationTimeoutsToHclTerraform(struct?: MarketplaceApplicationTimeouts | cdktf.IResolvable): any {
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

export class MarketplaceApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MarketplaceApplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MarketplaceApplicationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application gridscale_marketplace_application}
*/
export class MarketplaceApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_marketplace_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MarketplaceApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MarketplaceApplication to import
  * @param importFromId The id of the existing MarketplaceApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MarketplaceApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_marketplace_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/marketplace_application gridscale_marketplace_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MarketplaceApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: MarketplaceApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_marketplace_application',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._id = config.id;
    this._metaAdvices = config.metaAdvices;
    this._metaAuthor = config.metaAuthor;
    this._metaComponents = config.metaComponents;
    this._metaFeatures = config.metaFeatures;
    this._metaHints = config.metaHints;
    this._metaIcon = config.metaIcon;
    this._metaLicense = config.metaLicense;
    this._metaOs = config.metaOs;
    this._metaOverview = config.metaOverview;
    this._metaTermsOfUse = config.metaTermsOfUse;
    this._name = config.name;
    this._objectStoragePath = config.objectStoragePath;
    this._publish = config.publish;
    this._setupCores = config.setupCores;
    this._setupMemory = config.setupMemory;
    this._setupStorageCapacity = config.setupStorageCapacity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // is_application_owner - computed: true, optional: false, required: false
  public get isApplicationOwner() {
    return this.getBooleanAttribute('is_application_owner');
  }

  // is_publish_global - computed: true, optional: false, required: false
  public get isPublishGlobal() {
    return this.getBooleanAttribute('is_publish_global');
  }

  // is_publish_global_requested - computed: true, optional: false, required: false
  public get isPublishGlobalRequested() {
    return this.getBooleanAttribute('is_publish_global_requested');
  }

  // is_publish_requested - computed: true, optional: false, required: false
  public get isPublishRequested() {
    return this.getBooleanAttribute('is_publish_requested');
  }

  // is_published - computed: true, optional: false, required: false
  public get isPublished() {
    return this.getBooleanAttribute('is_published');
  }

  // meta_advices - computed: false, optional: true, required: false
  private _metaAdvices?: string; 
  public get metaAdvices() {
    return this.getStringAttribute('meta_advices');
  }
  public set metaAdvices(value: string) {
    this._metaAdvices = value;
  }
  public resetMetaAdvices() {
    this._metaAdvices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaAdvicesInput() {
    return this._metaAdvices;
  }

  // meta_author - computed: false, optional: true, required: false
  private _metaAuthor?: string; 
  public get metaAuthor() {
    return this.getStringAttribute('meta_author');
  }
  public set metaAuthor(value: string) {
    this._metaAuthor = value;
  }
  public resetMetaAuthor() {
    this._metaAuthor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaAuthorInput() {
    return this._metaAuthor;
  }

  // meta_components - computed: false, optional: true, required: false
  private _metaComponents?: string[]; 
  public get metaComponents() {
    return cdktf.Fn.tolist(this.getListAttribute('meta_components'));
  }
  public set metaComponents(value: string[]) {
    this._metaComponents = value;
  }
  public resetMetaComponents() {
    this._metaComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaComponentsInput() {
    return this._metaComponents;
  }

  // meta_features - computed: false, optional: true, required: false
  private _metaFeatures?: string; 
  public get metaFeatures() {
    return this.getStringAttribute('meta_features');
  }
  public set metaFeatures(value: string) {
    this._metaFeatures = value;
  }
  public resetMetaFeatures() {
    this._metaFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaFeaturesInput() {
    return this._metaFeatures;
  }

  // meta_hints - computed: false, optional: true, required: false
  private _metaHints?: string; 
  public get metaHints() {
    return this.getStringAttribute('meta_hints');
  }
  public set metaHints(value: string) {
    this._metaHints = value;
  }
  public resetMetaHints() {
    this._metaHints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaHintsInput() {
    return this._metaHints;
  }

  // meta_icon - computed: false, optional: true, required: false
  private _metaIcon?: string; 
  public get metaIcon() {
    return this.getStringAttribute('meta_icon');
  }
  public set metaIcon(value: string) {
    this._metaIcon = value;
  }
  public resetMetaIcon() {
    this._metaIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaIconInput() {
    return this._metaIcon;
  }

  // meta_license - computed: false, optional: true, required: false
  private _metaLicense?: string; 
  public get metaLicense() {
    return this.getStringAttribute('meta_license');
  }
  public set metaLicense(value: string) {
    this._metaLicense = value;
  }
  public resetMetaLicense() {
    this._metaLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaLicenseInput() {
    return this._metaLicense;
  }

  // meta_os - computed: false, optional: true, required: false
  private _metaOs?: string; 
  public get metaOs() {
    return this.getStringAttribute('meta_os');
  }
  public set metaOs(value: string) {
    this._metaOs = value;
  }
  public resetMetaOs() {
    this._metaOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaOsInput() {
    return this._metaOs;
  }

  // meta_overview - computed: false, optional: true, required: false
  private _metaOverview?: string; 
  public get metaOverview() {
    return this.getStringAttribute('meta_overview');
  }
  public set metaOverview(value: string) {
    this._metaOverview = value;
  }
  public resetMetaOverview() {
    this._metaOverview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaOverviewInput() {
    return this._metaOverview;
  }

  // meta_terms_of_use - computed: false, optional: true, required: false
  private _metaTermsOfUse?: string; 
  public get metaTermsOfUse() {
    return this.getStringAttribute('meta_terms_of_use');
  }
  public set metaTermsOfUse(value: string) {
    this._metaTermsOfUse = value;
  }
  public resetMetaTermsOfUse() {
    this._metaTermsOfUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaTermsOfUseInput() {
    return this._metaTermsOfUse;
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

  // object_storage_path - computed: false, optional: false, required: true
  private _objectStoragePath?: string; 
  public get objectStoragePath() {
    return this.getStringAttribute('object_storage_path');
  }
  public set objectStoragePath(value: string) {
    this._objectStoragePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStoragePathInput() {
    return this._objectStoragePath;
  }

  // publish - computed: false, optional: true, required: false
  private _publish?: boolean | cdktf.IResolvable; 
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktf.IResolvable) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // publish_global_requested_date - computed: true, optional: false, required: false
  public get publishGlobalRequestedDate() {
    return this.getStringAttribute('publish_global_requested_date');
  }

  // publish_requested_date - computed: true, optional: false, required: false
  public get publishRequestedDate() {
    return this.getStringAttribute('publish_requested_date');
  }

  // published_date - computed: true, optional: false, required: false
  public get publishedDate() {
    return this.getStringAttribute('published_date');
  }

  // published_global_date - computed: true, optional: false, required: false
  public get publishedGlobalDate() {
    return this.getStringAttribute('published_global_date');
  }

  // setup_cores - computed: false, optional: false, required: true
  private _setupCores?: number; 
  public get setupCores() {
    return this.getNumberAttribute('setup_cores');
  }
  public set setupCores(value: number) {
    this._setupCores = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setupCoresInput() {
    return this._setupCores;
  }

  // setup_memory - computed: false, optional: false, required: true
  private _setupMemory?: number; 
  public get setupMemory() {
    return this.getNumberAttribute('setup_memory');
  }
  public set setupMemory(value: number) {
    this._setupMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setupMemoryInput() {
    return this._setupMemory;
  }

  // setup_storage_capacity - computed: false, optional: false, required: true
  private _setupStorageCapacity?: number; 
  public get setupStorageCapacity() {
    return this.getNumberAttribute('setup_storage_capacity');
  }
  public set setupStorageCapacity(value: number) {
    this._setupStorageCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setupStorageCapacityInput() {
    return this._setupStorageCapacity;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unique_hash - computed: true, optional: false, required: false
  public get uniqueHash() {
    return this.getStringAttribute('unique_hash');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MarketplaceApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MarketplaceApplicationTimeouts) {
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
      category: cdktf.stringToTerraform(this._category),
      id: cdktf.stringToTerraform(this._id),
      meta_advices: cdktf.stringToTerraform(this._metaAdvices),
      meta_author: cdktf.stringToTerraform(this._metaAuthor),
      meta_components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metaComponents),
      meta_features: cdktf.stringToTerraform(this._metaFeatures),
      meta_hints: cdktf.stringToTerraform(this._metaHints),
      meta_icon: cdktf.stringToTerraform(this._metaIcon),
      meta_license: cdktf.stringToTerraform(this._metaLicense),
      meta_os: cdktf.stringToTerraform(this._metaOs),
      meta_overview: cdktf.stringToTerraform(this._metaOverview),
      meta_terms_of_use: cdktf.stringToTerraform(this._metaTermsOfUse),
      name: cdktf.stringToTerraform(this._name),
      object_storage_path: cdktf.stringToTerraform(this._objectStoragePath),
      publish: cdktf.booleanToTerraform(this._publish),
      setup_cores: cdktf.numberToTerraform(this._setupCores),
      setup_memory: cdktf.numberToTerraform(this._setupMemory),
      setup_storage_capacity: cdktf.numberToTerraform(this._setupStorageCapacity),
      timeouts: marketplaceApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      meta_advices: {
        value: cdktf.stringToHclTerraform(this._metaAdvices),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_author: {
        value: cdktf.stringToHclTerraform(this._metaAuthor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._metaComponents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      meta_features: {
        value: cdktf.stringToHclTerraform(this._metaFeatures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_hints: {
        value: cdktf.stringToHclTerraform(this._metaHints),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_icon: {
        value: cdktf.stringToHclTerraform(this._metaIcon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_license: {
        value: cdktf.stringToHclTerraform(this._metaLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_os: {
        value: cdktf.stringToHclTerraform(this._metaOs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_overview: {
        value: cdktf.stringToHclTerraform(this._metaOverview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_terms_of_use: {
        value: cdktf.stringToHclTerraform(this._metaTermsOfUse),
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
      object_storage_path: {
        value: cdktf.stringToHclTerraform(this._objectStoragePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish: {
        value: cdktf.booleanToHclTerraform(this._publish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      setup_cores: {
        value: cdktf.numberToHclTerraform(this._setupCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      setup_memory: {
        value: cdktf.numberToHclTerraform(this._setupMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      setup_storage_capacity: {
        value: cdktf.numberToHclTerraform(this._setupStorageCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: marketplaceApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MarketplaceApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
