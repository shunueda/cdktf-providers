// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_allowed_apis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiIamAllowedApisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Includes account a user can switch to, false by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_allowed_apis#allow_account_switch DataAkamaiIamAllowedApis#allow_account_switch}
  */
  readonly allowAccountSwitch?: boolean | cdktf.IResolvable;
  /**
  * Filters data by client type, either USER_CLIENT, SERVICE_ACCOUNT, or default CLIENT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_allowed_apis#client_type DataAkamaiIamAllowedApis#client_type}
  */
  readonly clientType?: string;
  /**
  * Unique username for each user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_allowed_apis#username DataAkamaiIamAllowedApis#username}
  */
  readonly username: string;
}
export interface DataAkamaiIamAllowedApisAllowedApis {
}

export function dataAkamaiIamAllowedApisAllowedApisToTerraform(struct?: DataAkamaiIamAllowedApisAllowedApis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiIamAllowedApisAllowedApisToHclTerraform(struct?: DataAkamaiIamAllowedApisAllowedApis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiIamAllowedApisAllowedApisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiIamAllowedApisAllowedApis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiIamAllowedApisAllowedApis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_levels - computed: true, optional: false, required: false
  public get accessLevels() {
    return this.getListAttribute('access_levels');
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getNumberAttribute('api_id');
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // documentation_url - computed: true, optional: false, required: false
  public get documentationUrl() {
    return this.getStringAttribute('documentation_url');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // has_access - computed: true, optional: false, required: false
  public get hasAccess() {
    return this.getBooleanAttribute('has_access');
  }

  // service_provider_id - computed: true, optional: false, required: false
  public get serviceProviderId() {
    return this.getNumberAttribute('service_provider_id');
  }
}

export class DataAkamaiIamAllowedApisAllowedApisList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiIamAllowedApisAllowedApisOutputReference {
    return new DataAkamaiIamAllowedApisAllowedApisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_allowed_apis akamai_iam_allowed_apis}
*/
export class DataAkamaiIamAllowedApis extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_iam_allowed_apis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiIamAllowedApis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiIamAllowedApis to import
  * @param importFromId The id of the existing DataAkamaiIamAllowedApis that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_allowed_apis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiIamAllowedApis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_iam_allowed_apis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/iam_allowed_apis akamai_iam_allowed_apis} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiIamAllowedApisConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiIamAllowedApisConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_iam_allowed_apis',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAccountSwitch = config.allowAccountSwitch;
    this._clientType = config.clientType;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_account_switch - computed: false, optional: true, required: false
  private _allowAccountSwitch?: boolean | cdktf.IResolvable; 
  public get allowAccountSwitch() {
    return this.getBooleanAttribute('allow_account_switch');
  }
  public set allowAccountSwitch(value: boolean | cdktf.IResolvable) {
    this._allowAccountSwitch = value;
  }
  public resetAllowAccountSwitch() {
    this._allowAccountSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccountSwitchInput() {
    return this._allowAccountSwitch;
  }

  // allowed_apis - computed: true, optional: false, required: false
  private _allowedApis = new DataAkamaiIamAllowedApisAllowedApisList(this, "allowed_apis", false);
  public get allowedApis() {
    return this._allowedApis;
  }

  // client_type - computed: false, optional: true, required: false
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  public resetClientType() {
    this._clientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_account_switch: cdktf.booleanToTerraform(this._allowAccountSwitch),
      client_type: cdktf.stringToTerraform(this._clientType),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_account_switch: {
        value: cdktf.booleanToHclTerraform(this._allowAccountSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_type: {
        value: cdktf.stringToHclTerraform(this._clientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
