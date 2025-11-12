// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryLicenseOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#id DataThunderWebCategoryLicenseOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#oper DataThunderWebCategoryLicenseOper#oper}
  */
  readonly oper?: DataThunderWebCategoryLicenseOperOper;
}
export interface DataThunderWebCategoryLicenseOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#grace_period DataThunderWebCategoryLicenseOper#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#is_grace DataThunderWebCategoryLicenseOper#is_grace}
  */
  readonly isGrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#license_expiry DataThunderWebCategoryLicenseOper#license_expiry}
  */
  readonly licenseExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#license_status DataThunderWebCategoryLicenseOper#license_status}
  */
  readonly licenseStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#license_type DataThunderWebCategoryLicenseOper#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#module_status DataThunderWebCategoryLicenseOper#module_status}
  */
  readonly moduleStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#remaining_period DataThunderWebCategoryLicenseOper#remaining_period}
  */
  readonly remainingPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#serial_number DataThunderWebCategoryLicenseOper#serial_number}
  */
  readonly serialNumber?: string;
}

export function dataThunderWebCategoryLicenseOperOperToTerraform(struct?: DataThunderWebCategoryLicenseOperOperOutputReference | DataThunderWebCategoryLicenseOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
    is_grace: cdktf.stringToTerraform(struct!.isGrace),
    license_expiry: cdktf.stringToTerraform(struct!.licenseExpiry),
    license_status: cdktf.stringToTerraform(struct!.licenseStatus),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    module_status: cdktf.stringToTerraform(struct!.moduleStatus),
    remaining_period: cdktf.stringToTerraform(struct!.remainingPeriod),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
  }
}


export function dataThunderWebCategoryLicenseOperOperToHclTerraform(struct?: DataThunderWebCategoryLicenseOperOperOutputReference | DataThunderWebCategoryLicenseOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grace_period: {
      value: cdktf.stringToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_grace: {
      value: cdktf.stringToHclTerraform(struct!.isGrace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_expiry: {
      value: cdktf.stringToHclTerraform(struct!.licenseExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_status: {
      value: cdktf.stringToHclTerraform(struct!.licenseStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_status: {
      value: cdktf.stringToHclTerraform(struct!.moduleStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remaining_period: {
      value: cdktf.stringToHclTerraform(struct!.remainingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryLicenseOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryLicenseOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._isGrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGrace = this._isGrace;
    }
    if (this._licenseExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseExpiry = this._licenseExpiry;
    }
    if (this._licenseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseStatus = this._licenseStatus;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._moduleStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleStatus = this._moduleStatus;
    }
    if (this._remainingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainingPeriod = this._remainingPeriod;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryLicenseOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gracePeriod = undefined;
      this._isGrace = undefined;
      this._licenseExpiry = undefined;
      this._licenseStatus = undefined;
      this._licenseType = undefined;
      this._moduleStatus = undefined;
      this._remainingPeriod = undefined;
      this._serialNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gracePeriod = value.gracePeriod;
      this._isGrace = value.isGrace;
      this._licenseExpiry = value.licenseExpiry;
      this._licenseStatus = value.licenseStatus;
      this._licenseType = value.licenseType;
      this._moduleStatus = value.moduleStatus;
      this._remainingPeriod = value.remainingPeriod;
      this._serialNumber = value.serialNumber;
    }
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // is_grace - computed: false, optional: true, required: false
  private _isGrace?: string; 
  public get isGrace() {
    return this.getStringAttribute('is_grace');
  }
  public set isGrace(value: string) {
    this._isGrace = value;
  }
  public resetIsGrace() {
    this._isGrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGraceInput() {
    return this._isGrace;
  }

  // license_expiry - computed: false, optional: true, required: false
  private _licenseExpiry?: string; 
  public get licenseExpiry() {
    return this.getStringAttribute('license_expiry');
  }
  public set licenseExpiry(value: string) {
    this._licenseExpiry = value;
  }
  public resetLicenseExpiry() {
    this._licenseExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseExpiryInput() {
    return this._licenseExpiry;
  }

  // license_status - computed: false, optional: true, required: false
  private _licenseStatus?: string; 
  public get licenseStatus() {
    return this.getStringAttribute('license_status');
  }
  public set licenseStatus(value: string) {
    this._licenseStatus = value;
  }
  public resetLicenseStatus() {
    this._licenseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseStatusInput() {
    return this._licenseStatus;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // module_status - computed: false, optional: true, required: false
  private _moduleStatus?: string; 
  public get moduleStatus() {
    return this.getStringAttribute('module_status');
  }
  public set moduleStatus(value: string) {
    this._moduleStatus = value;
  }
  public resetModuleStatus() {
    this._moduleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleStatusInput() {
    return this._moduleStatus;
  }

  // remaining_period - computed: false, optional: true, required: false
  private _remainingPeriod?: string; 
  public get remainingPeriod() {
    return this.getStringAttribute('remaining_period');
  }
  public set remainingPeriod(value: string) {
    this._remainingPeriod = value;
  }
  public resetRemainingPeriod() {
    this._remainingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingPeriodInput() {
    return this._remainingPeriod;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper thunder_web_category_license_oper}
*/
export class DataThunderWebCategoryLicenseOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_license_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryLicenseOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryLicenseOper to import
  * @param importFromId The id of the existing DataThunderWebCategoryLicenseOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryLicenseOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_license_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_license_oper thunder_web_category_license_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryLicenseOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryLicenseOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_license_oper',
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
  private _oper = new DataThunderWebCategoryLicenseOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryLicenseOperOper) {
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
      oper: dataThunderWebCategoryLicenseOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderWebCategoryLicenseOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryLicenseOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
