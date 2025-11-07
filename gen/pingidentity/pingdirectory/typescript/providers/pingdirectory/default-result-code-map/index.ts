// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultResultCodeMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the result code that should be returned if a bind attempt fails because the user's account is locked as a result of too many failed authentication attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map#bind_account_locked_result_code DefaultResultCodeMap#bind_account_locked_result_code}
  */
  readonly bindAccountLockedResultCode?: number;
  /**
  * Specifies the result code that should be returned if a password-based bind attempt fails because the target user entry does not have a password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map#bind_missing_password_result_code DefaultResultCodeMap#bind_missing_password_result_code}
  */
  readonly bindMissingPasswordResultCode?: number;
  /**
  * Specifies the result code that should be returned if a bind attempt fails because the target user entry does not exist in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map#bind_missing_user_result_code DefaultResultCodeMap#bind_missing_user_result_code}
  */
  readonly bindMissingUserResultCode?: number;
  /**
  * A description for this Result Code Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map#description DefaultResultCodeMap#description}
  */
  readonly description?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map#name DefaultResultCodeMap#name}
  */
  readonly name: string;
  /**
  * Specifies the result code that should be returned if a generic error occurs within the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map#server_error_result_code DefaultResultCodeMap#server_error_result_code}
  */
  readonly serverErrorResultCode?: number;
}
export interface DefaultResultCodeMapRequiredActions {
}

export function defaultResultCodeMapRequiredActionsToTerraform(struct?: DefaultResultCodeMapRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultResultCodeMapRequiredActionsToHclTerraform(struct?: DefaultResultCodeMapRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultResultCodeMapRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultResultCodeMapRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultResultCodeMapRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultResultCodeMapRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultResultCodeMapRequiredActionsOutputReference {
    return new DefaultResultCodeMapRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map pingdirectory_default_result_code_map}
*/
export class DefaultResultCodeMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_result_code_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultResultCodeMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultResultCodeMap to import
  * @param importFromId The id of the existing DefaultResultCodeMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultResultCodeMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_result_code_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_result_code_map pingdirectory_default_result_code_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultResultCodeMapConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultResultCodeMapConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_result_code_map',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindAccountLockedResultCode = config.bindAccountLockedResultCode;
    this._bindMissingPasswordResultCode = config.bindMissingPasswordResultCode;
    this._bindMissingUserResultCode = config.bindMissingUserResultCode;
    this._description = config.description;
    this._name = config.name;
    this._serverErrorResultCode = config.serverErrorResultCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_account_locked_result_code - computed: true, optional: true, required: false
  private _bindAccountLockedResultCode?: number; 
  public get bindAccountLockedResultCode() {
    return this.getNumberAttribute('bind_account_locked_result_code');
  }
  public set bindAccountLockedResultCode(value: number) {
    this._bindAccountLockedResultCode = value;
  }
  public resetBindAccountLockedResultCode() {
    this._bindAccountLockedResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAccountLockedResultCodeInput() {
    return this._bindAccountLockedResultCode;
  }

  // bind_missing_password_result_code - computed: true, optional: true, required: false
  private _bindMissingPasswordResultCode?: number; 
  public get bindMissingPasswordResultCode() {
    return this.getNumberAttribute('bind_missing_password_result_code');
  }
  public set bindMissingPasswordResultCode(value: number) {
    this._bindMissingPasswordResultCode = value;
  }
  public resetBindMissingPasswordResultCode() {
    this._bindMissingPasswordResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindMissingPasswordResultCodeInput() {
    return this._bindMissingPasswordResultCode;
  }

  // bind_missing_user_result_code - computed: true, optional: true, required: false
  private _bindMissingUserResultCode?: number; 
  public get bindMissingUserResultCode() {
    return this.getNumberAttribute('bind_missing_user_result_code');
  }
  public set bindMissingUserResultCode(value: number) {
    this._bindMissingUserResultCode = value;
  }
  public resetBindMissingUserResultCode() {
    this._bindMissingUserResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindMissingUserResultCodeInput() {
    return this._bindMissingUserResultCode;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultResultCodeMapRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // server_error_result_code - computed: true, optional: true, required: false
  private _serverErrorResultCode?: number; 
  public get serverErrorResultCode() {
    return this.getNumberAttribute('server_error_result_code');
  }
  public set serverErrorResultCode(value: number) {
    this._serverErrorResultCode = value;
  }
  public resetServerErrorResultCode() {
    this._serverErrorResultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrorResultCodeInput() {
    return this._serverErrorResultCode;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bind_account_locked_result_code: cdktf.numberToTerraform(this._bindAccountLockedResultCode),
      bind_missing_password_result_code: cdktf.numberToTerraform(this._bindMissingPasswordResultCode),
      bind_missing_user_result_code: cdktf.numberToTerraform(this._bindMissingUserResultCode),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      server_error_result_code: cdktf.numberToTerraform(this._serverErrorResultCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bind_account_locked_result_code: {
        value: cdktf.numberToHclTerraform(this._bindAccountLockedResultCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bind_missing_password_result_code: {
        value: cdktf.numberToHclTerraform(this._bindMissingPasswordResultCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bind_missing_user_result_code: {
        value: cdktf.numberToHclTerraform(this._bindMissingUserResultCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_error_result_code: {
        value: cdktf.numberToHclTerraform(this._serverErrorResultCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
