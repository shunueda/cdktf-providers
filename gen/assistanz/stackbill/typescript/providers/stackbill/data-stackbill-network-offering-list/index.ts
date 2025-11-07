// https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/network_offering_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackbillNetworkOfferingListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/network_offering_list#id DataStackbillNetworkOfferingList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/network_offering_list#uuid DataStackbillNetworkOfferingList#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/network_offering_list#zone_uuid DataStackbillNetworkOfferingList#zone_uuid}
  */
  readonly zoneUuid: string;
}
export interface DataStackbillNetworkOfferingListNetworkofferings {
}

export function dataStackbillNetworkOfferingListNetworkofferingsToTerraform(struct?: DataStackbillNetworkOfferingListNetworkofferings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackbillNetworkOfferingListNetworkofferingsToHclTerraform(struct?: DataStackbillNetworkOfferingListNetworkofferings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackbillNetworkOfferingListNetworkofferingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackbillNetworkOfferingListNetworkofferings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackbillNetworkOfferingListNetworkofferings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability - computed: true, optional: false, required: false
  public get availability() {
    return this.getStringAttribute('availability');
  }

  // display_text - computed: true, optional: false, required: false
  public get displayText() {
    return this.getStringAttribute('display_text');
  }

  // guest_ip_type - computed: true, optional: false, required: false
  public get guestIpType() {
    return this.getStringAttribute('guest_ip_type');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_trial_offering - computed: true, optional: false, required: false
  public get networkTrialOffering() {
    return this.getBooleanAttribute('network_trial_offering');
  }

  // offer_name - computed: true, optional: false, required: false
  public get offerName() {
    return this.getStringAttribute('offer_name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataStackbillNetworkOfferingListNetworkofferingsList extends cdktf.ComplexList {

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
  public get(index: number): DataStackbillNetworkOfferingListNetworkofferingsOutputReference {
    return new DataStackbillNetworkOfferingListNetworkofferingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/network_offering_list stackbill_network_offering_list}
*/
export class DataStackbillNetworkOfferingList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackbill_network_offering_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackbillNetworkOfferingList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackbillNetworkOfferingList to import
  * @param importFromId The id of the existing DataStackbillNetworkOfferingList that should be imported. Refer to the {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/network_offering_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackbillNetworkOfferingList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackbill_network_offering_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/assistanz/stackbill/0.1.0/docs/data-sources/network_offering_list stackbill_network_offering_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackbillNetworkOfferingListConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackbillNetworkOfferingListConfig) {
    super(scope, id, {
      terraformResourceType: 'stackbill_network_offering_list',
      terraformGeneratorMetadata: {
        providerName: 'stackbill',
        providerVersion: '0.1.0'
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
    this._zoneUuid = config.zoneUuid;
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

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // networkofferings - computed: true, optional: false, required: false
  private _networkofferings = new DataStackbillNetworkOfferingListNetworkofferingsList(this, "networkofferings", false);
  public get networkofferings() {
    return this._networkofferings;
  }

  // uuid - computed: false, optional: true, required: false
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

  // zone_uuid - computed: false, optional: false, required: true
  private _zoneUuid?: string; 
  public get zoneUuid() {
    return this.getStringAttribute('zone_uuid');
  }
  public set zoneUuid(value: string) {
    this._zoneUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUuidInput() {
    return this._zoneUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone_uuid: cdktf.stringToTerraform(this._zoneUuid),
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
      zone_uuid: {
        value: cdktf.stringToHclTerraform(this._zoneUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
