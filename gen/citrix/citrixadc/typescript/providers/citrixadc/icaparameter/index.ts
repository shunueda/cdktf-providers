// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IcaparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#dfpersistence Icaparameter#dfpersistence}
  */
  readonly dfpersistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#edtlosstolerant Icaparameter#edtlosstolerant}
  */
  readonly edtlosstolerant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#edtpmtuddf Icaparameter#edtpmtuddf}
  */
  readonly edtpmtuddf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#edtpmtuddftimeout Icaparameter#edtpmtuddftimeout}
  */
  readonly edtpmtuddftimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#edtpmtudrediscovery Icaparameter#edtpmtudrediscovery}
  */
  readonly edtpmtudrediscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#enablesronhafailover Icaparameter#enablesronhafailover}
  */
  readonly enablesronhafailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#hdxinsightnonnsap Icaparameter#hdxinsightnonnsap}
  */
  readonly hdxinsightnonnsap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#id Icaparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#l7latencyfrequency Icaparameter#l7latencyfrequency}
  */
  readonly l7Latencyfrequency?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter citrixadc_icaparameter}
*/
export class Icaparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_icaparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Icaparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Icaparameter to import
  * @param importFromId The id of the existing Icaparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Icaparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_icaparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/icaparameter citrixadc_icaparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IcaparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IcaparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_icaparameter',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dfpersistence = config.dfpersistence;
    this._edtlosstolerant = config.edtlosstolerant;
    this._edtpmtuddf = config.edtpmtuddf;
    this._edtpmtuddftimeout = config.edtpmtuddftimeout;
    this._edtpmtudrediscovery = config.edtpmtudrediscovery;
    this._enablesronhafailover = config.enablesronhafailover;
    this._hdxinsightnonnsap = config.hdxinsightnonnsap;
    this._id = config.id;
    this._l7Latencyfrequency = config.l7Latencyfrequency;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dfpersistence - computed: true, optional: true, required: false
  private _dfpersistence?: string; 
  public get dfpersistence() {
    return this.getStringAttribute('dfpersistence');
  }
  public set dfpersistence(value: string) {
    this._dfpersistence = value;
  }
  public resetDfpersistence() {
    this._dfpersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfpersistenceInput() {
    return this._dfpersistence;
  }

  // edtlosstolerant - computed: true, optional: true, required: false
  private _edtlosstolerant?: string; 
  public get edtlosstolerant() {
    return this.getStringAttribute('edtlosstolerant');
  }
  public set edtlosstolerant(value: string) {
    this._edtlosstolerant = value;
  }
  public resetEdtlosstolerant() {
    this._edtlosstolerant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edtlosstolerantInput() {
    return this._edtlosstolerant;
  }

  // edtpmtuddf - computed: true, optional: true, required: false
  private _edtpmtuddf?: string; 
  public get edtpmtuddf() {
    return this.getStringAttribute('edtpmtuddf');
  }
  public set edtpmtuddf(value: string) {
    this._edtpmtuddf = value;
  }
  public resetEdtpmtuddf() {
    this._edtpmtuddf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edtpmtuddfInput() {
    return this._edtpmtuddf;
  }

  // edtpmtuddftimeout - computed: true, optional: true, required: false
  private _edtpmtuddftimeout?: number; 
  public get edtpmtuddftimeout() {
    return this.getNumberAttribute('edtpmtuddftimeout');
  }
  public set edtpmtuddftimeout(value: number) {
    this._edtpmtuddftimeout = value;
  }
  public resetEdtpmtuddftimeout() {
    this._edtpmtuddftimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edtpmtuddftimeoutInput() {
    return this._edtpmtuddftimeout;
  }

  // edtpmtudrediscovery - computed: true, optional: true, required: false
  private _edtpmtudrediscovery?: string; 
  public get edtpmtudrediscovery() {
    return this.getStringAttribute('edtpmtudrediscovery');
  }
  public set edtpmtudrediscovery(value: string) {
    this._edtpmtudrediscovery = value;
  }
  public resetEdtpmtudrediscovery() {
    this._edtpmtudrediscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edtpmtudrediscoveryInput() {
    return this._edtpmtudrediscovery;
  }

  // enablesronhafailover - computed: true, optional: true, required: false
  private _enablesronhafailover?: string; 
  public get enablesronhafailover() {
    return this.getStringAttribute('enablesronhafailover');
  }
  public set enablesronhafailover(value: string) {
    this._enablesronhafailover = value;
  }
  public resetEnablesronhafailover() {
    this._enablesronhafailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablesronhafailoverInput() {
    return this._enablesronhafailover;
  }

  // hdxinsightnonnsap - computed: true, optional: true, required: false
  private _hdxinsightnonnsap?: string; 
  public get hdxinsightnonnsap() {
    return this.getStringAttribute('hdxinsightnonnsap');
  }
  public set hdxinsightnonnsap(value: string) {
    this._hdxinsightnonnsap = value;
  }
  public resetHdxinsightnonnsap() {
    this._hdxinsightnonnsap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdxinsightnonnsapInput() {
    return this._hdxinsightnonnsap;
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

  // l7latencyfrequency - computed: true, optional: true, required: false
  private _l7Latencyfrequency?: number; 
  public get l7Latencyfrequency() {
    return this.getNumberAttribute('l7latencyfrequency');
  }
  public set l7Latencyfrequency(value: number) {
    this._l7Latencyfrequency = value;
  }
  public resetL7Latencyfrequency() {
    this._l7Latencyfrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7LatencyfrequencyInput() {
    return this._l7Latencyfrequency;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dfpersistence: cdktf.stringToTerraform(this._dfpersistence),
      edtlosstolerant: cdktf.stringToTerraform(this._edtlosstolerant),
      edtpmtuddf: cdktf.stringToTerraform(this._edtpmtuddf),
      edtpmtuddftimeout: cdktf.numberToTerraform(this._edtpmtuddftimeout),
      edtpmtudrediscovery: cdktf.stringToTerraform(this._edtpmtudrediscovery),
      enablesronhafailover: cdktf.stringToTerraform(this._enablesronhafailover),
      hdxinsightnonnsap: cdktf.stringToTerraform(this._hdxinsightnonnsap),
      id: cdktf.stringToTerraform(this._id),
      l7latencyfrequency: cdktf.numberToTerraform(this._l7Latencyfrequency),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dfpersistence: {
        value: cdktf.stringToHclTerraform(this._dfpersistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edtlosstolerant: {
        value: cdktf.stringToHclTerraform(this._edtlosstolerant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edtpmtuddf: {
        value: cdktf.stringToHclTerraform(this._edtpmtuddf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edtpmtuddftimeout: {
        value: cdktf.numberToHclTerraform(this._edtpmtuddftimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edtpmtudrediscovery: {
        value: cdktf.stringToHclTerraform(this._edtpmtudrediscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablesronhafailover: {
        value: cdktf.stringToHclTerraform(this._enablesronhafailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hdxinsightnonnsap: {
        value: cdktf.stringToHclTerraform(this._hdxinsightnonnsap),
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
      l7latencyfrequency: {
        value: cdktf.numberToHclTerraform(this._l7Latencyfrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
