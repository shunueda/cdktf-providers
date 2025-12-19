// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderTimezoneOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper#id DataThunderTimezoneOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper#oper DataThunderTimezoneOper#oper}
  */
  readonly oper?: DataThunderTimezoneOperOper;
}
export interface DataThunderTimezoneOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper#deny_dst DataThunderTimezoneOper#deny_dst}
  */
  readonly denyDst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper#dst_name DataThunderTimezoneOper#dst_name}
  */
  readonly dstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper#location DataThunderTimezoneOper#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper#std_name DataThunderTimezoneOper#std_name}
  */
  readonly stdName?: string;
}

export function dataThunderTimezoneOperOperToTerraform(struct?: DataThunderTimezoneOperOperOutputReference | DataThunderTimezoneOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_dst: cdktf.stringToTerraform(struct!.denyDst),
    dst_name: cdktf.stringToTerraform(struct!.dstName),
    location: cdktf.stringToTerraform(struct!.location),
    std_name: cdktf.stringToTerraform(struct!.stdName),
  }
}


export function dataThunderTimezoneOperOperToHclTerraform(struct?: DataThunderTimezoneOperOperOutputReference | DataThunderTimezoneOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_dst: {
      value: cdktf.stringToHclTerraform(struct!.denyDst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_name: {
      value: cdktf.stringToHclTerraform(struct!.dstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    std_name: {
      value: cdktf.stringToHclTerraform(struct!.stdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTimezoneOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderTimezoneOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyDst = this._denyDst;
    }
    if (this._dstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstName = this._dstName;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._stdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdName = this._stdName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTimezoneOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denyDst = undefined;
      this._dstName = undefined;
      this._location = undefined;
      this._stdName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denyDst = value.denyDst;
      this._dstName = value.dstName;
      this._location = value.location;
      this._stdName = value.stdName;
    }
  }

  // deny_dst - computed: false, optional: true, required: false
  private _denyDst?: string; 
  public get denyDst() {
    return this.getStringAttribute('deny_dst');
  }
  public set denyDst(value: string) {
    this._denyDst = value;
  }
  public resetDenyDst() {
    this._denyDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyDstInput() {
    return this._denyDst;
  }

  // dst_name - computed: false, optional: true, required: false
  private _dstName?: string; 
  public get dstName() {
    return this.getStringAttribute('dst_name');
  }
  public set dstName(value: string) {
    this._dstName = value;
  }
  public resetDstName() {
    this._dstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNameInput() {
    return this._dstName;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // std_name - computed: false, optional: true, required: false
  private _stdName?: string; 
  public get stdName() {
    return this.getStringAttribute('std_name');
  }
  public set stdName(value: string) {
    this._stdName = value;
  }
  public resetStdName() {
    this._stdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdNameInput() {
    return this._stdName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper thunder_timezone_oper}
*/
export class DataThunderTimezoneOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_timezone_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderTimezoneOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderTimezoneOper to import
  * @param importFromId The id of the existing DataThunderTimezoneOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderTimezoneOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_timezone_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/timezone_oper thunder_timezone_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderTimezoneOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderTimezoneOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_timezone_oper',
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
  private _oper = new DataThunderTimezoneOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderTimezoneOperOper) {
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
      oper: dataThunderTimezoneOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderTimezoneOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderTimezoneOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
