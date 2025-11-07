// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemInterfaceChildSecondaryIpListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#allowaccess SystemInterfaceChildSecondaryIpList#allowaccess}
  */
  readonly allowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#fadc_id SystemInterfaceChildSecondaryIpList#fadc_id}
  */
  readonly fadcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#floating SystemInterfaceChildSecondaryIpList#floating}
  */
  readonly floating?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#floating_ip SystemInterfaceChildSecondaryIpList#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#id SystemInterfaceChildSecondaryIpList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#ip SystemInterfaceChildSecondaryIpList#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#pkey SystemInterfaceChildSecondaryIpList#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#traffic_group SystemInterfaceChildSecondaryIpList#traffic_group}
  */
  readonly trafficGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#vdom SystemInterfaceChildSecondaryIpList#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list fortiadc_system_interface_child_secondary_ip_list}
*/
export class SystemInterfaceChildSecondaryIpList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_interface_child_secondary_ip_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemInterfaceChildSecondaryIpList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemInterfaceChildSecondaryIpList to import
  * @param importFromId The id of the existing SystemInterfaceChildSecondaryIpList that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemInterfaceChildSecondaryIpList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_interface_child_secondary_ip_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_secondary_ip_list fortiadc_system_interface_child_secondary_ip_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemInterfaceChildSecondaryIpListConfig
  */
  public constructor(scope: Construct, id: string, config: SystemInterfaceChildSecondaryIpListConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_interface_child_secondary_ip_list',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowaccess = config.allowaccess;
    this._fadcId = config.fadcId;
    this._floating = config.floating;
    this._floatingIp = config.floatingIp;
    this._id = config.id;
    this._ip = config.ip;
    this._pkey = config.pkey;
    this._trafficGroup = config.trafficGroup;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string; 
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }
  public set allowaccess(value: string) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // fadc_id - computed: false, optional: false, required: true
  private _fadcId?: string; 
  public get fadcId() {
    return this.getStringAttribute('fadc_id');
  }
  public set fadcId(value: string) {
    this._fadcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fadcIdInput() {
    return this._fadcId;
  }

  // floating - computed: true, optional: true, required: false
  private _floating?: string; 
  public get floating() {
    return this.getStringAttribute('floating');
  }
  public set floating(value: string) {
    this._floating = value;
  }
  public resetFloating() {
    this._floating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingInput() {
    return this._floating;
  }

  // floating_ip - computed: true, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
  }

  // traffic_group - computed: true, optional: true, required: false
  private _trafficGroup?: string; 
  public get trafficGroup() {
    return this.getStringAttribute('traffic_group');
  }
  public set trafficGroup(value: string) {
    this._trafficGroup = value;
  }
  public resetTrafficGroup() {
    this._trafficGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficGroupInput() {
    return this._trafficGroup;
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
      allowaccess: cdktf.stringToTerraform(this._allowaccess),
      fadc_id: cdktf.stringToTerraform(this._fadcId),
      floating: cdktf.stringToTerraform(this._floating),
      floating_ip: cdktf.stringToTerraform(this._floatingIp),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      pkey: cdktf.stringToTerraform(this._pkey),
      traffic_group: cdktf.stringToTerraform(this._trafficGroup),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowaccess: {
        value: cdktf.stringToHclTerraform(this._allowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fadc_id: {
        value: cdktf.stringToHclTerraform(this._fadcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating: {
        value: cdktf.stringToHclTerraform(this._floating),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip: {
        value: cdktf.stringToHclTerraform(this._floatingIp),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_group: {
        value: cdktf.stringToHclTerraform(this._trafficGroup),
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
