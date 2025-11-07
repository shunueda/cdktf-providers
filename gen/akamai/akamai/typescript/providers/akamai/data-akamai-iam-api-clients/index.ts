// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_api_clients
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiIamApiClientsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAkamaiIamApiClientsApiClientsActions {
}

export function dataAkamaiIamApiClientsApiClientsActionsToTerraform(struct?: DataAkamaiIamApiClientsApiClientsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientsApiClientsActionsToHclTerraform(struct?: DataAkamaiIamApiClientsApiClientsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientsApiClientsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiIamApiClientsApiClientsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientsApiClientsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deactivate_all - computed: true, optional: false, required: false
  public get deactivateAll() {
    return this.getBooleanAttribute('deactivate_all');
  }

  // delete - computed: true, optional: false, required: false
  public get delete() {
    return this.getBooleanAttribute('delete');
  }

  // edit - computed: true, optional: false, required: false
  public get edit() {
    return this.getBooleanAttribute('edit');
  }

  // lock - computed: true, optional: false, required: false
  public get lock() {
    return this.getBooleanAttribute('lock');
  }

  // transfer - computed: true, optional: false, required: false
  public get transfer() {
    return this.getBooleanAttribute('transfer');
  }

  // unlock - computed: true, optional: false, required: false
  public get unlock() {
    return this.getBooleanAttribute('unlock');
  }
}
export interface DataAkamaiIamApiClientsApiClients {
}

export function dataAkamaiIamApiClientsApiClientsToTerraform(struct?: DataAkamaiIamApiClientsApiClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamApiClientsApiClientsToHclTerraform(struct?: DataAkamaiIamApiClientsApiClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamApiClientsApiClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiIamApiClientsApiClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamApiClientsApiClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataAkamaiIamApiClientsApiClientsActionsOutputReference(this, "actions");
  public get actions() {
    return this._actions;
  }

  // active_credential_count - computed: true, optional: false, required: false
  public get activeCredentialCount() {
    return this.getNumberAttribute('active_credential_count');
  }

  // allow_account_switch - computed: true, optional: false, required: false
  public get allowAccountSwitch() {
    return this.getBooleanAttribute('allow_account_switch');
  }

  // authorized_users - computed: true, optional: false, required: false
  public get authorizedUsers() {
    return this.getListAttribute('authorized_users');
  }

  // can_auto_create_credential - computed: true, optional: false, required: false
  public get canAutoCreateCredential() {
    return this.getBooleanAttribute('can_auto_create_credential');
  }

  // client_description - computed: true, optional: false, required: false
  public get clientDescription() {
    return this.getStringAttribute('client_description');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // client_type - computed: true, optional: false, required: false
  public get clientType() {
    return this.getStringAttribute('client_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // is_locked - computed: true, optional: false, required: false
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }

  // notification_emails - computed: true, optional: false, required: false
  public get notificationEmails() {
    return this.getListAttribute('notification_emails');
  }

  // service_consumer_token - computed: true, optional: false, required: false
  public get serviceConsumerToken() {
    return this.getStringAttribute('service_consumer_token');
  }
}

export class DataAkamaiIamApiClientsApiClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiIamApiClientsApiClientsOutputReference {
    return new DataAkamaiIamApiClientsApiClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_api_clients akamai_iam_api_clients}
*/
export class DataAkamaiIamApiClients extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_iam_api_clients";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiIamApiClients resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiIamApiClients to import
  * @param importFromId The id of the existing DataAkamaiIamApiClients that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_api_clients#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiIamApiClients to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_iam_api_clients", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_api_clients akamai_iam_api_clients} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiIamApiClientsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiIamApiClientsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_iam_api_clients',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
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

  // api_clients - computed: true, optional: false, required: false
  private _apiClients = new DataAkamaiIamApiClientsApiClientsList(this, "api_clients", false);
  public get apiClients() {
    return this._apiClients;
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
