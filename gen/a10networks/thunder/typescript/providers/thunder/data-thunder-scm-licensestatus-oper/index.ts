// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScmLicensestatusOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#id DataThunderScmLicensestatusOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#oper DataThunderScmLicensestatusOper#oper}
  */
  readonly oper?: DataThunderScmLicensestatusOperOper;
}
export interface DataThunderScmLicensestatusOperOperLicenseListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#license_name DataThunderScmLicensestatusOper#license_name}
  */
  readonly licenseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#license_type DataThunderScmLicensestatusOper#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#org_name DataThunderScmLicensestatusOper#org_name}
  */
  readonly orgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#status DataThunderScmLicensestatusOper#status}
  */
  readonly status?: string;
}

export function dataThunderScmLicensestatusOperOperLicenseListStructToTerraform(struct?: DataThunderScmLicensestatusOperOperLicenseListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_name: cdktf.stringToTerraform(struct!.licenseName),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    org_name: cdktf.stringToTerraform(struct!.orgName),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderScmLicensestatusOperOperLicenseListStructToHclTerraform(struct?: DataThunderScmLicensestatusOperOperLicenseListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_name: {
      value: cdktf.stringToHclTerraform(struct!.licenseName),
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
    org_name: {
      value: cdktf.stringToHclTerraform(struct!.orgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScmLicensestatusOperOperLicenseListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderScmLicensestatusOperOperLicenseListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseName = this._licenseName;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._orgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgName = this._orgName;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScmLicensestatusOperOperLicenseListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._licenseName = undefined;
      this._licenseType = undefined;
      this._orgName = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._licenseName = value.licenseName;
      this._licenseType = value.licenseType;
      this._orgName = value.orgName;
      this._status = value.status;
    }
  }

  // license_name - computed: false, optional: true, required: false
  private _licenseName?: string; 
  public get licenseName() {
    return this.getStringAttribute('license_name');
  }
  public set licenseName(value: string) {
    this._licenseName = value;
  }
  public resetLicenseName() {
    this._licenseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseNameInput() {
    return this._licenseName;
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

  // org_name - computed: false, optional: true, required: false
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  public resetOrgName() {
    this._orgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataThunderScmLicensestatusOperOperLicenseListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScmLicensestatusOperOperLicenseListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderScmLicensestatusOperOperLicenseListStructOutputReference {
    return new DataThunderScmLicensestatusOperOperLicenseListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScmLicensestatusOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#primary_org_email DataThunderScmLicensestatusOper#primary_org_email}
  */
  readonly primaryOrgEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#primary_org_id DataThunderScmLicensestatusOper#primary_org_id}
  */
  readonly primaryOrgId?: string;
  /**
  * license_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#license_list DataThunderScmLicensestatusOper#license_list}
  */
  readonly licenseList?: DataThunderScmLicensestatusOperOperLicenseListStruct[] | cdktf.IResolvable;
}

export function dataThunderScmLicensestatusOperOperToTerraform(struct?: DataThunderScmLicensestatusOperOperOutputReference | DataThunderScmLicensestatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_org_email: cdktf.stringToTerraform(struct!.primaryOrgEmail),
    primary_org_id: cdktf.stringToTerraform(struct!.primaryOrgId),
    license_list: cdktf.listMapper(dataThunderScmLicensestatusOperOperLicenseListStructToTerraform, true)(struct!.licenseList),
  }
}


export function dataThunderScmLicensestatusOperOperToHclTerraform(struct?: DataThunderScmLicensestatusOperOperOutputReference | DataThunderScmLicensestatusOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_org_email: {
      value: cdktf.stringToHclTerraform(struct!.primaryOrgEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_org_id: {
      value: cdktf.stringToHclTerraform(struct!.primaryOrgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_list: {
      value: cdktf.listMapperHcl(dataThunderScmLicensestatusOperOperLicenseListStructToHclTerraform, true)(struct!.licenseList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScmLicensestatusOperOperLicenseListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScmLicensestatusOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScmLicensestatusOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryOrgEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryOrgEmail = this._primaryOrgEmail;
    }
    if (this._primaryOrgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryOrgId = this._primaryOrgId;
    }
    if (this._licenseList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseList = this._licenseList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScmLicensestatusOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryOrgEmail = undefined;
      this._primaryOrgId = undefined;
      this._licenseList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryOrgEmail = value.primaryOrgEmail;
      this._primaryOrgId = value.primaryOrgId;
      this._licenseList.internalValue = value.licenseList;
    }
  }

  // primary_org_email - computed: false, optional: true, required: false
  private _primaryOrgEmail?: string; 
  public get primaryOrgEmail() {
    return this.getStringAttribute('primary_org_email');
  }
  public set primaryOrgEmail(value: string) {
    this._primaryOrgEmail = value;
  }
  public resetPrimaryOrgEmail() {
    this._primaryOrgEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryOrgEmailInput() {
    return this._primaryOrgEmail;
  }

  // primary_org_id - computed: false, optional: true, required: false
  private _primaryOrgId?: string; 
  public get primaryOrgId() {
    return this.getStringAttribute('primary_org_id');
  }
  public set primaryOrgId(value: string) {
    this._primaryOrgId = value;
  }
  public resetPrimaryOrgId() {
    this._primaryOrgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryOrgIdInput() {
    return this._primaryOrgId;
  }

  // license_list - computed: false, optional: true, required: false
  private _licenseList = new DataThunderScmLicensestatusOperOperLicenseListStructList(this, "license_list", false);
  public get licenseList() {
    return this._licenseList;
  }
  public putLicenseList(value: DataThunderScmLicensestatusOperOperLicenseListStruct[] | cdktf.IResolvable) {
    this._licenseList.internalValue = value;
  }
  public resetLicenseList() {
    this._licenseList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseListInput() {
    return this._licenseList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper thunder_scm_licensestatus_oper}
*/
export class DataThunderScmLicensestatusOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scm_licensestatus_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScmLicensestatusOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScmLicensestatusOper to import
  * @param importFromId The id of the existing DataThunderScmLicensestatusOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScmLicensestatusOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scm_licensestatus_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scm_licensestatus_oper thunder_scm_licensestatus_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScmLicensestatusOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScmLicensestatusOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scm_licensestatus_oper',
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
  private _oper = new DataThunderScmLicensestatusOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScmLicensestatusOperOper) {
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
      oper: dataThunderScmLicensestatusOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScmLicensestatusOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScmLicensestatusOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
