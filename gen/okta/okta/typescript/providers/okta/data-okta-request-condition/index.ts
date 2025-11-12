// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaRequestConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition#id DataOktaRequestCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The id of the resource in Okta ID format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition#resource_id DataOktaRequestCondition#resource_id}
  */
  readonly resourceId: string;
  /**
  * access_scope_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition#access_scope_settings DataOktaRequestCondition#access_scope_settings}
  */
  readonly accessScopeSettings?: DataOktaRequestConditionAccessScopeSettings;
  /**
  * requester_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition#requester_settings DataOktaRequestCondition#requester_settings}
  */
  readonly requesterSettings?: DataOktaRequestConditionRequesterSettings;
}
export interface DataOktaRequestConditionAccessScopeSettingsIds {
}

export function dataOktaRequestConditionAccessScopeSettingsIdsToTerraform(struct?: DataOktaRequestConditionAccessScopeSettingsIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestConditionAccessScopeSettingsIdsToHclTerraform(struct?: DataOktaRequestConditionAccessScopeSettingsIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestConditionAccessScopeSettingsIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaRequestConditionAccessScopeSettingsIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestConditionAccessScopeSettingsIds | cdktf.IResolvable | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOktaRequestConditionAccessScopeSettingsIdsList extends cdktf.ComplexList {
  public internalValue? : DataOktaRequestConditionAccessScopeSettingsIds[] | cdktf.IResolvable

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
  public get(index: number): DataOktaRequestConditionAccessScopeSettingsIdsOutputReference {
    return new DataOktaRequestConditionAccessScopeSettingsIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaRequestConditionAccessScopeSettings {
  /**
  * ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition#ids DataOktaRequestCondition#ids}
  */
  readonly ids?: DataOktaRequestConditionAccessScopeSettingsIds[] | cdktf.IResolvable;
}

export function dataOktaRequestConditionAccessScopeSettingsToTerraform(struct?: DataOktaRequestConditionAccessScopeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(dataOktaRequestConditionAccessScopeSettingsIdsToTerraform, true)(struct!.ids),
  }
}


export function dataOktaRequestConditionAccessScopeSettingsToHclTerraform(struct?: DataOktaRequestConditionAccessScopeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(dataOktaRequestConditionAccessScopeSettingsIdsToHclTerraform, true)(struct!.ids),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaRequestConditionAccessScopeSettingsIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaRequestConditionAccessScopeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaRequestConditionAccessScopeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestConditionAccessScopeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids.internalValue = value.ids;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // ids - computed: false, optional: true, required: false
  private _ids = new DataOktaRequestConditionAccessScopeSettingsIdsList(this, "ids", false);
  public get ids() {
    return this._ids;
  }
  public putIds(value: DataOktaRequestConditionAccessScopeSettingsIds[] | cdktf.IResolvable) {
    this._ids.internalValue = value;
  }
  public resetIds() {
    this._ids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids.internalValue;
  }
}
export interface DataOktaRequestConditionRequesterSettingsIds {
}

export function dataOktaRequestConditionRequesterSettingsIdsToTerraform(struct?: DataOktaRequestConditionRequesterSettingsIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaRequestConditionRequesterSettingsIdsToHclTerraform(struct?: DataOktaRequestConditionRequesterSettingsIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaRequestConditionRequesterSettingsIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaRequestConditionRequesterSettingsIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestConditionRequesterSettingsIds | cdktf.IResolvable | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOktaRequestConditionRequesterSettingsIdsList extends cdktf.ComplexList {
  public internalValue? : DataOktaRequestConditionRequesterSettingsIds[] | cdktf.IResolvable

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
  public get(index: number): DataOktaRequestConditionRequesterSettingsIdsOutputReference {
    return new DataOktaRequestConditionRequesterSettingsIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaRequestConditionRequesterSettings {
  /**
  * ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition#ids DataOktaRequestCondition#ids}
  */
  readonly ids?: DataOktaRequestConditionRequesterSettingsIds[] | cdktf.IResolvable;
}

export function dataOktaRequestConditionRequesterSettingsToTerraform(struct?: DataOktaRequestConditionRequesterSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(dataOktaRequestConditionRequesterSettingsIdsToTerraform, true)(struct!.ids),
  }
}


export function dataOktaRequestConditionRequesterSettingsToHclTerraform(struct?: DataOktaRequestConditionRequesterSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(dataOktaRequestConditionRequesterSettingsIdsToHclTerraform, true)(struct!.ids),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaRequestConditionRequesterSettingsIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaRequestConditionRequesterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaRequestConditionRequesterSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaRequestConditionRequesterSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ids.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ids.internalValue = value.ids;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // ids - computed: false, optional: true, required: false
  private _ids = new DataOktaRequestConditionRequesterSettingsIdsList(this, "ids", false);
  public get ids() {
    return this._ids;
  }
  public putIds(value: DataOktaRequestConditionRequesterSettingsIds[] | cdktf.IResolvable) {
    this._ids.internalValue = value;
  }
  public resetIds() {
    this._ids.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition okta_request_condition}
*/
export class DataOktaRequestCondition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_request_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaRequestCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaRequestCondition to import
  * @param importFromId The id of the existing DataOktaRequestCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaRequestCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_request_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/request_condition okta_request_condition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaRequestConditionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaRequestConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_request_condition',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0',
        providerVersionConstraint: '6.4.0'
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
    this._resourceId = config.resourceId;
    this._accessScopeSettings.internalValue = config.accessScopeSettings;
    this._requesterSettings.internalValue = config.requesterSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // access_scope_settings - computed: false, optional: true, required: false
  private _accessScopeSettings = new DataOktaRequestConditionAccessScopeSettingsOutputReference(this, "access_scope_settings");
  public get accessScopeSettings() {
    return this._accessScopeSettings;
  }
  public putAccessScopeSettings(value: DataOktaRequestConditionAccessScopeSettings) {
    this._accessScopeSettings.internalValue = value;
  }
  public resetAccessScopeSettings() {
    this._accessScopeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessScopeSettingsInput() {
    return this._accessScopeSettings.internalValue;
  }

  // requester_settings - computed: false, optional: true, required: false
  private _requesterSettings = new DataOktaRequestConditionRequesterSettingsOutputReference(this, "requester_settings");
  public get requesterSettings() {
    return this._requesterSettings;
  }
  public putRequesterSettings(value: DataOktaRequestConditionRequesterSettings) {
    this._requesterSettings.internalValue = value;
  }
  public resetRequesterSettings() {
    this._requesterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterSettingsInput() {
    return this._requesterSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      access_scope_settings: dataOktaRequestConditionAccessScopeSettingsToTerraform(this._accessScopeSettings.internalValue),
      requester_settings: dataOktaRequestConditionRequesterSettingsToTerraform(this._requesterSettings.internalValue),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_scope_settings: {
        value: dataOktaRequestConditionAccessScopeSettingsToHclTerraform(this._accessScopeSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaRequestConditionAccessScopeSettings",
      },
      requester_settings: {
        value: dataOktaRequestConditionRequesterSettingsToHclTerraform(this._requesterSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaRequestConditionRequesterSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
