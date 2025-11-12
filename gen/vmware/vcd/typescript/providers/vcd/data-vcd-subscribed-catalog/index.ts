// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdSubscribedCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#id DataVcdSubscribedCatalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#name DataVcdSubscribedCatalog#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#org DataVcdSubscribedCatalog#org}
  */
  readonly org?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#filter DataVcdSubscribedCatalog#filter}
  */
  readonly filter?: DataVcdSubscribedCatalogFilter;
}
export interface DataVcdSubscribedCatalogFilterMetadata {
  /**
  * True if is a metadata@SYSTEM key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#is_system DataVcdSubscribedCatalog#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Metadata key (field name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#key DataVcdSubscribedCatalog#key}
  */
  readonly key: string;
  /**
  * Type of metadata value (needed only if "use_api_search" is true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#type DataVcdSubscribedCatalog#type}
  */
  readonly type?: string;
  /**
  * If true, will search the vCD using native metadata query (without regular expressions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#use_api_search DataVcdSubscribedCatalog#use_api_search}
  */
  readonly useApiSearch?: boolean | cdktf.IResolvable;
  /**
  * Metadata value (can be a regular expression if "use_api_search" is false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#value DataVcdSubscribedCatalog#value}
  */
  readonly value: string;
}

export function dataVcdSubscribedCatalogFilterMetadataToTerraform(struct?: DataVcdSubscribedCatalogFilterMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    use_api_search: cdktf.booleanToTerraform(struct!.useApiSearch),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataVcdSubscribedCatalogFilterMetadataToHclTerraform(struct?: DataVcdSubscribedCatalogFilterMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_api_search: {
      value: cdktf.booleanToHclTerraform(struct!.useApiSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVcdSubscribedCatalogFilterMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdSubscribedCatalogFilterMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useApiSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.useApiSearch = this._useApiSearch;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdSubscribedCatalogFilterMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSystem = undefined;
      this._key = undefined;
      this._type = undefined;
      this._useApiSearch = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSystem = value.isSystem;
      this._key = value.key;
      this._type = value.type;
      this._useApiSearch = value.useApiSearch;
      this._value = value.value;
    }
  }

  // is_system - computed: false, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_api_search - computed: false, optional: true, required: false
  private _useApiSearch?: boolean | cdktf.IResolvable; 
  public get useApiSearch() {
    return this.getBooleanAttribute('use_api_search');
  }
  public set useApiSearch(value: boolean | cdktf.IResolvable) {
    this._useApiSearch = value;
  }
  public resetUseApiSearch() {
    this._useApiSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useApiSearchInput() {
    return this._useApiSearch;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataVcdSubscribedCatalogFilterMetadataList extends cdktf.ComplexList {
  public internalValue? : DataVcdSubscribedCatalogFilterMetadata[] | cdktf.IResolvable

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
  public get(index: number): DataVcdSubscribedCatalogFilterMetadataOutputReference {
    return new DataVcdSubscribedCatalogFilterMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdSubscribedCatalogFilter {
  /**
  * Search by date comparison ({>|>=|<|<=|==} yyyy-mm-dd[ hh[:mm[:ss]]])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#date DataVcdSubscribedCatalog#date}
  */
  readonly date?: string;
  /**
  * Retrieves the oldest item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#earliest DataVcdSubscribedCatalog#earliest}
  */
  readonly earliest?: boolean | cdktf.IResolvable;
  /**
  * Retrieves the newest item
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#latest DataVcdSubscribedCatalog#latest}
  */
  readonly latest?: boolean | cdktf.IResolvable;
  /**
  * Search by name with a regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#name_regex DataVcdSubscribedCatalog#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#metadata DataVcdSubscribedCatalog#metadata}
  */
  readonly metadata?: DataVcdSubscribedCatalogFilterMetadata[] | cdktf.IResolvable;
}

export function dataVcdSubscribedCatalogFilterToTerraform(struct?: DataVcdSubscribedCatalogFilterOutputReference | DataVcdSubscribedCatalogFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    earliest: cdktf.booleanToTerraform(struct!.earliest),
    latest: cdktf.booleanToTerraform(struct!.latest),
    name_regex: cdktf.stringToTerraform(struct!.nameRegex),
    metadata: cdktf.listMapper(dataVcdSubscribedCatalogFilterMetadataToTerraform, true)(struct!.metadata),
  }
}


export function dataVcdSubscribedCatalogFilterToHclTerraform(struct?: DataVcdSubscribedCatalogFilterOutputReference | DataVcdSubscribedCatalogFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    earliest: {
      value: cdktf.booleanToHclTerraform(struct!.earliest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    latest: {
      value: cdktf.booleanToHclTerraform(struct!.latest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_regex: {
      value: cdktf.stringToHclTerraform(struct!.nameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.listMapperHcl(dataVcdSubscribedCatalogFilterMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "DataVcdSubscribedCatalogFilterMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVcdSubscribedCatalogFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataVcdSubscribedCatalogFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._earliest !== undefined) {
      hasAnyValues = true;
      internalValueResult.earliest = this._earliest;
    }
    if (this._latest !== undefined) {
      hasAnyValues = true;
      internalValueResult.latest = this._latest;
    }
    if (this._nameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegex = this._nameRegex;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdSubscribedCatalogFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._date = undefined;
      this._earliest = undefined;
      this._latest = undefined;
      this._nameRegex = undefined;
      this._metadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._date = value.date;
      this._earliest = value.earliest;
      this._latest = value.latest;
      this._nameRegex = value.nameRegex;
      this._metadata.internalValue = value.metadata;
    }
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // earliest - computed: false, optional: true, required: false
  private _earliest?: boolean | cdktf.IResolvable; 
  public get earliest() {
    return this.getBooleanAttribute('earliest');
  }
  public set earliest(value: boolean | cdktf.IResolvable) {
    this._earliest = value;
  }
  public resetEarliest() {
    this._earliest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earliestInput() {
    return this._earliest;
  }

  // latest - computed: false, optional: true, required: false
  private _latest?: boolean | cdktf.IResolvable; 
  public get latest() {
    return this.getBooleanAttribute('latest');
  }
  public set latest(value: boolean | cdktf.IResolvable) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataVcdSubscribedCatalogFilterMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataVcdSubscribedCatalogFilterMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog vcd_subscribed_catalog}
*/
export class DataVcdSubscribedCatalog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_subscribed_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdSubscribedCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdSubscribedCatalog to import
  * @param importFromId The id of the existing DataVcdSubscribedCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdSubscribedCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_subscribed_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/subscribed_catalog vcd_subscribed_catalog} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdSubscribedCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdSubscribedCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_subscribed_catalog',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._org = config.org;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_version - computed: true, optional: false, required: false
  public get catalogVersion() {
    return this.getNumberAttribute('catalog_version');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // make_local_copy - computed: true, optional: false, required: false
  public get makeLocalCopy() {
    return this.getBooleanAttribute('make_local_copy');
  }

  // media_item_list - computed: true, optional: false, required: false
  public get mediaItemList() {
    return this.getListAttribute('media_item_list');
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

  // storage_profile_id - computed: true, optional: false, required: false
  public get storageProfileId() {
    return this.getStringAttribute('storage_profile_id');
  }

  // subscription_url - computed: true, optional: false, required: false
  public get subscriptionUrl() {
    return this.getStringAttribute('subscription_url');
  }

  // vapp_template_list - computed: true, optional: false, required: false
  public get vappTemplateList() {
    return this.getListAttribute('vapp_template_list');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataVcdSubscribedCatalogFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataVcdSubscribedCatalogFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      filter: dataVcdSubscribedCatalogFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataVcdSubscribedCatalogFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataVcdSubscribedCatalogFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
