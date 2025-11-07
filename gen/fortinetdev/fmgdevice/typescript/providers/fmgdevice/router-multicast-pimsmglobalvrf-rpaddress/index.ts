// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticastPimsmglobalvrfRpaddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress#device_name RouterMulticastPimsmglobalvrfRpaddress#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress#device_vdom RouterMulticastPimsmglobalvrfRpaddress#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress#fosid RouterMulticastPimsmglobalvrfRpaddress#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress#group RouterMulticastPimsmglobalvrfRpaddress#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress#id RouterMulticastPimsmglobalvrfRpaddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress#ip_address RouterMulticastPimsmglobalvrfRpaddress#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress#pim_sm_global_vrf RouterMulticastPimsmglobalvrfRpaddress#pim_sm_global_vrf}
  */
  readonly pimSmGlobalVrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress fmgdevice_router_multicast_pimsmglobalvrf_rpaddress}
*/
export class RouterMulticastPimsmglobalvrfRpaddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_multicast_pimsmglobalvrf_rpaddress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticastPimsmglobalvrfRpaddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticastPimsmglobalvrfRpaddress to import
  * @param importFromId The id of the existing RouterMulticastPimsmglobalvrfRpaddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticastPimsmglobalvrfRpaddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_multicast_pimsmglobalvrf_rpaddress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_multicast_pimsmglobalvrf_rpaddress fmgdevice_router_multicast_pimsmglobalvrf_rpaddress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticastPimsmglobalvrfRpaddressConfig
  */
  public constructor(scope: Construct, id: string, config: RouterMulticastPimsmglobalvrfRpaddressConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_multicast_pimsmglobalvrf_rpaddress',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fosid = config.fosid;
    this._group = config.group;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._pimSmGlobalVrf = config.pimSmGlobalVrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // group - computed: true, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return cdktf.Fn.tolist(this.getListAttribute('group'));
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // pim_sm_global_vrf - computed: false, optional: false, required: true
  private _pimSmGlobalVrf?: string; 
  public get pimSmGlobalVrf() {
    return this.getStringAttribute('pim_sm_global_vrf');
  }
  public set pimSmGlobalVrf(value: string) {
    this._pimSmGlobalVrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pimSmGlobalVrfInput() {
    return this._pimSmGlobalVrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fosid: cdktf.numberToTerraform(this._fosid),
      group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._group),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      pim_sm_global_vrf: cdktf.stringToTerraform(this._pimSmGlobalVrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._group),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pim_sm_global_vrf: {
        value: cdktf.stringToHclTerraform(this._pimSmGlobalVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
