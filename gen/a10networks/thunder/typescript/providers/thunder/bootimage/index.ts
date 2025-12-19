// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootimageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#id Bootimage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#uuid Bootimage#uuid}
  */
  readonly uuid?: string;
  /**
  * cf_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#cf_cfg Bootimage#cf_cfg}
  */
  readonly cfCfg?: BootimageCfCfg;
  /**
  * hd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#hd_cfg Bootimage#hd_cfg}
  */
  readonly hdCfg?: BootimageHdCfg;
}
export interface BootimageCfCfg {
  /**
  * Compact flash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#cf Bootimage#cf}
  */
  readonly cf?: number;
  /**
  * Primary image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#cf_pri Bootimage#cf_pri}
  */
  readonly cfPri?: number;
}

export function bootimageCfCfgToTerraform(struct?: BootimageCfCfgOutputReference | BootimageCfCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cf: cdktf.numberToTerraform(struct!.cf),
    cf_pri: cdktf.numberToTerraform(struct!.cfPri),
  }
}


export function bootimageCfCfgToHclTerraform(struct?: BootimageCfCfgOutputReference | BootimageCfCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cf: {
      value: cdktf.numberToHclTerraform(struct!.cf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cf_pri: {
      value: cdktf.numberToHclTerraform(struct!.cfPri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BootimageCfCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BootimageCfCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cf !== undefined) {
      hasAnyValues = true;
      internalValueResult.cf = this._cf;
    }
    if (this._cfPri !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfPri = this._cfPri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BootimageCfCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cf = undefined;
      this._cfPri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cf = value.cf;
      this._cfPri = value.cfPri;
    }
  }

  // cf - computed: false, optional: true, required: false
  private _cf?: number; 
  public get cf() {
    return this.getNumberAttribute('cf');
  }
  public set cf(value: number) {
    this._cf = value;
  }
  public resetCf() {
    this._cf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfInput() {
    return this._cf;
  }

  // cf_pri - computed: false, optional: true, required: false
  private _cfPri?: number; 
  public get cfPri() {
    return this.getNumberAttribute('cf_pri');
  }
  public set cfPri(value: number) {
    this._cfPri = value;
  }
  public resetCfPri() {
    this._cfPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfPriInput() {
    return this._cfPri;
  }
}
export interface BootimageHdCfg {
  /**
  * Hard disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#hd Bootimage#hd}
  */
  readonly hd?: number;
  /**
  * Primary image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#pri Bootimage#pri}
  */
  readonly pri?: number;
  /**
  * Secondary image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#sec Bootimage#sec}
  */
  readonly sec?: number;
}

export function bootimageHdCfgToTerraform(struct?: BootimageHdCfgOutputReference | BootimageHdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hd: cdktf.numberToTerraform(struct!.hd),
    pri: cdktf.numberToTerraform(struct!.pri),
    sec: cdktf.numberToTerraform(struct!.sec),
  }
}


export function bootimageHdCfgToHclTerraform(struct?: BootimageHdCfgOutputReference | BootimageHdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hd: {
      value: cdktf.numberToHclTerraform(struct!.hd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pri: {
      value: cdktf.numberToHclTerraform(struct!.pri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec: {
      value: cdktf.numberToHclTerraform(struct!.sec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BootimageHdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BootimageHdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hd !== undefined) {
      hasAnyValues = true;
      internalValueResult.hd = this._hd;
    }
    if (this._pri !== undefined) {
      hasAnyValues = true;
      internalValueResult.pri = this._pri;
    }
    if (this._sec !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec = this._sec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BootimageHdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hd = undefined;
      this._pri = undefined;
      this._sec = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hd = value.hd;
      this._pri = value.pri;
      this._sec = value.sec;
    }
  }

  // hd - computed: false, optional: true, required: false
  private _hd?: number; 
  public get hd() {
    return this.getNumberAttribute('hd');
  }
  public set hd(value: number) {
    this._hd = value;
  }
  public resetHd() {
    this._hd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdInput() {
    return this._hd;
  }

  // pri - computed: false, optional: true, required: false
  private _pri?: number; 
  public get pri() {
    return this.getNumberAttribute('pri');
  }
  public set pri(value: number) {
    this._pri = value;
  }
  public resetPri() {
    this._pri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priInput() {
    return this._pri;
  }

  // sec - computed: false, optional: true, required: false
  private _sec?: number; 
  public get sec() {
    return this.getNumberAttribute('sec');
  }
  public set sec(value: number) {
    this._sec = value;
  }
  public resetSec() {
    this._sec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secInput() {
    return this._sec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage thunder_bootimage}
*/
export class Bootimage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_bootimage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bootimage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bootimage to import
  * @param importFromId The id of the existing Bootimage that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bootimage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_bootimage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bootimage thunder_bootimage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootimageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BootimageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_bootimage',
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
    this._uuid = config.uuid;
    this._cfCfg.internalValue = config.cfCfg;
    this._hdCfg.internalValue = config.hdCfg;
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

  // cf_cfg - computed: false, optional: true, required: false
  private _cfCfg = new BootimageCfCfgOutputReference(this, "cf_cfg");
  public get cfCfg() {
    return this._cfCfg;
  }
  public putCfCfg(value: BootimageCfCfg) {
    this._cfCfg.internalValue = value;
  }
  public resetCfCfg() {
    this._cfCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfCfgInput() {
    return this._cfCfg.internalValue;
  }

  // hd_cfg - computed: false, optional: true, required: false
  private _hdCfg = new BootimageHdCfgOutputReference(this, "hd_cfg");
  public get hdCfg() {
    return this._hdCfg;
  }
  public putHdCfg(value: BootimageHdCfg) {
    this._hdCfg.internalValue = value;
  }
  public resetHdCfg() {
    this._hdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdCfgInput() {
    return this._hdCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      cf_cfg: bootimageCfCfgToTerraform(this._cfCfg.internalValue),
      hd_cfg: bootimageHdCfgToTerraform(this._hdCfg.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cf_cfg: {
        value: bootimageCfCfgToHclTerraform(this._cfCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BootimageCfCfgList",
      },
      hd_cfg: {
        value: bootimageHdCfgToHclTerraform(this._hdCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BootimageHdCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
