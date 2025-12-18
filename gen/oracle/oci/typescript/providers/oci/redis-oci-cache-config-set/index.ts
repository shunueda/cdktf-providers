// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisOciCacheConfigSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#compartment_id RedisOciCacheConfigSet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#defined_tags RedisOciCacheConfigSet#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#description RedisOciCacheConfigSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#display_name RedisOciCacheConfigSet#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#freeform_tags RedisOciCacheConfigSet#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#id RedisOciCacheConfigSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#software_version RedisOciCacheConfigSet#software_version}
  */
  readonly softwareVersion: string;
  /**
  * configuration_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#configuration_details RedisOciCacheConfigSet#configuration_details}
  */
  readonly configurationDetails: RedisOciCacheConfigSetConfigurationDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#timeouts RedisOciCacheConfigSet#timeouts}
  */
  readonly timeouts?: RedisOciCacheConfigSetTimeouts;
}
export interface RedisOciCacheConfigSetConfigurationDetailsItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#config_key RedisOciCacheConfigSet#config_key}
  */
  readonly configKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#config_value RedisOciCacheConfigSet#config_value}
  */
  readonly configValue: string;
}

export function redisOciCacheConfigSetConfigurationDetailsItemsToTerraform(struct?: RedisOciCacheConfigSetConfigurationDetailsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_key: cdktf.stringToTerraform(struct!.configKey),
    config_value: cdktf.stringToTerraform(struct!.configValue),
  }
}


export function redisOciCacheConfigSetConfigurationDetailsItemsToHclTerraform(struct?: RedisOciCacheConfigSetConfigurationDetailsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_key: {
      value: cdktf.stringToHclTerraform(struct!.configKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_value: {
      value: cdktf.stringToHclTerraform(struct!.configValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisOciCacheConfigSetConfigurationDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedisOciCacheConfigSetConfigurationDetailsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.configKey = this._configKey;
    }
    if (this._configValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValue = this._configValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisOciCacheConfigSetConfigurationDetailsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configKey = undefined;
      this._configValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configKey = value.configKey;
      this._configValue = value.configValue;
    }
  }

  // config_key - computed: false, optional: false, required: true
  private _configKey?: string; 
  public get configKey() {
    return this.getStringAttribute('config_key');
  }
  public set configKey(value: string) {
    this._configKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configKeyInput() {
    return this._configKey;
  }

  // config_value - computed: false, optional: false, required: true
  private _configValue?: string; 
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
  public set configValue(value: string) {
    this._configValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configValueInput() {
    return this._configValue;
  }
}

export class RedisOciCacheConfigSetConfigurationDetailsItemsList extends cdktf.ComplexList {
  public internalValue? : RedisOciCacheConfigSetConfigurationDetailsItems[] | cdktf.IResolvable

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
  public get(index: number): RedisOciCacheConfigSetConfigurationDetailsItemsOutputReference {
    return new RedisOciCacheConfigSetConfigurationDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedisOciCacheConfigSetConfigurationDetails {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#items RedisOciCacheConfigSet#items}
  */
  readonly items: RedisOciCacheConfigSetConfigurationDetailsItems[] | cdktf.IResolvable;
}

export function redisOciCacheConfigSetConfigurationDetailsToTerraform(struct?: RedisOciCacheConfigSetConfigurationDetailsOutputReference | RedisOciCacheConfigSetConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(redisOciCacheConfigSetConfigurationDetailsItemsToTerraform, true)(struct!.items),
  }
}


export function redisOciCacheConfigSetConfigurationDetailsToHclTerraform(struct?: RedisOciCacheConfigSetConfigurationDetailsOutputReference | RedisOciCacheConfigSetConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(redisOciCacheConfigSetConfigurationDetailsItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "RedisOciCacheConfigSetConfigurationDetailsItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisOciCacheConfigSetConfigurationDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RedisOciCacheConfigSetConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisOciCacheConfigSetConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new RedisOciCacheConfigSetConfigurationDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: RedisOciCacheConfigSetConfigurationDetailsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface RedisOciCacheConfigSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#create RedisOciCacheConfigSet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#delete RedisOciCacheConfigSet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#update RedisOciCacheConfigSet#update}
  */
  readonly update?: string;
}

export function redisOciCacheConfigSetTimeoutsToTerraform(struct?: RedisOciCacheConfigSetTimeouts | cdktf.IResolvable): any {
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


export function redisOciCacheConfigSetTimeoutsToHclTerraform(struct?: RedisOciCacheConfigSetTimeouts | cdktf.IResolvable): any {
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

export class RedisOciCacheConfigSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisOciCacheConfigSetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RedisOciCacheConfigSetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set oci_redis_oci_cache_config_set}
*/
export class RedisOciCacheConfigSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_redis_oci_cache_config_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisOciCacheConfigSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisOciCacheConfigSet to import
  * @param importFromId The id of the existing RedisOciCacheConfigSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisOciCacheConfigSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_redis_oci_cache_config_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/redis_oci_cache_config_set oci_redis_oci_cache_config_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisOciCacheConfigSetConfig
  */
  public constructor(scope: Construct, id: string, config: RedisOciCacheConfigSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_redis_oci_cache_config_set',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._softwareVersion = config.softwareVersion;
    this._configurationDetails.internalValue = config.configurationDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // default_config_set_id - computed: true, optional: false, required: false
  public get defaultConfigSetId() {
    return this.getStringAttribute('default_config_set_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // software_version - computed: false, optional: false, required: true
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // configuration_details - computed: false, optional: false, required: true
  private _configurationDetails = new RedisOciCacheConfigSetConfigurationDetailsOutputReference(this, "configuration_details");
  public get configurationDetails() {
    return this._configurationDetails;
  }
  public putConfigurationDetails(value: RedisOciCacheConfigSetConfigurationDetails) {
    this._configurationDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationDetailsInput() {
    return this._configurationDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RedisOciCacheConfigSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RedisOciCacheConfigSetTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      configuration_details: redisOciCacheConfigSetConfigurationDetailsToTerraform(this._configurationDetails.internalValue),
      timeouts: redisOciCacheConfigSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_details: {
        value: redisOciCacheConfigSetConfigurationDetailsToHclTerraform(this._configurationDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RedisOciCacheConfigSetConfigurationDetailsList",
      },
      timeouts: {
        value: redisOciCacheConfigSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisOciCacheConfigSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
