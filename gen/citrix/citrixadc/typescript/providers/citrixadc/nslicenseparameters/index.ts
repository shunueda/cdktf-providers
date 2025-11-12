// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NslicenseparametersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters#alert1gracetimeout Nslicenseparameters#alert1gracetimeout}
  */
  readonly alert1Gracetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters#alert2gracetimeout Nslicenseparameters#alert2gracetimeout}
  */
  readonly alert2Gracetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters#heartbeatinterval Nslicenseparameters#heartbeatinterval}
  */
  readonly heartbeatinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters#id Nslicenseparameters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters#inventoryrefreshinterval Nslicenseparameters#inventoryrefreshinterval}
  */
  readonly inventoryrefreshinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters#licenseexpiryalerttime Nslicenseparameters#licenseexpiryalerttime}
  */
  readonly licenseexpiryalerttime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters citrixadc_nslicenseparameters}
*/
export class Nslicenseparameters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nslicenseparameters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nslicenseparameters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nslicenseparameters to import
  * @param importFromId The id of the existing Nslicenseparameters that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nslicenseparameters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nslicenseparameters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nslicenseparameters citrixadc_nslicenseparameters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NslicenseparametersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NslicenseparametersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nslicenseparameters',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alert1Gracetimeout = config.alert1Gracetimeout;
    this._alert2Gracetimeout = config.alert2Gracetimeout;
    this._heartbeatinterval = config.heartbeatinterval;
    this._id = config.id;
    this._inventoryrefreshinterval = config.inventoryrefreshinterval;
    this._licenseexpiryalerttime = config.licenseexpiryalerttime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert1gracetimeout - computed: true, optional: true, required: false
  private _alert1Gracetimeout?: number; 
  public get alert1Gracetimeout() {
    return this.getNumberAttribute('alert1gracetimeout');
  }
  public set alert1Gracetimeout(value: number) {
    this._alert1Gracetimeout = value;
  }
  public resetAlert1Gracetimeout() {
    this._alert1Gracetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alert1GracetimeoutInput() {
    return this._alert1Gracetimeout;
  }

  // alert2gracetimeout - computed: true, optional: true, required: false
  private _alert2Gracetimeout?: number; 
  public get alert2Gracetimeout() {
    return this.getNumberAttribute('alert2gracetimeout');
  }
  public set alert2Gracetimeout(value: number) {
    this._alert2Gracetimeout = value;
  }
  public resetAlert2Gracetimeout() {
    this._alert2Gracetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alert2GracetimeoutInput() {
    return this._alert2Gracetimeout;
  }

  // heartbeatinterval - computed: true, optional: true, required: false
  private _heartbeatinterval?: number; 
  public get heartbeatinterval() {
    return this.getNumberAttribute('heartbeatinterval');
  }
  public set heartbeatinterval(value: number) {
    this._heartbeatinterval = value;
  }
  public resetHeartbeatinterval() {
    this._heartbeatinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatintervalInput() {
    return this._heartbeatinterval;
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

  // inventoryrefreshinterval - computed: true, optional: true, required: false
  private _inventoryrefreshinterval?: number; 
  public get inventoryrefreshinterval() {
    return this.getNumberAttribute('inventoryrefreshinterval');
  }
  public set inventoryrefreshinterval(value: number) {
    this._inventoryrefreshinterval = value;
  }
  public resetInventoryrefreshinterval() {
    this._inventoryrefreshinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryrefreshintervalInput() {
    return this._inventoryrefreshinterval;
  }

  // licenseexpiryalerttime - computed: true, optional: true, required: false
  private _licenseexpiryalerttime?: number; 
  public get licenseexpiryalerttime() {
    return this.getNumberAttribute('licenseexpiryalerttime');
  }
  public set licenseexpiryalerttime(value: number) {
    this._licenseexpiryalerttime = value;
  }
  public resetLicenseexpiryalerttime() {
    this._licenseexpiryalerttime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseexpiryalerttimeInput() {
    return this._licenseexpiryalerttime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert1gracetimeout: cdktf.numberToTerraform(this._alert1Gracetimeout),
      alert2gracetimeout: cdktf.numberToTerraform(this._alert2Gracetimeout),
      heartbeatinterval: cdktf.numberToTerraform(this._heartbeatinterval),
      id: cdktf.stringToTerraform(this._id),
      inventoryrefreshinterval: cdktf.numberToTerraform(this._inventoryrefreshinterval),
      licenseexpiryalerttime: cdktf.numberToTerraform(this._licenseexpiryalerttime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert1gracetimeout: {
        value: cdktf.numberToHclTerraform(this._alert1Gracetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alert2gracetimeout: {
        value: cdktf.numberToHclTerraform(this._alert2Gracetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heartbeatinterval: {
        value: cdktf.numberToHclTerraform(this._heartbeatinterval),
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
      inventoryrefreshinterval: {
        value: cdktf.numberToHclTerraform(this._inventoryrefreshinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      licenseexpiryalerttime: {
        value: cdktf.numberToHclTerraform(this._licenseexpiryalerttime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
