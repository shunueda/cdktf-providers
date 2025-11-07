// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemPlatformtypeOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper#id DataThunderSystemPlatformtypeOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper#oper DataThunderSystemPlatformtypeOper#oper}
  */
  readonly oper?: DataThunderSystemPlatformtypeOperOper;
}
export interface DataThunderSystemPlatformtypeOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper#platform_axv DataThunderSystemPlatformtypeOper#platform_axv}
  */
  readonly platformAxv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper#platform_dpdk DataThunderSystemPlatformtypeOper#platform_dpdk}
  */
  readonly platformDpdk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper#platform_id DataThunderSystemPlatformtypeOper#platform_id}
  */
  readonly platformId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper#platform_info DataThunderSystemPlatformtypeOper#platform_info}
  */
  readonly platformInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper#platform_lxc DataThunderSystemPlatformtypeOper#platform_lxc}
  */
  readonly platformLxc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper#platform_type DataThunderSystemPlatformtypeOper#platform_type}
  */
  readonly platformType?: string;
}

export function dataThunderSystemPlatformtypeOperOperToTerraform(struct?: DataThunderSystemPlatformtypeOperOperOutputReference | DataThunderSystemPlatformtypeOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    platform_axv: cdktf.numberToTerraform(struct!.platformAxv),
    platform_dpdk: cdktf.numberToTerraform(struct!.platformDpdk),
    platform_id: cdktf.numberToTerraform(struct!.platformId),
    platform_info: cdktf.stringToTerraform(struct!.platformInfo),
    platform_lxc: cdktf.numberToTerraform(struct!.platformLxc),
    platform_type: cdktf.stringToTerraform(struct!.platformType),
  }
}


export function dataThunderSystemPlatformtypeOperOperToHclTerraform(struct?: DataThunderSystemPlatformtypeOperOperOutputReference | DataThunderSystemPlatformtypeOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    platform_axv: {
      value: cdktf.numberToHclTerraform(struct!.platformAxv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    platform_dpdk: {
      value: cdktf.numberToHclTerraform(struct!.platformDpdk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    platform_id: {
      value: cdktf.numberToHclTerraform(struct!.platformId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    platform_info: {
      value: cdktf.stringToHclTerraform(struct!.platformInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform_lxc: {
      value: cdktf.numberToHclTerraform(struct!.platformLxc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    platform_type: {
      value: cdktf.stringToHclTerraform(struct!.platformType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemPlatformtypeOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemPlatformtypeOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._platformAxv !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformAxv = this._platformAxv;
    }
    if (this._platformDpdk !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformDpdk = this._platformDpdk;
    }
    if (this._platformId !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformId = this._platformId;
    }
    if (this._platformInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformInfo = this._platformInfo;
    }
    if (this._platformLxc !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformLxc = this._platformLxc;
    }
    if (this._platformType !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformType = this._platformType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemPlatformtypeOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._platformAxv = undefined;
      this._platformDpdk = undefined;
      this._platformId = undefined;
      this._platformInfo = undefined;
      this._platformLxc = undefined;
      this._platformType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._platformAxv = value.platformAxv;
      this._platformDpdk = value.platformDpdk;
      this._platformId = value.platformId;
      this._platformInfo = value.platformInfo;
      this._platformLxc = value.platformLxc;
      this._platformType = value.platformType;
    }
  }

  // platform_axv - computed: false, optional: true, required: false
  private _platformAxv?: number; 
  public get platformAxv() {
    return this.getNumberAttribute('platform_axv');
  }
  public set platformAxv(value: number) {
    this._platformAxv = value;
  }
  public resetPlatformAxv() {
    this._platformAxv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformAxvInput() {
    return this._platformAxv;
  }

  // platform_dpdk - computed: false, optional: true, required: false
  private _platformDpdk?: number; 
  public get platformDpdk() {
    return this.getNumberAttribute('platform_dpdk');
  }
  public set platformDpdk(value: number) {
    this._platformDpdk = value;
  }
  public resetPlatformDpdk() {
    this._platformDpdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformDpdkInput() {
    return this._platformDpdk;
  }

  // platform_id - computed: false, optional: true, required: false
  private _platformId?: number; 
  public get platformId() {
    return this.getNumberAttribute('platform_id');
  }
  public set platformId(value: number) {
    this._platformId = value;
  }
  public resetPlatformId() {
    this._platformId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformIdInput() {
    return this._platformId;
  }

  // platform_info - computed: false, optional: true, required: false
  private _platformInfo?: string; 
  public get platformInfo() {
    return this.getStringAttribute('platform_info');
  }
  public set platformInfo(value: string) {
    this._platformInfo = value;
  }
  public resetPlatformInfo() {
    this._platformInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInfoInput() {
    return this._platformInfo;
  }

  // platform_lxc - computed: false, optional: true, required: false
  private _platformLxc?: number; 
  public get platformLxc() {
    return this.getNumberAttribute('platform_lxc');
  }
  public set platformLxc(value: number) {
    this._platformLxc = value;
  }
  public resetPlatformLxc() {
    this._platformLxc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformLxcInput() {
    return this._platformLxc;
  }

  // platform_type - computed: false, optional: true, required: false
  private _platformType?: string; 
  public get platformType() {
    return this.getStringAttribute('platform_type');
  }
  public set platformType(value: string) {
    this._platformType = value;
  }
  public resetPlatformType() {
    this._platformType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformTypeInput() {
    return this._platformType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper thunder_system_platformtype_oper}
*/
export class DataThunderSystemPlatformtypeOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_platformtype_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemPlatformtypeOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemPlatformtypeOper to import
  * @param importFromId The id of the existing DataThunderSystemPlatformtypeOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemPlatformtypeOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_platformtype_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_platformtype_oper thunder_system_platformtype_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemPlatformtypeOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemPlatformtypeOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_platformtype_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _oper = new DataThunderSystemPlatformtypeOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemPlatformtypeOperOper) {
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
      oper: dataThunderSystemPlatformtypeOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemPlatformtypeOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemPlatformtypeOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
