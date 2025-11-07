// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnIpsecSaClientsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#id DataThunderVpnIpsecSaClientsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#oper DataThunderVpnIpsecSaClientsOper#oper}
  */
  readonly oper?: DataThunderVpnIpsecSaClientsOperOper;
}
export interface DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#in_spi DataThunderVpnIpsecSaClientsOper#in_spi}
  */
  readonly inSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#lifebytes DataThunderVpnIpsecSaClientsOper#lifebytes}
  */
  readonly lifebytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#lifetime DataThunderVpnIpsecSaClientsOper#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#local_ts DataThunderVpnIpsecSaClientsOper#local_ts}
  */
  readonly localTs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#name DataThunderVpnIpsecSaClientsOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#out_spi DataThunderVpnIpsecSaClientsOper#out_spi}
  */
  readonly outSpi?: string;
}

export function dataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructToTerraform(struct?: DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_spi: cdktf.stringToTerraform(struct!.inSpi),
    lifebytes: cdktf.stringToTerraform(struct!.lifebytes),
    lifetime: cdktf.stringToTerraform(struct!.lifetime),
    local_ts: cdktf.stringToTerraform(struct!.localTs),
    name: cdktf.stringToTerraform(struct!.name),
    out_spi: cdktf.stringToTerraform(struct!.outSpi),
  }
}


export function dataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructToHclTerraform(struct?: DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_spi: {
      value: cdktf.stringToHclTerraform(struct!.inSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifebytes: {
      value: cdktf.stringToHclTerraform(struct!.lifebytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.stringToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ts: {
      value: cdktf.stringToHclTerraform(struct!.localTs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_spi: {
      value: cdktf.stringToHclTerraform(struct!.outSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSpi = this._inSpi;
    }
    if (this._lifebytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifebytes = this._lifebytes;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localTs = this._localTs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.outSpi = this._outSpi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inSpi = undefined;
      this._lifebytes = undefined;
      this._lifetime = undefined;
      this._localTs = undefined;
      this._name = undefined;
      this._outSpi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inSpi = value.inSpi;
      this._lifebytes = value.lifebytes;
      this._lifetime = value.lifetime;
      this._localTs = value.localTs;
      this._name = value.name;
      this._outSpi = value.outSpi;
    }
  }

  // in_spi - computed: false, optional: true, required: false
  private _inSpi?: string; 
  public get inSpi() {
    return this.getStringAttribute('in_spi');
  }
  public set inSpi(value: string) {
    this._inSpi = value;
  }
  public resetInSpi() {
    this._inSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSpiInput() {
    return this._inSpi;
  }

  // lifebytes - computed: false, optional: true, required: false
  private _lifebytes?: string; 
  public get lifebytes() {
    return this.getStringAttribute('lifebytes');
  }
  public set lifebytes(value: string) {
    this._lifebytes = value;
  }
  public resetLifebytes() {
    this._lifebytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifebytesInput() {
    return this._lifebytes;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ts - computed: false, optional: true, required: false
  private _localTs?: string; 
  public get localTs() {
    return this.getStringAttribute('local_ts');
  }
  public set localTs(value: string) {
    this._localTs = value;
  }
  public resetLocalTs() {
    this._localTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTsInput() {
    return this._localTs;
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

  // out_spi - computed: false, optional: true, required: false
  private _outSpi?: string; 
  public get outSpi() {
    return this.getStringAttribute('out_spi');
  }
  public set outSpi(value: string) {
    this._outSpi = value;
  }
  public resetOutSpi() {
    this._outSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outSpiInput() {
    return this._outSpi;
  }
}

export class DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructOutputReference {
    return new DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnIpsecSaClientsOperOperIpsecClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#ipsec_clients_ip DataThunderVpnIpsecSaClientsOper#ipsec_clients_ip}
  */
  readonly ipsecClientsIp?: string;
  /**
  * sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#sa_list DataThunderVpnIpsecSaClientsOper#sa_list}
  */
  readonly saList?: DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnIpsecSaClientsOperOperIpsecClientsToTerraform(struct?: DataThunderVpnIpsecSaClientsOperOperIpsecClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_clients_ip: cdktf.stringToTerraform(struct!.ipsecClientsIp),
    sa_list: cdktf.listMapper(dataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructToTerraform, true)(struct!.saList),
  }
}


export function dataThunderVpnIpsecSaClientsOperOperIpsecClientsToHclTerraform(struct?: DataThunderVpnIpsecSaClientsOperOperIpsecClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_clients_ip: {
      value: cdktf.stringToHclTerraform(struct!.ipsecClientsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructToHclTerraform, true)(struct!.saList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIpsecSaClientsOperOperIpsecClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnIpsecSaClientsOperOperIpsecClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecClientsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecClientsIp = this._ipsecClientsIp;
    }
    if (this._saList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saList = this._saList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIpsecSaClientsOperOperIpsecClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipsecClientsIp = undefined;
      this._saList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipsecClientsIp = value.ipsecClientsIp;
      this._saList.internalValue = value.saList;
    }
  }

  // ipsec_clients_ip - computed: false, optional: true, required: false
  private _ipsecClientsIp?: string; 
  public get ipsecClientsIp() {
    return this.getStringAttribute('ipsec_clients_ip');
  }
  public set ipsecClientsIp(value: string) {
    this._ipsecClientsIp = value;
  }
  public resetIpsecClientsIp() {
    this._ipsecClientsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecClientsIpInput() {
    return this._ipsecClientsIp;
  }

  // sa_list - computed: false, optional: true, required: false
  private _saList = new DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStructList(this, "sa_list", false);
  public get saList() {
    return this._saList;
  }
  public putSaList(value: DataThunderVpnIpsecSaClientsOperOperIpsecClientsSaListStruct[] | cdktf.IResolvable) {
    this._saList.internalValue = value;
  }
  public resetSaList() {
    this._saList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saListInput() {
    return this._saList.internalValue;
  }
}

export class DataThunderVpnIpsecSaClientsOperOperIpsecClientsList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnIpsecSaClientsOperOperIpsecClients[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnIpsecSaClientsOperOperIpsecClientsOutputReference {
    return new DataThunderVpnIpsecSaClientsOperOperIpsecClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnIpsecSaClientsOperOper {
  /**
  * ipsec_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#ipsec_clients DataThunderVpnIpsecSaClientsOper#ipsec_clients}
  */
  readonly ipsecClients?: DataThunderVpnIpsecSaClientsOperOperIpsecClients[] | cdktf.IResolvable;
}

export function dataThunderVpnIpsecSaClientsOperOperToTerraform(struct?: DataThunderVpnIpsecSaClientsOperOperOutputReference | DataThunderVpnIpsecSaClientsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_clients: cdktf.listMapper(dataThunderVpnIpsecSaClientsOperOperIpsecClientsToTerraform, true)(struct!.ipsecClients),
  }
}


export function dataThunderVpnIpsecSaClientsOperOperToHclTerraform(struct?: DataThunderVpnIpsecSaClientsOperOperOutputReference | DataThunderVpnIpsecSaClientsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_clients: {
      value: cdktf.listMapperHcl(dataThunderVpnIpsecSaClientsOperOperIpsecClientsToHclTerraform, true)(struct!.ipsecClients),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIpsecSaClientsOperOperIpsecClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIpsecSaClientsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIpsecSaClientsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecClients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecClients = this._ipsecClients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIpsecSaClientsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipsecClients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipsecClients.internalValue = value.ipsecClients;
    }
  }

  // ipsec_clients - computed: false, optional: true, required: false
  private _ipsecClients = new DataThunderVpnIpsecSaClientsOperOperIpsecClientsList(this, "ipsec_clients", false);
  public get ipsecClients() {
    return this._ipsecClients;
  }
  public putIpsecClients(value: DataThunderVpnIpsecSaClientsOperOperIpsecClients[] | cdktf.IResolvable) {
    this._ipsecClients.internalValue = value;
  }
  public resetIpsecClients() {
    this._ipsecClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecClientsInput() {
    return this._ipsecClients.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper thunder_vpn_ipsec_sa_clients_oper}
*/
export class DataThunderVpnIpsecSaClientsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ipsec_sa_clients_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnIpsecSaClientsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnIpsecSaClientsOper to import
  * @param importFromId The id of the existing DataThunderVpnIpsecSaClientsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnIpsecSaClientsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ipsec_sa_clients_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ipsec_sa_clients_oper thunder_vpn_ipsec_sa_clients_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnIpsecSaClientsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnIpsecSaClientsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ipsec_sa_clients_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _oper = new DataThunderVpnIpsecSaClientsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnIpsecSaClientsOperOper) {
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
      oper: dataThunderVpnIpsecSaClientsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnIpsecSaClientsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnIpsecSaClientsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
