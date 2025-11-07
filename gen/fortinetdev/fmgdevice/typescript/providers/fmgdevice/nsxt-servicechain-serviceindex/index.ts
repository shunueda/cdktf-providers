// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtServicechainServiceindexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex#device_name NsxtServicechainServiceindex#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex#fosid NsxtServicechainServiceindex#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex#id NsxtServicechainServiceindex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex#name NsxtServicechainServiceindex#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex#reverse_index NsxtServicechainServiceindex#reverse_index}
  */
  readonly reverseIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex#service_chain NsxtServicechainServiceindex#service_chain}
  */
  readonly serviceChain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex#vd NsxtServicechainServiceindex#vd}
  */
  readonly vd?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex fmgdevice_nsxt_servicechain_serviceindex}
*/
export class NsxtServicechainServiceindex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_nsxt_servicechain_serviceindex";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtServicechainServiceindex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtServicechainServiceindex to import
  * @param importFromId The id of the existing NsxtServicechainServiceindex that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtServicechainServiceindex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_nsxt_servicechain_serviceindex", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/nsxt_servicechain_serviceindex fmgdevice_nsxt_servicechain_serviceindex} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtServicechainServiceindexConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtServicechainServiceindexConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_nsxt_servicechain_serviceindex',
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
    this._fosid = config.fosid;
    this._id = config.id;
    this._name = config.name;
    this._reverseIndex = config.reverseIndex;
    this._serviceChain = config.serviceChain;
    this._vd = config.vd;
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

  // reverse_index - computed: true, optional: true, required: false
  private _reverseIndex?: number; 
  public get reverseIndex() {
    return this.getNumberAttribute('reverse_index');
  }
  public set reverseIndex(value: number) {
    this._reverseIndex = value;
  }
  public resetReverseIndex() {
    this._reverseIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseIndexInput() {
    return this._reverseIndex;
  }

  // service_chain - computed: false, optional: false, required: true
  private _serviceChain?: string; 
  public get serviceChain() {
    return this.getStringAttribute('service_chain');
  }
  public set serviceChain(value: string) {
    this._serviceChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainInput() {
    return this._serviceChain;
  }

  // vd - computed: true, optional: true, required: false
  private _vd?: string[]; 
  public get vd() {
    return cdktf.Fn.tolist(this.getListAttribute('vd'));
  }
  public set vd(value: string[]) {
    this._vd = value;
  }
  public resetVd() {
    this._vd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdInput() {
    return this._vd;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      reverse_index: cdktf.numberToTerraform(this._reverseIndex),
      service_chain: cdktf.stringToTerraform(this._serviceChain),
      vd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vd),
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_index: {
        value: cdktf.numberToHclTerraform(this._reverseIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_chain: {
        value: cdktf.stringToHclTerraform(this._serviceChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
