// https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDatacenterRoutingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_policy#blueprint_id DataApstraDatacenterRoutingPolicy#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Apstra graph node ID. Required when `name` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_policy#id DataApstraDatacenterRoutingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Web UI `name` field. Required when `id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_policy#name DataApstraDatacenterRoutingPolicy#name}
  */
  readonly name?: string;
}
export interface DataApstraDatacenterRoutingPolicyExportPolicy {
}

export function dataApstraDatacenterRoutingPolicyExportPolicyToTerraform(struct?: DataApstraDatacenterRoutingPolicyExportPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterRoutingPolicyExportPolicyToHclTerraform(struct?: DataApstraDatacenterRoutingPolicyExportPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterRoutingPolicyExportPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraDatacenterRoutingPolicyExportPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingPolicyExportPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // export_l2_edge_subnets - computed: true, optional: false, required: false
  public get exportL2EdgeSubnets() {
    return this.getBooleanAttribute('export_l2_edge_subnets');
  }

  // export_l3_edge_server_links - computed: true, optional: false, required: false
  public get exportL3EdgeServerLinks() {
    return this.getBooleanAttribute('export_l3_edge_server_links');
  }

  // export_loopbacks - computed: true, optional: false, required: false
  public get exportLoopbacks() {
    return this.getBooleanAttribute('export_loopbacks');
  }

  // export_spine_leaf_links - computed: true, optional: false, required: false
  public get exportSpineLeafLinks() {
    return this.getBooleanAttribute('export_spine_leaf_links');
  }

  // export_spine_superspine_links - computed: true, optional: false, required: false
  public get exportSpineSuperspineLinks() {
    return this.getBooleanAttribute('export_spine_superspine_links');
  }

  // export_static_routes - computed: true, optional: false, required: false
  public get exportStaticRoutes() {
    return this.getBooleanAttribute('export_static_routes');
  }
}
export interface DataApstraDatacenterRoutingPolicyExtraExports {
}

export function dataApstraDatacenterRoutingPolicyExtraExportsToTerraform(struct?: DataApstraDatacenterRoutingPolicyExtraExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterRoutingPolicyExtraExportsToHclTerraform(struct?: DataApstraDatacenterRoutingPolicyExtraExports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterRoutingPolicyExtraExportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterRoutingPolicyExtraExports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingPolicyExtraExports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // ge_mask - computed: true, optional: false, required: false
  public get geMask() {
    return this.getNumberAttribute('ge_mask');
  }

  // le_mask - computed: true, optional: false, required: false
  public get leMask() {
    return this.getNumberAttribute('le_mask');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataApstraDatacenterRoutingPolicyExtraExportsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraDatacenterRoutingPolicyExtraExportsOutputReference {
    return new DataApstraDatacenterRoutingPolicyExtraExportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataApstraDatacenterRoutingPolicyExtraImports {
}

export function dataApstraDatacenterRoutingPolicyExtraImportsToTerraform(struct?: DataApstraDatacenterRoutingPolicyExtraImports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraDatacenterRoutingPolicyExtraImportsToHclTerraform(struct?: DataApstraDatacenterRoutingPolicyExtraImports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraDatacenterRoutingPolicyExtraImportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraDatacenterRoutingPolicyExtraImports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraDatacenterRoutingPolicyExtraImports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // ge_mask - computed: true, optional: false, required: false
  public get geMask() {
    return this.getNumberAttribute('ge_mask');
  }

  // le_mask - computed: true, optional: false, required: false
  public get leMask() {
    return this.getNumberAttribute('le_mask');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataApstraDatacenterRoutingPolicyExtraImportsList extends cdktf.ComplexList {

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
  public get(index: number): DataApstraDatacenterRoutingPolicyExtraImportsOutputReference {
    return new DataApstraDatacenterRoutingPolicyExtraImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_policy apstra_datacenter_routing_policy}
*/
export class DataApstraDatacenterRoutingPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_datacenter_routing_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDatacenterRoutingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDatacenterRoutingPolicy to import
  * @param importFromId The id of the existing DataApstraDatacenterRoutingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDatacenterRoutingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_datacenter_routing_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.1/docs/data-sources/datacenter_routing_policy apstra_datacenter_routing_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDatacenterRoutingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDatacenterRoutingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_datacenter_routing_policy',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.1',
        providerVersionConstraint: '0.95.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_prefixes - computed: true, optional: false, required: false
  public get aggregatePrefixes() {
    return this.getListAttribute('aggregate_prefixes');
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expect_default_ipv4 - computed: true, optional: false, required: false
  public get expectDefaultIpv4() {
    return this.getBooleanAttribute('expect_default_ipv4');
  }

  // expect_default_ipv6 - computed: true, optional: false, required: false
  public get expectDefaultIpv6() {
    return this.getBooleanAttribute('expect_default_ipv6');
  }

  // export_policy - computed: true, optional: false, required: false
  private _exportPolicy = new DataApstraDatacenterRoutingPolicyExportPolicyOutputReference(this, "export_policy");
  public get exportPolicy() {
    return this._exportPolicy;
  }

  // extra_exports - computed: true, optional: false, required: false
  private _extraExports = new DataApstraDatacenterRoutingPolicyExtraExportsList(this, "extra_exports", false);
  public get extraExports() {
    return this._extraExports;
  }

  // extra_imports - computed: true, optional: false, required: false
  private _extraImports = new DataApstraDatacenterRoutingPolicyExtraImportsList(this, "extra_imports", false);
  public get extraImports() {
    return this._extraImports;
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

  // import_policy - computed: true, optional: false, required: false
  public get importPolicy() {
    return this.getStringAttribute('import_policy');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
