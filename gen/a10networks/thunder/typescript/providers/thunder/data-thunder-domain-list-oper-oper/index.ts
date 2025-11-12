// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDomainListOperOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#id DataThunderDomainListOperOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#oper DataThunderDomainListOperOper#oper}
  */
  readonly oper?: DataThunderDomainListOperOperOper;
}
export interface DataThunderDomainListOperOperOperDomainEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#domain_match_type DataThunderDomainListOperOper#domain_match_type}
  */
  readonly domainMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#domain_name DataThunderDomainListOperOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#zone_transfer_interval DataThunderDomainListOperOper#zone_transfer_interval}
  */
  readonly zoneTransferInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#zone_transfer_ip DataThunderDomainListOperOper#zone_transfer_ip}
  */
  readonly zoneTransferIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#zone_transfer_port DataThunderDomainListOperOper#zone_transfer_port}
  */
  readonly zoneTransferPort?: string;
}

export function dataThunderDomainListOperOperOperDomainEntriesToTerraform(struct?: DataThunderDomainListOperOperOperDomainEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_match_type: cdktf.stringToTerraform(struct!.domainMatchType),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    zone_transfer_interval: cdktf.stringToTerraform(struct!.zoneTransferInterval),
    zone_transfer_ip: cdktf.stringToTerraform(struct!.zoneTransferIp),
    zone_transfer_port: cdktf.stringToTerraform(struct!.zoneTransferPort),
  }
}


export function dataThunderDomainListOperOperOperDomainEntriesToHclTerraform(struct?: DataThunderDomainListOperOperOperDomainEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_match_type: {
      value: cdktf.stringToHclTerraform(struct!.domainMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_interval: {
      value: cdktf.stringToHclTerraform(struct!.zoneTransferInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_ip: {
      value: cdktf.stringToHclTerraform(struct!.zoneTransferIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_port: {
      value: cdktf.stringToHclTerraform(struct!.zoneTransferPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDomainListOperOperOperDomainEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDomainListOperOperOperDomainEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatchType = this._domainMatchType;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._zoneTransferInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferInterval = this._zoneTransferInterval;
    }
    if (this._zoneTransferIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferIp = this._zoneTransferIp;
    }
    if (this._zoneTransferPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferPort = this._zoneTransferPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDomainListOperOperOperDomainEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainMatchType = undefined;
      this._domainName = undefined;
      this._zoneTransferInterval = undefined;
      this._zoneTransferIp = undefined;
      this._zoneTransferPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainMatchType = value.domainMatchType;
      this._domainName = value.domainName;
      this._zoneTransferInterval = value.zoneTransferInterval;
      this._zoneTransferIp = value.zoneTransferIp;
      this._zoneTransferPort = value.zoneTransferPort;
    }
  }

  // domain_match_type - computed: false, optional: true, required: false
  private _domainMatchType?: string; 
  public get domainMatchType() {
    return this.getStringAttribute('domain_match_type');
  }
  public set domainMatchType(value: string) {
    this._domainMatchType = value;
  }
  public resetDomainMatchType() {
    this._domainMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchTypeInput() {
    return this._domainMatchType;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // zone_transfer_interval - computed: false, optional: true, required: false
  private _zoneTransferInterval?: string; 
  public get zoneTransferInterval() {
    return this.getStringAttribute('zone_transfer_interval');
  }
  public set zoneTransferInterval(value: string) {
    this._zoneTransferInterval = value;
  }
  public resetZoneTransferInterval() {
    this._zoneTransferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferIntervalInput() {
    return this._zoneTransferInterval;
  }

  // zone_transfer_ip - computed: false, optional: true, required: false
  private _zoneTransferIp?: string; 
  public get zoneTransferIp() {
    return this.getStringAttribute('zone_transfer_ip');
  }
  public set zoneTransferIp(value: string) {
    this._zoneTransferIp = value;
  }
  public resetZoneTransferIp() {
    this._zoneTransferIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferIpInput() {
    return this._zoneTransferIp;
  }

  // zone_transfer_port - computed: false, optional: true, required: false
  private _zoneTransferPort?: string; 
  public get zoneTransferPort() {
    return this.getStringAttribute('zone_transfer_port');
  }
  public set zoneTransferPort(value: string) {
    this._zoneTransferPort = value;
  }
  public resetZoneTransferPort() {
    this._zoneTransferPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferPortInput() {
    return this._zoneTransferPort;
  }
}

export class DataThunderDomainListOperOperOperDomainEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDomainListOperOperOperDomainEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDomainListOperOperOperDomainEntriesOutputReference {
    return new DataThunderDomainListOperOperOperDomainEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDomainListOperOperOperDomainListBindingInfoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#domain_group_name DataThunderDomainListOperOper#domain_group_name}
  */
  readonly domainGroupName?: string;
}

export function dataThunderDomainListOperOperOperDomainListBindingInfoListStructToTerraform(struct?: DataThunderDomainListOperOperOperDomainListBindingInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_group_name: cdktf.stringToTerraform(struct!.domainGroupName),
  }
}


export function dataThunderDomainListOperOperOperDomainListBindingInfoListStructToHclTerraform(struct?: DataThunderDomainListOperOperOperDomainListBindingInfoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_group_name: {
      value: cdktf.stringToHclTerraform(struct!.domainGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDomainListOperOperOperDomainListBindingInfoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDomainListOperOperOperDomainListBindingInfoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainGroupName = this._domainGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDomainListOperOperOperDomainListBindingInfoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainGroupName = value.domainGroupName;
    }
  }

  // domain_group_name - computed: false, optional: true, required: false
  private _domainGroupName?: string; 
  public get domainGroupName() {
    return this.getStringAttribute('domain_group_name');
  }
  public set domainGroupName(value: string) {
    this._domainGroupName = value;
  }
  public resetDomainGroupName() {
    this._domainGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupNameInput() {
    return this._domainGroupName;
  }
}

export class DataThunderDomainListOperOperOperDomainListBindingInfoListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDomainListOperOperOperDomainListBindingInfoListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDomainListOperOperOperDomainListBindingInfoListStructOutputReference {
    return new DataThunderDomainListOperOperOperDomainListBindingInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDomainListOperOperOperDomainListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#binding_num DataThunderDomainListOperOper#binding_num}
  */
  readonly bindingNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#config_type DataThunderDomainListOperOper#config_type}
  */
  readonly configType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#domain_list_name DataThunderDomainListOperOper#domain_list_name}
  */
  readonly domainListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#total_entry_num DataThunderDomainListOperOper#total_entry_num}
  */
  readonly totalEntryNum?: number;
  /**
  * binding_info_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#binding_info_list DataThunderDomainListOperOper#binding_info_list}
  */
  readonly bindingInfoList?: DataThunderDomainListOperOperOperDomainListBindingInfoListStruct[] | cdktf.IResolvable;
}

export function dataThunderDomainListOperOperOperDomainListStructToTerraform(struct?: DataThunderDomainListOperOperOperDomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_num: cdktf.numberToTerraform(struct!.bindingNum),
    config_type: cdktf.stringToTerraform(struct!.configType),
    domain_list_name: cdktf.stringToTerraform(struct!.domainListName),
    total_entry_num: cdktf.numberToTerraform(struct!.totalEntryNum),
    binding_info_list: cdktf.listMapper(dataThunderDomainListOperOperOperDomainListBindingInfoListStructToTerraform, true)(struct!.bindingInfoList),
  }
}


export function dataThunderDomainListOperOperOperDomainListStructToHclTerraform(struct?: DataThunderDomainListOperOperOperDomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_num: {
      value: cdktf.numberToHclTerraform(struct!.bindingNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_type: {
      value: cdktf.stringToHclTerraform(struct!.configType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_list_name: {
      value: cdktf.stringToHclTerraform(struct!.domainListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_entry_num: {
      value: cdktf.numberToHclTerraform(struct!.totalEntryNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    binding_info_list: {
      value: cdktf.listMapperHcl(dataThunderDomainListOperOperOperDomainListBindingInfoListStructToHclTerraform, true)(struct!.bindingInfoList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDomainListOperOperOperDomainListBindingInfoListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDomainListOperOperOperDomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDomainListOperOperOperDomainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingNum = this._bindingNum;
    }
    if (this._configType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configType = this._configType;
    }
    if (this._domainListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainListName = this._domainListName;
    }
    if (this._totalEntryNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntryNum = this._totalEntryNum;
    }
    if (this._bindingInfoList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingInfoList = this._bindingInfoList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDomainListOperOperOperDomainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindingNum = undefined;
      this._configType = undefined;
      this._domainListName = undefined;
      this._totalEntryNum = undefined;
      this._bindingInfoList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindingNum = value.bindingNum;
      this._configType = value.configType;
      this._domainListName = value.domainListName;
      this._totalEntryNum = value.totalEntryNum;
      this._bindingInfoList.internalValue = value.bindingInfoList;
    }
  }

  // binding_num - computed: false, optional: true, required: false
  private _bindingNum?: number; 
  public get bindingNum() {
    return this.getNumberAttribute('binding_num');
  }
  public set bindingNum(value: number) {
    this._bindingNum = value;
  }
  public resetBindingNum() {
    this._bindingNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingNumInput() {
    return this._bindingNum;
  }

  // config_type - computed: false, optional: true, required: false
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // domain_list_name - computed: false, optional: true, required: false
  private _domainListName?: string; 
  public get domainListName() {
    return this.getStringAttribute('domain_list_name');
  }
  public set domainListName(value: string) {
    this._domainListName = value;
  }
  public resetDomainListName() {
    this._domainListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListNameInput() {
    return this._domainListName;
  }

  // total_entry_num - computed: false, optional: true, required: false
  private _totalEntryNum?: number; 
  public get totalEntryNum() {
    return this.getNumberAttribute('total_entry_num');
  }
  public set totalEntryNum(value: number) {
    this._totalEntryNum = value;
  }
  public resetTotalEntryNum() {
    this._totalEntryNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntryNumInput() {
    return this._totalEntryNum;
  }

  // binding_info_list - computed: false, optional: true, required: false
  private _bindingInfoList = new DataThunderDomainListOperOperOperDomainListBindingInfoListStructList(this, "binding_info_list", false);
  public get bindingInfoList() {
    return this._bindingInfoList;
  }
  public putBindingInfoList(value: DataThunderDomainListOperOperOperDomainListBindingInfoListStruct[] | cdktf.IResolvable) {
    this._bindingInfoList.internalValue = value;
  }
  public resetBindingInfoList() {
    this._bindingInfoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInfoListInput() {
    return this._bindingInfoList.internalValue;
  }
}

export class DataThunderDomainListOperOperOperDomainListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDomainListOperOperOperDomainListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDomainListOperOperOperDomainListStructOutputReference {
    return new DataThunderDomainListOperOperOperDomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDomainListOperOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#binding_info DataThunderDomainListOperOper#binding_info}
  */
  readonly bindingInfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#displayed_count DataThunderDomainListOperOper#displayed_count}
  */
  readonly displayedCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#domain_list_name_filter DataThunderDomainListOperOper#domain_list_name_filter}
  */
  readonly domainListNameFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#domain_list_type DataThunderDomainListOperOper#domain_list_type}
  */
  readonly domainListType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#match_type DataThunderDomainListOperOper#match_type}
  */
  readonly matchType?: string;
  /**
  * domain_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#domain_entries DataThunderDomainListOperOper#domain_entries}
  */
  readonly domainEntries?: DataThunderDomainListOperOperOperDomainEntries[] | cdktf.IResolvable;
  /**
  * domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#domain_list DataThunderDomainListOperOper#domain_list}
  */
  readonly domainList?: DataThunderDomainListOperOperOperDomainListStruct[] | cdktf.IResolvable;
}

export function dataThunderDomainListOperOperOperToTerraform(struct?: DataThunderDomainListOperOperOperOutputReference | DataThunderDomainListOperOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_info: cdktf.numberToTerraform(struct!.bindingInfo),
    displayed_count: cdktf.numberToTerraform(struct!.displayedCount),
    domain_list_name_filter: cdktf.stringToTerraform(struct!.domainListNameFilter),
    domain_list_type: cdktf.stringToTerraform(struct!.domainListType),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    domain_entries: cdktf.listMapper(dataThunderDomainListOperOperOperDomainEntriesToTerraform, true)(struct!.domainEntries),
    domain_list: cdktf.listMapper(dataThunderDomainListOperOperOperDomainListStructToTerraform, true)(struct!.domainList),
  }
}


export function dataThunderDomainListOperOperOperToHclTerraform(struct?: DataThunderDomainListOperOperOperOutputReference | DataThunderDomainListOperOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_info: {
      value: cdktf.numberToHclTerraform(struct!.bindingInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    displayed_count: {
      value: cdktf.numberToHclTerraform(struct!.displayedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_list_name_filter: {
      value: cdktf.stringToHclTerraform(struct!.domainListNameFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_list_type: {
      value: cdktf.stringToHclTerraform(struct!.domainListType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_entries: {
      value: cdktf.listMapperHcl(dataThunderDomainListOperOperOperDomainEntriesToHclTerraform, true)(struct!.domainEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDomainListOperOperOperDomainEntriesList",
    },
    domain_list: {
      value: cdktf.listMapperHcl(dataThunderDomainListOperOperOperDomainListStructToHclTerraform, true)(struct!.domainList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDomainListOperOperOperDomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDomainListOperOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDomainListOperOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingInfo = this._bindingInfo;
    }
    if (this._displayedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayedCount = this._displayedCount;
    }
    if (this._domainListNameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainListNameFilter = this._domainListNameFilter;
    }
    if (this._domainListType !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainListType = this._domainListType;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._domainEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainEntries = this._domainEntries?.internalValue;
    }
    if (this._domainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainList = this._domainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDomainListOperOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bindingInfo = undefined;
      this._displayedCount = undefined;
      this._domainListNameFilter = undefined;
      this._domainListType = undefined;
      this._matchType = undefined;
      this._domainEntries.internalValue = undefined;
      this._domainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bindingInfo = value.bindingInfo;
      this._displayedCount = value.displayedCount;
      this._domainListNameFilter = value.domainListNameFilter;
      this._domainListType = value.domainListType;
      this._matchType = value.matchType;
      this._domainEntries.internalValue = value.domainEntries;
      this._domainList.internalValue = value.domainList;
    }
  }

  // binding_info - computed: false, optional: true, required: false
  private _bindingInfo?: number; 
  public get bindingInfo() {
    return this.getNumberAttribute('binding_info');
  }
  public set bindingInfo(value: number) {
    this._bindingInfo = value;
  }
  public resetBindingInfo() {
    this._bindingInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInfoInput() {
    return this._bindingInfo;
  }

  // displayed_count - computed: false, optional: true, required: false
  private _displayedCount?: number; 
  public get displayedCount() {
    return this.getNumberAttribute('displayed_count');
  }
  public set displayedCount(value: number) {
    this._displayedCount = value;
  }
  public resetDisplayedCount() {
    this._displayedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayedCountInput() {
    return this._displayedCount;
  }

  // domain_list_name_filter - computed: false, optional: true, required: false
  private _domainListNameFilter?: string; 
  public get domainListNameFilter() {
    return this.getStringAttribute('domain_list_name_filter');
  }
  public set domainListNameFilter(value: string) {
    this._domainListNameFilter = value;
  }
  public resetDomainListNameFilter() {
    this._domainListNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListNameFilterInput() {
    return this._domainListNameFilter;
  }

  // domain_list_type - computed: false, optional: true, required: false
  private _domainListType?: string; 
  public get domainListType() {
    return this.getStringAttribute('domain_list_type');
  }
  public set domainListType(value: string) {
    this._domainListType = value;
  }
  public resetDomainListType() {
    this._domainListType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListTypeInput() {
    return this._domainListType;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // domain_entries - computed: false, optional: true, required: false
  private _domainEntries = new DataThunderDomainListOperOperOperDomainEntriesList(this, "domain_entries", false);
  public get domainEntries() {
    return this._domainEntries;
  }
  public putDomainEntries(value: DataThunderDomainListOperOperOperDomainEntries[] | cdktf.IResolvable) {
    this._domainEntries.internalValue = value;
  }
  public resetDomainEntries() {
    this._domainEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEntriesInput() {
    return this._domainEntries.internalValue;
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList = new DataThunderDomainListOperOperOperDomainListStructList(this, "domain_list", false);
  public get domainList() {
    return this._domainList;
  }
  public putDomainList(value: DataThunderDomainListOperOperOperDomainListStruct[] | cdktf.IResolvable) {
    this._domainList.internalValue = value;
  }
  public resetDomainList() {
    this._domainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainListInput() {
    return this._domainList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper thunder_domain_list_oper_oper}
*/
export class DataThunderDomainListOperOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_domain_list_oper_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDomainListOperOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDomainListOperOper to import
  * @param importFromId The id of the existing DataThunderDomainListOperOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDomainListOperOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_domain_list_oper_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/domain_list_oper_oper thunder_domain_list_oper_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDomainListOperOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDomainListOperOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_domain_list_oper_oper',
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
  private _oper = new DataThunderDomainListOperOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDomainListOperOperOper) {
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
      oper: dataThunderDomainListOperOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDomainListOperOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDomainListOperOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
