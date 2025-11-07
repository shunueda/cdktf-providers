// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wirelesscontrollerhotspot20H2QpwanmetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#downlink_load Wirelesscontrollerhotspot20H2Qpwanmetric#downlink_load}
  */
  readonly downlinkLoad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#downlink_speed Wirelesscontrollerhotspot20H2Qpwanmetric#downlink_speed}
  */
  readonly downlinkSpeed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#id Wirelesscontrollerhotspot20H2Qpwanmetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#link_at_capacity Wirelesscontrollerhotspot20H2Qpwanmetric#link_at_capacity}
  */
  readonly linkAtCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#link_status Wirelesscontrollerhotspot20H2Qpwanmetric#link_status}
  */
  readonly linkStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#load_measurement_duration Wirelesscontrollerhotspot20H2Qpwanmetric#load_measurement_duration}
  */
  readonly loadMeasurementDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#name Wirelesscontrollerhotspot20H2Qpwanmetric#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#symmetric_wan_link Wirelesscontrollerhotspot20H2Qpwanmetric#symmetric_wan_link}
  */
  readonly symmetricWanLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#uplink_load Wirelesscontrollerhotspot20H2Qpwanmetric#uplink_load}
  */
  readonly uplinkLoad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#uplink_speed Wirelesscontrollerhotspot20H2Qpwanmetric#uplink_speed}
  */
  readonly uplinkSpeed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#vdomparam Wirelesscontrollerhotspot20H2Qpwanmetric#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric fortios_wirelesscontrollerhotspot20_h2qpwanmetric}
*/
export class Wirelesscontrollerhotspot20H2Qpwanmetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontrollerhotspot20_h2qpwanmetric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wirelesscontrollerhotspot20H2Qpwanmetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wirelesscontrollerhotspot20H2Qpwanmetric to import
  * @param importFromId The id of the existing Wirelesscontrollerhotspot20H2Qpwanmetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wirelesscontrollerhotspot20H2Qpwanmetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontrollerhotspot20_h2qpwanmetric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontrollerhotspot20_h2qpwanmetric fortios_wirelesscontrollerhotspot20_h2qpwanmetric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Wirelesscontrollerhotspot20H2QpwanmetricConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Wirelesscontrollerhotspot20H2QpwanmetricConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontrollerhotspot20_h2qpwanmetric',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._downlinkLoad = config.downlinkLoad;
    this._downlinkSpeed = config.downlinkSpeed;
    this._id = config.id;
    this._linkAtCapacity = config.linkAtCapacity;
    this._linkStatus = config.linkStatus;
    this._loadMeasurementDuration = config.loadMeasurementDuration;
    this._name = config.name;
    this._symmetricWanLink = config.symmetricWanLink;
    this._uplinkLoad = config.uplinkLoad;
    this._uplinkSpeed = config.uplinkSpeed;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // downlink_load - computed: false, optional: true, required: false
  private _downlinkLoad?: number; 
  public get downlinkLoad() {
    return this.getNumberAttribute('downlink_load');
  }
  public set downlinkLoad(value: number) {
    this._downlinkLoad = value;
  }
  public resetDownlinkLoad() {
    this._downlinkLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkLoadInput() {
    return this._downlinkLoad;
  }

  // downlink_speed - computed: true, optional: true, required: false
  private _downlinkSpeed?: number; 
  public get downlinkSpeed() {
    return this.getNumberAttribute('downlink_speed');
  }
  public set downlinkSpeed(value: number) {
    this._downlinkSpeed = value;
  }
  public resetDownlinkSpeed() {
    this._downlinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkSpeedInput() {
    return this._downlinkSpeed;
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

  // link_at_capacity - computed: true, optional: true, required: false
  private _linkAtCapacity?: string; 
  public get linkAtCapacity() {
    return this.getStringAttribute('link_at_capacity');
  }
  public set linkAtCapacity(value: string) {
    this._linkAtCapacity = value;
  }
  public resetLinkAtCapacity() {
    this._linkAtCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkAtCapacityInput() {
    return this._linkAtCapacity;
  }

  // link_status - computed: true, optional: true, required: false
  private _linkStatus?: string; 
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }
  public set linkStatus(value: string) {
    this._linkStatus = value;
  }
  public resetLinkStatus() {
    this._linkStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStatusInput() {
    return this._linkStatus;
  }

  // load_measurement_duration - computed: false, optional: true, required: false
  private _loadMeasurementDuration?: number; 
  public get loadMeasurementDuration() {
    return this.getNumberAttribute('load_measurement_duration');
  }
  public set loadMeasurementDuration(value: number) {
    this._loadMeasurementDuration = value;
  }
  public resetLoadMeasurementDuration() {
    this._loadMeasurementDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadMeasurementDurationInput() {
    return this._loadMeasurementDuration;
  }

  // name - computed: true, optional: true, required: false
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

  // symmetric_wan_link - computed: true, optional: true, required: false
  private _symmetricWanLink?: string; 
  public get symmetricWanLink() {
    return this.getStringAttribute('symmetric_wan_link');
  }
  public set symmetricWanLink(value: string) {
    this._symmetricWanLink = value;
  }
  public resetSymmetricWanLink() {
    this._symmetricWanLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricWanLinkInput() {
    return this._symmetricWanLink;
  }

  // uplink_load - computed: false, optional: true, required: false
  private _uplinkLoad?: number; 
  public get uplinkLoad() {
    return this.getNumberAttribute('uplink_load');
  }
  public set uplinkLoad(value: number) {
    this._uplinkLoad = value;
  }
  public resetUplinkLoad() {
    this._uplinkLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkLoadInput() {
    return this._uplinkLoad;
  }

  // uplink_speed - computed: true, optional: true, required: false
  private _uplinkSpeed?: number; 
  public get uplinkSpeed() {
    return this.getNumberAttribute('uplink_speed');
  }
  public set uplinkSpeed(value: number) {
    this._uplinkSpeed = value;
  }
  public resetUplinkSpeed() {
    this._uplinkSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkSpeedInput() {
    return this._uplinkSpeed;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      downlink_load: cdktf.numberToTerraform(this._downlinkLoad),
      downlink_speed: cdktf.numberToTerraform(this._downlinkSpeed),
      id: cdktf.stringToTerraform(this._id),
      link_at_capacity: cdktf.stringToTerraform(this._linkAtCapacity),
      link_status: cdktf.stringToTerraform(this._linkStatus),
      load_measurement_duration: cdktf.numberToTerraform(this._loadMeasurementDuration),
      name: cdktf.stringToTerraform(this._name),
      symmetric_wan_link: cdktf.stringToTerraform(this._symmetricWanLink),
      uplink_load: cdktf.numberToTerraform(this._uplinkLoad),
      uplink_speed: cdktf.numberToTerraform(this._uplinkSpeed),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      downlink_load: {
        value: cdktf.numberToHclTerraform(this._downlinkLoad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_speed: {
        value: cdktf.numberToHclTerraform(this._downlinkSpeed),
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
      link_at_capacity: {
        value: cdktf.stringToHclTerraform(this._linkAtCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_status: {
        value: cdktf.stringToHclTerraform(this._linkStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_measurement_duration: {
        value: cdktf.numberToHclTerraform(this._loadMeasurementDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      symmetric_wan_link: {
        value: cdktf.stringToHclTerraform(this._symmetricWanLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_load: {
        value: cdktf.numberToHclTerraform(this._uplinkLoad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_speed: {
        value: cdktf.numberToHclTerraform(this._uplinkSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
