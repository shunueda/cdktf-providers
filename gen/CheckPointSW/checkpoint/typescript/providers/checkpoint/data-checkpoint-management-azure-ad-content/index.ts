// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementAzureAdContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Azure AD Server where to search for objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#azure_ad_name DataCheckpointManagementAzureAdContent#azure_ad_name}
  */
  readonly azureAdName?: string;
  /**
  * Unique identifier of the Azure AD Server where to search for objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#azure_ad_uid DataCheckpointManagementAzureAdContent#azure_ad_uid}
  */
  readonly azureAdUid?: string;
  /**
  * Return results matching the specified filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#filter DataCheckpointManagementAzureAdContent#filter}
  */
  readonly filter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#id DataCheckpointManagementAzureAdContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximal number of returned results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#limit DataCheckpointManagementAzureAdContent#limit}
  */
  readonly limit?: number;
  /**
  * Number of the results to initially skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#offset DataCheckpointManagementAzureAdContent#offset}
  */
  readonly offset?: number;
  /**
  * Return result matching the unique identifier of the object on the Azure AD Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#uid_in_azure_ad DataCheckpointManagementAzureAdContent#uid_in_azure_ad}
  */
  readonly uidInAzureAd?: string;
  /**
  * order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#order DataCheckpointManagementAzureAdContent#order}
  */
  readonly order?: DataCheckpointManagementAzureAdContentOrder[] | cdktf.IResolvable;
}
export interface DataCheckpointManagementAzureAdContentObjectsAdditionalProperties {
}

export function dataCheckpointManagementAzureAdContentObjectsAdditionalPropertiesToTerraform(struct?: DataCheckpointManagementAzureAdContentObjectsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementAzureAdContentObjectsAdditionalPropertiesToHclTerraform(struct?: DataCheckpointManagementAzureAdContentObjectsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementAzureAdContentObjectsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementAzureAdContentObjectsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementAzureAdContentObjectsAdditionalProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCheckpointManagementAzureAdContentObjectsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementAzureAdContentObjectsAdditionalPropertiesOutputReference {
    return new DataCheckpointManagementAzureAdContentObjectsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementAzureAdContentObjects {
}

export function dataCheckpointManagementAzureAdContentObjectsToTerraform(struct?: DataCheckpointManagementAzureAdContentObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementAzureAdContentObjectsToHclTerraform(struct?: DataCheckpointManagementAzureAdContentObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementAzureAdContentObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementAzureAdContentObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementAzureAdContentObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new DataCheckpointManagementAzureAdContentObjectsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // azure_ad_object - computed: true, optional: false, required: false
  public get azureAdObject() {
    return this.getStringAttribute('azure_ad_object');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_in_azure_ad - computed: true, optional: false, required: false
  public get nameInAzureAd() {
    return this.getStringAttribute('name_in_azure_ad');
  }

  // type_in_azure_ad - computed: true, optional: false, required: false
  public get typeInAzureAd() {
    return this.getStringAttribute('type_in_azure_ad');
  }

  // uid_in_azure_ad - computed: true, optional: false, required: false
  public get uidInAzureAd() {
    return this.getStringAttribute('uid_in_azure_ad');
  }
}

export class DataCheckpointManagementAzureAdContentObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementAzureAdContentObjectsOutputReference {
    return new DataCheckpointManagementAzureAdContentObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementAzureAdContentOrder {
  /**
  * Sorts results by the given field in ascending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#asc DataCheckpointManagementAzureAdContent#asc}
  */
  readonly asc?: string;
  /**
  * Sorts results by the given field in descending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#desc DataCheckpointManagementAzureAdContent#desc}
  */
  readonly desc?: string;
}

export function dataCheckpointManagementAzureAdContentOrderToTerraform(struct?: DataCheckpointManagementAzureAdContentOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asc: cdktf.stringToTerraform(struct!.asc),
    desc: cdktf.stringToTerraform(struct!.desc),
  }
}


export function dataCheckpointManagementAzureAdContentOrderToHclTerraform(struct?: DataCheckpointManagementAzureAdContentOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asc: {
      value: cdktf.stringToHclTerraform(struct!.asc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCheckpointManagementAzureAdContentOrderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementAzureAdContentOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asc !== undefined) {
      hasAnyValues = true;
      internalValueResult.asc = this._asc;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementAzureAdContentOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asc = undefined;
      this._desc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asc = value.asc;
      this._desc = value.desc;
    }
  }

  // asc - computed: false, optional: true, required: false
  private _asc?: string; 
  public get asc() {
    return this.getStringAttribute('asc');
  }
  public set asc(value: string) {
    this._asc = value;
  }
  public resetAsc() {
    this._asc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascInput() {
    return this._asc;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }
}

export class DataCheckpointManagementAzureAdContentOrderList extends cdktf.ComplexList {
  public internalValue? : DataCheckpointManagementAzureAdContentOrder[] | cdktf.IResolvable

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
  public get(index: number): DataCheckpointManagementAzureAdContentOrderOutputReference {
    return new DataCheckpointManagementAzureAdContentOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content checkpoint_management_azure_ad_content}
*/
export class DataCheckpointManagementAzureAdContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_azure_ad_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementAzureAdContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementAzureAdContent to import
  * @param importFromId The id of the existing DataCheckpointManagementAzureAdContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementAzureAdContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_azure_ad_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_azure_ad_content checkpoint_management_azure_ad_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementAzureAdContentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementAzureAdContentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_azure_ad_content',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureAdName = config.azureAdName;
    this._azureAdUid = config.azureAdUid;
    this._filter = config.filter;
    this._id = config.id;
    this._limit = config.limit;
    this._offset = config.offset;
    this._uidInAzureAd = config.uidInAzureAd;
    this._order.internalValue = config.order;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_ad_name - computed: false, optional: true, required: false
  private _azureAdName?: string; 
  public get azureAdName() {
    return this.getStringAttribute('azure_ad_name');
  }
  public set azureAdName(value: string) {
    this._azureAdName = value;
  }
  public resetAzureAdName() {
    this._azureAdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdNameInput() {
    return this._azureAdName;
  }

  // azure_ad_uid - computed: false, optional: true, required: false
  private _azureAdUid?: string; 
  public get azureAdUid() {
    return this.getStringAttribute('azure_ad_uid');
  }
  public set azureAdUid(value: string) {
    this._azureAdUid = value;
  }
  public resetAzureAdUid() {
    this._azureAdUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdUidInput() {
    return this._azureAdUid;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // objects - computed: true, optional: false, required: false
  private _objects = new DataCheckpointManagementAzureAdContentObjectsList(this, "objects", false);
  public get objects() {
    return this._objects;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // uid_in_azure_ad - computed: false, optional: true, required: false
  private _uidInAzureAd?: string; 
  public get uidInAzureAd() {
    return this.getStringAttribute('uid_in_azure_ad');
  }
  public set uidInAzureAd(value: string) {
    this._uidInAzureAd = value;
  }
  public resetUidInAzureAd() {
    this._uidInAzureAd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInAzureAdInput() {
    return this._uidInAzureAd;
  }

  // order - computed: false, optional: true, required: false
  private _order = new DataCheckpointManagementAzureAdContentOrderList(this, "order", false);
  public get order() {
    return this._order;
  }
  public putOrder(value: DataCheckpointManagementAzureAdContentOrder[] | cdktf.IResolvable) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_ad_name: cdktf.stringToTerraform(this._azureAdName),
      azure_ad_uid: cdktf.stringToTerraform(this._azureAdUid),
      filter: cdktf.hashMapper(cdktf.stringToTerraform)(this._filter),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
      uid_in_azure_ad: cdktf.stringToTerraform(this._uidInAzureAd),
      order: cdktf.listMapper(dataCheckpointManagementAzureAdContentOrderToTerraform, true)(this._order.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_ad_name: {
        value: cdktf.stringToHclTerraform(this._azureAdName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_ad_uid: {
        value: cdktf.stringToHclTerraform(this._azureAdUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filter),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uid_in_azure_ad: {
        value: cdktf.stringToHclTerraform(this._uidInAzureAd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.listMapperHcl(dataCheckpointManagementAzureAdContentOrderToHclTerraform, true)(this._order.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCheckpointManagementAzureAdContentOrderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
