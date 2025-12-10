// https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/location_v2_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSyntheticsLocationV2CheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/location_v2_check#id DataSyntheticsLocationV2Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/location_v2_check#location DataSyntheticsLocationV2Check#location}
  */
  readonly location: DataSyntheticsLocationV2CheckLocation[] | cdktf.IResolvable;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/location_v2_check#meta DataSyntheticsLocationV2Check#meta}
  */
  readonly meta?: DataSyntheticsLocationV2CheckMeta[] | cdktf.IResolvable;
}
export interface DataSyntheticsLocationV2CheckLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/location_v2_check#id DataSyntheticsLocationV2Check#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataSyntheticsLocationV2CheckLocationToTerraform(struct?: DataSyntheticsLocationV2CheckLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataSyntheticsLocationV2CheckLocationToHclTerraform(struct?: DataSyntheticsLocationV2CheckLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSyntheticsLocationV2CheckLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsLocationV2CheckLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsLocationV2CheckLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSyntheticsLocationV2CheckLocationList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsLocationV2CheckLocation[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsLocationV2CheckLocationOutputReference {
    return new DataSyntheticsLocationV2CheckLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSyntheticsLocationV2CheckMeta {
}

export function dataSyntheticsLocationV2CheckMetaToTerraform(struct?: DataSyntheticsLocationV2CheckMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSyntheticsLocationV2CheckMetaToHclTerraform(struct?: DataSyntheticsLocationV2CheckMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSyntheticsLocationV2CheckMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSyntheticsLocationV2CheckMeta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSyntheticsLocationV2CheckMeta | cdktf.IResolvable | undefined) {
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

  // active_test_ids - computed: true, optional: false, required: false
  public get activeTestIds() {
    return this.getNumberListAttribute('active_test_ids');
  }

  // paused_test_ids - computed: true, optional: false, required: false
  public get pausedTestIds() {
    return this.getNumberListAttribute('paused_test_ids');
  }
}

export class DataSyntheticsLocationV2CheckMetaList extends cdktf.ComplexList {
  public internalValue? : DataSyntheticsLocationV2CheckMeta[] | cdktf.IResolvable

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
  public get(index: number): DataSyntheticsLocationV2CheckMetaOutputReference {
    return new DataSyntheticsLocationV2CheckMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/location_v2_check synthetics_location_v2_check}
*/
export class DataSyntheticsLocationV2Check extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "synthetics_location_v2_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSyntheticsLocationV2Check resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSyntheticsLocationV2Check to import
  * @param importFromId The id of the existing DataSyntheticsLocationV2Check that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/location_v2_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSyntheticsLocationV2Check to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "synthetics_location_v2_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/synthetics/2.0.17/docs/data-sources/location_v2_check synthetics_location_v2_check} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSyntheticsLocationV2CheckConfig
  */
  public constructor(scope: Construct, id: string, config: DataSyntheticsLocationV2CheckConfig) {
    super(scope, id, {
      terraformResourceType: 'synthetics_location_v2_check',
      terraformGeneratorMetadata: {
        providerName: 'synthetics',
        providerVersion: '2.0.17',
        providerVersionConstraint: '2.0.17'
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
    this._location.internalValue = config.location;
    this._meta.internalValue = config.meta;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: false, optional: false, required: true
  private _location = new DataSyntheticsLocationV2CheckLocationList(this, "location", true);
  public get location() {
    return this._location;
  }
  public putLocation(value: DataSyntheticsLocationV2CheckLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DataSyntheticsLocationV2CheckMetaList(this, "meta", true);
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataSyntheticsLocationV2CheckMeta[] | cdktf.IResolvable) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.listMapper(dataSyntheticsLocationV2CheckLocationToTerraform, true)(this._location.internalValue),
      meta: cdktf.listMapper(dataSyntheticsLocationV2CheckMetaToTerraform, true)(this._meta.internalValue),
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
      location: {
        value: cdktf.listMapperHcl(dataSyntheticsLocationV2CheckLocationToHclTerraform, true)(this._location.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsLocationV2CheckLocationList",
      },
      meta: {
        value: cdktf.listMapperHcl(dataSyntheticsLocationV2CheckMetaToHclTerraform, true)(this._meta.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSyntheticsLocationV2CheckMetaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
