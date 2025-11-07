// https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSplunkconfigAppIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids#id DataSplunkconfigAppIds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * exclude_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids#exclude_tag DataSplunkconfigAppIds#exclude_tag}
  */
  readonly excludeTag?: DataSplunkconfigAppIdsExcludeTag[] | cdktf.IResolvable;
  /**
  * require_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids#require_tag DataSplunkconfigAppIds#require_tag}
  */
  readonly requireTag?: DataSplunkconfigAppIdsRequireTag[] | cdktf.IResolvable;
}
export interface DataSplunkconfigAppIdsExcludeTag {
  /**
  * Name of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids#name DataSplunkconfigAppIds#name}
  */
  readonly name: string;
  /**
  * Values of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids#values DataSplunkconfigAppIds#values}
  */
  readonly values: string[];
}

export function dataSplunkconfigAppIdsExcludeTagToTerraform(struct?: DataSplunkconfigAppIdsExcludeTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataSplunkconfigAppIdsExcludeTagToHclTerraform(struct?: DataSplunkconfigAppIdsExcludeTag | cdktf.IResolvable): any {
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

export class DataSplunkconfigAppIdsExcludeTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSplunkconfigAppIdsExcludeTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSplunkconfigAppIdsExcludeTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

export class DataSplunkconfigAppIdsExcludeTagList extends cdktf.ComplexList {
  public internalValue? : DataSplunkconfigAppIdsExcludeTag[] | cdktf.IResolvable

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
  public get(index: number): DataSplunkconfigAppIdsExcludeTagOutputReference {
    return new DataSplunkconfigAppIdsExcludeTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSplunkconfigAppIdsRequireTag {
  /**
  * Name of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids#name DataSplunkconfigAppIds#name}
  */
  readonly name: string;
  /**
  * Values of the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids#values DataSplunkconfigAppIds#values}
  */
  readonly values: string[];
}

export function dataSplunkconfigAppIdsRequireTagToTerraform(struct?: DataSplunkconfigAppIdsRequireTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataSplunkconfigAppIdsRequireTagToHclTerraform(struct?: DataSplunkconfigAppIdsRequireTag | cdktf.IResolvable): any {
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

export class DataSplunkconfigAppIdsRequireTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSplunkconfigAppIdsRequireTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSplunkconfigAppIdsRequireTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

export class DataSplunkconfigAppIdsRequireTagList extends cdktf.ComplexList {
  public internalValue? : DataSplunkconfigAppIdsRequireTag[] | cdktf.IResolvable

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
  public get(index: number): DataSplunkconfigAppIdsRequireTagOutputReference {
    return new DataSplunkconfigAppIdsRequireTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids splunkconfig_app_ids}
*/
export class DataSplunkconfigAppIds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "splunkconfig_app_ids";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSplunkconfigAppIds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSplunkconfigAppIds to import
  * @param importFromId The id of the existing DataSplunkconfigAppIds that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSplunkconfigAppIds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "splunkconfig_app_ids", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/splunkconfig/1.7.4/docs/data-sources/app_ids splunkconfig_app_ids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSplunkconfigAppIdsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSplunkconfigAppIdsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'splunkconfig_app_ids',
      terraformGeneratorMetadata: {
        providerName: 'splunkconfig',
        providerVersion: '1.7.4'
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
    this._excludeTag.internalValue = config.excludeTag;
    this._requireTag.internalValue = config.requireTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_ids - computed: true, optional: false, required: false
  public get appIds() {
    return this.getListAttribute('app_ids');
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

  // exclude_tag - computed: false, optional: true, required: false
  private _excludeTag = new DataSplunkconfigAppIdsExcludeTagList(this, "exclude_tag", false);
  public get excludeTag() {
    return this._excludeTag;
  }
  public putExcludeTag(value: DataSplunkconfigAppIdsExcludeTag[] | cdktf.IResolvable) {
    this._excludeTag.internalValue = value;
  }
  public resetExcludeTag() {
    this._excludeTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagInput() {
    return this._excludeTag.internalValue;
  }

  // require_tag - computed: false, optional: true, required: false
  private _requireTag = new DataSplunkconfigAppIdsRequireTagList(this, "require_tag", false);
  public get requireTag() {
    return this._requireTag;
  }
  public putRequireTag(value: DataSplunkconfigAppIdsRequireTag[] | cdktf.IResolvable) {
    this._requireTag.internalValue = value;
  }
  public resetRequireTag() {
    this._requireTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTagInput() {
    return this._requireTag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      exclude_tag: cdktf.listMapper(dataSplunkconfigAppIdsExcludeTagToTerraform, true)(this._excludeTag.internalValue),
      require_tag: cdktf.listMapper(dataSplunkconfigAppIdsRequireTagToTerraform, true)(this._requireTag.internalValue),
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
      exclude_tag: {
        value: cdktf.listMapperHcl(dataSplunkconfigAppIdsExcludeTagToHclTerraform, true)(this._excludeTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSplunkconfigAppIdsExcludeTagList",
      },
      require_tag: {
        value: cdktf.listMapperHcl(dataSplunkconfigAppIdsRequireTagToHclTerraform, true)(this._requireTag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSplunkconfigAppIdsRequireTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
