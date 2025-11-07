// https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/object_storage_backends
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAnxcloudObjectStorageBackendsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, only return enabled backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/object_storage_backends#enabled_only DataAnxcloudObjectStorageBackends#enabled_only}
  */
  readonly enabledOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/object_storage_backends#id DataAnxcloudObjectStorageBackends#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter backends by name (partial match).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/object_storage_backends#name_filter DataAnxcloudObjectStorageBackends#name_filter}
  */
  readonly nameFilter?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/object_storage_backends#timeouts DataAnxcloudObjectStorageBackends#timeouts}
  */
  readonly timeouts?: DataAnxcloudObjectStorageBackendsTimeouts;
}
export interface DataAnxcloudObjectStorageBackendsBackends {
}

export function dataAnxcloudObjectStorageBackendsBackendsToTerraform(struct?: DataAnxcloudObjectStorageBackendsBackends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAnxcloudObjectStorageBackendsBackendsToHclTerraform(struct?: DataAnxcloudObjectStorageBackendsBackends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAnxcloudObjectStorageBackendsBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAnxcloudObjectStorageBackendsBackends | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAnxcloudObjectStorageBackendsBackends | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend_type - computed: true, optional: false, required: false
  public get backendType() {
    return this.getStringAttribute('backend_type');
  }

  // backend_user - computed: true, optional: false, required: false
  public get backendUser() {
    return this.getStringAttribute('backend_user');
  }

  // customer - computed: true, optional: false, required: false
  public get customer() {
    return this.getStringAttribute('customer');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reseller - computed: true, optional: false, required: false
  public get reseller() {
    return this.getStringAttribute('reseller');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataAnxcloudObjectStorageBackendsBackendsList extends cdktf.ComplexList {

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
  public get(index: number): DataAnxcloudObjectStorageBackendsBackendsOutputReference {
    return new DataAnxcloudObjectStorageBackendsBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAnxcloudObjectStorageBackendsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/object_storage_backends#read DataAnxcloudObjectStorageBackends#read}
  */
  readonly read?: string;
}

export function dataAnxcloudObjectStorageBackendsTimeoutsToTerraform(struct?: DataAnxcloudObjectStorageBackendsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAnxcloudObjectStorageBackendsTimeoutsToHclTerraform(struct?: DataAnxcloudObjectStorageBackendsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAnxcloudObjectStorageBackendsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAnxcloudObjectStorageBackendsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAnxcloudObjectStorageBackendsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/object_storage_backends anxcloud_object_storage_backends}
*/
export class DataAnxcloudObjectStorageBackends extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "anxcloud_object_storage_backends";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAnxcloudObjectStorageBackends resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAnxcloudObjectStorageBackends to import
  * @param importFromId The id of the existing DataAnxcloudObjectStorageBackends that should be imported. Refer to the {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/object_storage_backends#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAnxcloudObjectStorageBackends to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "anxcloud_object_storage_backends", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anexia-it/anxcloud/0.7.4/docs/data-sources/object_storage_backends anxcloud_object_storage_backends} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAnxcloudObjectStorageBackendsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAnxcloudObjectStorageBackendsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'anxcloud_object_storage_backends',
      terraformGeneratorMetadata: {
        providerName: 'anxcloud',
        providerVersion: '0.7.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabledOnly = config.enabledOnly;
    this._id = config.id;
    this._nameFilter = config.nameFilter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backends - computed: true, optional: false, required: false
  private _backends = new DataAnxcloudObjectStorageBackendsBackendsList(this, "backends", false);
  public get backends() {
    return this._backends;
  }

  // enabled_only - computed: false, optional: true, required: false
  private _enabledOnly?: boolean | cdktf.IResolvable; 
  public get enabledOnly() {
    return this.getBooleanAttribute('enabled_only');
  }
  public set enabledOnly(value: boolean | cdktf.IResolvable) {
    this._enabledOnly = value;
  }
  public resetEnabledOnly() {
    this._enabledOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOnlyInput() {
    return this._enabledOnly;
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

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string; 
  public get nameFilter() {
    return this.getStringAttribute('name_filter');
  }
  public set nameFilter(value: string) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAnxcloudObjectStorageBackendsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAnxcloudObjectStorageBackendsTimeouts) {
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
      enabled_only: cdktf.booleanToTerraform(this._enabledOnly),
      id: cdktf.stringToTerraform(this._id),
      name_filter: cdktf.stringToTerraform(this._nameFilter),
      timeouts: dataAnxcloudObjectStorageBackendsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled_only: {
        value: cdktf.booleanToHclTerraform(this._enabledOnly),
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
      name_filter: {
        value: cdktf.stringToHclTerraform(this._nameFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAnxcloudObjectStorageBackendsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAnxcloudObjectStorageBackendsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
