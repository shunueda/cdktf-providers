// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsGtmAccessStrategyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#default_gtm_address_pool_id DnsGtmAccessStrategy#default_gtm_address_pool_id}
  */
  readonly defaultGtmAddressPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#default_gtm_address_pool_type DnsGtmAccessStrategy#default_gtm_address_pool_type}
  */
  readonly defaultGtmAddressPoolType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#default_min_available_addr_num DnsGtmAccessStrategy#default_min_available_addr_num}
  */
  readonly defaultMinAvailableAddrNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#failover_gtm_address_pool_id DnsGtmAccessStrategy#failover_gtm_address_pool_id}
  */
  readonly failoverGtmAddressPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#failover_gtm_address_pool_type DnsGtmAccessStrategy#failover_gtm_address_pool_type}
  */
  readonly failoverGtmAddressPoolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#failover_min_available_addr_num DnsGtmAccessStrategy#failover_min_available_addr_num}
  */
  readonly failoverMinAvailableAddrNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#gtm_instance_id DnsGtmAccessStrategy#gtm_instance_id}
  */
  readonly gtmInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#line_ids DnsGtmAccessStrategy#line_ids}
  */
  readonly lineIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#name DnsGtmAccessStrategy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#specified_gtm_address_pool DnsGtmAccessStrategy#specified_gtm_address_pool}
  */
  readonly specifiedGtmAddressPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#switch_mode DnsGtmAccessStrategy#switch_mode}
  */
  readonly switchMode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy alibabacloudstack_dns_gtm_access_strategy}
*/
export class DnsGtmAccessStrategy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dns_gtm_access_strategy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsGtmAccessStrategy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsGtmAccessStrategy to import
  * @param importFromId The id of the existing DnsGtmAccessStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsGtmAccessStrategy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dns_gtm_access_strategy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/dns_gtm_access_strategy alibabacloudstack_dns_gtm_access_strategy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsGtmAccessStrategyConfig
  */
  public constructor(scope: Construct, id: string, config: DnsGtmAccessStrategyConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dns_gtm_access_strategy',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultGtmAddressPoolId = config.defaultGtmAddressPoolId;
    this._defaultGtmAddressPoolType = config.defaultGtmAddressPoolType;
    this._defaultMinAvailableAddrNum = config.defaultMinAvailableAddrNum;
    this._failoverGtmAddressPoolId = config.failoverGtmAddressPoolId;
    this._failoverGtmAddressPoolType = config.failoverGtmAddressPoolType;
    this._failoverMinAvailableAddrNum = config.failoverMinAvailableAddrNum;
    this._gtmInstanceId = config.gtmInstanceId;
    this._lineIds = config.lineIds;
    this._name = config.name;
    this._specifiedGtmAddressPool = config.specifiedGtmAddressPool;
    this._switchMode = config.switchMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_available_addr_num - computed: true, optional: false, required: false
  public get defaultAvailableAddrNum() {
    return this.getNumberAttribute('default_available_addr_num');
  }

  // default_gtm_address_pool_id - computed: false, optional: false, required: true
  private _defaultGtmAddressPoolId?: string; 
  public get defaultGtmAddressPoolId() {
    return this.getStringAttribute('default_gtm_address_pool_id');
  }
  public set defaultGtmAddressPoolId(value: string) {
    this._defaultGtmAddressPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGtmAddressPoolIdInput() {
    return this._defaultGtmAddressPoolId;
  }

  // default_gtm_address_pool_name - computed: true, optional: false, required: false
  public get defaultGtmAddressPoolName() {
    return this.getStringAttribute('default_gtm_address_pool_name');
  }

  // default_gtm_address_pool_type - computed: false, optional: false, required: true
  private _defaultGtmAddressPoolType?: string; 
  public get defaultGtmAddressPoolType() {
    return this.getStringAttribute('default_gtm_address_pool_type');
  }
  public set defaultGtmAddressPoolType(value: string) {
    this._defaultGtmAddressPoolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGtmAddressPoolTypeInput() {
    return this._defaultGtmAddressPoolType;
  }

  // default_min_available_addr_num - computed: false, optional: false, required: true
  private _defaultMinAvailableAddrNum?: number; 
  public get defaultMinAvailableAddrNum() {
    return this.getNumberAttribute('default_min_available_addr_num');
  }
  public set defaultMinAvailableAddrNum(value: number) {
    this._defaultMinAvailableAddrNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMinAvailableAddrNumInput() {
    return this._defaultMinAvailableAddrNum;
  }

  // failover_available_addr_num - computed: true, optional: false, required: false
  public get failoverAvailableAddrNum() {
    return this.getNumberAttribute('failover_available_addr_num');
  }

  // failover_gtm_address_pool_id - computed: false, optional: true, required: false
  private _failoverGtmAddressPoolId?: string; 
  public get failoverGtmAddressPoolId() {
    return this.getStringAttribute('failover_gtm_address_pool_id');
  }
  public set failoverGtmAddressPoolId(value: string) {
    this._failoverGtmAddressPoolId = value;
  }
  public resetFailoverGtmAddressPoolId() {
    this._failoverGtmAddressPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverGtmAddressPoolIdInput() {
    return this._failoverGtmAddressPoolId;
  }

  // failover_gtm_address_pool_name - computed: true, optional: false, required: false
  public get failoverGtmAddressPoolName() {
    return this.getStringAttribute('failover_gtm_address_pool_name');
  }

  // failover_gtm_address_pool_type - computed: false, optional: true, required: false
  private _failoverGtmAddressPoolType?: string; 
  public get failoverGtmAddressPoolType() {
    return this.getStringAttribute('failover_gtm_address_pool_type');
  }
  public set failoverGtmAddressPoolType(value: string) {
    this._failoverGtmAddressPoolType = value;
  }
  public resetFailoverGtmAddressPoolType() {
    this._failoverGtmAddressPoolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverGtmAddressPoolTypeInput() {
    return this._failoverGtmAddressPoolType;
  }

  // failover_min_available_addr_num - computed: false, optional: true, required: false
  private _failoverMinAvailableAddrNum?: number; 
  public get failoverMinAvailableAddrNum() {
    return this.getNumberAttribute('failover_min_available_addr_num');
  }
  public set failoverMinAvailableAddrNum(value: number) {
    this._failoverMinAvailableAddrNum = value;
  }
  public resetFailoverMinAvailableAddrNum() {
    this._failoverMinAvailableAddrNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverMinAvailableAddrNumInput() {
    return this._failoverMinAvailableAddrNum;
  }

  // gtm_instance_id - computed: false, optional: false, required: true
  private _gtmInstanceId?: string; 
  public get gtmInstanceId() {
    return this.getStringAttribute('gtm_instance_id');
  }
  public set gtmInstanceId(value: string) {
    this._gtmInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gtmInstanceIdInput() {
    return this._gtmInstanceId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_use_gtm_address_pool_id - computed: true, optional: false, required: false
  public get inUseGtmAddressPoolId() {
    return this.getStringAttribute('in_use_gtm_address_pool_id');
  }

  // in_use_gtm_address_pool_name - computed: true, optional: false, required: false
  public get inUseGtmAddressPoolName() {
    return this.getStringAttribute('in_use_gtm_address_pool_name');
  }

  // line_ids - computed: false, optional: false, required: true
  private _lineIds?: string[]; 
  public get lineIds() {
    return cdktf.Fn.tolist(this.getListAttribute('line_ids'));
  }
  public set lineIds(value: string[]) {
    this._lineIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineIdsInput() {
    return this._lineIds;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // specified_gtm_address_pool - computed: true, optional: true, required: false
  private _specifiedGtmAddressPool?: string; 
  public get specifiedGtmAddressPool() {
    return this.getStringAttribute('specified_gtm_address_pool');
  }
  public set specifiedGtmAddressPool(value: string) {
    this._specifiedGtmAddressPool = value;
  }
  public resetSpecifiedGtmAddressPool() {
    this._specifiedGtmAddressPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifiedGtmAddressPoolInput() {
    return this._specifiedGtmAddressPool;
  }

  // switch_mode - computed: false, optional: false, required: true
  private _switchMode?: string; 
  public get switchMode() {
    return this.getStringAttribute('switch_mode');
  }
  public set switchMode(value: string) {
    this._switchMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchModeInput() {
    return this._switchMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_gtm_address_pool_id: cdktf.stringToTerraform(this._defaultGtmAddressPoolId),
      default_gtm_address_pool_type: cdktf.stringToTerraform(this._defaultGtmAddressPoolType),
      default_min_available_addr_num: cdktf.numberToTerraform(this._defaultMinAvailableAddrNum),
      failover_gtm_address_pool_id: cdktf.stringToTerraform(this._failoverGtmAddressPoolId),
      failover_gtm_address_pool_type: cdktf.stringToTerraform(this._failoverGtmAddressPoolType),
      failover_min_available_addr_num: cdktf.numberToTerraform(this._failoverMinAvailableAddrNum),
      gtm_instance_id: cdktf.stringToTerraform(this._gtmInstanceId),
      line_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lineIds),
      name: cdktf.stringToTerraform(this._name),
      specified_gtm_address_pool: cdktf.stringToTerraform(this._specifiedGtmAddressPool),
      switch_mode: cdktf.stringToTerraform(this._switchMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_gtm_address_pool_id: {
        value: cdktf.stringToHclTerraform(this._defaultGtmAddressPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gtm_address_pool_type: {
        value: cdktf.stringToHclTerraform(this._defaultGtmAddressPoolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_min_available_addr_num: {
        value: cdktf.numberToHclTerraform(this._defaultMinAvailableAddrNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_gtm_address_pool_id: {
        value: cdktf.stringToHclTerraform(this._failoverGtmAddressPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_gtm_address_pool_type: {
        value: cdktf.stringToHclTerraform(this._failoverGtmAddressPoolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_min_available_addr_num: {
        value: cdktf.numberToHclTerraform(this._failoverMinAvailableAddrNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtm_instance_id: {
        value: cdktf.stringToHclTerraform(this._gtmInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lineIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specified_gtm_address_pool: {
        value: cdktf.stringToHclTerraform(this._specifiedGtmAddressPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_mode: {
        value: cdktf.stringToHclTerraform(this._switchMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
