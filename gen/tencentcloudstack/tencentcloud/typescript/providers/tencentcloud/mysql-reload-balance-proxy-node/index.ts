// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_reload_balance_proxy_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlReloadBalanceProxyNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_reload_balance_proxy_node#id MysqlReloadBalanceProxyNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Proxy address id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_reload_balance_proxy_node#proxy_address_id MysqlReloadBalanceProxyNode#proxy_address_id}
  */
  readonly proxyAddressId?: string;
  /**
  * Proxy id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_reload_balance_proxy_node#proxy_group_id MysqlReloadBalanceProxyNode#proxy_group_id}
  */
  readonly proxyGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_reload_balance_proxy_node tencentcloud_mysql_reload_balance_proxy_node}
*/
export class MysqlReloadBalanceProxyNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_reload_balance_proxy_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlReloadBalanceProxyNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlReloadBalanceProxyNode to import
  * @param importFromId The id of the existing MysqlReloadBalanceProxyNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_reload_balance_proxy_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlReloadBalanceProxyNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_reload_balance_proxy_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/mysql_reload_balance_proxy_node tencentcloud_mysql_reload_balance_proxy_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlReloadBalanceProxyNodeConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlReloadBalanceProxyNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_reload_balance_proxy_node',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._proxyAddressId = config.proxyAddressId;
    this._proxyGroupId = config.proxyGroupId;
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

  // proxy_address_id - computed: false, optional: true, required: false
  private _proxyAddressId?: string; 
  public get proxyAddressId() {
    return this.getStringAttribute('proxy_address_id');
  }
  public set proxyAddressId(value: string) {
    this._proxyAddressId = value;
  }
  public resetProxyAddressId() {
    this._proxyAddressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAddressIdInput() {
    return this._proxyAddressId;
  }

  // proxy_group_id - computed: false, optional: false, required: true
  private _proxyGroupId?: string; 
  public get proxyGroupId() {
    return this.getStringAttribute('proxy_group_id');
  }
  public set proxyGroupId(value: string) {
    this._proxyGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyGroupIdInput() {
    return this._proxyGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      proxy_address_id: cdktf.stringToTerraform(this._proxyAddressId),
      proxy_group_id: cdktf.stringToTerraform(this._proxyGroupId),
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
      proxy_address_id: {
        value: cdktf.stringToHclTerraform(this._proxyAddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_group_id: {
        value: cdktf.stringToHclTerraform(this._proxyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
