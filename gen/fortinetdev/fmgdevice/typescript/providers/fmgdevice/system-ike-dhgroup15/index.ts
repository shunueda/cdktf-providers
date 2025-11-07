// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIkeDhgroup15Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15#device_name SystemIkeDhgroup15#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15#fosid SystemIkeDhgroup15#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15#id SystemIkeDhgroup15#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15#keypair_cache SystemIkeDhgroup15#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15#keypair_count SystemIkeDhgroup15#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15#mode SystemIkeDhgroup15#mode}
  */
  readonly mode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15 fmgdevice_system_ike_dhgroup15}
*/
export class SystemIkeDhgroup15 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_ike_dhgroup15";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIkeDhgroup15 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIkeDhgroup15 to import
  * @param importFromId The id of the existing SystemIkeDhgroup15 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIkeDhgroup15 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_ike_dhgroup15", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ike_dhgroup15 fmgdevice_system_ike_dhgroup15} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIkeDhgroup15Config = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIkeDhgroup15Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_ike_dhgroup15',
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
    this._keypairCache = config.keypairCache;
    this._keypairCount = config.keypairCount;
    this._mode = config.mode;
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

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      keypair_cache: cdktf.stringToTerraform(this._keypairCache),
      keypair_count: cdktf.numberToTerraform(this._keypairCount),
      mode: cdktf.stringToTerraform(this._mode),
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
      keypair_cache: {
        value: cdktf.stringToHclTerraform(this._keypairCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keypair_count: {
        value: cdktf.numberToHclTerraform(this._keypairCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
