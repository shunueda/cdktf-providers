// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_delete_reprovision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessProvisionSsidDeleteReprovisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_delete_reprovision#id WirelessProvisionSsidDeleteReprovision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_delete_reprovision#parameters WirelessProvisionSsidDeleteReprovision#parameters}
  */
  readonly parameters: WirelessProvisionSsidDeleteReprovisionParameters;
}
export interface WirelessProvisionSsidDeleteReprovisionItem {
}

export function wirelessProvisionSsidDeleteReprovisionItemToTerraform(struct?: WirelessProvisionSsidDeleteReprovisionItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function wirelessProvisionSsidDeleteReprovisionItemToHclTerraform(struct?: WirelessProvisionSsidDeleteReprovisionItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WirelessProvisionSsidDeleteReprovisionItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessProvisionSsidDeleteReprovisionItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionSsidDeleteReprovisionItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // execution_status_url - computed: true, optional: false, required: false
  public get executionStatusUrl() {
    return this.getStringAttribute('execution_status_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class WirelessProvisionSsidDeleteReprovisionItemList extends cdktf.ComplexList {

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
  public get(index: number): WirelessProvisionSsidDeleteReprovisionItemOutputReference {
    return new WirelessProvisionSsidDeleteReprovisionItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelessProvisionSsidDeleteReprovisionParameters {
  /**
  * managedAPLocations path parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_delete_reprovision#managed_aplocations WirelessProvisionSsidDeleteReprovision#managed_aplocations}
  */
  readonly managedAplocations: string;
  /**
  * Device Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_delete_reprovision#persistbapioutput WirelessProvisionSsidDeleteReprovision#persistbapioutput}
  */
  readonly persistbapioutput?: string;
  /**
  * ssidName path parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_delete_reprovision#ssid_name WirelessProvisionSsidDeleteReprovision#ssid_name}
  */
  readonly ssidName: string;
}

export function wirelessProvisionSsidDeleteReprovisionParametersToTerraform(struct?: WirelessProvisionSsidDeleteReprovisionParametersOutputReference | WirelessProvisionSsidDeleteReprovisionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_aplocations: cdktf.stringToTerraform(struct!.managedAplocations),
    persistbapioutput: cdktf.stringToTerraform(struct!.persistbapioutput),
    ssid_name: cdktf.stringToTerraform(struct!.ssidName),
  }
}


export function wirelessProvisionSsidDeleteReprovisionParametersToHclTerraform(struct?: WirelessProvisionSsidDeleteReprovisionParametersOutputReference | WirelessProvisionSsidDeleteReprovisionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_aplocations: {
      value: cdktf.stringToHclTerraform(struct!.managedAplocations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistbapioutput: {
      value: cdktf.stringToHclTerraform(struct!.persistbapioutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssid_name: {
      value: cdktf.stringToHclTerraform(struct!.ssidName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessProvisionSsidDeleteReprovisionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WirelessProvisionSsidDeleteReprovisionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedAplocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedAplocations = this._managedAplocations;
    }
    if (this._persistbapioutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistbapioutput = this._persistbapioutput;
    }
    if (this._ssidName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidName = this._ssidName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessProvisionSsidDeleteReprovisionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedAplocations = undefined;
      this._persistbapioutput = undefined;
      this._ssidName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedAplocations = value.managedAplocations;
      this._persistbapioutput = value.persistbapioutput;
      this._ssidName = value.ssidName;
    }
  }

  // managed_aplocations - computed: false, optional: false, required: true
  private _managedAplocations?: string; 
  public get managedAplocations() {
    return this.getStringAttribute('managed_aplocations');
  }
  public set managedAplocations(value: string) {
    this._managedAplocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAplocationsInput() {
    return this._managedAplocations;
  }

  // persistbapioutput - computed: false, optional: true, required: false
  private _persistbapioutput?: string; 
  public get persistbapioutput() {
    return this.getStringAttribute('persistbapioutput');
  }
  public set persistbapioutput(value: string) {
    this._persistbapioutput = value;
  }
  public resetPersistbapioutput() {
    this._persistbapioutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistbapioutputInput() {
    return this._persistbapioutput;
  }

  // ssid_name - computed: false, optional: false, required: true
  private _ssidName?: string; 
  public get ssidName() {
    return this.getStringAttribute('ssid_name');
  }
  public set ssidName(value: string) {
    this._ssidName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidNameInput() {
    return this._ssidName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_delete_reprovision dnacenter_wireless_provision_ssid_delete_reprovision}
*/
export class WirelessProvisionSsidDeleteReprovision extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_wireless_provision_ssid_delete_reprovision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessProvisionSsidDeleteReprovision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessProvisionSsidDeleteReprovision to import
  * @param importFromId The id of the existing WirelessProvisionSsidDeleteReprovision that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_delete_reprovision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessProvisionSsidDeleteReprovision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_wireless_provision_ssid_delete_reprovision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/wireless_provision_ssid_delete_reprovision dnacenter_wireless_provision_ssid_delete_reprovision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessProvisionSsidDeleteReprovisionConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessProvisionSsidDeleteReprovisionConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_wireless_provision_ssid_delete_reprovision',
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
  private _item = new WirelessProvisionSsidDeleteReprovisionItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new WirelessProvisionSsidDeleteReprovisionParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: WirelessProvisionSsidDeleteReprovisionParameters) {
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
      parameters: wirelessProvisionSsidDeleteReprovisionParametersToTerraform(this._parameters.internalValue),
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
        value: wirelessProvisionSsidDeleteReprovisionParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessProvisionSsidDeleteReprovisionParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
