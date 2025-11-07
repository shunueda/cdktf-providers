// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper#id DataThunderAamResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper#oper DataThunderAamResourceUsageOper#oper}
  */
  readonly oper?: DataThunderAamResourceUsageOperOper;
}
export interface DataThunderAamResourceUsageOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper#idp_limit_current DataThunderAamResourceUsageOper#idp_limit_current}
  */
  readonly idpLimitCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper#idp_limit_default DataThunderAamResourceUsageOper#idp_limit_default}
  */
  readonly idpLimitDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper#idp_limit_maximum DataThunderAamResourceUsageOper#idp_limit_maximum}
  */
  readonly idpLimitMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper#idp_limit_minimum DataThunderAamResourceUsageOper#idp_limit_minimum}
  */
  readonly idpLimitMinimum?: number;
}

export function dataThunderAamResourceUsageOperOperToTerraform(struct?: DataThunderAamResourceUsageOperOperOutputReference | DataThunderAamResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_limit_current: cdktf.numberToTerraform(struct!.idpLimitCurrent),
    idp_limit_default: cdktf.numberToTerraform(struct!.idpLimitDefault),
    idp_limit_maximum: cdktf.numberToTerraform(struct!.idpLimitMaximum),
    idp_limit_minimum: cdktf.numberToTerraform(struct!.idpLimitMinimum),
  }
}


export function dataThunderAamResourceUsageOperOperToHclTerraform(struct?: DataThunderAamResourceUsageOperOperOutputReference | DataThunderAamResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_limit_current: {
      value: cdktf.numberToHclTerraform(struct!.idpLimitCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idp_limit_default: {
      value: cdktf.numberToHclTerraform(struct!.idpLimitDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idp_limit_maximum: {
      value: cdktf.numberToHclTerraform(struct!.idpLimitMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idp_limit_minimum: {
      value: cdktf.numberToHclTerraform(struct!.idpLimitMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamResourceUsageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpLimitCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpLimitCurrent = this._idpLimitCurrent;
    }
    if (this._idpLimitDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpLimitDefault = this._idpLimitDefault;
    }
    if (this._idpLimitMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpLimitMaximum = this._idpLimitMaximum;
    }
    if (this._idpLimitMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpLimitMinimum = this._idpLimitMinimum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idpLimitCurrent = undefined;
      this._idpLimitDefault = undefined;
      this._idpLimitMaximum = undefined;
      this._idpLimitMinimum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idpLimitCurrent = value.idpLimitCurrent;
      this._idpLimitDefault = value.idpLimitDefault;
      this._idpLimitMaximum = value.idpLimitMaximum;
      this._idpLimitMinimum = value.idpLimitMinimum;
    }
  }

  // idp_limit_current - computed: false, optional: true, required: false
  private _idpLimitCurrent?: number; 
  public get idpLimitCurrent() {
    return this.getNumberAttribute('idp_limit_current');
  }
  public set idpLimitCurrent(value: number) {
    this._idpLimitCurrent = value;
  }
  public resetIdpLimitCurrent() {
    this._idpLimitCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpLimitCurrentInput() {
    return this._idpLimitCurrent;
  }

  // idp_limit_default - computed: false, optional: true, required: false
  private _idpLimitDefault?: number; 
  public get idpLimitDefault() {
    return this.getNumberAttribute('idp_limit_default');
  }
  public set idpLimitDefault(value: number) {
    this._idpLimitDefault = value;
  }
  public resetIdpLimitDefault() {
    this._idpLimitDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpLimitDefaultInput() {
    return this._idpLimitDefault;
  }

  // idp_limit_maximum - computed: false, optional: true, required: false
  private _idpLimitMaximum?: number; 
  public get idpLimitMaximum() {
    return this.getNumberAttribute('idp_limit_maximum');
  }
  public set idpLimitMaximum(value: number) {
    this._idpLimitMaximum = value;
  }
  public resetIdpLimitMaximum() {
    this._idpLimitMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpLimitMaximumInput() {
    return this._idpLimitMaximum;
  }

  // idp_limit_minimum - computed: false, optional: true, required: false
  private _idpLimitMinimum?: number; 
  public get idpLimitMinimum() {
    return this.getNumberAttribute('idp_limit_minimum');
  }
  public set idpLimitMinimum(value: number) {
    this._idpLimitMinimum = value;
  }
  public resetIdpLimitMinimum() {
    this._idpLimitMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpLimitMinimumInput() {
    return this._idpLimitMinimum;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper thunder_aam_resource_usage_oper}
*/
export class DataThunderAamResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderAamResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_resource_usage_oper thunder_aam_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_resource_usage_oper',
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
  private _oper = new DataThunderAamResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamResourceUsageOperOper) {
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
      oper: dataThunderAamResourceUsageOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderAamResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
