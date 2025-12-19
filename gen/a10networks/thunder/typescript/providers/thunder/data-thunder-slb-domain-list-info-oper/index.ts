// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbDomainListInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#id DataThunderSlbDomainListInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#oper DataThunderSlbDomainListInfoOper#oper}
  */
  readonly oper?: DataThunderSlbDomainListInfoOperOper;
}
export interface DataThunderSlbDomainListInfoOperOperDomainListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#domain_name DataThunderSlbDomainListInfoOper#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#hit_count DataThunderSlbDomainListInfoOper#hit_count}
  */
  readonly hitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#ip DataThunderSlbDomainListInfoOper#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#ip_number DataThunderSlbDomainListInfoOper#ip_number}
  */
  readonly ipNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#is_ipv6 DataThunderSlbDomainListInfoOper#is_ipv6}
  */
  readonly isIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#name DataThunderSlbDomainListInfoOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#resolved DataThunderSlbDomainListInfoOper#resolved}
  */
  readonly resolved?: number;
}

export function dataThunderSlbDomainListInfoOperOperDomainListStructToTerraform(struct?: DataThunderSlbDomainListInfoOperOperDomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    hit_count: cdktf.numberToTerraform(struct!.hitCount),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_number: cdktf.numberToTerraform(struct!.ipNumber),
    is_ipv6: cdktf.numberToTerraform(struct!.isIpv6),
    name: cdktf.stringToTerraform(struct!.name),
    resolved: cdktf.numberToTerraform(struct!.resolved),
  }
}


export function dataThunderSlbDomainListInfoOperOperDomainListStructToHclTerraform(struct?: DataThunderSlbDomainListInfoOperOperDomainListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hit_count: {
      value: cdktf.numberToHclTerraform(struct!.hitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_number: {
      value: cdktf.numberToHclTerraform(struct!.ipNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.isIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolved: {
      value: cdktf.numberToHclTerraform(struct!.resolved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDomainListInfoOperOperDomainListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbDomainListInfoOperOperDomainListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._hitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitCount = this._hitCount;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNumber = this._ipNumber;
    }
    if (this._isIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIpv6 = this._isIpv6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resolved !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolved = this._resolved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDomainListInfoOperOperDomainListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._hitCount = undefined;
      this._ip = undefined;
      this._ipNumber = undefined;
      this._isIpv6 = undefined;
      this._name = undefined;
      this._resolved = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._hitCount = value.hitCount;
      this._ip = value.ip;
      this._ipNumber = value.ipNumber;
      this._isIpv6 = value.isIpv6;
      this._name = value.name;
      this._resolved = value.resolved;
    }
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

  // hit_count - computed: false, optional: true, required: false
  private _hitCount?: number; 
  public get hitCount() {
    return this.getNumberAttribute('hit_count');
  }
  public set hitCount(value: number) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_number - computed: false, optional: true, required: false
  private _ipNumber?: number; 
  public get ipNumber() {
    return this.getNumberAttribute('ip_number');
  }
  public set ipNumber(value: number) {
    this._ipNumber = value;
  }
  public resetIpNumber() {
    this._ipNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNumberInput() {
    return this._ipNumber;
  }

  // is_ipv6 - computed: false, optional: true, required: false
  private _isIpv6?: number; 
  public get isIpv6() {
    return this.getNumberAttribute('is_ipv6');
  }
  public set isIpv6(value: number) {
    this._isIpv6 = value;
  }
  public resetIsIpv6() {
    this._isIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6Input() {
    return this._isIpv6;
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

  // resolved - computed: false, optional: true, required: false
  private _resolved?: number; 
  public get resolved() {
    return this.getNumberAttribute('resolved');
  }
  public set resolved(value: number) {
    this._resolved = value;
  }
  public resetResolved() {
    this._resolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedInput() {
    return this._resolved;
  }
}

export class DataThunderSlbDomainListInfoOperOperDomainListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbDomainListInfoOperOperDomainListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbDomainListInfoOperOperDomainListStructOutputReference {
    return new DataThunderSlbDomainListInfoOperOperDomainListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbDomainListInfoOperOper {
  /**
  * domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#domain_list DataThunderSlbDomainListInfoOper#domain_list}
  */
  readonly domainList?: DataThunderSlbDomainListInfoOperOperDomainListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbDomainListInfoOperOperToTerraform(struct?: DataThunderSlbDomainListInfoOperOperOutputReference | DataThunderSlbDomainListInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_list: cdktf.listMapper(dataThunderSlbDomainListInfoOperOperDomainListStructToTerraform, true)(struct!.domainList),
  }
}


export function dataThunderSlbDomainListInfoOperOperToHclTerraform(struct?: DataThunderSlbDomainListInfoOperOperOutputReference | DataThunderSlbDomainListInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_list: {
      value: cdktf.listMapperHcl(dataThunderSlbDomainListInfoOperOperDomainListStructToHclTerraform, true)(struct!.domainList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbDomainListInfoOperOperDomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDomainListInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbDomainListInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainList = this._domainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDomainListInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainList.internalValue = value.domainList;
    }
  }

  // domain_list - computed: false, optional: true, required: false
  private _domainList = new DataThunderSlbDomainListInfoOperOperDomainListStructList(this, "domain_list", false);
  public get domainList() {
    return this._domainList;
  }
  public putDomainList(value: DataThunderSlbDomainListInfoOperOperDomainListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper thunder_slb_domain_list_info_oper}
*/
export class DataThunderSlbDomainListInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_domain_list_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbDomainListInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbDomainListInfoOper to import
  * @param importFromId The id of the existing DataThunderSlbDomainListInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbDomainListInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_domain_list_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_domain_list_info_oper thunder_slb_domain_list_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbDomainListInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbDomainListInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_domain_list_info_oper',
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
  private _oper = new DataThunderSlbDomainListInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbDomainListInfoOperOper) {
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
      oper: dataThunderSlbDomainListInfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbDomainListInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbDomainListInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
