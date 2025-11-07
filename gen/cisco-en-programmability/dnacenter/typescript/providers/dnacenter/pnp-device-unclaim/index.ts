// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_unclaim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnpDeviceUnclaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_unclaim#id PnpDeviceUnclaim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_unclaim#parameters PnpDeviceUnclaim#parameters}
  */
  readonly parameters: PnpDeviceUnclaimParameters;
}
export interface PnpDeviceUnclaimItem {
}

export function pnpDeviceUnclaimItemToTerraform(struct?: PnpDeviceUnclaimItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceUnclaimItemToHclTerraform(struct?: PnpDeviceUnclaimItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceUnclaimItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceUnclaimItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceUnclaimItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_array_response - computed: true, optional: false, required: false
  public get jsonArrayResponse() {
    return this.getListAttribute('json_array_response');
  }

  // json_response - computed: true, optional: false, required: false
  public get jsonResponse() {
    return this.getStringAttribute('json_response');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
}

export class PnpDeviceUnclaimItemList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceUnclaimItemOutputReference {
    return new PnpDeviceUnclaimItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceUnclaimParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_unclaim#device_id_list PnpDeviceUnclaim#device_id_list}
  */
  readonly deviceIdList?: string[];
}

export function pnpDeviceUnclaimParametersToTerraform(struct?: PnpDeviceUnclaimParametersOutputReference | PnpDeviceUnclaimParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceIdList),
  }
}


export function pnpDeviceUnclaimParametersToHclTerraform(struct?: PnpDeviceUnclaimParametersOutputReference | PnpDeviceUnclaimParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceIdList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceUnclaimParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpDeviceUnclaimParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceIdList !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdList = this._deviceIdList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceUnclaimParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceIdList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceIdList = value.deviceIdList;
    }
  }

  // device_id_list - computed: true, optional: true, required: false
  private _deviceIdList?: string[]; 
  public get deviceIdList() {
    return this.getListAttribute('device_id_list');
  }
  public set deviceIdList(value: string[]) {
    this._deviceIdList = value;
  }
  public resetDeviceIdList() {
    this._deviceIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdListInput() {
    return this._deviceIdList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_unclaim dnacenter_pnp_device_unclaim}
*/
export class PnpDeviceUnclaim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_device_unclaim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnpDeviceUnclaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnpDeviceUnclaim to import
  * @param importFromId The id of the existing PnpDeviceUnclaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_unclaim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnpDeviceUnclaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_device_unclaim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_unclaim dnacenter_pnp_device_unclaim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnpDeviceUnclaimConfig
  */
  public constructor(scope: Construct, id: string, config: PnpDeviceUnclaimConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_pnp_device_unclaim',
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
  private _item = new PnpDeviceUnclaimItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new PnpDeviceUnclaimParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PnpDeviceUnclaimParameters) {
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
      parameters: pnpDeviceUnclaimParametersToTerraform(this._parameters.internalValue),
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
        value: pnpDeviceUnclaimParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PnpDeviceUnclaimParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
