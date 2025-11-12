// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseManagerOverageAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#bytes LicenseManagerOverageA#bytes}
  */
  readonly bytes?: number;
  /**
  * Number of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#days LicenseManagerOverageA#days}
  */
  readonly days?: number;
  /**
  * Number of GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#gb LicenseManagerOverageA#gb}
  */
  readonly gb?: number;
  /**
  * Number of hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#hours LicenseManagerOverageA#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#id LicenseManagerOverageA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of KB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#kb LicenseManagerOverageA#kb}
  */
  readonly kb?: number;
  /**
  * Number of MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#mb LicenseManagerOverageA#mb}
  */
  readonly mb?: number;
  /**
  * Number of minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#minutes LicenseManagerOverageA#minutes}
  */
  readonly minutes?: number;
  /**
  * Number of seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#seconds LicenseManagerOverageA#seconds}
  */
  readonly seconds?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#uuid LicenseManagerOverageA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage thunder_license_manager_overage}
*/
export class LicenseManagerOverageA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_license_manager_overage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseManagerOverageA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseManagerOverageA to import
  * @param importFromId The id of the existing LicenseManagerOverageA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseManagerOverageA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_license_manager_overage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/license_manager_overage thunder_license_manager_overage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseManagerOverageAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LicenseManagerOverageAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_license_manager_overage',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bytes = config.bytes;
    this._days = config.days;
    this._gb = config.gb;
    this._hours = config.hours;
    this._id = config.id;
    this._kb = config.kb;
    this._mb = config.mb;
    this._minutes = config.minutes;
    this._seconds = config.seconds;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bytes - computed: false, optional: true, required: false
  private _bytes?: number; 
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }
  public set bytes(value: number) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // gb - computed: false, optional: true, required: false
  private _gb?: number; 
  public get gb() {
    return this.getNumberAttribute('gb');
  }
  public set gb(value: number) {
    this._gb = value;
  }
  public resetGb() {
    this._gb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gbInput() {
    return this._gb;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
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

  // kb - computed: false, optional: true, required: false
  private _kb?: number; 
  public get kb() {
    return this.getNumberAttribute('kb');
  }
  public set kb(value: number) {
    this._kb = value;
  }
  public resetKb() {
    this._kb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbInput() {
    return this._kb;
  }

  // mb - computed: false, optional: true, required: false
  private _mb?: number; 
  public get mb() {
    return this.getNumberAttribute('mb');
  }
  public set mb(value: number) {
    this._mb = value;
  }
  public resetMb() {
    this._mb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbInput() {
    return this._mb;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bytes: cdktf.numberToTerraform(this._bytes),
      days: cdktf.numberToTerraform(this._days),
      gb: cdktf.numberToTerraform(this._gb),
      hours: cdktf.numberToTerraform(this._hours),
      id: cdktf.stringToTerraform(this._id),
      kb: cdktf.numberToTerraform(this._kb),
      mb: cdktf.numberToTerraform(this._mb),
      minutes: cdktf.numberToTerraform(this._minutes),
      seconds: cdktf.numberToTerraform(this._seconds),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bytes: {
        value: cdktf.numberToHclTerraform(this._bytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      days: {
        value: cdktf.numberToHclTerraform(this._days),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gb: {
        value: cdktf.numberToHclTerraform(this._gb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hours: {
        value: cdktf.numberToHclTerraform(this._hours),
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
      kb: {
        value: cdktf.numberToHclTerraform(this._kb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mb: {
        value: cdktf.numberToHclTerraform(this._mb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minutes: {
        value: cdktf.numberToHclTerraform(this._minutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seconds: {
        value: cdktf.numberToHclTerraform(this._seconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
