// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/license_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/license_device#id LicenseDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/license_device#parameters LicenseDevice#parameters}
  */
  readonly parameters: LicenseDeviceParameters;
}
export interface LicenseDeviceItem {
}

export function licenseDeviceItemToTerraform(struct?: LicenseDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function licenseDeviceItemToHclTerraform(struct?: LicenseDeviceItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LicenseDeviceItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LicenseDeviceItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseDeviceItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active_smart_account - computed: true, optional: false, required: false
  public get isActiveSmartAccount() {
    return this.getStringAttribute('is_active_smart_account');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class LicenseDeviceItemList extends cdktf.ComplexList {

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
  public get(index: number): LicenseDeviceItemOutputReference {
    return new LicenseDeviceItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicenseDeviceParameters {
  /**
  * Comma separated device ids
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/license_device#device_uuids LicenseDevice#device_uuids}
  */
  readonly deviceUuids?: string[];
  /**
  * smart_account_id path parameter. Id of smart account
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/license_device#smart_account_id LicenseDevice#smart_account_id}
  */
  readonly smartAccountId: string;
  /**
  * virtual_account_name path parameter. Name of target virtual account
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/license_device#virtual_account_name LicenseDevice#virtual_account_name}
  */
  readonly virtualAccountName: string;
}

export function licenseDeviceParametersToTerraform(struct?: LicenseDeviceParametersOutputReference | LicenseDeviceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceUuids),
    smart_account_id: cdktf.stringToTerraform(struct!.smartAccountId),
    virtual_account_name: cdktf.stringToTerraform(struct!.virtualAccountName),
  }
}


export function licenseDeviceParametersToHclTerraform(struct?: LicenseDeviceParametersOutputReference | LicenseDeviceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    smart_account_id: {
      value: cdktf.stringToHclTerraform(struct!.smartAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_account_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseDeviceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LicenseDeviceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceUuids = this._deviceUuids;
    }
    if (this._smartAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartAccountId = this._smartAccountId;
    }
    if (this._virtualAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualAccountName = this._virtualAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseDeviceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceUuids = undefined;
      this._smartAccountId = undefined;
      this._virtualAccountName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceUuids = value.deviceUuids;
      this._smartAccountId = value.smartAccountId;
      this._virtualAccountName = value.virtualAccountName;
    }
  }

  // device_uuids - computed: false, optional: true, required: false
  private _deviceUuids?: string[]; 
  public get deviceUuids() {
    return this.getListAttribute('device_uuids');
  }
  public set deviceUuids(value: string[]) {
    this._deviceUuids = value;
  }
  public resetDeviceUuids() {
    this._deviceUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUuidsInput() {
    return this._deviceUuids;
  }

  // smart_account_id - computed: false, optional: false, required: true
  private _smartAccountId?: string; 
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }
  public set smartAccountId(value: string) {
    this._smartAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // virtual_account_name - computed: false, optional: false, required: true
  private _virtualAccountName?: string; 
  public get virtualAccountName() {
    return this.getStringAttribute('virtual_account_name');
  }
  public set virtualAccountName(value: string) {
    this._virtualAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAccountNameInput() {
    return this._virtualAccountName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/license_device dnacenter_license_device}
*/
export class LicenseDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_license_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseDevice to import
  * @param importFromId The id of the existing LicenseDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/license_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_license_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/license_device dnacenter_license_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_license_device',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new LicenseDeviceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new LicenseDeviceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: LicenseDeviceParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: licenseDeviceParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: licenseDeviceParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseDeviceParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
