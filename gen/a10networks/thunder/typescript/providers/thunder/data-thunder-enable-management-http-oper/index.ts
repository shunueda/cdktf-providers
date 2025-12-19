// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderEnableManagementHttpOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#id DataThunderEnableManagementHttpOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#oper DataThunderEnableManagementHttpOper#oper}
  */
  readonly oper?: DataThunderEnableManagementHttpOperOper;
}
export interface DataThunderEnableManagementHttpOperOperPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#action DataThunderEnableManagementHttpOper#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#ethernet DataThunderEnableManagementHttpOper#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#ipv4_acl DataThunderEnableManagementHttpOper#ipv4_acl}
  */
  readonly ipv4Acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#ipv6_acl DataThunderEnableManagementHttpOper#ipv6_acl}
  */
  readonly ipv6Acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#lif DataThunderEnableManagementHttpOper#lif}
  */
  readonly lif?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#management DataThunderEnableManagementHttpOper#management}
  */
  readonly management?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#tunnel DataThunderEnableManagementHttpOper#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#ve DataThunderEnableManagementHttpOper#ve}
  */
  readonly ve?: number;
}

export function dataThunderEnableManagementHttpOperOperPortListStructToTerraform(struct?: DataThunderEnableManagementHttpOperOperPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    ipv4_acl: cdktf.stringToTerraform(struct!.ipv4Acl),
    ipv6_acl: cdktf.stringToTerraform(struct!.ipv6Acl),
    lif: cdktf.stringToTerraform(struct!.lif),
    management: cdktf.numberToTerraform(struct!.management),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function dataThunderEnableManagementHttpOperOperPortListStructToHclTerraform(struct?: DataThunderEnableManagementHttpOperOperPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_acl: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_acl: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management: {
      value: cdktf.numberToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderEnableManagementHttpOperOperPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderEnableManagementHttpOperOperPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._ipv4Acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Acl = this._ipv4Acl;
    }
    if (this._ipv6Acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Acl = this._ipv6Acl;
    }
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderEnableManagementHttpOperOperPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ethernet = undefined;
      this._ipv4Acl = undefined;
      this._ipv6Acl = undefined;
      this._lif = undefined;
      this._management = undefined;
      this._tunnel = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ethernet = value.ethernet;
      this._ipv4Acl = value.ipv4Acl;
      this._ipv6Acl = value.ipv6Acl;
      this._lif = value.lif;
      this._management = value.management;
      this._tunnel = value.tunnel;
      this._ve = value.ve;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // ipv4_acl - computed: false, optional: true, required: false
  private _ipv4Acl?: string; 
  public get ipv4Acl() {
    return this.getStringAttribute('ipv4_acl');
  }
  public set ipv4Acl(value: string) {
    this._ipv4Acl = value;
  }
  public resetIpv4Acl() {
    this._ipv4Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclInput() {
    return this._ipv4Acl;
  }

  // ipv6_acl - computed: false, optional: true, required: false
  private _ipv6Acl?: string; 
  public get ipv6Acl() {
    return this.getStringAttribute('ipv6_acl');
  }
  public set ipv6Acl(value: string) {
    this._ipv6Acl = value;
  }
  public resetIpv6Acl() {
    this._ipv6Acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclInput() {
    return this._ipv6Acl;
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // management - computed: false, optional: true, required: false
  private _management?: number; 
  public get management() {
    return this.getNumberAttribute('management');
  }
  public set management(value: number) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class DataThunderEnableManagementHttpOperOperPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderEnableManagementHttpOperOperPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderEnableManagementHttpOperOperPortListStructOutputReference {
    return new DataThunderEnableManagementHttpOperOperPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderEnableManagementHttpOperOper {
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#port_list DataThunderEnableManagementHttpOper#port_list}
  */
  readonly portList?: DataThunderEnableManagementHttpOperOperPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderEnableManagementHttpOperOperToTerraform(struct?: DataThunderEnableManagementHttpOperOperOutputReference | DataThunderEnableManagementHttpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_list: cdktf.listMapper(dataThunderEnableManagementHttpOperOperPortListStructToTerraform, true)(struct!.portList),
  }
}


export function dataThunderEnableManagementHttpOperOperToHclTerraform(struct?: DataThunderEnableManagementHttpOperOperOutputReference | DataThunderEnableManagementHttpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_list: {
      value: cdktf.listMapperHcl(dataThunderEnableManagementHttpOperOperPortListStructToHclTerraform, true)(struct!.portList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderEnableManagementHttpOperOperPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderEnableManagementHttpOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderEnableManagementHttpOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderEnableManagementHttpOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portList.internalValue = value.portList;
    }
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new DataThunderEnableManagementHttpOperOperPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DataThunderEnableManagementHttpOperOperPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper thunder_enable_management_http_oper}
*/
export class DataThunderEnableManagementHttpOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_enable_management_http_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderEnableManagementHttpOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderEnableManagementHttpOper to import
  * @param importFromId The id of the existing DataThunderEnableManagementHttpOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderEnableManagementHttpOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_enable_management_http_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/enable_management_http_oper thunder_enable_management_http_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderEnableManagementHttpOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderEnableManagementHttpOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_enable_management_http_oper',
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
  private _oper = new DataThunderEnableManagementHttpOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderEnableManagementHttpOperOper) {
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
      oper: dataThunderEnableManagementHttpOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderEnableManagementHttpOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderEnableManagementHttpOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
