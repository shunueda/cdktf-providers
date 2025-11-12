// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalancePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#direct_route_ip LoadBalancePool#direct_route_ip}
  */
  readonly directRouteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#direct_route_ip6 LoadBalancePool#direct_route_ip6}
  */
  readonly directRouteIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#direct_route_mode LoadBalancePool#direct_route_mode}
  */
  readonly directRouteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#health_check LoadBalancePool#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#health_check_list LoadBalancePool#health_check_list}
  */
  readonly healthCheckList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#health_check_relationship LoadBalancePool#health_check_relationship}
  */
  readonly healthCheckRelationship?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#id LoadBalancePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#mkey LoadBalancePool#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#pool_type LoadBalancePool#pool_type}
  */
  readonly poolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#rs_profile LoadBalancePool#rs_profile}
  */
  readonly rsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#sdn_addr_private LoadBalancePool#sdn_addr_private}
  */
  readonly sdnAddrPrivate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#sdn_connector LoadBalancePool#sdn_connector}
  */
  readonly sdnConnector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#service LoadBalancePool#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#type LoadBalancePool#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#vdom LoadBalancePool#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool fortiadc_load_balance_pool}
*/
export class LoadBalancePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalancePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalancePool to import
  * @param importFromId The id of the existing LoadBalancePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalancePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_pool fortiadc_load_balance_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalancePoolConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalancePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_pool',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directRouteIp = config.directRouteIp;
    this._directRouteIp6 = config.directRouteIp6;
    this._directRouteMode = config.directRouteMode;
    this._healthCheck = config.healthCheck;
    this._healthCheckList = config.healthCheckList;
    this._healthCheckRelationship = config.healthCheckRelationship;
    this._id = config.id;
    this._mkey = config.mkey;
    this._poolType = config.poolType;
    this._rsProfile = config.rsProfile;
    this._sdnAddrPrivate = config.sdnAddrPrivate;
    this._sdnConnector = config.sdnConnector;
    this._service = config.service;
    this._type = config.type;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direct_route_ip - computed: true, optional: true, required: false
  private _directRouteIp?: string; 
  public get directRouteIp() {
    return this.getStringAttribute('direct_route_ip');
  }
  public set directRouteIp(value: string) {
    this._directRouteIp = value;
  }
  public resetDirectRouteIp() {
    this._directRouteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directRouteIpInput() {
    return this._directRouteIp;
  }

  // direct_route_ip6 - computed: true, optional: true, required: false
  private _directRouteIp6?: string; 
  public get directRouteIp6() {
    return this.getStringAttribute('direct_route_ip6');
  }
  public set directRouteIp6(value: string) {
    this._directRouteIp6 = value;
  }
  public resetDirectRouteIp6() {
    this._directRouteIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directRouteIp6Input() {
    return this._directRouteIp6;
  }

  // direct_route_mode - computed: true, optional: true, required: false
  private _directRouteMode?: string; 
  public get directRouteMode() {
    return this.getStringAttribute('direct_route_mode');
  }
  public set directRouteMode(value: string) {
    this._directRouteMode = value;
  }
  public resetDirectRouteMode() {
    this._directRouteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directRouteModeInput() {
    return this._directRouteMode;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_list - computed: true, optional: true, required: false
  private _healthCheckList?: string; 
  public get healthCheckList() {
    return this.getStringAttribute('health_check_list');
  }
  public set healthCheckList(value: string) {
    this._healthCheckList = value;
  }
  public resetHealthCheckList() {
    this._healthCheckList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckListInput() {
    return this._healthCheckList;
  }

  // health_check_relationship - computed: true, optional: true, required: false
  private _healthCheckRelationship?: string; 
  public get healthCheckRelationship() {
    return this.getStringAttribute('health_check_relationship');
  }
  public set healthCheckRelationship(value: string) {
    this._healthCheckRelationship = value;
  }
  public resetHealthCheckRelationship() {
    this._healthCheckRelationship = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckRelationshipInput() {
    return this._healthCheckRelationship;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // pool_type - computed: true, optional: true, required: false
  private _poolType?: string; 
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }
  public set poolType(value: string) {
    this._poolType = value;
  }
  public resetPoolType() {
    this._poolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType;
  }

  // rs_profile - computed: true, optional: true, required: false
  private _rsProfile?: string; 
  public get rsProfile() {
    return this.getStringAttribute('rs_profile');
  }
  public set rsProfile(value: string) {
    this._rsProfile = value;
  }
  public resetRsProfile() {
    this._rsProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsProfileInput() {
    return this._rsProfile;
  }

  // sdn_addr_private - computed: true, optional: true, required: false
  private _sdnAddrPrivate?: string; 
  public get sdnAddrPrivate() {
    return this.getStringAttribute('sdn_addr_private');
  }
  public set sdnAddrPrivate(value: string) {
    this._sdnAddrPrivate = value;
  }
  public resetSdnAddrPrivate() {
    this._sdnAddrPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnAddrPrivateInput() {
    return this._sdnAddrPrivate;
  }

  // sdn_connector - computed: true, optional: true, required: false
  private _sdnConnector?: string; 
  public get sdnConnector() {
    return this.getStringAttribute('sdn_connector');
  }
  public set sdnConnector(value: string) {
    this._sdnConnector = value;
  }
  public resetSdnConnector() {
    this._sdnConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnConnectorInput() {
    return this._sdnConnector;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direct_route_ip: cdktf.stringToTerraform(this._directRouteIp),
      direct_route_ip6: cdktf.stringToTerraform(this._directRouteIp6),
      direct_route_mode: cdktf.stringToTerraform(this._directRouteMode),
      health_check: cdktf.stringToTerraform(this._healthCheck),
      health_check_list: cdktf.stringToTerraform(this._healthCheckList),
      health_check_relationship: cdktf.stringToTerraform(this._healthCheckRelationship),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      pool_type: cdktf.stringToTerraform(this._poolType),
      rs_profile: cdktf.stringToTerraform(this._rsProfile),
      sdn_addr_private: cdktf.stringToTerraform(this._sdnAddrPrivate),
      sdn_connector: cdktf.stringToTerraform(this._sdnConnector),
      service: cdktf.stringToTerraform(this._service),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direct_route_ip: {
        value: cdktf.stringToHclTerraform(this._directRouteIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_route_ip6: {
        value: cdktf.stringToHclTerraform(this._directRouteIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_route_mode: {
        value: cdktf.stringToHclTerraform(this._directRouteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: cdktf.stringToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_list: {
        value: cdktf.stringToHclTerraform(this._healthCheckList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_relationship: {
        value: cdktf.stringToHclTerraform(this._healthCheckRelationship),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_type: {
        value: cdktf.stringToHclTerraform(this._poolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rs_profile: {
        value: cdktf.stringToHclTerraform(this._rsProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn_addr_private: {
        value: cdktf.stringToHclTerraform(this._sdnAddrPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn_connector: {
        value: cdktf.stringToHclTerraform(this._sdnConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
