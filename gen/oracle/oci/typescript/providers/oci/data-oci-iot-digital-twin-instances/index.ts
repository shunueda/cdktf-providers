// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIotDigitalTwinInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#digital_twin_model_id DataOciIotDigitalTwinInstances#digital_twin_model_id}
  */
  readonly digitalTwinModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#digital_twin_model_spec_uri DataOciIotDigitalTwinInstances#digital_twin_model_spec_uri}
  */
  readonly digitalTwinModelSpecUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#display_name DataOciIotDigitalTwinInstances#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#id DataOciIotDigitalTwinInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#iot_domain_id DataOciIotDigitalTwinInstances#iot_domain_id}
  */
  readonly iotDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#state DataOciIotDigitalTwinInstances#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#filter DataOciIotDigitalTwinInstances#filter}
  */
  readonly filter?: DataOciIotDigitalTwinInstancesFilter[] | cdktf.IResolvable;
}
export interface DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItems {
}

export function dataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItemsToTerraform(struct?: DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItemsToHclTerraform(struct?: DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_id - computed: true, optional: false, required: false
  public get authId() {
    return this.getStringAttribute('auth_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // digital_twin_adapter_id - computed: true, optional: false, required: false
  public get digitalTwinAdapterId() {
    return this.getStringAttribute('digital_twin_adapter_id');
  }

  // digital_twin_model_id - computed: true, optional: false, required: false
  public get digitalTwinModelId() {
    return this.getStringAttribute('digital_twin_model_id');
  }

  // digital_twin_model_spec_uri - computed: true, optional: false, required: false
  public get digitalTwinModelSpecUri() {
    return this.getStringAttribute('digital_twin_model_spec_uri');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_key - computed: true, optional: false, required: false
  public get externalKey() {
    return this.getStringAttribute('external_key');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iot_domain_id - computed: true, optional: false, required: false
  public get iotDomainId() {
    return this.getStringAttribute('iot_domain_id');
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
}

export class DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItemsOutputReference {
    return new DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollection {
}

export function dataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionToTerraform(struct?: DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionToHclTerraform(struct?: DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionOutputReference {
    return new DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciIotDigitalTwinInstancesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#name DataOciIotDigitalTwinInstances#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#regex DataOciIotDigitalTwinInstances#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#values DataOciIotDigitalTwinInstances#values}
  */
  readonly values: string[];
}

export function dataOciIotDigitalTwinInstancesFilterToTerraform(struct?: DataOciIotDigitalTwinInstancesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciIotDigitalTwinInstancesFilterToHclTerraform(struct?: DataOciIotDigitalTwinInstancesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciIotDigitalTwinInstancesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciIotDigitalTwinInstancesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciIotDigitalTwinInstancesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciIotDigitalTwinInstancesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciIotDigitalTwinInstancesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciIotDigitalTwinInstancesFilterOutputReference {
    return new DataOciIotDigitalTwinInstancesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances oci_iot_digital_twin_instances}
*/
export class DataOciIotDigitalTwinInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIotDigitalTwinInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIotDigitalTwinInstances to import
  * @param importFromId The id of the existing DataOciIotDigitalTwinInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIotDigitalTwinInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_instances oci_iot_digital_twin_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIotDigitalTwinInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIotDigitalTwinInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_instances',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digitalTwinModelId = config.digitalTwinModelId;
    this._digitalTwinModelSpecUri = config.digitalTwinModelSpecUri;
    this._displayName = config.displayName;
    this._id = config.id;
    this._iotDomainId = config.iotDomainId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digital_twin_instance_collection - computed: true, optional: false, required: false
  private _digitalTwinInstanceCollection = new DataOciIotDigitalTwinInstancesDigitalTwinInstanceCollectionList(this, "digital_twin_instance_collection", false);
  public get digitalTwinInstanceCollection() {
    return this._digitalTwinInstanceCollection;
  }

  // digital_twin_model_id - computed: false, optional: true, required: false
  private _digitalTwinModelId?: string; 
  public get digitalTwinModelId() {
    return this.getStringAttribute('digital_twin_model_id');
  }
  public set digitalTwinModelId(value: string) {
    this._digitalTwinModelId = value;
  }
  public resetDigitalTwinModelId() {
    this._digitalTwinModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinModelIdInput() {
    return this._digitalTwinModelId;
  }

  // digital_twin_model_spec_uri - computed: false, optional: true, required: false
  private _digitalTwinModelSpecUri?: string; 
  public get digitalTwinModelSpecUri() {
    return this.getStringAttribute('digital_twin_model_spec_uri');
  }
  public set digitalTwinModelSpecUri(value: string) {
    this._digitalTwinModelSpecUri = value;
  }
  public resetDigitalTwinModelSpecUri() {
    this._digitalTwinModelSpecUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinModelSpecUriInput() {
    return this._digitalTwinModelSpecUri;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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

  // iot_domain_id - computed: false, optional: false, required: true
  private _iotDomainId?: string; 
  public get iotDomainId() {
    return this.getStringAttribute('iot_domain_id');
  }
  public set iotDomainId(value: string) {
    this._iotDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iotDomainIdInput() {
    return this._iotDomainId;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciIotDigitalTwinInstancesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciIotDigitalTwinInstancesFilter[] | cdktf.IResolvable) {
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
      digital_twin_model_id: cdktf.stringToTerraform(this._digitalTwinModelId),
      digital_twin_model_spec_uri: cdktf.stringToTerraform(this._digitalTwinModelSpecUri),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      iot_domain_id: cdktf.stringToTerraform(this._iotDomainId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciIotDigitalTwinInstancesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digital_twin_model_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digital_twin_model_spec_uri: {
        value: cdktf.stringToHclTerraform(this._digitalTwinModelSpecUri),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iot_domain_id: {
        value: cdktf.stringToHclTerraform(this._iotDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciIotDigitalTwinInstancesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciIotDigitalTwinInstancesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
