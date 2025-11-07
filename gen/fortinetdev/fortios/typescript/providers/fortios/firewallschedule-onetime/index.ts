// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallscheduleOnetimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#color FirewallscheduleOnetime#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#end FirewallscheduleOnetime#end}
  */
  readonly end: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#end_utc FirewallscheduleOnetime#end_utc}
  */
  readonly endUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#expiration_days FirewallscheduleOnetime#expiration_days}
  */
  readonly expirationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#fabric_object FirewallscheduleOnetime#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#id FirewallscheduleOnetime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#name FirewallscheduleOnetime#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#start FirewallscheduleOnetime#start}
  */
  readonly start: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#start_utc FirewallscheduleOnetime#start_utc}
  */
  readonly startUtc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#uuid FirewallscheduleOnetime#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#vdomparam FirewallscheduleOnetime#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime fortios_firewallschedule_onetime}
*/
export class FirewallscheduleOnetime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewallschedule_onetime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallscheduleOnetime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallscheduleOnetime to import
  * @param importFromId The id of the existing FirewallscheduleOnetime that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallscheduleOnetime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewallschedule_onetime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallschedule_onetime fortios_firewallschedule_onetime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallscheduleOnetimeConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallscheduleOnetimeConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewallschedule_onetime',
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
    this._color = config.color;
    this._end = config.end;
    this._endUtc = config.endUtc;
    this._expirationDays = config.expirationDays;
    this._fabricObject = config.fabricObject;
    this._id = config.id;
    this._name = config.name;
    this._start = config.start;
    this._startUtc = config.startUtc;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // end_utc - computed: false, optional: true, required: false
  private _endUtc?: string; 
  public get endUtc() {
    return this.getStringAttribute('end_utc');
  }
  public set endUtc(value: string) {
    this._endUtc = value;
  }
  public resetEndUtc() {
    this._endUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUtcInput() {
    return this._endUtc;
  }

  // expiration_days - computed: true, optional: true, required: false
  private _expirationDays?: number; 
  public get expirationDays() {
    return this.getNumberAttribute('expiration_days');
  }
  public set expirationDays(value: number) {
    this._expirationDays = value;
  }
  public resetExpirationDays() {
    this._expirationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDaysInput() {
    return this._expirationDays;
  }

  // fabric_object - computed: true, optional: true, required: false
  private _fabricObject?: string; 
  public get fabricObject() {
    return this.getStringAttribute('fabric_object');
  }
  public set fabricObject(value: string) {
    this._fabricObject = value;
  }
  public resetFabricObject() {
    this._fabricObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricObjectInput() {
    return this._fabricObject;
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

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // start_utc - computed: false, optional: true, required: false
  private _startUtc?: string; 
  public get startUtc() {
    return this.getStringAttribute('start_utc');
  }
  public set startUtc(value: string) {
    this._startUtc = value;
  }
  public resetStartUtc() {
    this._startUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startUtcInput() {
    return this._startUtc;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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
      color: cdktf.numberToTerraform(this._color),
      end: cdktf.stringToTerraform(this._end),
      end_utc: cdktf.stringToTerraform(this._endUtc),
      expiration_days: cdktf.numberToTerraform(this._expirationDays),
      fabric_object: cdktf.stringToTerraform(this._fabricObject),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      start: cdktf.stringToTerraform(this._start),
      start_utc: cdktf.stringToTerraform(this._startUtc),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end: {
        value: cdktf.stringToHclTerraform(this._end),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_utc: {
        value: cdktf.stringToHclTerraform(this._endUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_days: {
        value: cdktf.numberToHclTerraform(this._expirationDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_object: {
        value: cdktf.stringToHclTerraform(this._fabricObject),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start: {
        value: cdktf.stringToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_utc: {
        value: cdktf.stringToHclTerraform(this._startUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
