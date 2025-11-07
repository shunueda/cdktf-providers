// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScmLicenseinfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#id DataThunderScmLicenseinfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#oper DataThunderScmLicenseinfoOper#oper}
  */
  readonly oper?: DataThunderScmLicenseinfoOperOper;
}
export interface DataThunderScmLicenseinfoOperOperModuleListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#expiry DataThunderScmLicenseinfoOper#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#module DataThunderScmLicenseinfoOper#module}
  */
  readonly module?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#notes DataThunderScmLicenseinfoOper#notes}
  */
  readonly notes?: string;
}

export function dataThunderScmLicenseinfoOperOperModuleListStructToTerraform(struct?: DataThunderScmLicenseinfoOperOperModuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiry: cdktf.stringToTerraform(struct!.expiry),
    module: cdktf.stringToTerraform(struct!.module),
    notes: cdktf.stringToTerraform(struct!.notes),
  }
}


export function dataThunderScmLicenseinfoOperOperModuleListStructToHclTerraform(struct?: DataThunderScmLicenseinfoOperOperModuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiry: {
      value: cdktf.stringToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module: {
      value: cdktf.stringToHclTerraform(struct!.module),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScmLicenseinfoOperOperModuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderScmLicenseinfoOperOperModuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._module !== undefined) {
      hasAnyValues = true;
      internalValueResult.module = this._module;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScmLicenseinfoOperOperModuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiry = undefined;
      this._module = undefined;
      this._notes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiry = value.expiry;
      this._module = value.module;
      this._notes = value.notes;
    }
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // module - computed: false, optional: true, required: false
  private _module?: string; 
  public get module() {
    return this.getStringAttribute('module');
  }
  public set module(value: string) {
    this._module = value;
  }
  public resetModule() {
    this._module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }
}

export class DataThunderScmLicenseinfoOperOperModuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderScmLicenseinfoOperOperModuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderScmLicenseinfoOperOperModuleListStructOutputReference {
    return new DataThunderScmLicenseinfoOperOperModuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderScmLicenseinfoOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#billing_serial DataThunderScmLicenseinfoOper#billing_serial}
  */
  readonly billingSerial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#burst DataThunderScmLicenseinfoOper#burst}
  */
  readonly burst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#glm_ping_interval DataThunderScmLicenseinfoOper#glm_ping_interval}
  */
  readonly glmPingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#hw_serialno DataThunderScmLicenseinfoOper#hw_serialno}
  */
  readonly hwSerialno?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#platform DataThunderScmLicenseinfoOper#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#product DataThunderScmLicenseinfoOper#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#product_desc DataThunderScmLicenseinfoOper#product_desc}
  */
  readonly productDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#token DataThunderScmLicenseinfoOper#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#usb_uuid DataThunderScmLicenseinfoOper#usb_uuid}
  */
  readonly usbUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#uuid DataThunderScmLicenseinfoOper#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#version DataThunderScmLicenseinfoOper#version}
  */
  readonly version?: string;
  /**
  * module_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#module_list DataThunderScmLicenseinfoOper#module_list}
  */
  readonly moduleList?: DataThunderScmLicenseinfoOperOperModuleListStruct[] | cdktf.IResolvable;
}

export function dataThunderScmLicenseinfoOperOperToTerraform(struct?: DataThunderScmLicenseinfoOperOperOutputReference | DataThunderScmLicenseinfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    billing_serial: cdktf.stringToTerraform(struct!.billingSerial),
    burst: cdktf.stringToTerraform(struct!.burst),
    glm_ping_interval: cdktf.numberToTerraform(struct!.glmPingInterval),
    hw_serialno: cdktf.stringToTerraform(struct!.hwSerialno),
    platform: cdktf.stringToTerraform(struct!.platform),
    product: cdktf.stringToTerraform(struct!.product),
    product_desc: cdktf.stringToTerraform(struct!.productDesc),
    token: cdktf.stringToTerraform(struct!.token),
    usb_uuid: cdktf.stringToTerraform(struct!.usbUuid),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    version: cdktf.stringToTerraform(struct!.version),
    module_list: cdktf.listMapper(dataThunderScmLicenseinfoOperOperModuleListStructToTerraform, true)(struct!.moduleList),
  }
}


export function dataThunderScmLicenseinfoOperOperToHclTerraform(struct?: DataThunderScmLicenseinfoOperOperOutputReference | DataThunderScmLicenseinfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    billing_serial: {
      value: cdktf.stringToHclTerraform(struct!.billingSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    burst: {
      value: cdktf.stringToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glm_ping_interval: {
      value: cdktf.numberToHclTerraform(struct!.glmPingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_serialno: {
      value: cdktf.stringToHclTerraform(struct!.hwSerialno),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_desc: {
      value: cdktf.stringToHclTerraform(struct!.productDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usb_uuid: {
      value: cdktf.stringToHclTerraform(struct!.usbUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_list: {
      value: cdktf.listMapperHcl(dataThunderScmLicenseinfoOperOperModuleListStructToHclTerraform, true)(struct!.moduleList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderScmLicenseinfoOperOperModuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScmLicenseinfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScmLicenseinfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._billingSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingSerial = this._billingSerial;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._glmPingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.glmPingInterval = this._glmPingInterval;
    }
    if (this._hwSerialno !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwSerialno = this._hwSerialno;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._productDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.productDesc = this._productDesc;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._usbUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.usbUuid = this._usbUuid;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._moduleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleList = this._moduleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScmLicenseinfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._billingSerial = undefined;
      this._burst = undefined;
      this._glmPingInterval = undefined;
      this._hwSerialno = undefined;
      this._platform = undefined;
      this._product = undefined;
      this._productDesc = undefined;
      this._token = undefined;
      this._usbUuid = undefined;
      this._uuid = undefined;
      this._version = undefined;
      this._moduleList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._billingSerial = value.billingSerial;
      this._burst = value.burst;
      this._glmPingInterval = value.glmPingInterval;
      this._hwSerialno = value.hwSerialno;
      this._platform = value.platform;
      this._product = value.product;
      this._productDesc = value.productDesc;
      this._token = value.token;
      this._usbUuid = value.usbUuid;
      this._uuid = value.uuid;
      this._version = value.version;
      this._moduleList.internalValue = value.moduleList;
    }
  }

  // billing_serial - computed: false, optional: true, required: false
  private _billingSerial?: string; 
  public get billingSerial() {
    return this.getStringAttribute('billing_serial');
  }
  public set billingSerial(value: string) {
    this._billingSerial = value;
  }
  public resetBillingSerial() {
    this._billingSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingSerialInput() {
    return this._billingSerial;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: string; 
  public get burst() {
    return this.getStringAttribute('burst');
  }
  public set burst(value: string) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // glm_ping_interval - computed: false, optional: true, required: false
  private _glmPingInterval?: number; 
  public get glmPingInterval() {
    return this.getNumberAttribute('glm_ping_interval');
  }
  public set glmPingInterval(value: number) {
    this._glmPingInterval = value;
  }
  public resetGlmPingInterval() {
    this._glmPingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glmPingIntervalInput() {
    return this._glmPingInterval;
  }

  // hw_serialno - computed: false, optional: true, required: false
  private _hwSerialno?: string; 
  public get hwSerialno() {
    return this.getStringAttribute('hw_serialno');
  }
  public set hwSerialno(value: string) {
    this._hwSerialno = value;
  }
  public resetHwSerialno() {
    this._hwSerialno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwSerialnoInput() {
    return this._hwSerialno;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // product_desc - computed: false, optional: true, required: false
  private _productDesc?: string; 
  public get productDesc() {
    return this.getStringAttribute('product_desc');
  }
  public set productDesc(value: string) {
    this._productDesc = value;
  }
  public resetProductDesc() {
    this._productDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productDescInput() {
    return this._productDesc;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // usb_uuid - computed: false, optional: true, required: false
  private _usbUuid?: string; 
  public get usbUuid() {
    return this.getStringAttribute('usb_uuid');
  }
  public set usbUuid(value: string) {
    this._usbUuid = value;
  }
  public resetUsbUuid() {
    this._usbUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbUuidInput() {
    return this._usbUuid;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // module_list - computed: false, optional: true, required: false
  private _moduleList = new DataThunderScmLicenseinfoOperOperModuleListStructList(this, "module_list", false);
  public get moduleList() {
    return this._moduleList;
  }
  public putModuleList(value: DataThunderScmLicenseinfoOperOperModuleListStruct[] | cdktf.IResolvable) {
    this._moduleList.internalValue = value;
  }
  public resetModuleList() {
    this._moduleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleListInput() {
    return this._moduleList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper thunder_scm_licenseinfo_oper}
*/
export class DataThunderScmLicenseinfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scm_licenseinfo_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScmLicenseinfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScmLicenseinfoOper to import
  * @param importFromId The id of the existing DataThunderScmLicenseinfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScmLicenseinfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scm_licenseinfo_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/scm_licenseinfo_oper thunder_scm_licenseinfo_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScmLicenseinfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScmLicenseinfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scm_licenseinfo_oper',
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
  private _oper = new DataThunderScmLicenseinfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScmLicenseinfoOperOper) {
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
      oper: dataThunderScmLicenseinfoOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderScmLicenseinfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScmLicenseinfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
