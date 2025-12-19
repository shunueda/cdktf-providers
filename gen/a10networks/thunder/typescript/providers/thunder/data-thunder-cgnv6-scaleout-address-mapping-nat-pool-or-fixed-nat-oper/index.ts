// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#id DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#oper DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#oper}
  */
  readonly oper?: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOper;
}
export interface DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#active_node DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#active_node}
  */
  readonly activeNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#nat_ip DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#nat_ip}
  */
  readonly natIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#standby_node DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#standby_node}
  */
  readonly standbyNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#user_group DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#user_group}
  */
  readonly userGroup?: number;
}

export function dataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructToTerraform(struct?: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_node: cdktf.numberToTerraform(struct!.activeNode),
    nat_ip: cdktf.stringToTerraform(struct!.natIp),
    standby_node: cdktf.numberToTerraform(struct!.standbyNode),
    user_group: cdktf.numberToTerraform(struct!.userGroup),
  }
}


export function dataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructToHclTerraform(struct?: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_node: {
      value: cdktf.numberToHclTerraform(struct!.activeNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.natIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_node: {
      value: cdktf.numberToHclTerraform(struct!.standbyNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_group: {
      value: cdktf.numberToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNode = this._activeNode;
    }
    if (this._natIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIp = this._natIp;
    }
    if (this._standbyNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyNode = this._standbyNode;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeNode = undefined;
      this._natIp = undefined;
      this._standbyNode = undefined;
      this._userGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeNode = value.activeNode;
      this._natIp = value.natIp;
      this._standbyNode = value.standbyNode;
      this._userGroup = value.userGroup;
    }
  }

  // active_node - computed: false, optional: true, required: false
  private _activeNode?: number; 
  public get activeNode() {
    return this.getNumberAttribute('active_node');
  }
  public set activeNode(value: number) {
    this._activeNode = value;
  }
  public resetActiveNode() {
    this._activeNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNodeInput() {
    return this._activeNode;
  }

  // nat_ip - computed: false, optional: true, required: false
  private _natIp?: string; 
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }
  public set natIp(value: string) {
    this._natIp = value;
  }
  public resetNatIp() {
    this._natIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpInput() {
    return this._natIp;
  }

  // standby_node - computed: false, optional: true, required: false
  private _standbyNode?: number; 
  public get standbyNode() {
    return this.getNumberAttribute('standby_node');
  }
  public set standbyNode(value: number) {
    this._standbyNode = value;
  }
  public resetStandbyNode() {
    this._standbyNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyNodeInput() {
    return this._standbyNode;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: number; 
  public get userGroup() {
    return this.getNumberAttribute('user_group');
  }
  public set userGroup(value: number) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}

export class DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructOutputReference {
    return new DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#index DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#nat_pool DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#nat_pool}
  */
  readonly natPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#service_template DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#service_template}
  */
  readonly serviceTemplate?: string;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#ip_list DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper#ip_list}
  */
  readonly ipList?: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperToTerraform(struct?: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperOutputReference | DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    service_template: cdktf.stringToTerraform(struct!.serviceTemplate),
    ip_list: cdktf.listMapper(dataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructToTerraform, true)(struct!.ipList),
  }
}


export function dataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperToHclTerraform(struct?: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperOutputReference | DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_template: {
      value: cdktf.stringToHclTerraform(struct!.serviceTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._serviceTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTemplate = this._serviceTemplate;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._index = undefined;
      this._natPool = undefined;
      this._serviceTemplate = undefined;
      this._ipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._index = value.index;
      this._natPool = value.natPool;
      this._serviceTemplate = value.serviceTemplate;
      this._ipList.internalValue = value.ipList;
    }
  }

  // index - computed: false, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // service_template - computed: false, optional: true, required: false
  private _serviceTemplate?: string; 
  public get serviceTemplate() {
    return this.getStringAttribute('service_template');
  }
  public set serviceTemplate(value: string) {
    this._serviceTemplate = value;
  }
  public resetServiceTemplate() {
    this._serviceTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateInput() {
    return this._serviceTemplate;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper thunder_cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper}
*/
export class DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper to import
  * @param importFromId The id of the existing DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper thunder_cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_scaleout_address_mapping_nat_pool_or_fixed_nat_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _oper = new DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOper) {
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
      oper: dataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6ScaleoutAddressMappingNatPoolOrFixedNatOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
