// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnIkeSaClientsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#id DataThunderVpnIkeSaClientsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#oper DataThunderVpnIkeSaClientsOper#oper}
  */
  readonly oper?: DataThunderVpnIkeSaClientsOperOper;
}
export interface DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#ike_sa_clients_remote_gw_bytes DataThunderVpnIkeSaClientsOper#ike_sa_clients_remote_gw_bytes}
  */
  readonly ikeSaClientsRemoteGwBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#ike_sa_clients_remote_gw_idle_time DataThunderVpnIkeSaClientsOper#ike_sa_clients_remote_gw_idle_time}
  */
  readonly ikeSaClientsRemoteGwIdleTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#ike_sa_clients_remote_gw_ip DataThunderVpnIkeSaClientsOper#ike_sa_clients_remote_gw_ip}
  */
  readonly ikeSaClientsRemoteGwIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#ike_sa_clients_remote_gw_remote_id DataThunderVpnIkeSaClientsOper#ike_sa_clients_remote_gw_remote_id}
  */
  readonly ikeSaClientsRemoteGwRemoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#ike_sa_clients_remote_gw_session_time DataThunderVpnIkeSaClientsOper#ike_sa_clients_remote_gw_session_time}
  */
  readonly ikeSaClientsRemoteGwSessionTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#ike_sa_clients_remote_gw_user_id DataThunderVpnIkeSaClientsOper#ike_sa_clients_remote_gw_user_id}
  */
  readonly ikeSaClientsRemoteGwUserId?: string;
}

export function dataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwToTerraform(struct?: DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_sa_clients_remote_gw_bytes: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwBytes),
    ike_sa_clients_remote_gw_idle_time: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwIdleTime),
    ike_sa_clients_remote_gw_ip: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwIp),
    ike_sa_clients_remote_gw_remote_id: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwRemoteId),
    ike_sa_clients_remote_gw_session_time: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwSessionTime),
    ike_sa_clients_remote_gw_user_id: cdktf.stringToTerraform(struct!.ikeSaClientsRemoteGwUserId),
  }
}


export function dataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwToHclTerraform(struct?: DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_sa_clients_remote_gw_bytes: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_idle_time: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwIdleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_ip: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_remote_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwRemoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_session_time: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwSessionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_clients_remote_gw_user_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsRemoteGwUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeSaClientsRemoteGwBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwBytes = this._ikeSaClientsRemoteGwBytes;
    }
    if (this._ikeSaClientsRemoteGwIdleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwIdleTime = this._ikeSaClientsRemoteGwIdleTime;
    }
    if (this._ikeSaClientsRemoteGwIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwIp = this._ikeSaClientsRemoteGwIp;
    }
    if (this._ikeSaClientsRemoteGwRemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwRemoteId = this._ikeSaClientsRemoteGwRemoteId;
    }
    if (this._ikeSaClientsRemoteGwSessionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwSessionTime = this._ikeSaClientsRemoteGwSessionTime;
    }
    if (this._ikeSaClientsRemoteGwUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGwUserId = this._ikeSaClientsRemoteGwUserId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeSaClientsRemoteGwBytes = undefined;
      this._ikeSaClientsRemoteGwIdleTime = undefined;
      this._ikeSaClientsRemoteGwIp = undefined;
      this._ikeSaClientsRemoteGwRemoteId = undefined;
      this._ikeSaClientsRemoteGwSessionTime = undefined;
      this._ikeSaClientsRemoteGwUserId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikeSaClientsRemoteGwBytes = value.ikeSaClientsRemoteGwBytes;
      this._ikeSaClientsRemoteGwIdleTime = value.ikeSaClientsRemoteGwIdleTime;
      this._ikeSaClientsRemoteGwIp = value.ikeSaClientsRemoteGwIp;
      this._ikeSaClientsRemoteGwRemoteId = value.ikeSaClientsRemoteGwRemoteId;
      this._ikeSaClientsRemoteGwSessionTime = value.ikeSaClientsRemoteGwSessionTime;
      this._ikeSaClientsRemoteGwUserId = value.ikeSaClientsRemoteGwUserId;
    }
  }

  // ike_sa_clients_remote_gw_bytes - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwBytes?: string; 
  public get ikeSaClientsRemoteGwBytes() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_bytes');
  }
  public set ikeSaClientsRemoteGwBytes(value: string) {
    this._ikeSaClientsRemoteGwBytes = value;
  }
  public resetIkeSaClientsRemoteGwBytes() {
    this._ikeSaClientsRemoteGwBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwBytesInput() {
    return this._ikeSaClientsRemoteGwBytes;
  }

  // ike_sa_clients_remote_gw_idle_time - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwIdleTime?: string; 
  public get ikeSaClientsRemoteGwIdleTime() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_idle_time');
  }
  public set ikeSaClientsRemoteGwIdleTime(value: string) {
    this._ikeSaClientsRemoteGwIdleTime = value;
  }
  public resetIkeSaClientsRemoteGwIdleTime() {
    this._ikeSaClientsRemoteGwIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwIdleTimeInput() {
    return this._ikeSaClientsRemoteGwIdleTime;
  }

  // ike_sa_clients_remote_gw_ip - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwIp?: string; 
  public get ikeSaClientsRemoteGwIp() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_ip');
  }
  public set ikeSaClientsRemoteGwIp(value: string) {
    this._ikeSaClientsRemoteGwIp = value;
  }
  public resetIkeSaClientsRemoteGwIp() {
    this._ikeSaClientsRemoteGwIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwIpInput() {
    return this._ikeSaClientsRemoteGwIp;
  }

  // ike_sa_clients_remote_gw_remote_id - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwRemoteId?: string; 
  public get ikeSaClientsRemoteGwRemoteId() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_remote_id');
  }
  public set ikeSaClientsRemoteGwRemoteId(value: string) {
    this._ikeSaClientsRemoteGwRemoteId = value;
  }
  public resetIkeSaClientsRemoteGwRemoteId() {
    this._ikeSaClientsRemoteGwRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwRemoteIdInput() {
    return this._ikeSaClientsRemoteGwRemoteId;
  }

  // ike_sa_clients_remote_gw_session_time - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwSessionTime?: string; 
  public get ikeSaClientsRemoteGwSessionTime() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_session_time');
  }
  public set ikeSaClientsRemoteGwSessionTime(value: string) {
    this._ikeSaClientsRemoteGwSessionTime = value;
  }
  public resetIkeSaClientsRemoteGwSessionTime() {
    this._ikeSaClientsRemoteGwSessionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwSessionTimeInput() {
    return this._ikeSaClientsRemoteGwSessionTime;
  }

  // ike_sa_clients_remote_gw_user_id - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGwUserId?: string; 
  public get ikeSaClientsRemoteGwUserId() {
    return this.getStringAttribute('ike_sa_clients_remote_gw_user_id');
  }
  public set ikeSaClientsRemoteGwUserId(value: string) {
    this._ikeSaClientsRemoteGwUserId = value;
  }
  public resetIkeSaClientsRemoteGwUserId() {
    this._ikeSaClientsRemoteGwUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwUserIdInput() {
    return this._ikeSaClientsRemoteGwUserId;
  }
}

export class DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGw[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwOutputReference {
    return new DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnIkeSaClientsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#ike_sa_clients_local_ip DataThunderVpnIkeSaClientsOper#ike_sa_clients_local_ip}
  */
  readonly ikeSaClientsLocalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#name DataThunderVpnIkeSaClientsOper#name}
  */
  readonly name?: string;
  /**
  * ike_sa_clients_remote_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#ike_sa_clients_remote_gw DataThunderVpnIkeSaClientsOper#ike_sa_clients_remote_gw}
  */
  readonly ikeSaClientsRemoteGw?: DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGw[] | cdktf.IResolvable;
}

export function dataThunderVpnIkeSaClientsOperOperToTerraform(struct?: DataThunderVpnIkeSaClientsOperOperOutputReference | DataThunderVpnIkeSaClientsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_sa_clients_local_ip: cdktf.stringToTerraform(struct!.ikeSaClientsLocalIp),
    name: cdktf.stringToTerraform(struct!.name),
    ike_sa_clients_remote_gw: cdktf.listMapper(dataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwToTerraform, true)(struct!.ikeSaClientsRemoteGw),
  }
}


export function dataThunderVpnIkeSaClientsOperOperToHclTerraform(struct?: DataThunderVpnIkeSaClientsOperOperOutputReference | DataThunderVpnIkeSaClientsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_sa_clients_local_ip: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaClientsLocalIp),
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
    ike_sa_clients_remote_gw: {
      value: cdktf.listMapperHcl(dataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwToHclTerraform, true)(struct!.ikeSaClientsRemoteGw),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeSaClientsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIkeSaClientsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeSaClientsLocalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsLocalIp = this._ikeSaClientsLocalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ikeSaClientsRemoteGw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaClientsRemoteGw = this._ikeSaClientsRemoteGw?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeSaClientsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeSaClientsLocalIp = undefined;
      this._name = undefined;
      this._ikeSaClientsRemoteGw.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeSaClientsLocalIp = value.ikeSaClientsLocalIp;
      this._name = value.name;
      this._ikeSaClientsRemoteGw.internalValue = value.ikeSaClientsRemoteGw;
    }
  }

  // ike_sa_clients_local_ip - computed: false, optional: true, required: false
  private _ikeSaClientsLocalIp?: string; 
  public get ikeSaClientsLocalIp() {
    return this.getStringAttribute('ike_sa_clients_local_ip');
  }
  public set ikeSaClientsLocalIp(value: string) {
    this._ikeSaClientsLocalIp = value;
  }
  public resetIkeSaClientsLocalIp() {
    this._ikeSaClientsLocalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsLocalIpInput() {
    return this._ikeSaClientsLocalIp;
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

  // ike_sa_clients_remote_gw - computed: false, optional: true, required: false
  private _ikeSaClientsRemoteGw = new DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGwList(this, "ike_sa_clients_remote_gw", false);
  public get ikeSaClientsRemoteGw() {
    return this._ikeSaClientsRemoteGw;
  }
  public putIkeSaClientsRemoteGw(value: DataThunderVpnIkeSaClientsOperOperIkeSaClientsRemoteGw[] | cdktf.IResolvable) {
    this._ikeSaClientsRemoteGw.internalValue = value;
  }
  public resetIkeSaClientsRemoteGw() {
    this._ikeSaClientsRemoteGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaClientsRemoteGwInput() {
    return this._ikeSaClientsRemoteGw.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper thunder_vpn_ike_sa_clients_oper}
*/
export class DataThunderVpnIkeSaClientsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ike_sa_clients_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnIkeSaClientsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnIkeSaClientsOper to import
  * @param importFromId The id of the existing DataThunderVpnIkeSaClientsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnIkeSaClientsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ike_sa_clients_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_clients_oper thunder_vpn_ike_sa_clients_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnIkeSaClientsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnIkeSaClientsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ike_sa_clients_oper',
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
  private _oper = new DataThunderVpnIkeSaClientsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnIkeSaClientsOperOper) {
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
      oper: dataThunderVpnIkeSaClientsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnIkeSaClientsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnIkeSaClientsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
