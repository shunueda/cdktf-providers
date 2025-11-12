// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDetectionResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#id DataThunderDdosDetectionResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#oper DataThunderDdosDetectionResourceUsageOper#oper}
  */
  readonly oper?: DataThunderDdosDetectionResourceUsageOperOper;
}
export interface DataThunderDdosDetectionResourceUsageOperOperDynamicResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#res_alloc DataThunderDdosDetectionResourceUsageOper#res_alloc}
  */
  readonly resAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#res_limit DataThunderDdosDetectionResourceUsageOper#res_limit}
  */
  readonly resLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#res_name DataThunderDdosDetectionResourceUsageOper#res_name}
  */
  readonly resName?: string;
}

export function dataThunderDdosDetectionResourceUsageOperOperDynamicResourcesToTerraform(struct?: DataThunderDdosDetectionResourceUsageOperOperDynamicResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    res_alloc: cdktf.numberToTerraform(struct!.resAlloc),
    res_limit: cdktf.numberToTerraform(struct!.resLimit),
    res_name: cdktf.stringToTerraform(struct!.resName),
  }
}


export function dataThunderDdosDetectionResourceUsageOperOperDynamicResourcesToHclTerraform(struct?: DataThunderDdosDetectionResourceUsageOperOperDynamicResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    res_alloc: {
      value: cdktf.numberToHclTerraform(struct!.resAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_limit: {
      value: cdktf.numberToHclTerraform(struct!.resLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_name: {
      value: cdktf.stringToHclTerraform(struct!.resName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDetectionResourceUsageOperOperDynamicResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDetectionResourceUsageOperOperDynamicResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.resAlloc = this._resAlloc;
    }
    if (this._resLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resLimit = this._resLimit;
    }
    if (this._resName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resName = this._resName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDetectionResourceUsageOperOperDynamicResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resAlloc = undefined;
      this._resLimit = undefined;
      this._resName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resAlloc = value.resAlloc;
      this._resLimit = value.resLimit;
      this._resName = value.resName;
    }
  }

  // res_alloc - computed: false, optional: true, required: false
  private _resAlloc?: number; 
  public get resAlloc() {
    return this.getNumberAttribute('res_alloc');
  }
  public set resAlloc(value: number) {
    this._resAlloc = value;
  }
  public resetResAlloc() {
    this._resAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resAllocInput() {
    return this._resAlloc;
  }

  // res_limit - computed: false, optional: true, required: false
  private _resLimit?: number; 
  public get resLimit() {
    return this.getNumberAttribute('res_limit');
  }
  public set resLimit(value: number) {
    this._resLimit = value;
  }
  public resetResLimit() {
    this._resLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resLimitInput() {
    return this._resLimit;
  }

  // res_name - computed: false, optional: true, required: false
  private _resName?: string; 
  public get resName() {
    return this.getStringAttribute('res_name');
  }
  public set resName(value: string) {
    this._resName = value;
  }
  public resetResName() {
    this._resName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resNameInput() {
    return this._resName;
  }
}

export class DataThunderDdosDetectionResourceUsageOperOperDynamicResourcesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDetectionResourceUsageOperOperDynamicResources[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDetectionResourceUsageOperOperDynamicResourcesOutputReference {
    return new DataThunderDdosDetectionResourceUsageOperOperDynamicResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDetectionResourceUsageOperOperStaticResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#res_alloc DataThunderDdosDetectionResourceUsageOper#res_alloc}
  */
  readonly resAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#res_limit DataThunderDdosDetectionResourceUsageOper#res_limit}
  */
  readonly resLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#res_name DataThunderDdosDetectionResourceUsageOper#res_name}
  */
  readonly resName?: string;
}

export function dataThunderDdosDetectionResourceUsageOperOperStaticResourcesToTerraform(struct?: DataThunderDdosDetectionResourceUsageOperOperStaticResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    res_alloc: cdktf.numberToTerraform(struct!.resAlloc),
    res_limit: cdktf.numberToTerraform(struct!.resLimit),
    res_name: cdktf.stringToTerraform(struct!.resName),
  }
}


export function dataThunderDdosDetectionResourceUsageOperOperStaticResourcesToHclTerraform(struct?: DataThunderDdosDetectionResourceUsageOperOperStaticResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    res_alloc: {
      value: cdktf.numberToHclTerraform(struct!.resAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_limit: {
      value: cdktf.numberToHclTerraform(struct!.resLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_name: {
      value: cdktf.stringToHclTerraform(struct!.resName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDetectionResourceUsageOperOperStaticResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDetectionResourceUsageOperOperStaticResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.resAlloc = this._resAlloc;
    }
    if (this._resLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resLimit = this._resLimit;
    }
    if (this._resName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resName = this._resName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDetectionResourceUsageOperOperStaticResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resAlloc = undefined;
      this._resLimit = undefined;
      this._resName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resAlloc = value.resAlloc;
      this._resLimit = value.resLimit;
      this._resName = value.resName;
    }
  }

  // res_alloc - computed: false, optional: true, required: false
  private _resAlloc?: number; 
  public get resAlloc() {
    return this.getNumberAttribute('res_alloc');
  }
  public set resAlloc(value: number) {
    this._resAlloc = value;
  }
  public resetResAlloc() {
    this._resAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resAllocInput() {
    return this._resAlloc;
  }

  // res_limit - computed: false, optional: true, required: false
  private _resLimit?: number; 
  public get resLimit() {
    return this.getNumberAttribute('res_limit');
  }
  public set resLimit(value: number) {
    this._resLimit = value;
  }
  public resetResLimit() {
    this._resLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resLimitInput() {
    return this._resLimit;
  }

  // res_name - computed: false, optional: true, required: false
  private _resName?: string; 
  public get resName() {
    return this.getStringAttribute('res_name');
  }
  public set resName(value: string) {
    this._resName = value;
  }
  public resetResName() {
    this._resName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resNameInput() {
    return this._resName;
  }
}

export class DataThunderDdosDetectionResourceUsageOperOperStaticResourcesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDetectionResourceUsageOperOperStaticResources[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDetectionResourceUsageOperOperStaticResourcesOutputReference {
    return new DataThunderDdosDetectionResourceUsageOperOperStaticResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDetectionResourceUsageOperOper {
  /**
  * dynamic_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#dynamic_resources DataThunderDdosDetectionResourceUsageOper#dynamic_resources}
  */
  readonly dynamicResources?: DataThunderDdosDetectionResourceUsageOperOperDynamicResources[] | cdktf.IResolvable;
  /**
  * static_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#static_resources DataThunderDdosDetectionResourceUsageOper#static_resources}
  */
  readonly staticResources?: DataThunderDdosDetectionResourceUsageOperOperStaticResources[] | cdktf.IResolvable;
}

export function dataThunderDdosDetectionResourceUsageOperOperToTerraform(struct?: DataThunderDdosDetectionResourceUsageOperOperOutputReference | DataThunderDdosDetectionResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_resources: cdktf.listMapper(dataThunderDdosDetectionResourceUsageOperOperDynamicResourcesToTerraform, true)(struct!.dynamicResources),
    static_resources: cdktf.listMapper(dataThunderDdosDetectionResourceUsageOperOperStaticResourcesToTerraform, true)(struct!.staticResources),
  }
}


export function dataThunderDdosDetectionResourceUsageOperOperToHclTerraform(struct?: DataThunderDdosDetectionResourceUsageOperOperOutputReference | DataThunderDdosDetectionResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_resources: {
      value: cdktf.listMapperHcl(dataThunderDdosDetectionResourceUsageOperOperDynamicResourcesToHclTerraform, true)(struct!.dynamicResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDetectionResourceUsageOperOperDynamicResourcesList",
    },
    static_resources: {
      value: cdktf.listMapperHcl(dataThunderDdosDetectionResourceUsageOperOperStaticResourcesToHclTerraform, true)(struct!.staticResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDetectionResourceUsageOperOperStaticResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDetectionResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDetectionResourceUsageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicResources = this._dynamicResources?.internalValue;
    }
    if (this._staticResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticResources = this._staticResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDetectionResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dynamicResources.internalValue = undefined;
      this._staticResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dynamicResources.internalValue = value.dynamicResources;
      this._staticResources.internalValue = value.staticResources;
    }
  }

  // dynamic_resources - computed: false, optional: true, required: false
  private _dynamicResources = new DataThunderDdosDetectionResourceUsageOperOperDynamicResourcesList(this, "dynamic_resources", false);
  public get dynamicResources() {
    return this._dynamicResources;
  }
  public putDynamicResources(value: DataThunderDdosDetectionResourceUsageOperOperDynamicResources[] | cdktf.IResolvable) {
    this._dynamicResources.internalValue = value;
  }
  public resetDynamicResources() {
    this._dynamicResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicResourcesInput() {
    return this._dynamicResources.internalValue;
  }

  // static_resources - computed: false, optional: true, required: false
  private _staticResources = new DataThunderDdosDetectionResourceUsageOperOperStaticResourcesList(this, "static_resources", false);
  public get staticResources() {
    return this._staticResources;
  }
  public putStaticResources(value: DataThunderDdosDetectionResourceUsageOperOperStaticResources[] | cdktf.IResolvable) {
    this._staticResources.internalValue = value;
  }
  public resetStaticResources() {
    this._staticResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticResourcesInput() {
    return this._staticResources.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper thunder_ddos_detection_resource_usage_oper}
*/
export class DataThunderDdosDetectionResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDetectionResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDetectionResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderDdosDetectionResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDetectionResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_resource_usage_oper thunder_ddos_detection_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDetectionResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDetectionResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_resource_usage_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDetectionResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDetectionResourceUsageOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderDdosDetectionResourceUsageOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderDdosDetectionResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDetectionResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
