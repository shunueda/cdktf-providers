// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudVpcsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs#name DataNcloudVpcs#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs#vpc_no DataNcloudVpcs#vpc_no}
  */
  readonly vpcNo?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs#filter DataNcloudVpcs#filter}
  */
  readonly filter?: DataNcloudVpcsFilter[] | cdktf.IResolvable;
  /**
  * vpcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs#vpcs DataNcloudVpcs#vpcs}
  */
  readonly vpcs?: DataNcloudVpcsVpcs[] | cdktf.IResolvable;
}
export interface DataNcloudVpcsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs#name DataNcloudVpcs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs#regex DataNcloudVpcs#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs#values DataNcloudVpcs#values}
  */
  readonly values: string[];
}

export function dataNcloudVpcsFilterToTerraform(struct?: DataNcloudVpcsFilter | cdktf.IResolvable): any {
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


export function dataNcloudVpcsFilterToHclTerraform(struct?: DataNcloudVpcsFilter | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNcloudVpcsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudVpcsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNcloudVpcsFilter | cdktf.IResolvable | undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataNcloudVpcsFilterList extends cdktf.ComplexList {
  public internalValue? : DataNcloudVpcsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudVpcsFilterOutputReference {
    return new DataNcloudVpcsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNcloudVpcsVpcs {
}

export function dataNcloudVpcsVpcsToTerraform(struct?: DataNcloudVpcsVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNcloudVpcsVpcsToHclTerraform(struct?: DataNcloudVpcsVpcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNcloudVpcsVpcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudVpcsVpcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudVpcsVpcs | cdktf.IResolvable | undefined) {
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

  // default_access_control_group_no - computed: true, optional: false, required: false
  public get defaultAccessControlGroupNo() {
    return this.getStringAttribute('default_access_control_group_no');
  }

  // default_network_acl_no - computed: true, optional: false, required: false
  public get defaultNetworkAclNo() {
    return this.getStringAttribute('default_network_acl_no');
  }

  // default_private_route_table_no - computed: true, optional: false, required: false
  public get defaultPrivateRouteTableNo() {
    return this.getStringAttribute('default_private_route_table_no');
  }

  // default_public_route_table_no - computed: true, optional: false, required: false
  public get defaultPublicRouteTableNo() {
    return this.getStringAttribute('default_public_route_table_no');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_cidr_block - computed: true, optional: false, required: false
  public get ipv4CidrBlock() {
    return this.getStringAttribute('ipv4_cidr_block');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // vpc_no - computed: true, optional: false, required: false
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }
}

export class DataNcloudVpcsVpcsList extends cdktf.ComplexList {
  public internalValue? : DataNcloudVpcsVpcs[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudVpcsVpcsOutputReference {
    return new DataNcloudVpcsVpcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs ncloud_vpcs}
*/
export class DataNcloudVpcs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_vpcs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudVpcs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudVpcs to import
  * @param importFromId The id of the existing DataNcloudVpcs that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudVpcs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_vpcs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/vpcs ncloud_vpcs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudVpcsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudVpcsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_vpcs',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._vpcNo = config.vpcNo;
    this._filter.internalValue = config.filter;
    this._vpcs.internalValue = config.vpcs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
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

  // vpc_no - computed: false, optional: true, required: false
  private _vpcNo?: string; 
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }
  public set vpcNo(value: string) {
    this._vpcNo = value;
  }
  public resetVpcNo() {
    this._vpcNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNoInput() {
    return this._vpcNo;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNcloudVpcsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNcloudVpcsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // vpcs - computed: false, optional: true, required: false
  private _vpcs = new DataNcloudVpcsVpcsList(this, "vpcs", false);
  public get vpcs() {
    return this._vpcs;
  }
  public putVpcs(value: DataNcloudVpcsVpcs[] | cdktf.IResolvable) {
    this._vpcs.internalValue = value;
  }
  public resetVpcs() {
    this._vpcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcsInput() {
    return this._vpcs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      vpc_no: cdktf.stringToTerraform(this._vpcNo),
      filter: cdktf.listMapper(dataNcloudVpcsFilterToTerraform, true)(this._filter.internalValue),
      vpcs: cdktf.listMapper(dataNcloudVpcsVpcsToTerraform, true)(this._vpcs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_no: {
        value: cdktf.stringToHclTerraform(this._vpcNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataNcloudVpcsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNcloudVpcsFilterList",
      },
      vpcs: {
        value: cdktf.listMapperHcl(dataNcloudVpcsVpcsToHclTerraform, true)(this._vpcs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNcloudVpcsVpcsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
