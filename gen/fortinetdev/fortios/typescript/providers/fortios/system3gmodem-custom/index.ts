// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface System3GmodemCustomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#class_id System3GmodemCustom#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#fosid System3GmodemCustom#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#id System3GmodemCustom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#init_string System3GmodemCustom#init_string}
  */
  readonly initString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#model System3GmodemCustom#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#modeswitch_string System3GmodemCustom#modeswitch_string}
  */
  readonly modeswitchString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#product_id System3GmodemCustom#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#vdomparam System3GmodemCustom#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#vendor System3GmodemCustom#vendor}
  */
  readonly vendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#vendor_id System3GmodemCustom#vendor_id}
  */
  readonly vendorId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom fortios_system3gmodem_custom}
*/
export class System3GmodemCustom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system3gmodem_custom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a System3GmodemCustom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the System3GmodemCustom to import
  * @param importFromId The id of the existing System3GmodemCustom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the System3GmodemCustom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system3gmodem_custom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system3gmodem_custom fortios_system3gmodem_custom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options System3GmodemCustomConfig = {}
  */
  public constructor(scope: Construct, id: string, config: System3GmodemCustomConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system3gmodem_custom',
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
    this._classId = config.classId;
    this._fosid = config.fosid;
    this._id = config.id;
    this._initString = config.initString;
    this._model = config.model;
    this._modeswitchString = config.modeswitchString;
    this._productId = config.productId;
    this._vdomparam = config.vdomparam;
    this._vendor = config.vendor;
    this._vendorId = config.vendorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // fosid - computed: true, optional: true, required: false
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

  // init_string - computed: false, optional: true, required: false
  private _initString?: string; 
  public get initString() {
    return this.getStringAttribute('init_string');
  }
  public set initString(value: string) {
    this._initString = value;
  }
  public resetInitString() {
    this._initString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initStringInput() {
    return this._initString;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // modeswitch_string - computed: false, optional: true, required: false
  private _modeswitchString?: string; 
  public get modeswitchString() {
    return this.getStringAttribute('modeswitch_string');
  }
  public set modeswitchString(value: string) {
    this._modeswitchString = value;
  }
  public resetModeswitchString() {
    this._modeswitchString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeswitchStringInput() {
    return this._modeswitchString;
  }

  // product_id - computed: false, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
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

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // vendor_id - computed: false, optional: true, required: false
  private _vendorId?: string; 
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
  public set vendorId(value: string) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_id: cdktf.stringToTerraform(this._classId),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      init_string: cdktf.stringToTerraform(this._initString),
      model: cdktf.stringToTerraform(this._model),
      modeswitch_string: cdktf.stringToTerraform(this._modeswitchString),
      product_id: cdktf.stringToTerraform(this._productId),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vendor: cdktf.stringToTerraform(this._vendor),
      vendor_id: cdktf.stringToTerraform(this._vendorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
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
      init_string: {
        value: cdktf.stringToHclTerraform(this._initString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modeswitch_string: {
        value: cdktf.stringToHclTerraform(this._modeswitchString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
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
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_id: {
        value: cdktf.stringToHclTerraform(this._vendorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
