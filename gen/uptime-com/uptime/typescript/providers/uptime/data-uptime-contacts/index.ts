// https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/contacts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimeContactsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataUptimeContactsContacts {
}

export function dataUptimeContactsContactsToTerraform(struct?: DataUptimeContactsContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeContactsContactsToHclTerraform(struct?: DataUptimeContactsContacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeContactsContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUptimeContactsContacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeContactsContacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_list - computed: true, optional: false, required: false
  public get emailList() {
    return this.getListAttribute('email_list');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // integrations - computed: true, optional: false, required: false
  public get integrations() {
    return this.getListAttribute('integrations');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // phonecall_list - computed: true, optional: false, required: false
  public get phonecallList() {
    return this.getListAttribute('phonecall_list');
  }

  // push_notification_profiles - computed: true, optional: false, required: false
  public get pushNotificationProfiles() {
    return this.getListAttribute('push_notification_profiles');
  }

  // sms_list - computed: true, optional: false, required: false
  public get smsList() {
    return this.getListAttribute('sms_list');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataUptimeContactsContactsList extends cdktf.ComplexList {

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
  public get(index: number): DataUptimeContactsContactsOutputReference {
    return new DataUptimeContactsContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/contacts uptime_contacts}
*/
export class DataUptimeContacts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_contacts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimeContacts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimeContacts to import
  * @param importFromId The id of the existing DataUptimeContacts that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/contacts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimeContacts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_contacts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/contacts uptime_contacts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimeContactsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataUptimeContactsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'uptime_contacts',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.1',
        providerVersionConstraint: '2.18.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contacts - computed: true, optional: false, required: false
  private _contacts = new DataUptimeContactsContactsList(this, "contacts", false);
  public get contacts() {
    return this._contacts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
