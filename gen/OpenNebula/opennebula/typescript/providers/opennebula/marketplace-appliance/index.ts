// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MarketplaceApplianceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Associated template that will be added to the registered object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#apptemplate64 MarketplaceAppliance#apptemplate64}
  */
  readonly apptemplate64?: string;
  /**
  * Text description of the appliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#description MarketplaceAppliance#description}
  */
  readonly description?: string;
  /**
  * Allow to enable or disable the appliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#disabled MarketplaceAppliance#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the group owning the appliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#group MarketplaceAppliance#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#id MarketplaceAppliance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lock level of the new resource: USE, MANAGE, ADMIN, ALL, UNLOCK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#lock MarketplaceAppliance#lock}
  */
  readonly lock?: string;
  /**
  * The ID of the market to host the appliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#market_id MarketplaceAppliance#market_id}
  */
  readonly marketId: number;
  /**
  * Name of the appliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#name MarketplaceAppliance#name}
  */
  readonly name: string;
  /**
  * The ID of the source image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#origin_id MarketplaceAppliance#origin_id}
  */
  readonly originId?: number;
  /**
  * Permissions for the appliance (in Unix format, owner-group-other, use-manage-admin)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#permissions MarketplaceAppliance#permissions}
  */
  readonly permissions?: string;
  /**
  * Publisher of the appliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#publisher MarketplaceAppliance#publisher}
  */
  readonly publisher?: string;
  /**
  * Add custom tags to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#tags MarketplaceAppliance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type of the app: IMAGE, VMTEMPLATE, SERVICE_TEMPLATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#type MarketplaceAppliance#type}
  */
  readonly type: string;
  /**
  * A string indicating the appliance version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#version MarketplaceAppliance#version}
  */
  readonly version?: string;
  /**
  * Creates this template pointing to the base image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#vmtemplate64 MarketplaceAppliance#vmtemplate64}
  */
  readonly vmtemplate64?: string;
  /**
  * template_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#template_section MarketplaceAppliance#template_section}
  */
  readonly templateSection?: MarketplaceApplianceTemplateSection[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#timeouts MarketplaceAppliance#timeouts}
  */
  readonly timeouts?: MarketplaceApplianceTimeouts;
}
export interface MarketplaceApplianceTemplateSection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#elements MarketplaceAppliance#elements}
  */
  readonly elements?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#name MarketplaceAppliance#name}
  */
  readonly name: string;
}

export function marketplaceApplianceTemplateSectionToTerraform(struct?: MarketplaceApplianceTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.elements),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function marketplaceApplianceTemplateSectionToHclTerraform(struct?: MarketplaceApplianceTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elements: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.elements),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class MarketplaceApplianceTemplateSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplaceApplianceTemplateSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elements !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceApplianceTemplateSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elements = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elements = value.elements;
      this._name = value.name;
    }
  }

  // elements - computed: false, optional: true, required: false
  private _elements?: { [key: string]: string }; 
  public get elements() {
    return this.getStringMapAttribute('elements');
  }
  public set elements(value: { [key: string]: string }) {
    this._elements = value;
  }
  public resetElements() {
    this._elements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements;
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
}

export class MarketplaceApplianceTemplateSectionList extends cdktf.ComplexList {
  public internalValue? : MarketplaceApplianceTemplateSection[] | cdktf.IResolvable

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
  public get(index: number): MarketplaceApplianceTemplateSectionOutputReference {
    return new MarketplaceApplianceTemplateSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplaceApplianceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#create MarketplaceAppliance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#delete MarketplaceAppliance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#update MarketplaceAppliance#update}
  */
  readonly update?: string;
}

export function marketplaceApplianceTimeoutsToTerraform(struct?: MarketplaceApplianceTimeouts | cdktf.IResolvable): any {
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


export function marketplaceApplianceTimeoutsToHclTerraform(struct?: MarketplaceApplianceTimeouts | cdktf.IResolvable): any {
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

export class MarketplaceApplianceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MarketplaceApplianceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MarketplaceApplianceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance opennebula_marketplace_appliance}
*/
export class MarketplaceAppliance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_marketplace_appliance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MarketplaceAppliance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MarketplaceAppliance to import
  * @param importFromId The id of the existing MarketplaceAppliance that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MarketplaceAppliance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_marketplace_appliance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace_appliance opennebula_marketplace_appliance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MarketplaceApplianceConfig
  */
  public constructor(scope: Construct, id: string, config: MarketplaceApplianceConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_marketplace_appliance',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apptemplate64 = config.apptemplate64;
    this._description = config.description;
    this._disabled = config.disabled;
    this._group = config.group;
    this._id = config.id;
    this._lock = config.lock;
    this._marketId = config.marketId;
    this._name = config.name;
    this._originId = config.originId;
    this._permissions = config.permissions;
    this._publisher = config.publisher;
    this._tags = config.tags;
    this._type = config.type;
    this._version = config.version;
    this._vmtemplate64 = config.vmtemplate64;
    this._templateSection.internalValue = config.templateSection;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apptemplate64 - computed: false, optional: true, required: false
  private _apptemplate64?: string; 
  public get apptemplate64() {
    return this.getStringAttribute('apptemplate64');
  }
  public set apptemplate64(value: string) {
    this._apptemplate64 = value;
  }
  public resetApptemplate64() {
    this._apptemplate64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apptemplate64Input() {
    return this._apptemplate64;
  }

  // default_tags - computed: true, optional: false, required: false
  private _defaultTags = new cdktf.StringMap(this, "default_tags");
  public get defaultTags() {
    return this._defaultTags;
  }

  // description - computed: false, optional: true, required: false
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // lock - computed: false, optional: true, required: false
  private _lock?: string; 
  public get lock() {
    return this.getStringAttribute('lock');
  }
  public set lock(value: string) {
    this._lock = value;
  }
  public resetLock() {
    this._lock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockInput() {
    return this._lock;
  }

  // market_id - computed: false, optional: false, required: true
  private _marketId?: number; 
  public get marketId() {
    return this.getNumberAttribute('market_id');
  }
  public set marketId(value: number) {
    this._marketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get marketIdInput() {
    return this._marketId;
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

  // origin_id - computed: false, optional: true, required: false
  private _originId?: number; 
  public get originId() {
    return this.getNumberAttribute('origin_id');
  }
  public set originId(value: number) {
    this._originId = value;
  }
  public resetOriginId() {
    this._originId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  public resetPublisher() {
    this._publisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vmtemplate64 - computed: false, optional: true, required: false
  private _vmtemplate64?: string; 
  public get vmtemplate64() {
    return this.getStringAttribute('vmtemplate64');
  }
  public set vmtemplate64(value: string) {
    this._vmtemplate64 = value;
  }
  public resetVmtemplate64() {
    this._vmtemplate64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmtemplate64Input() {
    return this._vmtemplate64;
  }

  // template_section - computed: false, optional: true, required: false
  private _templateSection = new MarketplaceApplianceTemplateSectionList(this, "template_section", true);
  public get templateSection() {
    return this._templateSection;
  }
  public putTemplateSection(value: MarketplaceApplianceTemplateSection[] | cdktf.IResolvable) {
    this._templateSection.internalValue = value;
  }
  public resetTemplateSection() {
    this._templateSection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSectionInput() {
    return this._templateSection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MarketplaceApplianceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MarketplaceApplianceTimeouts) {
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
      apptemplate64: cdktf.stringToTerraform(this._apptemplate64),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      lock: cdktf.stringToTerraform(this._lock),
      market_id: cdktf.numberToTerraform(this._marketId),
      name: cdktf.stringToTerraform(this._name),
      origin_id: cdktf.numberToTerraform(this._originId),
      permissions: cdktf.stringToTerraform(this._permissions),
      publisher: cdktf.stringToTerraform(this._publisher),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      vmtemplate64: cdktf.stringToTerraform(this._vmtemplate64),
      template_section: cdktf.listMapper(marketplaceApplianceTemplateSectionToTerraform, true)(this._templateSection.internalValue),
      timeouts: marketplaceApplianceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apptemplate64: {
        value: cdktf.stringToHclTerraform(this._apptemplate64),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      lock: {
        value: cdktf.stringToHclTerraform(this._lock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      market_id: {
        value: cdktf.numberToHclTerraform(this._marketId),
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
      origin_id: {
        value: cdktf.numberToHclTerraform(this._originId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publisher: {
        value: cdktf.stringToHclTerraform(this._publisher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmtemplate64: {
        value: cdktf.stringToHclTerraform(this._vmtemplate64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_section: {
        value: cdktf.listMapperHcl(marketplaceApplianceTemplateSectionToHclTerraform, true)(this._templateSection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MarketplaceApplianceTemplateSectionList",
      },
      timeouts: {
        value: marketplaceApplianceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MarketplaceApplianceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
