// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentDatastoresConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of datastores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#datastores DataProxmoxVirtualEnvironmentDatastores#datastores}
  */
  readonly datastores?: DataProxmoxVirtualEnvironmentDatastoresDatastores[] | cdktf.IResolvable;
  /**
  * The filters to apply to the stores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#filters DataProxmoxVirtualEnvironmentDatastores#filters}
  */
  readonly filters?: DataProxmoxVirtualEnvironmentDatastoresFilters;
  /**
  * The name of the node to retrieve the stores from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#node_name DataProxmoxVirtualEnvironmentDatastores#node_name}
  */
  readonly nodeName: string;
}
export interface DataProxmoxVirtualEnvironmentDatastoresDatastores {
  /**
  * Whether the store is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#active DataProxmoxVirtualEnvironmentDatastores#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Allowed store content types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#content_types DataProxmoxVirtualEnvironmentDatastores#content_types}
  */
  readonly contentTypes: string[];
  /**
  * Whether the store is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#enabled DataProxmoxVirtualEnvironmentDatastores#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#id DataProxmoxVirtualEnvironmentDatastores#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the node the store is on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#node_name DataProxmoxVirtualEnvironmentDatastores#node_name}
  */
  readonly nodeName: string;
  /**
  * Shared flag from store configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#shared DataProxmoxVirtualEnvironmentDatastores#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Available store space in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#space_available DataProxmoxVirtualEnvironmentDatastores#space_available}
  */
  readonly spaceAvailable?: number;
  /**
  * Total store space in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#space_total DataProxmoxVirtualEnvironmentDatastores#space_total}
  */
  readonly spaceTotal?: number;
  /**
  * Used store space in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#space_used DataProxmoxVirtualEnvironmentDatastores#space_used}
  */
  readonly spaceUsed?: number;
  /**
  * Used fraction (used/total).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#space_used_fraction DataProxmoxVirtualEnvironmentDatastores#space_used_fraction}
  */
  readonly spaceUsedFraction?: number;
  /**
  * Store type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#type DataProxmoxVirtualEnvironmentDatastores#type}
  */
  readonly type: string;
}

export function dataProxmoxVirtualEnvironmentDatastoresDatastoresToTerraform(struct?: DataProxmoxVirtualEnvironmentDatastoresDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentTypes),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    shared: cdktf.booleanToTerraform(struct!.shared),
    space_available: cdktf.numberToTerraform(struct!.spaceAvailable),
    space_total: cdktf.numberToTerraform(struct!.spaceTotal),
    space_used: cdktf.numberToTerraform(struct!.spaceUsed),
    space_used_fraction: cdktf.numberToTerraform(struct!.spaceUsedFraction),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataProxmoxVirtualEnvironmentDatastoresDatastoresToHclTerraform(struct?: DataProxmoxVirtualEnvironmentDatastoresDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    space_available: {
      value: cdktf.numberToHclTerraform(struct!.spaceAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    space_total: {
      value: cdktf.numberToHclTerraform(struct!.spaceTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    space_used: {
      value: cdktf.numberToHclTerraform(struct!.spaceUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    space_used_fraction: {
      value: cdktf.numberToHclTerraform(struct!.spaceUsedFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProxmoxVirtualEnvironmentDatastoresDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualEnvironmentDatastoresDatastores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._contentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypes = this._contentTypes;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._spaceAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceAvailable = this._spaceAvailable;
    }
    if (this._spaceTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceTotal = this._spaceTotal;
    }
    if (this._spaceUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceUsed = this._spaceUsed;
    }
    if (this._spaceUsedFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceUsedFraction = this._spaceUsedFraction;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentDatastoresDatastores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._contentTypes = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._nodeName = undefined;
      this._shared = undefined;
      this._spaceAvailable = undefined;
      this._spaceTotal = undefined;
      this._spaceUsed = undefined;
      this._spaceUsedFraction = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._contentTypes = value.contentTypes;
      this._enabled = value.enabled;
      this._id = value.id;
      this._nodeName = value.nodeName;
      this._shared = value.shared;
      this._spaceAvailable = value.spaceAvailable;
      this._spaceTotal = value.spaceTotal;
      this._spaceUsed = value.spaceUsed;
      this._spaceUsedFraction = value.spaceUsedFraction;
      this._type = value.type;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // content_types - computed: false, optional: false, required: true
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('content_types'));
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // space_available - computed: false, optional: true, required: false
  private _spaceAvailable?: number; 
  public get spaceAvailable() {
    return this.getNumberAttribute('space_available');
  }
  public set spaceAvailable(value: number) {
    this._spaceAvailable = value;
  }
  public resetSpaceAvailable() {
    this._spaceAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceAvailableInput() {
    return this._spaceAvailable;
  }

  // space_total - computed: false, optional: true, required: false
  private _spaceTotal?: number; 
  public get spaceTotal() {
    return this.getNumberAttribute('space_total');
  }
  public set spaceTotal(value: number) {
    this._spaceTotal = value;
  }
  public resetSpaceTotal() {
    this._spaceTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceTotalInput() {
    return this._spaceTotal;
  }

  // space_used - computed: false, optional: true, required: false
  private _spaceUsed?: number; 
  public get spaceUsed() {
    return this.getNumberAttribute('space_used');
  }
  public set spaceUsed(value: number) {
    this._spaceUsed = value;
  }
  public resetSpaceUsed() {
    this._spaceUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceUsedInput() {
    return this._spaceUsed;
  }

  // space_used_fraction - computed: false, optional: true, required: false
  private _spaceUsedFraction?: number; 
  public get spaceUsedFraction() {
    return this.getNumberAttribute('space_used_fraction');
  }
  public set spaceUsedFraction(value: number) {
    this._spaceUsedFraction = value;
  }
  public resetSpaceUsedFraction() {
    this._spaceUsedFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceUsedFractionInput() {
    return this._spaceUsedFraction;
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
}

export class DataProxmoxVirtualEnvironmentDatastoresDatastoresList extends cdktf.ComplexList {
  public internalValue? : DataProxmoxVirtualEnvironmentDatastoresDatastores[] | cdktf.IResolvable

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
  public get(index: number): DataProxmoxVirtualEnvironmentDatastoresDatastoresOutputReference {
    return new DataProxmoxVirtualEnvironmentDatastoresDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataProxmoxVirtualEnvironmentDatastoresFilters {
  /**
  * Only list stores with the given content types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#content_types DataProxmoxVirtualEnvironmentDatastores#content_types}
  */
  readonly contentTypes?: string[];
  /**
  * Only list stores with the given ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#id DataProxmoxVirtualEnvironmentDatastores#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If `target` is different to `node_name`, then only lists shared stores which content is accessible on this node and the specified `target` node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#target DataProxmoxVirtualEnvironmentDatastores#target}
  */
  readonly target?: string;
}

export function dataProxmoxVirtualEnvironmentDatastoresFiltersToTerraform(struct?: DataProxmoxVirtualEnvironmentDatastoresFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentTypes),
    id: cdktf.stringToTerraform(struct!.id),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataProxmoxVirtualEnvironmentDatastoresFiltersToHclTerraform(struct?: DataProxmoxVirtualEnvironmentDatastoresFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProxmoxVirtualEnvironmentDatastoresFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualEnvironmentDatastoresFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypes = this._contentTypes;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentDatastoresFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentTypes = undefined;
      this._id = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentTypes = value.contentTypes;
      this._id = value.id;
      this._target = value.target;
    }
  }

  // content_types - computed: false, optional: true, required: false
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('content_types'));
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  public resetContentTypes() {
    this._contentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores proxmox_virtual_environment_datastores}
*/
export class DataProxmoxVirtualEnvironmentDatastores extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_datastores";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentDatastores resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentDatastores to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentDatastores that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentDatastores to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_datastores", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_datastores proxmox_virtual_environment_datastores} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentDatastoresConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentDatastoresConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_datastores',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datastores.internalValue = config.datastores;
    this._filters.internalValue = config.filters;
    this._nodeName = config.nodeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datastores - computed: false, optional: true, required: false
  private _datastores = new DataProxmoxVirtualEnvironmentDatastoresDatastoresList(this, "datastores", false);
  public get datastores() {
    return this._datastores;
  }
  public putDatastores(value: DataProxmoxVirtualEnvironmentDatastoresDatastores[] | cdktf.IResolvable) {
    this._datastores.internalValue = value;
  }
  public resetDatastores() {
    this._datastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoresInput() {
    return this._datastores.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataProxmoxVirtualEnvironmentDatastoresFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataProxmoxVirtualEnvironmentDatastoresFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datastores: cdktf.listMapper(dataProxmoxVirtualEnvironmentDatastoresDatastoresToTerraform, false)(this._datastores.internalValue),
      filters: dataProxmoxVirtualEnvironmentDatastoresFiltersToTerraform(this._filters.internalValue),
      node_name: cdktf.stringToTerraform(this._nodeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datastores: {
        value: cdktf.listMapperHcl(dataProxmoxVirtualEnvironmentDatastoresDatastoresToHclTerraform, false)(this._datastores.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataProxmoxVirtualEnvironmentDatastoresDatastoresList",
      },
      filters: {
        value: dataProxmoxVirtualEnvironmentDatastoresFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProxmoxVirtualEnvironmentDatastoresFilters",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
