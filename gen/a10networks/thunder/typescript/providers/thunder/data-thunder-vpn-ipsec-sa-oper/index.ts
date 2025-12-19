// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnIpsecSaOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#id DataThunderVpnIpsecSaOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#oper DataThunderVpnIpsecSaOper#oper}
  */
  readonly oper?: DataThunderVpnIpsecSaOperOper;
}
export interface DataThunderVpnIpsecSaOperOperIpsecSaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#encryption DataThunderVpnIpsecSaOper#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#hash DataThunderVpnIpsecSaOper#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#ike_gateway_name DataThunderVpnIpsecSaOper#ike_gateway_name}
  */
  readonly ikeGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#in_spi DataThunderVpnIpsecSaOper#in_spi}
  */
  readonly inSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#ipsec_sa_name DataThunderVpnIpsecSaOper#ipsec_sa_name}
  */
  readonly ipsecSaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#lifebytes DataThunderVpnIpsecSaOper#lifebytes}
  */
  readonly lifebytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#lifetime DataThunderVpnIpsecSaOper#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#local_ts DataThunderVpnIpsecSaOper#local_ts}
  */
  readonly localTs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#mode DataThunderVpnIpsecSaOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#out_spi DataThunderVpnIpsecSaOper#out_spi}
  */
  readonly outSpi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#protocol DataThunderVpnIpsecSaOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#remote_ts DataThunderVpnIpsecSaOper#remote_ts}
  */
  readonly remoteTs?: string;
}

export function dataThunderVpnIpsecSaOperOperIpsecSaListStructToTerraform(struct?: DataThunderVpnIpsecSaOperOperIpsecSaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    hash: cdktf.stringToTerraform(struct!.hash),
    ike_gateway_name: cdktf.stringToTerraform(struct!.ikeGatewayName),
    in_spi: cdktf.stringToTerraform(struct!.inSpi),
    ipsec_sa_name: cdktf.stringToTerraform(struct!.ipsecSaName),
    lifebytes: cdktf.stringToTerraform(struct!.lifebytes),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    local_ts: cdktf.stringToTerraform(struct!.localTs),
    mode: cdktf.stringToTerraform(struct!.mode),
    out_spi: cdktf.stringToTerraform(struct!.outSpi),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_ts: cdktf.stringToTerraform(struct!.remoteTs),
  }
}


export function dataThunderVpnIpsecSaOperOperIpsecSaListStructToHclTerraform(struct?: DataThunderVpnIpsecSaOperOperIpsecSaListStruct | cdktf.IResolvable): any {
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
    ike_gateway_name: {
      value: cdktf.stringToHclTerraform(struct!.ikeGatewayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_spi: {
      value: cdktf.stringToHclTerraform(struct!.inSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_sa_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsecSaName),
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
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ts: {
      value: cdktf.stringToHclTerraform(struct!.localTs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ts: {
      value: cdktf.stringToHclTerraform(struct!.remoteTs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIpsecSaOperOperIpsecSaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnIpsecSaOperOperIpsecSaListStruct | cdktf.IResolvable | undefined {
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
    if (this._ikeGatewayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGatewayName = this._ikeGatewayName;
    }
    if (this._inSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSpi = this._inSpi;
    }
    if (this._ipsecSaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaName = this._ipsecSaName;
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
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._outSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.outSpi = this._outSpi;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteTs = this._remoteTs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIpsecSaOperOperIpsecSaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryption = undefined;
      this._hash = undefined;
      this._ikeGatewayName = undefined;
      this._inSpi = undefined;
      this._ipsecSaName = undefined;
      this._lifebytes = undefined;
      this._lifetime = undefined;
      this._localTs = undefined;
      this._mode = undefined;
      this._outSpi = undefined;
      this._protocol = undefined;
      this._remoteTs = undefined;
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
      this._ikeGatewayName = value.ikeGatewayName;
      this._inSpi = value.inSpi;
      this._ipsecSaName = value.ipsecSaName;
      this._lifebytes = value.lifebytes;
      this._lifetime = value.lifetime;
      this._localTs = value.localTs;
      this._mode = value.mode;
      this._outSpi = value.outSpi;
      this._protocol = value.protocol;
      this._remoteTs = value.remoteTs;
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

  // ike_gateway_name - computed: false, optional: true, required: false
  private _ikeGatewayName?: string; 
  public get ikeGatewayName() {
    return this.getStringAttribute('ike_gateway_name');
  }
  public set ikeGatewayName(value: string) {
    this._ikeGatewayName = value;
  }
  public resetIkeGatewayName() {
    this._ikeGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayNameInput() {
    return this._ikeGatewayName;
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

  // ipsec_sa_name - computed: false, optional: true, required: false
  private _ipsecSaName?: string; 
  public get ipsecSaName() {
    return this.getStringAttribute('ipsec_sa_name');
  }
  public set ipsecSaName(value: string) {
    this._ipsecSaName = value;
  }
  public resetIpsecSaName() {
    this._ipsecSaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNameInput() {
    return this._ipsecSaName;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // remote_ts - computed: false, optional: true, required: false
  private _remoteTs?: string; 
  public get remoteTs() {
    return this.getStringAttribute('remote_ts');
  }
  public set remoteTs(value: string) {
    this._remoteTs = value;
  }
  public resetRemoteTs() {
    this._remoteTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTsInput() {
    return this._remoteTs;
  }
}

export class DataThunderVpnIpsecSaOperOperIpsecSaListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnIpsecSaOperOperIpsecSaListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnIpsecSaOperOperIpsecSaListStructOutputReference {
    return new DataThunderVpnIpsecSaOperOperIpsecSaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnIpsecSaOperOper {
  /**
  * ipsec_sa_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#ipsec_sa_list DataThunderVpnIpsecSaOper#ipsec_sa_list}
  */
  readonly ipsecSaList?: DataThunderVpnIpsecSaOperOperIpsecSaListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnIpsecSaOperOperToTerraform(struct?: DataThunderVpnIpsecSaOperOperOutputReference | DataThunderVpnIpsecSaOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipsec_sa_list: cdktf.listMapper(dataThunderVpnIpsecSaOperOperIpsecSaListStructToTerraform, true)(struct!.ipsecSaList),
  }
}


export function dataThunderVpnIpsecSaOperOperToHclTerraform(struct?: DataThunderVpnIpsecSaOperOperOutputReference | DataThunderVpnIpsecSaOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipsec_sa_list: {
      value: cdktf.listMapperHcl(dataThunderVpnIpsecSaOperOperIpsecSaListStructToHclTerraform, true)(struct!.ipsecSaList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIpsecSaOperOperIpsecSaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIpsecSaOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIpsecSaOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsecSaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaList = this._ipsecSaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIpsecSaOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipsecSaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipsecSaList.internalValue = value.ipsecSaList;
    }
  }

  // ipsec_sa_list - computed: false, optional: true, required: false
  private _ipsecSaList = new DataThunderVpnIpsecSaOperOperIpsecSaListStructList(this, "ipsec_sa_list", false);
  public get ipsecSaList() {
    return this._ipsecSaList;
  }
  public putIpsecSaList(value: DataThunderVpnIpsecSaOperOperIpsecSaListStruct[] | cdktf.IResolvable) {
    this._ipsecSaList.internalValue = value;
  }
  public resetIpsecSaList() {
    this._ipsecSaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaListInput() {
    return this._ipsecSaList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper thunder_vpn_ipsec_sa_oper}
*/
export class DataThunderVpnIpsecSaOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ipsec_sa_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnIpsecSaOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnIpsecSaOper to import
  * @param importFromId The id of the existing DataThunderVpnIpsecSaOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnIpsecSaOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ipsec_sa_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ipsec_sa_oper thunder_vpn_ipsec_sa_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnIpsecSaOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnIpsecSaOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ipsec_sa_oper',
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
  private _oper = new DataThunderVpnIpsecSaOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnIpsecSaOperOper) {
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
      oper: dataThunderVpnIpsecSaOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnIpsecSaOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnIpsecSaOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
