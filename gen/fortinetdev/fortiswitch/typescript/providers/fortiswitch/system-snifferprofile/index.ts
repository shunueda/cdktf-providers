// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSnifferprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile#filter SystemSnifferprofile#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile#id SystemSnifferprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile#max_pkt_count SystemSnifferprofile#max_pkt_count}
  */
  readonly maxPktCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile#max_pkt_len SystemSnifferprofile#max_pkt_len}
  */
  readonly maxPktLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile#profile_name SystemSnifferprofile#profile_name}
  */
  readonly profileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile#switch_interface SystemSnifferprofile#switch_interface}
  */
  readonly switchInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile#system_interface SystemSnifferprofile#system_interface}
  */
  readonly systemInterface?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile fortiswitch_system_snifferprofile}
*/
export class SystemSnifferprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_snifferprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSnifferprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSnifferprofile to import
  * @param importFromId The id of the existing SystemSnifferprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSnifferprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_snifferprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_snifferprofile fortiswitch_system_snifferprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSnifferprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSnifferprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_snifferprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._id = config.id;
    this._maxPktCount = config.maxPktCount;
    this._maxPktLen = config.maxPktLen;
    this._profileName = config.profileName;
    this._switchInterface = config.switchInterface;
    this._systemInterface = config.systemInterface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // max_pkt_count - computed: true, optional: true, required: false
  private _maxPktCount?: number; 
  public get maxPktCount() {
    return this.getNumberAttribute('max_pkt_count');
  }
  public set maxPktCount(value: number) {
    this._maxPktCount = value;
  }
  public resetMaxPktCount() {
    this._maxPktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPktCountInput() {
    return this._maxPktCount;
  }

  // max_pkt_len - computed: true, optional: true, required: false
  private _maxPktLen?: number; 
  public get maxPktLen() {
    return this.getNumberAttribute('max_pkt_len');
  }
  public set maxPktLen(value: number) {
    this._maxPktLen = value;
  }
  public resetMaxPktLen() {
    this._maxPktLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPktLenInput() {
    return this._maxPktLen;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // switch_interface - computed: true, optional: true, required: false
  private _switchInterface?: string; 
  public get switchInterface() {
    return this.getStringAttribute('switch_interface');
  }
  public set switchInterface(value: string) {
    this._switchInterface = value;
  }
  public resetSwitchInterface() {
    this._switchInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInterfaceInput() {
    return this._switchInterface;
  }

  // system_interface - computed: true, optional: true, required: false
  private _systemInterface?: string; 
  public get systemInterface() {
    return this.getStringAttribute('system_interface');
  }
  public set systemInterface(value: string) {
    this._systemInterface = value;
  }
  public resetSystemInterface() {
    this._systemInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemInterfaceInput() {
    return this._systemInterface;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      max_pkt_count: cdktf.numberToTerraform(this._maxPktCount),
      max_pkt_len: cdktf.numberToTerraform(this._maxPktLen),
      profile_name: cdktf.stringToTerraform(this._profileName),
      switch_interface: cdktf.stringToTerraform(this._switchInterface),
      system_interface: cdktf.stringToTerraform(this._systemInterface),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      max_pkt_count: {
        value: cdktf.numberToHclTerraform(this._maxPktCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_pkt_len: {
        value: cdktf.numberToHclTerraform(this._maxPktLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_interface: {
        value: cdktf.stringToHclTerraform(this._switchInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_interface: {
        value: cdktf.stringToHclTerraform(this._systemInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
