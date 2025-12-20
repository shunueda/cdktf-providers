// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwNetworkAccessControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control#gateway_id TseCngwNetworkAccessControl#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * gateway group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control#group_id TseCngwNetworkAccessControl#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control#id TseCngwNetworkAccessControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * network id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control#network_id TseCngwNetworkAccessControl#network_id}
  */
  readonly networkId: string;
  /**
  * access_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control#access_control TseCngwNetworkAccessControl#access_control}
  */
  readonly accessControl?: TseCngwNetworkAccessControlAccessControl;
}
export interface TseCngwNetworkAccessControlAccessControl {
  /**
  * Black list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control#cidr_black_list TseCngwNetworkAccessControl#cidr_black_list}
  */
  readonly cidrBlackList?: string[];
  /**
  * White list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control#cidr_white_list TseCngwNetworkAccessControl#cidr_white_list}
  */
  readonly cidrWhiteList?: string[];
  /**
  * Access mode: `Whitelist`, `Blacklist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control#mode TseCngwNetworkAccessControl#mode}
  */
  readonly mode?: string;
}

export function tseCngwNetworkAccessControlAccessControlToTerraform(struct?: TseCngwNetworkAccessControlAccessControlOutputReference | TseCngwNetworkAccessControlAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_black_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrBlackList),
    cidr_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrWhiteList),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function tseCngwNetworkAccessControlAccessControlToHclTerraform(struct?: TseCngwNetworkAccessControlAccessControlOutputReference | TseCngwNetworkAccessControlAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_black_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrBlackList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cidr_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TseCngwNetworkAccessControlAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TseCngwNetworkAccessControlAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlackList = this._cidrBlackList;
    }
    if (this._cidrWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrWhiteList = this._cidrWhiteList;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TseCngwNetworkAccessControlAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrBlackList = undefined;
      this._cidrWhiteList = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrBlackList = value.cidrBlackList;
      this._cidrWhiteList = value.cidrWhiteList;
      this._mode = value.mode;
    }
  }

  // cidr_black_list - computed: false, optional: true, required: false
  private _cidrBlackList?: string[]; 
  public get cidrBlackList() {
    return this.getListAttribute('cidr_black_list');
  }
  public set cidrBlackList(value: string[]) {
    this._cidrBlackList = value;
  }
  public resetCidrBlackList() {
    this._cidrBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlackListInput() {
    return this._cidrBlackList;
  }

  // cidr_white_list - computed: false, optional: true, required: false
  private _cidrWhiteList?: string[]; 
  public get cidrWhiteList() {
    return this.getListAttribute('cidr_white_list');
  }
  public set cidrWhiteList(value: string[]) {
    this._cidrWhiteList = value;
  }
  public resetCidrWhiteList() {
    this._cidrWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrWhiteListInput() {
    return this._cidrWhiteList;
  }

  // mode - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control tencentcloud_tse_cngw_network_access_control}
*/
export class TseCngwNetworkAccessControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_network_access_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwNetworkAccessControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwNetworkAccessControl to import
  * @param importFromId The id of the existing TseCngwNetworkAccessControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwNetworkAccessControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_network_access_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tse_cngw_network_access_control tencentcloud_tse_cngw_network_access_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwNetworkAccessControlConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwNetworkAccessControlConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_network_access_control',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayId = config.gatewayId;
    this._groupId = config.groupId;
    this._id = config.id;
    this._networkId = config.networkId;
    this._accessControl.internalValue = config.accessControl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // access_control - computed: false, optional: true, required: false
  private _accessControl = new TseCngwNetworkAccessControlAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: TseCngwNetworkAccessControlAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      network_id: cdktf.stringToTerraform(this._networkId),
      access_control: tseCngwNetworkAccessControlAccessControlToTerraform(this._accessControl.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_control: {
        value: tseCngwNetworkAccessControlAccessControlToHclTerraform(this._accessControl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwNetworkAccessControlAccessControlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
