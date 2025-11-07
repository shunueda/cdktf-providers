// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnIkeSaOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#id DataThunderVpnIkeSaOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#oper DataThunderVpnIkeSaOper#oper}
  */
  readonly oper?: DataThunderVpnIkeSaOperOper;
}
export interface DataThunderVpnIkeSaOperOperIkeSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#encryption DataThunderVpnIkeSaOper#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#hash DataThunderVpnIkeSaOper#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#initiator_spi DataThunderVpnIkeSaOper#initiator_spi}
  */
  readonly initiatorSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#lifetime DataThunderVpnIkeSaOper#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#local_ip DataThunderVpnIkeSaOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#name DataThunderVpnIkeSaOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#nat_traversal DataThunderVpnIkeSaOper#nat_traversal}
  */
  readonly natTraversal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#remote_ip DataThunderVpnIkeSaOper#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#responder_spi DataThunderVpnIkeSaOper#responder_spi}
  */
  readonly responderSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#status DataThunderVpnIkeSaOper#status}
  */
  readonly status?: string;
}

export function dataThunderVpnIkeSaOperOperIkeSaListStructToTerraform(struct?: DataThunderVpnIkeSaOperOperIkeSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    hash: cdktf.stringToTerraform(struct!.hash),
    initiator_spi: cdktf.stringToTerraform(struct!.initiatorSpi),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    name: cdktf.stringToTerraform(struct!.name),
    nat_traversal: cdktf.numberToTerraform(struct!.natTraversal),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    responder_spi: cdktf.stringToTerraform(struct!.responderSpi),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderVpnIkeSaOperOperIkeSaListStructToHclTerraform(struct?: DataThunderVpnIkeSaOperOperIkeSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption: {
      value: cdktf.stringToHclTerraform(struct!.encryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_spi: {
      value: cdktf.stringToHclTerraform(struct!.initiatorSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
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
    nat_traversal: {
      value: cdktf.numberToHclTerraform(struct!.natTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder_spi: {
      value: cdktf.stringToHclTerraform(struct!.responderSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeSaOperOperIkeSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnIkeSaOperOperIkeSaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._initiatorSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorSpi = this._initiatorSpi;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._natTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTraversal = this._natTraversal;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._responderSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderSpi = this._responderSpi;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeSaOperOperIkeSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._hash = undefined;
      this._initiatorSpi = undefined;
      this._lifetime = undefined;
      this._localIp = undefined;
      this._name = undefined;
      this._natTraversal = undefined;
      this._remoteIp = undefined;
      this._responderSpi = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryption = value.encryption;
      this._hash = value.hash;
      this._initiatorSpi = value.initiatorSpi;
      this._lifetime = value.lifetime;
      this._localIp = value.localIp;
      this._name = value.name;
      this._natTraversal = value.natTraversal;
      this._remoteIp = value.remoteIp;
      this._responderSpi = value.responderSpi;
      this._status = value.status;
    }
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // hash - computed: false, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // initiator_spi - computed: false, optional: true, required: false
  private _initiatorSpi?: string; 
  public get initiatorSpi() {
    return this.getStringAttribute('initiator_spi');
  }
  public set initiatorSpi(value: string) {
    this._initiatorSpi = value;
  }
  public resetInitiatorSpi() {
    this._initiatorSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorSpiInput() {
    return this._initiatorSpi;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
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

  // nat_traversal - computed: false, optional: true, required: false
  private _natTraversal?: number; 
  public get natTraversal() {
    return this.getNumberAttribute('nat_traversal');
  }
  public set natTraversal(value: number) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // responder_spi - computed: false, optional: true, required: false
  private _responderSpi?: string; 
  public get responderSpi() {
    return this.getStringAttribute('responder_spi');
  }
  public set responderSpi(value: string) {
    this._responderSpi = value;
  }
  public resetResponderSpi() {
    this._responderSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderSpiInput() {
    return this._responderSpi;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataThunderVpnIkeSaOperOperIkeSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnIkeSaOperOperIkeSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnIkeSaOperOperIkeSaListStructOutputReference {
    return new DataThunderVpnIkeSaOperOperIkeSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnIkeSaOperOper {
  /**
  * ike_sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#ike_sa_list DataThunderVpnIkeSaOper#ike_sa_list}
  */
  readonly ikeSaList?: DataThunderVpnIkeSaOperOperIkeSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnIkeSaOperOperToTerraform(struct?: DataThunderVpnIkeSaOperOperOutputReference | DataThunderVpnIkeSaOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_sa_list: cdktf.listMapper(dataThunderVpnIkeSaOperOperIkeSaListStructToTerraform, true)(struct!.ikeSaList),
  }
}


export function dataThunderVpnIkeSaOperOperToHclTerraform(struct?: DataThunderVpnIkeSaOperOperOutputReference | DataThunderVpnIkeSaOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnIkeSaOperOperIkeSaListStructToHclTerraform, true)(struct!.ikeSaList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIkeSaOperOperIkeSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeSaOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIkeSaOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeSaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaList = this._ikeSaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeSaOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeSaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeSaList.internalValue = value.ikeSaList;
    }
  }

  // ike_sa_list - computed: false, optional: true, required: false
  private _ikeSaList = new DataThunderVpnIkeSaOperOperIkeSaListStructList(this, "ike_sa_list", false);
  public get ikeSaList() {
    return this._ikeSaList;
  }
  public putIkeSaList(value: DataThunderVpnIkeSaOperOperIkeSaListStruct[] | cdktf.IResolvable) {
    this._ikeSaList.internalValue = value;
  }
  public resetIkeSaList() {
    this._ikeSaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaListInput() {
    return this._ikeSaList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper thunder_vpn_ike_sa_oper}
*/
export class DataThunderVpnIkeSaOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ike_sa_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnIkeSaOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnIkeSaOper to import
  * @param importFromId The id of the existing DataThunderVpnIkeSaOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnIkeSaOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ike_sa_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_sa_oper thunder_vpn_ike_sa_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnIkeSaOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnIkeSaOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ike_sa_oper',
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
  private _oper = new DataThunderVpnIkeSaOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnIkeSaOperOper) {
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
      oper: dataThunderVpnIkeSaOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnIkeSaOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnIkeSaOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
