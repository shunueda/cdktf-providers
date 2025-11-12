// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatDisabledConfigOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#id DataThunderCgnv6FixedNatDisabledConfigOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#oper DataThunderCgnv6FixedNatDisabledConfigOper#oper}
  */
  readonly oper?: DataThunderCgnv6FixedNatDisabledConfigOperOper;
}
export interface DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#active_users DataThunderCgnv6FixedNatDisabledConfigOper#active_users}
  */
  readonly activeUsers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#clear_session DataThunderCgnv6FixedNatDisabledConfigOper#clear_session}
  */
  readonly clearSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#inside_end_address DataThunderCgnv6FixedNatDisabledConfigOper#inside_end_address}
  */
  readonly insideEndAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#inside_ip_list DataThunderCgnv6FixedNatDisabledConfigOper#inside_ip_list}
  */
  readonly insideIpList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#inside_netmask DataThunderCgnv6FixedNatDisabledConfigOper#inside_netmask}
  */
  readonly insideNetmask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#inside_start_address DataThunderCgnv6FixedNatDisabledConfigOper#inside_start_address}
  */
  readonly insideStartAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#partition DataThunderCgnv6FixedNatDisabledConfigOper#partition}
  */
  readonly partition?: string;
}

export function dataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructToTerraform(struct?: DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_users: cdktf.numberToTerraform(struct!.activeUsers),
    clear_session: cdktf.numberToTerraform(struct!.clearSession),
    inside_end_address: cdktf.stringToTerraform(struct!.insideEndAddress),
    inside_ip_list: cdktf.stringToTerraform(struct!.insideIpList),
    inside_netmask: cdktf.numberToTerraform(struct!.insideNetmask),
    inside_start_address: cdktf.stringToTerraform(struct!.insideStartAddress),
    partition: cdktf.stringToTerraform(struct!.partition),
  }
}


export function dataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructToHclTerraform(struct?: DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_users: {
      value: cdktf.numberToHclTerraform(struct!.activeUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_session: {
      value: cdktf.numberToHclTerraform(struct!.clearSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_end_address: {
      value: cdktf.stringToHclTerraform(struct!.insideEndAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_ip_list: {
      value: cdktf.stringToHclTerraform(struct!.insideIpList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_netmask: {
      value: cdktf.numberToHclTerraform(struct!.insideNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_start_address: {
      value: cdktf.stringToHclTerraform(struct!.insideStartAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeUsers = this._activeUsers;
    }
    if (this._clearSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSession = this._clearSession;
    }
    if (this._insideEndAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideEndAddress = this._insideEndAddress;
    }
    if (this._insideIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideIpList = this._insideIpList;
    }
    if (this._insideNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetmask = this._insideNetmask;
    }
    if (this._insideStartAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideStartAddress = this._insideStartAddress;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeUsers = undefined;
      this._clearSession = undefined;
      this._insideEndAddress = undefined;
      this._insideIpList = undefined;
      this._insideNetmask = undefined;
      this._insideStartAddress = undefined;
      this._partition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeUsers = value.activeUsers;
      this._clearSession = value.clearSession;
      this._insideEndAddress = value.insideEndAddress;
      this._insideIpList = value.insideIpList;
      this._insideNetmask = value.insideNetmask;
      this._insideStartAddress = value.insideStartAddress;
      this._partition = value.partition;
    }
  }

  // active_users - computed: false, optional: true, required: false
  private _activeUsers?: number; 
  public get activeUsers() {
    return this.getNumberAttribute('active_users');
  }
  public set activeUsers(value: number) {
    this._activeUsers = value;
  }
  public resetActiveUsers() {
    this._activeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeUsersInput() {
    return this._activeUsers;
  }

  // clear_session - computed: false, optional: true, required: false
  private _clearSession?: number; 
  public get clearSession() {
    return this.getNumberAttribute('clear_session');
  }
  public set clearSession(value: number) {
    this._clearSession = value;
  }
  public resetClearSession() {
    this._clearSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSessionInput() {
    return this._clearSession;
  }

  // inside_end_address - computed: false, optional: true, required: false
  private _insideEndAddress?: string; 
  public get insideEndAddress() {
    return this.getStringAttribute('inside_end_address');
  }
  public set insideEndAddress(value: string) {
    this._insideEndAddress = value;
  }
  public resetInsideEndAddress() {
    this._insideEndAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndAddressInput() {
    return this._insideEndAddress;
  }

  // inside_ip_list - computed: false, optional: true, required: false
  private _insideIpList?: string; 
  public get insideIpList() {
    return this.getStringAttribute('inside_ip_list');
  }
  public set insideIpList(value: string) {
    this._insideIpList = value;
  }
  public resetInsideIpList() {
    this._insideIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideIpListInput() {
    return this._insideIpList;
  }

  // inside_netmask - computed: false, optional: true, required: false
  private _insideNetmask?: number; 
  public get insideNetmask() {
    return this.getNumberAttribute('inside_netmask');
  }
  public set insideNetmask(value: number) {
    this._insideNetmask = value;
  }
  public resetInsideNetmask() {
    this._insideNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetmaskInput() {
    return this._insideNetmask;
  }

  // inside_start_address - computed: false, optional: true, required: false
  private _insideStartAddress?: string; 
  public get insideStartAddress() {
    return this.getStringAttribute('inside_start_address');
  }
  public set insideStartAddress(value: string) {
    this._insideStartAddress = value;
  }
  public resetInsideStartAddress() {
    this._insideStartAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStartAddressInput() {
    return this._insideStartAddress;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }
}

export class DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructOutputReference {
    return new DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6FixedNatDisabledConfigOperOper {
  /**
  * disabled_config_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#disabled_config_list DataThunderCgnv6FixedNatDisabledConfigOper#disabled_config_list}
  */
  readonly disabledConfigList?: DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6FixedNatDisabledConfigOperOperToTerraform(struct?: DataThunderCgnv6FixedNatDisabledConfigOperOperOutputReference | DataThunderCgnv6FixedNatDisabledConfigOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled_config_list: cdktf.listMapper(dataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructToTerraform, true)(struct!.disabledConfigList),
  }
}


export function dataThunderCgnv6FixedNatDisabledConfigOperOperToHclTerraform(struct?: DataThunderCgnv6FixedNatDisabledConfigOperOperOutputReference | DataThunderCgnv6FixedNatDisabledConfigOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled_config_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructToHclTerraform, true)(struct!.disabledConfigList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatDisabledConfigOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatDisabledConfigOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabledConfigList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledConfigList = this._disabledConfigList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatDisabledConfigOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabledConfigList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabledConfigList.internalValue = value.disabledConfigList;
    }
  }

  // disabled_config_list - computed: false, optional: true, required: false
  private _disabledConfigList = new DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStructList(this, "disabled_config_list", false);
  public get disabledConfigList() {
    return this._disabledConfigList;
  }
  public putDisabledConfigList(value: DataThunderCgnv6FixedNatDisabledConfigOperOperDisabledConfigListStruct[] | cdktf.IResolvable) {
    this._disabledConfigList.internalValue = value;
  }
  public resetDisabledConfigList() {
    this._disabledConfigList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledConfigListInput() {
    return this._disabledConfigList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper thunder_cgnv6_fixed_nat_disabled_config_oper}
*/
export class DataThunderCgnv6FixedNatDisabledConfigOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_disabled_config_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatDisabledConfigOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatDisabledConfigOper to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatDisabledConfigOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatDisabledConfigOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_disabled_config_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_disabled_config_oper thunder_cgnv6_fixed_nat_disabled_config_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatDisabledConfigOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatDisabledConfigOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_disabled_config_oper',
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
  private _oper = new DataThunderCgnv6FixedNatDisabledConfigOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6FixedNatDisabledConfigOperOper) {
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
      oper: dataThunderCgnv6FixedNatDisabledConfigOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6FixedNatDisabledConfigOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatDisabledConfigOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
