// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search By field filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes#filter DataKeeperNodes#filter}
  */
  readonly filter?: DataKeeperNodesFilter;
  /**
  * Load subnode tree
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes#subnodes DataKeeperNodes#subnodes}
  */
  readonly subnodes?: DataKeeperNodesSubnodes;
}
export interface DataKeeperNodesFilter {
  /**
  * Comparison operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes#cmp DataKeeperNodes#cmp}
  */
  readonly cmp?: string;
  /**
  * Field Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes#field DataKeeperNodes#field}
  */
  readonly field: string;
  /**
  * Comparison value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes#value DataKeeperNodes#value}
  */
  readonly value: string;
}

export function dataKeeperNodesFilterToTerraform(struct?: DataKeeperNodesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmp: cdktf.stringToTerraform(struct!.cmp),
    field: cdktf.stringToTerraform(struct!.field),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataKeeperNodesFilterToHclTerraform(struct?: DataKeeperNodesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmp: {
      value: cdktf.stringToHclTerraform(struct!.cmp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataKeeperNodesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperNodesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmp = this._cmp;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperNodesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmp = undefined;
      this._field = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmp = value.cmp;
      this._field = value.field;
      this._value = value.value;
    }
  }

  // cmp - computed: false, optional: true, required: false
  private _cmp?: string; 
  public get cmp() {
    return this.getStringAttribute('cmp');
  }
  public set cmp(value: string) {
    this._cmp = value;
  }
  public resetCmp() {
    this._cmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpInput() {
    return this._cmp;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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
export interface DataKeeperNodesNodes {
}

export function dataKeeperNodesNodesToTerraform(struct?: DataKeeperNodesNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeeperNodesNodesToHclTerraform(struct?: DataKeeperNodesNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeeperNodesNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataKeeperNodesNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperNodesNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bridge_id - computed: true, optional: false, required: false
  public get bridgeId() {
    return this.getNumberAttribute('bridge_id');
  }

  // duo_enabled - computed: true, optional: false, required: false
  public get duoEnabled() {
    return this.getBooleanAttribute('duo_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }

  // restrict_visibility - computed: true, optional: false, required: false
  public get restrictVisibility() {
    return this.getBooleanAttribute('restrict_visibility');
  }

  // rsa_enabled - computed: true, optional: false, required: false
  public get rsaEnabled() {
    return this.getBooleanAttribute('rsa_enabled');
  }

  // scim_id - computed: true, optional: false, required: false
  public get scimId() {
    return this.getNumberAttribute('scim_id');
  }

  // sso_provider_ids - computed: true, optional: false, required: false
  public get ssoProviderIds() {
    return this.getNumberListAttribute('sso_provider_ids');
  }
}

export class DataKeeperNodesNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataKeeperNodesNodesOutputReference {
    return new DataKeeperNodesNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeeperNodesSubnodes {
  /**
  * Traverse node structure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes#cascade DataKeeperNodes#cascade}
  */
  readonly cascade?: boolean | cdktf.IResolvable;
  /**
  * Include base node to result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes#include_parent DataKeeperNodes#include_parent}
  */
  readonly includeParent?: boolean | cdktf.IResolvable;
  /**
  * Base Node ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes#node_id DataKeeperNodes#node_id}
  */
  readonly nodeId: number;
}

export function dataKeeperNodesSubnodesToTerraform(struct?: DataKeeperNodesSubnodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cascade: cdktf.booleanToTerraform(struct!.cascade),
    include_parent: cdktf.booleanToTerraform(struct!.includeParent),
    node_id: cdktf.numberToTerraform(struct!.nodeId),
  }
}


export function dataKeeperNodesSubnodesToHclTerraform(struct?: DataKeeperNodesSubnodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cascade: {
      value: cdktf.booleanToHclTerraform(struct!.cascade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_parent: {
      value: cdktf.booleanToHclTerraform(struct!.includeParent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_id: {
      value: cdktf.numberToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKeeperNodesSubnodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperNodesSubnodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cascade !== undefined) {
      hasAnyValues = true;
      internalValueResult.cascade = this._cascade;
    }
    if (this._includeParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeParent = this._includeParent;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperNodesSubnodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cascade = undefined;
      this._includeParent = undefined;
      this._nodeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cascade = value.cascade;
      this._includeParent = value.includeParent;
      this._nodeId = value.nodeId;
    }
  }

  // cascade - computed: false, optional: true, required: false
  private _cascade?: boolean | cdktf.IResolvable; 
  public get cascade() {
    return this.getBooleanAttribute('cascade');
  }
  public set cascade(value: boolean | cdktf.IResolvable) {
    this._cascade = value;
  }
  public resetCascade() {
    this._cascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeInput() {
    return this._cascade;
  }

  // include_parent - computed: false, optional: true, required: false
  private _includeParent?: boolean | cdktf.IResolvable; 
  public get includeParent() {
    return this.getBooleanAttribute('include_parent');
  }
  public set includeParent(value: boolean | cdktf.IResolvable) {
    this._includeParent = value;
  }
  public resetIncludeParent() {
    this._includeParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeParentInput() {
    return this._includeParent;
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: number; 
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }
  public set nodeId(value: number) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes keeper_nodes}
*/
export class DataKeeperNodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_nodes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperNodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperNodes to import
  * @param importFromId The id of the existing DataKeeperNodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperNodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_nodes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/nodes keeper_nodes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperNodesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperNodesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_nodes',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
    this._subnodes.internalValue = config.subnodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter = new DataKeeperNodesFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataKeeperNodesFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataKeeperNodesNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // subnodes - computed: false, optional: true, required: false
  private _subnodes = new DataKeeperNodesSubnodesOutputReference(this, "subnodes");
  public get subnodes() {
    return this._subnodes;
  }
  public putSubnodes(value: DataKeeperNodesSubnodes) {
    this._subnodes.internalValue = value;
  }
  public resetSubnodes() {
    this._subnodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnodesInput() {
    return this._subnodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataKeeperNodesFilterToTerraform(this._filter.internalValue),
      subnodes: dataKeeperNodesSubnodesToTerraform(this._subnodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataKeeperNodesFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperNodesFilter",
      },
      subnodes: {
        value: dataKeeperNodesSubnodesToHclTerraform(this._subnodes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataKeeperNodesSubnodes",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
