// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderBootimageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper#id DataThunderBootimageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper#oper DataThunderBootimageOper#oper}
  */
  readonly oper?: DataThunderBootimageOperOper;
}
export interface DataThunderBootimageOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper#cf_default DataThunderBootimageOper#cf_default}
  */
  readonly cfDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper#cf_pri DataThunderBootimageOper#cf_pri}
  */
  readonly cfPri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper#cf_sec DataThunderBootimageOper#cf_sec}
  */
  readonly cfSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper#hd_default DataThunderBootimageOper#hd_default}
  */
  readonly hdDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper#hd_pri DataThunderBootimageOper#hd_pri}
  */
  readonly hdPri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper#hd_sec DataThunderBootimageOper#hd_sec}
  */
  readonly hdSec?: string;
}

export function dataThunderBootimageOperOperToTerraform(struct?: DataThunderBootimageOperOperOutputReference | DataThunderBootimageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cf_default: cdktf.stringToTerraform(struct!.cfDefault),
    cf_pri: cdktf.stringToTerraform(struct!.cfPri),
    cf_sec: cdktf.stringToTerraform(struct!.cfSec),
    hd_default: cdktf.stringToTerraform(struct!.hdDefault),
    hd_pri: cdktf.stringToTerraform(struct!.hdPri),
    hd_sec: cdktf.stringToTerraform(struct!.hdSec),
  }
}


export function dataThunderBootimageOperOperToHclTerraform(struct?: DataThunderBootimageOperOperOutputReference | DataThunderBootimageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cf_default: {
      value: cdktf.stringToHclTerraform(struct!.cfDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cf_pri: {
      value: cdktf.stringToHclTerraform(struct!.cfPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cf_sec: {
      value: cdktf.stringToHclTerraform(struct!.cfSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hd_default: {
      value: cdktf.stringToHclTerraform(struct!.hdDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hd_pri: {
      value: cdktf.stringToHclTerraform(struct!.hdPri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hd_sec: {
      value: cdktf.stringToHclTerraform(struct!.hdSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderBootimageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderBootimageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfDefault = this._cfDefault;
    }
    if (this._cfPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfPri = this._cfPri;
    }
    if (this._cfSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfSec = this._cfSec;
    }
    if (this._hdDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdDefault = this._hdDefault;
    }
    if (this._hdPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdPri = this._hdPri;
    }
    if (this._hdSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdSec = this._hdSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderBootimageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cfDefault = undefined;
      this._cfPri = undefined;
      this._cfSec = undefined;
      this._hdDefault = undefined;
      this._hdPri = undefined;
      this._hdSec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cfDefault = value.cfDefault;
      this._cfPri = value.cfPri;
      this._cfSec = value.cfSec;
      this._hdDefault = value.hdDefault;
      this._hdPri = value.hdPri;
      this._hdSec = value.hdSec;
    }
  }

  // cf_default - computed: false, optional: true, required: false
  private _cfDefault?: string; 
  public get cfDefault() {
    return this.getStringAttribute('cf_default');
  }
  public set cfDefault(value: string) {
    this._cfDefault = value;
  }
  public resetCfDefault() {
    this._cfDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfDefaultInput() {
    return this._cfDefault;
  }

  // cf_pri - computed: false, optional: true, required: false
  private _cfPri?: string; 
  public get cfPri() {
    return this.getStringAttribute('cf_pri');
  }
  public set cfPri(value: string) {
    this._cfPri = value;
  }
  public resetCfPri() {
    this._cfPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfPriInput() {
    return this._cfPri;
  }

  // cf_sec - computed: false, optional: true, required: false
  private _cfSec?: string; 
  public get cfSec() {
    return this.getStringAttribute('cf_sec');
  }
  public set cfSec(value: string) {
    this._cfSec = value;
  }
  public resetCfSec() {
    this._cfSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfSecInput() {
    return this._cfSec;
  }

  // hd_default - computed: false, optional: true, required: false
  private _hdDefault?: string; 
  public get hdDefault() {
    return this.getStringAttribute('hd_default');
  }
  public set hdDefault(value: string) {
    this._hdDefault = value;
  }
  public resetHdDefault() {
    this._hdDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdDefaultInput() {
    return this._hdDefault;
  }

  // hd_pri - computed: false, optional: true, required: false
  private _hdPri?: string; 
  public get hdPri() {
    return this.getStringAttribute('hd_pri');
  }
  public set hdPri(value: string) {
    this._hdPri = value;
  }
  public resetHdPri() {
    this._hdPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdPriInput() {
    return this._hdPri;
  }

  // hd_sec - computed: false, optional: true, required: false
  private _hdSec?: string; 
  public get hdSec() {
    return this.getStringAttribute('hd_sec');
  }
  public set hdSec(value: string) {
    this._hdSec = value;
  }
  public resetHdSec() {
    this._hdSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdSecInput() {
    return this._hdSec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper thunder_bootimage_oper}
*/
export class DataThunderBootimageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_bootimage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderBootimageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderBootimageOper to import
  * @param importFromId The id of the existing DataThunderBootimageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderBootimageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_bootimage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/bootimage_oper thunder_bootimage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderBootimageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderBootimageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_bootimage_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderBootimageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderBootimageOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderBootimageOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderBootimageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderBootimageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
