// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnIkeSaBriefOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#id DataThunderVpnIkeSaBriefOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#oper DataThunderVpnIkeSaBriefOper#oper}
  */
  readonly oper?: DataThunderVpnIkeSaBriefOperOper;
}
export interface DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#ike_sa_brief_remote_gw_id DataThunderVpnIkeSaBriefOper#ike_sa_brief_remote_gw_id}
  */
  readonly ikeSaBriefRemoteGwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#ike_sa_brief_remote_gw_ip DataThunderVpnIkeSaBriefOper#ike_sa_brief_remote_gw_ip}
  */
  readonly ikeSaBriefRemoteGwIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#ike_sa_brief_remote_gw_lifetime DataThunderVpnIkeSaBriefOper#ike_sa_brief_remote_gw_lifetime}
  */
  readonly ikeSaBriefRemoteGwLifetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#ike_sa_brief_remote_gw_status DataThunderVpnIkeSaBriefOper#ike_sa_brief_remote_gw_status}
  */
  readonly ikeSaBriefRemoteGwStatus?: string;
}

export function dataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwToTerraform(struct?: DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_sa_brief_remote_gw_id: cdktf.stringToTerraform(struct!.ikeSaBriefRemoteGwId),
    ike_sa_brief_remote_gw_ip: cdktf.stringToTerraform(struct!.ikeSaBriefRemoteGwIp),
    ike_sa_brief_remote_gw_lifetime: cdktf.stringToTerraform(struct!.ikeSaBriefRemoteGwLifetime),
    ike_sa_brief_remote_gw_status: cdktf.stringToTerraform(struct!.ikeSaBriefRemoteGwStatus),
  }
}


export function dataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwToHclTerraform(struct?: DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_sa_brief_remote_gw_id: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaBriefRemoteGwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_brief_remote_gw_ip: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaBriefRemoteGwIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_brief_remote_gw_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaBriefRemoteGwLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_sa_brief_remote_gw_status: {
      value: cdktf.stringToHclTerraform(struct!.ikeSaBriefRemoteGwStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeSaBriefRemoteGwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGwId = this._ikeSaBriefRemoteGwId;
    }
    if (this._ikeSaBriefRemoteGwIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGwIp = this._ikeSaBriefRemoteGwIp;
    }
    if (this._ikeSaBriefRemoteGwLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGwLifetime = this._ikeSaBriefRemoteGwLifetime;
    }
    if (this._ikeSaBriefRemoteGwStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGwStatus = this._ikeSaBriefRemoteGwStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeSaBriefRemoteGwId = undefined;
      this._ikeSaBriefRemoteGwIp = undefined;
      this._ikeSaBriefRemoteGwLifetime = undefined;
      this._ikeSaBriefRemoteGwStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikeSaBriefRemoteGwId = value.ikeSaBriefRemoteGwId;
      this._ikeSaBriefRemoteGwIp = value.ikeSaBriefRemoteGwIp;
      this._ikeSaBriefRemoteGwLifetime = value.ikeSaBriefRemoteGwLifetime;
      this._ikeSaBriefRemoteGwStatus = value.ikeSaBriefRemoteGwStatus;
    }
  }

  // ike_sa_brief_remote_gw_id - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGwId?: string; 
  public get ikeSaBriefRemoteGwId() {
    return this.getStringAttribute('ike_sa_brief_remote_gw_id');
  }
  public set ikeSaBriefRemoteGwId(value: string) {
    this._ikeSaBriefRemoteGwId = value;
  }
  public resetIkeSaBriefRemoteGwId() {
    this._ikeSaBriefRemoteGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwIdInput() {
    return this._ikeSaBriefRemoteGwId;
  }

  // ike_sa_brief_remote_gw_ip - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGwIp?: string; 
  public get ikeSaBriefRemoteGwIp() {
    return this.getStringAttribute('ike_sa_brief_remote_gw_ip');
  }
  public set ikeSaBriefRemoteGwIp(value: string) {
    this._ikeSaBriefRemoteGwIp = value;
  }
  public resetIkeSaBriefRemoteGwIp() {
    this._ikeSaBriefRemoteGwIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwIpInput() {
    return this._ikeSaBriefRemoteGwIp;
  }

  // ike_sa_brief_remote_gw_lifetime - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGwLifetime?: string; 
  public get ikeSaBriefRemoteGwLifetime() {
    return this.getStringAttribute('ike_sa_brief_remote_gw_lifetime');
  }
  public set ikeSaBriefRemoteGwLifetime(value: string) {
    this._ikeSaBriefRemoteGwLifetime = value;
  }
  public resetIkeSaBriefRemoteGwLifetime() {
    this._ikeSaBriefRemoteGwLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwLifetimeInput() {
    return this._ikeSaBriefRemoteGwLifetime;
  }

  // ike_sa_brief_remote_gw_status - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGwStatus?: string; 
  public get ikeSaBriefRemoteGwStatus() {
    return this.getStringAttribute('ike_sa_brief_remote_gw_status');
  }
  public set ikeSaBriefRemoteGwStatus(value: string) {
    this._ikeSaBriefRemoteGwStatus = value;
  }
  public resetIkeSaBriefRemoteGwStatus() {
    this._ikeSaBriefRemoteGwStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwStatusInput() {
    return this._ikeSaBriefRemoteGwStatus;
  }
}

export class DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGw[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwOutputReference {
    return new DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnIkeSaBriefOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#local_ip DataThunderVpnIkeSaBriefOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#name DataThunderVpnIkeSaBriefOper#name}
  */
  readonly name?: string;
  /**
  * ike_sa_brief_remote_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#ike_sa_brief_remote_gw DataThunderVpnIkeSaBriefOper#ike_sa_brief_remote_gw}
  */
  readonly ikeSaBriefRemoteGw?: DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGw[] | cdktf.IResolvable;
}

export function dataThunderVpnIkeSaBriefOperOperToTerraform(struct?: DataThunderVpnIkeSaBriefOperOperOutputReference | DataThunderVpnIkeSaBriefOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    name: cdktf.stringToTerraform(struct!.name),
    ike_sa_brief_remote_gw: cdktf.listMapper(dataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwToTerraform, true)(struct!.ikeSaBriefRemoteGw),
  }
}


export function dataThunderVpnIkeSaBriefOperOperToHclTerraform(struct?: DataThunderVpnIkeSaBriefOperOperOutputReference | DataThunderVpnIkeSaBriefOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    ike_sa_brief_remote_gw: {
      value: cdktf.listMapperHcl(dataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwToHclTerraform, true)(struct!.ikeSaBriefRemoteGw),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeSaBriefOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIkeSaBriefOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ikeSaBriefRemoteGw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSaBriefRemoteGw = this._ikeSaBriefRemoteGw?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeSaBriefOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localIp = undefined;
      this._name = undefined;
      this._ikeSaBriefRemoteGw.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localIp = value.localIp;
      this._name = value.name;
      this._ikeSaBriefRemoteGw.internalValue = value.ikeSaBriefRemoteGw;
    }
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

  // ike_sa_brief_remote_gw - computed: false, optional: true, required: false
  private _ikeSaBriefRemoteGw = new DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGwList(this, "ike_sa_brief_remote_gw", false);
  public get ikeSaBriefRemoteGw() {
    return this._ikeSaBriefRemoteGw;
  }
  public putIkeSaBriefRemoteGw(value: DataThunderVpnIkeSaBriefOperOperIkeSaBriefRemoteGw[] | cdktf.IResolvable) {
    this._ikeSaBriefRemoteGw.internalValue = value;
  }
  public resetIkeSaBriefRemoteGw() {
    this._ikeSaBriefRemoteGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSaBriefRemoteGwInput() {
    return this._ikeSaBriefRemoteGw.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper thunder_vpn_ike_sa_brief_oper}
*/
export class DataThunderVpnIkeSaBriefOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ike_sa_brief_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnIkeSaBriefOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnIkeSaBriefOper to import
  * @param importFromId The id of the existing DataThunderVpnIkeSaBriefOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnIkeSaBriefOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ike_sa_brief_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/vpn_ike_sa_brief_oper thunder_vpn_ike_sa_brief_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnIkeSaBriefOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnIkeSaBriefOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ike_sa_brief_oper',
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
  private _oper = new DataThunderVpnIkeSaBriefOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnIkeSaBriefOperOper) {
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
      oper: dataThunderVpnIkeSaBriefOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVpnIkeSaBriefOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnIkeSaBriefOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
