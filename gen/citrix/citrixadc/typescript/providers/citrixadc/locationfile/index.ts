// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/locationfile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/locationfile#format Locationfile#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/locationfile#id Locationfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/locationfile#locationfile Locationfile#locationfile}
  */
  readonly locationfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/locationfile#src Locationfile#src}
  */
  readonly src?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/locationfile citrixadc_locationfile}
*/
export class Locationfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_locationfile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Locationfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Locationfile to import
  * @param importFromId The id of the existing Locationfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/locationfile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Locationfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_locationfile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/locationfile citrixadc_locationfile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationfileConfig
  */
  public constructor(scope: Construct, id: string, config: LocationfileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_locationfile',
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
    this._format = config.format;
    this._id = config.id;
    this._locationfile = config.locationfile;
    this._src = config.src;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // locationfile - computed: false, optional: false, required: true
  private _locationfile?: string; 
  public get locationfile() {
    return this.getStringAttribute('locationfile');
  }
  public set locationfile(value: string) {
    this._locationfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationfileInput() {
    return this._locationfile;
  }

  // src - computed: false, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      locationfile: cdktf.stringToTerraform(this._locationfile),
      src: cdktf.stringToTerraform(this._src),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      locationfile: {
        value: cdktf.stringToHclTerraform(this._locationfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
